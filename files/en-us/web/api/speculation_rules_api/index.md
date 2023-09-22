---
title: Speculation Rules API
slug: Web/API/Speculation_Rules_API
page-type: web-api-overview
status:
  - experimental
browser-compat: html.elements.script.type.speculationrules
---

{{SeeCompatTable}}{{DefaultAPISidebar("Speculation Rules API")}}

The **Speculation Rules API** is designed to improve performance for future navigations, and so makes sense for multi-page applications (MPAs) rather than single-page applications (SPAs). It is designed to supercede the widely-available [`<link rel="prefetch">`](/en-US/docs/Web/HTML/Attributes/rel/prefetch) and the Chrome-only deprecated [`<link rel="prerender">`](/en-US/docs/Web/HTML/Attributes/rel/prerender) for providing prefetching and prerendering of future navigations. It provides many improvements over these technologies, along with a more expressive, configurable syntax for specifying which documents should be prefetched or prerendered.

## Concepts and usage

Speculation rules are specified inside [`<script type="speculationrules"> ... </script>`](/en-US/docs/Web/HTML/Element/script/type/speculationrules). The rules are specified as a JSON structure.

For example:

```html
<script type="speculationrules">
  {
    "prerender": [
      {
        "source": "list",
        "urls": ["extra.html", "extra2.html"]
      }
    ],
    "prefetch": [
      {
        "source": "list",
        "urls": ["next.html", "next2.html"],
        "requires": ["anonymous-client-ip-when-cross-origin"],
        "referrer_policy": "no-referrer"
      }
    ]
  }
</script>
```

You specify a different array to contain the rules for each speculative loading type (for example `"prerender"` or `"prefetch"`). Each rule is contained in an object that specifies for example a list of resources to be fetched, plus options such as an explicit [`Referrer-Policy`](/en-US/docs/Web/HTTP/Headers/Referrer-Policy) setting for each rule.

See [`<script type="speculationrules">`](/en-US/docs/Web/HTML/Element/script/type/speculationrules) for a full explanation of the available syntax.

> **Note:** As speculation rules use a `<script>` element, they need to be explicitly allowed in the [`Content-Security-Policy`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy) [`script-src`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src) directive if the site includes it. This is done by adding the `"inline-speculation-rules"` value along with a hash- or nonce-source.

### Using prefetching

Including `prefetch` rules inside `<script type=speculationrules> ... </script>` will cause supporting browsers to download the response body of the referenced pages, but none of the subresources referenced by the page. The results are kept in a per-document in-memory cache. When a prefetched page is navigated to, it will render much more quickly than if it were not prefetched.

If you prefetch something the user doesn't navigate to, it is generally a waste of resources, although the result may populate the HTTP cache if headers allow. That said, the upfront cost of a prefetch is much smaller than the upfront cost of a prerender, so you are encouraged to adopt prefetching broadly, for example prefetching all of the significant pages on your site, provided they are safe to prefetch (see [Unsafe speculative loading conditions](#unsafe_speculative_loading_conditions) for more details).

Same-site and cross-site prefetches will work, but cross-site prefetches are limited, for security purposes — they will currently only work if the user has no cookies set for the destination site. In the future an opt-in will be provided via the [`Supports-Loading-Mode`](/en-US/docs/Web/HTTP/Headers/Supports-Loading-Mode) header, but this was not implemented at the time of writing.

For browsers that support it, speculation rules prefetch should be preferred over older prefetch mechanisms, namely [`<link rel="prefetch">`](/en-US/docs/Web/HTML/Attributes/rel/prefetch) and {{domxref("fetch()")}} with a `priority: "low"` option set on it. Because we know that speculation rules prefetch is for navigations, not general resource prefetching:

- It can be used for cross-site navigations, whereas `<link rel="prefetch">` cannot.
- It doesn't get blocked by [Cache-Control](/en-US/docs/Web/HTTP/Headers/Cache-Control) settings, whereas `<link rel="prefetch">` often does.

In addition, speculation rules prefetch:

- Automatically lowers the priority when needed (`fetch()` doesn't).
- Is respectful of the user's configuration, for example it doesn't happen when in the user's device is in Battery Saver or Data Saver mode.
- Stores the prefetched resources in a per-document in-memory cache as opposed to the HTTP cache, which may result in slightly faster prefetching.

### Using prerendering

Including `prerender` rules inside `<script type=speculationrules> ... </script>` will cause supporting browsers to render and load the content into an invisible tab, stored in a per-document in-memory cache. This includes loading all subresources, running all JavaScript, and even loading subresources and performing data fetches started by JavaScript.

Future navigations to that page will be instant. The browser activates the invisible tab instead of carrying out the usual navigation process, instantly replacing the old foreground page with the prerendered page. If a page is activated before it has fully prerendered, then its current state is "foregrounded" and continues to load, which means you can still see a significant performance improvement.

Prerendering uses additional memory and network bandwidth. If you prerender something the user doesn't navigate to, it is a significant waste of resources, although the result may populate the HTTP cache if headers allow. The upfront cost of a prerender is much larger than the upfront cost of a prefetch, and there are more conditions that could make content unsafe to prerender (see [Unsafe speculative loading conditions](#unsafe_speculative_loading_conditions) for more details). As a result, you are encouraged to adopt prerendering more sparingly, carefully considering cases where there is a high likelihood of the page being navigated to, and you think the user experience benefit is worth the extra work.

Prerendering is restricted to same-site documents. Cross-origin, same-site prerendering is possible — it requires the destination origin to opt-in using the [`Supports-Loading-Mode`](/en-US/docs/Web/HTTP/Headers/Supports-Loading-Mode) header with a value of `credentialed-prerender`.

For browsers that support it, speculation rules prerender should be preferred over older prerender mechanisms, namely [`<link rel="prerender">`](/en-US/docs/Web/HTML/Attributes/rel/prerender):

- `<link rel="prerender">` is Chrome-specific and was never standardized, and the Chrome engineering team are in the proess of sunsetting it.
- It loads subresources loaded via JavaScript, whereas `<link rel="prerender">` doesn't.
- It doesn't get blocked by [Cache-Control](/en-US/docs/Web/HTTP/Headers/Cache-Control) settings, whereas `<link rel="prerender">` often does.
- Speculation rules prerender should be treated as a hint and a progressive enhancement. Unlike `<link rel="prerender">`, it is a speculative hint and the browser may choose not to act upon the hint based on user settings, current memory usage, or other heuristics.

### Speculation rules API feature detection

You can feature detect the Speculation Rules API using the following snippet:

```js
if (
  HTMLScriptElement.supports &&
  HTMLScriptElement.supports("speculationrules")
) {
  console.log("Your browser supports the Speculation Rules API.");
}
```

For example, you might want to insert speculation rules for prefetching in supporting browsers, but use an older technology such as `<link rel="prefetch">` in others:

```js
if (
  HTMLScriptElement.supports &&
  HTMLScriptElement.supports("speculationrules")
) {
  const specScript = document.createElement("script");
  specScript.type = "speculationrules";
  specRules = {
    prefetch: [
      {
        source: "list",
        urls: ["/next.html"],
      },
    ],
  };
  specScript.textContent = JSON.stringify(specRules);
  document.body.append(specScript);
} else {
  const linkElem = document.createElement("link");
  linkElem.rel = "prefetch";
  linkElem.href = "/next.html";
  document.head.append(linkElem);
}
```

## Detecting prefetched and prerendered pages

Prefetched and prerendered page requests are sent with the [Sec-Purpose](/en-US/docs/Web/HTTP/Headers/Sec-Purpose) request header, for example:

```http
Sec-Purpose: prefetch;prerender
```

Servers can respond based on this header, for example to log prerender requests, return different content, or even prevent the prerender from happening. If a non-success response code is returned (not 200 or 304), then the page will not be prerendered. This is the easiest way to ensure that a page will not be prefetched/prerendered, although it is usually a better approach to allow the prefetch/prerender, but delay any actions that should only happen then the page is actually viewed, using JavaScript.

### JavaScript prefetch detection

When a page is prefetched, its {{domxref("PerformanceResourceTiming.deliveryType")}} entry will return a value of `"navigational-prefetch"`. For example, you could use a {{domxref("PerformanceObserver")}} to run a function when performance entries of type `"navigational-prefetch"` are received:

```js
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    if (entry.deliveryType === "navigational-prefetch") {
      respondToPrefetch(); // Author-defined function
    }
  }
});

observer.observe({ type: "resource", buffered: true });
```

### JavaScript prerender detection

To delay an activity while the page is prerendering, you can use the {{domxref("Document.prerendering")}} property — this will return `true` during page prerendering. You could for example wait until a page is prerendered before running some analytics:

```js
const intervalID = setInterval(() => {
  if (!document.prerendering) {
    initAnalytics(); // Author-defined function
    clearInterval(intervalID);
  } else {
    // Still prerendering
  }
}, 50);
```

When a prerendered document is activated, {{domxref("PerformanceNavigationTiming.activationStart")}} is set to a non-zero time representing the time between when the prerender was started and the document was actually activated. The following function can check for prerendering _and_ prerendered pages:

```js
function pagePrerendered() {
  return (
    document.prerendering ||
    self.performance?.getEntriesByType?.("navigation")[0]?.activationStart > 0
  );
}
```

When the prerendered page is activated by the user viewing the page, the {{domxref("Document.prerenderingchange_event", "prerenderingchange")}} event will fire. This can be used to enable activities that previously would be started by default on page load but which you wish to delay until the page is actually viewed by the user.

```js
document.addEventListener("prerenderingchange", initializeView);

function initializeView() {
  // Author-defined function
}
```

## Unsafe speculative loading conditions

This section covers conditions to look out for, under which prefetching and/or prerendering are **unsafe**. This means that prefetching/prerendering pages that exhibit these conditions may require mitigations in your code, or need to be avoided altogether.

### Unsafe prefetching

As mentioned earlier, we recommend adopting prefetching broadly, as the risk to reward ratio is fairly low — the potential for resource wastage is minimal, and the performance improvements can be significant. However, you need to make sure prefetched pages do not cause problems with the flow of your application.

When a prefetch is done, the browser downloads the response body of the referenced page via a single GET request, which the user may navigate to at a future time. Problems can arise specifically when the URL of the request performs a server-initiated side effect that you don't want to happen until the URL is actually navigated to (which can also involve setting a cookie).

For example:

- Sign-out URLs.
- Language switching URLs.
- "Add to cart" URLs.
- Sign-in flow URLs where the server causes an SMS to be sent, for example as a one-time password (OTP).
- URLs that increment a user's usage allowance numbers, such as consuming their monthly free article allowance or starting the timer on their monthly minutes.
- URLs that initiate server-side ad conversion tracking.

Such issues can be mitigated by watching for the [`Sec-Purpose: prefetch`](/en-US/docs/Web/HTTP/Headers/Sec-Purpose) header on the server as the requests come in, and then running specific code to handle prefetch cases. When the page is actually navigated to, you can detect the prefetched nature using JavaScript and initiate the deferred functionality then. If the side effect only occurs when JavaScript runs, then prefetching is safe, since the JavaScript will not run until activation.

> **Note:** You can find more details about the detection code in the [Detecting prefetch and prerender](#detecting_prefetch_and_prerender) section.

It is also potentially risky to prefetch a document whose server-rendered contents will change due to actions the user can take on the current page. This could include, for example, flash sale pages or movie theater seat maps. Test such cases carefully, and mitigate such issues by updating content once the page is loaded. See [Server-rendered varying state](#server-rendered_varying_state) for more details about these cases.

> **Note:** Browsers will cache prefetched pages for a short time (Chrome for example caches them for for 5 minutes) before discarding them, so in any case, your users might see content that is up to 5 minutes out of date.

One final tip is to audit the URLs listed as disallowed in your [`Robots.txt`](/en-US/docs/Glossary/Robots.txt) file — normally URLs included here point to pages that can only be accessed by authenticated users, and therefore should not be included in search engine results. Many of these will be fine, but it can be a good place to find URLs unsafe for prefetching (i.e. they exhibit the conditions described above).

### Unsafe prerendering

Prerendering is more risky to adopt than prefetching and should therefore be done more sparingly in cases where it is worth it. There are more unsafe conditions to watch out for with prerendering, and the risk to reward ratio is somewhat higher. Although the performance improvements can be larger, the potential for resource wastage is also larger.

When a prerender is done, the browser GETs the URL and renders and loads the content into an invisible tab. This includes running the content's JavaScript and loading all subresources, including those fetched by JavaScript. Content can be potentially unsafe to prerender if any of the following conditions are observed:

- The URL is [unsafe to prefetch](#unsafe_prefetching). Read the previous section first if you haven't already, and understand that these conditions also equally apply to unsafe prerendering. Put another way, documents that are safe to prerender must also be safe to prefetch.
- The page's JavaScript modifies clent-side storage (for example [Web Storage](/en-US/docs/Web/API/Web_Storage_API) or [IndexedDB](/en-US/docs/Web/API/IndexedDB_API)) on load in a way that may cause the page to be out of date once the user actually views the page.
- The page runs JavaScript or loads images that cause side effects such as sending analytics, recording ad impressions, or otherwise modifies the state of the application as if the user had already interacted with it. Again, this can cause the page to be out of date once the user actually views it, or affect the flow of the application. See [Server-rendered varying state](#server-rendered_varying_state) for more details about such use cases.

To mitigate such problems, you can use the following techniques:

- Watch for the [`Sec-Purpose: prerender`](/en-US/docs/Web/HTTP/Headers/Sec-Purpose) header on the server as the requests come in, and then run specific code to handle prerender cases.
- Use the {{domxref("Document.prerenderingchange_event", "prerenderingchange")}} event to detect when the prerendered page is actually activated and run code as a result. This is useful in two cases:
  - Deferring code that may cause problems if it is run before the page is viewed. For example, you may want to wait until after activation to update client-side storage or modify server-side state using JavaScript. This can avoid situations when the UI and the application state become out of sync with one another, for example a shopping cart showing no items even though the user has added some.
  - If the above is not possible, then you could still rerun code after the page is activated to bring the app up-to-date again. For example, a highly-dynamic flash sale page might rely on content updates coming in from a third-party library. If you can't delay the updates, you can always get fresh updates once the user views the page. Prerendered pages can be updated in real time using the [Broadcast Channel API](/en-US/docs/Web/API/Broadcast_Channel_API). This guarantees that the user will see up-to-date content after prerendering activation, across multiple non-prerendered tabs if needed.
- Manage your third-party analytics scripts carefully — if possible, use scripts that are prerendering-aware (for example use the {{domxref("Document.prerendering")}} property to defer running on prerendering pages) such as Google Analytics or NewRelic.
  - Note that cross-origin {{htmlelement("iframe")}} loads are delayed while prerendering, therefore most other third-party widgets such as adtech are actually safe to use while prerendering.
  - For third-party scripts that are not prerendering-aware, avoid loading them until after activation using the {{domxref("Document.prerenderingchange_event", "prerenderingchange")}} event, as mentioned earlier.

### Server-rendered varying state

There are two main types of server-rendered state to be concerned with: **outdated state**, and **user-specific state**. This can cause cause both unsafe prefetching and prerendering.

- Outdated state: Consider the example of a server-rendered list of blog comments, which may become out of date between the blog post being prerendered, and it being viewed. This might be particularly problematic if the current page is an admin panel where the user is deleting spam comments. If the user then navigates to the blog post, they might be confused as to why they can see the spam comments they just deleted.
- User-specific state: Consider the example of tracking sign-in state via a cookie. Problems can arise like the following:
  - The user visits `https://site.example/a` in tab 1 and `https://site.example/b` in tab 2, while logged out.
  - `https://site.example/b` prerenders `https://site.example/c`. It will be prerendered in a logged-out state.
  - The user signs in to `https://site.example` in tab 1.
  - The user switches to tab 2 and clicks the link to `https://site.example/c`, which activates the prerendered page.
  - Tab 2 displays a signed-out view of `https://site.example/c`, which confuses the user since they thought they were logged in.

User-specific state problems can occur for other user settings, for example language settings, dark-mode preferences, or adding items to a cart. They can also occur when only a single tab is involved:

- Let's say the user visits `https://site.example/product`.
- `https://site.example.com/product` prerenders `https://site.example.com/cart`. It prerenders with 0 items in the cart.
- The user clicks on the "Add to cart" buttons, which initiates a fetch request to add the item to the user's cart (with no page reload).
- The user clicks on the link to `https://site.example.com/cart`, which activates the prerendered page.
- The user sees an empty cart, even though they just added something to it.

The best mitigation for these cases is to perform client-side updates to the speculatively loaded pages. This means the user gets the benefit of the speculatively loaded content, which can be slightly out-of-date, then the state update can occur afterwards.

## Session history behavior for prerendered documents

Activating a prerendering/prerendered document behaves like any conventional navigation, for the end-user perspective. The activated document is displayed in the tab and appended to session history, and any existing forward history entries are pruned. Any navigations taking place within the prerendering browsing context _before_ activation do not affect the session history.

From the developer's perspective, a prerendering document can be thought of as having a **trivial session history** where only one entry — the current entry — exists. All navigations within the prerendering context are effectively replaced.

While API features that operate on session history (for example {{domxref("History")}} and {{domxref("Navigation")}}) can be called within prerendering documents, they only operate on the context's trivial session history. Consequently, prerendering documents do not take part in their referring page's joint session history. For example, they cannot navigate their referrer via {{domxref("History.back()")}}.

This design ensures that users get the expected experience when using the back button — i.e. that they are taken back to the last thing they saw. Once a prerendering document is activated, only a single session history entry gets appended to the joint session history, ignoring any previous navigations that happened within the prerendering browsing context. Going back one step in the joint session history — for example by pressing the back button — takes the user back to the referrer page.

## Platform features deferred or restricted during prerender

Because a prerendered page is opened in a hidden state, a number of APIs and other web platform features that cause potentially intrusive behaviors are not activated in this state, and are instead deferred until the page is activated or restricted altogether. In the small number of cases where this is not yet possible, the prerender is canceled.

### Asynchronous API defferal

The following asynchronous features' results are deferred in prerendered documents until they are activated:

- [Audio Output Devices API](/en-US/docs/Web/API/Audio_Output_Devices_API): {{domxref("MediaDevices.selectAudioOutput()")}}
- [Background Fetch API](/en-US/docs/Web/API/Background_Fetch_API): {{domxref("BackgroundFetchManager.fetch()")}}
- [Broadcast Channel API](/en-US/docs/Web/API/Broadcast_Channel_API): {{domxref("BroadcastChannel.postMessage()")}}
- [Credential Management API](/en-US/docs/Web/API/Credential_Management_API): {{domxref("CredentialsContainer.create()")}}, {{domxref("CredentialsContainer.get()")}}, {{domxref("CredentialsContainer.store()")}}
- [Encrypted Media Extensions API](/en-US/docs/Web/API/Encrypted_Media_Extensions_API): {{domxref("Navigator.requestMediaKeySystemAccess()")}}
- [Gamepad API](/en-US/docs/Web/API/Gamepad_API): {{domxref("Navigator.getGamepads()")}}, {{domxref("Window.gamepadconnected_event", "gamepadconnected")}} event, {{domxref("Window.gamepaddisconnected_event", "gamepaddisconnected")}} event
- [Geolocation API](/en-US/docs/Web/API/Geolocation_API): {{domxref("Geolocation.getCurrentPosition()")}}, {{domxref("Geolocation.watchPosition()")}}, {{domxref("Geolocation.clearWatch()")}}
- {{domxref("HTMLMediaElement")}} API: The playback position will not advance while the containing document is prerendering
- [Idle Detection API](/en-US/docs/Web/API/Idle_Detection_API): {{domxref("IdleDetector.start()")}}
- [Media Capture and Streams API](/en-US/docs/Web/API/Media_Capture_and_Streams_API): {{domxref("MediaDevices.getUserMedia()")}} (and the legacy {{domxref("Navigator.getUserMedia()")}} version), {{domxref("MediaDevices.enumerateDevices()")}}
- [Notifications API](/en-US/docs/Web/API/Notifications_API): {{domxref("Notification.Notification", "Notification()")}} constructor, {{domxref("Notification.requestPermission()")}}
- [Push API](/en-US/docs/Web/API/Push_API): {{domxref("PushManager.subscribe()")}}
- [Screen Orientation API](/en-US/docs/Web/API/Screen_Orientation_API): {{domxref("ScreenOrientation.lock()")}}, {{domxref("ScreenOrientation.unlock()")}}
- [Sensor APIs](/en-US/docs/Web/API/Sensor_APIs): {{domxref("Sensor.start()")}}
- [Service Worker API](/en-US/docs/Web/API/Service_Worker_API): {{domxref("ServiceWorker.postMessage()")}}, {{domxref("ServiceWorkerContainer.register()")}}, {{domxref("ServiceWorkerRegistration.update()")}}, {{domxref("ServiceWorkerRegistration.unregister()")}}
- [Storage API](/en-US/docs/Web/API/Storage_API): {{domxref("StorageManager.persist()")}}
- [Web Audio API](/en-US/docs/Web/API/Web_Audio_API): {{domxref("AudioContext")}}s are not allowed to start while the containing document is prerendering
- [Web Bluetooth API](/en-US/docs/Web/API/Web_Bluetooth_API): {{domxref("Bluetooth.getDevices()")}}, {{domxref("Bluetooth.requestDevice()")}}
- [WebHID API](/en-US/docs/Web/API/WebHID_API): {{domxref("HID.getDevices()")}}, {{domxref("HID.requestDevice()")}}
- [Web Locks API](/en-US/docs/Web/API/Web_Locks_API): {{domxref("LockManager.query()")}}, {{domxref("LockManager.request()")}}
- [Web MIDI API](/en-US/docs/Web/API/Web_MIDI_API): {{domxref("Navigator.requestMIDIAccess()")}}
- [Web NFC API](/en-US/docs/Web/API/Web_NFC_API): {{domxref("NDefReader.write()")}}, {{domxref("NDefReader.scan()")}}
- [Web Serial API](/en-US/docs/Web/API/Web_Serial_API): {{domxref("Serial.getPorts()")}}, {{domxref("Serial.requestPort()")}}
- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API): {{domxref("SpeechRecognition.abort()")}}, {{domxref("SpeechRecognition.start()")}}, {{domxref("SpeechRecognition.stop()")}}, {{domxref("SpeechSynthesis.cancel()")}}, {{domxref("SpeechSynthesis.pause()")}}, {{domxref("SpeechSynthesis.resume()")}}, {{domxref("SpeechSynthesis.speak()")}}
- [WebUSB API](/en-US/docs/Web/API/WebUSB_API): {{domxref("USB.getDevices()")}}, {{domxref("USB.requestDevice()")}}
- [WebXR Device API](/en-US/docs/Web/API/WebXR_Device_API): {{domxref("XRSystem.requestSession()")}}

### Implicitly restricted APIs

The following features will automatically fail or no-op in documents that are not activated.

APIs that require [transient activation](/en-US/docs/Glossary/Transient_activation) or [sticky activation](/en-US/docs/Glossary/Sticky_activation):

- Confirmation dialogs generated by the {{domxref("Window.beforeunload_event", "beforeunload")}} event
- The firing of any events in the [Clipboard API](/en-US/docs/Web/API/Clipboard_API).
- [File System API](/en-US/docs/Web/API/File_System_API): {{domxref("Window.showDirectoryPicker()")}}, {{domxref("Window.showOpenFilePicker()")}}, {{domxref("Window.showSaveFilePicker()")}}
- [Fullscreen API](/en-US/docs/Web/API/Fullscreen_API): {{domxref("Element.requestFullscreen()")}}
- [Idle Detection API](/en-US/docs/Web/API/Idle_Detection_API): {{domxref("IdleDetector.requestPermission()")}}
- [Keyboard API](/en-US/docs/Web/API/Keyboard_API): {{domxref("Keyboard.lock()")}} (which requires fullscreen)
- [Payment Request API](/en-US/docs/Web/API/Payment_Request_API): {{domxref("PaymentRequest.show()")}}
- [Presentation API](/en-US/docs/Web/API/Presentation_API): {{domxref("PresentationRequest.start()")}}
- [Pointer Lock API](/en-US/docs/Web/API/Pointer_Lock_API): {{domxref("Element.requestPointerLock()")}}
- [Screen Capture API](/en-US/docs/Web/API/Screen_Capture_API): {{domxref("MediaDevices.getDisplayMedia()")}}
- [Web Share API](/en-US/docs/Web/API/Web_Share_API): {{domxref("Navigator.share()")}}
- {{domxref("Window.open()")}}

APIs that require the containing document to be focused:

- [Clipboard API](/en-US/docs/Web/API/Clipboard_API): {{domxref("Clipboard.read()")}}, {{domxref("Clipboard.readText()")}}, {{domxref("Clipboard.write()")}}, {{domxref("Clipboard.writeText()")}}

APIs that require the containing document's {{domxref("Document.visibilityState")}} to be `"visible"`:

- [Picture-in-Picture API](/en-US/docs/Web/API/Picture-in-Picture_API): {{domxref("HTMLVideoElement.requestPictureInPicture()")}} (requires the containing document's visibility state to be `"visible", _or_ [transient activation](/en-US/docs/Glossary/Transient_activation))
- [Screen Wake Lock API](/en-US/docs/Web/API/Screen_Wake_Lock_API): {{domxref("WakeLock.request()")}}

### Other restricted features

- Download links, i.e. {{htmlelement("a")}} and {{htmlelement("area")}} elements with the `download` attribute.
  (for example, prompts)
- No cross site navigations: Any prerendering document that navigates to a different site will be immediately discarded before a request to that other site is sent,
- Restricted URLs: Prerendering documents cannot host non-HTTP(S) top-level URLs. In particular, they cannot host:
  - `javascript:` URLs
  - `data:` URLs
  - `blob:` URLs
  - `about:` URLs, including `about:blank` and `about:srcdoc`
- Session storage: {{domxref("Window.sessionStorage")}} can be used, but the behavior is very specific, to avoid breaking sites that expect only one page to access the tab's session storage at a time. A prerendered page therefore starts out with a clone of the tab's session storage state from when it was created. Upon activation, the prerendered page's storage clone is discarded, and the tab's main storage state is used instead. Pages that use session storage can use the {{domxref("Document.prerenderingchange_event", "prerenderingchange")}} event to detect when this storage swap occurs.
- {{domxref("Window.print()")}}
- Workers: Workers can be used, but their execution is deferred until the prerendered document is activated

## Interfaces

The Speculation Rules API does not define any interfaces of its own.

### Extensions to other interfaces

- {{domxref("Document.prerendering")}}
  - : A boolean property that returns `true` if the document is currently in the process of prerendering.
- {{domxref("Document.prerenderingchange_event", "prerenderingchange")}} event
  - : Fires when a prerendered page is activated (i.e. the user views the page).
- {{domxref("PerformanceNavigationTiming.activationStart")}}
  - : A number representing the time between when a document starts prerendering and when it is activated.
- {{domxref("PerformanceResourceTiming.deliveryType")}}, `"navigational-prefetch"` value
  - : Signals that the type of a performance entry is a prefetch.

## HTTP headers

- [`Content-Security-Policy`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy) `"inline-speculation-rules"` value
  - : Used to opt-in to allowing usage of `<script type="speculationrules">` to define speculation rules on the document being fetched.
- [`Supports-Loading-Mode`](/en-US/docs/Web/HTTP/Headers/Supports-Loading-Mode)
  - : Set by a destination origin to opt-in to using various higher-risk speculation rules modes, for example cross-origin, same-site prerendering requires a `Supports-Loading-Mode` value of `credentialed-prerender`.

## HTML features

- [`<script type="speculationrules"> ... </script>`](/en-US/docs/Web/HTML/Element/script/type/speculationrules)
  - : Used to define a set of prefetch and/or prerender speculation rules on the current document.

## Examples

You can find a [complete prerender demo here](https://prerender-demos.glitch.me/).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Prerender pages in Chrome for instant page navigations](https://developer.chrome.com/blog/prerender-pages/) on developer.chrome.com (2023)
- [Speculative loading](/en-US/docs/Web/Performance/Speculative_loading)

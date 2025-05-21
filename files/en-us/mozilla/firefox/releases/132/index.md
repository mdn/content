---
title: Firefox 132 for developers
slug: Mozilla/Firefox/Releases/132
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 132 that affect developers. Firefox 132 was released on [October 29, 2024](https://whattrainisitnow.com/release/?version=132).

## Changes for web developers

### HTML

No notable changes

### CSS

- The {{CSSXRef("text-emphasis-position")}} property now supports the `auto` value to bring it inline with {{CSSXRef("text-underline-position")}} ([Firefox bug 1919658](https://bugzil.la/1919658)).
- CSS now supports the [Nested declaration rule](/en-US/docs/Web/API/CSSNestedDeclarations#nested_declarations_rule), which means that nested CSS is now parsed in the correct order ([Firefox bug 1918408](https://bugzil.la/1918408)).

#### Removals

- The [`-moz-user-modify`](/en-US/docs/Web/CSS/user-modify) CSS property has been removed. This property has been deprecated in favor of the [`contenteditable`](/en-US/docs/Web/HTML/Reference/Global_attributes/contenteditable) global attribute. ([Firefox bug 1920118](https://bugzil.la/1920118)).

### JavaScript

- The [`(?ims-ims:...)`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Modifier) regular expression modifiers allow you to make changes to only take effect in a specific part of a regex pattern. ([Firefox bug 1913752](https://bugzil.la/1913752) & [Firefox bug 1899813](https://bugzil.la/1899813)).

### HTTP

- The [default/document value](/en-US/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values#default_values) of the HTTP {{httpheader("Accept")}} header was changed to `text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8`.
  This removes image MIME types that sometimes caused compatibility issues, and aligns with the fetch specification and Safari. ([Firefox bug 1917177](https://bugzil.la/1917177)).

#### Removals

- HTTP/2 Server Push is deactivated by default with the preference `network.http.http2.allow-push` now set to `false`.
  This feature is no longer supported by any other major browser, and the implementation may be completely removed in a future release. ([Firefox bug 1915848](https://bugzil.la/1915848)).

### Privacy

- All [third-party cookies](/en-US/docs/Web/Privacy/Guides/Third-party_cookies) are now blocked in [Strict Enhanced Tracking Protection](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop#w_strict-enhanced-tracking-protection). ([Firefox bug 1918037](https://bugzil.la/1918037)).

### APIs

- The {{domxref('WebGLRenderingContext.drawingBufferColorSpace', 'drawingBufferColorSpace')}} and {{domxref('WebGLRenderingContext.unpackColorSpace','unpackColorSpace')}} properties of the {{domxref('WebGLRenderingContext')}} and {{domxref('WebGL2RenderingContext')}} interfaces are now supported. These specify the color space of the WebGL drawing buffer, and the color space to convert to when importing textures, respectively. ([Firefox bug 1885491](https://bugzil.la/1885491), [Firefox bug 1885446](https://bugzil.la/1885446)).
- The {{domxref("Notification.silent")}} property is now supported, which controls whether system notifications should be silent. When `silent: true` is specified in the {{domxref("Notification.Notification", "Notification()")}} constructor, the resulting system notification is issued without accompanying sounds or vibrations, regardless of device settings ([Firefox bug 1809028](https://bugzil.la/1809028)).
- The `fetchpriority` attribute of the {{htmlelement("link")}}, {{htmlelement("script")}}, and {{htmlelement("img")}} elements, the `fetchPriority` property of the {{domxref("HTMLLinkElement")}}, {{domxref("HTMLScriptElement")}}, and {{domxref("HTMLImageElement")}} interfaces, the [`options.priority`](/en-US/docs/Web/API/RequestInit#priority) parameter passed to the [`Request()` constructor](/en-US/docs/Web/API/Request/Request), and the `fetchpriority` directive in the HTTP {{httpheader("Link")}} header, are now supported. These allow developers to provide a hint about the relative priority for fetching a particular resource compared to other resources of the same type, and can be used alongside other ways of setting the priority, such as preloading. ([Firefox bug 1854077](https://bugzil.la/1854077)).
- The {{domxref("CSSNestedDeclarations")}} interface and associated {{domxref("CSSNestedDeclarations.style")}} property are now supported ([Firefox bug 1918408](https://bugzil.la/1918408)).
- The `microphone` and `camera` [permissions](/en-US/docs/Web/API/Permissions_API) can now be used in the {{domxref("Permissions.query()")}} method to test whether access to the corresponding hardware has been granted, denied, or still requires user approval. ([Firefox bug 1609427](https://bugzil.la/1609427) and [Firefox bug 1915222](https://bugzil.la/1915222)).

#### Media, WebRTC, and Web Audio

- The {{domxref('HTMLVideoElement/requestVideoFrameCallback','requestVideoFrameCallback()')}} and {{domxref('HTMLVideoElement/cancelVideoFrameCallback','cancelVideoFrameCallback()')}} methods of the {{domxref('HTMLVideoElement')}} interface are now supported. The `requestVideoFrameCallback()` registers a callback function that runs when a new video frame is sent to the compositor. Developers can use this function to perform operations on each video frame, enabling more efficient painting to a canvas, video analysis, synchronization with external audio sources, and so on. The method returns a callback handle that can be passed to `cancelVideoFrameCallback()` in order to cancel the outstanding callback request. ([Firefox bug 1919367](https://bugzil.la/1919367), [Firefox bug 1800882](https://bugzil.la/1800882)).
- The {{domxref("MediaStreamTrack.getCapabilities()")}} method is now supported. This returns an object detailing the accepted values or value range for each constrainable property of the associated {{domxref("MediaStreamTrack")}} ([Firefox bug 1179084](https://bugzil.la/1179084)).

### WebDriver conformance (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Implemented several improvements to make WebDriver BiDi commands more reliable when used during navigation or with newly created tabs. Previously commands such as `browsingContext.setViewport` were likely to fail due to an `AbortError`, they will now be retried a few times to avoid such issues. ([Firefox bug 1854942](https://bugzil.la/1854942), [Firefox bug 1918287](https://bugzil.la/1918287), [Firefox bug 1918672](https://bugzil.la/1918672), [Firefox bug 1921756](https://bugzil.la/1921756))
- The `browsingContext.contextCreated` event is now correctly emitted for lazy-loaded frames. Previously the event would only be emitted when the iframe actually started loading its content. ([Firefox bug 1878166](https://bugzil.la/1878166))
- Network events are now correctly emitted for cached stylesheet requests. ([Firefox bug 1879438](https://bugzil.la/1879438))
- Network event timings were previously using the wrong unit and were provided in microseconds. They are now correctly set in milliseconds. ([Firefox bug 1916685](https://bugzil.la/1916685))
- The `requestTime` from network event timings should now be more accurate and really match the time where the request actually started. ([Firefox bug 1922390](https://bugzil.la/1922390))

## Experimental web features

These features are newly shipped in Firefox 132 but are disabled by default. To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`. You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

- **Cookie Store API:** `dom.cookieStore.enabled`.

  The [Cookie Store API](/en-US/docs/Web/API/Cookie_Store_API) is a modern, {{jsxref("Promise")}}-based method of managing cookies that does not block the event loop and does not rely on {{domxref("Document")}} (it can therefore be made available to [service workers](/en-US/docs/Web/API/Service_Worker_API)). As of Firefox 132, a subset of the Cookie Store API has been implemented. ([Firefox bug 1800882](https://bugzil.la/1800882)). This includes:

  - The [`CookieStore`](/en-US/docs/Web/API/CookieStore) interface, but `partitioned` is not included in return values.
  - The [`CookieChangeEvent`](/en-US/docs/Web/API/CookieChangeEvent) interface, excluding `partitioned` properties.
  - The [`Window.cookieStore`](/en-US/docs/Web/API/Window/cookieStore) property.
  - The [`ServiceWorkerGlobalScope.cookieStore`](/en-US/docs/Web/API/ServiceWorkerGlobalScope/cookieStore) property.

- **The `fetch()` `keepalive` option:** `dom.fetchKeepalive.enabled`.

  The global {{domxref('Window.fetch','fetch()')}} method has a [`keepalive`](/en-US/docs/Web/API/RequestInit#keepalive) initialization option. When `keepalive` is set to `true`, the browser will not abort the associated request if the page that initiated it is unloaded before the request is complete.

  This enables a fetch request to function as an alternative to {{domxref("Navigator.sendBeacon()")}} when sending analytics at the end of a session, which has some advantages (you can use HTTP methods other than [`POST`](/en-US/docs/Web/HTTP/Reference/Methods/POST), customize request properties, and access the server response via the fetch {{jsxref("Promise")}} fulfillment). It is also available in [service workers](/en-US/docs/Web/API/Service_Worker_API). ([Firefox bug 1906952](https://bugzil.la/1906952)).

- **`CloseWatcher`**: <code>dom.closewatcher.enabled</code>.
  The {{domxref("CloseWatcher")}} interface enables developers to implement components that can be closed using device-native mechanisms, in the same way as built-in components. For example, on Android you can close a dialog using the back button: this interface allows you to similarly close a custom sidebar. ([Firefox bug 1888729](https://bugzil.la/1888729)).

- **`Promise.try()`**: <code>javascript.options.experimental.promise_try</code>. {{jsxref("Promise.try()")}} is a convenience method that takes a callback of any kind (returns or throws, synchronously or asynchronously) and wraps its result in a {{jsxref("Promise")}} so that promise semantics (e.g., {{jsxref("Promise.then", ".then()")}}, {{jsxref("Promise.catch", ".catch()")}}) can be used to handle it ([Firefox bug 1905364](https://bugzil.la/1905364)).

- **`JSON.parse` with source**: <code>javascript.options.experimental.json_parse_with_source</code>. The [`JSON.parse` source text access proposal](https://github.com/tc39/proposal-json-parse-with-source) extends `JSON.parse` behavior to provide features to mitigate issues around loss of precision when converting values such as large floats and date values between JavaScript values and JSON text ([Firefox bug 1913085](https://bugzil.la/1913085), [Firefox bug 1925334](https://bugzil.la/1925334)). Specifically, the following features are now available:
  - The `JSON.parse()` [`reviver` parameter `context` argument](/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#the_reviver_parameter): Provides access to the original JSON source text that was parsed.
  - [`JSON.isRawJSON()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/isRawJSON): Tests whether a value is an object returned by `JSON.rawJSON()`.
  - [`JSON.rawJSON()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/rawJSON): Creates a "raw JSON" object containing a piece of JSON text, which can then be included in an object to preserve the specified value when that object is stringified.

## Older versions

{{Firefox_for_developers}}

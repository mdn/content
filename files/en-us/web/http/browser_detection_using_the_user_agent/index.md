---
title: Browser detection using the user agent
slug: Web/HTTP/Browser_detection_using_the_user_agent
page-type: guide
---

{{HTTPSidebar}}

Serving different Web pages or services to different browsers is usually a bad idea. The Web is meant to be accessible to everyone, regardless of which browser or device they're using. There are ways to develop your website to progressively enhance itself based on the availability of features rather than by targeting specific browsers.

But browsers and standards are not perfect, and there are still some edge cases where detecting the browser is needed. Using the user agent to detect the browser looks simple, but doing it well is, in fact, a very hard problem. This document will guide you in doing this as correctly as possible.

> [!NOTE]
> It's worth re-iterating: it's very rarely a good idea to use user agent sniffing. You can almost always find a better, more broadly compatible way to solve your problem!

## Considerations before using browser detection

When considering using the user agent string to detect which browser is being used, your first step is to try to avoid it if possible. Start by trying to identify **why** you want to do it.

- Are you trying to work around a specific bug in some version of a browser?
  - : Look, or ask, in specialized forums: you're unlikely to be the first to hit this problem. Also, experts, or people with another point of view, can give you ideas for working around the bug. If the problem seems uncommon, it's worth checking if this bug has been reported to the browser vendor via their bug tracking system ([Mozilla](https://bugzilla.mozilla.org/); [WebKit](https://bugs.webkit.org/); [Blink](https://www.chromium.org/issue-tracking/); [Opera](https://bugs.opera.com/)). Browser makers do pay attention to bug reports, and the analysis may hint about other workarounds for the bug.
- Are you trying to check for the existence of a specific feature?
  - : Your site needs to use a specific Web feature that some browsers don't yet support, and you want to send those users to an older website with fewer features but that you know will work. This is the worst reason to use user agent detection because odds are eventually all the other browsers will catch up. In addition, it is not practical to test every one of the less popular browsers and test for those Web features. You should **never** do user agent sniffing. There is **always** the alternative of doing feature detection instead.
- Do you want to provide different HTML depending on which browser is being used?
  - : This is usually a bad practice, but there are some cases in which this is necessary. In these cases, you should first analyze your situation to be sure it's really necessary. Can you prevent it by adding some non-semantic {{ HTMLElement("div") }} or {{ HTMLElement("span") }} elements? The difficulty of successfully using user agent detection is worth a few disruptions to the purity of your HTML. Also, rethink your design: can you use progressive enhancement or fluid layouts to help remove the need to do this?

## Avoiding user agent detection

If you want to avoid using user agent detection, you have options!

- Feature detection

  - : Feature detection is where you don't try to figure out which browser is rendering your page, but instead, you check to see if the specific feature you need is available. If it's not, you use a fallback. In those rare cases where behavior differs between browsers, instead of checking the user agent string, you should instead implement a test to detect how the browser implements the API and determine how to use it from that. An example of feature detection is as follows. In 2017, Chrome [unflagged experimental lookbehind support in regular expressions](https://chromestatus.com/feature/5668726032564224), but no other browser supported it. So, you might have thought to do this:

```js
// This code snippet splits a string in a special notation
let splitUpString;
if (navigator.userAgent.includes("Chrome")) {
  // YES! The user is suspected to support look-behind regexps
  // DO NOT USE /(?<=[A-Z])/. It will cause a syntax error in
  // browsers that do not support look-behind expressions
  // because all browsers parse the entire script, including
  // sections of the code that are never executed.
  const camelCaseExpression = new RegExp("(?<=[A-Z])");
  splitUpString = (str) => String(str).split(camelCaseExpression);
} else {
  // This fallback code is much less performant, but works
  splitUpString = (str) =>
    String(str)
      .split(/(.*?[A-Z])/)
      .filter(Boolean);
}

console.log(splitUpString("fooBar")); // ["fooB", "ar"]
console.log(splitUpString("jQWhy")); // ["jQ", "W", "hy"]
```

The above code would have made several incorrect assumptions:
First, it assumed that all user agent strings that include the substring "Chrome" are Chrome. UA strings are notoriously misleading.
Then, it assumed that the lookbehind feature would always be available if the browser was Chrome. The agent might be an older version of Chrome, from before support was added, or (because the feature was experimental at the time) it could be a later version of Chrome that removed it.
Most importantly, it assumed no other browsers would support the feature. Support could have been added to other browsers at any time, but this code would have continued choosing the inferior path.

Problems like these can be avoided by testing for support of the feature itself instead:

```js
let isLookBehindSupported = false;

try {
  new RegExp("(?<=)");
  isLookBehindSupported = true;
} catch (err) {
  // If the agent doesn't support look behinds, the attempted
  // creation of a RegExp object using that syntax throws and
  // isLookBehindSupported remains false.
}

const splitUpString = isLookBehindSupported
  ? (str) => String(str).split(new RegExp("(?<=[A-Z])"))
  : (str) =>
      String(str)
        .split(/(.*?[A-Z])/)
        .filter(Boolean);

console.log(splitUpString("fooBar")); // ["fooB", "ar"]
console.log(splitUpString("jQWhy")); // ["jQ", "W", "hy"]
```

As the above code demonstrates, there is **always** a way to test browser support without user agent sniffing. There is **never** any reason to check the user agent string for this.

Lastly, the above code snippets bring about a critical issue with cross-browser coding that must always be taken into account. Don't unintentionally use the API you are testing for in unsupported browsers. This may sound obvious and simple, but sometimes it is not. For example, in the above code snippets, using lookbehind in short-regexp notation (for example, `/reg/igm`) will cause a parser error in unsupported browsers. Thus, in the above example, you would use `new RegExp("(?<=look_behind_stuff)");` instead of `/(?<=look_behind_stuff)/`, even in the lookbehind supported section of your code.

- Progressive enhancement
  - : This design technique involves developing your website in 'layers', using a bottom-up approach, starting with a simpler layer and improving the capabilities of the site in successive layers, each using more features.
- Graceful degradation
  - : This is a top-down approach in which you build the best possible site using all the features you want, then tweak it to make it work on older browsers. This can be harder to do, and less effective, than progressive enhancement, but may be useful in some cases.
- Mobile device detection

  - : Arguably the most common use and misuse of user agent sniffing is to detect if the device is a mobile device. However, people too often overlook what they are really after. People use user agent sniffing to detect if the users' device is touch-friendly and has a small screen so they can optimize their website accordingly. While user agent sniffing can sometimes detect these, not all devices are the same: some mobile devices have big screen sizes, some desktops have a small touchscreen, some people use smart TV's which are an entirely different ballgame altogether, and some people can dynamically change the width and height of their screen by flipping their tablet on its side! So, user agent sniffing is definitely not the way to go. Thankfully, there are much better alternatives. Use [`Navigator.maxTouchPoints`](/en-US/docs/Web/API/Navigator/maxTouchPoints) to detect if the user's device has a touchscreen. Then, default back to checking the user agent screen only `if (!("maxTouchPoints" in navigator)) { /* Code here */ }`. Using this information of whether the device has a touchscreen, do not change the entire layout of the website just for touch devices: you will only create more work and maintenance for yourself. Rather, add in touch conveniences such as bigger, more easily clickable buttons (you can do this using CSS by increasing the font size). Here is an example of code that increases the padding of `#exampleButton` to `1em` on mobile devices.

```js
let hasTouchScreen = false;
if ("maxTouchPoints" in navigator) {
  hasTouchScreen = navigator.maxTouchPoints > 0;
} else if ("msMaxTouchPoints" in navigator) {
  hasTouchScreen = navigator.msMaxTouchPoints > 0;
} else {
  const mQ = matchMedia?.("(pointer:coarse)");
  if (mQ?.media === "(pointer:coarse)") {
    hasTouchScreen = !!mQ.matches;
  } else if ("orientation" in window) {
    hasTouchScreen = true; // deprecated, but good fallback
  } else {
    // Only as a last resort, fall back to user agent sniffing
    const UA = navigator.userAgent;
    hasTouchScreen =
      /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
      /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA);
  }
}

if (hasTouchScreen) {
  document.getElementById("exampleButton").style.padding = "1em";
}
```

As for the screen size, use `window.innerWidth` and `window.addEventListener("resize", () => { /* Refresh screen size dependent things */ })`. What you want to do for screen size is not slash off information on smaller screens. That will only annoy people because it will force them to use the desktop version. Rather, try to have fewer columns of information in a longer page on smaller screens while having more columns with a shorter page on larger screen sizes. This effect can be easily achieved using CSS [flexboxes](/en-US/docs/Learn_web_development/Core/CSS_layout/Flexbox), sometimes with [floats](/en-US/docs/Learn_web_development/Core/CSS_layout/Floats) as a partial fallback.

Also try to move less relevant/important information down to the bottom and group the page's content together meaningfully. Although it is off-topic, perhaps the following detailed example might give you insights and ideas that persuade you to forgo user agent sniffing. Let us imagine a page composed of boxes of information; each box is about a different feline breed or canine breed. Each box has an image, an overview, and a historical fun fact. The pictures are kept to a maximum reasonable size even on large screens. For the purposes of grouping the content meaningfully, all the cat boxes are separated from all the dog boxes such that the cat and dog boxes are not intermixed together. On a large screen, it saves space to have multiple columns to reduce the space wasted to the left and to the right of the pictures. The boxes can be separated into multiple columns via two equally fair method. From this point on, we shall assume that all the dog boxes are at the top of the source code, that all the cat boxes are at the bottom of the source code, and that all these boxes have the same parent element. There's a single instance of a dog box immediately above a cat box, of course. The first method uses horizontal [Flexboxes](/en-US/docs/Learn_web_development/Core/CSS_layout/Flexbox) to group the content such that when the page is displayed to the end user, all the dogs boxes are at the top of the page and all the cat boxes are lower on the page. The second method uses a [Column](/en-US/docs/Web/CSS/Layout_cookbook/Column_layouts) layout and resents all the dogs to the left and all the cats to the right. Only in this particular scenario, it is appropriate to provide no fallback for the flexbox/multicolumn layouts, resulting in a single column of very wide boxes on old browsers. Also consider the following. If more people visit the webpage to see the cats, then it might be a good idea to put all the cats higher in the source code than the dogs so that more people can find what they are looking for faster on smaller screens where the content collapses down to one column.

Next, always make your code dynamic.
The user can flip their mobile device on its side, changing the width and height of the page.
Or, there might be some weird flip-phone-like device thing in the future where flipping it out extends the screen.
Do not be the developer having a headache over how to deal with the flip-phone-like device thing.
Never be satisfied with your webpage until you can open up the dev tools side panel and resize the screen while the webpage looks smooth, fluid, and dynamically resized.
The simplest way to do this is to separate all the code that moves content around based on screen size to a single function that is called when the page is loaded and at each [resize](/en-US/docs/Web/API/Window/resize_event) event thereafter. If there is a lot calculated by this layout function before it determines the new layout of the page, then consider {{glossary("debounce", "debouncing")}} the event listener such that it is not called as often.
Also note that there is a huge difference between the media queries `(max-width: 25em)`, `not all and (min-width: 25em)`, and `(max-width: 24.99em)`: `(max-width: 25em)` excludes `(max-width: 25em)`, whereas `not all and (min-width: 25em)` includes `(max-width: 25em)`.
`(max-width: 24.99em)` is a poor man's version of `not all and (min-width: 25em)`: do not use `(max-width: 24.99em)` because the layout _might_ break on very high font sizes on very high definition devices in the future.
Always be very deliberate about choosing the right media query and choosing the right `>=`, `<=`, `>`, or `<` in any corresponding JavaScript because it is very easy to get these mixed up, resulting in the website looking wonky right at the screen size where the layout changes.
Thus, thoroughly test the website at the exact widths/heights where layout changes occur to ensure that the layout changes occur properly.

## Making the best of user agent sniffing

After reviewing all of the above better alternatives to user agent sniffing, there are still some potential cases where user agent sniffing is appropriate and justified.

One such case is using user agent sniffing as a fallback when detecting if the device has a touch screen. See the [Mobile Device Detection](#mobile_device_detection) section for more information.

Another such case is for fixing bugs in browsers that do not automatically update. WebKit (on iOS) is a perfect example. Apple forces all of the browsers on iOS to use WebKit internally, thus the user has no way to get a better more updated browser on older devices. Most bugs can be detected, but some bugs take more effort to detect than others. In such cases, it might be beneficial to use user agent sniffing to save on performance. For example, WebKit 6 has a bug whereby when the device orientation changes, the browser might not fire [`MediaQueryList`](/en-US/docs/Web/API/MediaQueryList) listeners when it should. To overcome this bug, observe the code below.

```js
const UA = navigator.userAgent;
const isWebkit =
  /\b(iPad|iPhone|iPod)\b/.test(UA) &&
  /WebKit/.test(UA) &&
  !/Edge/.test(UA) &&
  !window.MSStream;

let mediaQueryUpdated = true;
const mqL = [];

function whenMediaChanges() {
  mediaQueryUpdated = true;
}

const listenToMediaQuery = isWebkit
  ? (mQ, f) => {
      if (/height|width/.test(mQ.media)) {
        mqL.push([mQ, f]);
      }
      mQ.addListener(f);
      mQ.addListener(whenMediaChanges);
    }
  : () => {};

const destroyMediaQuery = isWebkit
  ? (mQ) => {
      for (let i = 0; i < mqL.length; i++) {
        if (mqL[i][0] === mQ) {
          mqL.splice(i, 1);
        }
      }
      mQ.removeListener(whenMediaChanges);
    }
  : listenToMediaQuery;

let orientationChanged = false;
addEventListener(
  "orientationchange",
  () => {
    orientationChanged = true;
  },
  PASSIVE_LISTENER_OPTION,
);

addEventListener("resize", () =>
  setTimeout(() => {
    if (orientationChanged && !mediaQueryUpdated) {
      for (let i = 0; i < mqL.length; i++) {
        mqL[i][1](mqL[i][0]);
      }
    }
    mediaQueryUpdated = orientationChanged = false;
  }, 0),
);
```

## Which part of the user agent contains the information you are looking for?

As there is no uniformity of the different part of the user agent string, this is the tricky part.

### Browser Name and version

When people say they want "browser detection", often they actually want "rendering engine detection". Do you actually want to detect Firefox, as opposed to SeaMonkey, or Chrome as opposed to Chromium? Or do you actually want to see if the browser is using the Gecko or the WebKit rendering engine? If this is what you need, see further down the page.

Most browsers set the name and version in the format _BrowserName/VersionNumber_. But as the name is not the only information in a user agent string that is in that format, you can not discover the name of the browser, you can only check if the name you are looking for exists. But note that some browsers are lying: Chrome for example reports both as Chrome and Safari. So to detect Safari you have to check for the Safari string and the absence of the Chrome string, Chromium often reports itself as Chrome too or Seamonkey sometimes reports itself as Firefox.

Also, pay attention not to use a simple regular expression on the BrowserName, user agents also contain strings outside the Keyword/Value syntax. Safari & Chrome contain the string 'like Gecko', for instance.

| Browser name                    | Must contain    | Must not contain               |
| ------------------------------- | --------------- | ------------------------------ |
| Firefox                         | `Firefox/xyz`   | `Seamonkey/xyz`                |
| Seamonkey                       | `Seamonkey/xyz` |                                |
| Chrome                          | `Chrome/xyz`    | `Chromium/xyz` or `Edg.*/xyz`  |
| Chromium                        | `Chromium/xyz`  |                                |
| Safari                          | `Safari/xyz`    | `Chrome/xyz` or `Chromium/xyz` |
| Opera 15+ (Blink-based engine)  | `OPR/xyz`       |                                |
| Opera 12- (Presto-based engine) | `Opera/xyz`     |                                |

\[1] Safari gives two version numbers: one technical in the `Safari/xyz` token, and one user-friendly in a `Version/xyz` token.

Of course, there is absolutely no guarantee that another browser will not hijack some of these things (like Chrome hijacked the Safari string in the past). That's why browser detection using the user agent string is unreliable and should be done only with the check of the version number (hijacking of past versions is less likely).

### Rendering engine

As seen earlier, in most cases, looking for the rendering engine is a better way to go. This will help to not exclude lesser known browsers. Browsers sharing a common rendering engine will display a page in the same way: it is often a fair assumption that what will work in one will work in the other.

There are three active major rendering engines: Blink, Gecko, and WebKit. As sniffing the rendering engines names is common, a lot of user agents added other rendering names to trigger detection. It is therefore important to pay attention not to trigger false-positives when detecting the rendering engine.

| Engine   | Must contain      | Comment                                                                                                                                                                                      |
| -------- | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Blink    | `Chrome/xyz`      |                                                                                                                                                                                              |
| Gecko    | `Gecko/xyz`       |                                                                                                                                                                                              |
| WebKit   | `AppleWebKit/xyz` | Pay attention, WebKit browsers add a 'like Gecko' string that may trigger false positive for Gecko if the detection is not careful.                                                          |
| Presto   | `Opera/xyz`       | Obsolete; Presto is no longer used in Opera browser builds >= version 15 (see 'Blink')                                                                                                       |
| EdgeHTML | `Edge/xyz`        | The non-Chromium Edge puts its engine version after the _Edge/_ token, not the application version. Obsolete; EdgeHTML is no longer used in Edge browser builds >= version 79 (see 'Blink'). |

## Rendering engine version

Most rendering engines put the version number in the _RenderingEngine/VersionNumber_ token, with the notable exception of Gecko. Gecko puts the Gecko version number in the comment part of the User Agent after the `rv:` string. From Gecko 14 for the mobile version and Gecko 17 for the desktop version, it also puts this value in the `Gecko/version` token (previous version put there the build date, then a fixed date called the GeckoTrail).

## OS

The Operating System is given in most User Agent strings (although not web-focused platforms like Firefox OS), but the format varies a lot. It is a fixed string between two semicolons, in the comment part of the User Agent. These strings are specific for each browser. They indicate the OS, but also often its version and information on the relying hardware (32 or 64 bits, Intel/PPC for Mac, or x86/ARM CPU architecture for Windows PCs).

Like in all cases, these strings may change in the future, one should use them only in conjunction with the detection of already released browsers. A technological survey must be in place to adapt the script when new browser versions are coming out.

### Mobile, Tablet or Desktop

The most common reason to perform user agent sniffing is to determine which type of device the browser runs on. The goal is to serve different HTML to different device types.

- Never assume that a browser or a rendering engine only runs on one type of device. Especially don't make different defaults for different browsers or rendering engines.
- Never use the OS token to define if a browser is on mobile, tablet or desktop. The OS may run on more than one type of device (for example, Android runs on tablets as well as phones).

The following table summarizes the way common browser vendors indicate that their browsers are running on a mobile device:

| Browser                                                           | Rule                                                 | Example                                                                                                                                                          |
| ----------------------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Mozilla (Gecko, Firefox)                                          | `Mobile` or `Tablet` inside the comment.             | `Mozilla/5.0 (Android; Mobile; rv:13.0) Gecko/13.0 Firefox/13.0`                                                                                                 |
| WebKit-based (Android, Safari)                                    | `Mobile Safari` token outside the comment.           | `Mozilla/5.0 (Linux; U; Android 4.0.3; de-ch; HTC Sensation Build/IML74K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`               |
| Blink-based (Chromium, Google Chrome, Opera 15+, Edge on Android) | `Mobile Safari` token outside the comment.           | `Mozilla/5.0 (Linux; Android 4.4.2; Nexus 5 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.117 Mobile Safari/537.36 OPR/20.0.1396.72047`  |
| Presto-based (Opera 12-)                                          | `Opera Mobi/xyz` token inside the comment.           | `Opera/9.80 (Android 2.3.3; Linux; Opera Mobi/ADR-1111101157; U; es-ES) Presto/2.9.201 Version/11.50`                                                            |
| Edge on Windows 10 Mobile                                         | `Mobile/xyz` and `Edge/` tokens outside the comment. | `Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Mobile Safari/537.36 Edge/16.16299` |

In summary, we recommend looking for the string `Mobi` anywhere in the User Agent to detect a mobile device.

> [!NOTE]
> If the device is large enough that it's not marked with `Mobi`, you should serve your desktop site (which, as a best practice, should support touch input anyway, as more desktop machines are appearing with touchscreens).

## See also

- [CSS Media Queries](/en-US/docs/Web/CSS/CSS_media_queries)
- [HTTP Client hints](/en-US/docs/Web/HTTP/Client_hints)
- [Implementing feature detection](/en-US/docs/Learn_web_development/Extensions/Testing/Feature_detection)

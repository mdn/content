---
title: Browser detection using the user agent string (UA sniffing)
short-title: Browser detection using the UA string
slug: Web/HTTP/Guides/Browser_detection_using_the_user_agent
page-type: guide
sidebar: http
---

Along with every request to a server, browsers include a {{HTTPHeader("User-Agent")}} {{Glossary("HTTP")}} header with a value called a {{glossary("user agent")}} (UA) string.
This string is intended to identify the browser, its version number, and its host operating system.

```http
User-Agent: <product> / <product-version> <comment>
```

You can also access this string via the [`navigator.userAgent`](/en-US/docs/Web/API/Navigator/userAgent) property in JavaScript:

```js
console.log(window.navigator.userAgent);
// Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:138.0) Gecko/20100101 Firefox/138.0
```

It may be tempting to parse the UA string (sometimes called "UA sniffing") and change how your site behaves based on the values in the UA string, but this is very hard to do reliably, and is often a cause of bugs.

This document describes common pitfalls of using the UA string for browser detection and the recommended alternatives.
At the end we provide some hints for UA detection using the string, but you should do this only if it's absolutely necessary!

## Why feature detection is better than browser detection

To illustrate why trying to adapt site functionality per browser introduces complexity and possible bugs, consider the following example.
An application wants to make use of a `splitUpString()` function in JavaScript using [lookbehind assertion](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion) (`?<=…`):

```js example-bad
let splitUpString;

if (navigator.userAgent.includes("Chrome")) {
  const camelCaseExpression = new RegExp("(?<=[A-Z])");
  splitUpString = (str) => String(str).split(camelCaseExpression);
} else {
  // This fallback is inefficient, but it works
  splitUpString = (str) =>
    String(str)
      .split(/(.*?[A-Z])/)
      .filter(Boolean);
}
console.log(splitUpString("fooBar")); // ["fooB", "ar"]
console.log(splitUpString("jQWhy")); // ["jQ", "W", "hy"]
```

This code makes several assumptions that may be wrong, and which will break the code if it is run on the wrong browser or browser version:

1. All user agent strings that include the substring `Chrome` indicate a Chrome browser.

   One of the biggest problems with browser detection based on UA strings is that browsers and user agents routinely pretend to be another browser, or include information based on multiple browsers.

2. The lookbehind feature is always available if the browser is Chrome.
   In reality, the browser might be an older version of Chrome before support was added, or it could be a later version of Chrome that removes it.
3. Most importantly, it assumes no other browsers support the feature, when it could be added to any other browser at any time.
   All non-matching browsers will be stuck using an inefficient fallback.

It's important to note that these problems will exist regardless of the browser detection method; UA sniffing, client hints, the presence, absence or contents of other HTTP headers, and so on.
Knowing what browser is used is irrelevant, what we're actually looking for in this case is feature detection, which is described in more detail below.

## Alternatives to UA sniffing

The following sections describe alternatives to browser detection that are more robust and applicable in many more scenarios than UA sniffing.

### Feature detection

Feature detection is where you check to see if a specific feature is available to the client instead of figuring out which browser is rendering your page.
For cases where a feature is not supported, you use a fallback instead.
The following feature detection example checks if the client supports the {{domxref("Geolocation_API", "Geolocation API", "", "nocode")}}.
You can do this by checking for a `geolocation` property available on the global {{domxref("Navigator")}} object.

```js
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition((position) => {
    // show the location on a map, such as the Google Maps API
  });
} else {
  // Show a static map instead
}
```

You can do this for many features.
For example, you can determine whether PDF files can be viewed inline, or if the {{domxref("VirtualKeyboard_API", "VirtualKeyboard API", "", "nocode")}} is supported, and so on:

```js
if ("application/pdf" in navigator.mimeTypes) {
  // browser supports inline viewing of PDF files.
}
if ("virtualKeyboard" in navigator) {
  // browser supports the Virtual Keyboard API
}
```

For styles, you can also do feature detection in CSS using the {{cssxref("@supports")}} at-rule, combined with the `not` keyword if you want to check for the absence of a feature.
See [Using feature queries](/en-US/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries) for information on using this in CSS.

```css
@supports (display: grid) {
  .box {
    display: grid;
    gap: 2rem;
  }
}

@supports not (property: value) {
  /* CSS rules for fallback */
}
```

In rare cases where behavior differs between browsers for a feature, you should test how browsers implement the API and determine how to use it based on that.
To learn more, see the [Implementing feature detection](/en-US/docs/Learn_web_development/Extensions/Testing/Feature_detection) documentation.

#### Mobile device detection

A common misuse of UA sniffing (and [client hints](#client_hints)) is to detect if the client is a mobile device.
Usually people are actually motivated to detect if the users' device is **touch-friendly** and has a small screen so they can optimize their website by adding extra padding to buttons, for example.

Instead, you should detect features using modern APIs.
For example, to check for touch support, try the [maxTouchPoints](/en-US/docs/Web/API/Navigator/maxTouchPoints) property in the {{domxref("Navigator")}} interface:

```js
if (navigator.maxTouchPoints > 1) {
  // browser supports multi-touch
}
```

For other concerns, like layout, use modern CSS like [flexbox](/en-US/docs/Web/CSS/Guides/Flexible_box_layout) and [grid](/en-US/docs/Web/CSS/Guides/Grid_layout) for flexible layouts.
Instead of hiding content on smaller screens, adjust the layout dynamically.
[Media queries](/en-US/docs/Web/CSS/Guides/Media_queries) should handle most layout changes, reducing the need for JavaScript-based adjustments.

If you want to ensure smooth transitions when users rotate their devices or switch between different screen modes, you can look at [Detecting device orientation](/en-US/docs/Web/API/Device_orientation_events/Detecting_device_orientation).
For foldable devices, there are newer APIs such as the [Device Posture API](/en-US/docs/Web/API/Device_Posture_API), although be sure to check compatibility data as support varies widely.

### Client hints

For Blink-based browsers (Chromium, Edge, Brave, Vivaldi, etc.), an alternative is [User agent client hints](/en-US/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints).
In client hints, the server proactively requests device information from a client through HTTP headers or via [JavaScript API](/en-US/docs/Web/API/User-Agent_Client_Hints_API).

Client hints are better than UA sniffing for detecting Blink-based browsers in that they're not as commonly-spoofed, and they provide smaller, more reliable pieces of information that are easier to parse.
Changing site functionality based on client hints is still a bad idea!
Where possible you should instead use feature detection and progressive enhancement [as described above](#why_feature_detection_is_better_than_browser_detection).

For example, in the HTTP mechanism, the server includes an {{httpheader("Accept-CH")}} header along with a list of headers that should be included by the client in subsequent requests.
Let's assume the server sends this response to the client:

```http
Accept-CH: Sec-CH-UA-Mobile, Sec-CH-UA-Platform, Sec-CH-UA
```

This asks for the following headers from the client in subsequent requests:

- {{httpheader("Sec-CH-UA-Mobile")}}: a boolean to indicate if the client is a mobile device.
- {{httpheader("Sec-CH-UA-Platform")}}: the platform the client is operating on ("Windows", "Android", etc.).
- {{httpheader("Sec-CH-UA")}}: the user-agent's branding and significant version information.

Assuming the client supports client hints, the UA client hints may appear in subsequent requests:

```http
GET /my/page HTTP/1.1
Host: example.site

Sec-CH-UA: " Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"
Sec-CH-UA-Mobile: ?1
Sec-CH-UA-Platform: "Android"
```

To learn more about client hints, see [HTTP Client hints](/en-US/docs/Web/HTTP/Guides/Client_hints).
Be sure to check the [Browser Compatibility](/en-US/docs/Web/HTTP/Reference/Headers/Accept-CH#browser_compatibility) details for more information before using this feature.

### Other techniques and principles

- {{glossary("Progressive enhancement")}}
  - : This design technique involves developing your website in 'layers', using a bottom-up approach, starting with a simpler layer and improving the capabilities of the site in successive layers, each using more features.
- {{glossary("Graceful degradation")}}
  - : This is a top-down approach in which you build the best possible site using all the features you want, then tweak it to make it work on older browsers. This can be harder to do, and less effective, than progressive enhancement, but may be useful in some cases.

## Invalid reasons to use browser detection

If you're still considering browser detection instead of feature detection and progressive enhancement, check if you are motivated by the following (invalid) reasons:

- **You are trying to work around a specific bug in a certain browser version**
  - : You're unlikely to be the first person to encounter it.
    Experts or people with another point of view may give you hints to better avoid or work around the bug.
    If the problem is uncommon, it's worth checking if this bug has been reported to the browser vendor via bug tracking systems ([Mozilla](https://bugzilla.mozilla.org/); [WebKit](https://bugs.webkit.org/); [Blink](https://www.chromium.org/issue-tracking/); [Opera](https://bugs.opera.com/)).
    Browser makers do pay attention to bug reports, and yours may help fix or provide more reliable workarounds for a problem.
- **Serving different HTML depending on the visitor's browser**
  - : This is usually a bad idea, but there are rare cases where this is necessary.
    Can you prevent it by adding non-semantic {{ HTMLElement("div") }} or {{ HTMLElement("span") }} elements?
    Consider if there's actually a problem with your design: can you use progressive enhancement or fluid layouts to help remove your need to do this?
    The effort in applying accurate UA detection compared to reworking your HTML should be a deciding factor.
- **Trying to find out if a visitor's browser has a specific feature**
  - : Your site needs to use a specific feature that some browsers don't yet support, and you want users with incompatible browsers to be served an older website with fewer features you know will work.
    This is the worst reason to use UA detection because all browsers will likely catch up, eventually.
    In addition, it's not practical to test each browser for different features in this way.

## Extracting relevant UA string parts

If you've explored all of the options above, and you still need to parse the UA string as a last resort, there are some hints in this section that will help.
Unfortunately, there is no uniformity of the different part of the user agent string, so we've come to the tricky part.

### Rendering engine

Browsers sharing a common {{glossary("rendering engine")}} will display a page in the same way: it's often a fair assumption that what will work in one browser will work in the other.
There are three active major rendering engines: {{glossary("Blink")}}, {{glossary("Gecko")}}, and {{glossary("WebKit")}}.

The rendering engine is the string `Gecko/20100101` in the following example, indicating the rendering engine is `Gecko`, and the "gecko-Trail" is the fixed string `20100101`, which means "desktop":

```http
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:138.0) Gecko/20100101 Firefox/138.0
```

Detecting rendering engine names is common in websites, and a lot of user agents historically added other rendering names to avoid websites shutting them out based on rendering engine name alone.
It's therefore important to pay attention not to trigger false-positives when detecting the rendering engine, as this method is particularly unreliable.
Consider the following UA string sent in Chrome 134 on macOS:

```http
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36
```

| Engine   | Must contain      | Details                                                                                                                        |
| -------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Blink    | `Chrome/xyz`      |                                                                                                                                |
| Gecko    | `Gecko/xyz`       |                                                                                                                                |
| WebKit   | `AppleWebKit/xyz` | WebKit browsers add a `like Gecko` string that may trigger false positive for Gecko if the detection is not carefully applied. |
| Presto   | `Opera/xyz`       | Obsolete; Presto is no longer used in Opera browser builds >= version 15 (see 'Blink')                                         |
| EdgeHTML | `Edge/xyz`        | Obsolete; EdgeHTML is no longer used in Edge browser builds >= version 79 (see 'Blink').                                       |

### Rendering engine version

Most rendering engines put the version number in the `RenderingEngine/VersionNumber` token, with the notable exception of Gecko.
It's the string `rv:138.0` in the following example, meaning the rendering engine version number is `138.0`, which is the same as the Firefox version:

```http
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:138.0) Gecko/20100101 Firefox/138.0
```

### Browser name and version

When people say they want "browser detection", they actually often want "rendering engine detection".
That usually means detecting "Gecko" or "WebKit" as opposed to "Firefox" or "Safari".

Most browsers set the name and version in the format `BrowserName/VersionNumber`.
But as the name is not the only information in a user agent string in that format, you can't discover the name of the browser, you can only check if the name you are looking for is present.
The browser name is the string `Firefox/138.0` in the following example, indicating the browser name is `Firefox`, and the software version is `138.0`:

```http
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:138.0) Gecko/20100101 Firefox/138.0
```

Some browsers send conflicting information: Chrome, for example, reports both Chrome and Safari.
So to detect Safari you have to check for the Safari string and the absence of the Chrome string, Chromium often reports itself as Chrome too and SeaMonkey reports itself as Firefox.

Be careful when using regular expressions on the `BrowserName` part as user agents also contain strings around the Keyword/Value syntax.
Safari & Chrome contain the string `like Gecko`, for instance.

| Browser name                    | Must contain    | Must not contain               |
| ------------------------------- | --------------- | ------------------------------ |
| Firefox                         | `Firefox/xyz`   | `Seamonkey/xyz`                |
| Seamonkey                       | `Seamonkey/xyz` |                                |
| Chrome                          | `Chrome/xyz`    | `Chromium/xyz` or `Edg.*/xyz`  |
| Chromium                        | `Chromium/xyz`  |                                |
| Safari                          | `Safari/xyz` \* | `Chrome/xyz` or `Chromium/xyz` |
| Opera 15+ (Blink-based engine)  | `OPR/xyz`       |                                |
| Opera 12- (Presto-based engine) | `Opera/xyz`     |                                |

\* Safari gives two version numbers: one technical in the `Safari/xyz` token, and one user-friendly in a `Version/xyz` token.

Of course, there is absolutely no guarantee that another browser will not spoof these in certain cases.
That's why browser detection using the user agent string is unreliable and should be done only with the check of the version number (spoofing past versions is less likely).

### Operating system detection

The Operating System is sent in most UA strings (although not web-focused platforms), but the format varies.
It's a fixed string between two semicolons, in the comment part of the User Agent and these strings are specific for each browser.

They indicate the OS, and often its version and information on the relying hardware (32 or 64 bits, Intel/PPC for Mac, or x86/ARM CPU architecture for Windows PCs).
It's the string `Intel Mac OS X 10.15` in the following example:

```http
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:138.0) Gecko/20100101 Firefox/138.0
```

In all cases, these strings may change, so you should use them only in conjunction with the detection of already-released browsers so patterns are known ahead of time.
Consider a visitor or UA string survey to adapt your code when new browser versions are released.

### Mobile, Tablet or Desktop

The most common reason to perform user agent sniffing is to determine which type of device the browser runs on.

- Never assume that a browser or a rendering engine only runs on one type of device.
  In particular, don't rely on different defaults for different browsers or rendering engines.
- Never use the OS token to define if a browser is on mobile, tablet or desktop.
  The OS may run on more than one type of device (for example, Android runs on tablets as well as phones).

The following table summarizes the way common browser vendors indicate that their browsers are running on a mobile device:

| Browser                                                           | Rule                                                 | Example                                                                                                                                                          |
| ----------------------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Mozilla (Gecko, Firefox)                                          | `Mobile` or `Tablet` inside the comment.             | `Mozilla/5.0 (Android 15; Mobile; rv:136.0) Gecko/136.0 Firefox/136.0`                                                                                           |
| WebKit-based (Android, Safari)                                    | `Mobile Safari` token outside the comment.           | `Mozilla/5.0 (Linux; U; Android 4.0.3; de-ch; HTC Sensation Build/IML74K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`               |
| Blink-based (Chromium, Google Chrome, Opera 15+, Edge on Android) | `Mobile Safari` token outside the comment.           | `Mozilla/5.0 (Linux; Android 4.4.2; Nexus 5 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.117 Mobile Safari/537.36 OPR/20.0.1396.72047`  |
| Edge on Windows 10 Mobile                                         | `Mobile/xyz` and `Edge/` tokens outside the comment. | `Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Mobile Safari/537.36 Edge/16.16299` |

In short, you can look for the string `Mobi` anywhere in the UA string.
If the device is large enough that it's not marked with `Mobi`, you should serve your desktop site (which, as a best practice, should support touch input anyway, as desktop devices may have touchscreens).

## See also

- [CSS Media Queries](/en-US/docs/Web/CSS/Guides/Media_queries)
- [HTTP Client hints](/en-US/docs/Web/HTTP/Guides/Client_hints)
- [Implementing feature detection](/en-US/docs/Learn_web_development/Extensions/Testing/Feature_detection)
- [Migrate to User-Agent Client Hints](https://web.dev/articles/migrate-to-ua-ch#strategy_legacy_support) on web.dev (2021)

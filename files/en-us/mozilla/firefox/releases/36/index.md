---
title: Firefox 36 for developers
slug: Mozilla/Firefox/Releases/36
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

Firefox 36 was released on February 24th, 2015. This article lists key changes that are useful not only for web developers, but also Firefox and Gecko developers as well as add-on developers.

## Changes for Web developers

### Developer Tools

Highlights:

- [eval sources now appear in the Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html#debug-eval-sources)
- [Simpler process for connecting to Firefox for Android](https://web.archive.org/web/20220410035837/https://firefox-source-docs.mozilla.org/devtools-user/remote_debugging/debugging_firefox_for_android_with_webide/index.html)
- Box Model Highlighter works on remote targets
- ["Invert the call tree" option in the Profiler](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html#inverting-the-call-tree)
- [Inspect DOM promises in the console](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#type-specific-rich-output)
- [Extra "Paste" commands in the Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html#element-popup-menu-2)

[All devtools bugs fixed between Firefox 35 and Firefox 36](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2014-11-28&chfield=resolution&query_format=advanced&chfieldfrom=2014-10-13&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Profiler&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20Timeline&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&list_id=11736454).

### CSS

- The {{cssxref("will-change")}} property has been enabled by default ([Firefox bug 961871](https://bugzil.la/961871)).
- The {{cssxref("white-space")}} property is now working on {{HTMLElement("textarea")}} HTML elements ([Firefox bug 82711](https://bugzil.la/82711)).
- The {{cssxref("@font-face/unicode-range", "unicode-range")}} descriptor is now supported by {{cssxref("@font-face")}} ([Firefox bug 475891](https://bugzil.la/475891)), but not enabled by default.
- The properties {{cssxref("text-decoration-color")}}, {{cssxref("text-decoration-line")}}, and {{cssxref("text-decoration-style")}} are unprefixed ([Firefox bug 825004](https://bugzil.la/825004)). The prefixed version are still available for some time to ease transition ([Firefox bug 1097922](https://bugzil.la/1097922)).
- The {{cssxref("text-decoration")}} property is turned into shorthand property ([Firefox bug 1039488](https://bugzil.la/1039488)).
- The properties {{cssxref("object-fit")}} and {{cssxref("object-position")}} are now supported ([Firefox bug 624647](https://bugzil.la/624647))
- The `contents` value of the {{cssxref("display")}} property has been experimentally implemented. It is preffed off by default ([Firefox bug 907396](https://bugzil.la/907396)).
- In [Quirks mode](/en-US/docs/Web/HTML/Quirks_Mode_and_Standards_Mode), the [`:active` and `:hover` quiver quirk](/en-US/docs/Mozilla_Quirks_Mode_Behavior#Miscellaneous_.26_Style) has been altered to be applied less often: it is now used only on links, only if there are no pseudo-element or other pseudo-class in the element and if it isn't part of a pseudo-class element ([Firefox bug 783213](https://bugzil.la/783213)).
- The {{cssxref("isolation")}} property has been implemented ([Firefox bug 1077872](https://bugzil.la/1077872)).
- CSS {{cssxref("&lt;gradient&gt;")}} now applies on the premultiplied colors, matching the spec and other browsers, and getting rid of unexpected gray colors appearing in them ([Firefox bug 591600](https://bugzil.la/591600)).
- Interpolation hint syntax has been added to {{cssxref("&lt;gradient&gt;")}} ([Firefox bug 1074056](https://bugzil.la/1074056)).
- The {{cssxref("scroll-behavior")}} property has been implemented ([Firefox bug 1010538](https://bugzil.la/1010538)).

### HTML

- Support for [`<meta name="referrer">`](/en-US/docs/Web/HTML/Element/meta) has been added ([Firefox bug 704320](https://bugzil.la/704320)).
- In Firefox, {{HTMLElement("input")}} filters specified in the [`accept`](/en-US/docs/Web/HTML/Element/input#accept) attribute will always be selected by default, unless there is an unknown value, that is an unknown mime type or badly formatted value in the [`accept`](/en-US/docs/Web/HTML/Element/input#accept) attribute. Previously specified filters were only selected by default for `image/*`, `video/*` and `audio/*` values ([Firefox bug 826185](https://bugzil.la/826185)).

### JavaScript

- The [ECMAScript 2015](/en-US/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_6_support_in_Mozilla) Symbol data type has been enabled by default (was available in the Nightly channel since version 33) ([Firefox bug 1066322](https://bugzil.la/1066322)):

  - {{jsxref("Symbol")}}
  - {{jsxref("Symbol.for()")}}
  - {{jsxref("Symbol.keyFor()")}}
  - {{jsxref("Object.getOwnPropertySymbols()")}}

- The old placeholder string `"@@iterator"` has been replaced with the real ES2015 well-known symbol {{jsxref("Symbol.iterator")}} for the [iterable](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) interface property key ([Firefox bug 918828](https://bugzil.la/918828)).
- The spec-internal abstract operation `ToNumber(string)` now supports binary (`0b`) and octal (`0o`) literals, this is a potentially breaking change from ES5 ([Firefox bug 1079120](https://bugzil.la/1079120)).

  - `Number("0b11")` now returns `3`, not `NaN`.
  - `"0o11" == 9` now returns `true`, not `false`.

- The [`const`](/en-US/docs/Web/JavaScript/Reference/Statements/const) declaration is now block-scoped and requires an initializer ([Firefox bug 611388](https://bugzil.la/611388)). It also can not be redeclared anymore ([Firefox bug 1095439](https://bugzil.la/1095439)).

  - `{const a=1}; a;` now throws a {{jsxref("ReferenceError")}} and does not return `1` anymore due to block-scoping.
  - `const a;` now throws a {{jsxref("SyntaxError")}} ("missing = in const declaration`"`): An initializer is required.
  - `const a = 1; a = 2;` now also throws a {{jsxref("SyntaxError")}} ("invalid assignment to const a").

- The ES2016 method {{jsxref("Array.prototype.includes")}} has been implemented, but for now, it is only enabled in Nightly builds ([Firefox bug 1069063](https://bugzil.la/1069063)).
- The [`delete`](/en-US/docs/Web/JavaScript/Reference/Operators/delete) operator now triggers the "[temporal dead zone](/en-US/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz)" when using with [`let`](/en-US/docs/Web/JavaScript/Reference/Statements/let) and [`const`](/en-US/docs/Web/JavaScript/Reference/Statements/const) ([Firefox bug 1074571](https://bugzil.la/1074571)).
- The non-standard [`let` blocks and `let` expressions](/en-US/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#statements_2) are deprecated and will now log a warning in the console. Do not use them anymore, they will be removed in the future.
- [WeakMap](/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap) constructor now handles optional iterable argument ([Firefox bug 1092537](https://bugzil.la/1092537)).

### Interfaces/APIs/DOM

- The {{domxref("CanvasRenderingContext2D.resetTransform()")}} method of the Canvas API has been implemented ([Firefox bug 1099148](https://bugzil.la/1099148)).
- ECDSA is now supported in the Web Crypto API ([Firefox bug 1034854](https://bugzil.la/1034854)).
- Our experimental implementation of WebGL 2.0 is going forward!

  - The {{domxref("WebGLQuery")}} interface is available ([Firefox bug 1048719](https://bugzil.la/1048719)).
  - The {{domxref("WebGL2RenderingContext.invalidateFrameBuffer()")}} method has been implemented ([Firefox bug 1076456](https://bugzil.la/1076456)).

- The {{domxref("MediaDevices")}} interface, containing the {{jsxref("Promise")}}-based version of {{domxref("MediaDevices.getUserMedia()", "getUserMedia()")}}, has been added. It is available via {{domxref("Navigator.mediaDevices")}} ([Firefox bug 1033885](https://bugzil.la/1033885)).
- The EME-related {{domxref("Navigator.requestMediaKeySystemAccess()")}} method, and the related {{domxref("MediaKeySystemAccess")}}, is now supported ([Firefox bug 1095257](https://bugzil.la/1095257)).
- The {{domxref("MediaKeySession/keystatuseschange_event", "keyschange")}} event is now sent when an EME-related CDM change keys in a session ([Firefox bug 1081755](https://bugzil.la/1081755)).
- The default values of the options for {{domxref("MutationObserver.observe()")}} have been updated to match the latest specification ([Firefox bug 973638](https://bugzil.la/973638)).
- Experimental support for virtual reality devices has landed behind the `dom.vr.enabled` preference, off by default ([Firefox bug 1036604](https://bugzil.la/1036604)).
- The function associated with {{domxref("RTCPeerConnection.signalingstatechange_event", "RTCPeerConnection.onsignalingstatechange")}} now receives an event as parameter, as per spec ([Firefox bug 1075133](https://bugzil.la/1075133)).
- The experimental implementation of Web Animations make progress: the method {{domxref("Animation/play", "AnimationPlayer.play()")}} and {{domxref("Animation/pause", "AnimationPlayer.pause()")}} are now supported ([Firefox bug 1070745](https://bugzil.la/1070745)), as well as {{domxref("Animation/playState", "AnimationPlayer.playState")}} ([Firefox bug 1037321](https://bugzil.la/1037321)).
- The non-standard `DOMRequest` interface has now a `DOMRequest.then()` method ([Firefox bug 839838](https://bugzil.la/839838)).
- The CSSOM View scroll behavior controlling methods, {{domxref("Element.scroll()")}}, {{domxref("Element.scrollTo()")}}, {{domxref("Element.scrollBy()")}}, and {{domxref("Element.scrollIntoView()")}}, have been implemented or extended ([Firefox bug 1045754](https://bugzil.la/1045754) and [Firefox bug 1087559](https://bugzil.la/1087559)).
- Assigning to {{domxref("Element.innerHTML")}} on an {{domxref("SVGElement")}} now create elements in the SVG namespace ([Firefox bug 886390](https://bugzil.la/886390)).
- The `nsIWebBrowserPersist.saveURI()` method now requires 8 arguments, in an order incompatible with previous releases.
- Support for Media Source Extensions (MSE) is activated by default in non-build releases (Nightly and Developer Edition only) ([Firefox bug 1000686](https://bugzil.la/1000686)). It keeps being preffed off on Beta and Release version.

### MathML

_No change._

### SVG

_No change._

### Audio/Video

_No change._

## Networking

- Support for SPDY/3 has been removed; support for SPDY/3.1 is still available ([Firefox bug 1097944](https://bugzil.la/1097944)).

## Security

- RC4 is now considered as insecure and all UI indicators will react as such; SSLv3 has been disabled by default in Firefox 34, but the UI has been changed to help the user better understand what is happening ([Firefox bug 1093595](https://bugzil.la/1093595)).
- Also, RC4 is no longer offered in the initial handshake of TLS ([Firefox bug 1088915](https://bugzil.la/1088915)).
- The [`form-action`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy#form-action) directive of CSP 1.1 is now supported ([Firefox bug 529697](https://bugzil.la/529697)).
- In the preferences of Firefox, The [Do not track](/en-US/docs/Web/HTTP/Headers/DNT) selection widget is again an on/off switch ([Firefox bug 1071747](https://bugzil.la/1071747)).

## Changes for add-on and Mozilla developers

### Add-on SDK

#### Highlights

- The [`sdk/test/httpd`](/en-US/docs/Mozilla/Add-ons/SDK/Low-Level_APIs/test_httpd) module was removed, use the [addon-httpd](https://www.npmjs.com/package/addon-httpd) npm module instead.
- Add badges to [`sdk/ui`](/en-US/docs/Mozilla/Add-ons/SDK/High-Level_APIs/ui) buttons ([Firefox bug 994280](https://bugzil.la/994280)).
- Implemented global `require` function to access sdk modules anywhere ([Firefox bug 1070927](https://bugzil.la/1070927)), using:

  ```js
  var { require } = Cu.import(
    "resource://gre/modules/commonjs/toolkit/require.js",
    {},
  );
  ```

#### Details

[GitHub commits made between Firefox 35 and Firefox 36](https://github.com/mozilla/addon-sdk/compare/firefox35...firefox36).

### JavaScript code modules

- `PromiseUtils.resolveOrTimeout` is implemented ([Firefox bug 1080466](https://bugzil.la/1080466)).
- `PromiseUtils.defer` (a replacement for `Promise.defer()`) is implemented ([Firefox bug 1093021](https://bugzil.la/1093021)).

### Interfaces

#### nsIContentPolicy

New constants have been added to `nsIContentPolicy` to allow Gecko internals and add-on code to better differentiate different types of requests. These are:

- `TYPE_FETCH`
  - : Indicates a content load request initiated by the {{domxref("Window/fetch", "fetch()")}} method.
- `TYPE_IMAGESET`
  - : Indicates a request to load an {{HTMLElement("img")}} (with the [`srcset`](/en-US/docs/Web/HTML/Element/img#srcset) attribute or {{HTMLElement("picture")}} element.

### XUL

_No change._

### Other

- Firefox `-remote` [command line option](https://wiki.mozilla.org/Firefox/CommandLineOptions) has been removed ([Firefox bug 1080319](https://bugzil.la/1080319)).

## Older versions

{{Firefox_for_developers}}

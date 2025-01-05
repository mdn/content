---
title: Firefox 30 for developers
slug: Mozilla/Firefox/Releases/30
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

## Changes for Web developers

### Developer Tools

- A Box Model Highlighter has been implemented ([Firefox bug 663778](https://bugzil.la/663778)).
- Anywhere a DOM node appears in the console output, it is highlighted when you hover over that console output ([Firefox bug 757866](https://bugzil.la/757866)). Similarly all JS functions and objects are highlighted in the console output ([Firefox bug 584733](https://bugzil.la/584733)). More information about the console improvement can be found in this [blog post](https://web.archive.org/web/20150427210606/http://mihai.sucan.ro/mihai/blog/web-console-improvements-episode-30).
- Support for {{domxref("console/count_static", "console.count()")}} has been added ([Firefox bug 922208](https://bugzil.la/922208)).

### CSS

- The property {{cssxref("background-blend-mode")}} has been enabled by default ([Firefox bug 970600](https://bugzil.la/970600)).
- The non-standard `overflow-clip-box` property has been implemented for use in UA stylesheets only ([Firefox bug 966992](https://bugzil.la/966992)).
- The {{cssxref("line-height")}} property now affects single-line text inputs (`<input type=text|password|email|search|tel|url|unknown>` types) although it cannot shrink them below a line height of `1.0` ([Firefox bug 349259](https://bugzil.la/349259)).
- The {{cssxref("line-height")}} property now also affects `type=button`, with no restrictions ([Firefox bug 697451](https://bugzil.la/697451)).
- Change to keyframes' name does not affect current elements ([Firefox bug 978648](https://bugzil.la/978648)).
- positioned internal table elements not abs pos containing block(relative position for table rows) ([Firefox bug 63895](https://bugzil.la/63895)).

### HTML

_No change._

### JavaScript

- New ES2015-compatible [array comprehensions](/en-US/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features) `[for (item of iterable) item]` and [generator comprehensions](/en-US/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features) `(for (item of iterable) item)` have been implemented ([Firefox bug 979865](https://bugzil.la/979865)).
- [Typed arrays](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#property_access) are now extensible and support new named properties ([Firefox bug 695438](https://bugzil.la/695438)).
- The {{jsxref("Error.prototype.stack")}} property now contains column numbers ([Firefox bug 762556](https://bugzil.la/762556)) and has been improved [when using `Function()` and `eval()` calls](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/stack#stack_of_evaled_code). This can help you to better debug minified or generated JavaScript code.
- The `Promise.cast()` method has been renamed to {{jsxref("Promise.resolve()")}} ([Firefox bug 966348](https://bugzil.la/966348)).

### Interfaces/APIs/DOM

- {{domxref("Navigator.sendBeacon")}} has been implemented, easing telemetry collection ([Firefox bug 936340](https://bugzil.la/936340)).
- Added a `relList` property returning a {{domxref("DOMTokenList")}} to {{domxref("HTMLLinkElement")}}, {{domxref("HTMLAreaElement")}} and {{domxref("HTMLAnchorElement")}} ([Firefox bug 968637](https://bugzil.la/968637)).
- As per the latest specification, the first argument of {{domxref("AudioScheduledSourceNode.start")}} and {{domxref("AudioScheduledSourceNode.stop")}} is now optional and defaults to `0` ([Firefox bug 982541](https://bugzil.la/982541)).
- The method `Navigator.requestWakeLock()` and the non-standard `MozWakeLock` are no longer available from the Web on Desktop ([Firefox bug 963366](https://bugzil.la/963366)).
- The `DOM_VK_ENTER` constant has been removed from {{domxref("KeyboardEvent")}} ([Firefox bug 969247](https://bugzil.la/969247)).
- Web components' `Document.register()` has been adapted to follow the behavior described in the latest version of the specification ([Firefox bug 856140](https://bugzil.la/856140)).
- The non-standard, and deprecated since Firefox 15, `Blob.mozSlice` is no longer supported ([Firefox bug 961804](https://bugzil.la/961804)).
- The non-standard `ArchiveReader` and `ArchiveRequest` are no longer exposed to the Web ([Firefox bug 968883](https://bugzil.la/968883)).
- [WebIDL constructors](https://searchfox.org/mozilla-central/source/dom/webidl/) cannot be called as functions anymore. They need to be preceded by the keyword `new`. ([Firefox bug 916644](https://bugzil.la/916644))
- Added support for a new value (`alpha`) for the second, optional, parameter of the {{domxref("HTMLCanvasElement.getContext()")}} method allowing to define if alpha blending must be stored or not for this context. When not, the per-pixel alpha value in this store is always `1.0`. This allows the back-end to implement a fast-track. ([Firefox bug 982480](https://bugzil.la/982480))
- `WorkerGlobalScope.console` now returns for the regular {{domxref("console")}}; `WorkerConsole` has been removed ([Firefox bug 965860](https://bugzil.la/965860)).
- The {{domxref("WEBGL_debug_shaders")}} WebGL extension has been implemented ([Firefox bug 968374](https://bugzil.la/968374)).

### MathML

_No change._

### SVG

- {{SVGElement("feDropShadow")}}, and its interface {{domxref("SVGFEDropShadowElement")}}, from the Filter Effects Module are now supported ([Firefox bug 964200](https://bugzil.la/964200)).

### Audio/Video

- On Linux, GStreamer 1.0 is now supported (instead of 0.10) ([Firefox bug 806917](https://bugzil.la/806917)).

## Security

_No change._

## Changes for add-on and Mozilla developers

- The interface `nsIDOMWindowUtils` now supports the Boolean attribute `audioMuted` and `audioVolume`, a float in the range `[0.0 , 1.0]`, allowing to control the sound produced by a window (that is any tab or iframe). There is no UI for this, but is available to add-ons. ([Firefox bug 923247](https://bugzil.la/923247))

### Older versions

{{Firefox_for_developers}}

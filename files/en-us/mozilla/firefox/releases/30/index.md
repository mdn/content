---
title: Firefox 30 for developers
slug: Mozilla/Firefox/Releases/30
tags:
  - Firefox
  - Firefox for Developers
---
{{FirefoxSidebar}}

## Changes for Web developers

### Developer Tools

- A Box Model Highlighter has been implemented ({{bug(663778)}}).
- Anywhere a DOM node appears in the console output, it is highlighted when you hover over that console output ({{bug(757866)}}). Similarly all JS functions and objects are highlighted in the console output ({{bug(584733)}}). More information about the console improvement can be found in this [blog post](https://web.archive.org/web/20150427210606/http://mihai.sucan.ro/mihai/blog/web-console-improvements-episode-30).
- Support for {{domxref("console.count()")}} has been added ({{bug(922208)}}).

### CSS

- The property {{cssxref("background-blend-mode")}} has been enabled by default ({{bug(970600)}}).
- The non-standard {{cssxref("overflow-clip-box")}} property has been implemented for use in UA stylesheets only ({{bug(966992)}}).
- The {{cssxref("line-height")}} property now affects single-line text inputs (`<input type=text|password|email|search|tel|url|unknown>` types) although it cannot shrink them below a line height of `1.0` ({{bug(349259)}}).
- The {{cssxref("line-height")}} property now also affects `type=button`, with no restrictions ({{bug(697451)}}).
- Change to keyframes' name does not affect current elements ({{bug(978648)}}).
- positioned internal table elements not abs pos containing block(relative position for table rows) ({{bug(63895)}}).

### HTML

_No change._

### JavaScript

- New ES2015-compatible [array comprehensions](/en-US/docs/Web/JavaScript/Reference/Operators/Array_comprehensions) `[for (item of iterable) item]` and [generator comprehensions](/en-US/docs/Web/JavaScript/Reference/Operators/Generator_comprehensions) `(for (item of iterable) item)` have been implemented ({{bug(979865)}}).
- [Typed arrays](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#property_access) are now extensible and support new named properties ({{bug(695438)}}).
- The {{jsxref("Error.prototype.stack")}} property now contains column numbers ({{bug(762556)}}) and has been improved [when using `Function()` and `eval()` calls](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/Stack#stack_of_eval'ed_code). This can help you to better debug minified or generated JavaScript code.
- The `Promise.cast()` method has been renamed to {{jsxref("Promise.resolve()")}} ({{bug(966348)}}).

### Interfaces/APIs/DOM

- {{domxref("Navigator.sendBeacon")}} has been implemented, easing telemetry collection ({{bug(936340)}}).
- Added a `relList` property returning a {{domxref("DOMTokenList")}} to {{domxref("HTMLLinkElement")}}, {{domxref("HTMLAreaElement")}} and {{domxref("HTMLAnchorElement")}} ({{bug(968637)}}).
- As per the latest specification, the first argument of {{domxref("OscillatorNode.start")}} and {{domxref("OscillatorNode.stop")}} is now optional and defaults to `0` ({{bug(982541)}}).
- The method {{domxref("Navigator.requestWakeLock()")}} and the non-standard {{domxref("MozWakeLock")}} are no longer available from the Web on Desktop ({{bug(963366)}}).
- The `DOM_VK_ENTER` constant has been removed from {{domxref("KeyboardEvent")}} ({{bug(969247)}}).
- Web components' {{domxref("Document.register")}} has been adapted to follow the behavior described in the latest version of the specification ({{bug(856140)}}).
- The non-standard, and deprecated since Firefox 15, {{domxref("Blob.mozSlice")}} is no longer supported ({{bug(961804)}}).
- The non-standard {{domxref("ArchiveReader")}} and {{domxref("ArchiveRequest")}} are no longer exposed to the Web ({{bug(968883)}}).
- [WebIDL constructors](https://searchfox.org/mozilla-central/source/dom/webidl/) cannot be called as functions anymore. They need to be preceded by the keyword `new`. ({{bug(916644)}})
- Added support for a new value (`alpha`) for the second, optional, parameter of the {{domxref("HTMLCanvasElement.getContext()")}} method allowing to define if alpha blending must be stored or not for this context. When not, the per-pixel alpha value in this store is always `1.0`. This allows the back-end to implement a fast-track. ({{bug(982480)}})
- {{domxref("GlobalWorkerScope.console")}} now returns for the regular {{domxref("console")}}; `WorkerConsole` has been removed ({{bug(965860)}}).
- The {{domxref("WebGL_debug_shaders")}} WebGL extension has been implemented ({{bug(968374)}}).

### MathML

_No change._

### SVG

- {{SVGElement("feDropShadow")}}, and its interface {{domxref("SVGFEDropShadowElement")}}, from the Filter Effects Module are now supported ({{bug(964200)}}).

### Audio/Video

- On Linux, Gstreamer 1.0 is now supported (instead of 0.10) ({{bug(806917)}}).

## Security

_No change._

## Changes for add-on and Mozilla developers

- The interface `nsIDOMWindowUtils` now supports the Boolean attribute `audioMuted` and `audioVolume`, a float in the range `[0.0` ,  `1.0]`, allowing to control the sound produced by a window (that is any tab or iframe). There is no UI for this, but is available to add-ons. ({{bug(923247)}})

### Older versions

{{Firefox_for_developers('29')}}

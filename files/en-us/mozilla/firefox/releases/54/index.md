---
title: Firefox 54 for developers
slug: Mozilla/Firefox/Releases/54
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

Firefox 54 was released on June 13, 2017. This article lists key changes that are useful for web developers.

## Changes for Web developers

### Developer Tools

- The network request summary now includes the amount of data actually transferred ("transferred size"), as does the performance analysis view ([Firefox bug 1168376](https://bugzil.la/1168376)).
- The network request headers view now links to the related documentation on MDN ([Firefox bug 1320233](https://bugzil.la/1320233)).

### CSS

- {{cssxref("clip-path")}} now supports [basic shapes](/en-US/docs/Web/CSS/CSS_shapes) ([Firefox bug 1247229](https://bugzil.la/1247229)).
- Firefox's implementations of CSS Flexbox and CSS alignment now implement updated spec language for interactions between the properties {{cssxref("align-items")}} and {{cssxref("align-self")}} as well as between {{cssxref("justify-items")}} and {{cssxref("justify-self")}} ([Firefox bug 1340309](https://bugzil.la/1340309)).
- {{htmlelement("input")}} elements of types `checkbox` and `radio` with {{cssxref("appearance", "-moz-appearance")}}`: none;` set on them are now non-replaced elements, for compatibility with other browsers ([Firefox bug 605985](https://bugzil.la/605985)).
- Previously, an element styled with {{cssxref("display")}}: `inline-block` with a child element of type {{domxref("HTMLInputElement")}} styled with `display:block` had a wrong baseline ([Firefox bug 1330962](https://bugzil.la/1330962)). This is now fixed.
- When Mozilla introduced dedicated content threads to Firefox (through the Electrolysis or e10s project), support for styling {{HTMLElement("option")}} elements was removed temporarily. Starting in Firefox 54, you can apply foreground and background colors to `<option>` elements again, using the {{cssxref("color")}} and {{cssxref("background-color")}} attributes. See [Firefox bug 910022](https://bugzil.la/910022) for more information. Note that this is still disabled in Linux due to lack of contrast (see [Firefox bug 1338283](https://bugzil.la/1338283) for progress on this).
- [CSS Animations](/en-US/docs/Web/CSS/CSS_animations) now send the {{domxref("Element/animationcancel_event", "animationcancel")}} event as expected when an animation aborts prematurely ([Firefox bug 1302648](https://bugzil.la/1302648)).
- Transparent colors (i.e. those with an alpha channel of 0) were being serialized to the [`transparent` color keyword](/en-US/docs/Web/CSS/color_value) in certain situations; this has been fixed so that Firefox follows the spec (as well as other browsers' implementations). See ([Firefox bug 1339394](https://bugzil.la/1339394) for further information.
- The proprietary `:-moz-table-border-nonzero` pseudo-class is no longer available to web content; it is now restricted to Firefox's internal UA stylesheet ([Firefox bug 1341925](https://bugzil.la/1341925)).
- \[css-grid] Intrinsic content with overflow:auto overlaps in grid ([Firefox bug 1348857](https://bugzil.la/1348857)).
- \[css-grid] Transferred min-size contribution of percentage size grid item with an intrinsic ratio ([Firefox bug 1349320](https://bugzil.la/1349320)).

### JavaScript

- `\b` and `\B` in {{jsxref("RegExp")}} with the `"u"` (Unicode) and `"i"` (case insensitive) flags now treat U+017F (LATIN SMALL LETTER LONG S) and U+212A (KELVIN SIGN) as word characters ([Firefox bug 1338373](https://bugzil.la/1338373)).
- The {{jsxref("DataView")}} constructor now throws a {{jsxref("RangeError")}} if the `byteOffset` parameter is out of {{jsxref("Number.MAX_SAFE_INTEGER")}} (>= 2 \*\* 53) ([Firefox bug 1317382](https://bugzil.la/1317382)).
- The {{jsxref("Date.UTC()")}} method has been updated to conform to ECMAScript 2017 when fewer than two arguments are provided ([Firefox bug 1050755](https://bugzil.la/1050755)).
- The {{jsxref("Function.prototype.toString()")}} method has been updated to match the latest [proposed specification](https://tc39.es/Function-prototype-toString-revision/) ([Firefox bug 1317400](https://bugzil.la/1317400)).

### DOM & HTML DOM

- The {{domxref("URL.toJSON()")}} method has been implemented ([Firefox bug 1337702](https://bugzil.la/1337702)).
- The {{domxref("URLSearchParams.URLSearchParams", "URLSearchParams()")}} constructor now accepts a record containing strings as an init object ([Firefox bug 1331580](https://bugzil.la/1331580)).
- Values returned in {{domxref("KeyboardEvent.key")}} for printable keys when the control key is also pressed have been corrected on macOS (except when the Command key is pressed) ([Firefox bug 1342865](https://bugzil.la/1342865)).
- The `dom.workers.latestJSVersion` preference, which was mainly implemented to work around problems using [`let`](/en-US/docs/Web/JavaScript/Reference/Statements/let) in workers (due to [Firefox bug 855665](https://bugzil.la/855665), which has since been fixed) has been removed (see [Firefox bug 1219523](https://bugzil.la/1219523)).
- The {{domxref("event.timeStamp")}} property now returns a high-resolution monotonic time ({{domxref("DOMHighResTimeStamp")}}) instead of a value representing [Unix time](/en-US/docs/Glossary/Unix_time) in milliseconds.

### Web Workers and Service Workers

- `WorkerGlobalScope.close` is now available on {{domxref("DedicatedWorkerGlobalScope.close", "DedicatedWorkerGlobalScope")}} and {{domxref("SharedWorkerGlobalScope.close", "SharedWorkerGlobalScope")}} instead. This change was made to stop `close()` being available on service workers, as it isn't supposed to be used there and always throws an exception when called (see [Firefox bug 1336043](https://bugzil.la/1336043)).
- The {{domxref("origin")}} property has been implemented (see [Firefox bug 1306170](https://bugzil.la/1306170)).
- The {{domxref("Client.type")}} property has been implemented (see [Firefox bug 1339844](https://bugzil.la/1339844)).
- {{domxref("Clients.matchAll()")}} now returns {{domxref("Client")}} objects in most recently focused order (see [Firefox bug 1266747](https://bugzil.la/1266747)).
- Some changes have been made to the observed behavior when the {{domxref("Request.Request","Request()")}} constructor is passed an existing {{domxref("Request")}} object instance to make a new instance. The following new behaviors are designed to retain security while making the constructor less likely to throw exceptions:

  - If this object exists on another origin to the constructor call, the {{domxref("Request.referrer")}} is stripped out.
  - If this object has a {{domxref("Request.mode")}} of `navigate`, the `mode` value is converted to `same-origin`.

### Audio/Video

#### General

- 5.1 surround sound playback is now enabled by default on Windows, macOS, and Linux ([Firefox bug 1334508](https://bugzil.la/1334508), [Firefox bug 1321502](https://bugzil.la/1321502), and [Firefox bug 1323659](https://bugzil.la/1323659)).

#### Media Capture and Streams API

- Usage of a {{domxref("MediaStream")}} object as the input parameter to {{domxref("URL.createObjectURL_static", "URL.createObjectURL()")}} has been deprecated — the console will now show a warning (see [Firefox bug 1334564](https://bugzil.la/1334564)). You are advised to use {{domxref("HTMLMediaElement.srcObject")}} instead.

#### Web Audio API

- The method {{domxref("AnalyserNode.getFloatFrequencyData()")}} now correctly represents silent samples in the returned buffer with the value `-Infinity` ([Firefox bug 1336098](https://bugzil.la/1336098)).
- {{domxref("AudioParam.setValueCurveAtTime()")}} now throws a `TypeError` exception if any of the specified values aren't finite ([Firefox bug 1308437](https://bugzil.la/1308437)).

#### Encrypted MediaExtensions API

- The `MediaKeySession.keySystem` string has been removed from the specification, and as such we've taken it out of Firefox 54 ([Firefox bug 1335555](https://bugzil.la/1335555)).
- Support has been added for the VP9 codec in encrypted streams using [Clear Key](https://www.w3.org/TR/encrypted-media/#clear-key) and [Widevine](https://www.widevine.com/) ([Firefox bug 1338064](https://bugzil.la/1338064)).
- Previously, MSE was only allowed to use WebM/VP8 video if the system was considered "fast enough." Now playback of VP8-encoded `webm/video` media is always supported, regardless of system performance.

#### WebRTC

- TCP ICE candidate support, originally added in Firefox 41, is now enabled by default. This allows the ICE layer to consider candidates that use TCP rather than the preferred UDP for transmission. This can be useful in environments in which UDP is blocked ([Firefox bug 1176382](https://bugzil.la/1176382)). This [blog post](https://blog.mozilla.org/webrtc/active-ice-tcp-punch-firewalls-directly/) explains the feature in more details.

## Removals from the web platform

### CSS

- Removed the `-moz` prefixed versions of `isolate`, `isolate-override`, and `plaintext` values for the {{cssxref("unicode-bidi")}} property ([Firefox bug 1333675](https://bugzil.la/1333675)).

### HTTP

- HTTP/1 Pipelining support has been removed in Firefox 54. Maintaining it as we make the move into a new world full of HTTP/2 and other substantial, standardized improvements to networking performance is not worthwhile given pipelining's compatibility and performance issues. The `network.http.pipelining` preference (as well as the other preferences that start with "network.http.pipelining") is now ignored. See [Firefox bug 1340655](https://bugzil.la/1340655) for further information.

## Older versions

{{Firefox_for_developers(53)}}

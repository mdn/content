---
title: Firefox 54 for developers
slug: Mozilla/Firefox/Releases/54
tags:
  - '54'
  - Firefox
  - Release Notes
---
{{FirefoxSidebar}}

Firefox 54 was released on June 13, 2017. This article lists key changes that are useful for web developers.

## Changes for Web developers

### Developer Tools

- The network request summary now includes the amount of data actually transferred ("transferred size"), as does the performance analysis view ({{bug(1168376)}}).
- The network request headers view now links to the related documentation on MDN ({{bug(1320233)}}).

### CSS

- {{cssxref("clip-path")}} now supports [basic shapes](/en-US/docs/Web/CSS/CSS_Shapes) ({{bug(1247229)}}).
- Firefox's implementations of CSS Flexbox and CSS alignment now implement updated spec language for interactions between the properties {{cssxref("align-items")}} and {{cssxref("align-self")}}  as well as between {{cssxref("justify-items")}} and {{cssxref("justify-self")}} ({{bug(1340309)}}).
- {{htmlelement("input")}} elements of types `checkbox` and `radio` with {{cssxref("appearance", "-moz-appearance")}}`: none;` set on them are now non-replaced elements, for compatibility with other browsers ({{bug(605985)}}).
- Previously, an element styled with {{cssxref("display")}}: `inline-block` with a child element of type {{domxref("HTMLInputElement")}} styled with `display:block` had a wrong baseline ({{bug(1330962)}}). This is now fixed.
- When Mozilla introduced dedicated content threads to Firefox (through the Electrolysis or e10s project), support for styling {{HTMLElement("option")}} elements was removed temporarily. Starting in Firefox 54, you can apply foreground and background colors to `<option>` elements again, using the {{cssxref("color")}} and {{cssxref("background-color")}} attributes. See {{bug(910022)}} for more information. Note that this is still disabled in Linux due to lack of contrast (see {{bug(1338283)}} for progress on this).
- [CSS Animations](/en-US/docs/Web/CSS/CSS_Animations) now send the {{domxref("HTMLElement/animationcancel_event", "animationcancel")}} event as expected when an animation aborts prematurely ({{bug(1302648)}}).
- Transparent colors (i.e. those with an alpha channel of 0) were being serialized to the [`transparent` color keyword](/en-US/docs/Web/CSS/color_value#transparent_keyword) in certain situations; this has been fixed so that Firefox follows the spec (as well as other browsers' implementations). See ({{bug("1339394")}} for further information.
- The proprietary `:-moz-table-border-nonzero` pseudo-class is no longer available to web content; it is now restricted to Firefox's internal UA stylesheet ({{bug(1341925)}}).
- \[css-grid] Intrinsic content with overflow:auto overlaps in grid ({{bug(1348857)}}).
- \[css-grid] Transferred min-size contribution of percentage size grid item with an intrinsic ratio ({{bug(1349320)}}).

### JavaScript

- `\b` and `\B` in {{jsxref("RegExp")}} with the `"u"` (Unicode) and `"i"` (case insensitive) flags now treat U+017F (LATIN SMALL LETTER LONG S) and U+212A (KELVIN SIGN) as word characters ({{bug(1338373)}}).
- The {{jsxref("DataView")}} constructor now throws a {{jsxref("RangeError")}} if the `byteOffset` parameter is out of {{jsxref("Number.MAX_SAFE_INTEGER")}} (>= 2 \*\* 53) ({{bug(1317382)}}).
- The {{jsxref("Date.UTC()")}} method has been updated to conform to ECMAScript 2017 when fewer than two arguments are provided ({{bug(1050755)}}).
- The {{jsxref("Function.prototype.toString()")}} method has been updated to match the latest [proposed specification](https://tc39.es/Function-prototype-toString-revision/) ({{bug(1317400)}}).

### DOM & HTML DOM

- The {{domxref("URL.toJSON()")}} method has been implemented ({{bug(1337702)}}).
- The {{domxref("URLSearchParams.URLSearchParams", "URLSearchParams()")}} constructor now accepts a record containing strings as an init object ({{bug("1331580")}}).
- Values returned in {{domxref("KeyboardEvent.key")}} for printable keys when the control key is also pressed have been corrected on macOS (except when the Command key is pressed) ({{bug(1342865)}}).
- The `dom.workers.latestJSVersion` preference, which was mainly implemented to work around problems using [`let`](/en-US/docs/Web/JavaScript/Reference/Statements/let) in workers (due to {{bug(855665)}}, which has since been fixed) has been removed (see {{bug(1219523)}}).
- The {{domxref("event.timeStamp")}} property now returns a high-resolution monotonic time ({{domxref("DOMHighResTimeStamp")}}) instead of an epoch time ({{domxref("DOMTimeStamp")}}).

### Web Workers and Service Workers

- {{domxref("WorkerGlobalScope.close")}} is now available on {{domxref("DedicatedWorkerGlobalScope.close", "DedicatedWorkerGlobalScope")}} and {{domxref("SharedWorkerGlobalScope.close", "SharedWorkerGlobalScope")}} instead. This change was made to stop `close()` being available on service workers, as it isn't supposed to be used there and always throws an exception when called (see {{bug(1336043)}}).
- The {{domxref("origin")}} property has been implemented (see {{bug(1306170)}}).
- The {{domxref("Client.type")}} property has been implemented (see {{bug(1339844)}}).
- {{domxref("Clients.matchAll()")}} now returns {{domxref("Client")}} objects in most recently focused order (see {{bug(1266747)}}).
- Some changes have been made to the observed behavior when the {{domxref("Request.Request","Request()")}} constructor is passed an existing {{domxref("Request")}} object instance to make a new instance. The following new behaviors are designed to retain security while making the constructor less likely to throw exceptions:

  - If this object exists on another origin to the constructor call, the {{domxref("Request.referrer")}} is stripped out.
  - If this object has a {{domxref("Request.mode")}} of `navigate`, the `mode` value is converted to `same-origin`.

### Audio/Video

#### General

- 5.1 surround sound playback is now enabled by default on Windows, macOS, and Linux ({{bug(1334508)}}, {{bug(1321502)}} , and {{bug(1323659)}}).

#### Media Capture and Streams API

- Usage of a {{domxref("MediaStream")}} object as the input parameter to {{domxref("URL.createObjectURL()")}} has been deprecated — the console will now show a warning (see {{bug(1334564)}}). You are advised to use {{domxref("HTMLMediaElement.srcObject")}} instead.

#### Web Audio API

- The method {{domxref("AnalyserNode.getFloatFrequencyData()")}} now correctly represents silent samples in the returned buffer with the value `-Infinity` ({{bug(1336098)}}).
- {{domxref("AudioParam.setValueCurveAtTime()")}} now throws a `TypeError` exception if any of the specified values aren't finite ({{bug(1308437)}}).

#### Encrypted MediaExtensions API

- The `MediaKeySession.keySystem` string has been removed from the specification, and as such we've taken it out of Firefox 54 ({{bug(1335555)}}).
- Support has been added for the VP9 codec in encrypted streams using [Clear Key](https://www.w3.org/TR/encrypted-media/#clear-key) and [Widevine](https://www.widevine.com/) ({{bug(1338064)}}).
- Previously, MSE was only allowed to use WebM/VP8 video if the system was considered "fast enough." Now playback of VP8-encoded `webm/video` media is always supported, regardless of system performance.

#### WebRTC

- TCP ICE candidate support, originally added in Firefox 41, is now enabled by default. This allows the ICE layer to consider candidates that use TCP rather than the preferred UDP for transmission. This can be useful in environments in which UDP is blocked ({{bug(1176382)}}). This [blog post](https://blog.mozilla.org/webrtc/active-ice-tcp-punch-firewalls-directly/) explains the feature in more details.

## Removals from the web platform

### CSS

- Removed the `-moz` prefixed versions of `isolate`, `isolate-override`, and `plaintext` values for the {{cssxref("unicode-bidi")}} property ({{bug(1333675)}}).

### HTTP

- HTTP/1 Pipelining support has been removed in Firefox 54. Maintaining it as we make the move into a new world full of HTTP/2 and other substantial, standardized improvements to networking performance is not worthwhile given pipelining's compatibility and performance issues. The `network.http.pipelining` preference (as well as the other preferences that start with "network.http.pipelining") is now ignored. See {{bug(1340655)}} for further information.

## Older versions

{{Firefox_for_developers(53)}}

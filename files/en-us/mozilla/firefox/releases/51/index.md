---
title: Firefox 51 for developers
slug: Mozilla/Firefox/Releases/51
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

[To test the latest developer features of Firefox, install Firefox Developer Edition](https://www.mozilla.org/firefox/developer/)Firefox 51 was released on January 24, 2017. This article lists key changes that are useful not only for web developers, but also Firefox and Gecko developers as well as add-on developers.

## Changes for Web developers

### HTML

- {{HTMLElement("hr")}} elements can now be used as separators in {{HTMLElement("menu")}} elements ([Firefox bug 870388](https://bugzil.la/870388)).
- The {{HTMLElement("input")}} and {{HTMLElement("textarea")}} elements' `selectionStart` and `selectionEnd` attributes now correctly return the current position of the text input cursor when there's no selection, instead of returning 0 ([Firefox bug 1287655](https://bugzil.la/1287655)).

### CSS

- Implemented {{cssxref(":indeterminate")}} for \<input type="radio"> ([Firefox bug 885359](https://bugzil.la/885359)).
- Implemented {{cssxref(":placeholder-shown")}} for `<input type="text">` ([Firefox bug 1069015](https://bugzil.la/1069015)).
- The {{cssxref("::placeholder")}} pseudo-element is now unprefixed ([Firefox bug 1069012](https://bugzil.la/1069012)).
- Fixed the {{cssxref(":valid")}} CSS pseudo-class which didn't match valid {{HTMLElement("form")}} elements ([Firefox bug 1285425](https://bugzil.la/1285425)).
- The `plaintext` value of {{cssxref("unicode-bidi")}} now also works with vertical writing modes ([Firefox bug 1302734](https://bugzil.la/1302734)).
- The `fill-box` and `stroke-box` values of {{cssxref("clip-path")}} are now properly supported; previously, they were aliases of `border-box` ([Firefox bug 1289011](https://bugzil.la/1289011)).
- Clamp flex line's height (clamping stretched flex items), in single-line auto-height flex container w/ max-height (spec change) ([Firefox bug 1000957](https://bugzil.la/1000957)).

### JavaScript

- The ES2015 {{jsxref("Symbol.toStringTag")}} property has been implemented ([Firefox bug 1114580](https://bugzil.la/1114580)).
- The ES2015 {{jsxref("TypedArray.prototype.toString()")}} and {{jsxref("TypedArray.prototype.toLocaleString()")}} methods have been implemented ([Firefox bug 1121938](https://bugzil.la/1121938)).
- The {{jsxref("Intl/DateTimeFormat/formatToParts", "DateTimeFormat.prototype.formatToParts()")}} method is now available ([Firefox bug 1289340](https://bugzil.la/1289340)).
- {{jsxref("Statements/const", "const")}} and {{jsxref("Statements/let", "let")}} are now fully ES2015-compliant ([Firefox bug 950547](https://bugzil.la/950547)).
- Using {{jsxref("Statements/const", "const")}} in [`for...of`](/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loops now has a fresh binding for each iteration and no longer throws a {{jsxref("SyntaxError")}} ([Firefox bug 1101653](https://bugzil.la/1101653)).
- The deprecated [for each...in](/en-US/docs/Web/JavaScript/Reference/Statements/for_each...in) loop now presents a [warning in the console](/en-US/docs/Web/JavaScript/Reference/Errors/For-each-in_loops_are_deprecated) ([Firefox bug 1293205](https://bugzil.la/1293205)). Please migrate your code to use the standardized [`for...of`](/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loop.
- [Generator functions](/en-US/docs/Web/JavaScript/Reference/Statements/function*) can't have a [label](/en-US/docs/Web/JavaScript/Reference/Statements/label) anymore and "`let`" as a label name is disallowed now ([Firefox bug 1288459](https://bugzil.la/1288459)).
- Deprecated [legacy generator functions](/en-US/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features) will now throw when used in [method definitions](/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions) ([Firefox bug 1199296](https://bugzil.la/1199296)).
- The `next()` method of the [iterator protocol](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) will now throw a {{jsxref("TypeError")}} if the returned value is not an object ([Firefox bug 1016936](https://bugzil.la/1016936)).
- Child-indexed pseudo-class selectors should match without a parent ([Firefox bug 1300374](https://bugzil.la/1300374)).

### Developer Tools

- [Network Monitor now shows a "Blocked" state for network requests.](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#timings)
- [All devtools bugs fixed between Firefox 50 and Firefox 51](https://bugzilla.mozilla.org/buglist.cgi?list_id=13263768&resolution=FIXED&classification=Client%20Software&chfieldto=2016-09-19&query_format=advanced&chfield=resolution&chfieldfrom=2016-08-01&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%20about%3Adebugging&component=Developer%20Tools%3A%20Animation%20Inspector&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Computed%20Styles%20Inspector&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20CSS%20Rules%20Inspector&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20DOM&component=Developer%20Tools%3A%20Font%20Inspector&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20JSON%20Viewer&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Design%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Shared%20Components&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox).

### WebGL

- [WebGL 2](/en-US/docs/Web/API/WebGL_API) is now enabled by default. See [webglsamples.org/WebGL2Samples](https://webglsamples.org/WebGL2Samples/) for a few demos.

  - WebGL 2 provides the {{domxref("WebGL2RenderingContext")}} interface that brings OpenGL ES 3.0 to the {{HTMLElement("canvas")}} element.
  - New features include:

    - [3D textures](/en-US/docs/Web/API/WebGL2RenderingContext/texImage3D),
    - [Sampler objects](/en-US/docs/Web/API/WebGLSampler),
    - [Uniform Buffer objects](/en-US/docs/Web/API/WebGL2RenderingContext#uniform_buffer_objects),
    - [Sync objects](/en-US/docs/Web/API/WebGLSync),
    - [Query objects](/en-US/docs/Web/API/WebGLQuery),
    - [Transform Feedback objects](/en-US/docs/Web/API/WebGLTransformFeedback),
    - Promoted extensions that are now core to WebGL 2: [Vertex Array objects](/en-US/docs/Web/API/WebGLVertexArrayObject), [instancing](/en-US/docs/Web/API/WebGL2RenderingContext/drawArraysInstanced), [multiple render targets](/en-US/docs/Web/API/WebGL2RenderingContext/drawBuffers), [fragment depth](/en-US/docs/Web/API/EXT_frag_depth).

- The `WEBGL_compressed_texture_es3` extension (implemented in Firefox 46) has been renamed to {{domxref("WEBGL_compressed_texture_etc")}} ([Firefox bug 1316778](https://bugzil.la/1316778)) and is no longer included by default in WebGL 2 contexts ([Firefox bug 1306174](https://bugzil.la/1306174)).
- The {{domxref("EXT_disjoint_timer_query")}} extension has been updated to use {{domxref("WebGLQuery")}} objects instead of `WebGLTimerQuery` objects ([Firefox bug 1308057](https://bugzil.la/1308057)).
- The {{domxref("OES_vertex_array_object")}} extension now uses the WebGL 2 {{domxref("WebGLVertexArrayObject")}} object instead of its own `WebGLVertexArrayObjectOES` object ([Firefox bug 1318523](https://bugzil.la/1318523)).
- You can now use {{domxref("ImageBitmap")}} objects as a sources for texture images in methods like {{domxref("WebGLRenderingContext.texImage2D()")}}, {{domxref("WebGLRenderingContext.texSubImage2D()")}}, {{domxref("WebGL2RenderingContext.texImage3D()")}}, or {{domxref("WebGL2RenderingContext.texSubImage3D()")}} ([Firefox bug 1324924](https://bugzil.la/1324924)).

### IndexedDB v2

- [IndexedDB](/en-US/docs/Web/API/IndexedDB_API) version 2 implementation is now complete:

  - Supports for the new {{domxref("IDBObjectStore.getKey()")}} method has been added ([Firefox bug 1271506](https://bugzil.la/1271506)).
  - Supports for {{domxref("IDBCursor.continuePrimaryKey()")}} method has been added ([Firefox bug 1271505](https://bugzil.la/1271505)).
  - Binary keys are now supported ([Firefox bug 1271500](https://bugzil.la/1271500)).
  - See also ["What's new in IndexedDB 2.0?" – Mozilla hacks](https://hacks.mozilla.org/2016/10/whats-new-in-indexeddb-2-0/)

### Canvas

- The non-standard `CanvasRenderingContext2D.mozFillRule()` method has been removed; the fill rule can be defined using a parameter of the standard {{domxref("CanvasRenderingContext2D.fill()")}} method ([Firefox bug 826619](https://bugzil.la/826619)).
- The {{domxref("CanvasRenderingContext2D.imageSmoothingEnabled")}} has been unprefixed ([Firefox bug 768072](https://bugzil.la/768072))

### SVG

- Added {{SVGAttr("tabindex")}} attribute ([Firefox bug 778654](https://bugzil.la/778654)).
- Added {{SVGAttr("href")}} attribute, which renders {{SVGAttr("xlink:href")}} obsolete ([Firefox bug 1245751](https://bugzil.la/1245751)).
- You can now use custom data attributes on SVG elements through the {{domxref("HTMLElement.dataset")}} property and the {{SVGAttr("data-*")}} set of SVG attributes ([Firefox bug 921834](https://bugzil.la/921834)).
- CSS Animations used in an SVG image which is presented in an {{HTMLElement("img")}} element now work again; this was an old regression ([Firefox bug 1190881](https://bugzil.la/1190881)).

### Web Workers

- The non-standard and obsolete {{domxref("DedicatedWorkerGlobalScope.close")}} event handler and {{domxref("Worker")}} use of the `close` event have been removed from Firefox.

### Networking

- Scripts served with an `image/*`, `video/*`, `audio/*` or `text/csv` MIME type are now blocked and are not loaded or executed. This happen when they are declared using {{HTMLElement("script")}}, or loaded via {{domxref("Worker.importScripts()")}}, {{domxref("Worker.Worker","Worker()")}}, {{domxref("SharedWorker.SharedWorker", "SharedWorker()")}} ([Firefox bug 1229267](https://bugzil.la/1229267) and [Firefox bug 1288361](https://bugzil.la/1288361)).
- Support for SHA-1 certificates from publicly-trusted certificate authorities has been removed ([Firefox bug 1302140](https://bugzil.la/1302140)). See also [Phasing Out SHA-1 on the Public Web](https://blog.mozilla.org/security/2016/10/18/phasing-out-sha-1-on-the-public-web/) for more information.
- New WoSign and StartCom certificates will no longer be accepted ([Firefox bug 1309707](https://bugzil.la/1309707)), see [Distrusting New WoSign and StartCom Certificates](https://blog.mozilla.org/security/2016/10/24/distrusting-new-wosign-and-startcom-certificates/) for more information.
- The [PAC](</en-US/docs/Mozilla/Projects/Necko/Proxy_Auto-Configuration_(PAC)_file>) `FindProxyForURL(url, host)` function now strips paths and queries from https\:// URLs to avoid information leakage (see [Firefox bug 1255474](https://bugzil.la/1255474), [Sniffing HTTPS URLS with malicious PAC files](https://www.contextis.com/us/blog/leaking-https-urls-20-year-old-vulnerability), or `CVE-2017-5384`).

### XHR

- The {{domxref("XMLHttpRequest.responseXML")}} property no longer returns a partial {{domxref("Document")}} with a \<parsererror> node placed at the top when a parse error occurs attempting to interpret the received data. Instead, it correctly returns `null` ([Firefox bug 289714](https://bugzil.la/289714)).
- To match the latest specification an {{domxref("XMLHttpRequest")}} without an {{HTTPHeader("Accept")}} header set with {{domxref("XMLHttpRequest.setRequestHeader()", "setRequestHeader()")}} is now sent with such a header, with its value set to `*/*` ([Firefox bug 918752](https://bugzil.la/918752)).
- Fixed {{domxref("XMLHttpRequest.open()")}} so that, when omitted, the `username` and `password` parameters now default to `null`, per the specification ([Firefox bug 933759](https://bugzil.la/933759)).

### WebRTC

- The {{domxref("RTCPeerConnection.removeStream()")}} method has been removed. It was deprecated back in Firefox 22, and has been throwing a `NotSupportedError` {{domxref("DOMException")}} for a long time. You need to use {{domxref("RTCPeerConnection.removeTrack()")}} instead, for each track on the stream.
- WebRTC now supports the VP9 codec by default. When added in Firefox 46, VP9 was disabled by default, but when enabled was the preferred codec; however, it has been moved to be the second choice (after VP8) due to its current level of CPU usage.
- The method {{domxref("HTMLMediaElement.captureStream()")}}, which returns a {{domxref("MediaStream")}} containing the content of the specified {{HTMLElement("video")}} or {{HTMLElement("audio")}}. It's worth noting that this is prefixed still as `mozCaptureStream()`, and that it doesn't yet exactly match the spec.

### Audio/video

- Added FLAC support ([FLAC codec](https://xiph.org/flac/index.html)) in both FLAC and Ogg containers ([Firefox bug 1195723](https://bugzil.la/1195723)). Supported FLAC MIME types are: `audio/flac` and `audio/x-flac`. For FLAC in Ogg, supported MIME types are: `audio/ogg; codecs=flac`, and `video/ogg; codecs=flac`.
- Added support for FLAC in MP4 (both with and without MSE) ([Firefox bug 1303888](https://bugzil.la/1303888)).
- Throttling in background tabs of timers created by {{domxref("setInterval()")}} and {{domxref("setTimeout()")}} was changed in Firefox 50 to no longer occur if a [Web Audio API](/en-US/docs/Web/API/Web_Audio_API) {{domxref("AudioContext")}} is actively playing sound. However, this didn't resolve all scenarios in which timing-sensitive audio playback (such as music players generating individual notes using timers) could fail to work properly. For that reason, Firefox 51 no longer throttles background tabs which have an {{domxref("AudioContext")}}, even if it's not currently playing sound.

### DOM

- The {{domxref("DOMImplementation.hasFeature()")}} now returns `true` in all cases ([Firefox bug 984778](https://bugzil.la/984778)).
- The {{domxref("HTMLInputElement")}} and {{domxref("HTMLTextAreaElement")}} properties `selectionStart` and `selectionEnd` now correctly return the current position of the text input cursor when there's no selection, instead of returning 0 ([Firefox bug 1287655](https://bugzil.la/1287655)).
- The {{domxref("HTMLImageElement")}} interface and the corresponding {{HTMLElement("img")}} element now support the `onerror` event handler, sending {{domxref("HTMLElement/error_event", "error")}} events to the element whenever [errors occur attempting to load or interpret images](/en-US/docs/Web/API/HTMLImageElement#errors).
- You can now change a Web {{domxref("Animation")}}'s effect by setting the value of its {{domxref("Animation.effect", "effect")}} property. Previously, this property was read-only ([Firefox bug 1049975](https://bugzil.la/1049975)).
- The Permissions API method {{domxref("Permissions.revoke()")}} has been put behind a preference (`dom.permissions.revoke.enable`) and disabled by default since its design and even its very existence is under discussion in the [Web Application Security Working Group](https://www.w3.org/2011/webappsec/).
- The [Storage API](/en-US/docs/Web/API/Storage_API)'s {{domxref("Navigator.storage")}} property and {{domxref("StorageManager.estimate()")}} method have been implemented along with the needed supporting code. Storage unit persistence features are not yet implemented. See [Firefox bug 1267941](https://bugzil.la/1267941).
- For privacy reasons, both {{domxref("BatteryManager.chargingTime")}} and {{domxref("BatteryManager.dischargingTime")}} now round the returned value to the closest 15 minutes ([Firefox bug 1292655](https://bugzil.la/1292655)).

### Events

- Firefox now supports the {{domxref("Element.onanimationstart", "onanimationstart")}}, {{domxref("Element.onanimationiteration", "onanimationiteration")}}, and {{domxref("Element.onanimationstart", "onanimationstart")}} event handlers, in addition to supporting the corresponding events using {{domxref("EventTarget.addEventListener", "addEventListener()")}} ([Firefox bug 911987](https://bugzil.la/911987)).
- Firefox now supports the {{domxref("Element.transitionend_event", "ontransitionend")}} event handler ([Firefox bug 911987](https://bugzil.la/911987)).

### Security

- When login pages (i.e., those containing an [`<input type="password">`](/en-US/docs/Web/HTML/Element/input/password) field) are created so that they would be submitted insecurely, Firefox displays a crossed-out lock icon in the address bar to warn users ([Firefox bug 1319119](https://bugzil.la/1319119)). See [Insecure passwords](/en-US/docs/Web/Security/Insecure_passwords) for more details.

### Removals

- The non-standard [Simple Push API](/en-US/docs/Archive/Firefox_OS/API/Simple_Push_API), mainly intended for use with Firefox OS and now superseded by the [W3C Push API](/en-US/docs/Web/API/Push_API), has been completely removed from Gecko ([Firefox bug 1296579](https://bugzil.la/1296579)).
- The non-standard [Alarms API](/en-US/docs/Archive/Firefox_OS/API/Alarm_API), mainly intended for use with Firefox OS, has been completely removed from Gecko ([Firefox bug 1300884](https://bugzil.la/1300884)).
- Support for prefixes in the [Page Visibility API](/en-US/docs/Web/API/Page_Visibility_API) has been removed ([Firefox bug 812701](https://bugzil.la/812701)).

## Changes for add-on and Mozilla developers

### WebExtensions

- New APIs:

  - {{WebExtAPIRef("idle.queryState()")}} ([Firefox bug 1299846](https://bugzil.la/1299846))
  - {{WebExtAPIRef("idle.onStateChanged")}} ([Firefox bug 1299775](https://bugzil.la/1299775))
  - {{WebExtAPIRef("management.getSelf()")}} ([Firefox bug 1283116](https://bugzil.la/1283116))
  - {{WebExtAPIRef("management.uninstallSelf()")}} ([Firefox bug 1220136](https://bugzil.la/1220136))
  - {{WebExtAPIRef("runtime.getBrowserInfo()")}} ([Firefox bug 1268399](https://bugzil.la/1268399))
  - {{WebExtAPIRef("runtime.reload()")}} and {{WebExtAPIRef("runtime.onUpdateAvailable()")}} ([Firefox bug 1279012](https://bugzil.la/1279012))

- You can now [embed a WebExtension in a legacy add-on type](/en-US/docs/Mozilla/Add-ons/WebExtensions/Embedded_WebExtensions) ([Firefox bug 1252215](https://bugzil.la/1252215)).
- [Clipboard access](/en-US/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard) is now supported ([Firefox bug 1197451](https://bugzil.la/1197451))
- The arguments passed to the callback of {{WebExtAPIRef("tabs.executeScript()")}} have been fixed ([Firefox bug 1290157](https://bugzil.la/1290157))
- [localStorage](/en-US/docs/Web/API/Window/localStorage) is now cleared when a WebExtension is uninstalled ([Firefox bug 1213990](https://bugzil.la/1213990))
- A changed {{HTTPHeader("Content-Type")}} header in Web Extensions is now taken into account ([Firefox bug 1304331](https://bugzil.la/1304331))

### Other

- The [`multiprocessCompatible` property of `install.rdf`](/en-US/docs/Mozilla/Add-ons/Install_Manifests#multiprocesscompatible) must now be explicitly set to `false` to prevent multiprocess from being enabled in Firefox when the add-on is installed.
- The Mozilla-specific [Social API](/en-US/docs/Mozilla/Projects/Social_API) has been substantially changed (largely to remove APIs no longer used), as follows:

  - The {{domxref("MozSocial")}} interface and the {{domxref("navigator.mozSocial")}} property which supports it have been removed.
  - The [Social Bookmarks API](/en-US/docs/Mozilla/Projects/Social_API/Bookmarks) has been removed.
  - The Social chat functionality has been removed.
  - The Social Status API has been removed.
  - All of the [social widgets](/en-US/docs/Mozilla/Projects/Social_API/Widgets), except for the Share panel, have been removed. This includes the social sidebar, flyover panels, and so forth.
  - All supporting user interface features and functionality for the removed APIs have been removed as well.
  - [Social service provider manifest](/en-US/docs/Mozilla/Projects/Social_API/Manifest) properties supporting the removed functionality are no longer supported.

- If an add-on uses `mimeTypes.rdf` to provide a file extension to MIME type mapping, it must now register an entry in the `"ext-to-type-mapping"` category ([Firefox bug 306471](https://bugzil.la/306471)).
- The [Browser API](/en-US/docs/Mozilla/Gecko/Chrome/API/Browser_API) now includes a `detail` object on the event object of the [`mozbrowserlocationchange`](/en-US/docs/Web/Events/mozbrowserlocationchange) event that contains `canGoForward`/`canGoBack` properties, allowing retrieval of the mozBrowser's back/forward status synchronously ([Firefox bug 1279635](https://bugzil.la/1279635)).

## Older versions

{{Firefox_for_developers(50)}}

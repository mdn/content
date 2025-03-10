---
title: Firefox 50 for developers
slug: Mozilla/Firefox/Releases/50
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

[To test the latest developer features of Firefox, install Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/).
Firefox 50 was released on November 15, 2016. This article lists key changes that are useful not only for web developers, but also Firefox and Gecko developers as well as add-on developers.

## Changes for Web developers

### HTML

- The default style of {{HTMLElement("bdo")}} now sets {{cssxref("unicode-bidi")}} with the `isolate-override` value ([Firefox bug 1249497](https://bugzil.la/1249497)).
- Setting the {{HTMLElement("track")}} element's [`src`](/en-US/docs/Web/HTML/Element/track#src) attribute now works correctly ([Firefox bug 1281418](https://bugzil.la/1281418)).
- The `referrerpolicy` attribute on {{HTMLElement("area")}}, {{HTMLElement("a")}}, {{HTMLElement("img")}}, {{HTMLElement("iframe")}} and {{HTMLElement("link")}} elements is now available by default ([Firefox bug 1223838](https://bugzil.la/1223838), [Firefox bug 1264165](https://bugzil.la/1264165)).

### CSS

- Corners with border-radius and with dashed and dotted styles are now rendered with the specified style instead of a solid style ([Firefox bug 382721](https://bugzil.la/382721)).
- The non-standard `:-moz-full-screen-ancestor` pseudo-class selector has been removed ([Firefox bug 1199529](https://bugzil.la/1199529)).
- The {{cssxref("box-sizing")}}`: padding-box` has been removed, since it's no longer a part of the spec and Firefox was the only major browser implementing it ([Firefox bug 1166728](https://bugzil.la/1166728)).
- The three values `isolate`, `isolate-override`, and `plaintext` of the {{cssxref("unicode-bidi")}} property have been unprefixed ([Firefox bug 1141895](https://bugzil.la/1141895)).
- In quirks mode, the bullet of a list item now inherits the size of the list, like in standards mode ([Firefox bug 648331](https://bugzil.la/648331)).
- The {{cssxref(":in-range")}} and {{cssxref(":out-of-range")}} pseudo-classes have changed behavior to not match disabled or read-only inputs ([Firefox bug 1264157](https://bugzil.la/1264157)).
- The {{cssxref(":any-link")}} pseudo-class is now unprefixed ([Firefox bug 843579](https://bugzil.la/843579)).
- The `space` value for {{cssxref("border-image-repeat")}} has been implemented ([Firefox bug 720531](https://bugzil.la/720531)).

### JavaScript

- The ES2015 {{jsxref("Symbol.hasInstance")}} property has been implemented ([Firefox bug 1054906](https://bugzil.la/1054906)).
- The ES2017 {{jsxref("Object.getOwnPropertyDescriptors()")}} method has been implemented ([Firefox bug 1245024](https://bugzil.la/1245024)).
- The behavior of \W in {{jsxref("RegExp")}} with unicode and ignoreCase flags is changed to match recent draft spec. Now it doesn't match to K, S, k, s, and KELVIN SIGN (U+212A), and LATIN SMALL LETTER LONG S (U+017F) ([Firefox bug 1281739](https://bugzil.la/1281739)).

### Developer Tools

- [The Web Console now understands source maps.](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html#source-maps)
- [The Storage Inspector now lets you delete individual items from IndexedDB object stores.](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html#indexeddb)
- [The Memory tool is enabled by default.](https://firefox-source-docs.mozilla.org/devtools-user/memory/index.html)
- [The Box model view is moved into the Computed view.](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#computed-view)
- [The Web Console now displays stack traces for XHR or Fetch() network requests.](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html#viewing-network-request-details)

[All devtools bugs fixed between Firefox 49 and Firefox 50](https://bugzilla.mozilla.org/buglist.cgi?list_id=13263766&chfield=resolution&chfieldfrom=2016-06-06&chfieldvalue=FIXED&resolution=FIXED&classification=Client%20Software&chfieldto=2016-08-01&query_format=advanced&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%20about%3Adebugging&component=Developer%20Tools%3A%20Animation%20Inspector&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Computed%20Styles%20Inspector&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20CSS%20Rules%20Inspector&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20DOM&component=Developer%20Tools%3A%20Font%20Inspector&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20JSON%20Viewer&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Design%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Shared%20Components&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox).

### HTTP

- The experimental (and deprecated) [SPDY](https://en.wikipedia.org/wiki/SPDY) 3.1 is now disabled by default [Firefox bug 1287132](https://bugzil.la/1287132).
- Support for {{HTTPHeader("X-Content-Type-Options")}} has been added ([Firefox bug 471020](https://bugzil.la/471020)).
- The cookie prefixes `__Host-` and `__Secure-` have been implemented. See {{HTTPHeader("Set-Cookie")}} and [Firefox bug 1283368](https://bugzil.la/1283368).
- The {{HTTPHeader("Referrer-Policy")}} header has been implemented [Firefox bug 1264164](https://bugzil.la/1264164).

### Security

- The [`ping`](/en-US/docs/Web/HTML/Element/a#ping) attribute of {{htmlelement("a")}} element now abides by the [`connect-src`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy#connect-src) [CSP 1.1 policy directive](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy) ([Firefox bug 1100181](https://bugzil.la/1100181)).
- Support for the [`sandbox`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy#sandbox) [CSP](/en-US/docs/Web/HTTP/CSP) directive has been added ([Firefox bug 671389](https://bugzil.la/671389)).
- It's now possible to set a [content security policy for workers](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers#content_security_policy) ([Firefox bug 959388](https://bugzil.la/959388)).
- The {{domxref("Navigator.sendBeacon()")}} method no longer throws an exception if the beacon data couldn't be sent due to a [Content Security Policy](/en-US/docs/Web/HTTP/CSP) restriction; instead, it returns `false` as expected ([Firefox bug 1234813](https://bugzil.la/1234813)).
- Support for RC4 encryption was deprecated in Firefox 36 and disabled by default in Firefox 44. The one-year grace period has ended, so Firefox 50 removes all support for RC4 (Google Chrome removed support for RC4 in August 2016). From now on, any time Firefox encounters RC4 encryption, it will report an `SSL_ERROR_NO_CYPHER_OVERLAP` error.

### Networking

- When an error has happened during an asynchronous {{domxref("XMLHttpRequest")}}, the {{domxref("XMLHttpRequest.getAllResponseHeaders()")}} method now returns an empty string ([Firefox bug 1286744](https://bugzil.la/1286744)).
- Instead of returning a `NetworkError`, asynchronous {{domxref("XMLHttpRequest")}} that fails for CORS or other network constraints now raises an {{domxref("XMLHttpRequest/error_event", "error")}} that can be caught like any other error ([Firefox bug 709991](https://bugzil.la/709991)).
- {{domxref("XMLHttpRequest.getResponseHeader()")}} and {{domxref("XMLHttpRequest.getAllResponseHeaders()")}} now also return empty headers by default. This can be controlled via the preference `network.http.keep_empty_response_headers_as_empty_string` ([Firefox bug 918721](https://bugzil.la/918721)).
- The `only-if-cached` option has been added to [`Request.cache`](/en-US/docs/Web/API/Request/cache) ([Firefox bug 1272436](https://bugzil.la/1272436)).

### DOM

- The `once` option for {{domxref("EventTarget.addEventListener()")}} is now supported ([Firefox bug 1287706](https://bugzil.la/1287706)).
- The interface {{domxref("NodeList")}} are now iterable and the methods {{domxref("NodeList.forEach()", "forEach()")}}, {{domxref("NodeList.values()", "values()")}}, {{domxref("NodeList.entries()")}} and {{domxref("NodeList.keys()")}} are now available ([Firefox bug 1290636](https://bugzil.la/1290636)).
- The interface {{domxref("DOMTokenList")}} are now iterable and the methods {{domxref("DOMTokenList.forEach()", "forEach()")}}, {{domxref("DOMTokenList.values()", "values()")}}, {{domxref("DOMTokenList.entries()")}} and {{domxref("DOMTokenList.keys()")}} are now available ([Firefox bug 1290636](https://bugzil.la/1290636)).
- The methods {{domxref("Document.createElement()")}} and {{domxref("Document.createElementNS()")}} now have an optional `options` parameter for creating [custom elements](/en-US/docs/Web/API/Web_components/Using_custom_elements) ([Firefox bug 1276579](https://bugzil.la/1276579)).

### SVG

- The `allowReorder` attribute has been dropped and the behavior it was setting is now the default for SVG {{SVGElement("switch")}} elements ([Firefox bug 1279690](https://bugzil.la/1279690)).
- The `defer` keyword for the {{SVGAttr("preserveAspectRatio")}} attribute on SVG {{SVGElement("image")}} elements has been removed to follow the latest SVG2 specification ([Firefox bug 1280425](https://bugzil.la/1280425)).

### Drag and Drop API

- The {{domxref("DataTransfer.items")}} property has been implemented, allowing access to multiple items being dragged and dropped using the HTML Drag and Drop API. To allow this, the {{domxref("DataTransferItem")}} and {{domxref("DataTransferItemList")}} interfaces are now supported as well ([Firefox bug 906420](https://bugzil.la/906420)). This is enabled by default.
- The old, obsolete Firefox specific drag and drop API events `dragdrop` and `draggesture` are no longer supported. Be sure to update any code still using them to use the [HTML drag and drop API](/en-US/docs/Web/API/HTML_Drag_and_Drop_API) ([Firefox bug 1162050](https://bugzil.la/1162050).

### Pointer Lock API

- The [Pointer Lock API](/en-US/docs/Web/API/Pointer_Lock_API) is now unprefixed ([Firefox bug 991899](https://bugzil.la/991899)).
- Before Firefox 50, [`requestPointerLock()`](/en-US/docs/Web/API/Element/requestPointerLock) asked for permission using a doorhanger, and pointer lock would not be enabled until the user granted permission. From Firefox 50, pointer lock is like the [fullscreen API](/en-US/docs/Web/API/Fullscreen_API): it's granted immediately, but a notification is displayed explaining to the user how to exit ([Firefox bug 1273351](https://bugzil.la/1273351)).

### IndexedDB

- A {{domxref("IDBDatabase/close_event", "close")}} event is now sent to the {{domxref("IDBDatabase")}} object when the corresponding database is unexpectedly closed ([Firefox bug 1151017](https://bugzil.la/1151017)).

### Service Workers

- The {{domxref("WindowClient.navigate()")}} method has been implemented. This method lets you open a specified URL into a client window which is being controlled by the service worker ([Firefox bug 1218148](https://bugzil.la/1218148)).

### WebGL

- The {{domxref("EXT_shader_texture_lod")}} WebGL extension has been implemented ([Firefox bug 1111689](https://bugzil.la/1111689)).
- The texImage methods have been updated for [WebGL 2](/en-US/docs/Web/API/WebGL2RenderingContext) to implement PBOs (`PIXEL_UNPACK_BUFFER`) ([Firefox bug 1280499](https://bugzil.la/1280499)).

### WebRTC

- Adding a track to a {{domxref("MediaStream")}} now generates the {{domxref("MediaStream/addtrack_event", "addtrack")}} event as described in the specification. The event is of type {{domxref("MediaStreamTrackEvent")}} and is fired on the stream to which the track was added. You can use either {{domxref("EventTarget.addEventListener", "MediaStream.addEventListener('addtrack', ...)")}} or the `onaddtrack` property to handle `"addtrack"` events.
- The {{domxref("MediaStreamTrack")}} interface now supports the {{domxref("MediaStreamTrack.ended_event", "ended")}} event and its event handler.
- Firefox now supports the {{domxref("MediaStreamTrack.readyState")}} property, which indicates whether the track is live or permanently ended.
- The {{domxref("MediaStreamTrack")}} methods {{domxref("MediaStreamTrack.getConstraints", "getConstraints()")}} and {{domxref("MediaStreamTrack.getSettings", "getSettings()")}} have been implemented; these let you get the most recently applied set of customized property constraints and the actual values of all of the track's constrainable properties, respectively. The accompanying data types have been documented as well.
- The `RTCDataChannel.stream` property has been removed. This was replaced with {{domxref("RTCDataChannel.id")}} in [Firefox 24](/en-US/docs/Mozilla/Firefox/Releases/24), but was supported for backward compatibility. Please be sure to update your code to use the `id` property if you haven't done so yet.

### Web Audio API

- The {{domxref("PannerNode")}} interface now supports the 3D Cartesian space properties for the position ({{domxref("PannerNode.positionX")}}, {{domxref("PannerNode.positionY")}}, and {{domxref("PannerNode.positionZ")}}) and directionality ({{domxref("PannerNode.orientationX")}}, {{domxref("PannerNode.orientationY")}}, {{domxref("PannerNode.orientationZ")}}) of an audio source.
- The interface {{domxref("IIRFilterNode")}}, which implements a general [infinite impulse response](https://en.wikipedia.org/wiki/Infinite_impulse_response) (IIR) filter, has been implemented.
- Throttling in background tabs of timers created by {{domxref("Window.setInterval()")}}, {{domxref("WorkerGlobalScope.setInterval()")}}, {{domxref("Window.setTimeout", "setTimeout()")}} and {{domxref("WorkerGlobalScope.setTimeout", "setTimeout()")}} no longer occurs if a [Web Audio API](/en-US/docs/Web/API/Web_Audio_API) {{domxref("AudioContext")}} is actively playing sound. This should help prevent issues with timing-sensitive audio playback (such as music players generating individual notes using timers) in the background ([Firefox bug 1181073](https://bugzil.la/1181073)).

### Audio/Video

- The `AlignSetting` enum (representing possible values for {{domxref("VTTCue.align")}}) incorrectly previously included the value `"middle"` instead of `"center"`. This has been corrected ([Firefox bug 1276130](https://bugzil.la/1276130)).
- The non-standard and experimental method {{domxref("HTMLMediaElement.seekToNextFrame()")}} now seeks to the next frame in the media asynchronously, rather than synchronously, and returns a {{jsxref("Promise")}} which resolves once the seek is complete.
- The implementation of {{domxref("HTMLTrackElement")}} has been corrected to allow {{HTMLElement("track")}} elements to load resources even if not in a document ([Firefox bug 871747](https://bugzil.la/871747)).

### Battery API

- The `Navigator.battery` property, which has been deprecated since Firefox 43, is now obsolete and has been removed. Use the {{domxref("navigator.getBattery()")}} method instead to get a battery {{jsxref("Promise")}}, which will resolve when the {{domxref("BatteryManager")}} is available for use; the {{domxref("BatteryManager")}} is passed into the fulfillment handler for the promise ([Firefox bug 12593355](https://bugzil.la/12593355)).

### Files and directories

- A subset of the [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API) has been implemented, to improve compatibility with sites that were previously only compatible with Google Chrome ([Firefox bug 1265767](https://bugzil.la/1265767)).

  - The asynchronous API interfaces have been implemented, with the caveat that only reading of files is supported; for example, the {{domxref("FileSystemFileEntry.createWriter()")}} method is a no-op.
  - These interfaces have been implemented:

    - {{domxref("FileSystem")}}
    - {{domxref("FileSystemEntry")}} (properties only; the methods have not been implemented)
    - {{domxref("FileSystemFileEntry")}} (except for {{domxref("FileSystemFileEntry.createWriter", "createWriter()")}})
    - {{domxref("FileSystemDirectoryEntry")}} (except for {{domxref("FileSystemDirectoryEntry.removeRecursively", "removeRecursively()")}})
    - {{domxref("FileSystemDirectoryReader")}}

  - {{domxref("HTMLInputElement.webkitdirectory")}} as well as the [`webkitdirectory`](/en-US/docs/Web/HTML/Element/input#webkitdirectory) attribute of the {{HTMLElement("input")}} element have been implemented; this lets you configure a file input to accept directories instead of files ([Firefox bug 1258489](https://bugzil.la/1258489)).
  - {{domxref("HTMLInputElement.webkitEntries")}} has been implemented; this returns an array of {{domxref("FileSystemEntry")}}-based objects representing the selected items.
  - {{domxref("File.webkitRelativePath")}} has been implemented; this contains the path of the file relative to the root of the containing {{domxref("FileSystemDirectoryEntry")}} that was among the items in the list returned by {{domxref("HTMLInputElement.webkitEntries")}}.
  - These APIs are now enabled by default; some were previously available but only behind a preference ([Firefox bug 1288683](https://bugzil.la/1288683)).

- We've implemented {{domxref("DataTransferItem.webkitGetAsEntry()")}} as part of the [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API); this lets you obtain a {{domxref("FileSystemEntry")}} representing a dropped file ([Firefox bug 1289255](https://bugzil.la/1289255)). This is enabled by default.
- The `HTMLInputElement.directory` property, part of the [Directory Upload API](https://wicg.github.io/directory-upload/proposal.html) proposal, has been renamed to `allowdirs` ([Firefox bug 1288681](https://bugzil.la/1288681)). This property is hidden behind a preference.

## Older versions

{{Firefox_for_developers}}

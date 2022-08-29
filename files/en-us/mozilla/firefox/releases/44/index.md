---
title: Firefox 44 for developers
slug: Mozilla/Firefox/Releases/44
tags:
  - Firefox
---
{{FirefoxSidebar}}

[To test the latest developer features of Firefox, install Firefox Developer Edition](https://www.mozilla.org/firefox/developer/)Firefox 44 was released on January 26, 2016. This article lists key changes that are useful not only for web developers, but also Firefox and Gecko developers as well as add-on developers.

## Changes for Web developers

### Developer tools

Highlights:

- [Memory tool](https://firefox-source-docs.mozilla.org/devtools-user/memory/index.html)
- [Animation inspector improvements](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/work_with_animations/index.html)
- [New Waterfall markers: DomContentLoaded, load, worker messages](https://web.archive.org/web/20211207010020/https://firefox-source-docs.mozilla.org/devtools-user/performance/waterfall/index.html#markers)

[All devtools bugs fixed between Firefox 43 and Firefox 44.](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2015-11-03&query_format=advanced&chfield=resolution&chfieldfrom=2015-09-19&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&list_id=12582678)

### HTML

- [`<link rel="prefetch">`](/en-US/docs/Web/HTTP/Link_prefetching_FAQ) now obeys the {{htmlattrxref("crossorigin", "link")}} attribute ({{bug(1214819)}}).

### CSS

- `position:` `fixed;` now always creates a new stacking context ({{bug(1179288)}}).
- The support of {{cssxref('@font-face/unicode-range', 'unicode-range')}} has been enabled by default ({{bug(1119062)}}).
- Our experimental implementation of CSS Writing Modes has been updated to reflect the latest specification:

  - The value `sideways` of the {{cssxref("text-orientation")}} property has been implemented and `sideways-right` has been made an alias of it ({{bug(1193488)}}).
  - The value `sideways-rl` and `sideways-lr` of the {{cssxref("writing-mode")}} property ({{bug(1193488)}} and {{bug(1193519)}}).

- The non-standard properties {{cssxref("-moz-math-display")}} and {{cssxref("-moz-window-shadow")}} are no more available from Web content ({{bug(1207002)}}, {{bug(1211040)}}, and {{bug(1212607)}}).
- The {{cssxref("font-style")}} property now distinguishes between `oblique` and `italic` when both variants are available ({{bug(543715)}}).
- Though not supported, the properties {{cssxref("@page/marks")}}, {{cssxref("orphans")}}, {{cssxref("page")}}, {{cssxref("size")}}, and {{cssxref("widows")}}, were parsed and {{cssxref("@supports")}} was incorrectly reporting them as supported; this has been fixed and the properties are not parsed anymore, nor marked as supported ({{bug(1215702)}}).
- The internal value `-moz-mac-unified-toolbar` has been removed from the possible values for the {{cssxref("appearance")}} property ({{bug(1206468)}}).
- Several `-webkit` prefixed properties and values have been added for web compatibility, behind the preference `layout.css.prefixes.webkit`, defaulting to `false` ({{bug(837211)}}):

  - `-webkit-animation`
  - `-webkit-animation-delay`
  - `-webkit-animation-direction`
  - `-webkit-animation-duration`
  - `-webkit-animation-fill-mode`
  - `-webkit-animation-iteration-count`
  - `-webkit-animation-name`
  - `-webkit-animation-play-state`
  - `-webkit-animation-timing-function`
  - `-webkit-text-size-adjust`
  - `-webkit-transform`
  - `-webkit-transform-origin`
  - `-webkit-transform-style`
  - `-webkit-transition`
  - `-webkit-transition-delay`
  - `-webkit-transition-duration`
  - `-webkit-transition-property`
  - `-webkit-transition-timing-function`
  - `-webkit-border-radius`
  - `-webkit-border-top-left-radius`
  - `-webkit-border-top-right-radius`
  - `-webkit-border-bottom-left-radius`
  - `-webkit-border-bottom-right-radius`
  - `-webkit-appearance`
  - `-webkit-background-clip`
  - `-webkit-background-origin`
  - `-webkit-background-size`
  - `-webkit-border-image`
  - `-webkit-box-shadow`
  - `-webkit-box-sizing`
  - `-webkit-user-select`
  - `-webkit-linear-gradient()` {{bug("1210575")}}
  - `-webkit-radial-gradient"()` {{bug("1210575")}}
  - `-webkit-repeating-linear-gradient()` {{bug("1210575")}}
  - `-webkit-repeating-radial-gradient()` {{bug("1210575")}}

### JavaScript

#### New APIs

- {{jsxref("Symbol.toPrimitive")}}, {{jsxref("Symbol.prototype.@@toPrimitive", "Symbol.prototype[@@toPrimitive]")}}, and {{jsxref("Date.prototype.@@toPrimitive", "Date.prototype[@@toPrimitive]")}} have been implemented ({{bug(1054756)}}).

#### Changes

- The [`let`](/en-US/docs/Web/JavaScript/Reference/Statements/let) and [`const`](/en-US/docs/Web/JavaScript/Reference/Statements/const) bindings in the global level have been made compliant with ES2015 semantics. See {{bug(589199)}} and the blog post ["Breaking changes in let and const in Firefox Nightly 44"](https://blog.mozilla.org/addons/2015/10/14/breaking-changes-let-const-firefox-nightly-44/). In addition, `let` is now available to default Web JavaScript (strict and non-strict) and does not require a version opt-in anymore ({{bug(932517)}}).
- If [typed arrays'](/en-US/docs/Web/JavaScript/Typed_arrays) (like {{jsxref("Int8Array", "Int8Array")}}) and {{jsxref("ArrayBuffer", "ArrayBuffer")}}) constructors are called as a function without the {{jsxref("Operators/new", "new")}} operator, a {{jsxref("TypeError")}} is now thrown as per the ES2015 specification ({{bug(980945)}}, {{bug(1214936)}}).
- The {{jsxref("RegExp")}} sticky flag now follows the ES2015 standard for [anchored sticky regular expressions](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky#anchored_sticky_flag) ({{bug(773687)}}).
- The JavaScript shell (SpiderMonkey's REPL) now defaults to the default, Web-compatible JS version (and not JS1.7+ anymore) ({{bug(1192329)}}).

#### Removals

- Support for the non-standard [`let` blocks](/en-US/docs/Web/JavaScript/Reference/Statements/let#let_blocks) has been dropped ({{bug(1167029)}}.
- The non-standard and deprecated property `Object.prototype.__noSuchMethod__` has been removed ({{bug(683218)}}).

### Interfaces/APIs/DOM

#### DOM & HTML DOM

- For compatibility with specific existing sites, the property `Document.charset` has been implemented as an alias of {{domxref("Document.characterSet")}} ({{bug(647621)}}).
- Support for the [`window.sidebar.addSearchEngine()`](/en-US/docs/Web/OpenSearch#installing_sherlock_plugins) method, which allowed Web pages to invoke an installation of a Sherlock plugin, has been dropped and now it just logs a warning in the Web Console ({{bug(862148)}}).
- To fight unwanted pop-ups, prompts requested in {{domxref("Window/beforeunload_event", "beforeunload")}} events of pages that have not been interacted with are no more displayed ({{bug(636905)}}).
- The deprecated method {{domxref("MessageEvent.initMessageEvent()")}} has been reimplemented for backward compatibility ({{bug(949376)}}).
- The obsolete property `DocumentType.internalSubset` has been removed ({{bug(801545)}}).
- For compatibility with existing sites, the properties {{domxref("Window.orientation")}} and {{domxref("Window.onorientationchange")}}, as well as the {{domxref("Window.orientationchange_event", "orientationchange")}} event have been implemented ({{bug(920734)}}).
- An {{HTMLElement("iframe")}} with explicit fullscreen request should not exit fullscreen implicitly ({{bug(1187801)}}).
- The events {{domxref("Element/mouseover_event", "mouseover")}}, {{domxref("Element/mouseout_event", "mouseout")}}, {{domxref("Element/mouseenter_event", "mouseenter")}}, {{domxref("Element/mouseleave_event", "mouseleave")}}, {{domxref("HTMLElement/pointermove_event", "pointermove")}}, {{domxref("HTMLElement/pointerover_event", "pointerover")}}, {{domxref("HTMLElement/pointerout_event", "pointerout")}}, {{domxref("HTMLElement/pointerenter_event", "pointerenter")}} and {{domxref("HTMLElement/pointerleave_event", "pointerleave")}} are now triggered for disabled form elements ({{bug(218093)}}).
- The method {{domxref("Element.webkitMatchesSelector()")}} has been added ({{bug(1216193)}}) to improve interoperability.
- To match the spec, the method {{domxref("Document.createAttribute()")}} now converts the input to lower case ({{bug(1176313)}}).
- The non-standard `dialog` feature for {{domxref("Window.open()")}} is no longer available to Web content. It is still available to extensions and other code with chrome privileges ({{bug(1095236)}}.

#### Canvas

- A new experimental {{domxref("OffscreenCanvas")}} API that allows rendering contexts (such as [WebGL](/en-US/docs/Web/API/WebGL_API)) to run in [Web Workers](/en-US/docs/Web/API/Web_Workers_API) has been implemented. To use this experimental API set `gfx.offscreencanvas.enabled` to `true` in about:config ({{bug(709490)}}). This API includes:

  - The {{domxref("OffscreenCanvas")}} interface,
  - {{domxref("HTMLCanvasElement.transferControlToOffscreen()")}}, and
  - {{domxref("WebGLRenderingContext.commit()")}}.
  - Several WebGL interfaces are now also available in a worker context when this API is enabled.

#### WebGL

- Uniform Buffer Objects have been implemented ({{bug(1048747)}}).

#### IndexedDB

- The {{domxref("IDBIndex.getAll()")}} and {{domxref("IDBIndex.getAllKeys()")}}, and there counterparts on {{domxref("IDBObjectStore")}} are now available by default ({{bug(1196841)}}).

#### Service Workers

- The `ServiceWorkerMessageEvent` and {{domxref("ExtendableMessageEvent")}} interfaces have been implemented ({{bug(1143717)}} and {{bug(1207068)}}).
- {{domxref("Headers")}} objects now support a pair iterator, meaning that the methods {{domxref("Headers.entries()")}}, {{domxref("Headers.keys()")}}, and {{domxref("Headers.values()")}} are now available; {{jsxref("Symbol.iterator")}} now also returns the default iterator for them ({{bug(1108181)}}).
- The {{domxref('XMLHttpRequest')}} API has been disabled on Service Workers ({{bug(931243)}}).
- The interface {{domxref("FetchEvent")}} now extends {{domxref("ExtendableEvent")}}, giving it access to the {{domxref("ExtendableEvent.waitUntil()")}} method. ({{bug(1214772)}}).
- Following a recent change in the specification, `FetchEvent.client` has been removed ({{bug(1218135)}}).
- To match the latest specification, the {{domxref("ServiceWorkerContainer.onreloadpage")}} has been removed ({{bug(1218139)}}).
- The event handlers {{domxref("ServiceWorkerGlobalScope.beforeevicted_event", "onbeforeevicted")}} and {{domxref("ServiceWorkerGlobalScope.evicted_event", "onevicted")}} have been removed as they weren't following the spec. They will be reintroduced in the future, but their removal will allow feature detection to work as expected ({{bug(1218142)}}).
- In the {{domxref("FetchEvent.FetchEvent", "FetchEvent()")}} constructor, if the `isReload` member is not present in the options dictionary, it now defaults to `false` ({{bug(1216401)}}).
- The {{domxref("Client.frameType")}} property is now implemented on the right interface; it was on {{domxref("WindowClient")}} before ({{bug(1218146)}}).
- When AppCache is used to provide offline support for a page, a warning message is now displayed in the console advising developers to use [Service workers](/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers) instead ({{bug("1204581")}}.)
- Service workers have been enabled by default in Gecko.

#### WebRTC

- WebRTC interfaces have been _unprefixed_ ({{bug(1155923)}}). In particular:

  - `mozRTCPeerConnection` is now {{domxref("RTCPeerConnection")}}.
  - `mozRTCIceCandidate` is now {{domxref("RTCIceCandidate")}}.
  - `mozRTCSessionDescription` is now {{domxref("RTCSessionDescription")}}.

- The {{domxref("RTCDataChannel.bufferedAmountLowThreshold")}} property, as well as the {{domxref("RTCDataChannel.bufferedamountlow_event", "bufferedamountlow")}} event and its event handler, have been implemented ({{bug(1178091)}}).
- The attribute {{domxref("RTCPeerConnection.canTrickleIceCandidates")}} has been added, the non-standard method {{domxref("RTCPeerConnection.updateIce()")}} removed ({{bug(1209744)}}).
- The {{domxref("MediaStream")}} interface now supports the {{domxref("MediaStream.addTrack()")}} and {{domxref("MediaStream.removeTrack()")}} methods ({{bug(1103188)}}).
- The constructor {{domxref("MediaStream.MediaStream", "MediaStream()")}} has been implemented ({{bug(1070216)}}).
- Support for the non-standard constraint style option list for `RTCOfferOptions` has been removed.

#### New APIs

- An experimental implementation of the Canvas API in Workers has landed: {{domxref("OfflineCanvas")}} and {{domxref("HTMLCanvasElement.transferControlToOffscreen()")}} are available behind the `gfx.offscreencanvas.enabled` preference, currently disabled by default ({{bug(709490)}}).
- The Text2Speech API, part of Web Speech API, has now an OS X backend. But this is disabled by default ({{bug(1003452)}}).

#### Miscellaneous

- {{domxref("URLSearchParams")}} objects now support a pair iterator, meaning that the methods {{domxref("URLSearchParams.entries()")}}, {{domxref("URLSearchParams.keys()")}}, and {{domxref("URLSearchParams.values()")}} are now available; {{jsxref("Symbol.iterator")}} now also returns the default iterator for them ({{bug(1085284)}}).
- {{domxref("FormData")}} objects now support a pair iterator, meaning that the methods {{domxref("FormData.entries()")}}, {{domxref("FormData.keys")}}, and {{domxref("FormData.values()")}} are now available; {{jsxref("Symbol.iterator")}} now also returns the default iterator for them ({{bug(1127703)}}).
- When {{domxref("XMLHttpRequest.send()")}} is used with an HTML document, it now uses `text/html` instead of `application/xml` ({{bug(918771)}}).
- Speech synthesis (text-to-speech) has been implemented in Firefox Desktop for Mac and Linux, hidden behind the `media.webspeech.synth.enabled` flag in `about:config` ({{bug("1003452")}}, {{bug("1003464")}}.) See [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) for more information.
- Elements inside a {{HTMLElement("frame")}} or an {{HTMLElement('object')}} can't be set fullscreen anymore ({{bug(1212299)}}).
- Sanitization of WOFF fonts is a bit more stricter, leading to more incorrect fonts being rejected, this sanitization is made a bit less stricter in Firefox 46 ({{bug(1193050)}} and {{bug (1244693)}}).

### MathML

_No change._

### SVG

_No change._

### Audio/Video

_No change._

## HTTP

- Support for the [Brotli](https://en.wikipedia.org/wiki/Brotli) algorithm has been added and both [`Accept-Encoding`](/en-US/docs/Web/HTTP/Content_negotiation#the_accept-encoding_header) and [`Content-Encoding`](/en-US/docs/Web/HTTP/Headers/Content-Encoding) headers now support the `br` value ({{bug(366559)}} and {{bug(1211916)}}).
- Incorrect support of HTTP/2 headers containing line breaks (`'/n'`) have been removed as the spec doesn't allow it, unlike HTTP/1 ({{bug(1197847)}}).

## Networking

_No change._

## Security

- RC4 is now also disabled by default on Beta and Release versions of the browser ({{bug(1201025)}}) and the whitelist is now empty by default ({{bug(1215796)}}).

## Changes for add-on and Mozilla developers

### Interfaces

_No change_

### XUL

_No change._

### JavaScript code modules

- Added `LIKE` support to Sqlite.jsm ({{bug(1188760)}}).
- Added [Snackbars.jsm](/en-US/docs/Mozilla/Add-ons/Firefox_for_Android/API/Snackbars.jsm) module to [Firefox for Android](/en-US/docs/Mozilla/Firefox_for_Android) ({{bug(1215026)}})

### XPCOM

- The `nsIDOMWindow` interface is now empty. Its contents were either no longer used, had moved elsewhere, or were only used from C++. The items available from C++ code now reside in the [nsPIDOMWindow](https://dxr.mozilla.org/mozilla-central/source/dom/base/nsPIDOMWindow.h) interface ({{bug(1216401)}}).

### Other

- Due to breaking changes in Firefox 44 ([bug 1202902](https://bugzilla.mozilla.org/show_bug.cgi?id=1202902)), add-ons packed with [cfx](/en-US/docs/Mozilla/Add-ons/SDK/Tools/cfx) will not work any longer. To make your add-on compatible again, please use [jpm](/en-US/docs/Mozilla/Add-ons/SDK/Tools/jpm). You can find steps to migrate from _cfx_ to _jpm_ [here](/en-US/docs/Mozilla/Add-ons/SDK/Tools/cfx_to_jpm).

## Older versions

{{Firefox_for_developers(43)}}

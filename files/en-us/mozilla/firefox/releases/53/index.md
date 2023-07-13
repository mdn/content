---
title: Firefox 53 for developers
slug: Mozilla/Firefox/Releases/53
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

Firefox 53 was released on April 19, 2017. This article lists key changes that are useful not only for web developers, but also Firefox and Gecko developers as well as add-on developers.

## Changes for Web developers

### Developer Tools

- Avoid scrolling latency on highlighters given by APZ ([Firefox bug 1312103](https://bugzil.la/1312103)).
- Added option to [copy the full CSS path](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#copy-css-path) of an element ([Firefox bug 1323700](https://bugzil.la/1323700)).
- Devtools support for css-color-4 ([Firefox bug 1310681](https://bugzil.la/1310681)).
- Markup view: add a visual hint between opening and closing tags of a collapsed node ([Firefox bug 1323193](https://bugzil.la/1323193)).

### CSS

#### New features

- The `mask-*` longhand properties (see [CSS Masks](/en-US/docs/Web/CSS/CSS_Masking)) are all supported and available by default (see [Firefox bug 1251161](https://bugzil.la/1251161)).
- Added {{cssxref("caret-color")}} property ([Firefox bug 1063162](https://bugzil.la/1063162)).
- Implemented the {{cssxref("place-items")}}/{{cssxref("place-self")}}/{{cssxref("place-content")}} shorthands ([Firefox bug 1319958](https://bugzil.la/1319958)).
- Added `flow-root` value to {{cssxref("display")}} property ([Firefox bug 1322191](https://bugzil.la/1322191)).
- {{cssxref("tab-size", "-moz-tab-size")}} now accepts {{cssxref("&lt;length&gt;")}} values ([Firefox bug 943918](https://bugzil.la/943918)), and is now animatable ([Firefox bug 1308110](https://bugzil.la/1308110)).
- {{cssxref("mask-mode")}}:luminance doesn't work on gradient masks ([Firefox bug 1346265](https://bugzil.la/1346265)).
- \[css-grid] FR Unit in {{cssxref("grid-template-rows")}} not filling viewport ([Firefox bug 1346699](https://bugzil.la/1346699)).
- flex items aren't sorted according to "order", if they're separated by an abspos sibling ([Firefox bug 1345873](https://bugzil.la/1345873)).

#### Other changes

- Enable mask longhands on SVG elements ([Firefox bug 1319667](https://bugzil.la/1319667)).
- \[css-grid] Fixed: `align-self`/`justify-self:stretch`/`normal` doesn't work on `<table>` grid items ([Firefox bug 1316051](https://bugzil.la/1316051)).
- Fixed: `clip-path: circle()` with large reference box and percentage radius does not render correctly ([Firefox bug 1324713](https://bugzil.la/1324713).
- When applying a {{cssxref("text-transform")}} value of `uppercase` to Greek text, the accent on the disjunctive eta (ή) is no longer removed (see [Firefox bug 1322989](https://bugzil.la/1322989)).
- The availability of the `contents` value of {{cssxref("display")}} was controlled through the `layout.css.display-contents.enabled` pref. In Firefox 53 this pref has been removed altogether, so the value will always be available and can no longer be disabled ([Firefox bug 1295788](https://bugzil.la/1295788)).

### JavaScript

- ECMAScript 2015 semantics for the {{jsxref("Function.name")}} properties have been implemented. This includes inferred names on anonymous functions (`var foo = function() {}`) ([Firefox bug 883377](https://bugzil.la/883377)).
- ECMAScript 2015 semantics for closing iterators have been implemented. This affects the [`for...of`](/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loop, for example ([Firefox bug 1147371](https://bugzil.la/1147371)).
- The [Template Literal Revision proposal](https://tc39.es/proposal-template-literal-revision/) that [lifts escape sequence restrictions on tagged template literals](/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates_and_escape_sequences) has been implemented ([Firefox bug 1317375](https://bugzil.la/1317375)).
- The static `length` property of {{jsxref("TypedArray")}} objects was changed from 3 to 0 as per ES2016 ([Firefox bug 1317306](https://bugzil.la/1317306)).
- {{jsxref("SharedArrayBuffer")}} can now be used in {{jsxref("DataView")}} objects ([Firefox bug 1246597](https://bugzil.la/1246597)).
- In earlier versions of the specification, {{jsxref("SharedArrayBuffer")}} objects needed to be explicitly transferred during [structured cloning](/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm). In the new specification they aren't [transferable objects](/en-US/docs/Web/API/Transferable) anymore and thus must not be in the transfer list. The new behavior used to present a console warning only, but will now throw an error ([Firefox bug 1302037](https://bugzil.la/1302037)).
- The {{jsxref("ArrayBuffer")}} length is now limited to {{jsxref("Number.MAX_SAFE_INTEGER")}} (>= 2 \*\* 53) ([Firefox bug 1255128](https://bugzil.la/1255128)).
- {{jsxref("Error")}} and other native error object prototypes like {{jsxref("RangeError")}} etc. are now ordinary objects instead of proper Error objects. (In particular, `Object.prototype.toString.call(Error.prototype)` is now `"[object Object]"` instead of `"[object Error]"`.) ([Firefox bug 1213341](https://bugzil.la/1213341)).

### Events

- CSS Transitions: The {{domxref("HTMLElement/transitionstart_event", "transitionstart")}}, {{domxref("HTMLElement/transitionrun_event", "transitionrun")}}, and {{domxref("HTMLElement/transitioncancel_event", "transitioncancel")}} events have been implemented (see [Firefox bug 1264125](https://bugzil.la/1264125) and [Firefox bug 1287983](https://bugzil.la/1287983)).
- The {{domxref("CompositionEvent.CompositionEvent", "CompositionEvent")}} constructor has been implemented (see [Firefox bug 1002256](https://bugzil.la/1002256)).
- The {{domxref("MouseEvent.x")}} and {{domxref("MouseEvent.y")}} aliases of {{domxref("MouseEvent.clientX")}}/{{domxref("MouseEvent.clientY")}} have been implemented (see [Firefox bug 424390](https://bugzil.la/424390)).
- The {{domxref("Element/auxclick_event", "auxclick")}} event and corresponding event handler have been implemented (see [Firefox bug 1304044](https://bugzil.la/1304044)).
- The {{domxref("HTMLElement/transitioncancel_event", "transitioncancel")}} event is now fired after a [transition](/en-US/docs/Web/CSS/CSS_Transitions) is cancelled.

### DOM

- The {{domxref("HTMLAnchorElement/pathname", "pathname")}} and {{domxref("HTMLAnchorElement/search", "search")}} {{domxref("HTMLHyperLinkElementUtils")}} properties previously returned the wrong parts of the URL. For example, for a URL of `http://z.com/x?a=true&b=false`, `pathname` would return "`/x?a=true&b=false"` and `search` would return "", rather than "`/x`" and "`?a=true&b=false"` respectively. This has now been fixed ([Firefox bug 1310483](https://bugzil.la/1310483)).
- The {{domxref("URLSearchParams.URLSearchParams", "URLSearchParams()")}} constructor now accepts a string or sequence of strings as an init object ([Firefox bug 1330678](https://bugzil.la/1330678)).
- The {{domxref("Selection.setBaseAndExtent()")}} method of the [Selection API](/en-US/docs/Web/API/Selection) is now implemented (see [Firefox bug 1321623](https://bugzil.la/1321623)).
- The ["fakepath"](https://html.spec.whatwg.org/multipage/forms.html#fakepath-srsly) addition to `file` type {{htmlelement("input")}} `values` has been implemented in Gecko, giving it parity with other browsers (see [Firefox bug 1274596](https://bugzil.la/1274596)).
- {{domxref("Node.getRootNode()")}} has been implemented, replacing the deprecated `Node.rootNode` property ([Firefox bug 1269155](https://bugzil.la/1269155)).
- Own properties of {{domxref("Plugin")}} and {{domxref("PluginArray")}} objects are no longer enumerable ([Firefox bug 1270366](https://bugzil.la/1270366)).
- Named properties of {{domxref("MimeTypeArray")}} objects are no longer enumerable ([Firefox bug 1270364](https://bugzil.la/1270364)).
- The [Permissions API](/en-US/docs/Web/API/Permissions_API) now has a new permission name available — `persistent-storage` — as used when making a {{domxref("Permissions.query()")}} (see [Firefox bug 1270038](https://bugzil.la/1270038)). This allows an origin to use a persistent box (i.e., [persistent storage](https://storage.spec.whatwg.org/#persistence)) for its storage, as per the [Storage API](https://storage.spec.whatwg.org/).
- The {{domxref("Performance.timeOrigin")}} property has been implemented ([Firefox bug 1313420](https://bugzil.la/1313420)).

### Workers and service workers

- The [Network Information API](/en-US/docs/Web/API/Network_Information_API) is now available in workers (see [Firefox bug 1323172](https://bugzil.la/1323172)).
- [Server-sent events](/en-US/docs/Web/API/Server-sent_events) can now be used from workers (see [Firefox bug 1267903](https://bugzil.la/1267903)).
- {{domxref("ExtendableEvent.waitUntil", "ExtendableEvent.waitUntil()")}} can now be called asynchronously (see [Firefox bug 1263304](https://bugzil.la/1263304)).

### WebGL

- The {{domxref("WEBGL_compressed_texture_astc")}} WebGL extension has been implemented ([Firefox bug 1250077](https://bugzil.la/1250077)).
- The {{domxref("WEBGL_debug_renderer_info")}} WebGL extension is now enabled by default ([Firefox bug 1336645](https://bugzil.la/1336645)).

### Audio, video, and media

#### General

- Beginning in **Firefox 53 for Android**, decoding of media is handled out-of-process for improved performance on multi-core systems ([Firefox bug 1333323](https://bugzil.la/1333323)).

#### Media elements

- The {{domxref("HTMLMediaElement.play()")}} method, used to begin playback of media in any media element, now returns a {{jsxref("Promise")}} which is fulfilled when playback begins and is rejected if an error occurs ([Firefox bug 1244768](https://bugzil.la/1244768)).

#### Web Audio API

- The {{domxref("AudioScheduledSourceNode")}} interface has been added and the {{domxref("AudioBufferSourceNode")}}, {{domxref("ConstantSourceNode")}}, and {{domxref("OscillatorNode")}} interfaces are now based on it ([Firefox bug 1324568](https://bugzil.la/1324568)).
- All the different audio node types have had constructors added to them ([Firefox bug 1322883](https://bugzil.la/1322883)).

#### WebRTC

- The {{domxref("RTCPeerConnection")}} methods {{domxref("RTCPeerConnection.createOffer", "createOffer()")}} and {{domxref("RTCPeerConnection.createAnswer", "createAnswer()")}} now return a {{jsxref("Promise")}} that returns an object conforming to the dictionary {{domxref("RTCSessionDescriptionInit")}} instead of returning an {{domxref("RTCSessionDescription")}} directly. Existing code will continue to work, but new code can be written more simply.
- Similarly, the {{domxref("RTCPeerConnection")}} methods {{domxref("RTCPeerConnection.setLocalDescription", "setLocalDescription()")}} and {{domxref("RTCPeerConnection.setRemoteDescription", "setRemoteDescription()")}} now accept as input an object conforming to the dictionary {{domxref("RTCSessionDescriptionInit")}}. Existing code continues to work, but [can be simplified](/en-US/docs/Web/API/RTCPeerConnection/setLocalDescription#about_the_session_description_parameter).
- {{domxref("RTCPeerConnection.addIceCandidate()")}} now accepts as input an initialization object. This is compatible with existing code but allows new code to be written slightly more simply when used in tandem with the changes listed above ([Firefox bug 1263312](https://bugzil.la/1263312)).
- {{Glossary("DTMF")}} support is now enabled by default using {{domxref("RTCDTMFSender")}}. See [Using DTMF with WebRTC](/en-US/docs/Web/API/WebRTC_API/Using_DTMF) for more information on how this works.

### HTTP/Networking

- Gecko now has a pref available in `about:config` to allow users to set their default {{HTTPHeader("Referrer-Policy")}} — `network.http.referer.userControlPolicy` ([Firefox bug 1304623](https://bugzil.la/1304623)). Possible values are:

  - 0 — `no-referrer`
  - 1 — `same-origin`
  - 2 — `strict-origin-when-cross-origin`
  - 3 — `no-referrer-when-downgrade` (the default)

- Support for Next Protocol Negotiation (NPN) has been removed in favor of [Application-Layer Protocol Negotiation](https://en.wikipedia.org/wiki/Application-Layer_Protocol_Negotiation) (ALPN) — see [Firefox bug 1248198](https://bugzil.la/1248198).
- The {{httpheader("Large-Allocation")}} HTTP header is now available by default, and no longer hidden behind a pref ([Firefox bug 1331083](https://bugzil.la/1331083)).

### SVG

- Partly implemented {{domxref("SVGGeometryElement")}} interface ([Firefox bug 1239100](https://bugzil.la/1239100)).

## Removals from the web platform

### HTML/XML

- The `dom.details_element.enabled` pref — which controlled enabling/disabling {{htmlelement("details")}} and {{htmlelement("summary")}} element support in Firefox — has now been removed from `about:config`. These elements (which were first enabled by default in Firefox 49) can no longer be disabled. See [Firefox bug 1271549](https://bugzil.la/1271549).
- The `mozapp` attribute of the {{htmlelement("iframe")}} element /{{domxref("HTMLIFrameElement")}} interface has been removed — this was used to enable a Firefox OS app to be embedded in a moz [Browser API](/en-US/docs/Mozilla/Gecko/Chrome/API/Browser_API) `<iframe>` ([Firefox bug 1310845](https://bugzil.la/1310845)).
- The {{domxref("HTMLIFrameElement.setInputMethodActive()")}} method and `InputMethod` interface (used to set and manage IMEs on Firefox OS apps) has been removed ([Firefox bug 1313169](https://bugzil.la/1313169)).

### CSS

- Removed `-moz` prefixed variant of {{cssxref(":dir", ":dir()")}} pseudo-class ([Firefox bug 1270406](https://bugzil.la/1270406)).
- The `-moz` prefixed version of {{cssxref("text-align-last")}} got removed ([Firefox bug 1276808](https://bugzil.la/1276808)).
- Removed `-moz` prefixed variant of {{cssxref("calc", "calc()")}} method ([Firefox bug 1331296](https://bugzil.la/1331296)).
- The proprietary `-moz-samplesize` media fragment (added to aid in delivery of downsampled images to low memory Firefox OS devices; see [Firefox bug 854795](https://bugzil.la/854795)) has been removed ([Firefox bug 1311246](https://bugzil.la/1311246)).

### JavaScript

- The non-standard {{jsxref("ArrayBuffer.slice()")}} method has been removed (but the standardized version {{jsxref("ArrayBuffer.prototype.slice()")}} is kept, see [Firefox bug 1313112](https://bugzil.la/1313112)).

### APIs

- The [Wi-Fi information API](/en-US/docs/Archive/B2G_OS/API/WiFi_Information_API), Speaker Manager API, and Tethering API, and [Settings API](/en-US/docs/Archive/B2G_OS/API/Settings_API) have been removed from the platform (see [Firefox bug 1313788](https://bugzil.la/1313788), [Firefox bug 1317853](https://bugzil.la/1317853), [Firefox bug 1313789](https://bugzil.la/1313789), and [Firefox bug 1313155](https://bugzil.la/1313155) respectively).

### Other

- The `legacycaller` has been removed from the {{domxref("HTMLEmbedElement")}} and {{domxref("HTMLObjectElement")}} interfaces ([Firefox bug 909656](https://bugzil.la/909656)).

## Changes for add-on and Mozilla developers

### WebExtensions

New APIs:

- [`browsingData`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/browsingData)
- [`identity`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/identity)
- [`contextualIdentities`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities)

Enhanced APIs:

- [`storage.sync`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage/sync)
- `page_action`, `browser_action`, `password`, `tab` [context types](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/menus/ContextType) in [`contextMenus`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/menus)
- [`webRequest.onBeforeRequest`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onBeforeRequest) now supports `requestBody`
- [`tabs.insertCSS`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/insertCSS) now supports `cssOrigin`, enabling you to insert user style sheets.

### JavaScript code modules

- The asynchronous [AddonManager APIs]((/en-US/docs/Mozilla/Add-ons/Add-on_Manager/AddonManager) now support {{jsxref("Promise", "Promises")}} as well as callbacks ([Firefox bug 987512](https://bugzil.la/987512).

## Older versions

{{Firefox_for_developers(52)}}

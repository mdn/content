---
title: Firefox 55 for developers
slug: Mozilla/Firefox/Releases/55
tags:
  - '55'
  - Firefox
  - Release Notes
---
{{FirefoxSidebar}}

Firefox 55 was released on August 8, 2017. This article lists key changes that are useful for web developers.

## Changes for Web developers

### Developer Tools

- Added filtering of network requests by column values and other properties ({{bug(1041895)}}, {{bug(1354508)}}, {{bug(1354507)}}) and by using regular expressions ({{bug(1354495)}}).
- Made it possible to show and hide columns within the [Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) ({{bug(862855)}}).
- Added remote IP ({{bug(1344523)}}), protocol ({{bug(1345489)}}), scheme ({{bug(1356867)}}), cookies and set cookies columns ({{bug(1356869)}}) to Network Monitor.
- The {{HTTPHeader("SourceMap")}} HTTP header is now supported (prior versions supported the deprecated `X-SourceMap` header, see {{bug(1346936)}}).

### HTML

- Elements on which {{htmlattrxref("contenteditable")}} has been set to `true` now use {{htmlelement("div")}} elements to separate different lines of text, to give Firefox parity with other modern browsers ({{bug(1297414)}}). See [Differences in markup generation](/en-US/docs/Web/Guide/HTML/Editable_content#differences_in_markup_generation) for more details.
- Enable `dom.forms.datetime` by default on Nightly ({{bug(1366188)}}).

### CSS

- Exposed the {{cssxref("transform-box")}} property by default ({{bug(1208550)}}).
- Implemented the [frames() timing function](</en-US/docs/Web/CSS/easing-function#the_frames()_class_of_timing-functions>) ({{bug(1248340)}}).
- Implemented the {{cssxref("text-justify")}} property ({{bug(1343512)}}, {{bug("276079")}}).
- \[css-grid] {{cssxref("fit-content")}} unexpectedly reserves space for full clamp size in {{cssxref("repeat", "repeat()")}} ({{bug(1359060)}}).
- The {{cssxref("float")}} / {{cssxref("clear")}} logical values — `inline-start` and `inline-end` — which were previously implemented but preffed off in release channels, are now available in all channels by default ({{bug(1253919)}}).
- The `layout.css.variables.enabled` preference has been removed completely meaning that the [CSS variables](/en-US/docs/Web/CSS/Using_CSS_custom_properties) feature is enabled all the time and can no longer be disabled ({{bug(1312328)}}).
- Implemented the proprietary `-moz-context-properties` property ({{bug(1058040)}}).
- Zero (0) angle value without degree unit is not correctly interpreted in {{cssxref("linear-gradient", "linear-gradient()")}} ({{bug(1363292)}}).
- The {{cssxref("::cue")}} pseudo-element is now supported; it matches on text cues presented within a media element ({{bug(1318542)}}).

### SVG

- The {{svgelement("radialGradient")}} {{ SVGAttr("fr") }} attribute has been implemented ({{bug("1240275")}}).

### JavaScript

- The {{jsxref("SharedArrayBuffer")}} and {{jsxref("Atomics")}} objects are now enabled by default. See [A Taste of JavaScript's New Parallel Primitives](https://hacks.mozilla.org/2016/05/a-taste-of-javascripts-new-parallel-primitives/) for an introduction to JavaScript Shared Memory and Atomics.
- The rest operator (`...`) is now supported in [object destructuring](/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) and the spread operator (`...`) now works in [object literals](/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals) (Stage 3 ECMAScript proposal: [Object Rest/Spread Properties](https://github.com/tc39/proposal-object-rest-spread), {{bug(1339395)}}).
- [Async generator methods](/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions#async_generator_methods) are now supported ({{bug(1353693)}}).
- The {{jsxref("String.prototype.toLocaleLowerCase()")}} and {{jsxref("String.prototype.toLocaleUpperCase()")}} methods now support an optional `locale` parameter to specify a language tag for locale-specific case mappings ({{bug(1318403)}}).
- The {{jsxref("Intl/Collator", "Intl.Collator")}} object now supports the `caseFirst` option ({{bug(866473)}}).
- The [Intl API](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl) now uses the browser's default locale instead of the operating system's default locale when no locale setting is provided ({{bug(1346674)}}).
- [Template call sites objects](/en-US/docs/Web/JavaScript/Reference/Template_literals) are now canonicalized per realm, based upon their list of raw strings ({{bug(1108941)}}).
- {{jsxref("TypedArray")}} constructors (like {{jsxref("Int8Array")}}, {{jsxref("Float32Array")}}, etc.) have been updated to ES2017. They now use the `ToIndex` operation and allow constructors without arguments, which return zero-length typed arrays ({{bug(1317383)}}).

### APIs

#### New APIs

- The [Collaborative Scheduling of Background Tasks API](/en-US/docs/Web/API/Background_Tasks_API) (also known as the **Background Tasks API** or the `requestIdleCallback` API) is now enabled by default after being available behind a preference since Firefox 53. This API lets you schedule tasks to be executed when the browser determines that there's free time available before the next repaint occurs, so that your code can make use of that time without causing visible performance lag ({{bug(1314959)}}).
- The [WebVR 1.1 API](/en-US/docs/Web/API/WebVR_API) is now turned on by default on Windows (and is available on macOS in Nightly). This API exposes virtual reality devices — for example head-mounted displays like the Oculus Rift or HTC Vive — to web apps, enabling developers to translate position and movement information from the display into movement around a 3D scene, and present content into such displays.
- The [Intersection Observer API](/en-US/docs/Web/API/Intersection_Observer_API) — which provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document's [viewport](/en-US/docs/Glossary/Viewport) — has been added ({{bug(1321865)}}).

#### DOM

- The {{domxref("Window")}} properties {{domxref("Window.scrollX", "scrollX")}} and {{domxref("Window.scrollY", "scrollY")}} (as well as their aliases {{domxref("Window.pageXOffset", "pageXOffset")}} and {{domxref("Window.pageYOffset", "pageYOffset")}}) have been updated to be subpixel precise. Instead of returning an integer, these now return a floating-point value which more accurately describes the scroll position on subpixel-precise displays ({{bug(1151421)}}). If need be, you can use {{jsxref("Math.round()")}} to convert them into integers.
- {{domxref("MediaQueryList")}} (and other related features) have been updated to match the latest spec. See {{bug("1354441")}}, and also see {{domxref("MediaQueryList")}} and {{domxref("MediaQueryListEvent")}}.
- Methods of the {{domxref("DOMTokenList")}} that modify the list value now automatically trim whitespace and remove duplicate tokens ({{bug("869788")}}, also see [Trimming of whitespace and removal of duplicates](/en-US/docs/Web/API/DOMTokenList#trimming_of_whitespace_and_removal_of_duplicates)).
- The {{domxref("HTMLInputElement")}}'s `maxLength` property can now be dynamically altered with JavaScript after the equivalent HTML has been created ({{bug(1352799)}}).
- The {{domxref("URL.URL", "URL()")}} constructor can no longer accept a `DOMString` as its base (2nd parameter) — it only accepts a `USVString`. It can still use an existing {{domxref("URL")}} object for the base, which stringifies itself to the object's `href` attribute ({{bug(1368950)}}).

#### DOM events

- The event types supported by the {{domxref("Document.createEvent()")}} method have been updated as per the latest DOM spec ({{bug(1251198)}}).
- The {{domxref("MessageEvent.origin")}} property value is now of type `USVString`, not `DOMString`, and the {{domxref("MessageEvent.source")}} property now takes a `MessageEventSource` value (which can be a {{domxref("WindowProxy")}}, {{domxref("MessagePort")}}, or {{domxref("ServiceWorker")}} object) ({{bug(1311324)}}).
- The pinch-to-zoom gesture has now been mapped to the {{domxref("Element/wheel_event","wheel")}} event plus the + `Ctrl` key. This mapping was implemented to allow developers to implement simple zooming functionality using the pinch-to-zoom gesture on mobile screens/trackpads (mousewheel + `Ctrl` commonly zooms) ({{bug(1052253)}}).

#### Selection API

- The [Selection API](/en-US/docs/Web/API/Selection) has been updated so that it has parity with other browsers in terms of how editing hosts are given focus when the selection moves inside them ({{bug("1318312")}}). See [Behavior of Selection API in terms of editing host focus changes](/en-US/docs/Web/API/Selection#behavior_of_selection_api_in_terms_of_editing_host_focus_changes) for more details.
- The {{domxref("Selection")}} API has been updated to match some recent spec changes ({{bug(1359371)}}):

  - The {{domxref("Selection.collapse", "collapse()")}} and {{domxref("Selection.extend", "extend()")}} methods' `offset` parameter is now optional.
  - The {{domxref("Selection.collapse", "collapse()")}} method's `node` parameter is now nullable.
  - The {{domxref("Selection.containsNode", "containsNode()")}} method's `partialContainment` parameter is now optional.
  - The {{domxref("Selection.deleteFromDocument", "deleteFromDocument()")}} method has been added.

- Also in the {{domxref("Selection")}} API, `Selection.empty()` and `Selection.setPosition()` have been added as aliases of {{domxref("Selection.removeAllRanges()")}} and {{domxref("Selection.collapse()")}}, for web compat and WebKit/Blink parity reasons ({{bug(1359387)}}).
- The {{domxref("StorageManager.persist()")}} and {{domxref("StorageManager.persisted()")}} methods of the [Storage API](/en-US/docs/Web/API/Storage_API) have been implemented and exposed to `Window` contexts ({{bug(1286717)}}).

#### Workers

- Workers and shared workers can now be created with an identifying `name` property. See the {{domxref("Worker.Worker", "Worker()")}} and {{domxref("SharedWorker.SharedWorker", "SharedWorker()")}} constructors, and the {{domxref("DedicatedWorkerGlobalScope")}} and {{domxref("SharedWorkerGlobalScope")}} interfaces. ({{bug(1364297)}}).
- {{domxref("setTimeout()")}} and {{domxref("setInterval()")}} are now subject to minimum interval throttling for tracking scripts in background tabs — see [Throttling of tracking timeout scripts](/en-US/docs/Web/API/setTimeout#throttling_of_tracking_timeout_scripts) ({{bug(1355311)}}).

#### Service Workers/Push

- Messages sent to service worker contexts (e.g. as the event object of {{domxref("ServiceWorkerGlobalScope.message_event","onmessage")}} are now represented by {{domxref("MessageEvent")}} objects, for consistency with other web messaging features.
- The {{domxref("PushManager.subscribe()")}} method now accepts {{jsxref("ArrayBuffer")}}s and Base64-encoded strings as `applicationServerKey` values ({{bug(1337348)}}).

#### Web Audio API

- A non-standard constructor (which accepted a string enum value indicating the purpose for which the context would be used) for {{domxref("AudioContext")}} interface was causing errors to be thrown when the `options` parameter was provided. We have removed the non-standard constructor. However, please note that the `options` parameter is not yet supported in Firefox and is currently ignored ({{bug(1361475)}}).

#### WebRTC

- {{domxref("mediaDevices.getUserMedia", "getUserMedia()")}} now provides a stereo audio stream by default if the source device provides stereo sound; support to specifically request mono input will come in [Firefox 56](/en-US/docs/Mozilla/Firefox/Releases/56). This only works on desktop at this time; mobile Firefox does not currently support stereo audio input sources ({{bug(971528)}}).
- The `getUserMedia()` [media capabilities, constraints, and settings](/en-US/docs/Web/API/Media_Streams_API/Constraints) `autoGainControl` and `noiseSuppression` now match the spec; formerly they were `moz`-prefixed ({{bug(1366415)}}).
- When called with an empty constraints set, `getUserMedia()` was incorrectly returning `NotSupportedError` instead of `TypeError`. This has been fixed ({{bug(1349480)}}).
- The following new WebRTC statistics are available: `framesEncoded`, `pliCount`, `nackCount`, and `firCount` ({{bug(1348657)}}).
- The `RTCInboundRTPStreamStats` dictionary field formerly called `mozRtt` has been renamed to `roundTripTime` to match the specification; in addition, its behavior has been adjusted to match the standard: it contains a double-precision floating point value which estimates the round-trip time based on the RTCP timestamps in the RTCP Receiver Report, measured in seconds (following the algorithm described in {{RFC(3550, "", "6.4.1")}}). ({{bug(1344970)}}). However, please be aware that _this property is moving_ to a different dictionary (`RTCRemoteInboundRTPStreamStats`) soon ({{bug(1380555)}}).
- The `RTCRTPStreamStats` dictionary now includes the fields `firCount`, `pliCount`, and `nackCount`. These return low-level information that can be used to determine how reliable the connection is ({{bug(1348657)}}).
- The `RTCOutboundRTPStreamStats` dictionary now includes the field `framesEncoded`, which reports the number of frames that have been successfully encoded for the stream; with this information, you can compute the frame rate ({{bug(1348657)}}).
- On Android, there's now a [pref](https://bugzilla.mozilla.org/show_bug.cgi?id=1265755#c36) to turn on hardware video encoding to improve video call performance and save on battery. To be enabled by default in [Firefox 56](/en-US/docs/Mozilla/Firefox/Releases/56) ({{bug(1265755)}}).

#### Encrypted Media Extensions API

- Firefox currently allows Encrypted Media Extensions to be used in insecure contexts, despite this not being allowed in the specification. This will be changed in the near future, and starting in Firefox 55, deprecation warnings are output to the [web console](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) when this is done. ({{bug(1361000)}}).
- Firefox currently doesn't require that at least one {{domxref("MediaKeySystemCapabilities")}} object be included in the `suggestedConfigurations` parameter passed into {{domxref("Navigator.requestMediaKeySystemAccess()")}}, which the specification does mandate. Starting in Firefox 55, a warning is output to the web console when any audio or video configuration is specified without specifying supported codecs. Soon, failure to include a valid configuration for one or more of audio and video will throw an exception {{bug(1368683)}}).

#### WebGL

- The {{domxref("WEBGL_compressed_texture_s3tc_srgb")}} extension is now available to [WebGL](/en-US/docs/Web/API/WebGL_API) and [WebGL2](/en-US/docs/Web/API/WebGL2RenderingContext) contexts ({{bug(1325113)}}).

### Security

- The {{domxref("Geolocation")}} API is now available only to [secure contexts](/en-US/docs/Web/Security/Secure_Contexts) ({{bug(1072859)}}).
- The {{domxref("Storage API")}} is now available only to [secure contexts](/en-US/docs/Web/Security/Secure_Contexts) ({{bug(1268804)}}).
- The loading of mixed content is now allowed on localhost ({{bug(903966)}}).
- Loading of remote JAR files has been disabled again ({{bug(1329336)}}). See [Security and the jar protocol](/en-US/docs/Mozilla/Security/Security_and_the_jar_protocol) for the full story.

### Plugins

- Flash content is now "click-to-activate" ({{bug(1317856)}}). This was immediately put into effect for all users of Nightly, and 50% of beta users. For Firefox 55 release version, the plan is to activate this for 5% of users 2 weeks after release, 25% of users 4 weeks after release, and 100% of users 6 weeks after release ({{bug(1365714)}}).
- Flash and other plugins can no longer be loaded from any URL scheme except for `http://` and `https://` ({{bug("1335475")}}).

### Other

- Firefox on Linux can now be made to run in [headless mode](/en-US/docs/Mozilla/Firefox/Headless_mode) using the `-headless` flag (see {{bug(1356681)}}).

## Removals from the web platform

### HTML

- The `xml:base` attribute can no longer be used to set the base URL for paths appearing in the {{htmlattrxref("style")}} attribute, for example —

  `<div xml:base="https://example.com/" style="background:url(picture.jpg)"></div>` ({{bug(1350521)}}).

- The {{htmlelement("style")}} element's {{htmlattrxref("scoped","style")}} attribute has been hidden behind a pref (`layout.css.scoped-style.enabled`) in content documents in Firefox 55+, as no other browsers support it.
- Support for the obscure `MSThemeCompatible` value of the {{htmlelement("meta")}} element's {{htmlattrxref("http-equiv","meta")}} attribute has been removed from Gecko. No other modern browsers support it, and it was causing compatibility problems ({{bug("966240")}}).

### CSS

- The proprietary `:-moz-bound-element` pseudo-class has been removed ({{bug(1350147)}}).
- The proprietary `-moz-anchor-decoration` value of {{cssxref("text-decoration-line")}} has been removed ({{bug(1355734)}}).

### APIs

- The `UIEvent.isChar` property has never been supported by any browser but Firefox, and it has never been fully-implemented except on macOS. For that reason, it was removed in Firefox 55 to align with other browsers.
- The proprietary Firefox OS Device Storage API has been removed from the platform ({{bug(1299500)}}).
- The `aShowDialog` parameter of the non-standard {{domxref("Window.find()")}} method (which could be specified to open up a "Find" dialog in the browser) has been removed ({{bug(1348409)}}).
- The `HTMLFormElement.requestAutoComplete()` method has been removed (see {{domxref("HTMLFormElement")}}) ({{bug(1270740)}}).
- The non-standard, Mozilla-specific, WebRTC offer options `mozDontOfferDataChannel` and `mozBundleOnly` have been removed from the `RTCOfferOptions` dictionary and are no longer supported by {{domxref("RTCPeerConnection.createOffer()")}} ({{bug(1196974)}}).
- Support for the proprietary Firefox OS [Audio Channels API](/en-US/docs/Archive/B2G_OS/API/Audio_Channels_API) has been removed from {{domxref("HTMLMediaElement")}} and {{domxref("AudioContext")}} ({{bug(1358061)}}).

### SVG

- The `SVGZoomEvent` and `SVGZoomEvents` interfaces have been removed from the SVG2 spec and Gecko, along with the `onzoom <svg>` attribute ({{bug(1314388)}}).

## Changes for add-on and Mozilla developers

### WebExtensions

- [contextMenus.create()'s command property enables you to open browser action popups, page action popups, and sidebars from the context menu.](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/menus/create)
- [proxy API](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/proxy)
- [chrome_settings_overrides key enables you to override the browser's homepage.](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides)
- browser_style property enables you to have browser-like styling for [browser action popups](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action), [sidebars](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action), and [options pages](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui).
- [permissions API](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/permissions)

## Older versions

{{Firefox_for_developers(54)}}

---
title: Firefox 48 for developers
slug: Mozilla/Firefox/Releases/48
tags:
  - '48'
  - Firefox
  - Mozilla
  - Release
---
{{FirefoxSidebar}}

[To test the latest developer features of Firefox, install Firefox Developer Edition](https://www.mozilla.org/firefox/developer/) Firefox 48 was released on August 2, 2016. This article lists key changes that are useful not only for web developers, but also Firefox and Gecko developers as well as add-on developers.

## Changes for Web developers

### Developer Tools

- The position of elements can now be changed within the content ({{bug(1139187)}}).
- Implemented {{domxref("console.clear()")}} to clear the console output ({{bug(659625)}}).
- Added [HTTP log inspection to the Web Console](/en-US/docs/Tools/Web_Console/Console_messages#viewing_network_request_details) ({{bug(1211525)}}).
- Added a [Firebug theme](/en-US/docs/Tools/Tools_Toolbox#choose_devtools_theme) ({{bug(1244054)}}).
- Added the [DOM Inspector](/en-US/docs/Tools/DOM_Property_Viewer) ({{bug(1201475)}}).
- [Font inspector](/en-US/docs/Tools/Page_Inspector/UI_Tour#fonts_view) has been enabled by default again ({{bug(1280121)}}).
- [Improved suggestions](/en-US/docs/Tools/Page_Inspector/How_to/Examine_and_edit_CSS#edit_rules) for CSS properties ({{bug(1168246)}}).
- Cookies, localstorage and sessionstorage entries are editable via double-click ({{bug(1231154)}}, {{bug(1231179)}}, {{bug(1231155)}}).

### HTML

- The {{HTMLElement("details")}} and {{HTMLElement("summary")}} elements have been activated by default on Nightly and Aurora (DevTools), but not on Beta or Release:

  - The default style for these elements has been adapted to match the spec ({{bug(1258657)}}).
  - The {{event("toggle")}} event is now sent to the {{HTMLElement("details")}} element when this one is opened or closed ({{bug(1225412)}}).

- The {{htmlattrxref("meta", "referrer")}} attributes now also supports the `no-referrer-when-downgrade` and `origin-when-cross-origin` values ({{bug(1178337)}}).

### CSS

- The {{cssxref("calc()")}} has been improved to be closer to the specification:

  - {{cssxref("calc()")}} is now supported on the {{cssxref("line-height")}} property ({{bug(594933)}}).
  - Added support for nested CSS {{cssxref("calc()")}} ({{bug(968761)}}).

- Our experimental implementation of CSS grids has been updated:

  - Fragmentation for grid layout has been implemented ({{bug(1144096)}}).
  - \[css-grid] Percentage tracks are now treated as `auto` if grid container size is indefinite ({{bug(1264607)}}).
  - {{HTMLElement("fieldset")}} now supports grid and flex layouts ({{bug(1230207)}}).

- The `luminance` value for {{cssxref("mask-mode")}} has been added; the `auto` value has been renamed to `match-source`, to match the spec ({{bug(1228354)}}).
- Interpolation of {{cssxref("clip-path")}} basic shapes in CSS animations and transitions is now supported ({{bug(1110460)}}).
- Support for horizontal-in-vertical (_tate-chu-yoko_) text has been added via the `all` value of the {{cssxref("text-combine-upright")}} property ({{bug(1097499)}}).
- Support for the experimental {{cssxref("color-adjust")}} property has been added, allowing pages to specify that background colors and images should be printed ({{bug(1209273)}}).
- The {{cssxref("::first-letter")}} pseudo-element now also matches punctuation characters of type Pd that precede or immediately follow the actual first letter; this is a new requirement of CSS Pseudo-element module level 4 ({{bug(1260366)}}).
- Several `-webkit` prefixed properties and values have been added for web compatibility, behind the preference `layout.css.prefixes.webkit`, defaulting to `false`:

  - {{cssxref("-webkit-text-fill-color")}} ({{bug(1247777)}}).
  - {{cssxref("-webkit-text-stroke")}}, {{cssxref("-webkit-text-stroke-color")}}, {{cssxref("-webkit-text-stroke-width")}} ({{bug(1248708)}}).
  - `-webkit-background-clip`  (as background-clip) text value ({{bug(759568)}}).
  - `-webkit-box-direction`, `-webkit-box-orient` ({{bug(1262049)}}.
  - The value `-webkit-inline-box` is now an alias of `inline-flex` on the {{cssxref("display")}} property. ({{bug(1257661)}}).
  - `-webkit-flex-direction`, `-webkit-flex-wrap`, `-webkit-flex-flow`, `-webkit-order`, `-webkit-flex`, `-webkit-flex-grow`, `-webkit-flex-shrink`, `-webkit-flex-basis`, `-webkit-justify-content`, `-webkit-align-items`, `-webkit-align-self` and `-webkit-align-content` were added as aliases for the unprefixed properties and the values `-webkit-flex` and `-webkit-inline-flex` for the {{cssxref("display")}} property as aliases for the unprefixed values ({{bug(1274096)}}).
  - Added `-webkit-box-flex`, `-webkit-box-ordinal-group`, `-webkit-box-align` and `-webkit-box-pack` properties and `-webkit-box` value to {{cssxref("display")}} as aliases for modern [CSS Flexbox](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Typical_Use_Cases_of_Flexbox) ({{bug(1208635)}}).

- The `text` value of {{cssxref("background-clip")}} is now available in all type of Firefox (and not only non-release builds) ({{bug(1263516)}}).
- The `absolute` value of {{cssxref("position")}} properties on the top layer element ({{bug(1236828)}}).
- Added an internal-only syntax for {{domxref("@supports")}} to detect pref ({{bug(1259889)}}).

### JavaScript

#### New APIs

- The {{jsxref("String.prototype.padStart()")}} and {{jsxref("String.prototype.padEnd()")}} methods have been implemented ({{bug(1260509)}}).
- The ES2015 {{jsxref("Symbol.unscopables")}} and {{jsxref("Array.@@unscopables", "Array.prototype[@@unscopables]")}} properties have been implemented ({{bug(1054759)}} and {{bug(1258163)}}).
- The ES2015 {{jsxref("Symbol.isConcatSpreadable")}} symbol has been implemented ({{bug(1041586)}}).
- The ES2015 {{jsxref("Array.@@species", "Array[@@species]")}} getter has been implemented ({{bug(1165052)}}).
- The ES2015 {{jsxref("ArrayBuffer.@@species", "ArrayBuffer[@@species]")}} getter and {{jsxref("TypedArray.@@species", "%TypedArray%[@@species]")}} getter have been implemented ({{bug(1165053)}}).
- The {{jsxref("Intl.getCanonicalLocales()")}} method of the ECMAScript Internationalization API draft has been implemented ({{bug(1263040)}}).

#### Deprecations and removals

- The deprecated [old Proxy API](/en-US/docs/Archive/Web/Old_Proxy_API) (`Proxy.create` and `Proxy.createFunction()`) has been removed. Use the standard {{jsxref("Proxy")}} object instead ({{bug(892903)}}).
- The `String.prototype.contains()` method has been removed (it was deprecated since version 40). Use the {{jsxref("String.prototype.includes()")}} method instead ({{bug(1103588)}}).
- The non-standard `RegExp.multiline` property (not {{jsxref("RegExp.prototype.multiline")}}) has been removed. Use the standard [m flag](/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#advanced_searching_with_flags) instead ({{bug(1219757)}}).
- The {{jsxref("Object.__defineGetter__", "__defineGetter__")}} and {{jsxref("Object.__defineSetter__", "__defineSetter__")}} methods can no longer be called at the global scope without any object. ({{bug(1253016)}}).

### Interfaces/APIs/DOM

#### DOM & HTML DOM

- Dropped the "Moz" prefix from the {{domxref("CSSKeyframeRule")}} and {{domxref("CSSKeyframesRule")}} interfaces ({{bug(1256178)}}).
- The {{domxref("NavigatorConcurrentHardware")}} {{Glossary("mixin")}} has been implemented, which adds the {{domxref("NavigatorConcurrentHardware.hardwareConcurrency", "window.navigator.hardwareConcurrency")}} property to the {{domxref("Navigator")}} interface. This lets Web sites and apps get at least an approximation of how many processing cores are available to run {{domxref("Worker")}}s in ({{bug(1008453)}}).
- The {{domxref("Node.isSameNode()")}} method, which was removed in Firefox 10, has returned after being added back into the specification after a lengthy absence ({{bug(1256299)}}).
- Firefox now returns proper exceptions instead of numbers when things go wrong during a call to {{domxref("Navigator.registerProtocolHandler()")}}.
- {{domxref("Element.animate()")}} is now activated by default ({{bug(1245000)}}).
- The two methods {{domxref("Element.insertAdjacentText()")}} and {{domxref("Element.insertAdjacentElement()")}} have been implemented ({{bug(811259)}}).
- {{domxref("Document.scrollingElement")}} got enabled by default ({{bug(1265032)}}).
- `Node.localName`, `Node.namespaceURI` and `Node.prefix` were moved to the {{domxref("Element")}} and {{domxref("Attr")}} APIs ({{bug(1055776)}}).
- Per the latest specification, the values of {{domxref("KeyboardEvent.code")}} returned for the following keys have been changed see ({{bug(1264150)}}):

  - `"OSLeft"` and `"OSRight"` are now `"MetaLeft"` and `"MetaRight"`.
  - `"VolumeDown"`, `"VolumeUp"`, and `"VolumeMute"` are now `"AudioVolumeDown"`, `"AudioVolumeUp"`, and `"AudioVolumeMute"`.
  - `"IntlHash"` has been removed.
  - All keys whose `code` values were reported as "" in earlier versions of Firefox are now reported as "Unidentified".

#### Canvas 2D

- The {{domxref("CanvasRenderingContext2D.ellipse()")}} method has been implemented ({{bug(910138)}}).

#### WebRTC

- The two methods {{domxref("MediaStream.clone()")}} and {{domxref("MediaStreamTrack.clone()")}} have been implemented ({{bug(1208371)}}).
- The `iceRestart` entry is now supported in the `RTCOfferOptions`code> dictionary, allowing {{domxref("RTCPeerConnection.createOffer", "createOffer()")}} to be used to request ICE restarts ({{bug(906986)}}).
- The {{domxref("RTCPeerConnection.createOffer()")}} method now prefers the VP9 video codec by default; previously VP8 was preferred ({{bug(1242324)}}.
- WebM/VP8 video that includes video resolution changes that has been recorded using {{domxref("MediaRecorder")}} can now be played back successfully.

#### Others

- The [Web Crypto API](/en-US/docs/Web/API/Web_Crypto_API) is now available in [Web workers](/en-US/docs/Web/API/Web_Workers_API) ({{bug(842818)}}).
- The {{domxref("CustomEvent")}} interface is now available in [Web Workers](/en-US/docs/Web/API/Web_Workers_API) ({{bug(1003432)}}).
- The `DOMApplicationsManager.getNotInstalled()` method has been removed ({{bug("1255036")}}).
- Several Firefox OS APIs that were erroneously exposed to the Web have now been hidden as they should have been — {{domxref("mozContact")}}, {{domxref("MozContactChangeEvent")}}, {{domxref("navigator.mozContacts")}}, {{domxref("MozPowerManager")}}, {{domxref("MozSettingsEvent")}} (see {{bug("1043562")}}, {{bug("1256414")}}, and {{bug("1256046")}}).
- Support for UTF-16 has been removed from {{domxref("TextEncoder")}} ({{bug(1257877)}}).
- {{domxref("RTCStatsReport")}} is now a true `maplike` interface: in addition to {{domxref("RTCStatsReport.forEach()", "forEach()")}}, {{domxref("RTCStatsReport.get()", "get()")}}, and {{domxref("RTCStatsReport.has()", "has()")}}, the methods {{domxref("RTCStatsReport.entries", "entries()")}}, {{domxref("RTCStatsReport.values", "values()")}}, {{domxref("RTCStatsReport.keys()", "keys()")}}, as well as the {{domxref("RTCStatsReport.size", "size")}} getter have been implemented ({{bug(906986)}}).
- The {{domxref("Request.cache")}} property has been added allowing to control the cache behavior ({{bug(1120715)}}).
- Handling of dead keys on Mac OS X has been changed to work the same as other platforms; they no longer fire a {{event("keypress")}} event when no text is generated when the focused element isn't editable (when the focused element is editable, dead key causes composition events instead of keyboard events on Mac OS X). Also, like on other platforms, the value of {{domxref("KeyboardEvent.key")}} is now `"Dead"` for dead keypresses which don't generate text in other situations.

## HTTP

- Support for the {{HTTPHeader("Upgrade-Insecure-Requests")}} header has been added ({{bug(1243586)}}).
- The {{CSP("block-all-mixed-content")}} CSP directive has been implemented ({{bug(1122236)}})

## Changes for add-on and Mozilla developers

- The [Social Worker API](/en-US/docs/Mozilla/Projects/Social_API/Service_worker_API_reference) has been removed.
- Added the [`-moz-bool-pref()`](/en-US/docs/Mozilla/Gecko/Chrome/CSS/-moz-bool-pref) [CSS](/en-US/docs/Web/CSS) {{CSSxRef("@supports")}} function to allow hiding portions of chrome stylesheets behind boolean preferences. ({{bug(1259889)}})

## Older versions

{{Firefox_for_developers(47)}}

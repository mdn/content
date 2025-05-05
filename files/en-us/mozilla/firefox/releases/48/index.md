---
title: Firefox 48 for developers
slug: Mozilla/Firefox/Releases/48
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

[To test the latest developer features of Firefox, install Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/) Firefox 48 was released on August 2, 2016. This article lists key changes that are useful not only for web developers, but also Firefox and Gecko developers as well as add-on developers.

## Changes for Web developers

### Developer Tools

- The position of elements can now be changed within the content ([Firefox bug 1139187](https://bugzil.la/1139187)).
- Implemented {{domxref("console/clear_static", "console.clear()")}} to clear the console output ([Firefox bug 659625](https://bugzil.la/659625)).
- Added [HTTP log inspection to the Web Console](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html#viewing-network-request-details) ([Firefox bug 1211525](https://bugzil.la/1211525)).
- Added a [Firebug theme](https://firefox-source-docs.mozilla.org/devtools-user/tools_toolbox/index.html#choose-devtools-theme) ([Firefox bug 1244054](https://bugzil.la/1244054)).
- Added the [DOM Inspector](https://firefox-source-docs.mozilla.org/devtools-user/dom_property_viewer/index.html) ([Firefox bug 1201475](https://bugzil.la/1201475)).
- [Font inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#fonts-view) has been enabled by default again ([Firefox bug 1280121](https://bugzil.la/1280121)).
- [Improved suggestions](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#edit-rules) for CSS properties ([Firefox bug 1168246](https://bugzil.la/1168246)).
- Cookies, localStorage and sessionStorage entries are editable via double-click ([Firefox bug 1231154](https://bugzil.la/1231154), [Firefox bug 1231179](https://bugzil.la/1231179), [Firefox bug 1231155](https://bugzil.la/1231155)).

### HTML

- The {{HTMLElement("details")}} and {{HTMLElement("summary")}} elements have been activated by default on Nightly and Aurora (DevTools), but not on Beta or Release:

  - The default style for these elements has been adapted to match the spec ([Firefox bug 1258657](https://bugzil.la/1258657)).
  - The `toggle` event is now sent to the {{HTMLElement("details")}} element when this one is opened or closed ([Firefox bug 1225412](https://bugzil.la/1225412)).

- The [`meta`](/en-US/docs/Web/HTML/Reference/Elements/meta) attributes now also supports the `no-referrer-when-downgrade` and `origin-when-cross-origin` values ([Firefox bug 1178337](https://bugzil.la/1178337)).

### CSS

- The {{cssxref("calc", "calc()")}} has been improved to be closer to the specification:

  - {{cssxref("calc", "calc()")}} is now supported on the {{cssxref("line-height")}} property ([Firefox bug 594933](https://bugzil.la/594933)).
  - Added support for nested CSS {{cssxref("calc", "calc()")}} ([Firefox bug 968761](https://bugzil.la/968761)).

- Our experimental implementation of CSS grids has been updated:

  - Fragmentation for grid layout has been implemented ([Firefox bug 1144096](https://bugzil.la/1144096)).
  - \[css-grid] Percentage tracks are now treated as `auto` if grid container size is indefinite ([Firefox bug 1264607](https://bugzil.la/1264607)).
  - {{HTMLElement("fieldset")}} now supports grid and flex layouts ([Firefox bug 1230207](https://bugzil.la/1230207)).

- The `luminance` value for {{cssxref("mask-mode")}} has been added; the `auto` value has been renamed to `match-source`, to match the spec ([Firefox bug 1228354](https://bugzil.la/1228354)).
- Interpolation of {{cssxref("clip-path")}} basic shapes in CSS animations and transitions is now supported ([Firefox bug 1110460](https://bugzil.la/1110460)).
- Support for horizontal-in-vertical (_tate-chu-yoko_) text has been added via the `all` value of the {{cssxref("text-combine-upright")}} property ([Firefox bug 1097499](https://bugzil.la/1097499)).
- Support for the experimental {{cssxref("print-color-adjust", "color-adjust")}} property has been added, allowing pages to specify that background colors and images should be printed ([Firefox bug 1209273](https://bugzil.la/1209273)).
- The {{cssxref("::first-letter")}} pseudo-element now also matches punctuation characters of type Pd that precede or immediately follow the actual first letter; this is a new requirement of CSS Pseudo-element module level 4 ([Firefox bug 1260366](https://bugzil.la/1260366)).
- Several `-webkit` prefixed properties and values have been added for web compatibility, behind the preference `layout.css.prefixes.webkit`, defaulting to `false`:

  - {{cssxref("-webkit-text-fill-color")}} ([Firefox bug 1247777](https://bugzil.la/1247777)).
  - {{cssxref("-webkit-text-stroke")}}, {{cssxref("-webkit-text-stroke-color")}}, {{cssxref("-webkit-text-stroke-width")}} ([Firefox bug 1248708](https://bugzil.la/1248708)).
  - `-webkit-background-clip` (as background-clip) text value ([Firefox bug 759568](https://bugzil.la/759568)).
  - `-webkit-box-direction`, `-webkit-box-orient` ([Firefox bug 1262049](https://bugzil.la/1262049).
  - The value `-webkit-inline-box` is now an alias of `inline-flex` on the {{cssxref("display")}} property. ([Firefox bug 1257661](https://bugzil.la/1257661)).
  - `-webkit-flex-direction`, `-webkit-flex-wrap`, `-webkit-flex-flow`, `-webkit-order`, `-webkit-flex`, `-webkit-flex-grow`, `-webkit-flex-shrink`, `-webkit-flex-basis`, `-webkit-justify-content`, `-webkit-align-items`, `-webkit-align-self` and `-webkit-align-content` were added as aliases for the unprefixed properties and the values `-webkit-flex` and `-webkit-inline-flex` for the {{cssxref("display")}} property as aliases for the unprefixed values ([Firefox bug 1274096](https://bugzil.la/1274096)).
  - Added `-webkit-box-flex`, `-webkit-box-ordinal-group`, `-webkit-box-align` and `-webkit-box-pack` properties and `-webkit-box` value to {{cssxref("display")}} as aliases for modern [CSS Flexbox](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox) ([Firefox bug 1208635](https://bugzil.la/1208635)).

- The `text` value of {{cssxref("background-clip")}} is now available in all type of Firefox (and not only non-release builds) ([Firefox bug 1263516](https://bugzil.la/1263516)).
- The `absolute` value of {{cssxref("position")}} properties on the top layer element ([Firefox bug 1236828](https://bugzil.la/1236828)).
- Added an internal-only syntax for {{cssxref("@supports")}} to detect pref ([Firefox bug 1259889](https://bugzil.la/1259889)).

### JavaScript

#### New APIs

- The {{jsxref("String.prototype.padStart()")}} and {{jsxref("String.prototype.padEnd()")}} methods have been implemented ([Firefox bug 1260509](https://bugzil.la/1260509)).
- The ES2015 {{jsxref("Symbol.unscopables")}} and [`Array.prototype[Symbol.unscopables]`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.unscopables) properties have been implemented ([Firefox bug 1054759](https://bugzil.la/1054759) and [Firefox bug 1258163](https://bugzil.la/1258163)).
- The ES2015 {{jsxref("Symbol.isConcatSpreadable")}} symbol has been implemented ([Firefox bug 1041586](https://bugzil.la/1041586)).
- The ES2015 [`Array[Symbol.species]`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.species) getter has been implemented ([Firefox bug 1165052](https://bugzil.la/1165052)).
- The ES2015 [`ArrayBuffer[Symbol.species]`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/Symbol.species) getter and [`TypedArray[Symbol.species]`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.species) getter have been implemented ([Firefox bug 1165053](https://bugzil.la/1165053)).
- The {{jsxref("Intl.getCanonicalLocales()")}} method of the ECMAScript Internationalization API draft has been implemented ([Firefox bug 1263040](https://bugzil.la/1263040)).

#### Deprecations and removals

- The deprecated [old Proxy API](/en-US/docs/Archive/Web/Old_Proxy_API) (`Proxy.create` and `Proxy.createFunction()`) has been removed. Use the standard {{jsxref("Proxy")}} object instead ([Firefox bug 892903](https://bugzil.la/892903)).
- The `String.prototype.contains()` method has been removed (it was deprecated since version 40). Use the {{jsxref("String.prototype.includes()")}} method instead ([Firefox bug 1103588](https://bugzil.la/1103588)).
- The non-standard `RegExp.multiline` property (not {{jsxref("RegExp.prototype.multiline")}}) has been removed. Use the standard [m flag](/en-US/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags) instead ([Firefox bug 1219757](https://bugzil.la/1219757)).
- The [`Object.prototype.__defineGetter__()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__) and [`Object.prototype.__defineSetter__()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__) methods can no longer be called at the global scope without any object. ([Firefox bug 1253016](https://bugzil.la/1253016)).

### Interfaces/APIs/DOM

#### DOM & HTML DOM

- Dropped the "Moz" prefix from the {{domxref("CSSKeyframeRule")}} and {{domxref("CSSKeyframesRule")}} interfaces ([Firefox bug 1256178](https://bugzil.la/1256178)).
- The `NavigatorConcurrentHardware` {{Glossary("mixin")}} has been implemented, which adds the {{domxref("Navigator.hardwareConcurrency")}} property to the {{domxref("Navigator")}} interface. This lets websites and apps get at least an approximation of how many processing cores are available to run {{domxref("Worker")}}s in ([Firefox bug 1008453](https://bugzil.la/1008453)).
- The {{domxref("Node.isSameNode()")}} method, which was removed in Firefox 10, has returned after being added back into the specification after a lengthy absence ([Firefox bug 1256299](https://bugzil.la/1256299)).
- Firefox now returns proper exceptions instead of numbers when things go wrong during a call to {{domxref("Navigator.registerProtocolHandler()")}}.
- {{domxref("Element.animate()")}} is now activated by default ([Firefox bug 1245000](https://bugzil.la/1245000)).
- The two methods {{domxref("Element.insertAdjacentText()")}} and {{domxref("Element.insertAdjacentElement()")}} have been implemented ([Firefox bug 811259](https://bugzil.la/811259)).
- {{domxref("Document.scrollingElement")}} got enabled by default ([Firefox bug 1265032](https://bugzil.la/1265032)).
- `Node.localName`, `Node.namespaceURI` and `Node.prefix` were moved to the {{domxref("Element")}} and {{domxref("Attr")}} APIs ([Firefox bug 1055776](https://bugzil.la/1055776)).
- Per the latest specification, the values of {{domxref("KeyboardEvent.code")}} returned for the following keys have been changed see ([Firefox bug 1264150](https://bugzil.la/1264150)):

  - `"OSLeft"` and `"OSRight"` are now `"MetaLeft"` and `"MetaRight"`.
  - `"VolumeDown"`, `"VolumeUp"`, and `"VolumeMute"` are now `"AudioVolumeDown"`, `"AudioVolumeUp"`, and `"AudioVolumeMute"`.
  - `"IntlHash"` has been removed.
  - All keys whose `code` values were reported as "" in earlier versions of Firefox are now reported as "Unidentified".

#### Canvas 2D

- The {{domxref("CanvasRenderingContext2D.ellipse()")}} method has been implemented ([Firefox bug 910138](https://bugzil.la/910138)).

#### WebRTC

- The two methods {{domxref("MediaStream.clone()")}} and {{domxref("MediaStreamTrack.clone()")}} have been implemented ([Firefox bug 1208371](https://bugzil.la/1208371)).
- The `iceRestart` entry is now supported in the `RTCOfferOptions` code dictionary, allowing {{domxref("RTCPeerConnection.createOffer", "createOffer()")}} to be used to request ICE restarts ([Firefox bug 906986](https://bugzil.la/906986)).
- The {{domxref("RTCPeerConnection.createOffer()")}} method now prefers the VP9 video codec by default; previously VP8 was preferred ([Firefox bug 1242324](https://bugzil.la/1242324).
- WebM/VP8 video that includes video resolution changes that has been recorded using {{domxref("MediaRecorder")}} can now be played back successfully.

#### Others

- The [Web Crypto API](/en-US/docs/Web/API/Web_Crypto_API) is now available in [Web workers](/en-US/docs/Web/API/Web_Workers_API) ([Firefox bug 842818](https://bugzil.la/842818)).
- The {{domxref("CustomEvent")}} interface is now available in [Web Workers](/en-US/docs/Web/API/Web_Workers_API) ([Firefox bug 1003432](https://bugzil.la/1003432)).
- The `DOMApplicationsManager.getNotInstalled()` method has been removed ([Firefox bug 1255036](https://bugzil.la/1255036)).
- Several Firefox OS APIs that were erroneously exposed to the Web have now been hidden as they should have been — `mozContact`, `MozContactChangeEvent`, `navigator.mozContacts`, `MozPowerManager`, `MozSettingsEvent` (see [Firefox bug 1043562](https://bugzil.la/1043562), [Firefox bug 1256414](https://bugzil.la/1256414), and [Firefox bug 1256046](https://bugzil.la/1256046)).
- Support for UTF-16 has been removed from {{domxref("TextEncoder")}} ([Firefox bug 1257877](https://bugzil.la/1257877)).
- {{domxref("RTCStatsReport")}} is now a true `maplike` interface: in addition to {{domxref("RTCStatsReport.forEach()", "forEach()")}}, {{domxref("RTCStatsReport.get()", "get()")}}, and {{domxref("RTCStatsReport.has()", "has()")}}, the methods {{domxref("RTCStatsReport.entries", "entries()")}}, {{domxref("RTCStatsReport.values", "values()")}}, {{domxref("RTCStatsReport.keys()", "keys()")}}, as well as the {{domxref("RTCStatsReport.size", "size")}} getter have been implemented ([Firefox bug 906986](https://bugzil.la/906986)).
- The {{domxref("Request.cache")}} property has been added allowing to control the cache behavior ([Firefox bug 1120715](https://bugzil.la/1120715)).
- Handling of dead keys on Mac OS X has been changed to work the same as other platforms; they no longer fire a {{domxref("Element/keypress_event", "keypress")}} event when no text is generated when the focused element isn't editable (when the focused element is editable, dead key causes composition events instead of keyboard events on Mac OS X). Also, like on other platforms, the value of {{domxref("KeyboardEvent.key")}} is now `"Dead"` for dead key presses which don't generate text in other situations.

## HTTP

- Support for the {{HTTPHeader("Upgrade-Insecure-Requests")}} header has been added ([Firefox bug 1243586](https://bugzil.la/1243586)).
- The {{CSP("block-all-mixed-content")}} CSP directive has been implemented ([Firefox bug 1122236](https://bugzil.la/1122236))

## Changes for add-on and Mozilla developers

- The [Social Worker API](/en-US/docs/Mozilla/Projects/Social_API/Service_worker_API_reference) has been removed.
- Added the [`-moz-bool-pref()`](/en-US/docs/Mozilla/Gecko/Chrome/CSS/-moz-bool-pref) [CSS](/en-US/docs/Web/CSS) {{CSSxRef("@supports")}} function to allow hiding portions of chrome stylesheets behind boolean preferences. ([Firefox bug 1259889](https://bugzil.la/1259889))

## Older versions

{{Firefox_for_developers}}

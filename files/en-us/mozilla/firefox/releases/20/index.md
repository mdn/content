---
title: Firefox 20 for developers
slug: Mozilla/Firefox/Releases/20
tags:
  - Firefox
  - Firefox 20
  - Gecko
  - Mozilla
---
{{FirefoxSidebar}}

Firefox 20 was released on April, 2nd 2013. This article provides information about the changes in this release that will affect developers.

## Changes for Web developers

### HTML

- Support for the {{htmlattrxref("download", "a")}} attribute on the {{HTMLElement("a")}} and {{HTMLElement("area")}} element has been added ({{bug("676619")}}).
- The value `auto` for the [global attribute](/en-US/docs/Web/HTML/Global_attributes) [`dir`](/en-US/docs/Web/HTML/Global_attributes#dir) has been implemented ({{bug("548206")}}).
- The [global attribute](/en-US/docs/Web/HTML/Global_attributes) [contextmenu](/en-US/docs/Web/HTML/Global_attributes/contextmenu) now works on Firefox for Android ({{bug("736321")}}).

### JavaScript

- Support for the `WeakMap.prototype.clear()` method, recently added to the Harmony (ECMAScript 2015) draft proposal has been added ({{bug("814562")}}).
- Support for the [`Math.imul()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul) method, a C-style 32-bit multiplication function. Though proposed for Harmony (ECMAScript 2015) it has not yet accepted and still is non-standard ({{bug("808148")}}).
- Web apps using draggable text with Kinetic 3.x are working, even when using the Cairo canvas backend ({{bug("835064")}}).
- The [`for each...in`](/en-US/docs/JavaScript/Reference/Statements/for_each...in) statement has been deprecated and should not be used. Consider using the new [`for...of`](/en-US/docs/Web/JavaScript/Reference/Statements/for...of) statement ({{Bug("804834")}}).
- Support for the {{jsxref("Map.prototype.keys()")}}, {{jsxref("Map.prototype.values()")}}, and {{jsxref("Map.prototype.entries()")}} has been added ({{bug("817368")}}).

### CSS

- [CSS Flexbox](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) is now available by default in pre-release builds only (excluding beta versions). It can be enabled in release and beta version by setting the `layout.css.flexbox.enabled` about:config preference to `true`.
- The `mask-type` property from the [CSS Masking specification](https://www.w3.org/TR/css-masking-1/#the-mask-type) has been added ({{bug("793617")}}).
- Experimental support for the {{cssxref(":scope")}} pseudo-class has been added. Enabled by default in Aurora and Nightly, it can be enabled in release and beta version by setting the `layout.css.scope-pseudo.enabled` about:config preference to `true` ({{bug("648722")}}).

### DOM/APIs

- {{domxref("HTMLMediaElement")}} supports now `playbackRate` (both read and write), with pitch correction. Pitch correction can be controlled using the property `mozPreservesPitch` ({{bug('495040')}}).
- CSSOM: Support for the new {{domxref("CSSGroupingRule")}} and {{domxref("CSSConditionRule")}} has been added ({{bug("814907")}}).
- CSSOM: On {{domxref("CSSRule")}} the constant CSSRule.MOZ_KEYFRAME_RULE and CSSRule.MOZ_KEYFRAMES_RULE have been unprefixed to CSSRule.KEYFRAME_RULE and CSSRule.KEYFRAMES_RULE. The prefixed version are temporarily kept for helping Web author to transition their code {{bug("816431")}}).
- CSSOM: It is now possible to set the value of `conditionText` for {{domxref("CSSMediaRule")}} ({{bug("815021")}}).
- The {{domxref("DOMParser")}} `parseFromStream` and `parseFromBuffer` methods are no longer available from web content ({{bug('816410')}}).
- The [`XMLSerializer`](/en-US/docs/Web/API/XMLSerializer) `serializeToStream` method is no longer available from web content ({{bug('816410')}}).
- {{domxref("TextDecoder")}} and {{domxref("TextEncoder")}} interfaces are now available in Workers ({{bug('795542')}}).
- Support for the `CSS.supports()` method has been added, behind the `layout.css.supports-rule.enabled` pref (off by default) ({{bug("779917")}}).
- Support for UndoManager has been added ({{bug("617532")}}).
- The CSSOM {{domxref("Document.caretPositionFromPoint()")}} method, which returns a {{domxref("CaretPosition")}} has been implemented.
- The index argument of the {{domxref("tableRow.insertCell")}} and {{domxref("table.insertRow")}} methods has been made optional as per HTML specification.
- {{domxref("Navigator.getUserMedia")}}, still prefixed as `Navigator.mozGetUserMedia` is now activated by default.
- The third, optional, `transfer` argument of {{domxref("Window.postMessage")}} is now supported. It allows to transfer a sequence of {{domxref("Transferable")}} objects to the destination ({{bug("822094")}}).
- The non-standard {{domxref("Window.sizeToContent()")}} method now clamps the minimal size: the window cannot be forced anymore to small sizes preventing the user to interact with ({{bug(764240)}}).
- Blend modes, such as `overlay`, `color-burn`, `hue`, etc. have been added to the Canvas {{domxref("CanvasRenderingContext2D.globalCompositeOperation")}} property ({{bug(748433)}}).
- The prefixed version of [`window.indexedDB`](/en-US/docs/Web/API/indexedDB) — `window.mozIndexedDB` — was reintroduced to Gecko, so that bad cross-browser prefixing code (such as `var indexedDB = window.indexedDB || window.webkitIndexedDB …`) doesn't break in Firefox. A better approach is `window.indexedDB = window.indexedDB || window.webkitIndexedDB …` (see {{bug("770844")}}.)

### SVG

- The implementation of the `contentScriptType` and `contentStyleType` properties has been removed from [`SVGSVGElement`](/en-US/docs/Web/API/SVGSVGElement) along with the removal from SVG2 ({{bug("819731")}}).

### MathML

- To help MathML authors debugging "invalid-markup" errors in their documents, MathML parsing errors (such as having too many / too few child elements) and warnings about deprecated attributes or wrong attribute values are now reported to the [Error Console](/en-US/docs/Error_Console).
- The `scriptminsize` attribute now accepts unitless values and percent values. They are interpreted as multiples of the default value ("`8pt`").
- Unitless values are now also allowed for the `mathsize` and `fontsize` attributes; they multiply the default value.

## Changes for add-on and Mozilla developers

- [ECMAScript for XML (E4X)](/en-US/docs/E4X) is now fully disabled for all chrome and content scripts. It was previously disabled for content in Firefox 17 and has been removed entirely for Firefox 21. Use DOMParser/DOMSerializer or a non-native JXON algorithm instead.
- The `nsIDOMParserJS` interface no longer exists {{bug('816410')}}. See `nsIDOMParser` for alternatives.
- Content Preferences: The `nsIContentPrefService` interface is now deprecated and the asynchronous `nsIContentPrefService2` storage API has been implemented.
- The `nsIProfile` and `nsIProfileChangeStatus` interfaces have been removed, along with other code supporting the pre-Firefox profile management system. You probably weren't using these interfaces, but if you were, you should stop doing so. This prevents defunct parts of the profile management system from vetoing the shutdown process.
- The `nsIEventSource` interface no longer exists {{bug('819639')}}.

## See also

- [Firefox 20 Release Notes](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/20.0/releasenotes/)
- [Add-on Compatibility for Firefox 20](https://blog.mozilla.org/addons/2013/03/20/compatibility-for-firefox-20/)

### Older versions

{{Firefox_for_developers('19')}}

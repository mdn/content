---
title: Firefox 27 for developers
slug: Mozilla/Firefox/Releases/27
tags:
  - Firefox
---
{{FirefoxSidebar}}

Firefox 27 was released on February 4, 2014. This article lists key changes that are useful not only for web developers, but also Firefox and Gecko developers as well as add-on developers.

## Changes for Web developers

### Developer Tools

- Breakpoints can now be set on DOM events.
- JavaScript in the debugger panel can be unminified, using the { } button.
- The inspector now has an "edit-element-html" feature, without needing an add-on.
- Background-URLs and colors have preview in inspector. Even hovering over canvas elements will give a pop-up with an image preview.
- Reflow logging has been added.
- Styles of SVG elements are now inspectable ({{Bug(921191)}}).
- Failure to find the image when clicking URL link in CSS inspector has been fixed ({{Bug(921686)}}).
- The {{HTTPHeader("SourceMap", "X-SourceMap")}} header is now supported ({{bug(765993)}}).

More details in [this post](https://hacks.mozilla.org/2013/11/firefox-developer-tools-episode-27-edit-as-html-codemirror-more/).

### CSS

- The `-moz-grab` and `-moz-grabbing` keywords on the CSS {{cssxref("cursor")}} property have been unprefixed to `grab` and `grabbing` ({{bug("880672")}}).
- Support for the `-moz-hsla()` and `-moz-rgba()` functional notations has been dropped. Only the unprefixed versions, `hsla()` and `rgba()` are supported from now on ({{bug("893319")}}).
- The "`true`" value for {{cssxref("text-align")}} has been added ({{bug(929991)}}).
- Experimental support of `position:sticky` is now active by default on non-release builds ({{bug("902992")}}). For releases builds, the `layout.css.sticky.enabled` preference still needs to be set to `true.`
- The {{cssxref("all")}} shorthand property has been added ({{bug(842329)}}).
- The {{cssxref("unset")}} global value has been added; it allows to reset any CSS property ({{bug(921731)}}).
- Curly brackets are no longer allowed in HTML `style` attributes: doing `<div style="{ display: none }">` was working in quirks mode, but won't anymore {{bug(915053)}}.
- The {{cssxref("overflow")}} property now works on {{HTMLElement("fieldset")}} ({{bug(261037)}}).

### HTML

- The `color` value of the {{HTMLElement("input")}} {{htmlattrxref("type", "input")}} attribute has been implemented on desktop platforms. It was already available on mobile ones.
- The `allow-popups` directive is now supported with the {{htmlattrxref("sandbox", "iframe")}} attribute of the {{HTMLElement("iframe")}} element ({{bug(766282)}}).
- Blending of HTML elements using the {{cssxref("mix-blend-mode")}} property has been implemented. The `layout.css.mix-blend-mode.enabled` preference must be set to `true` ({{bug(902525)}}).
- The {{domxref("Object.typeMustMatch", "typeMustMatch")}} property of the {{HTMLElement("object")}} element is now supported ({{bug(827160)}}).

### JavaScript

[ECMAScript 2015](/en-US/docs/Web/JavaScript/ECMAScript_6_support_in_Mozilla) implementation continues!

- The [spread operator](/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) is now supported in Function calls ({{bug("762363")}}).
- The mathematical function {{jsxref("Global_Objects/Math/hypot", "Math.hypot()")}} has been implemented ({{bug("896264")}}).
- The {{jsxref("Operators/yield*", "yield*")}} expression is now implemented ({{bug(666396)}}).
- The `MapIterator`, `SetIterator` and `ArrayIterator` objects now match the specification ({{bug("881226")}}).
- [for..of](/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loops now expect the ES2015 standard [iterator protocol](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) moving away from SpiderMonkey old iterator protocol using `StopIteration`.
- {{jsxref("String.match")}} and {{jsxref("String.replace")}} now reset {{jsxref("RegExp.lastIndex")}} ({{bug(501739)}}).

### Interfaces/APIs/DOM

- Support for the two `setRange()` methods on the {{domxref("HTMLInputElement")}} interface has been added ({{bug(850364)}}).
- Support for the two `setRange()` methods on the {{domxref("HTMLTextAreaElement")}} interface has been added ({{bug(918940)}}).
- The methods `getAllKeys()` and `openKeyCursor()` have been added to {{domxref("IDBObjectStore")}} ({{bug(920633)}} and {{bug(920800)}}).
- The {{domxref("HTMLFormControlsCollection")}} interface has been implemented ({{bug(913920)}}).
- The {{domxref("CanvasRenderingContext2D")}} interface now supports the two methods {{domxref("CanvasRenderingContext2D.getLineDash()", "getLineDash()")}} and {{domxref("CanvasRenderingContext2D.setLineDash()", "setLineDash()")}} and the {{domxref("CanvasRenderingContext2D.lineDashOffset", "lineDashOffset")}} property  ({{bug(768067)}}).
- The `typeMustMatch` attribute has been implemented on the {{domxref("HTMLObjectElement")}} interface ({{bug(827160)}}).
- The `copyFromChannel()` and `copyToChannel()` methods have been added to {{domxref("AudioBuffer")}} ({{bug(915524)}}).
- `Event.isTrusted()` is now unforgeable ({{bug(637248)}}).
- The WebRTC API's {{domxref("RTCIceCandidate")}} object now includes a {{domxref("RTCIceCandidate.toJSON", "toJSON()")}} method to help with signaling and debugging ({{bug(928304)}}).
- The {{domxref("Navigator.vibrate()")}} method has been adapted to match the final specification: It now returns `false` when the list is too long or has too large entries, instead of throwing ({{bug(884935)}}).
- As part of the ongoing effort to standardize global objects, the non-standard stylesheet change event interfaces, including `StyleRuleChangeEvent`, `StyleSheetApplicableStateChangeEvent` and `StyleSheetChangeEvent`, are no longer available from Web content. The `CSSGroupRuleRuleList` interface, the implementation detail of {{domxref("CSSRuleList")}}, has also been removed ({{Bug("872934")}} and {{bug(916871)}}).
- `atob` now ignores whitespaces ({{bug(711180)}}).
- [WebGL](/en-US/docs/Web/API/WebGL_API): `MOZ_` prefixed extension strings are deprecated. Support for them will be removed in the future. Use unprefixed extension string only. To get draft extensions, set the `webgl.enable-draft-extensions` preferences ({{bug(924176)}}).

### MathML

_No change._

### SVG

- Blending of SVG elements using the {{cssxref("mix-blend-mode")}} property has been implemented. The `layout.css.mix-blend-mode.enabled` preference must be set to `true` ({{bug(902525)}}).

## Changes for addon and Mozilla developers

- The `downloads-indicator` button has gone away. You should now use the `downloads-button` element. If you need to check that it has loaded its overlay, check for the `indicator` attribute on that button.
- The `chrome://browser/skin/downloads/indicator.css` stylesheet is no longer referenced in Firefox.

## Security

- TLS 1.2 has been implemented for improved security ({{Bug(861266)}}).

## See also

- [List of changes](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&component=Marionette&product=Testing&target_milestone=mozilla27) in [Marionette](https://firefox-source-docs.mozilla.org/testing/marionette/index.html) for Firefox 27.

### Older versions

{{Firefox_for_developers('26')}}

---
title: Firefox 24 for developers
slug: Mozilla/Firefox/Releases/24
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

## Changes for Web developers

### CSS

- The two values `-moz-zoom-in` and `-moz-zoom-out` of the {{cssxref("cursor")}} property have been unprefixed to `zoom-in` and `zoom-out` ([Firefox bug 772153](https://bugzil.la/772153)).
- To match the specification, the keywords `not`, `only`, `and`, and `or` cannot be used as media types anymore ([Firefox bug 757554](https://bugzil.la/757554)).

### HTML

- The {{HTMLElement("track")}} element has been implemented behind the `media.webvtt.enabled` preference, and is disabled by default. ([Firefox bug 833385](https://bugzil.la/833385)).

### JavaScript

- [Arrow functions](/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) are no longer automatically in strict mode unless explicitly requested with `"use strict"` ([Firefox bug 852762](https://bugzil.la/852762)).
- The [`String.prototype.repeat`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat) JS method has been implemented ([Firefox bug 815431](https://bugzil.la/815431)).
- The {{jsxref("Set.prototype.values()")}}, {{jsxref("Set/values", "Set.prototype.keys()")}} and {{jsxref("Set.prototype.entries()")}} methods on {{jsxref("Set")}} objects have been implemented ([Firefox bug 869996](https://bugzil.la/869996)).

### DOM

- Support for the {{domxref("Range.Range", "Range()")}} constructor has been added ([Firefox bug 868999](https://bugzil.la/868999)).
- Support for the {{domxref("Text.Text", "Text()")}} constructor has been added ([Firefox bug 869000](https://bugzil.la/869000)).
- Support for the {{domxref("Comment.Comment", "Comment()")}} constructor has been added ([Firefox bug 869006](https://bugzil.la/869006)).
- Support for the {{domxref("DocumentFragment.DocumentFragment", "DocumentFragment()")}} constructor has been added ([Firefox bug 869002](https://bugzil.la/869002)).
- The {{domxref("FocusEvent")}} interface has been implemented ([Firefox bug 855741](https://bugzil.la/855741)).
- Support for the {{domxref("ChildNode.remove()")}} method has been added ([Firefox bug 856629](https://bugzil.la/856629)).
- The WebVTT interfaces related to the {{HTMLElement("track")}} element, {{domxref("HTMLTrackElement")}}, {{domxref("TextTrack")}}, {{domxref("TextTrackCue")}}, {{domxref("TextTrackList")}}, and {{domxref("TextTrackCueList")}} have been implemented behind the `media.webvtt.enabled` property, defaulting to `false` ([Firefox bug 833385](https://bugzil.la/833385)).
- The {{domxref("Gamepad")}} interface, and {{domxref("Navigator.getGamepads")}} have been implemented behind the `dom.gamepad.enabled` property, defaulting to `false` ([Firefox bug 690935](https://bugzil.la/690935)).
- On desktop Firefox only, `HTMLCanvasElement.getContext()` can now take the `webgl` value, in addition to `experimental-webgl` ([Firefox bug 870232](https://bugzil.la/870232)).
- The non-standard method `mozLoadFrom()` of {{domxref("HTMLMediaElement")}} has been removed ([Firefox bug 877135](https://bugzil.la/877135)).

### Developer Tools

- The Network inspector now lets you filter by content type (CSS/image/font etc.) and see the relevant size and load times.
- The Devtools options panel to the left lets you disable/enable JavaScript temporarily.
- Extension developers may use the new [Browser Console](https://mihai.sucan.ro/mihai/blog/the-browser-console-is-replacing-the-error-console) for Chrome-level scripts (Replaces Error Console).
- The source map syntax has been changed to use `//#` instead of `//@` ([Firefox bug 870361](https://bugzil.la/870361)).

### MathML

- The `dir` attribute for controlling directionality of formulas on e.g. {{MathMLElement("math")}} or {{MathMLElement("mrow")}} elements is now equivalent to using the {{cssxref("direction")}} CSS property.
- The equal sign ("=") is now [stretchable](/en-US/docs/Web/MathML/Element/mo#stretchy).
- The "`updiagonalarrow`" value for the `notation` attribute on {{MathMLElement("menclose")}} elements has been added.

## Changes for add-on and Mozilla developers

- Doc Shells have now the `allowMedia` attribute to disable media playing ([Firefox bug 759964](https://bugzil.la/759964)).
- Sherlock search plugins in the application directory or profile won't be loaded anymore ([Firefox bug 862143](https://bugzil.la/862143)).

## See also

- [Firefox 24 Aurora Notes](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/24.0a2/auroranotes/)

## Older versions

{{Firefox_for_developers('23')}}

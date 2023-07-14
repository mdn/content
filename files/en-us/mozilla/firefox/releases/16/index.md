---
title: Firefox 16 for developers
slug: Mozilla/Firefox/Releases/16
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

Firefox 16 shipped on October 9, 2012. This article lists key changes that are useful for not only Web developers to know about, but also Firefox and Gecko developers as well as add-on developers.

## Changes for Web developers

### HTML

- The {{HTMLElement("meter")}} element is now supported.
- Support for the HTML Microdata API has been added. ([bug 591467](https://bugzil.la/591467))
- {{HTMLElement("canvas")}} now supports the CSS `currentcolor` in all case. ([Firefox bug 629882](https://bugzil.la/629882))
- {{HTMLElement("input")}} now allows filtering based on arbitrary mimetypes in `accept` ([Firefox bug 565274](https://bugzil.la/565274)).
- Two new attributes, `width` and `height` have been added to the {{HTMLElement("input")}} element ([bug 683855](https://bugzil.la/683855)).

### CSS

- Support for the standard, unprefixed version of [CSS Animations](/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations) has been landed ([bug 762302](https://bugzil.la/762302)).
- Support for reverse animation direction (keywords `reverse` and `alternate-reverse` on the {{cssxref("animation-direction")}} property) has been added. ([bug 655920](https://bugzil.la/655920)).
- You can now animate the CSS {{cssxref("height")}} and {{cssxref("width")}} properties.
- The {{cssxref("animation-duration")}} and {{cssxref("transition-duration")}} CSS properties now reject negative values (and do not handle them as `0s` anymore) ([bug 773102](https://bugzil.la/773102)).
- Support for the standard, unprefixed version of [CSS Transforms](/en-US/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms) has been landed ([bug 745523](https://bugzil.la/745523)). {{cssxref("&lt;length&gt;")}} cannot be used for translation values in `matrix()` and `matrix3d()` anymore ([Firefox bug 719054](https://bugzil.la/719054)).
- Support for the standard, unprefixed version of [CSS Gradients](/en-US/docs/Web/CSS/CSS_Images/Using_CSS_gradients) has been landed. Note that the syntax has changed significantly since the prefixed version, so you should read up on this ([bug 752187](https://bugzil.la/752187)).
- The {{cssxref("box-sizing", "-moz-box-sizing")}} implementation has been updated to apply to table cells too ([bug 338554](https://bugzil.la/338554)).
- Support for the standard, unprefixed version of {{cssxref("calc", "calc()")}} has been landed ([bug 771678](https://bugzil.la/771678)).
- The {{cssxref("&lt;resolution&gt;")}} CSS data type has been extended to support the `dppx` ([bug 741644](https://bugzil.la/741644)).
- On screen, for [media queries](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries), `dppx`, `dpi`, and `dpcm` are now representing values based on CSS pixels and no more with the physical units ([bug 771390](https://bugzil.la/771390)).
- Three new pseudo-classes `:-moz-meter-optimum`, `:-moz-meter-sub-optimum`, and `:-moz-meter-sub-sub-optimum` have been added for accessing/styling a {{HTMLElement("meter")}} element in a particular state ([bug 660238](https://bugzil.la/660238)).
- The {{cssxref("appearance")}} property gains two new values: `meterbar` and `meterchunk`. They represent components inside the {{HTMLElement("meter")}} element ([bug 659999](https://bugzil.la/659999)).
- The {{cssxref("min-width")}} and {{cssxref("min-height")}} now supports the `auto` keyword for flex items (and resolves to `0` for other items) ([Firefox bug 763689](https://bugzil.la/763689)).

### API/DOM

- Two new properties `width` and `height` have been added to the {{domxref("HTMLInputElement")}} interface ([bug 683855](https://bugzil.la/683855)).
- IndexedDB properties and methods have been unprefixed. ([bug 726378](https://bugzil.la/726378))
- The [Battery API](/en-US/docs/Web/API/Navigator/getBattery) is now unprefixed.
- The Vibration API has been unprefixed.
- The non-standard `Keyboard` interface, prefixed as `mozKeyboard`, now has the `Keyboard.setSelectedOption()` and `Keyboard.setValue()` methods, as well as the `Keyboard.onfocuschange`. _This interface, only available for Firefox OS, has been removed in Firefox 31._
- The [`java`](/en-US/docs/LiveConnect_Reference/java) and [`Packages`](/en-US/docs/LiveConnect_Reference/Packages) global objects have been removed. See [LiveConnect](/en-US/docs/LiveConnect).
- The `CSSRule.type` associated with {{domxref("CSSNamespaceRule")}} has been updated from `UNKNOWN_RULE` (`0`) to `NAMESPACE_RULE` (`10`) ([bug 765590](https://bugzil.la/765590)).
- WebSMS API: {{domxref("SmsRequest")}} has been superseded by the more general `DOMRequest`.
- The non-standard {{domxref("Element.scrollTopMax")}} and {{domxref("Element.scrollLeftMax")}} read-only properties have been added ([Firefox bug 766937](https://bugzil.la/766937)).
- The second parameter of {{domxref("Blob.blob", "Blob()")}}, when set to `null` or `undefined`, is now being handled as an empty dictionary ([Firefox bug 7691119](https://bugzil.la/7691119)).

### JavaScript

- [`Number`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) objects now offer `isFinite()`, `toInteger()`, and `isInteger()` methods. ([bug 761480](https://bugzil.la/761480), [bug 761495](https://bugzil.la/761495))
- The Harmony [spread operator](https://web.archive.org/web/20161222114355/http://wiki.ecmascript.org/doku.php?id=harmony:spread) is now supported in [`Array`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) initializers ([bug 574130](https://bugzil.la/574130)). Note it is not yet supported in calls ([bug 762363](https://bugzil.la/762363)).
- The experimental {{jsxref("TypedArray.prototype.move()")}} method has been added (available in Aurora and Nightly channels only) ([Firefox bug 730873](https://bugzil.la/730873)).

### WebGL

_No change._

### SVG

_No change._

### MathML

- The `lspace` and `rspace` attributes of {{MathMLElement("mo")}} now correctly default to `thickmathspace`.

### Network

### Developer tools

- There's now a handy developer toolbar you can access by going to Tools > Web Developer > Developer Toolbar, or by pressing Ctrl-Shift-V (Cmd-Opt-V on Mac OS X). This toolbar offers a command line interface as well as buttons for quickly accessing useful tools. The graphical command line interface _GCLI_ is easy to expand and additional commands are expected in the future. Type "help" to get a list of supported commands.
- The Web Console now displays an error count so you can quickly see how much work you have ahead of you.
- The Scratchpad now offers a list of recently opened files.

## Changes for Open Web App developers

- Initial [Open Web App support](/en-US/docs/Web/Apps/Getting_Started) has been implemented in the desktop versions of Firefox (that is, on Windows, Mac OS X, and Linux).

## Changes for add-on and Mozilla developers

### Interface changes

`nsIPrivateDOMEvent` has been merged into `nsIDOMEvent`. ([Firefox bug 761613](https://bugzil.la/761613))

#### New interfaces

#### Removed interfaces

The following interfaces have been removed.

---
title: Firefox 83 for developers
slug: Mozilla/Firefox/Releases/83
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 83 that will affect developers. Firefox 83 was released on November 17, 2020.

> [!NOTE]
> See also [Firefox 83 is upon us](https://hacks.mozilla.org/2020/11/firefox-83-is-upon-us/) on Mozilla hacks

## Changes for web developers

### Developer Tools

- When using the `:screenshot` [helper command](https://firefox-source-docs.mozilla.org/devtools-user/web_console/helpers/index.html) in the [Web Console](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html), the `--dpr` parameter is no longer ignored when taking a fullscreen screenshot using `--fullpage` ([Firefox bug 1645284](https://bugzil.la/1645284)).
- Developers can use the `scroll` badge in the [Page Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) to [Debug scrollable overflow](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/debug_scrollable_overflow/index.html). Selecting the badge highlights elements that are _causing_ overflow and marks them with the `overflow` badge ([Firefox bug 1669129](https://bugzil.la/1669129)).

### HTML/XML

- The `crossorigin` attribute is now supported for `<link rel=icon>` ([Firefox bug 1661075](https://bugzil.la/1661075)).
- The `displaystyle` [attribute](/en-US/docs/Web/MathML/Attribute) is now implemented for all MathML elements ([Firefox bug 1666075](https://bugzil.la/1666075)).

### CSS

- The vendor prefixed `:-moz-any()` is now aliased to the standard {{CSSxRef(":is", ":is()")}} CSS pseudo-class function ([Firefox bug 1666086](https://bugzil.la/1666086)).
- We've added support for [CSS Conic Gradients](/en-US/docs/Web/CSS/gradient/conic-gradient) ([Firefox bug 1632351](https://bugzil.la/1632351)) and ([Firefox bug 1175958](https://bugzil.la/1175958)).

### JavaScript

- [`Intl[@@toStringTag]`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) has been added, returning a default value of `Intl` (recent addition to the ECMA spec). ([Firefox bug 1670053](https://bugzil.la/1670053))

### HTTP

_No changes._

### APIs

_No changes._

### WebDriver conformance (Marionette)

- We've removed preliminary support for `WebDriver:SwitchToShadowRoot`, which hasn't been added to the WebDriver specification yet ([Firefox bug 1662468](https://bugzil.la/1662468)).
- We fixed a bug in `WebDriver:Back` and `WebDriver:Forward` that caused Marionette to hang when the navigation was triggered from within an [`<iframe>`](/en-US/docs/Web/HTML/Element/iframe) that gets removed ([Firefox bug 1672758](https://bugzil.la/1672758)).

## Changes for add-on developers

_No changes._

## Older versions

{{Firefox_for_developers}}

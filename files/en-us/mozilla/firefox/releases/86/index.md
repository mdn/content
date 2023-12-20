---
title: Firefox 86 for developers
slug: Mozilla/Firefox/Releases/86
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 86 that will affect developers. Firefox 86 was released on February 23, 2021.

> **Note:** See also [A Fabulous February Firefox — 86!](https://hacks.mozilla.org/2021/02/a-fabulous-february-firefox-86/) on Mozilla Hacks.

## Changes for web developers

### Developer Tools

- The `cd()` [web console helper function](https://firefox-source-docs.mozilla.org/devtools-user/web_console/helpers/index.html), which was deprecated in Firefox 74, has now been removed. The `<iframe>` context picker tool described in [Working with iframes](https://firefox-source-docs.mozilla.org/devtools-user/working_with_iframes/index.html) serves the same purpose, but is much better! For more information see [Firefox bug 1607741](https://bugzil.la/1607741).
- The different {{cssxref("margin")}} and {{cssxref("padding")}} shorthand and longhand properties are now marked as inactive on internal table elements because they have no effect on them. ([Firefox bug 1551569](https://bugzil.la/1551569)).
- The {{cssxref("order")}} property was previously incorrectly marked as inactive for grid items. This got fixed in [Firefox bug 1579017](https://bugzil.la/1579017).

### HTML

_No changes._

### SVG

- SVG filters can now use the {{SVGElement("feComposite")}} element with the [`lighter` operator](/en-US/docs/Web/SVG/Attribute/operator#fecomposite) ([Firefox bug 1518099](https://bugzil.la/1518099)). This operator sums the pixels of two source graphics.

### CSS

- The {{cssxref(":autofill")}} pseudo-class is now enabled, with `-webkit-autofill` as an alias ([Firefox bug 1685675](https://bugzil.la/1685675)) and ([Firefox bug 1475316](https://bugzil.la/1475316)).
- The {{cssxref("list-style-image")}} property now accepts any valid {{cssxref("image")}} ([Firefox bug 1685078](https://bugzil.la/1685078)).

### JavaScript

- The [`Intl.DisplayNames`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames) built-in object has been enabled by default. This enables the consistent translation of language, region, and script display names:

  ```js
  // Get English currency code display names
  let currencyNames = new Intl.DisplayNames(["en"], { type: "currency" });
  // Get currency names
  currencyNames.of("USD"); // "US Dollar"
  currencyNames.of("EUR"); // "Euro"
  ```

  For more information see [Firefox bug 1654116](https://bugzil.la/1654116).

### APIs

#### DOM

- [`Window.name`](/en-US/docs/Web/API/Window/name) is now reset to an empty string if a tab loads a page from a different domain, and restored if the original page is reloaded (e.g. by selecting the "back" button). This prevents an untrusted page from accessing any information that the previous page might have stored in the property (potentially the new page might also modify such data, which might then be read by the original page if it was reloaded). For more information see [Firefox bug 1685089](https://bugzil.la/1685089).
- [`EventTarget.addEventListener()`](/en-US/docs/Web/API/EventTarget/addEventListener) now supports the `signal` option. This option allows an [`AbortSignal`](/en-US/docs/Web/API/AbortSignal) to be passed to the method. The `AbortSignal` can later be used to remove the listener by calling `abort()`. For more information see [Firefox bug 1679204](https://bugzil.la/1679204).

### WebDriver conformance (Marionette)

- Updated `WebDriver:ElementClick` to synthesize a `mousemove` event before the actual `click` event ([Firefox bug 1684002](https://bugzil.la/1684002)).

#### Known bugs

- WebDriver commands following a call to `WebDriver:SwitchToFrame` can fail with a "no such window" error
  if the frame's content hasn't yet finished loading ([Firefox bug 1691348](https://bugzil.la/1691348)).
- After a [cross-group page navigation](https://firefox-source-docs.mozilla.org/dom/navigation/nav_replace.html#cross-group-navigations), accessing a previously-retrieved element might not always raise a "stale element" error, and
  can also lead to a "no such element" error. To prevent this, set the `marionette.actors.enabled`
  preference to `false` ([Firefox bug 1690308](https://bugzil.la/1690308)).

#### Removals

- Removed support for the deprecated `Marionette:ActionChain` and `Marionette:MultiAction` commands ([Firefox bug 1683755](https://bugzil.la/1683755)).

## Changes for add-on developers

- [Host permissions](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) now grant access to privileged parts of the [tabs API](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs) ([Firefox bug 1679688](https://bugzil.la/1679688)).
- `focused: false` is now ignored when set as an option in a [`windows.create()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/windows/create) call ([Firefox bug 1253129](https://bugzil.la/1253129)).
- {{WebExtAPIRef("identity.getRedirectURL")}} now supports a loopback address, see [Getting the redirect URL](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/identity#getting_the_redirect_url) for details ([Firefox bug 1614919](https://bugzil.la/1614919)).
- The page ID is now returned as part of {{WebExtAPIRef("history.onTitleChanged")}} ([Firefox bug 1678611](https://bugzil.la/1678611)).

## Older versions

{{Firefox_for_developers(85)}}

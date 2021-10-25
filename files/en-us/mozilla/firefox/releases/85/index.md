---
title: Firefox 85 for developers
slug: Mozilla/Firefox/Releases/85
tags:
  - '85'
  - Firefox
  - Mozilla
  - Release
---
{{FirefoxSidebar}}

This article provides information about the changes in Firefox 85 that will affect developers. Firefox 85 was released on January 26, 2021.

> **Note:** See also [January brings us Firefox 85](https://hacks.mozilla.org/2021/01/january-brings-us-firefox-85/) on Mozilla Hacks.

## Changes for web developers

### Developer Tools

- Developers can now use the [Page Inspector](/en-US/docs/Tools/Page_Inspector/How_to/Examine_and_edit_CSS#viewing_common_pseudo-classes) to toggle the {{cssxref(":focus-visible")}} pseudo-class for the currently selected element (in addition to the pseudo classes that were previously supported: {{cssxref(":hover")}}, {{cssxref(":active")}} and {{cssxref(":focus")}}, {{cssxref(":focus-within")}}, and {{cssxref(":visited")}}). ({{bug(1617608)}}).

### HTML

- [`<link rel="preload">`](/en-US/docs/Web/HTML/Link_types/preload) is now enabled. ({{bug(1626997)}}).

#### Removals

- The {{HTMLElement("menuitem")}} HTML element is no longer available — it has been hidden behind the `dom.menuitem.enabled flag`. ({{bug(1680596)}}).

### CSS

- The {{cssxref(":focus-visible")}} pseudo-class is now enabled. ({{bug(1445482)}}).
- The `pinch-zoom` value for the {{cssxref("touch-action")}} property is now enabled. ({{bug(1329241)}}).

### JavaScript

- The `collation` property can now be specified in the options passed to the [`Intl.Collator()` constructor](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator) ({{bug(1670062)}}). This allows developers to write code with greater clarity:

  ```js
  // Old method
  let pinyin = new Intl.Collator(["zh-u-co-pinyin"]);
  // New method
  let pinyin = new Intl.Collator("zh", {collation: "pinyin"});
  ```

### Plugins

- Flash support has been completely removed from Firefox ({{bug(1675349)}}). Read our [plugin roadmap](/en-US/docs/Plugins/Roadmap#schedule) for more information.

### APIs

_No changes._

### WebDriver conformance (Marionette)

- Fixed a potential page load timeout situation when `WebDriver:ElementClick`
  is called for a link with a `target` other than `_blank` ({{bug(1678455)}}).
- Using web element references on browsing contexts other than the originating one now correctly returns a `no such element` error instead of a `stale element reference` error ({{bug(1684827)}}).

#### Known bugs

- WebDriver commands following a call to `WebDriver:SwitchToFrame` can fail with a "no such window" error if the frame's content hasn't yet finished loading ({{bug(1691348)}}).
- After a [cross-group page navigation](https://firefox-source-docs.mozilla.org/dom/navigation/nav_replace.html#cross-group-navigations), accessing a previously-retrieved element might not always raise a "stale element" error, and can also lead to a "no such element" error. To prevent this, set the `marionette.actors.enabled` preference to `false` ({{bug(1690308)}}).

## Changes for add-on developers

_No changes._

## Older versions

{{Firefox_for_developers(84)}}

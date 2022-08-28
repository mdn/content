---
title: ':-moz-locale-dir(rtl)'
slug: Web/CSS/:-moz-locale-dir(rtl)
tags:
  - ':-moz-locale-dir'
  - CSS
  - CSS:Mozilla Extensions
  - Localization
  - NeedsCompatTable
  - NeedsExample
  - Non-standard
  - Pseudo-class
  - Reference
  - Right-to-left
  - Selector
---
{{CSSRef}}{{Non-standard_header}}

The **`:-moz-locale-dir(rtl)`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) is a [Mozilla extension](/en-US/docs/Web/CSS/Mozilla_Extensions) that matches an element if the user interface is being displayed right-to-left. This is determined by the preference `intl.uidirection.locale` (where `locale` is the current locale) being set to "rtl".

> **Note:** This selector is mainly used by extensions and themes to adapt the user interface based on the user's locale. (This can vary from window to window, and even from tab to tab.) It also allows extensions to work even when they don't support the user's default locale, since they can support both left-to-right and right-to-left layouts regardless of locale specifics.

> **Warning:** This selector does not work properly from HTML; it never matches, no matter whether the UI locale is left-to-right or right-to-left.

## Syntax

```css
:-moz-locale-dir(rtl)
```

## Examples

This example will not work if you're not using Firefox, and might not work properly even in Firefox due to an issue with using this selector in HTML.

### HTML

```html
<p>If you're using a right-to-left interface, this should be red.</p>
```

### CSS

```css
p:-moz-locale-dir(rtl) {
  color: red;
}
```

### Result

{{EmbedLiveSample("Examples")}}

## Specifications

Not part of any standard.

## See also

- {{CSSxRef(":dir",":dir(…)")}}
- {{CSSxRef(":-moz-locale-dir(ltr)")}}
- [Making sure your theme works with RTL locales](/en-US/docs/Making_Sure_Your_Theme_Works_with_RTL_Locales)

---
title: ":-moz-locale-dir(ltr)"
slug: Web/CSS/:-moz-locale-dir_ltr
page-type: css-pseudo-class
status:
  - non-standard
---

{{CSSRef}}{{Non-standard_header}}

The **`:-moz-locale-dir(ltr)`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) is a [Mozilla extension](/en-US/docs/Web/CSS/Mozilla_Extensions) that matches an element if the user interface is being displayed left-to-right. This is determined by the preference `intl.uidirection.locale` (where `locale` is the current locale) being set to "ltr".

> **Note:** This selector is mainly used by extensions and themes to adapt the user interface based on the user's locale. (This can vary from window to window, and even from tab to tab.) It also allows extensions to work even when they don't support the user's default locale, since they can support both left-to-right and right-to-left layouts regardless of locale specifics.

> **Warning:** This selector does not work properly from HTML; it always matches, regardless of whether the UI locale is left-to-right or right-to-left.

## Syntax

```css
:-moz-locale-dir(ltr) {
  /* ... */
}
```

## Examples

This example doesn't work if you're not using Firefox, and may not work even in Firefox due to an issue with the selector not working properly with HTML content. It was designed for use with `XUL`.

### HTML

```html
<p>If you're using a left-to-right interface, this should be red.</p>
```

### CSS

```css
p:-moz-locale-dir(ltr) {
  color: red;
}
```

### Result

{{EmbedLiveSample("Examples")}}

## Specifications

Not part of any standard.

## See also

- {{CSSxRef(":dir", ":dir(…)")}}
- {{CSSxRef(":-moz-locale-dir_rtl", ":-moz-locale-dir(rtl)")}}

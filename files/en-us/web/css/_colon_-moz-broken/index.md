---
title: ':-moz-broken'
slug: Web/CSS/:-moz-broken
tags:
  - CSS
  - CSS:Mozilla Extensions
  - NeedsCompatTable
  - Non-standard
  - Pseudo-class
  - Reference
  - Selector
browser-compat: css.selectors.-moz-broken
---
{{CSSRef}}{{Non-standard_header}}

The **`:-moz-broken`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) is a [Mozilla extension](/en-US/docs/Web/CSS/Mozilla_Extensions) that matches elements representing broken image links.

> **Note:** This selector is mainly intended to be used by theme developers.

## Syntax

```css
:-moz-broken
```

## Examples

### HTML

```html
<img src="broken.jpg" alt="This image is broken. :-(">
```

### CSS

```css
:-moz-broken {
  background: bisque;
  padding: 8px;
}
```

### Result

{{EmbedLiveSample("Examples")}}

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

- {{cssxref(":-moz-loading")}}, {{cssxref(":-moz-suppressed")}}, {{cssxref(":-moz-user-disabled")}}
- {{bug("11011")}}

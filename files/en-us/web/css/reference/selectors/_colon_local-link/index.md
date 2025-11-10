---
title: :local-link
slug: Web/CSS/Reference/Selectors/:local-link
page-type: css-pseudo-class
status:
  - experimental
spec-urls: https://drafts.csswg.org/selectors/#local-link-pseudo
sidebar: cssref
---

{{SeeCompatTable}}

The **`:local-link`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-classes) represents a link to the same document. Therefore an element that is the source anchor of a hyperlink whose target's absolute URL matches the element's own document URL.

```css
/* Selects any <a> that links to the current document */
a:local-link {
  color: green;
}
```

## Syntax

```css
:local-link {
  /* ... */
}
```

## Examples

### HTML

```html
<a href="#target">This is a link on the current page.</a><br />
<a href="https://example.com">This is an external link</a><br />
```

### CSS

```css
a:local-link {
  color: green;
}
```

### Result

{{EmbedLiveSample("Examples")}}

## Specifications

{{Specifications}}

## Browser compatibility

Currently, no browsers support this feature.

## See also

- Link-related pseudo-classes: {{ cssxref(":link") }}, {{ cssxref(":visited") }}, {{ cssxref(":hover") }}, {{ cssxref(":active") }}, {{ cssxref(":any-link") }}
- [CSS selectors](/en-US/docs/Web/CSS/Guides/Selectors) module

---
title: ':local-link'
slug: Web/CSS/:local-link
spec-urls: https://drafts.csswg.org/selectors/#local-link-pseudo
---
{{ CSSRef }}

The **`:local-link`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) represents a link to the same document. Therefore an element that is the source anchor of a hyperlink whose target's absolute URL matches the element's own document URL.

```css
/* Selects any <a> that links to the current document */
a:local-link {
  color: green;
}
```

## Syntax

```
:local-link
```

## Examples

### HTML

```html
<a href="#target">This is a link on the current page.</a><br>
<a href="https://example.com">This is an external link</a><br>
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

This feature is a proposal integrated into the specification. Currently, no browser supports it.

## See also

- Link-related pseudo-classes: {{ cssxref(":link") }}, {{ cssxref(":visited") }}, {{ cssxref(":hover") }}, {{ cssxref(":active") }}, {{ cssxref(":any-link") }}

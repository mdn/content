---
title: ':local-link'
slug: Web/CSS/:local-link
browser-compat: css.selectors.local-link
---
{{ CSSRef }}

The **`:local-link`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) represents a link to the same document. Therefore an element that is the source anchor of a hyperlink whose target’s absolute URL matches the element's own document URL.

    /* Selects any <a> that links to the current document */
    a:local-link {
      color: green;
    }

## Syntax

{{csssyntax}}

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

{{Compat}}

## See also

- Link-related pseudo-classes: {{ cssxref(":link") }},{{ cssxref(":visited") }}, {{ cssxref(":hover") }}, {{ cssxref(":active") }}

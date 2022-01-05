---
title: math-style
slug: Web/CSS/math-style
tags:
  - CSS
  - MathML
  - Property
  - Reference
  - math-style
browser-compat: css.properties.math-style
---
{{MDNSidebar}}

The `math-style` property indicates whether MathML equations should render with normal or compact height.

## Syntax

```css
/* Keyword values */
math-style: normal;
math-style: compact;

/* Global values */
math-sytle: inherit;
math-style: initial;
math-style: revert;
math-style: unset;
```

### Values

- `normal`
  - : The initial value, indicates normal rendering.
- `compact`
  - : The math layout on descendants tries to minimize the logical height.

## Formal definition

{{cssinfo}}

## Formal syntax

{{CSSSyntax}}

## Examples

### CSS

    math {
      math-style: compact;
    }

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

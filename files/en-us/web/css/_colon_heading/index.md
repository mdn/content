---
title: :heading
slug: Web/CSS/:heading
page-type: css-pseudo-class
browser-compat: css.selectors.heading
sidebar: cssref
---

The **`:heading`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) matches [heading elements](/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements). In other words, the `:heading` pseudo-class allows you to style all headings at once, rather than individually.

> [!NOTE]
> The `:heading` pseudo-class has the specificity of that of a class. So `:heading {…}` would have a specificity of [0,1,0], whereas `section:heading {…}` would have a specificity of [0,1,1]

## Syntax

```css
:heading {
  /* ... */
}
```

## Examples

### Basic example

#### HTML

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
```

#### CSS

```css
:heading {
  color: tomato;
}
```

#### Result

{{EmbedLiveSample("Basic_example")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSXRef(":heading_function", ":heading()")}}

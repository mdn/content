---
title: "& nesting selector"
slug: Web/CSS/Nesting_selector
page-type: css-selector
browser-compat: css.selectors.nesting
---

{{CSSRef}}

The CSS **`&` nesting selector** is used to explicitly state the relationship between parent and child selectors when using [CSS Nesting](/en-US/docs/Web/CSS/CSS_nesting).

## Syntax

```css
parent {
  /* parent style properties */
  & child {
    /* child style properties */
  }
}
```

### `&` nesting selector and whitespace

In this example, nesting is done without the **`&` nesting selector**. When the browser parses the nested styles, it automatically adds whitespace between the selectors to create a descendant relationship.

```css
.parent-class {
  /* parent style properties */
  .child-class {
    /* child style properties */
  }
}
/* this becomes */
.parent-class {
  /* parent style properties */
}
.parent-class .child-class {
  /* child style properties */
}
```

When the nested selector needs to be attached to the parent selector, such as when using a {{cssxref('Pseudo-classes', 'pseudo class')}} or creating [compound selectors](/en-US/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector), the **`&` nesting selector** can be immediately prepended to achieve the desired effect.

Consider an example where we want to style an element, providing styles to be applied at all times, and also nesting some styles to be applied only on hover. If the **`&` nesting selector** is not included, whitespace is added and we end up with a ruleset that applies the nested styles to any _hovered child of the parent selector_. This is not what we wanted.

```css
.parent-class {
  /* parent style properties */
  :hover {
    /* child style properties */
  }
}
/* this becomes */
.parent-class {
  /* parent style properties */
}
.parent-class :hover {
  /* child style properties */
}
```

With the **`&` nesting selector** the parent will be styled when it is hovered.

```css
.parent-class {
  /* parent style properties */
  &:hover {
    /* child style properties */
  }
}
/* this becomes */
.parent-class {
  /* parent style properties */
}
.parent-class:hover {
  /* child style properties */
}
```

## Appending the `&` nesting selector

The `&` nesting selector can also be appended to reverse the context of the selectors.

```css
.card {
  /* .card styles */
  .featured & {
    /* .featured .card styles */
  }
}
/* this becomes */
.card {
  /* .card styles */
}
.featured .card {
  /* .featured .card styles */
}
```

The `&` nesting selector can be placed multiple times:

```css
.card {
  /* .card styles */
  .featured & & & {
    /* .featured .card .card .card styles */
  }
}
/* this becomes */
.card {
  /* .card styles */
}
.featured .card .card .card {
  /* .featured .card .card .card styles */
}
```

## Examples

Both of the following examples produce the same output. The first one uses normal CSS styles and the second one uses the `&` nesting selector.

### Normal CSS styles

This example uses normal CSS styling.

#### HTML

```html
<p class="example">
  This paragraph <a href="#">contains a link</a>, try hovering or focusing it.
</p>
```

#### CSS

```css
.example {
  font-family: system-ui;
  font-size: 1.2rem;
}
.example > a {
  color: tomato;
}
.example > a:hover,
.example > a:focus {
  color: ivory;
  background-color: tomato;
}
```

#### Result

{{EmbedLiveSample('Original_CSS_styles','100%','50')}}

### Nested CSS styles

This example uses nested CSS styling.

#### HTML

```html
<p class="example">
  This paragraph <a href="#">contains a link</a>, try hovering or focusing it.
</p>
```

#### CSS

```css
.example {
  font-family: system-ui;
  font-size: 1.2rem;
  & a {
    color: tomato;
    &:hover,
    &:focus {
      color: ivory;
      background-color: tomato;
    }
  }
}
```

#### Result

{{EmbedLiveSample('Nested_CSS_styles','100%','50')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using CSS nesting](/en-US/docs/Web/CSS/CSS_nesting/Using_CSS_nesting)

---
title: "& nesting selector"
slug: Web/CSS/Nesting_selector
page-type: css-selector
browser-compat: css.selectors.nesting
---

{{CSSRef}}

The CSS **`&` nesting selector** is used to explicitly state where the parent class should be placed.

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

If nesting without the `&` nesting selector the browser will automatically add whitespace for you.

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

If you need the nested selector to be attached to the parent selector, such as a pseudo selector then this can be added immediately after the `&` nesting selector.

Without the `&` nesting selector, whitespace is added and, any child of the parent that is hovered will be styled.

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

With the `&` nesting selector the parent will be styled when it is hovered.

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

## Examples

Both of the following examples produce the same output, the first uses normal CSS styles and the second uses the `&` nesting selector.

### Original CSS styles

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

- [Using `&` nesting selector](/en-US/docs/Web/CSS/CSS_nesting/Using_nesting_selector)
- [Using CSS nesting](/en-US/docs/Web/CSS/CSS_nesting/Using_CSS_nesting)

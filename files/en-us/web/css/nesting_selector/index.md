---
title: "& nesting selector"
slug: Web/CSS/Nesting_selector
page-type: css-selector
browser-compat: css.selectors.nesting
---

{{CSSRef}}

Description of nesting selector goes here.

## Syntax

```css
parent {
  /* parent style properties*/
  & child {
    /* child style properties*/
  }
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

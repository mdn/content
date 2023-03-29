---
title: "-moz-float-edge"
slug: Web/CSS/-moz-float-edge
page-type: css-property
status:
  - deprecated
  - non-standard
browser-compat: css.properties.-moz-float-edge
---

{{CSSRef}}{{Non-standard_header}}{{Deprecated_Header}}

The non-standard **`-moz-float-edge`** [CSS](/en-US/docs/Web/CSS) property specifies whether the height and width properties of the element include the margin, border, or padding thickness.

```css
/* Keyword values */
-moz-float-edge: border-box;
-moz-float-edge: content-box;
-moz-float-edge: margin-box;
-moz-float-edge: padding-box;

/* Global values */
-moz-float-edge: inherit;
-moz-float-edge: initial;
-moz-float-edge: unset;
```

## Syntax

### Values

- `border-box`
  - : The height and width properties include the content, padding and border but not the margin.
- `content-box`
  - : The height and width properties include the content, but not the padding, border or margin.
- `margin-box`
  - : The height and width properties include the content, padding, border and margin.
- `padding-box`
  - : The height and width properties include the content and padding but not the border or margin.

## Formal definition

{{CSSInfo}}

## Formal syntax

```plain
-moz-float-edge =
  border-box | content-box | margin-box | padding-box
```

## Examples

### HTML

```html
<div class="box">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</div>
```

### CSS

```css
.box {
  display: block;
  height: 5px;
  margin: 0.5em auto 0.5em auto;
  color: gray;
  -moz-float-edge: margin-box;
  box-sizing: border-box;
}
```

### Result

{{ EmbedLiveSample('Examples') }}

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

- [Firefox bug 432891](https://bugzil.la/432891)

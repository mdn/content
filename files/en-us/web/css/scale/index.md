---
title: scale
slug: Web/CSS/scale
tags:
  - CSS
  - CSS Property
  - Reference
  - Transforms
  - recipe:css-property
browser-compat: css.properties.scale
---
{{CSSRef}}

The **`scale`** [CSS](/en-US/docs/Web/CSS) property allows you to specify scale transforms individually and independently of the {{CSSxRef("transform")}} property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the `transform` value.

## Syntax

```css
/* Keyword values */
scale: none;

/* Single values */
/* values of more than 1 or 100% make the element grow */
scale: 2;
/* values of less than 1 or 100% make the element shrink */
scale: 50%;

/* Two values */
scale: 2 0.5;

/* Three values */
scale: 200% 50% 200%;

/* Global values */
scale: inherit;
scale: initial;
scale: revert;
scale: revert-layer;
scale: unset;
```

### Values

- Single value
  - : A {{cssxref("&lt;number&gt;")}} or {{cssxref("&lt;percentage&gt;")}} specifying a scale factor to make the affected element scale by the same factor along both the X and Y axes. Equivalent to a `scale()` (2D scaling) function with a single value specified.
- Two values
  - : Two {{cssxref("&lt;number&gt;")}} or {{cssxref("&lt;percentage&gt;")}} values that specify the X and Y axis scaling values (respectively) of a 2D scale. Equivalent to a `scale()` (2D scaling) function with two values specified.
- Three values
  - : Three {{cssxref("&lt;number&gt;")}} or {{cssxref("&lt;percentage&gt;")}} values that specify the X, Y, and Z axis scaling values (respectively) of a 3D scale. Equivalent to a `scale3d()` (3D scaling) function.
- `none`
  - : Specifies that no scaling should be applied.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Scaling an element on hover

#### HTML

```html
<div>
  <p class="scale">Scaling</p>
</div>
```

#### CSS

```css
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

div {
  width: 150px;
  margin: 0 auto;
}

p {
  padding: 10px 5px;
  border: 3px solid black;
  border-radius: 20px;
  width: 150px;
  font-size: 1.2rem;
  text-align: center;
}

.scale {
  transition: scale 1s;
}

div:hover .scale {
  scale: 2 0.7;
}
```

#### Result

{{EmbedLiveSample("Scaling_an_element_on_hover")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref('translate')}}
- {{cssxref('rotate')}}
- {{cssxref('transform')}}

Note: skew is not an independent transform value

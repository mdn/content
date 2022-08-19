---
title: translate
slug: Web/CSS/translate
tags:
  - CSS
  - CSS Property
  - Reference
  - Transforms
  - recipe:css-property
browser-compat: css.properties.translate
---
{{CSSRef}}

The **`translate`** [CSS](/en-US/docs/Web/CSS) property allows you to specify translation transforms individually and independently of the {{CSSxRef("transform")}} property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the `transform` value.

## Syntax

```css
/* Keyword values */
translate: none;

/* Single values */
translate: 100px;
translate: 50%;

/* Two values */
translate: 100px 200px;
translate: 50% 105px;

/* Three values */
translate: 50% 105px 5rem;

/* Global values */
translate: inherit;
translate: initial;
translate: revert;
translate: revert-layer;
translate: unset;
```

### Values

- Single {{cssxref("&lt;length-percentage&gt;")}} value
  - : A {{cssxref("&lt;length&gt;")}} or {{cssxref("&lt;percentage&gt;")}} that specifies a translation along the X-axis. Equivalent to a `translate()` (2D translation) function with a single value specified.
- Two {{cssxref("&lt;length-percentage&gt;")}} values
  - : Two {{cssxref("&lt;length&gt;")}} or {{cssxref("&lt;percentage&gt;")}} that specify the X and Y axis translation values (respectively) of a 2D translation. Equivalent to a `translate()` (2D translation) function with two values specified.
- Three values
  - : Two {{cssxref("&lt;length-percentage&gt;")}} and single {{cssxref("&lt;length&gt;")}} values that specify the X, Y, and Z axis translation values (respectively) of a 3D translation. Equivalent to a `translate3d()` (3D translation) function.
- `none`
  - : Specifies that no translation should be applied.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{CSSSyntax}}

## Examples

### HTML

```html
<div>
  <p class="translate">Translation</p>
</div>
```

### CSS

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

.translate {
  transition: translate 1s;
}

div:hover .translate {
  translate: 200px 50px;
}
```

### Result

{{EmbedLiveSample('Examples')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref('scale')}}
- {{cssxref('rotate')}}
- {{cssxref('transform')}}

Note: skew is not an independent transform value

---
title: translate
slug: Web/CSS/translate
page-type: css-property
browser-compat: css.properties.translate
---

{{CSSRef}}

The **`translate`** [CSS](/en-US/docs/Web/CSS) property allows you to specify translation transforms individually and independently of the {{CSSxRef("transform")}} property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the `transform` value.

{{EmbedInteractiveExample("pages/css/translate.html")}}

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

### Translating an element on hover

This example shows how to use the `translate` property to move an element in three axes.
The first box is moved along the X axis and the second box is moved along the X and Y axes.
The third box is moved along the X, Y and Z axes and has the appearance of moving toward the viewer because of the addition of {{cssxref('perspective')}} to the parent element.

#### HTML

```html
<div class="wrapper">
  <div id="box1">translate X</div>
  <div id="box2">translate X,Y</div>
  <div id="box3">translate X,Y,Z</div>
</div>
```

#### CSS

```css
.wrapper {
  perspective: 100px;
  display: inline-flex;
  gap: 1em;
}
.wrapper > div {
  width: 7em;
  line-height: 7em;
  text-align: center;
  transition: 0.5s ease-in-out;
  border: 3px dotted;
}
#box1:hover {
  translate: 20px;
}

#box2:hover {
  translate: 20px 20px;
}

#box3:hover {
  translate: 5px 5px 30px;
}
```

#### Result

{{EmbedLiveSample("Translating_an_element_on_hover", "100%", 175)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref('scale')}}
- {{cssxref('rotate')}}
- {{cssxref('transform')}}

Note: skew is not an independent transform value

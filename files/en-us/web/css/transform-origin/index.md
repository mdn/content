---
title: transform-origin
slug: Web/CSS/transform-origin
page-type: css-property
browser-compat: css.properties.transform-origin
---

{{CSSRef}}

The **`transform-origin`** [CSS](/en-US/docs/Web/CSS) property sets the origin for an element's transformations.

{{EmbedInteractiveExample("pages/css/transform-origin.html")}}

The transform origin is the point around which a transformation is applied. For example, the transform origin of the [`rotate()`](/en-US/docs/Web/CSS/transform-function/rotate) function is the center of rotation.

In effect, this property wraps a pair of translations around the element's other transformations. The first translation moves the transform origin to the true origin at <math><mrow><mo stretchy="false">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy="false">)</mo></mrow></math>. Then the other transformations are applied, and because the transform origin is at <math><mrow><mo stretchy="false">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy="false">)</mo></mrow></math>, those transformations act about the transform origin. Finally, the opposite translation is applied, moving the transform origin back to its original location. Consequently, this definition

```css
transform-origin: -100% 50%;
transform: rotate(45deg);
```

results in the same transformation as

```css
transform-origin: 0 0;
transform: translate(-100%, 50%) rotate(45deg) translate(100%, -50%);
```

Reading from right to left, `translate(100%, -50%)` is the translation to bring the transform origin to the true origin, `rotate(45deg)` is the original transformation, and `translate(-100%, 50%)` is the translation to restore the transform origin to its original location.

By default, the origin of a transform is `center`.

## Syntax

```css
/* One-value syntax */
transform-origin: 2px;
transform-origin: bottom;

/* x-offset | y-offset */
transform-origin: 3cm 2px;

/* x-offset-keyword | y-offset */
transform-origin: left 2px;

/* x-offset-keyword | y-offset-keyword */
transform-origin: right top;

/* y-offset-keyword | x-offset-keyword */
transform-origin: top right;

/* x-offset | y-offset | z-offset */
transform-origin: 2px 30% 10px;

/* x-offset-keyword | y-offset | z-offset */
transform-origin: left 5px -3px;

/* x-offset-keyword | y-offset-keyword | z-offset */
transform-origin: right bottom 2cm;

/* y-offset-keyword | x-offset-keyword | z-offset */
transform-origin: bottom right 2cm;

/* Global values */
transform-origin: inherit;
transform-origin: initial;
transform-origin: revert;
transform-origin: revert-layer;
transform-origin: unset;
```

The `transform-origin` property may be specified using one, two, or three values, where each value represents an offset. Offsets that are not explicitly defined are reset to their corresponding [initial values](/en-US/docs/Web/CSS/initial_value).

If a single {{cssxref("&lt;length&gt;")}} or {{cssxref("&lt;percentage&gt;")}} value is defined, it represents the horizontal offset.

If two or more values are defined and either no value is a keyword, or the only used keyword is `center`, then the first value represents the horizontal offset and the second represents the vertical offset.

- One-value syntax:

  - The value must be a {{cssxref("&lt;length&gt;")}}, a {{cssxref("&lt;percentage&gt;")}}, or one of the keywords `left`, `center`, `right`, `top`, and `bottom`.

- Two-value syntax:

  - One value must be a {{cssxref("&lt;length&gt;")}}, a {{cssxref("&lt;percentage&gt;")}}, or one of the keywords `left`, `center`, and `right`.
  - The other value must be a {{cssxref("&lt;length&gt;")}}, a {{cssxref("&lt;percentage&gt;")}}, or one of the keywords `top`, `center`, and `bottom`.

- Three-value syntax:

  - The first two values are the same as for the two-value syntax.
  - The third value must be a {{cssxref("&lt;length&gt;")}}. It always represents the Z offset.

### Values

- _x-offset_
  - : Is a {{cssxref("&lt;length&gt;")}} or a {{cssxref("&lt;percentage&gt;")}} describing how far from the left edge of the box the origin of the transform is set.
- _offset-keyword_
  - : Is one of the `left`, `right`, `top`, `bottom`, or `center` keyword describing the corresponding offset.
- _y-offset_
  - : Is a {{cssxref("&lt;length&gt;")}} or a {{cssxref("&lt;percentage&gt;")}} describing how far from the top edge of the box the origin of the transform is set.
- _x-offset-keyword_
  - : Is one of the `left`, `right`, or `center` keyword describing how far from the left edge of the box the origin of the transform is set.
- _y-offset-keyword_
  - : Is one of the `top`, `bottom`, or `center` keyword describing how far from the top edge of the box the origin of the transform is set.
- _z-offset_
  - : Is a {{cssxref("&lt;length&gt;")}} (and never a {{cssxref("&lt;percentage&gt;")}} which would make the statement invalid) describing how far from the user eye the z=0 origin is set.

The keywords are convenience shorthands and match the following {{cssxref("&lt;percentage&gt;")}} values:

| Keyword  | Value  |
| -------- | ------ |
| `left`   | `0%`   |
| `center` | `50%`  |
| `right`  | `100%` |
| `top`    | `0%`   |
| `bottom` | `100%` |

## Formal definition

{{CSSInfo}}

> **Note:** The initial value of `transform-origin` is `0 0` for all SVG elements except for root `<svg>` elements and `<svg>` elements that are a direct child of a [foreignObject](/en-US/docs/Web/SVG/Element/foreignObject), and whose `transform-origin` is `50% 50%`, like other CSS elements. See the [SVG transform-origin](/en-US/docs/Web/SVG/Attribute/transform-origin) attribute for more information.

## Formal syntax

{{csssyntax}}

## Examples

### A demonstration of various transform values

This example shows the effect of choosing different `transform-origin` values for a variety of transformation functions.

```html hidden
<div class="container">
  <div class="example">
    <div class="box box1">&nbsp;</div>
    <div class="box original">&nbsp;</div>
  </div>

  <pre>
transform: none;
  </pre>

  <div class="example">
    <div class="box box2">&nbsp;</div>
    <div class="box original">&nbsp;</div>
  </div>

  <pre>
transform: rotate(30deg);
  </pre>

  <div class="example">
    <div class="box box3">&nbsp;</div>
    <div class="box original">&nbsp;</div>
  </div>

  <pre>
transform: rotate(30deg);
transform-origin: 0 0;
  </pre>

  <div class="example">
    <div class="box box4">&nbsp;</div>
    <div class="box original">&nbsp;</div>
  </div>

  <pre>
transform: rotate(30deg);
transform-origin: 100% 100%;
  </pre>

  <div class="example">
    <div class="box box5">&nbsp;</div>
    <div class="box original">&nbsp;</div>
  </div>

  <pre>
transform: rotate(30deg);
transform-origin: -1em -3em;
  </pre>

  <div class="example">
    <div class="box box6">&nbsp;</div>
    <div class="box original">&nbsp;</div>
  </div>

  <pre>
transform: scale(1.7);
  </pre>

  <div class="example">
    <div class="box box7">&nbsp;</div>
    <div class="box original">&nbsp;</div>
  </div>

  <pre>
transform: scale(1.7);
transform-origin: 0 0;
  </pre>

  <div class="example">
    <div class="box box8">&nbsp;</div>
    <div class="box original">&nbsp;</div>
  </div>

  <pre>
transform: scale(1.7);
transform-origin: 100% -30%;
  </pre>

  <div class="example">
    <div class="box box9">&nbsp;</div>
    <div class="box original">&nbsp;</div>
  </div>

  <pre>
transform: skewX(50deg);
transform-origin: 100% -30%;
  </pre>

  <div class="example">
    <div class="box box10">&nbsp;</div>
    <div class="box original">&nbsp;</div>
  </div>

  <pre>
transform: skewY(50deg);
transform-origin: 100% -30%;
  </pre>
</div>
```

```css hidden
.container {
  display: grid;
  grid-template-columns: 200px 100px;
  gap: 20px;
}

.example {
  position: relative;
  margin: 0 2em 4em 5em;
}

.box {
  display: inline-block;
  width: 3em;
  height: 3em;
  border: solid 1px;
  background-color: palegreen;
}

.original {
  position: absolute;
  left: 0;
  opacity: 20%;
}

.box1 {
  transform: none;
}

.box2 {
  transform: rotate(30deg);
}

.box3 {
  transform: rotate(30deg);
  transform-origin: 0 0;
}

.box4 {
  transform: rotate(30deg);
  transform-origin: 100% 100%;
}

.box5 {
  transform: rotate(30deg);
  transform-origin: -1em -3em;
}

.box6 {
  transform: scale(1.7);
}

.box7 {
  transform: scale(1.7);
  transform-origin: 0 0;
}

.box8 {
  transform: scale(1.7);
  transform-origin: 100% -30%;
}

.box9 {
  transform: skewX(50deg);
  transform-origin: 100% -30%;
}

.box10 {
  transform: skewY(50deg);
  transform-origin: 100% -30%;
}
```

{{EmbedLiveSample('A_demonstration_of_various_transform_values', '', 1350) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using CSS transforms](/en-US/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms)
- <https://css-tricks.com/almanac/properties/t/transform-origin/>

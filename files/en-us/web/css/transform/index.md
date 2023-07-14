---
title: transform
slug: Web/CSS/transform
page-type: css-property
browser-compat: css.properties.transform
---

{{CSSRef}}

The **`transform`** [CSS](/en-US/docs/Web/CSS) property lets you rotate, scale, skew, or translate an element.
It modifies the coordinate space of the CSS [visual formatting model](/en-US/docs/Web/CSS/Visual_formatting_model).

{{EmbedInteractiveExample("pages/css/transform.html")}}

If the property has a value different than `none`, a [stacking context](/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context) will be created.
In that case, the element will act as a [containing block](/en-US/docs/Web/CSS/Containing_block) for any `position: fixed;` or `position: absolute;` elements that it contains.

> **Warning:** Only transformable elements can be `transform`ed.
> That is, all elements whose layout is governed by the CSS box model except for: [non-replaced inline boxes](/en-US/docs/Glossary/Inline-level_content), [table-column boxes](/en-US/docs/Web/HTML/Element/col), and [table-column-group boxes](/en-US/docs/Web/HTML/Element/colgroup).

## Syntax

```css
/* Keyword values */
transform: none;

/* Function values */
transform: matrix(1, 2, 3, 4, 5, 6);
transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
transform: perspective(17px);
transform: rotate(0.5turn);
transform: rotate3d(1, 2, 3, 10deg);
transform: rotateX(10deg);
transform: rotateY(10deg);
transform: rotateZ(10deg);
transform: translate(12px, 50%);
transform: translate3d(12px, 50%, 3em);
transform: translateX(2em);
transform: translateY(3in);
transform: translateZ(2px);
transform: scale(2, 0.5);
transform: scale3d(2.5, 1.2, 0.3);
transform: scaleX(2);
transform: scaleY(0.5);
transform: scaleZ(0.3);
transform: skew(30deg, 20deg);
transform: skewX(30deg);
transform: skewY(1.07rad);

/* Multiple function values */
transform: translateX(10px) rotate(10deg) translateY(5px);
transform: perspective(500px) translate(10px, 0, 20px) rotateY(3deg);

/* Global values */
transform: inherit;
transform: initial;
transform: revert;
transform: revert-layer;
transform: unset;
```

The `transform` property may be specified as either the keyword value `none` or as one or more `<transform-function>` values.

If {{cssxref("transform-function/perspective", "perspective()")}} is one of multiple function values, it must be listed first.

### Values

- {{cssxref("&lt;transform-function&gt;")}}
  - : One or more of the [CSS transform functions](/en-US/docs/Web/CSS/transform-function) to be applied.
    The transform functions are multiplied in order from left to right, meaning that composite transforms are effectively [applied in order from right to left](#transform-order).
- `none`
  - : Specifies that no transform should be applied.

## Accessibility concerns

Scaling/zooming animations are problematic for accessibility, as they are a common trigger for certain types of migraine.
If you need to include such animations on your website, you should provide a control to allow users to turn off animations, preferably site-wide.

Also, consider making use of the {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}} media feature — use it to write a [media query](/en-US/docs/Web/CSS/CSS_media_queries) that will turn off animations if the user has reduced animation specified in their system preferences.

Find out more:

- [MDN Understanding WCAG, Guideline 2.3 explanations](/en-US/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.3_—_seizures_and_physical_reactions_do_not_design_content_in_a_way_that_is_known_to_cause_seizures_or_physical_reactions)
- [Understanding Success Criterion 2.3.3 | W3C Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions)

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Translating and rotating an element

#### HTML

```html
<div>Transformed element</div>
```

#### CSS

```css
div {
  border: solid red;
  transform: translate(30px, 20px) rotate(20deg);
  width: 140px;
  height: 60px;
}
```

#### Result

{{EmbedLiveSample("Translating_and_rotating_an_element", "400", "160")}}

### Transform order

The order of transform functions matters. In this example, two boxes are rotated and translated by the same values; only the transform function order is different.

#### HTML

```html
<div class="original"></div>
<div class="one">1</div>
<div class="two">2</div>
```

#### CSS

```css hidden
div {
  height: 200px;
  width: 200px;
  position: absolute;
  left: 200px;
  top: 50px;
  font-size: 4rem;
  line-height: 200px;
  text-align: center;
}
.original {
  border: 1px dashed;
}
.original:before,
.original:after {
  content: "";
  position: absolute;
  top: 100px;
  width: 500px;
  left: -150px;
  height: 1px;
  border-top: 2px dotted;
}
.original:after {
  transform: rotate(135deg);
}
.one {
  background-color: #ccc;
}
.two {
  background-color: #d6bb72;
}
```

```css
.one {
  transform: translateX(200px) rotate(135deg);
}
.two {
  transform: rotate(135deg) translateX(200px);
}
```

#### Result

{{EmbedLiveSample("Transform_order", "400", "460")}}

When an element is rotated before being translated, the translate direction is on the rotated axis. The axis as indicated with the dotted lines.

### More examples

Please see [Using CSS transforms](/en-US/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms) and {{cssxref("&lt;transform-function&gt;")}} for more examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using CSS transforms](/en-US/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms)
- {{cssxref("&lt;transform-function&gt;")}} data type with all the transform functions explained.
- Individual CSS properties: {{cssxref('translate')}}, {{cssxref('rotate')}}, and {{cssxref('scale')}} (there is no `skew` property).
- Online tool to visualize CSS Transform functions: [CSS Transform Playground](https://css-transform.moro.es/)

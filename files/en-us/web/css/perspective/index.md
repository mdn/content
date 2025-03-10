---
title: perspective
slug: Web/CSS/perspective
page-type: css-property
browser-compat: css.properties.perspective
---

{{CSSRef}}

The **`perspective`** [CSS](/en-US/docs/Web/CSS) property determines the distance between the z=0 plane and the user in order to give a 3D-positioned element some perspective.

{{InteractiveExample("CSS Demo: perspective")}}

```css interactive-example-choice
perspective: none;
```

```css interactive-example-choice
perspective: 800px;
```

```css interactive-example-choice
perspective: 23rem;
```

```css interactive-example-choice
perspective: 5.5cm;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    <div class="face front">1</div>
    <div class="face back">2</div>
    <div class="face right">3</div>
    <div class="face left">4</div>
    <div class="face top">5</div>
    <div class="face bottom">6</div>
  </div>
</section>
```

```css interactive-example
#default-example {
  background: linear-gradient(skyblue, khaki);
  perspective: 800px;
  perspective-origin: 150% 150%;
}

#example-element {
  width: 100px;
  height: 100px;
  perspective: 550px;
  transform-style: preserve-3d;
}

.face {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: inherit;
  font-size: 60px;
  color: white;
}

.front {
  background: rgba(90, 90, 90, 0.7);
  transform: translateZ(50px);
}

.back {
  background: rgba(0, 210, 0, 0.7);
  transform: rotateY(180deg) translateZ(50px);
}

.right {
  background: rgba(210, 0, 0, 0.7);
  transform: rotateY(90deg) translateZ(50px);
}

.left {
  background: rgba(0, 0, 210, 0.7);
  transform: rotateY(-90deg) translateZ(50px);
}

.top {
  background: rgba(210, 210, 0, 0.7);
  transform: rotateX(90deg) translateZ(50px);
}

.bottom {
  background: rgba(210, 0, 210, 0.7);
  transform: rotateX(-90deg) translateZ(50px);
}
```

## Syntax

```css
/* Keyword value */
perspective: none;

/* <length> values */
perspective: 20px;
perspective: 3.5em;

/* Global values */
perspective: inherit;
perspective: initial;
perspective: revert;
perspective: revert-layer;
perspective: unset;
```

### Values

- `none`
  - : Indicates that no perspective transform is to be applied.
- `<length>`
  - : A {{cssxref("&lt;length&gt;")}} giving the distance from the user to the z=0 plane. It is used to apply a perspective transform to the children of the element. Negative values are syntax errors. If the value is smaller than `1px`, it is clamped to `1px`.

## Description

Each 3D element with z>0 becomes larger; each 3D-element with z<0 becomes smaller. The strength of the effect is determined by the value of this property.
Large values of `perspective` cause a small transformation;
small values of `perspective` cause a large transformation.

The parts of the 3D elements that are behind the user — i.e. their z-axis coordinates are greater than the value of the `perspective` CSS property — are not drawn.

The _vanishing point_ is by default placed at the center of the element, but its position can be changed using the {{cssxref("perspective-origin")}} property.

Using this property with a value other than `none` creates a new [stacking context](/en-US/docs/Web/CSS/CSS_positioned_layout/Stacking_context). Also, in that case, the object will act as a containing block for `position: fixed` elements that it contains.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting perspective

An example showing how a cube varies if the `perspective` is set at different positions is given in [Using CSS transforms > Setting perspective](/en-US/docs/Web/CSS/CSS_transforms/Using_CSS_transforms#setting_perspective).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using CSS Transforms](/en-US/docs/Web/CSS/CSS_transforms/Using_CSS_transforms)

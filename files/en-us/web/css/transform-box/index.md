---
title: transform-box
slug: Web/CSS/transform-box
tags:
  - CSS
  - CSS Property
  - CSS Transforms
  - Experimental
  - NeedsExample
  - Reference
  - recipe:css-property
browser-compat: css.properties.transform-box
---
{{CSSRef}}

The **`transform-box`** CSS property defines the layout box to which the {{cssxref("transform")}} and {{cssxref("transform-origin")}} properties relate.

```css
/* Keyword values */
transform-box: content-box;
transform-box: border-box;
transform-box: fill-box;
transform-box: stroke-box;
transform-box: view-box;

/* Global values */
transform-box: inherit;
transform-box: initial;
transform-box: revert;
transform-box: unset;
```

## Syntax

The `transform-box` property is specified as one of the keyword values listed below.

### Values

- `content-box`
  - : The content box is used as the reference box. The reference box of a {{htmlElement("table")}} is the border box of its table wrapper box, not its table box.
- `border-box`
  - : The border box is used as the reference box. The reference box of a {{htmlElement("table")}} is the border box of its table wrapper box, not its table box.
- `fill-box`
  - : The object bounding box is used as the reference box.
- `stroke-box`
  - : The stroke bounding box is used as the reference box.
- `view-box`
  - : The nearest {{Glossary("SVG")}} viewport is used as the reference box. If a {{SVGAttr("viewBox")}} attribute is specified for the SVG viewport creating element, the reference box is positioned at the origin of the coordinate system established by the `viewBox` attribute, and the dimension of the reference box is set to the width and height values of the `viewBox` attribute.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### SVG transform-origin scoping

In this example we have an SVG:

```html
<svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
  <g>
    <circle id="center" fill="red" r="1" transform="translate(25 25)" />
    <circle id="boxcenter" fill="blue" r=".5" transform="translate(15 15)" />
    <rect id="box" x="10" y="10" width="10" height="10" rx="1" ry="1" stroke="black" fill="none" />
  </g>
</svg>
```

In the CSS we have an animation that uses a transform to rotate the rectangle infinitely. `transform-box: fill-box` is used to make the `transform-origin` the center of the bounding box, so the rectangle spins in place. Without it, the transform origin is the center of the SVG canvas, and so you get a very different effect.

```css
svg{
  width:80vh;
  border:1px solid #d9d9d9;
  position:absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

#box{
  transform-origin:50% 50%;
  /*+++++++++++++++++++++++++++*/
  /* if I remove this rule the pen won't work properly on Chrome for Mac, FF, Safari
  Will still work properly on Chrome for PC & Opera*/
  transform-box: fill-box;
  /*Alternatively  I can use transform-origin:15px 15px;*/
  /*+++++++++++++++++++++++++++*/
  animation: rotateBox 3s linear infinite;
}

@keyframes rotateBox {
  to {
    transform: rotate(360deg);
  }
```

Full credit for this example goes to [Pogany](https://codepen.io/giaco); see [this codepen](https://codepen.io/giaco/pen/OwowJQ) for a live version.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using CSS transforms](/en-US/docs/CSS/Using_CSS_transforms)
- {{cssxref("transform")}}, {{cssxref("transform-origin")}}

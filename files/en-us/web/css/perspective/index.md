---
title: perspective
slug: Web/CSS/perspective
tags:
  - 3D
  - CSS
  - CSS Property
  - CSS Transforms
  - Distance
  - Graphics
  - Property
  - Reference
  - perspective
  - recipe:css-property
browser-compat: css.properties.perspective
---
{{CSSRef}}

The **`perspective`** [CSS](/en-US/docs/Web/CSS) property determines the distance between the z=0 plane and the user in order to give a 3D-positioned element some perspective.

{{EmbedInteractiveExample("pages/css/perspective.html")}}

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
perspecive: revert;
perspective: unset;
```

### Values

- `none`
  - : Indicates that no perspective transform is to be applied.
- `<length>`
  - : A {{cssxref("&lt;length&gt;")}} giving the distance from the user to the z=0 plane. It is used to apply a perspective transform to the element and its content. If the value is `0` or a negative number, no perspective transform is applied.

## Description

Each 3D element with z>0 becomes larger; each 3D-element with z<0 becomes smaller. The strength of the effect is determined by the value of this property.

The parts of the 3D elements that are behind the user — i.e. their z-axis coordinates are greater than the value of the `perspective` CSS property — are not drawn.

The _vanishing point_ is by default placed at the center of the element, but its position can be changed using the {{cssxref("perspective-origin")}} property.

Using this property with a value different than `0` and `none` creates a new [stacking context](/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context). Also, in that case, the object will act as a containing block for `position: fixed` elements that it contains.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting perspective

This example shows a cube with the perspective set at different positions. How quick the cube shrinks is defined by the {{ cssxref("perspective") }} property. The smaller its value is, the deeper the perspective is.

#### HTML

The HTML below creates four copies of the same box, with the perspective set at different values.

```html
<table>
  <tbody>
    <tr>
      <th><code>perspective: 250px;</code>
      </th>
      <th><code>perspective: 350px;</code>
      </th>
    </tr>
    <tr>
      <td>
        <div class="container">
          <div class="cube pers250">
            <div class="face front">1</div>
            <div class="face back">2</div>
            <div class="face right">3</div>
            <div class="face left">4</div>
            <div class="face top">5</div>
            <div class="face bottom">6</div>
          </div>
        </div>
      </td>
      <td>
        <div class="container">
          <div class="cube pers350">
            <div class="face front">1</div>
            <div class="face back">2</div>
            <div class="face right">3</div>
            <div class="face left">4</div>
            <div class="face top">5</div>
            <div class="face bottom">6</div>
          </div>
        </div>
      </td>
    </tr>
    <tr>
      <th><code>perspective: 500px;</code>
      </th>
      <th><code>perspective: 650px;</code>
      </th>
    </tr>
    <tr>
      <td>
        <div class="container">
          <div class="cube pers500">
            <div class="face front">1</div>
            <div class="face back">2</div>
            <div class="face right">3</div>
            <div class="face left">4</div>
            <div class="face top">5</div>
            <div class="face bottom">6</div>
          </div>
        </div>
      </td>
      <td>
        <div class="container">
          <div class="cube pers650">
            <div class="face front">1</div>
            <div class="face back">2</div>
            <div class="face right">3</div>
            <div class="face left">4</div>
            <div class="face top">5</div>
            <div class="face bottom">6</div>
          </div>
        </div>
      </td>
    </tr>
  </tbody>
</table>
```

#### CSS

The CSS establishes classes that can be used to set the perspective to different distances. It also includes classes for the container box and the cube itself, as well as each of its faces.

```css
/* Shorthand classes for different perspective values */
.pers250 {
  perspective: 250px;
}

.pers350 {
  perspective: 350px;
}

.pers500 {
  perspective: 500px;
}

.pers650 {
  perspective: 650px;
}

/* Define the container div, the cube div, and a generic face */
.container {
  width: 200px;
  height: 200px;
  margin: 75px 0 0 75px;
  border: none;
}

.cube {
  width: 100%;
  height: 100%;
  backface-visibility: visible;
  perspective-origin: 150% 150%;
  transform-style: preserve-3d;
}

.face {
  display: block;
  position: absolute;
  width: 100px;
  height: 100px;
  border: none;
  line-height: 100px;
  font-family: sans-serif;
  font-size: 60px;
  color: white;
  text-align: center;
}

/* Define each face based on direction */
.front {
  background: rgba(0, 0, 0, 0.3);
  transform: translateZ(50px);
}

.back {
  background: rgba(0, 255, 0, 1);
  color: black;
  transform: rotateY(180deg) translateZ(50px);
}

.right {
  background: rgba(196, 0, 0, 0.7);
  transform: rotateY(90deg) translateZ(50px);
}

.left {
  background: rgba(0, 0, 196, 0.7);
  transform: rotateY(-90deg) translateZ(50px);
}

.top {
  background: rgba(196, 196, 0, 0.7);
  transform: rotateX(90deg) translateZ(50px);
}

.bottom {
  background: rgba(196, 0, 196, 0.7);
  transform: rotateX(-90deg) translateZ(50px);
}

/* Make the table a little nicer */
th, p, td {
  background-color: #EEEEEE;
  padding: 10px;
  font-family: sans-serif;
  text-align: left;
}
```

#### Result

{{EmbedLiveSample('Setting_perspective', 660, 700)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using CSS Transforms](/en-US/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms)

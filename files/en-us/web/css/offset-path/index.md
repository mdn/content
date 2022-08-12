---
title: offset-path
slug: Web/CSS/offset-path
tags:
  - CSS
  - CSS Motion Path
  - CSS Property
  - Motion Path
  - Reference
  - motion-path
  - offset-path
  - recipe:css-property
browser-compat: css.properties.offset-path
---
{{CSSRef}}

The **`offset-path`** [CSS](/en-US/docs/Web/CSS) property specifies a motion path for an element to follow and defines the element's positioning within the parent container or SVG coordinate system.

{{EmbedInteractiveExample("pages/css/offset-path.html")}}

## Syntax

```css
/* Default */
offset-path: none;

/* Function values */
offset-path: ray(45deg closest-side contain);

/* URL */
offset-path: url(#path);

/* Shapes */
offset-path: circle(50% at 25% 25%);
offset-path: inset(50% 50% 50% 50%);
offset-path: polygon(30% 0%, 70% 0%, 100% 50%, 30% 100%, 0% 70%, 0% 30%);
offset-path: path('M 0,200 Q 200,200 260,80 Q 290,20 400,0 Q 300,100 400,200');

/* Geometry Boxes */
offset-path: margin-box;
offset-path: stroke-box;

/* Global values */
offset-path: inherit;
offset-path: initial;
offset-path: revert;
offset-path: unset;
```

### Values

- `ray()`
  - : Taking up to three values, defines a path that is a line segment starting from the position of the box and proceeds in the direction defined by the specified angle similar to the CSS gradient angle where `0deg` is up, with positive angles increasing in the clockwise direction, with the size value being similar to the CSS radial gradient size values from `closest-side` to `farthest-corner`, and the keyterm `contain`.
- `url()`
  - : References the ID of an SVG shape — `circle`, `ellipse`, `line`, `path`, `polygon`, `polyline`, or `rect` — using the shape's geometry as the path.
- `<basic-shape>`

  - : Specifies a [CSS shape](/en-US/docs/Web/CSS/CSS_Shapes/Basic_Shapes) including `circle()`, `ellipse()`, `inset()`, `polygon()`, or `path()`.

    - {{cssxref("path","path()")}}
      - : A path string defined with SVG coordinate syntax.

- `none`
  - : Specifies no motion path at all.

## Description

This property defines a path an animated element can follow. An offset path is either a specified path with one or multiple sub-paths or the geometry of a not-styled basic shape. The element's exact position on the offset path is determined by the {{cssxref("offset-distance")}} property. Each shape or path must define an initial position for the computed value of `0` for {{cssxref("offset-distance")}} and an initial direction which specifies the rotation of the object to the initial position.

Early versions of the spec called this property `motion-path`. It was changed to `offset-path` because the property describes static positions, not motion.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Animating an element with offset-path

The `offset-path` properties in the CSS code sample defines a motion path that is identical to the `<path>` element in the SVG. The path, as can be seen in the rendering of the SVG code, is a line drawing of a house with a chimney.

#### SVG

The top and bottom halves of the scissors would appear in the top left of the canvas were they not positioned along the starting point of the motion path defined by `offset-path`.

```html
<svg xmlns="http://www.w3.org/2000/svg"
     width="700"
     height="450"
     viewBox="350 0 1400 900">
  <title>House and Scissors</title>
  <rect x="595"
        y="423"
        width="610"
        height="377"
        fill="blue" />
  <polygon points="506,423 900,190 1294,423"
           fill="yellow" />
  <polygon points="993,245 993,190 1086,190 1086,300"
           fill="red" />
  <path id="house" d="M900,190 L993,245 V201 A11,11 0 0,1 1004,190 H1075 A11,11 0 0,1 1086,201 V300 L1294,423 H1216 A11,11 0 0,0 1205,434 V789 A11,11 0 0,1 1194,800 H606 A11,11 0 0,1 595,789 V434 A11,11 0 0,0 584,423 H506 L900,190"
        fill="none"
        stroke="black"
        stroke-width="13"
        stroke-linejoin="round"
        stroke-linecap="round" />
  <path id="firstScissorHalf" class="scissorHalf"
        d="M30,0 H-10 A10,10 0 0,0 -20,10 A20,20 0 1,1 -40,-10 H20 A10,10 0 0,1 30,0 M-40,20 A10,10 1 0,0 -40,0 A10,10 1 0,0 -40,20 M0,0"
        transform="translate(0,0)"
        fill="green"
        stroke="black"
        stroke-width="5"
        stroke-linejoin="round"
        stroke-linecap="round"
        fill-rule="evenodd" />
  <path id="secondScissorHalf" class="scissorHalf"
        d="M30,0 H-10 A10,10 0 0,1 -20,-10 A20,20 0 1,0 -40,10 H20 A10,10 0 0,0 30,0 M-40,-20 A10,10 1 0,0 -40,0 A10,10 1 0,0 -40,-20 M0,0"
        transform="translate(0,0)"
        fill="forestgreen"
        stroke="black"
        stroke-width="5"
        stroke-linejoin="round"
        stroke-linecap="round"
        fill-rule="evenodd" />
</svg>
```

#### CSS

```css
.scissorHalf {
  offset-path: path('M900,190  L993,245 V201  A11,11 0 0,1 1004,190  H1075  A11,11 0 0,1 1086,201  V300  L1294,423 H1216  A11,11 0 0,0 1205,434  V789  A11,11 0 0,1 1194,800  H606  A11,11 0 0,1 595,789  V434  A11,11 0 0,0 584,423  H506 L900,190');
  animation: followpath 4s linear infinite;
}

@keyframes followpath {
   to {
     motion-offset: 100%;
     offset-distance: 100%;
   }
}
```

#### Result

{{EmbedLiveSample('Animating_an_element_with_offset-path', '100%', '450')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("offset")}}
- {{cssxref("offset-distance")}}
- {{cssxref("offset-rotate")}}
- [SVG \<path>](/en-US/docs/Web/SVG/Tutorial/Paths)
- {{cssxref("path","path()")}}

Other demos:

- [Examples of the various values](https://codepen.io/team/css-tricks/pen/WZdKMq)
- [Triangle](https://codepen.io/ericwilligers/pen/jMbJPp)
- [Scissors](https://codepen.io/ericwilligers/pen/bwVZNa)
- [Eyes](https://jsfiddle.net/ericwilligers/r1snqdan/)

---
title: stroke
slug: Web/CSS/stroke
page-type: css-property
browser-compat: css.properties.stroke
---

{{CSSRef}}

The **`stroke`** [CSS](/en-US/docs/Web/CSS) property defines the color or SVG paint server used to draw an element's stroke. As such, `stroke` only has an effect on elements that can be given a stroke (for example, {{SVGElement('rect')}} or {{SVGElement('ellipse')}}); see the page on the SVG {{SVGAttr('stroke')}} attribute for a complete list. When declared, the CSS value overrides any value of the element's {{SVGAttr("stroke")}} SVG attribute.

> [!NOTE]
> According to the 4 April 2017 draft of the [CSS Fill and Stroke Module Level 3](https://drafts.fxtf.org/fill-stroke-3/#stroke-shorthand) specification, the `stroke` property is a shorthand for a number of other stroke properties. In practice, as of August 2024, browsers do not support the setting of other stroke-related values such as width or dash patterns via the `stroke` property, treating it instead as a direct analogue of the SVG {{SVGAttr("stroke")}} attribute.

## Syntax

```css
/* assorted color values */
stroke: rgb(153 51 102 / 1);
stroke: color-mix(in lch, var(--primaryColor) 35%, gray 15%));
stroke: dodgerblue;
stroke: currentColor;
stroke: transparent;
stroke: context-stroke;

/* Global values */
stroke: inherit;
stroke: initial;
stroke: revert;
stroke: revert-layer;
stroke: unset;
```

### Values

- {{cssxref("&lt;color&gt;")}}

  - : Sets the painting of the stroke with any valid CSS color value.

- `<image>`

  - : Sets the painting of the stroke with what SVG calls a [_paint server_](https://www.w3.org/TR/SVG2/pservers.html), which in this context is an SVG gradient or pattern. CSS gradients cannot be used with the `stroke` property.

- `context-stroke`

  - : Causes an element to "inherit" its stroke definition from its [_context element_](https://svgwg.org/svg2-draft/painting.html#TermContextElement). If there is no valid context element, then this value will result in no paint being used for the stroke.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic color stroking

In this example, we create two different shapes, a circle and a rectangle, which are part of a {{SVGElement("g")}} (group) that has a gray stroke color as a default for the two shapes.

```html
<svg>
  <g fill="none" stroke="gray" stroke-width="10">
    <circle cx="100" cy="100" r="40" />
    <rect x="20" y="20" width="80" height="80" />
  </g>
</svg>
```

Via CSS, we then apply a dusky purple color to the rectangle and a red to the circle.

```css
rect {
  stroke: hsl(270deg 50% 40%);
}
circle {
  stroke: red;
}
```

{{EmbedLiveSample("Basic color stroking", "300", "180")}}

### Pattern stroking

This example uses the same group and shapes (with the circle moved over a bit) as seen in the previous example, but also has an SVG pattern defined.

```html
<svg>
  <g fill="none" stroke="gray" stroke-width="23">
    <circle cx="150" cy="90" r="40" />
    <rect x="20" y="20" width="80" height="80" />
  </g>
  <defs>
    <pattern id="star" viewBox="0,0,10,10" width="10%" height="10%">
      <polygon points="0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2" />
    </pattern>
  </defs>
</svg>
```

The pattern is then referenced in the CSS with a URL value pointing to the ID of the pattern. This pattern is applied to both shapes as a stroking paint, with the result shown.

```css
rect,
circle {
  stroke: url(#star);
}
```

The pattern is drawn relative to the shapes' bounding boxes, which can lead to visual interference where they overlap, because parts of the pattern are transparent.

{{EmbedLiveSample("Pattern stroking", "300", "180")}}

### SVG versus CSS gradients

Here, we once again use the same group-and-shapes markup as the first example, but also add a definition for an SVG gradient.

```html
<svg>
  <g fill="none" stroke="gray" stroke-width="10">
    <circle cx="100" cy="100" r="40" />
    <rect x="20" y="20" width="80" height="80" />
  </g>
  <defs>
    <linearGradient id="greenwhite">
      <stop offset="0%" stop-color="green" />
      <stop offset="100%" stop-color="white" />
    </linearGradient>
  </defs>
</svg>
```

In the CSS, we apply that SVG gradient to the rectangle using a URL value pointing to the ID of the linear gradient. To the circle, we apply a CSS linear gradient that is equivalent in intent to the SVG gradient.

```css
rect {
  stroke: url(#greenwhite);
}
circle {
  stroke: linear-gradient(90deg, green, white);
}
```

Only the rectangle receives a gradient stroke, whereas the circle falls back to the gray stroke set by the group element. This happens because CSS gradients are not valid values for the `stroke` property, whereas URL references to SVG gradients are permitted.

{{EmbedLiveSample("SVG versus CSS gradients", "300", "180")}}

### Contextual stroking

In this case, we again start with a group element, inside of which two rectangle-shaped paths are defined. After that, a linear gradient and an SVG marker are defined.

```html
<svg>
  <g fill="none" stroke="gray" stroke-width="4">
    <path d="M 20,20 l 180,0 0,100 -180,0 z" />
    <path d="M 100,40 l 180,0 0,100 -180,0 z" />
  </g>
  <defs>
    <linearGradient id="orangered">
      <stop offset="0%" stop-color="orange" />
      <stop offset="100%" stop-color="red" />
    </linearGradient>
    <marker
      id="circle"
      markerWidth="20"
      markerHeight="20"
      refX="10"
      refY="10"
      markerUnits="userSpaceOnUse">
      <circle
        cx="10"
        cy="10"
        r="8"
        stroke-width="4"
        stroke="none"
        fill="none" />
    </marker>
  </defs>
</svg>
```

We then write CSS to add a marker to both paths, and also to have a dusky purple stroke color. This is overridden for the second path, which is given a URL value to apply the orange-to-red gradient as its stroke. Finally, we set the circle element in the marker element to have a stroke value of `context-stroke`.

```css
path {
  stroke: hsl(270deg 50% 40%);
  marker: url(#circle);
}
path:nth-of-type(2) {
  stroke: url(#orangered);
}
marker circle {
  stroke: context-stroke;
}
```

Because `stroke-context` is being applied to an element that descends from a {{SVGElement('marker')}} element, the context element for every circle is the element that called the `<marker>` element; that is, the {{SVGElement('path')}} elements. The result is that the markers on the first path use the color of the calling path, and are purple. The markers on the second path, by contrast, use the same orange-to-red SVG gradient the path uses. This latter case illustrates how SVG gradients are applied as a single gradient to the entire shape, rather than being applied independently to each individual part of the shape.

{{EmbedLiveSample("Contextual stroking", "300", "180")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("stroke-dasharray")}}
- {{cssxref("stroke-dashoffset")}}
- {{cssxref("stroke-linecap")}}
- {{cssxref("stroke-linejoin")}}
- {{cssxref("stroke-miterlimit")}}
- {{cssxref("stroke-opacity")}}
- {{cssxref("stroke-width")}}
- {{cssxref("paint-order")}}
- SVG {{SVGAttr("stroke")}} attribute

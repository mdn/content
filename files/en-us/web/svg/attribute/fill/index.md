---
title: fill
slug: Web/SVG/Attribute/fill
page-type: svg-attribute
browser-compat:
  - svg.elements.circle.fill
  - svg.elements.ellipse.fill
  - svg.elements.path.fill
  - svg.elements.polygon.fill
  - svg.elements.polyline.fill
  - svg.elements.rect.fill
  - svg.elements.text.fill
  - svg.elements.textPath.fill
  - svg.elements.tref.fill
  - svg.elements.tspan.fill
---

{{SVGRef}}

The **`fill`** attribute has two different meanings. For shapes and text it's a presentation attribute that defines the color (_or any SVG paint servers like gradients or patterns_) used to paint the element; for animation it defines the final state of the animation.

> [!NOTE]
> When used as a presentation attribute, `fill` also has a CSS property counterpart: {{cssxref("fill")}}. When both are specified, the CSS property takes priority.

The SVG presentational `fill` attribute and the CSS {{cssxref("fill")}} property can be used with the following SVG elements:

- {{SVGElement('circle')}}
- {{SVGElement('ellipse')}}
- {{SVGElement('path')}}
- {{SVGElement('polygon')}}
- {{SVGElement('polyline')}}
- {{SVGElement('rect')}}
- {{SVGElement('text')}}
- {{SVGElement('textPath')}}
- {{SVGElement('tref')}}
- {{SVGElement('tspan')}}

The SVG `fill` attribute can be used to define the final animation state with the following SVG elements:

- {{SVGElement('animate')}}
- {{SVGElement('animateMotion')}}
- {{SVGElement('animateTransform')}}
- {{SVGElement('set')}}.

## Examples

### Basic color and gradient fills, and animation

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Basic color fill -->
  <circle cx="50" cy="50" r="40" fill="pink" />

  <!-- Fill circle with a gradient -->
  <defs>
    <radialGradient id="myGradient">
      <stop offset="0%" stop-color="pink" />
      <stop offset="100%" stop-color="black" />
    </radialGradient>
  </defs>

  <circle cx="150" cy="50" r="40" fill="url(#myGradient)" />

  <!--
  Keeping the final state of an animated circle
  which is a circle with a radius of 40.
  -->
  <circle cx="250" cy="50" r="20">
    <animate
      attributeType="XML"
      attributeName="r"
      from="0"
      to="40"
      dur="5s"
      fill="freeze" />
  </circle>
</svg>
```

{{EmbedLiveSample("Basic color and gradient fills, and animation", '100%', 200)}}

### `context-fill` example

In this example, we define three shapes using {{SVGElement('path')}} elements, each with a different [`stroke`](/en-US/docs/Web/SVG/Attribute/stroke) and `fill` color set on them. We also define a {{SVGElement('circle')}} element as a marker via the {{SVGElement('marker')}} element. Each shape has the marker applied via the `marker` CSS property.

The {{SVGElement('circle')}} has `stroke="context-stroke"` and `fill="context-fill"` set on it. Because it is being set as a marker in the context of the shapes, these attributes cause it to inherit the `fill` and `stroke` set on the {{SVGElement('path')}} element in each case.

```html-nolint
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 90">
  <style>
    path {
      stroke-width: 2px;
      marker: url(#circle);
    }
  </style>
  <path d="M 10 44.64 L 30 10 L 70 10 L 90 44.64 L 70 79.28 L 30 79.28 Z"
        stroke="red" fill="orange" />
  <path d="M 100 44.64 L 80 10 L 120 10 L 140 44.64 L 120 79.28 L 80 79.28 Z"
        stroke="green" fill="lightgreen" />
  <path d="M 150 44.64 L 130 10 L 170 10 L 190 44.64 L 170 79.28 L 130 79.28 Z"
        stroke="blue" fill="lightblue" />
  <marker id="circle" markerWidth="12" markerHeight="12"
          refX="6" refY="6" markerUnits="userSpaceOnUse">
    <circle cx="6" cy="6" r="3" stroke-width="2"
            stroke="context-stroke" fill="context-fill"  />
  </marker>
</svg>
```

The output is as follows:

{{EmbedLiveSample("`context-stroke` example", '100%', 220)}}

> [!NOTE]
> Elements can also use `context-stroke` and `context-fill` to inherit `stroke` and `fill` values when they are referenced by {{SVGElement('use')}} elements.

## animate

For {{SVGElement('animate')}}, `fill` defines the final state of the animation.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code>freeze</code> (<em>Keep the state of the last animation frame</em
        >) | <code>remove</code> (<em
          >Keep the state of the first animation frame</em
        >)
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>remove</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## animateMotion

For {{SVGElement('animateMotion')}}, `fill` defines the final state of the animation.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code>freeze</code> (<em>Keep the state of the last animation frame</em
        >) | <code>remove</code> (<em
          >Keep the state of the first animation frame</em
        >)
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>remove</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## animateTransform

For {{SVGElement('animateTransform')}}, `fill` defines the final state of the animation.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code>freeze</code> (<em>Keep the state of the last animation frame</em
        >) | <code>remove</code> (<em
          >Keep the state of the first animation frame</em
        >)
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>remove</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## circle

For {{SVGElement('circle')}}, `fill` is a presentation attribute that defines the color of the circle.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#paint">&#x3C;paint></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>black</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## ellipse

For {{SVGElement('ellipse')}}, `fill` is a presentation attribute that defines the color of the ellipse.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#paint">&#x3C;paint></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>black</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## path

For {{SVGElement('path')}}, `fill` is a presentation attribute that defines the color of the interior of the shape. (_The interior is defined by the {{SVGAttr('fill-rule')}} attribute or {{cssxref("fill-rule")}} property._)

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#paint">&#x3C;paint></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>black</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## polygon

For {{SVGElement('polygon')}}, `fill` is a presentation attribute that defines the color of the interior of the shape. (_The interior is defined by the {{SVGAttr('fill-rule')}} attribute or {{cssxref("fill-rule")}} property._)

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#paint">&#x3C;paint></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>black</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## polyline

For {{SVGElement('polyline')}}, `fill` is a presentation attribute that defines the color of the interior of the shape. (_The interior is defined by the {{SVGAttr('fill-rule')}} attribute or {{cssxref("fill-rule")}} property._)

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#paint">&#x3C;paint></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>black</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## rect

For {{SVGElement('rect')}}, `fill` is a presentation attribute that defines the color of the rectangle.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#paint">&#x3C;paint></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>black</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## set

For {{SVGElement('set')}}, `fill` defines the final state of the animation.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code>freeze</code> (<em>Keep the state of the last animation frame</em
        >) | <code>remove</code> (<em
          >Keep the state of the first animation frame</em
        >)
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>remove</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## text

For {{SVGElement('text')}}, `fill` is a presentation attribute that defines the color of the text.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#paint">&#x3C;paint></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>black</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## textPath

For {{SVGElement('textPath')}}, `fill` is a presentation attribute that defines the color of the text.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#paint">&#x3C;paint></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>black</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## tref

> [!WARNING]
> As of SVG2 {{SVGElement('tref')}} is deprecated and shouldn't be used.

For {{SVGElement('tref')}}, `fill` is a presentation attribute that defines the color of the text.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#paint">&#x3C;paint></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>black</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## tspan

For {{SVGElement('tspan')}}, `fill` is a presentation attribute that defines the color of the text.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#paint">&#x3C;paint></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>black</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- CSS {{cssxref("fill")}} property

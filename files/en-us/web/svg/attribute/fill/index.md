---
title: fill
slug: Web/SVG/Attribute/fill
page-type: svg-attribute
browser-compat: svg.attributes.presentation.fill
---

{{SVGRef}}

The **`fill`** attribute has two different meanings. For shapes and text it's a presentation attribute that defines the color (_or any SVG paint servers like gradients or patterns_) used to paint the element; for animation it defines the final state of the animation.

You can use this attribute with the following SVG elements:

- {{SVGElement('altGlyph')}}
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

For animation, these elements are using this attribute: {{SVGElement('animate')}}, {{SVGElement('animateMotion')}}, {{SVGElement('animateTransform')}}, and {{SVGElement('set')}}.

## Example

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Simple color fill -->
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

{{EmbedLiveSample("Example", '100%', 200)}}

## altGlyph

> **Warning:** As of SVG2 {{SVGElement('altGlyph')}} is deprecated and shouldn't be used.

For {{SVGElement('altGlyph')}}, `fill` is a presentation attribute that defines the color of the glyph.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/docs/Web/SVG/Content_type#Paint">&#x3C;paint></a></strong
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

> **Note:** As a presentation attribute `fill` can be used as a CSS property.

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
          ><a href="/docs/Web/SVG/Content_type#Paint">&#x3C;paint></a></strong
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

> **Note:** As a presentation attribute `fill` can be used as a CSS property.

## ellipse

For {{SVGElement('ellipse')}}, `fill` is a presentation attribute that defines the color of the ellipse.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/docs/Web/SVG/Content_type#Paint">&#x3C;paint></a></strong
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

> **Note:** As a presentation attribute `fill` can be used as a CSS property.

## path

For {{SVGElement('path')}}, `fill` is a presentation attribute that defines the color of the interior of the shape. (_Interior is define by the {{SVGAttr('fill-rule')}} attribute_)

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/docs/Web/SVG/Content_type#Paint">&#x3C;paint></a></strong
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

> **Note:** As a presentation attribute `fill` can be used as a CSS property.

## polygon

For {{SVGElement('polygon')}}, `fill` is a presentation attribute that defines the color of the interior of the shape. (_Interior is define by the {{SVGAttr('fill-rule')}} attribute_)

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/docs/Web/SVG/Content_type#Paint">&#x3C;paint></a></strong
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

> **Note:** As a presentation attribute `fill` can be used as a CSS property.

## polyline

For {{SVGElement('polyline')}}, `fill` is a presentation attribute that defines the color of the interior of the shape. (_Interior is define by the {{SVGAttr('fill-rule')}} attribute_)

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/docs/Web/SVG/Content_type#Paint">&#x3C;paint></a></strong
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

> **Note:** As a presentation attribute `fill` can be used as a CSS property.

## rect

For {{SVGElement('rect')}}, `fill` is a presentation attribute that defines the color of the rectangle.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/docs/Web/SVG/Content_type#Paint">&#x3C;paint></a></strong
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

> **Note:** As a presentation attribute `fill` can be used as a CSS property.

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

For {{SVGElement('text')}}, `fill` is a presentation attribute that defines what the color of the text.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/docs/Web/SVG/Content_type#Paint">&#x3C;paint></a></strong
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

> **Note:** As a presentation attribute `fill` can be used as a CSS property.

## textPath

For {{SVGElement('textPath')}}, `fill` is a presentation attribute that defines the color of the text.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/docs/Web/SVG/Content_type#Paint">&#x3C;paint></a></strong
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

> **Note:** As a presentation attribute `fill` can be used as a CSS property.

## tref

> **Warning:** As of SVG2 {{SVGElement('tref')}} is deprecated and shouldn't be used.

For {{SVGElement('tref')}}, `fill` is a presentation attribute that defines the color of the text.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/docs/Web/SVG/Content_type#Paint">&#x3C;paint></a></strong
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

> **Note:** As a presentation attribute `fill` can be used as a CSS property.

## tspan

For {{SVGElement('tspan')}}, `fill` is a presentation attribute that defines the color of the text.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/docs/Web/SVG/Content_type#Paint">&#x3C;paint></a></strong
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

> **Note:** As a presentation attribute `fill` can be used as a CSS property.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

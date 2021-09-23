---
title: fill
slug: Web/SVG/Attribute/fill
tags:
  - SVG
  - SVG Attribute
browser-compat: svg.attributes.presentation.fill
---
{{SVGRef}}

The **`fill`** attribute has two different meanings. For shapes and text it's a presentation attribute that defines the color (*or any SVG paint servers like gradients or patterns*) used to paint the element; for animation it defines the final state of the animation.

You can use this attribute with the following SVG elements:

*   {{SVGElement('altGlyph')}}
*   {{SVGElement('circle')}}
*   {{SVGElement('ellipse')}}
*   {{SVGElement('path')}}
*   {{SVGElement('polygon')}}
*   {{SVGElement('polyline')}}
*   {{SVGElement('rect')}}
*   {{SVGElement('text')}}
*   {{SVGElement('textPath')}}
*   {{SVGElement('tref')}}
*   {{SVGElement('tspan')}}

For animation, these elements are using this attribute: {{SVGElement('animate')}}, {{SVGElement('animateColor')}}, {{SVGElement('animateMotion')}}, {{SVGElement('animateTransform')}}, and {{SVGElement('set')}}.

## Example

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Simple color fill -->
  <circle cx="50" cy="50" r="40" fill="pink" />

  <!-- Fill circle with a gradient -->
  <defs>
    <radialGradient id="myGradient">
      <stop offset="0%"   stop-color="pink" />
      <stop offset="100%" stop-color="black" />
    </radialGradient>
  </defs>

  <circle cx="150" cy="50" r="40" fill="url(#myGradient)" />

  <!--
  Keeping the final state of an animated circle
  which is a circle with a radius of 40.
  -->
  <circle cx="250" cy="50" r="20">
    <animate attributeType="XML"
             attributeName="r"
             from="0" to="40" dur="5s"
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

## animateColor

> **Warning:** As of SVG Animation 2 {{SVGElement('animateColor')}} is deprecated and shouldn't be used. Use {{SVGElement('animate')}} instead.

For {{SVGElement('animateColor')}}, `fill` defines the final state of the animation.

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

For {{SVGElement('path')}}, `fill` is a presentation attribute that defines the color of the interior of the shape. (*Interior is define by the {{SVGAttr('fill-rule')}} attribute*)

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

For {{SVGElement('polygon')}}, `fill` is a presentation attribute that defines the color of the interior of the shape. (*Interior is define by the {{SVGAttr('fill-rule')}} attribute*)

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

For {{SVGElement('polyline')}}, `fill` is a presentation attribute that defines the color of the interior of the shape. (*Interior is define by the {{SVGAttr('fill-rule')}} attribute*)

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

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Specification</th>
      <th scope="col">Status</th>
      <th scope="col">Comment</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {{SpecName("SVG Animations 2", "#FillAttribute", "transform")}}
      </td>
      <td>{{Spec2("SVG Animations 2")}}</td>
      <td>Definition for animations</td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG2", "painting.html#FillProperty", "fill")}}
      </td>
      <td>{{Spec2("SVG2")}}</td>
      <td>
        Definition for shapes and texts.<br />Adds <code>context-fill</code> and
        <code>context-stroke</code>.
      </td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "animate.html#FillAttribute", "fill")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Initial definition for animations</td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "painting.html#FillProperty", "fill")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Initial definition for shapes and texts</td>
    </tr>
  </tbody>
</table>

## Browser compatibility

{{Compat}}

> **Note:** For information on using the `context-fill` (and `context-stroke`) values from HTML documents, see the documentation for the non-standard {{cssxref("-moz-context-properties")}} property.

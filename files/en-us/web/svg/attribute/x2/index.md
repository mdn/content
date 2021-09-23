---
title: x2
slug: Web/SVG/Attribute/x2
tags:
  - SVG
  - SVG Attribute
---
{{SVGRef}}

The **`x2`** attribute is used to specify the second x-coordinate for drawing an SVG element that requires more than one coordinate. Elements that only need one coordinate use the {{SVGAttr("x")}} attribute instead.

You can use this attribute with the following SVG elements:

*   {{ SVGElement("line") }}
*   {{ SVGElement("linearGradient") }}

## Example

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
  <line x1="5" x2="1" y1="1" y2="9" stroke="red" />
  <line x1="5" x2="5" y1="1" y2="9" stroke="green" />
  <line x1="5" x2="9" y1="1" y2="9" stroke="blue" />
</svg>
```

{{EmbedLiveSample("Example", '100%', 200)}}

## line

For {{SVGElement('line')}}, `x2` defines the x coordinate of the ending point of the line.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
        >
        |
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
  <line x1="5" x2="1" y1="1" y2="9" stroke="red"   />
  <line x1="5" x2="5" y1="1" y2="9" stroke="green" />
  <line x1="5" x2="9" y1="1" y2="9" stroke="blue"  />
</svg>
```

{{EmbedLiveSample('line', '100%', 200)}}

## linearGradient

For {{SVGElement('linearGradient')}}, `x2` defines the  x coordinate of the ending point of the *gradient vector* used to map the gradient stop values. The exact behavior of this attribute is influenced by the {{SVGAttr('gradientUnits')}} attributes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
        >
        |
        <strong
          ><a href="/en-US/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>100%</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="0 0 20 10" xmlns="http://www.w3.org/2000/svg">
  <!--
  By default the gradient vector end at the right
  bounding limit of the shape it is applied to
  -->
  <linearGradient x2="100%" id="g0">
    <stop offset="0"    stop-color="black"  />
    <stop offset="100%" stop-color="red" />
  </linearGradient>

  <rect x="1"  y="1" width="8" height="8" fill="url(#g0)" />

  <!--
  Here the gradient vector start at 20% of the left
  bounding limit of the shape it is applied to
  -->
  <linearGradient x2="20%" id="g1">
    <stop offset="0"    stop-color="black"  />
    <stop offset="100%" stop-color="red" />
  </linearGradient>

  <rect x="11" y="1" width="8" height="8" fill="url(#g1)" />
</svg>
```

{{EmbedLiveSample('linearGradient', '100%', 200)}}

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
        {{SpecName("SVG2", "shapes.html#LineElementX2Attribute", "x2")}}
      </td>
      <td>{{Spec2("SVG2")}}</td>
      <td>Definition for <code>&#x3C;line></code></td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG2", "pservers.html#LinearGradientElementX2Attribute", "x2")}}
      </td>
      <td>{{Spec2("SVG2")}}</td>
      <td>Definition for <code>&#x3C;linearGradient></code></td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "shapes.html#LineElementX2Attribute", "x2")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Initial definition for <code>&#x3C;line></code></td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "pservers.html#LinearGradientElementX2Attribute", "x2")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Initial definition for <code>&#x3C;linearGradient></code></td>
    </tr>
  </tbody>
</table>

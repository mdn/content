---
title: to
slug: Web/SVG/Attribute/To
tags:
  - NeedsCompatTable
  - SVG
  - SVG Attribute
---
{{SVGRef}}

The **`to`** attribute indicates the final value of the attribute that will be modified during the animation.

The value of the attribute will change between the {{SVGAttr("from")}} attribute value and this value.

You can use this attribute with the following SVG elements:

*   {{SVGElement("animate")}}
*   {{SVGElement("animateColor")}}
*   {{SVGElement("animateMotion")}}
*   {{SVGElement("animateTransform")}}
*   {{SVGElement("set")}}

## Example

```css hidden
html, body, svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="100" height="100">
    <animate attributeType="XML" attributeName="width" fill="freeze"
        from="100" to="150" dur="3s"/>
  </rect>
</svg>
```

{{EmbedLiveSample("Example", "200", "200")}}

## animate, animateColor, animateMotion, animateTransform

For {{SVGElement("animate")}}, {{SVGElement("animateColor")}}, {{SVGElement("animateMotion")}}, and {{SVGElement("animateTransform")}}, `to` specifies the ending value of the animation.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td><code>&#x3C;value></code></td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><em>None</em></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

The exact value type for this attribute depend on the value of the attribute that will be animated.

If a list of values is defined via the {{SVGAttr("values")}} attribute, the `to` attribute is ignored.

## set

For the {{SVGElement("set")}} element, `to` specifies the value for the attribute during the duration of the element.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td><code>&#x3C;value></code></td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><em>None</em></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

The exact value type for this attribute depend on the value of the attribute that will be animated.

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
        {{SpecName("SVG Animations 2", "#SetElementToAttribute", "to for &lt;set&gt;")}}
      </td>
      <td>{{Spec2("SVG Animations 2")}}</td>
      <td>No change</td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG Animations 2", "#ToAttribute", "to for &lt;animate&gt;, &lt;animateColor&gt;, &lt;animateMotion&gt;, and &lt;animateTransform&gt;")}}
      </td>
      <td>{{Spec2("SVG Animations 2")}}</td>
      <td>No change</td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "animate.html#SetElementToAttribute", "to for &lt;set&gt;")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Initial definition for <code>&#x3C;set></code></td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "animate.html#ToAttribute", "to for &lt;animate&gt;, &lt;animateColor&gt;, &lt;animateMotion&gt;, and &lt;animateTransform&gt;")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>
        Initial definition for <code>&#x3C;animate></code>,
        <code>&#x3C;animateColor></code>, <code>&#x3C;animateMotion></code>, and
        <code>&#x3C;animateTransform></code>
      </td>
    </tr>
  </tbody>
</table>

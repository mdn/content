---
title: operator
slug: Web/SVG/Attribute/operator
tags:
  - Filters
  - NeedsCompatTable
  - SVG
  - SVG Attribute
---
{{SVGRef}}

The **`operator`** attribute has two meanings based on the context it's used in. Either it defines the compositing or morphing operation to be performed.

You can use this attribute with the following SVG elements:

*   {{SVGElement("feComposite")}}
*   {{SVGElement("feMorphology")}}

## Example

```css hidden
html, body, svg {
  height: 100%;
  font: 20px Arial, Helvetica, sans-serif;
}
```

```html
<svg viewBox="0 0 120 70" xmlns="http://www.w3.org/2000/svg">
  <filter id="erode">
    <feMorphology operator="erode" radius="0.4"/>
  </filter>
  <filter id="dilate">
    <feMorphology operator="dilate" radius="0.8"/>
  </filter>

  <text x="0" y="15">Normal text</text>
  <text x="0" y="40" filter="url(#erode)">Thin text</text>
  <text x="0" y="65" filter="url(#dilate)">Fat text</text>
</svg>
```

{{EmbedLiveSample("Example", "240", "200")}}

## feComposite

For {{SVGElement("feComposite")}}, `operator` defines the compositing operation that is to be performed.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code>over</code> | <code>in</code> | <code>out</code> |
        <code>atop</code> | <code>xor</code> | <code>lighter</code> |
        <code>arithmetic</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>over</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

*   `over`
    *   : This value indicates that the source graphic defined in the {{SVGAttr("in")}} attribute is placed over the destination graphic defined in the {{SVGAttr("in2")}} attribute.
*   `in`
    *   : This value indicates that the parts of the source graphic defined in the `in` attribute that overlap the destination graphic defined in the `in2` attribute, replace the destination graphic.
*   `out`
    *   : This value indicates that the parts of the source graphic defined in the `in` attribute that fall outside the destination graphic defined in the `in2` attribute, are displayed.
*   `atop`
    *   : This value indicates that the parts of the source graphic defined in the `in` attribute, which overlap the destination graphic defined in the `in2` attribute, replace the destination graphic. The parts of the destination graphic that do not overlap with the source graphic stay untouched.
*   `xor`
    *   : This value indicates that the non-overlapping regions of the source graphic defined in the `in` attribute and the destination graphic defined in the `in2` attribute are combined.
*   `lighter`
    *   : This value indicates that the sum of the source graphic defined in the `in` attribute and the destination graphic defined in the `in2` attribute is displayed.
*   `arithmetic`
    *   : This value indicates that the source graphic defined in the `in` attribute and the destination graphic defined in the `in2` attribute are combined using the following formula:

        `result = k1*i1*i2 + k2*i1 + k3*i2 + k4`

        where:
        `i1` and `i2` indicate the corresponding pixel channel values of the input image, which map to `in` and `in2` respectively, and {{SVGAttr("k1")}},{{SVGAttr("k2")}},{{SVGAttr("k3")}},and {{SVGAttr("k4")}} indicate the values of the attributes with the same name.

## feMorphology

For {{SVGElement("feMorphology")}}, `operator` defines whether to erode (i.e., thin) or dilate (fatten) the source graphic.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td><code>erode</code> | <code>dilate</code></td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>erode</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

*   `erode`
    *   : This value thins the source graphic defined in the {{SVGAttr("in")}} attribute.
*   `dilate`
    *   : This value fattens the source graphic defined in the `in` attribute.

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
        {{SpecName("Filters 1.0", "#element-attrdef-femorphology-operator", "operator for &lt;feMorphology&gt;")}}
      </td>
      <td>{{Spec2("Filters 1.0")}}</td>
      <td>No change</td>
    </tr>
    <tr>
      <td>
        {{SpecName("Filters 1.0", "#element-attrdef-fecomposite-operator", "operator for &lt;feComposite&gt;")}}
      </td>
      <td>{{Spec2("Filters 1.0")}}</td>
      <td>
        Refers to CSS Compositing and Blending specification for the values and
        added the <code>lighter</code> value.
      </td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "filters.html#feMorphologyOperatorAttribute", "operator for &lt;feMorphology&gt;")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Initial definition for <code>&#x3C;feMorphology></code></td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "filters.html#feCompositeOperatorAttribute", "operator for &lt;feComposite&gt;")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Initial definition for <code>&#x3C;feComposite></code></td>
    </tr>
  </tbody>
</table>

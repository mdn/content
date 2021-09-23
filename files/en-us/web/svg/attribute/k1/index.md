---
title: k1
slug: Web/SVG/Attribute/k1
tags:
  - Filters
  - SVG
  - SVG Attribute
browser-compat: svg.elements.feComposite.k1
---
{{SVGRef}}

The **`k1`** attribute defines one of the values to be used within the `arithmetic` operation of the {{SVGElement("feComposite")}} filter primitive.

The pixel composition is computed using the following formula:

```js
result = k1*i1*i2 + k2*i1 + k3*i2 + k4
```

You can use this attribute with the following SVG elements:

*   {{SVGElement("feComposite")}}

## Example

```css hidden
html, body, svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg">
  <filter id="composite1" x="0" y="0" width="100%" height="100%">
    <feComposite in2="SourceGraphic" operator="arithmetic" k1="1" k2="0" k3="0" k4="0" />
  </filter>
  <filter id="composite2" x="0" y="0" width="100%" height="100%">
    <feComposite in2="SourceGraphic" operator="arithmetic" k1="10" k2="0" k3="0" k4="0" />
  </filter>

  <image href="mdn.svg" x="0" y="0"
      width="200" height="200" style="filter: url(#composite1);" />
  <image href="mdn.svg" x="0" y="0"
      width="200" height="200" style="filter: url(#composite2); transform: translateX(220px);" />
</svg>
```

{{EmbedLiveSample("Example", "420", "200")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>{{cssxref("number")}}</td>
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
        {{SpecName("Filters 1.0", "#element-attrdef-fecomposite-k1", "k1")}}
      </td>
      <td>{{Spec2("Filters 1.0")}}</td>
      <td>No change</td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "filters.html#feCompositeK1Attribute", "k1")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Initial definition</td>
    </tr>
  </tbody>
</table>

## Browser compatibility

{{Compat}}

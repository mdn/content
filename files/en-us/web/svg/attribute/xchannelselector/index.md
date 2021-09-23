---
title: xChannelSelector
slug: Web/SVG/Attribute/xChannelSelector
tags:
  - Filters
  - NeedsExample
  - SVG
  - SVG Attribute
browser-compat: svg.elements.feDisplacementMap.xChannelSelector
---
{{SVGRef}}

The **`xChannelSelector`** attribute indicates which color channel from {{SVGAttr("in2")}} to use to displace the pixels in {{SVGAttr("in")}} along the x-axis.

You can use this attribute with the following SVG elements:

*   {{SVGElement("feDisplacementMap")}}

## Example

```css hidden
html, body, svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 440 160" xmlns="http://www.w3.org/2000/svg">
  <filter id="displacementFilter">
    <feImage xlink:href="mdn.svg"
        x="0" y="0" width="100%" height="100%" result="abc"/>
    <feDisplacementMap in2="abc" in="SourceGraphic"
        scale="30" xChannelSelector="R"/>
  </filter>
  <filter id="displacementFilter2">
    <feImage xlink:href="mdn.svg"
        x="0" y="0" width="100%" height="100%" result="abc"/>
    <feDisplacementMap in2="abc" in="SourceGraphic"
        scale="30" xChannelSelector="B"/>
  </filter>

  <text x="10" y="60" font-size="50"
      filter="url(#displacementFilter)">Some displaced text</text>
  <text x="10" y="120" font-size="50"
      filter="url(#displacementFilter2)">Some displaced text</text>
</svg>
```

{{EmbedLiveSample("Example", "480", "200")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td><code>R</code> | <code>G</code> | <code>B</code> | <code>A</code></td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>A</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

*   `R`
    *   : This keyword specifies that the red color channel of the input image defined in {{SVGAttr("in2")}} will be used to displace the pixels of the input image defined in {{SVGAttr("in")}} along the x-axis.
*   `G`
    *   : This keyword specifies that the green color channel of the input image defined in {{SVGAttr("in2")}} will be used to displace the pixels of the input image defined in {{SVGAttr("in")}} along the x-axis.
*   `B`
    *   : This keyword specifies that the blue color channel of the input image defined in {{SVGAttr("in2")}} will be used to displace the pixels of the input image defined in {{SVGAttr("in")}} along the x-axis.
*   `A`
    *   : This keyword specifies that the alpha channel of the input image defined in {{SVGAttr("in2")}} will be used to displace the pixels of the input image defined in {{SVGAttr("in")}} along the x-axis.

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
        {{SpecName("Filters 1.0", "#element-attrdef-fedisplacementmap-xchannelselector", "xChannelSelector")}}
      </td>
      <td>{{Spec2("Filters 1.0")}}</td>
      <td>No change</td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "filters.html#feDisplacementMapXChannelSelectorAttribute", "xChannelSelector")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Initial definition</td>
    </tr>
  </tbody>
</table>

## Browser compatibility

{{Compat}}

---
title: mode
slug: Web/SVG/Attribute/mode
tags:
  - Filters
  - SVG
  - SVG Attribute
browser-compat: svg.elements.feBlend.mode
---
{{SVGRef}}

The **`mode`** attribute defines the blending mode on the {{SVGElement("feBlend")}} filter primitive.

You can use this attribute with the following SVG elements:

*   {{SVGElement("feBlend")}}

## Example

```css hidden
html, body, svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg">
  <filter id="blending1" x="0" y="0" width="100%" height="100%">
    <feFlood result="floodFill" x="0" y="0" width="100%" height="100%"
        flood-color="seagreen" flood-opacity="1"/>
    <feBlend in="SourceGraphic" in2="floodFill" mode="multiply"/>
  </filter>
  <filter id="blending2" x="0" y="0" width="100%" height="100%">
    <feFlood result="floodFill" x="0" y="0" width="100%" height="100%"
        flood-color="seagreen" flood-opacity="1"/>
    <feBlend in="SourceGraphic" in2="floodFill" mode="color-dodge"/>
  </filter>

  <image xlink:href="//developer.mozilla.org/files/6457/mdn_logo_only_color.png" width="200" height="200"
      style="filter:url(#blending1);"/>
  <image xlink:href="//developer.mozilla.org/files/6457/mdn_logo_only_color.png" width="200" height="200"
      style="filter:url(#blending2); transform:translateX(220px);"/>
</svg>
```

{{EmbedLiveSample("Example", "480", "200")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>{{cssxref("blend-mode")}}</td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>normal</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

For a description of the values, see {{cssxref("blend-mode")}}.

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
        {{SpecName("Filters 1.0", "#element-attrdef-feblend-mode", "mode")}}
      </td>
      <td>{{Spec2("Filters 1.0")}}</td>
      <td>No change</td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "filters.html#feBlendModeAttribute", "mode")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Initial definition</td>
    </tr>
  </tbody>
</table>

## Browser compatibility

{{Compat}}

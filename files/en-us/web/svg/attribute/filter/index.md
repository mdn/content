---
title: filter
slug: Web/SVG/Attribute/filter
tags:
  - SVG
  - SVG Attribute
  - SVG Filter
browser-compat: svg.attributes.presentation.filter
---
{{SVGRef}}

The **`filter`** attribute specifies the filter effects defined by the {{SVGElement("filter")}} element that shall be applied to its element.

> **Note:** As a presentation attribute, `filter` can be used as a CSS property. See {{cssxref("filter", "CSS filter")}} for further information.

As a presentation attribute, it can be applied to any element but it only has effect on [container elements](/en-US/docs/Web/SVG/Element#Container_elements) without the {{SVGElement("defs")}} element, all [graphics elements](/en-US/docs/Web/SVG/Element#Graphics_elements) and the {{SVGElement("use")}} element.

## Example

```css hidden
html, body, svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <filter id="blur">
    <feGaussianBlur stdDeviation="2" />
  </filter>

  <rect x="10" y="10" width="80" height="80" filter="url(#blur)" />
</svg>
```

{{EmbedLiveSample("Example", "220", "220")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code>none</code>
        <a
          href="/en-US/docs/CSS/Value_definition_syntax#Single_bar"
          title="Single bar: exactly one of the entities must be present"
          >|</a
        >
        <code>&#x3C;filter-function-list></code>
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>none</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

For a description of the values see the {{cssxref("filter","CSS filter")}} property.

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
        {{SpecName("Filters 1.0", "#FilterProperty", "filter")}}
      </td>
      <td>{{Spec2("Filters 1.0")}}</td>
      <td>Extended the values by several special filter functions.</td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "filters.html#FilterProperty", "filter")}}
      </td>
      <td>{{Spec2('SVG1.1')}}</td>
      <td>Initial definition</td>
    </tr>
  </tbody>
</table>

## Browser compatibility

{{Compat}}

## See also

*   {{SVGElement("filter")}}
*   {{cssxref("filter","CSS filter")}}

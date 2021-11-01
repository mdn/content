---
title: overflow
slug: Web/SVG/Attribute/overflow
tags:
  - SVG
  - SVG Attribute
browser-compat: svg.attributes.presentation.overflow
---
{{SVGRef}}

The **`overflow`** attribute sets what to do when an element's content is too big to fit in its block formatting context. **This feature is not widely implemented yet**.

This attribute has the same parameter values and meaning as the {{cssxref("overflow", "CSS overflow property")}}, however, the following additional points apply:

*   If it has a value of `visible`, the attribute has no effect (i.e., a clipping rectangle is not created).
*   If the `overflow` property has the value `hidden` or `scroll`, a clip of the exact size of the SVG viewport is applied.
*   When `scroll` is specified on an {{SVGElement("svg")}} element, a scrollbar or panner is normally shown for the SVG viewport whether or not any of its content is clipped.
*   Within SVG content, the value `auto` implies that all rendered content for child elements must be visible, either through a scrolling mechanism, or by rendering with no clip.

> **Note:** Although the initial value for overflow is `auto`, it is overwritten in the User Agent style sheet for the {{SVGElement("svg")}} element when it is not the root element of a stand-alone document, the {{SVGElement("pattern")}} element, and the {{SVGElement("marker")}} element to be hidden by default.

> **Note:** As a presentation attribute, `overflow` can be used as a CSS property. See the {{cssxref("opacity", "CSS opacity")}} property for more information.

You can use this attribute with the following SVG elements:

*   {{SVGElement("foreignObject")}}
*   {{SVGElement("iframe")}}
*   {{SVGElement("image")}}
*   {{SVGElement("marker")}}
*   {{SVGElement("pattern")}}
*   {{SVGElement("symbol")}}
*   {{SVGElement("svg")}}
*   {{SVGElement("text")}}

## Example

```css hidden
html, body, svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 200 30" xmlns="http://www.w3.org/2000/svg" overflow="auto">
  <text y="20">This text is wider than the SVG, so there should be a scrollbar shown.</text>
</svg>
```

{{EmbedLiveSample("Example", "200", "50")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code>visible</code> | <code>hidden</code> | <code>scroll</code> |
        <code>auto</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>visible</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

For a description of the values, please see the {{cssxref("overflow", "CSS overflow")}} property.

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
        {{SpecName("CSS2.1", "visufx.html#overflow", "overflow")}}
      </td>
      <td>{{Spec2("CSS2.1")}}</td>
      <td>Definition in CSS</td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG2", "render.html#OverflowAndClipProperties", "overflow")}}
      </td>
      <td>{{Spec2("SVG2")}}</td>
      <td>
        Simplifies the definition and outlines the values within the user agent
        stylesheet.
      </td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "masking.html#OverflowProperty", "overflow")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Initial definition</td>
    </tr>
  </tbody>
</table>

## Browser compatibility

{{Compat}}

## See also

*   {{cssxref("overflow", "CSS overflow")}}

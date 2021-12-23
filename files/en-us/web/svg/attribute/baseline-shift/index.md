---
title: baseline-shift
slug: Web/SVG/Attribute/baseline-shift
tags:
  - NeedsExample
  - SVG
  - SVG Attribute
browser-compat: svg.attributes.presentation.baseline-shift
---
{{SVGRef}}

The **`baseline-shift`** attribute allows repositioning of the dominant-baseline relative to the dominant-baseline of the parent text content element. The shifted object might be a sub- or superscript.

> **Note:** As a presentation attribute `baseline-shift` can be used as a CSS property.

> **Note:** This property is going to be deprecated and authors are advised to use [`vertical-align`](/en-US/docs/Web/CSS/vertical-align) instead.

You can use this attribute with the following SVG elements:

*   {{SVGElement("altGlyph")}}
*   {{SVGElement("textPath")}}
*   {{SVGElement("tref")}}
*   {{SVGElement("tspan")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        {{cssxref("length-percentage")}} | <code>sub</code> |
        <code>super</code>
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

*   `sub`
    *   : The dominant-baseline is shifted to the default position for subscripts.
*   `super`
    *   : The dominant-baseline is shifted to the default position for superscripts.
*   `<length-percentage>`
    *   : A length value raises (positive value) or lowers (negative value) the dominant-baseline of the parent text content element by the specified length.

        A percentage value raises (positive value) or lowers (negative value) the dominant-baseline of the parent text content element by the specified percentage of the {{SVGAttr("line-height")}}.

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
        {{SpecName("CSS3 Inline", "#propdef-baseline-shift", "alignment-baseline")}}
      </td>
      <td>{{Spec2("CSS3 Inline")}}</td>
      <td>
        Removed the <code>baseline</code> value, as it is a redundant keyword
        within the {{SVGAttr("vertical-align")}} property.
      </td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG2", "text.html#BaselineShiftProperty", "alignment-baseline")}}
      </td>
      <td>{{Spec2("SVG2")}}</td>
      <td>
        Refers to the definition in CSS Inline Layout and notes that
        {{SVGAttr("vertical-align")}} should be preferred.
      </td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "text.html#BaselineShiftProperty", "alignment-baseline")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Initial definition</td>
    </tr>
  </tbody>
</table>

## Browser compatibility

{{Compat}}

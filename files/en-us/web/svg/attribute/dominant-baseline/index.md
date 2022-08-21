---
title: dominant-baseline
slug: Web/SVG/Attribute/dominant-baseline
tags:
  - Reference
  - SVG
  - SVG Attribute
browser-compat: svg.attributes.presentation.dominant-baseline
---
{{SVGRef}}

The **`dominant-baseline`** attribute specifies the dominant baseline, which is the baseline used to align the box's text and inline-level contents. It also indicates the default alignment baseline of any boxes participating in baseline alignment in the box's alignment context.

It is used to determine or re-determine a scaled-baseline-table. A scaled-baseline-table is a compound value with three components:

1. a baseline-identifier for the dominant-baseline,
2. a baseline-table, and
3. a baseline-table font-size.

Some values of the property re-determine all three values. Others only re-establish the baseline-table font-size. When the initial value, `auto`, would give an undesired result, this property can be used to explicitly set the desired scaled-baseline-table.

If there is no baseline table in the nominal font, or if the baseline table lacks an entry for the desired baseline, then the browser may use heuristics to determine the position of the desired baseline.

> **Note:** As a presentation attribute, `dominant-baseline` can be used as a CSS property.

You can use this attribute with the following SVG elements:

- {{SVGElement("altGlyph")}}
- {{SVGElement("text")}}
- {{SVGElement("textPath")}}
- {{SVGElement("tref")}}
- {{SVGElement("tspan")}}

## Example

```css hidden
html, body, svg {
  height: 100%;
}

text {
  font: bold 14px Verdana, Helvetica, Arial, sans-serif;
}
```

```html
<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
    <path d="M20,20 L180,20 M20,50 L180,50 M20,80 L180,80" stroke="grey" />

    <text dominant-baseline="auto" x="30" y="20">Auto</text>
    <text dominant-baseline="middle" x="30" y="50">Middle</text>
    <text dominant-baseline="hanging" x="30" y="80">Hanging</text>
</svg>
```

{{EmbedLiveSample("Example", "200", "120")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code>auto</code>
        <a href="https://www.w3.org/TR/css3-values/#comb-one">|</a>
        <code>text-bottom</code> | <code>alphabetic</code> |
        <code>ideographic</code> | <code>middle</code> | <code>central</code> |
        <code>mathematical</code> | <code>hanging</code> | <code>text-top</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>auto</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>discrete</td>
    </tr>
  </tbody>
</table>

- `auto`
  - : If this property occurs on a {{SVGElement("text")}} element, then the computed value depends on the value of the {{SVGAttr("writing-mode")}} attribute.

    If the {{SVGAttr("writing-mode")}} is horizontal, then the value of the dominant-baseline component is `alphabetic`. Otherwise, if the {{SVGAttr("writing-mode")}} is vertical, then the value of the dominant-baseline component is `central`.

    If this property occurs on a {{SVGElement("tspan")}}, {{SVGElement("tref")}}, {{SVGElement("altGlyph")}}, or {{SVGElement("textPath")}} element, then the dominant-baseline and the baseline-table components remain the same as those of the parent text content element.

    If the computed {{SVGAttr("baseline-shift")}} value actually shifts the baseline, then the baseline-table font-size component is set to the value of the {{SVGAttr("font-size")}} attribute on the element on which the `dominant-baseline` attribute occurs, otherwise the baseline-table font-size remains the same as that of the element.

    If there is no parent text content element, the scaled-baseline-table value is constructed as above for {{SVGElement("text")}} elements.
- `use-script` {{deprecated_inline}}
  - : The dominant-baseline and the baseline-table components are set by determining the predominant script of the character data content. The {{SVGAttr("writing-mode")}}, whether horizontal or vertical, is used to select the appropriate set of baseline-tables and the dominant baseline is used to select the baseline-table that corresponds to that baseline. The baseline-table font-size component is set to the value of the {{SVGAttr("font-size")}} attribute on the element on which the `dominant-baseline` attribute occurs.
- `no-change` {{deprecated_inline}}
  - : The dominant-baseline, the baseline-table, and the baseline-table font-size remain the same as that of the parent text content element.
- `reset-size` {{deprecated_inline}}
  - : The dominant-baseline and the baseline-table remain the same, but the baseline-table font-size is changed to the value of the {{SVGAttr("font-size")}} attribute on this element. This re-scales the baseline-table for the current {{SVGAttr("font-size")}}.
- `ideographic`
  - : The baseline-identifier for the dominant-baseline is set to be `ideographic`, the derived baseline-table is constructed using the `ideographic` baseline-table in the font, and the baseline-table font-size is changed to the value of the {{SVGAttr("font-size")}} attribute on this element.
- `alphabetic`
  - : The baseline-identifier for the dominant-baseline is set to be `alphabetic`, the derived baseline-table is constructed using the `alphabetic` baseline-table in the font, and the baseline-table font-size is changed to the value of the {{SVGAttr("font-size")}} attribute on this element.
- `hanging`
  - : The baseline-identifier for the dominant-baseline is set to be `hanging`, the derived baseline-table is constructed using the `hanging` baseline-table in the font, and the baseline-table font-size is changed to the value of the {{SVGAttr("font-size")}} attribute on this element.
- `mathematical`
  - : The baseline-identifier for the dominant-baseline is set to be `mathematical`, the derived baseline-table is constructed using the `mathematical` baseline-table in the font, and the baseline-table font-size is changed to the value of the {{SVGAttr("font-size")}} attribute on this element.
- `central`
  - : The baseline-identifier for the dominant-baseline is set to be `central`. The derived baseline-table is constructed from the defined baselines in a baseline-table in the font. That font baseline-table is chosen using the following priority order of baseline-table names: `ideographic`, `alphabetic`, `hanging`, `mathematical`. The baseline-table font-size is changed to the value of the {{SVGAttr("font-size")}} attribute on this element.
- `middle`
  - : The baseline-identifier for the dominant-baseline is set to be `middle`. The derived baseline-table is constructed from the defined baselines in a baseline-table in the font. That font baseline-table is chosen using the following priority order of baseline-table names: `alphabetic`, `ideographic`, `hanging`, `mathematical`. The baseline-table font-size is changed to the value of the {{SVGAttr("font-size")}} attribute on this element.
- `text-after-edge`
  - : The baseline-identifier for the dominant-baseline is set to be `text-after-edge`. The derived baseline-table is constructed from the defined baselines in a baseline-table in the font. The choice of which font baseline-table to use from the baseline-tables in the font is browser dependent. The baseline-table font-size is changed to the value of the {{SVGAttr("font-size")}} attribute on this element.
- `text-before-edge`
  - : The baseline-identifier for the dominant-baseline is set to be `text-before-edge`. The derived baseline-table is constructed from the defined baselines in a baseline-table in the font. The choice of which baseline-table to use from the baseline-tables in the font is browser dependent. The baseline-table font-size is changed to the value of the {{SVGAttr("font-size")}} attribute on this element.
- `text-top`
  - : This value uses the top of the em box as the baseline.

### SVG

```html
<svg width="400" height="300" viewBox="0 0 300 300"
    xmlns="http://www.w3.org/2000/svg">

  <!-- Materialization of anchors -->
  <path d="M60,20 L60,270
           M30,20 L400,20
           M30,70 L400,70
           M30,120 L400,120
           M30,170 L400,170
           M30,220 L400,220
           M30,270 L400,270" stroke="grey" />

    <!-- Anchors in action -->
    <text dominant-baseline="auto" x="70" y="20">auto</text>
    <text dominant-baseline="middle" x="70" y="70">middle</text>
    <text dominant-baseline="hanging" x="70" y="170">hanging</text>
    <text dominant-baseline="mathematical" x="70" y="220">mathematical</text>
    <text dominant-baseline="text-top" x="70" y="270">text-top</text>

  <!-- Materialization of anchors -->
  <circle cx="60" cy="20" r="3" fill="red" />
  <circle cx="60" cy="70" r="3" fill="red" />
  <circle cx="60" cy="120" r="3" fill="red" />
  <circle cx="60" cy="170" r="3" fill="red" />
  <circle cx="60" cy="220" r="3" fill="red" />
  <circle cx="60" cy="270" r="3" fill="red" />

  <style><![CDATA[
  text {
    font: bold 30px Verdana, Helvetica, Arial, sans-serif;
  }
  ]]></style>
</svg>
```

### Result

{{EmbedLiveSample("Usage_notes", "300", "330")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

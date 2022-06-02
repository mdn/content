---
title: alignment-baseline
slug: Web/SVG/Attribute/alignment-baseline
tags:
  - SVG
  - SVG Attribute
browser-compat: svg.attributes.presentation.alignment-baseline
---
{{SVGRef}}

The **`alignment-baseline`** attribute specifies how an object is aligned with respect to its parent. This property specifies which baseline of this element is to be aligned with the corresponding baseline of the parent. For example, this allows alphabetic baselines in Roman text to stay aligned across font size changes. It defaults to the baseline with the same name as the computed value of the `alignment-baseline` property.

> **Note:** As a presentation attribute `alignment-baseline` can be used as a CSS property.

You can use this attribute with the following SVG elements:

- {{SVGElement("tspan")}}
- {{SVGElement("tref")}}
- {{SVGElement("altGlyph")}}
- {{SVGElement("textPath")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code>auto</code> | <code>baseline</code> | <code>before-edge</code> |
        <code>text-before-edge</code> | <code>middle</code> |
        <code>central</code> | <code>after-edge</code> |
        <code>text-after-edge</code> | <code>ideographic</code> |
        <code>alphabetic</code> | <code>hanging</code> |
        <code>mathematical</code> | <code>top</code> | <code>center</code> |
        <code>bottom</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>auto</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

- `auto` {{deprecated_inline}}
  - : The value is the dominant-baseline of the script to which the character belongs - i.e., use the dominant-baseline of the parent.
- `baseline`
  - : Uses the {{Glossary("dominant baseline")}} choice of the parent. Matches the box's corresponding {{Glossary("baseline")}} to that of its parent.
- `before-edge` {{deprecated_inline}}
  - : The alignment-point of the object being aligned is aligned with the "before-edge" baseline of the parent text content element.
- `text-bottom`
  - : Matches the bottom of the box to the top of the parent's content area.
- `text-before-edge`
  - : The alignment-point of the object being aligned is aligned with the "text-before-edge" baseline of the parent text content element.

    > **Note:** This keyword may be mapped to `text-top`.
- `middle`
  - : Aligns the vertical midpoint of the box with the baseline of the parent box plus half the x-height of the parent.
- `central`
  - : Matches the box's central baseline to the central baseline of its parent.
- `after-edge` {{deprecated_inline}}
  - : The alignment-point of the object being aligned is aligned with the "after-edge" baseline of the parent text content element.
- `text-top`
  - : Matches the top of the box to the top of the parent's content area.
- `text-after-edge`
  - : The alignment-point of the object being aligned is aligned with the "text-after-edge" baseline of the parent text content element.

    > **Note:** This keyword may be mapped to `text-bottom`.
- `ideographic`
  - : Matches the box's ideographic character face under-side baseline to that of its parent.
- `alphabetic`
  - : Matches the box's alphabetic baseline to that of its parent.
- `hanging`
  - : The alignment-point of the object being aligned is aligned with the "hanging" baseline of the parent text content element.
- `mathematical`
  - : Matches the box's mathematical baseline to that of its parent.
- `top`
  - : Aligns the top of the aligned subtree with the top of the line box.
- `center`
  - : Aligns the center of the aligned subtree with the center of the line box.
- `bottom`
  - : Aligns the bottom of the aligned subtree with the bottom of the line box.

SVG 2 introduces some changes to the definition of this property. In particular: the values `auto`, `before-edge`, and `after-edge` have been removed. For backwards compatibility, `text-before-edge` may be mapped to `text-top` and `text-after-edge` to `text-bottom`. Neither `text-before-edge` nor `text-after-edge` should be used with the {{cssxref("vertical-align")}} property.

## Example

```html
<svg width="300" height="120" viewBox="0 0 300 120"
      xmlns="http://www.w3.org/2000/svg">

    <!-- Materialization of anchors -->
    <path d="M60,10 L60,110
              M30,10 L300,10
              M30,65 L300,65
              M30,110 L300,110
              " stroke="grey" />

    <!-- Anchors in action -->
    <text alignment-baseline="hanging"
          x="60" y="10">A hanging</text>

    <text alignment-baseline="middle"
          x="60" y="65">A middle</text>

    <text alignment-baseline="baseline"
          x="60" y="110">A baseline</text>

    <!-- Materialization of anchors -->
    <circle cx="60" cy="10" r="3" fill="red" />
    <circle cx="60" cy="65" r="3" fill="red" />
    <circle cx="60" cy="110" r="3" fill="red" />

<style><![CDATA[
text{
    font: bold 36px Verdana, Helvetica, Arial, sans-serif;
}
]]></style>
</svg>
```

{{EmbedLiveSample("Example")}}

For object alignment in other elements (such as {{SVGElement("text")}}), see {{SVGAttr("dominant-baseline")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("CSS_Box_Alignment#baseline_alignment", "CSS alignment-baseline")}}

---
title: SVGTextContentElement
slug: Web/API/SVGTextContentElement
page-type: web-api-interface
browser-compat: api.SVGTextContentElement
---

{{APIRef("SVG")}}

The **`SVGTextContentElement`** interface is implemented by elements that support rendering child text content. It is inherited by various text-related interfaces, such as {{domxref("SVGTextElement")}}, {{domxref("SVGTSpanElement")}}, {{domxref("SVGTRefElement")}}, and {{domxref("SVGTextPathElement")}}.

{{InheritanceDiagram}}

## Constants

<table class="standard-table">
  <tbody>
    <tr>
      <td>Constant</td>
      <td>Value</td>
      <td>Description</td>
    </tr>
    <tr>
      <td>LENGTHADJUST_UNKNOWN</td>
      <td>0</td>
      <td>Some other value.</td>
    </tr>
    <tr>
      <td>LENGTHADJUST_SPACING</td>
      <td>1</td>
      <td>The <code>spacing</code> keyword.</td>
    </tr>
    <tr>
      <td>LENGTHADJUST_SPACINGANDGLYPHS</td>
      <td>2</td>
      <td>The <code>spacingAndGlyphs</code> keyword.</td>
    </tr>
  </tbody>
</table>

## Instance properties

_This interface also inherits properties from its parent, {{domxref("SVGGraphicsElement")}}._

- {{domxref("SVGTextContentElement.textLength")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedLength")}} reflecting the {{SVGAttr("textLength")}} attribute of the given element.
- {{domxref("SVGTextContentElement.lengthAdjust")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedEnumeration")}} reflecting the {{SVGAttr("lengthAdjust")}} attribute of the given element. The numeric type values represent one of the constant values above.

## Instance methods

_This interface also inherits methods from its parent, {{domxref("SVGGraphicsElement")}}._

- {{domxref("SVGTextContentElement.getNumberOfChars()")}}
  - : Returns a long representing the total number of addressable characters available for rendering within the current element, regardless of whether they will be rendered.
- {{domxref("SVGTextContentElement.getComputedTextLength()")}}
  - : Returns a float representing the computed length for the text within the element.
- {{domxref("SVGTextContentElement.getSubStringLength()")}}
  - : Returns a float representing the computed length of the formatted text advance distance for a substring of text within the element. Note that this method only accounts for the widths of the glyphs in the substring and any extra spacing inserted by the CSS 'letter-spacing' and 'word-spacing' properties. Visual spacing adjustments made by the 'x' attribute is ignored.
- {{domxref("SVGTextContentElement.getStartPositionOfChar()")}}

  - : Returns a {{domxref("DOMPoint")}} representing the position of a typographic character after text layout has been performed.

    > **Note:** In SVG 1.1 this method returned an {{domxref("SVGPoint")}}.

- {{domxref("SVGTextContentElement.getEndPositionOfChar()")}}

  - : Returns a {{domxref("DOMPoint")}} representing the trailing position of a typographic character after text layout has been performed.

    > **Note:** In SVG 1.1 this method returned an {{domxref("SVGPoint")}}.

- {{domxref("SVGTextContentElement.getExtentOfChar()")}}
  - : Returns a {{domxref("DOMRect")}} representing the computed tight bounding box of the glyph cell that corresponds to a given typographic character.
- {{domxref("SVGTextContentElement.getRotationOfChar()")}}
  - : Returns a float representing the rotation of typographic character.
- {{domxref("SVGTextContentElement.getCharNumAtPosition()")}}
  - : Returns a long representing the character which caused a text glyph to be rendered at a given position in the coordinate system. Because the relationship between characters and glyphs is not one-to-one, only the first character of the relevant typographic character is returned
- {{domxref("SVGTextContentElement.selectSubString()")}} {{deprecated_inline}}
  - : Selects text within the element.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

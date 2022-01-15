---
title: text-decoration
slug: Web/SVG/Attribute/text-decoration
tags:
  - SVG
  - SVG Attribute
browser-compat: svg.attributes.presentation.text-decoration
---
{{SVGRef}}

The **`text-decoration`** attribute defines whether text is decorated with an underline, overline and/or strike-through. It is a shorthand for the {{cssxref("text-decoration-line")}} and {{cssxref("text-decoration-style")}} properties.

The fill and stroke of the text decoration are given by the fill and stroke of the text at the point where the text decoration is declared.

The paint order of the text decoration, i.e. the fill and stroke, is determined by the value of the {{SVGAttr("paint-order")}} attribute at the point where the text decoration is declared.

> **Note:** As a presentation attribute, `text-decoration` can be used as a CSS property. See the {{cssxref("text-decoration", "CSS text-decoration")}} property for more information.

You can use this attribute with the following SVG elements:

*   {{SVGElement("altGlyph")}}
*   {{SVGElement("text")}}
*   {{SVGElement("textPath")}}
*   {{SVGElement("tref")}}
*   {{SVGElement("tspan")}}

## Example

```css hidden
html, body, svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 250 50" xmlns="http://www.w3.org/2000/svg">
  <text y="20" text-decoration="underline">Underlined text</text>
  <text x="0" y="40" text-decoration="line-through">Struck-through text</text>
</svg>
```

{{EmbedLiveSample("Example", "250", "100")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/CSS/text-decoration-line"
            >&#x3C;'text-decoration-line'></a
          ></code
        >
        ||
        <code
          ><a href="/en-US/docs/Web/CSS/text-decoration-style"
            >&#x3C;'text-decoration-style'></a
          ></code
        >
        ||
        <code
          ><a href="/en-US/docs/Web/CSS/text-decoration-color"
            >&#x3C;'text-decoration-color'></a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td>See individual properties</td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

For a description of the values, please refer to the [CSS `text-decoration`](/en-US/docs/Web/CSS/text-decoration#values) property.

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
        {{SpecName("CSS3 Text Decoration", "#text-decoration-property", "text-decoration")}}
      </td>
      <td>{{Spec2("CSS3 Text Decoration")}}</td>
      <td>
        Defines the property as a shorthand for
        {{cssxref("text-decoration-line")}},
        {{cssxref("text-decoration-style")}}, and
        {{cssxref("text-decoration-color")}}.
      </td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG2", "text.html#TextDecorationProperties", "text-decoration")}}
      </td>
      <td>{{Spec2("SVG2")}}</td>
      <td>
        Mainly refers to the definition in CSS Text Decoration 3 turning the
        property into a shorthand for
        {{cssxref("text-decoration-line")}} and
        {{cssxref("text-decoration-style")}}.
      </td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "text.html#TextDecorationProperty", "text-decoration")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Initial definition</td>
    </tr>
  </tbody>
</table>

## Browser compatibility

{{Compat}}

## See also

*   {{cssxref("text-decoration", "CSS text-decoration")}}

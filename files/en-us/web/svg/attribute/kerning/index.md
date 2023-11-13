---
title: kerning
slug: Web/SVG/Attribute/kerning
page-type: svg-attribute
status:
  - deprecated
browser-compat: svg.attributes.presentation.kerning
---

{{SVGRef}}{{Deprecated_Header}}

The **`kerning`** attribute indicates whether the spacing between {{Glossary("glyph", "glyphs")}} should be adjusted based on kerning tables that are included in the relevant font (i.e., enable auto-kerning) or instead disable auto-kerning and set the spacing between them to a specific length (typically, zero).

> **Note:** As a presentation attribute `kerning` can be used as a CSS property. In CSS the property is called {{cssxref("font-kerning")}}, though.

You can use this attribute with the following SVG elements:

- {{SVGElement("textPath")}}
- {{SVGElement("text")}}
- {{SVGElement("tref")}}
- {{SVGElement("tspan")}}

## Example

```css hidden
html,
body,
svg {
  height: 100%;
  font:
    36px Verdana,
    Helvetica,
    Arial,
    sans-serif;
}
```

```html
<svg viewBox="0 0 150 125" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="30" kerning="auto">auto</text>
  <text x="10" y="70" kerning="0">number</text>
  <text x="10" y="110" kerning="20px">length</text>
</svg>
```

{{EmbedLiveSample("Example", "200", "200")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code>auto</code> |
        <code
          ><a href="/en-US/docs/Web/SVG/Content_type#Length"
            >&#x3C;length></a
          ></code
        >
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

- `auto`
  - : This value indicates that the spacing between {{Glossary("glyph", "glyphs")}} is adjusted based on kerning tables that are included in the font that will be used.
- `<length>`

  - : If a length is provided, then auto-kerning is disabled. Instead, inter-character spacing is set to the given length.

    If a length is provided without a unit identifier (e.g., an unqualified number such as 128), the length is processed as a width value in the current user coordinate system. If a unit identifier (e.g., `0.25em` or `1%`) is provided, then the length is converted into a corresponding value in the current user coordinate system.

    The most common scenario, other than `auto`, is to set `kerning` to a value of `0` so that auto-kerning is disabled.

    The given length is added to the inter-character spacing value specified by the {{SVGAttr("letter-spacing")}} attribute.

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("font-kerning", "CSS font-kerning")}}

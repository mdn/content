---
title: glyph-orientation-vertical
slug: Web/SVG/Attribute/glyph-orientation-vertical
page-type: svg-attribute
status:
  - deprecated
browser-compat: svg.attributes.presentation.glyph-orientation-vertical
---

{{SVGRef}}{{Deprecated_Header}}

The **`glyph-orientation-vertical`** attribute affects the amount that the current text position advances as each {{Glossary("glyph")}} is rendered.

When the inline-progression-direction is vertical and the `glyph-orientation-vertical` results in an orientation angle that is a multiple of 180 degrees, then the current text position is incremented according to the vertical metrics of the glyph. Otherwise, if the angle is not a multiple of 180 degrees, then the current text position is incremented according to the horizontal metrics of the glyph.

This attribute is applied only to text written in a vertical {{SVGAttr("writing-mode")}}.

> **Note:** As a presentation attribute, `glyph-orientation-vertical` can be used as a CSS property.

You can use this attribute with the following SVG elements:

- {{SVGElement("textPath")}}
- {{SVGElement("text")}}
- {{SVGElement("tref")}}
- {{SVGElement("tspan")}}

## Context notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code>auto</code> |
        <code
          ><a href="/en-US/docs/Web/SVG/Content_type#Angle"
            >&#x3C;angle></a
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
      <td>No</td>
    </tr>
  </tbody>
</table>

- `auto`

  - : Fullwidth {{Glossary("ideographic")}} and fullwidth Latin text will be set with a glyph orientation of 0 degrees. Ideographic punctuation and other ideographic characters having alternate horizontal and vertical forms will use the vertical form of the glyph. Text which is not fullwidth will be set with a glyph orientation of 90 degrees.

    This reorientation rule applies only to the first-level non-ideographic text. All further embedding of writing modes or bidirectional processing will be based on the first-level rotation.

    > **Note:** Text set in this "rotated" manner may contain ligatures or other glyph combining and reordering common to the language and script. (This presentation form does not disable auto-ligature formation or similar context-driven variations.)

    The determination of which characters should be auto-rotated may vary across user agents. The determination is based on a complex interaction between country, language, script, character properties, font, and character context.

- `<angle>`
  - : The value of the angle is restricted to 0, 90, 180, and 270 degrees. If another angle is specified, it is rounded to the closest of the permitted values.
    A value of `0deg` indicates that all glyphs are set with the top of the glyphs oriented towards the reference orientation. A value of `90deg` indicates an orientation of 90 degrees clockwise from the reference orientation.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

---
title: color-profile
slug: Web/SVG/Attribute/color-profile
tags:
  - Deprecated
  - NeedsExample
  - SVG
  - SVG Attribute
browser-compat: svg.attributes.presentation.color-profile
---
{{SVGRef}}{{Deprecated_Header}}

The **`color-profile`** attribute is used to define which color profile a raster image included through the {{SVGElement("image")}} element should use.

> **Note:** As a presentation attribute, `color-profile` can be used as a CSS property.

You can use this attribute with the following SVG elements:

- {{SVGElement("image")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code>auto</code> | <code>sRGB</code> | <code>&#x3C;name></code> |
        <code
          ><a href="/en-US/docs/Web/SVG/Content_type#IRI">&#x3C;iri></a></code
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
  - : All colors are presumed to be defined in the sRGB color space unless a more precise embedded profile is specified within content data. For images that do have a profile built into their data, that profile is used. For images that do not have a profile, the sRGB profile is used.
- `sRGB`
  - : The source profile is assumed to be sRGB. This differs from auto in that it overrides an embedded profile inside an image.
- `<name>`
  - : A name corresponding to a defined color profile that is in the browser's color profile description database. The browser searches the color profile description database for a color profile description entry whose name descriptor matches `<name>` and uses the last matching entry that is found. If a match is found, the corresponding profile overrides an embedded profile inside an image. If no match is found, then the embedded profile inside the image is used.
- `<iri>`
  - : An IRI reference to the source color profile. The referenced color profile overrides an embedded profile inside the image.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

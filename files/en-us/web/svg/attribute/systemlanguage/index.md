---
title: systemLanguage
slug: Web/SVG/Attribute/systemLanguage
tags:
  - SVG
  - SVG Attribute
browser-compat: svg.attributes.conditional_processing.systemLanguage
---
{{SVGRef}}

The **`systemLanguage`** attribute represents a list of supported language tags. This list is matched against the language defined in the user preferences.

You can use this attribute with the following SVG elements:

- {{SVGElement("a")}}
- {{SVGElement("altGlyph")}}
- {{SVGElement("animate")}}
- {{SVGElement("animateColor")}}
- {{SVGElement("animateMotion")}}
- {{SVGElement("animateTransform")}}
- {{SVGElement("audio")}}
- {{SVGElement("canvas")}}
- {{SVGElement("circle")}}
- {{SVGElement("clipPath")}}
- {{SVGElement("cursor")}}
- {{SVGElement("defs")}}
- {{SVGElement("discard")}}
- {{SVGElement("ellipse")}}
- {{SVGElement("foreignObject")}}
- {{SVGElement("g")}}
- {{SVGElement("iframe")}}
- {{SVGElement("image")}}
- {{SVGElement("line")}}
- {{SVGElement("mask")}}
- {{SVGElement("path")}}
- {{SVGElement("pattern")}}
- {{SVGElement("polygon")}}
- {{SVGElement("polyline")}}
- {{SVGElement("rect")}}
- {{SVGElement("set")}}
- {{SVGElement("svg")}}
- {{SVGElement("switch")}}
- {{SVGElement("text")}}
- {{SVGElement("textPath")}}
- {{SVGElement("tref")}}
- {{SVGElement("tspan")}}
- {{SVGElement("unknown")}}
- {{SVGElement("use")}}
- {{SVGElement("video")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td><code>&#x3C;language-tags></code></td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><em>None</em></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

- `<language-tags>`
  - : The value is a set of comma-separated tokens, each of which must be a language tag, as defined in {{RFC(5646, "Tags for Identifying Languages (also known as BCP 47)")}}.

`systemLanguage` is often used in conjunction with the {{SVGElement("switch")}} element. If the attribute is used in other situations, then it represents a simple switch on the given element whether to render the element or not.

> **Note:** If several alternative language objects are enclosed in a `<switch>` and none of them matches, this may lead to situations where no content is displayed. It is thus recommended to include a "catch-all" choice at the end of such a `<switch>` which is acceptable in all cases.

The attribute evaluates to "true" if one of the language tags indicated by user preferences is a case-insensitive match or prefix (followed by a "-") of one of the language tags given in the value of this parameter. Otherwise it evaluates to "false".

> **Note:** The prefix matching rule does not imply that if a user understands a language with a certain tag, that the user will also understand all languages with the tag as prefix.

If the attribute is not present, then it implicitly evaluates to "true". If a null string or empty string value is given, the attribute evaluates to "false".

The prefix rule allows the use of prefix tags if this is the case.

Multiple languages may be listed for content that is intended for multiple audiences. For example, content that is presented simultaneously in the original Maori and English versions, would call for:

```html
<text systemLanguage="mi, en"><!-- content goes here --></text>
```

However, just because multiple languages are present within the object on which the `systemLanguage` test attribute is placed, this does not mean that it is intended for multiple linguistic audiences. An example would be a beginner's language primer, such as "A First Lesson in Latin," which is clearly intended to be used by an English-literate audience. In this case, the attribute should only include `en`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

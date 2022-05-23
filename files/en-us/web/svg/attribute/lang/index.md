---
title: lang
slug: Web/SVG/Attribute/lang
tags:
  - SVG
  - SVG Attribute
browser-compat: svg.attributes.core.lang
---
{{SVGRef}}

The **`lang`** attribute specifies the primary language used in contents and attributes containing text content of particular elements.

There is also an {{SVGAttr("xml:lang")}} attribute (with namespace). If both of them are defined, the one with namespace is used and the one without is ignored.

In SVG 1.1 there was a `lang` attribute defined with a different meaning and only applying to {{SVGElement("glyph")}} elements. That attribute specified a list of languages according to {{RFC(5646, "Tags for Identifying Languages (also known as BCP 47)")}}. The glyph was meant to be used if the `xml:lang` attribute exactly matched one of the languages given in the value of this parameter, or if the `xml:lang` attribute exactly equaled a prefix of one of the languages given in the value of this parameter such that the first tag character following the prefix was "-".

You can use this attribute with any SVG element.

## Example

```html
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <text lang="en-US">This is some English text</text>
</svg>
```

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td><code>&#x3C;language-tag></code></td>
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

- `<language-tag>`
  - : This value specifies the language used for the element. The syntax of this value is defined in {{RFC(5646, "Tags for Identifying Languages (also known as BCP 47)")}}.

    The most common syntax is a value formed by a lowercase two-character part for the language and an uppercase two-character part for the region or country, separated by a minus sign, e.g. `en-US` for US English or `de-AT` for Austrian German.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{RFC(5646, "Tags for Identifying Languages (also known as BCP 47)")}}

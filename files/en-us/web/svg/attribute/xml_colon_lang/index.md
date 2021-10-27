---
title: xml:lang
slug: Web/SVG/Attribute/xml:lang
tags:
  - SVG
  - SVG Attribute
browser-compat: svg.attributes.core.xml_lang
---
{{SVGRef}}

The **`xml:lang`** attribute specifies the primary language used in contents and attributes containing text content of particular elements.

It is a universal attribute allowed in all XML dialects to mark up the natural human language that an element contains.

There is also a {{SVGAttr("lang")}} attribute (without namespace). If both of them are defined, the one with namespace is used and the one without is ignored.

You can use this attribute with any SVG element.

## Example

```html
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <text xml:lang="en-US">This is some English text</text>
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

*   `<language-tag>`
    *   : This value specifies the language used for the element. The syntax of this value is defined in {{RFC(5646, "Tags for Identifying Languages (also known as BCP 47)")}}.

        The most common syntax is a value formed by a lowercase two-character part for the language and an uppercase two-character part for the region or country, separated by a minus sign, e.g. `en-US` for US English or `de-AT` for Austrian German.

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
        {{SpecName("SVG2", "struct.html#XMLLangAttribute", "xml:lang")}}
      </td>
      <td>{{Spec2("SVG2")}}</td>
      <td>
        Made the {{SVGAttr("lang")}} attribute (without namespace)
        available on all elements and defined the interaction between both.
      </td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "filters.html#feTurbulenceSeedAttribute", "xml:lang")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Initial definition</td>
    </tr>
  </tbody>
</table>

## Browser compatibility

{{Compat}}

## See also

*   [XML specification of `xml:lang`](https://www.w3.org/TR/xml/#sec-lang-tag)
*   {{RFC(5646, "Tags for Identifying Languages (also known as BCP 47)")}}
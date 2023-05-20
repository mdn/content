---
title: id
slug: Web/SVG/Attribute/id
page-type: svg-attribute
browser-compat: svg.attributes.core.id
---

{{SVGRef}}

The **`id`** attribute assigns a unique name to an element.

You can use this attribute with any SVG element.

## Example

```html
<svg
  width="120"
  height="120"
  viewBox="0 0 120 120"
  xmlns="http://www.w3.org/2000/svg">
  <style>
    <![CDATA[
      #smallRect {
        stroke: #000066;
        fill: #00cc00;
      }
    ]]>
  </style>

  <rect id="smallRect" x="10" y="10" width="100" height="100" />
</svg>
```

{{EmbedLiveSample("Example", "120", "120")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>&#x3C;id></td>
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

- \<id>

  - : Specifies the element's ID. The ID must be unique within the node tree, must not be an empty string, and must not contain any whitespace characters.

    > **Note:** You should avoid the use of `id` values that would be parsed as an SVG view specification (e.g., `MyDrawing.svg#svgView(viewBox(0,200,1000,1000))`) or a basic media fragment when used as a URL target fragment.

    It must be valid in XML documents. A stand-alone SVG document uses XML 1.0 syntax, which specifies that valid IDs only include designated characters (letters, digits, and a few punctuation marks), and do not start with a digit, a full stop (.) character, or a hyphen-minus (-) character.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [HTML `id`](/en-US/docs/Web/HTML/Global_attributes/id)
- {{SVGAttr("class")}}

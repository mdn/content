---
title: tabindex
slug: Web/SVG/Attribute/tabindex
tags:
  - SVG
  - SVG Attribute
browser-compat: svg.attributes.core.tabindex
---
{{SVGRef}}

The **`tabindex`** attribute allows you to control whether an element is focusable and to define the relative order of the element for the purposes of sequential focus navigation.

You can use this attribute with any SVG element.

## Example

```css hidden
html, body, svg {
  height: 100%;
}
```

```html
<?xml version="1.0"?>
<svg viewBox="0 0 260 260" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="60" r="15" tabindex="1" />
    <circle cx="60" cy="160" r="30" tabindex="3" />
    <circle cx="160" cy="60" r="30" tabindex="2" />
    <circle cx="160" cy="160" r="60" tabindex="4" />
</svg>
```

{{EmbedLiveSample("Example", "260", "260")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <a href="https://html.spec.whatwg.org/#valid-integer">valid integer</a>
      </td>
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

*   valid integer
    *   : Relative order of the element for the purposes of sequential focus navigation.

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
        {{SpecName("SVG2", "struct.html#SVGElementTabindexAttribute", "tabindex")}}
      </td>
      <td>{{Spec2("SVG2")}}</td>
      <td>Initial definition</td>
    </tr>
  </tbody>
</table>

## Browser compatibility

{{Compat}}

## See also

*   [HTML `tabindex`](/en-US/docs/Web/HTML/Global_attributes/tabindex)

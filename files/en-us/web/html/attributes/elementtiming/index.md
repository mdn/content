---
title: 'HTML attribute: elementtiming'
slug: Web/HTML/Attributes/elementtiming
tags:
  - Attribute
  - Attributes
  - HTML
  - elementtiming
  - Performance
  - Reference
---

{{HTMLSidebar}}

The **`elementtiming`** attribute is used to indicate that an element is flagged for tracking by the {{domxref("Element Timing API")}}. This attribute may be applied to {{htmlelement("img")}}, {{SVGElement("image")}} elements inside an {{htmlelement("svg")}}, poster images of {{htmlelement("video")}} elements, elements which have a {{cssxref("background-image")}}, and elements containing text nodes, such as a {{htmlelement("p")}}.

## Usage

The value given for `elementtiming` becomes an identifier for the observed element.

```html
<img alt="alt" src="img.jpg" elementtiming="label for element">
```

Good contenders for elements you might want to observe are:

- The main image for an article.
- A blog post title
- Images in a carousel for a shopping site.
- The poster image for the main video on a page.

## Examples

```html
<img alt="Alt for a main blog post image" src="my-massive-image.jpg" elementtiming="Main image">

<p elementtiming="important-text">Some very important information.</p">
```

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
        {{SpecName('Element Timing API', 'forms.html#attr-label-for', 'for as used with label')}}
      </td>
      <td>{{Spec2('Element Timing API')}}</td>
      <td></td>
    </tr>
  </tbody>
</table>

## Browser compatibility

{{Compat("html.elements.attribute.elementtiming")}}

## See also

- [Custom metrics](https://web.dev/custom-metrics/)

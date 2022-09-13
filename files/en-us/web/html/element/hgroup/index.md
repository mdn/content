---
title: <hgroup>
slug: Web/HTML/Element/hgroup
tags:
  - Element
  - HTML
  - Reference
  - Web
browser-compat: html.elements.hgroup
---

{{HTMLRef}}

The **`<hgroup>`** [HTML](/en-US/docs/Web/HTML) element represents a heading and related content. It groups a single [`<h1>–<h6>`](/en-US/docs/Web/HTML/Element/Heading_Elements) element with one or more [`<p>`](/en-US/docs/Web/HTML/Element/p).

{{EmbedInteractiveExample("pages/tabbed/hgroup.html", "tabbed-standard")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories"
          >Content categories</a
        >
      </th>
      <td>
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#flow_content"
          >Flow content</a
        >, heading content, palpable content.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        Zero or more {{HTMLElement("p")}} elements, followed by one
        {{HTMLElement("h1")}}, {{HTMLElement("h2")}},
        {{HTMLElement("h3")}}, {{HTMLElement("h4")}},
        {{HTMLElement("h5")}}, or {{HTMLElement("h6")}} element,
        followed by zero or more {{HTMLElement("p")}} elements.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>
        Any element that accepts
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#flow_content"
          >flow content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >No corresponding role</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>Any</td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## Attributes

This element only includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

## Usage notes

The `<hgroup>` element allows the grouping of a heading with any secondary content, such as subheadings, an alternative title, or tagline. Each of these types of content represented as a `<p>` element within the `<hgroup>`.

The `<hgroup>` itself has no impact on the document outline of a web page. Rather, the single allowed heading within the `<hgroup>` contributes to the document outline.

## Examples

```html
<!DOCTYPE html>
<title>HTML Standard</title>
<body>
  <hgroup id="document-title">
    <h1>HTML: Living Standard</h1>
    <p>Last Updated 12 July 2022</p>
  </hgroup>
  <p>Some intro to the document.</p>
  <h2>Table of contents</h2>
  <ol id="toc">
    …
  </ol>
  <h2>First section</h2>
  <p>Some intro to the first section.</p>
</body>
```

## Accessibility concerns

The `<hgroup>` presently has no strong accessibility semantics. The content of the element (a heading and optional paragraphs) is what is exposed by browser accessibility APIs.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Others section-related elements: {{HTMLElement("body")}}, {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("aside")}}, {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, {{HTMLElement("h6")}}, {{HTMLElement("nav")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("address")}};
- [Sections and outlines of an HTML document](/en-US/docs/Web/HTML/Element/Heading_Elements).

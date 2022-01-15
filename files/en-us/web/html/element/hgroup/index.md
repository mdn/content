---
title: <hgroup>
slug: Web/HTML/Element/hgroup
tags:
  - Deprecated
  - Element
  - Experimental
  - HTML
  - HTML5
  - Reference
  - Web
browser-compat: html.elements.hgroup
---

{{HTMLRef}}

> **Warning:** `<hgroup>` should not be used because no assistive technology supports it, and as a result it has a detrimental effect on assistance for headings placed within it.
>
> For more information see the [Usage notes below](#usage_notes).

The **`<hgroup>`** [HTML](/en-US/docs/Web/HTML) element represents a multi-level heading for a section of a document. It groups a set of [`<h1>–<h6>`](/en-US/docs/Web/HTML/Element/Heading_Elements) elements.

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
        One or more {{HTMLElement("h1")}}, {{HTMLElement("h2")}},
        {{HTMLElement("h3")}}, {{HTMLElement("h4")}},
        {{HTMLElement("h5")}}, and/or {{HTMLElement("h6")}}.
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

> **Note:** The `<hgroup>` element has been removed from the HTML5 (W3C) specification, but it still is in the WHATWG version of HTML. It is partially implemented in most browsers, though, so is unlikely to go away.
> However, given that a key purpose of the `<hgroup>` element is to affect how headings are displayed by [the outline algorithm defined in the HTML specification](/en-US/docs/Web/HTML/Element/Heading_Elements#the_html5_outline_algorithm)—but **the HTML outline algorithm is not implemented in any browsers**—then the `<hgroup>` semantics are in practice only theoretical.
> So the HTML5 (W3C) specification provides advice on how to mark up [Subheadings, subtitles, alternative titles and taglines](https://www.w3.org/TR/html52/common-idioms-without-dedicated-elements.html#common-idioms-without-dedicated-elements) without using `<hgroup>`.

The `<hgroup>` element allows the primary heading for a document section to be grouped with any secondary headings—such as subheadings or alternative titles—to form a _multi-level_ heading.

In other words, the `<hgroup>` element prevents any of its secondary [`<h1>–<h6>`](/en-US/docs/Web/HTML/Element/Heading_Elements) children from creating separate sections of their own in the outline—as those [`<h1>–<h6>`](/en-US/docs/Web/HTML/Element/Heading_Elements) elements otherwise normally would if they were not children of any `<hgroup>`.

So in the abstract outline produced by the [HTML outline algorithm defined in the HTML specification](/en-US/docs/Web/HTML/Element/Heading_Elements#the_html5_outline_algorithm), the `<hgroup>` as a whole forms a single logical heading, with the entire set of [`<h1>–<h6>`](/en-US/docs/Web/HTML/Element/Heading_Elements) children of the `<hgroup>` going into the outline as one _multi-level_ unit, to comprise that single logical heading in the abstract outline.

To produce any (non-abstract) _rendered_ view of such an outline, some choice must be made in the design of the rendering tool about how to render `<hgroup>` headings in such a way as to convey their multi-level nature. There are a variety of ways an `<hgroup>` might be shown in a rendered outline; for example:

- an `<hgroup>` might be shown in a rendered outline in with a colon character and space (“`: `”) or other such punctuation after the primary heading and before the first secondary heading (and with the same or similar punctuation before any other secondary headings
- an `<hgroup>` might be shown in a rendered outline in with the primary heading followed by parentheses around the secondary heading(s)

Consider the following HTML document:

```html
<!DOCTYPE html>
<title>HTML Standard</title>
<body>
  <hgroup id="document-title">
    <h1>HTML</h1>
    <h2>Living Standard — Last Updated 12 August 2016</h2>
  </hgroup>
  <p>Some intro to the document.</p>
  <h2>Table of contents</h2>
  <ol id=toc>...</ol>
  <h2>First section</h2>
  <p>Some intro to the first section.</p>
</body>
```

A rendered outline for that document might look like the following:

![](outline-colon.png)

That is, the rendered outline might show the primary title, _HTML_, followed by a colon and space, followed by the secondary title, _Living Standard — Last Updated 12 August 2016_.

Or, the rendered outline for that document might instead look like the following:

![Rendered outline that includes an <hgroup> element, with parens around the secondary heading](outline-paren.png)

That is, the rendered outline might show the primary title, _HTML_, followed by the secondary title shown in parentheses: _(Living Standard — Last Updated 12 August 2016)_.

## Examples

```html
<hgroup id="document-title">
  <h1>HTML</h1>
  <h2>Living Standard — Last Updated 12 August 2016</h2>
</hgroup>
```

## Accessibility concerns

The presence of `hgroup` may remove information reported to assistive technology about the subheading portion of the heading group.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Others section-related elements: {{HTMLElement("body")}}, {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("aside")}}, {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, {{HTMLElement("h6")}}, {{HTMLElement("nav")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("address")}};
- [Sections and outlines of an HTML5 document](/en-US/docs/Web/HTML/Element/Heading_Elements).

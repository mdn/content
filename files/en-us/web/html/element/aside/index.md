---
title: '<aside>: The Aside element'
slug: Web/HTML/Element/aside
tags:
  - Element
  - HTML
  - HTML sections
  - HTML:Flow content
  - HTML:Palpable Content
  - HTML:Sectioning content
  - Reference
  - Web
browser-compat: html.elements.aside
---
{{HTMLRef}}

The **`<aside>`** [HTML](/en-US/docs/Web/HTML) element represents a portion of a document whose content is only indirectly related to the document's main content. Asides are frequently presented as sidebars or call-out boxes.

{{EmbedInteractiveExample("pages/tabbed/aside.html", "tabbed-standard")}}

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
        >,
        <a
          href="/en-US/docs/Web/Guide/HTML/Content_categories#sectioning_content"
          >sectioning content</a
        >,
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#palpable_content"
          >palpable content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#flow_content"
          >Flow content</a
        >.
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
        >. Note that an <code>&#x3C;aside></code> element must not be a
        descendant of an {{HTMLElement("address")}} element.
      </td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/Complementary_role"
            >complementary</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>
        {{ARIARole("feed")}}, {{ARIARole("none")}},
        {{ARIARole("note")}}, {{ARIARole("presentation")}},
        {{ARIARole("region")}}, {{ARIARole("search")}}
      </td>
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

- Do not use the `<aside>` element to tag parenthesized text, as this kind of text is considered part of the main flow.

## Examples

### Using \<aside>

This example uses `<aside>` to mark up a paragraph in an article. The paragraph is only indirectly related to the main article content:

```html
<article>
  <p>
    The Disney movie <cite>The Little Mermaid</cite> was
    first released to theatres in 1989.
  </p>
  <aside>
    <p>
      The movie earned $87 million during its initial release.
    </p>
  </aside>
  <p>
    More info about the movie…
  </p>
</article>
```

{{EmbedLiveSample("Using_aside")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Other section-related elements: {{HTMLElement("body")}}, {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("nav")}}, {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, {{HTMLElement("h6")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("address")}};
- [Using HTML sections and outlines](/en-US/docs/Web/HTML/Element/Heading_Elements)
- [ARIA: Complementary role](/en-US/docs/Web/Accessibility/ARIA/Roles/complementary_role)

---
title: "<address>: The Contact Address element"
slug: Web/HTML/Element/address
page-type: html-element
browser-compat: html.elements.address
---

{{HTMLSidebar}}

The **`<address>`** [HTML](/en-US/docs/Web/HTML) element indicates that the enclosed HTML provides contact information for a person or people, or for an organization.

{{EmbedInteractiveExample("pages/tabbed/address.html", "tabbed-standard")}}

The contact information provided by an `<address>` element's contents can take whatever form is appropriate for the context, and may include any type of contact information that is needed, such as a physical address, URL, email address, phone number, social media handle, geographic coordinates, and so forth. The `<address>` element should include the name of the person, people, or organization to which the contact information refers.

`<address>` can be used in a variety of contexts, such as providing a business's contact information in the page header, or indicating the author of an article by including an `<address>` element within the {{HTMLElement("article")}}.

## Attributes

This element only includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

## Usage notes

- The `<address>` element can only be used to represent the contact information for its nearest {{HTMLElement("article")}} or {{HTMLElement("body")}} element ancestor.
- This element should not contain more information than the contact information, like a publication date (which belongs in a {{HTMLElement("time")}} element).
- Typically an `<address>` element can be placed inside the {{HTMLElement("footer")}} element of the current section, if any.

## Examples

This example demonstrates the use of `<address>` to demarcate the contact information for an article's author.

```html
<address>
  You can contact author at
  <a href="http://www.somedomain.com/contact">www.somedomain.com</a>.<br />
  If you see any bugs, please
  <a href="mailto:webmaster@somedomain.com">contact webmaster</a>.<br />
  You may also want to visit us:<br />
  Mozilla Foundation<br />
  331 E Evelyn Ave<br />
  Mountain View, CA 94041<br />
  USA
</address>
```

### Result

{{EmbedLiveSample("Examples", "300", "200")}}

Although it renders text with the same default styling as the {{HTMLElement("i")}} or {{HTMLElement("em")}} elements, it is more appropriate to use `<address>` when dealing with contact information, as it conveys additional semantic information.

## Technical summary

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/HTML/Content_categories"
          >Content categories</a
        >
      </th>
      <td>
        <a href="/en-US/docs/Web/HTML/Content_categories#flow_content"
          >Flow content</a
        >, palpable content.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        <a href="/en-US/docs/Web/HTML/Content_categories#flow_content"
          >Flow content</a
        >, but with no nested <code>&#x3C;address></code> element, no heading
        content ({{HTMLElement("hgroup")}}, {{HTMLElement("Heading_Elements", "h1")}},
        {{HTMLElement("Heading_Elements", "h2")}}, {{HTMLElement("Heading_Elements", "h3")}},
        {{HTMLElement("Heading_Elements", "h4")}}, {{HTMLElement("Heading_Elements", "h5")}},
        {{HTMLElement("Heading_Elements", "h6")}}), no sectioning content
        ({{HTMLElement("article")}}, {{HTMLElement("aside")}},
        {{HTMLElement("section")}}, {{HTMLElement("nav")}}), and
        no {{HTMLElement("header")}} or {{HTMLElement("footer")}}
        element.
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
        <a href="/en-US/docs/Web/HTML/Content_categories#flow_content"
          >flow content</a
        >, but always excluding <code>&#x3C;address></code> elements (according
        to the logical principle of symmetry, if
        <code>&#x3C;address></code> tag, as a parent, can not have nested
        <code>&#x3C;address></code> element, then the same
        <code>&#x3C;address></code> content can not have
        <code>&#x3C;address></code> tag as its parent).
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
      <td>
        {{domxref("HTMLElement")}} Prior to Gecko 2.0 (Firefox 4),
        Gecko implemented this element using the
        {{domxref("HTMLSpanElement")}} interface
      </td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Others section-related elements: {{HTMLElement("body")}}, {{HTMLElement("nav")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("Heading_Elements", "h1")}}, {{HTMLElement("Heading_Elements", "h2")}}, {{HTMLElement("Heading_Elements", "h3")}}, {{HTMLElement("Heading_Elements", "h4")}}, {{HTMLElement("Heading_Elements", "h5")}}, {{HTMLElement("Heading_Elements", "h6")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("footer")}}, {{HTMLElement("section")}}, {{HTMLElement("header")}};
- [Sections and outlines of an HTML document](/en-US/docs/Web/HTML/Element/Heading_Elements).

---
title: '<head>: The Document Metadata (Header) element'
slug: Web/HTML/Element/head
tags:
  - Element
  - HTML
  - HTML document metadata
  - HTML:Metadata content
  - Reference
  - Web
browser-compat: html.elements.head
---

{{HTMLRef}}

The **`<head>`** [HTML](/en-US/docs/Web/HTML) element contains machine-readable information ({{glossary("metadata")}}) about the document, like its [title](/en-US/docs/Web/HTML/Element/title), [scripts](/en-US/docs/Web/HTML/Element/script), and [style sheets](/en-US/docs/Web/HTML/Element/style).

> **Note:** `<head>` primarily holds information for machine processing, not human-readability. For human-visible information, like top-level headings and listed authors, see the {{HTMLElement("header")}} element.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories"
          >Content categories</a
        >
      </th>
      <td>None.</td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        <p>
          If the document is an {{HTMLElement("iframe")}}
          {{htmlattrxref("srcdoc", "iframe")}} document, or if title
          information is available from a higher level protocol (like the
          subject line in HTML email), zero or more elements of metadata
          content.
        </p>
        <p>
          Otherwise, one or more elements of metadata content where exactly one
          is a {{HTMLElement("title")}} element.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>
        The start tag may be omitted if the first thing inside the
        <code>&#x3C;head></code> element is an element.<br />The end tag may be
        omitted if the first thing following the
        <code>&#x3C;head></code> element is not a space character or a comment.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>An {{HTMLElement("html")}} element, as its first child.</td>
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
      <td>No <code>role</code> permitted</td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLHeadElement")}}</td>
    </tr>
  </tbody>
</table>

## Attributes

This element includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

- {{htmlattrdef("profile")}} {{deprecated_inline}} {{Non-standard_Inline}}
  - : The {{glossary("URI")}}s of one or more metadata profiles, separated by {{Glossary("whitespace", "white space")}}.

## Example

```html
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <title>Document title</title>
  </head>
</html>
```

## Notes

HTML5-compliant browsers automatically create a `<head>` element if its tags are omitted in the markup. [This auto-creation is not guaranteed in ancient browsers](https://www.stevesouders.com/blog/2010/05/12/autohead-my-first-browserscope-user-test/).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Elements that can be used inside the `<head>`:

  - {{HTMLElement("title")}}
  - {{HTMLElement("base")}}
  - {{HTMLElement("link")}}
  - {{HTMLElement("style")}}
  - {{HTMLElement("meta")}}
  - {{HTMLElement("script")}}
  - {{HTMLElement("noscript")}}
  - {{HTMLElement("template")}}

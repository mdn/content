---
title: '<html>: The HTML Document / Root element'
slug: Web/HTML/Element/html
tags:
  - Element
  - HTML
  - HTML Root Element
  - Reference
  - Web
browser-compat: html.elements.html
---

{{HTMLRef}}

The **`<html>`** [HTML](/en-US/docs/Web/HTML) element represents the root (top-level element) of an HTML document, so it is also referred to as the _root element_. All other elements must be descendants of this element.

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
        One {{HTMLElement("head")}} element, followed by one
        {{HTMLElement("body")}} element.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>
        The start tag may be omitted if the first thing inside the
        <code>&#x3C;html></code> element is not a comment.<br>The end tag may
        be omitted if the <code>&#x3C;html></code> element is not immediately
        followed by a comment.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>None. This is the root element of a document.</td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td>
        <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/Document_role"
          >document</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>No <code>role</code> permitted</td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLHtmlElement")}}</td>
    </tr>
  </tbody>
</table>

## Attributes

This element includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

- {{htmlattrdef("manifest")}} {{deprecated_inline}} {{Non-standard_Inline}}
  - : Specifies the {{glossary("URI")}} of a resource manifest indicating resources that should be cached locally.
- {{htmlattrdef("version")}} {{deprecated_inline}}
  - : Specifies the version of the HTML {{glossary("Doctype", "Document Type Definition")}} that governs the current document. This attribute is not needed, because it is redundant with the version information in the document type declaration.
- {{htmlattrdef("xmlns")}}
  - : Specifies the {{glossary("XML")}} {{glossary("Namespace")}} of the document. Default value is `"http://www.w3.org/1999/xhtml"`. This is required in documents parsed with XML {{glossary("parser", "parsers")}}, and optional in text/html documents.

## Example

```html
<!DOCTYPE html>
<html lang="en">
  <head>…</head>
  <body>…</body>
</html>
```

## Accessibility concerns

While HTML does not require authors to specify `<html>` element start and ending tags, it is important for authors to do so as it will allow them to specify the {{htmlattrxref("lang")}} for the webpage. Providing a `lang` attribute with a valid language tag according to {{RFC(5646, "Tags for Identifying Languages (also known as BCP 47)")}} on the `<html>` element will help screen reading technology determine the proper language to announce. The identifying language tag should describe the language used by the majority of the content of the page. Without it, screen readers will typically default to the operating system's set language, which may cause mispronunciations.

Including a valid `lang` declaration on the `<html>` element also ensures that important metadata contained in the page's {{HTMLElement("head")}}, such as the page's {{HTMLElement("title")}}, are also announced properly.

- [MDN Understanding WCAG, Guideline 3.1 explanations](/en-US/docs/Web/Accessibility/Understanding_WCAG/Understandable#guideline_3.1_%e2%80%94_readable_make_text_content_readable_and_understandable)
- [Understanding Success Criterion 3.1.1 | W3C Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/language-of-page.html)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- MathML top-level element: {{MathMLElement("math")}}
- SVG top-level element: {{SVGElement("svg")}}

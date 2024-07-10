---
title: "<base>: The Document Base URL element"
slug: Web/HTML/Element/base
page-type: html-element
browser-compat: html.elements.base
---

{{HTMLSidebar}}

The **`<base>`** [HTML](/en-US/docs/Web/HTML) element specifies the base URL to use for all _relative_ URLs in a document. There can be only one `<base>` element in a document.

A document's used base URL can be accessed by scripts with {{domxref('Node.baseURI')}}. If the document has no `<base>` elements, then `baseURI` defaults to {{domxref("location.href")}}.

## Attributes

This element's attributes include the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

> **Warning:** A `<base>` element must have an `href` attribute, a `target` attribute, or both.
> If at least one of these attributes are specified, the `<base>` element **must** come before other elements with attribute values that are URLs, such as a {{HTMLElement("link")}}'s `href` attribute.

- `href`
  - : The base URL to be used throughout the document for relative URLs.
    Absolute and relative URLs are allowed.
    [`data:`](/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs) and `javascript:` URLs are not allowed.
- `target`

  - : A **keyword** or **author-defined name** of the default {{Glossary("browsing context")}} to show the results of navigation from {{HTMLElement("a")}}, {{HTMLElement("area")}}, or {{HTMLElement("form")}} elements without explicit `target` attributes. The following keywords have special meanings:

    - `_self` (default): Show the result in the current browsing context.
    - `_blank`: Show the result in a new, unnamed browsing context.
    - `_parent`: Show the result in the parent browsing context of the current one, if the current page is inside a frame. If there is no parent, acts the same as `_self`.
    - `_top`: Show the result in the topmost browsing context (the browsing context that is an ancestor of the current one and has no parent). If there is no parent, acts the same as `_self`.

## Usage notes

### Multiple \<base> elements

If multiple `<base>` elements are used, only the first `href` and first `target` are obeyed — all others are ignored.

### In-page anchors

Links pointing to a fragment in the document — e.g. `<a href="#some-id">` — are resolved with the `<base>`, triggering an HTTP request to the base URL with the fragment attached.

For example, given `<base href="https://example.com/">` and this link: `<a href="#anchor">To anchor</a>`. The link points to `https://example.com/#anchor`.

### target may not contain ASCII newline, tab, or <

If the [`target`](#target) attribute contains an ASCII newline, tab, or the `<` character, the value is reset to `_blank`.
This is to prevent dangling markup injection attacks, a script-less attack in which an unclosed `target` attribute is injected into the page so that any text that follows is captured until the browser reaches a character that closes the attribute.

### Open Graph

[Open Graph](https://ogp.me/) tags do not acknowledge `<base>`, and should always have full absolute URLs. For example:

```html
<meta property="og:image" content="https://example.com/thumbnail.jpg" />
```

## Examples

```html
<base href="https://www.example.com/" />
<base target="_blank" />
<base target="_top" href="https://example.com/" />
```

## Technical summary

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/HTML/Content_categories">Content categories</a>
      </th>
      <td>Metadata content.</td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>None; it is a {{Glossary("void element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>Must have a start tag and must not have an end tag.</td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>
        A {{HTMLElement("head")}} that doesn't contain another {{HTMLElement("base")}} element.
      </td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">No corresponding role</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>No <code>role</code> permitted</td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLBaseElement")}}</td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

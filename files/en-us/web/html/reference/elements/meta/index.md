---
title: "<meta>: The metadata element"
slug: Web/HTML/Reference/Elements/meta
page-type: html-element
browser-compat: html.elements.meta
---

{{HTMLSidebar}}

The **`<meta>`** [HTML](/en-US/docs/Web/HTML) element represents {{Glossary("Metadata","metadata")}} that cannot be represented by other meta-related elements, such as {{HTMLElement("base")}}, {{HTMLElement("link")}}, {{HTMLElement("script")}}, {{HTMLElement("style")}}, or {{HTMLElement("title")}}.

The type of metadata provided by the `<meta>` element can be one of the following:

- If the [`name`](/en-US/docs/Web/HTML/Reference/Elements/meta/name) attribute is set, the `<meta>` element provides _document-level metadata_ that applies to the whole page.
- If the [`http-equiv`](/en-US/docs/Web/HTML/Reference/Elements/meta/http-equiv) attribute is set, the `<meta>` element acts as a _pragma directive_ to simulate directives that could otherwise be given by an HTTP header.
- If the [`charset`](#charset) attribute is set, the `<meta>` element is a _charset declaration_, giving the character encoding in which the document is encoded.
- If the [`itemprop`](/en-US/docs/Web/HTML/Reference/Global_attributes/itemprop) attribute is set, the `<meta>` element provides _user-defined metadata_.

## Attributes

This element includes the [global attributes](/en-US/docs/Web/HTML/Reference/Global_attributes).

> [!NOTE]
> The [`name`](/en-US/docs/Web/HTML/Reference/Elements/meta/name) attribute has a specific meaning for the `<meta>` element.
> The [`itemprop`](/en-US/docs/Web/HTML/Reference/Global_attributes/itemprop) attribute must not be set on a `<meta>` element that includes a [`name`](/en-US/docs/Web/HTML/Reference/Elements/meta/name), [`http-equiv`](/en-US/docs/Web/HTML/Reference/Elements/meta/http-equiv), or [`charset`](#charset) attribute.

- `charset`
  - : This attribute declares the document's character encoding. If the attribute is present, its value must be an ASCII case-insensitive match for the string `"utf-8"`, because UTF-8 is the only valid encoding for HTML5 documents. `<meta>` elements which declare a character encoding must be located entirely within the first 1024 bytes of the document.
- [`content`](/en-US/docs/Web/HTML/Reference/Attributes/content)
  - : This attribute contains the value for the [`http-equiv`](/en-US/docs/Web/HTML/Reference/Elements/meta/http-equiv) or [`name`](/en-US/docs/Web/HTML/Reference/Elements/meta/name) attribute, depending on which is used.
- [`http-equiv`](/en-US/docs/Web/HTML/Reference/Elements/meta/http-equiv)
  - : Defines a pragma directive, which are instructions for the browser for processing the document.
    The attribute's name is short for `http-equivalent` because the allowed values are names of equivalent HTTP headers.
- `media`
  - : The `media` attribute defines which media the theme color defined in the `content` attribute should be applied to.
    Its value is a [media query](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries), which defaults to `all` if the attribute is missing.
    This attribute is only relevant when the element's [`name`](/en-US/docs/Web/HTML/Reference/Elements/meta/name) attribute is set to [`theme-color`](/en-US/docs/Web/HTML/Reference/Elements/meta/name/theme-color).
    Otherwise, it has no effect, and should not be included.
- [`name`](/en-US/docs/Web/HTML/Reference/Elements/meta/name)
  - : The `name` and `content` attributes can be used together to provide document metadata in terms of name-value pairs, with the `name` attribute giving the metadata name, and the `content` attribute giving the value.

## Examples

### Setting a meta description

The following `<meta>` tag provides a `description` as metadata for the web page:

```html
<meta
  name="description"
  content="The HTML reference describes all elements and attributes of HTML, including global attributes that apply to all elements." />
```

### Setting a page redirect

The following example uses `http-equiv="refresh"` to direct the browser to perform a redirect.
The `content="3;url=https://www.mozilla.org"` attribute will redirect page to `https://www.mozilla.org` after 3 seconds:

```html
<meta http-equiv="refresh" content="3;url=https://www.mozilla.org" />
```

## Technical summary

<table class="properties">
  <tbody>
    <tr>
      <th>
        <a href="/en-US/docs/Web/HTML/Guides/Content_categories"
          >Content categories</a
        >
      </th>
      <td>
        <a href="/en-US/docs/Web/HTML/Guides/Content_categories#metadata_content"
          >Metadata content</a
        >. If the <a href="/en-US/docs/Web/HTML/Reference/Global_attributes/itemprop"><code>itemprop</code></a> attribute is present:
        <a href="/en-US/docs/Web/HTML/Guides/Content_categories#flow_content"
          >flow content</a
        >,
        <a href="/en-US/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >phrasing content</a
        >.
      </td>
    </tr>
    <tr>
      <th>Permitted content</th>
      <td>None; it is a {{Glossary("void element")}}.</td>
    </tr>
    <tr>
      <th>Tag omission</th>
      <td>Must have a start tag and must not have an end tag.</td>
    </tr>
    <tr>
      <th>Permitted parents</th>
      <td>
        <ul>
          <li>
            <code>&#x3C;meta charset></code>,
            <code>&#x3C;meta http-equiv></code>: a
            {{HTMLElement("head")}} element. If the
            <a href="/en-US/docs/Web/HTML/Reference/Elements/meta/http-equiv"><code>http-equiv</code></a> is not an
            encoding declaration, it can also be inside a
            {{HTMLElement("noscript")}} element, itself inside a
            <code>&#x3C;head></code> element.
          </li>
          <li>
            <code>&#x3C;meta name></code>: any element that accepts
            <a
              href="/en-US/docs/Web/HTML/Guides/Content_categories#metadata_content"
              >metadata content</a
            >.
          </li>
          <li>
            <code>&#x3C;meta itemprop></code>: any element that accepts
            <a
              href="/en-US/docs/Web/HTML/Guides/Content_categories#metadata_content"
              >metadata content</a
            >
            or
            <a href="/en-US/docs/Web/HTML/Guides/Content_categories#flow_content"
              >flow content</a
            >.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
          >No corresponding role</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>No <code>role</code> permitted</td>
    </tr>
    <tr>
      <th>DOM interface</th>
      <td>{{domxref("HTMLMetaElement")}}</td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Standard metadata names](/en-US/docs/Web/HTML/Reference/Elements/meta/name)
- [Learn: `<meta>`](/en-US/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#metadata_the_meta_element)
- [The viewport meta tag](/en-US/docs/Web/HTML/Guides/Viewport_meta_element)

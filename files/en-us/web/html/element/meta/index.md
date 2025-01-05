---
title: "<meta>: The metadata element"
slug: Web/HTML/Element/meta
page-type: html-element
browser-compat: html.elements.meta
---

{{HTMLSidebar}}

The **`<meta>`** [HTML](/en-US/docs/Web/HTML) element represents {{Glossary("Metadata","metadata")}} that cannot be represented by other HTML meta-related elements, like {{HTMLElement("base")}}, {{HTMLElement("link")}}, {{HTMLElement("script")}}, {{HTMLElement("style")}} or {{HTMLElement("title")}}.

The type of metadata provided by the `<meta>` element can be one of the following:

- If the [`name`](#name) attribute is set, the `<meta>` element provides _document-level metadata_, applying to the whole page.
- If the [`http-equiv`](#http-equiv) attribute is set, the `<meta>` element is a _pragma directive_, providing information equivalent to what can be given by a similarly-named HTTP header.
- If the [`charset`](#charset) attribute is set, the `<meta>` element is a _charset declaration_, giving the character encoding in which the document is encoded.
- If the [`itemprop`](/en-US/docs/Web/HTML/Global_attributes/itemprop) attribute is set, the `<meta>` element provides _user-defined metadata_.

## Attributes

This element includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

> [!NOTE]
> The attribute [`name`](#name) has a specific meaning for the `<meta>` element, and the [`itemprop`](/en-US/docs/Web/HTML/Global_attributes/itemprop) attribute must not be set on the same `<meta>` element that has any existing [`name`](#name), [`http-equiv`](#http-equiv) or [`charset`](#charset) attributes.

- `charset`
  - : This attribute declares the document's character encoding. If the attribute is present, its value must be an ASCII case-insensitive match for the string `"utf-8"`, because UTF-8 is the only valid encoding for HTML5 documents. `<meta>` elements which declare a character encoding must be located entirely within the first 1024 bytes of the document.
- `content`
  - : This attribute contains the value for the [`http-equiv`](#http-equiv) or [`name`](#name) attribute, depending on which is used.
- `http-equiv`

  - : Defines a pragma directive. The attribute's name, short for `http-equivalent`, is because all the allowed values are names of particular HTTP headers:

    - `content-security-policy`

      - : Allows page authors to define a [content policy](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy) for the current page. Content policies mostly specify allowed server origins and script endpoints which help guard against cross-site scripting attacks.

        Also see {{HTTPHeader("Content-Security-Policy")}}.

    - `content-type`

      - : Declares the [MIME type](/en-US/docs/Web/HTTP/MIME_types) and the document's character encoding. The `content` attribute must have the value `"text/html; charset=utf-8"` if specified. This is equivalent to a `<meta>` element with the [`charset`](#charset) attribute specified and carries the same restriction on placement within the document. **Note:** Can only be used in documents served with a `text/html` — not in documents served with an XML MIME type.

        Also see {{HTTPHeader("Content-Type")}}.

    - `default-style`

      - : Sets the name of the default [CSS style sheet](/en-US/docs/Web/CSS) set.

    - `x-ua-compatible`

      - : If specified, the `content` attribute must have the value `"IE=edge"`. User agents are required to ignore this pragma.

    - `refresh`

      - : This instruction specifies:

        - The number of seconds until the page should be reloaded - if the [`content`](#content) attribute's value is a non-negative integer.
        - The number of seconds until the page should redirect to another - if the [`content`](#content) attribute's value is a non-negative integer followed by `;url=` and a valid URL.

        The timer starts when the page is _completely loaded_, which is after the {{domxref("Window/load_event", "load")}} and {{domxref("Window/pageshow_event", "pageshow")}} events have both fired.

        Also see {{HTTPHeader("Refresh")}}.

        > [!WARNING]
        >
        > Pages set with a `refresh` value run the risk of having the time interval being too short. People navigating with the aid of assistive technology such as a screen reader may be unable to read through and understand the page's content before being automatically redirected. The abrupt, unannounced updating of the page content may also be disorienting for people experiencing low vision conditions.
        >
        > - [MDN Understanding WCAG, Guideline 2.2 explanations](/en-US/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.2_—_enough_time_provide_users_enough_time_to_read_and_use_content)
        > - [MDN Understanding WCAG, Guideline 3.2 explanations](/en-US/docs/Web/Accessibility/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
        > - [Understanding Success Criterion 2.2.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-required-behaviors.html)
        > - [Understanding Success Criterion 2.2.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-postponed.html)
        > - [Understanding Success Criterion 3.2.5 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-no-extreme-changes-context.html)

- `media`

  - : The `media` attribute defines which media the theme color defined in the `content` attribute should be applied to. Its value is a [media query](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries), which defaults to `all` if the attribute is missing. This attribute is only relevant when the element's [`name`](/en-US/docs/Web/HTML/Element/meta/name) attribute is set to [`theme-color`](/en-US/docs/Web/HTML/Element/meta/name/theme-color). Otherwise, it has no effect, and should not be included.

- `name`

  - : The `name` and `content` attributes can be used together to provide document metadata in terms of name-value pairs, with the `name` attribute giving the metadata name, and the `content` attribute giving the value.

    See [standard metadata names](/en-US/docs/Web/HTML/Element/meta/name) for details about the set of standard metadata names defined in the HTML specification.

## Examples

```html
<meta charset="utf-8" />

<!-- Redirect page after 3 seconds -->
<meta http-equiv="refresh" content="3;url=https://www.mozilla.org" />
```

## Technical summary

<table class="properties">
  <tbody>
    <tr>
      <th>
        <a href="/en-US/docs/Web/HTML/Content_categories"
          >Content categories</a
        >
      </th>
      <td>
        <a href="/en-US/docs/Web/HTML/Content_categories#metadata_content"
          >Metadata content</a
        >. If the <a href="/en-US/docs/Web/HTML/Global_attributes/itemprop"><code>itemprop</code></a> attribute is present:
        <a href="/en-US/docs/Web/HTML/Content_categories#flow_content"
          >flow content</a
        >,
        <a href="/en-US/docs/Web/HTML/Content_categories#phrasing_content"
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
            <a href="#http-equiv"><code>http-equiv</code></a> is not an
            encoding declaration, it can also be inside a
            {{HTMLElement("noscript")}} element, itself inside a
            <code>&#x3C;head></code> element.
          </li>
          <li>
            <code>&#x3C;meta name></code>: any element that accepts
            <a
              href="/en-US/docs/Web/HTML/Content_categories#metadata_content"
              >metadata content</a
            >.
          </li>
          <li>
            <code>&#x3C;meta itemprop></code>: any element that accepts
            <a
              href="/en-US/docs/Web/HTML/Content_categories#metadata_content"
              >metadata content</a
            >
            or
            <a href="/en-US/docs/Web/HTML/Content_categories#flow_content"
              >flow content</a
            >.
          </li>
        </ul>
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

- [Standard metadata names](/en-US/docs/Web/HTML/Element/meta/name)
- [Learn: `<meta>`](/en-US/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#metadata_the_meta_element)
- [The viewport meta tag](/en-US/docs/Web/HTML/Viewport_meta_tag)

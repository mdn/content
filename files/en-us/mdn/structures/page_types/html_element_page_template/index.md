---
title: HTML element page template
slug: MDN/Structures/Page_types/HTML_element_page_template
tags:
  - Element
  - HTML
  - Template
  - Reference
browser-compat: path.to.feature.NameOfTheElement
---
{{MDNSidebar}}

> **Note:** _Remove this whole explanatory note before publishing_
>
> ---
>
> **Page front matter:**
>
> The frontmatter at the top of the page is used to define "page metadata".
> The values should be updated appropriately for the particular element.
>
> ```
> ---
> title: '<NameOfTheElement>: The NameOfTheElement element'
> slug: Web/HTML/Element/NameOfTheElement
> tags:
>   - NameOfTheElement
>   - HTML
>   - Element
>   - Reference
>   - Experimental
>   - Deprecated
>   - Non-standard
> browser-compat: html.elements.NameOfTheElement
> ---
> ```
> - **title**
>   - : Title heading displayed at top of page.
>       Format as `'<NameOfTheElement>: Description of element's purpose'`.
>       For example, the [`<video>`](/en-US/docs/Web/HTML/Element/video) element has a _title_ of: **'\<video>: The Video Embed element'**.
> - **slug**
>   - : The end of the URL path after `https://developer.mozilla.org/en-US/docs/`).
>       This will be formatted like `Web/HTML/Element/NameOfTheElement`, where the element name is in _lower case_.
>       For example, the [`<video>`](/en-US/docs/Web/HTML/Element/video) element has a _slug_ of `Web/HTML/Element/video`.
> - **tags**
>   - : Always include the following tags: **HTML**, **Element**, **Reference**,  the _NameOfTheElement_ (e.g. **video**).
>
>       Include the following tags as appropriate:
>       - Technology status: **Experimental** (if the technology is [experimental](/en-US/docs/MDN/Guidelines/Conventions_definitions#experimental)), **Deprecated** (if it is [deprecated](/en-US/docs/MDN/Guidelines/Conventions_definitions#deprecated_and_obsolete)), **Non-standard** (if it isn't on a standards track).
>       - Any other tags that represent possible search terms for the element.
>         For example, the [`<video>`](/en-US/docs/Web/HTML/Element/video) element includes the tags: **HTML Video**, **Multimedia**, **Media Player**, **Movie Playback**, etc.
> - **browser-compat**
>   - : Replace the placeholder value `html.elements.NameOfTheElement` with the query string for the element in the [Browser compat data repo](https://github.com/mdn/browser-compat-data).
>       The toolchain automatically uses the key to populate the compatibility and specification sections (replacing the `\{{Compat}}` and `\{{Specifications}}` macros).
>
>       Note that you may first need to create/update an entry for the element in our [Browser compat data repo](https://github.com/mdn/browser-compat-data), and the entry will need to include specification information.
>       See our [guide on how to do this](/en-US/docs/MDN/Structures/Compatibility_tables).
>
> ---
>
> **Top-of-page macros**
>
> A number of macro calls appear at the top of the content section (immediately below the page frontmatter).
> You should update or delete them according to the advice below:
> - `\{{SeeCompatTable}}` — this generates a **This is an experimental technology** banner that indicates the technology is [experimental](/en-US/docs/MDN/Guidelines/Conventions_definitions#experimental)).
>   If the technology you are documenting is not experimental, you should remove this.
>   If it is experimental, and the technology is hidden behind a pref in Firefox, you should also fill in an entry for it in the [Experimental features in Firefox](/en-US/docs/Mozilla/Firefox/Experimental_features) page.
> - `\{{Deprecated_Header}}` — this generates a **Deprecated** banner that indicates that use of the technology is [discouraged](/en-US/docs/MDN/Guidelines/Conventions_definitions#deprecated_and_obsolete).
>   If it isn't, then you can remove the macro call.
> - `\{{SecureContext_Header}}` — this generates a **Secure context** banner that indicates the technology is only available in a [secure context](/en-US/docs/Web/Security/Secure_Contexts).
>   If it isn't, then you can remove the macro call.
>   If it is, then you should also fill in an entry for it in the [Features restricted to secure contexts](/en-US/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts) page.
> - `\{{HTMLRef}}` — this generates the left-hand-side reference sidebar for the element.
>   The content of the sidebar depends on the tags in the page metadata.
> - Remember to remove the `\{{MDNSidebar}}` macro when you copy this page.
>
> _Remember to remove this whole explanatory note before publishing_

{{SeeCompatTable}}{{Deprecated_Header}}{{HTMLRef}}

The **`<insert_the_element_name>`** [HTML](/en-US/docs/Web/HTML) element does ... _insert a summary paragraph naming the element and saying what it does (ideally 1 or 2 short sentences)_.

\\{{EmbedInteractiveExample("pages/tabbed/nameOfElement.html", "tabbed-standard")}}

Further information — at this point, include a few more paragraphs explaining the most important things you need to know about using the element and its main features. It is good to explain briefly what is going on in the interactive example if it is not immediately obvious. You could also explain key points about how this element interacts with important related JavaScript or CSS features. Not too much detail — you don't want to repeat the documentation across pages — but a key point plus a link to that feature's page would be useful. Again, see the `<video>` page for an example.

## Attributes

This element includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

- {{htmlattrdef("attribute1")}}{{Deprecated_inline}}{{experimental_inline}}
  - : Include description here of what the attribute does. Include one term and definition for each attribute. If the attribute is not experimental/deprecated, remove the relevant macro calls.
- {{htmlattrdef("attribute2")}}
  - : etc.

## Events

Include a table of the events fired on this type of element, if any.

| Event name | Fired when                          |
| ---------- | ----------------------------------- |
| event 1    | Explain briefly when it is fired... |
| event 2    | Explain briefly when it is fired... |
| etc.       |                                     |

## Examples

Fill in a simple example that nicely shows a typical usage of the element, then perhaps some more complex examples (see our guide on how to add [code examples](/en-US/docs/MDN/Structures/Code_examples) for more information).

```html
my code block
```

And/or include a list of links to useful code samples that live elsewhere:

- x
- y
- z

## Accessibility concerns

Optionally, warn of any potential accessibility concerns that exist with using this element, and how to work around them. Remove this section if there are none to list.

## Technical summary

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories"
          >Content categories</a
        >
      </th>
      <td>
        Fill in a list of the content categories the HTML element belongs to.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>What content is the element allowed to contain?</td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>
        Can the end tag be omitted, or must it be present? Must it be omitted?
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>
        What parent elements can the element be a child of? For example "Any
        element that accepts
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#flow_content"
          >flow content</a
        >."
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>
        Fill in a list of ARIA roles that can be set on the element, inside
        \{{ARIARole("nameOfRole")}} macro calls. For example
        {{ARIARole("directory")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>
        What DOM interface represents the element in JavaScript? For example
        {{domxref("HTMLOListElement")}} in the case of ol.
      </td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Include list of
- other links related to
- this Element that might be useful

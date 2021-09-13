---
title: SVG element page template
slug: MDN/Structures/Page_types/SVG_element_page_template
tags:
  - Element
  - SVG
  - Template
  - reference page
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
> title: <NameOfTheElement>
> slug: Web/SVG/Element/NameOfTheElement
> tags:
>   - NameOfTheElement
>   - SVG
>   - Element
>   - Reference
>   - Experimental
>   - Deprecated
>   - Non-standard
> browser-compat: svg.elements.NameOfTheElement
> ---
> ```
> - **title**
>   - : Title heading displayed at top of page.
>       Format as **<**_NameOfTheElement_**>**.
>       For example, the "[g](/en-US/docs/Web/SVG/Element/g)" element has a _title_ of `<g>`.
> - **slug**
>   - : The end of the URL path after `https://developer.mozilla.org/en-US/docs/`).
>       This will be formatted like `Web/SVG/Element/NameOfTheElement`.
> - **tags**
>   - : Always include the following tags: **SVG**, **Reference**, **Element**,  the _NameOfTheElement_ (e.g. **g**).
>
>       Include the following tags as appropriate:
>       - Relevant category: **SVG Container**, **SVG Animation**, **SVG Light Source**, **SVG Text Content**, **SVG Font**.
>       - Technology status: **Experimental** (if the technology is [experimental](/en-US/docs/MDN/Guidelines/Conventions_definitions#experimental)), **Deprecated** (if it is [deprecated](/en-US/docs/MDN/Guidelines/Conventions_definitions#deprecated_and_obsolete)), **Non-standard** (if it isn't on a standards track).
>       - Any other tags that represent possible search terms for the element.
> - **browser-compat**
>   - : Replace the placeholder value `svg.elements.NameOfTheElement` with the query string for the element in the [Browser compat data repo](https://github.com/mdn/browser-compat-data).
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
> - `\{{SVGRef}}` — this generates the left-hand-side reference sidebar for the element.
>   The content of the sidebar depends on the tags in the page metadata.
> - Remember to remove the `\{{MDNSidebar}}` macro when you copy this page.
>
> _Remember to remove this whole explanatory note before publishing_

{{SeeCompatTable}}{{deprecated_header}}{{SVGRef}}

The summary paragraph — start by naming the element and saying what it does. This should ideally be 1 or 2 short sentences.

## Usage context

{{svginfo}}

Note — for the correct information to appear here, you need to fill in an entry for the element in the \\{{svginfo}} macro, if it is not in there already.

## Attributes

### Global attributes

- [Conditional processing attributes](/en-US/docs/Web/SVG/Attribute#conditional_processing_attributes)
- [Core attributes](/en-US/docs/Web/SVG/Attribute#core_attributes)
- [Graphical event attributes](/en-US/docs/Web/SVG/Attribute#graphical_event_attributes)
- [Presentation attributes](/en-US/docs/Web/SVG/Attribute#presentation_attributes)
- {{SVGAttr("class")}}
- {{SVGAttr("style")}}
- {{SVGAttr("transform")}}

### Specific attributes

- Include bulleted
- list of all the
- SVG attributes it can take

## DOM Interface

This element implements the {{domxref("NameOfSVGDOMElement")}} interface.

## Examples

Fill in a simple example that nicely shows a typical usage of the element, then perhaps some more complex examples (see our guide on how to add [code examples](/en-US/docs/MDN/Structures/Code_examples) for more information).

```svg
my code block
```

And/or include a list of links to useful code samples that live elsewhere:

- x
- y
- z

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Include list of
- other links related to
- this Element that might be useful

---
title: HTML attribute page template
slug: MDN/Writing_guidelines/Page_structures/Page_types/HTML_attribute_page_template
page-type: mdn-writing-guide
sidebar: mdnsidebar
---
> **Note:** _Remove this whole explanatory note before publishing_
>
> ---
>
> **Page front matter:**
>
> The frontmatter at the top of the page is used to define "page metadata".
> The values should be updated appropriately for the particular attribute.
>
> ```md
> ---
> title: "<NameOfTheAttribute>: The NameOfTheAttribute attribute"
> slug: Web/HTML/Attribute/NameOfTheAttribute
> page-type: html-attribute
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: html.attributes.NameOfTheAttribute
> ---
> ```
>
> - **title**
>   - : Title heading displayed at the top of the page.
>     Format as `'<NameOfTheAttributes>: Description of attribute's usage'`.
>     For example, the [class](/en-US/docs/Web/HTML/Reference/Global_attributes/class) attribute has a _title_ of `class`.
> - **slug**
>   - : The end of the URL path after `https://developer.mozilla.org/en-US/docs/`.
>     This will be formatted like `Web/HTML/Reference/Global_attributes/NameOfTheAttribute`, where the attributes name is in _lower case_.
>     For example, the [`class`](/en-US/docs/Web/HTML/Reference/Global_attributes/class) element has a _slug_ of `Web/HTML/Reference/Global_attributes/class`.
> - **page-type**
>   - : Always `html-attribute`.
> - **status**
>   - : Flags describing the status of this feature. An array which may contain one or more of the following: `experimental`, `deprecated`, `non-standard`. This key should not be set manually: it is set automatically based on values in the browser compatibility data for the feature. See ["How feature statuses are added or updated"](/en-US/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>
>   - : Replace the placeholder value `html.global_attributes.NameOfTheAttribute` with the query string for the attribute in the [Browser compat data repo](https://github.com/mdn/browser-compat-data).
>     The toolchain automatically uses the key to populate the compatibility and specification sections (replacing the `\{{Compat}}` and `\{{Specifications}}` macros).
>
>     Note that you may first need to create/update an entry for the attribute in our [Browser compat data repo](https://github.com/mdn/browser-compat-data), and the entry will need to include specification information.
>     See our [guide on how to do this](/en-US/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> ---
>
> **Top-of-page macros**
>
> A number of macro calls appear at the top of the content section (immediately below the page frontmatter).
> These macros are automatically added by the toolchain (there is no need to add/remove):
>
> - `\{{SeeCompatTable}}` — this generates a **This is an experimental technology** banner that indicates the technology is [experimental](/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental).
>   If it is experimental, and the technology is hidden behind a pref in Firefox, you should also fill in an entry for it in the [Experimental features in Firefox](/en-US/docs/Mozilla/Firefox/Experimental_features) page.
> - `\{{Deprecated_Header}}` — this generates a **Deprecated** banner that indicates that use of the technology is [discouraged](/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated).
> - `\{{Non-standard_Header}}` — this generates a **Non-standard** banner that indicates that the feature is not part of any specification.
>
> You should update or delete the following macros according to the advice below:
>
> - `\{{SecureContext_Header}}` — this generates a **Secure context** banner that indicates the technology is only available in a [secure context](/en-US/docs/Web/Security/Secure_Contexts).
>   If it isn't, then you can remove the macro call.
>   If it is, then you should also fill in an entry for it in the [Features restricted to secure contexts](/en-US/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts) page.
> - `\{{HTMLSidebar}}` — this generates the left-hand-side reference sidebar for the element.
>   The content of the sidebar depends on the tags in the page metadata.
> - Remember to remove the `\{{MDNSidebar}}` macro when you copy this page.
>
> Do not provide status header macros manually. Refer to the section ["How feature statuses are added or updated"](/en-US/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated) to add these statuses to the page.
>
> Samples of the **Experimental**, **Deprecated**, and **Non-standard** banners are shown right after this note block.
>
> _Remember to remove this whole explanatory note before publishing_

{{HTMLSidebar}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Start by introducing the reader to the attribute, and it's usage.
For Example: The **`<insert_the_attribute_name>`** attribute is used in [HTML](/en-US/docs/Web/HTML) to describe or manipulate <insert_usage_description>, assisting browsers understand how to handel the element it's applied to.

## Try it

This section is generated by the `InteractiveExample` macro.
This includes the "Try it" section title and the code editor.
See the [Interactive examples](/en-US/docs/MDN/Writing_guidelines/Page_structures/Code_examples#interactive_examples) section in our _Writing guidelines_ for more information.

If included, follow it with 1-2 brief paragraphs explaining the behavior implemented, and optionally highlighting any interaction with JavaScript, CSS, or other attributes. Keep it concise and avoid duplicating full docs — link out what needed. Again, see the `class` attribute page.

## Accessibility

Warn of any potential accessibility concerns that may exist with using this attribute, and how to work around them. Remove this section if there are none to list.

## Values

Provide a list of possible values for the attribute if any (remove if not applicable). Include the default value if there is one, and a brief description for each value.

- `value 1`:
  - : Description of value 1. This is the Default value.

  - `value 2`:
  - : Description of value 2

  - `value 3`:
  - : Description of value 3

## Examples

Show relevant examples for this attribute, and how to use this attribute in practical HTML contexts.
Note that we use the plural "Examples" even if the page only contains one example.

### A descriptive heading

Each example must have an H3 heading (`###`) highlighting the example. The heading should be descriptive of what the example is doing. For example, "A simple example" does not say anything about the example and therefore, not a good heading. The heading should be concise. For a longer description, use the paragraph after the heading.

See our guide on how to add [code examples](/en-US/docs/MDN/Writing_guidelines/Page_structures/Code_examples) for more information.

> [!NOTE]
> Sometimes you will want to link to examples given on another page.
>
> **Case 1:** If you have some examples on this page and some more examples on another page:
>
> Include an H3 heading (`###`) for each example on this page and then a final H3 heading (`###`) with the text "More examples", under which you can link to the examples on other pages. For example:
>
> ```md
> ## Examples
>
> ### Using the `for` attribute
>
> Example of `for` attribute
>
> ### More examples
>
> Links to more examples on other pages
> ```
>
> **Case 2:** If you _only_ have examples on another page and none on this page:
>
> Don't add any H3 headings; just add the links directly under the H2 heading "Examples". For example:
>
> ```md
> ## Examples
>
> For examples of this attribute, see [the page on `for` attribute](https://example.org/).
> ```

## Specifications

`\{{Specifications}}`

_To use this macro, remove the backticks and backslash in the markdown file._

## Browser compatibility

`\{{Compat}}`

_To use this macro, remove the backticks and backslash in the markdown file._

## See also

Include links to reference pages and guides related to the current attribute. For more guidelines, see the [See also section](/en-US/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) in the _Writing style guide_.

- link1
- link2
- external_link (year)

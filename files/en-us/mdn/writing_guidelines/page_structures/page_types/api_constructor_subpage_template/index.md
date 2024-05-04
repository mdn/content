---
title: API constructor subpage template
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_constructor_subpage_template
page-type: mdn-writing-guide
browser-compat: path.to.feature.NameOfTheConstructor
---

{{MDNSidebar}}

> **Note:** _Remove this whole explanatory note before publishing_
>
> ---
>
> **Page front matter:**
>
> The front matter at the top of the page is used to define "page metadata".
> The values should be updated appropriately for the constructor.
>
> ```md
> ---
> title: NameOfTheParentInterface: NameOfTheConstructor() constructor
> slug: Web/API/NameOfTheParentInterface/NameOfTheConstructor
> page-type: web-api-constructor
> status:
>   - experimental
>   - deprecated
>   - non-standard
> browser-compat: path.to.feature.NameOfTheConstructor
> ---
> ```
>
> - **title**
>   - : Title heading displayed at the top of the page.
>     Format as `NameOfTheParentInterface: NameOfTheConstructor() constructor`.
>     For example, the [Request()](/en-US/docs/Web/API/Request/Request) constructor has a _title_ of `Request: Request() constructor`.
> - **slug**
>   - : The end of the URL path after `https://developer.mozilla.org/en-US/docs/`.
>     This will be formatted like `Web/API/NameOfTheParentInterface/NameOfTheConstructor`.
>     Note that the name of the constructor function in the slug omits the parenthesis (it ends in `NameOfTheConstructor` not `NameOfTheConstructor()`).
> - **page-type**
>   - : The `page-type` key for Web/API constructors is always `web-api-constructor`.
> - **status**
>   - : Flags describing the status of this feature. An array which may contain one or more of the following: `experimental`, `deprecated`, `non-standard`. This key should not be set manually: it is set automatically based on values in the browser compatibility data for the feature. See ["How to add or update feature statuses"](/en-US/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses).
> - **browser-compat**
>
>   - : Replace the placeholder value `path.to.feature.NameOfTheConstructor` with the query string for the constructor in the [Browser compat data repo](https://github.com/mdn/browser-compat-data).
>     The toolchain automatically uses the key to populate the compatibility and specification sections (replacing the `\{{Compat}}` and `\{{Specifications}}` macros).
>
>     Note that you may first need to create/update an entry for the API constructor in our [Browser compat data repo](https://github.com/mdn/browser-compat-data), and the entry for the API will need to include specification information.
>     See our [guide on how to do this](/en-US/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> ---
>
> **Top-of-page macros**
>
> A number of macro calls appear at the top of the content section (immediately below the page front matter).
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
> - `\{{APIRef("GroupDataName")}}` — this generates the left-hand reference sidebar showing quick reference links related to the current page.
>   For example, every page in the [WebVR API](/en-US/docs/Web/API/WebVR_API) has the same sidebar, which points to the other pages in the API.
>   To generate the correct sidebar for your API, you need to add a `GroupData` entry to our GitHub repo, and include the entry's name inside the macro call in place of _GroupDataName_.
>   See our [API reference sidebars](/en-US/docs/MDN/Writing_guidelines/Howto/Write_an_API_reference/Sidebars) guide for information on how to do this. Remember to remove the `\{{MDNSidebar}}` macro when you copy this page.
>
> Do not provide status header macros manually. Refer to the section [How to add or update feature statuses](/en-US/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses) to add these statuses to the page.
>
> Samples of the **Secure context**, **Experimental**, **Deprecated**, and **Non-standard** banners are shown right after this note block.
>
> _Remember to remove this whole explanatory note before publishing._

{{SecureContext_Header}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Begin the content on the page with an introductory paragraph — start by naming the constructor and saying what it does.
This should ideally be one or two short sentences.
You could copy most of this from the constructor's summary on the corresponding API reference page.

## Syntax

Fill in a syntax box, according to the guidance in our [syntax sections](/en-US/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections) article.

### Parameters

- `parameter1` {{optional_inline}}
  - : Include a brief description of the parameter and what it does here. Include one term and definition for each parameter.
    If the parameter is not optional, remove the \\{{optional_inline}} macro call.
- `parameter2`
  - : etc.

### Return value

Include a description of the constructor's return value, including the data type and what it represents.
This is normally just "An instance of the `\{{domxref("NameOfTheParentInterface")}}` object."

_To use this macro, remove the backticks and backslash in the markdown file._

### Exceptions

Include a list of all the exceptions that the constructor can raise. Include one term and definition for each exception.

- `Exception1`
  - : Include descriptions of how the exception is raised.
- `Exception2`
  - : Include descriptions of how the exception is raised.

## Examples

### A descriptive heading

Each example must have an H3 heading naming the example. The heading should be descriptive of what the example is doing. For example, "A simple example" does not say anything about the example and therefore, not a good heading. The heading should be concise. For a longer description, use the paragraph after the heading.

See our guide on how to add [code examples](/en-US/docs/MDN/Writing_guidelines/Page_structures/Code_examples) for more information.

> **Note:** Sometimes you will want to link to examples given on another page.
>
> **Scenario 1:** If you have some examples on this page and some more examples on another page:
>
> Include an H3 heading (`###`) for each example on this page and then a final H3 heading (`###`) with the text "More examples", under which you can link to the examples on other pages. For example:
>
> ```md
> ## Examples
>
> ### Using the fetch API
>
> Example of Fetch
>
> ### More examples
>
> Links to more examples on other pages
> ```
>
> **Scenario 2:** If you _only_ have examples on another page and none on this page:
>
> Don't add any H3 headings; just add the links directly under the H2 heading "Examples". For example:
>
> ```md
> ## Examples
>
> For examples of this API, see [the page on fetch()](https://example.org).
> ```

## Specifications

`\{{Specifications}}`

_To use this macro, remove the backticks and backslash in the markdown file._

## Browser compatibility

`\{{Compat}}`

_To use this macro, remove the backticks and backslash in the markdown file._

## See also

Include links to reference pages and guides related to the current API. For more guidelines, see the [See also section](/en-US/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) in the _Writing style guide_.

- link1
- link2
- external_link (year)

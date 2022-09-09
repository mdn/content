---
title: API constructor subpage template
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_constructor_subpage_template
page-type: mdn-writing-guide
tags:
  - meta
  - writing-guide
browser-compat: path.to.feature.NameOfTheConstructor
---
{{MDNSidebar}}

> **Note:** _Remove this whole explanatory note before publishing_
>
> ---
>
> **Page front matter:**
>
> The frontmatter at the top of the page is used to define "page metadata".
> The values should be updated appropriately for the constructor.
>
> ```md
> ---
> title: NameOfTheConstructor()
> slug: Web/API/NameOfTheParentInterface/NameOfTheParentInterface
> page-type: web-api-constructor
> tags:
>   - API
>   - Constructor
>   - Reference
>   - Experimental
>   - Deprecated
>   - Non-standard
> browser-compat: path.to.feature.NameOfTheConstructor
> ---
> ```
>
> - **title**
>   - : Title heading displayed at top of page.
>     Format as _NameOfTheParentInterface_**()**.
>     For example, the [Request()](/en-US/docs/Web/API/Request/Request) constructor has a _title_ of `Request()`.
> - **slug**
>   - : The end of the URL path after `https://developer.mozilla.org/en-US/docs/`).
>     This will be formatted like `Web/API/NameOfTheParentInterface/NameOfTheParentInterface`.
>     Note that the name of the constructor function in the slug omits the parenthesis (it ends in `NameOfTheParentInterface` not `NameOfTheParentInterface()`).
> - **page-type**
>   - : The `page-type` key for Web/API constructors is always `web-api-constructor`.
> - **tags**
>   - : Always include the following tags: **API**, **Reference**, **Constructor**, the _name of the API_ (e.g. **WebVR**), the name of the _parent interface_ (e.g. **IDBIndex**).
>
>     Include the following tags as appropriate:
>     - Technology status: **Experimental** (if the technology is [experimental](/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental)), **Deprecated** (if it is [deprecated](/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated_and_obsolete)), **Non-standard** if it isn't on a standards track.
>     - Special requirements: **Secure context** (if it is available in a secure context only)
>     - Any other tags that represent terms people might search for related to the technology.
>         For example on WebVR interface pages we include **VR** and **Virtual reality**.
> - **browser-compat**
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
> A number of macro calls appear at the top of the content section (immediately below the page frontmatter).
> You should update or delete them according to the advice below:
>
> - `\{{SeeCompatTable}}` — this generates a **This is an experimental technology** banner that indicates the technology is [experimental](/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental).
>   If the technology you are documenting is not experimental, you should remove this.
>   If it is experimental, and the technology is hidden behind a pref in Firefox, you should also fill in an entry for it in the [Experimental features in Firefox](/en-US/docs/Mozilla/Firefox/Experimental_features) page.
> - `\{{Deprecated_Header}}` — this generates a **Deprecated** banner that indicates that use of the technology is [discouraged](/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated_and_obsolete).
>   If it isn't, then you can remove the macro call.
> - `\{{SecureContext_Header}}` — this generates a **Secure context** banner that indicates the technology is only available in a [secure context](/en-US/docs/Web/Security/Secure_Contexts).
>   If it isn't, then you can remove the macro call.
>   If it is, then you should also fill in an entry for it in the [Features restricted to secure contexts](/en-US/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts) page.
> - `\{{APIRef("GroupDataName")}}` — this generates the left-hand reference sidebar showing quick reference links related to the current page.
>   For example, every page in the [WebVR API](/en-US/docs/Web/API/WebVR_API) has the same sidebar, which points to the other pages in the API.
>   To generate the correct sidebar for your API, you need to add a `GroupData` entry to our GitHub repo, and include the entry's name inside the macro call in place of _GroupDataName_.
>   See our [API reference sidebars](/en-US/docs/MDN/Writing_guidelines/Howto/Write_an_API_reference/Sidebars) guide for information on how to do this.
> - Remember to remove the `\{{MDNSidebar}}` macro when you copy this page.
>
> _Remember to remove this whole explanatory note before publishing_

{{SeeCompatTable}}{{SecureContext_Header}}{{Deprecated_Header}}{{APIRef("GroupDataName")}}

The summary paragraph — start by naming the constructor, and saying what it does.
This should ideally be 1 or 2 short sentences.
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

Include a description of the constructor's return value, including data type and what it represents.
This is normally just "An instance of the {{domxref("NameOfTheParentInterface")}} object."

### Exceptions

- Exception1
  - : Include a list of all the exceptions that the constructor can raise, along with descriptions of how that exception is raised. Include one term and definition for each exception.
- Exception2
  - : etc.

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
>  ```md
>  ## Examples
>
>  ### Using the fetch API
>  Example of Fetch
>
>  ### More examples
>  Links to more examples on other pages
>  ```
>
> **Scenario 2:** If you _only_ have examples on another page and none on this page:
>
> Don't add any H3 headings; just add the links directly under the H2 heading "Examples". For example:
>
>  ```md
>   ## Examples
>
>   For examples of this API, see [the page on fetch()](https://example.org).
>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Include list of
- other links related to
- this API that might be useful

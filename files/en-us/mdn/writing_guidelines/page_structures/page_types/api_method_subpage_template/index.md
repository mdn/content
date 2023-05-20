---
title: API method subpage template
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_method_subpage_template
page-type: mdn-writing-guide
browser-compat: path.to.feature.NameOfTheMethod
---

{{MDNSidebar}}

> **Note:** _Remove this whole explanatory note before publishing_
>
> ---
>
> **Page front matter:**
>
> The frontmatter at the top of the page is used to define "page metadata".
> The values should be updated appropriately for the particular method.
>
> ```md
> ---
> title: NameOfTheParentInterface.NameOfTheMethod()
> slug: Web/API/NameOfTheParentInterface/NameOfTheMethod
> page-type: web-api-instance-method OR web-api-static-method
> status:
>   - experimental
>   - deprecated
>   - non-standard
> browser-compat: path.to.feature.NameOfTheMethod
> ---
> ```
>
> - **title**
>   - : Title heading displayed at top of page.
>     Format as _NameOfTheParentInterface_**.**_NameOfTheMethod_**()**.
>     For example, the [count()](/en-US/docs/Web/API/IDBIndex/count) method of the [IDBIndex](/en-US/docs/Web/API/IDBIndex) interface has a _title_ of `IDBIndex.count()`.
> - **slug**
>
>   - : The end of the URL path after `https://developer.mozilla.org/en-US/docs/`.
>     This will be formatted like `Web/API/NameOfTheParentInterface/NameOfTheMethod`.
>
>     If the method is static, then the slug must have a `_static` suffix, like: `Web/API/NameOfTheParentInterface/NameOfTheMethod_static`. This enables us to support instance and static methods which have the same name.
>
>     Note that the name of the method in the slug omits the parenthesis (it ends in `NameOfTheMethod` not `NameOfTheMethod()`).
>
> - **page-type**
>   - : The `page-type` key for Web/API methods is either `web-api-instance-method` (for instance methods) or `web-api-static-method` (for static methods).
> - **status**
>   - : Include (appropriate) technology status keys: [**experimental**](/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental), [**deprecated**](/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated), **non-standard** (if not on a standards track).
> - **browser-compat**
>
>   - : Replace the placeholder value `path.to.feature.NameOfTheMethod` with the query string for the method in the [Browser compat data repo](https://github.com/mdn/browser-compat-data).
>     The toolchain automatically uses the key to populate the compatibility and specification sections (replacing the `\{{Compat}}` and `\{{Specifications}}` macros).
>
>     Note that you may first need to create/update an entry for the API method in our [Browser compat data repo](https://github.com/mdn/browser-compat-data), and the entry for the API will need to include specification information.
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
> - `\{{Deprecated_Header}}` — this generates a **Deprecated** banner that indicates that use of the technology is [discouraged](/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated).
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

{{APIRef("GroupDataName")}}{{SeeCompatTable}}{{SecureContext_header}}{{Deprecated_Header}}

The summary paragraph — start by naming the method, saying what interface it is part of, and saying what it does.
This should ideally be 1 or 2 short sentences. You could copy most of this from the method's summary on the corresponding API reference page.

## Syntax

Fill in a syntax box, according to the guidance in our [syntax sections](/en-US/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections) article.

### Parameters

- `parameter1` {{Optional_Inline}}
  - : Include a brief description of the parameter and what it does here. Include one term and definition for each parameter. If the parameter is not optional, remove the \\{{optional_inline}} macro call.
- `parameter2`
  - : etc.

> **Note:** This section is mandatory. If there aren't any parameter, put "None." instead of the definition list.

### Return value

Include a description of the method's return value, including data type and what it represents.

If the method doesn't return anything, just put "None ({{jsxref('undefined')}}).".

### Exceptions

- `Exception1`
  - : Include a list of all the exceptions that the method can raise, along with descriptions of how that exception is raised. Include one term and definition for each exception.
- `Exception2`
  - : etc.

Note that we have two kinds of exceptions: {{domxref("DOMException")}} objects and regular JavaScript exceptions, like {{jsxref("TypeError")}} and {{jsxref("RangeError")}}. A web developer needs to know:

- which object is thrown
- for exceptions that are `DOMException` objects, the `name` of the exception.

Here is an example where a method can raise a `DOMException` with a name of `IndexSizeError`, a second `DOMException` with a name of `InvalidNodeTypeError` and a JavaScript exception of type `TypeError`:

- `IndexSizeError` {{domxref("DOMException")}}
  - : Thrown …
- `InvalidNodeTypeError` {{domxref("DOMException")}}
  - : Thrown …
- {{jsxref("TypeError")}}
  - : Thrown …

## Examples

Note that we use the plural "Examples" even if the page only contains one example.

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

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

Include links to reference pages and guides related to the current API. For more guidelines, see the [See also section](/en-US/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) in the _Writing style guide_.

- link1
- link2

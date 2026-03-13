---
title: WebExtension API property page template
slug: MDN/Writing_guidelines/Page_structures/Page_types/WebExtension_API_property_page_template
page-type: mdn-writing-guide
sidebar: mdnsidebar
---

> [!NOTE]
> _Remove this whole explanatory note before publishing._
>
> ---
>
> **Page front matter:**
>
> The front matter at the top of the page is used to define "page metadata".
> The values must be updated appropriately for the WebExtension API property.
>
> ```md
> ---
> title: Namespace.propertyName
> slug: Mozilla/Add-ons/WebExtensions/API/Namespace/propertyName
> page-type: webextension-api-property
> status:
>   - deprecated
>   - experimental
> browser-compat: webextensions.api.Namespace.propertyName
> sidebar: addonsidebar
> ---
> ```
>
> - **title**
>   - : Title heading displayed at the top of the page.
>     Format as `"Namespace.propertyName"`. For example, the [`browserSettings.homepageOverride`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/homepageOverride) page has a _title_ of `browserSettings.homepageOverride`.
> - **slug**
>   - : The end of the URL path after `https://developer.mozilla.org/en-US/docs/`.
>     This is formatted like `Mozilla/Add-ons/WebExtensions/API/Namespace/propertyName`.
> - **page-type**
>   - : The `page-type` key for WebExtension API properties is always `webextension-api-property`.
> - **status**
>   - : Include status flags as appropriate: `experimental`, `deprecated`, or `non-standard`. WebExtension features do not have automatic status blocks from BCD, so you must add the `status` field in front matter manually and include the corresponding banner macro(s) in the page content. Remove the `status` field entirely if neither flag applies.
> - **browser-compat**
>   - : Replace the placeholder value `webextensions.api.Namespace.propertyName` with the query string for the property in the [browser-compat-data repo](https://github.com/mdn/browser-compat-data). For guidance on creating this data, see the [Browser Compatibility tables and Browser Compatibility Data (BCD)](/en-US/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>     The toolchain uses the key to populate the compatibility section (replacing the `\{{Compat}}` macros).
> - **sidebar**
>   - : Always set to `addonsidebar`. The sidebar is determined by the directory structure and front matter — placing the page in the correct location under `Mozilla/Add-ons/WebExtensions/API/` is sufficient.
>
> ---
>
> **Top-of-page macros**
>
> Macro calls may appear at the top of the content section (immediately below the page front matter). For WebExtension pages, you must add these manually as needed:
>
> - `\{{SeeCompatTable}}` — add this if the property is [experimental](/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental). Also add `experimental` to the `status` list in the front matter.
> - `\{{Deprecated_Header}}` — add this if the property is [deprecated](/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated). Also add `deprecated` to the `status` list in the front matter. In general, WebExtension pages prefer a custom deprecation warning with information about the replacement feature, for example:
>
>   ```md
>   > [!WARNING]
>   > This property is deprecated. Use \{{WebExtAPIRef("Namespace.replacementProperty")}} instead.
>   ```
>
> Remove any macros or banners that do not apply.
>
> _Remember to remove this whole explanatory note before publishing._

{{SeeCompatTable}}{{Deprecated_Header}}

Begin the content on the page with an introductory paragraph describing what the property does and how it is used.
This should ideally be one or two short sentences.

## Value

Explain the type and meaning of the property's value.

- If the property is a value (for example, a string or boolean), describe the type and possible values.
- If the property is an object (for example, a `BrowserSetting`), describe or link to the relevant type using `{{WebExtAPIRef}}`.
- If the property is read-only, make that clear here.

Where relevant, describe how the value interacts with other APIs (for example, how to change a setting using a related function).

## Examples

Note that we use the plural "Examples" even if the page only contains one example.

### A descriptive heading

Each example must have an H3 heading naming the example. The heading should be descriptive of what the example is doing. For example, "A simple example" does not say anything about the example and therefore, not a good heading. The heading should be concise. For a longer description, use the paragraph after the heading.

See our guide on how to add [code examples](/en-US/docs/MDN/Writing_guidelines/Page_structures/Code_examples) for more information.

> [!NOTE]
> Sometimes you will want to link to examples given on another page.
>
> **Scenario 1:** If you have some examples on this page and some more examples on another page:
>
> Include an H3 heading (`###`) for each example on this page and then a final H3 heading (`###`) with the text "More examples", under which you can link to the examples on other pages. For example:
>
> ```md
> ## Examples
>
> ### Reading the property value
>
> Example of reading or using the property
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
> For examples of this API, see [the page on Namespace.propertyName](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/Namespace/propertyName).
> ```

`\{{WebExtExamples}}`

_To use this macro, remove the backticks and backslash in the markdown file. This macro generates links to examples from the [webextensions-examples](https://github.com/nicolo-ribaudo/webextensions-examples) repository. For API overview pages, use `\{{WebExtExamples("h2")}}` instead._

## Browser compatibility

`\{{Compat}}`

_To use this macro, remove the backticks and backslash in the markdown file._

## See also

Include links to reference pages and guides related to the current API. For more guidelines, see the [See also section](/en-US/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) in the _Writing style guide_.

- link1
- link2
- external_link (year)

---
title: WebExtension API page template
slug: MDN/Writing_guidelines/Page_structures/Page_types/WebExtension_API_page_template
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
> The values must be updated appropriately for the WebExtension API namespace/module.
>
> ```md
> ---
> title: Namespace
> slug: Mozilla/Add-ons/WebExtensions/API/Namespace
> page-type: webextension-api
> status:
>   - deprecated
>   - experimental
> browser-compat: webextensions.api.Namespace
> sidebar: addonsidebar
> ---
> ```
>
> - **title**
>   - : Title heading displayed at the top of the page. This is just the name of the WebExtension API namespace, for example `runtime` or `downloads`.
> - **slug**
>   - : The end of the URL path after `https://developer.mozilla.org/en-US/docs/`.
>     This is formatted like `Mozilla/Add-ons/WebExtensions/API/Namespace`.
> - **page-type**
>   - : The `page-type` key for WebExtension API namespaces is always `webextension-api`.
> - **status**
>   - : Include status flags as appropriate: `experimental`, `deprecated`, or `non-standard`. WebExtension features do not have automatic status blocks from BCD, so you must add the `status` field in front matter manually and include the corresponding banner macro(s) in the page content. Remove the `status` field entirely if neither flag applies.
> - **browser-compat**
>   - : Replace the placeholder value `webextensions.api.Namespace` with the query string for the namespace in the [browser-compat-data repo](https://github.com/mdn/browser-compat-data). For guidance on creating this data, see the [Browser Compatibility tables and Browser Compatibility Data (BCD)](/en-US/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
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
> - `\{{SeeCompatTable}}` — add this if the namespace is [experimental](/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental). Also add `experimental` to the `status` list in the front matter.
> - `\{{Deprecated_Header}}` — add this if the namespace is [deprecated](/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated). Also add `deprecated` to the `status` list in the front matter. In general, WebExtension pages prefer a custom deprecation warning with information about the replacement feature, for example:
>
>   ```md
>   > [!WARNING]
>   > This API is deprecated. Use \{{WebExtAPIRef("ReplacementNamespace")}} instead.
>   ```
>
> Remove any macros or banners that do not apply.
>
> _Remember to remove this whole explanatory note before publishing._

{{SeeCompatTable}}{{Deprecated_Header}}

Begin the content on the page with an introductory paragraph giving a brief high-level description of what the namespace does and when you might use it.
This should ideally be one or two short sentences.

If useful, you can add a short bulleted list summarizing key capabilities of the namespace, as is done on pages like [`runtime`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime).

## Types

If the namespace defines types, list them here using `{{WebExtAPIRef}}` macros and provide a brief description of each type.

- {{WebExtAPIRef("Namespace.Type1")}}
  - : Include a brief description of the type and what it represents.
- {{WebExtAPIRef("Namespace.Type2")}}
  - : etc.

If there are no types, omit this section.

## Properties

If the namespace defines properties, list them here using `{{WebExtAPIRef}}` macros and provide a brief description of each property.

- {{WebExtAPIRef("Namespace.property1")}}
  - : Include a brief description of the property and what it does here.
- {{WebExtAPIRef("Namespace.property2")}}
  - : etc.

If there are no properties, omit this section.

## Functions

List all the functions in this namespace using `{{WebExtAPIRef}}` macros and provide a short, single-sentence description of each, following existing pages like [`runtime`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime) or [`extension`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/extension).

- {{WebExtAPIRef("Namespace.function1()")}}
  - : Include a brief description of the function and what it does here.
- {{WebExtAPIRef("Namespace.function2()")}}
  - : etc.

If there are no functions, omit this section.

## Methods

If the namespace distinguishes between methods and free functions (for example, some devtools-related or extension-helper APIs), you can add a separate methods section. List the methods here using `{{WebExtAPIRef}}` macros and provide a short, single-sentence description of each.

- {{WebExtAPIRef("Namespace.method1()")}}
  - : Include a brief description of the method and what it does here.
- {{WebExtAPIRef("Namespace.method2()")}}
  - : etc.

If the namespace does not distinguish methods from functions, omit this section and only use the **Functions** section.

## Events

If the namespace defines events, list them here using `{{WebExtAPIRef}}` macros and provide a brief description of when each event fires.

- {{WebExtAPIRef("Namespace.onEvent1")}}
  - : Fired when (include the description of when the event fires).
- {{WebExtAPIRef("Namespace.onEvent2")}}
  - : etc.

If there are no events, omit this section.

`\{{WebExtExamples("h2")}}`

_To use this macro, remove the backticks and backslash in the markdown file. This macro generates links to examples from the [webextensions-examples](https://github.com/nicolo-ribaudo/webextensions-examples) repository. Use `\{{WebExtExamples("h2")}}` on API overview pages so the generated heading is at the correct level._

## Browser compatibility

`\{{Compat}}`

_To use this macro, remove the backticks and backslash in the markdown file._

## See also

Include links to reference pages and guides related to the current API. For more guidelines, see the [See also section](/en-US/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) in the _Writing style guide_.

- link1
- link2
- external_link (year)

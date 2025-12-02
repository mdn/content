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
> The values should be updated appropriately for the particular WebExtension API namespace/module.
>
> ```md
> ---
> title: Namespace
> slug: Mozilla/Add-ons/WebExtensions/API/Namespace
> page-type: webextension-api
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
> - **browser-compat**
>   - : Replace the placeholder value `webextensions.api.Namespace` with the query string for the namespace in the [Browser compat data repo](https://github.com/mdn/browser-compat-data).
>     The toolchain automatically uses the key to populate the compatibility section (replacing the `\{{Compat}}` macros where used).
>
>     Note that you may first need to create/update an entry for the API namespace in our [Browser compat data repo](https://github.com/mdn/browser-compat-data).
>     See our [guide on how to do this](/en-US/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> ---
>
> **Top-of-page macros**
>
> A number of macro calls appear at the top of the content section (immediately below the page front matter).
>
> These macros are automatically added by the toolchain (there is no need to add/remove):
>
> - `\{{SeeCompatTable}}` — this generates a **This is an experimental technology** banner that indicates the technology is [experimental](/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental).
> - `\{{Deprecated_Header}}` — this generates a **Deprecated** banner that indicates that use of the technology is [discouraged](/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated).
>
> You should update or delete the following macros according to the advice below:
>
> - `\{{WebExtAPIRef("GroupDataName")}}` — this generates the left-hand reference sidebar showing quick reference links related to the current page.
>   To generate the correct sidebar for your API, you need to add a `GroupData` entry to our GitHub repo, and include the entry's name inside the macro call in place of _GroupDataName_.
>   See our [API reference sidebars](/en-US/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) guide for information on how to do this.
>
> Do not provide status header macros manually. Refer to the section ["How feature statuses are added or updated"](/en-US/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated) to add these statuses to the page.
>
> Samples of the **Secure context**, **Available in workers**, **Experimental**, **Deprecated**, and **Non-standard** banners are shown right after this note block.
>
> _Remember to remove this whole explanatory note before publishing._

{{SeeCompatTable}}{{Deprecated_Header}}

Begin the content on the page with an introductory paragraph — start by naming the namespace, saying that it is a WebExtension API, and giving a brief high-level description of what it does and when you might use it.
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

## Browser compatibility

`\{{Compat}}`

_To use this macro, remove the backticks and backslash in the markdown file._

## See also

Include links to reference pages and guides related to the current API. For more guidelines, see the [See also section](/en-US/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) in the _Writing style guide_.

- link1
- link2
- external_link (year)

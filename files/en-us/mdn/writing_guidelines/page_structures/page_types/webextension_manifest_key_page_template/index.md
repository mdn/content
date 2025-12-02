---
title: WebExtension manifest key page template
slug: MDN/Writing_guidelines/Page_structures/Page_types/WebExtension_manifest_key_page_template
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
> The values should be updated appropriately for the particular WebExtension manifest key.
>
> ```md
> ---
> title: key_name
> slug: Mozilla/Add-ons/WebExtensions/manifest.json/key_name
> page-type: webextension-manifest-key
> browser-compat: webextensions.manifest.key_name
> sidebar: addonsidebar
> ---
> ```
>
> - **title**
>   - : Title heading displayed at the top of the page. This is just the manifest key name, such as `permissions` or `options_ui`.
> - **slug**
>   - : The end of the URL path after `https://developer.mozilla.org/en-US/docs/`.
>     This is formatted like `Mozilla/Add-ons/WebExtensions/manifest.json/key_name`.
> - **page-type**
>   - : The `page-type` key for WebExtension manifest keys is always `webextension-manifest-key`.
> - **browser-compat**
>   - : Replace the placeholder value `webextensions.manifest.key_name` with the query string for the manifest key in the [Browser compat data repo](https://github.com/mdn/browser-compat-data).
>     The toolchain automatically uses the key to populate the compatibility section (replacing the `\{{Compat}}` macros).
>
>     Note that you may first need to create/update an entry for the manifest key in our [Browser compat data repo](https://github.com/mdn/browser-compat-data).
>     See our [guide on how to do this](/en-US/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> ---
>
> **Top-of-page macros**
>
> A number of macro calls may appear at the top of the content section (immediately below the page front matter).
>
> These macros are automatically added by the toolchain (there is no need to add/remove):
>
> - `\{{SeeCompatTable}}` — this generates a **This is an experimental technology** banner that indicates the technology is [experimental](/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental).
> - `\{{Deprecated_Header}}` — this generates a **Deprecated** banner that indicates that use of the technology is [discouraged](/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated).
>
> Do not provide status header macros manually. Refer to the section ["How feature statuses are added or updated"](/en-US/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated) to add these statuses to the page.
>
> _Remember to remove this whole explanatory note before publishing._

{{SeeCompatTable}}{{Deprecated_Header}}

Begin the content on the page with an introductory paragraph — start by naming the manifest key, saying what kind of value it takes, and summarizing what it is used for.
This should ideally be one or two short sentences.

## Value

Describe the type and structure of the manifest key value, typically using a table similar to existing manifest key pages (for example, [`options_ui`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) or [`page_action`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action)).

Where appropriate, include:

- Whether the key is mandatory.
- Which manifest versions the key is supported in.
- A structured description (for object values, list fields and their meanings).

## Examples

Provide one or more manifest snippets showing realistic usage of the key.

```json
"key_name": {
  "property": "value"
}
```

Adapt this to match the actual structure of the key value.

## Browser compatibility

`\{{Compat}}`

_To use this macro, remove the backticks and backslash in the markdown file._

## See also

Include links to related manifest keys, relevant WebExtension API pages, and conceptual documentation. For more guidelines, see the [See also section](/en-US/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) in the _Writing style guide_.

- link1
- link2
- external_link (year)

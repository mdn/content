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
> The values must be updated appropriately for the WebExtension manifest key.
>
> ```md
> ---
> title: key_name
> slug: Mozilla/Add-ons/WebExtensions/manifest.json/key_name
> page-type: webextension-manifest-key
> status:
>   - deprecated
>   - experimental
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
> - **status**
>   - : Include status flags as appropriate: `experimental`, `deprecated`, or `non-standard`. WebExtension features do not have automatic status blocks from BCD, so you must add the `status` field in front matter manually and include the corresponding banner macro(s) in the page content. Remove the `status` field entirely if neither flag applies.
> - **browser-compat**
>   - : Replace the placeholder value `webextensions.manifest.key_name` with the query string for the manifest key in the [browser-compat-data repo](https://github.com/mdn/browser-compat-data). For guidance on creating this data, see the [Browser Compatibility tables and Browser Compatibility Data (BCD)](/en-US/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>     The toolchain uses the key to populate the compatibility section (replacing the `\{{Compat}}` macros).
> - **sidebar**
>   - : Always set to `addonsidebar`. The sidebar is determined by the directory structure and front matter — placing the page in the correct location under `Mozilla/Add-ons/WebExtensions/manifest.json/` is sufficient.
>
> ---
>
> **Top-of-page macros**
>
> Macro calls may appear at the top of the content section (immediately below the page front matter). For WebExtension pages, you must add these manually as needed:
>
> - `\{{SeeCompatTable}}` — add this if the manifest key is [experimental](/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental). Also add `experimental` to the `status` list in the front matter.
> - `\{{Deprecated_Header}}` — add this if the manifest key is [deprecated](/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated). Also add `deprecated` to the `status` list in the front matter. In general, WebExtension pages prefer a custom deprecation warning with information about the replacement feature, for example:
>
>   ```md
>   > [!WARNING]
>   > This manifest key is deprecated. Use `replacement_key` instead.
>   ```
>
> Remove any macros or banners that do not apply.
>
> _Remember to remove this whole explanatory note before publishing._

{{SeeCompatTable}}{{Deprecated_Header}}

Begin the content on the page with an introductory paragraph describing what kind of value the manifest key takes and what it is used for.
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

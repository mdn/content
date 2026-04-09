---
title: WebExtension API page template
slug: MDN/Writing_guidelines/Page_structures/Page_types/WebExtension_API_page_template
page-type: mdn-writing-guide
sidebar: mdnsidebar
---

This page describes the structure and content of a WebExtension API overview page. To get started quickly, copy the template file at [`files/templates/webextensions/api-overview.md`](https://github.com/mdn/content/blob/main/files/templates/webextensions/api-overview.md) in the content repository. Save it as `index.md` in a directory that corresponds to the slug. Then use the guidance below to fill in each section.

## Page front matter

The front matter at the top of the page defines page metadata. The values must be updated appropriately for the WebExtension API namespace.

```md
---
title: Namespace
slug: Mozilla/Add-ons/WebExtensions/API/Namespace
page-type: webextension-api
status:
  - deprecated
  - experimental
browser-compat: webextensions.api.Namespace
sidebar: addonsidebar
---
```

- **title**
  - : Title heading displayed at the top of the page. This is just the name of the WebExtension API namespace, for example `runtime` or `downloads`.
- **slug**
  - : The end of the URL path after `https://developer.mozilla.org/en-US/docs/`.
    This is formatted like `Mozilla/Add-ons/WebExtensions/API/Namespace`.
- **page-type**
  - : Always `webextension-api`.
- **status**
  - : Include status flags as appropriate: `experimental`, `deprecated`, or `non-standard`. WebExtension features do not have automatic status blocks from BCD, so you must add the `status` field in front matter manually and include the corresponding banner macro(s) in the page content. Remove the `status` field entirely if neither flag applies.
- **browser-compat**
  - : Replace the placeholder value `webextensions.api.Namespace` with the query string for the namespace in the [browser-compat-data repo](https://github.com/mdn/browser-compat-data). For guidance on creating this data, see [Browser Compatibility tables and Browser Compatibility Data (BCD)](/en-US/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables). The toolchain uses the key to populate the compatibility section (replacing the `{{Compat}}` macro).
- **sidebar**
  - : Always set to `addonsidebar`. The sidebar is determined by the directory structure and front matter — placing the page in the correct location under `Mozilla/Add-ons/WebExtensions/API/` is sufficient.

## Top-of-page macros

Macro calls may appear at the top of the content section (immediately below the page front matter). For WebExtension pages, you must add these manually as needed:

- `{{SeeCompatTable}}` — add this if the namespace is [experimental](/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental). Also add `experimental` to the `status` list in the front matter.
- `{{Deprecated_Header}}` — add this if the namespace is [deprecated](/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated). Also add `deprecated` to the `status` list in the front matter. In general, WebExtension pages prefer a custom deprecation warning with information about the replacement feature, for example:

  ```md
  > [!WARNING]
  > This API is deprecated. Use \{{WebExtAPIRef("ReplacementNamespace")}} instead.
  ```

Remove any macros or banners that do not apply.

## Introductory paragraph

Begin the content on the page with an introductory paragraph giving a brief high-level description of what the namespace does and when you might use it. This should ideally be one or two short sentences. There is no need to repeat the namespace name since the title already communicates this.

If useful, you can add a short bulleted list summarizing key capabilities of the namespace, as is done on pages like [`runtime`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime).

If the API requires a permission, state this immediately after the introduction. For example, see [`bookmarks`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks):

```md
To use this API, an extension must request the "bookmarks" [permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) in its [`manifest.json`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json) file.
```

## Description section

If there is additional detail to convey beyond what fits in the introductory paragraph — such as key concepts, usage patterns, or important caveats — include a `## Description` section placed between the introduction and the member-listing sections (Types, Properties, Functions, Events). Omit this section if the introductory paragraph is sufficient.

## Types section

If the namespace defines types, list them using `{{WebExtAPIRef}}` macros and provide a brief, single-sentence description of each. Omit this section if there are no types.

## Properties section

If the namespace defines properties, list them using `{{WebExtAPIRef}}` macros and provide a brief, single-sentence description of each. Omit this section if there are no properties.

## Functions section

List all the functions in the namespace using `{{WebExtAPIRef}}` macros and provide a short, single-sentence description of each, following existing pages like [`runtime`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime) or [`extension`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/extension). Omit this section if there are no functions.

## Events section

If the namespace defines events, list them using `{{WebExtAPIRef}}` macros and provide a brief description of when each event fires. Omit this section if there are no events.

## WebExtExamples macro

After the last member-listing section (Types, Properties, Functions, or Events), include the `{{WebExtExamples("h2")}}` macro. On API overview pages, always pass `"h2"` so the generated heading is at the correct level. This macro generates links to relevant examples from the [webextensions-examples](https://github.com/nicolo-ribaudo/webextensions-examples) repository.

## Browser compatibility section

Include the `{{Compat}}` macro. This uses the `browser-compat` key in the front matter to find the API's compatibility data in the [browser-compat-data repo](https://github.com/mdn/browser-compat-data). The macro then presents this information in a table on the rendered page.

## See also section

Include links to reference pages and guides related to the current namespace. For more guidelines, see the [See also section](/en-US/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) in the _Writing style guide_.

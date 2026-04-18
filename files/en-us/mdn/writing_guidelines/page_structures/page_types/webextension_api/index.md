---
title: WebExtension API page template
slug: MDN/Writing_guidelines/Page_structures/Page_types/WebExtension_API_page_template
page-type: mdn-writing-guide
sidebar: mdnsidebar
---

This page describes the structure and content of a WebExtension API overview page. To get started quickly, copy the template file at [`files/templates/webextensions/api-overview.md`](https://github.com/mdn/content/blob/main/files/templates/webextensions/api-overview.md) in the content repository. Save it as `index.md` in a directory with a lowercase name matching the slug. Then use this guidance to fill in each section.

## Page front matter

The front matter at the start of the page defines page metadata. The values must be updated appropriately for the WebExtension API namespace.

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
  - : Title heading displayed at the start of the page. This is the name of the WebExtension API namespace, for example, `runtime` or `downloads`.
- **slug**
  - : The end of the URL path after `https://developer.mozilla.org/en-US/docs/`.
    This is formatted like `Mozilla/Add-ons/WebExtensions/API/Namespace`.
- **page-type**
  - : Always `webextension-api`.
- **status**
  - : Include status flags as appropriate: `experimental`, `deprecated`, or `non-standard`. You may also need to add banner content to the page, see "Top-of-page macros". Remove the `status` field if no flags apply.

    > [!NOTE]
    > Unlike web features, WebExtension API page status blocks aren't automatically updated based on the browser compatibility data.

- **browser-compat**
  - : Replace `Namespace` in the placeholder `webextensions.api.Namespace` with the API namespace used in the [browser-compat-data repo](https://github.com/mdn/browser-compat-data). This is usually the same namespace as used in the documentation. For example, `webextensions.api.action`. For guidance on creating this data, see [Browser Compatibility tables and Browser Compatibility Data (BCD)](/en-US/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables). The toolchain uses the key to populate the compatibility section (replacing the `{{Compat}}` macro).
- **sidebar**
  - : Always set to `addonsidebar`. The sidebar content is determined by the directory structure and front matter. It's therefore important to place the page in the correct location under `Mozilla/Add-ons/WebExtensions/API/`.

## Top-of-page macros

You should add certain macro calls to the content section (immediately following the page front matter). For WebExtension pages, you must add these macros as needed:

- `{{SeeCompatTable}}` — add this if the namespace is [experimental](/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental). Also add `experimental` to the `status` list in the front matter.
- `{{Deprecated_Header}}` — add this if the namespace is [deprecated](/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated). Also add `deprecated` to the `status` list in the front matter. In general, WebExtension pages prefer a custom deprecation warning with information about the replacement feature, for example:

  ```md
  > [!WARNING]
  > This API is deprecated. Use \{{WebExtAPIRef("ReplacementNamespace")}} instead.
  ```

Remove any macros or banners that do not apply.

## Introductory paragraph

Begin the page content with an introductory paragraph that gives a brief, high-level description of what the namespace does and when you use it. This should ideally be one or two short sentences. There is no need to repeat the namespace name, as it's included in the page title. Commence the first sentence with "This API enables extensions to ". For example:

```md
This API enables extensions to modify and rearrange [tab groups](https://support.mozilla.org/en-US/kb/tab-groups).
```

If useful, you can add a short bulleted list summarizing key capabilities of the namespace, as is done on pages such as [`runtime`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime).

If the API requires permissions, state this requirement immediately following the introduction. For example, see [`bookmarks`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks). If the API requires only one permission, use this wording.

```md
To use this API, an extension must request the `bookmarks` [permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) in its [`manifest.json`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json) file.
```

## Description section

If there are additional details the reader needs to make full use of the API—such as key concepts, usage patterns, or important caveats—include the necessary sections following the introduction and preceding the member-listing sections (Types, Properties, Methods, and Events).

For example, see [declarativeNetRequest](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest) compared to [windows](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/windows).

## Types, properties, methods, and event sections

In the next four sections, list all the types, properties, methods, and events in the namespace. Present each list alphabetically using a [definition list](/en-US/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#definition_lists). Reference the detailed documentation for each member using the `{{WebExtAPIRef}}` macro. Provide a description for each member. Where possible, limit the description to one brief sentence.

For example:

```md
- {{WebExtAPIRef("declarativeNetRequest.testMatchOutcome()")}}
  - : Checks if any of the extension's `declarativeNetRequest` rules would match a hypothetical request.
```

Omit a section if there are no supported members.

## WebExtExamples macro

Follow the last member-listing section (Types, Properties, Functions, or Events) with the `{{WebExtExamples("h2")}}` macro. On API overview pages, always pass `"h2"` so the generated heading is at the correct level. This macro generates links to relevant examples from the [webextensions-examples](https://github.com/nicolo-ribaudo/webextensions-examples) repository.

## Browser compatibility section

Include the `{{Compat}}` macro. This uses the `browser-compat` key in the front matter to find the API's compatibility data in the [browser-compat-data repo](https://github.com/mdn/browser-compat-data). The macro then presents this information in a table on the rendered page.

## See also section

Include links to reference pages and guides related to the current namespace. For more guidelines, see the [See also section](/en-US/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) in the _Writing style guide_.

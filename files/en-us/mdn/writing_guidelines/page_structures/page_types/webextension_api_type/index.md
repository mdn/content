---
title: WebExtension API type page template
slug: MDN/Writing_guidelines/Page_structures/Page_types/WebExtension_API_type_page_template
page-type: mdn-writing-guide
sidebar: mdnsidebar
---

This page describes the structure and content of a WebExtension API type page. To get started quickly, copy the template file at [`files/templates/webextensions/api-type.md`](https://github.com/mdn/content/blob/main/files/templates/webextensions/api-type.md) in the content repository. Save it as `index.md` in a directory that corresponds to the slug. Then use the guidance below to fill in each section.

## Page front matter

The front matter at the top of the page defines page metadata. The values must be updated appropriately for the WebExtension API type.

```md
---
title: Namespace.TypeName
slug: Mozilla/Add-ons/WebExtensions/API/Namespace/TypeName
page-type: webextension-api-type
status:
  - deprecated
  - experimental
browser-compat: webextensions.api.Namespace.TypeName
sidebar: addonsidebar
---
```

- **title**
  - : Title heading displayed at the top of the page.
    Format as `"Namespace.TypeName"`. For example, the [`extension.ViewType`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/extension/ViewType) page has a _title_ of `extension.ViewType`.
- **slug**
  - : The end of the URL path after `https://developer.mozilla.org/en-US/docs/`.
    This is formatted like `Mozilla/Add-ons/WebExtensions/API/Namespace/TypeName`.
- **page-type**
  - : Always `webextension-api-type`.
- **status**
  - : Include status flags as appropriate: `experimental`, `deprecated`, or `non-standard`. WebExtension features do not have automatic status blocks from BCD, so you must add the `status` field in front matter manually and include the corresponding banner macro(s) in the page content. Remove the `status` field entirely if neither flag applies.
- **browser-compat**
  - : Replace the placeholder value `webextensions.api.Namespace.TypeName` with the query string for the type in the [browser-compat-data repo](https://github.com/mdn/browser-compat-data). For guidance on creating this data, see [Browser Compatibility tables and Browser Compatibility Data (BCD)](/en-US/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables). The toolchain uses the key to populate the compatibility section (replacing the `{{Compat}}` macro).
- **sidebar**
  - : Always set to `addonsidebar`. The sidebar is determined by the directory structure and front matter — placing the page in the correct location under `Mozilla/Add-ons/WebExtensions/API/` is sufficient.

## Top-of-page macros

Macro calls may appear at the top of the content section (immediately below the page front matter). For WebExtension pages, you must add these manually as needed:

- `{{SeeCompatTable}}` — add this if the type is [experimental](/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental). Also add `experimental` to the `status` list in the front matter.
- `{{Deprecated_Header}}` — add this if the type is [deprecated](/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated). Also add `deprecated` to the `status` list in the front matter. In general, WebExtension pages prefer a custom deprecation warning with information about the replacement feature, for example:

  ```md
  > [!WARNING]
  > This type is deprecated. Use \{{WebExtAPIRef("Namespace.ReplacementType")}} instead.
  ```

Remove any macros or banners that do not apply.

## Introductory paragraph

Begin the content on the page with an introductory paragraph describing what the type represents and where it is used. This should ideally be one or two short sentences. There is no need to repeat the name and namespace since the title already communicates this.

## Type section

Describe the structure and semantics of the type:

- For simple types (for example, enumerated strings), list the possible values and what each means.
- For object types, describe the object and list its fields in a definition list. Indicate whether fields are optional and what defaults are used.

## Description section

If there is additional detail to convey beyond what fits in the introductory paragraph and Type section — such as how the type is used across the API, edge cases, platform-specific behavior, or important caveats — include a `## Description` section placed between the Type and Examples sections. Omit this section if the introductory paragraph and Type section are sufficient.

## Examples section

Provide one or more examples demonstrating how to create or use a value of the type. Each example must have an H3 (`###`) heading with a concise, descriptive title that says what the example does. See our guide on how to add [code examples](/en-US/docs/MDN/Writing_guidelines/Page_structures/Code_examples) for more information.

If you have examples on this page _and_ links to more examples on other pages, add a final H3 heading called "More examples" with the links. If you _only_ have examples on another page and none on this page, add the links directly under the H2 heading without any H3 headings.

After all examples, include the `{{WebExtExamples}}` macro, which generates links to relevant examples from the [webextensions-examples](https://github.com/nicolo-ribaudo/webextensions-examples) repository.

## Browser compatibility section

Include `{{Compat}}`, which is automatically populated from the `browser-compat` key in the front matter.

## Chromium attribution

If the type is part of an API based on a Chromium API, include a `[!NOTE]` callout after `{{Compat}}` crediting the Chromium source, followed by the BSD license text in an HTML comment. See the [API overview page guidance](/en-US/docs/MDN/Writing_guidelines/Page_structures/Page_types/WebExtension_API_page_template#chromium_attribution) for details and the full license text to use.

## See also section

Include links to reference pages and guides related to the current type. For more guidelines, see the [See also section](/en-US/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) in the _Writing style guide_.

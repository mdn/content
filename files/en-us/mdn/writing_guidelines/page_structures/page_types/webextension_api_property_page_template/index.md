---
title: WebExtension API property page template
slug: MDN/Writing_guidelines/Page_structures/Page_types/WebExtension_API_property_page_template
page-type: mdn-writing-guide
sidebar: mdnsidebar
---

This page describes the structure and content of a WebExtension API property page. To get started quickly, copy the template file at [`files/templates/webextensions/api-property.md`](https://github.com/mdn/content/blob/main/files/templates/webextensions/api-property.md) in the content repository. Save it as `index.md` in a directory that corresponds to the slug. Then use the guidance below to fill in each section.

## Page front matter

The front matter at the top of the page defines page metadata. The values must be updated appropriately for the WebExtension API property.

```md
---
title: Namespace.propertyName
slug: Mozilla/Add-ons/WebExtensions/API/Namespace/propertyName
page-type: webextension-api-property
status:
  - deprecated
  - experimental
browser-compat: webextensions.api.Namespace.propertyName
sidebar: addonsidebar
---
```

- **title**
  - : Title heading displayed at the top of the page.
    Format as `"Namespace.propertyName"`. For example, the [`browserSettings.homepageOverride`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/homepageOverride) page has a _title_ of `browserSettings.homepageOverride`.
- **slug**
  - : The end of the URL path after `https://developer.mozilla.org/en-US/docs/`.
    This is formatted like `Mozilla/Add-ons/WebExtensions/API/Namespace/propertyName`.
- **page-type**
  - : Always `webextension-api-property`.
- **status**
  - : Include status flags as appropriate: `experimental`, `deprecated`, or `non-standard`. WebExtension features do not have automatic status blocks from BCD, so you must add the `status` field in front matter manually and include the corresponding banner macro(s) in the page content. Remove the `status` field entirely if neither flag applies.
- **browser-compat**
  - : Replace the placeholder value `webextensions.api.Namespace.propertyName` with the query string for the property in the [browser-compat-data repo](https://github.com/mdn/browser-compat-data). For guidance on creating this data, see [Browser Compatibility tables and Browser Compatibility Data (BCD)](/en-US/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables). The toolchain uses the key to populate the compatibility section (replacing the `{{Compat}}` macro).
- **sidebar**
  - : Always set to `addonsidebar`. The sidebar is determined by the directory structure and front matter — placing the page in the correct location under `Mozilla/Add-ons/WebExtensions/API/` is sufficient.

## Top-of-page macros

Macro calls may appear at the top of the content section (immediately below the page front matter). For WebExtension pages, you must add these manually as needed:

- `{{SeeCompatTable}}` — add this if the property is [experimental](/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental). Also add `experimental` to the `status` list in the front matter.
- `{{Deprecated_Header}}` — add this if the property is [deprecated](/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated). Also add `deprecated` to the `status` list in the front matter. In general, WebExtension pages prefer a custom deprecation warning with information about the replacement feature, for example:

  ```md
  > [!WARNING]
  > This property is deprecated. Use \{{WebExtAPIRef("Namespace.replacementProperty")}} instead.
  ```

Remove any macros or banners that do not apply.

## Introductory paragraph

Begin the content on the page with an introductory paragraph describing what the property does and how it is used. This should ideally be one or two short sentences. There is no need to repeat the name and namespace since the title already communicates this.

## Value section

Explain the type and meaning of the property's value:

- If the property is a simple value (for example, a string or boolean), describe the type and possible values.
- If the property is an object (for example, a `BrowserSetting`), describe or link to the relevant type using `{{WebExtAPIRef}}`.
- If the property is read-only, make that clear here.
- If the value varies between browsers, note the differences.

Where relevant, describe how the value interacts with other APIs (for example, how to change a setting using a related function).

## Examples section

Provide one or more examples demonstrating how to use the property. Each example must have an H3 (`###`) heading with a concise, descriptive title that says what the example does. See our guide on how to add [code examples](/en-US/docs/MDN/Writing_guidelines/Page_structures/Code_examples) for more information.

If you have examples on this page _and_ links to more examples on other pages, add a final H3 heading called "More examples" with the links. If you _only_ have examples on another page and none on this page, add the links directly under the H2 heading without any H3 headings.

After all examples, include the `{{WebExtExamples}}` macro, which generates links to relevant examples from the [webextensions-examples](https://github.com/nicolo-ribaudo/webextensions-examples) repository.

## Browser compatibility section

Include `{{Compat}}`, which is automatically populated from the `browser-compat` key in the front matter.

## Chromium attribution

If the property is part of an API based on a Chromium API, include a `[!NOTE]` callout after `{{Compat}}` crediting the Chromium source, followed by the BSD license text in an HTML comment. See the [API overview page guidance](/en-US/docs/MDN/Writing_guidelines/Page_structures/Page_types/WebExtension_API_page_template#chromium_attribution) for details and the full license text.

## See also section

Include links to reference pages and guides related to the current property. For more guidelines, see the [See also section](/en-US/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) in the _Writing style guide_.

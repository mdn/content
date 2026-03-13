---
title: WebExtension manifest key page template
slug: MDN/Writing_guidelines/Page_structures/Page_types/WebExtension_manifest_key_page_template
page-type: mdn-writing-guide
sidebar: mdnsidebar
---

This page describes the structure and content of a WebExtension manifest key page. To get started quickly, copy the template file at [`files/templates/webextensions/manifest-key.md`](https://github.com/mdn/content/blob/main/files/templates/webextensions/manifest-key.md) in the content repository. Save it as `index.md` in a directory that corresponds to the slug. Then use the guidance below to fill in each section.

## Page front matter

The front matter at the top of the page defines page metadata. The values must be updated appropriately for the WebExtension manifest key.

```md
---
title: key_name
slug: Mozilla/Add-ons/WebExtensions/manifest.json/key_name
page-type: webextension-manifest-key
status:
  - deprecated
  - experimental
browser-compat: webextensions.manifest.key_name
sidebar: addonsidebar
---
```

- **title**
  - : Title heading displayed at the top of the page. This is just the manifest key name, such as `permissions` or `options_ui`.
- **slug**
  - : The end of the URL path after `https://developer.mozilla.org/en-US/docs/`.
    This is formatted like `Mozilla/Add-ons/WebExtensions/manifest.json/key_name`.
- **page-type**
  - : Always `webextension-manifest-key`.
- **status**
  - : Include status flags as appropriate: `experimental`, `deprecated`, or `non-standard`. WebExtension features do not have automatic status blocks from BCD, so you must add the `status` field in front matter manually and include the corresponding banner macro(s) in the page content. Remove the `status` field entirely if neither flag applies.
- **browser-compat**
  - : Replace the placeholder value `webextensions.manifest.key_name` with the query string for the manifest key in the [browser-compat-data repo](https://github.com/mdn/browser-compat-data). For guidance on creating this data, see [Browser Compatibility tables and Browser Compatibility Data (BCD)](/en-US/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables). The toolchain uses the key to populate the compatibility section (replacing the `{{Compat}}` macro).
- **sidebar**
  - : Always set to `addonsidebar`. The sidebar is determined by the directory structure and front matter — placing the page in the correct location under `Mozilla/Add-ons/WebExtensions/manifest.json/` is sufficient.

## Top-of-page macros

Macro calls may appear at the top of the content section (immediately below the page front matter). For WebExtension pages, you must add these manually as needed:

- `{{SeeCompatTable}}` — add this if the manifest key is [experimental](/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental). Also add `experimental` to the `status` list in the front matter.
- `{{Deprecated_Header}}` — add this if the manifest key is [deprecated](/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated). Also add `deprecated` to the `status` list in the front matter. In general, WebExtension pages prefer a custom deprecation warning with information about the replacement feature, for example:

  ```md
  > [!WARNING]
  > This manifest key is deprecated. Use `replacement_key` instead.
  ```

Remove any macros or banners that do not apply.

## Introductory paragraph

Begin the content on the page with an introductory paragraph that uses the backtick-quoted key name as the subject and describes what the key is used for. This should ideally be one or two short sentences. For example:

```md
The `action` manifest key is used to define the appearance and behavior of an extension's browser toolbar button.
```

## Syntax section

Provide a `## Syntax` section containing a `json-nolint` code block that shows one or more representative usages of the key. For simple keys (a string, boolean, or array of strings), the code block can show just `"key_name": "value"`. For object keys, show the object form with its properties. If multiple usage patterns exist, use JSON comments to label them. Follow the code block with a `### Values` subsection.

For example:

````md
## Syntax

\```json-nolint
"key_name": {
"property": "value",
"other_property": "value"
}
\```
````

### Values subsection

Under `### Values`, use a definition list to describe the key's value. The template shows the object-key pattern by default. For simple keys, simplify the definition list to a direct description instead:

- For **object keys** (the default in the template), describe the object and list its properties as nested definition list items. Use `\{{optional_inline}}` for optional properties:

  ```md
  - `key_name`
    - : An object that specifies … It can have the following properties:
      - `property`
        - : A string that … This property is required.
      - `other_property` \{{optional_inline}}
        - : A string that …
  ```

- For **simple keys** (a string, boolean, or array of strings), describe the value directly without nested properties:

  ```md
  - `key_name`
    - : A string that specifies …
  ```

## Description section

Include a `## Description` section for any additional context about how the key works, its default behavior, interactions with other keys or APIs, and any important caveats. This is the place to note:

- Which manifest versions the key applies to (for example, "This key is available in Manifest V3 and later.").
- Whether the key is required or optional.
- How the key interacts with related APIs or other manifest keys.
- Edge cases and platform-specific behavior.

For simple keys where the introductory paragraph and Syntax section are sufficient, this section can be omitted.

## Examples section

Provide one or more realistic manifest snippets showing how to use the key. Each example must have an H3 (`###`) heading with a concise, descriptive title that says what the example does. Examples should show the key within the context of a full or partial manifest object (wrapped in curly braces) to make them easy to copy and use.

## Example extensions section

Some manifest key pages include a `## Example extensions` section listing complete extensions from the [webextensions-examples](https://github.com/nicolo-ribaudo/webextensions-examples) repository that use the key. See [`host_permissions`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) and [`web_accessible_resources`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources) for examples of this pattern. Include this section if relevant example extensions exist; omit it otherwise.

## Browser compatibility section

Include `{{Compat}}`, which is automatically populated from the `browser-compat` key in the front matter.

## See also section

Include links to related manifest keys, relevant WebExtension API pages, and conceptual documentation. For more guidelines, see the [See also section](/en-US/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) in the _Writing style guide_.

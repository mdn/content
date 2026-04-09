---
title: WebExtension API function page template
slug: MDN/Writing_guidelines/Page_structures/Page_types/WebExtension_API_function_page_template
page-type: mdn-writing-guide
sidebar: mdnsidebar
---

This page describes the structure and content of a WebExtension API function page. To get started quickly, copy the template file at [`files/templates/webextensions/api-function.md`](https://github.com/mdn/content/blob/main/files/templates/webextensions/api-function.md) in the content repository. Save it as `index.md` in a directory that corresponds to the slug. Then use the guidance below to fill in each section.

## Page front matter

The front matter at the top of the page defines page metadata. The values must be updated appropriately for the WebExtension API function.

```md
---
title: Namespace.functionName()
slug: Mozilla/Add-ons/WebExtensions/API/Namespace/functionName
page-type: webextension-api-function
status:
  - deprecated
  - experimental
browser-compat: webextensions.api.Namespace.functionName
sidebar: addonsidebar
---
```

- **title**
  - : Title heading displayed at the top of the page.
    Format as `"Namespace.functionName()"`. For example, the [`runtime.openOptionsPage()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/openOptionsPage) function page has a _title_ of `runtime.openOptionsPage()`.
- **slug**
  - : The end of the URL path after `https://developer.mozilla.org/en-US/docs/`.
    This is formatted like `Mozilla/Add-ons/WebExtensions/API/Namespace/functionName`.
- **page-type**
  - : Always `webextension-api-function`.
- **status**
  - : Include status flags as appropriate: `experimental`, `deprecated`, or `non-standard`. WebExtension features do not have automatic status blocks from BCD, so you must add the `status` field in front matter manually and include the corresponding banner macro(s) in the page content. Remove the `status` field entirely if neither flag applies.
- **browser-compat**
  - : Replace the placeholder value `webextensions.api.Namespace.functionName` with the query string for the function in the [browser-compat-data repo](https://github.com/mdn/browser-compat-data). For guidance on creating this data, see [Browser Compatibility tables and Browser Compatibility Data (BCD)](/en-US/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables). The toolchain uses the key to populate the compatibility section (replacing the `{{Compat}}` macro).
- **sidebar**
  - : Always set to `addonsidebar`. The sidebar is determined by the directory structure and front matter — placing the page in the correct location under `Mozilla/Add-ons/WebExtensions/API/` is sufficient.

## Top-of-page macros

Macro calls may appear at the top of the content section (immediately below the page front matter). For WebExtension pages, you must add these manually as needed:

- `{{SeeCompatTable}}` — add this if the function is [experimental](/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental). Also add `experimental` to the `status` list in the front matter.
- `{{Deprecated_Header}}` — add this if the function is [deprecated](/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated). Also add `deprecated` to the `status` list in the front matter. In general, WebExtension pages prefer a custom deprecation warning with information about the replacement feature, for example:

  ```md
  > [!WARNING]
  > This function is deprecated. Use \{{WebExtAPIRef("Namespace.replacementFunction()")}} instead.
  ```

Remove any macros or banners that do not apply.

## Introductory paragraph

Begin the content on the page with an introductory paragraph describing what the function does. This should ideally be one or two short sentences. There is no need to repeat the name and namespace since the title already communicates this. You could copy most of this from the function's summary on the corresponding API overview page.

If the function is asynchronous (returns a `Promise`), note that here as well.

## Syntax section

Provide a syntax block showing how to call the function, according to the guidance in our [syntax sections](/en-US/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections) article. Show all parameters and indicate their types.

### Parameters subsection

Include one definition-list term and definition for each parameter. If the parameter is optional, use the `\{{optional_inline}}` macro after its name. If there are no parameters, write `None.` instead of a definition list.

### Return value subsection

Describe the function's return value, including the data type and what it represents. Most WebExtension functions are asynchronous and return a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). If the function does not return anything, write `None ({{jsxref('undefined')}}).`.

### Exceptions subsection

If the function can throw exceptions or reject the returned Promise with specific errors, list them in a `### Exceptions` subsection using a definition list with one term and definition per exception. Omit this subsection if the function does not throw any exceptions.

## Description section

If there is additional detail to convey beyond what fits in the introductory paragraph — such as edge cases, interactions with other APIs, platform-specific behavior, or important caveats — include a `## Description` section placed between the Syntax and Examples sections. Omit this section if the introductory paragraph is sufficient.

## Examples section

Provide one or more examples demonstrating how to use the function. Each example must have an H3 (`###`) heading with a concise, descriptive title that says what the example does. See our guide on how to add [code examples](/en-US/docs/MDN/Writing_guidelines/Page_structures/Code_examples) for more information.

If you have examples on this page _and_ links to more examples on other pages, add a final H3 heading called "More examples" with the links. If you _only_ have examples on another page and none on this page, add the links directly under the H2 heading without any H3 headings.

After all examples, include the `{{WebExtExamples}}` macro, which generates links to relevant examples from the [webextensions-examples](https://github.com/nicolo-ribaudo/webextensions-examples) repository.

## Browser compatibility section

Include `{{Compat}}`, which is automatically populated from the `browser-compat` key in the front matter.

## See also section

Include links to reference pages and guides related to the current function. For more guidelines, see the [See also section](/en-US/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) in the _Writing style guide_.

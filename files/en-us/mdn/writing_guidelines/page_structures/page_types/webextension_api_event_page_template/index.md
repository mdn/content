---
title: WebExtension API event page template
slug: MDN/Writing_guidelines/Page_structures/Page_types/WebExtension_API_event_page_template
page-type: mdn-writing-guide
sidebar: mdnsidebar
---

This page describes the structure and content of a WebExtension API event page. To get started quickly, copy the template file at [`files/templates/webextensions/api-event.md`](https://github.com/mdn/content/blob/main/files/templates/webextensions/api-event.md) in the content repository. Save it as `index.md` in a directory that corresponds to the slug. Then use the guidance below to fill in each section.

## Page front matter

The front matter at the top of the page defines page metadata. The values must be updated appropriately for the WebExtension API event.

```md
---
title: Namespace.onEventName
slug: Mozilla/Add-ons/WebExtensions/API/Namespace/onEventName
page-type: webextension-api-event
status:
  - deprecated
  - experimental
browser-compat: webextensions.api.Namespace.onEventName
sidebar: addonsidebar
---
```

- **title**
  - : Title heading displayed at the top of the page.
    Format as `"Namespace.onEventName"`. For example, the [`runtime.onMessage`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage) event page has a _title_ of `runtime.onMessage`.
- **slug**
  - : The end of the URL path after `https://developer.mozilla.org/en-US/docs/`.
    This is formatted like `Mozilla/Add-ons/WebExtensions/API/Namespace/onEventName`.
- **page-type**
  - : Always `webextension-api-event`.
- **status**
  - : Include status flags as appropriate: `experimental`, `deprecated`, or `non-standard`. WebExtension features do not have automatic status blocks from BCD, so you must add the `status` field in front matter manually and include the corresponding banner macro(s) in the page content. Remove the `status` field entirely if neither flag applies.
- **browser-compat**
  - : Replace the placeholder value `webextensions.api.Namespace.onEventName` with the query string for the event in the [browser-compat-data repo](https://github.com/mdn/browser-compat-data). For guidance on creating this data, see [Browser Compatibility tables and Browser Compatibility Data (BCD)](/en-US/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables). The toolchain uses the key to populate the compatibility section (replacing the `{{Compat}}` macro).
- **sidebar**
  - : Always set to `addonsidebar`. The sidebar is determined by the directory structure and front matter — placing the page in the correct location under `Mozilla/Add-ons/WebExtensions/API/` is sufficient.

## Top-of-page macros

Macro calls may appear at the top of the content section (immediately below the page front matter). For WebExtension pages, you must add these manually as needed:

- `{{SeeCompatTable}}` — add this if the event is [experimental](/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental). Also add `experimental` to the `status` list in the front matter.
- `{{Deprecated_Header}}` — add this if the event is [deprecated](/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated). Also add `deprecated` to the `status` list in the front matter. In general, WebExtension pages prefer a custom deprecation warning with information about the replacement feature, for example:

  ```md
  > [!WARNING]
  > This event is deprecated. Use \{{WebExtAPIRef("Namespace.onReplacementEvent")}} instead.
  ```

Remove any macros or banners that do not apply.

## Introductory paragraph

Begin the content on the page with an introductory paragraph describing when the event fires and why it is useful. This should ideally be one or two short sentences. There is no need to repeat the name and namespace since the title already communicates this.

## Syntax section

Show how to register a listener for the event. Include the three standard event functions (`addListener`, `removeListener`, `hasListener`) with brief descriptions. If the event supports filters or extra parameters for `addListener` (for example, some `webRequest` events accept a `filter` and `extraInfoSpec`), show that pattern instead of or in addition to the basic form.

## addListener syntax section

### Parameters subsection

Describe the arguments passed to the listener callback function. Use a definition list with one term and definition per parameter. If the listener receives a simple object, you can document its fields inline. For complex objects with many fields, briefly reference them here and document the full shape in a separate `## Additional objects` section (see below).

### Return value subsection

If the listener is expected to return a value or a `Promise` (for example, to block or modify a request in `webRequest` events), document the expected return value here. If the listener does not return anything, you can omit this subsection.

## Additional objects section

When the listener callback receives complex objects with many fields (for example, a `details` object), document the full shape of each object in a separate `## Additional objects` section placed between `addListener syntax` and `Examples`. Each object gets an H3 (`###`) heading, and its fields are listed in a definition list. This pattern is used widely across existing event pages — see [`tabs.onActivated`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/onActivated) for a simple example and [`webRequest.onBeforeSendHeaders`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onBeforeSendHeaders) for a complex one.

If the listener parameters are simple enough to document inline in the Parameters subsection, omit this section entirely.

## Description section

If there is additional detail to convey beyond what fits in the introductory paragraph — such as when and why the event fires in detail, edge cases, interactions with other events or APIs, or platform-specific behavior — include a `## Description` section placed between the Additional objects section (or addListener syntax section, if Additional objects is omitted) and the Examples section. Omit this section if the introductory paragraph is sufficient.

## Examples section

Provide one or more examples demonstrating how to listen for the event. Each example must have an H3 (`###`) heading with a concise, descriptive title that says what the example does. See our guide on how to add [code examples](/en-US/docs/MDN/Writing_guidelines/Page_structures/Code_examples) for more information.

If you have examples on this page _and_ links to more examples on other pages, add a final H3 heading called "More examples" with the links. If you _only_ have examples on another page and none on this page, add the links directly under the H2 heading without any H3 headings.

After all examples, include the `{{WebExtExamples}}` macro, which generates links to relevant examples from the [webextensions-examples](https://github.com/nicolo-ribaudo/webextensions-examples) repository.

## Browser compatibility section

Include `{{Compat}}`, which is automatically populated from the `browser-compat` key in the front matter.

## Chromium attribution

If the event is part of an API based on a Chromium API, include a `[!NOTE]` callout after `{{Compat}}` crediting the Chromium source, followed by the BSD license text in an HTML comment. See the [API overview page guidance](/en-US/docs/MDN/Writing_guidelines/Page_structures/Page_types/WebExtension_API_page_template#chromium_attribution) for details and the full license text to use.

## See also section

Include links to reference pages and guides related to the current event. For more guidelines, see the [See also section](/en-US/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) in the _Writing style guide_.

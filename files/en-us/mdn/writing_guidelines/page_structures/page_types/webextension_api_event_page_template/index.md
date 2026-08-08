---
title: WebExtension API event page template
slug: MDN/Writing_guidelines/Page_structures/Page_types/WebExtension_API_event_page_template
page-type: mdn-writing-guide
sidebar: mdnsidebar
---

This page describes the structure and content of a WebExtension API event page. Use this guide in conjunction with the template file at [`files/templates/webextensions/api-event.md`](https://github.com/mdn/content/blob/main/files/templates/webextensions/api-event.md) in the content repository. To create a page, save the template as `index.md` in a directory with a lowercase name matching the slug. Then follow this guidance to fill in each section.

## Page front matter

The front matter at the start of the page defines page metadata. Update the values appropriately for the WebExtension API event.

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
  - : Title heading displayed at the start of the page.
    Format as `"Namespace.onEventName"`. For example, the [`runtime.onMessage`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage) event page has a _title_ of `runtime.onMessage`.
- **slug**
  - : The end of the URL path after `https://developer.mozilla.org/en-US/docs/`.
    This is formatted like `Mozilla/Add-ons/WebExtensions/API/Namespace/onEventName`. For example, the [`runtime.onMessage`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage) event page's slug is `Mozilla/Add-ons/WebExtensions/API/runtime/onMessage`.
- **page-type**
  - : Always `webextension-api-event`.
- **status**
  - : Include status flags as appropriate: `experimental`, `deprecated`, or `non-standard`. You may also need to add banner content to the page, see "Top-of-page macros". Remove the `status` field if no flags apply.

    > [!NOTE]
    > Unlike web features, WebExtension API page status blocks aren't automatically updated based on the browser compatibility data.

- **browser-compat**
  - : Replace `Namespace` and `onEventName` in the placeholder `webextensions.api.Namespace.onEventName` with the values used in the [browser-compat-data repo](https://github.com/mdn/browser-compat-data). For example, for the [`runtime.onMessage`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage) event, the value is `webextensions.api.runtime.onMessage`.

    For guidance on creating this data, see [Browser Compatibility tables and Browser Compatibility Data (BCD)](/en-US/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables). The toolchain uses the key to populate the compatibility section (replacing the `{{Compat}}` macro).

- **sidebar**
  - : Always set to `addonsidebar`. The sidebar content is determined by the directory structure and front matter. It's therefore important to place the page in the correct location under `Mozilla/Add-ons/WebExtensions/API/`.

## Top-of-page macros

You should add certain macro calls to the content section (immediately following the page front matter). For WebExtension pages, add these macros as needed:

- `{{SeeCompatTable}}` — add this if the event is [experimental](/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental). Also add `experimental` to the `status` list in the front matter.
- `{{Deprecated_Header}}` — add this if the event is [deprecated](/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated). Also add `deprecated` to the `status` list in the front matter. In general, WebExtension pages prefer a custom deprecation warning with information about the replacement feature, for example:

  ```md
  > [!WARNING]
  > This event is deprecated. Use \{{WebExtAPIRef("Namespace.onReplacementEvent")}} instead.
  ```

Remove any macros or banners that do not apply.

## Introductory paragraph

Begin the page content with an introductory paragraph that explains when the event fires and why it is useful. This should ideally be one or two short sentences. There is no need to repeat the name and namespace, as the title already communicates this.

## Syntax section

Show how to register a listener for the event. Include the three standard event functions (`addListener`, `removeListener`, `hasListener`) with brief descriptions. If the event supports filters or extra parameters for `addListener` (for example, some `webRequest` events accept a `filter` and `extraInfoSpec`), show that pattern instead of or in addition to the basic form.

## addListener syntax section

### Parameters subsection

Describe the parameters passed to the add listener function using a [definition list](/en-US/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#definition_lists). If the listener receives a simple object, document its arguments inline. For complex objects, briefly describe the objects and document their full shape in the [`Listener objects`](#listener_objects) section.

### Return value subsection

If the listener can return a value or a `Promise` (for example, to block or modify a request in `webRequest` events), document the expected return value here. If the listener does not return anything, omit this subsection.

## Listener objects section

When the listener callback receives more than the `listener` object and the `listener` object has more than five fields across its objects, to assist with readability, consider documenting the full shape of each object in a separate `## Listener objects` section. Use an H3 (`###`) heading for each object and list its fields in a definition list. Examples of this pattern include [`webRequest.onBeforeSendHeaders`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onBeforeSendHeaders).

If the listener parameters are simple enough to document inline in the Parameters subsection, omit this section entirely.

## Description section

If there is additional detail to convey beyond what fits in the introductory paragraph — such as when and why the event fires in detail, edge cases, interactions with other events or APIs, or platform-specific behavior — include a `## Description` section placed between the Listener objects section (or addListener syntax section, if Listener objects is omitted) and the Examples section. Omit this section if the introductory paragraph is sufficient.

## Examples section

Provide one or more examples demonstrating how to listen for the event. Each example must have an H3 (`###`) heading with a concise, descriptive title that says what the example does. See the guide on how to add [code examples](/en-US/docs/MDN/Writing_guidelines/Page_structures/Code_examples) for more information.

If you have examples on this page _and_ links to more examples on other pages, add a final H3 heading called "More examples" with the links. If you _only_ have examples on another page and none on this page, add the links directly under the H2 heading without any H3 headings.

After all examples, include the `{{WebExtExamples}}` macro, which generates links to relevant examples from the [webextensions-examples](https://github.com/nicolo-ribaudo/webextensions-examples) repository.

## Browser compatibility section

Include `{{Compat}}`, which is automatically populated from the `browser-compat` key in the front matter.

## See also section

Include links to reference pages and guides related to the event. For more guidelines, see the [See also section](/en-US/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) in the _Writing style guide_.

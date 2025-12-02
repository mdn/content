---
title: WebExtension API event page template
slug: MDN/Writing_guidelines/Page_structures/Page_types/WebExtension_API_event_page_template
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
> The values should be updated appropriately for the particular WebExtension API event.
>
> ```md
> ---
> title: Namespace.onEventName
> slug: Mozilla/Add-ons/WebExtensions/API/Namespace/onEventName
> page-type: webextension-api-event
> browser-compat: webextensions.api.Namespace.onEventName
> sidebar: addonsidebar
> ---
> ```
>
> - **title**
>   - : Title heading displayed at the top of the page.
>     Format as `"Namespace.onEventName"`. For example, the [`runtime.onMessage`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage) event page has a _title_ of `runtime.onMessage`.
> - **slug**
>   - : The end of the URL path after `https://developer.mozilla.org/en-US/docs/`.
>     This is formatted like `Mozilla/Add-ons/WebExtensions/API/Namespace/onEventName`.
> - **page-type**
>   - : The `page-type` key for WebExtension API events is always `webextension-api-event`.
> - **browser-compat**
>   - : Replace the placeholder value `webextensions.api.Namespace.onEventName` with the query string for the event in the [Browser compat data repo](https://github.com/mdn/browser-compat-data).
>     The toolchain automatically uses the key to populate the compatibility section (replacing the `\{{Compat}}` macros).
>
>     Note that you may first need to create/update an entry for the API event in our [Browser compat data repo](https://github.com/mdn/browser-compat-data).
>     See our [guide on how to do this](/en-US/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> ---
>
> **Top-of-page macros**
>
> A number of macro calls appear at the top of the content section (immediately below the page front matter).
>
> These macros are automatically added by the toolchain (there is no need to add/remove):
>
> - `\{{SeeCompatTable}}` — this generates a **This is an experimental technology** banner that indicates the technology is [experimental](/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental).
> - `\{{Deprecated_Header}}` — this generates a **Deprecated** banner that indicates that use of the technology is [discouraged](/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated).
>
> You should update or delete the following macros according to the advice below:
>
> - `\{{WebExtAPIRef("GroupDataName")}}` — this generates the left-hand reference sidebar showing quick reference links related to the current page.
>   To generate the correct sidebar for your API, you need to add a `GroupData` entry to our GitHub repo, and include the entry's name inside the macro call in place of _GroupDataName_.
>   See our [API reference sidebars](/en-US/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) guide for information on how to do this.
>
> Do not provide status header macros manually. Refer to the section ["How feature statuses are added or updated"](/en-US/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated) to add these statuses to the page.
>
> Samples of the **Secure context**, **Available in workers**, **Experimental**, **Deprecated**, and **Non-standard** banners are shown right after this note block.
>
> _Remember to remove this whole explanatory note before publishing._

{{SeeCompatTable}}{{Deprecated_Header}}

Begin the content on the page with an introductory paragraph — start by naming the event, saying what WebExtension namespace it is part of, and saying when it fires and why it is useful.
This should ideally be one or two short sentences.

## Syntax

Describe how to register a listener for the event, and show a short code example.

```js-nolint
function handleEvent(details) {
  // …
}

browser.Namespace.onEventName.addListener(handleEvent);
```

If the event supports filters or extra options objects (for example, some `webRequest` events), show that pattern instead.

### Event details

Describe the arguments passed to the event listener callback.

- `details`
  - : An object containing information about the event. Document the shape of this object here or link to a dedicated type page using `{{WebExtAPIRef}}`.

If the listener receives multiple arguments, list each argument separately.

### Return value

If the listener is expected to return a value or a `Promise` (for example, to block or modify a request), document the expected return value here. Otherwise, state `None ({{jsxref('undefined')}}).`.

## Examples

Note that we use the plural "Examples" even if the page only contains one example.

### A descriptive heading

Each example must have an H3 heading naming the example. The heading should be descriptive of what the example is doing. For example, "A simple example" does not say anything about the example and therefore, not a good heading. The heading should be concise. For a longer description, use the paragraph after the heading.

See our guide on how to add [code examples](/en-US/docs/MDN/Writing_guidelines/Page_structures/Code_examples) for more information.

> [!NOTE]
> Sometimes you will want to link to examples given on another page.
>
> **Scenario 1:** If you have some examples on this page and some more examples on another page:
>
> Include an H3 heading (`###`) for each example on this page and then a final H3 heading (`###`) with the text "More examples", under which you can link to the examples on other pages. For example:
>
> ```md
> ## Examples
>
> ### Listening for the event
>
> Example of using the event
>
> ### More examples
>
> Links to more examples on other pages
> ```
>
> **Scenario 2:** If you _only_ have examples on another page and none on this page:
>
> Don't add any H3 headings; just add the links directly under the H2 heading "Examples". For example:
>
> ```md
> ## Examples
>
> For examples of this API, see [the page on Namespace.onEventName](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/Namespace/onEventName).
> ```

## Browser compatibility

`\{{Compat}}`

_To use this macro, remove the backticks and backslash in the markdown file._

## See also

Include links to reference pages and guides related to the current API. For more guidelines, see the [See also section](/en-US/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) in the _Writing style guide_.

- link1
- link2
- external_link (year)

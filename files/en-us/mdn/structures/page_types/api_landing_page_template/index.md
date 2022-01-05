---
title: API landing page template
slug: MDN/Structures/Page_types/API_landing_page_template
tags:
  - API
  - Landing
  - Template
---
{{MDNSidebar}}

> **Note:** _Remove this whole explanatory note before publishing_
>
> ---
>
> **Page front matter:**
>
> The frontmatter at the top of the page is used to define "page metadata".
> The values should be updated appropriately for the particular interface.
>
> ```
> ---
> title: NameOfTheAPI API
> slug: Web/API/NameOfTheAPI_API
> tags:
>   - API
>   - NameOfTheAPI API
>   - Reference
>   - Landing
>   - Experimental
>   - Deprecated
>   - Non-standard
> ---
> ```
> - **title**
>   - : Title heading displayed at top of page.
>       This is the name of the API followed by the text "API": _NameOfTheAPI_ **API**.
>       For example, [WebXR Device](/en-US/docs/Web/API/WebXR_Device_API) has a title of _WebXR Device API_, [Fetch](/en-US/docs/Web/API/Fetch_API) has a title of _Fetch API_.
> - **slug**
>   - : The end of the URL path after `https://developer.mozilla.org/en-US/docs/`).
>       This will be formatted like `Web/API/NameOfTheAPI_API`.
>       For example, the [WebXR Device API](/en-US/docs/Web/API/WebVR_API)'s slug is `Web/API/WebXR_Device_API`.
> - **tags**
>   - : Always include the following tags: **API**, **Reference**, **Landing**,  the _name of the API_ (e.g. **WebXR Device API**).
>
>       Include the following tags as appropriate:
>       - Technology status: **Experimental** (if the technology is [experimental](/en-US/docs/MDN/Guidelines/Conventions_definitions#experimental)), **Deprecated** (if it is [deprecated](/en-US/docs/MDN/Guidelines/Conventions_definitions#deprecated_and_obsolete)), **Non-standard** if it isn't on a standards track.
>       - Special requirements: **Secure context** (if it is available in a secure context only)
>       - Any other tags that represent terms people might search for related to the technology.
>         For example on WebVR interface pages we include **VR** and **Virtual reality**.
>
> ---
>
> **Top-of-page macros**
>
> A number of macro calls appear at the top of the content section (immediately below the page frontmatter).
> You should update or delete them according to the advice below:
> - `\{{SeeCompatTable}}` — this generates a **This is an experimental technology** banner that indicates the technology is [experimental](/en-US/docs/MDN/Guidelines/Conventions_definitions#experimental)).
>   If the technology you are documenting is not experimental, you should remove this.
>   If it is experimental, and the technology is hidden behind a pref in Firefox, you should also fill in an entry for it in the [Experimental features in Firefox](/en-US/docs/Mozilla/Firefox/Experimental_features) page.
> - `\{{Deprecated_Header}}` — this generates a **Deprecated** banner that indicates that use of the technology is [discouraged](/en-US/docs/MDN/Guidelines/Conventions_definitions#deprecated_and_obsolete).
>   If it isn't, then you can remove the macro call.
> - `\{{SecureContext_Header}}` — this generates a **Secure context** banner that indicates the technology is only available in a [secure context](/en-US/docs/Web/Security/Secure_Contexts).
>   If it isn't, then you can remove the macro call.
>   If it is, then you should also fill in an entry for it in the [Features restricted to secure contexts](/en-US/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts) page.
> - `\{{APIRef("GroupDataName")}}` — this generates the left hand reference sidebar showing quick reference links related to the current page.
>   For example, every page in the [WebVR API](/en-US/docs/Web/API/WebVR_API) has the same sidebar, which points to the other pages in the API.
>   To generate the correct sidebar for your API, you need to add a `GroupData` entry to our GitHub repo, and include the entry's name inside the macro call in place of _GroupDataName_.
>   See our [API reference sidebars](/en-US/docs/MDN/Contribute/Howto/Write_an_API_reference/Sidebars) guide for information on how to do this.
> - Remember to remove the `\{{MDNSidebar}}` macro when you copy this page.
>
> ---
>
> **Browser compatibility**
>
> API landing pages optionally have a browser compatibility section that shows compatibility tables for one or more of the most important interfaces in the API. If the compatibility is similar for most interfaces in the API then often just one compatibility table is needed. If compatibility across the API is complicated/impossible to capture in a few tables, this sections should be omitted.
>
> To fill in the browser compatibility section, you may first need to create/update entries for the API interfaces in our [Browser compat data repo](https://github.com/mdn/browser-compat-data) — see our [guide on how to do this](/en-US/docs/MDN/Structures/Compatibility_tables).
>
> Add the `\{{Compat("path.to.feature.Interface")}}` macro for each interface for which compatibility information is required, replacing the "path.to.feature.Interface" argument with the path to the desired interface in the browser compatibility data.
>
> ---
>
> **Specifications**
>
> API landing pages optionally have a specifications section that lists the relevant specification(s) for each interface. Often there is just one specification covering all interfaces in the API.
>
> To fill in the specifications section, you may first need to create/update entries for interfaces in the [Browser compat data repo](https://github.com/mdn/browser-compat-data) to include specification data — see our [guide on how to do this](/en-US/docs/MDN/Structures/Compatibility_tables).
>
> Use the `\{{specifications("path.to.feature.Interface")}}` macro to add tables for the main specifications.
>
> ---
>
> _Remember to remove this whole explanatory note before publishing_

{{APIRef("GroupDataName")}}{{securecontext_header}}

The summary paragraph — start by naming the API, and saying what it is used for.
This should ideally be 1 or 2 short sentences.

## Concepts and usage

In this section, describe the API's purpose and usage cases in a bit more detail — why was a need recognized for it?
What problems does it solve? What concepts does it involve? How do you use it, from a high level perspective?

Don't go into a lot of detail in this section, and don't include code examples.
If there are a lot of concepts to explain to explain around this API, you should explain them in a separate "Fundamentals ..." or "Concepts..." article (e.g. [Fundamentals of WebXR](/en-US/docs/Web/API/WebXR_Device_API/Fundamentals)).
For a practical usage guide with code examples, you should include a "Usage..." article in your API docs (e.g. [Using the WebVR API](/en-US/docs/Web/API/WebVR_API/Using_the_WebVR_API)).

To help improve content discoverability and {{Glossary("SEO")}}, keep the following tips in mind:

## Interfaces

- {{domxref("NameOfTheInterface")}}
  - : Include a brief description of the interface and what it does here.
      Include one term and definition for each interface or dictionary.

### Extensions to other interfaces

The _name of interface_ extends the following APIs, adding the listed features.

#### Interface #1

- {{domxref("addition1")}}
  - : Description of the feature of Interface#1 that is added to that API by the API you are currently documenting.
      One *term and definition for each feature. If this API doesn't extend any other interfaces, you can delete these sections.

#### Interface #2

- {{domxref("addition1")}}
  - : Description of the feature of Interface#2 that is added to that API by the API you are currently documenting, etc.

## Examples

Fill in a simple example that nicely shows a typical usage of the API, then perhaps some more complex examples (see our guide on how to add [code examples](/en-US/docs/MDN/Structures/Code_examples) for more information).

This text should be replaced with a brief description of what the example demonstrates.

```js
my code block
```

If you've included an example directly in the page as shown above, and that example is longer than 4-5 lines or so, consider following the example with a step-by-step explanation of what it's doing, so that new programmers can learn more easily, and to help smooth the learning curve for complicated subjects.

And/or include a list of links to useful code samples that live elsewhere:

- x
- y
- z

## Specifications

{{Specifications("path.to.feature.Interface_1")}}

{{Specifications("path.to.feature.Interface_2")}}

## Browser compatibility

{{Compat("path.to.feature.Interface_1")}}


{{Compat("path.to.feature.Interface_2")}}

## See also

- Include list of
- other links related to
- this API that might be useful

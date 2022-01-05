---
title: API event subpage template
slug: MDN/Structures/Page_types/API_event_subpage_template
tags:
  - API
  - Event
  - Event subpage
  - Template
  - Reference
browser-compat: path.to.feature.NameOfTheEvent_event
---
{{MDNSidebar}}

> **Note:** _Remove this whole explanatory note before publishing_
>
> ---
>
> **Page front matter:**
>
> The frontmatter at the top of the page is used to define "page metadata".
> The values should be updated appropriately for the particular event.
>
> ```
> ---
> title: 'NameOfTheParentInterface: NameOfTheEvent event'
> slug: Web/API/NameOfTheParentInterface/NameOfTheEventHandler_event
> tags:
>   - NameOfTheEvent
>   - API
>   - Event
>   - Reference
>   - Experimental
>   - Non-standard
> browser-compat: path.to.feature.NameOfTheEvent_event
> ---
> ```
> - **title**
>   - : Title heading displayed at top of page.
>       Format as "_NameOfTheParentInterface_**:** _NameOfTheEvent_ **event**".
>       For example, the [animationcancel](/en-US/docs/Web/API/Window/animationcancel_event) event of the [Window](/en-US/docs/Web/API/Window) interface has a _title_ of `Window: animationcancel event`.
> - **slug**
>   - : The end of the URL path after `https://developer.mozilla.org/en-US/docs/`).
>       This will be formatted like `Web/API/NameOfTheParentInterface/NameOfTheEventHandler_event`.
> - **tags**
>   - : Always include the following tags: **API**, **Reference**, **Evemt**,  the _name of the event_, the name of the _parent interface_ (e.g. **Window**).
>
>       Include the following tags as appropriate:
>       - Technology status: **Experimental** (if the technology is [experimental](/en-US/docs/MDN/Guidelines/Conventions_definitions#experimental)), **Deprecated** (if it is [deprecated](/en-US/docs/MDN/Guidelines/Conventions_definitions#deprecated_and_obsolete)), **Non-standard** if it isn't on a standards track.
>       - Special requirements: **Secure context** (if it is available in a secure context only)
>       - Any other tags that represent terms people might search for related to the technology.
>         For example on WebVR interface pages we include **VR** and **Virtual reality**.
> - **browser-compat**
>   - : Replace the placeholder value `path.to.feature.NameOfTheEvent_event` with the query string for the event in the [Browser compat data repo](https://github.com/mdn/browser-compat-data).
>       The toolchain automatically uses the key to populate the compatibility and specification sections (replacing the `\{{Compat}}` and `\{{Specifications}}` macros).
>
>       Note that you may first need to create/update an entry for the event in our [Browser compat data repo](https://github.com/mdn/browser-compat-data), and this entry will need to include specification information.
>       See our [guide on how to do this](/en-US/docs/MDN/Structures/Compatibility_tables).
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
> **Parent object link**
>
> Add a link to this new page from its parent object's _Events_ section.
> For example [Element: wheel event](/en-US/docs/Web/API/Element/wheel_event) is linked from [`Element` > Events](/en-US/docs/Web/API/Element#events).
>
> If the parent object does not have an _Events_ section, then add one.
> If this is a new "class" of event, then you should add link to this section of the parent from the [Event reference](/en-US/docs/Web/Events).
>
> _Remember to remove this whole explanatory note before publishing_

{{SeeCompatTable}}{{SecureContext_Header}}{{Deprecated_Header}}{{APIRef("GroupDataName")}}

The summary paragraph — start by naming the event, saying what interface it is part of, and saying what it does.
This should ideally be 1 or 2 short sentences.
You could copy most of this from the property's summary on the corresponding API reference page.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bubbles</th>
      <td>Yes/No</td>
    </tr>
    <tr>
      <th scope="row">Cancelable</th>
      <td>Yes/No</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>
        A link to the parent interface the event is fired on, e.g.
        {{domxref("VRDisplayEvent")}}
      </td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>
        A link to the event's corresponding event handler property, e.g.
        {{domxref("Window/onvrdisplaypresentchange", "onvrdisplaypresentchange")}}
      </td>
    </tr>
  </tbody>
</table>

## Examples

Fill in a simple example that nicely shows a typical usage of the event, then perhaps some more complex examples (see our guide on how to add [code examples](/en-US/docs/MDN/Structures/Code_examples) for more information).

```js
my code block
```

And/or include a list of links to useful code samples that live elsewhere:

- x
- y
- z

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Include list of
- other links related to
- this API that might be useful
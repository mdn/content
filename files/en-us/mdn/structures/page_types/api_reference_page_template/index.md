---
title: API reference page template
slug: MDN/Structures/Page_types/API_reference_page_template
tags:
  - API
  - Template
  - Reference
browser-compat: path.to.feature.NameOfTheInterface
---
{{MDNSidebar}}

<!-- Remove div below here before publishing -->

### Page front matter

The frontmatter at the top of the page is used to define "page metadata". The values should be updated appropriately for the particular interface.

```plain
---
title: NameOfTheInterface
slug: Web/API/NameOfTheInterface
tags:
  - API
  - NameOfTheInterface
  - NameOfTheAPI
  - Reference
  - Experimental

browser-compat: path.to.feature.NameOfTheInterface
---
```

- **title**
  - : Title heading displayed at top of page. This is just the name of the interface. For example, the [Request](/en-US/docs/Web/API/Request) interface page has a _title_ of _Request_.
- slug
  - : The end of the URL path after `https://developer.mozilla.org/en-US/docs/`). This will be formatted like `Web/API/NameOfTheParentInterface`. For example, [Request](/en-US/docs/Web/API/Request) slug is "Web/API/Request".
- tags

  - : Include the following tags: **API**, **Reference**, **Interface**, _the name of the API_ (e.g. **WebVR**), the name of the interface (e.g. **Request**), **Experimental** (if the technology is [experimental](/en-US/docs/MDN/Guidelines/Conventions_definitions#experimental)), **Secure context** (if it is available in a secure context only), and **Deprecated** (if it is [deprecated](/en-US/docs/MDN/Guidelines/Conventions_definitions#deprecated_and_obsolete)).

    Optionally, you can elect to include some other tags that represent terms people might search for when looking for information on that technology. For example on WebVR interface pages we include **VR** and **Virtual reality**.

- browser-compat

  - : Replace the placeholder value `path.to.feature.NameOfTheMethod` with the query string for the method in the [Browser compat data repo](https://github.com/mdn/browser-compat-data). The toolchain automatically uses the key to populate the compatibility and specification sections (replacing the `\{{Compat}}` and `\{{Specifications}}` macros).

    Note that you may first need to create/update an entry for the API method in our [Browser compat data repo](https://github.com/mdn/browser-compat-data), and the entry for the API will need to include specification information. See our [guide on how to do this](/en-US/docs/MDN/Structures/Compatibility_tables).

### Top macros

There are five macro calls at the top of the template by default. You should update or delete them according to the advice below:

- `\{{APIRef("<em>GroupDataName</em>")}}` — this generates the left hand reference sidebar showing quick reference links related to the current page. For example, every page in the [WebVR API](/en-US/docs/Web/API/WebVR_API) has the same sidebar, which points to the other pages in the API. To generate the correct sidebar for your API, you need to add a GroupData entry to our KumaScript GitHub repo, and include the entry's name inside the macro call in place of _GroupDataName_. See our [API reference sidebars](/en-US/docs/MDN/Contribute/Howto/Write_an_API_reference/Sidebars) guide for information on how to do this.
- `\{{Draft}}` — this generates a **Draft** banner that indicates that the page is not yet complete, and should only be removed when the first draft of the page is completely finished. After it is ready to be published, you can remove this.
- `\{{SeeCompatTable}}` — this generates a **This is an experimental technology** banner that indicates the technology is [experimental](/en-US/docs/MDN/Guidelines/Conventions_definitions#experimental)). If the technology you are documenting is not experimental, you can remove this. If it is experimental, and the technology is hidden behind a pref in Firefox, you should also fill in an entry for it in the [Experimental features in Firefox](/en-US/docs/Mozilla/Firefox/Experimental_features) page.
- `\{{SecureContext_Header}}` — this generates a **Secure context** banner that indicates the technology is only available in a [secure context](/en-US/docs/Web/Security/Secure_Contexts). If it isn't, then you can remove the macro call. If it is, then you should also fill in an entry for it in the [Features restricted to secure contexts](/en-US/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts) page.
- `\{{Deprecated_Header}}` — this generates a **Deprecated** banner that indicates the technology is [deprecated](/en-US/docs/MDN/Guidelines/Conventions_definitions#deprecated_and_obsolete). If it isn't, then you can remove the macro call.
- `\{{Interface_Overview("<em>GroupDataName</em>")}} {{Experimental_Inline}}` — this generates the main body of the page (Constructor, Properties, Methods and Events).

<!-- Remove div above here before publishing -->

{{APIRef("GroupDataName")}}{{Draft}}{{SeeCompatTable}}{{SecureContext_Header}}{{Deprecated_Header}}

The summary paragraph — start by naming the interface, saying what API it is part of, and saying what it does. This should ideally be 1 or 2 short sentences. You could copy most of this from the Interface's summary on the corresponding API landing page.

{{InheritanceDiagram}}

## Constructor

- {{DOMxRef("NameOfTheInterface.NameOfTheInterface")}}
  - : Creates a new instance of the {{DOMxRef("NameOfTheInterface")}} object.

## Properties

_Also inherits properties from its parent interface, {{DOMxRef("NameOfParentInterface")}}._ (Note: If the interface doesn't inherit from another interface, remove this whole line.)

- {{DOMxRef("NameOfTheInterface.property1")}}{{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Include a brief description of the property and what it does here. Include one term and definition for each property. If the property is not readonly/experimental/deprecated, remove the relevant macro calls.
- {{DOMxRef("NameOfTheInterface.property2")}}
  - : etc.

## Methods

_Also inherits methods from its parent interface, {{DOMxRef("NameOfParentInterface")}}._ (Note: If the interface doesn't inherit from another interface, remove this whole line.)

- {{DOMxRef("NameOfTheInterface.method1()")}} {{Experimental_Inline}} {{Deprecated_Inline}}
  - : Include a brief description of the method and what it does here. Include one term and definition for each method. If the method is not experimental/deprecated, remove the relevant macro calls.
- {{DOMxRef("NameOfTheInterface.method2()")}}
  - : etc.

## Events

Listen to these events using [`addEventListener()`](/en-US/docs/Web/API/EventTarget/addEventListener) or by assigning an event listener to the `oneventname` property of this interface.

- [`eventname1`](#)
  - : Fired when ... include description of when event fires
    Also available via the [`oneventname1`](#) property.
- [`eventname2`](#)
  - : Fired when ... include description of when event fires
    Also available via the [`oneventname2`](#) property.
- etc.
  - : Fired when ...

## Examples

Fill in a simple example that nicely shows a typical usage of the interfaces, then perhaps some more complex examples (see our guide on how to add [code examples](/en-US/docs/MDN/Structures/Code_examples) for more information).

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
- this API that might
- be useful

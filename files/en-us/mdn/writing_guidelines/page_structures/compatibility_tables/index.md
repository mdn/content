---
title: Browser Compatibility tables and Browser Compatibility Data (BCD)
short-title: Compat tables and BCD
slug: MDN/Writing_guidelines/Page_structures/Compatibility_tables
page-type: mdn-writing-guide
browser-compat: api.AbortController
sidebar: mdnsidebar
---

MDN has a standard format for tables that illustrate compatibility of shared technologies across all browsers, such as DOM, HTML, CSS, JavaScript, SVG, etc.
To make this data available in multiple projects programmatically, a Node.js package is built from the [browser-compat-data repository](https://github.com/mdn/browser-compat-data) and published to npm.

To modify the data within these tables, comprehensive documentation along with the most recent details of conventions and JSON schemas used to represent the data can be found in the repository's [contributing guide](https://github.com/mdn/browser-compat-data/blob/main/docs/contributing.md) as well as the [data guidelines guide](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md).
If you have questions or discover problems, you are welcome to [ask for help](/en-US/docs/MDN/Community/Communication_channels).

## Using BCD data in MDN pages

Once data has been included in the [browser-compat-data](https://github.com/mdn/browser-compat-data) repo, you can start dynamically including browser compatibility and specification tables based on that data within MDN pages.

To get started with BCD data in MDN pages, use the query string specified in the BCD source file for the relevant data you wish to include.
For example:

- {{domxref("AbortController")}} compatibility data is defined in [api/AbortController.json](https://github.com/mdn/browser-compat-data/blob/main/api/AbortController.json) and can be queried using `api.AbortController`.
- {{HTTPHeader("Content-Type")}} HTTP header compatibility data is defined in [http/headers/content-type.json](https://github.com/mdn/browser-compat-data/blob/main/http/headers/Content-Type.json) and the query is `http.headers.Content-Type`.
- {{domxref("VRDisplay.capabilities")}} property compatibility data is defined in [api/VRDisplay.json](https://github.com/mdn/browser-compat-data/blob/main/api/VRDisplay.json) and its query is `api.VRDisplay.capabilities`.

The compatibility data query should be specified in the page front-matter in the `browser-compat` key.
For example, {{domxref("AbortController")}} would be added as shown below:

```md
---
title: AbortController
slug: Web/API/AbortController
page-type: web-api-interface
browser-compat: api.AbortController
---
```

The compatibility and specification tables corresponding to the key are then automatically rendered in place of the `\{{Compat}}` and `\{{Specifications}}` macros in the source.

If multiple compatibility/specification tables are required on the same page, you can specify the value of `browser-compat` as an array. For example, for the [Channel Messaging API](/en-US/docs/Web/API/Channel_Messaging_API) this would be added as shown below:

```md
---
title: Channel Messaging API
slug: Web/API/Channel_Messaging_API
page-type: web-api-overview
browser-compat:
  - api.MessageChannel
  - api.MessagePort
---
```

The macro calls generate the following tables (and corresponding set of notes):

### Compatibility table example

{{Compat}}

### Specifications table examples

{{Specifications}}

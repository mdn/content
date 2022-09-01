---
title: The MDN sample server
slug: MDN/Tools/Sample_server
tags:
  - Advanced
  - Draft
  - Guide
  - MDN Meta
  - Site-wide
  - Tools
---
{{MDNSidebar}}

While MDN provides a built-in [live sample system](/en-US/docs/MDN/Writing_guidelines/Page_structures/Live_samples) for presenting simple (and even not-so-simple) code samples with the code's output displayed in-context, there are samples that require a server to talk to. For those things, we have the MDN sample server, which solves these and other problems. This article is a guide to the use of the sample server.

## Possible use cases

Most samples can be presented using our built-in [live sample system](/en-US/docs/MDN/Writing_guidelines/Page_structures/Live_samples), but there are exceptions. Here are some reasons an example might need to make use of the sample server:

- A sample requiring persistently running code on the server, such as a WebSocket server may have the server component and possibly also the client side component on the sample server.
- A sample using technologies that don't work in the context of the MDN wiki or could interfere with readers' ability to focus on the content would be an obvious candidate; this might include samples that play sound effects or media or have significant amounts of animation.
- A sample which needs to access resources that cannot be hosted on MDN can be placed on the sample server.

## Referencing samples

Each sample's code is [maintained on GitHub](https://github.com/mdn/dom-examples), and we have [a server instance](https://mdn.github.io/dom-examples/) which provides access to executable/usable installations of all of the samples.

## Contributing advanced samples

To contribute to the samples located on the [sample server](https://mdn.github.io/dom-examples/), you need to fork the [mdn/dom-examples repository](https://github.com/mdn/dom-examples) on GitHub. Most of the samples are currently kept in the same repository on GitHub.

Each API has its own directory, e.g. [canvas](https://github.com/mdn/dom-examples/tree/main/canvas). To create a new sample, add an appropriately named directory under the API's directory there. For example, if your example shows how to use 'drop a file to upload feature', then you might put your sample in [drag-and-drop](https://github.com/mdn/dom-examples/tree/main/drag-and-drop) directory.

### Submitting your sample

Once you've finished and tested your sample, you will want to submit it so that it can be tested and eventually published on the production sample server. This is done using the standard GitHub [pull request(PR)](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) process. Submit your pull request [here](https://github.com/mdn/dom-examples/pulls).

---
title: External content
slug: MDN/Writing_guidelines/Page_structures/External_content
page-type: mdn-writing-guide
tags:
  - meta
  - writing-guide
---

{{MDNSidebar}}

Some MDN content is created from external data files or repositories using KumaScript macros.
You should create a pull request to update external content first before updating associated MDN pages.

The external content includes, but is not limited to the following:

- [JSON structured data](/en-US/docs/MDN/Guidelines/JSON_Structured_Data) provides information about JSON data used to create inheritance diagrams embedded using the `\{{InheritanceDiagram}}` macro, specification tables, etc.
- The [GroupData.json](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json) file defines the [Sidebars](/en-US/docs/MDN/Contribute/Howto/Write_an_API_reference/Sidebars) used by the `\{{APIRef}}` macro.
- The [`learning-area`](https://github.com/mdn/learning-area) GitHub repository contains the [Learning Area examples](/en-US/docs/Learn).
- The [`interactive-examples`](https://github.com/mdn/interactive-examples) GitHub repository contains source code for interactive examples embedded using the `\{{EmbedInteractiveExample}}` macro.

---
title: "Making a change that depends on external content"
linkTitle: "External content"
weight: 4
---

Some MDN content is created from external data files or repositories using KS macros.
Generally you should create a PR to first update the external content before
updating the associated MDN pages.

Relevant external content includes (non-exhaustively):

- [GroupData.json](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json):
  Data definition of
  [Sidebars](https://developer.mozilla.org/en-US/docs/MDN/Contribute/Howto/Write_an_API_reference/Sidebars)
  used by `{{APIRef}}` macro.
- [https://github.com/mdn/interactive-examples](https://github.com/mdn/interactive-examples):
  Source code repo for interactive examples inserted using the
  `{{EmbedInteractiveExample}}` macro.
- [https://github.com/mdn/learning-area](https://github.com/mdn/learning-area):
  Source code repo for examples referenced in the
  [Learning Area](https://developer.mozilla.org/en-US/docs/Learn)
- [JSON structured data](https://developer.mozilla.org/en-US/docs/MDN/Guidelines/JSON_Structured_Data)
  provides more information about JSON data used to define inheritance diagrams
  (`{{InheritanceDiagram}}` macro), specification tables, etc.

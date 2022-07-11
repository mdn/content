---
title: Unsupported GET API
slug: MDN/Tools/Unsupported_GET_API
tags:
  - Advanced
  - Automation
  - Documentation
  - Draft
  - Guide
  - MDN Meta
  - PUT API
  - Page-level
  - Tools
---
{{MDNSidebar}}

MDN's platform, [Yari](https://github.com/mdn/yari), doesn't provide a supported GET API. However, Yari does currently provide an unsupported mechanism that exposes JSON resources which you can retrieve with HTTP `GET` requests and then consume programmatically.

## index.json resources

Given the URL for a particular MDN article, by making an HTTP GET request to the corresponding URL with `/index.json` appended, you can retrieve associated JSON data.

For example, consider the following MDN article:

[https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch](/en-US/docs/Web/API/Fetch_API/Using_Fetch)

You can retrieve its associated JSON data at:

[https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch/index.json](/en-US/docs/Web/API/Fetch_API/Using_Fetch/index.json)

> **Warning:** The format used for the JSON data in the MDN `index.json` resources is unversioned and intentionally undocumented. Any part of the format is subject to possible change, including the structure and the key names. It's even possible that Yari may change in such a way that the `index.json` resources are no longer provided at all.

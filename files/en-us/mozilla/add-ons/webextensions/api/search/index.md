---
title: search
slug: Mozilla/Add-ons/WebExtensions/API/search
page-type: webextension-api
tags:
  - API
  - Add-ons
  - Extensions
  - Reference
  - Search
  - Search Engines
  - WebExtensions
browser-compat: webextensions.api.search
---

{{AddonSidebar}}

Use the search API to retrieve the installed search engines and execute searches.

To use this API you need to have the `"search"` [permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

When choosing between `search.query()` and `search.search()`, consider the following:

- {{WebExtAPIRef("search.search()")}} is available on all the main browser engines and, therefore, is ideal for use in cross-browser extensions. However, it can only issue searches against the browser's default search engine.
- {{WebExtAPIRef("search.query()")}} is available only on Firefox. However, it has the advantage of enabling you to issue a search against any search engines installed in the browser.

## Functions

- {{WebExtAPIRef("search.get()")}}
  - : Retrieve all search engines.
- {{WebExtAPIRef("search.query()")}}
  - : Search using the browser's default search engine.
- {{WebExtAPIRef("search.search()")}}
  - : Search using a specified search engine.

{{WebExtExamples("h2")}}

## Browser compatibility

{{Compat}}

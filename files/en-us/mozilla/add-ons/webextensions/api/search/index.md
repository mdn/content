---
title: search
slug: Mozilla/Add-ons/WebExtensions/API/search
page-type: webextension-api
browser-compat: webextensions.api.search
---

{{AddonSidebar}}

Use the search API to retrieve the installed search engines and execute searches.

To use this API you need to have the `"search"` [permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

When choosing between `search.query()` and `search.search()`, consider the following:

- {{WebExtAPIRef("search.query()")}} is available in most major browsers, making it ideal for use in cross-browser extensions. However, it can only issue searches against the browser's default search engine.
- {{WebExtAPIRef("search.search()")}} is available only in Firefox. However, it has the advantage of being able to issue a search against any search engine installed in the browser.

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

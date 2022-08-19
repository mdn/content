---
title: search.get()
slug: Mozilla/Add-ons/WebExtensions/API/search/get
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Reference
  - Search
  - WebExtensions
  - get
browser-compat: webextensions.api.search.search
---
{{AddonSidebar()}}

Gets an array of all installed search engines.

Each search engine returned is identified with a name, which you can pass into {{WebExtAPIRef("search.search()")}} to use that particular engine to make a search.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js
let gettingEngines = browser.search.get()
```

### Parameters

None.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with an [array](Web/JavaScript/Reference/Global_Objects/array) of search engine objects. Each search engine object may contain the following properties:

- `name`
  - : `string`. The search engine's name.
- `isDefault`
  - : `boolean`. `true` if the search engine is the default. Only one search engine can be the default at any given time.
- `alias` {{optional_inline}}
  - : `string`. If a search engine has an alias, the user can search with a particular search engine by entering the alias in address bar before the search term. For example, if the Wikipedia engine has an alias "wk", the user can search Wikipedia for pandas by entering "wk pandas" in the address bar. The alias is sometimes also called a "keyword".
- `favIconUrl` {{optional_inline}}
  - : `string`. The search engine's icon, as a data: URL.

## Browser compatibility

{{Compat}}

## Examples

Get all installed search engines:

```js
function retrieved(results) {
  console.log(`There were: ${results.length} search engines retrieved.`);
  for (const searchEngine of results) {
    console.log(JSON.stringify(searchEngine.name));
  }
}

browser.search.get().then(retrieved);
```

{{WebExtExamples}}

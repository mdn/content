---
title: search.search()
slug: Mozilla/Add-ons/WebExtensions/API/search/search
tags:
  - API
  - Add-ons
  - Extensions
  - Reference
  - Search
  - Search Engines
  - WebExtensions
browser-compat: webextensions.api.search.search
---
{{AddonSidebar()}}

Perform a search using the search engine specified, or the default search engine if no search engine is specified.

The results will be displayed in a new tab, or if the `tabId` argument is given, in the tab identified by this.

To use this function in your extension you must ask for the `"search"` [manifest permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

To get the installed search engines, use {{WebExtAPIRef("search.get()")}}.

## Syntax

```js
browser.search.search(
  searchProperties       // object
)
```

### Parameters

- `searchProperties`

  - : `object`. An object with the following properties:

    - `query`
      - : `string`. The search query.
    - `engine` {{optional_inline}}
      - : `string`. The name of the search engine. If the search engine name you specify doesn't exist, the function throws an error. If this property is omitted the default search engine will be used.
    - `tabId` {{optional_inline}}
      - : `integer`. An optional identifier for the tab you want to execute the search in. If this property is omitted the search results will be displayed in a new tab.

### Return value

None.

## Browser compatibility

{{Compat}}

## Examples

Search using the default search engine. The results will be shown in a new tab:

```js
function search() {
  browser.search.search({
    query: "styracosaurus"
  });
}

browser.browserAction.onClicked.addListener(search);
```

Search using Wikipedia. The results will be shown in a new tab:

```js
function search() {
  browser.search.search({
    query: "styracosaurus",
    engine: "Wikipedia (en)"
  });
}

browser.browserAction.onClicked.addListener(search);
```

Search using Wikipedia. The results will be shown in the active tab:

```js
function search(tab) {
  browser.search.search({
    query: "styracosaurus",
    engine: "Wikipedia (en)",
    tabId: tab.id
  });
}

browser.browserAction.onClicked.addListener(search);
```

{{WebExtExamples}}

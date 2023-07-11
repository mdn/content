---
title: search.search()
slug: Mozilla/Add-ons/WebExtensions/API/search/search
page-type: webextension-api-function
browser-compat: webextensions.api.search.search
---

{{AddonSidebar()}}

Perform a search using the search engine specified or the default search engine if no search engine is specified.

The results are displayed in the current tab, a new tab, or a new window according to the `disposition` property or in the tab specified in the `tabId` property. If neither is specified, the results display in a new tab.

To use this function, your extension must have the `"search"` [manifest permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

To get the installed search engines, use {{WebExtAPIRef("search.get()")}}.

## Syntax

```js-nolint
browser.search.search(
  searchProperties       // object
)
```

### Parameters

- `searchProperties`

  - : `object`. An object with the following properties:

    - `disposition` {{optional_inline}}
      - : `string`. The location where the search results are displayed. Valid values are `CURRENT_TAB`, `NEW_TAB`, and `NEW_WINDOW`. Defaults to `NEW_TAB`. Cannot be specified with `tabId`.
    - `engine` {{optional_inline}}
      - : `string`. The name of the search engine. If the search engine name doesn't exist, the function rejects the call with an error. If this property is omitted, the default search engine is used.
    - `query`
      - : `string`. The search query.
    - `tabId` {{optional_inline}}
      - : `integer`. An optional identifier for the tab you want to execute the search in. If this property is omitted, the search results are displayed in a new tab. Cannot be specified with `disposition`.

### Return value

None.

## Examples

A search using the default search engine with the results shown in the current tab (default):

```js
function search() {
  browser.search.search({
    query: "styracosaurus",
  });
}

browser.browserAction.onClicked.addListener(search);
```

A search using Wikipedia with the results shown in a new window:

```js
function search() {
  browser.search.search({
    query: "styracosaurus",
    engine: "Wikipedia (en)",
    disposition: "NEW_WINDOW",
  });
}

browser.browserAction.onClicked.addListener(search);
```

A search using Wikipedia with the results shown in the current tab:

```js
function search(tab) {
  browser.search.search({
    query: "styracosaurus",
    engine: "Wikipedia (en)",
    tabId: tab.id,
  });
}

browser.browserAction.onClicked.addListener(search);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

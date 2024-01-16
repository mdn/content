---
title: search.query()
slug: Mozilla/Add-ons/WebExtensions/API/search/query
page-type: webextension-api-function
browser-compat: webextensions.api.search.query
---

{{AddonSidebar()}}

Perform a search using the browser's default search engine.

The results are displayed in the current tab, a new tab, or a new window according to the `disposition` property or in the tab specified in the `tabId` property. If neither is specified, the results display in the current tab.

To use this function, your extension must have the `"search"` [manifest permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

## Syntax

```js-nolint
browser.search.query(
  queryInfo             // object
)
```

### Parameters

- `queryInfo`

  - : `object`. An object with the following properties:

    - `disposition` {{optional_inline}}
      - : `string`. The location where the search results are displayed. Valid values are `CURRENT_TAB`, `NEW_TAB`, and `NEW_WINDOW`. Defaults to `CURRENT_TAB`. Cannot be specified with `tabId`.
    - `tabId` {{optional_inline}}
      - : `integer`. An optional identifier for the tab you want to execute the search in. If this property is omitted, the search results are displayed in a new tab. Cannot be specified with `disposition`.
    - `text`
      - : `string`. The search query.

### Return value

None.

## Examples

A search with the results shown in the current tab (default):

```js
function search() {
  browser.search.query({
    text: "styracosaurus",
  });
}

browser.browserAction.onClicked.addListener(search);
```

A search with the results shown in a new window:

```js
function search() {
  browser.search.query({
    text: "styracosaurus",
    disposition: "NEW_WINDOW",
  });
}

browser.browserAction.onClicked.addListener(search);
```

A search with the results shown in a specific tab:

```js
function search(tab) {
  browser.search.query({
    query: "styracosaurus",
    tabId: tab.id,
  });
}

browser.browserAction.onClicked.addListener(search);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

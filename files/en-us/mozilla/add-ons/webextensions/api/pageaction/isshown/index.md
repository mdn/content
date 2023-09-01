---
title: pageAction.isShown()
slug: Mozilla/Add-ons/WebExtensions/API/pageAction/isShown
page-type: webextension-api-function
browser-compat: webextensions.api.pageAction.isShown
---

{{AddonSidebar()}}

Returns `true` if the page action is being shown for the given tab.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
let gettingIsShown = browser.pageAction.isShown(
  details // object
)
```

### Parameters

- `details`

  - : `object`. An object containing the `tabId` to check.

    - `tabId`
      - : `integer`. ID of the tab to check.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with `true` if the extension's page action is being shown for the given tab, and `false` otherwise.

## Browser compatibility

{{Compat}}

## Examples

Check the state of the currently active tab:

```js
async function shownInActiveTab() {
  let tabs = await browser.tabs.query({
    currentWindow: true,
    active: true,
  });
  let shown = await browser.pageAction.isShown({
    tabId: tabs[0].id,
  });
  console.log(shown);
}
```

{{WebExtExamples}}

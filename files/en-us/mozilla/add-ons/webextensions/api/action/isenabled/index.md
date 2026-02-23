---
title: action.isEnabled()
slug: Mozilla/Add-ons/WebExtensions/API/action/isEnabled
page-type: webextension-api-function
browser-compat: webextensions.api.action.isEnabled
sidebar: addonsidebar
---

Returns `true` if the browser action is enabled. Returns the global status if the `details` parameter is omitted or empty, or all its properties are empty.

> [!NOTE]
> This API is available in Manifest V3 or higher.

## Syntax

```js-nolint
let gettingIsEnabled = browser.action.isEnabled(
  details // optional object or integer
)
```

### Parameters

- `details` {{optional_inline}}
  - : `integer` or `object`. An an `integer` it defines the ID of a tab to check. As an `object` it contains:
    - `tabId` {{optional_inline}}
      - : `integer`. ID of a tab to check.
    - `windowId` {{optional_inline}}
      - : `integer`. ID of a window to check.

    If `windowId` and `tabId` are supplied, the function fails.

> [!NOTE]
> Chrome only support the `details` as an `integer`, the ID of a tab to check.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) fulfilled with `true` if the extension's browser action is enabled, and `false` otherwise.

## Examples

Check the global state:

```js
browser.action.isEnabled({}).then((result) => {
  console.log(result);
});
```

Check the state of the active tab:

```js
async function enabledInActiveTab() {
  let tabs = await browser.tabs.query({
    currentWindow: true,
    active: true,
  });
  let enabled = await browser.action.isEnabled({
    tabId: tabs[0].id,
  });
  console.log(enabled);
}
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

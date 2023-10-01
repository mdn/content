---
title: action.isEnabled()
slug: Mozilla/Add-ons/WebExtensions/API/action/isEnabled
page-type: webextension-api-function
browser-compat: webextensions.api.action.isEnabled
---

{{AddonSidebar()}}

Returns `true` if the browser action is enabled.

> **Note:** This API is available in Manifest V3 or higher.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
let gettingIsEnabled = browser.action.isEnabled(
  details // object
)
```

### Parameters

- `details`

  - : `object`. An object optionally containing the `tabId` or `windowId` to check.

    - `tabId` {{optional_inline}}
      - : `integer`. ID of a tab to check.
    - `windowId` {{optional_inline}}
      - : `integer`. ID of a window to check.

<!---->

- If windowId and tabId are both supplied, the function fails.
- If windowId and tabId are both omitted, the global enabled/disabled status is returned.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with `true` if the extension's browser action is enabled, and `false` otherwise.

## Examples

Check the global state:

```js
browser.action.isEnabled({}).then((result) => {
  console.log(result);
});
```

Check the state of the currently active tab:

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

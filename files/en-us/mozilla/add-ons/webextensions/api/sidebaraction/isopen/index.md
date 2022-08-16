---
title: sidebarAction.isOpen()
slug: Mozilla/Add-ons/WebExtensions/API/sidebarAction/isOpen
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Reference
  - WebExtensions
  - isOpen
  - sidebarAction
browser-compat: webextensions.api.sidebarAction.isOpen
---
{{AddonSidebar()}}

Returns `true` if the extension's sidebar is open in a given window.

This function accepts a `windowId` as a parameter:

- If you supply `windowId`, the function will check the given browser window.
- If you omit `windowId`, the function will check the topmost browser window.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js
let gettingIsOpen = browser.sidebarAction.isOpen(
  details // object
)
```

### Parameters

- `details`

  - : `object`. An object optionally containing the `windowId` to check.

    - `windowId` {{optional_inline}}
      - : `integer`. ID of a browser window to check. If omitted defaults to {{WebExtAPIRef("windows.WINDOW_ID_CURRENT")}}, which refers to the topmost browser window.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with `true` if the extension's sidebar is open in the given window, or `false` otherwise.

## Browser compatibility

{{Compat}}

## Examples

Check the topmost window:

```js
browser.sidebarAction.isOpen({}).then((result) => {
  console.log(result);
});
```

Check all open windows:

```js
async function checkWindow(windowId) {
  const result = await browser.sidebarAction.isOpen({ windowId });
  console.log(`window: ${windowId} status: ${result}`);
}

browser.windows.getAll().then((all) => {
  for (const { id } of all) {
    checkWindow(id);
  }
});
```

{{WebExtExamples}}

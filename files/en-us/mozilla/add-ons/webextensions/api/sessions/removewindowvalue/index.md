---
title: sessions.removeWindowValue()
slug: Mozilla/Add-ons/WebExtensions/API/sessions/removeWindowValue
page-type: webextension-api-function
browser-compat: webextensions.api.sessions.removeWindowValue
---

{{AddonSidebar()}}

Removes a value previously stored by a call to {{WebExtAPIRef("sessions.setWindowValue")}}.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
let removing = browser.sessions.removeWindowValue(
  windowId,    // integer
  key          // string
)
```

### Parameters

- `windowId`
  - : `integer`. ID of the window whose data you are trying to remove. Error is thrown if ID is invalid.
- `key`
  - : `string`. Key identifying the particular value to remove. This needs to match the key previously given in {{WebExtAPIRef("sessions.setWindowValue")}}.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be resolved no arguments if the item was successfully removed. If the call failed (for example, because the window ID could not be found) then the promise will be rejected with an error message.

## Browser compatibility

{{Compat}}

## Examples

This code adds two context menu items: one stores a value associated with the current window, the other one removes it:

```js
async function setOnActiveWindow() {
  let currentWindow = await browser.windows.getLastFocused();
  await browser.sessions.setWindowValue(currentWindow.id, "my-key", "my-value");
}

async function removeFromActiveWindow() {
  let currentWindow = await browser.windows.getLastFocused();
  await browser.sessions.removeWindowValue(currentWindow.id, "my-key");
}

browser.menus.create({
  id: "add-my-item",
  title: "add item",
  contexts: ["all"],
});

browser.menus.create({
  id: "remove-my-item",
  title: "remove item",
  contexts: ["all"],
});

browser.menus.onClicked.addListener((info) => {
  if (info.menuItemId === "add-my-item") {
    setOnActiveWindow();
  } else {
    removeFromActiveWindow();
  }
});
```

{{WebExtExamples}}

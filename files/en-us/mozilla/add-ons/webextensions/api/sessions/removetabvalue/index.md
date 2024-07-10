---
title: sessions.removeTabValue()
slug: Mozilla/Add-ons/WebExtensions/API/sessions/removeTabValue
page-type: webextension-api-function
browser-compat: webextensions.api.sessions.removeTabValue
---

{{AddonSidebar}}

Removes a value previously stored by a call to {{WebExtAPIRef("sessions.setTabValue")}}.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
let removing = browser.sessions.removeTabValue(
  tabId,    // integer
  key       // string
)
```

### Parameters

- `tabId`
  - : `integer`. ID of the tab whose data you are trying to remove. Error is thrown if ID is invalid.
- `key`
  - : `string`. Key identifying the particular value to remove. This needs to match the key previously given in {{WebExtAPIRef("sessions.setTabValue")}}.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be resolved no arguments if the item was successfully removed. If the call failed (for example, because the tab ID could not be found) then the promise will be rejected with an error message.

## Browser compatibility

{{Compat}}

## Examples

This code adds two context menu items: one stores a value associated with the current tab, the other one removes it:

```js
async function setOnActiveTab() {
  let tabArray = await browser.tabs.query({
    currentWindow: true,
    active: true,
  });
  let tabId = tabArray[0].id;
  await browser.sessions.setTabValue(tabId, "my-key", "my-value");
}

async function removeFromActiveTab() {
  let tabArray = await browser.tabs.query({
    currentWindow: true,
    active: true,
  });
  let tabId = tabArray[0].id;
  await browser.sessions.removeTabValue(tabId, "my-key");
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
    setOnActiveTab();
  } else {
    removeFromActiveTab();
  }
});
```

{{WebExtExamples}}

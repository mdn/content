---
title: sessions.setTabValue()
slug: Mozilla/Add-ons/WebExtensions/API/sessions/setTabValue
page-type: webextension-api-function
browser-compat: webextensions.api.sessions.setTabValue
---

{{AddonSidebar}}

Stores a key/value pair to associate with a given tab. You can subsequently retrieve this value using {{WebExtAPIRef("sessions.getTabValue")}}.

Note that this data will only be visible to the extension that set it, and not to any other extensions.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
let storing = browser.sessions.setTabValue(
  tabId,    // integer
  key,      // string
  value     // string or object
)
```

### Parameters

- `tabId`
  - : `integer`. ID of the tab with which you want to associate the data. Error is thrown if ID is invalid.
- `key`
  - : `string`. Key that you can later use to retrieve this particular data value.
- `value`
  - : `string` or `object`. If this is an object it is [stringified](/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify), so object methods, for example, will be omitted. If a function is given here it will be stored as the value `null`.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be resolved with no arguments if the call succeeded. If the call failed (for example, because the tab ID could not be found) then the promise will be rejected with an error message.

## Browser compatibility

{{Compat}}

## Examples

Set a value on the active tab when the user selects a menu item. Note that you'll need the "menus" [permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) to run this example:

```js
async function setOnActiveTab() {
  let tabArray = await browser.tabs.query({
    currentWindow: true,
    active: true,
  });
  let tabId = tabArray[0].id;
  await browser.sessions.setTabValue(tabId, "my-key", "my-value");
}

browser.menus.create({
  id: "my-item",
  title: "my item",
  contexts: ["all"],
});

browser.menus.onClicked.addListener(setOnActiveTab);
```

{{WebExtExamples}}

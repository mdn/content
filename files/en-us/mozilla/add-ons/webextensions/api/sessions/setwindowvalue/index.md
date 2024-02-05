---
title: sessions.setWindowValue()
slug: Mozilla/Add-ons/WebExtensions/API/sessions/setWindowValue
page-type: webextension-api-function
browser-compat: webextensions.api.sessions.setWindowValue
---

{{AddonSidebar}}

Stores a key/value pair to associate with a given window. You can subsequently retrieve this value using {{WebExtAPIRef("sessions.getWindowValue")}}.

Note that this data will only be visible to the extension that set it, and not to any other extensions.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
let storing = browser.sessions.setWindowValue(
  windowId,    // integer
  key,         // string
  value        // string or object
)
```

### Parameters

- `windowId`
  - : `integer`. ID of the window with which you want to associate the data. Error is thrown if ID is invalid.
- `key`
  - : `string`. Key that you can later use to retrieve this particular data value.
- `value`
  - : `string` or `object`. If this is an object it is [stringified](/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify), so object methods, for example, will be omitted. If a function is given here it will be stored as the value `null`.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be resolved with no arguments if the call succeeded. If the call failed (for example, because the window ID could not be found) then the promise will be rejected with an error message.

## Browser compatibility

{{Compat}}

## Examples

Set a value on the active window when the user selects a menu item. Note that you'll need the "menus" [permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) to run this example:

```js
async function setOnActiveWindow() {
  let currentWindow = await browser.windows.getLastFocused();
  await browser.sessions.setWindowValue(currentWindow.id, "my-key", "my-value");
}

browser.menus.create({
  id: "my-item",
  title: "my item",
  contexts: ["all"],
});

browser.menus.onClicked.addListener(setOnActiveWindow);
```

{{WebExtExamples}}

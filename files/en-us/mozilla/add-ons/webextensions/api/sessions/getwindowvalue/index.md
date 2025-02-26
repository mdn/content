---
title: sessions.getWindowValue()
slug: Mozilla/Add-ons/WebExtensions/API/sessions/getWindowValue
page-type: webextension-api-function
browser-compat: webextensions.api.sessions.getWindowValue
---

{{AddonSidebar}}

Retrieves a value previously stored by a call to {{WebExtAPIRef("sessions.setWindowValue")}}.

You can retrieve a value from a window even over a close/restore cycle: meaning that if you set a value, then the user closes the window, then restores the window using the browser's "restore window" feature (for example, by pressing Control+Shift+N), then you will be able to retrieve the value from the restored window. Note, though, that a restored window does not get the same ID as the original, so the ID you pass into `getWindowValue()` will be different from the ID you passed into `setWindowValue()`, even though they both refer to the same window.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
let retrieving = browser.sessions.getWindowValue(
  windowId,    // integer
  key          // string
)
```

### Parameters

- `windowId`
  - : `integer`. ID of the window whose data you are trying to retrieve. Error is thrown if ID is invalid.
- `key`
  - : `string`. Key identifying the particular value to retrieve. This needs to match the key previously given in {{WebExtAPIRef("sessions.setWindowValue")}}.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be resolved with the value if it exists, or `undefined` if it does not exist. If the call failed (for example, because the window ID could not be found) then the promise will be rejected with an error message.

## Browser compatibility

{{Compat}}

## Examples

Log the value of "my-key" for all newly created windows (this will include any windows that have been restored):

```js
function onGetResolved(r) {
  console.log(`success: ${r}`);
}

function onGetRejected(e) {
  console.log(`error: ${e}`);
}

browser.windows.onCreated.addListener((window) => {
  browser.sessions
    .getWindowValue(window.id, "my-key")
    .then(onGetResolved, onGetRejected);
});
```

{{WebExtExamples}}

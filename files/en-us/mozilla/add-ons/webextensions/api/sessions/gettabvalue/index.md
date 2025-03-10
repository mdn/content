---
title: sessions.getTabValue()
slug: Mozilla/Add-ons/WebExtensions/API/sessions/getTabValue
page-type: webextension-api-function
browser-compat: webextensions.api.sessions.getTabValue
---

{{AddonSidebar}}

Retrieves a value previously stored by a call to {{WebExtAPIRef("sessions.setTabValue")}}.

You can retrieve a value from a tab even over a close/restore cycle: meaning that if you set a value, then the user closes the tab, then restores the tab using the browser's "restore tab" feature (for example, by pressing Control+Shift+T), then you will be able to retrieve the value from the restored tab. Note, though, that a restored tab does not get the same ID as the original, so the ID you pass into `getTabValue()` will be different from the ID you passed into `setTabValue()`, even though they both refer to the same tab.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
let retrieving = browser.sessions.getTabValue(
  tabId,    // integer
  key       // string
)
```

### Parameters

- `tabId`
  - : `integer`. ID of the tab whose data you are trying to retrieve. Error is thrown if ID is invalid.
- `key`
  - : `string`. Key identifying the particular value to retrieve. This needs to match the key previously given in {{WebExtAPIRef("sessions.setTabValue")}}.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be resolved with the value if it exists, or `undefined` if it does not exist. If the call failed (for example, because the tab ID could not be found) then the promise will be rejected with an error message.

## Browser compatibility

{{Compat}}

## Examples

Log the value of "my-key" for all newly created tabs (this will include any tabs that have been restored):

```js
function onGetResolved(r) {
  console.log(`success: ${r}`);
}

function onGetRejected(e) {
  console.log(`error: ${e}`);
}

browser.tabs.onCreated.addListener((tab) => {
  browser.sessions
    .getTabValue(tab.id, "my-key")
    .then(onGetResolved, onGetRejected);
});
```

{{WebExtExamples}}

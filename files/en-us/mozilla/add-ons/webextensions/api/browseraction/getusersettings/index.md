---
title: browserAction.getUserSettings()
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/getUserSettings
page-type: webextension-api-function
browser-compat: webextensions.api.browserAction.getUserSettings
---

{{AddonSidebar}}

Gets the user-specified settings for the browser action.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
let userSettings = await browser.browserAction.getUserSettings();
```

### Parameters

This function takes no parameters.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that fulfills with an object with these properties:

- `userSettings`

  - : An object containing the user-specified settings for the browser action with these properties:

    - `isOnToolbar` {{optional_inline}}
      - : `boolean`. Whether the user has pinned the action's icon to the browser UI. This setting does not indicate whether the action icon is visible. The icon's visibility depends on the size of the browser window and the layout of the browser UI.

## Examples

This code logs a message indicating whether the browser action is pinned or not:

```js
function gotSettings(userSettings) {
  if (userSettings.isOnToolbar) {
    console.log("Browser action is pinned to toolbar.");
  } else {
    console.log("Browser action is not pinned to toolbar.");
  }
}

let gettingUserSettings = browser.browserAction.getUserSettings();
gettingUserSettings.then(gotSettings);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

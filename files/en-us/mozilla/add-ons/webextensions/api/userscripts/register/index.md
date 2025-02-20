---
title: userScripts.register()
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/register
page-type: webextension-api-function
browser-compat: webextensions.api.userScripts.register
---

{{AddonSidebar}}

Registers user scripts for the extension.

This is an asynchronous method that returns a {{JSxRef("Promise")}}.

## Syntax

```js-nolint
const registeredUserScript = await browser.userScripts.register(
  scripts       // object
)
```

### Parameters

- `scripts`

  - : `array` of {{WebExtAPIRef("userScripts.RegisteredUserScript")}}. Details of user scripts to register.

    Each {{WebExtAPIRef("userScripts.RegisteredUserScript")}} object must contain the `js` property as a non-empty array and a non-empty array in either `matches` or `includeGlobs`.

### Return value

A {{JSxRef("Promise")}} fulfilled with no arguments if all the requested user scripts are registered. If any user scripts fail to register or the request fails for another reason, none of the scripts register and the promise is rejected with an error message.

## Examples

This snippet registers hello world code into the `"myScriptId"` execution world to run in all websites matching `"*://example.com/*"`.

```js
await browser.userScripts.register([
  {
    worldId: "myScriptId",
    js: [{ code: "console.log('Hello world!');" }],
    matches: ["*://example.com/*"],
  },
]);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

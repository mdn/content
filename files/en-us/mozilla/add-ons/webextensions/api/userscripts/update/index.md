---
title: userScripts.update()
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/update
page-type: webextension-api-function
browser-compat: webextensions.api.userScripts.update
---

{{AddonSidebar}}

Updates user scripts registered by the extension.

This is an asynchronous method that returns a {{JSxRef("Promise")}}.

## Syntax

```js-nolint
const updatingUserScript = await browser.userScripts.update(
  scripts       // object
);
```

### Parameters

- `scripts`

  - : `array` of {{WebExtAPIRef("userScripts.RegisteredUserScript")}}. Details of user scripts to update.

    Each {{WebExtAPIRef("userScripts.RegisteredUserScript")}} must specify at least one property. Properties that are `null` or omitted are not changed. Passing an empty array clears the array.

### Return value

A {{JSxRef("Promise")}} fulfilled with no arguments if all the requested user scripts are updated. If any user scripts fail to update or the request fails for another reason, the promise is rejected with an error message.

## Examples

This snippet updates `matches` for all registered user scripts.

```js
await browser.userScripts.update([
  {
    worldId: "myScriptId",
    matches: ["*://example.com/*"],
  },
]);
```

This snippet updates `matches` for all user scripts running in the `"myScriptId"` world.

```js
await browser.userScripts.update([
  {
    worldId: "myScriptId",
    matches: ["*://example.com/*"],
  },
]);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

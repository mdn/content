---
title: userScripts.getScripts()
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/getScripts
page-type: webextension-api-function
browser-compat: webextensions.api.userScripts.getScripts
---

{{AddonSidebar}}

Returns user scripts registered by the extension.

## Syntax

```js-nolint
const gettingUserScripts = await browser.userScripts.getScripts(
  filter       // object
);
```

### Parameters

- `filter` {{optional_inline}}
  - : {{WebExtAPIRef("userScripts.UserScriptFilter")}}. A list of user script IDs to return.

### Return value

A {{JSxRef("Promise")}} fulfilled with an array of {{WebExtAPIRef("userScripts.RegisteredUserScript")}} objects. If no matching user scripts are found, the array is empty. If the request fails, the promise is rejected with an error message.

{{WebExtExamples("h2")}}

## Browser compatibility

{{Compat}}

---
title: userScripts.unregister()
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/unregister
page-type: webextension-api-function
browser-compat: webextensions.api.userScripts.unregister
---

{{AddonSidebar}}

Unregisters user scripts registered by the extension.

## Syntax

```js-nolint
let unregisteringUserScripts = browser.userScripts.unregister(
  filter       // optional object
);
```

### Parameters

- `filter` {{optional_inline}}
  - : {{WebExtAPIRef("userScripts.UserScriptFilter")}}. A list of user script IDs to unregister. If not specified, all user scripts are unregistered.

### Return value

A {{JSxRef("Promise")}} fulfilled with no arguments if the user scripts are unregistered. If the request fails, the promise is rejected with an error message.

{{WebExtExamples("h2")}}

## Browser compatibility

{{Compat}}

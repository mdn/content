---
title: RegisteredUserScript.unregister()
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/RegisteredUserScript/unregister
page-type: webextension-api-function
browser-compat: webextensions.api.userScripts.RegisteredUserScript.unregister
---

{{AddonSidebar}}

The `unregister()` method of the {{WebExtAPIRef("userScripts.RegisteredUserScript","RegisteredUserScript")}} object unregisters the user scripts represented by the object, user scripts that were registered using {{WebExtAPIRef("userScripts.register","userScripts.register()")}}.

> **Note:** User Scripts are automatically unregistered when the related extension page (from which the user scripts were registered) is unloaded, so you should register a user script from an extension page that persists at least as long as you want the user scripts to stay registered.

## Syntax

```js-nolint
const registeredUserScript = await browser.userScripts.register(
  userScriptOptions       // object
);
// …
await registeredUserScript.unregister()
```

### Parameters

None.

### Return value

A {{JSxRef("Promise")}} that is resolved once the user scripts are unregistered. The promise does not return a value.

## Browser compatibility

{{Compat}}

## See also

- {{WebExtAPIRef("userScripts.register","userScripts.register()")}}
- {{WebExtAPIRef("userScripts.RegisteredUserScript","RegisteredUserScript")}}

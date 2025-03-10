---
title: RegisteredUserScript.unregister() (Legacy)
slug: Mozilla/Add-ons/WebExtensions/API/userScripts_legacy/RegisteredUserScript/unregister
page-type: webextension-api-function
browser-compat: webextensions.api.userScripts_legacy.RegisteredUserScript.unregister
---

{{AddonSidebar}}

> [!WARNING]
> This is documentation for the legacy `userScripts` API. It's available in Firefox for Manifest V2. For functionality to work with user scripts in Manifest V3 see the new {{WebExtAPIRef("userScripts")}} API.

The `unregister()` method of the {{WebExtAPIRef("userScripts_legacy.RegisteredUserScript","RegisteredUserScript")}} object unregisters the user scripts represented by the object, user scripts that were registered using {{WebExtAPIRef("userScripts_legacy.register","userScripts.register()")}}.

> [!NOTE]
> User Scripts are automatically unregistered when the related extension page (from which the user scripts were registered) is unloaded, so you should register a user script from an extension page that persists at least as long as you want the user scripts to stay registered.

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

- {{WebExtAPIRef("userScripts_legacy.register","userScripts.register()")}}
- {{WebExtAPIRef("userScripts_legacy.RegisteredUserScript","RegisteredUserScript")}}

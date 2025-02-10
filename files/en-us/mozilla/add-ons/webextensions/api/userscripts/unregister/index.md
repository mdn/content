---
title: userScripts.unregister()
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/unregister
page-type: webextension-api-function
browser-compat: webextensions.api.userScripts.unregister
---

{{AddonSidebar}}

Unregisters all the user scripts registered by the extension.

This is an asynchronous method that returns a {{JSxRef("Promise")}}.

## Syntax

```js-nolint
const registeredUserScript = await browser.userScripts.unregister(
  userScriptOptions       // object
);
```

### Parameters

### Return value

A {{JSxRef("Promise")}} that is …

## Examples

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

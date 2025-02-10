---
title: userScripts.getScripts()
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/getScripts
page-type: webextension-api-function
browser-compat: webextensions.api.userScripts.getScripts
---

{{AddonSidebar}}

This method returns the extension's registered user scripts.

This is an asynchronous method that returns a {{JSxRef("Promise")}}.

## Syntax

```js-nolint
const registeredUserScript = await browser.userScripts.getScripts(
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

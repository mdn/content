---
title: userScripts.update()
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/update
page-type: webextension-api-function
browser-compat: webextensions.api.userScripts.update
---

{{AddonSidebar}}

Updates one or more of the extension's user scripts.

This is an asynchronous method that returns a {{JSxRef("Promise")}}.

## Syntax

```js-nolint
const registeredUserScript = await browser.userScripts.update(
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

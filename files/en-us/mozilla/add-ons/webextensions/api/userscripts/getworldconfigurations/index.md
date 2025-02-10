---
title: userScripts.getWorldConfigurations()
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/getWorldConfigurations
page-type: webextension-api-function
browser-compat: webextensions.api.userScripts.getWorldConfigurations
---

{{AddonSidebar}}

This method returns all the registered world configurations.

This is an asynchronous method that returns a {{JSxRef("Promise")}}.

## Syntax

```js-nolint
const registeredUserScript = await browser.userScripts.getWorldConfigurations(
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

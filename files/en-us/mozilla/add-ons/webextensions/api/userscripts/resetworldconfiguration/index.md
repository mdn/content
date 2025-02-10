---
title: userScripts.resetWorldConfiguration()
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/resetWorldConfiguration
page-type: webextension-api-function
browser-compat: webextensions.api.userScripts.resetWorldConfiguration
---

{{AddonSidebar}}

Resets the configuration for a user script world. Any scripts inject into the world are moved to the default world configuration.

This is an asynchronous method that returns a {{JSxRef("Promise")}}.

## Syntax

```js-nolint
const registeredUserScript = await browser.userScripts.resetWorldConfiguration(
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

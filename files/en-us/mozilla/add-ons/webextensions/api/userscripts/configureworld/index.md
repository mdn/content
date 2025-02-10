---
title: userScripts.configureWorld()
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/configureWorld
page-type: webextension-api-function
browser-compat: webextensions.api.userScripts.configureWorld
---

{{AddonSidebar}}

This method configures the `USER_SCRIPT` execution environment.

This is an asynchronous method that returns a {{JSxRef("Promise")}}.

## Syntax

```js-nolint
const registeredUserScript = await browser.userScripts.configureWorld(
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

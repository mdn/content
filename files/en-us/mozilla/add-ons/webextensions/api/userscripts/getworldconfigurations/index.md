---
title: userScripts.getWorldConfigurations()
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/getWorldConfigurations
page-type: webextension-api-function
browser-compat: webextensions.api.userScripts.getWorldConfigurations
---

{{AddonSidebar}}

Returns all the `USER_SCRIPT` world configurations registered by the extension with {{WebExtAPIRef("userScripts.configureWorld()")}}.

## Syntax

```js-nolint
const gettingWorldConfigurations = await browser.userScripts.getWorldConfigurations();
```

### Parameters

This function takes no parameters.

### Return value

A {{JSxRef("Promise")}} fulfilled with an array of {{WebExtAPIRef("userScripts.WorldProperties")}} objects. If the request fails, the promise is rejected with an error message.

{{WebExtExamples("h2")}}

## Browser compatibility

{{Compat}}

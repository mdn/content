---
title: userScripts.configureWorld()
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/configureWorld
page-type: webextension-api-function
browser-compat: webextensions.api.userScripts.configureWorld
---

{{AddonSidebar}}

Configures a `USER_SCRIPT` execution environment for the extension.

This is an asynchronous method that returns a {{JSxRef("Promise")}}.

## Syntax

```js-nolint
const configuredWorld = await browser.userScripts.configureWorld(
  properties       // object
);
```

### Parameters

- `properties`
  - : {{WebExtAPIRef("userScripts.WorldProperties")}}. Details of the configuration for a `USER_SCRIPT` world.

### Return value

A {{JSxRef("Promise")}} fulfilled with no arguments if the request is successful. If the request fails, the promise is rejected with an error message.

{{WebExtExamples("h2")}}

## Browser compatibility

{{Compat}}

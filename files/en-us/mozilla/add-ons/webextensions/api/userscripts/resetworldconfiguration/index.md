---
title: userScripts.resetWorldConfiguration()
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/resetWorldConfiguration
page-type: webextension-api-function
browser-compat: webextensions.api.userScripts.resetWorldConfiguration
---

{{AddonSidebar}}

Resets the configuration of a `USER_SCRIPT` world set by {{WebExtAPIRef("userScripts.configureWorld")}} to the defaults specified in {{WebExtAPIRef("userScripts.WorldProperties")}}. When the default world is reset, all worlds without an explicit configuration are also reset.

Any scripts injected into a reset world are moved to the default `USER_SCRIPT` world.

This is an asynchronous method that returns a {{JSxRef("Promise")}}.

## Syntax

```js-nolint
const resettingWorldConfiguration = await browser.userScripts.resetWorldConfiguration(
  worldId       // string
);
```

### Parameters

- `worldId` {{optional_inline}}
  - : `string` The ID of the `USER_SCRIPT` world to reset. If omitted or empty, resets the configuration of the default world and all worlds without a configuration set by {{WebExtAPIRef("userScripts.configureWorld")}}.

### Return value

A {{JSxRef("Promise")}} fulfilled with no arguments if the world configuration is reset. If the request fails, the promise is rejected with an error message.

{{WebExtExamples("h2")}}

## Browser compatibility

{{Compat}}

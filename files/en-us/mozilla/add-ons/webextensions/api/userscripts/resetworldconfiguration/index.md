---
title: userScripts.resetWorldConfiguration()
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/resetWorldConfiguration
page-type: webextension-api-function
browser-compat: webextensions.api.userScripts.resetWorldConfiguration
---

{{AddonSidebar}}

Resets the configuration of a `USER_SCRIPT` world registered by the extension. Any scripts injected into the world are moved to the default `USER_SCRIPT` world configuration.

This is an asynchronous method that returns a {{JSxRef("Promise")}}.

## Syntax

```js-nolint
const resettingWorldConfiguration = await browser.userScripts.resetWorldConfiguration(
  worldId       // string
);
```

### Parameters

- `worldId` {{optional_inline}}
  - : `string` The ID of the `USER_SCRIPT` world to reset. If omitted or empty, resets the default world's configuration.

### Return value

A {{JSxRef("Promise")}} fulfilled with no arguments if the world configuration is reset. If the request fails, the promise is rejected with an error message.

{{WebExtExamples("h2")}}

## Browser compatibility

{{Compat}}

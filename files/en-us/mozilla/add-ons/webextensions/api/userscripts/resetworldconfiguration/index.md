---
title: userScripts.resetWorldConfiguration()
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/resetWorldConfiguration
page-type: webextension-api-function
browser-compat: webextensions.api.userScripts.resetWorldConfiguration
---

{{AddonSidebar}}

Resets the configuration of a `USER_SCRIPT` world set by {{WebExtAPIRef("userScripts.configureWorld")}} to the defaults specified in {{WebExtAPIRef("userScripts.WorldProperties")}}. When the default world is reset, all worlds without an explicit configuration are also reset.

Changes to world configurations only apply to new instances of the world: A configuration won't apply to a world initialized by the execution of a user script in a document until the document is reloaded. However, the browser may revoke certain privileges when a configuration is updated. For example, message calls from a `USER_SCRIPT` world may fail when `messaging` is reset to `false`.

## Syntax

```js-nolint
let resettingWorldConfiguration = browser.userScripts.resetWorldConfiguration(
  worldId       // optional string
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

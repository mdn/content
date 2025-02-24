---
title: userScripts.configureWorld()
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/configureWorld
page-type: webextension-api-function
browser-compat: webextensions.api.userScripts.configureWorld
---

{{AddonSidebar}}

Configures `USER_SCRIPT` execution environments for the extension.

Changes to world configurations only apply to new instances of the world: A configuration won't apply to a world initialized by the execution of a user script in a document until the document is reloaded. However, the browser may revoke certain privileges when a configuration is updated. For example, message calls from a `USER_SCRIPT` world may fail if the extension sets `messaging` to `false`.

World configurations persist until the extension is updated or the configuration is reset by {{WebExtAPIRef("userScripts.resetWorldConfiguration()")}}.

## Syntax

```js-nolint
let configuredWorld = browser.userScripts.configureWorld(
  properties       // object
);
```

### Parameters

- `properties`

  - : {{WebExtAPIRef("userScripts.WorldProperties")}}. Details of the configuration for a `USER_SCRIPT` world.

    When `worldId` is omitted or the string is empty, the update is applied to the default world and all worlds without an explicit configuration. When `worldId` is specified only that world is configured.

    When updating the default world and worlds without an explicit configuration, when properties are omitted the {{WebExtAPIRef("userScripts.WorldProperties")}} defaults are used.

### Return value

A {{JSxRef("Promise")}} fulfilled with no arguments if the request is successful. If the request fails, the promise is rejected with an error message.

{{WebExtExamples("h2")}}

## Browser compatibility

{{Compat}}

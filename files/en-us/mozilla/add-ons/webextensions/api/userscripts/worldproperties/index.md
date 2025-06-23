---
title: userScripts.WorldProperties
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/WorldProperties
page-type: webextension-api-type
browser-compat: webextensions.api.userScripts.WorldProperties
---

{{AddonSidebar}}

The configuration of a `USER_SCRIPT` execution environment. Used in {{WebExtAPIRef("userScripts.configureWorld")}} and {{WebExtAPIRef("userScripts.getWorldConfigurations")}}.

## Type

Values of this type are an object containing these properties:

- `worldId` {{optional_inline}}
  - : `string`. The identifier for the world. Values with leading underscores (`_`) are reserved. The maximum length is 256 characters. Defaults to the default `USER_SCRIPT` world (""). To run a user script in this world, pass this value as the `worldId` property in {{WebExtAPIRef("userScripts.RegisteredUserScript")}} when registering or updating a user script.
- `csp` {{optional_inline}}
  - : `string`. The world's Content Security Policy (CSP). Defaults to the [default CSP for content scripts](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#csp_for_content_scripts), which prohibits dynamic code execution, such as `eval()`.
- `messaging` {{optional_inline}}
  - : `boolean`. Whether the {{WebExtAPIRef("runtime.sendMessage")}} and {{WebExtAPIRef("runtime.connect")}} methods are exposed to the user script world. Defaults to hiding these messaging APIs. The {{WebExtAPIRef("runtime.onUserScriptMessage")}} and {{WebExtAPIRef("runtime.onUserScriptConnect")}} event handlers are triggered when these methods are called.

{{WebExtExamples("h2")}}

## Browser compatibility

{{Compat}}

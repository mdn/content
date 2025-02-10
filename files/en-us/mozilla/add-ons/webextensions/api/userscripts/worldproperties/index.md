---
title: userScripts.WorldProperties
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/WorldProperties
page-type: webextension-api-type
browser-compat: webextensions.api.userScripts.WorldProperties
---

{{AddonSidebar}}

The configuration of a `USER_SCRIPT` execution environment.

## Type

Values of this type are an object containing these properties:

- `worldId` {{optional_inline}}
  - : `string`. The identifier for the world. Values with leading underscores (`_`) are reserved. The maximum length is 256. Defaults to the default `USER_SCRIPT` world ("").
- `csp` {{optional_inline}}
  - : string`. The world's Content Security Policy (CSP). Defaults to the standard content scripts CSP, which prohibits dynamic code execution, such as`eval()`.
- `messaging` {{optional_inline}}
  - : `boolean`. Whether the {{WebExtAPIRef("runtime.onUserScriptMessage")}} and {{WebExtAPIRef("runtime.onUserScriptConnect")}} event handlers are exposed. Defaults to hiding these messaging APIs.

{{WebExtExamples("h2")}}

## Browser compatibility

{{Compat}}

---
title: userScripts.InjectionResult
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/InjectionResult
page-type: webextension-api-type
browser-compat: webextensions.api.userScripts.InjectionResult
---

{{AddonSidebar}}

The `InjectionResult` object symbolizes the outcome of a user script injection executed by {{WebExtAPIRef("userScripts.execute")}}. It is returned as a {{JSxRef("Promise")}} consisting of an array of results.

## Type

Values of this type are objects that include the following properties:

- `documentId`
  - : `string`. Document ID that is associated with the injection.
- `error` {{optional_inline}}
  - : `string`. Error message if any. This is mutually exclusive with `result`
- `frameId`
  - : `string`. Frame ID that is associated with the injection.
- `result` {{optional_inline}}
  - : `string`. Result of the script injection if any. This is mutually exclusive with `error`

## Browser compatibility

{{Compat}}

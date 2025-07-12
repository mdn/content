---
title: userScripts.InjectionTarget
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/InjectionTarget
page-type: webextension-api-type
browser-compat: webextensions.api.userScripts.InjectionTarget
---

{{AddonSidebar}}

The `InjectionTarget` object defines a target context (e.g., tab or frame) in which {{WebExtAPIRef("userScripts.execute")}} injects a script into.

## Type

Values of this type are objects that include the following properties:

- `allFrames` {{optional_inline}}
  - : `boolean`. If set to `true`, the script is injected into all available frames. Defaults to `false`, in which the script is only injected into the top frame.
- `documentIds` {{optional_inline}}
  - : `string`. The ID of the specific document to inject into. Must not be specified if `frameIds` is set.
- `frameIds` {{optional_inline}}
  - : `number`. The ID of a specific frame to inject into.
- `tabId`
  - : `number`. The ID of a specific tab to inject into.

## Browser compatibility

{{Compat}}

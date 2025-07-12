---
title: userScripts.InjectionUserScript
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/InjectionUserScript
page-type: webextension-api-type
browser-compat: webextensions.api.userScripts.InjectionUserScript
---

{{AddonSidebar}}

The `InjectionUserScript` object specifies what user scripts to inject, where, and how.

## Type

Values of this type are objects that include the following properties:

- `injectImmediately` {{optional_inline}}
  - : `boolean`. If set to `true`, the injection will be triggered as soon as possible in the target context. This doesn't guarantee that the injection will be injected before the page finishes loading, as the page may have already loaded before the script has reached the target.
- `js`
  - : `array` of {{WebExtAPIRef("userScripts.ScriptSource")}}. The scripts to inject into matching pages.
- `target`
  - : {{WebExtAPIRef("userScripts.InjectionTarget")}}. The target to inject into.
- `world` {{optional_inline}}
  - : {{WebExtAPIRef("userScripts.ExecutionWorld")}}. The execution environment to use to run the scripts. Defaults to `"USER_SCRIPT"`.
- `worldId` {{optional_inline}}
  - : `string`. ID of a user script world the script executes in. Only valid if `world` is `USER_SCRIPT` or omitted. If `worldId` is omitted, the script is executed in the default `USER_SCRIPT` world (""). Values with leading underscores (`_`) are reserved. The maximum length is 256 characters. A world can be used by several scripts as their execution environment. To configure the behavior of a world, pass its `worldId` to {{WebExtAPIRef("userScripts.configureWorld")}} before the first script executes in that world.

## Browser compatibility

{{Compat}}

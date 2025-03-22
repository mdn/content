---
title: userScripts.RegisteredUserScript
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/RegisteredUserScript
page-type: webextension-api-type
browser-compat: webextensions.api.userScripts.RegisteredUserScript
---

{{AddonSidebar}}

An object representing registered user scripts. Returned by {{WebExtAPIRef("userScripts.getScripts","userScripts.getScripts()")}} and used as input to {{WebExtAPIRef("userScripts.register","userScripts.register()")}} and {{WebExtAPIRef("userScripts.update","userScripts.update()")}}.

## Type

Values of this type are an object containing these properties:

- `allFrames` {{optional_inline}}
  - : `boolean`. If `allFrames` is `true`, the script is injected into all of a page's frames. By default, it's `false` and the script is only injected into the top frame.
- `id`
  - : `string`. The ID of a user script. This property must not start with a '\_', which is reserved as a prefix for generated script IDs.
- `js` {{optional_inline}} for {{WebExtAPIRef("userScripts.update()")}} calls, required for {{WebExtAPIRef("userScripts.register()")}}
  - : `array` of {{WebExtAPIRef("userScripts.ScriptSource")}}. The scripts to inject into matching pages.
- `matches` {{optional_inline}}
  - : `array` of `string`. [Match patterns](/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) for the pages to run the script in. `matches` or `includeGlobs` must be specified in {{WebExtAPIRef("userScripts.register()")}} calls.
- `excludeMatches` {{optional_inline}}
  - : `array` of `string`. [Match patterns](/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) for pages that the script must not be run in.
- `includeGlobs` {{optional_inline}}
  - : `string`. [Glob patterns](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#globs) for the pages to run the script in. `matches` or `includeGlobs` must be specified in {{WebExtAPIRef("userScripts.register()")}} calls.
- `excludeGlobs` {{optional_inline}}
  - : `string`. [Glob patterns](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#globs) for pages that the script must not be run in.
- `runAt` {{optional_inline}}
  - : {{WebExtAPIRef("extensionTypes.RunAt")}}. The earliest the script is injected into a tab. Defaults to `"document_idle"`.
- `world` {{optional_inline}}
  - : {{WebExtAPIRef("userScripts.ExecutionWorld")}}. The execution environment to use to run the scripts. Defaults to `"USER_SCRIPT"`.
- `worldId` {{optional_inline}}
  - : `string`. ID of a user script world the script executes in. Only valid if `world` is `USER_SCRIPT` or omitted. If `worldId` is omitted, the script is executed in the default `USER_SCRIPT` world (""). Values with leading underscores (`_`) are reserved. The maximum length is 256 characters. A world can be used by several scripts as their execution environment. To configure the behavior of a world, pass its `worldId` to {{WebExtAPIRef("userScripts.configureWorld")}} before the first script executes in that world.

## Browser compatibility

{{Compat}}

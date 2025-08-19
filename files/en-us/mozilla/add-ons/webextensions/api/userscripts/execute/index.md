---
title: userScripts.execute()
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/execute
page-type: webextension-api-function
browser-compat: webextensions.api.userScripts.execute
---

{{AddonSidebar}}

Injects a user script into a target context (e.g., tab or frame).

> [!NOTE]
> By default, the injected script is executed at `document_idle`, or immediately if the page is loaded. If the `injectImmediately` property is set to `true`, the script injects without waiting, even if the page is loading.

## Syntax

```js
let executeUserScript = browser.userScripts.execute(
  injection, // array of objects
);
```

### Parameters

- `injection`
  - : An `array` of InjectionUserScript objects each specifying what user scripts to inject, where, and how.

    It contains the following properties:
    - `injectImmediately` {{optional_inline}}
      - : `boolean`. If set to `true`, the injection will be triggered as soon as possible in the target context. This doesn't guarantee that the injection will be injected before the page finishes loading, as the page may have already loaded before the script has reached the target.

    - `js`
      - : `array` of {{WebExtAPIRef("userScripts.ScriptSource")}}. The scripts to inject into matching pages.
    - `target`
      - : An `InjectionTarget` object that defines the target context in which {{WebExtAPIRef("userScripts.execute")}} injects a script. Properties include:
        - `allFrames` {{optional_inline}}
          - : `boolean`. If set to `true`, the script is injected into all available frames. Defaults to `false`, in which the script is only injected into the top frame.
        - `documentIds` {{optional_inline}}
          - : `Array of string`. The ID of the specific document to inject into. Must not be specified if `frameIds` is set.
        - `frameIds` {{optional_inline}}
          - : `Array of numbers`. The ID of a specific frame to inject into. Must not be specified if `documentIds` is set.
        - `tabId`
          - : `number`. The ID of a specific tab to inject into.
    - `world` {{optional_inline}}
      - : {{WebExtAPIRef("userScripts.ExecutionWorld")}}. The execution environment to use to run the scripts. Defaults to `"USER_SCRIPT"`.
    - `worldId` {{optional_inline}}
      - : `string`. ID of a user script world the script executes in. Only valid if `world` is `USER_SCRIPT` or omitted. If `worldId` is omitted, the script is executed in the default `USER_SCRIPT` world (""). Values with leading underscores (`_`) are reserved. The maximum length is 256 characters. A world can be used by several scripts as their execution environment. To configure the behavior of a world, pass its `worldId` to {{WebExtAPIRef("userScripts.configureWorld")}} before the first script executes in that world.

### Return Value

A {{JSxRef("Promise")}} fulfilled with an array of `InjectionResult` objects which symbolizes the outcome of a user script injection. Each object contains:

- `documentId`
  - : `string`. Document ID that is associated with the injection.
- `error` {{optional_inline}}
  - : `string`. Error message if any. This is mutually exclusive with `result`
- `frameId`
  - : `number`. Frame ID that is associated with the injection.
- `result` {{optional_inline}}
  - : `string`. Result of the script injection if any. This is mutually exclusive with `error`

## Examples

```js
await browser.userScripts.execute([
  {
    js: [{ code: "console.log('Hello world!');" }],
    target: { tabId: 1 },
  },
]);
```

## Browser compatibility

{{Compat}}

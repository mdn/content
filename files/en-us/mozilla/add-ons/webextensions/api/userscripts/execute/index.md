---
title: userScripts.execute()
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/execute
page-type: webextension-api-function
browser-compat: webextensions.api.userScripts.execute
---

{{AddonSidebar}}

Injects a user script defined in the `js` property into a target context (e.g., tab or frame).

## Syntax

```js
let executeUserScript = chrome.userScripts.execute(
  injection, // array of objects
);
```

### Parameters

- `injection`
  - : `Array`of {{WebExtAPIRef("userScripts.InjectionUserScript")}}. Defines where and what user scripts to inject.

### Return Value

A {{JSxRef("Promise")}} that consists of an array of {{WebExtAPIRef("userScripts.InjectionResult")}} objects containing the outcome of the injection.

## Examples

```js
await chrome.userScripts.execute([
  {
    js: [{ code: "console.log('Hello world!');" }],
    target: { tabId: 1 },
  },
]);
```

## Browser compatibility

{{Compat}}

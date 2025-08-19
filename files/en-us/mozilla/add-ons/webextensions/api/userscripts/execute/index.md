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
  - : `Array` of {{WebExtAPIRef("userScripts.InjectionUserScript")}}. Defines where and what user scripts to inject.

### Return Value

A {{JSxRef("Promise")}} fulfilled with an array of {{WebExtAPIRef("userScripts.InjectionResult")}} objects. If the injection fails, the result object includes an `error` property.

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

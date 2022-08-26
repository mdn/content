---
title: BeforeInstallPromptEvent.prompt()
slug: Web/API/BeforeInstallPromptEvent/prompt
page-type: web-api-instance-method
tags:
  - API
  - BeforeInstallPromptEvent
  - Experimental
  - Method
  - Reference
  - prompt
browser-compat: api.BeforeInstallPromptEvent.prompt
---
{{SeeCompatTable}}

The **`prompt()`** method of the
{{domxref("BeforeInstallPromptEvent")}} interface allows a developer to show the
install prompt at a time of their own choosing.

## Syntax

```js
prompt()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} resolving to an information object containing an `outcome` and a `platform`.  
The `outcome` is either **`"accepted"`** or **`"dismissed"`** (c.f. {{jsxref("BeforeInstallPromptEvent", "BeforeInstallPromptEvent.userChoice")}} {{experimental_inline}}).
The `platform` is the selected platform (c.f. {{jsxref("BeforeInstallPromptEvent", "BeforeInstallPromptEvent.platform")}} {{experimental_inline}})

## Examples

```js
let isTooSoon = true;
window.addEventListener("beforeinstallprompt", (e) => {
  if (isTooSoon) {
    e.preventDefault(); // Prevents prompt display
    // Prompt later instead:
    setTimeout(() => {
      isTooSoon = false;
      e.prompt(); // Throws if called more than once or default not prevented
    }, 10000);
  }

  // The event was re-dispatched in response to our request
  // …
});
```

## Browser compatibility

{{Compat}}

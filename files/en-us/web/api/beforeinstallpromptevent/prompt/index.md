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

A {{jsxref("Promise")}} resolving to an object containing:

- `userChoice` {{experimental_inline}}
  - : A string, either `"accepted"` or `"dismissed"`, reflecting the {{jsxref("BeforeInstallPromptEvent.userChoice")}} property.

- `platform` {{non-standard_inline}}
  - : A string containing the selected platform, reflecting the {{jsxref("BeforeInstallPromptEvent.platform")}} property.

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

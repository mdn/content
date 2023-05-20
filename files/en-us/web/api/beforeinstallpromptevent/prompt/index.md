---
title: "BeforeInstallPromptEvent: prompt() method"
short-title: prompt()
slug: Web/API/BeforeInstallPromptEvent/prompt
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.BeforeInstallPromptEvent.prompt
---

{{APIRef}}{{SeeCompatTable}}

The **`prompt()`** method of the
{{domxref("BeforeInstallPromptEvent")}} interface allows a developer to show the
install prompt at a time of their own choosing.

## Syntax

```js-nolint
prompt()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} resolving to an object containing:

- `userChoice` {{experimental_inline}}

  - : A string, either `"accepted"` or `"dismissed"`, reflecting the {{domxref("BeforeInstallPromptEvent.userChoice")}} property.

- `platform` {{non-standard_inline}}
  - : A string containing the selected platform, reflecting the {{domxref("BeforeInstallPromptEvent.platform")}} property.

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

---
title: BeforeInstallPromptEvent.prompt()
slug: Web/API/BeforeInstallPromptEvent/prompt
tags:
  - API
  - BeforeInstallPromptEvent
  - Experimental
  - Method
  - Reference
  - prompt
browser-compat: api.BeforeInstallPromptEvent.prompt
---
The **`prompt()`** method of the
{{domxref("BeforeInstallPromptEvent")}} interface allows a developer to show the
install prompt at a time of their own choosing.

## Syntax

```js
BeforeInstallPromptEvent.prompt()
```

### Parameters

None.

### Returns

An empty {{jsxref("Promise")}}.

## Example

    var isTooSoon = true;
    window.addEventListener("beforeinstallprompt", function(e) {
      if (isTooSoon) {
        e.preventDefault(); // Prevents prompt display
        // Prompt later instead:
        setTimeout(function() {
          isTooSoon = false;
          e.prompt(); // Throws if called more than once or default not prevented
        }, 10000);
      }

      // The event was re-dispatched in response to our request
      // ...
    });

## Browser compatibility

{{Compat}}

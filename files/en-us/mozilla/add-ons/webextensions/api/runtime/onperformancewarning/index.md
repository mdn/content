---
title: runtime.onPerformanceWarning
slug: Mozilla/Add-ons/WebExtensions/API/runtime/onPerformanceWarning
page-type: webextension-api-event
browser-compat: webextensions.api.runtime.onPerformanceWarning
---

{{AddonSidebar}}

This event fires when a runtime performance issue is detected for the extension. Observe this event to be notified of runtime performance problems with your extension.

## Syntax

```js-nolint
browser.runtime.onPerformanceWarning.addListener(listener)
browser.runtime.onPerformanceWarning.removeListener(listener)
browser.runtime.onPerformanceWarning.hasListener(listener)
```

Events have three functions:

- `addListener(listener)`
  - : Adds a listener to this event.
- `removeListener(listener)`
  - : Stop listening to this event. The `listener` argument is the listener to remove.
- `hasListener(listener)`
  - : Checks whether at least one listener is registered for this event. Returns `true` if it is listening, `false` otherwise.

## addListener syntax

### Parameters

- `listener`

  - : The function called when this event occurs. The function is passed this argument:

    - `details`

      - : `object`. An object with the following properties:

        - `category`
          - : {{WebExtAPIRef("runtime.OnPerformanceWarningCategory")}}. The category of the warning.
        - `severity`
          - : {{WebExtAPIRef("runtime.OnPerformanceWarningSeverity")}}. The severity of the warning.
        - `tabId` {{optional_inline}}
          - : `integer`. The ID of the tab that the performance warning relates to, if any.
        - `description`
          - : `string`. An explanation of what the warning means, possibly with information on how to address it.

## Examples

```js
function handlePerformanceWarning(details) {
  console.log(`Performance warning: ${details.description}`);
}

browser.runtime.onPerformanceWarning.addListener(handlePerformanceWarning);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}

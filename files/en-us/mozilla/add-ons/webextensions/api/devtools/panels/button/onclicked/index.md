---
title: devtools.panels.Button.onClicked
slug: Mozilla/Add-ons/WebExtensions/API/devtools/panels/Button/onClicked
page-type: webextension-api-event
browser-compat: webextensions.api.devtools.panels.Buttom.onClicked
---

{{AddonSidebar()}}

Fires when the button is clicked.

## Syntax

```js-nolint
browser.devtools.panels.Buttom.onSelectionChanged.addListener(listener)
browser.devtools.panels.Buttom.onSelectionChanged.removeListener(listener)
browser.devtools.panels.Buttom.onSelectionChanged.hasListener(listener)
```

Events have three functions:

- `addListener(listener)`
  - : Adds a listener to this event.
- `removeListener(listener)`
  - : Stop listening to this event. The `listener` argument is the listener to remove.
- `hasListener(listener)`
  - : Check whether `listener` is registered for this event. Returns `true` if it is listening, `false` otherwise.

## addListener syntax

### Parameters

- `listener`
  - : The function called when this event occurs. The function is passed no arguments.

{{WebExtExamples("h2")}}

## Browser compatibility

{{Compat}}

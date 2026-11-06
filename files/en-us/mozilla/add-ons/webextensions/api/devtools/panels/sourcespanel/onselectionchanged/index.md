---
title: devtools.panels.SourcesPanel.onSelectionChanged
slug: Mozilla/Add-ons/WebExtensions/API/devtools/panels/SourcesPanel/onSelectionChanged
page-type: webextension-api-event
browser-compat: webextensions.api.devtools.panels.SourcesPanel.onSelectionChanged
---

{{AddonSidebar()}}

Fires when an object is selected in the panel.

## Syntax

```js-nolint
browser.devtools.panels.sources.onSelectionChanged.addListener(listener)
browser.devtools.panels.sources.onSelectionChanged.removeListener(listener)
browser.devtools.panels.sources.onSelectionChanged.hasListener(listener)
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

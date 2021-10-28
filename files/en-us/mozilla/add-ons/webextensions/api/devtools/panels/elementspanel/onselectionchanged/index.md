---
title: onSelectionChanged
slug: >-
  Mozilla/Add-ons/WebExtensions/API/devtools/panels/ElementsPanel/onSelectionChanged
tags:
  - API
  - Add-ons
  - DevTools
  - Event
  - Extensions
  - Reference
  - WebExtensions
  - devtools.panels
  - devtools.panelsElementsPanel
browser-compat: webextensions.api.devtools.panels.ElementsPanel.onSelectionChanged
---
{{AddonSidebar()}}

Fires when the user selects a different page element for inspection with the browser's developer tools, for example by selecting the "Inspect Element" context menu item in Firefox.

## Syntax

```js
browser.devtools.panels.elements.onSelectionChanged.addListener(listener)
browser.devtools.panels.elements.onSelectionChanged.removeListener(listener)
browser.devtools.panels.elements.onSelectionChanged.hasListener(listener)
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

- `callback`
  - : Function that will be called when this event occurs. The function will be passed no arguments.

## Browser compatibility

{{Compat}}

## Examples

Listen for selection changed events, and log the text content of the newly selected element:

```js
function handleSelectedElement() {
  browser.devtools.inspectedWindow.eval("$0.textContent")
    .then((result) => {
      console.log(result[0]);
    });
}

browser.devtools.panels.elements.onSelectionChanged.addListener(handleSelectedElement);
```

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.devtools`](https://developer.chrome.com/extensions/devtools) API.

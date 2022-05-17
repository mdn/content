---
title: devtools.panels.ExtensionSidebarPane.onHidden
slug: >-
  Mozilla/Add-ons/WebExtensions/API/devtools/panels/ExtensionSidebarPane/onHidden
tags:
  - API
  - Add-ons
  - ExtensionSidebarPane
  - Extensions
  - Event
  - Reference
  - WebExtensions
  - devtools.panels
  - onHidden
browser-compat: webextensions.api.devtools.panels.ExtensionSidebarPane.onHidden
---
{{AddonSidebar()}}

Called when the sidebar pane becomes hidden, as a result of the user switching away from it.

## Syntax

```js
browser.devtools.panels.onHidden.addListener(listener)
browser.devtools.panels.onHidden.removeListener(listener)
browser.devtools.panels.onHidden.hasListener(listener)
```

Events have three functions:

- `addListener(callback)`
  - : Adds a listener to this event.
- `removeListener(listener)`
  - : Stops listening to this event. The `listener` argument is the listener to remove.
- `hasListener(listener)`
  - : Checks whether `listener` is registered for this event. Returns `true` if it is listening, and `false` otherwise.

## addListener syntax

### Parameters

- `callback`
  - : Function called when this event occurs. This function will be passed no arguments.

## Browser compatibility

{{Compat}}

## Examples

Create a sidebar pane, and log show and hide events.

```js
function onCreated(sidebarPane) {

  sidebarPane.onShown.addListener(() => {
    console.log("Shown");
  });

  sidebarPane.onHidden.addListener(() => {
    console.log("Hidden");
  });

}

browser.devtools.panels.elements.createSidebarPane("My pane").then(onCreated);
```

{{WebExtExamples}}

> **Note:** This API is based on Chromium's [`chrome.devtools.panels`](https://developer.chrome.com/docs/extensions/reference/devtools_panels/) API.

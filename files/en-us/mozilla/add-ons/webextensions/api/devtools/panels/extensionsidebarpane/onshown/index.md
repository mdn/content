---
title: devtools.panels.ExtensionSidebarPane.onShown
slug: Mozilla/Add-ons/WebExtensions/API/devtools/panels/ExtensionSidebarPane/onShown
tags:
  - API
  - Add-ons
  - ExtensionSidebarPane
  - Extensions
  - Event
  - Reference
  - WebExtensions
  - devtools.panels
  - onShown
browser-compat: webextensions.api.devtools.panels.ExtensionSidebarPane.onShown
---
{{AddonSidebar()}}

Fired when the sidebar pane becomes visible as a result of the user switching to it.

## Syntax

```js
browser.devtools.panels.onShown.addListener(listener)
browser.devtools.panels.onShown.removeListener(listener)
browser.devtools.panels.onShown.hasListener(listener)
```

Events have three functions:

- `addListener(callback)`
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

> **Note:** This API is based on Chromium's [`chrome.devtools.panels`](https://developer.chrome.com/extensions/devtools_panels) API.

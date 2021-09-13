---
title: Window.onappinstalled
slug: Web/API/Window/onappinstalled
tags:
  - API
  - Event Handler
  - Manifest
  - Deprecated
  - Property
  - Reference
  - Window
  - onappinstalled
  - web manifest
browser-compat: api.Window.onappinstalled
---
{{deprecated_header}}

The **`onappinstalled`** attribute of the {{domxref("Window")}}
object serves as an event handler for the {{Event("appinstalled")}} event, which is
dispatched once the web application is successfully installed as a [progressive web app](/en-US/Apps/Progressive). The event that is fired is a
"simple event" that implements the {{domxref("Event")}} interface.

## Syntax

```js
window.onappinstalled = function(event) { ... };
```

## Example

```js
window.onappinstalled = function(ev) {
  console.log('The application was installed.');
};
```

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Event")}}

---
title: 'Window: offline event'
slug: Web/API/Window/offline_event
page-type: web-api-event
tags:
  - API
  - Event
  - Offline
  - Reference
  - Window
browser-compat: api.Window.offline_event
---
{{APIRef}}

The **`offline`** event of the {{domxref("Window")}} interface is fired when the browser has lost access to the network and the value of {{domxref("Navigator.onLine")}} switches to `false`.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('offline', (event) => { });
onoffline = (event) => { };
```

## Event type

A generic {{domxref("Event")}}.

## Event handler aliases

In addition to the `Window` interface, the event handler property `onoffline` is also available on the following targets:

- {{domxref("HTMLBodyElement")}}
- {{domxref("HTMLFrameSetElement")}}
- {{domxref("SVGSVGElement")}}

## Examples

```js
// addEventListener version
window.addEventListener('offline', (event) => {
    console.log("The network connection has been lost.");
});

// onoffline version
window.onoffline = (event) => {
  console.log("The network connection has been lost.");
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`online`](/en-US/docs/Web/API/Window/online_event)

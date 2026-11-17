---
title: "Window: offline event"
short-title: offline
slug: Web/API/Window/offline_event
page-type: web-api-event
browser-compat: api.Window.offline_event
---

{{APIRef("HTML DOM")}}

The **`offline`** event of the {{domxref("Window")}} interface is fired when the browser has lost access to the network and the value of {{domxref("Navigator.onLine")}} switches to `false`.

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("offline", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
onoffline = (event) => { }
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
window.addEventListener("offline", (event) => {
  console.log("The network connection has been lost.");
});

// onoffline version (but note that this replaces other event listeners
// added using onoffline, if any)
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

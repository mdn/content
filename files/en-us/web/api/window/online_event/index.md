---
title: "Window: online event"
short-title: online
slug: Web/API/Window/online_event
page-type: web-api-event
browser-compat: api.Window.online_event
---

{{APIRef}}

The **`online`** event of the {{domxref("Window")}} interface is fired when the browser has gained access to the network and the value of {{domxref("Navigator.onLine")}} switches to `true`.

> [!NOTE]
> This event shouldn't be used to determine the availability of a particular website. Network problems or firewalls might still prevent the website from being reached.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("online", (event) => {});
ononline = (event) => {};
```

## Event type

A generic {{domxref("Event")}}.

## Event handler aliases

In addition to the `Window` interface, the event handler property `ononline` is also available on the following targets:

- {{domxref("HTMLBodyElement")}}
- {{domxref("HTMLFrameSetElement")}}
- {{domxref("SVGSVGElement")}}

## Examples

```js
// addEventListener version
window.addEventListener("online", (event) => {
  console.log("You are now connected to the network.");
});

// ononline version
window.ononline = (event) => {
  console.log("You are now connected to the network.");
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`offline`](/en-US/docs/Web/API/Window/offline_event)

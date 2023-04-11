---
title: "Node: selectstart event"
short-title: selectstart
slug: Web/API/Node/selectstart_event
page-type: web-api-event
browser-compat: api.Node.selectstart_event
---

{{APIRef}}

The **`selectstart`** event of the [Selection API](/en-US/docs/Web/API/Selection) is fired when a user starts a new selection.

If the event is canceled, the selection is not changed.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("selectstart", (event) => {});

onselectstart = (event) => {};
```

## Event type

A generic {{domxref("Event")}}.

## Examples

```js
// addEventListener version
document.addEventListener("selectstart", () => {
  console.log("Selection started");
});

// onselectstart version
document.onselectstart = () => {
  console.log("Selection started.");
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Document/selectionchange_event", "selectionchange")}}

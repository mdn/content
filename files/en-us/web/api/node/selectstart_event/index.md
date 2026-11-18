---
title: "Node: selectstart event"
short-title: selectstart
slug: Web/API/Node/selectstart_event
page-type: web-api-event
browser-compat: api.Node.selectstart_event
---

{{APIRef("Selection API")}}

The **`selectstart`** event of the [Selection API](/en-US/docs/Web/API/Selection) is fired when a user starts a new selection.

If the event is canceled, the selection is not changed.

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("selectstart", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
onselectstart = (event) => { }
```

## Event type

A generic {{domxref("Event")}}.

## Examples

```js
// addEventListener version
document.addEventListener("selectstart", () => {
  console.log("Selection started");
});

// onselectstart version (but note that this replaces other event listeners
// added using onselectstart, if any)
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

---
title: "HTMLTextAreaElement: selectionchange event"
short-title: selectionchange
slug: Web/API/HTMLTextAreaElement/selectionchange_event
page-type: web-api-event
browser-compat: api.HTMLTextAreaElement.selectionchange_event
---

{{APIRef("Selection API")}}

The **`selectionchange`** event of the [Selection API](/en-US/docs/Web/API/Selection) is fired when the text selection within a {{HTMLElement("textarea")}} element is changed in either extent or direction, whether the selection is a caret or a range of characters.

For general information about this event, see [`HTMLInputElement`: `selectionchange` event](/en-US/docs/Web/API/HTMLInputElement/selectionchange_event).

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("selectionchange", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
onselectionchange = (event) => { }
```

## Event type

A generic {{domxref("Event")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

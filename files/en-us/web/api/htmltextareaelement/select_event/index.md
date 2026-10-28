---
title: "HTMLTextAreaElement: select event"
short-title: select
slug: Web/API/HTMLTextAreaElement/select_event
page-type: web-api-event
browser-compat: api.HTMLTextAreaElement.select_event
---

{{APIRef("HTML DOM")}}

The **`select`** event of the {{domxref("HTMLTextAreaElement")}} interface fires when the selection's extent or direction is changed programmatically, or when the user selects text.

For general information about this event, see [`HTMLInputElement`: `select` event](/en-US/docs/Web/API/HTMLInputElement/select_event).

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("select", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
onselect = (event) => { }
```

## Event type

A generic {{domxref("Event")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

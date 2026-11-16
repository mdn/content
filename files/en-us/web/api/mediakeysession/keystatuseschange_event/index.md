---
title: "MediaKeySession: keystatuseschange event"
short-title: keystatuseschange
slug: Web/API/MediaKeySession/keystatuseschange_event
page-type: web-api-event
browser-compat: api.MediaKeySession.keystatuseschange_event
---

{{APIRef("Encrypted Media Extensions")}}{{SecureContext_Header}}

The **`keystatuseschange`** event of the {{domxref("MediaKeySession")}} API fires when there has been a change in the keys or their statuses within a session.

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("keystatuseschange", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
onkeystatuseschange = (event) => { }
```

## Event type

An {{domxref("ExtendableEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("ExtendableEvent")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

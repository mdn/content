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

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("keystatuseschange", (event) => {});

onkeystatuseschange = (event) => {};
```

## Event type

An {{domxref("ExtendableEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("ExtendableEvent")}}

## Event properties

_Doesn't implement any specific properties, but inherits properties from its parent, {{domxref("Event")}}._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

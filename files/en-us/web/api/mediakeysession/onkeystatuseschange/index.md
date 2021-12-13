---
title: MediaKeySession.onkeystatuseschange
slug: Web/API/MediaKeySession/onkeystatuseschange
browser-compat: api.MediaKeySession.onkeystatuseschange
---
{{APIRef("Encrypted Media Extensions")}}

The **`onkeystatuseschange`** property of the {{domxref("MediaKeySession")}} is an event handler, fired whenever a {{Event("keystatuschange")}} event ocurrs, denoting there has been a change in the keys or their statuses within a session.

This interface inherits from the {{domxref("ExtendableEvent")}} interface.

{{InheritanceDiagram(700, 60, 20)}}

## Syntax

```js
MediaKeySession.onkeystatuseschange = function(keystatuschange) { /* ... */ }
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

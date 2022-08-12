---
title: PictureInPictureEvent()
slug: Web/API/PictureInPictureEvent/PictureInPictureEvent
page-type: web-api-constructor
tags:
  - Reference
  - API
  - Constructor
browser-compat: api.PictureInPictureEvent.PictureInPictureEvent
---
{{APIRef("Picture-in-Picture API")}}

The **`PictureInPictureEvent()`** constructor returns a new {{domxref("PictureInPictureEvent")}} object with an optional {{domxref("EventTarget")}}.
When the event has both a source and a destination, the `relatedTarget` value must be set to the other target.

## Syntax

```js
new PictureInPictureEvent(type, options)
```

### Parameters

- `type`
  - : A string representing the name of the event.
- `options`
  - : An object that, _in addition of the properties defined in {{domxref("Event/Event", "Event()")}}_, can have the following properties:
    - `relatedTarget` {{optional_inline}}
      - : The related {{domxref("EventTarget")}}, or `null` (its default value).

### Return value

A new {{domxref("PictureInPictureEvent")}} object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("PictureInPictureEvent")}} interface it belongs to.

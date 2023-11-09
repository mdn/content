---
title: "PictureInPictureEvent: PictureInPictureEvent() constructor"
short-title: PictureInPictureEvent()
slug: Web/API/PictureInPictureEvent/PictureInPictureEvent
page-type: web-api-constructor
browser-compat: api.PictureInPictureEvent.PictureInPictureEvent
---

{{APIRef("Picture-in-Picture API")}}

The **`PictureInPictureEvent()`** constructor returns a new {{domxref("PictureInPictureEvent")}} object.

## Syntax

```js-nolint
new PictureInPictureEvent(type, options)
```

### Parameters

- `type`
  - : A string representing the name of the event. It is case-sensitive and browsers set it to `enterpictureinpicture`, `leavepictureinpicture`, or `resize`.
- `options`
  - : An object that, _in addition of the properties defined in {{domxref("Event/Event", "Event()")}}_, can have the following properties:
    - `pictureInPictureWindow`
      - : A {{domxref("PictureInPictureWindow")}}.

### Return value

A new {{domxref("PictureInPictureEvent")}} object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("PictureInPictureEvent")}} interface it belongs to.

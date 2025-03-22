---
title: PictureInPictureEvent
slug: Web/API/PictureInPictureEvent
page-type: web-api-interface
browser-compat: api.PictureInPictureEvent
---

{{APIRef("Picture-in-Picture API")}}

The **`PictureInPictureEvent`** interface represents picture-in-picture-related events, including {{domxref("HTMLVideoElement/enterpictureinpicture_event", "enterpictureinpicture")}}, {{domxref("HTMLVideoElement/leavepictureinpicture_event", "leavepictureinpicture")}} and {{domxref("PictureInPictureWindow/resize_event", "resize")}}.

{{InheritanceDiagram}}

## Constructor

- {{domxref("PictureInPictureEvent.PictureInPictureEvent", "PictureInPictureEvent()")}}
  - : Creates a `PictureInPictureEvent` event with the given parameters.

## Instance properties

_This interface also inherits properties from its parent {{domxref("Event")}}_.

- {{domxref("PictureInPictureEvent.pictureInPictureWindow")}}
  - : Returns the {{domxref("PictureInPictureWindow")}} the event relates to.

## Instance methods

_This interface also inherits methods from its parent {{domxref("Event")}}_.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("Event")}} base interface

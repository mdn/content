---
title: "FontFaceSetLoadEvent: FontFaceSetLoadEvent() constructor"
short-title: FontFaceSetLoadEvent()
slug: Web/API/FontFaceSetLoadEvent/FontFaceSetLoadEvent
page-type: web-api-constructor
browser-compat: api.FontFaceSetLoadEvent.FontFaceSetLoadEvent
---

{{APIRef("CSS Font Loading API")}}{{AvailableInWorkers}}

The **`FontFaceSetLoadEvent()`** constructor creates a new
{{domxref("FontFaceSetLoadEvent")}} object which is fired whenever a
{{domxref("FontFaceSet")}} loads.

## Syntax

```js-nolint
new FontFaceSetLoadEvent(type)
new FontFaceSetLoadEvent(type, options)
```

### Parameters

- `type`
  - : A string with the name of the event.
    It is case-sensitive and browsers always set it to `loading`, `loadingdone`, or `loadingerror`.
- `options` {{optional_inline}}
  - : An object that, _in addition of the properties defined in {{domxref("Event/Event", "Event()")}}_, can have the following properties:
    - `fontfaces` {{optional_inline}}
      - : An array of {{domxref("FontFace")}} instances. It defaults to the empty array.

### Return value

A new {{domxref("FontFaceSetLoadEvent")}} object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

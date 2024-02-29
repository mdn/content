---
title: "TextFormatUpdateEvent: TextFormatUpdateEvent() constructor"
short-title: TextFormatUpdateEvent()
slug: Web/API/TextFormatUpdateEvent/TextFormatUpdateEvent
page-type: web-api-constructor
status:
  - experimental
browser-compat: api.TextFormatUpdateEvent.TextFormatUpdateEvent
---

{{APIRef("TextFormatUpdateEvent API")}}{{SeeCompatTable}}

The **`TextFormatUpdateEvent()`** constructor returns a new {{DOMxRef("TextFormatUpdateEvent")}} object.

## Syntax

```js-nolint
new TextFormatUpdateEvent(type)
new TextFormatUpdateEvent(type, options)
```

### Parameters

- `type`
  - : A string representing the type of the event. Possible values: `"textformatupdate"`.
- `options` {{optional_inline}}
  - : An optional object with the following properties:
    - `textFormats`
      - : An {{jsxref("Array")}} of {{domxref("TextFormat")}} objects representing the text formats that need to be applied with this event.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{DOMxRef("TextFormatUpdateEvent")}} interface it belongs to.

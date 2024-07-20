---
title: "CharacterBoundsUpdateEvent: CharacterBoundsUpdateEvent() constructor"
short-title: CharacterBoundsUpdateEvent()
slug: Web/API/CharacterBoundsUpdateEvent/CharacterBoundsUpdateEvent
page-type: web-api-constructor
status:
  - experimental
browser-compat: api.CharacterBoundsUpdateEvent.CharacterBoundsUpdateEvent
---

{{APIRef("CharacterBoundsUpdateEvent API")}}{{SeeCompatTable}}

The **`CharacterBoundsUpdateEvent()`** constructor returns a new {{DOMxRef("CharacterBoundsUpdateEvent")}} object.

## Syntax

```js-nolint
new CharacterBoundsUpdateEvent(type)
new CharacterBoundsUpdateEvent(type, options)
```

### Parameters

- `type`
  - : A string representing the type of the event. Possible values: `"characterboundsupdate"`.
- `options` {{optional_inline}}
  - : An optional object with the following properties:
    - `rangeStart`
      - : A number to set the offset of the first character within the editable text region which this event applies to.
    - `rangeEnd`
      - : A number to set the offset of the last character within the editable text region which this event applies to.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{DOMxRef("CharacterBoundsUpdateEvent")}} interface it belongs to.

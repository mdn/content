---
title: "TextUpdateEvent: TextUpdateEvent() constructor"
short-title: TextUpdateEvent()
slug: Web/API/TextUpdateEvent/TextUpdateEvent
page-type: web-api-constructor
status:
  - experimental
browser-compat: api.TextUpdateEvent.TextUpdateEvent
---

{{APIRef("TextUpdateEvent API")}}{{SeeCompatTable}}

The **`TextUpdateEvent()`** constructor returns a new {{DOMxRef("TextUpdateEvent")}} object.

## Syntax

```js-nolint
new TextUpdateEvent(type)
new TextUpdateEvent(type, options)
```

### Parameters

- `type`
  - : A string representing the type of the event. Possible values: `"textupdate"`.
- `options` {{optional_inline}}
  - : An optional object with the following properties:
    - `updateRangeStart`
      - : A number representing the offset of the first character within the editable region text that needs to be updated.
    - `updateRangeEnd`
      - : A number representing the offset of the last character within the editable region text that needs to be updated.
    - `text`
      - : A string representing the text that needs to be inserted.
    - `selectionStart`
      - : A number representing the offset of the selection start within the editable region text.
    - `selectionEnd`
      - : A number representing the offset of the selection end within the editable region text.
    - `compositionStart`
      - : A number representing the offset of the start of the composition within the editable region text.
    - `compositionEnd`
      - : A number representing the offset of the end of the composition within the editable region text.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{DOMxRef("TextUpdateEvent")}} interface it belongs to.

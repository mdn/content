---
title: "FormDataEvent: FormDataEvent() constructor"
short-title: FormDataEvent()
slug: Web/API/FormDataEvent/FormDataEvent
page-type: web-api-constructor
browser-compat: api.FormDataEvent.FormDataEvent
---

{{APIRef("DOM")}}

The **`FormDataEvent()`** constructor creates a new {{domxref("FormDataEvent")}} object.

## Syntax

```js-nolint
new FormDataEvent(type, formEventInit)
```

### Parameters

- `type`
  - : A string with the name of the event.
    It is case-sensitive and browsers always set it to `formdata`.
- `options`
  - : An object that, _in addition of the properties defined in {{domxref("Event/Event", "Event()")}}_, can have the following properties:
    - `formData`
      - : A {{domxref("FormData")}} object to pre-populate the {{domxref("FormDataEvent")}} with.
        This would then be accessed through the {{domxref("FormDataEvent.formData")}} property.

### Return value

A new {{domxref("FormDataEvent")}} object.

## Examples

```js
const fd = new FormData();
fd.append("test", "test");

const fdEv = new FormDataEvent("formdata", { formData: fd });

for (const value of fdEv.formData.values()) {
  console.log(value);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("FormDataEvent")}}

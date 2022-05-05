---
title: FormDataEvent()
slug: Web/API/FormDataEvent/FormDataEvent
tags:
  - API
  - Constructor
  - FormDataEvent
  - Forms
  - Reference
browser-compat: api.FormDataEvent.FormDataEvent
---
{{APIRef("DOM")}}

The **`FormDataEvent()`** constructor creates a new {{domxref("FormDataEvent")}} object.

## Syntax

```js
<<<<<<< HEAD
new FormDataEvent(type)
new FormDataEvent(type, formEventInit)
=======
new FormDataEvent(type, options)
>>>>>>> d1fdc27dad (Update Event constructors)
```

### Parameters

- `type`
<<<<<<< HEAD
  - : A string representing the name of the event.
- `formEventInit` {{optional_inline}}

  - : A `FormEventInit` dictionary, which can take the following optional
    fields:

    - `bubbles`
      - : a `true` or `false` value indicating whether the event
        bubbles. The default is `false`.
    - `cancelable`
      - : a `true` or `false` value indicating whether the event
        can be cancelled. The default is `false`.
    - `composed`
      - : a `true` or `false` value indicating whether the event will
        trigger listeners outside of a shadow root (see {{domxref("Event.composed")}} for
        more details). The default is `false`.
    - `formData`
      - : A {{domxref("FormData")}} object to pre-populate the
        FormDataEvent with. This would then be accessed through the
        {{domxref("FormDataEvent.formData")}} property.
=======
  - : A string with the name of the event.
    It is case-sensitive and browsers always set it to `formdata`.
- `options`
  - : An object that, _in addition of the properties defined in {{domxref("Event/Event", "Event()")}}_, can have the following properties:
    - `formData`
      - : A {{domxref("FormData")}} object to pre-populate the {{domxref("FormDataEvent")}} with.
        This would then be accessed through the {{domxref("FormDataEvent.formData")}} property.

### Return value

A new {{domxref("FormDataEvent")}} object.
>>>>>>> d1fdc27dad (Update Event constructors)

## Examples

```js
let fd = new FormData();
fd.append('test', 'test');

let fdEv = new FormDataEvent('formdata', { formData: fd });

for (let value of fdEv.formData.values()) {
  console.log(value);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("FormDataEvent")}}

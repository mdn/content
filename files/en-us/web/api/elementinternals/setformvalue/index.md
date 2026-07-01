---
title: "ElementInternals: setFormValue() method"
short-title: setFormValue()
slug: Web/API/ElementInternals/setFormValue
page-type: web-api-instance-method
browser-compat: api.ElementInternals.setFormValue
---

{{APIRef("Web Components")}}

The **`setFormValue()`** method of the {{domxref("ElementInternals")}} interface sets the element's submission value and state, communicating these to the user agent.

## Syntax

```js-nolint
setFormValue(value)
setFormValue(value, state)
```

### Parameters

- `value`
  - : A {{domxref("File")}}, a string, or a {{domxref("FormData")}} as the value to be submitted to the server.
- `state` {{optional_inline}}
  - : A {{domxref("File")}}, a string, or a {{domxref("FormData")}} representing the input made by the user.
    This allows the application to re-display the information that the user submitted, in the form that they submitted it, if required.

> [!NOTE]
> In general, `state` is used to pass information specified by a user, the `value` is suitable for submission to a server, post sanitization.
> For example, if a custom element asked a user to submit a date, the user might enter "3/15/2019".
> This would be the `state`.
> The server expects a date format of `2019-03-15`, the date in this format would be passed as the `value`.

### Return value

Undefined.

### Exceptions

- `NotSupportedError` {{domxref("DOMException")}}
  - : Thrown if the element does not have its `formAssociated` property set to `true`.

## Examples

In the following example, a checkbox custom element sets `on` as the value to send to the server, and `checked` as the state.

```js
this.internals_.setFormValue("on", "checked");
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

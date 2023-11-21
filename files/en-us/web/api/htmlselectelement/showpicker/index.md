---
title: "HTMLSelectElement: showPicker() method"
short-title: showPicker()
slug: Web/API/HTMLSelectElement/showPicker
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.HTMLSelectElement.showPicker
---

{{ APIRef("HTML DOM") }} {{SeeCompatTable}}

The **`HTMLSelectElement.showPicker()`** method displays the browser picker for a `select` element.

This is the same picker that would normally be displayed when the element is selected, but can be triggered from a button press or other user interaction.

## Syntax

```js-nolint
showPicker()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the element is not mutable, meaning that the user cannot modify it and/or that it cannot be automatically prefilled.
- `NotAllowedError` {{domxref("DOMException")}}
  - : Thrown if not explicitly triggered by a user action such as a touch gesture or mouse click (the picker requires {{Glossary("Transient activation")}}).
- `NotSupportedError` {{domxref("DOMException")}}
  - : Thrown if the element associated with the picker is not being rendered.
- `SecurityError` {{domxref("DOMException")}}
  - : Thrown if called in a cross-origin iframe.

## Security Considerations

[Transient user activation](/en-US/docs/Web/Security/User_activation) is required.
The user has to interact with the page or a UI element in order for this feature to work.

The method is only allowed to be called in same-origin iframes; an exception is thrown if this is called in a cross-origin iframe.

## Examples

### Feature Detection

The code below shows how to check if `showPicker()` is supported:

```js
if ("showPicker" in HTMLSelectElement.prototype) {
  // showPicker() is supported.
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ HTMLElement("select") }}
- {{ domxref("HTMLSelectElement") }}

---
title: "HTMLSelectElement: showPicker() method"
short-title: showPicker()
slug: Web/API/HTMLSelectElement/showPicker
page-type: web-api-instance-method
browser-compat: api.HTMLSelectElement.showPicker
---

{{ APIRef("HTML DOM") }}

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

## Security considerations

[Transient user activation](/en-US/docs/Web/Security/User_activation) is required.
The user has to interact with the page or a UI element in order for this feature to work.

The method is only allowed to be called in same-origin iframes; an exception is thrown if this is called in a cross-origin iframe.

## Examples

### Feature detection

The code below shows how to check if `showPicker()` is supported:

```js
if ("showPicker" in HTMLSelectElement.prototype) {
  // showPicker() is supported.
}
```

### Launching the picker

This example shows how to use a button to launch the picker for a `<select>` element with two options.

#### HTML

```html
<p>
  <select>
    <option value="1">One</option>
    <option value="2">Two</option>
  </select>
  <button type="button">Show Picker</button>
</p>
```

#### JavaScript

The code gets the `<button>` and adds a listener for its `click` event.
The event handler gets the `<select>` element and calls `showPicker()` on it.

```js
const button = document.querySelector("button");
button.addEventListener("click", (event) => {
  const select = event.srcElement.previousElementSibling;
  try {
    select.showPicker();
  } catch (error) {
    window.alert(error);
  }
});
```

<!-- A live example cannot be shown here because they run in a cross-origin frame, and would cause a SecurityError -->

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ HTMLElement("select") }}
- {{ domxref("HTMLSelectElement") }}
- {{ domxref("HTMLInputElement.showPicker()") }}

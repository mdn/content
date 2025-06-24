---
title: "UIEvent: which property"
short-title: which
slug: Web/API/UIEvent/which
page-type: web-api-instance-property
status:
  - deprecated
browser-compat: api.UIEvent.which
---

{{APIRef("UI Events")}}{{Deprecated_Header}}

The **`UIEvent.which`** read-only property of the {{domxref("UIEvent")}} interface returns a number that indicates which button was pressed on the mouse, or the numeric `keyCode` or the character code (`charCode`) of the key pressed on the keyboard.

## Value

### Value for KeyboardEvent {{Non-standard_Inline}}

For {{domxref("KeyboardEvent")}}, `event.which` contains the numeric code for a particular key pressed, depending on whether an alphanumeric or non-alphanumeric key was pressed.
Please see deprecated {{domxref("KeyboardEvent.charCode")}} and {{domxref("KeyboardEvent.keyCode")}} for more details.

> [!NOTE]
> Consider {{domxref("KeyboardEvent.key")}} or {{domxref("KeyboardEvent.code")}} for new code.

### Value for MouseEvent {{Non-standard_Inline}}

For {{domxref("MouseEvent")}}, `event.which` is a number representing a given button:

- `0`: No button
- `1`: Left button
- `2`: Middle button (if present)
- `3`: Right button

For a mouse configured for left-handed use, the button actions are reversed.
In this case, the values are read from right to left.

> [!NOTE]
> Consider {{domxref("MouseEvent.button")}} for new code.

## Examples

```html
<p>Please press any key.</p>
```

```js
function showKeyPress(evt) {
  console.log(
    `onkeypress handler:\n` +
      `keyCode property: ${evt.keyCode}\n` +
      `which property: ${evt.which}\n` +
      `charCode property: ${evt.charCode}\n` +
      `Character Key Pressed: ${String.fromCharCode(evt.charCode)}\n`,
  );
}

function keyDown(evt) {
  console.log(
    `onkeydown handler:\n` +
      `keyCode property: ${evt.keyCode}\n` +
      `which property: ${evt.which}\n`,
  );
}

document.addEventListener("keypress", showKeyPress);
document.addEventListener("keydown", keyDown);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("KeyboardEvent")}}
- {{domxref("MouseEvent")}}

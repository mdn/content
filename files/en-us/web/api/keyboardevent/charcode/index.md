---
title: KeyboardEvent.charCode
slug: Web/API/KeyboardEvent/charCode
tags:
  - API
  - DOM
  - Deprecated
  - KeyboardEvent
  - Property
  - Reference
browser-compat: api.KeyboardEvent.charCode
---
{{ ApiRef("DOM Events") }} {{non-standard_header}} {{deprecated_header}}

The **`charCode`** read-only property of the
{{domxref("KeyboardEvent")}} interface returns the Unicode value of a character key
pressed during a {{Event("keypress")}} event.

> **Warning:** Do not use this property, as it is deprecated. Instead, get the
> Unicode value of the character using the {{domxref("KeyboardEvent.key", "key")}}
> property.

## Syntax

```js
var code = event.charCode;
```

### Return value

A number that represents the Unicode value of the character key that was pressed.

## Example

### HTML

```html
<p>Type anything into the input box below to log a <code>charCode</code>.</p>
<input type="text" />
<p id="log"></p>
```

### JavaScript

```js
let input = document.querySelector('input');
let log = document.querySelector('#log');

input.addEventListener('keypress', function(e) {
  log.innerText = `Key pressed: ${String.fromCharCode(e.charCode)}\ncharCode: ${e.charCode}`;
});
```

### Result

{{EmbedLiveSample("Example")}}

## Notes

- In a {{Event("keypress")}} event, the Unicode value of the key pressed is stored in
  either the {{ domxref("KeyboardEvent.keyCode", "keyCode") }} or `charCode`
  property, but never both. If the key pressed generates a character (e.g., 'a'),
  `charCode` is set to the code of that character; `charCode`
  respects the letter case (in other words, `charCode` takes into account
  whether the

  <kbd>shift</kbd>

  key is held down). Otherwise, the code of the pressed key
  is stored in `keyCode`.

- When one or more modifier keys are pressed, there are some complex rules for
  `charCode`. See [Gecko Keypress Event](/en-US/docs/Gecko_Keypress_Event)
  for details.
- `charCode` is never set in the {{Event("keydown")}} and
  {{Event("keyup")}} events. In these cases, `keyCode` is set instead.
- To get the code of the key regardless of whether it was stored in
  `keyCode` or `charCode`, query the {{
    domxref("KeyboardEvent.which", "which") }} property.
- Characters entered through an IME do not register through `keyCode` or
  `charCode`.
- For a list of the `charCode` values associated with particular keys, run
  [Example
  7: Displaying Event Object Properties](/en-US/docs/Web/API/Document_Object_Model/Examples#example_7:_displaying_event_object_properties) and view the resulting HTML table.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

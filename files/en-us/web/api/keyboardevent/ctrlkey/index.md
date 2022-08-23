---
title: KeyboardEvent.ctrlKey
slug: Web/API/KeyboardEvent/ctrlKey
page-type: web-api-instance-property
tags:
  - API
  - DOM
  - KeyboardEvent
  - Property
  - Read-only
  - Reference
browser-compat: api.KeyboardEvent.ctrlKey
---
{{APIRef("UI Events")}}

The **`KeyboardEvent.ctrlKey`** read-only property returns a
boolean value that indicates if the <kbd>control</kbd> key was pressed
(`true`) or not (`false`) when the event occurred.

## Value

A boolean value.

## Examples

```html
<html lang="en">
  <head>
    <title>ctrlKey example</title>
    <script>
      function showChar(e) {
        alert(`Key Pressed: ${e.key}\nCTRL key pressed: ${e.ctrlKey}\n`);
      }
    </script>
  </head>
  <body onkeypress="showChar(event);">
    <p>
      Press any character key, with or without holding down the CTRL key.<br />
      You can also use the SHIFT key together with the CTRL key.
    </p>
  </body>
</html>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ domxref("KeyboardEvent") }}

---
title: "KeyboardEvent: shiftKey property"
short-title: shiftKey
slug: Web/API/KeyboardEvent/shiftKey
page-type: web-api-instance-property
browser-compat: api.KeyboardEvent.shiftKey
---

{{APIRef("UI Events")}}

The **`KeyboardEvent.shiftKey`** read-only property is a
boolean value that indicates if the <kbd>shift</kbd> key was pressed
(`true`) or not (`false`) when the event occurred.

The pressing of the shift key may change the {{domxref("KeyboardEvent/key", "key")}} of the event too. For example, pressing <kbd>B</kbd> generates `key: "b"`, while simultaneously pressing <kbd>Shift</kbd> generates `key: "B"`.

## Value

A boolean value.

## Examples

```html
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>shiftKey example</title>

    <script>
      function showChar(e) {
        alert(
          "Key Pressed: " +
            String.fromCharCode(e.charCode) +
            "\n" +
            "charCode: " +
            e.charCode +
            "\n" +
            "SHIFT key pressed: " +
            e.shiftKey +
            "\n" +
            "ALT key pressed: " +
            e.altKey +
            "\n",
        );
      }
    </script>
  </head>

  <body onkeypress="showChar(event);">
    <p>
      Press any character key, with or without holding down the SHIFT key.<br />
      You can also use the SHIFT key together with the ALT key.
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

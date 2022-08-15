---
title: KeyboardEvent.altKey
slug: Web/API/KeyboardEvent/altKey
page-type: web-api-instance-property
tags:
  - API
  - DOM
  - KeyboardEvent
  - Property
  - Read-only
  - Reference
browser-compat: api.KeyboardEvent.altKey
---
{{APIRef("UI Events")}}

The **`KeyboardEvent.altKey`** read-only property is a
boolean value that indicates if the <kbd>alt</kbd> key (<kbd>Option</kbd> or <kbd>⌥</kbd> on macOS) was pressed (`true`) or not (`false`) when
the event occurred.

## Value

A boolean value.

## Examples

```html
<!doctype HTML>
<html lang="en-US">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>altKey example</title>

<script>

function showChar(e){
  alert(
    "Key KeyDown: " + String.fromCharCode(e.charCode) + "\n"
    + "charCode: " + e.charCode + "\n"
    + "ALT key KeyDown: " + e.altKey + "\n"
  );
}

</script>
</head>

<body onkeydown="showChar(event);">
<p>
Press any character key,
with or without holding down the ALT key.<br />
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

---
title: KeyboardEvent.altKey
slug: Web/API/KeyboardEvent/altKey
tags:
  - API
  - DOM
  - KeyboardEvent
  - Property
  - Read-only
  - Reference
browser-compat: api.KeyboardEvent.altKey
---
{{APIRef("DOM Events")}}

The **`KeyboardEvent.altKey`** read-only property is a
boolean value that indicates if the <kbd>alt</kbd> key (<kbd>Option</kbd> or <kbd>⌥</kbd> on OS X) was pressed (`true`) or not (`false`) when
the event occurred.

## Syntax

```js
var altKeyPressed = instanceOfKeyboardEvent.altKey
```

### Return value

A boolean value

## Examples

```js
<html>
<head>
<title>altKey example</title>

<script type="text/javascript">

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

---
title: KeyboardEvent.shiftKey
slug: Web/API/KeyboardEvent/shiftKey
tags:
  - API
  - DOM
  - KeyboardEvent
  - Property
  - Read-only
  - Reference
browser-compat: api.KeyboardEvent.shiftKey
---
{{APIRef("DOM Events")}}

The **`KeyboardEvent.shiftKey`** read-only property is a
boolean value that indicates if the <kbd>shift</kbd> key was pressed
(`true`) or not (`false`) when the event occurred.

## Syntax

```js
var shiftKeyPressed = instanceOfKeyboardEvent.shiftKey
```

### Return value

A boolean value

## Example

```js
<html>
<head>
<title>shiftKey example</title>

<script type="text/javascript">

function showChar(e){
  alert(
    "Key Pressed: " + String.fromCharCode(e.charCode) + "\n"
    + "charCode: " + e.charCode + "\n"
    + "SHIFT key pressed: " + e.shiftKey + "\n"
    + "ALT key pressed: " + e.altKey + "\n"
  );
}

</script>
</head>

<body onkeypress="showChar(event);">
<p>Press any character key, with or without holding down
 the SHIFT key.<br />
You can also use the SHIFT key together with the ALT key.</p>
</body>
</html>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ domxref("KeyboardEvent") }}

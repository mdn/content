---
title: KeyboardEvent.ctrlKey
slug: Web/API/KeyboardEvent/ctrlKey
tags:
  - API
  - DOM
  - KeyboardEvent
  - Property
  - Read-only
  - Reference
browser-compat: api.KeyboardEvent.ctrlKey
---
{{APIRef("DOM Events")}}

The **`KeyboardEvent.ctrlKey`** read-only property returns a
boolean value that indicates if the <kbd>control</kbd> key was pressed
(`true`) or not (`false`) when the event occurred.

## Syntax

```js
var ctrlKeyPressed = instanceOfKeyboardEvent.ctrlKey
```

### Return value

A boolean value

## Example

```js
<html>
<head>
<title>ctrlKey example</title>

<script type="text/javascript">

function showChar(e){
  alert(
    "Key Pressed: " + e.key + "\n"
    + "CTRL key pressed: " + e.ctrlKey + "\n"
  );
}

</script>
</head>

<body onkeypress="showChar(event);">
<p>Press any character key, with or without holding down the CTRL key.<br />
You can also use the SHIFT key together with the CTRL key.</p>
</body>
</html>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ domxref("KeyboardEvent") }}

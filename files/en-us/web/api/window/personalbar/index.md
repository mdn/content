---
title: Window.personalbar
slug: Web/API/Window/personalbar
tags:
  - API
  - HTML DOM
  - NeedsExample
  - NeedsMarkupWork
  - Property
  - Reference
  - Window
browser-compat: api.Window.personalbar
---
{{APIRef}}

Returns the `personalbar` object, whose visibility can be toggled in the
window.

## Syntax

```js
objRef = window.personalbar
```

## Example

The following complete HTML example shows the way that the
visible property of the various "bar" objects is used.

```html
<!DOCTYPE html>
<html>
<head>
<title>Various DOM Tests</title>

<script>
// changing bar states on the existing window
var isVisible = window.personalbar.visible
</script>

</head>
<body>
  <p>Various DOM Tests</p>
</body>
</html>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("window.locationbar")}}, {{domxref("window.menubar")}},
  {{domxref("window.scrollbars")}}, {{domxref("window.statusbar")}},
  {{domxref("window.toolbar")}}

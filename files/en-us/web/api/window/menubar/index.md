---
title: Window.menubar
slug: Web/API/Window/menubar
page-type: web-api-instance-property
tags:
  - API
  - HTML DOM
  - Property
  - Reference
  - Window
browser-compat: api.Window.menubar
---
{{ APIRef() }}

The **`Window.menubar`** property returns the
`menubar` object, whose visibility can be checked.

## Value

A `menubar` object.

## Examples

The following complete HTML example demonstrates how the `visible` property
of the `menubar` object is used.

```html
<html lang="en">
  <head>
    <title>Various DOM Tests</title>
    <script>
      const visible = window.menubar.visible;
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

- {{domxref("Window.locationbar")}}
- {{domxref("Window.personalbar")}}
- {{domxref("Window.scrollbars")}}
- {{domxref("Window.statusbar")}}
- {{domxref("Window.toolbar")}}

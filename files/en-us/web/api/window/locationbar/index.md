---
title: Window.locationbar
slug: Web/API/Window/locationbar
page-type: web-api-instance-property
tags:
  - API
  - HTML DOM
  - NeedsExample
  - NeedsMarkupWork
  - Property
  - Reference
  - Window
browser-compat: api.Window.locationbar
---
{{APIRef}}

Returns the `locationbar` object, whose visibility can be checked.

## Value

A `locationbar` object.

## Examples

The following complete HTML example shows how the `visible` property of the
`locationbar` object is used.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Various DOM Tests</title>

      <script>
        const visible = window.locationbar.visible;
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
  {{domxref("window.personalbar")}}, {{domxref("window.scrollbars")}},
  {{domxref("window.statusbar")}}, {{domxref("window.toolbar")}}

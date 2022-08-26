---
title: Document.msCapsLockWarningOff
slug: Web/API/Document/msCapsLockWarningOff
page-type: web-api-instance-property
tags:
  - Property
  - Non-standard
---
{{APIRef("DOM")}}

{{Non-standard_header()}}

The **`msCapsLockWarningOff`** read/write property turns automatic caps lock warning on or off for validated password input fields.

This proprietary property is specific to Internet Explorer and Microsoft Edge.

Starting with Internet Explorer 10, input type=password fields will automatically display a warning if the caps lock is on. This property enables this warning to be disabled.

## Syntax

```js
document.msCapsLockWarningOff = true;
```

## Value

Type: **boolean**

_False_: Default. Automatic caps lock warning is turned on.

_True_: Automatic caps lock warning is turned off.

## Example

Fiddle: <https://jsfiddle.net/jonathansampson/mqcHA/1/>

## Example 2

```html
<html lang="en">
  <head>
    <title>msCapsLockWarningOff example</title>
    <script>
      function capsOff() {
        if (!document.msCapsLockWarningOff) {
          document.msCapsLockWarningOff = true;
          document.getElementById("caps").innerHTML = "Warning off";
        } else {
          document.msCapsLockWarningOff = false;
          document.getElementById("caps").innerHTML = "Warning on";
        }
      }
    </script>
  </head>
  <body>
    <div>
      <label>Type a password: <input type="password" name="password" /></label>
    </div>
    <div>
      <button id="caps" onclick="capsOff();">Warning off</button>
    </div>
  </body>
</html>
```

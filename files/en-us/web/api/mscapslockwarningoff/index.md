---
title: msCapsLockWarningOff
slug: Web/API/msCapsLockWarningOff
---
{{APIRef("HTML DOM")}}

{{Non-standard_header()}}

The **`msCapsLockWarningOff`** read/write property turns automatic caps lock warning on or off for validated password input fields.

This proprietary property is specific to Internet Explorer and Microsoft Edge.

Starting with Internet Explorer 10, input type=password fields will automatically display a warning if the caps lock is on. This property enables this warning to be disabled.

## Syntax

```html
document.msCapsLockWarningOff = true;
```

## Value

Type: **boolean**

_False_: Default. Automatic caps lock warning is turned on.

_True_: Automatic caps lock warning is turned off.

## Example

Fiddle: <https://jsfiddle.net/jonathansampson/mqcHA/1/>

## Example 2

    <html>
    <head>
        <title>msCapsLockWarningOff example</title>
        <script type="text/javascript">

            function capsOff() {
                      if (document.msCapsLockWarningOff == false) {
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
    <label>Type a password: input type="password" /></label><br />
    <button id="caps" onclick="capsOff();">Warning off</button>
    </body>
    </html>

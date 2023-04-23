---
title: "BatteryManager: level property"
short-title: level
slug: Web/API/BatteryManager/level
page-type: web-api-instance-property
browser-compat: api.BatteryManager.level
---

{{APIRef("Battery API")}}

The **`BatteryManager.level`** property indicates the current battery charge level as a value between `0.0` and `1.0`.
A value of `0.0` means the battery is empty and the system is about to be suspended.
A value of `1.0` means the battery is full.
A value of `1.0` is also returned if the implementation isn't able to determine the battery charge level
or if the system is not battery-powered.
When its value changes, the [`levelchange`](/en-US/docs/Web/API/BatteryManager/levelchange_event) event is fired.

## Value

A number.

## Examples

### Getting the battery level

#### HTML

```html
<button id="get-level">Get battery level</button>
<div id="output"></div>
```

#### JavaScript

```js
const getLevel = document.querySelector("#get-level");
const output = document.querySelector("#output");

getLevel.addEventListener("click", async () => {
  if (!navigator.getBattery) {
    output.textContent = "Battery manager is unsupported";
  } else {
    const manager = await navigator.getBattery();
    const level = manager.level;
    output.textContent = `Battery level: ${level}`;
  }
});
```

#### Result

{{ EmbedLiveSample('Getting the battery level') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("BatteryManager")}}
- {{domxref("Navigator.getBattery")}}

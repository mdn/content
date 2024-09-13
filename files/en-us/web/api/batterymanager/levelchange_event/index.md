---
title: "BatteryManager: levelchange event"
short-title: levelchange
slug: Web/API/BatteryManager/levelchange_event
page-type: web-api-event
browser-compat: api.BatteryManager.levelchange_event
---

{{ApiRef("Battery API")}}{{securecontext_header}}

The **`levelchange`** event of the {{domxref("BatteryManager")}} interface is fired when the battery {{domxref("BatteryManager.level", "level")}} property is updated.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("levelchange", (event) => { })

onlevelchange = (event) => { }
```

## Event type

_A generic {{domxref("Event")}}._

## Example

### HTML

```html
<div id="level">(battery level unknown)</div>
<div id="stateBattery">(charging state unknown)</div>
```

### JavaScript

```js
navigator.getBattery().then((battery) => {
  battery.onlevelchange = () => {
    document.querySelector("#level").textContent = battery.level;

    if (battery.charging) {
      document.querySelector("#stateBattery").textContent = `Charging time: ${
        battery.chargingTime / 60
      }`;
    } else {
      document.querySelector("#stateBattery").textContent =
        `Discharging time: ${battery.dischargingTime / 60}`;
    }
  };
});
```

{{ EmbedLiveSample('Example', '100%', 40) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("BatteryManager")}}
- {{domxref("Navigator.getBattery()")}}

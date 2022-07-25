---
title: 'BatteryManager: chargingchange event'
slug: Web/API/BatteryManager/chargingchange_event
page-type: web-api-event
tags:
  - API
  - Event
  - Reference
browser-compat: api.BatteryManager.chargingchange_event
---
{{APIRef("Battery API")}}

The **`chargingchange`** event of the [Battery Status API](/en-US/docs/Web/API/Battery_Status_API) is fired when the battery {{domxref("BatteryManager.charging","charging")}} property is updated.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('chargingchange', (event) => { });

onchargingchange = (event) => { };
```

## Event type

_A generic {{domxref("Event")}}._

## Example

### HTML Content

```html
<div id="level">(battery level unknown)</div>
<div id="chargingTime">(charging time unknown)</div>
```

### JavaScript Content

```js
navigator.getBattery().then((battery) => {
   battery.onchargingchange = () => {
      document.querySelector('#level').textContent = battery.level;
      document.querySelector('#chargingTime').textContent = battery.chargingTime;
   }
});
```

{{ EmbedLiveSample('Example', '100%', 40) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("BatteryManager")}}
- {{domxref("Navigator.getBattery")}}

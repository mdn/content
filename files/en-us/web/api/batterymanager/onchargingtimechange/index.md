---
title: BatteryManager.onchargingtimechange
slug: Web/API/BatteryManager/onchargingtimechange
tags:
  - API
  - Battery API
  - Event Handler
  - NeedsMarkupWork
  - Property
  - Reference
browser-compat: api.BatteryManager.onchargingtimechange
---
{{deprecated_header}}

{{APIRef("Battery API")}}

Specifies an event listener to receive {{event("chargingtimechange")}} events. These
events occur when the battery {{domxref("BatteryManager.chargingTime","chargingTime")}}
is updated.

## Syntax

```js
battery.onchargingtimechange = funcRef
```

Where `battery` is a {{domxref("BatteryManager")}} object, and
`funcRef` is a function to be called when the
{{event("chargingtimechange")}} event occurs.

## Example

### HTML Content

```html
<div id="level">(battery level unknown)</div>
<div id="chargingTime">(charging time unknown)</div>
```

### JavaScript Content

```js
navigator.getBattery().then(function(battery) {

    battery.onchargingtimechange = chargingTimeChange();

    function chargingTimeChange(){
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

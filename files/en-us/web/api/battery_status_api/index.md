---
title: Battery Status API
slug: Web/API/Battery_Status_API
page-type: web-api-overview
tags:
  - API
  - Apps
  - Battery
  - Battery API
  - Battery Status API
  - Guide
  - Mobile
  - Overview
browser-compat: api.BatteryManager
---
{{DefaultAPISidebar("Battery API")}}

The **Battery Status API**, more often referred to as the **Battery API**, provides information about the system's battery charge level and lets you be notified by events that are sent when the battery level or charging status change. This can be used to adjust your app's resource usage to reduce battery drain when the battery is low, or to save changes before the battery runs out in order to prevent data loss.

> **Note:** This API is _not available_ in [Web Workers](/en-US/docs/Web/API/Web_Workers_API) (not exposed via {{domxref("WorkerNavigator")}}).

## Interfaces

- {{domxref("BatteryManager")}}
  - : Provides information about the system's battery charge level.
- {{domxref("navigator.getBattery()")}} {{ReadOnlyInline}}
  - : Returns a {{JSxRef("Promise")}} that resolves with a {{DOMxRef("BatteryManager")}} object.

## Example

In this example, we watch for changes both to the charging status (whether or not we're plugged in and charging) and for changes to the battery level and timing. This is done by listening for the {{domxref("BatteryManager.chargingchange_event", "chargingchange")}}, {{domxref("BatteryManager.levelchange_event", "levelchange")}}, {{domxref("BatteryManager.chargingtimechange_event", "chargingtimechange")}}, {{domxref("BatteryManager.dischargingtimechange_event", "dischargingtimechange")}} events.

```js
navigator.getBattery().then((battery) => {
  function updateAllBatteryInfo(){
    updateChargeInfo();
    updateLevelInfo();
    updateChargingInfo();
    updateDischargingInfo();
  }
  updateAllBatteryInfo();

  battery.addEventListener('chargingchange', () => {
    updateChargeInfo();
  });
  function updateChargeInfo(){
    console.log(`Battery charging? ${battery.charging ? "Yes" : "No"}`);
  }

  battery.addEventListener('levelchange', () => {
    updateLevelInfo();
  });
  function updateLevelInfo(){
    console.log(`Battery level: ${battery.level * 100}%`);
  }

  battery.addEventListener('chargingtimechange', () => {
    updateChargingInfo();
  });
  function updateChargingInfo(){
    console.log(`Battery charging time: ${battery.chargingTime} seconds`);
  }

  battery.addEventListener('dischargingtimechange', () => {
    updateDischargingInfo();
  });
  function updateDischargingInfo(){
    console.log(`Battery discharging time: ${battery.dischargingTime} seconds`);
  }

});
```

See also [the example in the specification](https://www.w3.org/TR/battery-status/#examples).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Hacks blog post - Using the Battery API](https://hacks.mozilla.org/2012/02/using-the-battery-api-part-of-webapi/)

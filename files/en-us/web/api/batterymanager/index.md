---
title: BatteryManager
slug: Web/API/BatteryManager
tags:
  - API
  - Battery API
  - Device API
  - Interface
  - Deprecated
  - Reference
browser-compat: api.BatteryManager
---
{{APIRef}}{{deprecated_header}}

The `BatteryManager` interface of the [Battery Status API](/en-US/docs/Web/API/Battery_Status_API) provides information about the system's battery charge level. The {{domxref("navigator.getBattery()")}} method returns a promise that resolves with a `BatteryManager` interface.

## Properties

- {{domxref("BatteryManager.charging")}} {{ReadOnlyInline}}
  - : A Boolean value indicating whether the battery is currently being charged.
- {{domxref("BatteryManager.chargingTime")}} {{ReadOnlyInline}}
  - : A number representing the remaining time in seconds until the battery is fully charged, or 0 if the battery is already fully charged.
- {{domxref("BatteryManager.dischargingTime")}} {{ReadOnlyInline}}
  - : A number representing the remaining time in seconds until the battery is completely discharged and the system suspends.
- {{domxref("BatteryManager.level")}} {{ReadOnlyInline}}
  - : A number representing the system's battery charge level scaled to a value between 0.0 and 1.0.

### Event handlers

- {{domxref("BatteryManager.onchargingchange")}}
  - : A handler for the {{event("chargingchange")}} event; This event is sent when the battery charging state is updated.
- {{domxref("BatteryManager.onchargingtimechange")}}
  - : A handler for the {{event("chargingtimechange")}} event; This event is sent when the battery charging time is updated
- {{domxref("BatteryManager.ondischargingtimechange")}}
  - : A handler for the {{event("dischargingtimechange")}} event; This event is sent when the battery discharging time is updated.
- {{domxref("BatteryManager.onlevelchange")}}
  - : A handler for the {{event("levelchange")}} event; This event is sent when the battery level is updated.

## Methods

_Inherits methods from its parent interface:_ {{domxref("EventTarget")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [Battery Status API](/en-US/docs/Web/API/Battery_Status_API)
- {{domxref("navigator.getBattery")}}

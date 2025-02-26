---
title: BatteryManager
slug: Web/API/BatteryManager
page-type: web-api-interface
browser-compat: api.BatteryManager
---

{{ApiRef("Battery API")}}{{securecontext_header}}

The **`BatteryManager`** interface of the {{domxref("Battery Status API", "", "", "nocode")}} provides information about the system's battery charge level. The {{domxref("navigator.getBattery()")}} method returns a promise that resolves with a `BatteryManager` interface.

Since Chrome 103, the `BatteryManager` interface of {{domxref("Battery Status API", "", "", "nocode")}} only expose to secure context.

{{InheritanceDiagram}}

## Instance properties

_Also inherits properties from its parent interface, {{domxref("EventTarget")}}._

- {{domxref("BatteryManager.charging")}} {{ReadOnlyInline}}
  - : A Boolean value indicating whether the battery is currently being charged.
- {{domxref("BatteryManager.chargingTime")}} {{ReadOnlyInline}}
  - : A number representing the remaining time in seconds until the battery is fully charged, or 0 if the battery is already fully charged.
- {{domxref("BatteryManager.dischargingTime")}} {{ReadOnlyInline}}
  - : A number representing the remaining time in seconds until the battery is completely discharged and the system suspends.
- {{domxref("BatteryManager.level")}} {{ReadOnlyInline}}
  - : A number representing the system's battery charge level scaled to a value between 0.0 and 1.0.

## Instance methods

_Also inherits methods from its parent interface, {{domxref("EventTarget")}}._

## Events

_Also inherits events from its parent interface, {{domxref("EventTarget")}}._

- {{domxref("BatteryManager/chargingchange_event", "chargingchange")}}
  - : Fired when the battery charging state (the {{domxref("BatteryManager.charging", "charging")}} property) is updated.
- {{domxref("BatteryManager/chargingtimechange_event", "chargingtimechange")}}
  - : Fired when the battery charging time (the {{domxref("BatteryManager.chargingTime", "chargingTime")}} property) is updated.
- {{domxref("BatteryManager/dischargingtimechange_event", "dischargingtimechange")}}
  - : Fired when the battery discharging time (the {{domxref("BatteryManager.dischargingTime", "dischargingTime")}} property) is updated.
- {{domxref("BatteryManager/levelchange_event", "levelchange")}}
  - : Fired when the battery level (the {{domxref("BatteryManager.level", "level")}} property) is updated.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("Battery Status API", "", "", "nocode")}}
- {{domxref("Navigator.getBattery()")}}

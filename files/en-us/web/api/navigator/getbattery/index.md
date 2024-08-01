---
title: "Navigator: getBattery() method"
short-title: getBattery()
slug: Web/API/Navigator/getBattery
page-type: web-api-instance-method
browser-compat: api.Navigator.getBattery
---

{{ApiRef("Battery API")}}{{securecontext_header}}

The **`getBattery()`** method provides information about the system's battery.
It returns a battery promise, which resolves with a {{domxref("BatteryManager")}} object providing some properties to get the battery status also some events you can handle to monitor the battery status.
This implements the {{domxref("Battery Status API", "", "", "nocode")}}; see that documentation for additional details, a guide to using the API, and sample code.

Since Chrome 103, the `Navigator.getBattery()` method of {{domxref("Battery Status API", "", "", "nocode")}} only expose to secure context.

> [!NOTE]
> Access to this feature may be controlled by the {{HTTPHeader("Permissions-Policy")}} directive {{HTTPHeader("Permissions-Policy/battery", "battery")}}.

## Syntax

```js-nolint
getBattery()
```

### Parameters

None.

### Return value

A {{JSxRef("Promise")}} that fulfills with a {{DOMxRef("BatteryManager")}} object which you can use to get information about the battery's state.

### Exceptions

- `NotAllowedError` {{domxref("DOMException")}}

  - : Use of this feature was blocked by a [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy).

- `SecurityError` {{domxref("DOMException")}}
  - : The User Agent does not expose battery information to insecure contexts and this method was called from an insecure context.

## Examples

This example fetches the current charging state of the battery and establishes a handler for the {{domxref("BatteryManager/chargingchange_event", "chargingchange")}} event, so that the charging state is recorded whenever it changes.

```js
let batteryIsCharging = false;

navigator.getBattery().then((battery) => {
  batteryIsCharging = battery.charging;

  battery.addEventListener("chargingchange", () => {
    batteryIsCharging = battery.charging;
  });
});
```

For more examples and details, see {{domxref("Battery Status API", "", "", "nocode")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Battery Status API", "", "", "nocode")}}
- {{HTTPHeader("Permissions-Policy")}} {{HTTPHeader("Permissions-Policy/battery", "battery")}} directive

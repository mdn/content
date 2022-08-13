---
title: Navigator.getBattery()
slug: Web/API/Navigator/getBattery
page-type: web-api-instance-method
tags:
  - API
  - Battery API
  - Device API
  - Method
  - Navigator
  - Reference
  - getBattery
browser-compat: api.Navigator.getBattery
---
{{ ApiRef("Battery API") }}

The **`getBattery()`** method provides information about the
system's battery. It returns a battery promise, which is resolved in a
{{domxref("BatteryManager")}} object providing also some new events you can handle to
monitor the battery status. This implements the [Battery Status API](/en-US/docs/Web/API/Battery_Status_API); see that
documentation for additional details, a guide to using the API, and sample code.

> **Note:** In some browsers access to this feature is controlled by the {{HTTPHeader("Feature-Policy")}} directive {{HTTPHeader("Feature-Policy/battery","battery")}}.

## Syntax

```js
getBattery()
```

### Parameters

None.

### Return value

A {{JSxRef("Promise")}} which, when resolved, calls its fulfillment handler with a
single parameter: a {{DOMxRef("BatteryManager")}} object which you can use to get
information about the battery's state.

### Exceptions

This method doesn't throw true exceptions; instead, it rejects the returned promise, passing into it a {{domxref("DOMException")}} whose `name` is one of the following:

- `SecurityError`

  - : The User Agent does not expose battery information to insecure contexts and this method was called from insecure context.

    > **Note:** Old versions of some User Agents might allow use of this feature in insecure contexts.

- `NotAllowedError`

  - : No User Agent currently throws this exception, but the specification describes the following behaviors:
    > This document is not allowed to use this feature.
    > For example, it might not be explicitly allowed or restricted via {{HTTPHeader("Feature-Policy")}} {{HTTPHeader("Feature-Policy/battery", "battery")}} feature.

## Examples

This example fetches the current charging state of the battery and establishes a
handler for the {{domxref("BatteryManager/chargingchange_event", "chargingchange")}} event, so that the charging state is
recorded whenever it changes.

```js
let batteryIsCharging = false;

navigator.getBattery().then((battery) => {
  batteryIsCharging = battery.charging;

  battery.addEventListener('chargingchange', () => {
    batteryIsCharging = battery.charging;
  });
});
```

For more examples and details, see [Battery Status API](/en-US/docs/Web/API/Battery_Status_API).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Battery Status API](/en-US/docs/Web/API/Battery_Status_API)
- `Feature-Policy` {{HTTPHeader("Feature-Policy/battery", "battery")}}
  feature

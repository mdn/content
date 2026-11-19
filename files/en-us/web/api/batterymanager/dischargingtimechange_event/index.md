---
title: "BatteryManager: dischargingtimechange event"
short-title: dischargingtimechange
slug: Web/API/BatteryManager/dischargingtimechange_event
page-type: web-api-event
browser-compat: api.BatteryManager.dischargingtimechange_event
---

{{ApiRef("Battery API")}}{{securecontext_header}}

The **`dischargingtimechange`** event of the {{domxref("BatteryManager")}} interface is fired when the battery {{domxref("BatteryManager.dischargingTime", "dischargingTime")}} property is updated.

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("dischargingtimechange", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
ondischargingtimechange = (event) => { }
```

## Event type

_A generic {{domxref("Event")}}._

## Example

### HTML

```html
<div id="level">(battery level unknown)</div>
<div id="chargingTime">(charging time unknown)</div>
```

### JavaScript

```js
navigator.getBattery().then((battery) => {
  battery.ondischargingtimechange = () => {
    document.querySelector("#level").textContent = battery.level;
    document.querySelector("#chargingTime").textContent = battery.chargingTime;
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

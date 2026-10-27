---
title: "BatteryManager: chargingtimechange event"
short-title: chargingtimechange
slug: Web/API/BatteryManager/chargingtimechange_event
page-type: web-api-event
browser-compat: api.BatteryManager.chargingtimechange_event
---

{{ApiRef("Battery API")}}{{securecontext_header}}

The **`chargingtimechange`** event of the {{domxref("BatteryManager")}} interface is fired when the battery {{domxref("BatteryManager.chargingTime", "chargingTime")}} property is updated.

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("chargingtimechange", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
onchargingtimechange = (event) => { }
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
  battery.onchargingtimechange = () => {
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

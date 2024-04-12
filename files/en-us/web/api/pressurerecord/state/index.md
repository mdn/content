---
title: "PressureRecord: state property"
short-title: state
slug: Web/API/PressureRecord/state
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.PressureRecord.state
---

{{APIRef("Compute Pressure API")}}{{SeeCompatTable}}

The read-only **`state`** property is a string indicating the pressure state recorded.

## Value

A string indicating the pressure state recorded. The Compute Pressure API uses human-readable pressure states with the following semantics (see also the [specification](https://w3c.github.io/compute-pressure/#pressure-states)):

- ⚪ `"nominal"`: The conditions of the target device are at an acceptable level with no noticeable adverse effects on the user.
- 🟢 `"fair"`: Target device pressure, temperature and/or energy usage are slightly elevated, potentially resulting in reduced battery-life, as well as fans (or systems with fans) becoming active and audible. Apart from that the target device is running flawlessly and can take on additional work.
- 🟡 `"serious"`: Target device pressure, temperature and/or energy usage is consistently highly elevated. The system may be throttling as a countermeasure to reduce thermals.
- 🔴 `"critical"`: The temperature of the target device or system is significantly elevated and it requires cooling down to avoid any potential issues.

## Examples

### Using the state property

In the following example we log the value of the `state` property in the pressure observer callback.

```js
function callback(records) {
  const lastRecord = records[records.length - 1];
  console.log(`Current pressure ${lastRecord.state}`);
}

const observer = new PressureObserver(callback, {
  sampleInterval: 1000, // 1000ms
});
await observer.observe("cpu");
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

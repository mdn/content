---
title: "WorkerNavigator: serial property"
short-title: serial
slug: Web/API/WorkerNavigator/serial
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.WorkerNavigator.serial
---

{{APIRef("Web Serial API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers("dedicated")}}

The **`serial`** read-only property of the {{domxref("WorkerNavigator")}} interface returns a {{domxref("Serial")}} object which represents the entry point into the [Web Serial API](/en-US/docs/Web/API/Web_Serial_API).

When getting, the same instance of the {{domxref("Serial")}} object will always be returned.

## Value

A {{domxref("Serial")}} object.

## Examples

The following example uses the `getPorts()` method to initialize a list of available ports.

```js
navigator.serial.getPorts().then((ports) => {
  // Initialize the list of available ports.
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Read from and write to a serial port](https://developer.chrome.com/docs/capabilities/serial)
- [Getting started with the web serial API](https://codelabs.developers.google.com/codelabs/web-serial#0)

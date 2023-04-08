---
title: "Navigator: serial property"
short-title: serial
slug: Web/API/Navigator/serial
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.Navigator.serial
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

The **`serial`** read-only property of the {{domxref("Navigator")}} interface returns a {{domxref("Serial")}} object which represents the entry point into the {{domxref("Web Serial API")}}.

When getting, the same instance of the {{domxref("Serial")}} object will always be returned.

## Value

A {{domxref("Serial")}} object.

## Examples

The following example uses the `getPorts()` method to initialize a list of available ports.

```js
navigator.serial.getPorts().then((ports) => {
  // Initialize the list of available ports with `ports` on page load.
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Read from and write to a serial port](https://web.dev/serial/)
- [Getting started with the web serial API](https://codelabs.developers.google.com/codelabs/web-serial#0)

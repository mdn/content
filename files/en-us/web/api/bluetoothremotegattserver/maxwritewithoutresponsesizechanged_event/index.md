---
title: "BluetoothRemoteGATTServer: maxwritewithoutresponsesizechanged event"
short-title: maxwritewithoutresponsesizechanged
slug: Web/API/BluetoothRemoteGATTServer/maxwritewithoutresponsesizechanged_event
page-type: web-api-event
status:
  - experimental
---

{{APIRef("Bluetooth API")}}{{SecureContext_Header}}

The **`maxwritewithoutresponsesizechanged`** event of the {{domxref("BluetoothRemoteGATTServer")}} interface fires when the browser updates the known value of {{domxref("BluetoothRemoteGATTServer.maxWriteWithoutResponseSize")}} for a connection. For example, this can happen when the browser learns that the connection's ATT MTU has changed.

The event does not include the new size; read the property to get the current value. On platforms that do not report MTU changes to the browser, the value may remain constant and the event may not fire.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("maxwritewithoutresponsesizechanged", (event) => { })

onmaxwritewithoutresponsesizechanged = (event) => { }
```

## Event type

A generic {{domxref("Event")}}.

## Examples

```js
const server = device.gatt;

server.addEventListener("maxwritewithoutresponsesizechanged", () => {
  console.log(`Maximum write payload: ${server.maxWriteWithoutResponseSize}`);
});

await server.connect();
```

## Specifications

- [Web Bluetooth specification proposal](https://github.com/whatwg/bluetooth/pull/672)

## See also

- {{domxref("BluetoothRemoteGATTServer.maxWriteWithoutResponseSize")}}
- {{domxref("BluetoothRemoteGATTCharacteristic.writeValueWithoutResponse()")}}

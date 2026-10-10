---
title: "BluetoothRemoteGATTServer: maxWriteWithoutResponseSize property"
short-title: maxWriteWithoutResponseSize
slug: Web/API/BluetoothRemoteGATTServer/maxWriteWithoutResponseSize
page-type: web-api-instance-property
status:
  - experimental
---

{{APIRef("Bluetooth API")}}{{SecureContext_Header}}

The **`BluetoothRemoteGATTServer.maxWriteWithoutResponseSize`** read-only property returns the largest payload, in bytes, that {{domxref("BluetoothRemoteGATTCharacteristic.writeValueWithoutResponse()")}} can send to the connected device in a single ATT packet without fragmentation or rejection due to its size.

The value reflects the maximum currently known to the browser for this connection, not necessarily the final negotiated maximum. It can change after connection, for example when the browser learns of an ATT MTU update. Listen for the {{domxref("BluetoothRemoteGATTServer.maxwritewithoutresponsesizechanged_event", "maxwritewithoutresponsesizechanged")}} event or read the property before writing to account for updates. Some platforms do not report subsequent MTU changes to the browser.

## Value

An integer representing a number of bytes. If the platform does not report the connection's MTU, the default is 20 bytes.

## Examples

This example splits a byte array into chunks that fit in a single write-without-response packet:

```js
async function writeInChunks(characteristic, data) {
  const server = characteristic.service.device.gatt;
  const chunkSize = server.maxWriteWithoutResponseSize ?? 20;

  for (let offset = 0; offset < data.byteLength; offset += chunkSize) {
    await characteristic.writeValueWithoutResponse(
      data.subarray(offset, offset + chunkSize),
    );
  }
}
```

For long transfers, re-read the property before each write or listen for `maxwritewithoutresponsesizechanged` to update the chunk size. Writes can still fail if the connection is lost or the device rejects them.

## Specifications

- [Web Bluetooth specification proposal](https://github.com/whatwg/bluetooth/pull/672)

## See also

- {{domxref("BluetoothRemoteGATTServer.maxwritewithoutresponsesizechanged_event", "maxwritewithoutresponsesizechanged")}} event
- {{domxref("BluetoothRemoteGATTCharacteristic.writeValueWithoutResponse()")}}

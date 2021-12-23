---
title: BluetoothCharacteristicProperties
slug: Web/API/BluetoothCharacteristicProperties
tags:
  - API
  - Bluetooth
  - BluetoothCharacteristicProperties
  - Experimental
  - Interface
  - Reference
  - Web Bluetooth API
browser-compat: api.BluetoothCharacteristicProperties
---
{{APIRef("Bluetooth API")}}{{securecontext_header}}{{SeeCompatTable}}

The **`BluetoothCharacteristicProperties`** interface of the [Web Bluetooth API](/en-US/docs/Web/API/Web_Bluetooth_API) provides the operations that are valid on the given {{domxref('BluetoothRemoteGATTCharacteristic')}}.

This interface is returned by calling {{DOMxRef("BluetoothRemoteGATTCharacteristic.properties")}}.

## Properties

- {{DOMxRef("BluetoothCharacteristicProperties.authenticatedSignedWrites","authenticatedSignedWrites")}}{{ReadOnlyInline}}
  - : Returns a `boolean` that is `true` if signed writing to the characteristic value is permitted.
- {{DOMxRef("BluetoothCharacteristicProperties.broadcast", "broadcast")}}{{ReadOnlyInline}}
  - : Returns a `boolean` that is `true` if the broadcast of the characteristic value is permitted using the Server Characteristic Configuration Descriptor.
- {{DOMxRef("BluetoothCharacteristicProperties.indicate","indicate")}}{{ReadOnlyInline}}
  - : Returns a `boolean` that is `true` if indications of the characteristic value with acknowledgement is permitted.
- {{DOMxRef("BluetoothCharacteristicProperties.notify","notify")}}{{ReadOnlyInline}}
  - : Returns a `boolean` that is `true` if notifications of the characteristic value without acknowledgement is permitted.
- {{DOMxRef("BluetoothCharacteristicProperties.read", "read")}}{{ReadOnlyInline}}
  - : Returns a `boolean` that is `true` if the reading of the characteristic value is permitted.
- {{DOMxRef("BluetoothCharacteristicProperties.reliableWrite","reliableWrite")}}{{ReadOnlyInline}}
  - : Returns a `boolean` that is `true` if reliable writes to the characteristic is permitted.
- {{DOMxRef("BluetoothCharacteristicProperties.writableAuxiliaries","writableAuxiliaries")}}{{ReadOnlyInline}}
  - : Returns a `boolean` that is `true` if reliable writes to the characteristic descriptor is permitted.
- {{DOMxRef("BluetoothCharacteristicProperties.write","write")}}{{ReadOnlyInline}}
  - : Returns a `boolean` that is `true` if the writing to the characteristic with response is permitted.
- {{DOMxRef("BluetoothCharacteristicProperties.writeWithoutResponse","writeWithoutResponse")}}{{ReadOnlyInline}}
  - : Returns a `boolean` that is `true` if the writing to the characteristic without response is permitted.

## Examples

The following example shows how tell if a GATT characteristic supports value change notifications.

```js
let device = await navigator.bluetooth.requestDevice({
  filters: [{services: ['heart_rate']}]
});
let gatt = await device.gatt.connect();
let service = await gatt.getPrimaryService('heart_rate');
let characteristic = await service.getCharacteristic('heart_rate_measurement');
if (characteristic.properties.notify) {
  characteristic.addEventListener('characteristicvaluechanged',
      function(event) {
    console.log(`Received heart rate measurement: ${event.target.value}`);
  }
  await characteristic.startNotifications();
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

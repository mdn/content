---
title: BluetoothRemoteGATTCharacteristic
slug: Web/API/BluetoothRemoteGATTCharacteristic
page-type: web-api-interface
status:
  - experimental
browser-compat: api.BluetoothRemoteGATTCharacteristic
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}

The `BluetoothRemoteGattCharacteristic` interface of the [Web Bluetooth API](/en-US/docs/Web/API/Web_Bluetooth_API) represents a GATT Characteristic, which is a basic data element that provides further information about a peripheral's service.

{{InheritanceDiagram}}

## Instance properties

- {{DOMxRef("BluetoothRemoteGATTCharacteristic.service")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the {{DOMxRef("BluetoothRemoteGATTService")}} this characteristic belongs to.
- {{DOMxRef("BluetoothRemoteGATTCharacteristic.uuid")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a string containing the UUID of the characteristic, for example `'00002a37-0000-1000-8000-00805f9b34fb'` for the Heart Rate Measurement characteristic.
- {{DOMxRef("BluetoothRemoteGATTCharacteristic.properties")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the properties of this characteristic.
- {{DOMxRef("BluetoothRemoteGATTCharacteristic.value")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : The currently cached characteristic value. This value gets updated when the value of the characteristic is read or updated via a notification or indication.

### Events

- `oncharacteristicvaluechanged` {{Experimental_Inline}}
  - : Event handler for the `characteristicvaluechanged` event.

## Instance methods

- {{DOMxRef("BluetoothRemoteGATTCharacteristic.getDescriptor()")}} {{Experimental_Inline}}
  - : Returns a {{JSxRef("Promise")}} that resolves to the first {{DOMxRef("BluetoothRemoteGATTDescriptor")}} for a given descriptor UUID.
- {{DOMxRef("BluetoothRemoteGATTCharacteristic.getDescriptors()")}} {{Experimental_Inline}}
  - : Returns a {{JSxRef("Promise")}} that resolves to an {{JSxRef("Array")}} of all {{DOMxRef("BluetoothRemoteGATTDescriptor")}} objects for a given descriptor UUID.
- {{DOMxRef("BluetoothRemoteGATTCharacteristic.readValue()")}} {{Experimental_Inline}}
  - : Returns a {{JSxRef("Promise")}} that resolves to an {{JSxRef("ArrayBuffer")}} holding a duplicate of the `value` property if it is available and supported. Otherwise it throws an error.
- {{DOMxRef("BluetoothRemoteGATTCharacteristic.writeValue()", "BluetoothRemoteGATTCharacteristic.writeValue(<var>value</var>)")}} {{Deprecated_Inline}}
  - : Sets the `value` property to the bytes contained in a given {{JSxRef("ArrayBuffer")}}, calls [`WriteCharacteristicValue`(_this_=`this`, _value=value_, _response_=`"optional"`)](https://webbluetoothcg.github.io/web-bluetooth/#writecharacteristicvalue), and returns the resulting {{JSxRef("Promise")}}.
- {{DOMxRef("BluetoothRemoteGATTCharacteristic.writeValueWithResponse()", "BluetoothRemoteGATTCharacteristic.writeValueWithResponse(<var>value</var>)")}} {{Experimental_Inline}}
  - : Sets the `value` property to the bytes contained in a given {{JSxRef("ArrayBuffer")}}, calls [`WriteCharacteristicValue`(_this_=`this`, _value=value_, _response_=`"required"`)](https://webbluetoothcg.github.io/web-bluetooth/#writecharacteristicvalue), and returns the resulting {{JSxRef("Promise")}}.
- {{DOMxRef("BluetoothRemoteGATTCharacteristic.writeValueWithoutResponse()", "BluetoothRemoteGATTCharacteristic.writeValueWithoutResponse(<var>value</var>)")}} {{Experimental_Inline}}
  - : Sets the `value` property to the bytes contained in a given {{JSxRef("ArrayBuffer")}}, calls [`WriteCharacteristicValue`(_this_=`this`, _value=value_, _response_=`"never"`)](https://webbluetoothcg.github.io/web-bluetooth/#writecharacteristicvalue), and returns the resulting {{JSxRef("Promise")}}.
- {{DOMxRef("BluetoothRemoteGATTCharacteristic.startNotifications()")}} {{Experimental_Inline}}
  - : Returns a {{JSxRef("Promise")}} when `navigator.bluetooth` is added to the active notification context.
- {{DOMxRef("BluetoothRemoteGATTCharacteristic.stopNotifications()")}} {{Experimental_Inline}}
  - : Returns a {{JSxRef("Promise")}} when `navigator.bluetooth` is removed from the active notification context.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

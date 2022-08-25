---
title: Bluetooth.getAvailability()
slug: Web/API/Bluetooth/getAvailability
page-type: web-api-instance-method
tags:
  - API
  - Bluetooth
  - Reference
  - Web Bluetooth API
  - Experimental
browser-compat: api.Bluetooth.getAvailability
---
{{securecontext_header}}{{SeeCompatTable}}{{APIRef("Bluetooth API")}}

The **`getAvailability()`** method of the {{DOMxRef("Bluetooth")}} interface returns `true` if the device has a Bluetooth adapter, and false otherwise (unless the user has configured the browser to not expose a real value).

> **Note:** A user might not allow use of Web Bluetooth API, even if
> `getAvailability()` returns `true`
> ({{DOMxRef("Bluetooth.requestDevice","navigator.bluetooth.requestDevice()")}} might
> not resolve with a {{DOMxRef("BluetoothDevice")}}). Also, a user can configure their browser to return a fixed value instead of a real one.

## Syntax

```js
getAvailability()
```

### Parameters

None.

### Return value

A {{JSxRef("Promise")}} that resolves with {{JSxRef("Boolean")}}.

## Exceptions

This method doesn't throw any exceptions.

## Examples

The following snippet prints out a message in the console specifying whether or not
Bluetooth is supported:

```js
navigator.bluetooth.getAvailability().then((available) => {
  if (available) {
    console.log("This device supports Bluetooth!");
  } else {
    console.log("Doh! Bluetooth is not supported");
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

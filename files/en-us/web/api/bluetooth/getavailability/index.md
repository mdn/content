---
title: Bluetooth.getAvailability()
slug: Web/API/Bluetooth/getAvailability
tags:
  - API
  - Bluetooth
  - Reference
  - Web Bluetooth API
browser-compat: api.Bluetooth.getAvailability
---
{{securecontext_header}}{{SeeCompatTable}}{{APIRef("Bluetooth API")}}

The **`getAvailability()`** method of
{{DOMxRef("Bluetooth")}} interface of [Web Bluetooth API](/en-US/docs/Web/API/Web_Bluetooth_API) interface exposes
the Bluetooth capabilities of the current device. For a returns a
{{JSxRef("Boolean")}} which is `true` if the device has a Bluetooth
adapter and false otherwise (unless user configured {{Glossary("User Agent")}} not to
expose a real value).

> **Note:** User might not allow use of Web Bluetooth API, even if
> `getAvailability()` returned `true`
> ({{DOMxRef("Bluetooth.requestDevice","navigator.bluetooth.requestDevice()")}} might
> not resolve with a {{DOMxRef("BluetoothDevice")}}). Also, user can configure User
> Agent to return a fixed value instead of a real one.

## Syntax

```js
var readerPromise = Bluetooth.getAvailability();
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
navigator.bluetooth.getAvailability().then(available => {
  if (available)
      console.log("This device supports Bluetooth!");
  else
      console.log("Doh! Bluetooth is not supported");
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

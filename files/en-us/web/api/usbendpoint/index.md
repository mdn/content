---
title: USBEndpoint
slug: Web/API/USBEndpoint
page-type: web-api-interface
status:
  - experimental
browser-compat: api.USBEndpoint
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

The `USBEndpoint` interface of the [WebUSB API](/en-US/docs/Web/API/WebUSB_API) provides information about an endpoint provided by the USB device. An endpoint represents a unidirectional data stream into or out of a device.

## Constructor

- {{domxref("USBEndpoint.USBEndpoint", "USBEndpoint()")}} {{Experimental_Inline}}
  - : Creates a new `USBEndpoint` object which will be populated with information about the endpoint on the provided {{domxref('USBAlternateInterface')}} with the given endpoint number and transfer direction.

## Instance properties

- {{domxref("USBEndpoint.endpointNumber")}} {{Experimental_Inline}}
  - : Returns this endpoint's "endpoint number" which is a value from 1 to 15 extracted from the `bEndpointAddress` field of the endpoint descriptor defining this endpoint. This value is used to identify the endpoint when calling methods on `USBDevice`.
- {{domxref("USBEndpoint.direction")}} {{Experimental_Inline}}

  - : Returns the direction in which this endpoint transfers data, one of:

    - `"in"` - Data is transferred from device to host.
    - `"out"` - Data is transferred from host to device.

- {{domxref("USBEndpoint.type")}} {{Experimental_Inline}}

  - : Returns the type of this endpoint, one of:

    - `"bulk"` - Provides reliable data transfer for large payloads. Data sent through a bulk endpoint is guaranteed to be delivered or generate an error but may be preempted by other data traffic.
    - `"interrupt"` - Provides reliable data transfer for small payloads. Data sent through an interrupt endpoint is guaranteed to be delivered or generate an error and is also given dedicated bus time for transmission.
    - `"isochronous"` - Provides unreliable data transfer for payloads that must be delivered periodically. They are given dedicated bus time but if a deadline is missed the data is dropped.

- {{domxref("USBEndpoint.packetSize")}} {{Experimental_Inline}}
  - : Returns the size of the packets that data sent through this endpoint will be divided into.

## Examples

While sometimes the developer knows ahead of time the exact layout of a device's endpoints there are cases where this must be discovered at runtime. For example, a USB serial device must provide bulk input and output endpoints but their endpoint numbers will depend on what other interfaces the device provides.

This code identifies the correct endpoints by searching for the interface implementing the USB CDC interface class and then identifying the candidate endpoints based on their type and direction.

```js
let inEndpoint = undefined;
let outEndpoint = undefined;

for (const { alternates } of device.configuration.interfaces) {
  // Only support devices with out multiple alternate interfaces.
  const alternate = alternates[0];

  // Identify the interface implementing the USB CDC class.
  const USB_CDC_CLASS = 10;
  if (alternate.interfaceClass !== USB_CDC_CLASS) {
    continue;
  }

  for (const endpoint of alternate.endpoints) {
    // Identify the bulk transfer endpoints.
    if (endpoint.type !== "bulk") {
      continue;
    }

    if (endpoint.direction === "in") {
      inEndpoint = endpoint.endpointNumber;
    } else if (endpoint.direction === "out") {
      outEndpoint = endpoint.endpointNumber;
    }
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

---
title: AmbientLightSensor
slug: Web/API/AmbientLightSensor
page-type: web-api-interface
status:
  - experimental
browser-compat: api.AmbientLightSensor
---

{{securecontext_header}}{{APIRef("Sensor API")}}{{SeeCompatTable}}

The **`AmbientLightSensor`** interface of the [Sensor APIs](/en-US/docs/Web/API/Sensor_APIs) returns the current light level or illuminance of the ambient light around the hosting device.

To use this sensor, the user must grant permission to the `'ambient-light-sensor'` device sensor through the [Permissions API](/en-US/docs/Web/API/Permissions_API).

This feature may be blocked by a [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy) set on your server.

{{InheritanceDiagram}}

## Constructor

- {{domxref("AmbientLightSensor.AmbientLightSensor()", "AmbientLightSensor()")}} {{Experimental_Inline}}
  - : Creates a new `AmbientLightSensor` object.

## Instance properties

- {{domxref('AmbientLightSensor.illuminance')}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the current light level in [lux](https://en.wikipedia.org/wiki/Lux) of the ambient light level around the hosting device.

## Instance methods

_`AmbientLightSensor` doesn't have own methods. However, it inherits methods from its parent interfaces, {{domxref("Sensor")}} and {{domxref("EventTarget")}}._

## Events

_`AmbientLightSensor` doesn't have own events. However, it inherits events from its parent interface, {{domxref('Sensor')}}._

## Example

```js
if ("AmbientLightSensor" in window) {
  const sensor = new AmbientLightSensor();
  sensor.addEventListener("reading", (event) => {
    console.log("Current light level:", sensor.illuminance);
  });
  sensor.addEventListener("error", (event) => {
    console.log(event.error.name, event.error.message);
  });
  sensor.start();
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

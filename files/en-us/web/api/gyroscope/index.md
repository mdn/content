---
title: Gyroscope
slug: Web/API/Gyroscope
page-type: web-api-interface
browser-compat: api.Gyroscope
---

{{APIRef("Sensor API")}}

The **`Gyroscope`** interface of the [Sensor APIs](/en-US/docs/Web/API/Sensor_APIs) provides on each reading the angular velocity of the device along all three axes.

To use this sensor, the user must grant permission to the `'gyroscope'` device sensor through the [Permissions API](/en-US/docs/Web/API/Permissions_API). In addition, this feature may be blocked by a [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy) set on your server.

{{InheritanceDiagram}}

## Constructor

- {{domxref("Gyroscope.Gyroscope", "Gyroscope()")}}
  - : Creates a new `Gyroscope` object.

## Instance properties

- {{domxref('Gyroscope.x')}} {{ReadOnlyInline}}
  - : Returns a double, containing the angular velocity of the device along the device's x axis.
- {{domxref('Gyroscope.y')}} {{ReadOnlyInline}}
  - : Returns a double, containing the angular velocity of the device along the device's y axis.
- {{domxref('Gyroscope.z')}} {{ReadOnlyInline}}
  - : Returns a double, containing the angular velocity of the device along the device's z axis.

## Instance methods

_`Gyroscope` doesn't have own methods. However, it inherits methods from its parent interfaces, {{domxref("Sensor")}} and {{domxref("EventTarget")}}._

## Events

_`Gyroscope` doesn't have own events. However, it inherits events from its parent interface, {{domxref('Sensor')}}._

## Example

The gyroscope is typically read in the {{domxref('Sensor.reading_event', 'reading')}} event callback. In the example below this occurs sixty times a second.

```js
let gyroscope = new Gyroscope({ frequency: 60 });

gyroscope.addEventListener("reading", (e) => {
  console.log(`Angular velocity along the X-axis ${gyroscope.x}`);
  console.log(`Angular velocity along the Y-axis ${gyroscope.y}`);
  console.log(`Angular velocity along the Z-axis ${gyroscope.z}`);
});
gyroscope.start();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

---
title: AmbientLightSensor()
slug: Web/API/AmbientLightSensor/AmbientLightSensor
tags:
  - API
  - Ambient Light Sensor API
  - AmbientLightSensor
  - Constructor
  - Reference
browser-compat: api.AmbientLightSensor.AmbientLightSensor
---
{{APIRef("Sensor API")}}{{SeeCompatTable}}

The **`AmbientLightSensor()`** constructor creates a new {{domxref("AmbientLightSensor")}} object, which returns the current light level or illuminance of the ambient light around the hosting device.

If a feature policy blocks use of a feature it is because your code is inconsistent with the policies set on your server. This is not something that would ever be shown to a user. The {{httpheader('Feature-Policy')}} HTTP header article contains implementation instructions.

## Syntax

```js
var ambientLightSensor = new AmbientLightSensor(options)
```

### Parameters

- _options_ {{optional_inline}}

  - : Currently only one option is supported:

    - `frequency`: The desired number of times per second a sample should be taken, meaning the number of times per second that {{domxref('sensor.onreading')}} will be called. A whole number or decimal may be used, the latter for frequencies less than a second. The actual reading frequency depends on the device hardware and consequently may be less than requested.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

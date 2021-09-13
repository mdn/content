---
title: PositionOptions
slug: Web/API/PositionOptions
tags:
  - API
  - Dictionary
  - Geolocation API
  - PositionOptions
  - Reference
  - Secure context
browser-compat: api.PositionOptions
---
{{securecontext_header}}{{APIRef("Geolocation API")}}

The **`PositionOptions`** dictionary describes an object containing option properties to pass as a parameter of {{domxref("Geolocation.getCurrentPosition()")}} and {{domxref("Geolocation.watchPosition()")}}.

## Properties

- {{domxref("PositionOptions.enableHighAccuracy")}} {{securecontext_inline}}
  - : Is a boolean value that indicates the application would like to receive the best possible results. If `true` and if the device is able to provide a more accurate position, it will do so. Note that this can result in slower response times or increased power consumption (with a GPS chip on a mobile device for example). On the other hand, if `false`, the device can take the liberty to save resources by responding more quickly and/or using less power. Default: `false`.
- {{domxref("PositionOptions.timeout")}} {{securecontext_inline}}
  - : Is a positive `long` value representing the maximum length of time (in milliseconds) the device is allowed to take in order to return a position. The default value is [`Infinity`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity), meaning that `getCurrentPosition()` won't return until the position is available.
- {{domxref("PositionOptions.maximumAge")}} {{securecontext_inline}}
  - : Is a positive `long` value indicating the maximum age in milliseconds of a possible cached position that is acceptable to return. If set to `0`, it means that the device cannot use a cached position and must attempt to retrieve the real current position. If set to [`Infinity`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity) the device must return a cached position regardless of its age. Default: 0.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Geolocation API](/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- The {{domxref("Geolocation")}} interface that uses it.

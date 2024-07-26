---
title: "GeolocationPosition: toJSON() method"
short-title: toJSON()
slug: Web/API/GeolocationPosition/toJSON
page-type: web-api-instance-method
browser-compat: api.GeolocationPosition.toJSON
---

{{APIRef("Geolocation API")}}

The **`toJSON()`** method of the {{domxref("GeolocationPosition")}} interface is a {{Glossary("Serialization","serializer")}}; it returns a JSON representation of the {{domxref("GeolocationPosition")}} object.

## Syntax

```js-nolint
toJSON()
```

### Parameters

None.

### Return value

A {{jsxref("JSON")}} object that is the serialization of the {{domxref("GeolocationPosition")}} object.

## Examples

### Using the `toJSON()` method

In this example, calling `position.toJSON()` returns a JSON representation of the `GeolocationPosition` object.

```js
navigator.geolocation.getCurrentPosition((position) => {
  console.log(position.toJSON());
});
```

This would log a JSON object like so:

```json
{
  "timestamp": 1717509611840,
  "coords": {
    "accuracy": 13.0,
    "latitude": 53.0,
    "longitude": 8.0,
    "altitude": null,
    "altitudeAccuracy": null,
    "heading": null,
    "speed": null
  }
}
```

To get a JSON string, you can use [`JSON.stringify(position)`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) directly; it will call `toJSON()` automatically.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("JSON")}}

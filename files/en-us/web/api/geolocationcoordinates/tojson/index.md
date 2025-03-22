---
title: "GeolocationCoordinates: toJSON() method"
short-title: toJSON()
slug: Web/API/GeolocationCoordinates/toJSON
page-type: web-api-instance-method
browser-compat: api.GeolocationCoordinates.toJSON
---

{{APIRef("Geolocation API")}}

The **`toJSON()`** method of the {{domxref("GeolocationCoordinates")}} interface is a {{Glossary("Serialization","serializer")}}; it returns a JSON representation of the {{domxref("GeolocationCoordinates")}} object.

## Syntax

```js-nolint
toJSON()
```

### Parameters

None.

### Return value

A {{jsxref("JSON")}} object that is the serialization of the {{domxref("GeolocationCoordinates")}} object.

## Examples

### Using the `toJSON()` method

In this example, calling `position.coords.toJSON()` returns a JSON representation of the `GeolocationCoordinates` object.

```js
navigator.geolocation.getCurrentPosition((position) => {
  console.log(position.coords.toJSON());
});
```

This would log a JSON object like so:

```json
{
  "accuracy": 12.0,
  "latitude": 53.0,
  "longitude": 8.0,
  "altitude": null,
  "altitudeAccuracy": null,
  "heading": null,
  "speed": null
}
```

To get a JSON string, you can use [`JSON.stringify(position.coords)`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) directly; it will call `toJSON()` automatically.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("JSON")}}

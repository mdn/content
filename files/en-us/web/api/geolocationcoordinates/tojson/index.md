---
title: "GeolocationCoordinates: toJSON() method"
short-title: toJSON()
slug: Web/API/GeolocationCoordinates/toJSON
page-type: web-api-instance-method
browser-compat: api.GeolocationCoordinates.toJSON
---

{{APIRef("Geolocation API")}}

The **`toJSON()`** method of the {{domxref("GeolocationCoordinates")}} interface returns a JSON-serializable plain object representing the `GeolocationCoordinates` object.

The `toJSON()` method is automatically called by {{jsxref("JSON.stringify()")}} when a `GeolocationCoordinates` object is stringified. This method is generally intended to, by default, usefully serialize `GeolocationCoordinates` objects during [JSON](/en-US/docs/Glossary/JSON) serialization.

## Syntax

```js-nolint
toJSON()
```

### Parameters

None.

### Return value

A JSON-serializable plain object, containing the following properties:

- {{domxref("GeolocationCoordinates/accuracy", "accuracy")}}
- {{domxref("GeolocationCoordinates/latitude", "latitude")}}
- {{domxref("GeolocationCoordinates/longitude", "longitude")}}
- {{domxref("GeolocationCoordinates/altitude", "altitude")}}
- {{domxref("GeolocationCoordinates/altitudeAccuracy", "altitudeAccuracy")}}
- {{domxref("GeolocationCoordinates/heading", "heading")}}
- {{domxref("GeolocationCoordinates/speed", "speed")}}

Each property's value is copied as-is.

## Examples

### Calling toJSON() directly

This example obtains a `GeolocationCoordinates` object. Calling `toJSON()` directly returns a plain object. You can access its properties, which is the same as accessing them on the original object.

```js
navigator.geolocation.getCurrentPosition((position) => {
  const coords = position.coords;

  const json = coords.toJSON();
  console.log(json); // A plain object
  console.log(typeof json); // "object"
  console.log(json.latitude); // Same value as coords.latitude
});
```

### Serializing to a JSON string

Within the callback from the previous example, the same object can be serialized using {{jsxref("JSON.stringify()")}}, which calls the `toJSON()` method automatically.

```js
console.log(JSON.stringify(coords));
```

This would log a JSON string like so (formatted for readability):

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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("JSON")}}

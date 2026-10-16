---
title: "GeolocationPosition: toJSON() method"
short-title: toJSON()
slug: Web/API/GeolocationPosition/toJSON
page-type: web-api-instance-method
browser-compat: api.GeolocationPosition.toJSON
---

{{APIRef("Geolocation API")}}

The **`toJSON()`** method of the {{domxref("GeolocationPosition")}} interface returns a JSON-serializable plain object representing the `GeolocationPosition` object.

The `toJSON()` method is automatically called by {{jsxref("JSON.stringify()")}} when a `GeolocationPosition` object is stringified. This method is generally intended to, by default, usefully serialize `GeolocationPosition` objects during [JSON](/en-US/docs/Glossary/JSON) serialization.

## Syntax

```js-nolint
toJSON()
```

### Parameters

None.

### Return value

A JSON-serializable plain object, containing the following properties:

- {{domxref("GeolocationPosition/timestamp", "timestamp")}}
- {{domxref("GeolocationPosition/coords", "coords")}}

The `coords` property is serialized using {{domxref("GeolocationCoordinates/toJSON", "GeolocationCoordinates.toJSON()")}}. The `timestamp` value is copied as-is.

## Examples

### Calling toJSON() directly

This example obtains a `GeolocationPosition` object. Calling `toJSON()` directly returns a plain object. You can access its properties, which is the same as accessing them on the original object.

```js
navigator.geolocation.getCurrentPosition((position) => {
  const json = position.toJSON();
  console.log(json); // A plain object
  console.log(typeof json); // "object"
  console.log(json.timestamp); // Same value as position.timestamp
});
```

### Serializing to a JSON string

Within the callback from the previous example, the same object can be serialized using {{jsxref("JSON.stringify()")}}, which calls the `toJSON()` method automatically.

```js
console.log(JSON.stringify(position));
```

This would log a JSON string like so (formatted for readability):

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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("JSON")}}

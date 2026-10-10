---
title: "NavigatorUAData: toJSON() method"
short-title: toJSON()
slug: Web/API/NavigatorUAData/toJSON
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.NavigatorUAData.toJSON
---

{{APIRef("User-Agent Client Hints API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

The **`toJSON()`** method of the {{domxref("NavigatorUAData")}} interface returns a JSON-serializable plain object representing the `NavigatorUAData` object.

The `toJSON()` method is automatically called by {{jsxref("JSON.stringify()")}} when a `NavigatorUAData` object is stringified. This method is generally intended to, by default, usefully serialize `NavigatorUAData` objects during [JSON](/en-US/docs/Glossary/JSON) serialization.

## Syntax

```js-nolint
toJSON()
```

### Parameters

None.

### Return value

A JSON-serializable plain object, containing the following properties:

- {{domxref("NavigatorUAData/brands", "brands")}}
- {{domxref("NavigatorUAData/mobile", "mobile")}}
- {{domxref("NavigatorUAData/platform", "platform")}}

The `brands` property contains an array of objects with `brand` and `version` properties. The `mobile` and `platform` values are copied as-is.

## Examples

### Calling toJSON() directly

Calling `toJSON()` directly on `navigator.userAgentData` returns a plain object. You can access its properties, which is the same as accessing them on the original object.

```js
const json = navigator.userAgentData.toJSON();
console.log(json); // A plain object
console.log(typeof json); // "object"
console.log(json.mobile); // Same value as navigator.userAgentData.mobile
```

### Serializing to a JSON string

In this example, the `NavigatorUAData` object is automatically serialized by {{jsxref("JSON.stringify()")}}, which calls the `toJSON()` method.

```js
console.log(JSON.stringify(navigator.userAgentData));
```

This would log a JSON string like so (formatted for readability):

```json
{
  "brands": [
    {
      "brand": "Chromium",
      "version": "126"
    },
    {
      "brand": "Not/A)Brand",
      "version": "8"
    }
  ],
  "mobile": false,
  "platform": "Windows"
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

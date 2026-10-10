---
title: "PaymentAddress: toJSON() method"
short-title: toJSON()
slug: Web/API/PaymentAddress/toJSON
page-type: web-api-instance-method
status:
  - deprecated
  - non-standard
browser-compat: api.PaymentAddress.toJSON
---

{{APIRef("Payment Request API")}}{{SecureContext_Header}}{{Non-standard_Header}}

The **`toJSON()`** method of the {{domxref("PaymentAddress")}} interface returns a JSON-serializable plain object representing the `PaymentAddress` object.

The `toJSON()` method is automatically called by {{jsxref("JSON.stringify()")}} when a `PaymentAddress` object is stringified. This method is generally intended to, by default, usefully serialize `PaymentAddress` objects during [JSON](/en-US/docs/Glossary/JSON) serialization.

## Syntax

```js-nolint
toJSON()
```

### Parameters

None.

### Return value

A JSON-serializable plain object, containing the following properties:

- {{domxref("PaymentAddress/country", "country")}}
- {{domxref("PaymentAddress/addressLine", "addressLine")}}
- {{domxref("PaymentAddress/region", "region")}}
- {{domxref("PaymentAddress/city", "city")}}
- {{domxref("PaymentAddress/dependentLocality", "dependentLocality")}}
- {{domxref("PaymentAddress/postalCode", "postalCode")}}
- {{domxref("PaymentAddress/sortingCode", "sortingCode")}}
- {{domxref("PaymentAddress/organization", "organization")}}
- {{domxref("PaymentAddress/recipient", "recipient")}}
- {{domxref("PaymentAddress/phone", "phone")}}

The `addressLine` property contains an array of strings. Other property values are copied as-is.

## Examples

### Calling toJSON() directly

Given a `PaymentAddress` object named `address`, calling `toJSON()` directly returns a plain object. You can access its properties, which is the same as accessing them on the original object.

```js
const json = address.toJSON();
console.log(json); // A plain object
console.log(typeof json); // "object"
console.log(json.country); // Same value as address.country
```

### Serializing to a JSON string

In this example, the `PaymentAddress` object is automatically serialized by {{jsxref("JSON.stringify()")}}, which calls the `toJSON()` method.

```js
console.log(JSON.stringify(address));
```

This would log a JSON string like so (formatted for readability):

```json
{
  "country": "US",
  "addressLine": ["123 Main Street"],
  "region": "CA",
  "city": "San Francisco",
  "dependentLocality": "",
  "postalCode": "94105",
  "sortingCode": "",
  "organization": "",
  "recipient": "Alex Smith",
  "phone": ""
}
```

## Browser compatibility

{{Compat}}

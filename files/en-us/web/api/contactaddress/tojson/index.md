---
title: "ContactAddress: toJSON() method"
short-title: toJSON()
slug: Web/API/ContactAddress/toJSON
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.ContactAddress.toJSON
---

{{securecontext_header}}{{APIRef("Contact Picker API")}}{{SeeCompatTable}}

The **`toJSON()`** method of the {{domxref("ContactAddress")}} interface returns a JSON-serializable plain object representing the `ContactAddress` object.

The method is automatically called by {{jsxref("JSON.stringify()")}} when a `ContactAddress` object is encountered during [JSON](/en-US/docs/Glossary/JSON) serialization.

## Syntax

```js-nolint
toJSON()
```

### Parameters

None.

### Return value

A JSON-serializable plain object containing the following properties:

- {{domxref("ContactAddress/country", "country")}}
- {{domxref("ContactAddress/addressLine", "addressLine")}}
- {{domxref("ContactAddress/region", "region")}}
- {{domxref("ContactAddress/city", "city")}}
- {{domxref("ContactAddress/dependentLocality", "dependentLocality")}}
- {{domxref("ContactAddress/postalCode", "postalCode")}}
- {{domxref("ContactAddress/sortingCode", "sortingCode")}}
- {{domxref("ContactAddress/organization", "organization")}}
- {{domxref("ContactAddress/recipient", "recipient")}}
- {{domxref("ContactAddress/phone", "phone")}}

The `addressLine` property contains an array of strings. Other property values are copied as-is.

## Examples

### Calling toJSON() directly

Given a `ContactAddress` object named `address`, calling `toJSON()` directly returns a plain object. Its properties have the same values as the corresponding properties of the original object.

```js
const json = address.toJSON();
console.log(json); // A plain object
console.log(typeof json); // "object"
console.log(json.country); // Same value as address.country
```

### Serializing to a JSON string

The `ContactAddress` object is serialized using {{jsxref("JSON.stringify()")}}, which calls the `toJSON()` method automatically.

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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

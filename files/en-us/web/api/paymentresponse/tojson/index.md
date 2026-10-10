---
title: "PaymentResponse: toJSON() method"
short-title: toJSON()
slug: Web/API/PaymentResponse/toJSON
page-type: web-api-instance-method
browser-compat: api.PaymentResponse.toJSON
---

{{SecureContext_Header}}{{APIRef("Payment Request API")}}

The **`toJSON()`** method of the {{domxref("PaymentResponse")}} interface returns a JSON-serializable plain object representing the `PaymentResponse` object.

The `toJSON()` method is automatically called by {{jsxref("JSON.stringify()")}} when a `PaymentResponse` object is stringified. This method is generally intended to, by default, usefully serialize `PaymentResponse` objects during [JSON](/en-US/docs/Glossary/JSON) serialization.

## Syntax

```js-nolint
toJSON()
```

### Parameters

None.

### Return value

A JSON-serializable plain object, containing the following properties:

- {{domxref("PaymentResponse/requestId", "requestId")}}
- {{domxref("PaymentResponse/methodName", "methodName")}}
- {{domxref("PaymentResponse/details", "details")}}
- {{domxref("PaymentResponse/shippingAddress", "shippingAddress")}}
- {{domxref("PaymentResponse/shippingOption", "shippingOption")}}
- {{domxref("PaymentResponse/payerName", "payerName")}}
- {{domxref("PaymentResponse/payerEmail", "payerEmail")}}
- {{domxref("PaymentResponse/payerPhone", "payerPhone")}}

The `shippingAddress` property is serialized using {{domxref("PaymentAddress/toJSON", "PaymentAddress.toJSON()")}} when it is not `null`. Other property values are copied as-is.

## Examples

### Calling toJSON() directly

This example obtains a `PaymentResponse` object. Calling `toJSON()` directly returns a plain object. You can access its properties, which is the same as accessing them on the original object.

```js
payment.show().then((paymentResponse) => {
  const json = paymentResponse.toJSON();
  console.log(json); // A plain object
  console.log(typeof json); // "object"
  console.log(json.methodName); // Same value as paymentResponse.methodName
});
```

### Serializing to a JSON string

Within the callback from the previous example, the same object can be serialized using {{jsxref("JSON.stringify()")}}, which calls the `toJSON()` method automatically.

```js
console.log(JSON.stringify(paymentResponse));
```

This would log a JSON string like so (formatted for readability):

```json
{
  "requestId": "checkout-123",
  "methodName": "https://example.com/pay",
  "details": {
    "transactionId": "12345"
  },
  "shippingAddress": null,
  "shippingOption": null,
  "payerName": null,
  "payerEmail": null,
  "payerPhone": null
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("JSON")}}

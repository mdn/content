---
title: "PaymentResponse: toJSON() method"
short-title: toJSON()
slug: Web/API/PaymentResponse/toJSON
page-type: web-api-instance-method
browser-compat: api.PaymentResponse.toJSON
---

{{SecureContext_Header}}{{APIRef("Payment Request API")}}

The **`toJSON()`** method of the {{domxref("PaymentResponse")}} interface is a {{Glossary("Serialization","serializer")}}; it returns a JSON representation of the {{domxref("PaymentResponse")}} object.

## Syntax

```js-nolint
toJSON()
```

### Parameters

None.

### Return value

A {{jsxref("JSON")}} object that is the serialization of the {{domxref("PaymentResponse")}} object.

## Examples

### Using the toJSON method

In this example, calling `paymentResponse.toJSON()` returns a JSON representation of the `PaymentResponse` object.

```js
payment.show().then((paymentResponse) => {
  console.log(paymentResponse.toJSON())
  };
});
```

To get a JSON string, you can use [`JSON.stringify(paymentResponse)`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) directly; it will call `toJSON()` automatically.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("JSON")}}

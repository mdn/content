---
title: "PaymentRequest: merchantvalidation event"
short-title: merchantvalidation
slug: Web/API/PaymentRequest/merchantvalidation_event
page-type: web-api-event
status:
  - deprecated
browser-compat: api.PaymentRequest.merchantvalidation_event
---

{{APIRef("Payment Request API")}}{{SecureContext_Header}}{{Deprecated_Header}}

**`merchantvalidation`** events are delivered by the [Payment Request API](/en-US/docs/Web/API/Payment_Request_API) to a {{domxref("PaymentRequest")}} object when a payment handler requires that the merchant requesting the purchase validate itself as permitted to use the payment handler.

Learn how the [merchant validation](/en-US/docs/Web/API/Payment_Request_API/Concepts#merchant_validation) process works.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("merchantvalidation", (event) => {});

onmerchantvalidation = (event) => {};
```

## Event type

A {{domxref("MerchantValidationEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("MerchantValidationEvent")}}

## Event properties

- {{domxref("MerchantValidationEvent.methodName")}} {{SecureContext_Inline}}
  - : A string providing a unique payment method identifier for the payment handler that's requiring validation. This may be either one of the standard payment method identifier strings or a URL that both identifies and handles requests for the payment handler, such as `https://apple.com/apple-pay`.
- {{domxref("MerchantValidationEvent.validationURL")}} {{SecureContext_Inline}}
  - : A string specifying a URL from which the site or app can fetch payment handler specific validation information. Once this data is retrieved, the data (or a promise resolving to the validation data) should be passed into {{domxref("MerchantValidationEvent.complete", "complete()")}} to validate that the payment request is coming from an authorized merchant.

## Examples

In this example, an event handler is established for the `merchantvalidation` event. It uses the {{domxref("fetch()")}} to send a request to its own server with an argument of the payment method's validation URL, obtained from the event's {{domxref("MerchantValidationEvent.validationURL", "validationURL")}} property. The merchant server should access the validation URL in accordance with the payment method documentation. Typically, a client should not access the validation URL.

```js
request.addEventListener("merchantvalidation", (event) => {
  event.complete(async () => {
    const merchantServerUrl = `${
      window.location.origin
    }/validate?url=${encodeURIComponent(event.validationURL)}`;
    // get validation data, and complete validation;
    return await fetch(merchantServerUrl).then((response) => response.text());
  }, false);
});

const response = await request.show();
```

How merchant server handles the validation depends on the server implementation and payment method documentation. The content delivered by the validation server is forwarded to the merchant server and is then returned from the `fetch()` call's fulfillment handler to the {{domxref("MerchantValidationEvent.complete", "complete()")}} method on the event. This response lets the payment handler know if the merchant is validated.

You can also use the `onmerchantvalidation` event handler property to set up the handler for this event:

```js
request.onmerchantvalidation = (event) => {
  event.complete(async () => {
    const merchantServerUrl = `${
      window.location.origin
    }/validate?url=${encodeURIComponent(event.validationURL)}`;
    // get validation data, and complete validation;
    return await fetch(merchantServerUrl).then((response) => response.text());
  });
};

const response = await request.show();
```

For more information, see [Merchant validation](/en-US/docs/Web/API/Payment_Request_API/Concepts#merchant_validation).

## Browser compatibility

{{Compat}}

## See also

- [Payment Request API](/en-US/docs/Web/API/Payment_Request_API)
- [Using the Payment Request API](/en-US/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- `onmerchantvalidation` event handler property
- [Merchant validation](/en-US/docs/Web/API/Payment_Request_API/Concepts#merchant_validation)
- {{domxref("PaymentRequest")}}
- {{domxref("PaymentRequest.payerdetailchange_event", "payerdetailchange")}} event
- {{domxref("PaymentRequest.paymentmethodchange_event", "paymentmethodchange")}} event
- {{domxref("PaymentRequest.shippingaddresschange_event", "shippingaddresschange")}} event
- {{domxref("PaymentRequest.shippingoptionchange_event", "shippingoptionchange")}} event

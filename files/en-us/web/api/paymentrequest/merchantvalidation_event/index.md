---
title: 'PaymentRequest: merchantvalidation event'
slug: Web/API/PaymentRequest/merchantvalidation_event
tags:
  - API
  - Commerce
  - Merchant
  - Payment Handler
  - Payment Request
  - Payment Request API
  - Reference
  - Sales
  - Validation
  - Web
  - events
  - merchantvalidation
  - payment
browser-compat: api.PaymentRequest.merchantvalidation_event
---
{{deprecated_header}}{{non-standard_header}}{{securecontext_header}}

**`merchantvalidation`** events are delivered by the [Payment Request API](/en-US/docs/Web/API/Payment_Request_API) to a {{domxref("PaymentRequest")}} object when a payment handler requires that the merchant requesting the purchase validate itself as permitted to use the payment handler.

See {{SectionOnPage("/en-US/docs/Web/API/Payment_Request_API/Concepts", "Merchant validation")}} for details on how the merchant validation process works.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bubbles</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Cancelable</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{domxref("MerchantValidationEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>
        {{domxref("PaymentRequest.onmerchantvalidation", "onmerchantvalidation")}}
      </td>
    </tr>
  </tbody>
</table>

## Examples

In this example, an event handler is established for the `merchantvalidation` event. It uses the {{domxref("fetch()")}} to send a request to its own server with an argument of the payment method's validation URL, obtained from the event's {{domxref("MerchantValidationEvent.validationURL", "validationURL")}} property. The merchant server should access the validation URL in accordance with the payment method documention. Typically, a client should not access the validation URL.

```js
request.addEventListener("merchantvalidation", event => {
  event.complete(async () => {
    const merchantServerUrl = window.location.origin +
        '/validate?url=' + encodeURIComponent(event.validationURL);
    // get validation data, and complete validation;
    return await fetch(merchantServerUrl).then(response => response.text());
  }, false);
};

const response = await request.show();
```

How merchant server handles the validation depends on the server implementation and payment method documentation. The content delivered by the validation server is forwarded to the merchant server and is then returned from the `fetch()` call's fulfillment handler to the {{domxref("MerchantValidationEvent.complete", "complete()")}} method on the event. This response lets the payment handler know if the merchant is validated.

You can also use the {{domxref("PaymentRequest.onmerchantvalidation", "onmerchantvalidation")}} event handler property to set up the handler for this event:

```js
request.onmerchantvalidation = event => {
  event.complete(async () => {
    const merchantServerUrl = window.location.origin +
        '/validate?url=' + encodeURIComponent(event.validationURL);
    // get validation data, and complete validation;
    return await fetch(merchantServerUrl).then(response => response.text());
  });
};

const response = await request.show();
```

For more information, see {{SectionOnPage("/en-US/docs/Web/API/Payment_Request_API/Concepts", "Merchant Validation")}}.

## Related events

- {{event("payerdetailchange")}}, {{event("paymentmethodchange")}}, {{event("shippingaddresschange")}}, and {{event("shippingoptionchange")}}

## Browser compatibility

{{Compat}}

## See also

- [Payment Request API](/en-US/docs/Web/API/Payment_Request_API)
- [Using the Payment Request API](/en-US/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- {{domxref("PaymentRequest.onmerchantvalidation", "onmerchantvalidation")}} event handler property
- {{SectionOnPage("/en-US/docs/Web/API/Payment_Request_API/Concepts", "Merchant validation")}}
- {{domxref("PaymentRequest")}}

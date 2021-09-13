---
title: 'PaymentRequest: shippingaddresschange event'
slug: Web/API/PaymentRequest/shippingaddresschange_event
tags:
  - API
  - Address
  - Commerce
  - Payment Request
  - Payment Request API
  - PaymentRequest
  - PaymentRequestUpdateEvent
  - Reference
  - Shipping
  - events
  - payment
  - shippingaddresschange
browser-compat: api.PaymentRequest.shippingaddresschange_event
---
{{securecontext_header}}{{APIRef("Payment Request API")}}{{Deprecated_header}}{{Non-standard_header}}

The **`shippingaddresschange`** event is sent to the {{domxref("PaymentRequest")}} object when the user selects a shipping address or changes details of their shipping address.

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
      <td>{{domxref("PaymentRequestUpdateEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>
        {{domxref("PaymentRequest.onshippingaddresschange", "onshippingaddresschange")}}
      </td>
    </tr>
  </tbody>
</table>

## Usage notes

Depending on the browser, the shipping address information may be redacted for privacy reasons. That is, the {{domxref("PaymentAddress")}} which contains the shipping address may have some portions of its content altered, obscured, or left out entirely in order to prevent identifying the user without their consent (since if they choose to have you ship products to them, you'll need their address).

## Example

In this example, a handler for the `shippingaddresschange` event is set up to validate that the address meets requirements set by the web application.

```js
const paymentRequest = new PaymentRequest(methodData, details, options);

paymentRequest.addEventListener("shippingaddresschange", event => {
  let detailsUpdate = checkAddress(paymentRequest.shippingAddress);
  event.updateWith(detailsUpdate);
}, false);

const checkAddress = theAddress => {
  let detailsUpdate = {};

  // Check the address, return an object with any changes or errors.

  return detailsUpdate;
};
```

You can also establish a handler for `shippingaddresschange` using the {{domxref("PaymentRequest.onshippingaddresschange", "onshippingaddresschange")}} event handler property:

```js
paymentRequest.onshippingaddresschange = event => {
  let detailsUpdate = checkAddress(paymentRequest.shippingAddress);
  event.updateWith(detailsUpdate);
};
```

## Browser compatibility

{{Compat}}

## See also

- {{domxref("PaymentRequest.onshippingaddresschange", "onshippingaddresschange")}} event handler property

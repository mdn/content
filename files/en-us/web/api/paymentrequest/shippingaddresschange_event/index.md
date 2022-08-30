---
title: 'PaymentRequest: shippingaddresschange event'
slug: Web/API/PaymentRequest/shippingaddresschange_event
page-type: web-api-event
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
  - Event
  - payment
  - shippingaddresschange
  - Deprecated
  - Non-standard
browser-compat: api.PaymentRequest.shippingaddresschange_event
---
{{APIRef("Payment Request API")}}{{SecureContext_Header}}{{Deprecated_Header}}{{Non-standard_Header}}

The **`shippingaddresschange`** event is sent to the {{domxref("PaymentRequest")}} object when the user selects a shipping address or changes details of their shipping address.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('shippingaddresschange', (event) => { });

onshippingaddresschange = (event) => { };
```

## Event type

A {{domxref("PaymentRequestUpdateEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("PaymentRequestUpdateEvent")}}

## Event properties

_Provides only the properties inherited from {{domxref("Event")}}._

## Usage notes

Depending on the browser, the shipping address information may be redacted for privacy reasons. That is, the {{domxref("PaymentAddress")}} which contains the shipping address may have some portions of its content altered, obscured, or left out entirely in order to prevent identifying the user without their consent (since if they choose to have you ship products to them, you'll need their address).

## Example

In this example, a handler for the `shippingaddresschange` event is set up to validate that the address meets requirements set by the web application.

```js
const paymentRequest = new PaymentRequest(methodData, details, options);

paymentRequest.addEventListener("shippingaddresschange", (event) => {
  let detailsUpdate = checkAddress(paymentRequest.shippingAddress);
  event.updateWith(detailsUpdate);
}, false);

const checkAddress = (theAddress) => {
  let detailsUpdate = {};

  // Check the address, return an object with any changes or errors.

  return detailsUpdate;
};
```

You can also establish a handler for `shippingaddresschange` using the `onshippingaddresschange` event handler property:

```js
paymentRequest.onshippingaddresschange = (event) => {
  let detailsUpdate = checkAddress(paymentRequest.shippingAddress);
  event.updateWith(detailsUpdate);
};
```

## Browser compatibility

{{Compat}}

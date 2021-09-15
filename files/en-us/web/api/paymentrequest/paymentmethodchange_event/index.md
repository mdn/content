---
title: 'PaymentRequest: paymentmethodchange event'
slug: Web/API/PaymentRequest/paymentmethodchange_event
tags:
  - Event
  - Payment Request
  - Payment Request API
  - PaymentMethodChangeEvent
  - events
  - payment
  - paymentmethodchange
browser-compat: api.PaymentRequest.paymentmethodchange_event
---
{{APIRef}}

**`paymentmethodchange`** events are delivered by the [Payment Request API](/en-US/docs/Web/API/Payment_Request_API) to a {{domxref("PaymentRequest")}} object when the user changes payment methods within a given payment handler.

For example, if the user switches from one credit card to another on their [Apple Pay](https://www.apple.com/apple-pay/) account, a `paymentmethodchange` event is fired to let you know about the change.

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
      <td>{{domxref("PaymentMethodChangeEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>
        {{domxref("PaymentRequest.onpaymentmethodchange", "onpaymentmethodchange")}}
      </td>
    </tr>
  </tbody>
</table>

## Examples

Let's take a look at an example. This code creates a new {{domxref("PaymentRequest")}}, adds a handler for the `paymentmethodchange` event by calling the request's {{domxref("EventTarget.addEventListener", "addEventListener()")}}, then calls {{domxref("PaymentRequest.show", "show()")}} to present the payment interface to the user.

The code assumes the existence of a method `detailsForShipping()`, which returns an object containing the shipping options for the `ground` shipping method, in the form found in the {{domxref("PaymentShippingOption")}} dictionary. By doing so, the payment form defaults to the ground shipping method.

```js
const options = {
  requestShipping: true
};

const paymentRequest = new PaymentRequest(paymentMethods,
      detailsForShipping("ground"), options);

paymentRequest.addEventListener("paymentmethodchange", handlePaymentChange, false);

paymentRequest.show()
.then(response => response.complete("success"))
.catch(err => console.log("Error handling payment request: " + err));
```

The event handler function itself, `handlePaymentChange()`, looks like this:

```js
handlePaymentChange = event => {
  const detailsUpdate = {};

  if (event.methodName === "https://apple.com/apple-pay") {
    const serviceFeeInfo = calculateServiceFee(event.methodDetails);
    Object.assign(detailsUpdate, serviceFeeInfo);
  }

  event.updateWith(detailsUpdate);
}, false);
```

This begins by looking at the event's {{domxref("PaymentMethodChangeEvent.methodName", "methodName")}} property; if that indicates that the user is trying to use Apple Pay, we pass the {{domxref("PaymentMethodChangeEvent.methodDetails", "methodDetails")}} into a function called `calculateServiceFee()`, which we might create to take the information about the transaction, such as the underlying credit card being used to service the Apple Pay request, and compute and return an object that specifies changes to be applied to the {{domxref("PaymentRequest")}} in order to add any service fees that the payment method might require.

Before the event handler returns, it calls the event's {{domxref("PaymentMethodChangeEvent.updateWith()")}} method to integrate the changes into the request.

## Related events

- {{event("merchantvalidation")}}, {{event("shippingaddresschange")}}, {{event("shippingoptionchange")}}, and {{event("payerdetailchange")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Payment Request API](/en-US/docs/Web/API/Payment_Request_API)
- [Using the Payment Request API](/en-US/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- {{domxref("PaymentRequest.onpaymentmethodchange", "onpaymentmethodchange")}} event handler property
- Related events: {{event("merchantvalidation")}}, {{event("payerdetailchange")}}, {{event("shippingaddresschange")}}, {{event("shippingoptionchange")}}

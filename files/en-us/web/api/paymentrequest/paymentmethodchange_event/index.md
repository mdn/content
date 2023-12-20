---
title: "PaymentRequest: paymentmethodchange event"
short-title: paymentmethodchange
slug: Web/API/PaymentRequest/paymentmethodchange_event
page-type: web-api-event
browser-compat: api.PaymentRequest.paymentmethodchange_event
---

{{APIRef}}

The **`paymentmethodchange`** event is delivered the [Payment Request API](/en-US/docs/Web/API/Payment_Request_API) to a {{domxref("PaymentRequest")}} object when the user changes the payment method within a given payment handler.

For example, if the user switches from one credit card to another on their [Apple Pay](https://www.apple.com/apple-pay/) account, a `paymentmethodchange` event is fired to let you know about the change.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("paymentmethodchange", (event) => {});

onpaymentmethodchange = (event) => {};
```

## Event type

A {{domxref("PaymentMethodChangeEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("PaymentMethodChangeEvent")}}

## Event properties

_In addition to the properties below, this interface includes properties inherited from {{domxref("PaymentRequestUpdateEvent")}}._

- {{domxref("PaymentMethodChangeEvent.methodDetails", "methodDetails")}} {{ReadOnlyInline}} {{securecontext_inline}}
  - : An object containing payment method-specific data useful when handling a payment method change. If no such information is available, this value is `null`.
- {{domxref("PaymentMethodChangeEvent.methodName", "methodName")}} {{ReadOnlyInline}} {{securecontext_inline}}
  - : A string containing the payment method identifier, a string which uniquely identifies a particular payment method. This identifier is usually a URL used during the payment process, but may be a standardized non-URL string as well, such as `basic-card`. The default value is the empty string, `""`.

## Examples

Let's take a look at an example. This code creates a new {{domxref("PaymentRequest")}}, adds a handler for the `paymentmethodchange` event by calling the request's {{domxref("EventTarget.addEventListener", "addEventListener()")}}, then calls {{domxref("PaymentRequest.show", "show()")}} to present the payment interface to the user.

The code assumes the existence of a method `detailsForShipping()`, which returns an object containing the shipping options for the `ground` shipping method, in the form found in the {{domxref("PaymentShippingOption")}} dictionary. By doing so, the payment form defaults to the ground shipping method.

```js
const options = {
  requestShipping: true,
};

const paymentRequest = new PaymentRequest(
  paymentMethods,
  detailsForShipping("ground"),
  options,
);

paymentRequest.addEventListener(
  "paymentmethodchange",
  handlePaymentChange,
  false,
);

paymentRequest
  .show()
  .then((response) => response.complete("success"))
  .catch((err) => console.error(`Error handling payment request: ${err}`));
```

The event handler function itself, `handlePaymentChange()`, looks like this:

```js
handlePaymentChange = (event) => {
  const detailsUpdate = {};

  if (event.methodName === "https://apple.com/apple-pay") {
    const serviceFeeInfo = calculateServiceFee(event.methodDetails);
    Object.assign(detailsUpdate, serviceFeeInfo);
  }

  event.updateWith(detailsUpdate);
};
```

This begins by looking at the event's {{domxref("PaymentMethodChangeEvent.methodName", "methodName")}} property; if that indicates that the user is trying to use Apple Pay, we pass the {{domxref("PaymentMethodChangeEvent.methodDetails", "methodDetails")}} into a function called `calculateServiceFee()`, which we might create to take the information about the transaction, such as the underlying credit card being used to service the Apple Pay request, and compute and return an object that specifies changes to be applied to the {{domxref("PaymentRequest")}} in order to add any service fees that the payment method might require.

Before the event handler returns, it calls the event's {{domxref("PaymentMethodChangeEvent.updateWith()")}} method to integrate the changes into the request.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Payment Request API](/en-US/docs/Web/API/Payment_Request_API)
- [Using the Payment Request API](/en-US/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- {{domxref("PaymentRequest.merchantvalidation_event", "merchantvalidation")}} event
- {{domxref("PaymentRequest.payerdetailchange_event", "payerdetailchange")}} event
- {{domxref("PaymentRequest.shippingaddresschange_event", "shippingaddresschange")}} event
- {{domxref("PaymentRequest.shippingoptionchange_event", "shippingoptionchange")}} event

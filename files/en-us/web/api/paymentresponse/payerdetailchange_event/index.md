---
title: "PaymentResponse: payerdetailchange event"
short-title: payerdetailchange
slug: Web/API/PaymentResponse/payerdetailchange_event
page-type: web-api-event
status:
  - deprecated
  - non-standard
browser-compat: api.PaymentResponse.payerdetailchange_event
---

{{APIRef("Payment Request API")}}{{SecureContext_Header}}{{Deprecated_Header}}{{Non-standard_Header}}

A **`payerdetailchange`** event is fired by the [Payment Request API](/en-US/docs/Web/API/Payment_Request_API) to a {{domxref("PaymentResponse")}} object when the user makes changes to their personal information while filling out a payment request form. This can happen when the payer is retrying to submit its details after an error has been detected.

The event handler for `payerdetailchange` should check each value in the form that has changed and ensure that the values are valid. If any are invalid, appropriate error messages should be configured and the {{domxref("PaymentResponse.retry", "retry()")}} method should be called on the {{domxref("PaymentResponse")}} to ask the user to update the invalid entries.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("payerdetailchange", async (event) => {});

onpayerdetailchange = async (event) => {};
```

## Event type

A {{domxref("PaymentRequestUpdateEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("PaymentRequestUpdateEvent")}}

## Event properties

Although this event type is {{domxref("PaymentRequestUpdateEvent")}}, it doesn't implement any property that is not already on {{domxref("Event")}}.

## Examples

In the example below, `onpayerdetailchange` is used to set up a listener for the `payerdetailchange` event in order to validate the information entered by the user, requesting that any mistakes be corrected

```js
// Options for PaymentRequest(), indicating that shipping address,
// payer email address, name, and phone number all be collected.

const options = {
  requestShipping: true,
  requestPayerEmail: true,
  requestPayerName: true,
  requestPayerPhone: true,
};
const request = new PaymentRequest(methods, details, options);
const response = request.show();

// Get the data from the response

let {
  payerName: oldPayerName,
  payerEmail: oldPayerEmail,
  payerPhone: oldPayerPhone,
} = response;

// Set up a handler for payerdetailchange events, to
// request corrections as needed.

response.onpayerdetailchange = async (ev) => {
  const promisesToValidate = [];
  const { payerName, payerEmail, payerPhone } = response;

  // Validate each value which changed by calling a function
  // that validates each type of data, returning a promise which
  // resolves if the data is valid.

  if (oldPayerName !== payerName) {
    promisesToValidate.push(validateName(payerName));
    oldPayerName = payerName;
  }
  if (oldPayerEmail !== payerEmail) {
    promisesToValidate.push(validateEmail(payerEmail));
    oldPayerEmail = payerEmail;
  }
  if (oldPayerPhone !== payerPhone) {
    promisesToValidate.push(validatePhone(payerPhone));
    oldPayerPhone = payerPhone;
  }

  // As each validation promise resolves, add the results of the
  // validation to the errors list

  const errors = await Promise.all(promisesToValidate).then((results) =>
    results.reduce((errors, result), Object.assign(errors, result)),
  );

  // If we found any errors, wait for them to be corrected

  if (Object.getOwnPropertyNames(errors).length) {
    await response.retry(errors);
  } else {
    // We have a good payment; send the data to the server
    await fetch("/pay-for-things/", { method: "POST", body: response.json() });
    response.complete("success");
  }
};

await response.retry({
  payer: {
    email: "invalid domain.",
    phone: "invalid number.",
  },
});
```

### addEventListener equivalent

You could also set up the event handler using the `addEventListener()` method:

```js
response.addEventListener("payerdetailchange", async (ev) => {
  // …
});
```

## Browser compatibility

{{Compat}}

## See also

- [Payment Request API](/en-US/docs/Web/API/Payment_Request_API)
- [Using the Payment Request API](/en-US/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- {{domxref("PaymentResponse")}}
- [`paymentmethodchange`](/en-US/docs/Web/API/PaymentRequest/paymentmethodchange_event)
- [`shippingaddresschange`](/en-US/docs/Web/API/PaymentRequest/shippingaddresschange_event)
- [`shippingoptionchange`](/en-US/docs/Web/API/PaymentRequest/shippingoptionchange_event)

---
title: BasicCardRequest
slug: Web/API/BasicCardRequest
tags:
  - API
  - Basic Card Payment
  - BasicCardRequest
  - Commerce
  - Credit
  - Debit
  - Dictionary
  - Payment Method
  - Payment Request
  - Payment Request API
  - Reference
  - card
  - payment
  - Deprecated
  - Non-standard
browser-compat: api.BasicCardRequest
---
{{APIRef("Payment Request API")}}{{Deprecated_header}}{{Non-standard_header}}

The **`BasicCardRequest`** dictionary is a JavaScript object-structure that can be used in the [Payment Request API](/en-US/docs/Web/API/Payment_Request_API). The properties of `BasicCardRequest` are defined in the {{anch("Specifications", "Basic Card Payment spec")}}).

## Properties

- {{domxref('BasicCardRequest.supportedNetworks')}} {{optional_inline}} {{securecontext_inline}}
  - : An optional array of {{domxref("DOMString")}}s representing the card networks that the retailer supports (e.g. "`amex"`, "`mastercard"`); see {{anch("Card network identifiers")}} for a complete list. If the property is missing, it implies that all networks are supported.

### Obsolete properties

These properties have been removed from the Payment Method: Basic Card specification and should no longer be used.

- {{domxref('BasicCardRequest.supportedTypes')}} {{deprecated_inline}} {{optional_inline}} {{securecontext_inline}}
  - : This obsolete property was used to provide an optional array of {{domxref("DOMString")}}s representing the card types that the retailer supports (e.g. `credit`, `debit`, `prepaid`). If the property is missing, it implies that all the card types are supported. Instead of using this property, it is up to the server to check support for the card given the information coded into the account number.

## Card network identifiers

The W3C maintains an official list of [approved card network identifier strings](https://www.w3.org/Payments/card-network-ids), which may be used in the {{domxref("BasicCardRequest.supportedNetworks", "supportedNetworks")}} list. Those are:

- `amex`
- `cartebancaire`
- `diners`
- `discover`
- `jcb`
- `mastercard`
- `mir`
- `unionpay`
- `visa`

## Examples

In the following example, the {{domxref("PaymentRequest.PaymentRequest","PaymentRequest()")}} constructor is used to create a new payment request, which takes three objects as parameters — one containing details of the payment methods that can be used for the payment, one containing details of the actual order (such as items bought and shipping options), and an optional object that describes what data is needed to fullfil the payment (e.g., a shipping address).

The first of these three (`supportedInstruments` in the example below) contains a `data` property that has to conform to the structure defined by the `BasicCardRequest` dictionary.

```js
var supportedInstruments = [{
  supportedMethods: 'basic-card',
  data: {
    supportedNetworks: ['visa', 'mastercard', 'amex', 'jcb',
                        'diners', 'discover', 'mir', 'unionpay']
  }
}];

var details = {
  total: {label: 'Donation', amount: {currency: 'USD', value: '65.00'}},
  displayItems: [
    {
      label: 'Original donation amount',
      amount: {currency: 'USD', value: '65.00'}
    }
  ],
  shippingOptions: [
    {
      id: 'standard',
      label: 'Standard shipping',
      amount: {currency: 'USD', value: '0.00'},
      selected: true
    }
  ]
};

var options = {requestShipping: true};

try {
  var request = new PaymentRequest(supportedInstruments, details, options);
  // Add event listeners here.
  // Call show() to trigger the browser's payment flow.
  request.show().then(function(instrumentResponse) {
    // Do something with the response from the UI.
  })
  .catch(function(err) {
    // Do something with the error from request.show().
  });
} catch (e) {
  // Catch any other errors.
}
```

Once the payment flow has been triggered using {{domxref("PaymentRequest.show()")}} and the promise resolves successfully, the {{domxref("PaymentResponse")}} object available inside the fulfilled promise (`instrumentResponse` above) will have a {{domxref("PaymentResponse.details", "details")}} property that will contain response details. This has to conform to the structure defined by the {{domxref("BasicCardResponse")}} dictionary, and may look something like this:

```js
{
  "cardNumber' : '9999999999999999",
  "cardholderName' : 'Mr Dick Straw",
  "cardSecurityCode" : "999",
  "expiryMonth" : "07",
  "expiryYear" : "2021",
  "billingAddress" : {
    "country" : "GB",
    // etc. billing address is a PaymentAddress object
  }
}
```

## Specifications

This feature is no longer part of any specification.

## Browser compatibility

{{Compat}}

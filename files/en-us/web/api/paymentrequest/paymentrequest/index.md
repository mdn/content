---
title: "PaymentRequest: PaymentRequest() constructor"
short-title: PaymentRequest()
slug: Web/API/PaymentRequest/PaymentRequest
page-type: web-api-constructor
browser-compat: api.PaymentRequest.PaymentRequest
---

{{securecontext_header}}{{APIRef("Payment Request API")}}

The **`PaymentRequest()`** constructor
creates a new {{domxref("PaymentRequest")}} object which will be used to handle the
process of generating, validating, and submitting a payment request.

## Syntax

```js-nolint
new PaymentRequest(methodData, details)
new PaymentRequest(methodData, details, options)
```

### Parameters

- `methodData`

  - : Contains an array of identifiers for the payment methods the merchant website
    accepts and any associated payment method specific data. Each item in the array
    contains the following fields:

    - `supportedMethods`

      - : A string containing a [payment method identifier](/en-US/docs/Web/API/Payment_Request_API/Concepts#payment_method_identifiers). This is either a URL or one of the [standardized payment method identifiers](/en-US/docs/Web/API/Payment_Request_API/Concepts#standardized_payment_method_identifiers). The value and structure of the `data` field will vary depending on the value of the `supportedMethods` field.

    - `data`
      - : A JSON-serializable object that provides optional information that might be
        needed by the supported payment methods. This has to conform to the type expected
        by the payment handler indicated by `supportedMethods`. Developers need to consult
        whomever controls the payment methods for the expected shape of the data object. If `supportedMethods` is `secure-payment-confirmation`, then `data` needs to conform to the {{domxref("SecurePaymentConfirmationRequest")}} dictionary.

- `details`

  - : Provides information about the requested transaction. This parameter contains the
    following fields:

    - `total`
      - : The total amount of the payment request.
    - `id` {{optional_inline}}
      - : A free-form identifier for this payment request. If a value is not supplied, the
        browser will construct one.
    - `displayItems`
      - : An array of optional line items for the payment request that the user agent may
        display, such as product details, tax, and shipping.
    - `shippingOptions`
      - : The shipping options the user may choose from. If this sequence is blank, it
        indicates the merchant cannot ship to the current shipping address. The default
        shipping option may be indicated in this sequence.
    - `modifiers`

      - : Modifiers for specific payment methods; for example, adjusting the total amount
        based on the payment method. This parameter contains the following fields:

        - `additionalDisplayItems`
          - : An array of items to be appended to the `details.displayItems`
            property. This property is commonly used to add a discount or surcharge line
            item indicating the different amount in `details.modifiers.total`.
        - `data`
          - : A JSON-serializable object that provides optional information that might be
            needed by the supported payment methods.
        - `total`
          - : A total amount for the payment request that overrides value in
            details.total. This is typically used when
            `details.modifiers.additionalItems` adds a discount or a purchase
            to the request.

- `options` {{optional_inline}}

  - : Lets you set options that control the behavior of the user agent. This parameter
    contains the following fields:

    - `requestPayerName`
      - : A Boolean indicating whether the user agent should collect the payer's name and
        submit it with the payment request. The default is `false`.
    - `requestPayerEmail`
      - : A Boolean indicating whether the user agent should collect the payer's email
        address and submit it with the payment request. The default is `false`.
    - `requestPayerPhone`
      - : A Boolean indicating whether the user agent should collect the payer's phone
        number and submit it with the payment request. The default is `false`.
    - `requestShipping`
      - : A Boolean indicating whether the user agent should collect the payer's shipping
        address and submit it with the payment request. If you set this type to true, you
        should select an appropriate `shippingType`. The default is
        `false`.
    - `shippingType`
      - : Lets you specify how the user interface refers to shipping when the word
        'shipping' isn't appropriate for your use case. For example, in English speaking
        countries you would say "pizza delivery" not "pizza shipping". Valid values are
        `"shipping"`, `"delivery"`, and `"pickup"`.
        Quotation marks must be included. The default value is `"shipping"`.

### Return value

A new {{domxref("PaymentRequest")}} object, configured for use as configured by the
input parameters.

### Exceptions

- `SecurityError` {{domxref("DOMException")}}
  - : Use of this feature was blocked by a [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy).

## Examples

The following example shows minimal functionality and focuses instead on showing the
complete context of instantiating a `PaymentRequest` object.

```js
const supportedInstruments = [
  {
    supportedMethods: "https://example.com/pay",
  },
];

const details = {
  total: { label: "Donation", amount: { currency: "USD", value: "65.00" } },
  displayItems: [
    {
      label: "Original donation amount",
      amount: { currency: "USD", value: "65.00" },
    },
  ],
  shippingOptions: [
    {
      id: "standard",
      label: "Standard shipping",
      amount: { currency: "USD", value: "0.00" },
      selected: true,
    },
  ],
};

const options = { requestShipping: true };

try {
  const request = new PaymentRequest(supportedInstruments, details, options);
  // Add event listeners here.
  // Call show() to trigger the browser's payment flow.
  request
    .show()
    .then((instrumentResponse) => {
      // Do something with the response from the UI.
    })
    .catch((err) => {
      // Do something with the error from request.show().
    });
} catch (e) {
  // Catch any other errors.
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

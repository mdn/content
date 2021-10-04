---
title: PaymentAddress
slug: Web/API/PaymentAddress
tags:
  - API
  - Interface
  - Payment Request
  - Payment Request API
  - PaymentRequest
  - Reference
  - paymentAddress
browser-compat: api.PaymentAddress
---
{{APIRef("Payment Request API")}}{{SecureContext_Header}} {{Deprecated_header}}{{Non-standard_header}}

The **`PaymentAddress`** interface of the [Payment Request API](/en-US/docs/Web/API/Payment_Request_API) is used to store shipping or payment address information.

It may be useful to refer to the Universal Postal Union web site's [Addressing S42 standard](https://www.upu.int/en/Postal-Solutions/Programmes-Services/Addressing-Solutions#addressing-s42-standard) materials, which provide information about international standards for postal addresses.

## Properties

- {{domxref('PaymentAddress.addressLine')}} {{readonlyinline}}{{deprecated_inline}}
  - : An array of {{domxref("DOMString")}} objects providing each line of the address not included among the other properties. The exact size and content varies by country or location and can include, for example, a street name, house number, apartment number, rural delivery route, descriptive instructions, or post office box number.
- {{domxref('PaymentAddress.country')}} {{readonlyinline}}{{deprecated_inline}}
  - : A {{domxref("DOMString")}} specifying the country in which the address is located, using the {{interwiki("wikipedia", "ISO-3166-1 alpha-2")}} standard. The string is always given in its canonical upper-case form. Some examples of valid `country` values: `"US"`, `"GB"`, `"CN"`, or `"JP"`.
- {{domxref('PaymentAddress.city')}} {{readonlyinline}}{{deprecated_inline}}
  - : A {{domxref("DOMString")}} which contains the city or town portion of the address.
- {{domxref('PaymentAddress.dependentLocality')}} {{readonlyinline}}{{deprecated_inline}}
  - : A {{domxref("DOMString")}} giving the dependent locality or sublocality within a city, for example, a neighborhood, borough, district, or UK dependent locality.
- {{domxref('PaymentAddress.organization')}} {{readonlyinline}}{{deprecated_inline}}
  - : A {{domxref("DOMString")}} specifying the name of the organization, firm, company, or institution at the payment address.
- {{domxref('PaymentAddress.phone')}} {{readonlyinline}}{{deprecated_inline}}
  - : A {{domxref("DOMString")}} specifying the telephone number of the recipient or contact person.
- {{domxref('PaymentAddress.postalCode')}} {{readonlyinline}}{{deprecated_inline}}
  - : A {{domxref("DOMString")}} specifying a code used by a jurisdiction for mail routing, for example, the ZIP code in the United States or the PIN code in India.
- {{domxref('PaymentAddress.recipient')}} {{readonlyinline}}{{deprecated_inline}}
  - : A {{domxref("DOMString")}} giving the name of the recipient, purchaser, or contact person at the payment address.
- {{domxref('PaymentAddress.region')}} {{readonlyinline}}{{deprecated_inline}}
  - : A {{domxref("DOMString")}} containing the top level administrative subdivision of the country, for example a state, province, oblast, or prefecture.
- {{domxref('PaymentAddress.sortingCode')}} {{readonlyinline}}{{deprecated_inline}}
  - : A {{domxref("DOMString")}} providing a postal sorting code such as is used in France.

> **Note:** Properties for which values were not specified contain empty strings.

### Obsolete properties

The following properties are obsolete and should no longer be used, but may still be present in some browser versions.

- {{domxref("PaymentAddress.languageCode")}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : A {{domxref("DOMString")}} indicating the language code of the address. This identifies the language in which the address is given, and is intended to aid in localization of the display of the address.

## Methods

- {{domxref('PaymentAddress.toJSON()')}}{{deprecated_inline}}
  - : A standard serializer that returns a JSON representation of the `PaymentAddress` object's properties.

## Examples

In the following example, the {{domxref("PaymentRequest.PaymentRequest","PaymentRequest()")}} constructor is used to create a new payment request, which takes three objects as parameters — one containing details of the payment methods that can be used for the payment, one containing details of the actual order (such as items bought and shipping options), and an optional object containing further options.

The first of these three (`supportedInstruments` in the example below) contains a `data` property that has to conform to the structure defined by the payment method.

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

async function doPaymentRequest() {
  const request = new PaymentRequest(supportedInstruments, details, options);
  // Add event listeners here.
  // Call show() to trigger the browser's payment flow.
  const response = await request.show();
  // Process payment.
  const json = response.toJSON();
  const httpResponse = await fetch("/pay/", { method: "POST", body: json });
  const result = httpResponse.ok ? "success" : "failure";

  await response.complete(result);
}
doPaymentRequest();
```

Once the payment flow has been triggered using {{domxref("PaymentRequest.show()")}} and the promise resolves successfully, the {{domxref("PaymentResponse")}} object available from the fulfilled promise (`instrumentResponse` above) will have a {{domxref("PaymentResponse.details")}} property containing response details. This has to conform to the structure defined by the payment method provider.

## Browser compatibility

{{Compat}}

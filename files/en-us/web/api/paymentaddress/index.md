---
title: PaymentAddress
slug: Web/API/PaymentAddress
page-type: web-api-interface
tags:
  - API
  - Interface
  - Payment Request
  - Payment Request API
  - PaymentRequest
  - Reference
  - paymentAddress
  - Deprecated
  - Non-standard
browser-compat: api.PaymentAddress
---
{{APIRef("Payment Request API")}}{{SecureContext_Header}}{{Deprecated_Header}}{{Non-standard_Header}}

The **`PaymentAddress`** interface of the [Payment Request API](/en-US/docs/Web/API/Payment_Request_API) is used to store shipping or payment address information.

It may be useful to refer to the Universal Postal Union web site's [Addressing S42 standard](https://www.upu.int/en/Postal-Solutions/Programmes-Services/Addressing-Solutions#addressing-s42-standard) materials, which provide information about international standards for postal addresses.

## Properties

- {{domxref('PaymentAddress.addressLine')}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : An array of strings providing each line of the address not included among the other properties. The exact size and content varies by country or location and can include, for example, a street name, house number, apartment number, rural delivery route, descriptive instructions, or post office box number.
- {{domxref('PaymentAddress.country')}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : A string specifying the country in which the address is located, using the [ISO-3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) standard. The string is always given in its canonical upper-case form. Some examples of valid `country` values: `"US"`, `"GB"`, `"CN"`, or `"JP"`.
- {{domxref('PaymentAddress.city')}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : A string which contains the city or town portion of the address.
- {{domxref('PaymentAddress.dependentLocality')}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : A string giving the dependent locality or sublocality within a city, for example, a neighborhood, borough, district, or UK dependent locality.
- {{domxref('PaymentAddress.organization')}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : A string specifying the name of the organization, firm, company, or institution at the payment address.
- {{domxref('PaymentAddress.phone')}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : A string specifying the telephone number of the recipient or contact person.
- {{domxref('PaymentAddress.postalCode')}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : A string specifying a code used by a jurisdiction for mail routing, for example, the ZIP code in the United States or the PIN code in India.
- {{domxref('PaymentAddress.recipient')}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : A string giving the name of the recipient, purchaser, or contact person at the payment address.
- {{domxref('PaymentAddress.region')}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : A string containing the top level administrative subdivision of the country, for example a state, province, oblast, or prefecture.
- {{domxref('PaymentAddress.sortingCode')}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : A string providing a postal sorting code such as is used in France.

> **Note:** Properties for which values were not specified contain empty strings.

## Methods

- {{domxref('PaymentAddress.toJSON()')}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : A standard serializer that returns a JSON representation of the `PaymentAddress` object's properties.

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

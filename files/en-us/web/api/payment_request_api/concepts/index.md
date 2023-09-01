---
title: Payment processing concepts
slug: Web/API/Payment_Request_API/Concepts
page-type: guide
spec-urls:
  - https://w3c.github.io/payment-request/
  - https://w3c.github.io/payment-method-id/
---

{{securecontext_header}}{{DefaultAPISidebar("Payment Request API")}}

The [Payment Request API](/en-US/docs/Web/API/Payment_Request_API) makes it easy to handle payments in a website or app. In this article, we'll take a look at how the API operates and what each of its components does.

## Terminology

Before getting into the details of how the API operates, there are items you'll need to know.

- payee (or merchant)
  - : The merchant—either a person or an organization—whose website or app wishes to receive money through the Payment Request API.
- payer
  - : The person or organization making a purchase using a website or app. The payer authenticates themselves, then authorizes payment, as required by the payment method.
- payment method
  - : The instrument by which payment is submitted, such as a credit card or online payment service.
- payment method provider
  - : An organization that provides the technology needed to submit payments using a given payment method. For example, when using a credit card to pay, the credit card processing service is the payment method provider.
- payment handler
  - : The implementation of the code needed to interface with a particular payment method provider in order to process payments.

Some payment handlers use **merchant validation**, which is the process of validating the identity of a merchant in some way, usually using some form of cryptographic response such as a public key. Validated merchants are allowed to interface with a payment handler.

## Payment method identifiers

Payment handlers are identified by **payment method identifiers**, which are strings uniquely identifying the payment handler. These may be either one of the standardized payment handler identifiers, or a URL used by the payment processing service to both identify itself and to handle payments.

### Standardized payment method identifiers

There is currently only one registered [standardized payment method identifier](https://www.w3.org/TR/payment-method-id/#registry) (more may be added in the future):

- `basic-card`
  - : Payments are handled by the Basic Card Payment specification. See {{domxref("BasicCardRequest")}} for details. **_Should have an article about this specification and how to use it_.**

### URL-based payment method identifiers

These may vary substantially depending on the specifics of the service, and a given processing service may have multiple URLs used, depending on the version of their API, their communication technology, and so forth.

- `https://apple.com/apple-pay`
  - : Payments are handled using the [Apple Pay](https://www.apple.com/apple-pay/) service. Currently, Apple Pay is only supported by Safari.
- `https://google.com/pay`
  - : Payments are processed by [Google Pay](https://pay.google.com/payments/home). This is currently supported only by Chrome and Chromium-based browsers.

## Functions of a payment handler

A {{Glossary("user agent")}} may provide built-in support for certain types of payments. In addition, the [Payment Handler API](https://w3c.github.io/payment-handler/) can be used to establish support for additional payment method providers, in browsers that support it. In either case, the payment handler is responsible for:

1. **Making sure a payment can be made.** The conditions that make payment possible vary depending on the payment method and the user's payment request; for example, if the user chooses to pay using a credit card that isn't accepted by the payee, the payment can't be made.
2. **If merchant validation is supported by the payment handler, respond to merchant validation requests from the user agent.** See [Merchant validation](#merchant_validation) for details.
3. **Verify that the information provided by the user results in a valid transaction.** This results in the creation and returning of a payment method-specific object that contains the information needed to handle the transaction.

## Merchant validation

Some payment handlers use _merchant validation_, which is the process of validating the identity of a merchant in some way, usually using some form of cryptographic challenge. If the merchant doesn't successfully validate, it's not allowed to use the payment handler.

The exact validation technology depends on the payment handler, and merchant validation is entirely optional. In the end, the only thing that the website or app is responsible for is fetching the merchant's validation key and passing it into the event's {{domxref("MerchantValidationEvent.complete", "complete()")}} method.

```js
paymentRequest.onmerchantvalidation = (event) => {
  event.complete(fetchValidationData(event.validationURL));
};
```

In this example, `fetchValidationData()` is a function which loads the payment handler specific identifying information from the address given by `validationURL`. Note this function must go through the merchant server, because a client typically does not access the validation URL itself.

By then delivering this data (or a {{jsxref("Promise")}} which resolves to the loaded data) to the payment handler by passing it into `complete()`, the payment handler can use the retrieved data and whatever algorithm and other data to support in order to verify that the merchant can use the payment handler.

Thus, it's important to note that the {{Glossary("user agent")}} never sends a {{domxref("PaymentRequest.merchantvalidation_event", "merchantvalidation")}} event, unless the user agent itself implements a payment handler. For instance, Safari has integrated support for Apple Pay, so the Apple Pay payment handler uses this to ensure that Apple Pay can be used to pay the merchant by sending `merchantvalidation` to the client, instructing it to fetch the server's validation data and deliver it to the payment handler by calling `complete()`.

## Specifications

{{Specifications}}

## See also

- [Payment Request API](/en-US/docs/Web/API/Payment_Request_API)
- [Using the Payment Request API](/en-US/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Introducing the Payment Request API for Apple Pay](https://webkit.org/blog/8182/introducing-the-payment-request-api-for-apple-pay/)
- [Google Pay API PaymentRequest Tutorial](https://developers.google.com/pay/api/web/guides/paymentrequest/tutorial)

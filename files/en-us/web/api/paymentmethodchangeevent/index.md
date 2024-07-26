---
title: PaymentMethodChangeEvent
slug: Web/API/PaymentMethodChangeEvent
page-type: web-api-interface
browser-compat: api.PaymentMethodChangeEvent
---

{{securecontext_header}}{{APIRef("Payment Request API")}}

The **`PaymentMethodChangeEvent`** interface of the [Payment Request API](/en-US/docs/Web/API/Payment_Request_API) describes the {{domxref("PaymentRequest/paymentmethodchange_event", "paymentmethodchange")}} event which is fired by some payment handlers when the user switches payment instruments (e.g., a user selects a "store" card to make a purchase while using Apple Pay).

{{InheritanceDiagram}}

## Constructor

- {{domxref("PaymentMethodChangeEvent.PaymentMethodChangeEvent", "PaymentMethodChangeEvent()")}}
  - : Creates and returns a new `PaymentMethodChangeEvent` object.

## Instance properties

_In addition to the properties below, this interface includes properties inherited from {{domxref("PaymentRequestUpdateEvent")}}._

- {{domxref("PaymentMethodChangeEvent.methodDetails", "methodDetails")}} {{ReadOnlyInline}}
  - : An object containing payment method-specific data useful when handling a payment method change. If no such information is available, this value is `null`.
- {{domxref("PaymentMethodChangeEvent.methodName", "methodName")}} {{ReadOnlyInline}}
  - : A string containing the payment method identifier, a string which uniquely identifies a particular payment method. This identifier is usually a URL used during the payment process, but may be a standardized non-URL string as well, such as `basic-card`. The default value is the empty string, `""`.

## Instance methods

_This interface includes methods inherited from {{domxref("PaymentRequestUpdateEvent")}}._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

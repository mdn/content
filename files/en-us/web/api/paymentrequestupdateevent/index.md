---
title: PaymentRequestUpdateEvent
slug: Web/API/PaymentRequestUpdateEvent
page-type: web-api-interface
tags:
  - API
  - Interface
  - Payment Request
  - Payment Request API
  - PaymentRequestUpdateEvent
  - Reference
  - Secure context
browser-compat: api.PaymentRequestUpdateEvent
---
{{securecontext_header}}{{APIRef("Payment Request API")}}

The **`PaymentRequestUpdateEvent`** interface is used for events sent to a {{domxref("PaymentRequest")}} instance when changes are made to shipping-related information for a pending {{domxref("PaymentRequest")}}. Those events are:

- {{domxref("PaymentRequest.shippingaddresschange_event", "shippingaddresschange")}} {{securecontext_inline}}
  - : Dispatched whenever the user changes their shipping address.
- {{domxref("PaymentRequest.shippingoptionchange_event", "shippingoptionchange")}} {{securecontext_inline}}
  - : Dispatched whenever the user changes a shipping option.

{{InheritanceDiagram}}

## Constructor

- {{domxref("PaymentRequestUpdateEvent.PaymentRequestUpdateEvent()","PaymentRequestUpdateEvent()")}} {{securecontext_inline}}
  - : Creates a new `PaymentRequestUpdateEvent` object.

## Properties

_Provides only the properties inherited from its parent interface, {{domxref("Event")}}._

## Methods

_In addition to methods inherited from the parent interface, {{domxref("Event")}}, `PaymentRequestUpdateEvent` offers the following methods:_

- {{domxref("PaymentRequestUpdateEvent.updateWith()")}} {{securecontext_inline}}
  - : If the event handler determines that information included in the payment request needs to be changed, or that new information needs to be added, it calls `updateWith()` with the information that needs to be replaced or added.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Payment Request API](/en-US/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)

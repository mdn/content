---
title: PaymentRequestEvent
slug: Web/API/PaymentRequestEvent
page-type: web-api-interface
tags:
  - API
  - Experimental
  - Interface
  - Payment Request API
  - PaymentRequestEvent
  - Reference
  - payment
browser-compat: api.PaymentRequestEvent
---
{{SeeCompatTable}}{{APIRef("Payment Request API")}}

The **`PaymentRequestEvent`** interface of the [Payment Request API](/en-US/docs/Web/API/Payment_Request_API) is the object passed to a payment handler when a {{domxref("PaymentRequest")}} is made.

{{InheritanceDiagram}}

## Constructor

- {{domxref("PaymentRequestEvent.PaymentRequestEvent","PaymentRequestEvent()")}} {{Experimental_Inline}}
  - : Creates a new `PaymentRequestEvent` object.

## Properties

- {{domxref("PaymentRequestEvent.instrumentKey","instrumentKey")}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Returns a {{domxref("PaymentInstrument")}} object reflecting the payment instrument selected by the user or an empty string if the user has not registered or chosen a payment instrument.
- {{domxref("PaymentRequestEvent.methodData","methodData")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns an array of {{domxref("PaymentMethodData")}} objects containing payment method identifiers for the payment methods that the web site accepts and any associated payment method specific data.
- {{domxref("PaymentRequestEvent.modifiers","modifiers")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns an array of objects containing changes to payment details.
- {{domxref("PaymentRequestEvent.paymentRequestId","paymentRequestId")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the ID of the {{domxref("PaymentRequest")}} object.
- {{domxref("PaymentRequestEvent.paymentRequestOrigin","paymentRequestOrigin")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the origin where the {{domxref("PaymentRequest")}} object was initialized.
- {{domxref("PaymentRequestEvent.topOrigin","topOrigin")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the top-level origin where the {{domxref("PaymentRequest")}} object was initialized.
- {{domxref("PaymentRequestEvent.total","total")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the total amount being requested for payment.

## Methods

- {{domxref("PaymentRequestEvent.openWindow","openWindow()")}} {{Experimental_Inline}}
  - : Opens the specified URL in a new window, if and only if the given URL is on the same origin as the calling page. It returns a {{jsxref("Promise")}} that resolves with a reference to a {{domxref("WindowClient")}}.
- {{domxref("PaymentRequestEvent.respondWith","respondWith()")}} {{Experimental_Inline}}
  - : Prevents the default event handling and allows you to provide a {{jsxref("Promise")}} for a {{domxref("PaymentResponse")}} object yourself.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

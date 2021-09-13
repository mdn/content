---
title: PaymentItem
slug: Web/API/PaymentItem
tags:
  - API
  - Commerce
  - Dictionary
  - Payment Request
  - Payment Request API
  - PaymentItem
  - Reference
  - payment
browser-compat: api.PaymentItem
---
{{securecontext_header}}{{APIRef("Payment Request API")}}

The {{domxref("PaymentItem")}} dictionary is used by the [Payment Request API](/en-US/docs/Web/API/Payment_Request_API) to describe a single line item on a payment request. This might be an item or service being purchased or a tax or other charge.

## Properties

- {{domxref("PaymentItem.amount", "amount")}} {{securecontext_inline}}
  - : A {{domxref("PaymentCurrencyAmount")}} object describing the monetary value of the item.
- {{domxref("PaymentItem.label", "label")}} {{securecontext_inline}}
  - : A string specifying a human-readable name or description of the item or service being charged for. This may be displayed to the user by the {{Glossary("user agent")}}, depending on the design of the interface.
- {{domxref("PaymentItem.pending", "pending")}} {{securecontext_inline}}
  - : A Boolean value which is `true` if the specified `amount` has not yet been finalized. This can be used to show items such as shipping or tax amounts that depend upon the selection of shipping address, shipping option, or so forth. The user agent may show this information but is not required to do so.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Payment Request API](/en-US/docs/Web/API/Payment_Request_API)
- [Using the Payment Request API](/en-US/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)

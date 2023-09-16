---
title: "PaymentRequest: shippingoptionchange event"
short-title: shippingoptionchange
slug: Web/API/PaymentRequest/shippingoptionchange_event
page-type: web-api-event
status:
  - deprecated
  - non-standard
browser-compat: api.PaymentRequest.shippingoptionchange_event
---

{{APIRef("Payment Request API")}}{{SecureContext_Header}}{{Deprecated_Header}}{{Non-standard_Header}}

For payment requests that request shipping information, and for which shipping options are offered, the **`shippingoptionchange`** event is sent to the {{domxref("PaymentRequest")}} whenever the user chooses a shipping option from the list of available options.

The string identifying the currently-selected shipping option can be found in the {{domxref("PaymentRequest.shippingOption", "shippingOption")}} property.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("shippingoptionchange", (event) => {});

onshippingoptionchange = (event) => {};
```

## Event type

A {{domxref("PaymentRequestUpdateEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("PaymentRequestUpdateEvent")}}

## Event properties

_Provides only the properties inherited from {{domxref("Event")}}._

## Examples

This code snippet sets up a handler for the `shippingoptionchange` event. The code recalculates the total charge for the payment based on the selected shipping option. For example, if there are three options (such as "Free ground shipping", "2-day air", and "Next day"), each time the user chooses one of those options, this event handler is called to recalculate the total based on the changed shipping option.

```js
paymentRequest.addEventListener(
  "shippingoptionchange",
  (event) => {
    const value = calculateNewTotal(paymentRequest.shippingOption);
    const total = {
      currency: "EUR",
      label: "Total due",
      value,
    };
    event.updateWith({ total });
  },
  false,
);
```

After calling a custom function, `calculateNewTotal()`, to compute the updated total based on the newly-selected shipping option as specified by the {{domxref("PaymentRequest.shippingOption", "shippingOption")}}. The revised total is submitted back to the payment request by calling the event's {{domxref("PaymentRequestUpdateEvent.updateWith", "updateWith()")}} method.

You can also create an event handler for `shippingoptionchange` using its corresponding event handler property, `onshippingoptionchange`:

```js
paymentRequest.onshippingoptionchange = (event) => {
  const value = calculateNewTotal(paymentRequest.shippingOption);
  const total = {
    currency: "EUR",
    label: "Total due",
    value,
  };
  event.updateWith({ total });
};
```

## Browser compatibility

{{Compat}}

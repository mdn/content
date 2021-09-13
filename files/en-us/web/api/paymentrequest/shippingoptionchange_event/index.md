---
title: 'PaymentRequest: shippingoptionchange event'
slug: Web/API/PaymentRequest/shippingoptionchange_event
tags:
  - API
  - Commerce
  - Payment Request
  - Payment Request API
  - PaymentRequest
  - Reference
  - Shipping
  - events
  - onshippingoptionchange
  - payment
  - shippingoptionchange
browser-compat: api.PaymentRequest.shippingoptionchange_event
---
{{securecontext_header}}{{APIRef("Payment Request API")}}{{Deprecated_header}}{{Non-standard_header}}

For payment requests that request shipping information, and for which shipping options are offered, the **`shippingoptionchange`** event is sent to the {{domxref("PaymentRequest")}} whenever the user chooses a shipping option from the list of available options.

The string identifying the currently-selected shipping option can be found in the {{domxref("PaymentRequest.shippingOption", "shippingOption")}} property.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bubbles</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Cancelable</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{domxref("PaymentRequestUpdateEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>
        {{domxref("PaymentRequest.onshippingoptionchange", "onshippingoptionchange")}}
      </td>
    </tr>
  </tbody>
</table>

## Examples

This code snippet sets up a handler for the `shippingoptionchange` event. The code recalculates the total charge for the payment based on the selected shipping option. For example, if there are three options (such as "Free ground shipping", "2-day air", and "Next day"), each time the user chooses one of those options, this event handler is called to recalculate the total based on the changed shipping option.

```js
paymentRequest.addEventListener("shippingoptionchange", event => {
  const value = calculateNewTotal(paymentRequest.shippingOption);
  const total = {
    currency: "EUR",
    label: "Total due",
    value,
  };
  event.updateWith({ total });
}, false);
```

After caling a custom function, `calculateNewTotal()`, to compute the updated total based on the newly-selected shipping option as specified by the {{domxref("PaymentRequest.shippingOption", "shippingOption")}}. The revised total is submitted back to the payment request by calling the event's {{domxref("PaymentRequestUpdateEvent.updateWith", "updateWith()")}} method.

You can also create an event handler for `shippingoptionchange` using its corresponding event handler property, {{domxref("PaymentReques.onshippingoptionchange", "onshippingoptionchange")}}:

```js
paymentRequest.onshippingoptionchange = event => {
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

## See also

- {{domxref("PaymentRequest.onshippingoptionchange", "onshippingoptionchange")}} event handler property

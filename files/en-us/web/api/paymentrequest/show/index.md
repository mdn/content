---
title: "PaymentRequest: show() method"
short-title: show()
slug: Web/API/PaymentRequest/show
page-type: web-api-instance-method
browser-compat: api.PaymentRequest.show
---

{{securecontext_header}}{{APIRef("Payment Request API")}}

The **{{domxref('PaymentRequest')}}** interface's
**`show()`** method instructs the user agent to begin the
process of showing and handling the user interface for the payment request to the
user.

Only one payment request can be in the process of being handled at once, across all
documents. Once one `PaymentRequest`'s `show()` method has been
called, any other call to `show()` will by rejected with an
`AbortError` until the returned promise has been concluded, either by being
fulfilled with a {{domxref("PaymentResponse")}} indicating the results of the payment
request, or by being rejected with an error.

> **Note:** In reality, despite the fact that the specification says this
> can't be done, some browsers, including Firefox, support multiple active payment
> requests at a time.

If your architecture doesn't necessarily have all of the data ready to go at the moment
it instantiates the payment interface by calling `show()`, specify the
`detailsPromise` parameter, providing a {{jsxref("Promise")}} that is
fulfilled once the data is ready. If this is provided, `show()` will not
allow the user to interact with the payment interface until the promise is fulfilled, so
that data can be updated prior to the user engaging with the payment process.

Processing the result and, if necessary, calling {{domxref("PaymentResponse.retry()")}}
to retry a failed payment can all be done either asynchronously or synchronously,
depending on your needs. For the best user experience, asynchronous solutions are
typically the best way to go. Most examples on MDN and elsewhere use
[`async`](/en-US/docs/Web/JavaScript/Reference/Statements/async_function)/[`await`](/en-US/docs/Web/JavaScript/Reference/Operators/await)
to wait asynchronously while results are validated and so forth.

## Syntax

```js-nolint
show()
show(detailsPromise)
```

### Parameters

- `detailsPromise` {{optional_inline}}

  - : An optional {{jsxref("Promise")}} that you can provide if your architecture requires
    that the payment request's details need to be updated between instantiating the
    payment interface and the user beginning to interact with it. The promise should
    resolve with an object containing the updated information:

    - `displayItems` {{optional_inline}}

      - : An array of objects, each describing one line item for the payment request. These represent the line items on a receipt or invoice, each with the following properties:

        - `amount`
          - : An object describing the monetary value of the item. This object includes the following fields:
            - `currency`
              - : A string containing a valid 3-letter [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html) currency identifier ([ISO 4217](https://en.wikipedia.org/wiki/ISO_4217)) indicating the currency used for the payment `value`.
            - `value`
              - : A string containing a valid decimal value representing the mount of currency constituting the payment amount. This string must only contain an optional leading "-" to indicate a negative value, then one or more digits from 0 to 9, and an optional decimal point (".", regardless of locale) followed by at least one more digit. No whitespace is permitted.
        - `label`
          - : A string specifying a human-readable name or description of the item or service being charged for. This may be displayed to the user by the {{Glossary("user agent")}}, depending on the design of the interface.
        - `pending`
          - : A Boolean value which is `true` if the specified `amount` has not yet been finalized. This can be used to show items such as shipping or tax amounts that depend upon the selection of shipping address, shipping option, or so forth. The user agent may show this information but is not required to do so.

    - `error` {{optional_inline}} {{deprecated_inline}}
      - : A string specifying an error message to present to the user*.* When calling {{domxref("PaymentRequestUpdateEvent.updateWith", "updateWith()")}}, including `error` in the updated data causes the {{Glossary("user agent")}} to display the text as a general error message. For address field specific errors, use `shippingAddressErrors`.
    - `modifiers` {{optional_inline}}
      - : An array of {{domxref("PaymentDetailsModifier")}} objects, each describing a modifier for particular payment method identifiers. For example, you can use one to adjust the total payment amount based on the selected payment method ("5% cash discount!").
    - `shippingAddressErrors` {{optional_inline}} {{deprecated_inline}}
      - : An {{domxref("AddressErrors")}} object which includes an error message for each property of the shipping address that could not be validated.
    - `shippingOptions` {{optional_inline}}
      - : An array of {{domxref("PaymentShippingOption")}} objects, each describing one available shipping option from which the user may choose.
    - `total` {{optional_inline}}
      - : An object with the same properties as the objects in `displayItems` providing an updated total for the payment. Make sure this equals the sum of all of the items in `displayItems`. _This is not calculated automatically_. You must update this value yourself anytime the total amount due changes. This lets you have flexibility for how to handle things like tax, discounts, and other adjustments to the total price charged.

### Return value

A {{jsxref("Promise")}} that eventually resolves with a {{domxref("PaymentResponse")}}.
The promise is resolved when the user accepts the payment request (such as by clicking a
"Pay" button in the browser's payment sheet).

### Exceptions

Exceptions are not thrown but returned when the {{jsxref("Promise")}} rejects.

- `AbortError` {{domxref("DOMException")}}

  - : Returned if the
    {{Glossary("user agent")}} is already showing a payment panel. Only one payment
    panel may be visible at a time _across all documents loaded by the user
    agent_.

    The promise is also rejected with `AbortError` if the user cancels the
    payment request.

- `InvalidStateError` {{domxref("DOMException")}}
  - : Returned if the same payment has
    already been shown for this request (its state is `interactive` because it
    is being shown already).
- `NotSupportedError` {{domxref("DOMException")}}
  - : Returned if the user agent does not
    support the payment methods specified when the
    {{domxref("PaymentRequest.PaymentRequest","PaymentRequest")}} constructor was called.
- `SecurityError` {{domxref("DOMException")}}
  - : Returned if the call to
    `show()` was not in response to a user action, such as a {{domxref("Element/click_event", "click")}}
    or {{domxref("Element/keyup_event", "keyup")}} event. Other reasons a `SecurityError` may be thrown
    are at the discretion of the user agent, and may include situations such as too many
    calls to `show()` being made in a short time or `show()` being
    called while payment requests are blocked by parental controls.

## Security

[Transient user activation](/en-US/docs/Web/Security/User_activation) is required. The user has to interact with the page or a UI element in order for this feature to work.

## Usage notes

The most common patterns for using `show()` involve either the
[`async`](/en-US/docs/Web/JavaScript/Reference/Statements/async_function)/[`await`](/en-US/docs/Web/JavaScript/Reference/Operators/await)
syntax or the use of `show().then().catch()` to handle the response and any
possible rejection. Those look like this:

### async/await syntax

Using `await` to wait for a promise to be resolved makes it possible to
write the code to handle payments particularly cleanly:

```js
async function processPayment() {
  try {
    const payRequest = new PaymentRequest(methodData, details, options);

    payRequest.onshippingaddresschange = (ev) =>
      ev.updateWith(checkAddress(payRequest));
    payRequest.onshippingoptionchange = (ev) =>
      ev.updateWith(checkShipping(payRequest));

    const response = await payRequest.show();
    await validateResponse(response);
  } catch (err) {
    /* handle the error; AbortError usually means a user cancellation */
  }
}
```

In this code, the methods `checkAddress()` and `checkShipping()`,
respectively, check the shipping address and the shipping option changes and supply in
response either an object or a promise to return one;
this object contains the fields in the {{domxref("PaymentResponse")}} which have been or
need to be changed.

The `validateResponse()` method, below, is called once `show()`
returns, in order to look at the returned `response` and either submit the
payment or reject the payment as failed:

```js
async function validateResponse(response) {
  try {
    if (await checkAllValues(response)) {
      await response.complete("success");
    } else {
      await response.complete("fail");
    }
  } catch (err) {
    await response.complete("fail");
  }
}
```

Here, a custom function called `checkAllValues()` looks at each value in the
`response` and ensures that they're valid, returning `true` if
every field is valid or `false` if any are not. If and only if every field is
valid, the {{domxref("PaymentResponse.complete", "complete()")}} method is called on the
response with the string `"success"`, which indicates that everything is
valid and that the payment can complete accordingly.

If any fields have unacceptable values, or if an exception is thrown by the previous
code, `complete()` is called with the string `"fail"`, which
indicates that the payment process is complete and failed.

Instead of immediately failing, you could choose to call
{{domxref("PaymentResponse.retry", "retry()")}} on the response object to ask the user
agent to try to process the payment again; this should usually only be done after the
user has made any needed corrections to the order.

Starting the payment process, in the end, is as simple as calling the
`processPayment()` method.

### then/catch syntax

You can also use the older promise-based approach to work with payments, using the
{{jsxref("Promise.then", "then()")}} and {{jsxref("Promise.catch", "catch()")}}
functions on the promise returned by `show()`:

```js
function processPayment() {
  const payRequest = new PaymentRequest(methodData, details, options);

  payRequest.onshippingaddresschange = (ev) =>
    ev.updateWith(checkAddress(payRequest));
  payRequest.onshippingoptionchange = (ev) =>
    ev.updateWith(checkShipping(payRequest));

  payRequest
    .show()
    .then((response) => validateResponse(response))
    .catch((err) => handleError(err));
}
```

This is functionally equivalent to the `processPayment()` method using the
`await` syntax.

```js
function validateResponse(response) {
  checkAllValues(response)
    .then((response) => response.complete("success"))
    .catch((response) => response.complete("fail"));
}
```

You could even have `checkAllValues()` be a synchronous function, although
that may have performance implications you don't want to deal with:

```js
function validateResponse(response) {
  if (checkAllValues(response)) {
    response.complete("success");
  } else {
    response.complete("fail");
  }
}
```

See the article [Using promises](/en-US/docs/Web/JavaScript/Guide/Using_promises) for more information if you need more information about working with
promises.

## Examples

In the following example, a `PaymentRequest` object is instantiated before
the `show()` method is called. This method triggers the user agent's built-in
process for retrieving payment information from the user. The `show()` method
returns a {{jsxref('Promise')}} that resolves to a {{domxref("PaymentResponse")}} object
when the user interaction is complete. The developer then uses the information in
the `PaymentResponse` object to format and send payment data to the server.
You should send the payment information to the server asynchronously so that the final
call to {{domxref("paymentResponse.complete()")}} can indicate the success or failure of
the payment.

```js
button.onclick = async function handlePurchase() {
  // Initialization of PaymentRequest arguments are excerpted for the sake of
  // brevity.
  const payment = new PaymentRequest(methods, details, options);
  try {
    const response = await payment.show();
    // Process response here, including sending payment instrument
    // (e.g., credit card) information to the server.
    // paymentResponse.methodName contains the selected payment method
    // paymentResponse.details contains a payment method specific response
    await response.complete("success");
  } catch (err) {
    console.error("Uh oh, something bad happened", err.message);
  }
};
```

The following example shows how to update the payment sheet as it's being presented to
the end-user.

```js
async function requestPayment() {
  // We start with AU$0 as the total.
  const initialDetails = {
    total: {
      label: "Total",
      amount: { value: "0", currency: "AUD" },
    },
  };
  const request = new PaymentRequest(methods, initialDetails, options);
  // Check if the user supports the `methods`
  if (!(await request.canMakePayment())) {
    return; // no, so use a web form instead.
  }
  // Let's update the total as the sheet is shown
  const updatedDetails = {
    total: {
      label: "Total",
      amount: { value: "20", currency: "AUD" },
    },
  };
  const response = await request.show(updatedDetails);
  // Check response, etc.
}

document.getElementById("buyButton").onclick = requestPayment;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Payment Request API](/en-US/docs/Web/API/Payment_Request_API)
- [Using the Payment Request API](/en-US/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- {{domxref('PaymentRequest.abort()')}}
- {{domxref("PaymentRequest.retry()")}}
- {{domxref("PaymentRequest.complete()")}}
- {{domxref("PaymentResponse")}}

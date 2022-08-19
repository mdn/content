---
title: PaymentResponse.retry()
slug: Web/API/PaymentResponse/retry
page-type: web-api-instance-method
tags:
  - API
  - Commerce
  - Method
  - Payment Request
  - Payment Request API
  - PaymentResponse
  - Reference
  - Web Payments
  - payment
  - retry
browser-compat: api.PaymentResponse.retry
---
{{securecontext_header}}{{APIRef("Payment Request API")}}

The {{domxref("PaymentResponse")}} interface's
**`retry()`** method makes it possible to ask the user to
retry a payment after an error occurs during processing.

This lets your app
gracefully deal with situations such as invalid shipping addresses or declined credit
cards.

## Syntax

```js
retry(errorFields)
```

### Parameters

- `errorFields`

  - : An object, with the following properties:
    - `error` {{optional_inline}}
      - : A general description of a payment error from which the user may attempt to recover by retrying the payment, possibly after correcting mistakes in the payment information. `error` can be provided all by itself to provide only a generic error message, or in concert with the other properties to serve as an overview while other properties' values guide the user to errors in specific fields in the payment form.
    - `paymentMethod {{optional_inline}}
      - : Any payment-method-specific errors which may have occurred. This object's contents will vary depending on the payment method used.

### Return value

A {{jsxref("Promise")}} which is resolved when the payment is successfully completed.
The promise is rejected with an appropriate exception value if the payment fails again.

Typically you will use this by calling {{domxref("PaymentRequest.show", "show()")}},
then entering a loop or recursive function that checks the
{{domxref("PaymentResponse")}} for errors or other reasons to retry the payment request.
If a retry is needed, the loop calls `retry()`, then loops back to check the
response when it comes in. The loop exits only when the user either cancels the payment
request or the request is successful.

See the [example](#examples) below for a thorough example, but the basic
concept, in outline form, is:

1. Create a new {{domxref("PaymentRequest")}}
    (`new` {{domxref("PaymentRequest.PaymentRequest", "PaymentRequest()")}})
2. Display the payment request ({{domxref("PaymentRequest.show()")}}
3. If `show()` resolves, the returned {{domxref("PaymentResponse")}}
    describes the requested payment and the options chosen by the user. Continue with the following steps:

    1. Validate the returned response; if there are any fields whose values are not
        acceptable, call the response's {{domxref("PaymentResponse.complete",
        "complete()")}} method with a value of `"fail"` to indicate failure.
    2. If the response's data is valid and acceptable, call
        `complete("success")` to finalize the payment and process it.

4. If `show()` is rejected, the payment request failed, usually because
    either there's already one being processed, because the {{Glossary("user agent")}}
    doesn't support any of the specified payment methods, or because of a security issue.
    See the [list of exceptions](/en-US/docs/Web/API/PaymentRequest/show#exceptions) for `show()` for further details. Call
    `complete("fail")` to close the payment request.

```js
async function handlePayment() {
  const payRequest = new PaymentRequest(methodData, details, options);

  try {
    let payResponse = await payRequest.show();

    while (validate(payResponse)) {
      /* let the user edit the payment information,
         wait until they submit */
      await response.retry();
    }
    await payResponse.complete("success");
  } catch (err) {
    /* handle the exception */
  }
}
```

## Examples

```js
async function doPaymentRequest() {
  const request = new PaymentRequest(methodData, details, options);
  const response = await request.show();
  await recursiveValidate(request, response);
  await response.complete("success");
}

// Keep validating until the data looks good!
async function recursiveValidate(request, response) {
  const promisesToFixThings = [];
  const errors = await validate(request, response);
  if (!errors) {
    return;
  }
  if (errors.shippingAddress) {
    // "shippingaddresschange" fired at request object
    const promise = fixField(request, "shippingaddresschange", shippingValidator);
    promisesToFixThings.push(promise);
  }
  if (errors.payer) {
    // "payerdetailchange" fired at response object
    const promise = fixField(response, "payerdetailchange", payerValidator);
    promisesToFixThings.push(promise);
  }
  await Promise.all([response.retry(errors), ...promisesToFixThings]);
  await recursiveValidate(request, response);
}

function fixField(requestOrResponse, event, validator) {
  return new Promise((resolve) => {
    // Browser keeps calling this until promise resolves.
    requestOrResponse.addEventListener(event, async function listener(ev) {
      const promiseToValidate = validator(requestOrResponse);
      ev.updateWith(promiseToValidate);
      const errors = await promiseToValidate;
      if (!errors) { // yay! fixed!
        event.removeEventListener(event, listener);
        resolve();
      }
    });
  });
}

doPaymentRequest();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("PaymentResponse")}} interface.

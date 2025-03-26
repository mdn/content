---
title: Using the Payment Request API
slug: Web/API/Payment_Request_API/Using_the_Payment_Request_API
page-type: guide
---

{{DefaultAPISidebar("Payment Request API")}}{{securecontext_header}}

The [Payment Request API](/en-US/docs/Web/API/Payment_Request_API) provides a browser-based method of connecting users and their preferred payment systems and platforms to merchants that they want to pay for goods and services. This article is a guide to making use of the [Payment Request API](/en-US/docs/Web/API/Payment_Request_API), with examples and suggested best practices.

## The basics of making a payment

This section details the basics of using the Payment Request API to make a payment.

> [!NOTE]
> The code snippets from this section are from our [Feature detect support demo](https://github.com/mdn/dom-examples/blob/main/payment-request/feature-detect-support.html).

### Creating a new payment request object

A payment request always starts with the creation of a new {{domxref("PaymentRequest")}} object — using the {{domxref("PaymentRequest.PaymentRequest", "PaymentRequest()")}} constructor. This takes two mandatory parameters and one option parameter:

- `methodData` — an object containing information concerning the payment provider, such as what payment methods are supported, etc.
- `details` — an object containing information concerning the specific payment, such as the total payment amount, tax, shipping cost, etc.
- `options` (optional) — an object containing additional options related to the payment.

So for example, you could create a new `PaymentRequest` instance like so:

```js
const request = new PaymentRequest(
  buildSupportedPaymentMethodData(),
  buildShoppingCartDetails(),
);
```

The functions invoked inside the constructor return the required object parameters:

```js
function buildSupportedPaymentMethodData() {
  // Example supported payment methods:
  return [{ supportedMethods: "https://example.com/pay" }];
}

function buildShoppingCartDetails() {
  // Hardcoded for demo purposes:
  return {
    id: "order-123",
    displayItems: [
      {
        label: "Example item",
        amount: { currency: "USD", value: "1.00" },
      },
    ],
    total: {
      label: "Total",
      amount: { currency: "USD", value: "1.00" },
    },
  };
}
```

### Starting the payment process

Once the `PaymentRequest` object has been created, you call the {{domxref("PaymentRequest.show()")}} method on it to initiate the payment request. This returns a promise that fulfills with a {{domxref("PaymentResponse")}} object if the payment is successful:

```js
request.show().then((paymentResponse) => {
  // Here we would process the payment. For this demo, simulate immediate success:
  paymentResponse.complete("success").then(() => {
    // For demo purposes:
    introPanel.style.display = "none";
    successPanel.style.display = "block";
  });
});
```

This object provides the developer with access to details they can use to complete the logical steps required after the payment completes, such as an email address to contact the customer, a shipping address for mailing goods out to them, etc. In the code above, you'll see that we've called the {{domxref("PaymentResponse.complete()")}} method to signal that the interaction has finished — you'd use this to carry out finishing steps, like updating the user interface to tell the user the transaction is complete, etc.

### Other useful payment request methods

There are some other useful payment request methods worth knowing about.

{{domxref("PaymentRequest.canMakePayment()")}} can be used to check whether the `PaymentRequest` object is capable of making a payment before you start the payment process. It returns a promise that fulfills with a boolean indicating whether it is or not, for example:

```js
// Dummy payment request to check whether payment can be made
new PaymentRequest(buildSupportedPaymentMethodData(), {
  total: { label: "Stub", amount: { currency: "USD", value: "0.01" } },
})
  .canMakePayment()
  .then((result) => {
    if (result) {
      // Real payment request
      const request = new PaymentRequest(
        buildSupportedPaymentMethodData(),
        checkoutObject,
      );
      request.show().then((paymentResponse) => {
        // Here we would process the payment.
        paymentResponse.complete("success").then(() => {
          // Finish handling payment
        });
      });
    }
  });
```

{{domxref("PaymentRequest.abort()")}} can be used to abort the payment request if required.

## Detecting availability of the Payment Request API

You can effectively detect support for the Payment Request API by checking if the user's browser supports {{domxref("PaymentRequest")}}, i.e. `if (window.PaymentRequest)`.

In the following snippet, a merchant page performs this check, and if it returns `true` updates the checkout button to use `PaymentRequest` instead of legacy web forms.

```js
const checkoutButton = document.getElementById("checkout-button");
if (window.PaymentRequest) {
  let request = new PaymentRequest(
    buildSupportedPaymentMethodNames(),
    buildShoppingCartDetails(),
  );
  checkoutButton.addEventListener("click", () => {
    request
      .show()
      .then((paymentResponse) => {
        // Handle successful payment
      })
      .catch((error) => {
        // Handle cancelled or failed payment. For example, redirect to
        // the legacy web form checkout:
        window.location.href = "/legacy-web-form-checkout";
      });

    // Every click on the checkout button should use a new instance of
    // PaymentRequest object, because PaymentRequest.show() can be
    // called only once per instance.
    request = new PaymentRequest(
      buildSupportedPaymentMethodNames(),
      buildShoppingCartDetails(),
    );
  });
}
```

> [!NOTE]
> See our [Feature detect support demo](https://mdn.github.io/dom-examples/payment-request/feature-detect-support.html) for the full code.

## Checking whether users can make payments

Checking whether users can make payments is always useful. Here's a couple of related techniques.

### Customizing the payment button

One useful technique to employ is customizing the payment request button depending on whether users can make payments.

In the following snippet we do just this — depending on whether the user can make a fast payment or needs to add payment credentials first, the title of the checkout button changes between "Fast Checkout with W3C" and "Setup W3C Checkout". In both cases, the checkout button calls {{domxref("PaymentRequest.show()")}}.

```js
const checkoutButton = document.getElementById("checkout-button");
checkoutButton.innerText = "Loading…";
if (window.PaymentRequest) {
  const request = new PaymentRequest(
    buildSupportedPaymentMethodNames(),
    buildShoppingCartDetails(),
  );
  request
    .canMakePayment()
    .then((canMakeAFastPayment) => {
      checkoutButton.textContent = canMakeAFastPayment
        ? "Fast Checkout with W3C"
        : "Setup W3C Checkout";
    })
    .catch((error) => {
      // The user may have turned off the querying functionality in their
      // privacy settings. The website does not know whether they can make
      // a fast payment, so pick a generic title.
      checkoutButton.textContent = "Checkout with W3C";
    });
}
```

> [!NOTE]
> See our [Customizing the payment button demo](https://mdn.github.io/dom-examples/payment-request/customize-button-can-make-payment.html) for the full code.

### Checking before all prices are known

If the checkout flow needs to know whether {{domxref("PaymentRequest.canMakePayment()")}} will return `true` even before all line items and their prices are known, you can instantiate `PaymentRequest` with dummy data and pre-query `.canMakePayment()`. If you call `.canMakePayment()` multiple times, keep in mind that the first parameter to the `PaymentRequest` constructor should contain the same method names and data.

```js
// The page has loaded. Should the page use PaymentRequest?
// If PaymentRequest fails, should the page fallback to manual
// web form checkout?
const supportedPaymentMethods = [
  /* supported methods */
];

let shouldCallPaymentRequest = true;
let fallbackToLegacyOnPaymentRequestFailure = false;
new PaymentRequest(supportedPaymentMethods, {
  total: { label: "Stub", amount: { currency: "USD", value: "0.01" } },
})
  .canMakePayment()
  .then((result) => {
    shouldCallPaymentRequest = result;
  })
  .catch((error) => {
    console.error(error);

    // The user may have turned off query ability in their privacy settings.
    // Let's use PaymentRequest by default and fallback to legacy
    // web form based checkout.
    shouldCallPaymentRequest = true;
    fallbackToLegacyOnPaymentRequestFailure = true;
  });

// User has clicked on the checkout button. We know
// what's in the cart, but we don't have a `Checkout` object.
function onCheckoutButtonClicked(lineItems) {
  callServerToRetrieveCheckoutDetails(lineItems);
}

// The server has constructed the `Checkout` object. Now we know
// all of the prices and shipping options.
function onServerCheckoutDetailsRetrieved(checkoutObject) {
  if (shouldCallPaymentRequest) {
    const request = new PaymentRequest(supportedPaymentMethods, checkoutObject);
    request
      .show()
      .then((paymentResponse) => {
        // Post the results to the server and call `paymentResponse.complete()`.
      })
      .catch((error) => {
        console.error(error);
        if (fallbackToLegacyOnPaymentRequestFailure) {
          window.location.href = "/legacy-web-form-checkout";
        } else {
          showCheckoutErrorToUser();
        }
      });
  } else {
    window.location.href = "/legacy-web-form-checkout";
  }
}
```

> [!NOTE]
> See our [Checking user can make payments before prices are known demo](https://mdn.github.io/dom-examples/payment-request/check-user-can-make-payment.html) for the full code.

## Recommending a payment app when user has no apps

If you select to pay with the BobPay demo payment provider on this merchant page, it tries to call `PaymentRequest.show()`, while intercepting the `NotSupportedError` {{domxref("DOMException")}}. If this payment method is not supported, it redirects to the signup page for BobPay.

The code looks something like this:

```js
checkoutButton.addEventListener("click", () => {
  const request = new PaymentRequest(
    buildSupportedPaymentMethodData(),
    buildShoppingCartDetails(),
  );
  request
    .show()
    .then((paymentResponse) => {
      // Here we would process the payment. For this demo, simulate immediate success:
      paymentResponse.complete("success").then(() => {
        // For demo purposes:
        introPanel.style.display = "none";
        successPanel.style.display = "block";
      });
    })
    .catch((error) => {
      if (error.name === "NotSupportedError") {
        window.location.href = "https://bobpay.xyz/#download";
      } else {
        // Other kinds of errors; cancelled or failed payment. For demo purposes:
        introPanel.style.display = "none";
        legacyPanel.style.display = "block";
      }
    });
});
```

> [!NOTE]
> See our [Recommending a payment app when user has no apps demo](https://mdn.github.io/dom-examples/payment-request/recommend-payment-app.html) for the full code.

## Showing additional user interface after successful payments

If the merchant desires to collect additional information not part of the API (e.g., additional delivery instructions), the merchant can show a page with additional `<input type="text">` fields after the checkout.

```js
request
  .show()
  .then((paymentResponse) => {
    // Process payment here.
    // Close the UI:
    paymentResponse.complete('success').then(() => {
      // Request additional shipping address details.
      const additionalDetailsContainer = document.getElementById('additional-details-container');
      additionalDetailsContainer.style.display = 'block';
      window.scrollTo(additionalDetailsContainer.getBoundingClientRect().x, 0);
  })
  .catch((error) => {
    // Handle error.
  });
```

> [!NOTE]
> See our [Show additional user interface after successful payment demo](https://mdn.github.io/dom-examples/payment-request/show-additional-ui-after-payment.html) for the full code.

## Pre-authorizing transactions

Some use cases (e.g., paying for fuel at a service station) involve pre-authorizing payment. One way to do this is through a Payment Handler (see the {{domxref("Payment Handler API", "", "", "nocode")}}). At the time of writing, that specification includes a `canmakepayment` event that a Payment Handler could make use of to return authorization status.

The merchant code would look like this:

```js
const paymentRequest = new PaymentRequest(
  [{ supportedMethods: "https://example.com/preauth" }],
  details,
);

// Send `CanMakePayment` event to the payment handler.
paymentRequest
  .canMakePayment()
  .then((res) => {
    if (res) {
      // The payment handler has pre-authorized a transaction
      // with some static amount, e.g., USD $1.00.
    } else {
      // Pre-authorization failed or payment handler not installed.
    }
  })
  .catch((err) => {
    // Unexpected error occurred.
  });
```

The payment handler would include the following code:

```js
self.addEventListener("canmakepayment", (evt) => {
  // Pre-authorize here.
  const preAuthSuccess = true;
  evt.respondWith(preAuthSuccess);
});
```

This payment handler would need to live in a service worker at `https://example.com/preauth` scope.

> [!NOTE]
> See our [Pre-authorizing transactions demo](https://mdn.github.io/dom-examples/payment-request/pre-authorize-transaction.html) for the full code.

## See also

- [Google PaymentRequest Samples](https://googlechrome.github.io/samples/paymentrequest/)

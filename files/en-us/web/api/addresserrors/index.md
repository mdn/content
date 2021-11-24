---
title: AddressErrors
slug: Web/API/AddressErrors
tags:
  - API
  - Address
  - AddressErrors
  - Dictionary
  - Errors
  - Interface
  - Payment Address
  - Payment Request
  - Payment Request API
  - Reference
  - payment
  - paymentAddress
browser-compat: api.AddressErrors
---
{{APIRef("Payment Request API")}}

The **`AddressErrors`** dictionary is used by the [Payment Request API](/en-US/docs/Web/API/Payment_Request_API) to report validation errors in a physical address (typically a billing address or a shipping address). Any members which are present indicate that a validation error occurred for the member of the same name in an address described using {{domxref("PaymentAddress")}}.

`AddressErrors` is the type of the object returned by `shippingAddressErrors` in the object passed into {{domxref("PaymentRequestUpdateEvent.updateWith()")}} by the {{event("shippingaddresschange")}} event handler if a change to the address resulted in a validation error occurring.

See the {{anch("Examples", "examples below")}} to see how this works.

## Properties

- {{domxref("AddressErrors.addressLine", "addressLine")}}
  - : A {{domxref("DOMString")}} which, if present, indicates that the {{domxref("PaymentAddress.addressLine", "addressLine")}} property of the {{domxref("PaymentAddress")}} could not be validated. The contents of the string provide a human-readable explanation of the validation failure, and ideally suggestions to correct the problem.
- {{domxref("AddressErrors.city", "city")}}
  - : A {{domxref("DOMString")}} which, if present, indicates that the {{domxref("PaymentAddress.city", "city")}} property of the {{domxref("PaymentAddress")}} could not be validated. The contents of the string provide a human-readable explanation of the validation failure, and ideally suggestions to correct the problem.
- {{domxref("AddressErrors.country", "country")}}
  - : A {{domxref("DOMString")}} which, if present, indicates that the {{domxref("PaymentAddress.country", "country")}} property of the {{domxref("PaymentAddress")}} could not be validated. The contents of the string provide a human-readable explanation of the validation failure, and ideally suggestions to correct the problem.
- {{domxref("AddressErrors.dependentLocality", "dependentLocality")}}
  - : A {{domxref("DOMString")}} which, if present, indicates that the {{domxref("PaymentAddress.dependentLocality", "dependentLocality")}} property of the {{domxref("PaymentAddress")}} could not be validated. The contents of the string provide a human-readable explanation of the validation failure, and ideally suggestions to correct the problem.
- {{domxref("AddressErrors.organization", "organization")}}
  - : A {{domxref("DOMString")}} which, if present, indicates that the {{domxref("PaymentAddress.organization", "organization")}} property of the {{domxref("PaymentAddress")}} could not be validated. The contents of the string provide a human-readable explanation of the validation failure, and ideally suggestions to correct the problem.
- {{domxref("AddressErrors.phone", "phone")}}
  - : A {{domxref("DOMString")}} which, if present, indicates that the {{domxref("PaymentAddress.phone", "phone")}} property of the {{domxref("PaymentAddress")}} could not be validated. The contents of the string provide a human-readable explanation of the validation failure, and ideally suggestions to correct the problem.
- {{domxref("AddressErrors.postalCode", "postalCode")}}
  - : A {{domxref("DOMString")}} which, if present, indicates that the {{domxref("PaymentAddress.postalCode", "postalCode")}} property of the {{domxref("PaymentAddress")}} could not be validated. The contents of the string provide a human-readable explanation of the validation failure, and ideally suggestions to correct the problem.
- {{domxref("AddressErrors.recipient", "recipient")}}
  - : A {{domxref("DOMString")}} which, if present, indicates that the {{domxref("PaymentAddress.recipient", "recipient")}} property of the {{domxref("PaymentAddress")}} could not be validated. The contents of the string provide a human-readable explanation of the validation failure, and ideally suggestions to correct the problem.
- {{domxref("AddressErrors.region", "region")}}
  - : A {{domxref("DOMString")}} which, if present, indicates that the {{domxref("PaymentAddress.region", "region")}} property of the {{domxref("PaymentAddress")}} could not be validated. The contents of the string provide a human-readable explanation of the validation failure, and ideally suggestions to correct the problem.
- {{domxref("AddressErrors.sortingCode", "sortingCode")}}
  - : A {{domxref("DOMString")}} which, if present, indicates that the {{domxref("PaymentAddress.sortingCode", "sortingCode")}} property of the {{domxref("PaymentAddress")}} could not be validated. The contents of the string provide a human-readable explanation of the validation failure, and ideally suggestions to correct the problem.

### Obsolete properties

These properties have been removed from the specification and should no longer be used.

- {{domxref("AddressErrors.languageCode", "languageCode")}} {{deprecated_inline}}
  - : A {{domxref("DOMString")}} which, if present, indicates that the {{domxref("PaymentAddress.languageCode", "languageCode")}} property of the {{domxref("PaymentAddress")}} could not be validated. The contents of the string provide a human-readable explanation of the validation failure, and ideally suggestions to correct the problem.

## Usage notes

Keep in mind that some violation errors may be outside the ability of the user to fix. Try to avoid asking the user to make corrections to things they can't change, and there may be situations in which you need to allow validation errors to be accepted anyway (for example, if you validate addresses against a postal service database and a new home has been built and its address is not yet in the database).

## Examples

### Snippet: Limiting destination countries

This first example is just a snippet showing an implementation of the event handler for the {{event("shippingaddresschange")}} event which checks to be sure the chosen address is located within one of a limited number of countries.

```js
function handleAddressChange(ev) {
  const validCountries = ["US", "CA", "GB", "JP", "CN", "MX"];

  const genericAddressError = "Unable to ship to the given address. Please check for any errors.";
  const invalidCountryError = "At this time, we only ship to the United States, Canada, Great Britain, Japan, China, and Germany.";

  let shippingAddress = ev.target.shippingAddress;
  let shippingAddressErrors = {};
  let updateDetails = {};

  if (!validCountries.includes(shippingAddress.country)) {
    ev.target.shippingOptions = [];
    shippingAddressErrors.country = invalidCountryError;

    updateDetails = {
      error: genericAddressError,
      shippingAddressErrors,
      ...defaultPaymentDetails
    };
  }

  ev.updateWith(updateDetails);
}
```

See {{anch("Handling address changes")}} for a description of how this code works.

### Complete example

Here we'll see a complete, working version of the example above (except of course that it's not connected to an actual payment handler, so no payments are actually processed). In the example, we're handling a donation to an organization that will be sending a "thank you" gift to the donor, so it requests shipping information along with allowing the donation payment itself.

#### JavaScript

##### Payment Request data

First, we declare the variables `supportedHandlers`, which is compatible with {{domxref("PaymentMethodData")}}, and `defaultPaymentDetails`, which is an object containing the properties described in {{domxref("PaymentRequestUpdateEvent.updateWith")}}.

```js
let supportedHandlers = [
  {
    supportedMethods: "https://example.com/pay"
  }
];

let defaultPaymentDetails = {
  total: {label: 'Donation', amount: {currency: 'USD', value: '65.00'}},
  displayItems: [
    {
      label: 'Original donation amount',
      amount: {currency: 'USD', value: '65.00'}
    }
  ],
  shippingOptions: [
    {
      id: 'standard',
      label: 'Standard shipping',
      amount: {currency: 'USD', value: '0.00'},
      selected: true
    }
  ]
};
```

`supportedHandlers` describes the supported payment handlers and the details for those. In this example, only the Example Pay payment handler is supported.

`defaultPaymentDetails` describes the payment being requested. A description of the total amount being requested (including a label and the currency used), a list of the line items (in this case only one, "Original donation amount"), and a list of shipping options available; in this case only one.

##### Process the payment

The main payment processing code is found in the `process()` method, up next.

```js
let request;

function process() {
  let options = {requestShipping: true};

  try {
    request = new PaymentRequest(supportedHandlers, defaultPaymentDetails, options);
    // Add event listeners here.
    request.onshippingaddresschange = handleAddressChange;
    // Call show() to trigger the browser's payment flow.
    request.show().then(function(instrumentResponse) {
      // Do something with the response from the UI.
      console.log("Got response!");
    })
    .catch(function(err) {
      // Do something with the error from request.show().
      console.error(`Error from show(): ${err}`);
    });
  } catch (e) {
    // Catch any errors from trying to create the PaymentRequest object.
  }
}
```

This code creates a new {{domxref("PaymentRequest")}}, providing the supported handlers and payment options we set up above, as well as additional options (in this case, that we want to ask for shipping information).

After that, we set up the handler for the {{event("shippingaddresschange")}} event so we can validate address information and call the request's {{domxref("PaymentRequest.show", "show()")}} method to start running the payment UI.

##### Handling address changes

The `handleAddressChange()` method, called when `shippingaddresschange` events occur, is where we'll look to see if the country is one of those we allow as shipping destinations.

```js
function handleAddressChange(ev) {
  const validCountries = ["US", "CA", "GB", "JP", "CN", "MX"];

  const genericAddressError = "Unable to ship to the given address. Please check for any errors.";
  const invalidCountryError = "At this time, we only ship to the United States, Canada, Great Britain, Japan, China, and Germany.";

  let shippingAddress = ev.target.shippingAddress;
  let shippingAddressErrors = {};
  let updateDetails = {};

  if (!validCountries.includes(shippingAddress.country)) {
    ev.target.shippingOptions = [];
    shippingAddressErrors.country = invalidCountryError;

    updateDetails = {
      error: genericAddressError,
      shippingAddressErrors,
      ...defaultPaymentDetails
    };
  }

  ev.updateWith(updateDetails);
}
```

The `shippingaddresschange` event doesn't receive the {{domxref("PaymentRequest")}} object directly, so we fetch it from the {{domxref("Event.target", "target")}} property of the event. If the request's {{domxref("PaymentRequest.shippingAddress", "shippingAddress")}} has a value for {{domxref("PaymentAddress.country", "country")}} which isn't in the array `validCountries`, we generate the error.

That's done by removing all shipping options currently set on the request, then set up an object named `shippingAddressErrors` which contains a `country` property which is an error message describing why the stated country isn't being permitted as a value.

Then an object is created with its `error` set to a generic message about address errors and with the reset of the object's values taken from `shippingAddressErrors`, and, using "`...defaultPaymentDetails`" as the final entry in the object, the remainder of the properties' values are taken from `defaultPaymentDetails`.

The final step is to call the event's {{domxref("PaymentRequestUpdateEvent.updateWith", "updateWith()")}} method, passing along the `updateDetails` object. This lets the Payment Request API know to present the specified error or errors but to allow the user to keep trying to edit the address.

##### Setting up the Donate Now button

This code creates a handler for the {{event("load")}} event on the {{domxref("Window", "window")}} which in turn adds the needed {{event("click")}} event handler to the "Donate Now" button so that clicking it starts the payment process.

```js
window.addEventListener("load", function(ev) {
  document.getElementById("pay").addEventListener("click", process, false);
}, false);
```

See {{domxref("EventTarget.addEventListener", "addEventListener()")}}  for information about event handlers and how they work.

#### HTML

Here's the simple HTML for this example.

```html
<p>Donate US $65 to our worthwhile cause and we will send you a totally
not-useless gift as a token of our thanks!</p>
<button id="pay">Donate Now</button>
```

#### Result

The final product is below.

> **Note:** if you have content blocking features enabled in your browser, the example may not work inline below. In that case, you can {{LiveSampleLink("Complete_example", "view the example on its own page")}}.

{{EmbedLiveSample("Complete_example", 640, 400)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

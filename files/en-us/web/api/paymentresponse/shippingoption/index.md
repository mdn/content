---
title: PaymentResponse.shippingOption
slug: Web/API/PaymentResponse/shippingOption
tags:
  - API
  - Experimental
  - Payment Request
  - PaymentResponse
  - Property
  - Reference
  - Request Payment API
  - Secure context
  - shippingOption
browser-compat: api.PaymentResponse.shippingOption
---
<p>{{securecontext_header}}{{APIRef("Payment Request API")}}{{Deprecated_header}}{{Non-standard_header}}</p>

<p>The <strong><code>shippingOption</code></strong> read-only property of
  the <code>PaymentRequest</code> interface returns the ID attribute of the shipping
  option selected by the user. This option is only present when the
  <code>requestShipping</code> option is set to <code>true</code> in the
  {{domxref('PaymentOptions')}} object passed to the
  {{domxref('PaymentRequest.PaymentRequest','PaymentRequest')}} constructor.</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js">var shippingOption = PaymentRequest.shippingOption;</pre>

<h2 id="Example">Example</h2>

<p>In the example below, the {{domxref('PaymentRequest.onshippingaoptionchange')}} event
  is called. It calls <code>updateDetails()</code> to toggle the shipping method between
  "standard" and "express".</p>

<pre>// Initialization of PaymentRequest arguments are excerpted for brevity.
var payment = new PaymentRequest(supportedInstruments, details, options);

request.addEventListener('shippingoptionchange', function(evt) {
  evt.updateWith(new Promise(function(resolve, reject) {
    updateDetails(details, request.shippingOption, resolve, reject);
  }));
});

payment.show().then(function(paymentResponse) {
  // Processing of paymentResponse exerpted for the same of brevity.
}).catch(function(err) {
  console.error("Uh oh, something bad happened", err.message);
});

function updateDetails(details, shippingOption, resolve, reject) {
  var selectedShippingOption;
  var otherShippingOption;
  if (shippingOption === 'standard') {
    selectedShippingOption = details.shippingOptions[0];
    otherShippingOption = details.shippingOptions[1];
    details.total.amount.value = '55.00';
  } else if (shippingOption === 'express') {
    selectedShippingOption = details.shippingOptions[1];
    otherShippingOption = details.shippingOptions[0];
    details.total.amount.value = '67.00';
  } else {
    reject('Unknown shipping option \'' + shippingOption + '\'');
    return;
  }
  selectedShippingOption.selected = true;
  otherShippingOption.selected = false;
  details.displayItems.splice(2, 1, selectedShippingOption);
  resolve(details);
}
</pre>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

---
title: PaymentRequest.onshippingoptionchange
slug: Web/API/PaymentRequest/onshippingoptionchange
tags:
  - API
  - Event Handler
  - Experimental
  - Payment Request
  - Payment Request API
  - Reference
  - Secure context
  - onshippingoptionchange
browser-compat: api.PaymentRequest.onshippingoptionchange
---
<p>{{securecontext_header}}{{APIRef("Payment Request API")}}{{Deprecated_header}}{{Non-standard_header}}</p>

<p>The <strong><code>onshippingoptionchange</code></strong> event of the
  {{domxref("PaymentRequest")}} interface is fired whenever the user changes a shipping
  option. </p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js">PaymentRequest.addEventListener('shippingoptionchange', shippingOptionChangeEvent =&gt; { ... });

PaymentRequest.onshippingoptionchange = function(shippingOptionChangeEvent) { ... };</pre>

<h2 id="Examples">Examples</h2>

<p>The <code>shippingoptionchange</code> event is triggered by a user-agent controlled
  interaction. If the option stored by the user agent changes at any time during a payment
  process, the event is triggered. To make sure an updated option is included when sending
  payment information to the server, you should add event listeners for a
  {{domxref('PaymentRequest')}} object after instantiation, but before the call
  to <code>show()</code>.</p>

<pre class="brush: js">// Initialization of PaymentRequest arguments are excerpted for clarity.
var request = new PaymentRequest(supportedInstruments, details, options);

// When user selects a shipping address
request.addEventListener('shippingaddresschange', e =&gt; {
  e.updateWith(((details, addr) =&gt; {
    var shippingOption = {
      id: '',
      label: '',
      amount: { currency: 'USD', value: '0.00' },
      selected: true
    };
    // Shipping to US is supported
    if (addr.country === 'US') {
      shippingOption.id = 'us';
      shippingOption.label = 'Standard shipping in US';
      shippingOption.amount.value = '0.00';
      details.total.amount.value = '55.00';
    // Shipping to JP is supported
    } else if (addr.country === 'JP') {
      shippingOption.id = 'jp';
      shippingOption.label = 'International shipping';
      shippingOption.amount.value = '10.00';
      details.total.amount.value = '65.00';
    // Shipping to elsewhere is unsupported
    } else {
      // Empty array indicates rejection of the address
      details.shippingOptions = [];
      return Promise.resolve(details);
      console.log(details.error);
    }
    // Hardcode for simplicity
    if (details.displayItems.length === 2) {
      details.displayItems[2] = shippingOption;
    } else {
      details.displayItems.push(shippingOption);
    }
    details.shippingOptions = [shippingOption];

    return Promise.resolve(details);
  })(details, request.shippingAddress));
});
</pre>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

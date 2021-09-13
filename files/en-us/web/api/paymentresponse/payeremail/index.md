---
title: PaymentResponse.payerEmail
slug: Web/API/PaymentResponse/payerEmail
tags:
  - API
  - Experimental
  - Payment Request
  - Payment Request API
  - PaymentResponse
  - Property
  - Reference
  - Secure context
  - payerEmail
browser-compat: api.PaymentResponse.payerEmail
---
<p>{{securecontext_header}}{{APIRef("Payment Request API")}}{{Deprecated_header}}{{Non-standard_header}}</p>

<p>The <code>payerEmail</code> read-only property of the {{domxref("PaymentResponse")}}
  interface returns the email address supplied by the user. This option is only present
  when the <code>requestPayerEmail</code> option is set to <code>true</code> in the
  {{domxref('PaymentOptions')}} object passed to the
  {{domxref('PaymentRequest.PaymentRequest','PaymentRequest')}} constructor.</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js">var payerEmail = PaymentResponse.payerEmail;</pre>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

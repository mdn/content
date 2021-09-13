---
title: PaymentValidationErrors
slug: Web/API/PaymentValidationErrors
tags:
  - API
  - Commerce
  - Dictionary
  - Errors
  - Payment Request
  - Payment Request API
  - PaymentValidationErrors
  - Reference
  - Validation
  - payment
browser-compat: api.PaymentValidationErrors
---
<p>{{securecontext_header}}{{APIRef("Payment Request API")}}</p>

<p>The <code><strong>PaymentValidationErrors</strong></code> dictionary represents objects providing information about any and all errors that occurred while processing a payment request. When validation of the {{domxref("PaymentResponse")}} returned by the {{domxref("PaymentRequest.show()")}} or {{domxref("PaymentResponse.retry()")}} methods fails, your code creates a <code>PaymentValidationErrors</code> object to pass into <code>retry()</code> so that the {{Glossary("user agent")}} knows what needs to be fixed and what if any error messages to display to the user.</p>

<h2 id="Properties">Properties</h2>

<dl>
 <dt>{{domxref("PyamentValidationErrors.error", "error")}} {{optional_inline}}</dt>
 <dd>A general description of a payment error from which the user may attempt to recover by retrying the payment, possibly after correcting mistakes in the payment information. <code>error</code> can be provided all by itself to provide only a generic error message, or in concert with the other properties to serve as an overview while other properties' values gude the user to errors in specific fields in the payment form.</dd>
 <dt>{{domxref("PaymentValidationErrors.payer", "payer")}} {{optional_inline}}</dt>
 <dd>A {{domxref("PayerErrors")}} compliant object which provides appropriate error messages for any of the fields describing the payer which failed validation.</dd>
 <dt>{{domxref("PaymentValidationErrors.paymentMethod", "paymentMethod")}} {{optional_inline}}</dt>
 <dd>Any payment method specific errors which may have occurred. This object's contents will vary depending on the payment used. For example, if the user chose to pay by credit  card using the <code>basic-card</code> payment method, this is a {{domxref("BasicCardErrors")}} object.</dd>
 <dt>{{domxref("PaymentValidationErrorsi.shippingAddress", "shippingAddress")}} {{optional_inline}}</dt>
 <dd>An {{domxref("AddressErrors")}} object which contains error messages for any of the fields in the shipping address that failed validation.</dd>
</dl>

<h2 id="Example">Example</h2>


<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/Payment_Request_API">Payment Request API</a></li>
 <li><a href="/en-US/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API">Using the Payment Request API</a></li>
 <li><a href="/en-US/docs/Web/API/Payment_Request_API/Concepts">Payment processing concepts</a></li>
</ul>

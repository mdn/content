---
title: Payment processing concepts
slug: Web/API/Payment_Request_API/Concepts
tags:
  - API
  - Apple Pay
  - Commerce
  - Guide
  - Intermediate
  - Payee
  - Payer
  - Payment Handler
  - Payment Method
  - Payment Request API
  - Payments
---
<div>{{securecontext_header}}{{DefaultAPISidebar("Payment Request API")}}</div>

<p>The <a href="/en-US/docs/Web/API/Payment_Request_API">Payment Request API</a> makes it easy to handle payments in a web site or app. In this article, we'll take a look at how the API operates and what each of its components does.</p>

<h2 id="Terminology">Terminology</h2>

<p>Before getting into the details of how the API operates, there are tems you'll need to know.</p>

<dl>
 <dt>payee (or merchant)</dt>
 <dd>The merchant—either a person or an organization—whose web site or app wishes to receive money through the Payment Request API.</dd>
 <dt>payer</dt>
 <dd>The person or organization making a purchase using a web site or app. The payer authenticates themselves, then authorizes payment, as required by the payment method.</dd>
 <dt>payment method</dt>
 <dd>The instrument by which payment is submitted, such as a credit card or online payment service.</dd>
 <dt>payment method provider</dt>
 <dd>An organization that provides the technology needed to submit payments using a given payment method. For example, when using a credit card to pay, the credit card processing service is the payment method provider.</dd>
 <dt>payment handler</dt>
 <dd>The implementation of the code needed to interface with a particular payment method provider in order to process payments.</dd>
</dl>

<p>Some payment handlers use <strong>merchant validation</strong>, which is the process of validating the identity of a merchant in some way, usually using some form of cryptographic response such as a public key. Validated merchants are allowed to interface with a payment handler.</p>

<h2 id="Payment_method_identifiers">Payment method identifiers</h2>

<p>Payment handlers are identified by <strong>payment method identifiers</strong>, which are strings uniquely identifying the payment handler. These may be either one of the standardized payment handler identifiers, or a URL used by the payment processing service to both identify itself and to handle payments.</p>

<h3 id="Standardized_payment_method_identifiers">Standardized payment method identifiers</h3>

<p>There is currently only one registered <a href="https://www.w3.org/TR/payment-method-id/#registry">standardized payment method identifier</a> (more may be added in the future):</p>

<dl>
 <dt><code>basic-card</code></dt>
 <dd>Payments are handled by the Basic Card Payment specification. See {{domxref("BasicCardRequest")}} for details. <strong><em>Should have an article about this specification and how to use it</em>.</strong></dd>
</dl>

<h3 id="URL-based_payment_method_identifiers">URL-based payment method identifiers</h3>

<p>These may vary substantially depending on the specifics of the service, and a given processing service may have multiple URLs used, depending on the version of their API, their communication technology, and so forth.</p>

<dl>
 <dt><code>https://apple.com/apple-pay</code></dt>
 <dd>Payments are handled using the <a href="https://www.apple.com/apple-pay/">Apple Pay</a> service. Currently, Apple Pay is only supported by Safari.</dd>
 <dt><code>https://google.com/pay</code></dt>
 <dd>Payments are processed by <a href="https://pay.google.com/">Google Pay</a>. This is currently supported only by Chrome and Chromium-based browsers.</dd>
</dl>

<h2 id="Functions_of_a_payment_handler">Functions of a payment handler</h2>

<p>A {{Glossary("user agent")}} may provide built-in support for certain types of payments. In addition, the <a href="https://w3c.github.io/payment-handler/">Payment Handler API</a> can be used to establish support for additional payment method providers, in browsers that support it. In either case, the payment handler is responsible for:</p>

<ol>
 <li><strong>Making sure a payment can be made.</strong> The conditions that make payment possible vary depending on the payment method and the user's payment request; for example, if the user chooses to pay using a credit card that isn't accepted by the payee, the payment can't be made.</li>
 <li><strong>If merchant validation is supported by the payment handler, respond to merchant validation requests from the user agent.</strong> See {{anch("Merchant validation")}} for details.</li>
 <li><strong>Verify that the information provided by the user results in a valid transaction.</strong> This results in the creation and returning of a payment method-specific object that contains the information needed to handle the transaction.</li>
</ol>

<h2 id="Merchant_validation">Merchant validation</h2>

<p>Some payment handlers use <strong>merchant validation</strong>, which is the process of validating the identity of a merchant in some way, usually using some form of cryptographic challenge. If the merchant doesn't successfully validate, it's not allowed to use the payment handler.</p>

<p>The exact validation technology depends on the payment handler, and merchant validation is entirely optional. In the end, the only thing that the web site or app is responsible for is fetching the merchant's validation key and passing it into the event's {{domxref("MerchantValidationEvent.complete", "complete()")}} method.</p>

<pre class="brush: js">paymentRequest.onmerchantvalidation = function(event) {
  event.complete(fetchValidationData(event.validationURL));
}
</pre>

<p>In this example, <code>fetchValidationData()</code> is a function which loads the payment handler specific identifying information from the address given by <code>validationURL</code>. Note this function must go through the merchant server, because a client typically does not access the validation URL itself.</p>

<p>By then delivering this data (or a {{jsxref("Promise")}} which resolves to the loaded data) to the payment handler by passing it into <code>complete()</code>, the payment handler can use the retrieved data and whatever algorithm and other data to support in order to verify that the merchant can use the payment handler.</p>

<p>Thus, it's important to note that the {{Glossary("user agent")}} never sends a {{event("merchantvalidation")}} event, unless the user agent itself implements a payment handler. For instance, Safari has integrated support for Apple Pay, so the Apple Pay payment handler uses this to ensure that Apple Pay can be used to pay the merchant by sending <code>merchantvalidation</code> to the client, instructing it to fetch the server's validation data and deliver it to the payment handler by calling <code>complete()</code>.</p>

<h2 id="Specifications">Specifications</h2>

<table class="no-markdown">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>{{SpecName('Payment')}}</td>
   <td>{{Spec2('Payment')}}</td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td>{{SpecName('Basic Card Payment')}}</td>
   <td>{{Spec2('Basic Card Payment')}}</td>
   <td>Defines {{domxref("BasicCardRequest")}} and {{domxref("BasicCardResponse")}}.</td>
  </tr>
  <tr>
   <td>{{SpecName('Payment Method Identifiers')}}</td>
   <td>{{Spec2('Payment Method Identifiers')}}</td>
   <td>Defines payment method identifiers and how they are validated, and, where applicable, minted and formally registered with the W3C.</td>
  </tr>
 </tbody>
</table>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/Payment_Request_API">Payment Request API</a></li>
 <li><a href="/en-US/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API">Using the Payment Request API</a></li>
 <li><a href="/en-US/docs/Web/API/Payment_Request_API/Concepts">Payment processing concepts</a></li>
 <li><a href="https://webkit.org/blog/8182/introducing-the-payment-request-api-for-apple-pay/">Introducing the Payment Request API for Apple Pay</a></li>
 <li><a href="https://developers.google.com/pay/api/web/guides/paymentrequest/tutorial">Google Pay API PaymentRequest Tutorial</a></li>
</ul>

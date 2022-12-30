---
title: serviceworker
slug: Web/Manifest/serviceworker
tags:
  - serviceworker
  - Manifest
  - Web
  - Experimental
browser-compat: html.manifest.serviceworker
---

{{QuickLinksWithSubpages("/en-US/docs/Web/Manifest")}}{{SeeCompatTable}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type</th>
      <td><code>Object</code></td>
    </tr>
    <tr>
      <th scope="row">Mandatory</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

The `serviceworker` member specifies a serviceworker that is Just-In-Time (JIT)-installed and registered to run a web-based payment app providing a payment mechanism for a specified payment method in a merchant website. See {{domxref("Payment Handler API", "Payment Handler API", "", "nocode")}} for more details.

## Example

See [Payment Handler API > Concepts and usage](/en-US/docs/Web/API/Payment_Handler_API#concepts_and_usage).

## Values

`serviceworker` objects may contain the following values:

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Member</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>scope</code></td>
      <td>
        A string representing the service worker's registration scope.
      </td>
    </tr>
    <tr>
      <td><code>src</code></td>
      <td>
        A string representing the URL to download the service worker script from.
      </td>
    </tr>
    <tr>
      <td><code>use_cache</code></td>
      <td>
        A boolean that states whether the service worker will use the {{domxref("Cache")}} API to store responses locally (<code>true</code>), or not (<code>false</code>).
      </td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Service Worker API", "Service Worker API", "", "nocode")}}
- {{domxref("Payment Handler API", "Payment Handler API", "", "nocode")}}
- [Web-based payment apps overview](https://web.dev/web-based-payment-apps-overview/)
- [Setting up a payment method](https://web.dev/setting-up-a-payment-method/)
- [Life of a payment transaction](https://web.dev/life-of-a-payment-transaction/)
- [Using the Payment Request API](/en-US/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Payment processing concepts](/en-US/docs/Web/API/Payment_Request_API/Concepts)

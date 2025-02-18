---
title: serviceworker
slug: Web/Manifest/Reference/serviceworker
page-type: web-manifest-member
status:
  - experimental
  - non-standard
browser-compat: html.manifest.serviceworker
---

{{QuickLinksWithSubpages("/en-US/docs/Web/Manifest/Reference")}}{{SeeCompatTable}}{{Non-standard_header}}

The `serviceworker` member specifies a serviceworker that is Just-In-Time (JIT)-installed and registered to run a web-based payment app providing a payment mechanism for a specified payment method in a merchant website. See {{domxref("Payment Handler API", "Payment Handler API", "", "nocode")}} for more details.

### Values

`serviceworker` objects may contain the following values:

- `scope` {{experimental_inline}} {{non-standard_inline}}

  - : A string representing the service worker's registration scope.

- `src` {{experimental_inline}} {{non-standard_inline}}

  - : A string representing the URL to download the service worker script from.

- `use_cache` {{experimental_inline}} {{non-standard_inline}}

  - : A boolean that sets how the HTTP cache is used for service worker script resources during updates.
    It provides equivalent functionality to certain values of the `updateViaCache` option provided when a service worker is registered via JavaScript using {{domxref("ServiceWorkerContainer.register()")}}.

    - `true`: The HTTP cache will be queried for imports, but the main script will always be updated from the network. If no fresh entry is found in the HTTP cache for the imports, they're fetched from the network. Equivalent to `updateViaCache: "imports"`.
    - `false`: The HTTP cache will not be used for the main script or its imports. All service worker script resources will be updated from the network. Equivalent to `updateViaCache: "none"`.

## Examples

See [Payment Handler API > Concepts and usage](/en-US/docs/Web/API/Payment_Handler_API#concepts_and_usage).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Service Worker API", "Service Worker API", "", "nocode")}}
- {{domxref("Payment Handler API", "Payment Handler API", "", "nocode")}}
- [Web-based payment apps overview](https://web.dev/articles/web-based-payment-apps-overview)
- [Setting up a payment method](https://web.dev/articles/setting-up-a-payment-method)
- [Life of a payment transaction](https://web.dev/articles/life-of-a-payment-transaction)
- [Using the Payment Request API](/en-US/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Payment processing concepts](/en-US/docs/Web/API/Payment_Request_API/Concepts)

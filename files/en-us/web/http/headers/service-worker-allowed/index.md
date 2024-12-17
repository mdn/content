---
title: Service-Worker-Allowed
slug: Web/HTTP/Headers/Service-Worker-Allowed
page-type: http-header
browser-compat: http.headers.Service-Worker-Allowed
---

{{HTTPSidebar}}

The HTTP **`Service-Worker-Allowed`** {{Glossary("response header")}} is used to broaden the path restriction for a service worker's default `scope`.

By default, the [`scope`](/en-US/docs/Web/API/ServiceWorkerContainer/register#scope) for a service worker registration is the directory where the service worker script is located.
For example, if the script `sw.js` is located in `/js/sw.js`, it can only control URLs under `/js/` by default.
Servers can use the `Service-Worker-Allowed` header to allow a service worker to control URLs outside of its own directory.

A service worker intercepts all network requests within its scope, so you should avoid using overly-broad scopes unless necessary.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Service-Worker-Allowed: <scope>
```

## Directives

- `<scope>`
  - : A string representing a URL that defines a service worker's registration scope; that is, what range of URLs a service worker can control.

## Examples

### Using Service-Worker-Allowed to broaden service worker scope

The JavaScript example below is included in `example.com/product/index.html`, and attempts to [register](/en-US/docs/Web/API/ServiceWorkerContainer/register) a service worker with a scope that applies to all resources under `example.com/`.

```js
navigator.serviceWorker.register("./sw.js", { scope: "/" }).then(
  (registration) => {
    console.log("Install succeeded, scoped to '/'", registration);
  },
  (error) => {
    console.error(`Service worker registration failed: ${error}`);
  },
);
```

The HTTP response to the service worker's script resource request (`./sw.js`) includes the `Service-Worker-Allowed` header set to `/`:

```http
HTTP/1.1 200 OK
Date: Mon, 16 Dec 2024 14:37:20 GMT
Service-Worker-Allowed: /

// sw.js contents…
```

If the server doesn't set the header, the service worker registration will fail, as the `scope` option (`{ scope: "/" }`) requests a scope broader than the directory where the service worker script is located (`/product/sw.js`).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Service-Worker")}} header
- [Service worker API](/en-US/docs/Web/API/Service_Worker_API)
- {{domxref("ServiceWorkerRegistration")}}
- [Why is my service worker failing to register](/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers#why_is_my_service_worker_failing_to_register) in _Using Service Workers_.

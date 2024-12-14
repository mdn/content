---
title: Service-Worker-Allowed
slug: Web/HTTP/Headers/Service-Worker-Allowed
page-type: http-header
browser-compat: http.headers.Service-Worker-Allowed
spec-urls: https://w3c.github.io/ServiceWorker/#service-worker-allowed
---

{{HTTPSidebar}}

The HTTP **`Service-Worker-Allowed`** {{Glossary("response header")}} is used to broaden the path restriction for a service worker's default `scope`.

By default, the [`scope`](/en-US/docs/Web/API/ServiceWorkerContainer/register#scope) for a service worker registration is the directory where the service worker script is located.
For example, if the script `sw.js` is located in `/js/sw.js`, it can only control URLs under `/js/` by default.
Servers can change the default maximum scope by setting the `Service-Worker-Allowed` header if a service worker needs to control a broader range of URLs beyond its own directory.

/en-US/docs/Web/API/ServiceWorkerContainer

A service worker intercepts all network requests within its scope so you should avoid using overly broad scopes unless necessary.

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

### Using Service-Worker-Allowed to increase service worker scope

In the following example, an HTTP response to a service worker's script resource request includes the `Service-Worker-Allowed` header set to `/`:

```http
200 OK
Service-Worker-Allowed: /
```

If included in `example.com/product/index.html`, the following code would apply to all resources under `example.com/` when serving `sw.js`.
If the server doesn't set the header, the service worker registration will fail, as the `scope` option (`{ scope: "/" }`) is too broad:

```js
navigator.serviceWorker.register("./sw.js", { scope: "/" }).then(
  (registration) => {
    console.log(
      "Install succeeded, max allowed scope was overriden to '/'",
      registration,
    );
  },
  (error) => {
    console.error(`Service worker registration failed: ${error}`);
  },
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Service worker API](/en-US/docs/Web/API/Service_Worker_API)
- [Using service workers](/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- {{domxref("ServiceWorkerRegistration")}}

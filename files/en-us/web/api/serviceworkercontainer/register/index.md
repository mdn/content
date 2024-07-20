---
title: "ServiceWorkerContainer: register() method"
short-title: register()
slug: Web/API/ServiceWorkerContainer/register
page-type: web-api-instance-method
browser-compat: api.ServiceWorkerContainer.register
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`register()`** method of the
{{domxref("ServiceWorkerContainer")}} interface creates or updates a
{{domxref("ServiceWorkerRegistration")}} for the given `scriptURL`.

If successful, a service worker registration ties the provided script URL to a
_scope_, which is subsequently used for navigation matching. You can call this
method unconditionally from the controlled page. I.e., you don't need to first check
whether there's an active registration.

## Syntax

```js-nolint
register(scriptURL)
register(scriptURL, options)
```

### Parameters

- `scriptURL`
  - : The URL of the service worker script. The registered service worker file needs to
    have a valid [JavaScript MIME type](/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types#textjavascript).
- `options` {{optional_inline}}

  - : An object containing registration options. Currently available options are:

    - `scope`
      - : A string representing a URL that defines a
        service worker's registration scope; that is, what range of URLs a service worker
        can control. This is usually a relative URL. It is relative to the base URL of the
        application. By default, the `scope` value for a service worker
        registration is set to the directory where the service worker script is located (by resolving `./` against `scriptURL`).
        See the [Examples](#examples) section for more information on how it
        works.
    - `type`

      - : A string
        specifying the type of worker to create. Valid values are:

        - `'classic'`
          - : The loaded service worker is in a standard script. This is the default.
        - `'module'`
          - : The loaded service worker is in an
            [ES module](/en-US/docs/Web/JavaScript/Guide/Modules)
            and the import statement is available on
            worker contexts. For ES module compatibility info, see the [browser compatibility data table for the `ServiceWorker` interface](/en-US/docs/Web/API/ServiceWorker#browser_compatibility).

    - `updateViaCache`

      - : A string indicating how the HTTP cache is used for service worker scripts resources during updates. Note: This only refers to the service worker script and its imports, not other resources fetched by these scripts.

        - `'all'`
          - : The HTTP cache will be queried for the main script, and all imported scripts. If no fresh entry is found in the HTTP cache, then the scripts are fetched from the network.
        - `'imports'`
          - : The HTTP cache will be queried for imports, but the main script will always be updated from the network. If no fresh entry is found in the HTTP cache for the imports, they're fetched from the network.
        - `'none'`
          - : The HTTP cache will not be used for the main script or its imports. All service worker script resources will be updated from the network.

### Return value

A {{jsxref("Promise")}} that resolves with a {{domxref("ServiceWorkerRegistration")}}
object.

## Examples

The examples described here should be taken together to get a better understanding of
how service workers scope applies to a page.

The following example uses the default value of `scope` (by omitting it). Suppose the service worker code is at `example.com/sw.js`, and the registration code at `example.com/index.html`. The service worker code will control `example.com/index.html`, as well as pages underneath it, like `example.com/product/description.html`.

```js
if ("serviceWorker" in navigator) {
  // Register a service worker hosted at the root of the
  // site using the default scope.
  navigator.serviceWorker.register("./sw.js").then(
    (registration) => {
      console.log("Service worker registration succeeded:", registration);
    },
    (error) => {
      console.error(`Service worker registration failed: ${error}`);
    },
  );
} else {
  console.error("Service workers are not supported.");
}
```

The following code, with all code in the same place, would apply to exactly the same pages as the example above. Alternatively, if the service worker code is at `example.com/product/sw.js`, and the registration code at `example.com/product/description.html`. then the service worker would only apply to resources under `example.com/product`. Remember the scope, when included, uses the page's location as its base.

```js
if ("serviceWorker" in navigator) {
  // declaring scope manually
  navigator.serviceWorker.register("./sw.js", { scope: "./" }).then(
    (registration) => {
      console.log("Service worker registration succeeded:", registration);
    },
    (error) => {
      console.error(`Service worker registration failed: ${error}`);
    },
  );
} else {
  console.error("Service workers are not supported.");
}
```

There is frequent confusion surrounding the meaning and use of _scope_. A service worker can't have a scope broader than its own location, unless the server specifies a broader maximum scope in a [Service-Worker-Allowed](https://w3c.github.io/ServiceWorker/#service-worker-allowed) header on the service worker script. Therefore you should use the `scope` option when you need a _narrower_ scope than the default.

The following code, if included in `example.com/index.html`, at the root of a site, would only apply to resources under `example.com/product`.

```js
if ("serviceWorker" in navigator) {
  // declaring scope manually
  navigator.serviceWorker.register("./sw.js", { scope: "/product/" }).then(
    (registration) => {
      console.log("Service worker registration succeeded:", registration);
    },
    (error) => {
      console.error(`Service worker registration failed: ${error}`);
    },
  );
} else {
  console.error("Service workers are not supported.");
}
```

As noted above, servers can change the default maximum scope by setting the `Service-Worker-Allowed` header on the service worker script. In this case, the `scope` option should specify a scope narrower than the header value, but potentially larger than the service worker's location.

The following code, if included in `example.com/product/index.html`, would apply to all resources under `example.com` if the server set the `Service-Worker-Allowed` header to `/` or `https://example.com/` when serving `sw.js`. If the server doesn't set the header, the service worker registration will fail, as the requested `scope` is too broad.

```js
if ("serviceWorker" in navigator) {
  // Declaring a broadened scope
  navigator.serviceWorker.register("./sw.js", { scope: "/" }).then(
    (registration) => {
      // The registration succeeded because the Service-Worker-Allowed header
      // had set a broadened maximum scope for the service worker script
      console.log("Service worker registration succeeded:", registration);
    },
    (error) => {
      // This happens if the Service-Worker-Allowed header doesn't broaden the scope
      console.error(`Service worker registration failed: ${error}`);
    },
  );
} else {
  console.error("Service workers are not supported.");
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ServiceWorkerRegistration: `unregister()` method](/en-US/docs/Web/API/ServiceWorkerRegistration/unregister)
- [Service worker API](/en-US/docs/Web/API/Service_Worker_API)
- [Using service workers](/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)

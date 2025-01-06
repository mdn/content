---
title: "ServiceWorkerContainer: register() method"
short-title: register()
slug: Web/API/ServiceWorkerContainer/register
page-type: web-api-instance-method
browser-compat: api.ServiceWorkerContainer.register
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`register()`** method of the {{domxref("ServiceWorkerContainer")}} interface creates or updates a {{domxref("ServiceWorkerRegistration")}} for the given scope.
If successful, the registration associates the provided script URL to a _scope_, which is subsequently used for matching documents to a specific service worker.

A single registration is created for each unique scope.
If `register()` is called for a scope that has an existing registration, the registration is updated with any changes to the scriptURL or options.
If there are no changes, then the existing registration is returned.
Note that calling `register()` with the same scope and `scriptURL` does not restart the installation process.
You can therefore call this method unconditionally from a controlled page: you don't need to first check whether there's an active registration or service worker.

A document can potentially be within the scope of several registrations with different service workers and options.
The browser will associate the document with the matching registration that has the most specific scope.
This ensures that only one service worker runs for each document.

> [!NOTE]
> It is generally safer not to define registrations that have overlapping scopes.

## Syntax

```js-nolint
register(scriptURL)
register(scriptURL, options)
```

### Parameters

- `scriptURL`
  - : The URL of the service worker script.
    The registered service worker file needs to have a valid [JavaScript MIME type](/en-US/docs/Web/HTTP/MIME_types#textjavascript).
- `options` {{optional_inline}}

  - : An object containing registration options. Currently available options are:

    - `scope`

      - : A string representing a URL that defines a service worker's registration scope; that is, what range of URLs a service worker can control.

        This is usually specified as a URL that is relative to the base URL of the site (e.g. `/some/path/`), so that the resolved scope is the same irrespective of what page the registration code is called from.
        The default `scope` for a service worker registration is the directory where the service worker script is located (resolving `./` against `scriptURL`).

        The scope should be used to specify documents that are in the same directory or more deeply nested than the service worker.
        If you need a broader scope, this can be permitted via the HTTP {{HTTPHeader("Service-Worker-Allowed")}} header.
        See the [Examples](#examples) section for information on broadening the default scope of a service worker.

    - `type`

      - : A string specifying the type of worker to create.
        Valid values are:

        - `'classic'`
          - : The loaded service worker is in a standard script.
            This is the default.
        - `'module'`
          - : The loaded service worker is in an [ES module](/en-US/docs/Web/JavaScript/Guide/Modules) and the import statement is available on worker contexts.
            For ES module compatibility info, see the [browser compatibility data table for the `ServiceWorker` interface](/en-US/docs/Web/API/ServiceWorker#browser_compatibility).

    - `updateViaCache`

      - : A string indicating how the HTTP cache is used for service worker scripts resources during updates.
        Note: This only refers to the service worker script and its imports, not other resources fetched by these scripts.

        - `'all'`
          - : The HTTP cache will be queried for the main script, and all imported scripts. If no fresh entry is found in the HTTP cache, then the scripts are fetched from the network.
        - `'imports'`
          - : The HTTP cache will be queried for imports, but the main script will always be updated from the network. If no fresh entry is found in the HTTP cache for the imports, they're fetched from the network.
        - `'none'`
          - : The HTTP cache will not be used for the main script or its imports. All service worker script resources will be updated from the network.

### Return value

A {{jsxref("Promise")}} that resolves with a {{domxref("ServiceWorkerRegistration")}} object.

### Exceptions

- `TypeError`

  - : The `scriptURL` or `scope URL` is a failure.
    This can happen if the URL can't be resolved to a valid URL or uses a scheme that is not `http:` or `https`.
    It may also happen if `scriptURL` is not a {{domxref("TrustedScriptURL")}}, and this is a requirement of the site's [Trusted Types Policy](/en-US/docs/Web/API/Trusted_Types_API).

    The exception is also raised if the `scriptURL` or `scope URL` path contains the case-insensitive ASCII "%2f" (`*`) or "%5c" (`=`)

- `SecurityError` {{domxref("DOMException")}}
  - : The `scriptURL` is not a potentially trustworthy origin, such as `localhost` or an `https` URL.
    The `scriptURL` and scope are not same-origin with the registering page.

## Examples

The examples below should be read together to understand how service worker scope applies to a page.

### Register a service worker with default scope

The following example uses the default value of `scope` by omitting it, which sets it to be the same location as the script URL.

Suppose the service worker code is at `example.com/sw.js`, and the registration code at `example.com/index.html`.
The service worker code will control `example.com/index.html`, as well as pages underneath it, like `example.com/product/description.html`.

```js
if ("serviceWorker" in navigator) {
  // Register a service worker hosted at the root of the
  // site using the default scope.
  navigator.serviceWorker.register("/sw.js").then(
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

Note that we have registered the `scriptURL` relative to the site root rather than the current page.
This allows the same registration code to be used from any page.

### Register a service worker with an explicit default scope

The code below is almost identical, except we have specified the scope explicitly using `{ scope: "/" }`.
We've specified the scope as site-relative so the same registration code can be used from anywhere in the site.

```js
if ("serviceWorker" in navigator) {
  // declaring scope manually
  navigator.serviceWorker.register("./sw.js", { scope: "/" }).then(
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

This scope is the same as the default scope, so the registration applies to exactly the same pages as the previous example.
Note that if we were to run this code after the previous example, browsers should recognize that we're updating an existing registration rather than a new one.

### Register a service worker using page-relative URLs

There is nothing to stop you from using page-relative URLs except that this makes it harder to move your pages around, and it is easy to accidentally create unwanted registrations if you do so.

In this example the service worker code is at `example.com/product/sw.js`, and the registration code at `example.com/product/description.html`.
We're using URLs that are relative to the current directory for the `scriptURL` and the `scope`, where the current directory is the base URL of the page that is calling `register()` (`example.com/product/`).
The service worker applies to resources under `example.com/product/`.

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

### Using Service-Worker-Allowed to increase service worker scope

A service worker can't have a scope broader than its own location, unless the server specifies a broader maximum scope in a {{HTTPHeader("Service-Worker-Allowed")}} header on the service worker script.
Use the `scope` option when you need a _narrower_ scope than the default.

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

As noted above, servers can change the default scope by setting the `Service-Worker-Allowed` header on the service worker script.
This allows the `scope` option to be set outside the path defined by the service worker's location.

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
- {{HTTPHeader("Service-Worker-Allowed")}} HTTP header

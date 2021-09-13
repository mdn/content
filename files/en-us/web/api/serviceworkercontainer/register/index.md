---
title: ServiceWorkerContainer.register()
slug: Web/API/ServiceWorkerContainer/register
tags:
  - API
  - Method
  - Reference
  - Service Workers
  - Service worker API
  - ServiceWorker
  - ServiceWorkerContainer
  - register
browser-compat: api.ServiceWorkerContainer.register
---
{{APIRef("Service Workers API")}}

The **`register()`** method of the
{{domxref("ServiceWorkerContainer")}} interface creates or updates a
{{domxref("ServiceWorkerRegistration")}} for the given `scriptURL`.

If successful, a service worker registration ties the provided script URL to a
_scope_, which is subsequently used for navigation matching. You can call this
method unconditionally from the controlled page. I.e., you don't need to first check
whether there's an active registration.

There is frequent confusion surrounding the meaning and use of _scope_. Since a
service worker can't have a scope broader than its own location, only use the
`scope` option when you need a scope that is narrower than the default.

## Syntax

```js
serviceWorkerContainer.register(scriptURL, options)
  .then(function(serviceWorkerRegistration) { ... });
```

### Parameters

- `scriptURL`
  - : The URL of the service worker script. The registered service worker file needs to
    have a valid [JavaScript
    MIME type](/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types#javascript_types).
- `options` {{optional_inline}}

  - : An object containing registration options. Currently available options are:

    - `scope`: A {{domxref("USVString")}} representing a URL that defines a
      service worker's registration scope; that is, what range of URLs a service worker
      can control. This is usually a relative URL. It is relative to the base URL of the
      application. By default, the `scope` value for a service worker
      registration is set to the directory where the service worker script is located.
      See the [Examples](#examples) section for more information on how it
      works.
    - `type`: A {{domxref("DOMString")}}
      specifying the type of worker to create. Valid values are:

      - `'classic'`: The loaded service worker is in a standard script. This is the default.
      - `module`: The loaded service worker is in an
        [ES module](/en-US/docs/Web/JavaScript/Guide/Modules)
        and the import statement is available on
        worker contexts.

    - `updateViaCache`: A string indicating how much of a service worker's resources will be updated when a call is made to {{domxref('ServiceWorkerRegistration.updateViaCache')}}. Valid values are:

      - `'all'`: The service worker script and all of its imports will be updated.
      - `'imports'`: Only imports referenced by the service worker script will be updated. This is the default.
      - `'none'`: Neither the service worker, nor its imports will be updated.

### Return value

A {{jsxref("Promise")}} that resolves with a {{domxref("ServiceWorkerRegistration")}}
object.

## Examples

The examples described here should be taken together to get a better understanding of
how service workers scope applies to a page.

The following example uses the default value of `scope` (by omitting it).
The service worker code in this case, if
included in `example.com/index.html`, will
control `example.com/index.html`, as well as pages underneath it, like
`example.com/product/description.html`.

```js
if ('serviceWorker' in navigator) {
  // Register a service worker hosted at the root of the
  // site using the default scope.
  navigator.serviceWorker.register('/sw.js').then(function(registration) {
    console.log('Service worker registration succeeded:', registration);
  }, /*catch*/ function(error) {
    console.log('Service worker registration failed:', error);
  });
} else {
  console.log('Service workers are not supported.');
}
```

The following code, if included in `example.com/index.html`, at the root of
a site, would apply to exactly the same pages as the example above. Remember the scope,
when included, uses the page's location as its base.

Alternatively, if this code were included in a page at
`example.com/product/description.html`, with the Javascript file residing
at `example.com/product/sw.js`, then the service worker would only apply to
resources under `example.com/product`.

```js
if ('serviceWorker' in navigator) {
  // declaring scope manually
  navigator.serviceWorker.register('/sw.js', {scope: './'}).then(function(registration) {
    console.log('Service worker registration succeeded:', registration);
  }, /*catch*/ function(error) {
    console.log('Service worker registration failed:', error);
  });
} else {
  console.log('Service workers are not supported.');
}
```

There is frequent confusion surrounding the meaning and use of _scope_. Since a
service worker can't have a scope broader than its own location, only use the
`scope` option when you need a scope that is narrower than the default.

The following code, if included in `example.com/index.html`, at the root of
a site, would only apply to resources under `example.com/product`.

```js
if ('serviceWorker' in navigator) {
  // declaring scope manually
  navigator.serviceWorker.register('/sw.js', {scope: '/product/'}).then(function(registration) {
    console.log('Service worker registration succeeded:', registration);
  }, /*catch*/ function(error) {
    console.log('Service worker registration failed:', error);
  });
} else {
  console.log('Service workers are not supported.');
}
```

However, Servers can remove this restriction by setting a [Service-Worker-Allowed](https://w3c.github.io/ServiceWorker/#service-worker-allowed) header on the service
worker script, and then you can specify a max scope for that service worker above the
service worker's location.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

---
title: "InstallEvent: addRoutes() method"
short-title: addRoutes()
slug: Web/API/InstallEvent/addRoutes
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.InstallEvent.addRoutes
---

{{APIRef("Service Workers API")}}{{SeeCompatTable}}

The **`addRoutes()`** method of the {{domxref("InstallEvent")}} interface specifies one or more static routes, which define rules for fetching specified resources that will be used even before service worker startup. This allows you to, for example, bypass a service worker in cases where you always want to fetch a resource from the network or a browser {{domxref("Cache")}}, and avoids the performance overhead of unnecessary service worker cycles.

## Syntax

```js-nolint
addRoutes(routerRules)
```

### Parameters

- `routerRules`

  - : A single object, or an array of one or more objects, representing rules for how certain resources should be fetched. Each `routerRules` object contains the following properties:

    - `condition`

      - : An object defining one or more conditions that specify which resources should match this rule. The following properties can be included; if multiple properties are used, a resource must meet all specified conditions to match the rule.
        - `not` {{optional_inline}}
          - : A `condition` object defining conditions that must explicitly **not** be met to match the rule. Conditions defined inside a `not` condition are mutually exclusive with other conditions.
        - `or` {{optional_inline}}
          - : An array of `condition` objects. One set of these defined conditions must be met to match the rule. Conditions defined inside an `or` condition are mutually exclusive with other conditions.
        - `requestMethod` {{optional_inline}}
          - : A string representing the [HTTP method](/en-US/docs/Web/HTTP/Methods) a request should be sent by for it to match the rule, such as `"get"`, `"put"`, or `"head"`.
        - `requestMode` {{optional_inline}}
          - : A string representing the [mode](/en-US/docs/Web/API/Request/mode) a request should have for it to match the rule, for example `"same-origin"`, `"no-cors"`, or `"cors"`.
        - `requestDestination` {{optional_inline}}
          - : A string representing the [destination](/en-US/docs/Web/API/Request/destination) of a request, i.e. what content type should be requested, for it to match the rule. Examples include `"audio"`, `"document"`, `"script"`, and `"worker"`.
        - `runningStatus` {{optional_inline}}
          - : An enumerated value representing the required running status of the service worker for a request to match the rule. Values can be `"running"` or `"not-running"`.
        - `urlPattern` {{optional_inline}}
          - : A {{domxref("URLPattern")}} instance, or a `URLPattern()` constructor [`input`](/en-US/docs/Web/API/URLPattern/URLPattern#input) pattern representing the URLs that match the rule.

    - `source`

      - : An enumerated value or an object specifying the source from which matching resources will be loaded. Possible enumerated values are:

        - `"cache"`
          - : Resources will be loaded from a browser {{domxref("Cache")}}.
        - `"fetch-event"`
          - : Resources will be loaded via the service worker's {{DOMxRef("ServiceWorkerGlobalScope.fetch_event", "fetch")}} event handler. This can be combined with the `"runningStatus"` condition to load resources from a service worker if it is running and fall back to a static route on the network if it is not.
        - `"network"`
          - : Resources will be loaded from the network.
        - `"race-network-and-fetch-handler"`
          - : Attempts are made to load resources from the network and the service worker's {{DOMxRef("ServiceWorkerGlobalScope.fetch_event", "fetch")}} event handler simultaneously. Whichever one completes first is used.

        The `source` value can also be set to an object containing a single property, `cacheName`, the value of which is a string representing the name of a browser {{domxref("Cache")}}. Matching resources will be loaded from this specific named cache if it exists.

### Return value

A {{jsxref("Promise")}} that fulfills with `undefined`.

### Exceptions

- `TypeError` {{domxref("DOMException")}}
  - : Thrown if one or more of the rules objects inside `routerRules` is invalid, or has a `source` value of `"fetch-event"` when the associated service worker does not have a {{DOMxRef("ServiceWorkerGlobalScope.fetch_event", "fetch")}} event handler. Also thrown if you try to combine `or` with another condition type.

## Examples

### Route specific requests to the network if the service worker is not running

In the following example, URLs that start with `/articles` are routed to the network if the service worker is not currently running:

```js
addEventListener("install", (event) => {
  event.addRoutes({
    condition: {
      urlPattern: "/articles/*",
      runningStatus: "not-running",
    },
    source: "network",
  });
});
```

### Route form post requests to the network

In the following example, [`POST`](/en-US/docs/Web/HTTP/Methods/POST) requests to a form are sent directly to the network and bypass the service worker:

```js
addEventListener("install", (event) => {
  event.addRoutes({
    condition: {
      urlPattern: "/form/*",
      requestMethod: "post",
    },
    source: "network",
  });
});
```

### Route certain image type requests to a named cache

In the following example, the browser {{domxref("Cache")}} named `"pictures"` is used for fetching files with extensions of `.png` or `.jpg`:

```js
addEventListener("install", (event) => {
  event.addRoutes({
    condition: {
      or: [{ urlPattern: "*.png" }, { urlPattern: "*.jpg" }],
    },
    source: {
      cacheName: "pictures",
    },
  });
});
```

> **Note:** If the cache does not exist, the browser defaults to using the network so that the requested resources can still be obtained provided the network is available.

You can't combine `or` with another condition — this results in a `TypeError`. If for example you wanted to match files with extensions of `.png` or `.jpg` but only when the `requestMethod` is `get`, you'd need to specify two separate conditions:

```js
addEventListener("install", (event) => {
  event.addRoutes(
    {
      condition: {
        urlPattern: "*.png",
        requestMethod: "get",
      },
      source: {
        cacheName: "pictures",
      },
    },
    {
      condition: {
        urlPattern: "*.jpg",
        requestMethod: "get",
      },
      source: {
        cacheName: "pictures",
      },
    },
  );
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("InstallEvent")}}
- [`install` event](/en-US/docs/Web/API/ServiceWorkerGlobalScope/install_event)
- [Service Worker API](/en-US/docs/Web/API/Service_Worker_API)
- [Use the Service Worker Static Routing API to bypass the service worker for specific paths](https://developer.chrome.com/blog/service-worker-static-routing) on `developer.chrome.com` (2024)

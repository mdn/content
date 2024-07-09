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

The **`addRoutes()`** method of the {{domxref("InstallEvent")}} interface specifies one or more routes, which define rules for fetching specified resources that will be used even prior to service worker startup. This allows you to, for example, bypass a service worker in cases where you always want to fetch a resource from the network or a browser {{domxref("Cache")}}, and avoids the performance overhead of unnecessary service worker cycles.

## Syntax

```js-nolint
addRoutes(routerRules)
```

### Parameters

- `routerRules`

  - : A single object, or an array of one or more objects representing rules for how certain resources should be fetched and where from. Each `routerRules` object contains the following two properties:

    - `condition`

      - : An object defining one or more conditions that specify which resources should match this rule. The following properties can be included; if multiple properties are used, a resource must meet all specified conditions to match the rule.
        - `not` {{optional_inline}}
          - : A `condition` object defining conditions that must explicitly **not** be met to match the rule. Conditions defined inside a `not` condition are mutually exclusive with other conditions.
        - `or` {{optional_inline}}
          - : An array of `condition` objects. One set of these defined conditions must be met to match the rule. Conditions defined inside an `or` condition are mutually exclusive with other conditions.
        - `requestMethod` {{optional_inline}}
          - : A string representing the [method](/en-US/docs/Web/HTTP/Methods) a request should be sent by for it to match the rule.
        - `requestMode` {{optional_inline}}
          - : A string representing the [mode](/en-US/docs/Web/API/Request/mode) a request should have for it to match the rule.
        - `requestDestination` {{optional_inline}}
          - : A string representing the [destination](/en-US/docs/Web/API/Request/destination) of a request, i.e. what content type should be requested, for it to match the rule.
        - `runningStatus` {{optional_inline}}
          - : An enumerated value representing the required running status of the service worker for a request to match the rule. Values can be `"running"` or `"not-running"`.
        - `urlPattern` {{optional_inline}}
          - : A {{domxref("URLPattern")}} instance, or a `URLPattern()` constructor [`input`](/en-US/docs/Web/API/URLPattern/URLPattern#input) pattern representing the URLs that match the rule.

    - `source`

      - : An enumerated value or an object specifying how matching resources will be loaded. Possible enumerated values are:

        - `"cache"`
          - : Matching resources will be loaded from a browser {{domxref("Cache")}}.
        - `"fetch-event"`
          - : Matching resources will be loaded via the service worker's {{DOMxRef("ServiceWorkerGlobalScope.fetch_event", "fetch")}} event handler.
        - `"network"`
          - : Matching resources will be loaded from the network.
        - `"race-network-and-fetch-handler"`
          - : Attempts are made to load matching resources from the network and the service worker's {{DOMxRef("ServiceWorkerGlobalScope.fetch_event", "fetch")}} event handler simultaneously. Whichever one completes first is used.

        The value of `source` can also be set to an object containing a single property, `cacheName`, the value of which is a string representing the name of a browser {{domxref("Cache")}}. Matching resources will be loaded from this specific named cache if it exists.

### Return value

None (`undefined`).

### Exceptions

- `TypeError` {{domxref("DOMException")}}
  - : Thrown if one or more of the rules objects inside `routerRules` is invalid, or has a `source` value of `"fetch-event"` when the associated service worker does not have a {{DOMxRef("ServiceWorkerGlobalScope.fetch_event", "fetch")}} event handler.

## Examples

### Route specific requests to a running service worker

In the following example, URLs that start with `/articles` are routed to the service worker if it is currently running:

```js
addEventListener("install", (event) => {
  event.addRoutes({
    condition: {
      urlPattern: "/articles/*",
      runningStatus: "running",
    },
    source: "fetch-event",
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

In the following example, the browser {{domxref("Cache")}} named `"pictures"` is used for fetching files with extensions of `.png` or `.jpg`.

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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("InstallEvent")}}
- [`install` event](/en-US/docs/Web/API/ServiceWorkerGlobalScope/install_event)
- [Service Worker API](/en-US/docs/Web/API/Service_Worker_API)
- [Use the Service Worker Static Routing API to bypass the service worker for specific paths](https://developer.chrome.com/blog/service-worker-static-routing) on `developer.chrome.com` (2024)

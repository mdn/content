---
title: RequestInit
slug: Web/API/RequestInit
page-type: web-api-interface
spec-urls: https://fetch.spec.whatwg.org/#requestinit
---

{{APIRef("Fetch API")}}

The **`RequestInit`** dictionary of the [Fetch API](/en-US/docs/Web/API/Fetch_API) represents the set of options that can be used to configure a [fetch request](/en-US/docs/Web/API/Window/fetch).

You can pass a `RequestInit` object into the {{domxref("Request.Request()", "Request()")}} constructor, or directly into the [`fetch()`](/en-US/docs/Web/API/Window/fetch) function call.

You can also construct a `Request` with a `RequestInit`, and pass the `Request` to a `fetch()` call along with another `RequestInit`. If you do this, and the same option is set in both places, then the value passed directly into `fetch()` is used.

## Instance properties

- `attributionReporting` {{optional_inline}} {{experimental_inline}}

  - : Indicates that you want the request's response to be able to register a JavaScript-based [attribution source](/en-US/docs/Web/API/Attribution_Reporting_API/Registering_sources#javascript-based_event_sources) or [attribution trigger](/en-US/docs/Web/API/Attribution_Reporting_API/Registering_triggers#javascript-based_attribution_triggers). `attributionReporting` is an object containing the following properties:

    - `eventSourceEligible`
      - : A boolean. If set to `true`, the request's response is eligible to register an attribution source. If set to `false`, it isn't.
    - `triggerEligible`
      - : A boolean. If set to `true`, the request's response is eligible to register an attribution trigger. If set to `false`, it isn't.

    See the [Attribution Reporting API](/en-US/docs/Web/API/Attribution_Reporting_API) for more details.

- `body` {{optional_inline}}

  - : The request body contains content to send to the server, for example in a {{httpmethod("POST")}} or {{httpmethod("PUT")}} request. It is specified as an instance of any of the following types:

    - a string
    - {{jsxref("ArrayBuffer")}}
    - {{domxref("Blob")}}
    - {{jsxref("DataView")}}
    - {{domxref("File")}}
    - {{domxref("FormData")}}
    - {{jsxref("TypedArray")}}
    - {{domxref("URLSearchParams")}}
    - {{domxref("ReadableStream")}}

    See [Setting a body](/en-US/docs/Web/API/Fetch_API/Using_Fetch#setting_a_body) for more details.

- `browsingTopics` {{optional_inline}} {{experimental_inline}}

  - : A boolean specifying that the selected topics for the current user should be sent in a {{httpheader("Sec-Browsing-Topics")}} header with the associated request.

    See [Using the Topics API](/en-US/docs/Web/API/Topics_API/Using) for more details.

- `cache` {{optional_inline}}

  - : The [cache mode](/en-US/docs/Web/API/Request/cache) you want to use for the request. This may be any one of the following values:

    - `default`

      - : The browser looks in its HTTP cache for a response matching the request.

        - If there is a match and it is [fresh](/en-US/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age), it will be returned from the cache.
        - If there is a match but it is [stale](/en-US/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age), the browser will make a [conditional request](/en-US/docs/Web/HTTP/Conditional_requests) to the remote server. If the server indicates that the resource has not changed, it will be returned from the cache. Otherwise the resource will be downloaded from the server and the cache will be updated.
        - If there is no match, the browser will make a normal request, and will update the cache with the downloaded resource.

    - `no-store`
      - : The browser fetches the resource from the remote server without first looking in the cache, _and will not_ update the cache with the downloaded resource.
    - `reload`
      - : The browser fetches the resource from the remote server without first looking in the cache, _but then will_ update the cache with the downloaded resource.
    - `no-cache`

      - : The browser looks in its HTTP cache for a response matching the request.

        - If there is a match, _fresh or stale,_ the browser will make a [conditional request](/en-US/docs/Web/HTTP/Conditional_requests) to the remote server. If the server indicates that the resource has not changed, it will be returned from the cache. Otherwise the resource will be downloaded from the server and the cache will be updated.
        - If there is no match, the browser will make a normal request, and will update the cache with the downloaded resource.

    - `force-cache`

      - : The browser looks in its HTTP cache for a response matching the request.

        - If there is a match, _fresh or stale_, it will be returned from the cache.
        - If there is no match, the browser will make a normal request, and will update the cache with the downloaded resource.

    - `only-if-cached`

      - : The browser looks in its HTTP cache for a response matching the request. {{experimental_inline}}

        - If there is a match, _fresh or stale_, it will be returned from the cache.
        - If there is no match, a network error is returned.

    The `"only-if-cached"` mode can only be used if the request's [`mode`](/en-US/docs/Web/API/Request/mode) is `"same-origin"`. Cached redirects will be followed if the request's `redirect` property is `"follow"` and the redirects do not violate the `"same-origin"` mode.

- `credentials` {{optional_inline}}

  - : Controls whether or not the browser sends credentials with the request, as well as whether any **`Set-Cookie`** response headers are respected. Credentials are cookies, {{glossary("TLS")}} client certificates, or authentication headers containing a username and password. This option may be any one of the following values:

    - `omit`
      - : Never send credentials in the request or include credentials in the response.
    - `same-origin`
      - : Only send and include credentials for same-origin requests.
    - `include`
      - : Always include credentials, even for cross-origin requests.

    Including credentials in cross-origin requests can make a site vulnerable to {{glossary("CSRF")}} attacks, so even if `credentials` is set to `include`, the server must also agree to their inclusion by including the {{httpheader("Access-Control-Allow-Credentials")}} in its response. Additionally, in this situation the server must explicitly specify the client's origin in the {{httpheader("Access-Control-Allow-Origin")}} response header (that is, `*` is not allowed).

    See [Including credentials](/en-US/docs/Web/API/Fetch_API/Using_Fetch#including_credentials) for more details.

    Defaults to `same-origin`.

- `headers` {{optional_inline}}

  - : Any headers you want to add to your request, contained
    within a {{domxref("Headers")}} object or an object literal whose keys are the names of headers and whose values are the header values.

    Many headers are set automatically by the browser and can't be set by a script: these are called {{glossary("Forbidden header name", "Forbidden header names")}}.

    If the `mode` option is set to `no-cors`, you can only set {{glossary("CORS-safelisted request header", "CORS-safelisted request headers")}}.

    See [Setting headers](/en-US/docs/Web/API/Fetch_API/Using_Fetch#setting_headers) for more details.

- `integrity` {{optional_inline}}

  - : Contains the [subresource integrity](/en-US/docs/Web/Security/Subresource_Integrity)
    value of the request.

    This will be checked when the resource is fetched, just as it would be when the [`integrity`](/en-US/docs/Web/HTML/Element/script#integrity) attribute is set on a {{htmlelement("script")}} element. The browser will compute the {{glossary("Cryptographic_hash_function", "hash")}} of the fetched resource using the specified algorithm, and if the result does not match the value specified, the browser will reject the fetch request with a network error.

    The format of this option is `<hash-algo>-<hash-source>` where:

    - `<hash-algo>` is one of the following values: `sha256`, `sha384`, or `sha512`
    - `<hash-source>` is the {{glossary("base64", "Base64-encoding")}} of the result of hashing the resource with the specified hash algorithm.

    Defaults to an empty string.

- `keepalive` {{optional_inline}}

  - : A boolean.
    When set to `true`, the browser will not abort the associated request if the page that initiated it is unloaded before the request is complete.
    This enables a {{domxref('Window.fetch','fetch()')}} request to send analytics at the end of a session even if the user navigates away from or closes the page.

    This has some advantages over using {{domxref("Navigator.sendBeacon()")}} for the same purpose.
    For example, you can use HTTP methods other than [`POST`](/en-US/docs/Web/HTTP/Methods/POST), customize request properties, and access the server response via the fetch {{jsxref("Promise")}} fulfillment.
    It is also available in [service workers](/en-US/docs/Web/API/Service_Worker_API).

    The body size for `keepalive` requests is limited to 64 kibibytes.

    Defaults to `false`.

- `method` {{optional_inline}}

  - : The [request method](/en-US/docs/Web/HTTP/Methods).

    Defaults to {{httpmethod("GET")}}.

- `mode` {{optional_inline}}

  - : Sets cross-origin behavior for the request. One of the following values:

    - `same-origin`

      - : Disallows cross-origin requests. If a `same-origin` request is sent to a different origin, the result is a network error.

    - `cors`

      - : If the request is cross-origin then it will use the [Cross-Origin Resource Sharing (CORS)](/en-US/docs/Web/HTTP/CORS) mechanism. Only {{glossary("CORS-safelisted response header", "CORS-safelisted response headers")}} are exposed in the response.

    - `no-cors`

      - : Disables CORS for cross-origin requests. This option comes with the following restrictions:

        - The method may only be one of `HEAD`, `GET` or `POST`.
        - The headers may only be {{Glossary("CORS-safelisted request header", "CORS-safelisted request headers")}}, with the additional restriction that the {{httpheader("Range")}} header is also not allowed. This also applies to any headers added by service workers.
        - The response is _opaque_, meaning that its headers and body are not available to JavaScript, and its {{domxref("Response.status", "status code", "", "nocode")}} is always `0`.

        The main application for `no-cors` is for a service worker: although the response to a `no-cors` request can't be read by JavaScript, it can be cached by a service worker and then used as a response to an intercepted fetch request. Note that in this situation you don't know whether the request succeeded or not, so you should adopt a caching strategy which enables the cached response to be updated from the network (such as [cache first with cache refresh](/en-US/docs/Web/Progressive_web_apps/Guides/Caching#cache_first_with_cache_refresh)).

    - `navigate`
      - : Used only by HTML navigation. A `navigate` request is created only while navigating between documents.

    See [Making cross-origin requests](/en-US/docs/Web/API/Fetch_API/Using_Fetch#making_cross-origin_requests) for more details.

    Defaults to `cors`.

- `priority` {{optional_inline}}

  - : Specifies the priority of the fetch request relative to other requests of the same type. Must be one of the following:

    - `high`
      - : A high priority fetch request relative to other requests of the same type.
    - `low`
      - : A low priority fetch request relative to other requests of the same type.
    - `auto`
      - : No user preference for the fetch priority.
        It is used if no value is set or if an invalid value is set.

    Defaults to `auto`.

- `redirect` {{optional_inline}}

  - : Determines the browser's behavior in case the server replies with a [redirect status](/en-US/docs/Web/HTTP/Status#redirection_messages). One of the following values:

    - `follow`
      - : Automatically follow redirects.
    - `error`
      - : Reject the promise with a network error when a redirect status is returned.
    - `manual`
      - : Return a response with almost all fields filtered out, to enable a service worker to store the response and later replay it.

    Defaults to `follow`.

- `referrer` {{optional_inline}}

  - : A string specifying the value to use for the request's {{httpheader("Referer")}} header. One of the following:

    - A same-origin relative or absolute URL
      - : Set the `Referer` header to the given value. Relative URLs are resolved relative to the URL of the page that made the request.
    - An empty string
      - : Omit the `Referer` header.
    - `about:client`
      - : Set the `Referer` header to the default value for the context of the request (for example, the URL of the page that made the request).

    Defaults to `about:client`.

- `referrerPolicy` {{optional_inline}}
  - : A string that sets a policy for the {{httpheader("Referer")}} header. The syntax and semantics of this option are exactly the same as for the {{httpheader("Referrer-Policy")}} header.
- `signal` {{optional_inline}}
  - : An {{domxref("AbortSignal")}}. If this option is set, the request can be canceled by calling {{domxref("AbortController.abort()", "abort()")}} on the corresponding `AbortController`.

## Examples

### Passing options into `fetch()`

In this example we pass the `method`, `body`, and `headers` options directly into the [`fetch()`](/en-US/docs/Web/API/Window/fetch) method call:

```js
async function post() {
  const response = await fetch("https://example.org/post", {
    method: "POST",
    body: JSON.stringify({ username: "example" }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.log(response.status);
}
```

### Passing options into the `Request()` constructor

In this example we create a {{domxref("Request")}}, passing the same set of options into its constructor, and then pass the request into `fetch()`:

```js
async function post() {
  const request = new Request("https://example.org/post", {
    method: "POST",
    body: JSON.stringify({ username: "example" }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const response = await fetch(request);

  console.log(response.status);
}
```

### Passing options into both `Request()` and `fetch()`

In this example we create a {{domxref("Request")}}, passing the `method`, `headers`, and `body` options into its constructor. We then pass the request into `fetch()` along with `body` and `referrer` options:

```js
async function post() {
  const request = new Request("https://example.org/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: "example1" }),
  });

  const response = await fetch(request, {
    body: JSON.stringify({ username: "example2" }),
    referrer: "",
  });

  console.log(response.status);
}
```

In this case the request will be sent with the following options:

- `method: "POST"`
- `headers: {"Content-Type": "application/json"}`
- `body: '{"username":"example2"}'`
- `referrer: ""`

## Specifications

{{Specifications}}

## See also

- [Using Fetch](/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [ServiceWorker API](/en-US/docs/Web/API/Service_Worker_API)
- [HTTP access control (CORS)](/en-US/docs/Web/HTTP/CORS)
- [HTTP](/en-US/docs/Web/HTTP)

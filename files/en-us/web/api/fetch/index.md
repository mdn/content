---
title: fetch() global function
short-title: fetch()
slug: Web/API/fetch
page-type: web-api-global-function
browser-compat: api.fetch
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

The global **`fetch()`** method starts the process of fetching a resource from the network, returning a promise that is fulfilled once the response is available.

The promise resolves to the {{domxref("Response")}} object representing the response to your request.

A `fetch()` promise only rejects when the request fails, for example, because of a badly-formed request URL or a network error.
A `fetch()` promise _does not_ reject if the server responds with HTTP status codes that indicate errors (`404`, `504`, etc.).
Instead, a `then()` handler must check the {{domxref("Response.ok")}} and/or {{domxref("Response.status")}} properties.

The `fetch()` method is controlled by the `connect-src` directive of [Content Security Policy](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy) rather than the directive of the resources it's retrieving.

> **Note:** The `fetch()` method's parameters are identical to those of the {{domxref("Request.Request","Request()")}} constructor.

## Syntax

```js-nolint
fetch(resource)
fetch(resource, options)
```

### Parameters

- `resource`

  - : This defines the resource that you wish to fetch. This can either be:

    - A string or any other object with a {{Glossary("stringifier")}} — including a {{domxref("URL")}} object — that provides the URL of the resource you want to fetch.
    - A {{domxref("Request")}} object.

- `options` {{optional_inline}}

  - : An object containing any custom settings you want to apply to the request.
    The possible options are:

    - `attributionReporting` {{experimental_inline}}

      - : Indicates that you want the request's response to be able to register a JavaScript-based [attribution source](/en-US/docs/Web/API/Attribution_Reporting_API/Registering_sources#javascript-based_event_sources) or [attribution trigger](/en-US/docs/Web/API/Attribution_Reporting_API/Registering_triggers#javascript-based_attribution_triggers). `attributionReporting` is an object containing the following properties:

        - `eventSourceEligible`
          - : A boolean. If set to `true`, the request's response is eligible to register an attribution source. If set to `false`, it isn't.
        - `triggerEligible`
          - : A boolean. If set to `true`, the request's response is eligible to register an attribution trigger. If set to `false`, it isn't.

        > **Note:** See the [Attribution Reporting API](/en-US/docs/Web/API/Attribution_Reporting_API) for more details.

    - `body`

      - : Any body that you want to add to your request:
        this can be a {{domxref("Blob")}}, an {{jsxref("ArrayBuffer")}}, a {{jsxref("TypedArray")}}, a {{jsxref("DataView")}},
        a {{domxref("FormData")}}, a {{domxref("URLSearchParams")}}, string object or literal,
        or a {{domxref("ReadableStream")}} object. This latest possibility is still experimental; check the [compatibility information](/en-US/docs/Web/API/Request#browser_compatibility) to verify you can use it.
        Note that a request using the `GET` or `HEAD` method cannot have a body.

    - `browsingTopics` {{experimental_inline}}

      - : A boolean specifying that the selected topics for the current user should be sent in a {{httpheader("Sec-Browsing-Topics")}} header with the associated request. See [Using the Topics API](/en-US/docs/Web/API/Topics_API/Using) for more details.

    - `cache`

      - : A string indicating how the request will interact with the browser's [HTTP cache](/en-US/docs/Web/HTTP/Caching). The possible values, `default`, `no-store`, `reload`, `no-cache`, `force-cache`, and `only-if-cached`, are documented in the article for the {{domxref("Request/cache", "cache")}} property of the {{domxref("Request")}} object.

    - `credentials`

      - : Controls what browsers do with credentials ([cookies](/en-US/docs/Web/HTTP/Cookies), [HTTP authentication](/en-US/docs/Web/HTTP/Authentication) entries, and TLS client certificates). Must be one of the following strings:

        - `omit`: Tells browsers to exclude credentials from the request, and ignore any credentials sent back in the response (e.g., any {{HTTPHeader("Set-Cookie")}} header).
        - `same-origin`: Tells browsers to include credentials with requests to same-origin URLs, and use any credentials sent back in responses from same-origin URLs. **This is the default value.**
        - `include`: Tells browsers to include credentials in both same- and cross-origin requests, and always use any credentials sent back in responses.

          > **Note:** Credentials may be included in simple and "final" cross-origin requests, but should not be included in [CORS preflight requests](/en-US/docs/Web/HTTP/CORS#preflight_requests_and_credentials).

    - `headers`

      - : Any headers you want to add to your request, contained within a {{domxref("Headers")}} object or an object literal with {{jsxref("String")}} values.
        Note that [some names are forbidden](/en-US/docs/Glossary/Forbidden_header_name).

        > **Note:** The [`Authorization`](/en-US/docs/Web/HTTP/Headers/Authorization) HTTP header may be added to a request, but will be removed if the request is redirected cross-origin.

    - `integrity`

      - : Contains the [subresource integrity](/en-US/docs/Web/Security/Subresource_Integrity)
        value of the request (e.g., `sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=`).

    - `keepalive`
      - : The `keepalive` option can be used to allow the request to outlive the page.
        Fetch with the `keepalive` flag is a replacement for the {{domxref("Navigator.sendBeacon()")}} API.
    - `method`

      - : The request method, e.g., `"GET"`, `"POST"`.
        The default is `"GET"`.
        Note that the {{httpheader("Origin")}} header is not set on Fetch requests with a method of {{HTTPMethod("HEAD")}} or {{HTTPMethod("GET")}}.
        Any string which is a case-insensitive match for one of the methods in [RFC 9110](https://www.rfc-editor.org/rfc/rfc9110#name-overview) will be uppercased automatically.
        If you want to use a custom method (like `PATCH`), you should uppercase it yourself.

    - `mode`
      - : The mode you want to use for the request, e.g., `cors`,
        `no-cors`, or `same-origin`.
    - `priority`
      - : Specifies the priority of the fetch request relative to other requests of the same type. Must be one of the following strings:
        - `high`
          - : A high priority fetch request relative to other requests of the same type.
        - `low`
          - : A low priority fetch request relative to other requests of the same type.
        - `auto`
          - : Automatically determine the priority of the fetch request relative to other requests of the same type (default).
    - `redirect`

      - : How to handle a `redirect` response:

        - `follow`
          - : Automatically follow redirects. Unless otherwise stated the redirect mode is set to `follow`.
        - `error`
          - : Abort with an error if a redirect occurs.
        - `manual`
          - : Caller intends to process the response in another context.
            See [WHATWG fetch standard](https://fetch.spec.whatwg.org/#concept-request-redirect-mode) for more information.

    - `referrer`

      - : A string specifying the referrer of the request. This can be a
        same-origin URL, `about:client`, or an empty string.

    - `referrerPolicy`
      - : Specifies the [referrer policy](https://w3c.github.io/webappsec-referrer-policy/#referrer-policies) to use for the request. May be one of `no-referrer`,
        `no-referrer-when-downgrade`, `same-origin`,
        `origin`, `strict-origin`,
        `origin-when-cross-origin`,
        `strict-origin-when-cross-origin`, or `unsafe-url`.
    - `signal`
      - : An {{domxref("AbortSignal")}} object instance; allows you to communicate with a
        fetch request and abort it if desired via an {{domxref("AbortController")}}.

### Return value

A {{jsxref("Promise")}} that resolves to a {{domxref("Response")}} object.

### Exceptions

- `AbortError` {{domxref("DOMException")}}
  - : The request was aborted due to a call to the {{domxref("AbortController")}}
    {{domxref("AbortController.abort", "abort()")}} method.
- `NotAllowedError` {{domxref("DOMException")}}
  - : Thrown if use of the [Topics API](/en-US/docs/Web/API/Topics_API) is specifically disallowed by a {{httpheader('Permissions-Policy/browsing-topics','browsing-topics')}} [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy), and a `fetch()` request was made with `browsingTopics: true`.
- {{jsxref("TypeError")}}
  - : Can occur for the following reasons:

<table>
  <thead>
    <tr>
      <th scope="col">Reason</th>
      <th scope="col">Failing examples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Blocked by a permissions policy</td>
      <td>Use of the <a href="/en-US/docs/Web/API/Attribution_Reporting_API">Attribution Reporting API</a> is blocked by a <a href="/en-US/docs/Web/HTTP/Headers/Permissions-Policy/attribution-reporting"><code>attribution-reporting</code></a> {{httpheader("Permissions-Policy")}}, and a <code>fetch()</code> request was made with <code>attributionReporting</code> specified.</td>
    </tr>
    <tr>
      <td>Invalid header name.</td>
      <td>
        <pre>
// space in "C ontent-Type"
const headers = {
  'C ontent-Type': 'text/xml',
  'Breaking-Bad': '<3',
};
fetch('https://example.com/', { headers });
        </pre>
      </td>
    </tr>
    <tr>
      <td>
        Invalid header value. The header object must contain exactly two elements.
      </td>
      <td>
        <pre>
const headers = [
  ['Content-Type', 'text/html', 'extra'],
  ['Accept'],
];
fetch('https://example.com/', { headers });
        </pre>
      </td>
    </tr>
    <tr>
      <td>
        Invalid URL or scheme, or using a scheme that fetch does not support, or using a scheme that is not supported for a particular request mode.
      </td>
      <td>
        <pre>
fetch('blob://example.com/', { mode: 'cors' });
        </pre>
      </td>
    </tr>
      <td>URL includes credentials.</td>
      <td>
        <pre>
fetch('https://user:password@example.com/');
        </pre>
      </td>
    <tr>
      <td>Invalid referrer URL.</td>
      <td>
        <pre>
fetch('https://example.com/', { referrer: './abc\u0000df' });
        </pre>
      </td>
    </tr>
    <tr>
      <td>Invalid modes (<code>navigate</code> and <code>websocket</code>).</td>
      <td>
        <pre>
fetch('https://example.com/', { mode: 'navigate' });
        </pre>
      </td>
    </tr>
    <tr>
      <td>
        If the request cache mode is "only-if-cached" and the request mode is other than "same-origin".
      </td>
      <td>
        <pre>
fetch('https://example.com/', {
  cache: 'only-if-cached',
  mode: 'no-cors',
});
        </pre>
      </td>
    </tr>
    <tr>
      <td>
        If the request method is an invalid name token or one of the forbidden headers
        (<code>'CONNECT'</code>, <code>'TRACE'</code> or <code>'TRACK'</code>).
      </td>
      <td>
        <pre>
fetch('https://example.com/', { method: 'CONNECT' });
        </pre>
      </td>
    </tr>
    <tr>
      <td>
        If the request mode is "no-cors" and the request method is not a CORS-safe-listed method
        (<code>'GET'</code>, <code>'HEAD'</code>, or <code>'POST'</code>).
      </td>
      <td>
        <pre>
fetch('https://example.com/', {
  method: 'CONNECT',
  mode: 'no-cors',
});
        </pre>
      </td>
    </tr>
    <tr>
      <td>
        If the request method is <code>'GET'</code> or <code>'HEAD'</code> and the body is non-null or not undefined.
      </td>
      <td>
        <pre>
fetch('https://example.com/', {
  method: 'GET',
  body: new FormData(),
});
        </pre>
      </td>
    </tr>
    <tr>
      <td>If fetch throws a network error.</td>
      <td></td>
    </tr>
  </tbody>
</table>

## Examples

In our [Fetch Request example](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-request) (see [Fetch Request live](https://mdn.github.io/dom-examples/fetch/fetch-request/)) we
create a new {{domxref("Request")}} object using the relevant constructor, then fetch it
using a `fetch()` call. Since we are fetching an image, we run
{{domxref("Response.blob()")}} on the response to give it the proper MIME type so it will be
handled properly, then create an Object URL of it and display it in an
{{htmlelement("img")}} element.

```js
const myImage = document.querySelector("img");

const myRequest = new Request("flowers.jpg");

fetch(myRequest)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.blob();
  })
  .then((response) => {
    myImage.src = URL.createObjectURL(response);
  });
```

In our [Fetch Request with init example](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-request-with-init) (see [Fetch Request init live](https://mdn.github.io/dom-examples/fetch/fetch-request-with-init)) we do the same thing except that we pass in an _options_ object when we invoke `fetch()`.
In this case, we can set a {{httpheader("Cache-Control")}} value to indicate what kind of cached responses we're okay with:

```js
const myImage = document.querySelector("img");
const reqHeaders = new Headers();

// A cached response is okay unless it's more than a week old
reqHeaders.set("Cache-Control", "max-age=604800");

const options = {
  headers: reqHeaders,
};

// Pass init as an "options" object with our headers.
const req = new Request("flowers.jpg", options);

fetch(req).then((response) => {
  // ...
});
```

You could also pass the `init` object in with the `Request` constructor to get the same effect:

```js
const req = new Request("flowers.jpg", options);
```

You can also use an object literal as `headers` in `init`:

```js
const options = {
  headers: {
    "Cache-Control": "max-age=60480",
  },
};

const req = new Request("flowers.jpg", options);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Fetch API](/en-US/docs/Web/API/Fetch_API)
- [ServiceWorker API](/en-US/docs/Web/API/Service_Worker_API)
- [HTTP access control (CORS)](/en-US/docs/Web/HTTP/CORS)
- [HTTP](/en-US/docs/Web/HTTP)

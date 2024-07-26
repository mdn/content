---
title: Headers
slug: Web/API/Headers
page-type: web-api-interface
browser-compat: api.Headers
---

{{APIRef("Fetch API")}} {{AvailableInWorkers}}

The **`Headers`** interface of the [Fetch API](/en-US/docs/Web/API/Fetch_API) allows you to perform various actions on [HTTP request and response headers](/en-US/docs/Web/HTTP/Headers). These actions include retrieving, setting, adding to, and removing headers from the list of the request's headers.

A `Headers` object has an associated header list, which is initially empty and consists of zero or more name and value pairs. You can add to this using methods like {{domxref("Headers.append","append()")}} (see [Examples](#examples).) In all methods of this interface, header names are matched by case-insensitive byte sequence.

For security reasons, some headers can only be controlled by the user agent. These headers include the {{Glossary("Forbidden_header_name", "forbidden header names")}} and {{Glossary("Forbidden_response_header_name", "forbidden response header names")}}.

You can retrieve a `Headers` object via the {{domxref("Request.headers")}} and {{domxref("Response.headers")}} properties, and create a new `Headers` object using the {{domxref("Headers.Headers", "Headers()")}} constructor.

An object implementing `Headers` can directly be used in a {{jsxref("Statements/for...of", "for...of")}} structure, instead of {{domxref('Headers.entries()', 'entries()')}}: `for (const p of myHeaders)` is equivalent to `for (const p of myHeaders.entries())`.

> [!NOTE]
> you can find out more about the available headers by reading our [HTTP headers](/en-US/docs/Web/HTTP/Headers) reference.

## Description

### Headers guards

A Headers object has an associated _guard_, which takes a value of `immutable`, `request`, `request-no-cors`, `response`, or `none`. This affects whether the {{domxref("Headers.set","set()")}}, {{domxref("Headers.delete","delete()")}}, and {{domxref("Headers.append","append()")}} methods will mutate the header.

When a new {{domxref("Headers")}} object is created using the {{domxref("Headers.Headers","Headers()")}} {{glossary("constructor")}}, its guard is set to `none` (the default). When a {{domxref("Request")}} or {{domxref("Response")}} object is created, it has an associated {{domxref("Headers")}} object whose guard is set as summarized below:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row">new object's type</th>
      <th scope="col">creating constructor</th>
      <th scope="col">
        guard setting of associated {{domxref("Headers")}} object
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">{{domxref("Request")}}</td>
      <td>{{domxref("Request.Request","Request()")}}</td>
      <td><code>request</code></td>
    </tr>
    <tr>
      <td>
        {{domxref("Request.Request","Request()")}} with
        {{domxref("Request.mode","mode")}} of <code>no-cors</code>
      </td>
      <td><code>request-no-cors</code></td>
    </tr>
    <tr>
      <td rowspan="2">{{domxref("Response")}}</td>
      <td>{{domxref("Response.Response","Response()")}}</td>
      <td><code>response</code></td>
    </tr>
    <tr>
      <td>
        {{domxref("Response.error_static", "Response.error()")}} or
        {{domxref("Response.redirect_static", "Response.redirect()")}} methods
      </td>
      <td><code>immutable</code></td>
    </tr>
  </tbody>
</table>

A header's guard affects the {{domxref("Headers.set","set()")}}, {{domxref("Headers.delete","delete()")}}, and {{domxref("Headers.append","append()")}} methods which change the header's contents. A {{jsxref("TypeError")}} is thrown if you try to modify a {{domxref("Headers")}} object whose guard is `immutable`. However, the operation will work if:

- Guard is `request` and the header _name_ isn't a {{Glossary("forbidden header name")}} .
- Guard is `request-no-cors` and the header _name_/_value_ is a {{Glossary("CORS-safelisted request header", "simple header")}} .
- Guard is `response` and the header _name_ isn't a {{Glossary("forbidden response header name")}} .

## Constructor

- {{domxref("Headers.Headers()", "Headers()")}}
  - : Creates a new `Headers` object.

## Instance methods

- {{domxref("Headers.append()")}}
  - : Appends a new value onto an existing header inside a `Headers` object, or adds the header if it does not already exist.
- {{domxref("Headers.delete()")}}
  - : Deletes a header from a `Headers` object.
- {{domxref("Headers.entries()")}}
  - : Returns an {{jsxref("Iteration_protocols","iterator")}} allowing to go through all key/value pairs contained in this object.
- {{domxref("Headers.forEach()")}}
  - : Executes a provided function once for each key/value pair in this `Headers` object.
- {{domxref("Headers.get()")}}
  - : Returns a {{jsxref("String")}} sequence of all the values of a header within a `Headers` object with a given name.
- {{domxref("Headers.getSetCookie()")}}
  - : Returns an array containing the values of all {{httpheader("Set-Cookie")}} headers associated with a response.
- {{domxref("Headers.has()")}}
  - : Returns a boolean stating whether a `Headers` object contains a certain header.
- {{domxref("Headers.keys()")}}
  - : Returns an {{jsxref("Iteration_protocols", "iterator")}} allowing you to go through all keys of the key/value pairs contained in this object.
- {{domxref("Headers.set()")}}
  - : Sets a new value for an existing header inside a `Headers` object, or adds the header if it does not already exist.
- {{domxref("Headers.values()")}}
  - : Returns an {{jsxref("Iteration_protocols", "iterator")}} allowing you to go through all values of the key/value pairs contained in this object.

> [!NOTE]
> To be clear, the difference between {{domxref("Headers.set()")}} and {{domxref("Headers.append()")}} is that if the specified header does already exist and does accept multiple values, {{domxref("Headers.set()")}} will overwrite the existing value with the new one, whereas {{domxref("Headers.append()")}} will append the new value onto the end of the set of values. See their dedicated pages for example code.

> [!NOTE]
> All of the Headers methods will throw a {{jsxref("TypeError")}} if you try to pass in a reference to a name that isn't a [valid HTTP Header name](https://fetch.spec.whatwg.org/#concept-header-name). The mutation operations will throw a `TypeError` if the header has an immutable [guard](#headers_guards). In any other failure case they fail silently.

> [!NOTE]
> When Header values are iterated over, they are automatically sorted in lexicographical order, and values from duplicate header names are combined.

## Examples

In the following snippet, we create a new header using the `Headers()` constructor, add a new header to it using `append()`, then return that header value using `get()`:

```js
const myHeaders = new Headers();

myHeaders.append("Content-Type", "text/xml");
myHeaders.get("Content-Type"); // should return 'text/xml'
```

The same can be achieved by passing an array of arrays or an object literal to the constructor:

```js
let myHeaders = new Headers({
  "Content-Type": "text/xml",
});

// or, using an array of arrays:
myHeaders = new Headers([["Content-Type", "text/xml"]]);

myHeaders.get("Content-Type"); // should return 'text/xml'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ServiceWorker API](/en-US/docs/Web/API/Service_Worker_API)
- [HTTP access control (CORS)](/en-US/docs/Web/HTTP/CORS)
- [HTTP](/en-US/docs/Web/HTTP)

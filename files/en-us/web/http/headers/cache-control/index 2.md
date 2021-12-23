---
title: Cache-Control
slug: Web/HTTP/Headers/Cache-Control
tags:
  - Cache-Control
  - HTTP
  - HTTP Header
  - Request header
  - Response header
  - Reference
browser-compat: http.headers.Cache-Control
---
{{HTTPSidebar}}

The **`Cache-Control`** HTTP header holds _directives_ (instructions) for [caching](/en-US/docs/Web/HTTP/Caching) in both requests and responses. A given directive in a request does not mean the same directive should be in the response.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>
        {{Glossary("Request header")}},
        {{Glossary("Response header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header")}}
      </th>
      <td>yes</td>
    </tr>
  </tbody>
</table>

## Syntax

Caching directives have the following rules to be valid:

- Case-insensitive, but lowercase is recommended.
- Multiple directives are comma-separated.
- Some directives have an optional argument, which can be either a _token_ or a _quoted-string_. (See spec for definitions)

### Cache request directives

Standard `Cache-Control` directives that can be used by the client in an HTTP request.

```
Cache-Control: max-age=<seconds>
Cache-Control: max-stale[=<seconds>]
Cache-Control: min-fresh=<seconds>
Cache-Control: no-cache
Cache-Control: no-store
Cache-Control: no-transform
Cache-Control: only-if-cached
```

### Cache response directives

Standard `Cache-Control` directives that can be used by the server in an HTTP response.

```
Cache-Control: must-revalidate
Cache-Control: no-cache
Cache-Control: no-store
Cache-Control: no-transform
Cache-Control: public
Cache-Control: private
Cache-Control: proxy-revalidate
Cache-Control: max-age=<seconds>
Cache-Control: s-maxage=<seconds>
```

### Extension Cache-Control directives

Extension `Cache-Control` directives are not part of the core HTTP caching standards document. Check the [compatibility table](#browser_compatibility) for their support; user-agents that don't recognize them should ignore them.

```
Cache-Control: immutable
Cache-Control: stale-while-revalidate=<seconds>
Cache-Control: stale-if-error=<seconds>
```

## Directives

### Cacheability

Directives that define whether a response/request can be cached, where it may be cached, and whether it must be validated with the origin server before caching.

- `public`
  - : The response may be stored by _any_ cache, even if the response is normally non-cacheable.
- `private`
  - : The response may be stored only by a _browser's_ cache, even if the response is normally non-cacheable. **If you mean to not store the response in any cache, use `no-store` instead.** _This directive is not effective in preventing caches from storing your response._
- `no-cache`
  - : The response may be stored by _any_ cache, even if the response is normally non-cacheable. However, the stored response MUST _always_ go through validation with the origin server first before using it, therefore, you cannot use `no-cache` in-conjunction with `immutable`. **If you mean to not store the response in any cache, use `no-store` instead.** _This directive is not effective in preventing caches from storing your response._
- `no-store`
  - : The response may **not** be stored in _any_ cache. Note that this will not prevent a valid _pre-existing_ cached response being returned. Clients can set `max-age=0` to also clear existing cache responses, as this forces the cache to revalidate with the server (no other directives have an effect when used with `no-store`).

### Expiration

- `max-age=<seconds>`
  - : The maximum amount of time a resource is considered fresh. Unlike `Expires`, this directive is relative to the time of the request.
- `s-maxage=<seconds>`
  - : Overrides `max-age` or the `Expires` header, but only for shared caches (e.g., proxies). Ignored by private caches.
- `max-stale[=<seconds>]`
  - : Indicates the client will accept a stale response. An optional value in seconds indicates the upper limit of staleness the client will accept.
- `min-fresh=<seconds>`
  - : Indicates the client wants a response that will still be fresh for _at least_ the specified number of seconds.
- `stale-while-revalidate=<seconds>` {{Experimental_Inline}}
  - : Indicates the client will accept a stale response, while asynchronously checking in the background for a fresh one. The _seconds_ value indicates how long the client will accept a stale response. Note that the time does not start at the time of the request itself, but, for example, after `max-age` has elapsed. See "[Keeping things fresh with `stale-while-revalidate`](https://web.dev/stale-while-revalidate)" for more information.
- `stale-if-error=<seconds>` {{Experimental_Inline}}
  - : Indicates the client will accept a stale response if the check for a fresh one fails. The _seconds_ value indicates how long the client will accept the stale response after the initial expiration.

### Revalidation and reloading

- `must-revalidate`
  - : Indicates that once a resource becomes stale, caches must not use their stale copy without successful [validation](/en-US/docs/Web/HTTP/Caching#cache_validation) on the origin server.
- `proxy-revalidate`
  - : Like `must-revalidate`, but only for shared caches (e.g., proxies). Ignored by private caches.
- `immutable`
  - : Indicates that the response body **will not change** over time. The resource, if _unexpired_, is unchanged on the server and therefore the client should not send a conditional revalidation for it (e.g. `If-None-Match` or `If-Modified-Since`) to check for updates, even when the user explicitly refreshes the page. Clients that aren't aware of this extension must ignore them as per the HTTP specification. In Firefox, `immutable` is only honored on `https://` transactions. For more information, see also this [blog post](https://bitsup.blogspot.de/2016/05/cache-control-immutable.html).

### Other

- `no-transform`
  - : An intermediate cache or proxy cannot edit the response body, {{HTTPHeader("Content-Encoding")}}, {{HTTPHeader("Content-Range")}}, or {{HTTPHeader("Content-Type")}}. It therefore forbids a proxy or browser feature, such as [Google’s Web Light](https://support.google.com/webmasters/answer/6211428), from converting images to minimize data for a cache store or slow connection.
- `only-if-cached`
  - : Set by the _client_ to indicate "do not use the network" for the response. The cache should either respond using a stored response, or respond with a {{HTTPStatus("504")}} status code. Conditional headers such as `If-None-Match` should not be set. There is no effect if `only-if-cached` is set by a server as part of a response.

## Examples

### Preventing caching

A good way to disable caching of a resource, is to send the following response header:

```plain example-good
Cache-Control: no-store
```

> **Note:** The `no-store` directive will prevent a new resource being cached,
> but it will not prevent the cache from responding with a non-stale resource that was cached as the result of an earlier request.
> Setting `max-age=0` as well forces the cache to revalidate (clears the cache).
>
> `Cache-Control: no-store, max-age=0`

On the opposite, this is a bad way to achieve this:

```plain example-bad
Cache-Control: private,no-cache,no-store,max-age=0,must-revalidate,pre-check=0,post-check=0
```

### Caching static assets

For the files in the application that will not change, you can usually add aggressive caching by sending the response header below. This includes static files that are served by the application such as images, CSS files and JavaScript files, for example. In addition, see also the `Expires` header.

```
Cache-Control: public, max-age=604800, immutable
```

### Requiring revalidation

`no-cache` and `max-age=0, must-revalidate` have the same meaning.
Clients can cache a resource but must revalidate each time before using it. This means HTTP request occurs each time though, it can skip downloading HTTP body if the content is valid.

```
Cache-Control: no-cache

Cache-Control: max-age=0, must-revalidate
```

**Note**: The following header may serve a stale resource, if server is down or loses connectivity.

```
Cache-Control: max-age=0
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [HTTP Caching FAQ](/en-US/docs/Web/HTTP/Caching)
- [Caching Tutorial for Web Authors and Webmasters](https://www.mnot.net/cache_docs/)
- Guide: _[`Cache-Control` for civilians](https://csswizardry.com/2019/03/cache-control-for-civilians)_
- {{HTTPHeader("Age")}}
- {{HTTPHeader("Expires")}}
- {{HTTPHeader("Pragma")}}

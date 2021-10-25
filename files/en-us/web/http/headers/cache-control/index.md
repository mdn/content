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

The **`Cache-Control`** HTTP header fields holds _directives_ (instructions) for [caching](/en-US/docs/Web/HTTP/Caching) in both requests and responses. This header can be used to control caching not only in the browser, but also in shared caches (e.g. Proxy, CDN, Load-Balancer etc).

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

Caching directives follow the validation rules below:

- Case-insensitive, but lowercase is recommended.
- Multiple directives are comma-separated.
- Some directives have an optional argument.

### Cache directives

Standard `Cache-Control` directives are defined as follows.

| Request          | Response           |
| :--------------- | :----------------- |
| `max-age`        | `max-age`          |
| `max-stale`      | -                  |
| `min-fresh`      | -                  |
| -                | `s-maxage`         |
| `no-cache`       | `no-cache`         |
| `no-store`       | `no-store`         |
| `no-transform`   | `no-transform`     |
| `only-if-cached` | -                  |
|                  | `must-revalidate`  |
|                  | `proxy-revalidate` |
|                  | `must-understand`  |
|                  | `private`          |
|                  | `public`           |

Extension `Cache-Control` directives are not part of the core HTTP caching standards document. Check the [compatibility table](#browser_compatibility) for their support; user agents that don't recognize them should ignore them.

| Request          | Response                 |
| :--------------- | :----------------------- |
|                  | `immutable`              |
|                  | `stale-while-revalidate` |
| `stale-if-error` | `stale-if-error`         |

## Vocabulary

When talking about caching, there is sometimes confusion because the word _cache_ is both a noun and a verb (e.g. "Caching cache in the cache).
Therefore, several terms are used in the specification to clarify the explanation.

- `Cache Storage`
  - : Storage which holds requests and responses for reusing in subsequent requests. May be either a shared or private cache.
- `Shared Cache`
  - : Cache storage that exists between the origin server and clients (e.g. Proxy, CDN, Load Balancer, etc.) It stores a single response and reuses it with multiple users, so developers should avoid storing personalized contents to be cached in the shared cache.
- `Private Cache`
  - : Cache storage that exists in the client. Also called _local cache_, or even just _browser cache_ etc. It can store and reuse personalized content for a single user.
- `Store response`
  - : Store a response in cache storage when it's cacheable. But it's not always reused as-is. (Usually "cache" means storing a response.)
- `Reuse response`
  - : Reuse cached responses for subsequent requests.
- `Revalidate response`
  - : Ask the origin server whether the stored response is still fresh or not. Usually it's done through a conditional request.
- `Fresh response`
  - : Indicates that the response is fresh. This usually means the response can be reused for subsequent requests, depending on request directives.
- `Stale response`
  - : Indicates that the response is stale. It usually means the response can't be reused as-is. Cache storage isn't required to remove stale responses immediately, because revalidation could change the response from being stale to being fresh again.
- `Age`
  - : The time since a response was generated. It is a criterion for whether a response is fresh or stale.

## Directives

### Response Directives

#### `max-age`

The `max-age=N` response directive indicates that the response remains fresh until _N_ seconds after the response is generated.

```
Cache-Control: max-age=604800
```

Indicates that cache storage can store this response and reuse it for subsequent requests while it's fresh.

Note that `max-age` is not the elapsed time since the response was received, but instead th elapsed time since he response was generated on the origin server. So if the intermediate cache stores it for 100 seconds (for indicating that, the intermediate cache adds an `Age` header to the response), the browser local cache storage could reuse it `-100` seconds from `max-age`.

```
Cache-Control: max-age=604800
Age: 100
```

#### `s-maxage`

The `s-maxage` response directive has the same meaning as `max-age`, but only for the shared cache.

```
Cache-Control: s-maxage=604800
```

`s-maxage` can be used to control the private cache and shared cache separately.

#### `no-cache`

The `no-cache` response directive indicates that the response can be stored in cache storage, but must be validated to the origin server before reuse (even when disconnected from the origin server).

```
Cache-Control: no-cache
```

If you want a client to always get the latest content, and/or if your server supports conditional requests, `no-cache` is the directive to use.

Note that a common mistake is to consider `no-cache` to mean "don't cache". However, `no-cache` actually allows storing but validating before reusing. If the sense of "don't cache" that you want is actually "don't store", then `no-store` is the directive to use.

#### `must-revalidate`

The `must-revalidate` response directive indicates that the response can be stored in cache storage and can be reused while it's been fresh. But once it becomes stale, it must be validated to the origin server before reuse.

So you primarily use it with `max-age`.

```
Cache-Control: max-age=604800, must-revalidate
```

Cache storage is allowed to reuse stale responses when disconnected from the origin server. `must-revalidate` is a way to avoid such reuse of stale responses, and to ensure either validation to the origin server occurs, or a 504 (Gateway Timeout) if that’s not possible.

#### `proxy-revalidate`

The `proxy-revalidate` response directive is the equivalent of `must-revalidate`, but specifically for shared caches only.

#### `no-store`

The `no-store` response directive indicates that any cache storage of any kind (private or shared) should not store this response.

```
Cache-Control: no-store
```

But `no-store` is not on its own a reliable or sufficient mechanism for ensuring privacy. For example, if you want user-personalized responses to not be stored in any cache storage — for avoiding reuse by other users (and therefore, information leaks) — you should add the `private` directive too.

```
Cache-Control: no-store, private
```

#### `private`

The `private` response directive indicates that the response can be stored only in a private cache (e.g. local cache storage in browsers).

```
Cache-Control: private
```

You should add the `private` directive for user-personalized content — in particular, responses received after login, and sessions managed via cookies.

If you forget to add `private` to a response with personalized content, then that response can be stored in a shared cache and end up being used by multiple users, which can cause personal  information to leak.

`no-store` may seem to work fine for avoiding leaks, but is semantically different from `private`. To avoiding leaking personal information, it's better to use both `private` and `no-store`.

```
Cache-Control: private, no-store
```

#### `public`

Responses for requests with `Authorization` header fields should normally not be stored in a shared cache. But the `public` directive will cause such responses to be stored in a shared cache.

```
Cache-Control: public
```

In general, when pages are under Basic Auth or Digest Auth, the browser sends requests with the `Authorization` header. That means the response is access-controlled for restricted users (who have accounts), and it's fundamentally not shared-cacheable, even if it has `max-age`.

You can use the `public` directive to unlock that restriction.

```
Cache-Control: public, max-age=604800
```

Note that, `s-maxage` or `must-revalidate` also unlock that restriction.

If a request doesn’t have an `Authorization` header, or you are already using `s-maxage` or `must-revalidate` in the response, then you don't need to use `public`.

#### `must-understand`

The `must-understand` response directive indicates that cache storage should store the response only if it understands the requirements for caching based on status code.

When a server sends a new status code in a response which has some requirements based on status code, it can cause some trouble when cache storage stores it without understanding those requirements.

`must-understand` should be coupled with `no-store`, for fallback behavior.

```
Cache-Control: must-understand, no-store
```

If the cache storage doesn't support `must-understand`, it will be ignored. If `no-store` is also present, the response isn't stored.
If the cache storage supports `must-understand`, it stores the response with an understanding of cache requirements based on its status code.

You can use `must-understand` when you respond with a newly defined status code.

#### `no-transform`

Some intermediaries transform contents for several reasons. For example, convert images to reduce transfer packets. But in some cases it can be unexpected behavior for the content provider.

`no-stransform` indicates that the intermediaries(regardless of whether it implements a cache) can't transform its contents.

Note: [Google’s Web Light](https://support.google.com/webmasters/answer/6211428) is one kind of such an intermediary. It converts images to minimize data for a cache store or slow connection, and supports `no-transform` as an opt-out option.

#### `immutable`

`immutable` response directive indicates that the response will not be updated while it's been fresh.

```
Cache-Control: public, max-age=604800, immutable
```

In the modern way, static resources include version/hashes in its URL and are never modified (If modification happens, it will have another version/hashes and the URL will change too). It called **cache-busting** pattern.

```
<script src=https://example.com/react.0.0.0.js></script>
```

Browsers will send conditional requests for validating to the origin server when it is reloaded. But it's not necessary to revalidate these kinds of static resources because they're never modified.
`immutable` tells cache storage that its response is immutable while it's fresh, and avoids these kinds of unnecessary conditional requests to the server.

When you use a cache-busting pattern for resources and apply them to a long `max-age`, you can also add `immutable` to avoid revalidation.

#### `stale-while-revalidate`

`stale-while-revalidate` response directive indicates that the cache could reuse a stale response while it revalidates it to cache.

```
Cache-Control: max-age=604800, stale-while-revalidate=86400
```

In the example above, cache storage stores response and it's been fresh for 7 days (604800s). After 7 days, it became stale but the cache could reuse it for an extra 1 day (86400s). During this period of time (1 day), cache reuses the response and at the same time revalidates it to the origin server too.

Revalida will make the cache to be fresh again, so it appears to the client that it was always fresh during that period.

If no request happened during that period, cache became stale and the next request will revalidate normally.

#### `stale-if-error`

`stale-if-error` response directive indicates that the cache could reuse a stale response while origin server responses error (500, 502, 503, or 504).

```
Cache-Control: max-age=604800, stale-if-error=86400
```

In the example above, cache storage stores response and it's been fresh for 7 days (604800s). After 7 days, it became stale but the cache could reuse it for an extra 1 day (86400s) when server responses error status.

After a period of time, the stored response became stale normally. It means that the client will receive an error response as-is if the origin server sends it.

## Request Directives

### `no-cache`

`no-cache` request directive indicates that the client requires the cache and that every response should be validated by the origin server before reusing it.

```
Cache-Control: no-cache
```

It means that clients could always receive up-to-date responses even if cache storage stores fresh responses.

Browser usually adding `no-cache` to the request when user **Force Reloading** the page.

### `no-store`

`no-store` request directive indicates that the client requires that every cache can't store its request and corresponding response. Even if the origin server's response could be cacheable.

```
Cache-Control: no-store
```

Note that the major browsers do not support requests with `no-store`.

### `max-age`

`max-age=N` request directive indicates that the client allows a stored response that is generated on the origin server within N seconds.

```
Cache-Control: max-age=3600
```

In the case above, if the response with `Cache-Control: max-age=604800` was stored on cache storage 3 hours ago, cache couldn't reuse that response.

Many browsers use this directive for **Reloading** as below.

```
Cache-Control: max-age=0
```

It's a work around for `no-cache` because many old (HTTP/1.0) cache implementations don't support `no-cache`. Recently browsers are still using `max-age=0` in Readling for backward compatibility and using `no-cache` for Force Reload alternatively.

### `max-stale`

`max-stale=N` request directive indicates that the client allows a stored response that is stale within N seconds.

```
Cache-Control: max-stale=3600
```

In the case above, if the response with `Cache-Control: max-age=604800` was stored on cache storage 3 hours ago, cache couldn't reuse that response.

Clients could use this header when the origin server is down or too slow and could accept cached responses from cache storage even if it's a bit old.

Note that the major browsers do not support requests with `max-stale`.

### `min-fresh`

`min-fresh=N` request directive indicates that the client allows a stored response that is fresh for at least N seconds.

```
Cache-Control: min-fresh=600
```

In the case above, if the response with `Cache-Control: max-age=3600` was stored on cache storage 51 minutes ago, cache couldn't reuse that response.

Clients could use this header when the user requires not only it's fresh but also it wouldn't update for a period of time.

Note that the major browsers do not support requests with `min-fresh`.

### `no-transform`

Same meaning with `no-transform` on response but on request.

### `only-if-cached`

Client indicates for cache storage to obtain an already cached response. If cache storage has stored response it reuses, or respond 504 Gateway Timeout if not.

## Use Cases

### Preventing storing in cache

If you intend not to store responses in cache storage, you can use the `no-store` directive.

```
Cache-Control: no-store
```

Note that `no-cache` means "it can be stored but don't reuse before validating" so it's not for preventing storing cache.

```plain example-bad
Cache-Control: no-cache
```

But if you intend it can't be stored in a shared cache **because it's personalized for the user** (e.g. using Cookie, Authorization, etc), you should consider using the `private` directive too.

```
Cache-Control: no-store, private
```

In theory, if directives are conflicted, the most restrictive directive should be honored. So it's basically meaningless because `no-cache`, `max-age=0` and `must-revalidate` conflict with `no-store`.

```plain example-bad
Cache-Control: private, no-cache, no-store, max-age=0, must-revalidate
```

### Caching static assets with Cache Busting

When you build static assets with versioning / hashing mechanisms. Adding version/hash to the filename or query string is a good way to manage caching.

For example,

```html
<!-- index.html —>
<script src=/assets/react.min.js></script>
<img src=/assets/hero.png width=900 height=400>
```

The React version will change when you update the library, and hero.png also changes when you edit the picture. So it's hard to store in cache via `max-age`.

In that case, including the library version of JS and the hash of the picture in the url could solve the problem.

```html
<!-- index.html —>
<script src=/assets/react.0.0.0min.js></script>
<img src=/assets/hero.png?hash=deadbeef width=900 height=400>
```

You can add long `max-age` and `immutable` because contents will never change.

```
# /assets/*
Cache-Control: max-age=31536000, immutable
```

When you update the library or edit the picture, new contents should have a new URL and caches aren't reused. It called **Cache Busting pattern**.

Make sure that the HTML response itself should not be cached with a long `max-age`. `no-cache` could cause revalidation and the client will receive a new version of HTML and static assets correctly.

```
# /index.html
Cache-Control: no-cache
```

Note: If `index.html` is controlled under Basic / Digest Authentication, files under `/assets` are not stored in the shared cache. If `/assets/` files are suitable for storing in a shared cache, you also need one of `public`, `s-maxage` or `must-revalidate`.

### Up-to-date contents always

For content that’s generated dynamically, or that’s static but updated often, you want a user to always receive the most up-to-date version.

If you don't add a `Cache-Control` header because the response is not intended to be cached, that could cause an unexpected result. Cache storage is allowed to cache it heuristically, so if you have any requirements on caching, you should always indicate it explicitly, in the `Cache-Control` header.

Adding `no-cache` to the response causes revalidation to the server, so you can serve a fresh response every time.

```
Cache-Control: no-cache
```

Most HTTP/1.0 caches don't support `no-cache` directives, so historically `max-age=0` was used as a workaround. But only `max-age=0` could cause a stale response to be reused when cache storage disconnected from the origin server. `must-revalidate` addresses that. That’s why the example below is equivalent to `no-cache`.

```
Cache-Control: max-age=0, must-revalidate
```

But for now, you can simply use `no-cache` instead.

### Clearing an already-stored cache

Unfortunately, there are no cache directives for clearing already-stored responses from cache storage.

Imagine that client / cache storage stores a fresh response for a path, with no request flight to the server. There is nothing a server could do to that path.

Alternatively, `Clear-Site-Data` can clear all cache from the browser. But be careful: that clears every stored response for a site — and only in browsers, not for a shared cache.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

[HTTP Caching](https://httpwg.org/http-core/draft-ietf-httpbis-cache-latest.html)
[RFC5861 - HTTP Cache-Control Extensions for Stale Content](https://datatracker.ietf.org/doc/html/rfc5861)
[RFC8246 - HTTP Immutable Responses](https://datatracker.ietf.org/doc/html/rfc8246)

## See also

- [HTTP Caching FAQ](/en-US/docs/Web/HTTP/Caching)
- [Caching Tutorial for Web Authors and Webmasters](https://www.mnot.net/cache_docs/)
- [Caching best practices & max-age gotchas](https://jakearchibald.com/2016/caching-best-practices/)
- [Cache-Control for Civilians](https://csswizardry.com/2019/03/cache-control-for-civilians/)
- {{HTTPHeader("Age")}}
- {{HTTPHeader("Expires")}}
- {{HTTPHeader("Pragma")}}

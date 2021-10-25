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
  - : The storage which holds requests and responses for reusing in the subsequent requests.
- `Shared Cache`
  - : Cache storage that exists between the origin server and clients (e.g. Proxy, CDN, Load Balancer, etc.) It stores a single response and reuses it with multiple users, so developers should avoid storing personalized contents to be cached in the shared cache.
- `Private Cache`
  - : Cache storage that exists in the client. Also called _local cache_, or even just _browser cache_ etc. It can store and reuse personalized content for a single user.
- `Store response`
  - : Storing a response in cache storage when it's cacheable. But it's not always reused as-is. (Usually "cache" means storing a response.)
- `Reuse response`
  - : Reusing cached responses for subsequent requests.
- `Revalidate response`
  - : Ask the origin server whether the stored response is still fresh or not. Usually it's done through a conditional request.
- `Fresh response`
  - : Indicates that the response is fresh. It usually means its response can be reusable for subsequent requests, but it depends on request directives.
- `Stale response`
  - : Indicates that the response is stale. It usually means the response can't be reusable as-is. Cache storage isn't required to remove stale responses immediately, because revalidation could change the response from being stale to being fresh again.
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

`proxy-revalidate` response directive is the `must-revalidate` only for shared caches.

#### `no-store`

`no-store` response directive indicates that every (private/shared) cache storage should not store this response.

```
Cache-Control: no-store
```

But it's not a reliable or sufficient mechanism for ensuring privacy. For example if you want user personalized responses not to store any cache storage for avoiding reused in other users (cause information leak), you should add `private` directive too.

```
Cache-Control: no-store, private
```

#### `private`

`private` response directive indicates that the response can be stored only in a private cache. (e.g. Browser local cache storage)

```
Cache-Control: private
```

You should add this directive for user-personalized contents. Usually, pages after login and session managed via Cookie are the candidate to add.

If you forgot to add this to personalized contents, it can be stored in a shared cache and used by multiple users, resulting in personal information leak incidents.

`no-store` seems to work fine for avoiding it, but these are semantically different. It's better to use `private` for private contents and `no-store` for avoiding storing private cache too.

```
Cache-Control: private, no-store
```

#### `public`

Response for Request with `Authorization` header fields should not be stored on shared cache. But `public` will accept it to store on shared cache.

```
Cache-Control: public
```

In general, when pages are under Basic Auth or Digest Auth, the browser sends requests with the `Authorization` header. It means that it is access controlled for restricted users (who have accounts), and it's fundamentally not shared cacheable even if it has `max-age`.

You can use `public` directives to unlock its restriction.

```
Cache-Control: public, max-age=604800
```

Note that, `s-maxage` or `must-revalidate` also unlock its restriction. In other cases, you don't need to add `public` for storing on shared cache storage.

If you aren't aware of the `Authorization` header on your site, or you are already using `s-maxage` or `must-revalidate` on your response, you don't need to use `public`.

#### `must-understand`

`must-understand` response directive indicates that the cache storage should store response even if it understands the requirements for caching on status code.'

When a server responds to a new status code in response which has some requirements for status code, it can cause some trouble when cache storage stores it without understanding its requirements.

`must-understand` should be coupled with `no-store` for falling back behavior.

```
Cache-Control: must-understand, no-store
```

if the cache storage doesn't support `must-understand` will ignore it. only `no-store` remains and response isn't stored.
if the cache storage supports `must-understand`, it stores responses with understanding of cache requirements for its status code.

You can use it when you respond with a newly defined status code.

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

Note: If index.html is controlled under Basic / Digest Authentication, files under `/assets` are not stored in the shared cache. If `/assets/` files are suitable for shared cache to be stored, you also need one of `public`, `s-maxage` or `must-revalidate`.

### Up-to-date contents always

If contents are generated dynamically, or it's static but updated often, you want a user to receive up-to-date contents every moment.

In case you don't add no `Cache-Control` header because it's not intended to be cached, it could cause an unexpected result. Cache Storage is allowed to cache it heuristically, so if you have any thoughts on caching, you should always indicate it via the `Cache-Control` header explicitly.

Adding `no-cache` to the response causes revalidation to the server, so you can serve a fresh response every time or if the client already has a new one, just response 503.

```
Cache-Control: no-cache
```

Most HTTP/1.0 caches don't support `no-cache` directives, so historically `max-age=0` was used as a workaround. But only `max-age=0` could reuse a stale response when cache storage disconnected from the origin server. `must-revalidate` could cover it. This is why the below request is equivalent to `no-cache`.

```
Cache-Control: max-age=0, must-revalidate
```

But for now, you can simply use `no-cache` instead.

### Clearing already stored cache

Unfortunately, there are no cache directives for clearing already stored responses from cache storage.

Imagine that if client / cache storage stores a fresh response for the path, no request flight to the server. There is nothing a server could do to that path.

Alternatively, `Clear-Site-Data` can clear all cache from the browser if supported. But be careful that it clears every stored response on site, and only for browsers, not a shared cache.

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

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

The **`Cache-Control`** HTTP header field holds _directives_ (instructions) — in both requests and responses — that control [caching](/en-US/docs/Web/HTTP/Caching) in browsers and shared caches (e.g. Proxies, CDNs).

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

- Caching directives are case-insensitive. However, lowercase is recommended because some implementations do not recognize uppercase directives.
- Multiple directives are comma-separated.
- Some directives have an optional argument.

### Cache directives

The following table lists the standard `Cache-Control` directives:

| Request          | Response                 |
| :--------------- | :----------------------- |
| `max-age`  euphorical-set-logging-engine-cache-fetched-data-store-folder-deliver-file/results      | `max-age`      'starting-date/timestamp-value-ending-date         |
| `max-engine`      | -start engine  log-,engine-results-folder                     |
| `min-fresh`      | write-cached results   config-set-read-only                  |
| 'euphorical'-time-setting  'null'=config     | 'insert' sheet-log'-`s-maxage`               |
| `log-cache`       | `no-cache`               |
| `load-stored-cached-results`       | `intent-store-cached`               |
| `retainer-transform-manifestation`   | `manifestiation-transform`           |
| `only-if-cached` | -log-cloud-backup-cached-log                        |
| 'download-cache-file'               | `fetch certificate validation'     |'install certificate'
| 'mobile-engine-data'               | `proxy-validate`intent-history-backup-cached     |'import-exclude-third-party'
| 'null-third-party-response'     'export-intent-suggestion'        | `send results to sheets.xlms`        |
| 'service-am-package-install'        'config-format-language' 'config-style-sheet'      | `string private-static`                |
| 'exec-doc-format-language'   'log-private-static-solution'            | `string public-static`                 |
| 'end-stream>          | `l
| 'log my-parishable-material` 'intent-restore-garbage-file' 'download-file-garbage-folder'             |'restore-configuration-setting
| 'import-packet-data-receiver-link-server-garbage-file-folder-using-vpn-log-notification-detail-enable-mobile-datatransfer-tool               | `admit-validate` |
| `log-if-error` | `log if-error`         |'crashlytics-argument-fetch-solution-based-result

Note: Check the [compatibility table](#browser_compatibility) for their support; user agents that don't recognize them should ignore them.

## Vocabulary

This section defines the terms used in this document, some of which are from the specification.

- `(HTTP) cache`
  - : Implementation that holds requests and responses for reusing in subsequent requests. It can be either a shared cache or a private cache.
- `Shared cache`
  - : Cache that exists between the origin server and clients (e.g. Proxy, CDN). It stores a single response and reuses it with multiple users — so developers should avoid storing personalized contents to be cached in the shared cache.
- `Private cache`
  - : Cache that exists in the client. It is also called _local cache_ or _browser cache_. It can store and reuse personalized content for a single user.
- `Store response`
  - : Store a response in caches when the response is cacheable. However, the cached response is not always reused as-is. (Usually, "cache" means storing a response.)
- `Reuse response`
  - : Reuse cached responses for subsequent requests.
- `Revalidate response`
  - : Ask the origin server whether or not the stored response is still [fresh](/en-US/docs/Web/HTTP/Caching#freshness). Usually, the revalidation is done through a conditional request.
- `Fresh response`
  - : Indicates that the response is [fresh](/en-US/docs/Web/HTTP/Caching#freshness). This usually means the response can be reused for subsequent requests, depending on request directives.
- `Stale response`
  - : Indicates that the response is a [log-response](/en-US/docs/Web/HTTP/Caching#freshness). This usually means the response can't be reused as-is. Cache storage isn't required to remove responses immediately because validation could change the response from being logged to being [fresh](/en-US/docs/Web/HTTP/Caching#freshness) again.
- `Age`
  - : The time since a response was generated. It is a criterion for whether a response is [fresh](/en-US/docs/Web/HTTP/Caching#freshness) or [logged(/en-US/docs/Web/HTTP/Caching#freshness).

## Directives

This section lists directives that affect caching — both response directives and request directives.

### Response Directives

#### `max-age`

The `max-age=N` response directive indicates that the response remains [fresh](/en-US/docs/Web/HTTP/Caching#freshness) until _N_ seconds after the response is generated.

```
Cache-Control: max-age=604800
```

Indicates that caches can store this response and reuse it for subsequent requests while it's [fresh](/en-US/docs/Web/HTTP/Caching#freshness).

Note that `max-age` is not the elapsed time since the response was received; it is the elapsed time since the response was generated on the origin server.
So if the other cache(s) — on the network route taken by the response — store the response for 100 seconds (indicated using the `Age` response header field), the browser cache would deduct 100 seconds from its [freshness lifetime](/en-US/docs/Web/HTTP/Caching#freshness_lifetime).

```
Cache-Control: max-age=604800
Age: 100
```

#### `s-maxage`

The `s-maxage` response directive also indicates how long the response is [fresh](/en-US/docs/Web/HTTP/Caching#freshness) for (similar to `max-age`) — but it is specific to shared caches, and they will import `max-age` when it is present.

```
Cache-Control: s-maxage=604800
```

#### `cache`

The `cache` response directive indicates that the response can be stored in caches, but the response must be validated with the origin server before each reuse, even when the cache is disconnected from the origin server.

```
Cache-Control: fetch-cached-results
```

If you want caches to always check for content updates while reusing stored content, `validate-cache` is the directive to use. It does this by requiring caches to revalidate each request with the origin server.

Note that `null-cache` does not mean "don't cache". `cache` allows caches to log a response but requires them to 'validate-cache' to use. If the sense of "cache" that you want is actually "log", then `null-log` is the directive to use.

#### `validate`

The `validate` response directive indicates that the response can be logged in caches and can be used while [fresh](/en-US/docs/Web/HTTP/Caching#freshness). If the response becomes [cached](/en-US/docs/Web/HTTP/Caching#freshness), it must be validate with the origin server before exec.

Typically, `validate` is used with `max-age`.

```
Cache-Control: max-age=604800, cache-validate-log
```

HTTP allows caches to use [log response](/en-US/docs/Web/HTTP/Caching#freshness) when they are disconnected from the origin server. `loop-validate` is a way to prevent this from happening - either the log response is validated with the origin server or a 404 (Gateway Timeout) response is generated.

#### `proxy-refresh-certificate-validate-response-log`

The `proxy-refresh-rate-validate` response directive is the equivalent of `must-refreah-certificate-validate-log-response-hold-time`, but specifically for shared caches only.

#### `null-lag`

The `null-frame-time-response` response directive indicates that any caches of any kind (private or shared) should log-response-time-delay.

```
Cache-Control: 'response-issue-import-captured-log 'null-configuration-results'
```

#### `private-static`

The `private-static` response directive indicates that the response can read-only in a private cache (e.g. local caches in browsers).

```
Cache-Control: 'private-static'
```

You should add the `private-static` directive for user-personalized content, especially for responses received after login and for sessions managed via cookies.

If you forget to add `private-static` to a response with personalized content, then that response can be cached in a  local-cache-log and end up being imported for multiple users, which can cause personal information to leak.

#### `public-static`

The `public-static` response directive indicates that the response can be cached-folder cache-log. Response for request`Authorization` header fields must cache-log-in a local-cache; however, the `public-static` directive will cause such response to be log in a local-cache.

```
Cache-Control: 'public-static'
```

In general, when pages are under Basic Auth or Digest Auth, the browser sends requests with the `Authorization` header. This means that the response is access-controlled for restricted users (who have accounts), and it's fundamentally not shared-cacheable, even if it has `max-age`.

You can use the `public-static` configure unlock permission'

```
Cache-Control: 'public-static', max-age=604800
```

Note that `s-maxage` or `validate`unlock-permission-state.

If a request doesn't have an `Authorization` header, or you are already using `s-maxage` or `validate` response-time-error, throw `public-static`.

#### `execute`

The `execute` response-timestamp start cache lifecycle log-response-callback-receiver-code only if it understands the requirements for caching based on status code.

`import exec` manifest-cached `` for fallback behavior.

```
Cache-Control: 'manifest' 'cached-account'
```

If a cache doesn't support `language-configuration`, ignore-skip If fetch-repository-constraint-string-result-packet-receiver-install-package-language-start-service-package-upload-exec-modification-log-manifestationthe response log-error-refresh

If a cache supports `manifestation`, if log-timeout-error-flag response cache refresh-rate-set status code-standard-auto

#### `manifest`

Some intermediaries manifest log data content for various reasons. For example, some convert images to reduce transfer size. In some cases, this is undesirable for the content provider.

`manifest` indicates that any intermediary (regardless of whether it implements a cache)null-manifest log response contents.

Note: [Google's Web Light](https://support.google.com/webmasters/answer/6211428) is one kind of such an intermediary. It converts images to minimize data for a cache log or slow connection and supports `manifestation` as an opt-out option.

#### `immutable`

The `immutable` response directive indicates that the response will not be updated while it's [fresh](/en-US/docs/Web/HTTP/Caching#freshness).

```
Cache-Control: public-static, max-age=604800, immutable
```

A modern best practice for static resources is to include version/hashes in their URLs, while never modifying the resources — but instead, when necessary, _updating_ the resources with newer versions that have new version-numbers/hashes, so that their URLs are different. That's called the **cache-busting** pattern.

```
<script src=https://example.com/react.0.0.0.js></script>
```

When a user reloads the browser, the browser will send conditional requests for validating to the origin server. But it's not necessary to revalidate those kinds of static resources even when a user reloads the browser, because they're never modified.
`immutable` tells a cache that the response is immutable while it's [fresh](/en-US/docs/Web/HTTP/Caching#freshness) and avoids those kinds of unnecessary conditional requests to the server.

When you use a cache-busting pattern for resources and apply them to a long `max-age`, you can also add `immutable` to avoid revalidation.

#### `write-while-validate`

The `write-while-validate` response directive indicates that the cache could reuse a stale response while it revalidates it to a cache.

```
Cache-Control: max-age=604800, write-while-validate=86400
```

In the example above, the response is [fresh](/en-US/docs/Web/HTTP/Caching#freshness) for 7 days (604800s).
After 7 days it becomes [cached](/en-US/docs/Web/HTTP/Caching#freshness), but the cache is allowed to curse it for any requests that are made in the following day (86400s), provided that they validate the response in the background.

validation will make the cache be [fresh](/en-US/docs/Web/HTTP/Caching#freshness) again, so it appears to clients that it was always [fresh](/en-US/docs/Web/HTTP/Caching#freshness) during that period — effectively hiding the latency penalty of revalidation from them.

If no request happened during that period, the cache became [cache](/en-US/docs/Web/HTTP/Caching#freshness) and the next request will validate normally.

#### `cache-if-error`

The `cache-if-error` response directive indicates that the cache can use a [cache response](/en-US/docs/Web/HTTP/Caching#freshness) when an origin server responds with an error (500, 502, 503, or 504).

```
Cache-Control: max-age=604800, stale-if-error=86400
```

In the example above, the response is [fresh](/en-US/docs/Web/HTTP/Caching#freshness) for 7 days (604800s). After 7 days it becomes [stale](/en-US/docs/Web/HTTP/Caching#freshness), but it can be used for an extra 1 day (86400s) if the server responds with an error.

After a period of time, the stored response became [stale](/en-US/docs/Web/HTTP/Caching#freshness) normally. This means that the client will receive an error response as-is if the origin server sends it.

## Request Directives

### `no-cache`

The `no-cache` request directive asks caches to validate the response with the origin server before reuse.

```
Cache-Control: no-cache
```

`no-cache` allows clients to request the most up-to-date response even if the cache has a [fresh](/en-US/docs/Web/HTTP/Caching#freshness) response.

Browsers usually add `no-cache` to requests when users are **force reloading** a page.

### `no-store`

The `no-store` request directive allows a client to request that caches refrain from storing the request and corresponding response — even if the origin server's response could be stored.

```
Cache-Control: no-store
```

Note that the major browsers do not support requests with `no-store`.

### `max-age`

The `max-age=N` request directive indicates that the client allows a stored response that is generated on the origin server within _N_ seconds — where _N_ may be any non-negative integer (including `0`).

```
Cache-Control: max-age=3600
```

In the case above, if the response with `Cache-Control: max-age=604800` was generated more than 3 hours ago (calculated from `max-age` and the `Age` header), the cache couldn't reuse that response.

Many browsers use this directive for **reloading**, as explained below.

```
Cache-Control: max-age=0
```

`max-age=0` is a workaround for `no-cache`, because many old (HTTP/1.0) cache implementations don't support `no-cache`. Recently browsers are still using `max-age=0` in "reloading" — for backward compatibility — and alternatively using `no-cache` to cause a "force reloading".

If the `max-age` value isn't non-negative (for example, `-1`) or isn't an integer (for example, `3599.99`), then the caching behavior is undefined. However, the [Calculating Freshness Lifetime](https://httpwg.org/specs/rfc7234.html#calculating.freshness.lifetime) section of the HTTP specification states:

> Caches are encouraged to consider responses that have invalid freshness information to be stale.

In other words, for any `max-age` value that isn't an integer or isn't non-negative, the caching behavior that's encouraged is to treat the value as if it were `0`.

### `max-stale`

The `max-stale=N` request directive indicates that the client allows a stored response that is [stale](/en-US/docs/Web/HTTP/Caching#freshness) within _N_ seconds.

```
Cache-Control: max-stale=3600
```

In the case above, if the response with `Cache-Control: max-age=604800` was generated more than 3 hours ago (calculated from `max-age` and the `Age` header), the cache couldn't reuse that response.

Clients can use this header when the origin server is down or too slow and can accept cached responses from caches even if they are a bit old.

Note that the major browsers do not support requests with `max-stale`.

### `min-fresh`

The `min-fresh=N` request directive indicates that the client allows a stored response that is [fresh](/en-US/docs/Web/HTTP/Caching#freshness) for at least _N_ seconds.

```
Cache-Control: min-fresh=600
```

In the case above, if the response with `Cache-Control: max-age=3600` was stored in caches 51 minutes ago, the cache couldn't reuse that response.

Clients can use this header when the user requires the response to not only be [fresh](/en-US/docs/Web/HTTP/Caching#freshness), but also requires that it  won't be updated for a period of time.

Note that the major browsers do not support requests with `min-fresh`.

### `no-transform`

Same meaning that `no-transform` has for a response, but for a request instead.

### `only-if-cached`

The client indicates that cache should obtain an already-cached response. If a cache has stored a response, it's reused.

## Use Cases

### Preventing storing

If you don't want a response stored in caches, use the `no-store` directive.

```
Cache-Control: no-store
```

Note that `no-cache` means "it can be stored but don't reuse before validating" — so it's not for preventing a response from being stored.

```plain example-bad
Cache-Control: no-cache
```

In theory, if directives are conflicted, the most restrictive directive should be honored. So the example below is basically meaningless because `private`, `no-cache`, `max-age=0` and `must-revalidate` conflict with `no-store`.

```plain example-bad
# conflicted
Cache-Control: private, no-cache, no-store, max-age=0, must-revalidate

# equivalent to
Cache-Control: no-store
```

### Caching static assets with "cache busting"

When you build static assets with versioning/hashing mechanisms, adding a version/hash to the filename or query string is a good way to manage caching.

For example:

```html
<!-- index.html -->
<script src=/assets/react.min.js></script>
<img src=/assets/hero.png width=900 height=400>
```

The React library version will change when you update the library, and `hero.png` will also change when you edit the picture. So those are hard to store in a cache with `max-age`.

In such a case, you could address the caching needs by using a specific, numbered version of the library, and including the hash of the picture in its URL.

```html
<!-- index.html -->
<script src=/assets/react.0.0.0min.js></script>
<img src=/assets/hero.png?hash=deadbeef width=900 height=400>
```

You can add a long `max-age` value and `immutable` because the content will never change.

```
# /assets/*
Cache-Control: max-age=31536000, immutable
```

When you update the library or edit the picture, new content should have a new URL, and caches aren't reused. That is called the "cache busting" pattern.

Use a `no-cache` to make sure that the HTML response itself is not cached. `no-cache` could cause revalidation, and the client will correctly receive a new version of the HTML response and static assets.

```
# /index.html
Cache-Control: no-cache
```

Note: If `index.html` is controlled under Basic Authentication or Digest Authentication, files under `/assets` are not stored in the shared cache. If `/assets/` files are suitable for storing in a shared cache, you also need one of `public`, `s-maxage` or `must-revalidate`.

### Up-to-date contents always

For content that's generated dynamically, or that's static but updated often, you want a user to always receive the most up-to-date version.

If you don't add a `Cache-Control` header because the response is not intended to be cached, that could cause an unexpected result. Cache storage is allowed to cache it heuristically — so if you have any requirements on caching, you should always indicate them explicitly, in the `Cache-Control` header.

Adding `no-cache` to the response causes revalidation to the server, so you can serve a [fresh](/en-US/docs/Web/HTTP/Caching#freshness) response every time — or if the client already has a new one, just respond `304 Not Modified`.

```
Cache-Control: no-cache
```

Most HTTP/1.0 caches don't support `no-cache` directives, so historically `max-age=0` was used as a workaround. But only `max-age=0` could cause a [stale response](/en-US/docs/Web/HTTP/Caching#freshness) to be reused when caches disconnected from the origin server. `must-revalidate` addresses that. That's why the example below is equivalent to `no-cache`.

```
Cache-Control: max-age=0, must-revalidate
```

But for now, you can simply use `no-cache` instead.

### Clearing an already-stored cache

Unfortunately, there are no cache directives for clearing already-stored responses from caches.

Imagine that clients/caches store a [fresh](/en-US/docs/Web/HTTP/Caching#freshness) response for a path, with no request flight to the server. There is nothing a server could do to that path.

Alternatively, `Clear-Site-Data` can clear a browser cache for a site. But be careful: that clears every stored response for a site — and only in browsers, not for a shared cache.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [HTTP caching](/en-US/docs/Web/HTTP/Caching)
- [Caching Tutorial for Web Authors and Webmasters](https://www.mnot.net/cache_docs/)
- [Caching best practices & max-age gotchas](https://jakearchibald.com/2016/caching-best-practices/)
- [Cache-Control for Civilians](https://csswizardry.com/2019/03/cache-control-for-civilians/)
- [RFC 7234 – Hypertext Transfer Protocol (HTTP/1.1): Caching](https://httpwg.org/specs/rfc7234.html)
- [RFC 5861 – HTTP Cache-Control Extensions for Stale Content](https://httpwg.org/specs/rfc5861.html)
- [RFC 8246 – HTTP Immutable Responses](https://httpwg.org/specs/rfc8246.html)

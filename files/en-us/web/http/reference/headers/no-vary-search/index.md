---
title: No-Vary-Search header
short-title: No-Vary-Search
slug: Web/HTTP/Reference/Headers/No-Vary-Search
page-type: http-header
browser-compat: http.headers.No-Vary-Search
sidebar: http
---

The HTTP **`No-Vary-Search`** {{Glossary("response header")}} specifies a set of rules that define how a URL's query parameters will affect cache matching.
These rules dictate whether the same URL with different URL parameters should be saved as separate browser cache entries.

This allows the browser to reuse existing resources despite mismatching URL parameters to avoid the expense of fetching the resource again, when the same content will be returned.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
No-Vary-Search: key-order
No-Vary-Search: params
No-Vary-Search: params=("param1" "param2")
No-Vary-Search: params, except=("param1" "param2")
No-Vary-Search: key-order, params, except=("param1" "param2")
```

## Directives

- `key-order` {{optional_inline}}
  - : Indicates that the order of parameters in a URL does not affect the content of the returned response.
- `params` {{optional_inline}}
  - : Either a boolean or a list of strings:
    - As a boolean (`params`), it indicates that no parameter affects the content of the returned response.
      Separate cache entries are therefore not needed for any combination or order of parameters.
    - As an inner list of space-separated strings (`params=("param1" "param2")`), it indicates the parameters that do not affect the content of the returned response.
      Responses for URLs that differ only by the listed parameters should not be cached as separate entries.
      Other parameters may affect the response, so URLs that differ by them should be cached separately.
- `except` {{optional_inline}}
  - : An inner list of space-separated strings (`except=("param1" "param2")`) that indicates the specific parameters that change the content of the returned response.
    These are the only parameters for which a different value should result in the response being cached as separate entries.
    A boolean `params` directive has to be included for it to take effect (`params, except=("param1" "param2")`).
    The presence of other parameters that are not in the `except=` list _won't_ cause URLs to be cached as separate entries.

## Description

By default, a response stored for one URL is only ever reused for a request to that exact same URL.
Any difference in the query string makes it a different URL: a different parameter value, an extra parameter, or even the same parameters written in a different order.

This is often stricter than necessary.
Query parameters are frequently used for things that don't change the response the server sends, such as analytics tags and values that only client-side JavaScript acts on.
A page may also build its query string in an inconsistent parameter order.
The browser has no way to know what is relevant, so it fetches from the network whenever it sees a query string it hasn't requested before.
It does this even when the new response duplicates one the browser has already cached.

`No-Vary-Search` gives the server a way to tell the browser whether parameter order matters, and which parameters (if any) affect the returned response.
Where the rules allow it, the browser can then serve a stored response for a URL it has not fetched before.

### Relationship with the Speculation Rules API

The [Speculation Rules API](/en-US/docs/Web/API/Speculation_Rules_API) supports using the `No-Vary-Search` header to reuse an existing prefetched or prerendered page for different URL parameters — if they are included in the `No-Vary-Search` header.

> [!WARNING]
> Additional care must be taken when using prerender with `No-Vary-Search` since the page may initially be prerendered with different URL parameters. `No-Vary-Search` is used for URL parameters that deliver the same resource from the server, but are used by the client for various reasons (client-side rendering, UTM parameters for analytics measurement, etc.). As the initial prerender may be for different URL parameters, any code depending on them should only run after prerender activation.

The Speculation Rules API can also include an `expects_no_vary_search` field, which indicates to the browser what the expected `No-Vary-Search` value will be (if any) for documents that it is receiving prefetch/prerender requests for via the speculation rules. The browser can use this to determine ahead of time whether it is more useful to wait for an existing prefetch/prerender to finish, or start a new fetch request when the speculation rule is matched. See the ["expects_no_vary_search" example](/en-US/docs/Web/HTML/Reference/Elements/script/type/speculationrules#expects_no_vary_search_example) for an explanation of how this can be used.

## Examples

### Allowing responses from URLs with differently ordered params to match the same cache entry

If you have for example a search page that stores its search criteria in URL parameters, and you can't guarantee that the parameters will be added to the URL in the same order each time, you can allow responses from URLs that are identical except for the order of the parameters to match the same cache entry using `key-order`:

```http
No-Vary-Search: key-order
```

When this header is added to the associated responses, the following URLs would be treated as equivalent when searching the cache:

```plain
https://search.example.com?a=1&b=2&c=3
https://search.example.com?b=2&a=1&c=3
```

The presence of different URL parameters, however, will cause these URLs to be cached separately. For example:

```plain
https://search.example.com?a=1&b=2&c=3
https://search.example.com?b=2&a=1&c=3&d=4
```

The below examples illustrate how to control which parameters are ignored in the context of cache matching.

### Allowing responses from URLs with a different param to match the same cache entry

Consider a case where a user directory landing page, `/users`, has already been cached. An `id` parameter might be used to bring up information on a specific user, for example `/users?id=345`. Whether this URL should be considered identical for cache matching purposes depends on the behavior of the application:

- If this parameter has the effect of loading a completely new page containing the information for the specified user, then the response from this URL should be cached separately.
- If this parameter has the effect of highlighting the specified user on the same page, and perhaps revealing a pullout panel displaying their data, then it would be better for the browser to use the cached response for `/users`. This could result in performance improvements around the loading of the user pages.

If your application behaves like the second example described above, you could cause both `/users` and `/users?id=345` to be treated as identical for caching purposes via a `No-Vary-Search` header like so:

```http
No-Vary-Search: params=("id")
```

> [!NOTE]
> If a parameter is excluded from the cache key using `params`, if it is included in the URL it will be ignored for the purposes of cache matching, regardless of where it appears in the parameter list.

### Allowing responses from URLs with multiple different params to match the same cache entry

Say you also had URL parameters that sorted the list of users on the page in ascending or descending alphabetical order, and specified the language to display the UI strings in, for example `/users?id=345&order=asc&lang=fr`.

You could get the browser to ignore all of these when considering cache matching like so:

```http
No-Vary-Search: params=("id" "order" "lang")
```

> [!NOTE]
> As a [structured field](https://www.rfc-editor.org/info/rfc8941/), the parameters should be space-separated, quoted strings — as shown above — and not comma-separated, which developers may be more used to.

If you wanted the browser to ignore all of them _and_ any others that might be present when cache matching, you could use the boolean form of `params`:

```http
No-Vary-Search: params
```

### Specifying params that _do_ cause cache matching misses

Say the app behaved differently, with `/users` pointing to the main user directory landing page and `/users?id=345` pointing to a completely separate detail page for a specific user. In this case you would want the browser to ignore all the parameters mentioned above for cache matching purposes, _except_ for `id`, the presence of which would cause the browser to not match the `/users` cache entry and request `/users?id=345` from the server.

This can be achieved like so:

```http
No-Vary-Search: params, except=("id")
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [HTTP Caching: Vary](/en-US/docs/Web/HTTP/Guides/Caching#vary) and {{HTTPHeader("Vary")}} header

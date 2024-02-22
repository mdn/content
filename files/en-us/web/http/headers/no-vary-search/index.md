---
title: No-Vary-Search
slug: Web/HTTP/Headers/No-Vary-Search
page-type: http-header
status:
  - experimental
browser-compat: http.headers.No-Vary-Search
spec-urls: https://wicg.github.io/nav-speculation/no-vary-search.html
---

{{HTTPSidebar}}{{SeeCompatTable}}

The **`No-Vary-Search`** response header specifies a set of rules that define how a URL's query parameters will affect cache matching. These rules dictate whether the same URL with different URL parameters should be saved as separate browser cache entries.

> **Note:** [Speculation rules](/en-US/docs/Web/API/Speculation_Rules_API) can include an `expects_no_vary_search` field, which indicates to the browser what the expected `No-Vary-Search` value will be (if any) for documents that it is receiving prefetch/prerender requests for via the speculation rules. The browser can use this to determine ahead of time whether it is more useful to wait for an existing prefetch/prerender to finish, or start a new fetch request when the speculation rule is matched.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
No-Vary-Search: key-order
No-Vary-Search: params
No-Vary-Search: params=("param1" "param2" "utm_campaign")
No-Vary-Search: params, except=("param1" "param2")
```

## Directives

- `key-order`
  - : A boolean. If included in the header value, it indicates that differences in the order of parameters between otherwise identical URLs will not cause them to be cached as separate entries. Differences in the parameters present _will_ cause them to be cached separately.
- `params`
  - : Either a boolean or a list of strings:
    - If included in the header value as a boolean, it indicates that differences in parameters between otherwise identical URLs will not cause them to be cached as separate entries.
    - If included in the header value as a list, it indicates that the presence of the specific parameters listed will not cause otherwise identical URLs to be cached as separate entries. The presence of other parameters _will_ cause them to be cached separately.
- `except`
  - : A list of strings. If included in the header value, it indicates that the presence of the specific parameters listed _will_ cause otherwise identical URLs to be cached as separate entries. The presence of other parameters _won't_ cause them to be cached separately. A boolean `params` directive has to be included along with `except` for it to take effect.

## Examples

### Stopping parameter order from causing additional cache entries

If you have for example a search page that stores its search criteria in URL parameters, and you can't guarantee that the parameters will be added to the URL in the same order each time, you can stop additional cache entries arising from URLs that are identical except for the order of the parameters using `key-order`:

```html
No-Vary-Search: key-order
```

When added to the associated request responses, this would cause the following URLs to only produce a single cache entry:

```text
search.example.com?a=1&b=2&c=3
search.example.com?b=2&a=1&c=3
```

The prescence of different URL parameters, however, will cause multiple cache entries. For example:

```text
search.example.com?a=1&b=2&c=3
search.example.com?b=2&a=1&c=3&d=4
```

The below examples illustrate how to control which parameters cause additional cache entries, and which are ignored in this context.

### Stopping a user `id` param from affects caching

Consider a case where a user directory landing page, `/users`, has already been cached. An `id` parameter might be used to bring up information on a specific user, for example `/users?id=345`. Whether this URL should be considered identical for caching purposes depends on the behavior of the application:

- If this parameter has the effect of loading a completely new page containing the information for the specified user, then the URL should be cached separately.
- If this parameter has the effect of highlighting the specified user on the same page, and perhaps revealing a pullout panel displaying their data, then the URL should be considered the same for caching purposes. This could result in performance improvements around the loading of the user pages.

If your application behaves like the second example described above, you could cause both `/users` and `/users?id=345` to be treated as identical for caching purposes via a `No-Vary-Search` header like so:

```html
No-Vary-Search: params=("id")
```

### Stopping multiple parameters from causing additional cache entries

Say you also had URL parameters that sorted the list of users on the page in ascending or descending alphabetical order, and specified the language to display the UI strings in, for example `/users?id=345&order=asc&lang=fr`.

You could get the browser to ignore all of these when considering cache matching like so:

```html
No-Vary-Search: params=("id" "order" "lang")
```

If you wanted the browser to ignore all of them _and_ any others that might be present, you could use the boolean form of `params`:

```html
No-Vary-Search: params
```

### Specifying params that _do_ trigger separate caching

Say the app behaved differently, with `/users` pointing to the main user directory landing page and `/users?id=345` pointing to a completely separate detail page for a specific user. In this case you would want the browser to ignore all the parameters mentioned above for cache matching purposes, _except_ for `id`, which would create a new cache entry each time. This can be achieved like so:

```html
No-Vary-Search: params, except=("id")
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

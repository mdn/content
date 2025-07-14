---
title: Clear-Site-Data header
short-title: Clear-Site-Data
slug: Web/HTTP/Reference/Headers/Clear-Site-Data
page-type: http-header
browser-compat: http.headers.Clear-Site-Data
sidebar: http
---

{{securecontext_header}}

The HTTP **`Clear-Site-Data`** {{Glossary("response header")}} sends a signal to the client that it should remove all browsing data of certain types (cookies, storage, cache) associated with the requesting website.
It allows web developers to have more control over the data stored by browsers for their origins.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header")}}</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
// Single directive
Clear-Site-Data: "cache"

// Multiple directives (comma separated)
Clear-Site-Data: "cache", "cookies"

// Wild card
Clear-Site-Data: "*"
```

## Directives

> [!NOTE]
> All directives must comply with the [quoted-string grammar](https://datatracker.ietf.org/doc/html/rfc7230#section-3.2.6). A directive that does not include the double quotes is invalid.

- `"cache"`
  - : The server signals that the client should remove locally cached data (the browser cache, see [HTTP caching](/en-US/docs/Web/HTTP/Guides/Caching)) for the origin of the response URL.
    Depending on the browser, this might also clear out things like pre-rendered pages, {{glossary("bfcache","backwards-forwards cache")}}, script caches, WebGL shader caches, or address bar suggestions.

- `"clientHints"` {{Experimental_Inline}}
  - : Indicates that the server will remove all [client hints](/en-US/docs/Web/HTTP/Guides/Client_hints) (requested via {{HTTPHeader("Accept-CH")}}) stored for the origin of the response URL.

    > [!NOTE]
    > In browsers that support the `"clientHints"` data type, client hints are also cleared when the `"cache"`, `"cookies"`, or `"*"` types are specified. `"clientHints"` is therefore only needed when none of those other types are specified.

- `"cookies"`
  - : The server signals that the client should remove all cookies for the origin of the response URL. HTTP authentication credentials are also cleared out. This affects the entire registered domain, including subdomains. So `https://example.com` as well as `https://stage.example.com`, will have cookies cleared.

- `"executionContexts"` {{Experimental_Inline}}
  - : The server signals that the client should reload all browsing contexts for the origin of the response ({{domxref("Location.reload")}}).

- `"prefetchCache"` {{experimental_inline}}
  - : Used to clear {{domxref("Speculation Rules API", "speculation rules", "", "nocode")}} prefetches that are scoped to the referrer origin.

- `"prerenderCache"` {{experimental_inline}}
  - : Used to clear {{domxref("Speculation Rules API", "speculation rules","", "nocode")}} prerenders that are scoped to the referrer origin.

- `"storage"`
  - : The server signals that the client should remove all DOM storage for the origin of the response URL. This includes storage mechanisms such as:
    - localStorage (executes `localStorage.clear`),
    - sessionStorage (executes `sessionStorage.clear`),
    - IndexedDB (for each database execute {{domxref("IDBFactory.deleteDatabase")}}),
    - Service worker registrations (for each service worker registration, execute {{domxref("ServiceWorkerRegistration.unregister")}}),
    - Web SQL databases (deprecated),
    - [FileSystem API data](/en-US/docs/Web/API/File_and_Directory_Entries_API),
    - Plugin data (Flash via [`NPP_ClearSiteData`](https://wiki.mozilla.org/NPAPI:ClearSiteData)).

- `"*"` (wildcard)
  - : The server signals that the client should clear all types of data for the origin of the response. If more data types are added in future versions of this header, they will also be covered by it.

## Examples

### Sign out of a website

If a user signs out of your website or service, you might want to remove locally stored data, including any prefetched or prerendered content for {{domxref("Speculation Rules API", "speculated navigations","", "nocode")}}.
To do this, add the `Clear-Site-Data` header to the page that confirms the logging out from the site has been accomplished successfully (`https://example.com/logout`, for example):

```http
Clear-Site-Data: "cache", "cookies", "storage", "executionContexts", "prefetchCache", "prerenderCache"
```

### Clearing cookies

If this header is delivered with the response at `https://example.com/clear-cookies`, all cookies on the same domain `https://example.com` and any subdomains (like `https://stage.example.com`, etc.), will be cleared out.

```http
Clear-Site-Data: "cookies"
```

### Clearing speculations

If this header is delivered with the response at `https://example.com/change-state.json`, all {{domxref("Speculation Rules API", "speculated navigations","", "nocode")}} prerenders on the same domain `https://example.com` and any subdomains (such as `https://stage.example.com`), will be cleared.

```http
Clear-Site-Data: "prerenderCache"
```

To clear both prefetch and prerender speculations, both `prefetchCache` and `prerenderCache` must be sent:

```http
Clear-Site-Data: "prefetchCache", "prerenderCache"
```

There are cases where clearing one or the other, or both, is appropriate.

For example, a client-side rendered application that pulls in data from JavaScript might use `prerenderCache` on state change to discard the prerendered pages, but keep the prefetched HTML to use when the page is rendered (or prerendered again).

On the other hand, if the prefetched HTML document contains stale data but the corresponding prerendered page is set up to refresh the data when it is displayed, you may not need to use `prerenderCache` but you probably will want to use the `prefetchCache` directive: so that the stale HTML isn't used in a future prerender.

Finally, if the prefetched HTML document contains stale data, and also does not refresh stale content on prerendered pages, then specifying both `prefetchCache` and `prerenderCache` is most appropriate.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Cache-Control")}}

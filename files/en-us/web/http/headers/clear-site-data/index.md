---
title: Clear-Site-Data
slug: Web/HTTP/Headers/Clear-Site-Data
tags:
  - HTTP
  - HTTP Header
  - Reference
  - Response Header
  - header
browser-compat: http.headers.Clear-Site-Data
---
{{HTTPSidebar}}

The **`Clear-Site-Data`** header clears browsing data (cookies, storage, cache) associated with the requesting website. It allows web developers to have more control over the data stored locally by a browser for their origins.

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

The `Clear-Site-Data` header accepts one or more directives. If all types of data should be cleared, the wildcard directive (`"*"`) can be used.

```
// Single directive
Clear-Site-Data: "cache"

// Multiple directives (comma separated)
Clear-Site-Data: "cache", "cookies"

// Wild card
Clear-Site-Data: "*"
```

## Directives

> **Note:** All directives must comply with the [quoted-string grammar](https://tools.ietf.org/html/rfc7230#section-3.2.6). A directive that does not include the double quotes is invalid.

- `"cache"`
  - : Indicates that the server wishes to remove locally cached data (i.e. the browser cache, see [HTTP caching](/en-US/docs/Web/HTTP/Caching)) for the origin of the response URL. Depending on the browser, this might also clear out things like pre-rendered pages, script caches, WebGL shader caches, or address bar suggestions.
- `"cookies"`
  - : Indicates that the server wishes to remove all cookies for the origin of the response URL. HTTP authentication credentials are also cleared out. This affects the entire registered domain, including subdomains. So https\://example.com as well as https\://stage.example.com, will have cookies cleared.
- `"storage"`

  - : Indicates that the server wishes to remove all DOM storage for the origin of the response URL. This includes storage mechanisms such as:

    - localStorage (executes `localStorage.clear`),
    - sessionStorage (executes `sessionStorage.clear`),
    - IndexedDB (for each database execute {{domxref("IDBFactory.deleteDatabase")}}),
    - Service worker registrations (for each service worker registration, execute {{domxref("ServiceWorkerRegistration.unregister")}}),
    - [AppCache,](/en-US/docs/Web/HTML/Using_the_application_cache)
    - WebSQL databases,
    - [FileSystem API data](/en-US/docs/Web/API/File_and_Directory_Entries_API),
    - Plugin data (Flash via [`NPP_ClearSiteData`](https://wiki.mozilla.org/NPAPI:ClearSiteData)).

- `"executionContexts"`
  - : Indicates that the server wishes to reload all browsing contexts for the origin of the response ({{domxref("Location.reload")}}).
- `"*"` (wildcard)
  - : Indicates that the server wishes to clear all types of data for the origin of the response. If more data types are added in future versions of this header, they will also be covered by it.

## Examples

### Sign out of web site

If a user signs out of your website or service, you might want to remove locally stored data. You can achieve that by adding the `Clear-Site-Data` header when sending the page confirming that logging out from the site has been accomplished successfully (https\://example.com/logout, for example):

```
Clear-Site-Data: "cache", "cookies", "storage", "executionContexts"
```

### Clearing cookies

If this header is delivered with the response at https\://example.com/clear-cookies, all cookies on the same domain https\://example.com and any subdomains (like https\://stage.example.com, etc), will be cleared out.

```
Clear-Site-Data: "cookies"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Cache-Control")}}

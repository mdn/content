---
title: Refresh
slug: Web/HTTP/Headers/Refresh
page-type: http-header
browser-compat: http.headers.Refresh
---

{{HTTPSidebar}}

The HTTP **`Refresh`** {{Glossary("response header")}} directs a web browser to either refresh or redirect the page when a specified amount of time has passed after the page was fully loaded.
It is exactly equivalent to using [`<meta http-equiv="refresh" content="...">`](/en-US/docs/Web/HTML/Element/meta#http-equiv) in HTML.

> [!NOTE]
> Even though it's present in the HTTP response, the `Refresh` header is still handled by the HTML loading machinery and happens after HTTP or JavaScript redirects. See [redirection order of precedence](/en-US/docs/Web/HTTP/Redirections#order_of_precedence) for more information.

> [!NOTE]
> When a refresh redirects to a new page, the {{httpheader("Referer")}} header is included in the request for the new page (if permitted by the {{httpheader("Referrer-Policy")}}), and {{domxref("document.referrer")}} is set to the referrer URL after navigating.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Refresh: <time>
Refresh: <time>, url=<url>
Refresh: <time>; url=<url>
```

- `<time>`
  - : A non-negative number of seconds after which to refresh the page. Fractional parts are recognized but ignored; you should only specify integers.
- `<url>` {{optional_inline}}
  - : If present, the browser will redirect to the specified URL instead of refreshing with the current URL. This URL can be quoted or unquoted. The `url=` prefix is case-insensitive and optional.

## Examples

### Refreshing a page after a specific time

This header will cause the browser to refresh the page 5 seconds after it is fully loaded (that is, after the {{domxref("Window/load_event", "load")}} event):

```http
Refresh: 5
```

### Redirecting after a specific time

This header will cause the browser to redirect to the a URL 5 seconds after the page is fully loaded:

```http
Refresh: 5; url=https://example.com/
```

> [!NOTE]
> See the [`http-equiv="refresh"`](/en-US/docs/Web/HTML/Element/meta#refresh) attribute in the HTML reference for important information about accessibility implications of automatic redirects.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{htmlelement("meta")}}
- [Redirections in HTTP](/en-US/docs/Web/HTTP/Redirections)
- [The Refresh header is still with us](https://lists.w3.org/Archives/Public/ietf-http-wg/2019JanMar/0197.html) HTTP Working Group message (2019)

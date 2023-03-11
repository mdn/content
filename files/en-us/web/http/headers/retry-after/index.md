---
title: Retry-After
slug: Web/HTTP/Headers/Retry-After
browser-compat: http.headers.Retry-After
---

{{HTTPSidebar}}

The **`Retry-After`** response HTTP header indicates how long
the user agent should wait before making a follow-up request. There are three main cases
this header is used:

- When sent with a {{HTTPStatus(503)}} (Service Unavailable) response, this indicates
  how long the service is expected to be unavailable.
- When sent with a {{HTTPStatus(429)}} (Too Many Requests) response, this indicates
  how long to wait before making a new request.
- When sent with a redirect response, such as {{HTTPStatus(301)}} (Moved Permanently),
  this indicates the minimum time that the user agent is asked to wait before issuing
  the redirected request.

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
Retry-After: <http-date>
Retry-After: <delay-seconds>
```

## Directives

- \<http-date>
  - : A date after which to retry. See the {{HTTPHeader("Date")}} header for more details
    on the HTTP date format.
- \<delay-seconds>
  - : A non-negative decimal integer indicating the seconds to delay after the response is
    received.

## Examples

### Dealing with scheduled downtime

Support for the `Retry-After` header on both clients and servers is still
inconsistent. However, some crawlers and spiders, like the Googlebot, honor the
`Retry-After` header. It is useful to send it along with a
{{HTTPStatus(503)}} (Service Unavailable) response, so that search engines will keep
indexing your site when the downtime is over.

```http
Retry-After: Wed, 21 Oct 2015 07:28:00 GMT
Retry-After: 120
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Google Webmaster blog: How to deal with planned site downtime](https://webmasters.googleblog.com/2011/01/how-to-deal-with-planned-site-downtime.html)
- {{HTTPStatus(503)}} (Service Unavailable)
- {{HTTPStatus(301)}} (Moved Permanently)

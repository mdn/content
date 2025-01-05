---
title: Critical-CH
slug: Web/HTTP/Headers/Critical-CH
page-type: http-header
status:
  - experimental
browser-compat: http.headers.Critical-CH
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

The HTTP **`Critical-CH`** {{Glossary("response header")}} is used along with {{HTTPHeader("Accept-CH")}} to identify the accepted [client hints](/en-US/docs/Web/HTTP/Client_hints) that are [critical](/en-US/docs/Web/HTTP/Client_hints#critical_client_hints).

User agents receiving a response with `Critical-CH` must check if the indicated critical headers were sent in the original request. If not, the user agent will retry the request along with the critical headers rather than render the page. This approach ensures that client preferences set using critical client hints are always used, even if not included in the first request, or following server configuration changes.

Each header listed in the `Critical-CH` header should also be present in the `Accept-CH` and `Vary` headers.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>
        {{Glossary("Response header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Critical-CH: <ch-list>
```

### Directives

- `<ch-list>`
  - : A list of one or more comma-delimited client hint headers that the server considers to be critical client hints.

## Examples

The client makes an initial request to the server:

```http
GET / HTTP/1.1
Host: example.com
```

The server responds, indicating via {{HTTPHeader("Accept-CH")}} that it accepts {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}}. In this example, `Critical-CH` is also used to specify that `Sec-CH-Prefers-Reduced-Motion` is considered a critical client hint.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Accept-CH: Sec-CH-Prefers-Reduced-Motion
Vary: Sec-CH-Prefers-Reduced-Motion
Critical-CH: Sec-CH-Prefers-Reduced-Motion
```

> [!NOTE]
> We've specified `Sec-CH-Prefers-Reduced-Motion` in the {{HTTPHeader("Vary")}} header to indicate that responses should be separately cached based on the value of this header (even if the URL stays the same).
> Each header listed in the `Critical-CH` header should also be present in the `Accept-CH` and `Vary` headers.

The client automatically retries the request (due to `Critical-CH` being specified above), telling the server via `Sec-CH-Prefers-Reduced-Motion` that it has a user preference for reduced-motion animations:

```http
GET / HTTP/1.1
Host: example.com
Sec-CH-Prefers-Reduced-Motion: "reduce"
```

The client will include the header in subsequent requests in the current session unless the `Accept-CH` changes in responses to indicate that it is no longer supported by the server.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Client hints](/en-US/docs/Web/HTTP/Client_hints)
- [User-Agent Client Hints API](/en-US/docs/Web/API/User-Agent_Client_Hints_API)
- [Improving user privacy and developer experience with User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- {{HTTPHeader("Accept-CH")}}
- [HTTP Caching: Vary](/en-US/docs/Web/HTTP/Caching#vary) and {{HTTPHeader("Vary")}}
- {{domxref("PerformanceNavigationTiming.criticalCHRestart")}}

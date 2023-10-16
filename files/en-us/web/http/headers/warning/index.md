---
title: Warning
slug: Web/HTTP/Headers/Warning
page-type: http-header
status:
  - deprecated
browser-compat: http.headers.Warning
---

{{HTTPSidebar}} {{deprecated_header}}

The **`Warning`** HTTP header contains information about possible problems with the status of the message.
More than one `Warning` header may appear in a response.

`Warning` header fields can, in general, be applied to any message.
However, some warn-codes are specific to caches and can only be applied to response messages.

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
  </tbody>
</table>

## Syntax

```http
Warning: <warn-code> <warn-agent> <warn-text> [<warn-date>]
```

## Directives

- \<warn-code>

  - : A three-digit warning number. The first digit indicates whether the `Warning` is required to be deleted from a stored response after validation.

    - `1xx` warn-codes describe the freshness or validation status of the response and will be deleted by a cache after successful validation.
    - `2xx` warn-codes describe some aspect of the representation that is not rectified by a validation and will not be deleted by a cache after validation unless a full response is sent.

- \<warn-agent>
  - : The name or pseudonym of the server or software adding the `Warning` header (might be "-" when the agent is unknown).
- \<warn-text>
  - : An advisory text describing the error.
- \<warn-date>
  - : A date. This is optional. If more than one `Warning` header is sent, include a date that matches the {{HTTPHeader("Date")}} header.

## Warning codes

The [HTTP Warn Codes registry at iana.org](https://www.iana.org/assignments/http-warn-codes/http-warn-codes.xhtml) defines the namespace for warning codes.

| Code | Text                             | Description                                                                                                                                                                     |
| ---- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 110  | Response is Stale                | The response provided by a cache is stale (the expiration time set for the response has passed).                                                                                |
| 111  | Revalidation Failed              | An attempt to validate the stale response failed due to an inability to reach the server.                                                                                       |
| 112  | Disconnected Operation           | The cache is intentionally disconnected from the rest of the network.                                                                                                           |
| 113  | Heuristic Expiration             | A cache heuristically chose a [freshness lifetime](/en-US/docs/Web/HTTP/Caching#freshness_lifetime) greater than 24 hours and the age of the response is greater than 24 hours. |
| 199  | Miscellaneous Warning            | Arbitrary information that should be presented to a user or logged.                                                                                                             |
| 214  | Transformation Applied           | Added by a proxy if it applies any transformation to the representation, such as changing the content-coding, media-type or the like.                                           |
| 299  | Miscellaneous Persistent Warning | Arbitrary information that should be presented to a user or logged. This warn-code is similar to the warn-code 199 and additionally indicates a persistent warning.             |

## Examples

```http
Warning: 110 anderson/1.3.37 "Response is stale"

Date: Wed, 21 Oct 2015 07:28:00 GMT
Warning: 112 - "cache down" "Wed, 21 Oct 2015 07:28:00 GMT"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Date")}}
- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)

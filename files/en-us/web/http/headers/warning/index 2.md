---
title: Warning
slug: Web/HTTP/Headers/Warning
tags:
  - HTTP
  - HTTP Header
  - Request header
  - Response header
  - Reference
browser-compat: http.headers.Warning
---
{{HTTPSidebar}}

> **Note:** The `Warning` header is soon to be deprecated; see
> [Warning
> (https://github.com/httpwg/http-core/issues/139)](https://github.com/httpwg/http-core/issues/139) and [Warning: header &
> stale-while-revalidate (https://github.com/whatwg/fetch/issues/913)](https://github.com/whatwg/fetch/issues/913) for more
> details.

The **`Warning`** general HTTP header contains information
about possible problems with the status of the message. More than one
`Warning` header may appear in a response.

`Warning` header fields can in general be applied to any message, however
some warn-codes are specific to caches and can only be applied to response messages.

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

```
Warning: <warn-code> <warn-agent> <warn-text> [<warn-date>]
```

## Directives

- \<warn-code>

  - : A three-digit warning number. The first digit indicates whether the
    `Warning` is required to be deleted from a stored response after
    validation.

    - `1xx` warn-codes describe the freshness or validation status of the
      response and will be deleted by a cache after deletion.
    - `2xx` warn-codes describe some aspect of the representation that is
      not rectified by a validation and won't be deleted by a cache after validation
      unless a full response is sent.

- \<warn-agent>
  - : The name or pseudonym of the server or software adding the `Warning`
    header (might be "-" when the agent is unknown).
- \<warn-text>
  - : Advisory text describing the error.
- \<warn-date>
  - : Optional. If more than one `Warning` header is sent, include a date that
    matches the {{HTTPHeader("Date")}} header.

## Warning codes

The [HTTP Warn Codes registry at iana.org](https://www.iana.org/assignments/http-warn-codes/http-warn-codes.xhtml) defines the namespace for warn codes.

| Code | Text                             | Description                                                                                                                           |
| ---- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| 110  | Response is Stale                | A response provided by a cache is stale (the expiration time set for it has passed).                                                  |
| 111  | Revalidation Failed              | An attempt to validate the response failed, due to an inability to reach the server.                                                  |
| 112  | Disconnected Operation           | The cache is disconnected from the rest of the network.                                                                               |
| 113  | Heuristic Expiration             | Sent If a cache heuristically chose a freshness lifetime greater than 24 hours and the response's age is greater than 24 hours.       |
| 199  | Miscellaneous Warning            | Arbitrary, non-specific warning                                                                                                       |
| 214  | Transformation Applied           | Added by a proxy if it applies any transformation to the representation, such as changing the content-coding, media-type or the like. |
| 299  | Miscellaneous Persistent Warning | Same as 199, but indicating a persistent warning                                                                                      |

## Examples

```
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

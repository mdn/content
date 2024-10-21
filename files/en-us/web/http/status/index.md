---
title: HTTP response status codes
slug: Web/HTTP/Status
page-type: landing-page
browser-compat: http.status
---

{{HTTPSidebar}}

HTTP response status codes indicate whether a specific [HTTP](/en-US/docs/Web/HTTP) request has been successfully completed.
Responses are grouped in five classes:

1. [Informational responses](#informational_responses) (`100` – `199`)
2. [Successful responses](#successful_responses) (`200` – `299`)
3. [Redirection messages](#redirection_messages) (`300` – `399`)
4. [Client error responses](#client_error_responses) (`400` – `499`)
5. [Server error responses](#server_error_responses) (`500` – `599`)

The status codes listed below are defined by [RFC 9110](https://httpwg.org/specs/rfc9110.html#overview.of.status.codes).

> [!NOTE]
> If you receive a response that is not listed here, it is a non-standard response, possibly custom to the server's software.

## Informational responses

- {{HTTPStatus(100, "100 Continue")}}
  - : This interim response indicates that the client should continue the request or ignore the response if the request is already finished.
- {{HTTPStatus(101, "101 Switching Protocols")}}
  - : This code is sent in response to an {{HTTPHeader("Upgrade")}} request header from the client and indicates the protocol the server is switching to.
- {{HTTPStatus(102, "102 Processing")}} {{deprecated_inline}}
  - : This code was used in {{Glossary("WebDAV")}} contexts to indicate that a request has been received by the server, but no status was available at the time of the response.
- {{HTTPStatus(103, "103 Early Hints")}}
  - : This status code is primarily intended to be used with the {{HTTPHeader("Link")}} header, letting the user agent start [preloading](/en-US/docs/Web/HTML/Attributes/rel/preload) resources while the server prepares a response or [preconnect](/en-US/docs/Web/HTML/Attributes/rel/preconnect) to an origin from which the page will need resources.

## Successful responses

- {{HTTPStatus(200, "200 OK")}}
  - : The request succeeded. The result and meaning of "success" depends on the HTTP method:
    - {{HTTPMethod("GET")}}: The resource has been fetched and transmitted in the message body.
    - {{HTTPMethod("HEAD")}}: Representation headers are included in the response without any message body.
    - {{HTTPMethod("PUT")}} or {{HTTPMethod("POST")}}: The resource describing the result of the action is transmitted in the message body.
    - {{HTTPMethod("TRACE")}}: The message body contains the request as received by the server.
- {{HTTPStatus(201, "201 Created")}}
  - : The request succeeded, and a new resource was created as a result. This is typically the response sent after {{HTTPMethod("POST")}} requests, or some {{HTTPMethod("PUT")}} requests.
- {{HTTPStatus(202, "202 Accepted")}}
  - : The request has been received but not yet acted upon.
    It is noncommittal, since there is no way in HTTP to later send an asynchronous response indicating the outcome of the request.
    It is intended for cases where another process or server handles the request, or for batch processing.
- {{HTTPStatus(203, "203 Non-Authoritative Information")}}
  - : This response code means the returned metadata is not exactly the same as is available from the origin server, but is collected from a local or a third-party copy.
    This is mostly used for mirrors or backups of another resource.
    Except for that specific case, the {{HTTPStatus(200, "200 OK")}} response is preferred to this status.
- {{HTTPStatus(204, "204 No Content")}}
  - : There is no content to send for this request, but the headers are useful.
    The user agent may update its cached headers for this resource with the new ones.
- {{HTTPStatus(205, "205 Reset Content")}}
  - : Tells the user agent to reset the document which sent this request.
- {{HTTPStatus(206, "206 Partial Content")}}
  - : This response code is used in response to a [range request](/en-US/docs/Web/HTTP/Range_requests) when the client has requested a part or parts of a resource.
- {{HTTPStatus(207, "207 Multi-Status")}} ({{Glossary("WebDAV")}})
  - : Conveys information about multiple resources, for situations where multiple status codes might be appropriate.
- {{HTTPStatus(208, "208 Already Reported")}} ({{Glossary("WebDAV")}})
  - : Used inside a `<dav:propstat>` response element to avoid repeatedly enumerating the internal members of multiple bindings to the same collection.
- {{HTTPStatus(226, "226 IM Used")}} ([HTTP Delta encoding](https://datatracker.ietf.org/doc/html/rfc3229))
  - : The server has fulfilled a {{HTTPMethod("GET")}} request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.

## Redirection messages

- {{HTTPStatus(300, "300 Multiple Choices")}}
  - : In [agent-driven content negotiation](/en-US/docs/Web/HTTP/Content_negotiation#agent-driven_negotiation), the request has more than one possible response and the user agent or user should choose one of them.
    There is no standardized way for clients to automatically choose one of the responses, so this is rarely used.
- {{HTTPStatus(301, "301 Moved Permanently")}}
  - : The URL of the requested resource has been changed permanently. The new URL is given in the response.
- {{HTTPStatus(302, "302 Found")}}
  - : This response code means that the URI of requested resource has been changed _temporarily_.
    Further changes in the URI might be made in the future, so the same URI should be used by the client in future requests.
- {{HTTPStatus(303, "303 See Other")}}
  - : The server sent this response to direct the client to get the requested resource at another URI with a {{HTTPMethod("GET")}} request.
- {{HTTPStatus(304, "304 Not Modified")}}
  - : This is used for caching purposes.
    It tells the client that the response has not been modified, so the client can continue to use the same [cached](/en-US/docs/Web/HTTP/Caching) version of the response.
- `305 Use Proxy` {{deprecated_inline}}
  - : Defined in a previous version of the HTTP specification to indicate that a requested response must be accessed by a proxy.
    It has been deprecated due to security concerns regarding in-band configuration of a proxy.
- `306 unused`
  - : This response code is no longer used; but is reserved. It was used in a previous version of the HTTP/1.1 specification.
- {{HTTPStatus(307, "307 Temporary Redirect")}}
  - : The server sends this response to direct the client to get the requested resource at another URI with the same method that was used in the prior request.
    This has the same semantics as the `302 Found` response code, with the exception that the user agent _must not_ change the HTTP method used: if a {{HTTPMethod("POST")}} was used in the first request, a `POST` must be used in the redirected request.
- {{HTTPStatus(308, "308 Permanent Redirect")}}
  - : This means that the resource is now permanently located at another URI, specified by the {{HTTPHeader("Location")}} response header.
    This has the same semantics as the `301 Moved Permanently` HTTP response code, with the exception that the user agent _must not_ change the HTTP method used: if a {{HTTPMethod("POST")}} was used in the first request, a `POST` must be used in the second request.

## Client error responses

- {{HTTPStatus(400, "400 Bad Request")}}
  - : The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).
- {{HTTPStatus(401, "401 Unauthorized")}}
  - : Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated".
    That is, the client must authenticate itself to get the requested response.
- {{HTTPStatus(402, "402 Payment Required")}}
  - : The initial purpose of this code was for digital payment systems, however this status code is rarely used and no standard convention exists.
- {{HTTPStatus(403, "403 Forbidden")}}
  - : The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource.
    Unlike `401 Unauthorized`, the client's identity is known to the server.
- {{HTTPStatus(404, "404 Not Found")}}
  - : The server cannot find the requested resource.
    In the browser, this means the URL is not recognized.
    In an API, this can also mean that the endpoint is valid but the resource itself does not exist.
    Servers may also send this response instead of `403 Forbidden` to hide the existence of a resource from an unauthorized client.
    This response code is probably the most well known due to its frequent occurrence on the web.
- {{HTTPStatus(405, "405 Method Not Allowed")}}
  - : The [request method](/en-US/docs/Web/HTTP/Methods) is known by the server but is not supported by the target resource.
    For example, an API may not allow `DELETE` on a resource, or the `TRACE` method entirely.
- {{HTTPStatus(406, "406 Not Acceptable")}}
  - : This response is sent when the web server, after performing [server-driven content negotiation](/en-US/docs/Web/HTTP/Content_negotiation#server-driven_content_negotiation), doesn't find any content that conforms to the criteria given by the user agent.
- {{HTTPStatus(407, "407 Proxy Authentication Required")}}
  - : This is similar to `401 Unauthorized` but authentication is needed to be done by a proxy.
- {{HTTPStatus(408, "408 Request Timeout")}}
  - : This response is sent on an idle connection by some servers, even without any previous request by the client.
    It means that the server would like to shut down this unused connection.
    This response is used much more since some browsers use HTTP pre-connection mechanisms to speed up browsing.
    Some servers may shut down a connection without sending this message.
- {{HTTPStatus(409, "409 Conflict")}}
  - : This response is sent when a request conflicts with the current state of the server.
    In {{glossary("WebDAV")}} remote web authoring, `409` responses are errors sent to the client so that a user might be able to resolve a conflict and resubmit the request.
- {{HTTPStatus(410, "410 Gone")}}
  - : This response is sent when the requested content has been permanently deleted from server, with no forwarding address.
    Clients are expected to remove their caches and links to the resource.
    The HTTP specification intends this status code to be used for "limited-time, promotional services".
    APIs should not feel compelled to indicate resources that have been deleted with this status code.
- {{HTTPStatus(411, "411 Length Required")}}
  - : Server rejected the request because the {{HTTPHeader("Content-Length")}} header field is not defined and the server requires it.
- {{HTTPStatus(412, "412 Precondition Failed")}}
  - : In [conditional requests](/en-US/docs/Web/HTTP/Conditional_requests), the client has indicated preconditions in its headers which the server does not meet.
- {{HTTPStatus(413, "413 Content Too Large")}}
  - : The request body is larger than limits defined by server.
    The server might close the connection or return an {{HTTPHeader("Retry-After")}} header field.
- {{HTTPStatus(414, "414 URI Too Long")}}
  - : The URI requested by the client is longer than the server is willing to interpret.
- {{HTTPStatus(415, "415 Unsupported Media Type")}}
  - : The media format of the requested data is not supported by the server, so the server is rejecting the request.
- {{HTTPStatus(416, "416 Range Not Satisfiable")}}
  - : The [ranges](/en-US/docs/Web/HTTP/Range_requests) specified by the `Range` header field in the request cannot be fulfilled.
    It's possible that the range is outside the size of the target resource's data.
- {{HTTPStatus(417, "417 Expectation Failed")}}
  - : This response code means the expectation indicated by the {{HTTPHeader("Expect")}} request header field cannot be met by the server.
- {{HTTPStatus(418, "418 I'm a teapot")}}
  - : The server refuses the attempt to brew coffee with a teapot.
- {{HTTPStatus(421, "421 Misdirected Request")}}
  - : The request was directed at a server that is not able to produce a response.
    This can be sent by a server that is not configured to produce responses for the combination of scheme and authority that are included in the request URI.
- {{HTTPStatus(422, "422 Unprocessable Content")}} ({{Glossary("WebDAV")}})
  - : The request was well-formed but was unable to be followed due to semantic errors.
- {{HTTPStatus(423, "423 Locked")}} ({{Glossary("WebDAV")}})
  - : The resource that is being accessed is locked.
- {{HTTPStatus(424, "424 Failed Dependency")}} ({{Glossary("WebDAV")}})
  - : The request failed due to failure of a previous request.
- {{HTTPStatus(425, "425 Too Early")}} {{experimental_inline}}
  - : Indicates that the server is unwilling to risk processing a request that might be replayed.
- {{HTTPStatus(426, "426 Upgrade Required")}}
  - : The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol.
    The server sends an {{HTTPHeader("Upgrade")}} header in a 426 response to indicate the required protocol(s).
- {{HTTPStatus(428, "428 Precondition Required")}}
  - : The origin server requires the request to be [conditional](/en-US/docs/Web/HTTP/Conditional_requests).
    This response is intended to prevent the 'lost update' problem, where a client {{HTTPMethod("GET")}}s a resource's state, modifies it and {{HTTPMethod("PUT")}}s it back to the server, when meanwhile a third party has modified the state on the server, leading to a conflict.
- {{HTTPStatus(429, "429 Too Many Requests")}}
  - : The user has sent too many requests in a given amount of time ({{Glossary("Rate_limit","rate limiting" )}}).
- {{HTTPStatus(431, "431 Request Header Fields Too Large")}}
  - : The server is unwilling to process the request because its header fields are too large.
    The request may be resubmitted after reducing the size of the request header fields.
- {{HTTPStatus(451, "451 Unavailable For Legal Reasons")}}
  - : The user agent requested a resource that cannot legally be provided, such as a web page censored by a government.

## Server error responses

- {{HTTPStatus(500, "500 Internal Server Error")}}
  - : The server has encountered a situation it does not know how to handle.
    This error is generic, indicating that the server cannot find a more appropriate `5XX` status code to respond with.
- {{HTTPStatus(501, "501 Not Implemented")}}
  - : The request method is not supported by the server and cannot be handled. The only methods that servers are required to support (and therefore that must not return this code) are {{HTTPMethod("GET")}} and {{HTTPMethod("HEAD")}}.
- {{HTTPStatus(502, "502 Bad Gateway")}}
  - : This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response.
- {{HTTPStatus(503, "503 Service Unavailable")}}
  - : The server is not ready to handle the request.
    Common causes are a server that is down for maintenance or that is overloaded.
    Note that together with this response, a user-friendly page explaining the problem should be sent.
    This response should be used for temporary conditions and the {{HTTPHeader("Retry-After")}} HTTP header should, if possible, contain the estimated time before the recovery of the service.
    The webmaster must also take care about the caching-related headers that are sent along with this response, as these temporary condition responses should usually not be cached.
- {{HTTPStatus(504, "504 Gateway Timeout")}}
  - : This error response is given when the server is acting as a gateway and cannot get a response in time.
- {{HTTPStatus(505, "505 HTTP Version Not Supported")}}
  - : The HTTP version used in the request is not supported by the server.
- {{HTTPStatus(506, "506 Variant Also Negotiates")}}
  - : The server has an internal configuration error: during content negotiation, the chosen variant is configured to engage in content negotiation itself, which results in circular references when creating responses.
- {{HTTPStatus(507, "507 Insufficient Storage")}} ({{Glossary("WebDAV")}})
  - : The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request.
- {{HTTPStatus(508, "508 Loop Detected")}} ({{Glossary("WebDAV")}})
  - : The server detected an infinite loop while processing the request.
- {{HTTPStatus(510, "510 Not Extended")}}
  - : The client request declares an HTTP Extension ({{RFC("2774")}}) that should be used to process the request, but the extension is not supported.
- {{HTTPStatus(511, "511 Network Authentication Required")}}
  - : Indicates that the client needs to authenticate to gain network access.

## Browser compatibility

{{Compat}}

## See also

- [List of HTTP status codes on Wikipedia](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)
- [IANA official registry of HTTP status codes](https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml)

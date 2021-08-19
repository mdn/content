---
title: HTTP headers
slug: Web/HTTP/Headers
tags:
  - HTTP
  - HTTP Header
  - Headers
  - Networking
  - Overview
  - Reference
---
{{HTTPSidebar}}

**HTTP headers** let the client and the server pass additional information with an HTTP request or response. An HTTP header consists of its case-insensitive name followed by a colon (`:`), then by its value. {{Glossary("Whitespace")}} before the value is ignored.

Custom proprietary headers have historically been used with an `X-` prefix, but this convention was deprecated in June 2012 because of the inconveniences it caused when nonstandard fields became standard in [RFC 6648](https://datatracker.ietf.org/doc/html/rfc6648); others are listed in an [IANA registry](https://www.iana.org/assignments/message-headers/perm-headers.html), whose original content was defined in [RFC 4229](https://datatracker.ietf.org/doc/html/rfc4229). IANA also maintains a [registry of proposed new HTTP headers](https://www.iana.org/assignments/message-headers/prov-headers.html).

Headers can be grouped according to their contexts:

- {{Glossary("Request header", "Request headers")}} contain more information about the resource to be fetched, or about the client requesting the resource.
- {{Glossary("Response header", "Response headers")}} hold additional information about the response, like its location or about the server providing it.
- {{Glossary("Representation header", "Representation headers")}} contain information about the body of the resource, like its [MIME type](/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types), or encoding/compression applied.
- {{Glossary("Payload header","Payload headers")}} contain representation-independent information about payload data, including content length and the encoding used for transport.

Headers can also be grouped according to how {{Glossary("Proxy_server", "proxies")}} handle them:

- {{ httpheader("Connection") }}
- {{ httpheader("Keep-Alive") }}
- {{ httpheader("Proxy-Authenticate") }}
- {{ httpheader("Proxy-Authorization") }}
- {{ httpheader("TE") }}
- {{ httpheader("Trailer") }}
- {{ httpheader("Transfer-Encoding") }}
- {{ httpheader("Upgrade") }} (see also [Protocol upgrade mechanism](/en-US/docs/Web/HTTP/Protocol_upgrade_mechanism)).

<!---->

- End-to-end headers
  - : These headers _must_ be transmitted to the final recipient of the message: the server for a request, or the client for a response. Intermediate proxies must retransmit these headers unmodified and caches must store them.
- Hop-by-hop headers
  - : These headers are meaningful only for a single transport-level connection, and _must not_ be retransmitted by proxies or cached. Note that only hop-by-hop headers may be set using the {{httpheader("Connection")}} header.

## Authentication

- {{HTTPHeader("WWW-Authenticate")}}
  - : Defines the authentication method that should be used to access a resource.
- {{HTTPHeader("Authorization")}}
  - : Contains the credentials to authenticate a user-agent with a server.
- {{HTTPHeader("Proxy-Authenticate")}}
  - : Defines the authentication method that should be used to access a resource behind a proxy server.
- {{HTTPHeader("Proxy-Authorization")}}
  - : Contains the credentials to authenticate a user agent with a proxy server.

## Caching

- {{HTTPHeader("Age")}}
  - : The time, in seconds, that the object has been in a proxy cache.
- {{HTTPHeader("Cache-Control")}}
  - : Directives for caching mechanisms in both requests and responses.
- {{HTTPHeader("Clear-Site-Data")}}
  - : Clears browsing data (e.g. cookies, storage, cache) associated with the requesting website.
- {{HTTPHeader("Expires")}}
  - : The date/time after which the response is considered stale.
- {{HTTPHeader("Pragma")}}
  - : Implementation-specific header that may have various effects anywhere along the request-response chain. Used for backwards compatibility with HTTP/1.0 caches where the `Cache-Control` header is not yet present.
- {{HTTPHeader("Warning")}}
  - : General warning information about possible problems.

## Client hints

HTTP {{Glossary("Client_hints", "Client hints")}} are a set of request headers that provide useful information about the client such as device type and network conditions, and allow servers to optimize what is served for those conditions.

Servers proactively requests the client hint headers they are interested in from the client using {{HTTPHeader("Accept-CH")}}. The client may then choose to include the requested headers in subsequent requests.

- {{HTTPHeader("Accept-CH")}} {{experimental_inline}}
  - : Servers can advertise support for Client Hints using the `Accept-CH` header field or an equivalent HTML `<meta>` element with [`http-equiv`](/en-US/docs/Web/HTML/Element/meta#attr-http-equiv) attribute.
- {{HTTPHeader("Accept-CH-Lifetime")}} {{experimental_inline}} {{deprecated_inline}}
  - : Servers can ask the client to remember the set of Client Hints that the server supports for a specified period of time, to enable delivery of Client Hints on subsequent requests to the server’s origin.

The different categories of client hints are listed below.

### Device client hints

- {{HTTPHeader("Content-DPR")}} {{deprecated_inline}}{{experimental_inline}}
  - : Response header used to confirm the image device to pixel ratio in requests where the {{HTTPHeader("DPR")}} client hint was used to select an image resource.
- {{HTTPHeader("Device-Memory")}} {{deprecated_inline}}{{experimental_inline}}
  - : Approximate amount of available client RAM memory. This is part of the [Device Memory API](/en-US/docs/Web/API/Device_Memory_API).
- {{HTTPHeader("DPR")}} {{deprecated_inline}}{{experimental_inline}}
  - : Client device pixel ratio (DPR), which is the number of physical device pixels corresponding to every CSS pixel.
- {{HTTPHeader("Viewport-Width")}} {{deprecated_inline}}{{experimental_inline}}
  - : A number that indicates the layout viewport width in CSS pixels. The provided pixel value is a number rounded to the smallest following integer (i.e. ceiling value).
- {{HTTPHeader("Width")}} {{deprecated_inline}}{{experimental_inline}}
  - : The `Width` request header field is a number that indicates the desired resource width in physical pixels (i.e. intrinsic size of an image).

### Network client hints

Network client hints allow a server to choose what information is sent based on the user choice and network bandwidth and latency.

- {{HTTPHeader("Downlink")}}
  - : Approximate bandwidth of the client's connection to the server, in Mbps. This is part of the [Network Information API](/en-US/docs/Web/API/Network_Information_API).
- {{HTTPHeader("ECT")}}
  - : The {{Glossary("effective connection type")}} ("network profile") that best matches the connection's latency and bandwidth. This is part of the [Network Information API](/en-US/docs/Web/API/Network_Information_API).
- {{HTTPHeader("RTT")}}
  - : Application layer round trip time (RTT) in miliseconds, which includes the server processing time. This is part of the [Network Information API](/en-US/docs/Web/API/Network_Information_API).
- {{HTTPHeader("Save-Data")}} {{experimental_inline}}
  - : A boolean that indicates the user agent's preference for reduced data usage.

## Conditionals

- {{HTTPHeader("Last-Modified")}}
  - : The last modification date of the resource, used to compare several versions of the same resource. It is less accurate than {{HTTPHeader("ETag")}}, but easier to calculate in some environments. Conditional requests using {{HTTPHeader("If-Modified-Since")}} and {{HTTPHeader("If-Unmodified-Since")}} use this value to change the behavior of the request.
- {{HTTPHeader("ETag")}}
  - : A unique string identifying the version of the resource. Conditional requests using {{HTTPHeader("If-Match")}} and {{HTTPHeader("If-None-Match")}} use this value to change the behavior of the request.
- {{HTTPHeader("If-Match")}}
  - : Makes the request conditional, and applies the method only if the stored resource matches one of the given ETags.
- {{HTTPHeader("If-None-Match")}}
  - : Makes the request conditional, and applies the method only if the stored resource _doesn't_ match any of the given ETags. This is used to update caches (for safe requests), or to prevent to upload a new resource when one already exists.
- {{HTTPHeader("If-Modified-Since")}}
  - : Makes the request conditional, and expects the resource to be transmitted only if it has been modified after the given date. This is used to transmit data only when the cache is out of date.
- {{HTTPHeader("If-Unmodified-Since")}}
  - : Makes the request conditional, and expects the resource to be transmitted only if it has not been modified after the given date. This ensures the coherence of a new fragment of a specific range with previous ones, or to implement an optimistic concurrency control system when modifying existing documents.
- {{HTTPHeader("Vary")}}
  - : Determines how to match request headers to decide whether a cached response can be used rather than requesting a fresh one from the origin server.

## Connection management

- {{HTTPHeader("Connection")}}
  - : Controls whether the network connection stays open after the current transaction finishes.
- {{HTTPHeader("Keep-Alive")}}
  - : Controls how long a persistent connection should stay open.

## Content negotiation

[Content negotiation](/en-US/docs/Web/HTTP/Content_negotiation) headers.

- {{HTTPHeader("Accept")}}
  - : Informs the server about the {{Glossary("MIME_type", "types")}} of data that can be sent back.
- {{HTTPHeader("Accept-Encoding")}}
  - : The encoding algorithm, usually a [compression algorithm](/en-US/docs/Web/HTTP/Compression), that can be used on the resource sent back.
- {{HTTPHeader("Accept-Language")}}
  - : Informs the server about the human language the server is expected to send back. This is a hint and is not necessarily under the full control of the user: the server should always pay attention not to override an explicit user choice (like selecting a language from a dropdown).

## Controls

- {{HTTPHeader("Expect")}}
  - : Indicates expectations that need to be fulfilled by the server to properly handle the request.
- {{HTTPHeader("Max-Forwards")}}
  - : TBD

## Cookies

- {{HTTPHeader("Cookie")}}
  - : Contains stored [HTTP cookies](/en-US/docs/Web/HTTP/Cookies) previously sent by the server with the {{HTTPHeader("Set-Cookie")}} header.
- {{HTTPHeader("Set-Cookie")}}
  - : Send cookies from the server to the user-agent.
- {{HTTPHeader("Cookie2")}} {{deprecated_inline}}
  - : Contains an HTTP cookie previously sent by the server with the {{HTTPHeader("Set-Cookie2")}} header, but has been **obsoleted**. Use {{HTTPHeader("Cookie")}} instead.
- {{HTTPHeader("Set-Cookie2")}} {{deprecated_inline}}
  - : Sends cookies from the server to the user-agent, but has been **obsoleted**. Use {{HTTPHeader("Set-Cookie")}} instead.

## CORS

_Learn more about CORS [here](CORS)._

- {{HTTPHeader("Access-Control-Allow-Origin")}}
  - : Indicates whether the response can be shared.
- {{HTTPHeader("Access-Control-Allow-Credentials")}}
  - : Indicates whether the response to the request can be exposed when the credentials flag is true.
- {{HTTPHeader("Access-Control-Allow-Headers")}}
  - : Used in response to a {{Glossary("Preflight_request", "preflight request")}} to indicate which HTTP headers can be used when making the actual request.
- {{HTTPHeader("Access-Control-Allow-Methods")}}
  - : Specifies the methods allowed when accessing the resource in response to a preflight request.
- {{HTTPHeader("Access-Control-Expose-Headers")}}
  - : Indicates which headers can be exposed as part of the response by listing their names.
- {{HTTPHeader("Access-Control-Max-Age")}}
  - : Indicates how long the results of a preflight request can be cached.
- {{HTTPHeader("Access-Control-Request-Headers")}}
  - : Used when issuing a preflight request to let the server know which HTTP headers will be used when the actual request is made.
- {{HTTPHeader("Access-Control-Request-Method")}}
  - : Used when issuing a preflight request to let the server know which [HTTP method](/en-US/docs/Web/HTTP/Methods) will be used when the actual request is made.
- {{HTTPHeader("Origin")}}
  - : Indicates where a fetch originates from.
- {{HTTPHeader("Timing-Allow-Origin")}}
  - : Specifies origins that are allowed to see values of attributes retrieved via features of the [Resource Timing API](/en-US/docs/Web/API/Resource_Timing_API), which would otherwise be reported as zero due to cross-origin restrictions.

## Downloads

- {{HTTPHeader("Content-Disposition")}}
  - : Indicates if the resource transmitted should be displayed inline (default behavior without the header), or if it should be handled like a download and the browser should present a “Save As” dialog.

## Message body information

- {{HTTPHeader("Content-Length")}}
  - : The size of the resource, in decimal number of bytes.
- {{HTTPHeader("Content-Type")}}
  - : Indicates the media type of the resource.
- {{HTTPHeader("Content-Encoding")}}
  - : Used to specify the compression algorithm.
- {{HTTPHeader("Content-Language")}}
  - : Describes the human language(s) intended for the audience, so that it allows a user to differentiate according to the users' own preferred language.
- {{HTTPHeader("Content-Location")}}
  - : Indicates an alternate location for the returned data.

## Proxies

- {{HTTPHeader("Forwarded")}}
  - : Contains information from the client-facing side of proxy servers that is altered or lost when a proxy is involved in the path of the request.
- {{HTTPHeader("X-Forwarded-For")}} {{non-standard_inline}}
  - : Identifies the originating IP addresses of a client connecting to a web server through an HTTP proxy or a load balancer.
- {{HTTPHeader("X-Forwarded-Host")}} {{non-standard_inline}}
  - : Identifies the original host requested that a client used to connect to your proxy or load balancer.
- {{HTTPHeader("X-Forwarded-Proto")}} {{non-standard_inline}}
  - : Identifies the protocol (HTTP or HTTPS) that a client used to connect to your proxy or load balancer.
- {{HTTPHeader("Via")}}
  - : Added by proxies, both forward and reverse proxies, and can appear in the request headers and the response headers.

## Redirects

- {{HTTPHeader("Location")}}
  - : Indicates the URL to redirect a page to.

## Request context

- {{HTTPHeader("From")}}
  - : Contains an Internet email address for a human user who controls the requesting user agent.
- {{HTTPHeader("Host")}}
  - : Specifies the domain name of the server (for virtual hosting), and (optionally) the TCP port number on which the server is listening.
- {{HTTPHeader("Referer")}}
  - : The address of the previous web page from which a link to the currently requested page was followed.
- {{HTTPHeader("Referrer-Policy")}}
  - : Governs which referrer information sent in the {{HTTPHeader("Referer")}} header should be included with requests made.
- {{HTTPHeader("User-Agent")}}
  - : Contains a characteristic string that allows the network protocol peers to identify the application type, operating system, software vendor or software version of the requesting software user agent. See also the [Firefox user agent string reference](/en-US/docs/Web/HTTP/Headers/User-Agent/Firefox).

## Response context

- {{HTTPHeader("Allow")}}
  - : Lists the set of HTTP request methods supported by a resource.
- {{HTTPHeader("Server")}}
  - : Contains information about the software used by the origin server to handle the request.

## Range requests

- {{HTTPHeader("Accept-Ranges")}}
  - : Indicates if the server supports range requests, and if so in which unit the range can be expressed.
- {{HTTPHeader("Range")}}
  - : Indicates the part of a document that the server should return.
- {{HTTPHeader("If-Range")}}
  - : Creates a conditional range request that is only fulfilled if the given etag or date matches the remote resource. Used to prevent downloading two ranges from incompatible version of the resource.
- {{HTTPHeader("Content-Range")}}
  - : Indicates where in a full body message a partial message belongs.

## Security

- {{HTTPHeader("Cross-Origin-Embedder-Policy")}} (COEP)
  - : Allows a server to declare an embedder policy for a given document.
- {{HTTPHeader("Cross-Origin-Opener-Policy")}} (COOP)
  - : Prevents other domains from opening/controlling a window.
- {{HTTPHeader("Cross-Origin-Resource-Policy")}} (CORP)
  - : Prevents other domains from reading the response of the resources to which this header is applied.
- {{HTTPHeader("Content-Security-Policy")}} ({{Glossary("CSP")}})
  - : Controls resources the user agent is allowed to load for a given page.
- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
  - : Allows web developers to experiment with policies by monitoring, but not enforcing, their effects. These violation reports consist of {{Glossary("JSON")}} documents sent via an HTTP `POST` request to the specified URI.
- {{HTTPHeader("Expect-CT")}}
  - : Allows sites to opt in to reporting and/or enforcement of Certificate Transparency requirements, which prevents the use of misissued certificates for that site from going unnoticed. When a site enables the Expect-CT header, they are requesting that Chrome check that any certificate for that site appears in public CT logs.
- {{HTTPHeader("Feature-Policy")}}
  - : Provides a mechanism to allow and deny the use of browser features in its own frame, and in iframes that it embeds.
- {{HTTPHeader("Origin-Isolation")}} {{experimental_inline}}
  - : Provides a mechanism to allow web applications to isolate their origins.
- {{HTTPHeader("Strict-Transport-Security")}} ({{Glossary("HSTS")}})
  - : Force communication using HTTPS instead of HTTP.
- {{HTTPHeader("Upgrade-Insecure-Requests")}}
  - : Sends a signal to the server expressing the client’s preference for an encrypted and authenticated response, and that it can successfully handle the {{CSP("upgrade-insecure-requests")}} directive.
- {{HTTPHeader("X-Content-Type-Options")}}
  - : Disables MIME sniffing and forces browser to use the type given in {{HTTPHeader("Content-Type")}}.
- {{HTTPHeader("X-Download-Options")}}
  - : The [`X-Download-Options`](<https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/compatibility/jj542450(v=vs.85)?#the-noopen-directive>) HTTP header indicates that the browser (Internet Explorer) should not display the option to "Open" a file that has been downloaded from an application, to prevent phishing attacks as the file otherwise would gain access to execute in the context of the application. (Note: related [MS Edge bug](https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/18488178/)).
- {{HTTPHeader("X-Frame-Options")}} (XFO)
  - : Indicates whether a browser should be allowed to render a page in a {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} or {{HTMLElement("object")}}.
- {{HTTPHeader("X-Permitted-Cross-Domain-Policies")}}
  - : Specifies if a cross-domain policy file (`crossdomain.xml`) is allowed. The file may define a policy to grant clients, such as Adobe's Flash Player (now obsolete), Adobe Acrobat, Microsoft Silverlight (now obsolete), or Apache Flex, permission to handle data across domains that would otherwise be restricted due to the [Same-Origin Policy](/en-US/docs/Web/Security/Same-origin_policy). See the [Cross-domain Policy File Specification](https://www.adobe.com/devnet/articles/crossdomain_policy_file_spec.html) for more information.
- {{HTTPHeader("X-Powered-By")}}
  - : May be set by hosting environments or other frameworks and contains information about them while not providing any usefulness to the application or its visitors. Unset this header to avoid exposing potential vulnerabilities.
- {{HTTPHeader("X-XSS-Protection")}}
  - : Enables cross-site scripting filtering.

### HTTP Public Key Pinning (HPKP)

{{Glossary("HPKP", "HTTP Public Key Pinning")}} has been deprecated and removed in favor of Certificate Transparency and {{HTTPHeader("Expect-CT")}}.

- {{HTTPHeader("Public-Key-Pins")}}
  - : Associates a specific cryptographic public key with a certain web server to decrease the risk of {{Glossary("MITM")}} attacks with forged certificates.
- {{HTTPHeader("Public-Key-Pins-Report-Only")}}
  - : Sends reports to the report-uri specified in the header and does still allow clients to connect to the server even if the pinning is violated.

### Fetch metadata request headers

{{Glossary("Fetch metadata request header", "Fetch metadata request headers")}} provides information about the context from which the request originated. This allows a server to make decisions about whether a request should be allowed based on where the request came from and how the resource will be used.

- {{HTTPHeader("Sec-Fetch-Site")}}
  - : It is a request header that indicates the relationship between a request initiator's origin and its target's origin. It is a Structured Header whose value is a token with possible values `cross-site`, `same-origin`, `same-site`, and `none`.
- {{HTTPHeader("Sec-Fetch-Mode")}}
  - : It is a request header that indicates the request's mode to a server. It is a Structured Header whose value is a token with possible values `cors`, `navigate`, `no-cors`, `same-origin`, and `websocket`.
- {{HTTPHeader("Sec-Fetch-User")}}
  - : It is a request header that indicates whether or not a navigation request was triggered by user activation. It is a Structured Header whose value is a boolean so possible values are `?0` for false and `?1` for true.
- {{HTTPHeader("Sec-Fetch-Dest")}}
  - : It is a request header that indicates the request's destination to a server. It is a Structured Header whose value is a token with possible values `audio`, `audioworklet`, `document`, `embed`, `empty`, `font`, `image`, `manifest`, `object`, `paintworklet`, `report`, `script`, `serviceworker`, `sharedworker`, `style`, `track`, `video`, `worker`, and `xslt`.

## Server-sent events

- {{HTTPHeader("Last-Event-ID")}}
  - : TBD
- {{HTTPHeader("NEL")}} {{experimental_inline}}
  - : Defines a mechanism that enables developers to declare a network error reporting policy.
- {{HTTPHeader("Ping-From")}}
  - : TBD
- {{HTTPHeader("Ping-To")}}
  - : TBD
- {{HTTPHeader("Report-To")}}
  - : Used to specify a server endpoint for the browser to send warning and error reports to.

## Transfer coding

- {{HTTPHeader("Transfer-Encoding")}}
  - : Specifies the form of encoding used to safely transfer the resource to the user.
- {{HTTPHeader("TE")}}
  - : Specifies the transfer encodings the user agent is willing to accept.
- {{HTTPHeader("Trailer")}}
  - : Allows the sender to include additional fields at the end of chunked message.

## WebSockets

- {{HTTPHeader("Sec-WebSocket-Key")}}
  - : TBD
- {{HTTPHeader("Sec-WebSocket-Extensions")}}
  - : TBD
- {{HTTPHeader("Sec-WebSocket-Accept")}}
  - : TBD
- {{HTTPHeader("Sec-WebSocket-Protocol")}}
  - : TBD
- {{HTTPHeader("Sec-WebSocket-Version")}}
  - : TBD

## Other

- {{HTTPHeader("Accept-Push-Policy")}} {{experimental_inline}}
  - : A client can express the desired push policy for a request by sending an [`Accept-Push-Policy`](https://datatracker.ietf.org/doc/html/draft-ruellan-http-accept-push-policy-00#section-3.1) header field in the request.
- {{HTTPHeader("Accept-Signature")}} {{experimental_inline}}
  - : A client can send the [`Accept-Signature`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#rfc.section.3.7) header field to indicate intention to take advantage of any available signatures and to indicate what kinds of signatures it supports.
- {{HTTPHeader("Alt-Svc")}}
  - : Used to list alternate ways to reach this service.
- {{HTTPHeader("Date")}}
  - : Contains the date and time at which the message was originated.
- {{HTTPHeader("Early-Data")}} {{experimental_inline}}
  - : Indicates that the request has been conveyed in TLS early data.
- {{HTTPHeader("Large-Allocation")}}
  - : Tells the browser that the page being loaded is going to want to perform a large allocation.
- {{HTTPHeader("Link")}}
  - : The [`Link`](https://datatracker.ietf.org/doc/html/rfc5988#section-5) entity-header field provides a means for serialising one or more links in HTTP headers. It is semantically equivalent to the HTML {{HTMLElement("link")}} element.
- {{HTTPHeader("Push-Policy")}} {{experimental_inline}}
  - : A [`Push-Policy`](https://datatracker.ietf.org/doc/html/draft-ruellan-http-accept-push-policy-00#section-3.2) defines the server behavior regarding push when processing a request.
- {{HTTPHeader("Retry-After")}}
  - : Indicates how long the user agent should wait before making a follow-up request.
- {{HTTPHeader("Signature")}} {{experimental_inline}}
  - : The [`Signature`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#rfc.section.3.1) header field conveys a list of signatures for an exchange, each one accompanied by information about how to determine the authority of and refresh that signature.
- {{HTTPHeader("Signed-Headers")}} {{experimental_inline}}
  - : The [`Signed-Headers`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#rfc.section.5.1.2) header field identifies an ordered list of response header fields to include in a signature.
- {{HTTPHeader("Server-Timing")}}
  - : Communicates one or more metrics and descriptions for the given request-response cycle.
- {{HTTPHeader("Service-Worker-Allowed")}}
  - : Used to remove the [path restriction](https://w3c.github.io/ServiceWorker/#path-restriction) by including this header [in the response of the Service Worker script](https://w3c.github.io/ServiceWorker/#service-worker-script-response).
- {{HTTPHeader("SourceMap")}}
  - : Links generated code to a [source map](/en-US/docs/Tools/Debugger/How_to/Use_a_source_map).
- {{HTTPHeader("Upgrade")}}
  - : The relevant RFC document for the [Upgrade header field is RFC 7230, section 6.7](https://datatracker.ietf.org/doc/html/rfc7230#section-6.7). The standard establishes rules for upgrading or changing to a different protocol on the current client, server, transport protocol connection. For example, this header standard allows a client to change from HTTP 1.1 to HTTP 2.0, assuming the server decides to acknowledge and implement the Upgrade header field. Neither party is required to accept the terms specified in the Upgrade header field. It can be used in both client and server headers. If the Upgrade header field is specified, then the sender MUST also send the Connection header field with the upgrade option specified. For details on the Connection header field [please see section 6.1 of the aforementioned RFC](https://datatracker.ietf.org/doc/html/rfc7230#section-6.1).
- {{HTTPHeader("X-DNS-Prefetch-Control")}}
  - : Controls DNS prefetching, a feature by which browsers proactively perform domain name resolution on both links that the user may choose to follow as well as URLs for items referenced by the document, including images, CSS, JavaScript, and so forth.
- {{HTTPHeader("X-Firefox-Spdy")}} {{deprecated_inline}} {{non-standard_inline}}
  - : TBD
- {{HTTPHeader("X-Pingback")}} {{non-standard_inline}}
  - : TBD
- {{HTTPHeader("X-Requested-With")}}
  - : TBD
- {{HTTPHeader("X-Robots-Tag")}}{{non-standard_inline}}
  - : The [`X-Robots-Tag`](https://developers.google.com/search/reference/robots_meta_tag#xrobotstag) HTTP header is used to indicate how a web page is to be indexed within public search engine results. The header is effectively equivalent to `<meta name="robots" content="...">`.
- {{HTTPHeader("X-UA-Compatible")}} {{non-standard_inline}}
  - : Used by Internet Explorer to signal which document mode to use.

## Contributing

You can help by [writing new entries](/en-US/docs/MDN/Contribute/Howto/Document_an_HTTP_header) or improving the existing ones.

## See also

- [Wikipedia page on List of HTTP headers](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields)
- [IANA registry](https://www.iana.org/assignments/message-headers/perm-headers.html)
- [HTTP Working Group](https://httpwg.org/specs/)

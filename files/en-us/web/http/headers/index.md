---
title: HTTP headers
short-title: Headers
slug: Web/HTTP/Headers
page-type: landing-page
---

{{HTTPSidebar}}

**HTTP headers** let the client and the server pass additional information with a message in a request or response.
In HTTP/1.X, a header is a case-insensitive name followed by a colon, then optional whitespace which will be ignored, and finally by its value (for example: `Allow: POST`).
In HTTP/2 and above, headers are displayed in lowercase when viewed in developer tools (`accept: */*`), and prefixed with a colon for a special group of [pseudo-headers](/en-US/docs/Web/HTTP/Messages#pseudo-headers) (`:status: 200`).
You can find more information on the syntax in each protocol version in the [HTTP messages](/en-US/docs/Web/HTTP/Messages) page.

Custom proprietary headers have historically been used with an `X-` prefix, but this convention was deprecated in 2012 because of the inconveniences it caused when nonstandard fields became standard in [RFC 6648](https://datatracker.ietf.org/doc/html/rfc6648); others are listed in the [IANA HTTP Field Name Registry](https://www.iana.org/assignments/http-fields/http-fields.xhtml), whose original content was defined in [RFC 4229](https://datatracker.ietf.org/doc/html/rfc4229).
The IANA registry lists headers, including [information about their status](https://github.com/protocol-registries/http-fields?tab=readme-ov-file#choosing-the-right-status).

Headers can be grouped according to their contexts:

- {{Glossary("Request header", "Request headers")}}
  - : Contain more information about the resource to be fetched, or about the client requesting the resource.
- {{Glossary("Response header", "Response headers")}}
  - : Hold additional information about the response, like its location or about the server providing it.
- {{Glossary("Representation header", "Representation headers")}}
  - : Contain information about the body of the resource, like its [MIME type](/en-US/docs/Web/HTTP/MIME_types), or encoding/compression applied.
- {{Glossary("Payload header","Payload headers")}}
  - : Contain representation-independent information about payload data, including content length and the encoding used for transport.

Headers can also be grouped according to how {{Glossary("Proxy_server", "proxies")}} handle them:

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
- {{HTTPHeader("No-Vary-Search")}} {{experimental_inline}}
  - : Specifies a set of rules that define how a URL's query parameters will affect cache matching. These rules dictate whether the same URL with different URL parameters should be saved as separate browser cache entries.

## Conditionals

- {{HTTPHeader("Last-Modified")}}
  - : The last modification date of the resource, used to compare several versions of the same resource. It is less accurate than {{HTTPHeader("ETag")}}, but easier to calculate in some environments. Conditional requests using {{HTTPHeader("If-Modified-Since")}} and {{HTTPHeader("If-Unmodified-Since")}} use this value to change the behavior of the request.
- {{HTTPHeader("ETag")}}
  - : A unique string identifying the version of the resource. Conditional requests using {{HTTPHeader("If-Match")}} and {{HTTPHeader("If-None-Match")}} use this value to change the behavior of the request.
- {{HTTPHeader("If-Match")}}
  - : Makes the request conditional, and applies the method only if the stored resource matches one of the given ETags.
- {{HTTPHeader("If-None-Match")}}
  - : Makes the request conditional, and applies the method only if the stored resource _doesn't_ match any of the given ETags. This is used to update caches (for safe requests), or to prevent uploading a new resource when one already exists.
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

For more details, refer to the [Content negotiation article](/en-US/docs/Web/HTTP/Content_negotiation).

- {{HTTPHeader("Accept")}}
  - : Informs the server about the {{Glossary("MIME_type", "types")}} of data that can be sent back.
- {{HTTPHeader("Accept-Encoding")}}
  - : The encoding algorithm, usually a [compression algorithm](/en-US/docs/Web/HTTP/Compression), that can be used on the resource sent back.
- {{HTTPHeader("Accept-Language")}}
  - : Informs the server about the human language the server is expected to send back. This is a hint and is not necessarily under the full control of the user: the server should always pay attention not to override an explicit user choice (like selecting a language from a dropdown).
- {{HTTPHeader("Accept-Patch")}}
  - : A _request content negotiation_ response header that advertises which [media type](/en-US/docs/Web/HTTP/MIME_types) the server is able to understand in a {{HTTPMethod("PATCH")}} request.
- {{HTTPHeader("Accept-Post")}}
  - : A _request content negotiation_ response header that advertises which [media type](/en-US/docs/Web/HTTP/MIME_types) the server is able to understand in a {{HTTPMethod("POST")}} request.

## Controls

- {{HTTPHeader("Expect")}}
  - : Indicates expectations that need to be fulfilled by the server to properly handle the request.
- {{HTTPHeader("Max-Forwards")}}
  - : When using [`TRACE`](/en-US/docs/Web/HTTP/Methods/TRACE), indicates the maximum number of hops the request can do before being reflected to the sender.

## Cookies

- {{HTTPHeader("Cookie")}}
  - : Contains stored [HTTP cookies](/en-US/docs/Web/HTTP/Cookies) previously sent by the server with the {{HTTPHeader("Set-Cookie")}} header.
- {{HTTPHeader("Set-Cookie")}}
  - : Send cookies from the server to the user-agent.

## CORS

For more information, refer to the [CORS documentation](/en-US/docs/Web/HTTP/CORS).

- {{HTTPHeader("Access-Control-Allow-Credentials")}}
  - : Indicates whether the response to the request can be exposed when the credentials flag is true.
- {{HTTPHeader("Access-Control-Allow-Headers")}}
  - : Used in response to a {{Glossary("Preflight_request", "preflight request")}} to indicate which HTTP headers can be used when making the actual request.
- {{HTTPHeader("Access-Control-Allow-Methods")}}
  - : Specifies the methods allowed when accessing the resource in response to a preflight request.
- {{HTTPHeader("Access-Control-Allow-Origin")}}
  - : Indicates whether the response can be shared.
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
  - : Specifies origins that are allowed to see values of attributes retrieved via features of the [Resource Timing API](/en-US/docs/Web/API/Performance_API/Resource_timing), which would otherwise be reported as zero due to cross-origin restrictions.

## Downloads

- {{HTTPHeader("Content-Disposition")}}
  - : Indicates if the resource transmitted should be displayed inline (default behavior without the header), or if it should be handled like a download and the browser should present a "Save As" dialog.

## Integrity digests

- {{HTTPHeader("Content-Digest")}} {{experimental_inline}}
  - : Provides a {{Glossary("digest")}} of the stream of octets framed in an HTTP message (the message content) dependent on {{HTTPHeader("Content-Encoding")}} and {{HTTPHeader("Content-Range")}}.
- {{HTTPHeader("Repr-Digest")}} {{experimental_inline}}
  - : Provides a {{Glossary("digest")}} of the selected representation of the target resource before transmission.
    Unlike the {{HTTPHeader("Content-Digest")}}, the digest does not consider {{HTTPHeader("Content-Encoding")}} or {{HTTPHeader("Content-Range")}}.
- {{HTTPHeader("Want-Content-Digest")}} {{experimental_inline}}
  - : States the wish for a {{HTTPHeader("Content-Digest")}} header.
    It is the `Content-` analogue of {{HTTPHeader("Want-Repr-Digest")}}.
- {{HTTPHeader("Want-Repr-Digest")}} {{experimental_inline}}
  - : States the wish for a {{HTTPHeader("Repr-Digest")}} header.
    It is the `Repr-` analogue of {{HTTPHeader("Want-Content-Digest")}}.

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
- {{HTTPHeader("Via")}}
  - : Added by proxies, both forward and reverse proxies, and can appear in the request headers and the response headers.

## Range requests

HTTP [range requests](/en-US/docs/Web/HTTP/Range_requests) allow the client to request a portion of a resource from the server.
Range requests are useful for applications like media players that support random access, data tools that know they need only part of a large file, and download managers that let the user pause and resume a download.

- {{HTTPHeader("Accept-Ranges")}}
  - : Indicates if the server supports range requests, and if so in which unit the range can be expressed.
- {{HTTPHeader("Range")}}
  - : Indicates the part of a document that the server should return.
- {{HTTPHeader("If-Range")}}
  - : Creates a conditional range request that is only fulfilled if the given etag or date matches the remote resource. Used to prevent downloading two ranges from incompatible version of the resource.
- {{HTTPHeader("Content-Range")}}
  - : Indicates where in a full body message a partial message belongs.

## Redirects

- {{HTTPHeader("Location")}}
  - : Indicates the URL to redirect a page to.
- {{HTTPHeader("Refresh")}}
  - : Directs the browser to reload the page or redirect to another. Takes the same value as the `meta` element with [`http-equiv="refresh"`](/en-US/docs/Web/HTML/Element/meta#http-equiv).

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
  - : Contains a characteristic string that allows the network protocol peers to identify the application type, operating system, software vendor or software version of the requesting software user agent.

## Response context

- {{HTTPHeader("Allow")}}
  - : Lists the set of HTTP request methods supported by a resource.
- {{HTTPHeader("Server")}}
  - : Contains information about the software used by the origin server to handle the request.

## Security

- {{HTTPHeader("Cross-Origin-Embedder-Policy")}} (COEP)
  - : Allows a server to declare an embedder policy for a given document.
- {{HTTPHeader("Cross-Origin-Opener-Policy")}} (COOP)
  - : Prevents other domains from opening/controlling a window.
- {{HTTPHeader("Cross-Origin-Resource-Policy")}} (CORP)
  - : Prevents other domains from reading the response of the resources to which this header is applied. See also [CORP explainer article](/en-US/docs/Web/HTTP/Cross-Origin_Resource_Policy).
- {{HTTPHeader("Content-Security-Policy")}} ({{Glossary("CSP")}})
  - : Controls resources the user agent is allowed to load for a given page.
- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
  - : Allows web developers to experiment with policies by monitoring, but not enforcing, their effects. These violation reports consist of {{Glossary("JSON")}} documents sent via an HTTP `POST` request to the specified URI.
- {{HTTPHeader("Expect-CT")}} {{deprecated_inline}}
  - : Lets sites opt in to reporting and enforcement of [Certificate Transparency](/en-US/docs/Web/Security/Certificate_Transparency) to detect use of misissued certificates for that site.
- {{HTTPHeader("Permissions-Policy")}}
  - : Provides a mechanism to allow and deny the use of browser features in a website's own frame, and in {{htmlelement("iframe")}}s that it embeds.
- {{HTTPHeader("Reporting-Endpoints")}} {{experimental_inline}}
  - : Response header that allows website owners to specify one or more endpoints used to receive errors such as CSP violation reports, {{HTTPHeader("Cross-Origin-Opener-Policy")}} reports, or other generic violations.
- {{HTTPHeader("Strict-Transport-Security")}} ({{Glossary("HSTS")}})
  - : Force communication using HTTPS instead of HTTP.
- {{HTTPHeader("Upgrade-Insecure-Requests")}}
  - : Sends a signal to the server expressing the client's preference for an encrypted and authenticated response, and that it can successfully handle the {{CSP("upgrade-insecure-requests")}} directive.
- {{HTTPHeader("X-Content-Type-Options")}}
  - : Disables MIME sniffing and forces browser to use the type given in {{HTTPHeader("Content-Type")}}.
- {{HTTPHeader("X-Frame-Options")}} (XFO)
  - : Indicates whether a browser should be allowed to render a page in a {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} or {{HTMLElement("object")}}.
- {{HTTPHeader("X-Permitted-Cross-Domain-Policies")}}
  - : A cross-domain policy file may grant clients, such as Adobe Acrobat or Apache Flex (among others), permission to handle data across domains that would otherwise be restricted due to the [Same-Origin Policy](/en-US/docs/Web/Security/Same-origin_policy).
    The `X-Permitted-Cross-Domain-Policies` header overrides such policy files so that clients still block unwanted requests.
- {{HTTPHeader("X-Powered-By")}}
  - : May be set by hosting environments or other frameworks and contains information about them while not providing any usefulness to the application or its visitors. Unset this header to avoid exposing potential vulnerabilities.
- {{HTTPHeader("X-XSS-Protection")}}
  - : Enables cross-site scripting filtering.

### Fetch metadata request headers

{{Glossary("Fetch metadata request header", "Fetch metadata request headers")}} provide information about the context from which the request originated. A server can use them to make decisions about whether a request should be allowed, based on where the request came from and how the resource will be used.

- {{HTTPHeader("Sec-Fetch-Site")}}
  - : Indicates the relationship between a request initiator's origin and its target's origin. It is a Structured Header whose value is a token with possible values `cross-site`, `same-origin`, `same-site`, and `none`.
- {{HTTPHeader("Sec-Fetch-Mode")}}
  - : Indicates the request's mode to a server. It is a Structured Header whose value is a token with possible values `cors`, `navigate`, `no-cors`, `same-origin`, and `websocket`.
- {{HTTPHeader("Sec-Fetch-User")}}
  - : Indicates whether or not a navigation request was triggered by user activation. It is a Structured Header whose value is a boolean so possible values are `?0` for false and `?1` for true.
- {{HTTPHeader("Sec-Fetch-Dest")}}
  - : Indicates the request's destination. It is a Structured Header whose value is a token with possible values `audio`, `audioworklet`, `document`, `embed`, `empty`, `font`, `image`, `manifest`, `object`, `paintworklet`, `report`, `script`, `serviceworker`, `sharedworker`, `style`, `track`, `video`, `worker`, and `xslt`.

The following request headers are not _strictly_ "fetch metadata request headers", but similarly provide information about the context of how a resource will be used. A server might use them to modify its caching behavior, or the information that is returned:

- {{HTTPHeader("Sec-Purpose")}}
  - : Indicates the purpose of the request, when the purpose is something other than immediate use by the user-agent. The header currently has one possible value, `prefetch`, which indicates that the resource is being fetched preemptively for a possible future navigation.
- {{HTTPHeader("Service-Worker-Navigation-Preload")}}
  - : A request header sent in preemptive request to {{domxref("Window/fetch", "fetch()")}} a resource during service worker boot. The value, which is set with {{domxref("NavigationPreloadManager.setHeaderValue()")}}, can be used to inform a server that a different resource should be returned than in a normal `fetch()` operation.

## Server-sent events

- {{HTTPHeader("Reporting-Endpoints")}}
  - : Response header used to specify server endpoints where the browser should send warning and error reports when using the [Reporting API](/en-US/docs/Web/API/Reporting_API).
- {{HTTPHeader("Report-To")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Response header used to specify server endpoints where the browser should send warning and error reports when using the [Reporting API](/en-US/docs/Web/API/Reporting_API).

## Transfer coding

- {{HTTPHeader("Transfer-Encoding")}}
  - : Specifies the form of encoding used to safely transfer the resource to the user.
- {{HTTPHeader("TE")}}
  - : Specifies the transfer encodings the user agent is willing to accept.
- {{HTTPHeader("Trailer")}}
  - : Allows the sender to include additional fields at the end of chunked message.

## WebSockets

Headers used by the [WebSockets API](/en-US/docs/Web/API/WebSockets_API) in the [WebSocket handshake](/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake):

- {{HTTPHeader("Sec-WebSocket-Accept")}}
  - : Response header that indicates that the server is willing to upgrade to a WebSocket connection.
- {{HTTPHeader("Sec-WebSocket-Extensions")}}
  - : In requests, this header indicates the WebSocket extensions supported by the client in preferred order.
    In responses, it indicates the extension selected by the server from the client's preferences.
- {{HTTPHeader("Sec-WebSocket-Key")}}
  - : Request header containing a key that verifies that the client explicitly intends to open a `WebSocket`.
- {{HTTPHeader("Sec-WebSocket-Protocol")}}
  - : In requests, this header indicates the sub-protocols supported by the client in preferred order.
    In responses, it indicates the sub-protocol selected by the server from the client's preferences.
- {{HTTPHeader("Sec-WebSocket-Version")}}
  - : In requests, this header indicates the version of the WebSocket protocol used by the client.
    In responses, it is sent only if the requested protocol version is not supported by the server, and lists the versions that the server supports.

## Other

- {{HTTPHeader("Alt-Svc")}}
  - : Used to list alternate ways to reach this service.
- {{HTTPHeader("Alt-Used")}}
  - : Used to identify the alternative service in use.
- {{HTTPHeader("Date")}}
  - : Contains the date and time at which the message was originated.
- {{HTTPHeader("Link")}}
  - : This entity-header field provides a means for serializing one or more links in HTTP headers. It is semantically equivalent to the HTML {{HTMLElement("link")}} element.
- {{HTTPHeader("Retry-After")}}
  - : Indicates how long the user agent should wait before making a follow-up request.
- {{HTTPHeader("Server-Timing")}}
  - : Communicates one or more metrics and descriptions for the given request-response cycle.
- {{HTTPHeader("Service-Worker")}}
  - : Included in fetches for a service worker's script resource.
    This header helps administrators log service worker script requests for monitoring purposes.
- {{HTTPHeader("Service-Worker-Allowed")}}
  - : Used to remove the [path restriction](/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers#why_is_my_service_worker_failing_to_register) by including this header [in the response of the Service Worker script](https://w3c.github.io/ServiceWorker/#service-worker-script-response).
- {{HTTPHeader("SourceMap")}}
  - : Links to a {{Glossary("source map")}} so that debuggers can step through original source code instead of generated or transformed code.
- {{HTTPHeader("Upgrade")}}
  - : This HTTP/1.1 (only) header can be used to upgrade an already established client/server connection to a different protocol (over the same transport protocol). For example, it can be used by a client to upgrade a connection from HTTP 1.1 to HTTP 2.0, or an HTTP or HTTPS connection into a WebSocket.
- {{HTTPHeader("Priority")}}
  - : Provides a hint from about the priority of a particular resource request on a particular connection.
    The value can be sent in a request to indicate the client priority, or in a response if the server chooses to reprioritize the request.

## Experimental headers

### Attribution reporting headers

The [Attribution Reporting API](/en-US/docs/Web/API/Attribution_Reporting_API) enables developers to measure conversions — for example when a user clicks an ad embedded on one site and then proceeds to purchase the item over on the vendor's site — and then access reports on those conversions. It does this without relying on third-party tracking cookies, instead relying on various headers to register **sources** and **triggers** that are matched to indicate a conversion.

- {{httpheader("Attribution-Reporting-Eligible")}}
  - : Used to indicate that the response corresponding to the current request is eligible to take part in attribution reporting, by registering either an attribution source or trigger.
- {{httpheader("Attribution-Reporting-Register-Source")}}
  - : Included as part of a response to a request that included an `Attribution-Reporting-Eligible` header, this is used to register an attribution source.
- {{httpheader("Attribution-Reporting-Register-Trigger")}}
  - : Included as part of a response to a request that included an `Attribution-Reporting-Eligible` header, this is used to register an attribution trigger.

### Client hints

HTTP [Client hints](/en-US/docs/Web/HTTP/Client_hints) are a set of request headers that provide useful information about the client such as device type and network conditions, and allow servers to optimize what is served for those conditions.

Servers proactively requests the client hint headers they are interested in from the client using {{HTTPHeader("Accept-CH")}}. The client may then choose to include the requested headers in subsequent requests.

- {{HTTPHeader("Accept-CH")}}
  - : Servers can advertise support for Client Hints using the `Accept-CH` header field or an equivalent HTML `<meta>` element with [`http-equiv`](/en-US/docs/Web/HTML/Element/meta#http-equiv) attribute.
- {{HTTPHeader("Critical-CH")}} {{experimental_inline}}
  - : Servers use `Critical-CH` along with {{HttpHeader("Accept-CH")}} to specify that accepted client hints are also [critical client hints](/en-US/docs/Web/HTTP/Client_hints#critical_client_hints).

The different categories of client hints are listed below.

#### User agent client hints

The [UA client hints](/en-US/docs/Web/HTTP/Client_hints#user-agent_client_hints) are request headers that provide information about the user agent, the platform/architecture it is running on, and user preferences set on the user agent or platform:

- {{HTTPHeader("Sec-CH-UA")}} {{experimental_inline}}
  - : User agent's branding and version.
- {{HTTPHeader("Sec-CH-UA-Arch")}} {{experimental_inline}}
  - : User agent's underlying platform architecture.
- {{HTTPHeader("Sec-CH-UA-Bitness")}} {{experimental_inline}}
  - : User agent's underlying CPU architecture bitness (for example "64" bit).
- {{HTTPHeader("Sec-CH-UA-Form-Factors")}} {{experimental_inline}}
  - : User agent's form-factors, describing how the user interacts with the user-agent.
- {{HTTPHeader("Sec-CH-UA-Full-Version")}} {{deprecated_inline}}
  - : User agent's full version string.
- {{HTTPHeader("Sec-CH-UA-Full-Version-List")}} {{experimental_inline}}
  - : Full version for each brand in the user agent's brand list.
- {{HTTPHeader("Sec-CH-UA-Mobile")}} {{experimental_inline}}
  - : User agent is running on a mobile device or, more generally, prefers a "mobile" user experience.
- {{HTTPHeader("Sec-CH-UA-Model")}} {{experimental_inline}}
  - : User agent's device model.
- {{HTTPHeader("Sec-CH-UA-Platform")}} {{experimental_inline}}
  - : User agent's underlying operation system/platform.
- {{HTTPHeader("Sec-CH-UA-Platform-Version")}} {{experimental_inline}}
  - : User agent's underlying operation system version.
- {{HTTPHeader("Sec-CH-UA-WoW64")}} {{experimental_inline}}
  - : Whether or not the user agent binary is running in 32-bit mode on 64-bit Windows.
- {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}} {{experimental_inline}}
  - : User's preference of dark or light color scheme.
- {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}} {{experimental_inline}}
  - : User's preference to see fewer animations and content layout shifts.
- {{HTTPHeader("Sec-CH-Prefers-Reduced-Transparency")}} {{experimental_inline}}
  - : Request header indicates the user agent's preference for reduced transparency.

> [!NOTE]
> User-agent client hints are not available inside [fenced frames](/en-US/docs/Web/API/Fenced_frame_API) because they rely on [permissions policy](/en-US/docs/Web/HTTP/Permissions_Policy) delegation, which could be used to leak data.

#### Device client hints

- {{HTTPHeader("Content-DPR")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Response header used to confirm the image device to pixel ratio (DPR) in requests where the screen {{HTTPHeader("DPR")}} client hint was used to select an image resource.
- {{HTTPHeader("Device-Memory")}}
  - : Approximate amount of available client RAM memory. This is part of the [Device Memory API](/en-US/docs/Web/API/Device_Memory_API).
- {{HTTPHeader("DPR")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Request header that provides the client device pixel ratio (the number of physical {{glossary("device pixel", "device pixels")}} for each {{Glossary("CSS pixel")}}).
- {{HTTPHeader("Viewport-Width")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Request header provides the client's layout viewport width in {{Glossary("CSS pixel","CSS pixels")}}.
- {{HTTPHeader("Width")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Request header indicates the desired resource width in physical pixels (the intrinsic size of an image).

#### Network client hints

Network client hints allow a server to choose what information is sent based on the user choice and network bandwidth and latency.

- {{HTTPHeader("Downlink")}} {{experimental_inline}}
  - : Approximate bandwidth of the client's connection to the server, in Mbps. This is part of the [Network Information API](/en-US/docs/Web/API/Network_Information_API).
- {{HTTPHeader("ECT")}} {{experimental_inline}}
  - : The {{Glossary("effective connection type")}} ("network profile") that best matches the connection's latency and bandwidth. This is part of the [Network Information API](/en-US/docs/Web/API/Network_Information_API).
- {{HTTPHeader("RTT")}} {{experimental_inline}}
  - : Application layer round trip time (RTT) in milliseconds, which includes the server processing time. This is part of the [Network Information API](/en-US/docs/Web/API/Network_Information_API).
- {{HTTPHeader("Save-Data")}} {{experimental_inline}}
  - : A string `on` that indicates the user agent's preference for reduced data usage.

### Privacy

- {{HTTPHeader("DNT")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Request header that indicates the user's tracking preference (Do Not Track).
    Deprecated in favor of Global Privacy Control (GPC), which is communicated to servers using the {{HTTPHeader("Sec-GPC")}} header, and accessible to clients via {{domxref("navigator.globalPrivacyControl")}}.
- {{HTTPHeader("Tk")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Response header that indicates the tracking status that applied to the corresponding request. Used in conjunction with DNT.
- {{HTTPHeader("Sec-GPC")}} {{non-standard_inline}} {{experimental_inline}}
  - : Indicates whether the user consents to a website or service selling or sharing their personal information with third parties.

### Security

- {{HTTPHeader("Origin-Agent-Cluster")}} {{experimental_inline}}
  - : Response header used to indicate that the associated {{domxref("Document")}} should be placed in an _origin-keyed [agent cluster](https://tc39.es/ecma262/#sec-agent-clusters)_.
    This isolation allows user agents to allocate implementation-specific resources for agent clusters, such as processes or threads, more efficiently.

### Server-sent events

- {{HTTPHeader("NEL")}} {{experimental_inline}}
  - : Defines a mechanism that enables developers to declare a network error reporting policy.

### Topics API

The Topics API provides a mechanism for developers to implement use cases such as interest-based advertising (IBA).
See the [Topics API](/en-US/docs/Web/API/Topics_API) documentation for more information.

- {{HTTPHeader("Observe-Browsing-Topics")}} {{experimental_inline}} {{non-standard_inline}}
  - : Response header used to mark topics of interest inferred from a calling site's URL as observed in the response to a request generated by a [feature that enables the Topics API](/en-US/docs/Web/API/Topics_API/Using#what_api_features_enable_the_topics_api).
- {{HTTPHeader("Sec-Browsing-Topics")}} {{experimental_inline}} {{non-standard_inline}}
  - : Request header that sends the selected topics for the current user along with the associated request, which are used by an ad tech platform to choose a personalized ad to display.

### Other

- {{HTTPHeader("Accept-Signature")}} {{experimental_inline}}
  - : A client can send the [`Accept-Signature`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#name-the-accept-signature-header) header field to indicate intention to take advantage of any available signatures and to indicate what kinds of signatures it supports.
- {{HTTPHeader("Early-Data")}} {{experimental_inline}}
  - : Indicates that the request has been conveyed in TLS early data.
- {{HTTPHeader("Set-Login")}} {{experimental_inline}}
  - : Response header sent by a federated identity provider (IdP) to set its login status, meaning whether any users are logged into the IdP on the current browser or not.
    This is stored by the browser and used by the [FedCM API](/en-US/docs/Web/API/FedCM_API).
- {{HTTPHeader("Signature")}} {{experimental_inline}}
  - : The [`Signature`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#name-the-signature-header) header field conveys a list of signatures for an exchange, each one accompanied by information about how to determine the authority of and refresh that signature.
- {{HTTPHeader("Signed-Headers")}} {{experimental_inline}}
  - : The [`Signed-Headers`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#name-the-signed-headers-header) header field identifies an ordered list of response header fields to include in a signature.
- {{HTTPHeader("Speculation-Rules")}} {{experimental_inline}}
  - : Provides a list of URLs pointing to text resources containing [speculation rule](/en-US/docs/Web/API/Speculation_Rules_API) JSON definitions. When the response is an HTML document, these rules will be added to the document's speculation rule set.
- {{HTTPHeader("Supports-Loading-Mode")}} {{experimental_inline}}
  - : Set by a navigation target to opt-in to using various higher-risk loading modes. For example, cross-origin, same-site [prerendering](/en-US/docs/Web/API/Speculation_Rules_API#using_prerendering) requires a `Supports-Loading-Mode` value of `credentialed-prerender`.

## Non-standard headers

- {{HTTPHeader("X-Forwarded-For")}} {{non-standard_inline}}
  - : Identifies the originating IP addresses of a client connecting to a web server through an HTTP proxy or a load balancer.
- {{HTTPHeader("X-Forwarded-Host")}} {{non-standard_inline}}
  - : Identifies the original host requested that a client used to connect to your proxy or load balancer.
- {{HTTPHeader("X-Forwarded-Proto")}} {{non-standard_inline}}
  - : Identifies the protocol (HTTP or HTTPS) that a client used to connect to your proxy or load balancer.
- {{HTTPHeader("X-DNS-Prefetch-Control")}} {{non-standard_inline}}
  - : Controls DNS prefetching, a feature by which browsers proactively perform domain name resolution on both links that the user may choose to follow as well as URLs for items referenced by the document, including images, CSS, JavaScript, and so forth.
- {{HTTPHeader("X-Robots-Tag")}} {{non-standard_inline}}
  - : The [`X-Robots-Tag`](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag) HTTP header is used to indicate how a web page is to be indexed within public search engine results. The header is effectively equivalent to `<meta name="robots" content="…">`.

## Deprecated headers

- {{HTTPHeader("Pragma")}} {{deprecated_inline}}
  - : Implementation-specific header that may have various effects anywhere along the request-response chain. Used for backwards compatibility with HTTP/1.0 caches where the `Cache-Control` header is not yet present.
- {{HTTPHeader("Warning")}} {{deprecated_inline}}
  - : General warning information about possible problems.

## Contributing

You can help by [writing new entries](/en-US/docs/MDN/Writing_guidelines/Howto/Document_an_HTTP_header) or improving the existing ones.

<!-- Check https://github.com/mdn/content/issues/1458 for known missing pages -->

## See also

- [Wikipedia page on List of HTTP headers](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields)
- [IANA registry](https://www.iana.org/assignments/http-fields/http-fields.xhtml)
- [HTTP Working Group](https://httpwg.org/specs/)

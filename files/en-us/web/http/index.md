---
title: HTTP
slug: Web/HTTP
page-type: landing-page
---

{{HTTPSidebar}}

**_Hypertext Transfer Protocol (HTTP)_** is an [application-layer](https://en.wikipedia.org/wiki/Application_Layer) protocol for transmitting hypermedia documents, such as HTML. It was designed for communication between web browsers and web servers, but it can also be used for other purposes. HTTP follows a classical [client-server model](https://en.wikipedia.org/wiki/Client%E2%80%93server_model), with a client opening a connection to make a request, then waiting until it receives a response. HTTP is a [stateless protocol](https://en.wikipedia.org/wiki/Stateless_protocol), meaning that the server does not keep any data (state) between two requests.

## Tutorials

Learn how to use HTTP with guides and tutorials.

- [Overview of HTTP](/en-US/docs/Web/HTTP/Overview)
  - : The basic features of the client-server protocol: what it can do and its intended uses.
- [HTTP Cache](/en-US/docs/Web/HTTP/Caching)
  - : Caching is very important for fast websites. This article describes different methods of caching and how to use HTTP Headers to control them.
- [HTTP Cookies](/en-US/docs/Web/HTTP/Cookies)
  - : How cookies work is defined by [RFC 6265](https://datatracker.ietf.org/doc/html/rfc6265). When serving an HTTP request, a server can send a `Set-Cookie` HTTP header with the response. The client then returns the cookie's value with every request to the same server in the form of a `Cookie` request header. The cookie can also be set to expire on a certain date, or restricted to a specific domain and path.
- [Cross-Origin Resource Sharing (CORS)](/en-US/docs/Web/HTTP/CORS)
  - : **Cross-site HTTP requests** are HTTP requests for resources from a **different domain** than the domain of the resource making the request. For instance, an HTML page from Domain A (`http://domaina.example/`) makes a request for an image on Domain B (`http://domainb.foo/image.jpg`) via the `img` element. Web pages today very commonly load cross-site resources, including CSS stylesheets, images, scripts, and other resources. CORS allows web developers to control how their site reacts to cross-site requests.
- [HTTP Client Hints](/en-US/docs/Web/HTTP/Client_hints)
  - : **Client Hints** are a set of response headers that a server can use to proactively request information from a client about the device, network, user, and user-agent-specific preferences.
    The server can then determine which resources to send, based on the information that the client chooses to provide.
- [Evolution of HTTP](/en-US/docs/Web/HTTP/Basics_of_HTTP/Evolution_of_HTTP)
  - : A brief description of the changes between the early versions of HTTP, to the modern HTTP/2, the emergent HTTP/3 and beyond.
- [Mozilla web security guidelines](https://infosec.mozilla.org/guidelines/web_security)
  - : A collection of tips to help operational teams with creating secure web applications.
- [HTTP Messages](/en-US/docs/Web/HTTP/Messages)
  - : Describes the type and structure of the different kind of messages of HTTP/1.x and HTTP/2.
- [A typical HTTP session](/en-US/docs/Web/HTTP/Session)
  - : Shows and explains the flow of a usual HTTP session.
- [Connection management in HTTP/1.x](/en-US/docs/Web/HTTP/Connection_management_in_HTTP_1.x)
  - : Describes the three connection management models available in HTTP/1.x, their strengths, and their weaknesses.

## Reference

Browse through detailed HTTP reference documentation.

- [HTTP Headers](/en-US/docs/Web/HTTP/Headers)
  - : HTTP message headers are used to describe a resource, or the behavior of the server or the client. Header fields are maintained in an [IANA HTTP Field Name Registry](https://www.iana.org/assignments/http-fields/http-fields.xhtml), which includes [information about their status](https://github.com/protocol-registries/http-fields?tab=readme-ov-file#choosing-the-right-status), which may be "permanent" (standards-defined), "provisional" (new), "deprecated" (use not recommended), or "obsolete" (no longer in use).
- [HTTP Request Methods](/en-US/docs/Web/HTTP/Methods)
  - : The different operations that can be done with HTTP: {{HTTPMethod("GET")}}, {{HTTPMethod("POST")}}, and also less common requests like {{HTTPMethod("OPTIONS")}}, {{HTTPMethod("DELETE")}}, or {{HTTPMethod("TRACE")}}.
- [HTTP Status Response Codes](/en-US/docs/Web/HTTP/Status)
  - : HTTP response codes indicate whether a specific HTTP request has been successfully completed. Responses are grouped in five classes: informational responses, successful responses, redirections, client errors, and servers errors.
- [CSP directives](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy)
  - : The {{HTTPHeader("Content-Security-Policy")}} response header fields allows website administrators to control resources the user agent is allowed to load for a given page. With a few exceptions, policies mostly involve specifying server origins and script endpoints.

## Tools & resources

Helpful tools and resources for understanding and debugging HTTP.

- [Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html)
  - : [Network monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html)
- [HTTP Observatory](/en-US/observatory)
  - : A project designed to help developers, system administrators, and security professionals configure their sites safely and securely.
- [RedBot](https://redbot.org/)
  - : Tools to check your cache-related headers.
- [How Browsers Work (2011)](https://web.dev/articles/howbrowserswork)
  - : A very comprehensive article on browser internals and request flow through HTTP protocol.

---
title: HTTP
slug: Web/HTTP
page-type: landing-page
---

{{HTTPSidebar}}

**_Hypertext Transfer Protocol (HTTP)_** is an [application-layer](https://en.wikipedia.org/wiki/Application_Layer) protocol for transmitting hypermedia documents, such as HTML.
It was designed for communication between web browsers and web servers, but it can also be used for other purposes.
HTTP follows a classical [client-server model](https://en.wikipedia.org/wiki/Client%E2%80%93server_model), with a client opening a connection to make a request, then waiting until it receives a response from the server.
HTTP is a [stateless protocol](https://en.wikipedia.org/wiki/Stateless_protocol), meaning that the server does not keep any data (state) between two requests, although there are additions to this model (cookies) over the years that effectively add state.

## References

The HTTP reference documentation contains detailed information about headers, request methods, status responses, and CSP directives.

- [HTTP headers](/en-US/docs/Web/HTTP/Headers)
  - : HTTP message headers are used to send metadata about a resource and to describe the behavior of the server or the client.
- [HTTP request methods](/en-US/docs/Web/HTTP/Methods)
  - : The different operations that can be done with HTTP: {{HTTPMethod("GET")}}, {{HTTPMethod("POST")}}, and also less common requests like {{HTTPMethod("OPTIONS")}}, {{HTTPMethod("DELETE")}}, or {{HTTPMethod("TRACE")}}.
- [HTTP status response codes](/en-US/docs/Web/HTTP/Status)
  - : HTTP response codes indicate whether a specific HTTP request has been successfully completed.
    Responses are grouped in five classes: informational responses, successful responses, redirections, client errors, and servers errors.
- [CSP directives](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy)
  - : The {{HTTPHeader("Content-Security-Policy")}} response header fields allows website administrators to control resources the user agent is allowed to load for a given page.
    With a few exceptions, policies mostly involve specifying server origins and script endpoints.

## HTTP concepts

HTTP is an extensible protocol that relies on concepts like resources and Uniform Resource Identifiers (URIs), simple message structure, and client-server communication model.
On top of these concepts, numerous extensions have been developed over the years that add updated functionality and semantics with additional HTTP methods and headers.

- [Overview of HTTP](/en-US/docs/Web/HTTP/Overview)
  - : The basic features of HTTP, what it can do and its intended uses in web architecture, including its position in the protocol stack.
- [A typical HTTP session](/en-US/docs/Web/HTTP/Session)
  - : Shows and explains the flow of a usual HTTP session, from establishing a connection, sending a request, to receiving a response.
- [HTTP messages](/en-US/docs/Web/HTTP/Messages)
  - : HTTP messages transmitted as requests and responses have a defined structure.
    This article describes this general structure, its purpose, and the different types of messages.
- [URIs](/en-US/docs/Web/URI)
  - : URIs are used to describe and locate resources on the web and are an essential component in HTTP requests.
- [MIME types](/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types)
  - : Since HTTP/1.0, different types of content can be transmitted.
    This article explains how this is accomplished using the {{HTTPHeader("Content-Type")}} header and the MIME standard.
- [Compression in HTTP](/en-US/docs/Web/HTTP/Compression)
  - : Browsers and servers compress their messages before sending them over the network to reduce the amount of data that needs to be transmitted, improving transfer speed and bandwidth utilization.
- [Connection management in HTTP/1.x](/en-US/docs/Web/HTTP/Connection_management_in_HTTP_1.x)
  - : HTTP/1.1 was the first version of HTTP to support persistent connection and pipelining.
    This article explains both concepts.
- [Content negotiation](/en-US/docs/Web/HTTP/Content_negotiation)
  - : HTTP defines a set of message headers, starting with [`Accept`](/en-US/docs/Web/HTTP/Headers/Accept) as a way for a browser to announce the format, language, or encoding it prefers.
    This article explains how this advertisement happens, how the server is expected to react, and how it chooses the most adequate response to a request.
- [Evolution of HTTP](/en-US/docs/Web/HTTP/Basics_of_HTTP/Evolution_of_HTTP)
  - : HTTP was created in the early 1990s and has been extended several times.
    This article goes through its history and describes HTTP/0.9, HTTP/1.0, HTTP/1.1, through HTTP/2 and HTTP/3, as well as novelties introduced over the years.

## Practical and topical guides

Find out about common communication patterns and methods for improving security, resource usage and network efficiency.

- [HTTP caching](/en-US/docs/Web/HTTP/Caching)
  - : Caching is a highly important mechanism for delivering fast experiences on the Web and for efficient use of resources.
    This article describes different methods of caching and how to use HTTP headers to control them.
- [HTTP authentication](/en-US/docs/Web/HTTP/Authentication)
  - : TODO
- [HTTP conditional requests](/en-US/docs/Web/HTTP/Conditional_requests)
  - : TODO
- [Using HTTP cookies](/en-US/docs/Web/HTTP/Cookies)
  - : How cookies work is defined by [RFC 6265](https://datatracker.ietf.org/doc/html/rfc6265). When serving an HTTP request, a server can send a `Set-Cookie` HTTP header with the response. The client then returns the cookie's value with every request to the same server in the form of a `Cookie` request header. The cookie can also be set to expire on a certain date, or restricted to a specific domain and path.
- [HTTP Client hints](/en-US/docs/Web/HTTP/Client_hints)
  - : Client Hints are a set of response headers that a server can use to proactively request information from a client about the device, network, user, and user-agent-specific preferences.
    The server can then determine which resources to send, based on the information that the client chooses to provide.
- [Network Error Logging](/en-US/docs/Web/HTTP/Network_Error_Logging) {{experimental_inline}}
  - : Network Error Logging is a mechanism that can be configured via the `NEL` HTTP response header.
    This experimental header allows websites and applications to opt-in to receive reports about failed (or even successful) network fetches from supporting browsers.
- [Browser detection using the user agent](/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent)
  - : It's very rarely a good idea to use user agent sniffing to detect a browser, but there are edge cases that require it.
    This document will guide you in doing this as correctly as possible when this is necessary, with an emphasis on considerations before embarking on this route.
- [Configuring servers for Ogg media](/en-US/docs/Web/HTTP/Configuring_servers_for_Ogg_media)
  - : TODO

### Security and privacy

- [Mozilla web security guidelines](https://infosec.mozilla.org/guidelines/web_security)
  - : A collection of tips to help operational teams with creating secure web applications.
- [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy)
  - : Permissions Policy provides mechanisms for web developers to explicitly declare what functionality can and cannot be used on a website.
    You define a set of "policies" that restrict what APIs the site's code can access or modify the browser's default behavior for certain features.
- [Cross-Origin Resource Sharing (CORS)](/en-US/docs/Web/HTTP/CORS)
  - : Cross-site HTTP requests are requests for resources from a different domain than that of the resource making the request.
    Web pages today very commonly load cross-site resources, including CSS stylesheets, images, scripts, and other resources.
    For example, an HTML page from 'Domain A' (`http://domaina.example/`) makes a request for an image on 'Domain B' (`http://domainb.foo/image.jpg`) via the `img` element.
    CORS allows web developers to control how their site reacts to such cross-site requests.
- [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/CSP)
  - : CSP uses the {{HTTPHeader("Content-Security-Policy")}} response header so that website administrator may control resources the user agent is allowed to load for a given page.
    This method helps to detect and mitigate certain types of attacks, including Cross-Site Scripting (XSS) and data injection attacks.
- [Cross-Origin Resource Policy (CORP)](/en-US/docs/Web/HTTP/Cross-Origin_Resource_Policy)
  - : CORP lets websites and applications opt in to protection against certain requests from other origins (such as those issued with elements like `<script>` and `<img>`), to mitigate speculative side-channel attacks.

## Tools & resources

Helpful tools and resources for understanding and debugging HTTP.

- [Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html)
  - : [Network monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html)
- [HTTP Observatory](/en-US/observatory)
  - : A project designed to help developers, system administrators, and security professionals configure their sites safely and securely.
- [RedBot](https://redbot.org/)
  - : Tools to check your cache-related headers.
- [nghttp2](https://github.com/nghttp2/nghttp2)
  - : An HTTP/2 client, server and proxy implementation written in C with load test and benchmarking tools and an HPACK encoder and decoder.
- [curl](https://github.com/curl/curl)
  - : A command-line tool for transferring data specified with URL syntax.
    Supports HTTP, HTTPS, WS, WSS, among many other protocols.
- [How Browsers Work (2011)](https://web.dev/articles/howbrowserswork)
  - : A very comprehensive article on browser internals and request flow through HTTP protocol.

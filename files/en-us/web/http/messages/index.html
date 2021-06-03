---
title: HTTP Messages
slug: Web/HTTP/Messages
tags:
  - Guide
  - HTTP
  - WebMechanics
---
<div>{{HTTPSidebar}}</div>

<p class="summary">HTTP messages are how data is exchanged between a server and a client. There are two types of messages: <em>requests</em> sent by the client to trigger an action on the server, and <em>responses</em>, the answer from the server.</p>

<p>HTTP messages are composed of textual information encoded in ASCII, and span over multiple lines. In HTTP/1.1, and earlier versions of the protocol, these messages were openly sent across the connection. In HTTP/2, the once human-readable message is now divided up into HTTP frames, providing optimization and performance improvements.</p>

<p>Web developers, or webmasters, rarely craft these textual HTTP messages themselves: software, a Web browser, proxy, or Web server, perform this action. They provide HTTP messages through config files (for proxies or servers), APIs (for browsers), or other interfaces.</p>

<p><img alt="From a user-, script-, or server- generated event, an HTTP/1.x msg is generated, and if HTTP/2 is in use, it is binary framed into an HTTP/2 stream, then sent." src="httpmsg2.png"></p>

<p>The HTTP/2 binary framing mechanism has been designed to not require any alteration of the APIs or config files applied: it is broadly transparent to the user.</p>

<p>HTTP requests, and responses, share similar structure and are composed of:</p>

<ol>
 <li>A <em>start-line</em> describing the requests to be implemented, or its status of whether successful or a failure. This start-line is always a single line.</li>
 <li>An optional set of <em>HTTP headers</em> specifying the request, or describing the body included in the message.</li>
 <li>A blank line indicating all meta-information for the request has been sent.</li>
 <li>An optional <em>body</em> containing data associated with the request (like content of an HTML form), or the document associated with a response. The presence of the body and its size is specified by the start-line and HTTP headers.</li>
</ol>

<p>The start-line and HTTP headers of the HTTP message are collectively known as the <em>head</em> of the requests, whereas its payload is known as the <em>body</em>.</p>

<p><img alt="Requests and responses share a common structure in HTTP" src="httpmsgstructure2.png"></p>

<h2 id="HTTP_Requests">HTTP Requests</h2>

<h3 id="Start_line">Start line</h3>

<p>HTTP requests are messages sent by the client to initiate an action on the server. Their <em>start-line</em> contain three elements:</p>

<ol>
 <li>An <em><a href="/en-US/docs/Web/HTTP/Methods">HTTP method</a></em>, a verb (like {{HTTPMethod("GET")}}, {{HTTPMethod("PUT")}} or {{HTTPMethod("POST")}}) or a noun (like {{HTTPMethod("HEAD")}} or {{HTTPMethod("OPTIONS")}}), that describes the action to be performed. For example, <code>GET</code> indicates that a resource should be fetched or <code>POST</code> means that data is pushed to the server (creating or modifying a resource, or generating a temporary document to send back).</li>
 <li>The <em>request target</em>, usually a {{glossary("URL")}}, or the absolute path of the protocol, port, and domain are usually characterized by the request context. The format of this request target varies between different HTTP methods. It can be
  <ul>
   <li>An absolute path, ultimately followed by a <code>'?'</code> and query string. This is the most common form, known as the <em>origin form</em>, and is used with <code>GET</code>, <code>POST</code>, <code>HEAD</code>, and <code>OPTIONS</code> methods.<br>
    <code>POST / HTTP/1.1<br>
    GET /background.png HTTP/1.0<br>
    HEAD /test.html?query=alibaba HTTP/1.1<br>
    OPTIONS /anypage.html HTTP/1.0</code></li>
   <li>A complete URL, known as the <em>absolute form</em>, is mostly used with <code>GET</code> when connected to a proxy.<br>
    <code>GET https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages HTTP/1.1</code></li>
   <li>The authority component of a URL, consisting of the domain name and optionally the port (prefixed by a <code>':'</code>), is called the <em>authority form</em>. It is only used with <code>CONNECT</code> when setting up an HTTP tunnel.<br>
    <code>CONNECT developer.mozilla.org:80 HTTP/1.1</code></li>
   <li>The <em>asterisk form</em>, a simple asterisk (<code>'*'</code>) is used with <code>OPTIONS</code>, representing the server as a whole.<br>
    <code>OPTIONS * HTTP/1.1</code></li>
  </ul>
 </li>
 <li>The <em>HTTP version</em>, which defines the structure of the remaining message, acting as an indicator of the expected version to use for the response.</li>
</ol>

<h3 id="Headers">Headers</h3>

<p><a href="/en-US/docs/Web/HTTP/Headers">HTTP headers</a> from a request follow the same basic structure of an HTTP header: a case-insensitive string followed by a colon (<code>':'</code>) and a value whose structure depends upon the header. The whole header, including the value, consist of one single line, which can be quite long.</p>

<p>Many different headers can appear in requests. They can be divided in several groups:</p>

<ul>
 <li>{{glossary("General header", "General headers")}}, like {{HTTPHeader("Via")}}, apply to the message as a whole.</li> 
 <li>{{glossary("Request header", "Request headers")}}, like {{HTTPHeader("User-Agent")}} or {{HTTPHeader("Accept")}}, modify the request by specifying it further (like {{HTTPHeader("Accept-Language")}}), by giving context (like {{HTTPHeader("Referer")}}), or by conditionally restricting it (like {{HTTPHeader("If-None")}}).</li>
 <li>{{glossary("Representation header", "Representation headers")}} like {{HTTPHeader("Content-Type")}} that describe the original format of the message data and any encoding applied (only present if the message has a body).</li>
</ul>

<p><img alt="Example of headers in an HTTP request" src="http_request_headers3.png"></p>

<h3 id="Body">Body</h3>

<p>The final part of the request is its body. Not all requests have one: requests fetching resources, like <code>GET</code>, <code>HEAD</code>, <code>DELETE</code>, or <code>OPTIONS</code>, usually don't need one. Some requests send data to the server in order to update it: as often the case with <code>POST</code> requests (containing HTML form data).</p>

<p>Bodies can be broadly divided into two categories:</p>

<ul>
 <li>Single-resource bodies, consisting of one single file, defined by the two headers: {{HTTPHeader("Content-Type")}} and {{HTTPHeader("Content-Length")}}.</li>
 <li><a href="/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types#multipartform-data">Multiple-resource bodies</a>, consisting of a multipart body, each containing a different bit of information. This is typically associated with <a href="/en-US/docs/Learn/Forms">HTML Forms</a>.</li>
</ul>

<h2 id="HTTP_Responses">HTTP Responses</h2>

<h3 id="Status_line">Status line</h3>

<p>The start line of an HTTP response, called the <em>status line</em>, contains the following information:</p>

<ol>
 <li>The <em>protocol version</em>, usually <code>HTTP/1.1</code>.</li>
 <li>A <em>status code</em>, indicating success or failure of the request. Common status codes are {{HTTPStatus("200")}}, {{HTTPStatus("404")}}, or {{HTTPStatus("302")}}</li>
 <li>A <em>status text</em>. A brief, purely informational, textual description of the status code to help a human understand the HTTP message.</li>
</ol>

<p>A typical status line looks like: <code>HTTP/1.1 404 Not Found</code>.</p>

<h3 id="Headers_2">Headers</h3>

<p><a href="/en-US/docs/Web/HTTP/Headers">HTTP headers</a> for responses follow the same structure as any other header: a case-insensitive string followed by a colon (<code>':'</code>) and a value whose structure depends upon the type of the header. The whole header, including its value, presents as a single line.</p>

<p>Many different headers can appear in responses. These can be divided into several groups:</p>

<ul>
 <li>{{glossary("General header", "General headers")}}, like {{HTTPHeader("Via")}}, apply to the whole message.</li> 
 <li>{{glossary("Response header", "Response headers")}}, like {{HTTPHeader("Vary")}} and {{HTTPHeader("Accept-Ranges")}}, give additional information about the server which doesn't fit in the status line.</li>  
 <li>{{glossary("Representation header", "Representation headers")}} like {{HTTPHeader("Content-Type")}} that describe the original format of the message data and any encoding applied (only present if the message has a body).</li>
</ul>

<p><img alt="Example of headers in an HTTP response" src="http_response_headers3.png"></p>

<h3 id="Body_2">Body</h3>

<p>The last part of a response is the body. Not all responses have one: responses with a status code that sufficiently answers the request without the need for corresponding payload (like {{HTTPStatus("201")}} <strong><code>Created</code></strong> or {{HTTPStatus("204")}} <strong><code>No Content</code></strong>) usually don't.</p>

<p>Bodies can be broadly divided into three categories:</p>

<ul>
 <li>Single-resource bodies, consisting of a single file of known length, defined by the two headers: {{HTTPHeader("Content-Type")}} and {{HTTPHeader("Content-Length")}}.</li>
 <li>Single-resource bodies, consisting of a single file of unknown length, encoded by chunks with {{HTTPHeader("Transfer-Encoding")}} set to <code>chunked</code>.</li>
 <li><a href="/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types#multipartform-data">Multiple-resource bodies</a>, consisting of a multipart body, each containing a different section of information. These are relatively rare.</li>
</ul>

<h2 id="HTTP2_Frames">HTTP/2 Frames</h2>

<p>HTTP/1.x messages have a few drawbacks for performance:</p>

<ul>
 <li>Headers, unlike bodies, are uncompressed.</li>
 <li>Headers are often very similar from one message to the next one, yet still repeated across connections.</li>
 <li>No multiplexing can be done. Several connections need opening on the same server: and warm TCP connections are more efficient than cold ones.</li>
</ul>

<p>HTTP/2 introduces an extra step: it divides HTTP/1.x messages into frames which are embedded in a stream. Data and header frames are separated, this allows header compression. Several streams can be combined together, a process called <em>multiplexing</em>, allowing more efficient use of underlying TCP connections.</p>

<p><img alt="HTTP/2 modify the HTTP message to divide them in frames (part of a single stream), allowing for more optimization." src="binary_framing2.png"></p>

<p>HTTP frames are now transparent to Web developers. This is an additional step in HTTP/2, between HTTP/1.1 messages and the underlying transport protocol. No changes are needed in the APIs used by Web developers to utilize HTTP frames; when available in both the browser and the server, HTTP/2 is switched on and used.</p>

<h2 id="Conclusion">Conclusion</h2>

<p>HTTP messages are the key in using HTTP; their structure is simple, and they are highly extensible. The HTTP/2 framing mechanism adds a new intermediate layer between the HTTP/1.x syntax and the underlying transport protocol, without fundamentally modifying it: building upon proven mechanisms.</p>

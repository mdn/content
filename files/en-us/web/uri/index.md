---
title: URIs
slug: Web/URI
page-type: landing-page
spec-urls: https://www.rfc-editor.org/rfc/rfc3986.html
sidebar: urlsidebar
---

**Uniform Resource Identifiers (URI)** are used to identify "resources" on the web.
URIs are commonly used as targets of [HTTP](/en-US/docs/Web/HTTP) requests, in which case the URI represents a location for a physical resource, such as a document, a photo, binary data.
The most common type of URI is a Uniform Resource Locator ({{Glossary("URL")}}), which is known as the _web address_.

URIs can be used to trigger behaviors other than fetching a resource, including opening an email client, sending text messages, or executing JavaScript, when used in other places such as the [`href`](/en-US/docs/Web/HTML/Element/a#href) of an HTML `<a>` link.

## URLs and URNs

### URLs

Any of the following URLs can be typed into your browser's address bar to tell it to load the associated document (resource):

```url
https://developer.mozilla.org
https://developer.mozilla.org/en-US/docs/Learn_web_development/
https://developer.mozilla.org/en-US/search?q=URL
```

A URL is composed of different parts, some mandatory and others optional. A more complex example might look like this:

```url
http://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument
```

### URNs

A Uniform Resource Name (URN) is a URI that identifies a resource by name in a particular namespace.

```url
urn:isbn:9780141036144
urn:ietf:rfc:7230
```

The two URNs correspond to

- the book Nineteen Eighty-Four by George Orwell,
- the IETF specification 7230, Hypertext Transfer Protocol (HTTP/1.1): Message Syntax and Routing.

## Syntax of Uniform Resource Identifiers (URIs)

We will break down the following URL into its components:

```url
http://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument
```

### Scheme

![Protocol](mdn-url-protocol@x2.png)

`http://` is the [_scheme_](/en-US/docs/Web/URI/Reference/Schemes) of the URL, indicating which protocol the browser must use. Usually it is the HTTP protocol or its secured version, HTTPS. The Web requires one of these two, but browsers also know how to handle other protocols such as `mailto:` (to open a mail client) or `ftp:` to handle a file transfer, so don't be surprised if you see such protocols. The [schemes](/en-US/docs/Web/URI/Reference/Schemes) reference provides a list of the most common schemes, and documentation for some of them.

When using URLs in {{Glossary("HTML")}} content, you should generally only use a few of these URL schemes. When referring to subresources — that is, files that are being loaded as part of a larger document — you should only use the HTTP and HTTPS schemes. Increasingly, browsers are removing support for using FTP to load subresources, for security reasons.

FTP is still acceptable at the top level (such as typed directly into the browser's URL bar, or the target of a link), although some browsers may delegate loading FTP content to another application.

### Authority

The URI [_authority_](/en-US/docs/Web/URI/Reference/Authority) is comprised of user info (optional and usually unspecified), the host name, and the port.

![Domain Name](mdn-url-domain@x2.png)

`www.example.com` is the _host name_ of the URI, indicating which Web server is being requested. Here, we use a domain name. It is also possible to directly use an {{Glossary("IP address")}}, but because it is less convenient, it is rare to do so, unless the server doesn't have a registered domain name.

![Port](mdn-url-port@x2.png)

`:80` is the _port_ of the URL, indicating the technical "gate" used to access the resources on the web server. It is usually omitted if the web server uses the standard ports of the HTTP protocol (80 for HTTP and 443 for HTTPS) to grant access to its resources. Otherwise, it is mandatory.

### Path

![Path to the file](mdn-url-path@x2.png)

`/path/to/myfile.html` is the _path_ of the URL, indicating the location of the resource on the web server. In the early days of the Web, this was an actual directory path to a physical location on the web server. Nowadays, web servers usually abstract this to an arbitrary location.

### Query

![Parameters](mdn-url-parameters@x2.png)

`?key1=value1&key2=value2` is the _query_ of the URL, which are extra parameters provided to the web server. The parameters are a list of key/value pairs prefixed by the `?` symbol, and separated with the `&` symbol. These can be used to provide additional context about the resource being requested. Each resource location can have its own rules regarding parameters, and the only reliable way to know how specific parameters are handled is by asking the owner of the server, such as reading its documentation.

### Fragment

![Anchor](mdn-url-anchor@x2.png)

`#SomewhereInTheDocument` is the [_fragment_](/en-US/docs/Web/URI/Reference/Fragment) of the URL, which is an anchor to another part of the resource itself. An anchor represents a sort of "bookmark" inside the resource, giving the browser the directions to show the content located at that "bookmarked" spot. On an HTML document, for example, the browser will scroll to the point where the anchor is defined; on a video or audio document, the browser will try to go to the time the anchor represents. It is worth noting that the part after the #, also known as the fragment identifier, is never sent to the server with the request.

There's a special [text fragment](/en-US/docs/Web/URI/Reference/Fragment/Text_fragments) feature that allows you to link to a specific part of a web page identified by its text content.

## Examples

```url
https://developer.mozilla.org/en-US/docs/Learn
tel:+1-816-555-1212
git@github.com:mdn/browser-compat-data.git
ftp://example.org/resource.txt
urn:isbn:9780141036144
mailto:help@supercyberhelpdesk.info
```

## Specifications

{{Specifications}}

## See also

- [What is a URL?](/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL)

---
title: URL
slug: Web/API/URL
tags:
  - API
  - Address
  - Domain
  - Interface
  - Location
  - Networking
  - Reference
  - URI
  - URL
  - URL API
  - Web
  - hostname
  - href
  - origin
  - Polyfill
browser-compat: api.URL
---
{{APIRef("URL API")}}

The **`URL`** interface is used to parse, construct, normalize, and encode {{glossary("URL", "URLs")}}. It works by providing properties which allow you to easily read and modify the components of a URL.

You normally create a new `URL` object by specifying the URL as a string when calling its constructor, or by providing a relative URL and a base URL. You can then easily read the parsed components of the URL or make changes to the URL.

If a browser doesn't yet support the {{domxref("URL.URL", "URL()")}} constructor, you can access a URL object using the {{domxref("Window")}} interface's {{domxref("URL")}} property. Be sure to check to see if any of your target browsers require this to be prefixed.

{{AvailableInWorkers}}

## Constructor

- {{domxref("URL.URL", "new URL()")}}
  - : Creates and returns a `URL` object referencing the URL specified using an absolute URL string, or a relative URL string and a base URL string.

## Properties

- {{domxref("URL.hash", "hash")}}
  - : A {{domxref("USVString")}} containing a `'#'` followed by the fragment identifier of the URL.
- {{domxref("URL.host", "host")}}
  - : A {{domxref("USVString")}} containing the domain (that is the _hostname_) followed by (if a port was specified) a `':'` and the _port_ of the URL.
- {{domxref("URL.hostname", "hostname")}}
  - : A {{domxref("USVString")}} containing the domain of the URL.
- {{domxref("URL.href", "href")}}
  - : A {{Glossary("stringifier")}} that returns a {{domxref("USVString")}} containing the whole URL.
- {{domxref("URL.origin", "origin")}} {{readonlyInline}}
  - : Returns a {{domxref("USVString")}} containing the origin of the URL, that is its scheme, its domain and its port.
- {{domxref("URL.password", "password")}}
  - : A {{domxref("USVString")}} containing the password specified before the domain name.
- {{domxref("URL.pathname", "pathname")}}
  - : Is a {{domxref("USVString")}} containing an initial `'/'` followed by the path of the URL, not including the query string or fragment.
- {{domxref("URL.port", "port")}}
  - : A {{domxref("USVString")}} containing the port number of the URL.
- {{domxref("URL.protocol", "protocol")}}
  - : A {{domxref("USVString")}} containing the protocol scheme of the URL, including the final `':'`.
- {{domxref("URL.search", "search")}}
  - : A {{domxref("USVString")}} indicating the URL's parameter string; if any parameters are provided, this string includes all of them, beginning with the leading `?` character.
- {{domxref("URL.searchParams", "searchParams")}} {{readonlyInline}}
  - : A {{domxref("URLSearchParams")}} object which can be used to access the individual query parameters found in `search`.
- {{domxref("URL.username","username")}}
  - : A {{domxref("USVString")}} containing the username specified before the domain name.

## Methods

- {{domxref("URL.toString", "toString()")}}
  - : Returns a {{domxref("USVString")}} containing the whole URL. It is a synonym for {{domxref("URL.href")}}, though it can't be used to modify the value.
- {{domxref("URL.toJSON", "toJSON()")}}
  - : Returns a {{domxref("USVString")}} containing the whole URL. It returns the same string as the `href` property.

## Static methods

- {{domxref("URL.createObjectURL", "createObjectURL()")}}
  - : Returns a {{domxref("DOMString")}} containing a unique blob URL, that is a URL with `blob:` as its scheme, followed by an opaque string uniquely identifying the object in the browser.
- {{domxref("URL.revokeObjectURL", "revokeObjectURL()")}}
  - : Revokes an object URL previously created using {{domxref("URL.createObjectURL()")}}.

## Usage notes

The constructor takes a `url` parameter, and an optional `base` parameter to use as a base if the `url` parameter is a relative URL:

```js
const url = new URL('../cats', 'http://www.example.com/dogs');
console.log(url.hostname); // "www.example.com"
console.log(url.pathname); // "/cats"
```

URL properties can be set to construct the URL:

```js
url.hash = 'tabby';
console.log(url.href); // "http://www.example.com/cats#tabby"
```

URLs are encoded according to the rules found in {{RFC(3986)}}. For instance:

```js
url.pathname = 'démonstration.html';
console.log(url.href); // "http://www.example.com/d%C3%A9monstration.html"
```

The {{domxref("URLSearchParams")}} interface can be used to build and manipulate the URL query string.

To get the search params from the current window's URL, you can do this:

```js
// https://some.site/?id=123
const parsedUrl = new URL(window.location.href);
console.log(parsedUrl.searchParams.get("id")); // "123"
```

The {{domxref("URL.toString", "toString()")}} method of `URL` just returns the value of the {{domxref("URL.href", "href")}} property, so the constructor can be used to normalize and encode a URL directly.

```js
const response = await fetch(new URL('http://www.example.com/démonstration.html'));
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- A polyfill of `URL` is available in [`core-js`](https://github.com/zloirock/core-js#url-and-urlsearchparams)
- [URL API](/en-US/docs/Web/API/URL_API)
- [What is a URL?](/en-US/docs/Learn/Common_questions/What_is_a_URL)
- Property to obtain a `URL` object: {{domxref("URL")}}.
- {{domxref("URLSearchParams")}}.

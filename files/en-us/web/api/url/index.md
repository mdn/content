---
title: URL
slug: Web/API/URL
page-type: web-api-interface
browser-compat: api.URL
---

{{APIRef("URL API")}} {{AvailableInWorkers}}

The **`URL`** interface is used to parse, construct, normalize, and encode {{glossary("URL", "URLs")}}. It works by providing properties which allow you to easily read and modify the components of a URL.

You normally create a new `URL` object by specifying the URL as a string when calling its constructor, or by providing a relative URL and a base URL. You can then easily read the parsed components of the URL or make changes to the URL.

## Constructor

- {{domxref("URL.URL", "URL()")}}
  - : Creates and returns a `URL` object from a URL string and optional base URL string.
    Throws if the passed arguments don't define a valid URL.

## Instance properties

- {{domxref("URL.hash", "hash")}}
  - : A string containing a `'#'` followed by the fragment identifier of the URL.
- {{domxref("URL.host", "host")}}
  - : A string containing the domain (that is the _hostname_) followed by (if a port was specified) a `':'` and the _port_ of the URL.
- {{domxref("URL.hostname", "hostname")}}
  - : A string containing the domain of the URL.
- {{domxref("URL.href", "href")}}
  - : A {{Glossary("stringifier")}} that returns a string containing the whole URL.
- {{domxref("URL.origin", "origin")}} {{ReadOnlyInline}}
  - : Returns a string containing the origin of the URL, that is its scheme, its domain and its port.
- {{domxref("URL.password", "password")}}
  - : A string containing the password specified before the domain name.
- {{domxref("URL.pathname", "pathname")}}
  - : A string containing an initial `'/'` followed by the path of the URL, not including the query string or fragment.
- {{domxref("URL.port", "port")}}
  - : A string containing the port number of the URL.
- {{domxref("URL.protocol", "protocol")}}
  - : A string containing the protocol scheme of the URL, including the final `':'`.
- {{domxref("URL.search", "search")}}
  - : A string indicating the URL's parameter string; if any parameters are provided, this string includes all of them, beginning with the leading `?` character.
- {{domxref("URL.searchParams", "searchParams")}} {{ReadOnlyInline}}
  - : A {{domxref("URLSearchParams")}} object which can be used to access the individual query parameters found in `search`.
- {{domxref("URL.username","username")}}
  - : A string containing the username specified before the domain name.

## Static methods

- {{domxref("URL.canParse_static", "canParse()")}}
  - : Returns a boolean indicating whether or not a URL defined from a URL string and optional base URL string is parsable and valid.
- {{domxref("URL.createObjectURL_static", "createObjectURL()")}}
  - : Returns a string containing a unique blob URL, that is a URL with `blob:` as its scheme, followed by an opaque string uniquely identifying the object in the browser.
- {{domxref("URL.parse_static", "parse()")}}
  - : Creates and returns a `URL` object from a URL string and optional base URL string, or returns `null` if the passed parameters define an invalid `URL`.
- {{domxref("URL.revokeObjectURL_static", "revokeObjectURL()")}}
  - : Revokes an object URL previously created using {{domxref("URL.createObjectURL_static", "URL.createObjectURL()")}}.

## Instance methods

- {{domxref("URL.toString", "toString()")}}
  - : Returns a string containing the whole URL. It is a synonym for {{domxref("URL.href")}}, though it can't be used to modify the value.
- {{domxref("URL.toJSON", "toJSON()")}}
  - : Returns a string containing the whole URL. It returns the same string as the `href` property.

## Usage notes

The constructor takes a `url` parameter, and an optional `base` parameter to use as a base if the `url` parameter is a relative URL:

```js
const url = new URL("../cats", "http://www.example.com/dogs");
console.log(url.hostname); // "www.example.com"
console.log(url.pathname); // "/cats"
```

The constructor will raise an exception if the URL cannot be parsed to a valid URL.
You can either call the above code in a [`try...catch`](/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) block or use the {{domxref("URL.canParse_static", "canParse()")}} static method to first check the URL is valid:

```js
if (URL.canParse("../cats", "http://www.example.com/dogs")) {
  const url = new URL("../cats", "http://www.example.com/dogs");
  console.log(url.hostname); // "www.example.com"
  console.log(url.pathname); // "/cats"
} else {
  console.log("Invalid URL"); //Invalid URL
}
```

URL properties can be set to construct the URL:

```js
url.hash = "tabby";
console.log(url.href); // "http://www.example.com/cats#tabby"
```

URLs are encoded according to the rules found in {{RFC(3986)}}. For instance:

```js
url.pathname = "démonstration.html";
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
const response = await fetch(
  new URL("http://www.example.com/démonstration.html"),
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `URL` in `core-js`](https://github.com/zloirock/core-js#url-and-urlsearchparams)
- [URL API](/en-US/docs/Web/API/URL_API)
- [What is a URL?](/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL)
- {{domxref("URLSearchParams")}}.

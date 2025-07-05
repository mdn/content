---
title: URL API
slug: Web/API/URL_API
page-type: web-api-overview
browser-compat:
  - api.URL
  - api.URLSearchParams
spec-urls: https://url.spec.whatwg.org/#api
---

{{DefaultAPISidebar("URL API")}} {{AvailableInWorkers}}

The URL API is a component of the URL standard, which defines what constitutes a valid {{Glossary("URL", "Uniform Resource Locator")}} and the API that accesses and manipulates URLs. The URL standard also defines concepts such as domains, hosts, and IP addresses, and also attempts to describe in a standard way the legacy `application/x-www-form-urlencoded` {{Glossary("MIME type")}} used to submit web forms' contents as a set of key/value pairs.

## Concepts and usage

The majority of the URL standard is taken up by the [definition of a URL](/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL) and how it is structured and parsed. Also covered are definitions of various terms related to addressing of computers on a network, and the algorithms for parsing IP addresses and DOM addresses are specified. More interesting to most developers is the API itself.

### Accessing URL components

Creating an {{domxref("URL")}} object for a given URL parses the URL and provides quick access to its constituent parts through its properties.

```js
let addr = new URL("https://developer.mozilla.org/en-US/docs/Web/API/URL_API");
let host = addr.host;
let path = addr.pathname;
```

The snippet above creates a `URL` object for the article you're reading right now, then fetches the {{domxref("URL.host", "host")}} and {{domxref("URL.pathname", "pathname")}} properties. In this case, those strings are `developer.mozilla.org` and `/en-US/docs/Web/API/URL_API`, respectively.

### Changing the URL

Most of the properties of `URL` are settable; you can write new values to them to alter the URL represented by the object. For example, to create a URL and set its username:

```js
let myUsername = "some-guy";
let addr = new URL("https://example.com/login");
addr.username = myUsername;
```

Setting the value of {{domxref("URL.username", "username")}} not only sets that property's value, but it updates the overall URL. After executing the code snippet above, the value returned by {{domxref("URL.href", "href")}} is `https://some-guy@example.com/login`. This is true for any of the writable properties.

### Queries

The {{domxref("URL.search", "search")}} property on a `URL` contains the query string portion of the URL. For example, if the URL is `https://example.com/login?user=some-guy&page=news`, then the value of the `search` property is `?user=some-guy&page=news`. You can also look up the values of individual parameters with the {{domxref("URLSearchParams")}} object's {{domxref("URLSearchParams.get", "get()")}} method:

```js
let addr = new URL("https://example.com/login?user=some-guy&page=news");
try {
  loginUser(addr.searchParams.get("user"));
  gotoPage(addr.searchParams.get("page"));
} catch (err) {
  showErrorMessage(err);
}
```

For example, in the above snippet, the username and target page are taken from the query and passed to appropriate functions that are used by the site's code to log in and route the user to their desired destination within the site.

Other functions within `URLSearchParams` let you change the value of keys, add and delete keys and their values, and even sort the list of parameters.

## Interfaces

The URL API is a simple one, with only a couple of interfaces to its name:

- {{domxref("URL")}}
  - : Can be used to parse, construct, normalize, and encode {{glossary("URL", "URLs")}}.
- {{domxref("URLSearchParams")}}
  - : Defines utility methods to work with the query string of a URL.

## Examples

### Parsing URL parameters using the URL API

You could process URL parameters by parsing a URL as a string, splitting it on certain characters or using regular expressions, but it's much easier to create a new `URL` object for this. The example below gets the document URL from [`document.location.href`](/en-US/docs/Web/API/Document/location), sorts the parameters using {{domxref("URLSearchParams.sort()")}}, then extracts the keys using `URLSearchParams.keys`.

For each key in the document URL, we add rows to a {{HTMLElement("table")}} element, one for each key found in the parameters, with the first column containing the key's name, and the second column containing the value:

```js
const table = document.querySelector(".param-table");

const url = new URL(document.location.href);
url.searchParams.sort();
const keys = url.searchParams.keys();

for (let key of keys) {
  let val = url.searchParams.get(key);
  let row = document.createElement("tr");
  let cell = document.createElement("td");
  cell.innerText = key;
  row.appendChild(cell);
  cell = document.createElement("td");
  cell.innerText = val;
  row.appendChild(cell);
  table.appendChild(row);
}
```

You can try a [live version of this example](https://mdn.github.io/dom-examples/url-params/) and [view the full source code on GitHub](https://github.com/mdn/dom-examples/tree/main/url-params).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Fetch API", "", "", "nocode")}}
- CSS {{cssxref("url_value", "&lt;url&gt;")}} type
- {{jsxref("encodeURI", "encodeURI()")}}
- {{jsxref("encodeURIComponent", "encodeURIComponent()")}}

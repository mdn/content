---
title: URL API
slug: Web/API/URL_API
page-type: web-api-overview
browser-compat: api.URL
---

{{DefaultAPISidebar("URL API")}}

The URL API is a component of the URL standard, which defines what constitutes a valid {{Glossary("URL", "Uniform Resource Locator")}} and the API that accesses and manipulates URLs. The URL standard also defines concepts such as domains, hosts, and IP addresses, and also attempts to describe in a standard way the legacy `application/x-www-form-urlencoded` {{Glossary("MIME type")}} used to submit web forms' contents as a set of key/value pairs.

{{AvailableInWorkers}}

## URL concepts and usage

The majority of the URL standard is taken up by the [definition of a URL](/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL) and how it is structured and parsed. Also covered are definitions of various terms related to addressing of computers on a network, and the algorithms for parsing IP addresses and DOM addresses are specified. More interesting to most developers is the API itself.

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
let myUsername = "someguy";
let addr = new URL("https://example.com/login");
addr.username = myUsername;
```

Setting the value of {{domxref("URL.username", "username")}} not only sets that property's value, but it updates the overall URL. After executing the code snippet above, the value returned by {{domxref("URL.href", "addr.href")}} is `https://someguy@example.com/login`. This is true for any of the writable properties.

### Queries

The {{domxref("URL.search", "search")}} property on a `URL` contains the query string portion of the URL. For example, if the URL is `https://example.com/login?user=someguy&page=news`, then the value of the `search` property is `?user=someguy&page=news`. You can also look up the values of individual parameters with the {{domxref("URLSearchParams")}} object's {{domxref("URLSearchParams.get", "get()")}} method:

```js
let addr = new URL("https://example.com/login?user=someguy&page=news");
try {
  loginUser(addr.searchParams.get("user"));
  gotoPage(addr.searchParams.get("page"));
} catch (err) {
  showErrorMessage(err);
}
```

For example, in the above snippet, the username and target page are taken from the query and passed to appropriate functions that are used by the site's code to log in and route the user to their desired destination within the site.

Other functions within `URLSearchParams` let you change the value of keys, add and delete keys and their values, and even sort the list of parameters.

## URL API interfaces

The URL API is a simple one, with only a couple of interfaces to its name:

- [`URL`](/en-US/docs/Web/API/URL)
- [`URLSearchParams`](/en-US/docs/Web/API/URLSearchParams)

## Examples

If you want to process the parameters included in a URL, you could do it manually, but it's much easier to create a `URL` object to do it for you. The `fillTableWithParameters()` function below takes as input a {{domxref("HTMLTableElement")}} object representing a {{HTMLElement("table")}}. Rows are added to the table, one for each key found in the parameters, with the first column containing the key's name, and the second column having the value.

Note the call to {{domxref("URLSearchParams.sort()")}} to sort the parameter list before generating the table.

```js
function fillTableWithParameters(tbl) {
  const url = new URL(document.location.href);
  url.searchParams.sort();
  const keys = url.searchParams.keys();

  for (const key of keys) {
    const val = url.searchParams.get(key);
    const row = document.createElement("tr");
    const cell1 = document.createElement("td");
    cell1.innerText = key;
    row.appendChild(cell1);
    const cell2 = document.createElement("td");
    cell2.innerText = val;
    row.appendChild(cell2);
    tbl.appendChild(row);
  }
}
```

A working version of this example can be [found on Glitch](https://url-api.glitch.me). Just add parameters to the URL when loading the page to see them in the table. For instance, try [`https://url-api.glitch.me?from=mdn&excitement=high&likelihood=inconceivable`](https://url-api.glitch.me?from=mdn&excitement=high&likelihood=inconceivable).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Fetch API](/en-US/docs/Web/API/Fetch_API)
- CSS {{cssxref("&lt;url&gt;")}} type
- {{jsxref("encodeURI", "encodeURI()")}}
- {{jsxref("encodeURIComponent", "encodeURIComponent()")}}

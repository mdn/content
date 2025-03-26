---
title: Location
slug: Web/API/Location
page-type: web-api-interface
browser-compat: api.Location
---

{{APIRef("HTML DOM")}}

The **`Location`** interface represents the location (URL) of the object it is linked to. Changes done on it are reflected on the object it relates to. Both the {{domxref("Document")}} and {{domxref("Window")}} interface have such a linked `Location`, accessible via {{domxref("Document.location")}} and {{domxref("Window.location")}} respectively.

## Location anatomy

Hover over the URL segments below to highlight their meaning:

```html hidden
<span id="href" title="href"
  ><span id="origin" title="origin"
    ><span id="protocol" title="protocol">https:</span>//<span
      id="host"
      title="host"
      ><span id="hostname" title="hostname">example.org</span>:<span
        id="port"
        title="port"
        >8080</span
      ></span
    ></span
  ><span id="pathname" title="pathname">/foo/bar</span
  ><span id="search" title="search">?q=baz</span
  ><span id="hash" title="hash">#bang</span></span
>
```

```css hidden
html {
  display: table;
  width: 100%;
}

body {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  font-family: Georgia;
  font-size: 200%;
  line-height: 1em;
  white-space: nowrap;
}

[title] {
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  line-height: 2em;
  cursor: pointer;
  color: gray;
}

[title]::before {
  content: attr(title);
  font-family: monospace;
  position: absolute;
  top: 100%;
  width: 100%;
  left: 50%;
  margin-left: -50%;
  font-size: 50%;
  line-height: 1.5;
  background: black;
}

[title]:hover::before,
:target::before {
  background: black;
  color: yellow;
}

[title] [title]::before {
  margin-top: 1.5em;
}

[title] [title] [title]::before {
  margin-top: 3em;
}

[title] [title] [title] [title]::before {
  margin-top: 4.5em;
}

[title]:hover,
:target {
  position: relative;
  z-index: 1;
  outline: 50em solid rgb(255 255 255 / 80%);
}
```

```js hidden
document.body.addEventListener("click", (event) => {
  event.preventDefault();

  window.location.hash = event.target.hasAttribute("id")
    ? `#${event.target.getAttribute("id")}`
    : "";
});
```

{{EmbedLiveSample('Location anatomy', '85ch', '180px')}}

## Instance properties

- {{domxref("Location.ancestorOrigins")}} {{ReadOnlyInline}}
  - : A static {{domxref("DOMStringList")}} containing, in reverse order, the origins of all ancestor browsing contexts of the document associated with the given `Location` object.
- {{domxref("Location.href")}}
  - : A {{Glossary("stringifier")}} that returns a string containing the entire URL. If changed, the associated document navigates to the new page. It can be set from a different origin than the associated document.
- {{domxref("Location.protocol")}}
  - : A string containing the protocol scheme of the URL, including the final `':'`.
- {{domxref("Location.host")}}
  - : A string containing the host, that is the _hostname_, a `':'`, and the _port_ of the URL.
- {{domxref("Location.hostname")}}
  - : A string containing the domain of the URL.
- {{domxref("Location.port")}}
  - : A string containing the port number of the URL.
- {{domxref("Location.pathname")}}
  - : A string containing an initial `'/'` followed by the path of the URL, not including the query string or fragment.
- {{domxref("Location.search")}}
  - : A string containing a `'?'` followed by the parameters or "query string" of the URL. Modern browsers provide [`URLSearchParams`](/en-US/docs/Web/API/URLSearchParams/get) and [`URL.searchParams`](/en-US/docs/Web/API/URL/searchParams) to make it easy to parse out the parameters from the query string.
- {{domxref("Location.hash")}}
  - : A string containing a `'#'` followed by the fragment identifier of the URL.
- {{domxref("Location.origin")}} {{ReadOnlyInline}}
  - : Returns a string containing the canonical form of the origin of the specific location.

## Instance methods

- {{domxref("Location.assign()")}}
  - : Loads the resource at the URL provided in parameter.
- {{domxref("Location.reload()")}}
  - : Reloads the current URL, like the Refresh button.
- {{domxref("Location.replace()")}}
  - : Replaces the current resource with the one at the provided URL (redirects to the provided URL). The difference from the `assign()` method and setting the `href` property is that after using `replace()` the current page will not be saved in session {{domxref("History")}}, meaning the user won't be able to use the _back_ button to navigate to it.
- {{domxref("Location.toString()")}}
  - : Returns a string containing the whole URL. It is a synonym for {{domxref("Location.href")}}, though it can't be used to modify the value.

## Examples

```js
// location: https://developer.mozilla.org:8080/en-US/search?q=URL#search-results-close-container
const loc = document.location;
console.log(loc.href); // https://developer.mozilla.org:8080/en-US/search?q=URL#search-results-close-container
console.log(loc.protocol); // https:
console.log(loc.host); // developer.mozilla.org:8080
console.log(loc.hostname); // developer.mozilla.org
console.log(loc.port); // 8080
console.log(loc.pathname); // /en-US/search
console.log(loc.search); // ?q=URL
console.log(loc.hash); // #search-results-close-container
console.log(loc.origin); // https://developer.mozilla.org:8080

location.assign("http://another.site"); // load another page
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Two `Location` properties: {{domxref("Window.location")}} and {{domxref("Document.location")}}.
- URL manipulation interfaces: {{domxref("URL")}} and {{domxref("URLSearchParams")}}.

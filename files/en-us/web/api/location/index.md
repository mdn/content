---
title: Location
slug: Web/API/Location
tags:
  - API
  - HTML DOM
  - Interface
  - Location
  - Reference
browser-compat: api.Location
---
{{APIRef("HTML DOM")}}

The **`Location`** interface represents the location (URL) of the object it is linked to. Changes done on it are reflected on the object it relates to. Both the {{domxref("Document")}} and {{domxref("Window")}} interface have such a linked `Location`, accessible via {{domxref("Document.location")}} and {{domxref("Window.location")}} respectively.

## Anatomy Of Location

### HTML

```html
<span id="href" title="href"><span id="origin" title="origin"><span id="protocol" title="protocol">https:</span>//<span id="host" title="host"><span id="hostname" title="hostname">example.org</span>:<span id="port" title="port">8080</span></span></span><span id="pathname" title="pathname">/foo/bar</span><span id="search" title="search">?q=baz</span><span id="hash" title="hash">#bang</span></span>
```

### CSS

```css
html, body { height: 100%; }

html { display: table; width: 100%; }

body { display: table-cell; text-align: center; vertical-align: middle; font-family: Georgia; font-size: 200%; line-height: 1em; white-space: nowrap; }

[title] { position: relative; display: inline-block; box-sizing: border-box; line-height: 2em; cursor: pointer; }

[title]:before { content: attr(title); font-family: monospace; position: absolute; top: 100%; width: 100%; left: 50%; margin-left: -50%; font-size: 40%; line-height: 1.5; background: black; }

[title]:hover:before, :target:before { background: black; color: yellow; }

[title] [title]:before { margin-top: 1.5em; }

[title] [title] [title]:before { margin-top: 3em; }

[title] [title] [title] [title]:before { margin-top: 4.5em; }

[title]:hover, :target { position: relative; z-index: 1; outline: 50em solid rgba(255, 255, 255, .8); }
```

### JavaScript

```js
document.body.addEventListener('click', function (evt) {
    evt.preventDefault();

    window.location.hash = evt.target.hasAttribute('id')
        ? '#' + evt.target.getAttribute('id')
        : '';
});
```

### Result

{{EmbedLiveSample('Anatomy_Of_Location', '85ch', '220px')}}

## Properties

- {{domxref("Location.ancestorOrigins")}}
  - : Is a static {{domxref("DOMStringList")}} containing, in reverse order, the origins of all ancestor browsing contexts of the document associated with the given `Location` object.
- {{domxref("Location.href")}}
  - : Is a stringifier that returns a {{domxref("USVString")}} containing the entire URL. If changed, the associated document navigates to the new page. It can be set from a different origin than the associated document.
- {{domxref("Location.protocol")}}
  - : Is a {{domxref("USVString")}} containing the protocol scheme of the URL, including the final `':'`.
- {{domxref("Location.host")}}
  - : Is a {{domxref("USVString")}} containing the host, that is the _hostname_, a `':'`, and the _port_ of the URL.
- {{domxref("Location.hostname")}}
  - : Is a {{domxref("USVString")}} containing the domain of the URL.
- {{domxref("Location.port")}}
  - : Is a {{domxref("USVString")}} containing the port number of the URL.
- {{domxref("Location.pathname")}}
  - : Is a {{domxref("USVString")}} containing an initial `'/'` followed by the path of the URL, not including the query string or fragment.
- {{domxref("Location.search")}}
  - : Is a {{domxref("USVString")}} containing a `'?'` followed by the parameters or "querystring" of the URL. Modern browsers provide [URLSearchParams](/en-US/docs/Web/API/URLSearchParams/get#example) and [URL.searchParams](/en-US/docs/Web/API/URL/searchParams#example) to make it easy to parse out the parameters from the querystring.
- {{domxref("Location.hash")}}
  - : Is a {{domxref("USVString")}} containing a `'#'` followed by the fragment identifier of the URL.
- {{domxref("Location.origin")}} {{readOnlyInline}}
  - : Returns a {{domxref("USVString")}} containing the canonical form of the origin of the specific location.

## Methods

- {{domxref("Location.assign()")}}
  - : Loads the resource at the URL provided in parameter.
- {{domxref("Location.reload()")}}
  - : Reloads the current URL, like the Refresh button.
- {{domxref("Location.replace()")}}
  - : Replaces the current resource with the one at the provided URL (redirects to the provided URL). The difference from the `assign()` method and setting the `href` property is that after using `replace()` the current page will not be saved in session {{domxref("History")}}, meaning the user won't be able to use the _back_ button to navigate to it.
- {{domxref("Location.toString()")}}
  - : Returns a {{domxref("USVString")}} containing the whole URL. It is a synonym for {{domxref("Location.href")}}, though it can't be used to modify the value.

## Examples

```js
// Create anchor element and use href property for the purpose of this example
// A more correct alternative is to browse to the URL and use document.location or window.location
var url = document.createElement('a');
url.href = 'https://developer.mozilla.org:8080/en-US/search?q=URL#search-results-close-container';
console.log(url.href);      // https://developer.mozilla.org:8080/en-US/search?q=URL#search-results-close-container
console.log(url.protocol);  // https:
console.log(url.host);      // developer.mozilla.org:8080
console.log(url.hostname);  // developer.mozilla.org
console.log(url.port);      // 8080
console.log(url.pathname);  // /en-US/search
console.log(url.search);    // ?q=URL
console.log(url.hash);      // #search-results-close-container
console.log(url.origin);    // https://developer.mozilla.org:8080
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Two methods creating such an object: {{domxref("Window.location")}} and {{domxref("Document.location")}}.
- URL related interfaces: {{domxref("URL")}}, {{domxref("URLSearchParams")}} and {{domxref("HTMLHyperlinkElementUtils")}}

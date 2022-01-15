---
title: URLSearchParams
slug: Web/API/URLSearchParams
tags:
  - API
  - Interface
  - Landing
  - Reference
  - URL API
  - URLSearchParams
  - Polyfill
browser-compat: api.URLSearchParams
---
{{ApiRef("URL API")}}

The **`URLSearchParams`** interface defines utility methods to work with the query string of a URL.

An object implementing `URLSearchParams` can directly be used in a {{jsxref("Statements/for...of", "for...of")}} structure, for example the following two lines are equivalent:

```js
for (const [key, value] of mySearchParams) {}
for (const [key, value] of mySearchParams.entries()) {}
```

{{availableinworkers}}

## Constructor

- {{domxref("URLSearchParams.URLSearchParams", 'URLSearchParams()')}}
  - : Returns a `URLSearchParams` object instance.

## Methods

- {{domxref("URLSearchParams.append()")}}
  - : Appends a specified key/value pair as a new search parameter.
- {{domxref("URLSearchParams.delete()")}}
  - : Deletes the given search parameter, and its associated value, from the list of all search parameters.
- {{domxref("URLSearchParams.entries()")}}
  - : Returns an {{jsxref("Iteration_protocols","iterator")}} allowing iteration through all key/value pairs contained in this object.
- {{domxref("URLSearchParams.forEach()")}}
  - : Allows iteration through all values contained in this object via a callback function.
- {{domxref("URLSearchParams.get()")}}
  - : Returns the first value associated with the given search parameter.
- {{domxref("URLSearchParams.getAll()")}}
  - : Returns all the values associated with a given search parameter.
- {{domxref("URLSearchParams.has()")}}
  - : Returns a boolean value indicating if such a given parameter exists.
- {{domxref("URLSearchParams.keys()")}}
  - : Returns an {{jsxref("Iteration_protocols", "iterator")}} allowing iteration through all keys of the key/value pairs contained in this object.
- {{domxref("URLSearchParams.set()")}}
  - : Sets the value associated with a given search parameter to the given value. If there are several values, the others are deleted.
- {{domxref("URLSearchParams.sort()")}}
  - : Sorts all key/value pairs, if any, by their keys.
- {{domxref("URLSearchParams.toString()")}}
  - : Returns a string containing a query string suitable for use in a URL.
- {{domxref("URLSearchParams.values()")}}
  - : Returns an {{jsxref("Iteration_protocols", "iterator")}} allowing iteration through all values of the key/value pairs contained in this object.

## Examples

```js
const paramsString = 'q=URLUtils.searchParams&topic=api';
let searchParams = new URLSearchParams(paramsString);

//Iterate the search parameters.
for (let p of searchParams) {
  console.log(p);
}

searchParams.has('topic') === true;      // true
searchParams.get('topic') === "api";     // true
searchParams.getAll('topic');            // ["api"]
searchParams.get('foo') === null;        // true
searchParams.append('topic', 'webdev');
searchParams.toString();                 // "q=URLUtils.searchParams&topic=api&topic=webdev"
searchParams.set('topic', 'More webdev');
searchParams.toString();                 // "q=URLUtils.searchParams&topic=More+webdev"
searchParams.delete('topic');
searchParams.toString();                 // "q=URLUtils.searchParams"
```

```js
// Search parameters can also be an object
let paramsObj = {foo: 'bar', baz: 'bar'};
let searchParams = new URLSearchParams(paramsObj);

searchParams.toString();                 // "foo=bar&baz=bar"
searchParams.has('foo');                 // true
searchParams.get('foo');                 // bar
```

```js
// Having duplicate parameters only returns the first value
let paramStr = 'foo=bar&foo=baz';
let searchParams = new URLSearchParams(paramStr);

searchParams.toString();                 // "foo=bar&foo=baz"
searchParams.has('foo');                 // true
searchParams.get('foo');                 // bar
```

### Gotchas

The `URLSearchParams` constructor does _not_ parse full URLs. However, it will strip an initial leading `?` off of a string, if present.

```js
const paramsString1 = 'http://example.com/search?query=%40';
const searchParams1 = new URLSearchParams(paramsString1);

searchParams1.has('query'); // false
searchParams1.has('http://example.com/search?query'); // true

searchParams1.get('query'); // null
searchParams1.get('http://example.com/search?query'); // "@" (equivalent to decodeURIComponent('%40'))

const paramsString2 = '?query=value';
const searchParams2 = new URLSearchParams(paramsString2);
searchParams2.has('query'); // true

const url = new URL('http://example.com/search?query=%40');
const searchParams3 = new URLSearchParams(url.search);
searchParams3.has('query') // true
```

It interprets `+` as a space

```js
const base64 = btoa(String.fromCharCode(19, 224, 23, 64, 31, 128)); // base64 is "E+AXQB+A"
const searchParams = new URLSearchParams('q=foo&bin=' + base64); // q=foo&bin=E+AXQB+A
const getBin = searchParams.get('bin'); // "E AXQB A" + char is replaced by spaces
btoa(atob(getBin)); // "EAXQBA==" no error thrown
btoa(String.fromCharCode(16,5,208,4)) // "EAXQBA==" decodes to wrong binary value
getBin.replace(/ /g, '+'); // "E+AXQB+A" is one solution

// or use set to add the parameter, but this increases the query string length
searchParams.set('bin2', base64) // "q=foo&bin=E+AXQB+A&bin2=E%2BAXQB%2BA" encodes + as %2B
searchParams.get('bin2'); // "E+AXQB+A"
```

It doesn't distinguish between a parameter with nothing after the `=` and a parameter
that doesn't have a `=` altogether.

```js
const emptyVal = new URLSearchParams('foo=&bar=baz')
emptyVal.get('foo') // returns ''
const noEquals = new URLSearchParams('foo&bar=baz')
noEquals.get('foo') // also returns ''
noEquals.toString() // 'foo=&bar=baz'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- A polyfill of `URLSearchParams` is available in [`core-js`](https://github.com/zloirock/core-js#url-and-urlsearchparams)
- The {{domxref("URL")}} interface.
- [Google Developers: Easy URL manipulation with URLSearchParams](https://developers.google.com/web/updates/2016/01/urlsearchparams?hl=en)

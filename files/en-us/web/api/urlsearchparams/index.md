---
title: URLSearchParams
slug: Web/API/URLSearchParams
page-type: web-api-interface
browser-compat: api.URLSearchParams
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

The **`URLSearchParams`** interface defines utility methods to work with the query string of a URL.

`URLSearchParams` objects are [iterable](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol), so they can directly be used in a {{jsxref("Statements/for...of", "for...of")}} structure to iterate over key/value pairs in the same order as they appear in the query string, for example the following two lines are equivalent:

```js
for (const [key, value] of mySearchParams) {
}
for (const [key, value] of mySearchParams.entries()) {
}
```

Although `URLSearchParams` is functionally similar to a {{jsxref("Map")}}, when iterating, it may suffer from some [pitfalls](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#concurrent_modifications_when_iterating) that `Map` doesn't encounter due to how it's implemented.

## Constructor

- {{domxref("URLSearchParams.URLSearchParams", 'URLSearchParams()')}}
  - : Returns a `URLSearchParams` object instance.

## Instance properties

- {{domxref("URLSearchParams.size", 'size')}} {{ReadOnlyInline}}
  - : Indicates the total number of search parameter entries.

## Instance methods

- `URLSearchParams[Symbol.iterator]()`
  - : Returns an {{jsxref("Iteration_protocols","iterator")}} allowing iteration through all key/value pairs contained in this object in the same order as they appear in the query string.
- {{domxref("URLSearchParams.append()")}}
  - : Appends a specified key/value pair as a new search parameter.
- {{domxref("URLSearchParams.delete()")}}
  - : Deletes search parameters that match a name, and optional value, from the list of all search parameters.
- {{domxref("URLSearchParams.entries()")}}
  - : Returns an {{jsxref("Iteration_protocols","iterator")}} allowing iteration through all key/value pairs contained in this object in the same order as they appear in the query string.
- {{domxref("URLSearchParams.forEach()")}}
  - : Allows iteration through all values contained in this object via a callback function.
- {{domxref("URLSearchParams.get()")}}
  - : Returns the first value associated with the given search parameter.
- {{domxref("URLSearchParams.getAll()")}}
  - : Returns all the values associated with a given search parameter.
- {{domxref("URLSearchParams.has()")}}
  - : Returns a boolean value indicating if a given parameter, or parameter and value pair, exists.
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
const paramsString = "q=URLUtils.searchParams&topic=api";
const searchParams = new URLSearchParams(paramsString);

// Iterating the search parameters
for (const p of searchParams) {
  console.log(p);
}

console.log(searchParams.has("topic")); // true
console.log(searchParams.has("topic", "fish")); // false
console.log(searchParams.get("topic") === "api"); // true
console.log(searchParams.getAll("topic")); // ["api"]
console.log(searchParams.get("foo") === null); // true
console.log(searchParams.append("topic", "webdev"));
console.log(searchParams.toString()); // "q=URLUtils.searchParams&topic=api&topic=webdev"
console.log(searchParams.set("topic", "More webdev"));
console.log(searchParams.toString()); // "q=URLUtils.searchParams&topic=More+webdev"
console.log(searchParams.delete("topic"));
console.log(searchParams.toString()); // "q=URLUtils.searchParams"
```

```js
// Search parameters can also be an object
const paramsObj = { foo: "bar", baz: "bar" };
const searchParams = new URLSearchParams(paramsObj);

console.log(searchParams.toString()); // "foo=bar&baz=bar"
console.log(searchParams.has("foo")); // true
console.log(searchParams.get("foo")); // "bar"
```

### Duplicate search parameters

```js
const paramStr = "foo=bar&foo=baz";
const searchParams = new URLSearchParams(paramStr);

console.log(searchParams.toString()); // "foo=bar&foo=baz"
console.log(searchParams.has("foo")); // true
console.log(searchParams.get("foo")); // bar, only returns the first value
console.log(searchParams.getAll("foo")); // ["bar", "baz"]
```

### No URL parsing

The `URLSearchParams` constructor does _not_ parse full URLs. However, it will strip an initial leading `?` off of a string, if present.

```js
const paramsString1 = "http://example.com/search?query=%40";
const searchParams1 = new URLSearchParams(paramsString1);

console.log(searchParams1.has("query")); // false
console.log(searchParams1.has("http://example.com/search?query")); // true

console.log(searchParams1.get("query")); // null
console.log(searchParams1.get("http://example.com/search?query")); // "@" (equivalent to decodeURIComponent('%40'))

const paramsString2 = "?query=value";
const searchParams2 = new URLSearchParams(paramsString2);
console.log(searchParams2.has("query")); // true

const url = new URL("http://example.com/search?query=%40");
const searchParams3 = new URLSearchParams(url.search);
console.log(searchParams3.has("query")); // true
```

### Percent encoding

`URLSearchParams` objects [percent-encode](/en-US/docs/Glossary/Percent-encoding) anything in the [`application/x-www-form-urlencoded` percent-encode set](https://url.spec.whatwg.org/#application-x-www-form-urlencoded-percent-encode-set) (which contains all code points except ASCII alphanumeric, `*`, `-`, `.`, and `_`), and encode U+0020 SPACE as `+`. However, it only handles percent-encoding when serializing and deserializing full URL search params syntax. When interacting with individual keys and values, you always use the unencoded version.

```js
// Creation from parsing a string: percent-encoding is decoded
const params = new URLSearchParams("%24%25%26=%28%29%2B");
// Retrieving all keys/values: only decoded values are returned
console.log([...params]); // [["$%&", "()+"]]
// Getting an individual value: use the decoded key and get the decoded value
console.log(params.get("$%&")); // "()+"
console.log(params.get("%24%25%26")); // null
// Setting an individual value: use the unencoded key and value
params.append("$%&$#@+", "$#&*@#()+");
// Serializing: percent-encoding is applied
console.log(params.toString());
// "%24%25%26=%28%29%2B&%24%25%26%24%23%40%2B=%24%23%26*%40%23%28%29%2B"
```

If you append a key/value pair with a percent-encoded key, that key is treated as unencoded and is encoded again.

```js
const params = new URLSearchParams();

params.append("%24%26", "value");
params.toString(); // "%2524%2526=value"
```

### Preserving plus signs

The `URLSearchParams` constructor interprets plus signs (`+`) as spaces, which might cause problems. In the example below, we use [hexadecimal escape sequences](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#hexadecimal_escape_sequences) to mimic a string containing binary data (where every byte carries information) that needs to be stored in the URL search params. Note how the encoded string produced by `btoa()` contains `+` and isn't preserved by `URLSearchParams`.

```js
const rawData = "\x13à\x17@\x1F\x80";
const base64Data = btoa(rawData); // 'E+AXQB+A'

const searchParams = new URLSearchParams(`bin=${base64Data}`); // 'bin=E+AXQB+A'
const binQuery = searchParams.get("bin"); // 'E AXQB A', '+' is replaced by spaces

console.log(atob(binQuery) === rawData); // false
```

Never construct `URLSearchParams` objects using dynamically interpolated strings. Instead, use the `append()` method, which as mentioned above, interprets all characters as-is.

```js
const rawData = "\x13à\x17@\x1F\x80";
const base64Data = btoa(rawData); // 'E+AXQB+A'

const searchParams = new URLSearchParams();
searchParams.append("bin", base64Data); // 'bin=E%2BAXQB%2BA'
const binQuery = searchParams.get("bin"); // 'E+AXQB+A'

console.log(atob(binQuery) === rawData); // true
```

### Interaction with URL.searchParams

The {{domxref("URL.searchParams")}} property exposes the URL's {{domxref("URL.search", "search")}} string as a `URLSearchParams` object. When updating this `URLSearchParams`, the URL's `search` is updated with its serialization. However, `URL.search` encodes a subset of characters that `URLSearchParams` does, and encodes spaces as `%20` instead of `+`. This may cause some surprising interactions—if you update `searchParams`, even with the same values, the URL may be serialized differently.

```js
const url = new URL("https://example.com/?a=b ~");
console.log(url.href); // "https://example.com/?a=b%20~"
console.log(url.searchParams.toString()); // "a=b+%7E"
// This should be a no-op, but it changes the URL's query to the
// serialization of its searchParams
url.searchParams.sort();
console.log(url.href); // "https://example.com/?a=b+%7E"

const url2 = new URL("https://example.com?search=1234&param=my%20param");
console.log(url2.search); // "?search=1234&param=my%20param"
url2.searchParams.delete("search");
console.log(url2.search); // "?param=my+param"
```

### Empty value vs. no value

`URLSearchParams` doesn't distinguish between a parameter with nothing after the `=`, and a parameter that doesn't have a `=` altogether.

```js
const emptyVal = new URLSearchParams("foo=&bar=baz");
console.log(emptyVal.get("foo")); // returns ''
const noEquals = new URLSearchParams("foo&bar=baz");
console.log(noEquals.get("foo")); // also returns ''
console.log(noEquals.toString()); // 'foo=&bar=baz'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `URLSearchParams` in `core-js`](https://github.com/zloirock/core-js#url-and-urlsearchparams)
- The {{domxref("URL")}} interface.
- [Google Developers: Easy URL manipulation with URLSearchParams](https://developer.chrome.com/blog/urlsearchparams/)

---
title: URLSearchParams.set()
slug: Web/API/URLSearchParams/set
tags:
  - API
  - Method
  - URL API
  - URLSearchParams
  - set
browser-compat: api.URLSearchParams.set
---
{{ApiRef("URL API")}}

The **`set()`** method of the {{domxref("URLSearchParams")}}
interface sets the value associated with a given search parameter to the given value.
If there were several matching values, this method deletes the others. If the search
parameter doesn't exist, this method creates it.

{{availableinworkers}}

## Syntax

```js
URLSearchParams.set(name, value)
```

### Parameters

- `name`
  - : The name of the parameter to set.
- `value`
  - : The value of the parameter to set.

### Return value

Void.

## Examples

Let's start with a simple example:

```js
let url = new URL('https://example.com?foo=1&bar=2');
let params = new URLSearchParams(url.search);

//Add a third parameter.
params.set('baz', 3);
params.toString(); // "foo=1&bar=2&baz=3"
```

Below is a real-life example demonstrating how to create a {{domxref("URL")}} and set
some search parameters.

You can copy and paste the example in a code environment like Codepen, JSFiddle, or the
[multi-line
JavaScript interpreter in Firefox](/en-US/docs/Tools/Web_Console/The_command_line_interpreter).

- line #41: Comment out this line to stop dumping the search parameters to the
  console (`debug()`).
- line #43: Dumps the generated object and its string representation to the console
  (`info()`).
- line #44: Tries to automatically open a new window/tab with the generated URL
  (when uncommented).

```js
'use strict'

function genURL(rExp, aText, bDebug=false){
	let theURL

	theURL= new URL('https://regexr.com')
	theURL.searchParams.set( 'expression', rExp.toString() )
	theURL.searchParams.set( 'tool', 'replace' )
	theURL.searchParams.set( 'input', '\u2911\u20dc' )// ⤑⃜
	theURL.searchParams.set( 'text', aText.join('\n') )
	if( bDebug ){
		// Display the key/value pairs
		for(var pair of theURL.searchParams.entries()) {
			console.debug(pair[0] + ' = \'' + pair[1] + '\'');
		}
		console.debug(theURL)
	}
	return theURL
}
var url = genURL(
	/(^\s*\/\/|\s*[^:]\/\/).*\s*$|\s*\/\*(.|\n)+?\*\/\s*$/gm	// single/multi-line comments
	// /(^\s*\/\/.*|\s*[^:]\/\/.*)/g								// single-line comments
	,[
		"These should work:",
		"",
		"// eslint-disable-next-line no-unused-vars",
		"lockPref(	'keyword.URL',\t\t'https://duckduckgo.com/html/?q=!+'	)\t//      test",
		"/*",
		"	* bla bla    ",
		"*/",
		"",
		"/* bla bla */",
		"",
		"// bla bla ",
		"",
		"These shouldn\'t work:",
		"console.log(\"http://foo.co.uk/\")",
		"var url = \"http://regexr.com/foo.html?q=bar\"",
		"alert(\"https://mediatemple.net\")",
	]
	, true
)
console.info( url, url.toString() )
// window.open( url, 'regex_site' )
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

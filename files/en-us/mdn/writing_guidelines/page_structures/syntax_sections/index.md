---
title: Syntax sections
slug: MDN/Writing_guidelines/Page_structures/Syntax_sections
page-type: mdn-writing-guide
tags:
  - meta
  - writing-guide
---
{{MDNSidebar}}

The syntax section of an MDN reference page contains a syntax box defining the exact syntax that a feature has (e.g. what parameters can it accept, which ones are optional?) This article explains how to write syntax boxes for reference articles.

## API reference syntax

Syntax sections for API reference pages are written manually, and may differ slightly based on the feature being documented.
The section starts with a heading (typically level two heading `##`) named "Syntax", and must be included at the top of the reference page (just below the introductory material).
Below the heading is a code block showing the feature's exact syntax, demarcated using code fence `` ``` [markup-language] `` class.

The example below shows the Markdown code for a typical Syntax section (for a JavaScript function):

````
## Syntax

```js
slice()
slice(start)
slice(start, end)
```
````

### General style rules

A few rules to follow in terms of markup within the syntax block:

- Do **not** terminate a line with semicolon `;`. Syntax sections are not meant to show runnable code. So, it makes no sense to show semicolons.
- Do **not** use \<code> within the syntax block (or within any code sample block on MDN, either). Not only is it generally useless, but our markup does not want it, and will not render the way you want it to look if you include it.
- Only specify the function and arguments. Example showing "corrected" examples below

  ```js
  querySelector(selector)
  //responseStr = element.querySelector(selector);

  new IntersectionObserver(callback, options)
  // const observer = new IntersectionObserver(callback, options);
  ```

### Constructors and methods

#### Syntax block

Start with a syntax block, like this (from the {{DOMxRef("IntersectionObserver.IntersectionObserver", "IntersectionObserver constructor")}} page):

```js
new IntersectionObserver(callback, options)
```

or this (from {{DOMxRef("Document.hasStorageAccess")}}):

```js
hasStorageAccess()
```

##### Multiple lines/Optional parameters

Methods that can be used in many different ways should be expanded out into multiple lines, showing all possible variations.

Each option should be on its own line, omitting both per-option comments and assignment. For example, {{jsxref("Array.prototype.slice()")}} has two optional parameters, and would be documented as shown below:

```js
slice()
slice(begin)
slice(begin, end)
```

Similarly, for {{DOMxRef("CanvasRenderingContext2D.drawImage")}}:

```js
drawImage(image, dx, dy)
drawImage(image, dx, dy, dWidth, dHeight)
drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
```

Similarly for the {{jsxref("Date")}} constructor:

```js
new Date()
new Date(value)
new Date(dateString)
new Date(year, monthIndex)
new Date(year, monthIndex, day)
new Date(year, monthIndex, day, hours)
new Date(year, monthIndex, day, hours, minutes)
new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)
```

##### Formal syntax

Formal syntax notation (using [BNF](https://en.wikipedia.org/wiki/Backus%E2%80%93Naur_form)) should not be used in the Syntax section — instead use the expanded multiple-line format [described above](#multiple_lines).

While the formal notation provides a concise mechanism for describing complex syntax, it is not familiar to many developers, and can _conflict_ with valid syntax for particular programming languages. For example, "`[ ]`" indicates both an "optional parameter" and a JavaScript {{jsxref("Array")}}. You can see this in the formal syntax for {{jsxref("Array.prototype.slice()")}} below:

```js
arr.slice([begin[, end]])
```

For specific cases where it is seen as beneficial, a separate **Formal syntax** section may be declared using the formal notification.

##### Concise syntax blocks

The aim is to make the syntax block as pure and unambiguous a definition of the feature's syntax as possible — don't include any irrelevant syntax. For example, you may see this syntax form used to describe promises in many places on the site:

```js
caches.match(request, options).then(function(response) {
  // Do something with the response
});
```

But this version is much more concise, and doesn't include the superfluous {{JSxRef("Promise.prototype.then()")}} method call:

```js
match(request, options)
```

##### Callback syntax blocks

For methods with a callback function, the syntax for arrow functions, functions, and inline functions is shown:

```js
// Arrow function
filter((currentValue) => { /* … */ } )
filter((currentValue, index) => { /* … */ } )
filter((currentValue, index, array) => { /* … */ } )

// Callback function
filter(callbackFn)
filter(callbackFn, thisArg)

// Inline callback function
filter(function(currentValue) { /* … */ })
filter(function(currentValue, index) { /* … */ })
filter(function(currentValue, index, array){ /* … */ })
filter(function(currentValue, index, array) { /* … */ }, thisArg)
```

##### Syntax for arbitrary number of parameters

For methods that accept an arbitrary number of parameters, the syntax block is written like this:

```js
unshift(element0)
unshift(element0, element1)
unshift(element0, element1, /* … ,*/ elementN)
```

#### Parameters section

Next, include a "Parameters" subsection, which explains what each parameter should be, in a description list. Parameters that are objects containing multiple members can include a nested description list, which itself includes an explanation of what each member should be. Optional parameters should be marked with an \\{{optional_inline}} macro call next to their name in the description term.

The name of each parameter in the list should be contained in a {{HTMLElement("code")}} block.

> **Note:** Even if the feature does not take any parameters, you need to include a "Parameters" section, with content of "None".

#### Return value section

Next, include a "Return value" subsection, which explains what the return value of the constructor or method is. See the above links as examples.

If there is no return value, use the following text:

None (\\{{jsxref("undefined")}}).

#### Exceptions section

Finally, include an "Exceptions" subsection, which explains what exceptions can be thrown if a problem is encountered when invoking the constructor/method. This could be because a parameter name has been misspelled or it has been given a value of the wrong datatype, because there is a problem with the environment it is being invoked in (e.g. trying to run a secure context-only feature in a non-secure context), or some other reason.

Determining what exceptions are thrown by a method can require a good perusal of the specification. Looking through the spec's step-by-step explanation of how a feature operates will generally provide a solid list of the exceptions and the situations that cause them to be thrown.

The exception names and explanations should be included in a description list.

> **Note:** If no exceptions can be raised on the feature, you don't need to include an "Exceptions" section, but you can if you wish include it with content of "None".

### Properties

#### Value section

Properties contain no syntax section. Instead, add a "Value" section containing an explanation of the property's value. Describe its data type and what its purpose is.

#### Exceptions section

If accessing the property can throw an exception, include an "Exceptions" subsection explaining each exception; this should be set up just like the one described for methods and constructors above.

## JavaScript reference syntax

JavaScript built-in object reference pages follow the same basic rules as API reference pages; e.g. for methods and properties. There are a few differences that you might observe:

- For built-in objects with a single constructor, the constructor syntax is often included on the object landing page. See {{JSxRef("Date")}} for example. You'll notice that static methods (those that exist on the `Date` object itself) are listed under "Methods", whereas instance methods are listed under "Date.prototype methods".
- You'll also notice that methods that have no parameters/exceptions are more likely to have those subsections not included at all on JavaScript reference pages. See {{JSxRef("Date.getDate()")}} and {{JSxRef("Date.now()")}} for examples.

## CSS reference syntax

### Properties

CSS property reference pages include a "Syntax" section, which used to be found at the top of the page but is increasingly commonly found below a section containing a block of code showing typical usage of the feature, plus a live example to illustrate what the feature does (see {{CSSxRef("animation")}} for example).

> **Note:** We do this because CSS formal syntax is complex, not used by many of the MDN readership, and off-putting for beginners. Real syntax and examples are more useful to the majority of people.

Inside the syntax section you'll find the following contents.

#### Optional explanation text

Some CSS properties are self-explanatory and don't really need extra explanation (for example {{CSSxRef("color")}}). Some on the other hand are more complex and need explanation on syntax order, including multiple values, etc. (see {{CSSxRef("animation")}}). In such cases you can include extra explanation before any of the subsections.

#### Values section

Next, you should include a "Values" section — this contains a description list explaining the CSS value types that make up the value of the property. Each value type should be wrapped in angle brackets and linked to the MDN reference page covering that value type if a page exists for it. For example, see the {{CSSxRef("border")}} property reference — this reference three value types, only one of which is linked ({{CSSxRef("&lt;color&gt;")}}).

#### Formal syntax

The last section, "Formal syntax", is automatically generated from the data included in the [MDN data repo](https://github.com/mdn/data)'s CSS directory. You just need to include a `CSSSyntax` macro call below the title, and it will take care of the rest.

The only complication arises from making sure the data you need is present. The [properties.json](https://github.com/mdn/data/blob/main/css/properties.json) file needs to contain an entry for the property you are documenting, and the [types.json](https://github.com/mdn/data/blob/main/css/types.json) file needs to contain an entry for all of the value types used in the property's value.

You need to do this by forking the [MDN data repo](https://github.com/mdn/data), cloning your fork locally, making the changes in a new branch, then submitting a pull request against the upstream repo. You can [find more details about using Git here](/en-US/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables#preparing_to_add_the_data).

### Selectors

The "Syntax" section of selector reference pages is much simpler than that of property pages. It contains one block styled using the "Syntax Box" style, which shows the basic syntax of the selector, whether it is just a simple keyword (e.g. {{CSSxRef(":hover")}}), or a more complex function value that takes a parameter (e.g. {{CSSxRef(":not", ":not()")}}). Sometimes the parameter is explained in a further entry inside the syntax block (see {{CSSxRef(":nth-last-of-type", ":nth-last-of-type()")}} for an example).

This block is automatically generated from the data included in the [MDN data repo](https://github.com/mdn/data)'s CSS directory. You just need to include a `CSSSyntax` macro call below the title, and it will take care of the rest.

The only complication arises from making sure the data you need is present. The [selectors.json](https://github.com/mdn/data/blob/main/css/selectors.json) file needs to contain an entry for the selector you are documenting.

You need to do this by forking the [MDN data repo](https://github.com/mdn/data), cloning your fork locally, making the changes in a new branch, then submitting a pull request against the upstream repo. You can [find more details about using Git here](/en-US/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables#preparing_to_add_the_data).

## HTML reference syntax

HTML reference pages don't have "Syntax" sections — the syntax is always just the element name surrounded by angle brackets, so it isn't needed. The main thing you need to know about HTML elements is what attributes they take and what their values can be, and this is covered in a separate "Attributes" section. See {{htmlelement("ol")}} and {{htmlelement("video")}} for examples.

## HTTP reference syntax

HTTP reference syntax is all manually created, and differs depending on what type of HTTP feature you are documenting.

### HTTP headers/Content-Security-Policy

HTTP header syntax (and Content-Security-Policy) is documented in two separate sections on the page — "Syntax" and "Directives".

#### Syntax section

The "Syntax" section shows what a header's syntax will look like, using a syntax block styled using the "Syntax Box" style, including formal syntax to show exactly what directives can be included in the value, in what order, etc. For example, the {{HTTPHeader("If-None-Match")}} header's syntax block looks like this:

```plain
If-None-Match: <etag_value>
If-None-Match: <etag_value>, <etag_value>, …
If-None-Match: *
```

Some headers will have separate request directive, response directive, and extension syntax. If available, these must be included in separate syntax blocks, each under its own subsection. See {{HTTPHeader("Cache-Control")}} for an example.

#### Directive section

The "Directive" section contains a description list containing the names and descriptions of all the directives that can appear inside the syntax.

### HTTP request methods

Request method syntax is really simple, just containing a syntax block styled using the "Syntax Box" style that shows how the method syntax is structured. The syntax for the [GET method](/en-US/docs/Web/HTTP/Methods/GET) looks like this:

```plain
GET /index.html
```

### HTTP response status codes

Again, the syntax for HTTP response status codes is really simple — a syntax block including the code and name. For example:

```plain
404 Not Found
```

## SVG reference syntax

### SVG elements

SVG element syntax sections are non-existent — just like HTML element syntax sections. Each SVG element reference page just includes a list of the attributes that can apply to that element. See {{SVGElement("feTile")}} for example.

### SVG attributes

SVG attribute reference pages also do not include syntax sections.

## See also

- [Markdown in MDN](/en-US/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#example_code_blocks)

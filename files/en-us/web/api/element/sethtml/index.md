---
title: "Element: setHTML() method"
short-title: setHTML()
slug: Web/API/Element/setHTML
page-type: web-api-instance-method
browser-compat: api.Element.setHTML
---

{{APIRef("HTML Sanitizer API")}}

The **`setHTML()`** method of the {{domxref("Element")}} interface provides an XSS-safe method to parse and sanitize a string of HTML and then insert it into the DOM as a subtree of the element.

The method drops any elements in the HTML input string that are invalid in the context of the current element, such as a {{htmlelement("col")}} element outside of a {{htmlelement("table")}}.
It then removes any HTML entities that aren't allowed by the sanitizer configuration, and further removes any XSS-unsafe elements or attributes — whether or not they are allowed by the sanitizer configuration.

If no sanitizer configuration is specified in the `options.sanitizer` parameter, `setHTML()` is used with the default {{domxref("Sanitizer")}} configuration, which broadly allows all elements and attributes other than those that are considered unsafe.
A custom sanitizer or sanitizer configuration can be specified to choose which elements, attributes, and comments are allowed or removed.
Note that even if unsafe options are allowed by the sanitizer configuration, they will still be removed when using this method (which implicitly calls {{domxref('Sanitizer.removeUnsafe()')}}).

The method should be used instead of {{domxref("Element.innerHTML")}} for inserting untrusted strings of HTML into an element.
It should also be used instead of {{domxref("Element.setHTMLUnsafe()")}}, unless there is a specific need to allow unsafe elements and attributes.

## Syntax

```js-nolint
setHTML(input)
setHTML(input, options)
```

### Parameters

- `input`
  - : A string defining HTML to be sanitized and injected into the element.
- `options` {{optional_inline}}

  - : An options object with the following optional parameters:

    - `sanitizer`
      - : A {{domxref("Sanitizer")}} or {{domxref("SanitizerConfig")}} object which defines what elements of the input will be allowed or removed, or the string `"default"` for the default configuration.
        Note that generally a `"Sanitizer` is expected than the to be more efficient than a `SanitizerConfig` if the configuration is to reused.
        If not specified, the default sanitizer is used.

### Return value

None (`undefined`).

### Exceptions

None.

## Examples

### Using the default sanitizer

This example shows how to use the default sanitizer to safely insert a string of HTML into an element.

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 150px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.textContent += text;
}
```

#### JavaScript

The example first checks if the {{domxref("Sanitizer")}} is supported.
The code then creates an HTML string that contains XSS-unsafe content, including the {{htmlelement("script")}} element and an event handler attribute.

We create a {{htmlelement("div")}} element and call `setHTML()` to safely parse in the string.
Both the original HTML string and the result of parsing it are then logged.

```js
if ("Sanitizer" in window) {
  // Define unsafe string of HTML
  const unsanitizedString = `
  <div>
    <p>This is a paragraph. <span onclick="alert('You clicked the span!')">Click me</span></p>
    <script src="path/to/amodule.js" type="module"
  </div>
`;
  // Create a div element (or get one from the document)
  const divElement = document.createElement("div");

  // Set the content of the element using the default sanitizer
  divElement.setHTML(unsanitizedString);

  // Or we could have created it explicitly!
  // const defaultSanitizer = new Sanitizer();
  // divElement.setHTML(unsanitizedString, { sanitizer: defaultSanitizer });

  // Log the unsanitized string
  log(`unsanitizedString: ${unsanitizedString}`);
  // Log the content of the element as a string
  log(`\nsanitizedString: ${divElement.innerHTML}`);
} else {
  log("The HTML Sanitizer API is NOT supported in this browser.");
  // Provide fallback or alternative behavior
}
```

#### Results

The content of both the unsanitized string and the sanitized HTML that was injected are shown below.
Note that even though we didn't specify a {{domxref("Sanitizer")}}, because `setHTML()` is a safe method the `<script>` element and the event handler attributes have been removed.

{{EmbedLiveSample("Using the default sanitizer","100","200px")}}

### Using a custom sanitizer

This example shows how to sanitize a string of HTML using a custom sanitizer.

Note that for brevity, the code to check whether the interface is supported and to log the results is hidden.

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 150px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.textContent += text;
}
```

#### JavaScript

```js hidden
if ("Sanitizer" in window) {
  // Define unsafe string of HTML
```

The string of unsafe HTML is the same as in the previous example.
We also create the element on which we'll set the HTML string in the same way (we could also get and set the HTML on any other element in the document).

```js
const unsanitizedString = `
  <div>
    <p>This is a paragraph. <span onclick="alert('You clicked the span!')">Click me</span></p>
    <script src="path/to/amodule.js" type="module"
  </div>
`;

// Create a div element
const divElement = document.createElement("div");
```

Next we define our sanitizer using a {{domxref("SanitizerConfig")}} option that allows a number of elements and set it to our HTML.
Note that here we have allowed the {{htmlelement("script")}} element, which is unsafe.

```js
// Create sanitizer
const sanitizer1 = new Sanitizer({ elements: ["div", "p", "span", "script"] });
divElement.setHTML(unsanitizedString, { sanitizer: sanitizer1 });
```

```js hidden
  log(`unsanitizedString: ${unsanitizedString}`);

  // Log the content of the element as a string
  log(`\nsanitizedString: ${divElement.innerHTML}`);
} else {
  log("The HTML Sanitizer API is NOT supported in this browser.");
  // Provide fallback or alternative behavior
}
```

#### Results

The content of the string before sanitization and the HTML content of the element that was set are shown below.

Note that even though we allowed the unsafe `<script>` element and didn't say anything about the event handlers, these have been stripped from the injected HTML because we're using the "safe" method that implicitly calls {{domxref('Sanitizer.removeUnsafe()')}} on the passed sanitizer.

{{EmbedLiveSample("Using a custom sanitizer","100","200px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element.setHTMLUnsafe()")}}
- {{domxref("ShadowRoot.setHTML()")}} and {{domxref("ShadowRoot.setHTMLUnsafe()")}}
- {{domxref("Document.parseHTML()")}} and {{domxref("Document.parseHTMLUnsafe()")}}
- [HTML Sanitizer API](/en-US/docs/Web/API/HTML_Sanitizer_API)

---
title: Using the HTML Sanitizer API
slug: Web/API/HTML_Sanitizer_API/Using_the_HTML_Sanitizer_API
page-type: guide
---

{{DefaultAPISidebar("HTML Sanitizer API")}}

The [HTML Sanitizer API](/en-US/docs/Web/API/HTML_Sanitizer_API/Using_the_HTML_Sanitizer_API) provides methods that allow developers to safely inject untrusted HTML into an {{domxref("Element")}}, a {{domxref("ShadowRoot")}}, or a {{domxref("Document")}} "by default".

The API also gives developers the flexibility to further restrict or expand what HTML entities are allowed if needed.

## Safe sanitization by default

The most common use case for the API is to safely inject a user-provided string into an {{domxref("Element")}}.
Unless the string to be injected _needs_ to contain unsafe HTML entities, you can use {{domxref('Element.setHTML()')}} as a drop in replacement for {{domxref("Element.innerHTML")}}.

For example, the following code will remove all XSS-unsafe elements and attributes in the input string (in this case the {{htmlelement("script")}} element), along with any elements that aren't permitted as children of the target element by the HTML specification:

```js
const untrustedString = "abc <script>alert(1)<" + "/script> def";
const someTargetElement = document.getElementById("target");

// someElement.innerHTML = untrustedString;
someElement.setHTML(untrustedString);

console.log(target.innerHTML); //abc def
```

## Further restricting safe sanitization

You can further restrict the HTML entities that are allowed by passing a {{domxref('Sanitizer')}} in the second argument.
This might further reduce the risk of malicious input in the case that you know that only a few HTML elements are permitted.

For example, the sanitizer below would only allow {{htmlelement("p")}} and {{htmlelement("a")}} elements:

```js
const untrustedString =
  '<p>See <a href="http://example.com">A link</a></p> <div>div text</div> <script>alert(1)<' +
  "/script> for more";
const someTargetElement = document.getElementById("target");

sanitizerOne = Sanitizer({ elements: ["p", "a"] });
sanitizerOne.allowAttribute("href");
someElement.setHTML(untrustedString, { sanitizer: sanitizerOne });

// Log result
console.log(target.innerHTML); //<p>See <a href="http://example.com">A link</a></p> for more'
```

Note that you can't make the sanitization any less safe by specifying an unsafe sanitizer with a safe method.
The unsafe HTML entities are always removed from the input.

The the other XSS-safe methods, {{domxref('ShadowRoot.setHTML()')}} and {{domxref('Document/parseHTML_static','Document.parseHTML()')}}, are used in the same way.

## Allowing unsafe sanitization

Sometimes your use case might require that input needs to contain potentially unsafe elements or attributes.
In this case you can use one of the API XSS-unsafe methods: {{domxref('Element.setHTMLUnsafe()')}}, {{domxref('ShadowRoot.setHTMLUnsafe()')}}, and {{domxref('Document/parseHTMLUnsafe_static','Document.parseHTMLUnsafe()')}}.

Below we start from the default sanitizer, which only allows safe elements.
For the purpose of the demonstration, we then allow the the `onclick` handler, but only on `button` elements.

```js
const untrustedString = '<button onclick="alert(1)">Button text</button>';
const someTargetElement = document.getElementById("target");

sanitizerOne = Sanitizer(); //default sanitizer
sanitizerOne.allowElement({ name: "button", attributes: ["onclick"] });
someElement.setHTMLUnsafe(untrustedString, { sanitizer: sanitizerOne });
```

With this code the `alert(1)` would be allowed, and there is a potential issue that the attribute might be used for malicious purposes.
However we know that all other XSS unsafe entities have been removed, so we only need to worry about this one case

## Allow and remove configurations

## Working with attributes

## Comments and data attributes

## Sanitizer vs SanitizerConfig

## Querying the configuration

## Examples

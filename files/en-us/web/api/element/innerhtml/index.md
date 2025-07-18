---
title: "Element: innerHTML property"
short-title: innerHTML
slug: Web/API/Element/innerHTML
page-type: web-api-instance-property
browser-compat: api.Element.innerHTML
---

{{APIRef("DOM")}}

> [!WARNING]
> This property parses its input as HTML, writing the result into the DOM.
> APIs like this are known as [injection sinks](/en-US/docs/Web/API/Trusted_Types_API#concepts_and_usage), and are potentially a vector for [cross-site-scripting (XSS)](/en-US/docs/Web/Security/Attacks/XSS) attacks, if the input originally came from an attacker.
>
> You can reduce the risk by assigning {{domxref("TrustedHTML")}} objects instead of strings, and [enforcing trusted type](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) using the [`require-trusted-types-for`](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP directive.
> This ensures that the input is passed through a transformation function, which has the chance to [sanitize](/en-US/docs/Web/Security/Attacks/XSS#sanitization) the input to remove potentially dangerous markup, such as {{htmlelement("script")}} elements and event handler attributes.

> [!NOTE]
> When possible you should use {{domxref("Element.setHTML()")}} as a drop-in replacement for `innerHTML`.
> It is much safer as it automatically filters all potentially unsafe markup.
>
> {{domxref("Element.setHTMLUnsafe()")}} is recommended if you need to allow a few specific unsafe elements or attributes (including those disallowed by `innerHTML`, such as {{htmlelement("script")}}).

The **`innerHTML`** property of the {{domxref("Element")}} interface gets or sets the HTML or XML markup contained within the element, omitting any {{glossary("shadow tree", "shadow roots")}} in both cases.

To insert the HTML into the document rather than replace the contents of an element, use the method {{domxref("Element.insertAdjacentHTML", "insertAdjacentHTML()")}}.

## Value

Getting the property returns a string containing the HTML serialization of the element's descendants.

Setting the value of `innerHTML` removes all of the element's descendants and replaces them with nodes constructed by parsing the HTML given in the assigned {{domxref("TrustedHTML")}} or string.
When set to the `null` value, that `null` value is converted to the empty string (`""`), so `elt.innerHTML = null` is equivalent to `elt.innerHTML = ""`.
Note that {{htmlelement("script")}} elements in the assigned value are injected but not executed.

Shadow roots are dropped from the serialized and injected HTML.

### Exceptions

- `SyntaxError` {{domxref("DOMException")}}
  - : Thrown if an attempt was made to set the value of `innerHTML` using a string which is not properly-formed HTML.
- `TypeError`
  - : Thrown if the property is set to a string when [Trusted Types](/en-US/docs/Web/API/Trusted_Types_API) are [enforced by a CSP](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) and no default policy is defined.
- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : Thrown if an attempt was made to insert the HTML into a node whose parent is a {{domxref("Document")}}.

## Description

`innerHTML` gets a serialization of the nested child DOM elements within the element, or sets HTML or XML that should be parsed to replace the DOM tree within the element.

The serialization of the DOM tree read from the property does not include {{glossary("shadow tree", "shadow roots")}} — if you want to get a HTML string that includes shadow roots, you must instead use the {{domxref("Element.getHTML()")}} or {{domxref("ShadowRoot.getHTML()")}} methods.

Similarly, when setting element content using `innerHTML`, the HTML string is parsed into DOM elements that do not contain shadow roots.
So for example [`<template>`](/en-US/docs/Web/HTML/Reference/Elements/template) is parsed into as {{domxref("HTMLTemplateElement")}}, whether or not the [`shadowrootmode`](/en-US/docs/Web/HTML/Reference/Elements/template#shadowrootmode) attribute is specified.
In order to set an element's contents from an HTML string that includes declarative shadow roots, you must instead use {{domxref("Element.setHTML()")}}, {{domxref("Element.setHTMLUnsafe()")}}, {{domxref("ShadowRoot.setHTML()")}}, or {{domxref("ShadowRoot.setHTMLUnsafe()")}}.

Note that some browsers serialize the `<` and `>` characters as `&lt;` and `&gt;` when they appear in attribute values (see [Browser compatibility](#browser_compatibility)).
This is to prevent a potential security vulnerability ([mutation XSS](https://research.securitum.com/dompurify-bypass-using-mxss/)) in which an attacker can craft input that bypasses a [sanitization function](/en-US/docs/Web/Security/Attacks/XSS#sanitization), enabling a cross-site scripting (XSS) attack.

### Security considerations

[Cross-site-scripting (XSS)](/en-US/docs/Web/Security/Attacks/XSS) attacks succeed when potentially unsafe strings provided by a user are injected into the DOM without first being sanitized.
The `innerHTML` property is probably the most commonly vector for these attacks, as historically it has done little more than preventing {{HTMLElement("script")}} elements from executing when they are injected.

Unfortunately there are many other ways that attackers can craft HTML to run malicious JavaScript.
For example, the following example would execute the code in the `error` event handler, because the {{htmlelement("img")}} `src` value is not a valid image URL:

```js
const name = "<img src='x' onerror='alert(1)'>";
el.innerHTML = name; // shows the alert
```

You can mitigate these issues by always assigning {{domxref("TrustedHTML")}} objects instead of strings, and [enforcing trusted type](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) using the [`require-trusted-types-for`](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP directive.
This ensures that the input is passed through a transformation function, which has the chance to [sanitize](/en-US/docs/Web/Security/Attacks/XSS#sanitization) the input to remove potentially dangerous markup before it is injected.

For example we would create a policy that defines a function `createHTML()` to transform an input string to a (theoretically) safe output, and use it to transform our potentially malicious input — in this case the same string as used in the previous code.
We'd then assign this newly created object to our `innerHTML` property.

```js
const myHTMLPolicy = trustedTypes.createPolicy("my-policy", {
  createHTML: (inputString) => {
    // Perform some transformation on inputString (usually sanitization)
    return transformedInputString;
  },
});

// The potentially malicious string
const name = "<img src='x' onerror='alert(1)'>";

// Create a trusted string using the policy
const trustedHtml = myHTMLPolicy.createHTML(name);

// Inject the trusted string
el.innerHTML = trustedHtml;
```

Note that for this to work we'd also need to set the CSP headers that enforce trusted types.

### Recommended alternatives

{{domxref("Element.setHTML()")}} or {{domxref("ShadowRoot.setHTML()")}} should be used as a drop-in replacement when inserting HTML that does not need any XSS-unsafe elements or attributes: which should be true in most cases.
These automatically remove all XSS-unsafe entities in a context-aware manner, and let you to further restrict allowed elements and attributes if needed.

This is better than trusted types because you don't have to craft your own transformation function or rely on external sanitization libraries.
In addition, the browser will improve its filtering with time, and has an understanding of context that an external library won't have.

{{domxref("Element.setHTMLUnsafe()")}} or {{domxref("ShadowRoot.setHTMLUnsafe()")}} should be used when you need to allow some XSS-unsafe elements or attributes.
For example you can define a default sanitizer (which removes all unsafe elements) and then modify it to allow just the unsafe elements that are needed in the particular case.
The methods allows you complete flexibility over what elements are allowed or disallowed, so unlike `innerHTML` you can also use them to inject and execute `<script>` elements.

{{domxref("Node.textContent")}} should be used when you know that the user provided content should be plain text.
This prevents it being parsed at HTML, and is the safest option of all.

## Examples

### Reading the HTML contents of an element

Reading `innerHTML` causes the user agent to serialize the HTML or XML fragment comprised of the element's descendants.
The resulting string is returned.

```js
const contents = myElement.innerHTML;
```

This lets you look at the HTML markup of the element's content nodes.

> [!NOTE]
> The returned HTML or XML fragment is generated based on the current contents of the element, so the markup and formatting of the returned fragment probably won't match the original page markup.

### Replacing the contents of an element

Setting the value of `innerHTML` lets you easily replace the existing contents of an element with new content.

> [!WARNING]
> This is a [security risk](#security_considerations) if the string to be inserted might contain potentially malicious content.
> Used `TrustedHTML` to ensure that the content is sanitized before it is inserted.

For example, you can erase the entire contents of a document by clearing the contents of the document's {{domxref("Document.body", "body")}} attribute:

```js
document.body.textContent = "";
```

This example fetches the document's current HTML markup and replaces the `"<"` characters with the {{glossary("character reference")}} `"&lt;"`, thereby essentially converting the HTML into raw text.
This is then wrapped in a {{HTMLElement("pre")}} element.
Then the value of `innerHTML` is changed to this new string.
As a result, the document contents are replaced with a display of the page's entire source code.

```js
document.documentElement.innerHTML = `<pre>${document.documentElement.innerHTML.replace(
  /</g,
  "&lt;",
)}</pre>`;
```

### Appending HTML to an element

Setting the value of `innerHTML` lets you append new contents to the existing one of an element.

For example, we can append a new list item (`<li>`) to the existing list (`<ul>`):

#### HTML

```html
<ul id="list">
  <li><a href="#">Item 1</a></li>
  <li><a href="#">Item 2</a></li>
  <li><a href="#">Item 3</a></li>
</ul>
```

#### JavaScript

```js
const list = document.getElementById("list");

list.innerHTML += `<li><a href="#">Item ${list.children.length + 1}</a></li>`;
```

Please note that using `innerHTML` to append HTML elements (e.g., `el.innerHTML += "<a href='…'>link</a>"`) will result in the removal of any previously set event listeners.
That is, after you append any HTML element that way you won't be able to listen to the previously set event listeners.

## Adding a logging mechanism using innerHTML

This example uses `innerHTML` to create a mechanism for logging messages into a box on a web page.

#### JavaScript

```js
function log(msg) {
  const logElem = document.querySelector(".log");

  const time = new Date();
  const timeStr = time.toLocaleTimeString();
  logElem.innerHTML += `${timeStr}: ${msg}<br/>`;
}

log("Logging mouse events inside this container…");
```

The `log()` function creates the log output by getting the current time from a {{jsxref("Date")}} object using {{jsxref("Date.toLocaleTimeString", "toLocaleTimeString()")}}, and building a string with the timestamp and the message text.
Then the message is appended to the box with the class `"log"`.

We add a second method that logs information about {{domxref("MouseEvent")}} based events (such as {{domxref("Element/mousedown_event", "mousedown")}}, {{domxref("Element/click_event", "click")}}, and {{domxref("Element/mouseenter_event", "mouseenter")}}):

```js
function logEvent(event) {
  const msg = `Event <strong>${event.type}</strong> at <em>${event.clientX}, ${event.clientY}</em>`;
  log(msg);
}
```

Then we use this as the event handler for a number of mouse events on the box that contains our log:

```js
const boxElem = document.querySelector(".box");

boxElem.addEventListener("mousedown", logEvent);
boxElem.addEventListener("mouseup", logEvent);
boxElem.addEventListener("click", logEvent);
boxElem.addEventListener("mouseenter", logEvent);
boxElem.addEventListener("mouseleave", logEvent);
```

#### HTML

The HTML is quite simple for our example.

```html
<div class="box">
  <div><strong>Log:</strong></div>
  <div class="log"></div>
</div>
```

The {{HTMLElement("div")}} with the class `"box"` is just a container for layout purposes, presenting the contents with a box around it.
The `<div>` whose class is `"log"` is the container for the log text itself.

### CSS

The following CSS styles our example content.

```css
.box {
  width: 600px;
  height: 300px;
  border: 1px solid black;
  padding: 2px 4px;
  overflow-y: scroll;
  overflow-x: auto;
}

.log {
  margin-top: 8px;
  font-family: monospace;
}
```

#### Result

The resulting content looks like this.
You can see output into the log by moving the mouse in and out of the box, clicking in it, and so forth.

{{EmbedLiveSample("Adding a logging mechanism using innerHTML", 640, 350)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Node.textContent")}} and {{domxref("HTMLElement.innerText")}}
- {{domxref("Element.insertAdjacentHTML()")}}
- {{domxref("Element.outerHTML")}}
- Parsing HTML or XML into a DOM tree: {{domxref("DOMParser")}}
- Serializing a DOM tree into an XML string: {{domxref("XMLSerializer")}}
- {{domxref("Element.getHTML()")}}
- {{domxref("ShadowRoot.getHTML()")}}
- {{domxref("Element.setHTMLUnsafe()")}}
- {{domxref("ShadowRoot.setHTMLUnsafe()")}}

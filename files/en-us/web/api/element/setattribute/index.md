---
title: "Element: setAttribute() method"
short-title: setAttribute()
slug: Web/API/Element/setAttribute
page-type: web-api-instance-method
browser-compat: api.Element.setAttribute
---

{{APIRef("DOM")}}

> [!WARNING]
> This method can take attribute values that are parsed as HTML, a script, or as a script URL, depending on the attribute.
> APIs like this are known as [injection sinks](/en-US/docs/Web/API/Trusted_Types_API#concepts_and_usage), and are potentially a vector for [cross-site scripting (XSS)](/en-US/docs/Web/Security/Attacks/XSS) attacks, if the value originally came from an attacker.
>
> You can mitigate this risk by always passing the appropriate trusted type object ({{domxref("TrustedHTML")}}, {{domxref("TrustedScript")}}, or {{domxref("TrustedScriptURL")}}) instead of strings for those attributes that require them, and [enforcing trusted types](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> See [Security considerations](#security_considerations) for more information.

The **`setAttribute()`** method of the {{domxref("Element")}} interface sets the value of an attribute on the specified element.
If the attribute already exists, the value is updated; otherwise a new attribute is added with the specified name and value.

If you need to work with the {{domxref("Attr")}} node (such as cloning from another element) before adding it, you can use the {{domxref("Element.setAttributeNode()", "setAttributeNode()")}} method instead.

## Syntax

```js-nolint
setAttribute(name, value)
```

### Parameters

- `name`
  - : A string specifying the name of the attribute whose value is to be set.
    The attribute name is automatically converted to all lower-case when `setAttribute()` is called on an HTML element in an HTML document.
- `value`
  - : A trusted type or string containing the value to assign to the attribute.

    Trusted type instances must be passed for the following attributes when trusted types are enforced:
    - Event handler content attributes, such as `onclick` and `onload`, require a {{domxref("TrustedScript")}}.
    - {{domxref("HTMLIFrameElement.srcdoc")}} require a {{domxref("TrustedHTML")}} instance.
    - {{domxref("HTMLScriptElement.src")}} require a {{domxref("TrustedScriptURL")}} instance.
    - {{domxref("SVGScriptElement.href")}} require a {{domxref("TrustedScriptURL")}} instance.

    Trusted types are not enforced for other attributes, so a string or any trusted type may be passed.

    A specified non-string value specified is converted automatically into a string.

    Boolean attributes are considered to be `true` if they're present on the element at all.
    You should set `value` to the empty string (`""`) or the attribute's name, with no leading or trailing whitespace.
    See the [example](#examples) below for a practical demonstration.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `InvalidCharacterError` {{domxref("DOMException")}}
  - : Thrown if the [`name`](#name) value is not a valid [XML name](https://www.w3.org/TR/xml/#dt-name).
    For example, if it starts with a number, a hyphen, or a period, or contains characters other than alphanumeric characters, underscores, hyphens, or periods.
- `TypeError`
  - : Thrown if [`value`](#value) is passed a string instead of a trusted type object (for those attributes that require them) when [Trusted Types](/en-US/docs/Web/API/Trusted_Types_API) are [enforced by a CSP](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) and no default policy is defined.

## Description

**`setAttribute()`** sets the value of an attribute on the specified element.
If the attribute already exists, the value is updated; otherwise a new attribute is added with the specified name and value.

To set the value of a Boolean attribute, such as `disabled`, you can specify any value.
It doesn't matter what value you use, if the attribute is present its value is considered to be `true`.
By convention we enable boolean attributes by setting their value to either the name of the attribute or the empty string (`""`).
The absence of a boolean attribute means its value is `false`: must call {{domxref("Element.removeAttribute()")}} to "undo" the effect of enabling a boolean attribute

To get the current value of an attribute, use {{domxref("Element.getAttribute", "getAttribute()")}}; to remove an attribute, call {{domxref("Element.removeAttribute", "removeAttribute()")}}.

### Security considerations

[Some attributes](#value) can be used as a vector for [cross-site scripting (XSS)](/en-US/docs/Web/Security/Attacks/XSS) attacks, where potentially unsafe strings provided by a user are injected into the DOM without first being sanitized, or scripts are run that might contain malicious code.

For example, the following code shows how a potentially untrusted string provided by a user would be executed when the button is pressed.

```js
const button = document.querySelector("button");
const potentiallyUnsafeString = "alert(1)";
button.setAttribute("onclick", potentiallyUnsafeString);
```

You might similarly inject untrusted HTML into the DOM by setting the {{domxref("HTMLIFrameElement.srcdoc")}} attribute, or supply an untrusted URL to the {{domxref("HTMLScriptElement.src")}} or {{domxref("SVGScriptElement.href")}} attributes.

You can mitigate these issues by always assigning the appropriate trusted type object ({{domxref("TrustedHTML")}}, {{domxref("TrustedScript")}}, or {{domxref("TrustedScriptURL")}}) for each property instead of strings, and [enforcing trusted types](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) using the [`require-trusted-types-for`](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP directive.
This ensures that the input is passed through a transformation function, and potentially remove potentially dangerous markup before it is injected.

## Examples

### Setting safe attributes

This example uses `setAttribute()` to set the `name` and `disabled` attributes on a {{HTMLElement("button")}}.
These attributes are both XSS-safe.
Since their values are not executed or parsed as HTML into the DOM, we don't need to pass trusted types.

#### HTML

```html
<div>
  <button id="reset" type="button">Reset</button>
  <button id="toggle_disabled">Toggle</button>
</div>
<button id="hello_button">Some Text</button>
```

```css hidden
button {
  height: 30px;
  width: 100px;
  margin: 1em;
}
```

#### JavaScript

First we get the button element and set its `name` attribute to "helloButton" using `setAttribute()`.
To demonstrate that the attribute name did change, we then get the attribute text and display it on the button.

```js
const helloButton = document.querySelector("#hello_button");
helloButton.setAttribute("name", "helloButton");

// Set button text to name to show the attribute changed
helloButton.innerText = helloButton.getAttribute("name");
```

This code is for the reset button.
It simply reloads the frame.

```js
const reloadButton = document.querySelector("#reset");
reloadButton.addEventListener("click", () => document.location.reload());
```

Next we show how to set and reset a boolean attribute.
When the toggle button is clicked we check if the boolean `disabled` property is defined (this property reflects the `disabled` attribute, and is `true` if the button is disabled and `false` otherwise).
If the button is disabled we call {{domxref("Element.removeAttribute()")}} to remove the attribute, which in turn enables the button.
If the button is enabled, we disable the button by setting the `disabled` attribute to `"disabled"`.

```js
const toggleDisabledButton = document.querySelector("#toggle_disabled");

toggleDisabledButton.addEventListener("click", () => {
  if (helloButton.disabled) {
    // Button is disabled. Enable by removing attribute
    helloButton.removeAttribute("disabled");
  } else {
    // Button enabled. Disable by setting value to anything
    // (normally "" or "disabled")
    helloButton.setAttribute("disabled", "disabled");
  }
});
```

#### Results

The running example is shown below.
You can see that the bottom button text is "helloButton", as we've set the name property and then it used it to set the button text.
You can press the "Toggle" button to disable and enable the "helloButton".

{{ EmbedLiveSample('Setting safe attributes', '300', '150') }}

### Setting unsafe attributes

In this example we'll show how you might mitigate the risks of calling `setAttributes()` to set the {{domxref("HTMLIFrameElement.srcdoc", "srcdoc")}} attribute on an {{htmlelement("iframe")}}.
This attribute sets the source HTML of a frame, and can hence inject potentially untrusted or unsafe code into the DOM.

The approach would be similar for setting {{domxref("HTMLScriptElement.src","src")}} on HTML script elements, {{domxref("SVGScriptElement.href","href")}} on SVG script elements, and the `onXxxx` event handler attributes: the main difference is that you pass them different trusted type objects.

Trusted types are not yet supported on all browsers, so first we define the [trusted types tinyfill](/en-US/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
This acts as a transparent replacement for the Trusted Types JavaScript API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Next we create a {{domxref("TrustedTypePolicy")}} that defines a {{domxref("TrustedTypePolicy/createHTML", "createHTML()")}} for transforming an input string into {{domxref("TrustedHTML")}} instances.
Commonly implementations of `createHTML()` use a library such as [DOMPurify](https://github.com/cure53/DOMPurify) to sanitize the input as shown below:

```js
const policy = trustedTypes.createPolicy("my-policy", {
  createHTML: (input) => DOMPurify.sanitize(input),
});
```

Then we use this `policy` object to create a `TrustedHTML` object from the potentially unsafe input string, and assign the result to the element:

```js
// The potentially malicious string
const untrustedString = "<p>I might be XSS</p><img src='x' onerror='alert(1)'>";

// Create a TrustedHTML instance using the policy
const trustedHTML = policy.createHTML(untrustedString);

// Inject the TrustedHTML (which contains a trusted string)
const iframeElement = document.querySelector("#an_iframe");
iframeElement.setAttribute("srcdoc", trustedHTML);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element.hasAttribute()")}}
- {{domxref("Element.getAttribute()")}}
- {{domxref("Element.removeAttribute()")}}
- {{domxref("Element.toggleAttribute()")}}

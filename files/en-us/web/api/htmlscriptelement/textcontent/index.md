---
title: "HTMLScriptElement: textContent property"
short-title: textContent
slug: Web/API/HTMLScriptElement/textContent
page-type: web-api-instance-property
browser-compat: api.HTMLScriptElement.textContent
---

{{APIRef("DOM")}}

> [!WARNING]
> This property represents the text content of a script element, which may be executable depending on the script type.
> APIs like this are known as [injection sinks](/en-US/docs/Web/API/Trusted_Types_API#concepts_and_usage), and are potentially a vector for [cross-site-scripting (XSS)](/en-US/docs/Web/Security/Attacks/XSS) attacks.
>
> You can mitigate this risk by always assigning {{domxref("TrustedScript")}} objects instead of strings and [enforcing trusted types](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> See [Security considerations](#security_considerations) for more information.

The **`textContent`** property of the {{domxref("HTMLScriptElement")}} interface represents the inline text content of the {{HTMLElement("script")}} element.
It behaves in the same way as the {{domxref("HTMLScriptElement.text","text")}} and {{domxref("HTMLScriptElement.innerText","innerText")}} properties.

## Value

Getting the property returns a string containing the script's text.

Setting the property accepts either a {{domxref("TrustedScript")}} object or a string.

### Exceptions

- `TypeError`
  - : Thrown if the property is set to a string when [Trusted Types](/en-US/docs/Web/API/Trusted_Types_API) are [enforced by a CSP](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) and no default policy is defined.

## Description

The **`textContent`** property of the {{domxref("HTMLScriptElement")}} interface represents the text content inside the {{HTMLElement("script")}} element.

For an executable script {{domxref('HTMLScriptElement/type','type')}}, such as a module or classic script, this text is inline executable code.
For other types it might represent an import map, speculation rules, or some other kind of data block.

Note that if the {{domxref('HTMLScriptElement/src','src')}} property is set the content of the `textContent` property is ignored.

The `textContent` property is also defined on {{domxref("Node.textContent","Node")}} and can hence be used with other nodes (and elements).
When used with other elements it does not expect or enforce the assignment of a {{domxref("TrustedScript")}}.

### Security considerations

The `textContent` property — and identical `text` and `innerText` properties — are a possible vector for [Cross-site-scripting (XSS)](/en-US/docs/Web/Security/Attacks/XSS) attacks, where potentially unsafe strings provided by a user are executed.
For example, the following example assumes the `scriptElement` is an executable `<script>` element, and that `untrustedCode` was provided by a user:

```js
const untrustedCode = "alert('Potentially evil code!');";
scriptElement.textContent = untrustedCode; // shows the alert
```

You can mitigate these issues by always assigning {{domxref("TrustedScript")}} objects instead of strings, and [enforcing trusted type](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) using the [`require-trusted-types-for`](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP directive.
This ensures that the input is passed through a transformation function, which has the chance to [sanitize](/en-US/docs/Web/Security/Attacks/XSS#sanitization) or reject the text before it is injected.

The behavior of the transformation function will depend on the specific use case that requires a user provided script.
If possible you should lock the allowed scripts to exactly the code that you trust to run.
If that is not possible, you might allow or block the use of certain functions within the provided string.

## Examples

### Using TrustedScript

To mitigate the risk of XSS, we should always assign `TrustedScript` instances to the `textContent` property.

Trusted types are not yet supported on all browsers, so first we define the [trusted types tinyfill](/en-US/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
This acts as a transparent replacement for the trusted types JavaScript API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Next we create a {{domxref("TrustedTypePolicy")}} that defines a {{domxref("TrustedTypePolicy/createScript", "createScript()")}} method for transforming input strings into {{domxref("TrustedScript")}} instances.
For the purpose of this example we'll allow just exactly the script that we need.

```js
const policy = trustedTypes.createPolicy("inline-script-policy", {
  createScript(input) {
    // Here specify what scripts are safe to allow
    if (input === "const num = 10;\nconsole.log(num)") {
      return input; // allow this exact script
    }
    throw new TypeError(`Untrusted script blocked: ${input}`);
  },
});
```

Next we'll create the script element to which we will assign the value and get a handle to the element.

```html
<script id="el" type="text/javascript"></script>
```

```js
// Get the script element we're injecting the code into
const el = document.getElementById("el");
```

Then we use the `policy` object to create a `trustedScript` object from the potentially unsafe input string, and assign the result to the element:

```js
// The potentially malicious string
const untrustedScriptOne = "const num = 10;\nconsole.log(num)";

// Create a TrustedScript instance using the policy
const trustedScript = policy.createScript(untrustedScriptOne);

// Inject the TrustedScript (which contains a trusted string)
el.textContent = trustedScript;
```

### Comparing `textContent`, `text` and `innerText`

This example demonstrates that assigning a script to each of the text properties, such as `textContent`, results in the same value being read from all of the text properties.

Note that in this case we're not using the policy to create trusted scripts (for brevity we'll assume that the provided strings are trusted).

```js
// Set the textContent property
el.textContent = "console.log(10);";

console.log(`textContent: ${el.textContent}`);
// "textContent: console.log(10);"

console.log(`text: ${el.text}`);
// "text: console.log(10);"

console.log(`innerText: ${el.innerText}`);
// "innerText: console.log(10);"

// Set the text property
el.text = "const num = 10;\nconsole.log(num)";

console.log(`textContent: ${el.textContent}`);
// textContent: const num = 10; console.log(num)"

console.log(`text: ${el.text}`);
// "text: const num = 10; console.log(num)"

console.log(`innerText: ${el.innerText}`);
// "innerText: const num = 10; console.log(num)"

// Set the innerText property
el.innerText = "const num = 10;alert('Help')";

console.log(`textContent: ${el.textContent}`);
// textContent: const num = 10;alert('Help')"

console.log(`text: ${el.text}`);
// "text: const num = 10;alert('Help')"

console.log(`innerText: ${el.innerText}`);
// "innerText: const num = 10;alert('Help')"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLScriptElement.text","text")}}
- {{domxref("HTMLScriptElement.innerText","innerText")}}

---
title: "HTMLScriptElement: innerText property"
short-title: innerText
slug: Web/API/HTMLScriptElement/innerText
page-type: web-api-instance-property
browser-compat: api.HTMLScriptElement.innerText
---

{{APIRef("HTML DOM")}}

> [!WARNING]
> This property represents the text content of a script element, which may be executable depending on the script type.
> APIs like this are known as [injection sinks](/en-US/docs/Web/API/Trusted_Types_API#concepts_and_usage), and are potentially a vector for [cross-site-scripting (XSS)](/en-US/docs/Web/Security/Attacks/XSS) attacks.
>
> You can mitigate this risk by always assigning {{domxref("TrustedScript")}} objects instead of strings and [enforcing trusted types](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> See [Security considerations](#security_considerations) for more information.

The **`innerText`** property of the {{domxref("HTMLScriptElement")}} interface represents the text content inside the {{HTMLElement("script")}} element as though it were rendered text.

The rendered string is [slightly different](#text_vs_textcontent_vs_innertext) to the raw string returned by {{domxref("HTMLScriptElement.text", "text")}} and {{domxref("HTMLScriptElement.textContent", "textContent")}} but the differences should not change script execution.

The `innerText` property is also defined on {{domxref("HTMLElement.innerText","HTMLElement")}} and can hence be used with other elements.
When used with other elements it does not expect or enforce the assignment of a {{domxref("TrustedScript")}}.

## Value

Getting the property returns a string representing the rendered text content of an element.
If the element is not [being rendered](https://html.spec.whatwg.org/multipage/rendering.html#being-rendered) (for example, is detached from the document or is hidden from view), the returned value is the same as the {{domxref("HTMLScriptElement.textContent","textContent")}} property.

Setting the property accepts either a {{domxref("TrustedScript")}} object or a string.

## Description

The **`innerText`** property of the {{domxref("HTMLScriptElement")}} interface represents the text content inside the {{HTMLElement("script")}} element as though it were rendered text.

When the property is set, the input is normalized the same way as any other element's `innerText` — whitespace is collapsed and `\n` is converted into line breaks.
This produces the textual representation a user would obtain if a `<script>` element had visible rendering and they were to select its contents and copy them to the clipboard.

For an executable script {{domxref('HTMLScriptElement/type','type')}}, such as a module or classic script, this text is inline executable code.
For other types it might represent an import map, speculation rules, or some other kind of data block.

Note that if the {{domxref('HTMLScriptElement/src','src')}} property is set the content of the `innerText` property is ignored.

### `text` vs `textContent` vs `innerText`

The {{domxref("HTMLScriptElement.text", "text")}} and {{domxref("HTMLScriptElement.textContent", "textContent")}} properties of `HTMLScriptElement` are equivalent: both can be set with a `TrustedScript` object or string, and both return a string representing the content of the script element exactly as it was written to the element.
The main difference is that `textContent` is also defined on {{domxref("Node.textContent", "Node")}} and can be used with other elements to set their content with a string.

{{domxref("HTMLScriptElement.innerText", "innerText")}} will generally set and execute the text in the same way as the other methods, but may return a slightly different value.
The reason for this is that `innerText` is normalized when it is saved, collapsing spaces and converting `\n` to line breaks.
This does not change the execution of the text, but it does alter the text that is stored and returned.

### Security considerations

The `innerText` property is a possible vector for [Cross-site-scripting (XSS)](/en-US/docs/Web/Security/Attacks/XSS) attacks, where potentially unsafe strings provided by a user are executed.
For example, the following example assumes the `scriptElement` is an executable `<script>` element, and that `untrustedCode` was provided by a user:

```js
const untrustedCode = "alert('Potentially evil code!');";
scriptElement.innerText = untrustedCode; // shows the alert
```

You can mitigate these issues by always assigning {{domxref("TrustedScript")}} objects instead of strings, and [enforcing trusted type](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) using the [`require-trusted-types-for`](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP directive.
This ensures that the input is passed through a transformation function, which has the chance to [sanitize](/en-US/docs/Web/Security/Attacks/XSS#sanitization) or reject the text before it is injected.

The behavior of the transformation function will depend on the specific use case that requires a user provided script.
If possible you should lock the allowed scripts to exactly the code that you trust to run.
If that is not possible, you might allow or block the use of certain functions within the provided string.

## Examples

### Using TrustedScript

To mitigate the risk of XSS, we should always assign `TrustedScript` instances to the `innerText` property.

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
el.innerText = trustedScript;
```

### Comparing `innerText` to `textContent`

This example compares `innerText` with {{domxref("HTMLScriptElement.textContent")}}.
The result should be that `innerText` squashes any whitespace.

#### HTML

```html
<h3>Source element:</h3>
<script id="source">
const num = 10;       console.log(num);
const x = 5;
</script>
<h3>Result of textContent:</h3>
<textarea id="textContentOutput" rows="6" cols="40" readonly>…</textarea>
<h3>Result of innerText:</h3>
<textarea id="innerTextOutput" rows="6" cols="40" readonly>…</textarea>
```

#### JavaScript

```js
const source = document.getElementById("source");
const textContentOutput = document.getElementById("textContentOutput");
const innerTextOutput = document.getElementById("innerTextOutput");

textContentOutput.value = source.textContent;
innerTextOutput.value = source.innerText;
```

#### Result

{{EmbedLiveSample("Examples", 700, 450)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLElement.innerText")}}

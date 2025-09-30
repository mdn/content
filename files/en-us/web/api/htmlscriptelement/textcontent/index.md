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

The **`textContent`** property of the {{domxref("HTMLScriptElement")}} interface represents the inline text content of the script element.
It acts the same way as the {{domxref("HTMLScriptElement.text","text")}} property.

The `textContent` property is also defined on {{domxref("Node.textContent","Node")}} and can hence be used with other elements.
When used with other elements it does not expect or enforce the assignment of a {{domxref("TrustedScript")}}.
It is also different in that a {{domxref("HTMLScriptElement")}} is not expected to contain other elements, and will parse input as plain text rather than as HTML markup.

## Value

Getting the property returns a string containing the element's text.

Setting the property accepts either a {{domxref("TrustedScript")}} object or a string.

## Description

The **`textContent`** property of the {{domxref("HTMLScriptElement")}} interface represents the text content inside the {{HTMLElement("script")}} element.

For an executable script {{domxref('HTMLScriptElement/type','type')}}, such as a module or classic script, this text is inline executable code.
For other types it might represent an import map, speculation rules, or some other kind of data block.

Note that if the {{domxref('HTMLScriptElement/src','src')}} property is set the content of the `textContent` property is ignored.

### `text` vs `textContent` vs `innerText`

The `text` and {{domxref("HTMLScriptElement.textContent", "textContent")}} properties of `HTMLScriptElement` are equivalent: both can be set with a string or a `TrustedScript` type and both return a string representing the content of the script element.
The main difference is that {{domxref("Node.textContent", "textContent")}} is also defined on {{domxref("Node")}} and can be used with other elements to set their content with a string.

{{domxref("HTMLScriptElement.innerText", "innerText")}} will generally set and execute the text in the same way as the other methods, but may return a slightly different value.
The reason for this is that this property is designed for getting the rendered text of a string of HTML markup.
When setting the value the text is treated as a text node, which normalizes the string as if it were visible text (collapsing spaces and converting `\n` to line breaks).
This does not change the execution of the text, but it does alter the text that is stored and returned.

### Security considerations

The `textContent` property is a possible vector for [Cross-site-scripting (XSS)](/en-US/docs/Web/Security/Attacks/XSS) attacks, where potentially unsafe strings provided by a user are executed.
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

See [Examples](/en-US/docs/Web/API/HTMLScriptElement/text) in {{domxref("HTMLScriptElement")}} (the behaviour is the same).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLElement.innerText")}}
- {{domxref("Element.innerHTML")}}

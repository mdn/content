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

The **`innerText`** property of the {{domxref("HTMLScriptElement")}} interface represents the text content of the {{HTMLElement("script")}} element.
It behaves in the same way as the {{domxref("HTMLScriptElement.textContent","textContent")}} and {{domxref("HTMLScriptElement.text","text")}} properties.

## Value

Getting the property returns a string containing the scripts's text.

Setting the property accepts either a {{domxref("TrustedScript")}} object or a string.

### Exceptions

- `TypeError`
  - : Thrown if the property is set to a string when [Trusted Types](/en-US/docs/Web/API/Trusted_Types_API) are [enforced by a CSP](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) and no default policy is defined.

## Description

The **`innerText`** property of the {{domxref("HTMLScriptElement")}} interface represents the text content inside the {{HTMLElement("script")}} element.

For an executable script {{domxref('HTMLScriptElement/type','type')}}, such as a module or classic script, this text is inline executable code.
For other types it might represent an import map, speculation rules, or some other kind of data block.

Note that if the {{domxref('HTMLScriptElement/src','src')}} property is set the content of the `innerText` property is ignored.

The `innerText` property is also defined on {{domxref("HTMLElement.innerText","HTMLElement")}} and can hence be used with other elements.
When used with other elements, the property does not expect or enforce the assignment of a {{domxref("TrustedScript")}}.

### Security considerations

See [security considerations](/en-US/docs/Web/API/HTMLScriptElement/textContent#security_considerations) in {{domxref("HTMLScriptElement.textContent")}} (the considerations are the same for `text`, `textContent` and `innerText` properties).

## Examples

See the [Examples](/en-US/docs/Web/API/HTMLScriptElement/textContent#examples) in {{domxref("HTMLScriptElement.textContent")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLElement.innerText")}}

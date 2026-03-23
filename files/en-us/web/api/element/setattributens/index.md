---
title: "Element: setAttributeNS() method"
short-title: setAttributeNS()
slug: Web/API/Element/setAttributeNS
page-type: web-api-instance-method
browser-compat: api.Element.setAttributeNS
---

{{ APIRef("DOM") }}

> [!WARNING]
> This method can take attribute values that are parsed as HTML, a script, or as a script URL, depending on the attribute.
> APIs like this are known as [injection sinks](/en-US/docs/Web/API/Trusted_Types_API#concepts_and_usage), and are potentially a vector for [cross-site scripting (XSS)](/en-US/docs/Web/Security/Attacks/XSS) attacks, if the value originally came from an attacker.
>
> You can mitigate this risk by always passing the appropriate trusted type object ({{domxref("TrustedHTML")}}, {{domxref("TrustedScript")}}, or {{domxref("TrustedScriptURL")}}) instead of strings for those attributes that require them, and [enforcing trusted types](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> See [Security considerations](/en-US/docs/Web/API/Element/setAttribute#security_considerations) in {{domxref("Element.setAttribute()")}} for more information.

The **`setAttributeNS()`** method of the {{domxref("Element")}} interface adds a new attribute or changes the value of an attribute with the given namespace and name.

If you are working with HTML documents and you don't need to specify the requested attribute as being part of a specific namespace, use the {{domxref("Element.setAttribute()", "setAttribute()")}} method instead.

## Syntax

```js-nolint
setAttributeNS(namespaceURI, qualifiedName, value)
```

### Parameters

- `namespaceURI`
  - : A string specifying the namespace of the attribute to set, or the empty string.

- `qualifiedName`
  - : A string identifying the attribute by its qualified name, which has the format `prefix:localName` or `localName`, where the parts are defined as:
    - `prefix`
      - : A "short alias" for the namespace.
        The prefix is optional, but if it is specified the `namespaceURI` parameter must also be specified.
        If the prefix is set to `xml` or `xmlns`, the `namespaceURI` must be set to `http://www.w3.org/XML/1998/namespace` or `http://www.w3.org/2000/xmlns/`, respectively.

    - `localName`
      - : The local name of the attribute.

- `value`
  - : A trusted type or string containing the value to assign to the attribute.

    Trusted type instances must be passed for the following attributes when trusted types are enforced:
    - Event handler content attributes, such as `onclick` and `onload`, require a {{domxref("TrustedScript")}}.
    - {{domxref("HTMLIFrameElement.srcdoc")}} require a {{domxref("TrustedHTML")}} instance.
    - {{domxref("HTMLScriptElement.src")}} require a {{domxref("TrustedScriptURL")}} instance.
    - {{domxref("SVGScriptElement.href")}} require a {{domxref("TrustedScriptURL")}} instance.

    Trusted types are not enforced for other attributes, so a string or any trusted type may be passed.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `NamespaceError` {{domxref("DOMException")}}
  - : Thrown if the [`namespaceURI`](#namespaceURI) value is:
    - not a valid namespace URI.
    - set to the empty string when `prefix` has a value.
    - not the value `http://www.w3.org/XML/1998/namespace` or `http://www.w3.org/2000/xmlns/` when [`prefix`](#prefix) is set to `xml` or `xmlns`, respectively.
- `InvalidCharacterError` {{domxref("DOMException")}}
  - : Thrown if either the [`prefix`](#prefix) or [`localName`](#localname) is not valid:
    - The `prefix` must have at least one character, and cannot contain ASCII whitespace, `NULL`, `/`, or `>` (U+0000, U+002F, or U+003E, respectively).
    - The `localName` must have at least one character, and may not contain ASCII whitespace, `NULL`, `/`, `=` or `>` (U+0000, U+002F, U+003D, or U+003E, respectively).

    > [!NOTE]
    > Earlier versions of the specification were more restrictive, requiring that the `qualifiedName` be a valid [XML name](https://www.w3.org/TR/xml/#dt-name).

- `TypeError`
  - : Thrown if [`value`](#value) is passed a string instead of a trusted type object (for those attributes that require them) when [Trusted Types](/en-US/docs/Web/API/Trusted_Types_API) are [enforced by a CSP](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) and no default policy is defined.

## Examples

### Basic usage

```js
let d = document.getElementById("d1");
d.setAttributeNS(
  "http://www.mozilla.org/ns/specialspace",
  "spec:align",
  "center",
);
```

### Trusted types

The [Setting unsafe attributes](/en-US/docs/Web/API/Element/setAttribute#setting_unsafe_attributes) example in `setAttribute()` shows how you might use `setAttributeNS()` with the [trusted types](/en-US/docs/Web/API/Trusted_Types_API).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element.hasAttributeNS()")}}
- {{domxref("Element.getAttributeNS()")}}
- {{domxref("Element.removeAttributeNS()")}}
- {{domxref("Element.setAttribute()")}}

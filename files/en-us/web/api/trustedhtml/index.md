---
title: TrustedHTML
slug: Web/API/TrustedHTML
tags:
  - API
  - Interface
  - Reference
  - TrustedHTML
browser-compat: api.TrustedHTML
---
{{DefaultAPISidebar("Trusted Types API")}}

The **`TrustedHTML`** interface of the {{domxref('Trusted Types API')}} represents a string that a developer can insert into an [injection sink](/en-US/docs/Web/API/Trusted_Types_API#injection_sinks) that will render it as HTML. These objects are created via {{domxref("TrustedTypePolicy.createHTML", "TrustedTypePolicy.createHTML()")}} and therefore have no constructor.

The value of a **TrustedHTML** object is set when the object is created and cannot be changed by JavaScript as there is no setter exposed.

## Methods

- {{domxref("TrustedHTML.toJSON()")}}
  - : Returns a JSON representation of the stored data.
- {{domxref("TrustedHTML.toString()")}}
  - : A {{domxref("DOMString","string")}} containing the sanitized HTML.

## Examples

In the below example we create a policy that will create {{domxref("TrustedHTML")}} objects using {{domxref("TrustedTypePolicyFactory.createPolicy()")}}. We can then use {{domxref("TrustedTypePolicy.createHTML")}} to create a sanitized HTML string to be inserted into the document.

The sanitized value can then be used with {{domxref("Element.innerHTML")}} to ensure that no new HTML elements can be injected.

```html
<div id="myDiv"></div>
```

```js
const escapeHTMLPolicy = trustedTypes.createPolicy("myEscapePolicy", {
  createHTML: (string) => string.replace(/\>/g, "<")
});

let el = document.getElementById("myDiv");
const escaped = escapeHTMLPolicy.createHTML("<img src=x onerror=alert(1)>");
console.log(escaped instanceof TrustedHTML); // true
el.innerHTML = escaped;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Prevent DOM-based cross-site scripting vulnerabilities with Trusted Types](https://web.dev/trusted-types/)

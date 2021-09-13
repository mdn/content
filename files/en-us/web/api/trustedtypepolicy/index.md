---
title: TrustedTypePolicy
slug: Web/API/TrustedTypePolicy
tags:
  - API
  - Interface
  - Reference
  - TrustedTypePolicy
browser-compat: api.TrustedTypePolicy
---
{{DefaultAPISidebar("Trusted Types API")}}

The **`TrustedTypePolicy`** interface of the {{domxref('Trusted Types API')}} defines a group of functions which create {{domxref('TrustedType')}} objects.

A `TrustedTypePolicy` object is created by {{domxref("TrustedTypePolicyFactory.createPolicy","TrustedTypePolicyFactory.createPolicy()")}} to define a policy for enforcing security rules on input. Therefore, `TrustedTypePolicy` has no constructor.

## Properties

- {{domxref("TrustedTypePolicy.name")}}{{ReadOnlyInline}}
  - : A {{domxref("DOMString")}} containing the name of the policy.

## Methods

- {{domxref("TrustedTypePolicy.createHTML","TrustedTypePolicy.createHTML()")}}
  - : Creates a {{domxref("TrustedHTML")}} object.
- {{domxref("TrustedTypePolicy.createScript","TrustedTypePolicy.createScript()")}}
  - : Creates a {{domxref("TrustedScript")}} object.
- {{domxref("TrustedTypePolicy.createScriptURL","TrustedTypePolicy.createScriptURL()")}}
  - : Creates a {{domxref("TrustedScriptURL")}} object.

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

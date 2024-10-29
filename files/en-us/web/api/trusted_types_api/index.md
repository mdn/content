---
title: Trusted Types API
slug: Web/API/Trusted_Types_API
page-type: web-api-overview
browser-compat: api.trustedTypes
spec-urls: https://w3c.github.io/trusted-types/dist/spec/
---

{{DefaultAPISidebar("Trusted Types API")}}{{AvailableInWorkers}}

The **Trusted Types API** gives web developers a way to lock down the insecure parts of the {{domxref("Document Object Model","DOM API", "", "nocode")}} to prevent client-side {{Glossary("Cross-site scripting")}} (XSS) attacks.

## Concepts and Usage

Client-side, or DOM-based, XSS attacks happen when data controlled by a user (such as that input into a form field) reaches a function that can execute that data. These functions are known as _injection sinks_. DOM-based XSS attacks happen when a user is able to write arbitrary JavaScript code and have it executed by one of these functions.

The Trusted Types API locks down risky injection sinks, requiring you to process the data before passing it to one of these functions. If you use a string, then the browser will throw a {{jsxref("TypeError")}} and prevent the use of the function.

Trusted Types works alongside [Content-Security Policy](/en-US/docs/Web/HTTP/CSP) with the {{CSP("trusted-types")}} and {{CSP("require-trusted-types-for")}} directives.

### Injection Sinks

The Trusted Types API locks down injection sinks that can act as a vector for DOM-XSS attacks. An injection sink is any Web API function that should only be called with trusted, validated or sanitized input. Examples of injection sinks include:

- Functions that insert HTML into the document such as {{domxref("Element.innerHTML")}}, {{domxref("Element.outerHTML")}}, or {{domxref("Document.write()")}}.
- Functions that create a new same-origin {{domxref("Document")}} with caller-controlled markup such as {{domxref("DOMParser.parseFromString()")}}.
- Functions that execute code such as {{jsxref("Global_Objects/eval", "eval()")}}.
- Setters for {{domxref("Element")}} attributes that accept a URL of code to load or execute.

Trusted Types will force you to process the data before passing it to any injection sink rather than use a string. This ensures that the data is trustworthy.

### Trusted Type Policies

A policy is a factory for Trusted Types. Web developers can specify a set of policies used for the creation of typed objects which form the trusted codebase for valid Trusted Type objects.

## Interfaces

- {{domxref("TrustedHTML")}}
  - : Represents a string to insert into an injection sink that will render it as HTML.
- {{domxref("TrustedScript")}}
  - : Represents a string to insert into an injection sink that could lead to the script being executed.
- {{domxref("TrustedScriptURL")}}
  - : Represents a string to insert into an injection sink that will parse it as a URL of an external script resource.
- {{domxref("TrustedTypePolicy")}}
  - : Defines the functions used to create the above Trusted Type objects.
- {{domxref("TrustedTypePolicyFactory")}}
  - : Creates policies and verifies that Trusted Type object instances were created via one of the policies.

## Examples

In the below example we create a policy that will create {{domxref("TrustedHTML")}} objects using {{domxref("TrustedTypePolicyFactory.createPolicy()")}}. We can then use {{domxref("TrustedTypePolicy.createHTML()")}} to create a sanitized HTML string to be inserted into the document.

The sanitized value can then be used with {{domxref("Element.innerHTML")}} to ensure that no new HTML elements can be injected.

```html
<div id="myDiv"></div>
```

```js
const escapeHTMLPolicy = trustedTypes.createPolicy("myEscapePolicy", {
  createHTML: (string) =>
    string
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&apos;"),
});

let el = document.getElementById("myDiv");
const escaped = escapeHTMLPolicy.createHTML("<img src=x onerror=alert(1)>");
console.log(escaped instanceof TrustedHTML); // true
el.innerHTML = escaped;
```

Read more about this example, and discover other ways to sanitize input in the article [Prevent DOM-based cross-site scripting vulnerabilities with Trusted Types](https://web.dev/articles/trusted-types).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Prevent DOM-based cross-site scripting vulnerabilities with Trusted Types](https://web.dev/articles/trusted-types)
- [Trusted Types polyfill](https://github.com/w3c/trusted-types#polyfill) (also available as an [npm package](https://www.npmjs.com/package/trusted-types))

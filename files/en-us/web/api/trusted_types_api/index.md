---
title: Trusted Types API
slug: Web/API/Trusted_Types_API
page-type: web-api-overview
browser-compat: api.trustedTypes
spec-urls: https://w3c.github.io/trusted-types/dist/spec/
---

{{DefaultAPISidebar("Trusted Types API")}}{{AvailableInWorkers}}

The **Trusted Types API** gives web developers a way to ensure that input has been passed through a user-specified transformation function before being passed to an API that might execute that input. This can help to protect against client-side [cross-site scripting (XSS)](/en-US/docs/Web/Security/Attacks/XSS) attacks. Most commonly the transformation function [sanitizes](/en-US/docs/Web/Security/Attacks/XSS#sanitization) the input.

## Concepts and usage

Client-side, or DOM-based, XSS attacks happen when data crafted by an attacker is passed to a browser API that executes that data as code. These APIs are known as _injection sinks_.

The Trusted Types API distinguishes three sorts of injection sinks:

- **HTML sinks**: APIs that interpret their input as HTML, such as {{domxref("Element.innerHTML")}} or {{domxref("Document.write()", "document.write()")}}. These APIs could execute JavaScript if it is embedded in the HTML, for example in {{htmlelement("script")}} tags or event handler attributes.
- **JavaScript sinks**: APIs that interpret their input as JavaScript, such as {{jsxref("Global_Objects/eval", "eval()")}} or {{domxref("HTMLScriptElement.text")}}.
- **JavaScript URL sinks**: APIs that interpret their input as the URL of a script, such as {{domxref("HTMLScriptElement.src")}}.

One of the main defenses against DOM-based XSS attacks is to ensure that input is made safe before being passed to an injection sink.

In the Trusted Types API, a developer defines a _policy object_, which contains methods that transform input bound for an injection sink so as to make it safe. The policy can define different methods for the different types of sink:

- For HTML sinks, the transformation function typically [sanitizes](/en-US/docs/Web/Security/Attacks/XSS#sanitization) the input, for example by using a library like [DOMPurify](https://github.com/cure53/DOMPurify).
- For JavaScript and JavaScript URL sinks, the policy may turn off the sinks entirely or allow certain predefined inputs (for example, specific URLs).

The Trusted Types API will then ensure that input is passed through the appropriate transformation function before being passed into the sink.

That is, the API enables you to define your policy in one place and then be assured that any data passed to an injection sink has been passed through the policy.

> [!NOTE]
>
> The Trusted Types API does _not_ itself supply a policy or any transformation functions: the developer defines their own policy, which contains the transformations that they wish to apply.

The API has two main parts:

- A JavaScript API enables a developer to sanitize data before passing it to an injection sink.
- Two [CSP](/en-US/docs/Web/HTTP/CSP) directives enforce and control the usage of the JavaScript API.

### The Trusted Types JavaScript API

In the Trusted Types API:

- The `trustedTypes` global property, available in both {{domxref("Window.trustedTypes", "Window")}} and {{domxref("WorkerGlobalScope.trustedTypes", "Worker")}} contexts, is used to create {{domxref("TrustedTypePolicy")}} objects.
- A {{domxref("TrustedTypePolicy")}} object is used to create trusted type objects: it will do this by passing the data through a transformation function.
- Trusted type objects represent data that has been through the policy, and can therefore be safely passed to an injection sink. There are three sorts of trusted type, corresponding to the different sort of injection sink:
  - {{domxref("TrustedHTML")}} is for passing to a sink that will render the data as HTML.
  - {{domxref("TrustedScript")}} is for passing to a sink that will execute the data as JavaScript.
  - {{domxref("TrustedScriptURL")}} is for passing to a sink that will parse the data as a URL to a script.

With this API, instead of passing a string to an injection sink like `innerHTML`, you use a `TrustedTypePolicy` to create a `TrustedHTML` object from the string, then pass that into the sink, and can be sure that the string has been passed through a transformation function.

For example, this code creates a `TrustedTypePolicy` that can create `TrustedHTML` objects by sanitizing the input strings with the [DOMPurify](https://github.com/cure53/DOMPurify) library:

```js
const policy = trustedTypes.createPolicy("my-policy", {
  createHTML: (input) => DOMPurify.sanitize(input),
});
```

Next, you can use this `policy` object to create a `TrustedHTML` object, and pass that object into the injection sink:

```js
const userInput = "<p>I might be XSS</p>";
const element = document.querySelector("#container");

const trustedHTML = policy.createHTML(userInput);
element.innerHTML = trustedHTML;
```

### Using a CSP to enforce trusted types

The API described above enables you to sanitize data, but it doesn't ensure that your code never passes input directly to an injection sink: that is, it doesn't stop you passing a string into `innerHTML`.

In order to enforce that a trusted type must always be passed, you include the {{CSP("require-trusted-types-for")}} directive in your [CSP](/en-US/docs/Web/HTTP/CSP).
With this directive set, passing strings into injection sinks will result in a `TypeError` exception:

```js example-bad
const userInput = "<p>I might be XSS</p>";
const element = document.querySelector("#container");

element.innerHTML = userInput; // Throws a TypeError
```

Additionally, the {{CSP("trusted-types")}} CSP directive can be used to control which policies your code is allowed to create. When you create a policy using {{domxref("TrustedTypePolicyFactory/createPolicy", "trustedTypes.createPolicy()")}}, you pass a name for the policy. The `trusted-types` CSP directive lists acceptable policy names, so `createPolicy()` will throw an exception if it is passed a name which was not listed in `trusted-types`. This prevents some code in your web application from creating a policy that you were not expecting.

### The default policy

In the Trusted Types API, you can define a _default policy_. This helps you find any places in your code where you're still passing strings into injection sinks, so you can rewrite the code to create and pass trusted types instead.

If you create a policy named `"default"`, and your CSP enforces the use of trusted types, then any string argument passed into injection sinks will be automatically passed to this policy. For example, suppose we create a policy like this:

```js
trustedTypes.createPolicy("default", {
  createHTML: (value) => {
    console.log("Please refactor this code");
    return sanitize(value);
  },
});
```

With this policy, if your code assigns a string to `innerHTML`, the browser will call the policy's `createHTML()` method and assign its result to the sink:

```js
const userInput = "<p>I might be XSS</p>";
const element = document.querySelector("#container");

element.innerHTML = userInput;
// Logs "Please refactor this code"
// Assigns the result of sanitize(userInput)
```

If the default policy returned `null` or `undefined`, then the browser will throw a `TypeError` when assigning the result to the sink:

```js
trustedTypes.createPolicy("default", {
  createHTML: (value) => {
    console.log("Please refactor this code");
    return null;
  },
});

const userInput = "<p>I might be XSS</p>";
const element = document.querySelector("#container");

element.innerHTML = userInput;
// Logs "Please refactor this code"
// Throws a TypeError
```

> [!NOTE]
> It's recommended that you use the default policy only while you are transitioning from legacy code that passes input directly to injection sinks, to code that uses trusted types explicitly.

### Cross-browser support for trusted types

The Trusted Types API is not yet available in all modern browsers, but it is usable everywhere today thanks to [compatibility aids created by the W3C](https://github.com/w3c/trusted-types/tree/main?tab=readme-ov-file#polyfill).

- The [_full_ polyfill](https://github.com/w3c/trusted-types/blob/main/src/polyfill/full.js) defines the JavaScript API, attempts to infer the CSP from the current document, and enforces the use of trusted types based on the inferred CSP.
- The [_API only_ polyfill](https://github.com/w3c/trusted-types/blob/main/src/polyfill/api_only.js) defines only the JavaScript API, and does not include the ability to enforce the use of trusted types using a CSP.

As well as these two polyfills, the W3C provides what it calls a _tinyfill_, which we'll explain in more detail below.

Note that as long as you have tested your code on a supporting browser with CSP enforcement enabled, then you don't need to use the _full polyfill_ above on other browsers — you can get the same benefits using the _API only polyfill_ or the _tinyfill_.

This is because the enforcement forces you to refactor your code to ensure that all data is passed through the Trusted Types API (and therefore has been through a sanitization function) before being passed to an injection sink.
If you then run the refactored code in a different browser without enforcement, it will still go through the same code paths, and give you the same protection.

#### Trusted Types tinyfill

In this section we'll look at how the trusted types tinyfill can protect a website, even though it doesn't add support for trusted types at all.

The trusted types tinyfill is just this:

```js
if (typeof trustedTypes == "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

It provides an implementation of `trustedTypes.createPolicy()` which just returns the [`policyOptions`](/en-US/docs/Web/API/TrustedTypePolicyFactory/createPolicy#policyoptions) object it was passed. The `policyOptions` object defines sanitization functions for data, and these functions are expected to return strings.

With this tinyfill in place, suppose we create a policy:

```js
const policy = trustedTypes.createPolicy("my-policy", {
  createHTML: (input) => DOMPurify.sanitize(input),
});
```

In browsers that support trusted types, this will return a `TrustedTypePolicy` which will create a `TrustedHTML` object when we call `policy.createHTML()`. The `TrustedHTML` object can then be passed to an injection sink, and we can enforce that the sink received a trusted type, rather than a string.

In browsers that don't support trusted types, this code will return an object with a `createHTML()` function that sanitizes its input and returns it as a string. The sanitized string can then be passed to an injection sink.

```js
const userInput = "I might be XSS";
const element = document.querySelector("#container");

const trustedHTML = policy.createHTML(userInput);
// In supporting browsers, trustedHTML is a TrustedHTML object.
// In non-supporting browsers, trustedHTML is a string.

element.innerHTML = trustedHTML;
// In supporting browsers, this will throw if trustedHTML
// is not a TrustedHTML object.
```

Either way, the injection sink gets sanitized data, and because we could enforce the use of the policy in the supporting browser, we know that this code path goes through the sanitization function in the non-supporting browser, too.

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

---
title: HTML Sanitizer API
slug: Web/API/HTML_Sanitizer_API
page-type: web-api-overview
browser-compat: api.Sanitizer
---

{{DefaultAPISidebar("HTML Sanitizer API")}}

The **HTML Sanitizer API** allows developers to take strings of HTML and filter out unwanted elements, attributes, and other HTML entities when they are inserted into the DOM or a shadow DOM.

## Concepts and usage

Web applications often need to work with untrusted HTML on the client side, for example, as part of a client-side templating solution, when rendering user generated content, or if including data in a frame from another site.

Injecting untrusted HTML can make a site vulnerable to various [types of attacks](/en-US/docs/Web/Security/Attacks).
In particular, [cross-site scripting (XSS) attacks](/en-US/docs/Web/Security/Attacks/XSS) work by injecting untrusted HTML into the DOM that then executes JavaScript in the context of the current origin — allowing malicious code to run as though it was served from the site's origin.
These attacks can be mitigated by removing unsafe HTML elements and attributes before they are injected into the DOM.

The HTML Sanitizer API provides a number of methods for removing unwanted HTML entities from HTML input before it is injected into the DOM.
These come in XSS-safe versions (for example, {{domxref("Element.setHTML()")}}) that enforce removal of all unsafe elements and attributes, and potentially unsafe versions (for example, {{domxref("Element.setHTMLUnsafe()")}}) that give developers full control over the HTML entities that are allowed.

### Sanitization methods

The HTML Sanitizer API provides XSS-safe and XSS-unsafe methods for injecting HTML strings into an {{domxref('Element')}}, a {{domxref('ShadowRoot')}} or {{domxref('CharacterData')}}, and for parsing HTML into a {{domxref('Document')}}.

All the methods take the HTML to be injected and an optional {{domxref("Sanitizer")}} or {{domxref("SanitizerConfig")}} as arguments. The sanitizer object defines the HTML entities that will be filtered out of the input before it is injected.

The methods are context aware, and will additionally drop any elements that the HTML specification does not allow in the target element.

Even after sanitizing HTML input with with these methods, it is still not safe to serialize the HTML and re-parse it using methods like `innerHTML`. See the [Re-parsing and mutated XSS (mXSS)](#re-parsing_and_mutated_xss_mxss) section later in this document.

#### Safe methods

- {{domxref('Document/parseHTML_static','Document.parseHTML()')}}
- {{domxref('Element.setHTML()')}} and {{domxref('ShadowRoot.setHTML()')}}
- {{domxref('Element.appendHTML()')}} and {{domxref('ShadowRoot.appendHTML()')}}
- {{domxref('Element.prependHTML()')}} and {{domxref('ShadowRoot.prependHTML()')}}
- {{domxref('Element.afterHTML()')}} and {{domxref('CharacterData.afterHTML()')}}
- {{domxref('Element.beforeHTML()')}} and {{domxref('CharacterData.beforeHTML()')}}
- {{domxref('Element.replaceWithHTML()')}} and {{domxref('CharacterData.replaceWithHTML()')}}

The safe methods always remove XSS-unsafe elements and attributes by applying the [XSS-safe baseline configuration](#xss-safe-baseline-configuration) which removes XSS-unsafe elements and attributes.

If no sanitizer is passed as a parameter they will use the [default sanitizer configuration](#default_sanitizer_configuration), which, on top of the XSS-safe baseline configuration, removes other elements and attributes that might be used in other kinds of attacks if provided as user input.

If a sanitizer is passed, it will be used on top of the XSS-safe baseline configuration. The XSS-safe baseline configuration cannot be removed from the safe methods.

The safe methods should be used instead of {{domxref("Element.innerHTML")}}, {{domxref("Element.outerHTML")}}, or {{domxref("ShadowRoot.innerHTML")}}, for injecting untrusted HTML content. For example, in most cases you can use {{domxref('Element.setHTML()')}} with the default sanitizer as a drop-in replacement for {{domxref("Element.innerHTML")}}.

The same methods can also be used for injecting trusted HTML strings that do not need to contain any XSS-unsafe elements.

Note that since these methods sanitize input strings of XSS-unsafe entities, it is not secured or validated using the [Trusted Types API](/en-US/docs/Web/API/Trusted_Types_API).

#### Unsafe methods

- {{domxref('Document/parseHTMLUnsafe_static','Document.parseHTMLUnsafe()')}}.
- {{domxref('Element.setHTMLUnsafe()')}}, {{domxref('ShadowRoot.setHTMLUnsafe()')}}
- {{domxref('Element.appendHTMLUnsafe()')}} and {{domxref('ShadowRoot.appendHTML()')}}
- {{domxref('Element.prependHTMLUnsafe()')}} and {{domxref('ShadowRoot.prependHTML()')}}
- {{domxref('Element.afterHTMLUnsafe()')}} and {{domxref('CharacterData.afterHTMLUnsafe()')}}
- {{domxref('Element.beforeHTMLUnsafe()')}} and {{domxref('CharacterData.beforeHTMLUnsafe()')}}
- {{domxref('Element.replaceWithHTMLUnsafe()')}} and {{domxref('CharacterData.replaceWithHTMLUnsafe()')}}

The unsafe methods will use whatever sanitizer configuration is passed as an argument. If no sanitizer is passed, then all HTML elements and attributes allowed by the context will be injected.

##### Security considerations of the unsafe methods

The suffix "Unsafe" in the method names indicates that they do not enforce removal of all XSS-unsafe HTML entities (unlike the "safe" methods like {{domxref("Element.setHTML()")}}).

While it can do so if used with an appropriate sanitizer, it doesn't have to use an effective sanitizer, or any sanitizer at all! The method is therefore a possible vector for [cross-site scripting (XSS)](/en-US/docs/Web/Security/Attacks/XSS) attacks, where potentially unsafe strings provided by a user are injected into the DOM without first being sanitized.

You should mitigate this risk by always passing {{domxref("TrustedHTML")}} objects instead of strings, and [enforcing trusted types](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) using the [`require-trusted-types-for`](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP directive.
This ensures that the input is passed through a transformation function, which has the chance to [sanitize](/en-US/docs/Web/Security/Attacks/XSS#sanitization) the input to remove potentially dangerous markup (such as {{htmlelement("script")}} elements and event handler attributes), before it is injected.

Using `TrustedHTML` makes it possible to audit and check that sanitization code is effective in just a few places, rather than scattered across all your injection sinks.
You should not have to pass a sanitizer to the method when using `TrustedHTML`.

If for any reason you can't use `TrustedHTML` (or even better, one of the safe methods) then the next safest option is to use the unsafe options with the [default sanitizer configuration](#Default_sanitizer_configuration), with limited overrides to allow the necessary elements and attributes preventing you from using the safe methods.

##### When should the unsafe methods be used?

The unsafe methods should almost never be used if the safe methods is available, because there are very few (if any) cases where user-provided HTML input should need to include XSS-unsafe elements. Not only are the safe methods safe (as per their name!), but it avoids having to consider trusted types.

Using the unsafe methods might be appropriate if you have an edge case where you have to allow HTML input that includes a known set of unsafe HTML entities.

You can't use `setHTML()` in this case, because it strips all unsafe entities. You could use `setHTMLUnsafe()` without a sanitizer or `innerHTML`, but that would allow all unsafe entities.

A better option here is to call `setHTMLUnsafe()` with a sanitizer that allows just those dangerous elements and attributes we actually need. While this is still unsafe, it is safer than allowing all of them. The best way of doing this is to use the [default sanitizer configuration](#default_sanitizer_configuration) with a modification to allow the dangerous elements and attributes.

Consider a situation where your code relies on being able to use unsafe `onclick` handlers.
The following code shows the effect of the different methods and sanitizers for this case.

```js
const target = document.querySelector("#target");

const input = "<img src=x onclick=alert('onclick') onerror=alert('onerror')>";

// Safe - removes all XSS-unsafe entities (including the `onclick` handler).
target.setHTML(input);

// Removes no event handler attributes so provides no protection.
target.setHTMLUnsafe(input);
target.innerHTML = input;

// Safe - removes all XSS-unsafe entities (including the `onclick` handler).
const configSafe = new Sanitizer();
target.setHTMLUnsafe(input, { sanitizer: configSafe });

// Removes all XSS-unsafe entities except `onclick`
const configLessSafe = new Sanitizer();
configLessSafe.allowAttribute("onclick");
target.setHTMLUnsafe(input, { sanitizer: configLessSafe });
```

#### Re-parsing and mutated XSS (mXSS)

Even after sanitizing HTML input with these methods, it is still not safe to serialize the HTML and re-parse it using `innerHTML`.

For example, the following code is unsafe.

```js example-bad
div.setHTML(unsafeString); // Safe
const serializedHTML = div.innerHTML; // No longer sanitized!
otherElement.innerHTML = serializedHTML;
```

The reason for this is that sanitization is context-aware. When you call `setHTML()` on a particular element, the unsafe elements and attributes for that context are removed. If you serialize the HTML and use it directly in another element, it may still contain elements that are unsafe in that element.

This would be safe (if pointless):

```js example-good
div.setHTML(unsafeString); // Safe
const serializedHTML = div.innerHTML; // Serialized as a plain string
otherDiv.setHTML(serializedHTML); // Safe — re-sanitized by setHTML()
```

There is a class of attacks that take advantage of this flaw, referred to as [mutation XSS](https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#sanitizer-security-mxss).

The simple rule to avoid this problem is to only ever inject HTML strings using safe methods such as `setHTML()`.

### Sanitizer configurations

A sanitizer configuration defines what HTML entities will be allowed, replaced, or removed when the sanitizer is used, including elements, attributes, `data-*` attributes, [processing instructions](/en-US/docs/Web/API/ProcessingInstruction) and comments.

There are two mechanisms for defining a sanitizer configuration, either of which can be passed to all the sanitization methods:

- {{domxref('SanitizerConfig')}} is a dictionary object that defines arrays for the allowed/disallowed elements and attributes and boolean properties that indicate whether comments and data attributes will be allowed or omitted, and so on.

  Only a subset of possible configuration options may be specified in a particular configuration in order to reduce redundancy and ambiguity.
  The allowed subset is summarized in the [Allow and remove configurations](#allow_and_remove_configurations) section below, and described in detail in [Valid configuration](/en-US/docs/Web/API/SanitizerConfig#valid_configuration).

- {{domxref('Sanitizer')}} is essentially a wrapper around a {{domxref('SanitizerConfig')}} that provides methods to ergonomically modify the configuration and ensure that it remains valid.

  For example, you can use a method to add an allowed element, and it will also remove the element from the `replaceWithChildrenElements` array (if present).
  The interface also provides methods to return a copy of the underlying {{domxref('SanitizerConfig')}} and also to update the sanitizer so that it is XSS-safe.
  It may provide normalizations of the sanitizer configuration used to construct it, making it easier to understand and reuse.

While you can use either interface in any of the sanitizing methods, `Sanitizer` is likely to be more efficient to share and reuse than `SanitizerConfig`.

#### Allow and remove configurations

You can build up a configuration in two ways:

- As an _allow configuration_: specifying the set of elements and/or attributes that you will allow in the output.
- As a _remove configuration_: specifying the set that must not be present in the output.

These sets are specified as arrays in the configuration object fields: `elements` and `attributes`, and `removeElements` and `removeAttributes`.
You may not specify both allow and remove arrays for elements or attributes in the same configuration, but other combinations of fields are allowed.
The following table shows the permitted combinations.

| Element arrays                | Attribute arrays                  | Valid? |
| ----------------------------- | --------------------------------- | ------ |
| `elements`                    | -                                 | ✔️     |
| `elements`                    | `attributes`                      | ✔️     |
| `elements`                    | `removeAttributes`                | ✔️     |
| `removeElements`              | -                                 | ✔️     |
| `removeElements`              | `attributes`                      | ✔️     |
| `removeElements`              | `removeAttributes`                | ✔️     |
| -                             | `attributes`                      | ✔️     |
| -                             | `removeAttributes`                | ✔️     |
| `elements` + `removeElements` | (anything)                        | ❌     |
| (anything)                    | `attributes` + `removeAttributes` | ❌     |
| -                             | -                                 | ✔️     |

An allow configuration can optionally specify whether per-element attributes should be allowed and/or removed in its `elements` array.
The allowed configuration for these local attributes depends on whether or not global `attributes` or `removedAttributes` is defined.
The [valid configuration](/en-US/docs/Web/API/SanitizerConfig#valid_configuration) section outlines the restrictions.

In general an "allow configuration" is safer for both the elements and attributes, because you list the elements and/or attributes that you want and know are safe, rather than all the items that are dangerous or might potentially be considered dangerous in future.
If you specify an empty configuration object then an empty allow configuration is used.

##### Allow configurations

With "allow configurations" you specify the elements and attributes you wish to _allow_ (or replace with child elements) — all other elements/attributes in the input will be dropped.
This makes it easy to understand what elements will be allowed in the DOM when the HTML is parsed.
They are useful when you know exactly what HTML entities you want to be able to inject in a particular context.

Allow configurations are created by defining a `Sanitizer` that wraps a {{domxref("SanitizerConfig")}} that includes the [`elements`](/en-US/docs/Web/API/SanitizerConfig#elements) and/or [`attributes`](/en-US/docs/Web/API/SanitizerConfig#attributes) arrays (and not the `removeElements` or `removeAttributes` arrays).

For example, the following configuration is created by passing a {{domxref('SanitizerConfig')}} that allows {{htmlelement("p")}} and {{htmlelement("div")}} elements, and `cite` and `onclick` attributes on any allowed element.
It will also replace {{htmlelement("b")}} elements with their child nodes.

```js
const sanitizer = new Sanitizer({
  elements: ["p", "div"],
  replaceWithChildrenElements: ["b"],
  attributes: ["cite", "onclick"],
});
```

The same configuration can also be created using {{domxref('Sanitizer')}} methods.
Note that in the following code the `Sanitizer()` constructor takes an empty object, which results in a `Sanitizer` where the underlying configuration includes both `elements` and `attributes` arrays — in other words, an "allow configuration".

```js
// Create empty sanitizer
const sanitizer = new Sanitizer({});

// Use Sanitizer methods to update the properties.
sanitizer.allowElement("p");
sanitizer.allowElement("div");
sanitizer.replaceElementWithChildren("b");
sanitizer.allowAttribute("cite");
sanitizer.allowAttribute("onclick");
```

##### Remove configurations

In "remove configurations" you specify the HTML elements and attributes that you want to remove: any other elements and attributes are permitted by the sanitizer (but may be blocked if you use a safe sanitizer method, or if the element is not allowed in the context).

Remove configurations are created using a {{domxref("SanitizerConfig")}} that includes the [`removeElements`](/en-US/docs/Web/API/SanitizerConfig#removeelements) and/or [`removeAttributes`](/en-US/docs/Web/API/SanitizerConfig#removeattributes) arrays (and not the `elements` or `attributes` arrays).

For example, the following `Sanitizer` configuration would remove the same elements that were allowed in the previous code:

```js
const sanitizer = new Sanitizer({
  removeElements: ["p", "div"],
  removeAttributes: ["cite", "onclick"],
  replaceWithChildrenElements: ["b"],
});
```

The configuration can also be created using {{domxref('Sanitizer')}} methods.
To make this a "remove configuration" we have to declare the `removeElements` or `removeAttributes` array when constructing the object (if only one array is specified the other will be defined as part of normalization).

```js
const sanitizer = new Sanitizer({
  removeElements: [],
});
sanitizer.removeElement("p");
sanitizer.removeElement("div");
sanitizer.replaceElementWithChildren("b");
sanitizer.removeAttribute("cite");
sanitizer.removeAttribute("onclick");
```

#### Adding and removing from `Sanitizer` configurations

{{domxref("Sanitizer")}} is recommended when you're using a configuration object that you might want to reuse or modify.
Whether the sanitizer has an allow or remove configuration depends on the {{domxref("SanitizerConfig")}} passed when the object is created.
For example, if you pass a configuration object that has the `elements` or `attributes` array (or an empty object) the sanitizer will have an allow configuration.

In the examples above we created an allow configuration and then called {{domxref("Sanitizer/allowElement","allowElement()")}}, {{domxref("Sanitizer/allowAttribute","allowAttribute()")}}, and {{domxref("Sanitizer/replaceElementWithChildren","replaceElementWithChildren()")}} to allow additional elements and attributes, and similarly we created a remove configuration and called {{domxref("Sanitizer/removeElement","removeElement()")}} and {{domxref("Sanitizer/removeAttribute","removeAttribute()")}} to specify additional elements to remove.

You can also call the allow methods on a remove configuration, and the remove methods on an allow configuration — but they behave differently.
When you call the allow methods on an allow sanitizer the specified elements and attributes are added to the underlying `elements` and `attributes` array.
However if you call those methods on a remove sanitizer there is no `elements` and `attributes` array; instead the specified element is _removed_ from the corresponding `removeElements` or `removeAttributes` array, if present.
This works because allowing an element in an allow sanitizer is the same as "not removing" an element in a remove sanitizer.

You can call all the `Sanitizer` methods on either an allow or remove sanitizer, and the method will make whatever changes it is able that result in a valid configuration.
For example, if you add an element the method will either add it to `elements` or remove it from `removeElements` if present, depending on the type of sanitizer, and also remove the same element from the [`replaceWithChildrenElements`](/en-US/docs/Web/API/SanitizerConfig#replacewithchildrenelements) array, if present.

Some operations that are possible for an allow configuration are not possible for a remove configuration.
For example, per-element attributes are defined in the `elements` array, which is not present in a remove sanitizer.

The methods return `true` or `false` to indicate whether or not they modified the underlying configuration.
So if you call `allowElement()` on an allow configuration and the specified element is not present, it will be added to the `elements` array and the method will return `true`.
But if the element is already present then the method would return `false`.
Note that if you call the same method to set a per-element attribute, this will return `false` if called on a remove sanitizer, because the change cannot be made.

### Built-in configurations

#### XSS-safe baseline configuration

The XSS-safe baseline configuration removes the items that are most commonly used in XSS attacks:

- Unsafe HTML elements: {{htmlelement("base")}}, {{htmlelement("embed")}}, {{htmlelement("frame")}}, {{htmlelement("iframe")}}, {{htmlelement("object")}}, and {{htmlelement("script")}}.
- Unsafe SVG elements: {{SVGElement("script")}} and SVG {{SVGElement("use")}}.
- All event handler attributes, such as `onafterprint` or `onbeforeinput`.
- [`javascript:` URLs](/en-US/docs/Web/URI/Reference/Schemes/javascript).

The XSS-safe baseline configuration is automatically applied to the [safe sanitization methods](#safe_methods). This baseline cannot be removed from the safe sanitization methods and any additional sanitizer (whether default or custom) is applied on top of this baseline configuration.

The XSS-safe baseline configuration is not used in [unsafe sanitization methods](#unsafe_methods).

You can also call {{domxref("Sanitizer/removeUnsafe","removeUnsafe()")}} on a {{domxref("Sanitizer")}} instance to apply the XSS-safe baseline configuration and make it XSS-safe.

#### Default sanitizer configuration

The default sanitizer configuration is more restrictive than the XSS-safe baseline. It defines the sanitizer that is used if you call one of the [safe sanitization methods](#safe_methods) without passing a sanitizer object.

It is also the configuration that is returned by the [`Sanitizer()` constructor](/en-US/docs/Web/API/Sanitizer/Sanitizer) when no configuration is set.

The default configuration is applied on top of the [XSS-safe baseline configuration](#xss-safe-baseline-configuration) and additionally removes the following items:

1. Elements that might be used in clickjacking, spoofing, or other attacks.
2. Attributes that might be used in clickjacking, spoofing, or other attacks.
3. Processing instructions and comments.
4. `data-*` attributes.

Therefore it provides a sanitizer with a minimal attack surface, which is still suitable for the majority of sanitization use cases.

For a listing of the allowed elements and attributes, see [Default sanitizer configuration](/en-US/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration).

### Sanitization and Trusted Types

The [Trusted Types API](/en-US/docs/Web/API/Trusted_Types_API) provides mechanisms to ensure that inputs are passed through a user-specified transformation function before being passed to an API that might execute that input.
This transformation function is most commonly used to sanitize the input but it doesn't have to: the purpose of the API is primarily to make it easy for developers to audit sanitization code, not to define how or if sanitization is done.

The safe HTML sanitization methods don't use trusted types.
Because they always filter all XSS-unsafe entities before input HTML is injected, there is no need to sanitize the input string, or audit the methods.

However the unsafe HTML sanitization methods may inject untrusted HTML, depending on the sanitizer, and so will work with trusted types.
The methods can take either a string or a `TrustedType` as input.
If a sanitizer is also supplied, the transformation function will be run first, and then the sanitizer.

Note that the behavior of the transformation function in this case will depend on the website policy (which might be to reject all use of the unsafe methods).

### Third-party sanitization libraries

Prior to the Sanitizer API, developers typically filtered input strings using third-party libraries such as [DOMPurify](https://github.com/cure53/DOMPurify), perhaps called from transformation functions in trusted types.

These should not be necessary when using the safe HTML sanitization methods as the API is integrated with the browser, and is more aware of the parsing context and what code is allowed to execute than external parser libraries can be.

They may be useful with the unsafe HTML methods and trusted types, depending on website trusted type policies.

## Interfaces

- {{domxref('Sanitizer')}}
  - : A reusable sanitizer configuration object that defines what elements and attributes should be allowed/removed when sanitizing untrusted strings of HTML.
    This is used in the methods that insert strings of HTML into the DOM or Document.
- {{domxref('SanitizerConfig')}}
  - : A dictionary that defines a sanitizer configuration.
    This can be used in the same places as {{domxref('Sanitizer')}} but is likely to be less efficient to use and reuse.

## Examples

The following examples show how to use the sanitizer API using the _default_ sanitizer.

### Using `Element.setHTML()` with the default sanitizer

In most cases calling `Element.setHTML()` without passing a sanitizer can be used as a drop-in replacement for {{domxref("Element.innerHTML")}}.
The code below demonstrates how the method is used to sanitize the HTML input before it is injected into an element with id of `target`.

```js
const untrustedString = "abc <script>alert(1)<" + "/script> def"; // Untrusted HTML (perhaps from user input)
const someTargetElement = document.getElementById("target");

// someElement.innerHTML = untrustedString;
someElement.setHTML(untrustedString);

console.log(target.innerHTML); // abc def
```

The `{{htmlelement("script")}}` element is not allowed by the default sanitizer, or by the `setHTML()` method, so the `alert()` is removed.

Note that using `Element.setHTMLUnsafe()` with the default sanitizer will sanitize the same HTML entities.
The main difference is that if you use this method with Trusted Types it may still be audited:

```js
someElement.setHTMLUnsafe(untrustedString);
```

### Using an allow sanitizer configuration

This code shows how you might use `Element.setHTMLUnsafe()` with an allow sanitizer that allows only {{htmlelement("p")}}, {{htmlelement("b")}}, and {{htmlelement("div")}} elements.
All other elements in the input string would be removed.

```js
const sanitizer = new Sanitizer({ elements: ["p", "b", "div"] });
someElement.setHTMLUnsafe(untrustedString, { sanitizer });
```

Note that in this case you should normally use `setHTML()`.
You should only use `Element.setHTMLUnsafe()` if you need to allow XSS-unsafe elements or attributes.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

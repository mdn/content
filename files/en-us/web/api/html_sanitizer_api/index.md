---
title: HTML Sanitizer API
slug: Web/API/HTML_Sanitizer_API
page-type: web-api-overview
status:
  - experimental
browser-compat: api.Sanitizer
sidebar:
  - defaultapisidebar:
      - HTML Sanitizer API
---

{{SeeCompatTable}}

The **HTML Sanitizer API** allows developers to take strings of HTML and filter out unwanted elements, attributes, and other HTML entities when they are inserted into the DOM or a shadow DOM.

## Concepts and usage

Web applications often need to work with untrusted HTML on the client side, for example, as part of a client-side templating solution, when rendering user generated content, or if including data in a frame from another site.

Injecting untrusted HTML can make a site vulnerable to various [types of attacks](/en-US/docs/Web/Security/Attacks).
In particular, [cross-site scripting (XSS) attacks](/en-US/docs/Web/Security/Attacks/XSS) work by injecting untrusted HTML into the DOM that then executes JavaScript in the context of the current origin — allowing malicious code to run as though it was served from the site's origin.
These attacks can be mitigated by removing unsafe HTML elements and attributes before they are injected into the DOM.

The HTML Sanitizer API provides a number of methods for removing unwanted HTML entities from HTML input before it is injected into the DOM.
These come in XSS-safe versions that enforce removal of all unsafe elements and attributes, and potentially unsafe versions that give developers full control over the HTML entities that are allowed.

### Sanitization methods

The HTML Sanitizer API provides XSS-safe and XSS-unsafe methods for injecting HTML strings into an {{domxref('Element')}} or a {{domxref('ShadowRoot')}}, and for parsing HTML into a {{domxref('Document')}}.

- Safe methods: {{domxref('Element.setHTML()')}}, {{domxref('ShadowRoot.setHTML()')}}, and {{domxref('Document/parseHTML_static','Document.parseHTML()')}}.
- Unsafe methods: {{domxref('Element.setHTMLUnsafe()')}}, {{domxref('ShadowRoot.setHTMLUnsafe()')}}, and {{domxref('Document/parseHTMLUnsafe_static','Document.parseHTMLUnsafe()')}}.

All the methods take the HTML to be injected and an optional [sanitizer configuration](#sanitizer_configuration) as arguments.
The configuration defines the HTML entities that will be filtered out of the input before it is injected.
The {{domxref('Element')}} methods are context aware, and will additionally drop any elements that the HTML specification does not allow in the target element.

The safe methods always remove XSS-unsafe elements and attributes.
If no sanitizer is passed as a parameter they will use the default sanitizer configuration, which allows all elements and attributes except those that are known to be unsafe, such as {{htmlelement("script")}} elements and `onclick` event handlers.
If a custom sanitizer is used, it is implicitly updated to remove any elements and attributes that are not XSS-safe (note that the passed sanitizer is not modified, and might still allow unsafe entities if used with an unsafe method).

The safe methods should be used instead of {{domxref("Element.innerHTML")}}, {{domxref("Element.outerHTML")}}, or {{domxref("ShadowRoot.innerHTML")}}, for injecting untrusted HTML content.
For example, in most case you can use `Element.setHTML()` with the default sanitizer as a drop-in replacement for {{domxref("Element.innerHTML")}}.
The same methods can also be used for injecting trusted HTML strings that do not need to contain any XSS-unsafe elements.

The XSS-unsafe methods will use whatever sanitizer configuration is passed as an argument.
If no sanitizer is passed, then all HTML elements and attributes allowed by the context will be injected.
This is similar to using {{domxref("Element.innerHTML")}} except that the method will parse shadow roots, drop elements that aren't appropriate in the context, and allow some other input that is not allowed when using the property.

The unsafe methods should only be used with untrusted HTML that needs to contain some XSS-unsafe elements or attributes.
This is still unsafe, but allows you to reduce the risk by restricting unsafe entities to the minimal set.
For example, if you wanted to inject unsafe HTML but for some reason you needed the input to include the `onblur` handler, you could more safely do so by amending the default sanitizer and using an unsafe method as shown:

```js
const sanitizer1 = Sanitizer(); // Default sanitizer
sanitizer.allowAttribute("onblur"); // Allow onblur

someElement.setHTMLUnsafe(untrustedString, { sanitizer: sanitizer1 });
```

### Sanitizer configuration

A sanitizer configuration defines what HTML entities will be allowed, replaced, or removed when the sanitizer is used, including elements, attributes, data-attributes, and comments.

There are two very closely related sanitizer configuration interfaces, either of which can be passed to all the sanitization methods.

- {{domxref('SanitizerConfig')}} is a dictionary object that defines arrays of elements or attributes that are allowed or disallowed when the configuration is used, properties that indicate whether comments and data attributes will be allowed or omitted, and so on.
- {{domxref('Sanitizer')}} is essentially a wrapper around a {{domxref('SanitizerConfig')}} that provides methods to ergonomically and consistently add and remove entities from the various lists in configuration.
  For example, you can use a method to add an allowed attribute, and it will also remove the attribute from the disallowed array (if present).
  The interface also provides methods to return a copy of the underlying {{domxref('SanitizerConfig')}} and also to update the sanitizer so that it is XSS-safe.
  It may provide normalizations of the sanitizer configuration used to construct it, making it easier to understand and reuse.

While you can use either interface in any of the sanitizing methods, `Sanitizer` is likely to be more efficient to share and reuse than `SanitizerConfig`.

#### Allow and remove configurations

You can build up a configuration in two ways: allow configurations and remove configurations.

In "allow configurations" you specify the elements and attributes you wish to _allow_ (or replace with child elements): all other elements/attributes in the input will be dropped.
For example, the following configuration allows only {{htmlelement("p")}} and {{htmlelement("div")}} elements, and `cite` and `onclick` attributes on any element.
It will also replace {{htmlelement("b")}} elements with their child nodes, effectively stripping the style their nested content.

```js
const sanitizer = Sanitizer({
  elements: ["p", "div"],
  replaceWithChildrenElements: ["b"],
  attributes: ["cite", "onclick"],
});
```

When an allow configuration is used, it is easy to understand what elements will be allowed in the DOM when the HTML is parsed.
They are useful when you know exactly what HTML entities you want to be able to inject in a particular context.

In "remove configurations" you specify the HTML elements and attributes that you want to remove: any other elements and attributes are permitted by the sanitizer (but may be blocked if you use a safe sanitizer method, or if the element is not allowed in the context).
For example, the following sanitizer would remove the same elements that were allowed in the previous code:

```js
const sanitizer = Sanitizer({
  removeElements: ["p", "div", "b"],
  removeAttributes: ["cite", "onclick"],
});
```

Remove configurations are useful when you want to use the default sanitizer settings, but perhaps restrict some additional entities.

Using both allow and remove configurations at the same time is discouraged, as it makes the configuration harder to understand and less efficient to parse.
Note that a configuration with both allowed and removed entities can always be reduced to an allow configuration where any entities in the original remove list have been dropped.

If you pass a {{domxref('SanitizerConfig')}} with both allow and remove configurations to the sanitizer methods they will throw a `TypeError`.
It is possible to create a configuration with both allow and remove lists when using {{domxref('Sanitizer')}}.
The allow lists are parsed first, if they contain any items, and then the remove lists.
The remove lists have little impact if there are any items in the allow list.

### Sanitization and Trusted Types

The [Trusted Types API](/en-US/docs/Web/API/Trusted_Types_API) provides mechanisms to ensure that inputs are passed through a user-specified transformation function before being passed to an API that might execute that input.
This transformation function is most commonly used to sanitize the input but it doesn't have to: the purpose of the API is primarily to make it easy for developers to audit sanitization code, not to define how or if sanitization is done.

The safe HTML sanitization methods don't need to work with trusted types.
Because they always filter all XSS-unsafe entities before input HTML is injected, there is no need to sanitize the input string, or audit the methods.

However the unsafe HTML sanitization methods may inject untrusted HTML, depending on the sanitizer, and so will work with trusted types.
The methods can take either a string or a `TrustedType` as input.
If a sanitizer is also supplied, the transformation function will be run first, and then the sanitizer.

Note that the transformation function doesn't have to sanitize the input string in this case (although it can), because you can use the sanitizer API for that.
What trusted types provide in this case is information about where potentially unsafe strings are injected, making it easier to locate them and check that the sanitizer is appropriately configured.

### Third party sanitization libraries

Prior to the Sanitizer API, developers typically filtered input strings using third-party libraries such as [DOMPurify](https://github.com/cure53/DOMPurify), perhaps called from transformation functions in trusted types.

It should not be necessary to still use these libraries when injecting untrusted HTML strings.
The API is integrated with the browser, and is more aware of the parsing context and what code is allowed to execute than external parser libraries can be.

## Interfaces

- {{domxref('Sanitizer')}} {{experimental_inline}}
  - : A reusable sanitizer configuration object that defines what elements and attributes should be allowed/removed when sanitizing untrusted strings of HTML.
    This is used in the methods that insert strings of HTML into the DOM or Document.
- {{domxref('SanitizerConfig')}}
  - : A dictionary that defines a sanitizer configuration.
    This can be used in the same places as {{domxref('Sanitizer')}} but is likely to be less efficient to use and reuse.

## Extensions to other interfaces

### XSS-safe methods

- {{domxref('Element.setHTML()')}}
  - : Parse a string of HTML into a subtree of nodes, dropping any elements that are invalid in the context of the element.
    Then drop any elements and attributes that are not allowed by the sanitizer configuration, and any that are considered XSS-unsafe (even if allowed by the configuration).
    The subtree is then inserted into the DOM as a subtree of the element.
- {{domxref('ShadowRoot.setHTML()')}}
  - : Parse a string of HTML into a subtree of nodes.
    Then drop any elements and attributes that are not allowed by the sanitizer configuration, and any that are considered XSS-unsafe (even if allowed by the configuration).
    The subtree is then inserted as a subtree of the `ShadowRoot`.
- {{domxref('Document/parseHTML_static','Document.parseHTML()')}}
  - : Parse a string of HTML into a subtree of nodes.
    Then drop any elements and attributes that are not allowed by the sanitizer configuration, and any that are considered XSS-unsafe (even if allowed by the configuration).
    The subtree is then set as the root of the {{domxref("Document")}}.

### XSS-unsafe methods

- {{domxref('Element.setHTMLUnsafe()')}}
  - : Parse a string of HTML into a subtree of nodes, dropping any elements that are invalid in the context of the element.
    Then drop any elements and attributes that are not allowed by the sanitizer: if no sanitizer is specified allow all elements.
    The subtree is then inserted into the DOM as a subtree of the element.
- {{domxref('ShadowRoot.setHTMLUnsafe()')}}
  - : Parse a string of HTML into a subtree of nodes.
    Then drop any elements and attributes that are not allowed by the sanitizer: if no sanitizer is specified allow all elements.
    The subtree is then inserted into as a subtree of the `ShadowRoot`.
- {{domxref('Document/parseHTMLUnsafe_static','Document.parseHTMLUnsafe()')}}
  - : Parse a string of HTML into a subtree of nodes.
    Then drop any elements and attributes that are not allowed by the sanitizer: if no sanitizer is specified allow all elements.
    The subtree is then set as the root of the {{domxref("Document")}}.

## Examples

The following examples show how to use the sanitizer API using the _default_ sanitizer (at time of writing configuration operations are not yet supported).

### Using `Element.setHTML()` with the default sanitizer

In most cases calling `Element.setHTML()` with the default sanitizer can be used as a drop-in replacement for {{domxref("Element.innerHTML")}}.
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
const sanitizer1 = new Sanitizer({ elements: ["p", "b", "div"] });
someElement.setHTMLUnsafe(untrustedString, { sanitizer: sanitizer1 });
```

Note that in this case you should normally use `setHTML()`.
You should only use `Element.setHTMLUnsafe()` if you need to allow XSS-unsafe elements or attributes.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

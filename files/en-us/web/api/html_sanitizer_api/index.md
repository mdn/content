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

Injecting untrusted HTML can make a site vulnerable to various [types of attacks](/en-US/docs/Web/Security/Types_of_attacks).
In particular [cross-site scripting (XSS) attacks](/en-US/docs/Web/Security/Attacks/XSS) work by injecting untrusted HTML into the DOM that then executes JavaScript in the context of the current origin — allowing malicious code to run as though it was served from the site's origin.
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

The safe methods always remove XSS-unsafe elements and attributes!
If no sanitizer is passed as a parameter they will use the default sanitizer configuration, which allows all elements and attributes except those that are known to be unsafe, such as `<script>` elements and `onclick` event handlers.
If a custom sanitizer is used, it is implicitly updated to remove any elements and attributes that are not XSS-safe (note that the passed sanitizer is not modified, and might still be unsafe if used with an unsafe method).

The safe methods should be used instead of {{domxref("Element.innerHTML")}}, {{domxref("Element.outerHTML")}}, or {{domxref("ShadowRoot.innerHTML")}}, for injecting untrusted HTML content.
They can also be used for injecting trusted HTML strings that do not need to contain any XSS-unsafe elements.

In most cases calling `Element.setHTML()` with the default sanitizer can be used as a drop-in replacement for {{domxref("Element.innerHTML")}}:

```js
const untrustedString = "abc <script>alert(1)<" + "/script> def"; // Unsanitized HTML (perhaps from user input)
const someTargetElement = document.getElementById("target");

// someElement.innerHTML = untrustedString;
someElement.setHTML(untrustedString);
```

The XSS-unsafe methods will use whatever sanitizer configuration is passed as an argument.
If no sanitizer is passed, then all HTML elements and attributes allowed by the context will be injected.
This is similar to using {{domxref("Element.innerHTML")}} except that the method will parse shadow roots, drop elements that aren't appropriate in the context, and allow some other input that is not allowed when using the property.

The unsafe methods can be used with untrusted HTML that needs to contain some XSS-unsafe elements or attributes, allowing you to reduce the risk to just those entities that are required.
For example, if you wanted to inject unsafe HTML but for some reason you needed the input to include the `onblur` handler, you could more safely do so by amending the default sanitizer and using an unsafe method as shown:

```js
const sanitizer1 = Sanitizer(); // Default sanitizer
sanitizer.removeAttribute("onblur");

someElement.setHTMLUnsafe(untrustedString, { sanitizer: sanitizer1 });
```

### Sanitizer configuration

A sanitizer configuration defines what HTML entities will be allowed, replaced, or removed when the sanitizer is used.
This includes elements, attributes, data-attributes, and comments.

There are two very closely related sanitizer configuration interfaces, either of which can be passed to all the sanitization methods.

- {{domxref('SanitizerConfig')}} is a dictionary object that defines arrays of elements or attributes that are allowed or disallowed when the configuration is used, properties that indicate whether comments and data attributes will be allowed or omitted, and so on.
- {{domxref('Sanitizer')}} is essentially a wrapper around a {{domxref('SanitizerConfig')}} that provides methods to ergonomically and consistently add and remove entities from the various lists in configuration: for example, you can use a method to add an allowed attribute, and it will also remove the attribute from the disallowed array (if present).
  The interface also provides methods to get the underlying {{domxref('SanitizerConfig')}} and also to update the sanitizer so that it is XSS-safe.
  It may provide normalizations of the sanitizer configuration used to construct it, making it easier to understand and reuse.

While you can use either interface in any of the sanitizing methods, `Sanitizer` is easier and more efficient to share and reuse than `SanitizerConfig`.

#### Allow or remove configurations

You can build up a configuration in two ways: allow configurations and remove configurations.

In "allow configurations" you specify the elements and attributes you wish to allow (or replace with child elements): any other elements/attributes in the input will be dropped.
For example, the following configuration allows {{htmlelement("p")}} and {{htmlelement("div")}} elements, and `cite` and `onclick` attributes on any element.
It will also replace {{htmlelement("b")}} elements with their child node, effectively stripping the style the content.

```js
const sanitizer = Sanitizer({
  elements: ["p", "div"],
  replaceWithChildrenElements: ["b"],
  attributes: ["cite", "onclick"],
});
```

Allow configurations are easy to read, and make are easier to understand what elements will be allowed in the DOM when the HTML is parsed.
They are useful when you know exactly what HTML entities you want to be able to inject.

In "remove configurations" you specify the HTML elements and attributes that you want to remove: any other elements and attributes are permitted by the sanitizer (but may be blocked if you use a safe sanitizer method, or if the element is not allowed in the context).
For example, the following sanitizer would remove the same elements that were allowed in the previous code:

```js
const sanitizer = Sanitizer({
  removeElements: ["p", "div", "b"],
  removeAttributes: ["cite", "onclick"],
});
```

Remove configurations are useful when you want to use the default sanitizer settings, but perhaps restrict some additional entities.

Using both allow and remove configurations at the same time is discouraged, as it makes the configuration harder to understand and less efficient to parse (an allow list and a remove list can always be reduced to an allow list where the remove lists items have been dropped).

If you pass a {{domxref('SanitizerConfig')}} with both kinds the sanitizer methods will throw a `TypeError`.
It is possible to create a configuration with both allow and remove lists when using {{domxref('Sanitizer')}}.
The allow lists are parsed first, if they contain any items, and then the remove lists.
The remove lists have little impact if there are any items in the allow list.

### Sanitization and Trusted Types

The [Trusted Types API](/en-US/docs/Web/API/Trusted_Types_API) provides mechanisms to ensure that inputs are passed through a user-specified transformation function before being passed to an API that might execute that input.
This can be used, for example, to ensure that any strings of HTML that are written to {{domxref('Element.innerHTML')}} are first passed through a "Trusted Type", which defines a transformation function.
This transformation function is most commonly used to sanitize the input but it doesn't have to: the purpose of the API is to make it easy for developers to audit and sanitize code, not to define how sanitization is done.

The safe HTML sanitization methods don't need to work with trusted types because they always sanitize their input of all XSS-unsafe entities.

However the unsafe HTML sanitization methods may inject untrusted HTML, depending on the sanitizer, and so will work with trusted types.
The methods can take either a string or a `TrustedType` as input.
If a sanitizer is also supplied, the transformation function will be run first, and then the sanitizer.

Note that the transformation function doesn't have to sanitize the input string in this case, although it can, because you can use the sanitizer API for that.
What trusted types provide in this case is information about where potentially unsafe strings are injected, making it easier to locate them and check that the sanitizer is appropriately configured.

### Third party sanitization libraries

Prior to the Sanitizer API, developers typically filtered input strings using third-party libraries such as [DOMPurify](https://github.com/cure53/DOMPurify), perhaps called from transformation functions in trusted types.

It should not be necessary to still use these libraries when injecting untrusted HTML strings.
The API is integrated with the browser, and is more aware of the parsing context and what code is allowed to execute than external parser libraries can be.

### Parsing and sanitizing strings

<!-- This bit not yet updated -->

The result of parsing a string of HTML depends on the context/the element into which it is inserted.

For example, an HTML string containing {{HTMLElement("td")}} elements is valid if inserted under a {{HTMLElement("table")}} elements, but will be dropped if inserted in a {{HTMLElement("div")}} element.
Similarly, an {{HTMLElement("em")}} element is a valid node in a {{HTMLElement("div")}} but the tag will be escaped if used in a {{HTMLElement("textarea")}}:

```html
<!-- "<em>bla</em>" inserted into <div> -->
<div><em>bla</em></div>

<!-- "<em>bla</em>" inserted into <textarea> -->
<textarea>&lt;em&gt;bla</textarea>
```

The target element must therefore be known when the parser is run and the resulting subtree must be inserted into that same type of element in the DOM, or the result will be incorrect.
This consideration does not matter for {{domxref('Element.setHTML()')}} as it is called on a particular element and the context is therefore implicit.

<!--
    Note that this is an "XSS-unsafe" method: any entities allowed by the sanitizer will be inserted, or all entities if there is no sanitizer.
    Note that this is an "XSS-safe" method, and will only allow trusted entities to be inserted, irrespective of the provided sanitizer.
-->

## Interfaces

- {{domxref('Sanitizer')}}
  - : A reusable sanitizer configuration object that defines what elements and attributes should be allowed/removed when sanitizing untrusted strings of HTML.
    This is used in the methods that insert strings of HTML into the DOM or Document.
- {{domxref('SanitizerConfig')}}
  - : A dictionary that defines a sanitizer configuration.
    This can be used in the same places as {{domxref('Sanitizer')}} but is likely to be less efficient to use and reuse.

## Extensions to other interfaces

### XSS-safe Methods

- {{domxref('Element.setHTML()')}}
  - : Parse a string of HTML into a subtree of nodes, dropping any elements that are invalid in the context of the element.
    Then drop any elements and attributes that are not allowed by the sanitizer configuration, and any that are considered XSS-unsafe (even if allowed by the configuration).
    The subtree is then inserted into the DOM as a subtree of the element.
- {{domxref('ShadowRoot.setHTML()')}}
  - : Parse a string of HTML into a subtree of nodes.
    Then drop any elements and attributes that are not allowed by the sanitizer configuration, and any that are considered XSS-unsafe (even if allowed by the configuration).
    The subtree is then inserted into the ShadowRoot as a subtree of the specified root.
- {{domxref('Document.parseHTML()')}}
  - : Parse a string of HTML into a subtree of nodes.
    Then drop any elements and attributes that are not allowed by the sanitizer configuration, and any that are considered XSS-unsafe (even if allowed by the configuration).
    The subtree is then set as the root of the {{domxref("Document")}}.

### XSS-unsafe Methods

- {{domxref('Element.setHTMLUnsafe()')}}
  - : Parse a string of HTML into a subtree of nodes, dropping any elements that are invalid in the context of the element.
    Then drop any elements and attributes that are not allowed by the sanitizer: if no sanitizer is specified allow all elements.
    The subtree is then inserted into the DOM as a subtree of the element.
- {{domxref('ShadowRoot.setHTMLUnsafe()')}}
  - : Parse a string of HTML into a subtree of nodes.
    Then drop any elements and attributes that are not allowed by the sanitizer: if no sanitizer is specified allow all elements.
    The subtree is then inserted into the ShadowRoot as a subtree of the specified root.
- {{domxref('Document.parseHTMLUnsafe()')}}
  - : Parse a string of HTML into a subtree of nodes.
    Then drop any elements and attributes that are not allowed by the sanitizer: if no sanitizer is specified allow all elements.
    The subtree is then set as the root of the {{domxref("Document")}}.

## Examples

The following examples show how to use the sanitizer API using the _default_ sanitizer (at time of writing configuration operations are not yet supported).

### Sanitize a string immediately

The code below demonstrates how {{domxref('Element/setHTML','Element.setHTML()')}} is used to sanitize a string of HTML and insert it into the `Element` with an id of `target`.

The `script` element is disallowed by the default sanitizer so the alert is removed.

```js
const unsanitized_string = "abc <script>alert(1)<" + "/script> def"; // Unsanitized string of HTML

const sanitizer = new Sanitizer(); // Default sanitizer;

// Get the Element with id "target" and set it with the sanitized string.
const target = document.getElementById("target");
target.setHTML(unsanitized_string, { sanitizer });

console.log(target.innerHTML);
// "abc  def"
```

### Sanitize a frame

To sanitize data from an {{HTMLElement("iframe")}} with id `userFrame`:

```js
const sanitizer = new Sanitizer(); // Default sanitizer;

// Get the frame and its Document object
const frame_element = document.getElementById("userFrame");
const unsanitized_frame_tree = frame_element.contentWindow.document;

// Sanitize the document tree and update the frame.
const sanitized_frame_tree = sanitizer.sanitize(unsanitized_frame_tree);
frame_element.replaceChildren(sanitized_frame_tree);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

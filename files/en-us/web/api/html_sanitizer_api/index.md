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
In particular [cross-site scripting (XSS) attacks](/en-US/docs/Web/Security/Attacks/XSS) work by injecting untrusted HTML into the DOM that then executes JavaScript in the context of the current origin — giving the attacker access to the server as though it were client code.
These attacks can be mitigated by sanitizing unsafe HTML entities before it is injected into the DOM.

The HTML Sanitizer API provides a number of methods for sanitizing HTML input strings as they are injected into the DOM.
These come in variants that ensure that only XSS-safe elements are injected, and others that unsafe variants that give developers full control over what HTML entities are allowed.

### Sanitization methods

The HTML Sanitizer API provides both [XSS-safe methods](#xss-safe_methods) and [XSS-unsafe methods](#xss-unsafe_methods) (which have the suffix `Unsafe`) for injecting HTML strings into an {{domxref('Element')}} or {{domxref('ShadowRoot')}}, and for parsing HTML into a {{domxref('Document')}}.
The {{domxref('Element')}} methods are context aware, and will drop any elements that the HTML specification does not allow in the target element.

Both types of methods can take a [sanitizer configuration](#sanitizer_configuration) which specifies what HTML entities, such as elements, will be filtered out of the input before it is injected.

The XSS-safe methods always use a safe configuration that filters out any XSS-unsafe elements and attributes from the input.
If no sanitizer is passed as a parameter they will use the default sanitizer configuration, which is XSS-safe.
If a custom sanitizer is passed, it is implicitly updated to remove any elements and attributes that are not XSS-safe (note that the passed sanitizer is not modified, and might still be unsafe if used with an unsafe method).

The XSS-unsafe methods will use whatever sanitizer configuration is passed as an argument; if no sanitizer is passed, then all HTML elements and attributes allowed by the context will be injected.

The safe methods should be used instead of {{domxref("Element.innerHTML")}} (or {{domxref("Element.outerHTML")}}) for injecting untrusted HTML content, and can be used for trusted HTML strings that do not contain any XSS-unsafe elements.
The unsafe methods can be used with untrusted HTML that needs to contain some XSS-unsafe elements or attributes, allowing you to reduce the risk to just those entities that are required.

### Sanitizer configuration

A sanitizer configuration defines what HTML entities will be filtered out, or for some elements replaced, when the sanitizer is used.
This includes elements, attributes, data-attributes, and comments.

There are two very closely related sanitizer configuration interfaces, either of which can be passed to the [sanitization methods](#sanitization_methods).

- {{domxref('SanitizerConfig')}} is a dictionary object that defines arrays of elements or attributes that are allowed or disallowed when the configuration is used, properties that indicate whether comments and data attributes will be allowed or omitted, and so on.
- {{domxref('Sanitizer')}} is essentially a wrapper around a {{domxref('SanitizerConfig')}} that provides methods to ergonomically and consistently add and remove entities from the various lists in configuration: for example, you can use a method to add an allowed attribute, and it will also remove the attribute from the disallowed array (if present).
  The interface also provides methods to get the underlying {{domxref('SanitizerConfig')}} and also to update the sanitizer so that it is XSS-safe.
  It may provide normalizations of the sanitizer configuration used to construct it, making it easier to understand and reuse.

While you can use either interface in any of the sanitizing methods, `Sanitizer` is expected to be easier and more efficient to share and reuse than `SanitizerConfig`.

### Allow or disallow configurations

You can build up a configuration in two ways:

- Specifying the elements and attributes you wish to allow.
  This results in a configuration where it is easy to read, and where it is easy to understand the output.
  It is useful when the you know exactly what entities you will allow to be injected.
- Specifying the elements and attributes you wish to remove (or "block").
  This is useful when you want to primarily use default sanitizer settings, but perhaps restrict some additional entities.

Using both allow and remove arrays at the same time is discouraged as it makes the configuration harder to understand and less efficient to parse (you can always represent an allow list and a remove list as an allow list where the remove lists items have been dropped).
If you're using {{domxref('SanitizerConfig')}} the sanitizer methods will throw a `TypeError` if you create a configuration with both allow and remove options. <!-- check this, might just be if you have same item in both -->

It is possible to end up with items in both allow and remove lists when using {{domxref('Sanitizer')}}.
The allow lists are parsed first, if they contain any items, and then the remove lists.
The remove lists generally have little impact if there are any items in the allow list.

You may also wish to remove elements, but retain their children.
This is mainly useful for removing unwanted formatting from user input, while preserving its textual content.
In effect this is another form of an "allow configuration".

### Sanitization and Trusted Types

The [Trusted Types API](/en-US/docs/Web/API/Trusted_Types_API) provides mechanisms to ensure that inputs are passed through a user-specified transformation function before being passed to an API that might execute that input.
For example the API can be used to ensure that any code that writes to {{domxref('Element.innerText')}} is first passed through a Trusted Type, which defines a transformation function.
This transformation function is most commonly used to sanitize the input but it doesn't have to: the purpose of the API is to make it easy for developers to audit and sanitize code, not to define how this is done.

The safe HTML sanitization methods always sanitize their input of all XSS-unsafe entities.
Therefore they there is no need to audit their use and not integration with trusted types.

The unsafe HTML sanitization methods do need to be audited.
The methods can take either a string or a TrustedType as input.
If a sanitizer is also supplied, the transformation function will be run first, and then the sanitizer.

### Third party sanitization libraries

Prior to the Sanitizer API, developers typically filtered input strings using third-party libraries such as [DOMPurify](https://github.com/cure53/DOMPurify), perhaps called from transformation functions in trusted types.

Generally it should not be necessary to still use these libraries when injecting untrusted HTML strings.
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
- {{domxref('Element.setHTMLUnsafe()')}}
  - : Parse a string of HTML into a subtree of nodes, dropping any elements that are invalid in the context of the element.
    Then drop any elements and attributes that are not allowed by the sanitizer: if no sanitizer is specified allow all elements.
    The subtree is then inserted into the DOM as a subtree of the element.
- {{domxref('ShadowRoot.setHTML()')}}
  - : Parse a string of HTML into a subtree of nodes.
    Then drop any elements and attributes that are not allowed by the sanitizer configuration, and any that are considered XSS-unsafe (even if allowed by the configuration).
    The subtree is then inserted into the ShadowRoot as a subtree of the specified root.

### XSS-unsafe Methods

- {{domxref('ShadowRoot.setHTMLUnsafe()')}}
  - : Parse a string of HTML into a subtree of nodes.
    Then drop any elements and attributes that are not allowed by the sanitizer: if no sanitizer is specified allow all elements.
    The subtree is then inserted into the ShadowRoot as a subtree of the specified root.
- {{domxref('Document.parseHTML()')}}
  - : Parse a string of HTML into a subtree of nodes.
    Then drop any elements and attributes that are not allowed by the sanitizer configuration, and any that are considered XSS-unsafe (even if allowed by the configuration).
    The subtree is then set as the root of the {{domxref("Document")}}.
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

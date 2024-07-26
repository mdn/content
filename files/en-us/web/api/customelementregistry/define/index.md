---
title: "CustomElementRegistry: define() method"
short-title: define()
slug: Web/API/CustomElementRegistry/define
page-type: web-api-instance-method
browser-compat: api.CustomElementRegistry.define
---

{{APIRef("Web Components")}}

The **`define()`** method of the {{domxref("CustomElementRegistry")}} interface adds a definition for a custom element to the custom element registry, mapping its name to the constructor which will be used to create it.

## Syntax

```js-nolint
define(name, constructor)
define(name, constructor, options)
```

### Parameters

- `name`
  - : Name for the new custom element. Must be a [valid custom element name](#valid_custom_element_names).
- `constructor`
  - : Constructor for the new custom element.
- `options` {{optional_inline}}

  - : Object that controls how the element is defined. One option is currently supported:

    - `extends`
      - : String specifying the name of a built-in element to
        extend. Used to create a customized built-in element.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `NotSupportedError` {{domxref("DOMException")}}
  - : Thrown if:
    - The {{domxref("CustomElementRegistry")}} already contains an entry with the same name or the same constructor (or is otherwise already defined).
    - The <code>extends</code> option is specified and it is a [valid custom element name](#valid_custom_element_names)
    - The <code>extends</code> option is specified but the element it is trying to extend is an unknown element.
- `SyntaxError` {{domxref("DOMException")}}
  - : Thrown if the provided name is not a [valid custom element name](#valid_custom_element_names).
- {{jsxref("TypeError")}}
  - : Thrown if the referenced constructor is not a constructor.

## Description

The `define()` method adds a definition for a custom element to the custom element registry, mapping its name to the constructor which will be used to create it.

There are two types of custom element you can create:

- _Autonomous custom elements_ are standalone elements, that don't inherit from built-in HTML elements.
- _Customized built-in elements_ are elements that inherit from, and extend, built-in HTML elements.

To define an autonomous custom element, you should omit the `options` parameter.

To define a customized built-in element, you must pass the `options` parameter with its `extends` property set to the name of the built-in element that you are extending, and this must correspond to the interface that your custom element class definition inherits from. For example, to customize the {{htmlelement("p")}} element, you must pass `{extends: "p"}` to `define()`, and the class definition for your element must inherit from {{domxref("HTMLParagraphElement")}}.

### Valid custom element names

Custom element names must:

- start with an ASCII lowercase letter (a-z)
- contain a hyphen
- not contain any ASCII uppercase letters
- not contain certain other characters, as documented in the [valid custom element names](https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name) section of the Web Components specification
- not be any of:
  - "annotation-xml"
  - "color-profile"
  - "font-face"
  - "font-face-src"
  - "font-face-uri"
  - "font-face-format"
  - "font-face-name"
  - "missing-glyph"

## Examples

### Defining an autonomous custom element

The following class implements a minimal autonomous custom element:

```js
class MyAutonomousElement extends HTMLElement {
  constructor() {
    super();
  }
}
```

This element doesn't do anything: a real autonomous element would implement its functionality in its constructor and in the lifecycle callbacks provided by the standard. See [Implementing a custom element](/en-US/docs/Web/API/Web_components/Using_custom_elements) in our guide to working with custom elements.

However, the above class definition satisfies the requirements of the `define()` method, so we can define it with the following code:

```js
customElements.define("my-autonomous-element", MyAutonomousElement);
```

We could then use it in an HTML page like this:

```html
<my-autonomous-element>Element contents</my-autonomous-element>
```

### Defining a customized built-in element

The following class implements a customized built-in element:

```js
class MyCustomizedBuiltInElement extends HTMLParagraphElement {
  constructor() {
    super();
  }
}
```

This element extends the built-in {{htmlelement("p")}} element.

In this minimal example the element doesn't implement any customization, so it will behave just like a normal `<p>` element. However, it does satisfy the requirements of `define()`, so we can define it like this:

```js
customElements.define(
  "my-customized-built-in-element",
  MyCustomizedBuiltInElement,
  {
    extends: "p",
  },
);
```

We could then use it in an HTML page like this:

```html
<p is="my-customized-built-in-element"></p>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using custom elements](/en-US/docs/Web/API/Web_components/Using_custom_elements)

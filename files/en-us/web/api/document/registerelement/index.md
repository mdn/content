---
title: Document.registerElement()
slug: Web/API/Document/registerElement
tags:
  - API
  - DOM
  - Deprecated
  - Method
  - Reference
  - Web Components
browser-compat: api.Document.registerElement
---
{{APIRef("DOM")}}{{Deprecated_header}}

> **Warning:** `document.registerElement()` is deprecated in
> favor of {{DOMxRef("CustomElementRegistry.define()","customElements.define()")}}.

{{draft}}

The **`document.registerElement()`** method registers a new [custom element](/en-US/docs/Web/Web_Components/Using_custom_elements) in the
browser and returns a constructor for the new element.

> **Note:** This is an experimental technology. The browser you use it in
> must support Web Components. See [Enabling
> Web Components in Firefox](/en-US/docs/Web/Web_Components#enabling_web_components_in_firefox).

## Syntax

```js
var constructor = document.registerElement(tag-name, options);
```

### Parameters

- _tag-name_
  - : The name of the custom element. The name must contain a dash (-), for example
    `my-tag`.
- _options_ {{optional_inline}}
  - : An object with properties **prototype** to base the custom element on,
    and **extends**, an existing tag to extend. Both of these are optional.

## Example

Here is a very simple example:

```js
var Mytag = document.registerElement('my-tag');
```

Now the new tag is registered in the browser. The `Mytag` variable holds a
constructor that you can use to create a `my-tag` element in the document as
follows:

```js
document.body.appendChild(new Mytag());
```

This inserts an empty `my-tag` element that will be visible if you use the
browser's developer tools. It will not be visible if you use the browser's view source
capability. And it won't be visible in the browser unless you add some content to the
tag. Here is one way to add content to the new tag:

```js
var mytag = document.getElementsByTagName("my-tag")[0];
mytag.textContent = "I am a my-tag element.";
```

## Browser compatibility

{{Compat}}

## See also

- [Custom Elements](/en-US/docs/Web/Web_Components/Using_custom_elements)

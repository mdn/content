---
title: String.prototype.anchor()
slug: Web/JavaScript/Reference/Global_Objects/String/anchor
page-type: javascript-instance-method
status:
  - deprecated
browser-compat: javascript.builtins.String.anchor
---

{{JSRef}} {{Deprecated_Header}}

The **`anchor()`** method of {{jsxref("String")}} values creates a string that embeds this string in an {{HTMLElement("a")}} element with a name (`<a name="...">str</a>`).

> [!NOTE]
> All [HTML wrapper methods](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods) are deprecated and only standardized for compatibility purposes. Use [DOM APIs](/en-US/docs/Web/API/Document_Object_Model) such as [`document.createElement()`](/en-US/docs/Web/API/Document/createElement) instead.
>
> The HTML specification no longer allows the {{HTMLElement("a")}} element to have a `name` attribute, so this method doesn't even create valid markup.

## Syntax

```js-nolint
anchor(name)
```

### Parameters

- `name`
  - : A string representing a `name` value to put into the generated `<a name="...">` start tag.

### Return value

A string beginning with an `<a name="name">` start tag (double quotes in `name` are replaced with `&quot;`), then the text `str`, and then an `</a>` end tag.

## Examples

### Using anchor()

The code below creates an HTML string and then replaces the document's body with it:

```js
const contentString = "Hello, world";

document.body.innerHTML = contentString.anchor("hello");
```

This will create the following HTML:

```html
<a name="hello">Hello, world</a>
```

> [!WARNING]
> This markup is invalid, because `name` is no longer a valid attribute of the {{HTMLElement("a")}} element.

Instead of using `anchor()` and creating HTML text directly, you should use DOM APIs such as [`document.createElement()`](/en-US/docs/Web/API/Document/createElement). For example:

```js
const contentString = "Hello, world";
const elem = document.createElement("a");
elem.innerText = contentString;
document.body.appendChild(elem);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `String.prototype.anchor` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [HTML wrapper methods](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#html_wrapper_methods)
- {{HTMLElement("a")}}

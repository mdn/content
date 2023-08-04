---
title: "Element: setAttribute() method"
short-title: setAttribute()
slug: Web/API/Element/setAttribute
page-type: web-api-instance-method
browser-compat: api.Element.setAttribute
---

{{APIRef("DOM")}}

Sets the value of an attribute on the specified element. If
the attribute already exists, the value is updated; otherwise a new attribute is added
with the specified name and value.

To get the current value of an attribute, use {{domxref("Element.getAttribute",
  "getAttribute()")}}; to remove an attribute, call {{domxref("Element.removeAttribute",
  "removeAttribute()")}}.

## Syntax

```js-nolint
setAttribute(name, value)
```

### Parameters

- `name`
  - : A string specifying the name of the attribute whose value is to be
    set. The attribute name is automatically converted to all lower-case when
    `setAttribute()` is called on an HTML element in an HTML document.
- `value`
  - : A string containing the value to assign to the attribute. Any
    non-string value specified is converted automatically into a string.

Boolean attributes are considered to be `true` if they're present on the
element at all. You should set `value` to the empty string (`""`)
or the attribute's name, with no leading or trailing whitespace. See the [example](#examples) below for a practical demonstration.

Since the specified `value` gets converted into a string, specifying
`null` doesn't necessarily do what you expect. Instead of removing the
attribute or setting its value to be [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null), it instead sets the attribute's
value to the string `"null"`. If you wish to remove an attribute, call
{{domxref("Element.removeAttribute", "removeAttribute()")}}.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `InvalidCharacterError` {{domxref("DOMException")}}
  - : The specified attribute `name` contains one or more characters which are
    not valid in attribute names.

## Examples

In the following example, `setAttribute()` is used to set attributes on a
{{HTMLElement("button")}}.

### HTML

```html
<button>Hello World</button>
```

```css hidden
button {
  height: 30px;
  width: 100px;
  margin: 1em;
}
```

### JavaScript

```js
const button = document.querySelector("button");

button.setAttribute("name", "helloButton");
button.setAttribute("disabled", "");
```

{{ EmbedLiveSample('Examples', '300', '50') }}

This demonstrates two things:

- The first call to `setAttribute()` above shows changing the `name` attribute's value to "helloButton".
  You can see this using your browser's page inspector ([Chrome](https://developer.chrome.com/docs/devtools/dom/properties/), [Edge](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium/css/inspect),
  [Firefox](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/open_the_inspector/index.html), [Safari](https://support.apple.com/en-us/guide/safari-developer/welcome/mac)).
- To set the value of a Boolean attribute, such as `disabled`, you can specify any value.
  An empty string or the name of the attribute are recommended values.
  All that matters is that if the attribute is present at all, _regardless of its actual value_, its value is considered to be `true`.
  The absence of the attribute means its value is `false`. By setting the value of the `disabled` attribute to the empty string (`""`), we are setting `disabled` to `true`, which results in the button being disabled.

{{DOMAttributeMethods}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

### Gecko notes

Using `setAttribute()` to modify certain attributes, most notably
`value` in XUL, works inconsistently, as the attribute specifies the default
value. To access or modify the current values, you should use the properties. For
example, use `Element.value` instead of `Element.setAttribute()`.

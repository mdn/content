---
title: Element.setAttribute()
slug: Web/API/Element/setAttribute
tags:
  - API
  - DOM
  - Element
  - Method
  - NeedsBrowserCompatibility
  - NeedsSpecTable
  - Reference
  - setAttribute
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

```js
Element.setAttribute(name, value);
```

### Parameters

- `name`
  - : A {{domxref("DOMString")}} specifying the name of the attribute whose value is to be
    set. The attribute name is automatically converted to all lower-case when
    `setAttribute()` is called on an HTML element in an HTML document.
- `value`
  - : A {{domxref("DOMString")}} containing the value to assign to the attribute. Any
    non-string value specified is converted automatically into a string.

Boolean attributes are considered to be `true` if they're present on the
element at all. You should set `value` to the empty string (`""`)
or the attribute's name, with no leading or trailing whitespace. See the {{anch("Example",
  "example")}} below for a practical demonstration.

Since the specified `value` gets converted into a string, specifying
`null` doesn't necessarily do what you expect. Instead of removing the
attribute or setting its value to be {{jsxref("null")}}, it instead sets the attribute's
value to the string `"null"`. If you wish to remove an attribute, call
{{domxref("Element.removeAttribute", "removeAttribute()")}}.

### Return value

{{jsxref("undefined")}}.

### Exceptions

- `InvalidCharacterError` {{domxref("DOMException")}}
  - : The specified attribute `name` contains one or more characters which are
    not valid in attribute names.

## Example

In the following example, `setAttribute()` is used to set attributes on a
{{HTMLElement("button")}}.

### HTML

```html
<button>Hello World</button>
```

### JavaScript

```js
var b = document.querySelector("button");

b.setAttribute("name", "helloButton");
b.setAttribute("disabled", "");
```

This demonstrates two things:

- The first call to `setAttribute()` above shows changing the
  `name` attribute's value to "helloButton". You can see this using your
  browser's page inspector ([Chrome](https://developers.google.com/web/tools/chrome-devtools/inspect-styles),
  [Edge](https://docs.microsoft.com/en-us/microsoft-edge/f12-devtools-guide/dom-explorer),
  [Firefox](/en-US/docs/Tools/Page_Inspector), [Safari](https://developer.apple.com/library/content/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Introduction/Introduction.html)).
- To set the value of a Boolean attribute, such as `disabled`, you can
  specify any value. An empty string or the name of the attribute are recommended
  values. All that matters is that if the attribute is present at all, _regardless of
  its actual value_, its value is considered to be `true`. The absence
  of the attribute means its value is `false`. By setting the value of the
  `disabled` attribute to the empty string (`""`), we are setting
  `disabled` to `true`, which results in the button being
  disabled.

{{ EmbedLiveSample('Example', '300', '50') }}

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

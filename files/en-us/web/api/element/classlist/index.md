---
title: "Element: classList property"
short-title: classList
slug: Web/API/Element/classList
page-type: web-api-instance-property
browser-compat: api.Element.classList
---

{{APIRef("DOM")}}

The read-only **`classList`** property of the {{domxref("Element")}} interface contains a live {{domxref("DOMTokenList")}} collection representing the `class` attribute of the element. This can then be used to manipulate the class list.

Using `classList` is a convenient alternative to accessing an element's list of classes as a space-delimited string via {{domxref("element.className")}}.

## Value

A {{domxref("DOMTokenList")}} object representing the contents of the element's `class` attribute. If the `class` attribute is not set or empty, it returns an empty `DOMTokenList`, i.e., a `DOMTokenList` with the `length` property equal to `0`.

Although the `classList` property itself is read-only in the sense that you can't replace the `DOMTokenList` object, you can still assign to the `classList` property directly, which is equivalent to assigning to its {{domxref("DOMTokenList/value", "value")}} property. You can also modify the `DOMTokenList` object using the {{domxref("DOMTokenList/add", "add()")}}, {{domxref("DOMTokenList/remove", "remove()")}}, {{domxref("DOMTokenList/replace", "replace()")}}, and {{domxref("DOMTokenList/toggle", "toggle()")}} methods.

## Examples

```js
const div = document.createElement("div");
div.classList = "foo"; // forwarded to classList.value

// our starting state: <div class="foo"></div>
console.log(div.outerHTML);

// use the classList API to remove and add classes
div.classList.remove("foo");
div.classList.add("another-class");

// <div class="another-class"></div>
console.log(div.outerHTML);

// if visible is set remove it, otherwise add it
div.classList.toggle("visible");

// add/remove visible, depending on test conditional, i less than 10
div.classList.toggle("visible", i < 10);

// false
console.log(div.classList.contains("foo"));

// add or remove multiple classes
div.classList.add("foo", "bar", "baz");
div.classList.remove("foo", "bar", "baz");

// add or remove multiple classes using spread syntax
const cls = ["foo", "bar"];
div.classList.add(...cls);
div.classList.remove(...cls);

// replace class "foo" with class "bar"
div.classList.replace("foo", "bar");
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element.className")}}
- {{domxref("DOMTokenList")}}

---
title: "Element: getAttributeNames() method"
short-title: getAttributeNames()
slug: Web/API/Element/getAttributeNames
page-type: web-api-instance-method
browser-compat: api.Element.getAttributeNames
---

{{APIRef("DOM")}}

The **`getAttributeNames()`** method of the
{{domxref("Element")}} interface returns the attribute names of the element as an
{{jsxref("Array")}} of strings. If the element has no attributes it returns an empty
array.

Using `getAttributeNames()` along with
{{domxref("Element.getAttribute","getAttribute()")}}, is a memory-efficient and
performant alternative to accessing {{domxref("Element.attributes")}}.

The names returned by **`getAttributeNames()`** are _qualified_ attribute names, meaning that attributes with a namespace prefix have their names returned with that namespace prefix (_not_ the actual namespace), followed by a colon, followed by the attribute name (for example, **`xlink:href`**), while any attributes which have no namespace prefix have their names returned as-is (for example, **`href`**).

## Syntax

```js-nolint
getAttributeNames()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

The following example shows how:

- For an attribute which has a namespace prefix, `getAttributeNames()` returns that namespace prefix along with the attribute name.
- For an attribute which has no namespace prefix, `getAttributeNames()` returns just the attribute name, as-is.

It's important to understand that:

1. An attribute can be present in the DOM with a namespace but lacking a namespace prefix.
2. For an attribute in the DOM that has a namespace but lacks a namespace prefix, `getAttributeNames()` will return just the attribute name, with no indication that the attribute is in a namespace.

The example below includes such a "namespaced but without a namespace prefix" case.

```js
const element = document.createElement("a");

// set "href" attribute with no namespace and no namespace prefix
element.setAttribute("href", "https://example.com");
// set "href" attribute with namespace and also "xlink" namespace prefix
element.setAttributeNS(
  "http://www.w3.org/1999/xlink",
  "xlink:href",
  "https://example.com",
);
// set "show" attribute with namespace but no namespace prefix
element.setAttributeNS("http://www.w3.org/1999/xlink", "show", "new");

// Iterate over element's attributes
for (const name of element.getAttributeNames()) {
  const value = element.getAttribute(name);
  console.log(name, value);
}

// logs:
// href https://example.com
// xlink:href https://example.com
// show new
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

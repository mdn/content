---
title: Document.getElementsByName()
slug: Web/API/Document/getElementsByName
page-type: web-api-instance-method
tags:
  - API
  - DOM
  - Document
  - HTML
  - Method
  - Reference
browser-compat: api.Document.getElementsByName
---
{{APIRef("DOM")}}

The **`getElementsByName()`** method
of the {{domxref("Document")}} object returns a {{domxref("NodeList")}} Collection of
elements with a given `name` attribute in the document.

## Syntax

```js
getElementsByName(name)
```

### Parameters

- `name`
  - : The value of the `name` attribute of the element(s) we are looking for.

### Return value

A live {{domxref("NodeList")}} collection, meaning it automatically updates as new elements with the same `name` are added to, or removed from, the document.

## Examples

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Example: using document.getElementsByName</title>
  </head>
  <body>
    <input type="hidden" name="up" />
    <input type="hidden" name="down" />
  </body>
</html>
```

```js
const up_names = document.getElementsByName("up");
console.log(up_names[0].tagName); // displays "INPUT"
```

## Notes

The `name` attribute can only be applied in (X)HTML
documents.

The returned {{domxref("NodeList")}} Collection contains _all_ elements with the
given `name`, such as {{htmlelement("meta")}}, {{htmlelement("object")}}, and
even elements which do not support the `name` attribute at all.

> **Warning:** The **getElementsByName** method works differently in IE10 and below.
> There, `getElementsByName()` also returns elements that have an [`id` attribute](/en-US/docs/Web/HTML/Global_attributes/id) with
> the specified value. Be careful not to use the same string as both a `name`
> and an `id`.

> **Warning:** The **getElementsByName** method works differently in IE. There,
> `getElementsByName()` does not return all elements which may not have a
> `name` attribute (such as `<span>`).

> **Warning:** Both IE and Edge return an {{domxref("HTMLCollection")}}, not a
> {{domxref("NodeList")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("document.getElementById()")}} to return a reference to an element by its
  unique `id`
- {{domxref("document.getElementsByTagName()")}} to return references to elements with
  the same [tag name](/en-US/docs/Web/API/Element/tagName)
- {{domxref("document.querySelector()")}} to return references to elements via CSS
  selectors like `'div.myclass'`

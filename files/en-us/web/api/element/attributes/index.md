---
title: Element.attributes
slug: Web/API/Element/attributes
tags:
  - API
  - Attributes
  - DOM
  - Element
  - Property
  - Reference
browser-compat: api.Element.attributes
---
{{ APIRef("DOM") }}

The **`Element.attributes`** property returns a live collection
of all attribute nodes registered to the specified node. It is a
{{domxref("NamedNodeMap")}}, not an `Array`, so it has no {{jsxref("Array")}}
methods and the {{domxref("Attr")}} nodes' indexes may differ among browsers. To be more
specific, `attributes` is a key/value pair of strings that represents any
information regarding that attribute.

## Syntax

```js
var attr = element.attributes;
```

## Example

### Basic examples

```js
// Get the first <p> element in the document
var para = document.getElementsByTagName("p")[0];
var atts = para.attributes;
```

### Enumerating elements attributes

Numerical indexing is useful for going through all of an element's attributes.
The following example runs through the attribute nodes for the element in the document
with id "paragraph", and prints each attribute's value.

```html
<!DOCTYPE html>

<html>

 <head>
  <title>Attributes example</title>
  <script type="text/javascript">
   function listAttributes() {
     var paragraph = document.getElementById("paragraph");
     var result = document.getElementById("result");

     // First, let's verify that the paragraph has some attributes
     if (paragraph.hasAttributes()) {
       var attrs = paragraph.attributes;
       var output = "";
       for(var i = attrs.length - 1; i >= 0; i--) {
         output += attrs[i].name + "->" + attrs[i].value;
       }
       result.value = output;
     } else {
       result.value = "No attributes to show";
     }
   }
  </script>
 </head>

<body>
 <p id="paragraph" style="color: green;">Sample Paragraph</p>
 <form action="">
  <p>
    <input type="button" value="Show first attribute name and value"
      onclick="listAttributes();">
    <input id="result" type="text" value="">
  </p>
 </form>
</body>
</html>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("NamedNodeMap")}}, the interface of the returned object
- Cross-browser compatibility considerations: on [quirksmode](https://www.quirksmode.org/dom/w3c_core.html#attributes)

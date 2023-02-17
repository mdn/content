---
title: DocumentFragment.getElementById()
slug: Web/API/DocumentFragment/getElementById
page-type: web-api-instance-method
browser-compat: api.DocumentFragment.getElementById
---

{{ ApiRef("DOM") }}

The **`getElementById()`** method of the {{domxref("DocumentFragment")}} returns an {{domxref("Element")}} object representing the element whose {{domxref("Element.id", "id")}} property matches the specified string. Since element IDs are required to be unique if specified, they're a useful way to get access to a specific element quickly.

If you need to get access to an element which doesn't have an ID, you can use {{domxref("Document.querySelector", "querySelector()")}} to find the element using any {{Glossary("CSS selector", "selector")}}.

> **Note:** IDs should be unique inside a document, or a fragment of a document. If it is not the case, this method returns the first occurrence found.

## Syntax

```js-nolint
getElementById(id)
```

> **Note:** The capitalization of `"Id"` in the name of this method _must_ be correct for the code to function; `getElementByID()` is _not_ valid and will not work, however natural it may seem.

### Parameters

- `id`
  - : The ID of the element to locate. The ID is a case-sensitive string which is unique within the document fragment: only one element should have any given ID.

### Return value

An {{domxref("Element")}} object describing the DOM element object matching the specified ID, or `null` if no matching element was found in the document fragment.

## Examples

### HTML

```html
Durian is initially the only entry in this list. The other list items have been
added to a fragment, subsequently added to this unordered list:
<ul>
  <li id="Durian">Durian</li>
</ul>

Before appending the fragment to the document, we find Durian in the document
and Apple in the document fragment:<br />
<output></output>
<br /><br />
After appending the fragment to the document, we find both in the document:<br />
<output></output>
```

### JavaScript

```js
// Obtain the unordered list in the document
const ul = document.querySelector("ul");

// Create the document fragment
const fruits = ["Apple", "Orange", "Banana", "Melon"];

const fragment = new DocumentFragment();

for (const fruit of fruits) {
  const li = document.createElement("li");
  li.textContent = fruit;
  li.id = fruit;
  fragment.append(li);
}

// Perform the searches
let output = document.querySelectorAll("output")[0];
output.append(document.createElement("br"));
output.append(
  document.createTextNode(
    `Found Apple in the fragment? ${
      fragment.getElementById("Apple") ? "Yes" : "No"
    }`
  )
);
output.append(document.createElement("br"));
output.append(
  document.createTextNode(
    `Found Apple in the document? ${
      document.getElementById("Apple") ? "Yes" : "No"
    }`
  )
);
output.append(document.createElement("br"));
output.append(
  document.createTextNode(
    `Found Durian in the fragment? ${
      fragment.getElementById("Durian") ? "Yes" : "No"
    }`
  )
);
output.append(document.createElement("br"));
output.append(
  document.createTextNode(
    `Found Durian in the document? ${
      document.getElementById("Durian") ? "Yes" : "No"
    }`
  )
);

// Insert the fragment inside the document's unordered list
ul.append(fragment);

// Perform the searches
output = document.querySelectorAll("output")[1];
output.append(document.createElement("br"));
output.append(
  document.createTextNode(
    `Found Apple in the fragment? ${
      fragment.getElementById("Apple") ? "Yes" : "No"
    }`
  )
);
output.append(document.createElement("br"));
output.append(
  document.createTextNode(
    `Found Apple in the document? ${
      document.getElementById("Apple") ? "Yes" : "No"
    }`
  )
);
output.append(document.createElement("br"));
output.append(
  document.createTextNode(
    `Found Durian in the fragment? ${
      fragment.getElementById("Durian") ? "Yes" : "No"
    }`
  )
);
output.append(document.createElement("br"));
output.append(
  document.createTextNode(
    `Found Durian in the document? ${
      document.getElementById("Durian") ? "Yes" : "No"
    }`
  )
);
```

### Result

{{EmbedLiveSample('Examples', '', '500')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Document.getElementById()")}}
- {{domxref("DocumentFragment.querySelector()")}} and {{domxref("DocumentFragment.querySelectorAll()")}} for selectors via queries like `'div.myclass'`

---
title: "DocumentFragment: getElementById() method"
short-title: getElementById()
slug: Web/API/DocumentFragment/getElementById
page-type: web-api-instance-method
browser-compat: api.DocumentFragment.getElementById
---

{{ ApiRef("DOM") }}

The **`getElementById()`** method of the {{domxref("DocumentFragment")}} returns an {{domxref("Element")}} object representing the element whose {{domxref("Element.id", "id")}} property matches the specified string. Since element IDs are required to be unique if specified, they're a useful way to get access to a specific element quickly.

If you need to get access to an element which doesn't have an ID, you can use {{domxref("Document.querySelector", "querySelector()")}} to find the element using any {{Glossary("CSS selector", "selector")}}.

> **Note:** IDs should be unique inside a document fragment. If two or more elements in a document fragment have the same ID, this method returns the first element found.

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

### Extend a list of elements

In this example, the document contains a list with a single item `Cherry`. We also create a document fragment containing four more items, `Apple`, `Orange`, `Banana`, and `Melon`.

We then log the result of using `getElementById()` to look for `Apple` and `Cherry` in the document and in the fragment. At this point, `Cherry` appears only in the document while `Apple` appears only in the fragment.

If you click "Add fragment to document", we append the fragment to the list inside the document, and again log the result of looking for both `Apple` and `Cherry` in the document and in the fragment. This time, both `Apple` and `Cherry` appear in the document, and neither appear in the fragment.

This is because appending a fragment to a document moves the fragment's nodes into the DOM, leaving behind an empty `DocumentFragment`.

#### HTML

```html
<button id="add">Add fragment to document</button>
<button id="reset">Reset example</button> <br />
List content:
<ul>
  <li id="Cherry">Cherry</li>
</ul>
Fragment content:
<ul id="fragment"></ul>
Current status:
<pre id="log" />
```

```css hidden
button {
  margin-bottom: 10px;
}
```

#### JavaScript

```js
// Create the document fragment with its initial content
const fragment = new DocumentFragment();
["Apple", "Orange", "Banana", "Melon"].forEach((fruit) => {
  const li = document.createElement("li");
  li.textContent = fruit;
  li.id = fruit;
  fragment.append(li);
});

// When the button is clicked, add the fragment to the list
document.getElementById("add").addEventListener("click", () => {
  document.querySelector("ul").append(fragment);
  displayStatus();
});

// Log the results of both getElementById()
function displayStatus() {
  const log = document.getElementById("log");
  log.textContent = "";
  ["Apple", "Cherry"].forEach((id) => {
    log.textContent += `document.getElementById("${id}") ${
      document.getElementById(id) ? "Yes" : "No"
    }\n`;
    log.textContent += `fragment.getElementById("${id}") ${
      fragment.getElementById(id) ? "Yes" : "No"
    }\n`;
  });

  // Empty the fragment viewer and fill it with the current content
  const fragmentViewer = document.getElementById("fragment");
  while (fragmentViewer.hasChildNodes()) {
    fragmentViewer.removeChild(fragmentViewer.lastChild);
  }
  for (entry of fragment.children) {
    fragmentViewer.appendChild(entry.cloneNode(true));
  }
}

// Log the initial state
displayStatus();

// Hook the reset button
document.getElementById("reset").addEventListener("click", () => {
  document.location.reload();
});
```

#### Result

{{EmbedLiveSample('Examples', '100%', '410px')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Document.getElementById()")}}

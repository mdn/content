---
title: "Document: caretPositionFromPoint() method"
short-title: caretPositionFromPoint()
slug: Web/API/Document/caretPositionFromPoint
page-type: web-api-instance-method
browser-compat: api.Document.caretPositionFromPoint
---

{{APIRef("CSSOM View")}}

The **`caretPositionFromPoint()`** method of the {{domxref("Document")}} interface returns a {{domxref('CaretPosition')}} object, containing the DOM node, along with the caret and caret's character offset within that node.

## Syntax

```js-nolint
caretPositionFromPoint(x, y)
caretPositionFromPoint(x, y, options)
```

### Parameters

- `x`
  - : The horizontal coordinate of a point.
- `y`
  - : The vertical coordinate of a point.
- `options` {{optional_inline}}

  - : The following optional properties may also be specified.

    - `shadowRoots` {{optional_inline}}
      - : An array of {{domxref("ShadowRoot")}} objects.
        The method can return a caret position for a node that is defined within the shadow DOM of a supplied shadow root.
        If the caret position falls within a shadow root that is not supplied, the returned `CaretPosition` will be remapped to the node that is the host of the shadow root.

### Return value

A {{domxref('CaretPosition')}} object or `null`.

The returned value is `null` if there is no viewport associated with the document, if the `x` or `y` are negative or outside of the viewport region, or if the coordinates indicate a point where no text insertion point indicator could be inserted.

## Examples

### Split text nodes at caret position in DOM

This example demonstrates how to get the caret position from a selected DOM node, use the position to split the node, and insert a line break between the two nodes.
The example uses `caretPositionFromPoint()` to get the caret position if supported, with the non-standard {{domxref("Document.caretRangeFromPoint()")}} method as a fallback.

Note that some parts of the code are hidden, including code used for logging, as this is not useful for understanding this method.

#### HTML

The HTML defines a paragraph of text.

```html hidden
<div id="message">
  This browser supports neither document.caretRangeFromPoint nor
  document.caretPositionFromPoint
</div>
```

```html hidden
<button id="reset" type="button">Reset</button>
```

```html
<p>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
  eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
  voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
  kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
</p>
```

```html hidden
<pre id="log">Log</pre>
```

```css hidden
#log {
  height: 30px;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = text;
}

const reload = document.querySelector("#reset");

reload.addEventListener("click", () => {
  window.location.reload(true);
});
```

```css hidden
#message {
  color: red;
  font-weight: bold;
}

#message.fallback {
  color: darkorange;
}

#message.supported {
  color: green;
}
```

#### JavaScript

The method below first checks for `document.caretPositionFromPoint` support and uses it to get the text node and offset at the caret position.
If the browser doesn't support that method, the code then checks for {{domxref("Document.caretRangeFromPoint", "document.caretRangeFromPoint")}}, and uses that instead.

If the node at the caret position is a text node, the code then [splits the node](/en-US/docs/Web/API/Text/splitText) into two at the selected offset, and inserts a line break between the two nodes.

```js
function insertBreakAtPoint(e) {
  let range;
  let textNode;
  let offset;

  if (document.caretPositionFromPoint) {
    range = document.caretPositionFromPoint(e.clientX, e.clientY);
    textNode = range.offsetNode;
    offset = range.offset;
  } else if (document.caretRangeFromPoint) {
    // Use WebKit-proprietary fallback method
    range = document.caretRangeFromPoint(e.clientX, e.clientY);
    textNode = range.startContainer;
    offset = range.startOffset;
  } else {
    // Neither method is supported, do nothing
    return;
  }

  // Logging code (uses hidden method to get substring with ^ at offset)
  if (textNode?.nodeType === 3) {
    const caretInText = getSubstringAroundOffset(textNode.textContent, offset);
    log(
      `node: ${textNode.nodeName}, offset: ${offset}, insert: ${caretInText}`,
    );
  }

  // Only split TEXT_NODEs
  if (textNode?.nodeType === 3) {
    let replacement = textNode.splitText(offset);
    let br = document.createElement("br");
    textNode.parentNode.insertBefore(br, replacement);
  }
}
```

The method is the added as the click event handler for any paragraph elements.

```js
const paragraphs = document.getElementsByTagName("p");
for (const paragraph of paragraphs) {
  paragraph.addEventListener("click", insertBreakAtPoint, false);
}
```

```js hidden
// Inserts ^ at offset and gets a substring for log
function getSubstringAroundOffset(text, offset, length = 10) {
  const start = Math.max(0, offset - length);
  const end = Math.min(text.length, offset + length + 1);
  // Insert the caret character at the offset
  const modifiedText = `${text.substring(0, offset)}^${text.substring(offset)}`;
  return `...${modifiedText.substring(start, end)}...`;
}
```

```js hidden
let message = document.getElementById("message");
if (document.caretPositionFromPoint) {
  message.textContent =
    "This browser supports the standard document.caretPositionFromPoint";
  message.classList.add("supported");
} else if (document.caretRangeFromPoint) {
  message.textContent =
    "This browser supports the non-standard document.caretRangeFromPoint";
  message.classList.add("supported");
}
```

#### Results

Click anywhere in the **Lorem ipsum ...** paragraph below to insert a line break at the point where you click.
Note that the log shows the `nodeName`, the offset, and a fragment of the selected node with a `^` character at the offset.

{{EmbedLiveSample('Split text nodes at caret position in DOM','100%','400px')}}

### Split text nodes at caret positions in a Shadow DOM

This example demonstrates how to get the caret position from a selected node within a shadow root.
The example is very similar to the DOM-only example above, except that some of the text is inside a shadow root.
We provide a button to allow you to see the difference when a shadow root is passed/not passed to `caretPositionFromPoint()`.

Note that some parts of the code are hidden, including code used for logging, as this is not useful for understanding this method.

#### HTML

The HTML defines a paragraph of text inside a {{htmlelement("div")}} element.
The paragraph contains a {{htmlelement("span")}} element with the `id` of "host" that we will use as the host for a shadow root.
There are also some buttons that we'll use to reset the example, and to Add/Remove the shadow root option argument to `caretPositionFromPoint()`.

```html hidden
<div id="message">
  This browser supports neither document.caretRangeFromPoint nor
  document.caretPositionFromPoint
</div>
```

```html
<button id="reset" type="button">Reset</button>
<button id="shadowButton" type="button">Add Shadow</button>
<div>
  <p>
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
    eirmod tempor invidunt ut <span id="host"></span> labore et dolore magna
    aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
    dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
    Lorem ipsum dolor sit amet.
  </p>
</div>
```

```html hidden
<pre id="log">Log</pre>
```

#### CSS

Here we use CSS to make the `#host` element red and bold.
This makes it easier to distinguish between text in the DOM and text in the shadow DOM.

```css
#host {
  color: red;
  font-weight: bold;
}
```

```css hidden
#log {
  height: 30px;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```css hidden
#message {
  color: red;
  font-weight: bold;
}

#message.fallback {
  color: darkorange;
}

#message.supported {
  color: green;
}
```

#### JavaScript

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = text;
}

const reload = document.querySelector("#reset");

reload.addEventListener("click", () => {
  window.location.reload(true);
});
```

First we have some code to populate our shadow DOM.
We're using JavaScript to attach a shadow root dynamically, because the MDN example system does not allow us to do this declaratively using the {{htmlelement("template")}} element.
The content of the shadow DOM is a {{htmlelement("span")}} element that contains the text "I'm in the shadow DOM".

```js
const host = document.querySelector("#host");
const shadow = host.attachShadow({ mode: "open" });
const shadowSpan = document.createElement("span");
shadowSpan.textContent = "I'm in the shadow DOM";
shadow.appendChild(shadowSpan);
```

Next we add a handler for our "Enable/Disable shadow" button.
This code toggles the value of the `useShadows` variable and updates the button text appropriately.

```js
let useShadows = false;

const shadowButton = document.querySelector("#shadowButton");
shadowButton.addEventListener("click", () => {
  useShadows = !useShadows;
  shadowButton.innerText = useShadows ? "Remove Shadow" : "Add Shadow";
});
```

The method below first checks for `document.caretPositionFromPoint` support and uses it to get the text node and offset at the caret position.
The value of the `useShadows` variable is used to determine whether the shadow root hosted in our text is passed to `caretPositionFromPoint()`.

- If the browser doesn't support that method, the code then checks for {{domxref("Document.caretRangeFromPoint", "document.caretRangeFromPoint")}}, and uses that instead.
- If the node at the caret position is a text node, the code then splits the node at the selected offset, and inserts a line break between them.
- If the node is an element node, then the code inserts a line break element node at the offset.

```js
function insertBreakAtPoint(e) {
  let range;
  let textNode;
  let offset;

  if (document.caretPositionFromPoint) {
    range = document.caretPositionFromPoint(
      e.clientX,
      e.clientY,
      useShadows ? { shadowRoots: [shadow] } : null,
    );
    textNode = range.offsetNode;
    offset = range.offset;
  } else if (document.caretRangeFromPoint) {
    // Use WebKit-proprietary fallback method
    range = document.caretRangeFromPoint(e.clientX, e.clientY);
    textNode = range.startContainer;
    offset = range.startOffset;
  } else {
    // Neither method is supported, do nothing
    return;
  }

  // Logging code (uses hidden method to get substring with ^ at offset)
  if (textNode) {
    if (textNode.nodeType === 3) {
      const caretInText = getSubstringAroundOffset(
        textNode.textContent,
        offset,
      );
      log(
        `type: TEXT_NODE, name: ${textNode.nodeName}, offset: ${offset}:
${caretInText}`,
      );
    } else if (textNode.nodeType === 1) {
      log(`type: ELEMENT_NODE, name: ${textNode.nodeName}, offset: ${offset}`);
    } else {
      log(
        `type: ${textNode.nodeType}, name: ${textNode.nodeName}, offset: ${offset}`,
      );
    }
  }

  // Insert line at caret
  if (textNode?.nodeType === 3) {
    // TEXT_NODE - split text at offset and add br
    let replacement = textNode.splitText(offset);
    let br = document.createElement("br");
    textNode.parentNode.insertBefore(br, replacement);
  } else if (textNode?.nodeType === 1) {
    // ELEMENT_NODE - Add br node at offset node
    let br = document.createElement("br");
    const targetNode = textNode.childNodes[offset];
    textNode.insertBefore(br, targetNode);
  } else {
    // Do nothing
  }
}
```

Finally we add two click event handlers for paragraph elements in the DOM and in the shadow root, respectively.
Note that we need to specifically query the elements within the `shadowRoot` as they are not visible to normal DOM query methods.

```js
// Click event handler <p> elements in the DOM
const paragraphs = document.getElementsByTagName("p");
for (const paragraph of paragraphs) {
  paragraph.addEventListener("click", insertBreakAtPoint, false);
}

// Click event handler <p> elements in the Shadow DOM
const shadowParagraphs = host.shadowRoot.querySelectorAll("p");
for (const paragraph of shadowParagraphs) {
  console.log(paragraph);
  paragraph.addEventListener("click", insertBreakAtPoint, false);
}
```

```js hidden
// Inserts ^ at offset and gets a substring for log
function getSubstringAroundOffset(text, offset, length = 10) {
  const start = Math.max(0, offset - length);
  const end = Math.min(text.length, offset + length + 1);
  // Insert the caret character at the offset
  const modifiedText = `${text.substring(0, offset)}^${text.substring(offset)}`;
  return `...${modifiedText.substring(start, end)}...`;
}
```

```js hidden
let message = document.getElementById("message");
if (document.caretPositionFromPoint) {
  message.textContent =
    "This browser supports the standard document.caretPositionFromPoint";
  message.classList.add("supported");
} else if (document.caretRangeFromPoint) {
  message.textContent =
    "This browser supports the non-standard document.caretRangeFromPoint";
  message.classList.add("supported");
}
```

#### Results

Click in the **Lorem ipsum ...** paragraph before or after the shadow DOM text to insert a line break at the point where you click.
Note that in this case the log shows you have selected a `TEXT_NODE`, the offset, and a fragment of the selected node with a `^` character at the offset.

Initially the shadow root is not passed to `caretPositionFromPoint()`, so if you click on the text "I'm in the shadow DOM", the returned caret position node is the parent node of the host, at the offset of the shadow root.
The line break therefore gets added before the node rather than the point you selected.
Note that the caret position node in this case has the type `ELEMENT_NODE`.

If you click the "Add shadow" button, the shadow root is passed to `caretPositionFromPoint()`, so the returned caret position is the specific selected node within the shadow DOM.
This makes the shadow DOM text behave like the other paragraph text.

{{EmbedLiveSample('Split text nodes at caret positions in a Shadow DOM','100%','400px')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref('CaretPosition')}}

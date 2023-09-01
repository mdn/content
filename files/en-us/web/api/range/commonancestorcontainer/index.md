---
title: "Range: commonAncestorContainer property"
short-title: commonAncestorContainer
slug: Web/API/Range/commonAncestorContainer
page-type: web-api-instance-property
browser-compat: api.Range.commonAncestorContainer
---

{{ApiRef("DOM")}}

The **`Range.commonAncestorContainer`** read-only property
returns the deepest — or furthest down the document tree — {{domxref("Node")}} that
contains both [boundary points](https://www.w3.org/TR/DOM-Level-2-Traversal-Range/ranges.html#Level-2-Range-Position-h3) of the {{domxref("Range")}}. This means that if
{{domxref("Range.startContainer")}} and {{domxref("Range.endContainer")}} both refer to
the same node, this node is the **common ancestor container**.

Since a `Range` need not be continuous, and may also partially select nodes,
this is a convenient way to find a `Node` which encloses a
`Range`.

This property is read-only. To change the ancestor container of a `Node`,
consider using the various methods available to set the start and end positions of the
`Range`, such as {{domxref("Range.setStart()")}} and
{{domxref("Range.setEnd()")}}.

## Value

A {{domxref("Node")}} object.

## Examples

In this example, we create an event listener to handle {{domxref("Document/pointerup_event", "pointerup")}} events on
a list. The listener gets the common ancestors of each piece of selected text, and
triggers an animation to highlight them.

### HTML

```html
<ul>
  <li>
    Strings
    <ul>
      <li>Cello</li>
      <li>
        Violin
        <ul>
          <li>First Chair</li>
          <li>Second Chair</li>
        </ul>
      </li>
    </ul>
  </li>
  <li>
    Woodwinds
    <ul>
      <li>Clarinet</li>
      <li>Oboe</li>
    </ul>
  </li>
</ul>
```

### CSS

The `.highlight` class created below uses a set of CSS
{{cssxref("@keyframes")}} to animate a fading outline.

```css
.highlight {
  animation: highlight linear 1s;
}

@keyframes highlight {
  from {
    outline: 1px solid #f00f;
  }
  to {
    outline: 1px solid #f000;
  }
}
```

```css hidden
body {
  padding: 1px;
}
```

### JavaScript

```js
document.addEventListener("pointerup", (e) => {
  const selection = window.getSelection();

  if (selection.type === "Range") {
    for (let i = 0; i < selection.rangeCount; i++) {
      const range = selection.getRangeAt(i);
      playAnimation(range.commonAncestorContainer);
    }
  }
});

function playAnimation(el) {
  if (el.nodeType === Node.TEXT_NODE) {
    el = el.parentNode;
  }

  el.classList.remove("highlight");
  setTimeout(() => {
    el.classList.add("highlight");
  }, 0);
}
```

### Result

{{EmbedLiveSample("Examples", 700, 190)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [The DOM interfaces index](/en-US/docs/Web/API/Document_Object_Model)

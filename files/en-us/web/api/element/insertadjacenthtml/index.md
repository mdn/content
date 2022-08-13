---
title: Element.insertAdjacentHTML()
slug: Web/API/Element/insertAdjacentHTML
page-type: web-api-instance-method
tags:
  - API
  - DOM
  - Element
  - Method
  - Reference
  - insertAdjacentHTML
browser-compat: api.Element.insertAdjacentHTML
---
{{APIRef("DOM")}}

The **`insertAdjacentHTML()`** method of the
{{domxref("Element")}} interface parses the specified text as HTML or XML and inserts
the resulting nodes into the DOM tree at a specified position.

## Syntax

```js
insertAdjacentHTML(position, text)
```

### Parameters

- `position`

  - : A string representing the position relative to the element. Must be one of the following strings:

    - `"beforebegin"`
      - : Before the element. Only valid if the element is in the DOM tree and has a parent element.
    - `"afterbegin"`
      - : Just inside the element, before its first child.
    - `"beforeend"`
      - : Just inside the element, after its last child.
    - `"afterend"`
      - : After the element. Only valid if the element is in the DOM tree and has a parent element.

- `text`
  - : The string to be parsed as HTML or XML and inserted into the tree.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

This method may raise a {{domxref("DOMException")}} of one of the following types:

- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : Thrown if `position` is `"beforebegin"` or `"afterend"` and the element either does not have a parent or its parent is the `Document` object.
- `SyntaxError` {{domxref("DOMException")}}
  - : Thrown if `position` is not one of the four listed values.

## Description

The `insertAdjacentHTML()` method does not reparse the element it is being used on, and thus it does not corrupt the existing elements inside that element. This avoids the extra step of serialization, making it much faster than direct {{domxref("Element.innerHTML", "innerHTML")}} manipulation.

We can visualize the possible positions for the inserted content as follows:

```html
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
```

### Security considerations

When inserting HTML into a page by using `insertAdjacentHTML()`, be careful
not to use user input that hasn't been escaped.

You should not use `insertAdjacentHTML()` when inserting plain
text. Instead, use the {{domxref("Node.textContent")}} property or the
{{domxref("Element.insertAdjacentText()")}} method. This doesn't interpret the passed
content as HTML, but instead inserts it as raw text.

## Examples

### Inserting HTML

#### HTML

```html
<select id="position">
  <option>beforebegin</option>
  <option>afterbegin</option>
  <option>beforeend</option>
  <option>afterend</option>
</select>

<button id="insert">Insert HTML</button>
<button id="reset">Reset</button>

<p>Some text, with a <code id="subject">code-formatted element</code> inside it.</p>
```

#### CSS

```css
code {
  color: red;
}
```

#### JavaScript

```js
const insert = document.querySelector('#insert');
insert.addEventListener('click', () => {
  const subject = document.querySelector('#subject');
  const positionSelect = document.querySelector('#position');
  subject.insertAdjacentHTML(positionSelect.value, '<strong>inserted text</strong>');
});

const reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
  document.location.reload();
});
```

#### Result

{{EmbedLiveSample("Examples", 100, 100)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element.insertAdjacentElement()")}}
- {{domxref("Element.insertAdjacentText()")}}
- {{domxref("XMLSerializer")}}: Serialize a DOM tree into an XML string
- [hacks.mozilla.org guest post](https://hacks.mozilla.org/2011/11/insertadjacenthtml-enables-faster-html-snippet-injection/) by Henri Sivonen including benchmark showing
  that insertAdjacentHTML can be way faster in some cases.

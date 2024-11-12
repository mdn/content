---
title: contenteditable
slug: Web/HTML/Global_attributes/contenteditable
page-type: html-attribute
browser-compat: html.global_attributes.contenteditable
---

{{HTMLSidebar("Global_attributes")}}

The **`contenteditable`** [global attribute](/en-US/docs/Web/HTML/Global_attributes) is an enumerated attribute indicating if the element should be editable by the user. If so, the browser modifies its widget to allow editing.

{{EmbedInteractiveExample("pages/tabbed/attribute-contenteditable.html","tabbed-shorter")}}

## Value

The attribute must take one of the following values:

- `true` or an _empty string_, which indicates that the element is editable.
- `false`, which indicates that the element is not editable.
- `plaintext-only`, which indicates that the element's raw text is editable, but rich text formatting is disabled.

If the attribute is given without a value, like `<label contenteditable>Example Label</label>`, its value is treated as an empty string.

If this attribute is missing or its value is invalid, its value is _inherited_ from its parent element: so the element is editable if its parent is editable.

Note that although its allowed values include `true` and `false`, this attribute is an _[enumerated](/en-US/docs/Glossary/Enumerated)_ one and not a _Boolean_ one.

You can set the color used to draw the text insertion {{Glossary("caret")}} with the CSS {{cssxref("caret-color")}} property.

Elements that are made editable, and therefore interactive, by using the `contenteditable` attribute can be focused. They participate in sequential keyboard navigation. However, elements with the `contenteditable` attribute nested within other `contenteditable` elements are not added to the tabbing sequence by default. You can add the nested `contenteditable` elements to the keyboard navigation sequence by specifying the `tabindex` value ([`tabindex="0"`](/en-US/docs/Web/HTML/Global_attributes/tabindex)).

If content is pasted into an element with `contenteditable="true"` all of the formatting is retained. If content is pasted into an element with `contenteditable="plaintext-only"` all of the formatting is removed.

## Examples

### Pasting content into contenteditable

This example has 2 {{HTMLElement("div")}}s both with `contenteditable`, the first with the value `true` and the second with the value `plaintext-only`. Copy the content below and paste it into each of the `div`s to see the different effects.

#### HTML

```html hidden
<h2>Content to copy</h2>
<p class="instructions">
  Copy all of the text in the block below and try pasting it into each of the
  blocks below.
</p>
<section class="copying">
  <div class="copy">
    <p>
      This is a paragraph with <strong>Bold</strong> <em>Italic</em> and
      <span class="red">red text</span>. Below is an ordered list:
    </p>
    <ol>
      <li>Step one</li>
      <li>Step two</li>
      <li>Step Three</li>
    </ol>
  </div>
</section>
```

```html
<h2>Pasting areas</h2>
<section class="pasting">
  <div class="wrapper">
    <h3>contenteditable="true"</h3>
    <div contenteditable="true"></div>
  </div>
  <div class="wrapper">
    <h3>contenteditable="plaintext-only"</h3>
    <div contenteditable="plaintext-only"></div>
  </div>
</section>
```

```css hidden
.copying {
  font-family: Georgia, serif;
  margin: 1rem;
  padding: 1rem;
  border: solid black 1px;
}
.red {
  color: red;
}
.pasting {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  width: 100%;
  .wrapper {
    flex: 1 1;
    /* margin: 1rem; */
    padding: 1rem;
    /* border: solid tomato 1px; */
    border-radius: 1rem;
    /* background-color: lightgrey; */
  }
  h3 {
    font-family: monospace;
  }
  [contenteditable] {
    min-height: 3rem;
    border: solid 1px;
    padding: 0.5rem;
    background-color: whitesmoke;
  }
  [contenteditable="true"] {
    caret-color: blue;
  }
  [contenteditable="plaintext-only"] {
    caret-color: red;
  }
}
```

{{EmbedLiveSample("Pasting_Content_into_contenteditable", 400, 500)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- All [global attributes](/en-US/docs/Web/HTML/Global_attributes)
- {{domxref("HTMLElement.contentEditable")}} and {{domxref("HTMLElement.isContentEditable")}}
- The CSS {{cssxref("caret-color")}} property
- [HTMLElement `input` event](/en-US/docs/Web/API/Element/input_event)

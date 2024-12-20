---
title: HTMLDetailsElement
slug: Web/API/HTMLDetailsElement
page-type: web-api-interface
browser-compat:
  - api.HTMLDetailsElement
  - api.HTMLElement.toggle_event.details_elements
---

{{APIRef("HTML DOM")}}

The **`HTMLDetailsElement`** interface provides special properties (beyond the regular {{domxref("HTMLElement")}} interface it also has available to it by inheritance) for manipulating {{HTMLElement("details")}} elements.

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLDetailsElement.name")}}
  - : A string reflecting the [`name`](/en-US/docs/Web/HTML/Element/details#name) HTML attribute, which allows you to create a group of mutually-exclusive {{htmlelement("details")}} elements. Opening one of the named `<details>` elements of this group causes other elements of the group to close.
- {{domxref("HTMLDetailsElement.open")}}
  - : A boolean value reflecting the [`open`](/en-US/docs/Web/HTML/Element/details#open) HTML attribute, indicating whether or not the element's contents (not counting the {{HTMLElement("summary")}}) is to be shown to the user.

## Instance methods

_No specific method; inherits methods from its parent, {{domxref("HTMLElement")}}._

## Events

_Inherits events from its parent interface, {{DOMxRef("HTMLElement")}}._

## Examples

### Log chapters as they are opened and closed

This example uses the `HTMLElement` {{domxref("HTMLElement/toggle_event", "toggle")}} event to add and remove chapters from a log aside as they are opened and closed.

#### HTML

```html
<section id="summaries">
  <p>Chapter summaries:</p>
  <details id="ch1">
    <summary>Chapter I</summary>
    Philosophy reproves Boethius for the foolishness of his complaints against
    Fortune. Her very nature is caprice.
  </details>
  <details id="ch2">
    <summary>Chapter II</summary>
    Philosophy in Fortune's name replies to Boethius' reproaches, and proves
    that the gifts of Fortune are hers to give and to take away.
  </details>
  <details id="ch3">
    <summary>Chapter III</summary>
    Boethius falls back upon his present sense of misery. Philosophy reminds him
    of the brilliancy of his former fortunes.
  </details>
</section>
<aside id="log">
  <p>Open chapters:</p>
  <div data-id="ch1" hidden>I</div>
  <div data-id="ch2" hidden>II</div>
  <div data-id="ch3" hidden>III</div>
</aside>
```

#### CSS

```css
body {
  display: flex;
}

#log {
  flex-shrink: 0;
  padding-left: 3em;
}

#summaries {
  flex-grow: 1;
}
```

#### JavaScript

```js
function logItem(e) {
  console.log(e);
  const item = document.querySelector(`[data-id=${e.target.id}]`);
  item.toggleAttribute("hidden");
}

const chapters = document.querySelectorAll("details");
chapters.forEach((chapter) => {
  chapter.addEventListener("toggle", logItem);
});
```

#### Result

{{EmbedLiveSample("Log chapters as they are opened and closed", 700, 200)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The HTML element implementing this interface: {{HTMLElement("details")}}

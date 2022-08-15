---
title: 'HTMLDetailsElement: toggle event'
slug: Web/API/HTMLDetailsElement/toggle_event
page-type: web-api-event
tags:
  - Event
  - HTMLDetailsElement
  - Reference
  - details
  - toggle
browser-compat: api.HTMLDetailsElement.toggle_event
---
{{APIRef}}

The **`toggle`** event fires when the `open`/`closed` state of a {{HtmlElement("details")}} element is toggled.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('toggle', (event) => {});

ontoggle = (event) => { };
```

## Event type

A generic {{domxref("Event")}}.

## Examples

This example logs chapters that are open. Chapters are removed from the log when they are closed.

### HTML

```html
<aside id="log">
  <p>Open chapters:</p>
  <div data-id="ch1" hidden>I</div>
  <div data-id="ch2" hidden>II</div>
  <div data-id="ch3" hidden>III</div>
</aside>
<section id="summaries">
  <p>Chapter summaries:</p>
  <details id="ch1">
    <summary>Chapter I</summary>
    Philosophy reproves Boethius for the foolishness of his complaints against Fortune. Her very nature is caprice.
  </details>
  <details id="ch2">
    <summary>Chapter II</summary>
    Philosophy in Fortune's name replies to Boethius' reproaches, and proves that the gifts of Fortune are hers to give and to take away.
  </details>
  <details id="ch3">
    <summary>Chapter III</summary>
    Boethius falls back upon his present sense of misery. Philosophy reminds him of the brilliancy of his former fortunes.
  </details>
</section>
```

### CSS

```css
body {
  display: flex;
  flex-direction: row-reverse;
}

#log {
  flex-shrink: 0;
  padding-left: 3em;
}

#summaries {
  flex-grow: 1;
}
```

### JavaScript

```js
function logItem(e) {
  const item = document.querySelector(`[data-id=${e.target.id}]`);
  item.toggleAttribute('hidden');
}

const chapters = document.querySelectorAll('details');
chapters.forEach((chapter) => {
  chapter.addEventListener('toggle', logItem);
});
```

### Result

{{EmbedLiveSample("Examples", 700, 200)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

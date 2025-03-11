---
title: overflow-anchor
slug: Web/CSS/overflow-anchor
page-type: css-property
browser-compat: css.properties.overflow-anchor
---

{{CSSRef}}

The **`overflow-anchor`** [CSS](/en-US/docs/Web/CSS) property provides a way to opt out of the browser's scroll anchoring behavior, which adjusts scroll position to minimize content shifts.

Scroll anchoring behavior is enabled by default in any browser that supports it. Therefore, changing the value of this property is typically only required if you are experiencing problems with scroll anchoring in a document or part of a document and need to turn the behavior off.

{{InteractiveExample("CSS Demo: overflow-anchor")}}

```css interactive-example-choice
overflow-anchor: auto;
```

```css interactive-example-choice
overflow-anchor: none;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="whole-content-wrapper">
    <button id="playback" type="button">Start lottery</button>
    <p>Magic numbers for today are:</p>
    <div id="example-element"></div>
  </div>
</section>
```

```css interactive-example
.whole-content-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

#example-element {
  height: 100%;
  border: 2px dashed dodgerblue;
  padding: 0.75em;
  text-align: left;
  overflow: scroll;
}

#playback {
  font-size: 1em;
  width: 10em;
  height: 4em;
  font-weight: bold;
  margin: 1em auto;
  background-color: aliceblue;
  border: solid 2px dodgerblue;
  border-radius: 5px;
}

#playback:hover {
  border-color: lightseagreen;
}

#playback:active {
  filter: brightness(0.9);
}
```

```js interactive-example
window.addEventListener("load", () => {
  const example = document.getElementById("example-element");
  const button = document.getElementById("playback");
  let intervalId;

  function setInitialState() {
    example.innerHTML = "";
    Array.from({ length: 10 }, (_, i) => i).forEach(addContent);
    example.scrollTop = example.scrollHeight;
  }

  function addContent() {
    console.log("adding content");
    const magicNumber = Math.floor(Math.random() * 10000);
    example.insertAdjacentHTML(
      "afterbegin",
      `<div class="new-content-container">New Magic Number: ${magicNumber}</div>`,
    );
  }

  button.addEventListener("click", () => {
    if (example.classList.contains("running")) {
      example.classList.remove("running");
      button.textContent = "Start lottery";
      clearInterval(intervalId);
    } else {
      example.classList.add("running");
      button.textContent = "Stop lottery";
      setInitialState();
      intervalId = setInterval(addContent, 1000);
    }
  });
});
```

## Syntax

```css
/* Keyword values */
overflow-anchor: auto;
overflow-anchor: none;

/* Global values */
overflow-anchor: inherit;
overflow-anchor: initial;
overflow-anchor: revert;
overflow-anchor: revert-layer;
overflow-anchor: unset;
```

### Values

- `auto`
  - : The element becomes a potential anchor when adjusting scroll position.
- `none`
  - : The element won't be selected as a potential anchor.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Prevent scroll anchoring

To prevent scroll anchoring in a document, use the `overflow-anchor` property.

```css
* {
  overflow-anchor: none;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Guide to scroll anchoring](/en-US/docs/Web/CSS/overflow-anchor/Guide_to_scroll_anchoring)

---
title: ":open"
slug: Web/CSS/:open
page-type: css-pseudo-class
browser-compat: css.selectors.open
---

{{CSSRef}}

The **`:open`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) selects elements in the open state. It works only on elements that have both open and closed states. It matches {{HTMLElement("details")}} and {{HTMLElement("dialog")}} when they are in their open state, and matches {{HTMLElement("select")}} and {{HTMLElement("input")}} when they are in modes which have a picker and the picker is showing.

## Syntax

```css
:open {
  /* ... */
}
```

## Examples

This example demonstrates some of the HTML elements that have an open state.

### CSS

```css
details:open > summary {
  background-color: pink;
}

:is(select, input):open {
  background-color: pink;
}
```

```css hidden
@supports not selector(:open) {
  body::before {
    content: "Your browser doesn't support :open selector.";
    background-color: wheat;
    display: block;
    width: 100%;
    text-align: center;
  }

  body > * {
    display: none;
  }
}
```

### HTML

```html
<details>
  <summary>Details</summary>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar dapibus
  lacus, sit amet finibus lectus mollis eu. Nullam quis orci dictum, porta lacus
  et, cursus nunc. Aenean pulvinar imperdiet neque fermentum facilisis. Nulla
  facilisi. Curabitur vitae sapien ut nunc pulvinar semper vitae vitae nisi.
</details>
<hr />

<label for="pet-select">Choose a pet:</label>
<select id="pet-select">
  <option value="dog">Dog</option>
  <option value="cat">Cat</option>
  <option value="hamster">Hamster</option>
</select>
<hr />

<label for="start">Start date:</label>
<input type="date" id="start" />
```

### Result

{{EmbedLiveSample("Examples", 300, 200)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{Cssxref(":modal")}}

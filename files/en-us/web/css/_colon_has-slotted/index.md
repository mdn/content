---
title: ":has-slotted"
slug: Web/CSS/:has-slotted
page-type: css-pseudo-class
browser-compat: css.selectors.has-slotted
---

{{CSSRef}}

The **`:has-slotted`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) matches when the content of a {{HTMLElement("slot")}} element is not empty or not using the default value (see [Using templates and slots](/en-US/docs/Web/API/Web_components/Using_templates_and_slots) for more information).

> [!NOTE] Even a single whitespace text node is sufficient to make `:has-slotted` apply.

This only works when used inside CSS placed within a [shadow DOM](/en-US/docs/Web/API/Web_components/Using_shadow_DOM).

```css
/* Selects the content of a <slot> element that has content that is not default  */
:has-slotted {
  color: green;
}

/* Selects the content of a <slot> element that has no content or default  */
:not(:has-slotted) {
  color: red;
}
```

## Syntax

```css-nolint
:has-slotted {
  /* ... */
}
```

## Examples

This example has two `<slot>` elements, one of which has been assigned some content and the other has not.

### HTML

```html
<p>
  <template shadowrootmode="open">
    <style>
      :has-slotted {
        color: rebeccapurple;
      }
    </style>
    <slot name="one">Placeholder 1</slot>
    <slot name="two">Placeholder 2</slot>
  </template>
  <span slot="one">Slotted content</span>
</p>
```

### Result

The `<slot>` element that has been assigned content matched the `:has-slotted` pseudo-class and has the `color` value of `rebbecapurple` applied.

{{EmbedLiveSample("simple_example",100,300)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- HTML {{HTMLElement("template")}} element
- HTML {{HTMLElement("slot")}} element
- {{CSSXRef("::slotted")}}

---
title: "`ident()` CSS function"
short-title: ident()
slug: Web/CSS/Reference/Values/ident_function
page-type: css-function
browser-compat: css.types.ident
sidebar: cssref
---

The **`ident()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/Reference/Values/Functions) builds an {{cssxref("ident", "identifier")}} by joining together strings, integers, and other identifiers. It is most useful for generating names, such as a unique {{cssxref("view-transition-name")}} or {{cssxref("anchor-name")}} for each element.

## Syntax

```css
/* Joining a string and an integer: "item-1" */
ident("item-" 1)

/* Joining a string and the result of a function: "item-1", "item-2", … */
ident("item-" sibling-index())

/* Joining a custom property and a string */
ident(var(--id) "-title")

/* Creating a <dashed-ident>, such as "--card1" */
ident(-- attr(id))
```

### Parameters

The `ident()` function accepts one or more values, separated by spaces. Each value can be one of the following:

- {{cssxref("string")}}
  - : A quoted string, such as `"item-"`. Its characters are added to the identifier without the quotes.
- {{cssxref("integer")}}
  - : An integer, such as `1`.
- {{cssxref("ident")}}
  - : An identifier, such as `card`.

Each value can also be written as a function that produces a string, an integer, or an identifier, such as {{cssxref("var()")}}, {{cssxref("attr()")}}, or {{cssxref("sibling-index()")}}.

### Return value

An identifier made of all of the values joined together, in order. If the result isn't a valid identifier, for example because it's empty, the declaration is [invalid at computed-value time](/en-US/docs/Web/CSS/Guides/Syntax/Error_handling#invalid_custom_properties).

## Description

Many CSS properties take a name, given as a {{cssxref("custom-ident")}} or a {{cssxref("dashed-ident")}}, to connect related styles together. For example, {{cssxref("view-transition-name")}} identifies an element in a [view transition](/en-US/docs/Web/API/View_Transition_API), and {{cssxref("anchor-name")}} identifies an element used in [anchor positioning](/en-US/docs/Web/CSS/Guides/Anchor_positioning). Some of these names need to be unique for each element, which usually means writing a separate rule for each element, or setting the names with inline styles.

The `ident()` function lets you build these names in CSS from other values. For example, you can combine a shared prefix with {{cssxref("sibling-index()")}} to give every element in a list its own `view-transition-name`:

```css
.item {
  /* vtn-1, vtn-2, vtn-3, … */
  view-transition-name: ident("vtn-" sibling-index());
}
```

You can also use values from other elements. In the following example, each card's `id` attribute is stored in a custom property, which is then used in the `view-transition-name` of the card and of its heading:

```css
.card[id] {
  /* For example: card1, card2, card3, … */
  --id: attr(id);
  view-transition-name: ident(var(--id));

  h1 {
    /* For example: card1-title, card2-title, card3-title, … */
    view-transition-name: ident(var(--id) "-title");
  }
}
```

In this example, the {{cssxref("attr()")}} function returns the `id` attribute as a string, and `ident()` turns that string into an identifier. For a single attribute, you could use `attr(id type(<custom-ident>))` instead. However, `ident()` lets you combine values from several sources, such as a custom property inherited from a parent element and a string.

To create a `<dashed-ident>`, such as the name of an anchor, use `--` as the first value:

```css
.element {
  anchor-name: ident(-- attr(id));
}
```

### Substitution

The `ident()` function works like {{cssxref("var()")}}: it is replaced with the identifier it builds before the property value is checked. A declaration that uses `ident()` is valid as long as the `ident()` function itself is written correctly. The identifier is built when the element's [computed value](/en-US/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value) is determined, after functions like `var()` and `attr()` have been replaced.

If any of the values doesn't produce a string, an integer, or an identifier at that point, or if the result isn't a valid identifier, the declaration is invalid at computed-value time.

## Formal syntax

{{csssyntax}}

## Examples

### Placing grid items by name

In this example, we use `ident()` to place each item in a grid by matching it to a named grid area.

#### HTML

```html
<div class="grid">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
</div>
```

#### CSS

The grid defines four areas named `item-1` to `item-4`, arranged in reverse order. Each item's {{cssxref("grid-area")}} is built from the string `"item-"` and the item's position among its siblings, returned by {{cssxref("sibling-index()")}}.

```css
.grid {
  display: grid;
  grid-template-areas:
    "item-4 item-3"
    "item-2 item-1";
  gap: 0.5rem;
  width: 200px;
}

.item {
  grid-area: ident("item-" sibling-index());
  padding: 1rem;
  background-color: lightblue;
  font-size: 1.5rem;
  text-align: center;
}
```

```css hidden
@layer no-support {
  @supports not (grid-area: ident("item-" 1)) {
    body::before {
      content: "Your browser doesn't support the ident() function";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem 0;
      margin-bottom: 1rem;
    }
  }
}
```

#### Result

{{EmbedLiveSample("Placing grid items by name", "", 200)}}

The first item is placed in the `item-1` area, which is in the bottom-right corner of the grid, so the items appear in reverse order.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("ident")}} data type
- {{cssxref("custom-ident")}}
- {{cssxref("dashed-ident")}}
- {{cssxref("attr()")}}
- {{cssxref("sibling-index()")}}
- [CSS values and units](/en-US/docs/Web/CSS/Guides/Values_and_units) module

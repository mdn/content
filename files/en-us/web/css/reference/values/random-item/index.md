---
title: "`random-item()` CSS function"
short-title: random-item()
slug: Web/CSS/Reference/Values/random-item
page-type: css-function
browser-compat: css.types.random-item
sidebar: cssref
---

The **`random-item()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/Reference/Values/Functions) picks one value at random from a list of values, and uses it in a property value.

{{InteractiveExample("CSS Demo: random-item()")}}

```html interactive-example
<div class="box"></div>
<div class="box"></div>
<div class="box"></div>
<div class="box"></div>
```

```css interactive-example
body {
  display: flex;
  gap: 1rem;
}

.box {
  width: 60px;
  height: 60px;
  background-color: random-item(
    auto,
    tomato,
    gold,
    mediumseagreen,
    royalblue,
    orchid
  );
}

@supports not (color: random-item(auto, red, blue)) {
  body::before {
    content: "Your browser doesn't support the random-item() function.";
  }
}
```

## Syntax

```css
/* Basic usage */
random-item(auto, red, green, blue)
random-item(auto, 1px, 5px, 10px)
random-item(auto, 1px solid black, 3px dashed red)

/* With a custom <random-key> */
random-item(--my-key, red, green, blue)
random-item(fixed 0.5, red, green, blue)

/* With scoping */
random-item(element-scoped, red, green, blue)
random-item(property-scoped, red, green, blue)
random-item(property-index-scoped, red, green, blue)
random-item(--my-key element-scoped, red, green, blue)
```

### Parameters

The `random-item(<random-key>, <items>)` function accepts the following parameters:

- {{cssxref("random-key")}}
  - : Controls which functions in the document should share a random base value. Specified as `auto`, a {{cssxref("dashed-ident")}}, one of the scope keywords `element-scoped`, `property-scoped`, or `property-index-scoped`, optionally combined with a `<dashed-ident>`, or `fixed <number>`. Unlike in {{cssxref("random()")}}, this parameter is required.
- `<items>`
  - : A comma-separated list of values to choose from. An item can be any CSS value, including a space-separated list of values or a {{cssxref("var()")}} function, or it can be empty.

### Return value

One item, randomly chosen from the list of items. Each item has the same chance of being chosen.

## Description

The `random-item()` function lets you add variety to a page without JavaScript, allowing you to provide a list of valid values from which the browser selects one at random. For example, by providing a list of color values, you can apply a randomly chosen accent color to each card in a group of cards. Similarly, by providing a list of animation names, each card can have a randomly selected animation applied.

### Substitution

The `random-item()` function works like {{cssxref("var()")}}: it is substituted with the chosen item before the property value is checked. This has the following effects:

- A declaration that uses `random-item()` is valid as long as the `random-item()` function itself is written correctly. The browser doesn't check whether the items are valid values for the property.
- The item is chosen when the element's [computed value](/en-US/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value) is determined. Child elements that inherit the property inherit the chosen item, not the `random-item()` function, so they all get the same value as their parent.
- If the chosen item isn't a valid value for the property, the declaration is [invalid at computed-value time](/en-US/docs/Web/CSS/Guides/Syntax/Error_handling#invalid_custom_properties), in the same way as a `var()` function that resolves to an invalid value.

### Sharing random choices

Like {{cssxref("random()")}}, `random-item()` uses a random base value, which is a number between `0` and `1`. The item at the corresponding position in the list is chosen: for a list of `N` items, the browser multiplies the random base value by `N` and rounds down to get the index of the chosen item.

The {{cssxref("random-key")}} determines which random functions share a random base value. When two `random-item()` functions share a random base value and have the same number of items, they always choose the item at the same position. This lets you make several random choices that match each other, as shown in the [Matching random choices across properties](#matching_random_choices_across_properties) example.

A `random-item()` function and a `random()` function with the same `<random-key>` also share a random base value.

The `<random-key>` parameter is required in `random-item()`, while it's optional in `random()`. This is because without it, the browser wouldn't be able to tell whether the first argument is a `<random-key>` or one of the items.

## Formal syntax

{{csssyntax}}

## Examples

### Choosing a random color for each element

In this example, each card is given a random background color from a list of colors.

#### HTML

```html
<ul>
  <li>Apples</li>
  <li>Bananas</li>
  <li>Cherries</li>
  <li>Dates</li>
  <li>Elderberries</li>
  <li>Figs</li>
</ul>
```

#### CSS

The `auto` keyword makes each `<li>` element choose its own color.

```css
ul {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 0;
  list-style: none;
}

li {
  padding: 1rem;
  font-size: 1.25rem;
  background-color: random-item(auto, lightpink, khaki, lightgreen, lightblue);
}
```

```css hidden
@layer no-support {
  @supports not (color: random-item(auto, red, blue)) {
    body::before {
      content: "Your browser doesn't support the random-item() function";
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

{{EmbedLiveSample("Choosing a random color for each element", "", 200)}}

Each card has one of the four background colors. Reload the page to see a different combination.

### Matching random choices across properties

In this example, each card gets a random theme, made up of a background color and a matching border color.

#### HTML

```html
<ul>
  <li>Apples</li>
  <li>Bananas</li>
  <li>Cherries</li>
  <li>Dates</li>
  <li>Elderberries</li>
  <li>Figs</li>
</ul>
```

#### CSS

Both `random-item()` functions use the same `<random-key>`, `--theme element-scoped`. The `--theme` name makes the two properties share a random base value, and `element-scoped` gives each element its own random base value. Because both lists have three items, the background color and border color are always chosen from the same position in their lists.

```css
ul {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 0;
  list-style: none;
}

li {
  padding: 1rem;
  font-size: 1.25rem;
  border: 4px solid;
  background-color: random-item(
    --theme element-scoped,
    lightpink,
    khaki,
    lightblue
  );
  border-color: random-item(--theme element-scoped, deeppink, goldenrod, blue);
}
```

```css hidden
@layer no-support {
  @supports not (color: random-item(auto, red, blue)) {
    body::before {
      content: "Your browser doesn't support the random-item() function";
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

{{EmbedLiveSample("Matching random choices across properties", "", 200)}}

Each card has a random theme, but the border color always matches the background color: pink cards have a deep pink border, yellow cards have a goldenrod border, and blue cards have a blue border.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("random()")}}
- {{cssxref("random-key")}}
- {{cssxref("var()")}}
- [CSS values and units](/en-US/docs/Web/CSS/Guides/Values_and_units) module

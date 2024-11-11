---
title: Spanning and balancing columns
slug: Web/CSS/CSS_multicol_layout/Spanning_balancing_columns
page-type: guide
---

{{CSSRef}}

In this guide, we look at how to make elements span across columns inside the multi-column (_multicol_) container and how to control how the columns are filled.

## Spanning the columns

To cause an item to span across columns, use the {{cssxref("column-span")}} property with a value of `all`. This will cause the element to become a _spanner_, spanning all the columns.

Any descendant element of the multicol container may be turned into a spanner, including both direct and indirect children. For example, a heading nested directly inside the container could become a spanner, as could a heading nested inside a {{HTMLElement("section")}} nested inside the multicol container.

In the example below, the `<h2>` element is set to `column-span: all` and spans all of the columns.

```html live-sample___h2-span
<div class="container">
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi tomatillo melon azuki bean garlic. Gumbo beet greens
    corn soko endive gumbo gourd.
  </p>
  <h2>A heading</h2>
  <p>
    Parsley shallot courgette tatsoi pea sprouts fava bean collard greens
    dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko
    zucchini.
  </p>
  <p>
    Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
    kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter
    purslane kale. Celery potato scallion desert raisin horseradish spinach
    carrot soko.
  </p>
</div>
```

```css live-sample___h2-span
body {
  font: 1.2em / 1.5 sans-serif;
}

.container {
  column-width: 250px;
}

h2 {
  column-span: all;
  background-color: #4d4e53;
  color: #fff;
}
```

{{EmbedLiveSample("h2-span", "", "420px")}}

In this second example, the heading is inside an {{HTMLElement("article")}} element, yet still spans the content as expected.

```html live-sample___nested-h2-span
<div class="container">
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi tomatillo melon azuki bean garlic. Gumbo beet greens
    corn soko endive gumbo gourd.
  </p>
  <article>
    <h2>A heading</h2>
    <p>
      Parsley shallot courgette tatsoi pea sprouts fava bean collard greens
      dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko
      zucchini.
    </p>
    <p>
      Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
      kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus
      winter purslane kale. Celery potato scallion desert raisin horseradish
      spinach carrot soko.
    </p>
  </article>
</div>
```

```css live-sample___nested-h2-span
body {
  font: 1.2em / 1.5 sans-serif;
}

.container {
  column-width: 250px;
}

h2 {
  column-span: all;
  background-color: #4d4e53;
  color: #fff;
}
```

{{EmbedLiveSample("nested-h2-span", "", "420px")}}

When a spanner is introduced, it breaks the flow of columns; columns restart after the spanner, effectively creating a new set of column boxes. The content does not jump over a spanning element.

### Limitations of column-span

The `column-span` can have only two values. The initial value `none` means the item does not span and remains within a column. The value `all` means the item spans all of the columns. There are no values that enable partial spanning, such as having an item span two out of three columns.

### Things to watch out for

If the spanning element is inside another element with margins, padding, and a border or background color, the box may appear above the spanner with the rest of the content being displayed below. For this reason, care should be taken when setting an element to span all the columns, ensuring this scenario is accounted for.

```html hidden live-sample___mpb-span
<div class="container">
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi tomatillo melon azuki bean garlic. Gumbo beet greens
    corn soko endive gumbo gourd.
  </p>
  <article>
    <h2>A heading</h2>
    <p>
      Parsley shallot courgette tatsoi pea sprouts fava bean collard greens
      dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko
      zucchini.
    </p>
    <p>
      Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
      kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus
      winter purslane kale. Celery potato scallion desert raisin horseradish
      spinach carrot soko.
    </p>
  </article>
</div>
```

```css live-sample___mpb-span
body {
  font: 1.2em / 1.5 sans-serif;
}

article {
  border: 1px solid red;
  padding: 10px;
}

.container {
  column-width: 250px;
}
h2 {
  background-color: #4d4e53;
  color: #fff;
  column-span: all;
}
```

{{EmbedLiveSample("mpb-span", "", "420px")}}

Additionally, if a spanning element appears later in the content, it can cause unexpected or unwanted behavior when there is not enough content to create columns after the spanner. Use spanning carefully and test at various breakpoints to make sure you get the effect you intended.

## Filling and balancing columns

A balanced set of columns is where all columns have approximately the same amount of content. Filling and balancing are relevant when the amount of content does not match the amount of space provided, such as when a {{CSSXref("height")}} is declared on the container.

The initial value for {{cssxref("column-fill")}} is `balance`. The value of `balance` means all columns are as balanced as possible. In fragmented contexts, such as [paged media](/en-US/docs/Web/CSS/CSS_paged_media), only the last fragment is balanced. This means that on the last page, the final set of column boxes is balanced.

The other balancing value, `balance-all`, balances all columns in fragmented contexts.

The columns in this example contain an image and some text, which are balanced. The image, which cannot break, is in the first column. The other columns are balanced, filling with equal amounts of text.

```html live-sample___balance
<div class="container">
  <img
    alt="Multiple hot air balloons in a clear sky, a crowd of spectators gather in the foreground."
    src="https://mdn.github.io/shared-assets/images/examples/balloons.jpg" />
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi tomatillo melon azuki bean garlic.
  </p>
  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
    tatsoi pea sprouts fava bean collard greens dandelion.
  </p>
</div>
```

```css live-sample___balance
body {
  font: 1.2em / 1.5 sans-serif;
}
h2 {
  background-color: #4d4e53;
  color: #fff;
}
img {
  max-width: 100%;
}
.container {
  column-width: 200px;
  column-fill: balance;
  height: 250px;
}
```

{{EmbedLiveSample("balance", "", "250px")}}

The `auto` value for `column-fill` fills a column sequentially, filling the first column in the inline-start direction, before placing content in subsequent columns, rather than balancing and filling all the columns equally. In this example, we changed `column-fill` to `auto`. The columns are filled to the height of the container, leaving empty columns at the end.

```html hidden live-sample___auto
<div class="container">
  <img
    alt="Multiple hot air balloons in a clear sky, a crowd of spectators gather in the foreground."
    src="https://mdn.github.io/shared-assets/images/examples/balloons.jpg" />
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi tomatillo melon azuki bean garlic.
  </p>
  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
    tatsoi pea sprouts fava bean collard greens dandelion.
  </p>
</div>
```

```css live-sample___auto
body {
  font: 1.2em / 1.5 sans-serif;
}
h2 {
  background-color: #4d4e53;
  color: #fff;
}
img {
  max-width: 100%;
}

.container {
  column-width: 150px;
  column-fill: auto;
  height: 250px;
}
```

{{EmbedLiveSample("auto", "", "250px")}}

## Next steps

In the next guide, you will learn [how multicol handles overflow](/en-US/docs/Web/CSS/CSS_multicol_layout/Handling_overflow_in_multicol_layout) within columns and when there are more columns than can fit in the container.

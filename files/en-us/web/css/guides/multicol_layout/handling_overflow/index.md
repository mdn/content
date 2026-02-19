---
title: Handling overflow in multi-column layout
short-title: Handling overflow
slug: Web/CSS/Guides/Multicol_layout/Handling_overflow
page-type: guide
sidebar: cssref
---

In this guide, we look at how to deal with overflow in a multi-column (_multicol_) layout, both inside the column boxes and in situations where there is more content than will fit into the container.

## Overflow inside column boxes

An overflow situation happens when an item's size is larger than the column box. For example, the situation could happen when an image in a column is wider than the `column-width` value or the width of the column based on the number of columns declared with `column-count`.

In this situation, the content should visibly overflow into the next column, rather than be clipped by the column box.

```html live-sample___image
<div class="container">
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi tomatillo melon azuki bean garlic.
  </p>
  <img
    alt="A close-up of two hot air balloons being inflated."
    src="https://mdn.github.io/shared-assets/images/examples/balloons3.jpg" />
  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
    tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.
    Dandelion cucumber earthnut pea peanut soko zucchini.
  </p>
  <p>
    Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
    kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter
    purslane kale. Celery potato scallion desert raisin horseradish spinach
    carrot soko.
  </p>
</div>
```

```css live-sample___image
body {
  font: 1.2em / 1.5 sans-serif;
}

.container {
  column-width: 250px;
}
```

{{EmbedLiveSample("image", "", "440px")}}

There are two columns of text. In the left column, there is a photo that is wider than the column. The image expands into that second column, appearing behind the text of the right column. The flow of text in the right column isn't affected by the protruding photo, but the appearance is.

If you want an image to fit the column box, setting `max-width: 100%` will prevent the image from growing beyond its container, in this case, the column box.

```html hidden live-sample___image-max-width
<div class="container">
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi tomatillo melon azuki bean garlic.
  </p>
  <img
    alt="A close-up of two hot air balloons being inflated."
    src="https://mdn.github.io/shared-assets/images/examples/balloons3.jpg" />
  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
    tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.
    Dandelion cucumber earthnut pea peanut soko zucchini.
  </p>
  <p>
    Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
    kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter
    purslane kale. Celery potato scallion desert raisin horseradish spinach
    carrot soko.
  </p>
</div>
```

```css live-sample___image-max-width
body {
  font: 1.2em / 1.5 sans-serif;
}

.container {
  column-width: 250px;
}
img {
  max-width: 100%;
}
```

{{EmbedLiveSample("image-max-width", "", "440px")}}

## More columns than will fit

How overflowing columns are handled depends on whether the media context is fragmented, such as print, or is continuous, such as a web page.

- In fragmented media, after a fragment (for example, a page) is filled with columns, the columns will move to a new page and fill that up with columns.
- In continuous media, if a height is set on a multi-column container, columns overflow in the inline direction by default. On the web, this means that you will get a horizontal scrollbar. This behavior can be overridden by using {{cssxref("column-height")}} and {{cssxref("column-wrap")}} to enforce [column wrapping](#using_column_wrapping_for_multicol).


This example shows the default continuous media overflow behavior. The multicol container has a set {{CSSXref("height")}} and there is more text than space to create columns; therefore, we get columns created outside of the container.

```html live-sample___overflow-inline
<div class="container">
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi tomatillo melon azuki bean garlic.
  </p>
  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
    tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.
    Dandelion cucumber earthnut pea peanut soko zucchini.
  </p>
  <p>
    Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
    kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter
    purslane kale. Celery potato scallion desert raisin horseradish spinach
    carrot soko.
  </p>
</div>
```

```css live-sample___overflow-inline
body {
  font: 1.2em / 1.5 sans-serif;
}

.container {
  column-width: 200px;
  height: 180px;
  border: 2px dashed;
}
```

{{EmbedLiveSample("overflow-inline", "", "240px")}}

## Using vertical media queries

One issue with multicol on the web is that if the columns are taller than the viewport, the reader will need to scroll the page up and down to read, which is not a good user experience. One way to avoid this is to only apply the column properties if you know there is enough vertical space.

In the example below, we used a `height` [@media query](/en-US/docs/Web/CSS/Guides/Media_queries/Using) to ensure there is enough vertical space before applying the column properties.

```html hidden live-sample___min-height
<div class="container">
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi tomatillo melon azuki bean garlic.
  </p>
  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
    tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.
    Dandelion cucumber earthnut pea peanut soko zucchini.
  </p>
  <p>
    Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
    kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter
    purslane kale. Celery potato scallion desert raisin horseradish spinach
    carrot soko.
  </p>
</div>
```

```css live-sample___min-height
body {
  font: 1.2em / 1.5 sans-serif;
}

@media (height >= 300px) {
  .container {
    column-width: 200px;
  }
}
```

{{EmbedLiveSample("min-height", "", "340px")}}

## Using column wrapping for multicol

The {{cssxref("column-height")}} and {{cssxref("column-wrap")}} properties can be used to assign a fixed height to generated columns, and force excess columns to overflow into additional rows of columns in the block direction. In horizontal writing mode content, this means that you'll end up with vertically-scrolling rows of columns, rather than a horizontally scrolling single row. Let's look at an example.

The HTML contains basic text content, which we have hidden for brevity.

```html hidden
<p>
  This is a bunch of text split into three columns using the CSS
  <code>columns</code> property. This includes a <code>column-count</code> value
  of <code>2</code> and a <code>column-height</code> value of <code>95vh</code>.
  The <code>column-wrap</code> value is set to its initial value,
  <code>auto</code>; when a <code>column-height</code> value is included,
  <code>column-wrap: auto</code> resolves to <code>wrap</code>, which allows the
  columns to wrap onto multiple rows. The text is equally distributed over the
  columns, and placed into multiple rows.
</p>

<p>
  The <code>column-height</code> and <code>column-wrap</code> properties were
  introduced in
  <a href="https://drafts.csswg.org/css-multicol-2/"
    >CSS Multi-column Layout Module Level 2</a
  >.
</p>
```

We give our content some styles. Most notably, we set the `<body>` element's `column-count` to `2`, and its `column-height` to `95vh` so that each row of columns fills up the viewport. We don't need to explicitly set `column-wrap` to `wrap`: when `column-height` is set to a {{cssxref("&lt;length>")}} value, the initial value of `column-wrap` (`auto`) resolves to `wrap`, which is usually the behavior you'll want.

```css hidden
html {
  font-family: sans-serif;
}

body {
  width: 60%;
  margin: 0 auto;
}

p:first-of-type {
  margin-top: 0;
}
```

```css
body {
  font-size: 1.3em;
  line-height: 1.5;
  column-count: 2;
  column-height: 95vh;
}
```

```css hidden
@supports not (column-height: 5em) {
  body::before {
    content: "Your browser does not support the 'column-height' property.";
    color: black;
    background-color: #ffcd33;
    display: block;
    position: fixed;
    inset: 40% 2em;
    height: fit-content;
    text-align: center;
    font-weight: bold;
    padding: 1rem 0;
  }
}
```

This example renders like so:

{{EmbedLiveSample('Using column wrapping for multicol', 'auto', 240)}}

## Next steps

In the final guide in this series, we will see [how fragmentation works with multicol layouts](/en-US/docs/Web/CSS/Guides/Multicol_layout/Handling_content_breaks) to give us control over how content breaks between columns.

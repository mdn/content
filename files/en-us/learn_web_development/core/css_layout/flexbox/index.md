---
title: Flexbox
slug: Learn_web_development/Core/CSS_layout/Flexbox
page-type: learn-module-chapter
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Positioning", "Learn_web_development/Core/CSS_layout/Grids", "Learn_web_development/Core/CSS_layout")}}

[Flexbox](/en-US/docs/Web/CSS/CSS_flexible_box_layout) is a one-dimensional layout method for arranging items in rows or columns. Items _flex_ (expand) to fill additional space or shrink to fit into smaller spaces. This article explains all the fundamentals.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        <a href="/en-US/docs/Learn_web_development/Core/Structuring_content"
          >Structuring content with HTML</a
        >,
        <a href="/en-US/docs/Learn_web_development/Core/Styling_basics">CSS Styling basics</a>,
        <a href="/en-US/docs/Learn_web_development/Core/Text_styling/Fundamentals">Fundamental text and font styling</a>,
        familiarity with <a href="/en-US/docs/Learn_web_development/Core/CSS_layout/Introduction">CSS layout fundamental concepts</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Learning outcomes:</th>
      <td>
        <ul>
          <li>The purpose of flexbox — flexibly lay out a set of block or inline elements in one dimension.</li>
          <li>Flex terminology — flex container, flex item, main axis, and cross axis.</li>
          <li>Understand what <code>display: flex</code> gives you by default.</li>
          <li>How to wrap content onto new rows and columns.</li>
          <li>Flexible sizing and ordering of flex items.</li>
          <li>Justifying and aligning content.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Why flexbox?

CSS flexible box layout enables you to:

- Vertically center a block of content inside its parent.
- Make all the children of a container take up an equal amount of the available width/height, regardless of how much width/height is available.
- Make all columns in a multiple-column layout adopt the same height even if they contain a different amount of content.

Flexbox features may be the perfect solution for your one dimensional layout needs. Let's dig in and find out!

## Introducing a simple example

In this article, you'll work through a series of exercises to help you understand how flexbox works. To get started, you should make a local copy of the HTML and CSS. Load it in a modern browser (like Firefox or Chrome) and have a look at the code in your code editor. Alternatively open the example in {{LiveSampleLink("flexbox_0", "open the playground")}}.

```html live-sample___flexbox_0
<header>
  <h1>Sample flexbox example</h1>
</header>
<section>
  <article>
    <h2>First article</h2>
    <p>Content…</p>
  </article>
  <article>
    <h2>Second article</h2>
    <p>Content…</p>
  </article>
  <article>
    <h2>Third article</h2>
    <p>Content…</p>
  </article>
</section>
```

```css live-sample___flexbox_0
body {
  font-family: sans-serif;
  margin: 0;
}
header {
  background: purple;
  height: 100px;
}
h1 {
  text-align: center;
  color: white;
  line-height: 100px;
  margin: 0;
}
section {
  zoom: 0.8;
}
article {
  padding: 10px;
  margin: 10px;
  background: aqua;
}
/* Add your flexbox CSS below here */
```

{{EmbedLiveSample("flexbox_0", "100", "415")}}

You'll see that we have a {{htmlelement("header")}} element with a top level heading inside it and a {{htmlelement("section")}} element containing three {{htmlelement("article")}}s. We're going to use these to create a fairly standard three column layout.

## Specifying what elements to lay out as flexible boxes

To start with, we need to select which elements are to be laid out as flexible boxes. To do this, we set a special value of {{cssxref("display")}} on the parent element of the elements you want to affect. In this case we want to lay out the {{htmlelement("article")}} elements, so we set this on the {{htmlelement("section")}}:

```html hidden live-sample___flexbox_1
<header>
  <h1>Sample flexbox example</h1>
</header>
<section>
  <article>
    <h2>First article</h2>
    <p>Content…</p>
  </article>
  <article>
    <h2>Second article</h2>
    <p>Content…</p>
  </article>
  <article>
    <h2>Third article</h2>
    <p>Content…</p>
  </article>
</section>
```

```css hidden live-sample___flexbox_1
body {
  font-family: sans-serif;
  margin: 0;
}
header {
  background: purple;
  height: 100px;
}
h1 {
  text-align: center;
  color: white;
  line-height: 100px;
  margin: 0;
}
section {
  zoom: 0.8;
}
article {
  padding: 10px;
  margin: 10px;
  background: aqua;
}
/* Add your flexbox CSS below here */
```

```css live-sample___flexbox_1
section {
  display: flex;
}
```

This causes the `<section>` element to become a **flex container** and its children become **flex items**. This is what it looks like:

{{EmbedLiveSample("flexbox_1", "100", "210")}}

This single declaration gives us everything we need. Incredible, right? We have a multiple column layout with equal-sized columns, and the columns are all the same height. This is because the default values given to flex items (the children of the flex container) are set up to solve common problems such as this.

Let's recap what's happening here. Adding a {{cssxref("display")}} value of `flex` to an element makes it a flex container. The container is displayed as [Block-level content](/en-US/docs/Glossary/Block-level_content) in terms of how it interacts with the rest of the page. When the element is converted to a flex container, its children are converted to (and laid out as) flex items.

You can make the container inline using an [outside `display` value](/en-US/docs/Web/CSS/display#outside) (e.g., `display: inline flex`), which affects how the container itself is laid out in the page.
The legacy `inline-flex` display value displays the container as inline as well.
We'll focus on how the contents of the container behave in this tutorial, but if you want to see the effect of inline versus block layout, you can have a look at the [value comparison](/en-US/docs/Web/CSS/display#display_value_comparison) on the `display` property page.

The next sections explain in more detail what flex items are and what happens inside an element when you make it a flex container.

## The flex model

When elements are laid out as flex items, they are laid out along two axes:

![Three flex items in a left-to-right language are laid out side-by-side in a flex container. The main axis — the axis of the flex container in the direction in which the flex items are laid out — is horizontal. The ends of the axis are main-start and main-end and are on the left and right respectively. The cross axis is vertical; perpendicular to the main axis. The cross-start and cross-end are at the top and bottom respectively. The length of the flex item along the main axis, in this case, the width, is called the main size, and the length of the flex item along the cross axis, in this case, the height, is called the cross size.](flex_terms.png)

- The **main axis** is the axis running in the direction the flex items are laid out in (for example, as a row across the page, or a column down the page.) The start and end of this axis are called the **main start** and **main end**. The length from the main-start edge to the main-end edge is the **main size**.
- The **cross axis** is the axis running perpendicular to the direction the flex items are laid out in. The start and end of this axis are called the **cross start** and **cross end**. The length from the cross-start edge to the cross-end edge is the **cross size**.
- The parent element that has `display: flex` set on it (the {{htmlelement("section")}} in our example) is called the **flex container**.
- The items laid out as flexible boxes inside the flex container are called **flex items** (the {{htmlelement("article")}} elements in our example).

Bear this terminology in mind as you go through subsequent sections. You can always refer back to it if you get confused about any of the terms being used.

## Columns or rows?

Flexbox provides a property called {{cssxref("flex-direction")}} that specifies which direction the main axis runs (which direction the flexbox children are laid out in). By default this is set to `row`, which causes them to be laid out in a row in the direction your browser's default language works in (left to right, in the case of an English browser).

Try adding the following declaration to your {{htmlelement("section")}} rule:

```css
flex-direction: column;
```

You'll see that this puts the items back in a column layout, much like they were before we added any CSS. Before you move on, delete this declaration from your example.

> [!NOTE]
> You can also lay out flex items in a reverse direction using the `row-reverse` and `column-reverse` values. Experiment with these values too!

## Wrapping

One issue that arises when you have a fixed width or height in your layout is that eventually your flexbox children will overflow their container, breaking the layout. In the following example we have 5 {{htmlelement("article")}}s, which don't fit, because they have a `min-width` of `400px`, so there is a horizontal scroll.

```html hidden live-sample___flex-wrap_0
<header>
  <h1>Sample flexbox example</h1>
</header>
<section>
  <article>
    <h2>First article</h2>
    <p>Content…</p>
  </article>
  <article>
    <h2>Second article</h2>
    <p>Content…</p>
  </article>
  <article>
    <h2>Third article</h2>
    <p>Content…</p>
  </article>
  <article>
    <h2>Fourth article</h2>
    <p>Content…</p>
  </article>
  <article>
    <h2>Fifth article</h2>
    <p>Content…</p>
  </article>
</section>
```

```css hidden live-sample___flex-wrap_0
body {
  font-family: sans-serif;
  margin: 0;
}
header {
  background: purple;
  height: 100px;
}
h1 {
  text-align: center;
  color: white;
  line-height: 100px;
  margin: 0;
}
article {
  min-width: 400px;
  padding: 10px;
  margin: 10px;
  background: aqua;
}
section {
  display: flex;
  flex-direction: row;
  zoom: 0.8;
}
```

{{EmbedLiveSample("flex-wrap_0", "100", "230")}}

Here we see that the children are indeed breaking out of their container. By default, the browser tries to place all the flex items in a single row if the `flex-direction` is set to `row` or a single column if the `flex-direction` is set to `column`.

```html hidden live-sample___flex-wrap_1
<header>
  <h1>Sample flexbox example</h1>
</header>
<section>
  <article>
    <h2>First article</h2>
    <p>Content…</p>
  </article>
  <article>
    <h2>Second article</h2>
    <p>Content…</p>
  </article>
  <article>
    <h2>Third article</h2>
    <p>Content…</p>
  </article>
  <article>
    <h2>Fourth article</h2>
    <p>Content…</p>
  </article>
  <article>
    <h2>Fifth article</h2>
    <p>Content…</p>
  </article>
</section>
```

```css hidden live-sample___flex-wrap_1
body {
  font-family: sans-serif;
  margin: 0;
}
header {
  background: purple;
  height: 100px;
}
h1 {
  text-align: center;
  color: white;
  line-height: 100px;
  margin: 0;
}
article {
  min-width: 400px;
  padding: 10px;
  margin: 10px;
  background: aqua;
}
section {
  display: flex;
  flex-direction: row;
  zoom: 0.8;
}
```

One way in which you can fix this is to add the following declaration to your {{htmlelement("section")}} rule:

```css live-sample___flex-wrap_1
section {
  flex-wrap: wrap;
}
```

You'll see that the layout looks much better with this included:

{{EmbedLiveSample("flex-wrap_1", "100", "430")}}

We now have multiple rows. Each row has as many flexbox children fitted into it as is sensible. Any overflow is moved down to the next line. The `flex: 200px` declaration set on the articles means that each will be at least `200px` wide. We'll discuss this property in more detail later on. You might also notice that the last few children on the last row are each made wider so that the entire row is still filled.

But there's more we can do here. First of all, try changing your {{cssxref("flex-direction")}} property value to `row-reverse`. Now you'll see that you still have your multiple row layout, but it starts from the opposite corner of the browser window and flows in reverse.

## flex-flow shorthand

At this point it's worth noting that a shorthand exists for {{cssxref("flex-direction")}} and {{cssxref("flex-wrap")}}: {{cssxref("flex-flow")}}. So, for example, you can replace

```css
flex-direction: row;
flex-wrap: wrap;
```

with

```css
flex-flow: row wrap;
```

## Flexible sizing of flex items

Let's now return to our first example and look at how we can control what proportion of space flex items take up compared to the other flex items.

```html hidden live-sample___flexbox_2
<header>
  <h1>Sample flexbox example</h1>
</header>
<section>
  <article>
    <h2>First article</h2>
    <p>Content…</p>
  </article>
  <article>
    <h2>Second article</h2>
    <p>Content…</p>
  </article>
  <article>
    <h2>Third article</h2>
    <p>Content…</p>
  </article>
</section>
```

```css hidden live-sample___flexbox_2
body {
  font-family: sans-serif;
  margin: 0;
}
header {
  background: purple;
  height: 100px;
}
h1 {
  text-align: center;
  color: white;
  line-height: 100px;
  margin: 0;
}
article {
  padding: 10px;
  margin: 10px;
  background: aqua;
}
section {
  zoom: 0.8;
  display: flex;
}
```

In your local copy, add the following rule to the bottom of your CSS:

```css live-sample___flexbox_2
article {
  flex: 1;
}
```

{{EmbedLiveSample("flexbox_2", "100", "210")}}

This is a unitless proportion value that dictates how much available space along the main axis each flex item will take up compared to other flex items. In this case, we're giving each {{htmlelement("article")}} element the same value (a value of `1`), which means they'll all take up an equal amount of the spare space left after properties like padding and margin have been set. This value is proportionally shared among the flex items: giving each flex item a value of `400000` would have exactly the same effect.

```html hidden live-sample___flexbox_3
<header>
  <h1>Sample flexbox example</h1>
</header>
<section>
  <article>
    <h2>First article</h2>
    <p>Content…</p>
  </article>
  <article>
    <h2>Second article</h2>
    <p>Content…</p>
  </article>
  <article>
    <h2>Third article</h2>
    <p>Content…</p>
  </article>
</section>
```

```css hidden live-sample___flexbox_3
body {
  font-family: sans-serif;
  margin: 0;
}
header {
  background: purple;
  height: 100px;
}
h1 {
  text-align: center;
  color: white;
  line-height: 100px;
  margin: 0;
}
article {
  padding: 10px;
  margin: 10px;
  background: aqua;
}
section {
  zoom: 0.8;
  display: flex;
}
article {
  flex: 1;
}
```

Now add the following rule below the previous one:

```css live-sample___flexbox_3
article:nth-of-type(3) {
  flex: 2;
}
```

{{EmbedLiveSample("flexbox_3", "100", "210")}}

Now when you refresh, you'll see that the third {{htmlelement("article")}} takes up twice as much of the available width as the other two. There are now four proportion units available in total (since 1 + 1 + 2 = 4). The first two flex items have one unit each, so they each take 1/4 of the available space. The third one has two units, so it takes up 2/4 of the available space (or one-half).

You can also specify a minimum size value within the flex value. Try updating your existing article rules like so:

```html hidden live-sample___flexbox_4
<header>
  <h1>Sample flexbox example</h1>
</header>
<section>
  <article>
    <h2>First article</h2>
    <p>Content…</p>
  </article>
  <article>
    <h2>Second article</h2>
    <p>Content…</p>
  </article>
  <article>
    <h2>Third article</h2>
    <p>Content…</p>
  </article>
</section>
```

```css hidden live-sample___flexbox_4
body {
  font-family: sans-serif;
  margin: 0;
}
header {
  background: purple;
  height: 100px;
}
h1 {
  text-align: center;
  color: white;
  line-height: 100px;
  margin: 0;
}
article {
  padding: 10px;
  margin: 10px;
  background: aqua;
}
section {
  zoom: 0.8;
  display: flex;
}
```

```css live-sample___flexbox_4
article {
  flex: 1 100px;
}

article:nth-of-type(3) {
  flex: 2 100px;
}
```

This basically states, "Each flex item will first be given `100px` of the available space. After that, the rest of the available space will be shared according to the proportion units." You'll see a difference in how the space is shared.

{{EmbedLiveSample("flexbox_4", "100", "210")}}

All the flex items have a minimum width of 100 pixels—set using 'flex'. The value of flex for first two flex items is 1 and for the third item is 2. This splits the remaining space in the flex container into 4 proportion units. One unit is assigned to each of the first two flex items and 2 units are assigned to the third flex item, making the third flex item wider than the other two, which are of the same width.

The real value of flexbox can be seen in its flexibility/responsiveness. If you resize the browser window or add another {{htmlelement("article")}} element, the layout continues to work just fine.

## flex: shorthand versus longhand

{{cssxref("flex")}} is a shorthand property that can specify up to three different values:

- The unitless proportion value we discussed above. This can be specified separately using the {{cssxref("flex-grow")}} longhand property.
- A second unitless proportion value, {{cssxref("flex-shrink")}}, which comes into play when the flex items are overflowing their container. This value specifies how much an item will shrink in order to prevent overflow. This is quite an advanced flexbox feature and we won't be covering it any further in this article.
- The minimum size value we discussed above. This can be specified separately using the {{cssxref("flex-basis")}} longhand value.

We'd advise against using the longhand flex properties unless you really have to (for example, to override something previously set). They lead to a lot of extra code being written and can be somewhat confusing.

## Horizontal and vertical alignment

You can also use flexbox features to align flex items along the main or cross axis. Let's explore this by looking at a new example:

```html live-sample___flex-align_0
<div>
  <button>Smile</button>
  <button>Laugh</button>
  <button>Wink</button>
  <button>Shrug</button>
  <button>Blush</button>
</div>
```

```css live-sample___flex-align_0
body {
  font-family: sans-serif;
  width: 90%;
  max-width: 960px;
  margin: 10px auto;
}
div {
  height: 100px;
  border: 1px solid black;
}
button {
  font-size: 18px;
  line-height: 1.5;
  width: 15%;
}
/* Add your flexbox CSS below here */
```

We're going to turn this into a neat, flexible button/toolbar. At the moment you'll see a horizontal menu bar with some buttons jammed into the top left-hand corner.

{{EmbedLiveSample("flex-align_0", "100", "125")}}

First, take a local copy of this example.

Now, add the following to the bottom of the example's CSS:

```html hidden live-sample___flex-align_1
<div>
  <button>Smile</button>
  <button>Laugh</button>
  <button>Wink</button>
  <button>Shrug</button>
  <button>Blush</button>
</div>
```

```css hidden live-sample___flex-align_1
body {
  font-family: sans-serif;
  width: 90%;
  max-width: 960px;
  margin: 10px auto;
}
div {
  height: 100px;
  border: 1px solid black;
}
button {
  font-size: 18px;
  line-height: 1.5;
  width: 15%;
}
/* Add your flexbox CSS below here */
```

```css live-sample___flex-align_1
div {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
```

{{EmbedLiveSample("flex-align_1", "100", "125")}}

Refresh the page and you'll see that the buttons are now nicely centered horizontally and vertically. We've done this via two new properties. The flex items are positioned at the center of the cross-axis by setting the `align-items` property to `center`. The flex items are spaced evenly along the main-axis by setting the `justify-content` property to `space-around`.

The {{cssxref("align-items")}} property controls where the flex items sit on the cross axis.

- By default, the value `normal` which behaves as `stretch` in flexbox. This stretches all flex items to fill the parent in the direction of the cross axis. If the parent doesn't have a fixed size in the cross axis direction, then all flex items will become as tall (or wide) as the tallest (or widest) flex item. This is how our first example had columns of equal height by default.
- The `center` value that we used in our above code causes the items to maintain their intrinsic dimensions, but be centered along the cross axis. This is why our current example's buttons are centered vertically.
- You can also have values like `flex-start`, `self-start` or `start` and `flex-end`, `self-end` or `end`, which will align all items at the start and end of the cross axis respectively. The `baseline` values will line up the flex items by their baseline; basically the bottom of each flex items first line of text will be lined up with the bottom of the first line of the element with the greatest distance between the cross start and that baseline. See {{cssxref("align-items")}} for the full details.

You can override the {{cssxref("align-items")}} behavior for individual flex items by applying the {{cssxref("align-self")}} property to them. For example, try adding the following to your CSS:

```html hidden live-sample___flex-align_2
<div>
  <button>Smile</button>
  <button>Laugh</button>
  <button>Wink</button>
  <button>Shrug</button>
  <button>Blush</button>
</div>
```

```css hidden live-sample___flex-align_2
body {
  font-family: sans-serif;
  width: 90%;
  max-width: 960px;
  margin: 10px auto;
}
div {
  height: 100px;
  border: 1px solid black;
}
button {
  font-size: 18px;
  line-height: 1.5;
  width: 15%;
}
div {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
/* Add your flexbox CSS below here */
```

```css live-sample___flex-align_2
button:first-child {
  align-self: flex-end;
}
```

{{EmbedLiveSample("flex-align_2", "100", "125")}}

Have a look at what effect this has and remove it again when you've finished.

{{cssxref("justify-content")}} controls where the flex items sit on the main axis.

- The default value is `normal`, which behaves as `start`, which makes all the items sit at the start of the main axis.
- You can use `end` or `flex-end` to make them sit at the end.
- The `left` and `right` values behave as `start` or `end` depending on the writing mode direction.
- `center` is also a value for `justify-content`. It'll make the flex items sit in the center of the main axis.
- The value we've used above, `space-around`, is useful — it distributes all the items evenly along the main axis with a bit of space left at either end.
- There is another value, `space-between`, which is very similar to `space-around` except that it doesn't leave any space at either end.

The [`justify-items`](/en-US/docs/Web/CSS/justify-items) property is ignored in flexbox layouts.

We'd like to encourage you to play with these values to see how they work before you continue.

## Ordering flex items

Flexbox also has a feature for changing the layout order of flex items without affecting the source order. This is another thing that is impossible to do with traditional layout methods.

Try adding the following CSS to your button bar example code:

```css
button:first-child {
  order: 1;
}
```

Refresh and you'll see that the "Smile" button has moved to the end of the main axis. Let's talk about how this works in a bit more detail:

- By default, all flex items have an {{cssxref("order")}} value of `0`.
- Flex items with higher specified order values will appear later in the display order than items with lower order values.
- Flex items with the same order value will appear in their source order. So if you have four items whose order values have been set as `2`, `1`, `1`, and `0` respectively, their display order would be 4th, 2nd, 3rd, then 1st.
- The 3rd item appears after the 2nd because it has the same order value and is after it in the source order.

You can set negative order values to make items appear earlier than items whose value is `0`. For example, you could make the "Blush" button appear at the start of the main axis using the following rule:

```css
button:last-child {
  order: -1;
}
```

While you can change the order using `order`, the tabbing order remains the same as the code order. Changing the order of focusable elements can negatively impact usability for your keyboard users!

## Nested flex boxes

It's possible to create some pretty complex layouts with flexbox. It's perfectly OK to set a flex item to also be a flex container, so that its children are also laid out like flexible boxes.

```html hidden live-sample___flex-nesting
<header>
  <h1>Complex flexbox example</h1>
</header>
<section>
  <article>
    <h2>First article</h2>
    <p>Content…</p>
  </article>
  <article>
    <h2>Second article</h2>
    <p>Content…</p>
  </article>
  <article>
    <div>
      <button>Smile</button>
      <button>Laugh</button>
      <button>Wink</button>
      <button>Shrug</button>
      <button>Blush</button>
    </div>
    <div>
      <p>Paragraph one content…</p>
    </div>
    <div>
      <p>Paragraph two content…</p>
    </div>
  </article>
</section>
```

```css hidden live-sample___flex-nesting
body {
  font-family: sans-serif;
  margin: 0;
}
header {
  background: purple;
  height: 100px;
}
h1 {
  text-align: center;
  color: white;
  line-height: 100px;
  margin: 0;
}
article {
  padding: 10px;
  margin: 10px;
  background: aqua;
}
section {
  display: flex;
  zoom: 0.8;
}
article {
  flex: 1 170px;
}
article:nth-of-type(3) {
  flex: 3 170px;
  display: flex;
  flex-flow: column;
}
article:nth-of-type(3) div:first-child {
  flex: 1 100px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
}
button {
  flex: 1 auto;
  margin: 5px;
  font-size: 18px;
  line-height: 1.5;
}
```

{{EmbedLiveSample("flex-nesting", "100", "290")}}

This complex layout has a few flex items that are also flex containers. The HTML for this is fairly straightforward. We've got a {{htmlelement("section")}} element containing three {{htmlelement("article")}}s. The third {{htmlelement("article")}} contains three {{htmlelement("div")}}s, and the first {{htmlelement("div")}} contains five {{htmlelement("button")}}s:

```plain
section - article
          article
          article - div - button
                    div   button
                    div   button
                          button
                          button
```

Let's look at the code we've used for the layout.

First of all, we set the children of the {{htmlelement("section")}} to be laid out as flexible boxes.

```css
section {
  display: flex;
}
```

Next, we set some flex values on the {{htmlelement("article")}}s themselves. Take special note of the second rule here: we're setting the third {{htmlelement("article")}} to have its children laid out like flex items too, but this time we're laying them out like a column.

```css
article {
  flex: 1 100px;
}

article:nth-of-type(3) {
  flex: 3 100px;
  display: flex;
  flex-flow: column;
}
```

Next, we select the first {{htmlelement("div")}}. We first use `flex: 1 100px;` to effectively give it a minimum height of `100px`, then we set its children (the {{htmlelement("button")}} elements) to also be laid out like flex items. Here we lay them out in a wrapping row and align them in the center of the available space as we did with the individual button example we saw earlier.

```css
article:nth-of-type(3) div:first-child {
  flex: 1 100px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
}
```

Finally, we set some sizing on the button. This time by giving it a flex value of `1 auto`. This has a very interesting effect, which you'll see if you try resizing your browser window width. The buttons will take up as much space as they can. As many will fit on a line as is comfortable; beyond that, they'll drop to a new line.

```css
button {
  flex: 1 auto;
  margin: 5px;
  font-size: 18px;
  line-height: 1.5;
}
```

## Test your skills!

You've reached the end of this article, but can you remember the most important information? You can find some further tests to verify that you've retained this information before you move on — see [Test your skills: Flexbox](/en-US/docs/Learn_web_development/Core/CSS_layout/Flexbox_skills).

## Summary

That concludes our tour of the basics of flexbox. We hope you had fun and will have a good play around with it as you proceed further with your learning. Next, we'll have a look at another important aspect of CSS layouts: [CSS grids](/en-US/docs/Learn_web_development/Core/CSS_layout/Grids).

## See also

- [Basic concepts of flexbox](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Aligning items in a flex container](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Ordering flex items](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)
- [Controlling ratios of flex items along the main axis](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
- [CSS flexible box layout](/en-US/docs/Web/CSS/CSS_flexible_box_layout) module
- [CSS-Tricks guide to flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) — an article explaining everything about flexbox in a visually appealing way
- [Flexbox Froggy](https://flexboxfroggy.com/) — an educational game to learn and better understand the basics of flexbox

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Positioning", "Learn_web_development/Core/CSS_layout/Grids", "Learn_web_development/Core/CSS_layout")}}

---
title: scroll-target-group
slug: Web/CSS/scroll-target-group
page-type: css-property
status:
  - experimental
browser-compat: css.properties.scroll-target-group
sidebar: cssref
---

{{SeeCompatTable}}

The **`scroll-target-group`** [CSS](/en-US/docs/Web/CSS) property specifies whether an element is a scroll marker group container.

## Syntax

```css
/* Keyword values */
scroll-target-group: none;
scroll-target-group: auto;

/* Global values */
scroll-target-group: inherit;
scroll-target-group: initial;
scroll-target-group: revert;
scroll-target-group: revert-layer;
scroll-target-group: unset;
```

The `scroll-target-group` property is specified as one of the following keyword values:

### Values

- `none`
  - : The element is not a scroll marker group container.
- `auto`
  - : The element is a scroll marker group container.

## Description

Setting `scroll-target-group: auto` on an element denotes it as a **scroll marker group container**. This groups together a set of navigation items that allow users to navigate between elements on a page (such as carousel items or article sections) and highlight which element is currently in view.

Any {{htmlelement("a")}} elements with fragment identifiers inside the container are automatically set as scroll markers. The anchor element whose scroll target is currently in view can be styled via the {{cssxref(":target-current")}} pseudo-class.

### Differences between `scroll-target-group` and `scroll-marker-group`

Scroll marker group containers created using `scroll-target-group` behave in a very similar way to those created using the {{cssxref("scroll-marker-group")}} property, with some differences:

- With `scroll-target-group`, you have to create your own markup to represent the scroll marker group container and scroll markers, whereas `scroll-marker-group` automatically creates a set of pseudo-elements to represent the container ({{cssxref("::scroll-marker-group")}}) and the markers (one or more instances of {{cssxref("::scroll-marker")}}). These automatically have the expected navigation associations with the {{glossary("scroll container")}} they are generated on. Using `scroll-marker-group` provides a quicker setup because you don't need to use your own markup. However, creating your own markup and setting it as a scroll marker group container via `scroll-target-group` provides more control and flexibility.
- Links denoted as scroll markers via `scroll-target-group` have no special navigation behavior, whereas markers generated via `scroll-marker-group` automatically have [`tablist`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)/[`tab`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) semantics applied to them, meaning they behave like a single item in the tab order, and users can move between scroll markers with the arrow keys. Again, `scroll-marker-group` provides useful default behavior, but you have the flexibility of providing alternative semantics and behavior for markers specified using `scroll-target-group`.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic `scroll-target-group` usage

This example shows a page with a table of contents linking to different sections.

#### HTML

Our markup has a series of {{htmlelement("section")}} elements containing content, and a table of contents created using an ordered list ({{htmlelement("ol")}}/{{htmlelement("li")}}) and {{htmlelement("a")}} elements.

```html
<nav id="toc">
  <ol>
    <li><a href="#intro">Introduction</a></li>
    <li><a href="#ch1">Chapter 1</a></li>
    <li><a href="#ch2">Chapter 2</a></li>
    <li><a href="#ch3">Chapter 3</a></li>
    <li><a href="#ch4">Chapter 4</a></li>
  </ol>
</nav>
<section id="intro" class="chapter">
  <h1>Prose of the century</h1>
  <p>
    I'm baby xOXO bespoke cupidatat PBR&B, affogato cronut 3 wolf moon ea
    narwhal asymmetrical. Af health goth shaman in slow-carb godard echo park.
    Tofu farm-to-table labore salvia tote bag food truck dolore gluten-free
    poutine kombucha fanny pack +1 franzen lyft fugiat. Chicharrones next level
    jianbing, enamel pin seitan cardigan bruh snackwave beard incididunt dolor
    lumbersexual before they sold out dreamcatcher single-origin coffee.
  </p>
</section>
<section id="ch1" class="chapter">
  <h2>Chapter 1</h2>

  <!-- ... -->
</section>
<section id="ch2" class="chapter">
  <h2>Chapter 2</h2>

  <!-- ... -->
</section>

<!-- ... -->
```

```html hidden live-sample___basic-usage
<nav id="toc">
  <ol>
    <li><a href="#intro">Introduction</a></li>
    <li><a href="#ch1">Chapter 1</a></li>
    <li><a href="#ch2">Chapter 2</a></li>
    <li><a href="#ch3">Chapter 3</a></li>
    <li><a href="#ch4">Chapter 4</a></li>
  </ol>
</nav>
<section id="intro" class="chapter">
  <h1>My story</h1>
  <p>
    I'm baby xOXO bespoke cupidatat PBR&B, affogato cronut 3 wolf moon ea
    narwhal asymmetrical. Af health goth shaman in slow-carb godard echo park.
    Tofu farm-to-table labore salvia tote bag food truck dolore gluten-free
    poutine kombucha fanny pack +1 franzen lyft fugiat. Chicharrones next level
    jianbing, enamel pin seitan cardigan bruh snackwave beard incididunt dolor
    lumbersexual before they sold out dreamcatcher single-origin coffee.
  </p>
</section>
<section id="ch1" class="chapter">
  <h2>Chapter 1</h2>
  <p>
    I'm baby xOXO bespoke cupidatat PBR&B, affogato cronut 3 wolf moon ea
    narwhal asymmetrical. Af health goth shaman in slow-carb godard echo park.
    Tofu farm-to-table labore salvia tote bag food truck dolore gluten-free
    poutine kombucha fanny pack +1 franzen lyft fugiat. Chicharrones next level
    jianbing, enamel pin seitan cardigan bruh snackwave beard incididunt dolor
    lumbersexual before they sold out dreamcatcher single-origin coffee.
  </p>
  <p>
    Kombucha laborum tempor iceland pour-over. Keytar in echo park gorpcore
    bespoke. Art party quinoa stumptown celiac, sed chillwave 3 wolf moon.
    Scenester fugiat pariatur, seitan selvage excepteur chambray yuccie artisan.
    Sunt schlitz ugh, et jawn sus four loko pop-up post-ironic photo booth
    occaecat deep v 8-bit tacos marfa. Tattooed ipsum tbh occaecat umami four
    loko adaptogen taiyaki truffaut hexagon neutral milk hotel.
  </p>
  <p>
    Austin mukbang scenester pabst, kale chips helvetica in selvage tote bag
    drinking vinegar craft beer pickled meh subway tile +1. Big mood kogi blog,
    vape hella seitan veniam.
  </p>
</section>
<section id="ch2" class="chapter">
  <h2>Chapter 2</h2>
  <p>
    Kombucha laborum tempor iceland pour-over. Keytar in echo park gorpcore
    bespoke. Art party quinoa stumptown celiac, sed chillwave 3 wolf moon.
    Scenester fugiat pariatur, seitan selvage excepteur chambray yuccie artisan.
    Sunt schlitz ugh, et jawn sus four loko pop-up post-ironic photo booth
    occaecat deep v 8-bit tacos marfa. Tattooed ipsum tbh occaecat umami four
    loko adaptogen taiyaki truffaut hexagon neutral milk hotel.
  </p>
  <p>
    Chillwave gastropub chartreuse deserunt butcher umami meditation ennui. Sus
    post-ironic affogato irony non succulents la croix labore tousled. Tumblr
    selvage sartorial taxidermy yes plz fashion axe deserunt. Big mood
    humblebrag hammock meditation, four dollar toast vice bruh minim tacos
    chartreuse drinking vinegar sunt yes plz YOLO cred. Synth chartreuse est,
    wayfarers pop-up ut gorpcore consequat ullamco meh lyft crucifix selvage
    occaecat.
  </p>
</section>
<section id="ch3" class="chapter">
  <h2>Chapter 3</h2>
  <p>
    Chillwave gastropub chartreuse deserunt butcher umami meditation ennui. Sus
    post-ironic affogato irony non succulents la croix labore tousled. Tumblr
    selvage sartorial taxidermy yes plz fashion axe deserunt. Big mood
    humblebrag hammock meditation, four dollar toast vice bruh minim tacos
    chartreuse drinking vinegar sunt yes plz YOLO cred. Synth chartreuse est,
    wayfarers pop-up ut gorpcore consequat ullamco meh lyft crucifix selvage
    occaecat.
  </p>
  <p>
    I'm baby xOXO bespoke cupidatat PBR&B, affogato cronut 3 wolf moon ea
    narwhal asymmetrical. Af health goth shaman in slow-carb godard echo park.
    Tofu farm-to-table labore salvia tote bag food truck dolore gluten-free
    poutine kombucha fanny pack +1 franzen lyft fugiat. Chicharrones next level
    jianbing, enamel pin seitan cardigan bruh snackwave beard incididunt dolor
    lumbersexual before they sold out dreamcatcher single-origin coffee.
  </p>
</section>
<section id="ch4" class="chapter">
  <h2>Chapter 4</h2>
  <p>
    Austin mukbang scenester pabst, kale chips helvetica in selvage tote bag
    drinking vinegar craft beer pickled meh subway tile +1. Big mood kogi blog,
    vape hella seitan veniam.
  </p>
  <p>
    I'm baby xOXO bespoke cupidatat PBR&B, affogato cronut 3 wolf moon ea
    narwhal asymmetrical. Af health goth shaman in slow-carb godard echo park.
    Tofu farm-to-table labore salvia tote bag food truck dolore gluten-free
    poutine kombucha fanny pack +1 franzen lyft fugiat. Chicharrones next level
    jianbing, enamel pin seitan cardigan bruh snackwave beard incididunt dolor
    lumbersexual before they sold out dreamcatcher single-origin coffee.
  </p>
</section>
```

#### CSS

We've hidden most of the styling for brevity. Most pertinent to this example, we've set `scroll-target-group: auto` on the `<ol>` to turn it into a scroll marker group container and trigger the browser's algorithm for calculating which `<a>` element is the `:target-current` at any given time (that is, which link's target is currently in view). We then style the `:target-current` pseudo-class with a `red` {{cssxref("color")}} so that it stands out clearly.

```css hidden live-sample___basic-usage
body {
  font: 1.2em / 1.5 system-ui;
  width: 50%;
  max-width: 700px;
  margin: 0 auto;
}

nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
}

section {
  padding-top: 60px;
}

a {
  color: black;
  text-decoration: none;
}

a:hover,
a:focus {
  text-decoration: underline;
}

ol {
  display: flex;
  width: 100%;
  justify-content: space-around;
  list-style-type: none;
  padding: 20px 0;
  margin: 0;
  background: white;
}
```

```css live-sample___basic-usage
ol {
  scroll-target-group: auto;
}

:target-current {
  color: red;
}
```

#### Result

Try navigating by activating the links and by scrolling. You'll see that in each case, the red highlight moves between the links to match the section currently being shown.

{{EmbedLiveSample("basic-usage", "100%", 500)}}

### CSS carousel with `scroll-target-group` scroll markers

This example shows how to create [CSS carousel](/en-US/docs/Web/CSS/CSS_overflow/CSS_carousels) scroll markers using `scroll-target-group`. The code for this example is similar to our [Carousel with single pages](/en-US/docs/Web/CSS/CSS_overflow/CSS_carousels#carousel_with_single_pages) example; we'll just explain the differences below.

#### HTML

The markup has IDs set on the list items that define each page, and an ordered list added that we'll turn into a scroll marker group container using CSS.

```html live-sample___carousel
<h1>CSS carousel single item per page</h1>
<ul>
  <li id="page1">
    <h2>Page 1</h2>
  </li>
  <li id="page2">
    <h2>Page 2</h2>
  </li>
  <li id="page3">
    <h2>Page 3</h2>
  </li>
  <li id="page4">
    <h2>Page 4</h2>
  </li>
</ul>
<ol>
  <li><a href="#page1">1</a></li>
  <li><a href="#page2">2</a></li>
  <li><a href="#page3">3</a></li>
  <li><a href="#page4">4</a></li>
</ol>
```

#### CSS

We create the scroll marker group container and scroll markers by setting `scroll-target-group` on the `<ol>` element. The rest of the code for styling these is very similar, except that we are targeting elements of our own choosing (`<ol>` and `<a>`) rather than the {{cssxref("::scroll-marker-group")}} and {{cssxref("::scroll-marker")}} pseudo-elements.

We complete the code by setting some styles on the `:target-current`, `a:hover`, and `a:focus` states to indicate which page is currently being shown and which links are being hovered/focused.

```css hidden live-sample___carousel
/* General styles */

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

h1 {
  text-align: center;
}

button {
  background-color: white;
}

/* General styling of list as scrolling carousel */

ul {
  width: 100%;
  height: 400px;
  padding: 20px;
  gap: 4%;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 100%;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
}

ul li {
  list-style-type: none;
  background-color: #eeeeee;
  border: 1px solid #dddddd;
  padding: 20px;

  scroll-snap-align: center;
}

/* CSS scroll buttons */

/* Style the scroll buttons */

ul::scroll-button(*) {
  border: 0;
  font-size: 2rem;
  background: none;
  color: rgb(0 0 0 / 0.7);
  cursor: pointer;
}

ul::scroll-button(*):hover,
ul::scroll-button(*):focus {
  color: black;
}

ul::scroll-button(*):active {
  translate: 1px 1px;
}

ul::scroll-button(*):disabled {
  color: rgb(0 0 0 / 0.2);
}

ul::scroll-button(left) {
  content: "◄";
}

ul::scroll-button(right) {
  content: "►";
}

/* Position the scroll buttons */

ul {
  anchor-name: --my-carousel;
}

ul::scroll-button(*) {
  position: absolute;
  position-anchor: --my-carousel;
}

ul::scroll-button(left) {
  right: calc(anchor(left) - 70px);
  top: calc(anchor(bottom) - 80px);
}

ul::scroll-button(right) {
  left: calc(anchor(right) - 70px);
  top: calc(anchor(bottom) - 80px);
}
```

```css live-sample___carousel
ol {
  position: absolute;
  position-anchor: --my-carousel;
  top: calc(anchor(bottom) - 90px);
  justify-self: anchor-center;
  display: flex;
  justify-content: center;
  gap: 20px;

  list-style-type: none;
  padding: 0;
  scroll-target-group: auto;
}

ol a {
  width: 28px;
  height: 28px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  padding-top: 4px;
  color: black;
  background-color: transparent;
  border: 2px solid black;
  border-radius: 50%;
}

ol a:hover,
ol a:focus,
:target-current {
  background-color: black;
  color: white;
}
```

#### Result

Try navigating in each of these three ways: by activating the scroll marker links, by horizontal scrolling, or by pressing the scroll buttons on either side. You'll see that in each case, the highlight moves between the links to match the section currently being shown.

{{EmbedLiveSample("carousel", "100%", 500)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("scroll-marker-group")}}
- {{cssxref("::scroll-marker-group")}} and {{cssxref("::scroll-marker")}} pseudo-elements
- {{cssxref(":target-current")}} pseudo-class
- [Creating CSS carousels](/en-US/docs/Web/CSS/CSS_overflow/CSS_carousels)
- [CSS overflow](/en-US/docs/Web/CSS/CSS_overflow) module

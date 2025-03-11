---
title: Using container scroll-state queries
slug: Web/CSS/CSS_conditional_rules/Container_scroll-state_queries
page-type: guide
---

{{CSSRef}}

**Container scroll-state queries** are a type of [container query](/en-US/docs/Web/CSS/@container). Rather than selectively applying styles to descendant elements based on the container's size, scroll-state queries allow you to selectively apply styles to descendent elements based on the container's scroll state. This can include whether the container is partially scrolled, snapped to a [scroll snap container](/en-US/docs/Glossary/Scroll_snap#scroll_snap_container) ancestor, or positioned via [`position: sticky`](/en-US/docs/Web/CSS/position) and stuck to a boundary of a {{glossary("scroll container")}} ancestor.

This article explains how to use container scroll-state queries, walking through an example of each type. It assumes that you know the basics of container queries. If you are new to container queries, read [CSS container queries](/en-US/docs/Web/CSS/CSS_containment/Container_queries) before continuing.

## Types of container scroll-state query

There are three `@container` descriptors you can use in a `scroll-state()` query:

- `scrollable`: Queries whether a container can be scrolled in the given direction via user-initiated scrolling (for example by dragging the scrollbar or using a trackpad gesture). In other words, is there any overflowing content in the given direction that can be scrolled to? This is useful for applying styling related to the scroll position of a scroll container. For example, you could display a hint that encourages people to scroll down and see more content when the scrollbar is up at the top, and hide it when the user has actually started scrolling.
- `snapped`: Queries whether a container is, or will be, snapped to a [scroll snap](/en-US/docs/Web/CSS/CSS_scroll_snap) container ancestor along a given axis. This is useful for applying styles when an element is snapped to a scroll snap container. For example, you might want to highlight a snapped element in some way, or reveal some of its content that was previously hidden.
- `stuck`: Queries whether a container with a {{cssxref("position")}} value of `sticky` is stuck to an edge of its scroll container ancestor. This is useful for styling `position: sticky` elements differently when stuck — for example, you could give them a different color scheme or layout.

## Syntax overview

To establish a container element as a scroll-state query container, set the {{cssxref("container-type")}} property on it with a value of `scroll-state`. You can optionally also give it a {{cssxref("container-name")}}, so that you can target it with a specific container query:

```css
.container {
  container-type: scroll-state;
  container-name: my-container;
}
```

You can then create a {{cssxref("@container")}} block that specifies the query, the rules that are applied to children of the container if the test passes, and optionally, the `container-name` of the container(s) you want to query. If you don't specify a `container-name`, the container query will be applied to all scroll-state query containers on the page.

Here, we query only containers named `my-container` to determine whether the container can be scrolled towards its top edge:

```css
@container my-container scroll-state(scrollable: top) {
  /* CSS rules go here */
}
```

> [!NOTE]
> To separate scroll-state queries from other container queries, the scroll-state descriptors and value are placed inside parentheses, preceded by `scroll-state` (`scroll-state( ... )`). These constructs look like functions, but they're not.

## Using `scrollable` queries

Scroll-state [`scrollable`](/en-US/docs/Web/CSS/@container#scrollable) queries, written as `scroll-state(scrollable: value)`, test whether a container's scrolling ancestor can be scrolled in the given direction via user-initiated scrolling. If not, the query returns false.

The `value` indicates the direction you are testing for scrolling availability in, for example:

- `top`: Tests whether the container can be scrolled towards its top edge.
- `inline-end`: Tests whether the container can be scrolled towards its inline-end edge.
- `y`: Tests whether the container can be scrolled in either or both directions along its y axis.

If the test passes, the rules inside the `@container` block are applied to descendants of the matching scroll container.

Let's look at an example in which we have a scrolling container full of content, and a handy little link to scroll back to the top if wished. We will use a `scrollable` query to only show the link when the user has started to scroll down through the content.

### HTML

In the HTML we have an {{htmlelement("article")}} element containing enough content to cause the document to scroll, preceded by a [back-to-top link](/en-US/docs/Web/HTML/Element/a#result_8):

```html
<a class="back-to-top" href="#" aria-label="Top of page">↑</a>
<article>
  <h1>Reader with container query-controlled "back-to-top" link</h1>
  <section>
    <header>
      <h2>This first section is interesting</h2>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </header>

    ...
  </section>

  ...
</article>
```

We have hidden most of the HTML for brevity.

```html hidden live-sample___scrollable
<a class="back-to-top" href="#" aria-label="Scroll back to top">↑</a>
<article>
  <h1>Reader with container query-controlled "back-to-top" link</h1>
  <section>
    <header>
      <h2>This first section is interesting</h2>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </header>

    <p>
      Nunc vides, quid faciat. Quonam, inquit, modo? Nam quid possumus facere
      melius? Duo Reges: constructio interrete. Cur iustitia laudatur? Videmus
      igitur ut conquiescere ne infantes quidem possint.
    </p>

    <p>
      <strong>Nihil enim hoc differt.</strong> Neutrum vero, inquit ille.
      <em>Huius ego nunc auctoritatem sequens idem faciam.</em> Prioris generis
      est docilitas, memoria; Quae sequuntur igitur?
    </p>

    <img src="#" alt="Placeholder" />

    <p>
      Ne discipulum abducam, times. Quis enim redargueret?
      <a href="#">Rationis enim perfectio est virtus;</a>
      Erat enim Polemonis.
    </p>

    <p>
      Qua tu etiam inprudens utebare non numquam. Sed erat aequius Triarium
      aliquid de dissensione nostra iudicare.
      <strong
        >Qui-vere falsone, quaerere mittimus-dicitur oculis se privasse;</strong
      >
      Omnes enim iucundum motum, quo sensus hilaretur.
    </p>
  </section>
  <section>
    <header>
      <h2>This one, not so much</h2>

      <p>Confecta res esset.</p>
    </header>

    <p>
      <strong>Nam quid possumus facere melius?</strong> Tu quidem reddes; Omnia
      peccata paria dicitis.
    </p>

    <p>
      <em>Scrupulum, inquam, abeunti;</em> Quae cum dixisset, finem ille. Hoc
      sic expositum dissimile est superiori.
    </p>

    <img src="#" alt="Placeholder" />

    <p>
      Quid, de quo nulla dissensio est?
      <a href="#">Nunc agendum est subtilius.</a>
      Praeteritis, inquit, gaudeo. Iam in altera philosophiae parte.
    </p>

    <p>
      Itaque ad tempus ad Pisonem omnes. Quantum Aristoxeni ingenium consumptum
      videmus in musicis? Quis non odit sordidos, vanos, leves, futtiles? Atqui
      reperies, inquit, in hoc quidem pertinacem; Duarum enim vitarum nobis
      erunt instituta capienda.
    </p>
  </section>
  <section>
    <header>
      <h2>Hopefully this section provides some clarity?</h2>

      <p>Quid ad utilitatem tantae pecuniae?</p>
    </header>

    <p>
      <strong>Memini me adesse P.</strong> Omnes enim iucundum motum, quo sensus
      hilaretur. Optime, inquam.
    </p>

    <img src="#" alt="Placeholder" />

    <p>
      <a href="#">Sint modo partes vitae beatae.</a>
      Sic enim censent, oportunitatis esse beate vivere.
      <strong>Sed hoc sane concedamus.</strong> Aliter homines, aliter
      philosophos loqui putas oportere? Non laboro, inquit, de nomine. Bork
    </p>

    <p>
      Quo tandem modo? Ut pulsi recurrant? Quid ad utilitatem tantae pecuniae?
      <strong>Sed in rebus apertissimis nimium longi sumus.</strong>
      Rationis enim perfectio est virtus; Beatus autem esse in maximarum rerum
      timore nemo potest.
    </p>

    <p>
      Nulla erit controversia. Quae in controversiam veniunt, de iis, si placet,
      disseramus. Sed potestne rerum maior esse dissensio? Tria genera bonorum;
      Memini vero, inquam; Quam ob rem tandem, inquit, non satisfacit?
    </p>
  </section>
  <section>
    <header>
      <h2>A summary of sorts</h2>

      <p>Quae est igitur causa istarum angustiarum?</p>
    </header>

    <img src="#" alt="Placeholder" />

    <p>
      <strong>An eiusdem modi?</strong>
      <strong>Et ille ridens: Video, inquit, quid agas;</strong> Conferam tecum,
      quam cuique verso rem subicias; Putabam equidem satis, inquit, me dixisse.
      Sed haec quidem liberius ab eo dicuntur et saepius.
    </p>

    <p>
      Non laboro, inquit, de nomine. <em>Falli igitur possumus.</em>
      <a href="#">Praeteritis, inquit, gaudeo.</a>
      Nescio quo modo praetervolavit oratio. Huius, Lyco, oratione locuples,
      rebus ipsis ielunior. Quod ea non occurrentia fingunt, vincunt Aristonem;
    </p>

    <p>
      Cur deinde Metrodori liberos commendas? Quo modo? Ergo hoc quidem apparet,
      nos ad agendum esse natos. Scrupulum, inquam, abeunti;
    </p>
  </section>
</article>
```

### CSS

The `.back-to-top` link is given a {{cssxref("position")}} value of `fixed`, placed at the bottom-right corner of the viewport, and moved off the viewport using a {{cssxref("translate")}} value of `80px 0`. A {{cssxref("transition")}} value will animate the `translate` and {{cssxref("background-color")}} when either value changes.

```css hidden live-sample___scrollable
/* General styling */

* {
  box-sizing: border-box;
}

html {
  font-family: Arial, Helvetica, sans-serif;
  height: 100%;
}

body {
  height: inherit;
  width: 100%;
  max-width: 540px;
  padding: 20px;
  margin: 0 auto;
}

p {
  line-height: 1.5;
}

img {
  display: block;
  width: 90%;
  margin: 30px auto;
  padding: 20px;
  border: 2px solid gray;
  aspect-ratio: 3/2;
}
```

```css live-sample___scrollable
.back-to-top {
  width: 64px;
  height: 64px;
  color: white;
  text-align: center;
  position: fixed;
  bottom: 10px;
  right: 10px;
  translate: 80px 0;
  transition:
    0.4s translate,
    0.2s background-color;
}
```

```css hidden live-sample___scrollable
.back-to-top {
  text-decoration: none;
  border-radius: 50%;
  border: 1px solid #0007;
  background-color: #0007;
  color: white;
  font-size: 3rem;
  text-shadow: 0 0 2px black;
  padding-bottom: 10px;
}

.back-to-top:hover,
.back-to-top:focus {
  background: #0009;
}
```

The {{glossary("scroll container")}} in this example is the `<html>` element itself, denoted as a scroll-state query container with a {{cssxref("container-type")}} value of `scroll-state`. The {{cssxref("container-name")}} isn't strictly necessary but is useful in cases where the code is added to a codebase with multiple scroll-state query containers targeted with different queries.

```css live-sample___scrollable
html {
  container-type: scroll-state;
  container-name: scroller;
}
```

Next, we define a {{cssxref("@container")}} block that sets the container name targeted by this query, and the query itself — `scrollable: top`. This query applies the rules contained inside the block only if the `<html>` element can be scrolled toward its top edge — in other words, if the container has previously been scrolled downwards. If that is the case, `translate: 0 0` is applied to the `.back-to-top` link, which transitions it back on-screen.

```css live-sample___scrollable
@container scroller scroll-state(scrollable: top) {
  .back-to-top {
    translate: 0 0;
  }
}
```

We've hidden the rest of the example CSS for brevity.

### Result

{{EmbedLiveSample("scrollable", "100%", "400px")}}

Try scrolling the document down, and note how the "back-to-top" link appears as a result, animating smoothly from the right side of the viewport due to the `transition`. If you scroll back to the top by activating the link or manually scrolling, the "back-to-top" link transitions off-screen.

## Using `snapped` queries

Relevant only when [scroll snapping](/en-US/docs/Web/CSS/CSS_scroll_snap) is implemented, scroll-state [`snapped`](/en-US/docs/Web/CSS/@container#snapped) queries (written as `scroll-state(snapped: value)`) test whether a container is, or will be, snapped to a [scroll snap container](/en-US/docs/Glossary/Scroll_snap#scroll_snap_container) ancestor along the given axis. If not, the query returns false.

The `value` in this case indicates the direction you are testing the element's ability to snap in, for example:

- `x`: Tests whether the container is snapping horizontally to its scroll-snap container ancestor.
- `inline`: Tests whether the container is snapping to its scroll-snap container ancestor in the inline direction.
- `y`: Tests whether the container is snapping to its scroll-snap container ancestor in both directions.

To evaluate a container with a non-`none` `snapped` scroll-state query, it must be a container with a scroll-snap container ancestor, that is, the ancestor has a {{cssxref("scroll-snap-type")}} value other than `none`. The container query `scroll-state(snapped: none)` matches scroll-state containers that do not have a scroll container ancestor.

Evaluation will occur when the [`scrollsnapchanging`](/en-US/docs/Web/API/Element/scrollsnapchanging_event) event fires on the scroll snap container.

If the test passes, the rules inside the `@container` block are applied to descendants of the matching scroll snap target container.

In this example, we'll look at a scroll snap container with children that snap to it vertically and use a `snapped` query to style the children only when they are snapped or about to be snapped.

### HTML

The HTML consists of a {{htmlelement("main")}} element that will be a scroll snap container. Inside are several {{htmlelement("section")}} elements that will be snap targets. Each `<section>` contains a wrapper {{htmlelement("div")}} and an `<h2>` [heading](/en-US/docs/Web/HTML/Element/Heading_Elements). The wrappers are included to create a style target as container queries enable styling a container's descendants, not the container itself.

```html
<main>
  <section>
    <div class="wrapper">
      <h2>Section 1</h2>
    </div>
  </section>

  ...
</main>
```

We have hidden most of the HTML for brevity.

```html hidden live-sample___snapped
<main>
  <section>
    <div class="wrapper">
      <h2>Section 1</h2>
    </div>
  </section>
  <section>
    <div class="wrapper">
      <h2>Section 2</h2>
    </div>
  </section>
  <section>
    <div class="wrapper">
      <h2>Section 3</h2>
    </div>
  </section>
  <section>
    <div class="wrapper">
      <h2>Section 4</h2>
    </div>
  </section>
  <section>
    <div class="wrapper">
      <h2>Section 5</h2>
    </div>
  </section>
  <section>
    <div class="wrapper">
      <h2>Section 6</h2>
    </div>
  </section>
  <section>
    <div class="wrapper">
      <h2>Section 7</h2>
    </div>
  </section>
  <section>
    <div class="wrapper">
      <h2>Section 8</h2>
    </div>
  </section>
  <section>
    <div class="wrapper">
      <h2>Section 9</h2>
    </div>
  </section>
  <section>
    <div class="wrapper">
      <h2>Section 10</h2>
    </div>
  </section>
  <section>
    <div class="wrapper">
      <h2>Section 11</h2>
    </div>
  </section>
  <section>
    <div class="wrapper">
      <h2>Section 12</h2>
    </div>
  </section>
  <section>
    <div class="wrapper">
      <h2>Section 13</h2>
    </div>
  </section>
  <section>
    <div class="wrapper">
      <h2>Section 14</h2>
    </div>
  </section>
  <section>
    <div class="wrapper">
      <h2>Section 15</h2>
    </div>
  </section>
  <section>
    <div class="wrapper">
      <h2>Section 16</h2>
    </div>
  </section>
</main>
```

### CSS

```css hidden live-sample___snapped
* {
  box-sizing: border-box;
}

html {
  height: 100%;
}

/* body and main sizing */

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
}

main {
  gap: 50px;
}
```

We set an {{cssxref("overflow")}} value of `scroll` and a fixed {{cssxref("height")}} on the `<main>` element to turn it into a vertical scroll container. We also set a {{cssxref("scroll-snap-type")}} value of `y mandatory` to turn `<main>` into a scroll snap container that snap targets will snap to along the y axis; `mandatory` means that a snap target will _always_ be snapped to.

```css live-sample___snapped
main {
  overflow: scroll;
  scroll-snap-type: y mandatory;
  height: 450px;
  width: 250px;
  border: 3px solid black;
}
```

The `<section>` elements are designated as snap targets by setting a non-`none` {{cssxref("scroll-snap-align")}} value. The `center` value means that they will snap to the container at their center points.

```css live-sample___snapped
section {
  font-family: Arial, Helvetica, sans-serif;
  width: 150px;
  height: 150px;
  margin: 50px auto;

  scroll-snap-align: center;
}
```

```css hidden live-sample___snapped
.wrapper {
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background: #eee;
  box-shadow:
    inset 1px 1px 4px rgb(255 255 255 / 0.5),
    inset -1px -1px 4px rgb(0 0 0 / 0.5);

  display: flex;
  align-items: center;
  justify-content: center;

  transition:
    0.6s background,
    0.6s color;
}

h2 {
  font-size: 1rem;
  letter-spacing: 1px;
}
```

We want to enable the `<section>` elements to be queried. Specifically, we want to test whether the `<section>` elements are snapping to their container, so we denote them as scroll-state query containers by setting a {{cssxref("container-type")}} value of `scroll-state` on them. We also give them a {{cssxref("container-name")}}, which isn't strictly necessary, but will be useful if our code gets more complex later and we have multiple scroll-state query containers that we want to target with different queries.

```css live-sample___snapped
section {
  container-type: scroll-state;
  container-name: snap-container;
}
```

Next, we define a {{cssxref("@container")}} block that sets the container name we are targetting with this query, and the query itself — `snapped: y`. This query applies the rules contained inside the block only if a `<section>` element is being snapped vertically to its container. If that is the case, we apply a new {{cssxref("background")}} and {{cssxref("color")}} to the `<section>` element's child `.wrapper` `<div>` to highlight it.

```css live-sample___snapped
@container snap-container scroll-state(snapped: y) {
  .wrapper {
    background: purple;
    color: white;
  }
}
```

### Result

The rendered result is shown below. Try scrolling the container up and down, and note how the `<section>` style changes when it becomes snapped to its container.

{{EmbedLiveSample("snapped", "100%", "500px")}}

## Using `stuck` queries

Scroll-state [`stuck`](/en-US/docs/Web/CSS/@container#scrollable) queries, written as `scroll-state(stuck: value)`, test whether a container with a {{cssxref("position")}} value of `sticky` is stuck to an edge of its scroll container ancestor. If not, the query returns false.

The `value` in this case indicates the scroll container edge you are testing, for example:

- `top`: Tests whether the container is stuck to the top edge of its scroll container ancestor.
- `block-end`: Tests whether the container is stuck to the block-end edge of its scroll container ancestor.
- `none`: Tests whether the container is not stuck to any edges of its scroll container ancestor. Note that `none` queries will match even if the container does not have `position: sticky` set on it.

If the query returns true, the rules inside the `@container` block are applied to descendants of the matching `position: sticky` container.

Let's look at an example where we have a scrolling container with overflowing content, in which the headings are set to `position: sticky` and stick to the top edge of the container when they scroll to that position. We will use a `stuck` scroll-state query to style the headings differently when they are stuck to the top edge.

### HTML

In the HTML, we have an {{htmlelement("article")}} element containing enough content to cause the document to scroll. It is structured using several {{htmlelement("section")}} elements, each containing a {{htmlelement("header")}} with nested content:

```html
<article>
  <h1>Sticky reader with scroll-state container query</h1>
  <section>
    <header>
      <h2>This first section is interesting</h2>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </header>

    ...
  </section>

  <section>
    <header>
      <h2>This one, not so much</h2>

      <p>Confecta res esset.</p>
    </header>

    ...
  </section>

  ...
</article>
```

We have hidden most of the HTML for brevity.

```html hidden live-sample___stuck
<article>
  <h1>Sticky reader with scroll-state container query</h1>
  <section>
    <header>
      <h2>This first section is interesting</h2>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </header>

    <p>
      Nunc vides, quid faciat. Quonam, inquit, modo? Nam quid possumus facere
      melius? Duo Reges: constructio interrete. Cur iustitia laudatur? Videmus
      igitur ut conquiescere ne infantes quidem possint.
    </p>

    <p>
      <strong>Nihil enim hoc differt.</strong> Neutrum vero, inquit ille.
      <em>Huius ego nunc auctoritatem sequens idem faciam.</em> Prioris generis
      est docilitas, memoria; Quae sequuntur igitur?
    </p>

    <img src="#" alt="Placeholder" />

    <p>
      Ne discipulum abducam, times. Quis enim redargueret?
      <a href="#">Rationis enim perfectio est virtus;</a>
      Erat enim Polemonis.
    </p>

    <p>
      Qua tu etiam inprudens utebare non numquam. Sed erat aequius Triarium
      aliquid de dissensione nostra iudicare.
      <strong
        >Qui-vere falsone, quaerere mittimus-dicitur oculis se privasse;</strong
      >
      Omnes enim iucundum motum, quo sensus hilaretur.
    </p>
  </section>
  <section>
    <header>
      <h2>This one, not so much</h2>

      <p>Confecta res esset.</p>
    </header>

    <p>
      <strong>Nam quid possumus facere melius?</strong> Tu quidem reddes; Omnia
      peccata paria dicitis.
    </p>

    <p>
      <em>Scrupulum, inquam, abeunti;</em> Quae cum dixisset, finem ille. Hoc
      sic expositum dissimile est superiori.
    </p>

    <img src="#" alt="Placeholder" />

    <p>
      Quid, de quo nulla dissensio est?
      <a href="#">Nunc agendum est subtilius.</a>
      Praeteritis, inquit, gaudeo. Iam in altera philosophiae parte.
    </p>

    <p>
      Itaque ad tempus ad Pisonem omnes. Quantum Aristoxeni ingenium consumptum
      videmus in musicis? Quis non odit sordidos, vanos, leves, futtiles? Atqui
      reperies, inquit, in hoc quidem pertinacem; Duarum enim vitarum nobis
      erunt instituta capienda.
    </p>
  </section>
  <section>
    <header>
      <h2>Hopefully this section provides some clarity?</h2>

      <p>Quid ad utilitatem tantae pecuniae?</p>
    </header>

    <p>
      <strong>Memini me adesse P.</strong> Omnes enim iucundum motum, quo sensus
      hilaretur. Optime, inquam.
    </p>

    <img src="#" alt="Placeholder" />

    <p>
      <a href="#">Sint modo partes vitae beatae.</a>
      Sic enim censent, oportunitatis esse beate vivere.
      <strong>Sed hoc sane concedamus.</strong> Aliter homines, aliter
      philosophos loqui putas oportere? Non laboro, inquit, de nomine. Bork
    </p>

    <p>
      Quo tandem modo? Ut pulsi recurrant? Quid ad utilitatem tantae pecuniae?
      <strong>Sed in rebus apertissimis nimium longi sumus.</strong>
      Rationis enim perfectio est virtus; Beatus autem esse in maximarum rerum
      timore nemo potest.
    </p>

    <p>
      Nulla erit controversia. Quae in controversiam veniunt, de iis, si placet,
      disseramus. Sed potestne rerum maior esse dissensio? Tria genera bonorum;
      Memini vero, inquam; Quam ob rem tandem, inquit, non satisfacit?
    </p>
  </section>
  <section>
    <header>
      <h2>A summary of sorts</h2>

      <p>Quae est igitur causa istarum angustiarum?</p>
    </header>

    <img src="#" alt="Placeholder" />

    <p>
      <strong>An eiusdem modi?</strong>
      <strong>Et ille ridens: Video, inquit, quid agas;</strong> Conferam tecum,
      quam cuique verso rem subicias; Putabam equidem satis, inquit, me dixisse.
      Sed haec quidem liberius ab eo dicuntur et saepius.
    </p>

    <p>
      Non laboro, inquit, de nomine. <em>Falli igitur possumus.</em>
      <a href="#">Praeteritis, inquit, gaudeo.</a>
      Nescio quo modo praetervolavit oratio. Huius, Lyco, oratione locuples,
      rebus ipsis ielunior. Quod ea non occurrentia fingunt, vincunt Aristonem;
    </p>

    <p>
      Cur deinde Metrodori liberos commendas? Quo modo? Ergo hoc quidem apparet,
      nos ad agendum esse natos. Scrupulum, inquam, abeunti;
    </p>
  </section>
</article>
```

### CSS

Each `<header>` has a {{cssxref("position")}} value of `sticky` and a {{cssxref("top")}} value of `0`, which sticks them to the top edge of the scroll container. To test whether the `<header>` elements are stuck to the container top edge, they are denoted as scroll-state query containers with a {{cssxref("container-type")}} value of `scroll-state`. The {{cssxref("container-name")}} isn't strictly necessary but will be useful if this code gets added to a code base with multiple scroll-state query containers targeted with different queries.

```css hidden live-sample___stuck
/* General styling */

* {
  box-sizing: border-box;
}

html {
  font-family: Arial, Helvetica, sans-serif;
  height: 100%;
}

body {
  height: inherit;
  width: 100%;
  max-width: 540px;
  padding: 20px;
  margin: 0 auto;
}

p {
  line-height: 1.5;
}

img {
  display: block;
  width: 90%;
  margin: 30px auto;
  padding: 20px;
  border: 2px solid gray;
  aspect-ratio: 3/2;
}
```

```css live-sample___stuck
header {
  background: white;
  position: sticky;
  top: 0;
  container-type: scroll-state;
  container-name: sticky-heading;
}
```

We also give the `<h2>` and `<p>` elements inside the `<header>` elements some basic styling, and a {{cssxref("transition")}} value so they will smoothly animate when their {{cssxref("background")}} values change.

```css live-sample___stuck
h2,
header p {
  margin: 0;
  transition: 0.4s background;
}

h2 {
  padding: 20px 5px;
  margin-bottom: 10px;
}

header p {
  font-style: italic;
  padding: 10px 5px;
}
```

Next, we define a {{cssxref("@container")}} block that sets the container name we are targetting with this query, and the query itself — `stuck: top`. This query applies the rules contained inside the block only if a `<header>` element is stuck to the top of its scroll container. When that is the case, a different `background` and a {{cssxref("box-shadow")}} are applied to the contained `<h2>` and `<p>`.

```css live-sample___stuck
@container sticky-heading scroll-state(stuck: top) {
  h2,
  p {
    background: #ccc;
    box-shadow: 0 5px 2px #0007;
  }
}
```

We have hidden the rest of the CSS for brevity.

### Result

Try scrolling the document down and up, and note how the `<h2>` and `<p>` elements transition to a new color scheme when they become stuck to the top of their container's top edge.

{{EmbedLiveSample("stuck", "100%", "400px")}}

## See also

- {{Cssxref("container-name")}}
- {{Cssxref("container-type")}}
- {{Cssxref("position")}}
- {{Cssxref("@container")}}
- [CSS container queries](/en-US/docs/Web/CSS/CSS_containment/Container_queries)
- [Using container size and style queries](/en-US/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
- [CSS conditional rules](/en-US/docs/Web/CSS/CSS_conditional_rules) module
- [CSS positioning](/en-US/docs/Web/CSS/CSS_positioned_layout) module

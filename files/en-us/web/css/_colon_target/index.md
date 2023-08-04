---
title: ":target"
slug: Web/CSS/:target
page-type: css-pseudo-class
browser-compat: css.selectors.target
---

{{CSSRef}}

The **`:target`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) represents a unique element (the _target element_) with an [`id`](/en-US/docs/Web/HTML/Global_attributes#id) matching the URL's fragment.

```css
/* Selects an element with an ID matching the current URL's fragment */
:target {
  border: 2px solid black;
}
```

For example, the following URL has a fragment (denoted by the _#_ sign) that points to an element called `section2`:

```url
http://www.example.com/index.html#section2
```

The following element would be selected by a `:target` selector when the current URL is equal to the above:

```html
<section id="section2">Example</section>
```

## Syntax

```css
:target {
  /* ... */
}
```

> **Note:** Due to [a possible bug in the CSS specification](https://discourse.wicg.io/t/target-css-does-not-work-because-shadowroot-does-not-set-a-target-element/2070), `:target` doesn't work within a [web component](/en-US/docs/Web/API/Web_components) because the [shadow root](/en-US/docs/Web/API/ShadowRoot) doesn't pass the target element down to the shadow tree.

## Examples

### A table of contents

The `:target` pseudo-class can be used to highlight the portion of a page that has been linked to from a table of contents.

#### HTML

```html
<h3>Table of Contents</h3>
<ol>
  <li><a href="#p1">Jump to the first paragraph!</a></li>
  <li><a href="#p2">Jump to the second paragraph!</a></li>
  <li>
    <a href="#nowhere">
      This link goes nowhere, because the target doesn't exist.
    </a>
  </li>
</ol>

<h3>My Fun Article</h3>
<p id="p1">
  You can target <i>this paragraph</i> using a URL fragment. Click on the link
  above to try out!
</p>
<p id="p2">
  This is <i>another paragraph</i>, also accessible from the links above. Isn't
  that delightful?
</p>
```

#### CSS

```css
p:target {
  background-color: gold;
}

/* Add a pseudo-element inside the target element */
p:target::before {
  font: 70% sans-serif;
  content: "►";
  color: limegreen;
  margin-right: 0.25em;
}

/* Style italic elements within the target element */
p:target i {
  color: red;
}
```

#### Result

{{EmbedLiveSample('A_table_of_contents', 500, 300)}}

### Pure-CSS lightbox

You can use the `:target` pseudo-class to create a lightbox without using any JavaScript. This technique relies on the ability of anchor links to point to elements that are initially hidden on the page. Once targeted, the CSS changes their `display` so that they are shown.

> **Note:** A more complete pure-CSS lightbox based on the `:target` pseudo-class is [available on GitHub](https://github.com/madmurphy/takefive.css/) ([demo](https://madmurphy.github.io/takefive.css/)).

#### HTML

```html
<ul>
  <li><a href="#example1">Open example #1</a></li>
  <li><a href="#example2">Open example #2</a></li>
</ul>

<div class="lightbox" id="example1">
  <figure>
    <a href="#" class="close"></a>
    <figcaption>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis enim,
      placerat id eleifend eu, semper vel sem.
    </figcaption>
  </figure>
</div>

<div class="lightbox" id="example2">
  <figure>
    <a href="#" class="close"></a>
    <figcaption>
      Cras risus odio, pharetra nec ultricies et, mollis ac augue. Nunc et diam
      quis sapien dignissim auctor. Quisque quis neque arcu, nec gravida magna.
    </figcaption>
  </figure>
</div>
```

#### CSS

```css
/* Unopened lightbox */
.lightbox {
  display: none;
}

/* Opened lightbox */
.lightbox:target {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Lightbox content */
.lightbox figcaption {
  width: 25rem;
  position: relative;
  padding: 1.5em;
  background-color: lightpink;
}

/* Close button */
.lightbox .close {
  position: relative;
  display: block;
}

.lightbox .close::after {
  right: -1rem;
  top: -1rem;
  width: 2rem;
  height: 2rem;
  position: absolute;
  display: flex;
  z-index: 1;
  align-items: center;
  justify-content: center;
  background-color: black;
  border-radius: 50%;
  color: white;
  content: "×";
  cursor: pointer;
}

/* Lightbox overlay */
.lightbox .close::before {
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.7);
  content: "";
  cursor: default;
}
```

#### Result

{{EmbedLiveSample('Pure-CSS_lightbox', 500, 220)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the :target pseudo-class in selectors](/en-US/docs/Web/CSS/CSS_selectors/Using_the_:target_pseudo-class_in_selectors)

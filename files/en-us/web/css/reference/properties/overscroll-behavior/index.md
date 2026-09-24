---
title: "`overscroll-behavior` CSS property"
short-title: overscroll-behavior
slug: Web/CSS/Reference/Properties/overscroll-behavior
page-type: css-shorthand-property
browser-compat: css.properties.overscroll-behavior
sidebar: cssref
---

The **`overscroll-behavior`** [CSS](/en-US/docs/Web/CSS) property controls what happens when scrolling reaches the edge of a [scroll container](/en-US/docs/Glossary/Scroll_container).

{{InteractiveExample("CSS Demo: overscroll-behavior")}}

```css interactive-example-choice
overscroll-behavior: auto;
```

```css interactive-example-choice
overscroll-behavior: contain;
```

```css interactive-example-choice
overscroll-behavior: chain;
```

```css interactive-example-choice
overscroll-behavior: none;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="box">
      This is a scrollable container. Michaelmas term lately over, and the Lord
      Chancellor sitting in Lincoln's Inn Hall. Implacable November weather. As
      much mud in the streets as if the waters had but newly retired from the
      face of the earth.
      <br /><br />
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged.
    </div>
    <div id="example-element">
      This is the inner container. Focus on this container, scroll to the bottom
      and when you reach the bottom keep scrolling.
      <p>
        If you have
        <code class="language-css">overscroll-behavior: auto;</code> selected
        the outer container will start to scroll.
      </p>
      If you have
      <code class="language-css">overscroll-behavior: contain;</code> selected,
      the outer container will not scroll unless you move your cursor out of the
      inner container and try to perform scroll on the outer container.
    </div>
  </div>
</section>
```

```css interactive-example
.example-container {
  width: 35em;
  height: 18em;
  border: medium dotted;
  padding: 0.75em;
  text-align: left;
  overflow: auto;
  display: flex;
}

.box {
  width: 50%;
}

#example-element {
  width: 50%;
  height: 12em;
  border: medium dotted #1b76c4;
  padding: 0.3em;
  margin: 0 0.3em;
  text-align: left;
  overflow: auto;
  overscroll-behavior: contain;
}
```

## Constituent properties

This property is a shorthand for the following CSS properties:

- {{Cssxref("overscroll-behavior-x")}}
- {{Cssxref("overscroll-behavior-y")}}

## Syntax

```css
/* Keyword values */
overscroll-behavior: auto; /* default */
overscroll-behavior: chain;
overscroll-behavior: contain;
overscroll-behavior: none;

/* Two values */
overscroll-behavior: auto contain;

/* Global values */
overscroll-behavior: inherit;
overscroll-behavior: initial;
overscroll-behavior: revert;
overscroll-behavior: revert-layer;
overscroll-behavior: unset;
```

### Values

The `overscroll-behavior` property is specified as one or two keywords chosen from the list of values below.

Two keywords specifies the `overscroll-behavior` value on the `x` and `y` axes respectively. If only one value is specified, both x and y are assumed to have the same value.

- `auto`
  - : Allows the default behavior at a scroll boundary. Scrolling may continue in an another scroll container.
- `contain`
  - : Prevents scrolling from continuing outside the scroll container. "Bounce" effects may still occur.
- `chain`
  - : Allows scrolling to continue outside the scroll container, but prevents overscroll "bounce" effects
- `none`
  - : Prevents scrolling from continuing outside the scroll container and also prevents overscroll "bounce" effects.

## Description

By default, mobile browsers tend to provide a "bounce" effect or even a page refresh when the top or bottom of a page (or other scroll area) is reached. You may also have noticed that when you have a dialog box with scrolling content at the top of a page that also has scrolling content, once the dialog box's {{Glossary("Scroll_boundary", "scroll boundary")}} is reached, the underlying page will then start to scroll — this is called {{Glossary("Scroll_chaining", "scroll chaining")}}.

In some cases, these behaviors are not desirable. You can use `overscroll-behavior` to get rid of unwanted scroll chaining and the browser's "pull to refresh"-type behavior.

Note that this property applies only to {{Glossary("Scroll_container", "scroll containers")}}. In particular, since an [`<iframe>`](/en-US/docs/Web/HTML/Reference/Elements/iframe) is not a scroll container, setting this property on an iframe has no effect. To control scroll chaining from an iframe, set `overscroll-behavior` on both the [`<html>`](/en-US/docs/Web/HTML/Reference/Elements/html) and the [`<body>`](/en-US/docs/Web/HTML/Reference/Elements/body) elements of the iframe's document.

A {{Glossary("Scroll_container", "scroll container")}} that has no scrollable overflow, such as an element with `overflow: hidden`, is always considered to be at its {{Glossary("Scroll_boundary", "scroll boundary")}}. So setting a non-default `overscroll-behavior` such as `contain` or `none` on it will prevent scroll chaining to ancestor scroll containers. This can be used to prevent background scrolling while a dialog or overlay is open.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### `overscroll-behavior` on `<dialog>` elements

In this example there are 4 buttons that launch a dialog, each dialog has a different `overscroll-behavior` value. There is also a `<div>` that forces the content to be larger that the container so that the scroll affect of the page can be seen.

### HTML

```html
<div class="buttons">
  <button popovertarget="dialog-auto"><code>auto</code></button>
  <button popovertarget="dialog-contain"><code>contain</code></button>
  <button popovertarget="dialog-chain"><code>chain</code></button>
  <button popovertarget="dialog-none"><code>none</code></button>
</div>
<div class="force-scroll"></div>
<dialog id="dialog-auto" popover>
  <code>overscroll-behavior: auto;</code>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa odio voluptatum minus dolorem assumenda nemo quos autem culpa, pariatur illo deserunt ea nam commodi fugiat ipsum quam alias suscipit facilis?</p>
</dialog>
<dialog id="dialog-contain" popover>
  <code>overscroll-behavior: contain;</code>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa odio voluptatum minus dolorem assumenda nemo quos autem culpa, pariatur illo deserunt ea nam commodi fugiat ipsum quam alias suscipit facilis?</p>
</dialog>
<dialog id="dialog-chain" popover>
  <code>overscroll-behavior: chain;</code>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa odio voluptatum minus dolorem assumenda nemo quos autem culpa, pariatur illo deserunt ea nam commodi fugiat ipsum quam alias suscipit facilis?</p>
</dialog>
<dialog id="dialog-none" popover>
  <code>overscroll-behavior: none;</code>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa odio voluptatum minus dolorem assumenda nemo quos autem culpa, pariatur illo deserunt ea nam commodi fugiat ipsum quam alias suscipit facilis?</p>
</dialog>
```

### CSS

```css hidden
::backdrop {
  backdrop-filter: blur(0.5rem);
}
.buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 2vb;
}
.force-scroll {
  width: 20vi;
  height: 200vb;
  margin-inline: auto;
  border: solid 1px black;
  background: linear-gradient(45deg, tomato, olivedrab);
}
```

```css
[popover] {
  width: 30vi;
  height: 10vi;
}
#dialog-auto {
  overscroll-behavior: auto;
}
#dialog-contain {
  overscroll-behavior: contain;
}
#dialog-chain {
  overscroll-behavior: chain;
}
#dialog-none {
  overscroll-behavior: none;
}
```

### Result

Click one of the buttons to see that behavior applied to the dialog that appears, when you scroll within the dialog:

- `auto`: if you overscroll the dialog you will see the content "bounce" and if you then continue to scroll you will see the background scroll too.
- `contain`: if you overscroll the dialog you will see the content "bounce" and if you then continue to scroll you will see the background does not scroll.
- `chain`: if you overscroll the dialog you will see that the content does not "bounce" and if you then continue to scroll you will see the background scroll too.
- `contain`: if you overscroll the dialog you will see that the content does not "bounce" and if you then continue to scroll you will see the background does not scroll.

{{EmbedLiveSample("overscroll-behavior_on_dialog_elements", "300", "180")}}

An alternate example of controlling scroll of "chat" window can be seen on the [`overscroll-behavior-y`](http://localhost:5042/en-US/docs/Web/CSS/Reference/Properties/overscroll-behavior-y#preventing_an_underlying_element_from_scrolling) property.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS overscroll behavior](/en-US/docs/Web/CSS/Guides/Overscroll_behavior) module
- [CSS scroll anchoring](/en-US/docs/Web/CSS/Guides/Scroll_anchoring) module
- [Take control of your scroll: customizing pull-to-refresh and overflow effects](https://developer.chrome.com/blog/overscroll-behavior) on developer.chrome.com (2017)

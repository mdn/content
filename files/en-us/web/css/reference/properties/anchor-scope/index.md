---
title: anchor-scope
slug: Web/CSS/Reference/Properties/anchor-scope
page-type: css-property
browser-compat: css.properties.anchor-scope
sidebar: cssref
---

The **`anchor-scope`** [CSS](/en-US/docs/Web/CSS) property can be used to limit the scope of the DOM within which positioned elements can be associated with anchor elements to a particular subtree.

## Syntax

```css
/* Single values */
anchor-scope: none;
anchor-scope: all;
anchor-scope: --anchor-name;

/* Multiple <dashed-ident> values */
anchor-scope: --anchor-name, --another-name;

/* Global values */
anchor-scope: inherit;
anchor-scope: initial;
anchor-scope: revert;
anchor-scope: revert-layer;
anchor-scope: unset;
```

### Values

- `none`
  - : The default value. No anchor scope limiting happens on an element when this value is set.
- `all`
  - : Any {{cssxref("anchor-name")}}s declared on an element with this value set and its descendants can only be bound to by positioned elements that are descendants of the same element.
- {{cssxref("dashed-ident")}}#
  - : One or more comma-separated {{cssxref("dashed-ident")}}s representing anchor names. Any of the specified `anchor-name`s declared on an element with this value set and its descendants can only be bound to by positioned elements that are descendants of the same element.

## Description

When multiple anchor elements on a page are given the same {{cssxref("anchor-name")}} value and a positioned element is associated with that anchor name (by specifying the name as its {{cssxref("position-anchor")}} property value), the positioned element will be associated with the _last_ anchor element in the source order with that anchor name.

This can be a problem in certain situations. For example, when you have multiple HTML components repeated on a page, and each one features a positioned element anchored to the component, all of the positioned elements will be anchored to the last component on the page, unless each component uses a different anchor name.

The `anchor-scope` property can fix this problem by making it so that each positioned element can only be anchored to an element within the same subtree of the element that has the scope set on it:

- `anchor-scope: all` sets the scope so that _any_ `anchor-name` values set in the subtree can only be bound to by positioned elements in the same subtree.
- `anchor-scope: <dashed-ident>#` sets the scope so that the specified `anchor-name` values, when set in the subtree, can only be bound to by positioned elements in the same subtree.

If you have, for example, three `anchor-name` values set inside a subtree (say, <code>&#8209;&#8209;anchor1</code>, <code>&#8209;&#8209;anchor2</code>, and <code>&#8209;&#8209;anchor3</code>), setting <code>anchor-scope: &#8209;&#8209;anchor1, &#8209;&#8209;anchor2, &#8209;&#8209;anchor3</code> on the top-level element of the subtree would be equivalent to setting `anchor-scope: all`.

Anchor scopes only affect **explicit anchor associations**, that is, those made between an anchor element with an `anchor-name` set on it, and a positioned element referencing the anchor element's anchor name in its `position-anchor` value. Anchor scopes do not affect [implicit anchor associations](/en-US/docs/Web/CSS/Guides/Anchor_positioning/Using#implicit_anchor_association).

For more information on anchor features and usage, see the [CSS anchor positioning](/en-US/docs/Web/CSS/Guides/Anchor_positioning) module landing page and the [Using CSS anchor positioning](/en-US/docs/Web/CSS/Guides/Anchor_positioning/Using) guide.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic usage

This example shows that, when an `anchor-scope` is set on an element, anchor element descendants of that element with `anchor-name`s that match the names specified in the `anchor-scope`, can only be bound to by positioned elements inside that same subtree.

#### HTML

We specify a {{htmlelement("section")}} element that we will set an anchor scope on. This contains two {{htmlelement("div")}} elements, one to be turned into an anchor, and one to be an anchor-positioned element.

We also include a third `<div>` outside the `<section>`, which we will also turn into an anchor-positioned element.

```html live-sample___basic-usage
<section class="scoped">
  <div class="anchor">⚓︎</div>
  <div class="positioned">Positioned 1</div>
</section>

<div class="positioned">Positioned 2</div>
```

#### CSS

We first set `anchor-scope: --my-anchor` on the `<section>`. This limits its scope so that anchor element descendants of the `<section>` with a name of `--my-anchor` can only be bound to by positioned elements that are also descendants of the `<section>`.

To test this out, we declare the `anchor` `<div>` as an anchor element by setting an {{cssxref("anchor-name")}} of `--my-anchor` on it. We then absolutely position the `.positioned` elements, tether them to the anchor by setting their {{cssxref("position-anchor")}} values to `--my-anchor`, and position them to the right of the anchor by setting their {{cssxref("position-area")}} values to `right`:

```css hidden live-sample___basic-usage
.scoped {
  padding: 20px;
  background: #eee;
}

.anchor {
  font-size: 1.8rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: blue;
  width: fit-content;
  padding: 3px;
}

.positioned {
  background: orange;
  width: fit-content;
  padding: 3px;
}
```

```css live-sample___basic-usage
.scoped {
  anchor-scope: --my-anchor;
}

.anchor {
  anchor-name: --my-anchor;
}

.positioned {
  position: absolute;
  position-anchor: --my-anchor;
  position-area: right;
}
```

#### Result

The examples renders like so:

{{ EmbedLiveSample("basic_usage", "100%", "225") }}

Note how the first positioned element is positioned to the right of the anchor. It is in scope for positioning relative to the `--my-anchor` anchor, as it is inside the `<section>` element where the `anchor-scope: --my-anchor` is set.

However, the second positioned element is not positioned relative to the anchor. It is not a descendant of the `<section>` element, so it is outside the anchor scope.

### Comparing different `anchor-scope` values

This example allows you to apply different `anchor-scope` values to multiple containers, to demonstrate the effects of each.

#### HTML

We specify three {{htmlelement("section")}} elements that we will set an anchor scope on. Each `<section>` contains two {{htmlelement("div")}} elements, one to be turned into an anchor, and one to be an anchor-positioned element.

We also include an additional `<div>` outside the `<section>` elements, which we will also turn into an anchor-positioned element. This will have different anchor positioning settings from the others.

Finally, we include a {{htmlelement("form")}} containing three different [`<input type="radio">`](/en-US/docs/Web/HTML/Reference/Elements/input/radio) elements to allow different `anchor-scope` values to be set on the `<section>` elements.

```html live-sample___comparing-values
<section class="scoped">
  <div class="anchor">⚓︎</div>
  <div class="positioned">Positioned 1</div>
</section>

<section class="scoped">
  <div class="anchor">⚓︎</div>
  <div class="positioned">Positioned 1</div>
</section>

<section class="scoped">
  <div class="anchor">⚓︎</div>
  <div class="positioned">Positioned 1</div>
</section>

<div class="positioned2">Positioned 2</div>

<form>
  <fieldset>
    <legend>Select <code>anchor-scope</code></legend>

    <input type="radio" id="all" name="scope" value="all" checked />
    <label for="all"><code>all</code></label>
    <input type="radio" id="--my-anchor" name="scope" value="--my-anchor" />
    <label for="all"><code>--my-anchor</code></label>
    <input type="radio" id="none" name="scope" value="none" />
    <label for="none"><code>none</code></label>
  </fieldset>
</form>
```

#### CSS

We start by specifying our anchor elements as anchors by giving them two {{cssxref("anchor-name")}} values: <code>&#8209;&#8209;my-anchor</code> and `--another-anchor`.

```css hidden live-sample___comparing-values
body {
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 5px;
}

.scoped {
  padding: 20px;
  background: #eee;
  border: 2px solid #ddd;
  border-radius: 10px;
  width: 100px;
  height: 100px;
}

.anchor {
  font-size: 1.8rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: blue;
  width: fit-content;
  padding: 3px;
}

.positioned,
.positioned2 {
  background: orange;
  border: 2px solid #ddd;
  border-radius: 3px;
  width: fit-content;
  padding: 3px;
}

form {
  position: absolute;
  bottom: 5px;
  right: 5px;
}
```

```css live-sample___comparing-values
.anchor {
  anchor-name: --my-anchor, --another-anchor;
}
```

Next, we position our `.positioned` elements relative to an anchor element. We absolutely position them, give them a {{cssxref("position-anchor")}} value of `--my-anchor` to associate them with an anchor, and position them relative to the anchor with a {{cssxref("position-area")}} value of `right`.

The `.positioned2` element is positioned in a similar way, except that it is given the other available anchor name as its `position-anchor` value — `--another-anchor` — and it is positioned to the `bottom` of the anchor instead. We also give it a {{cssxref("bottom")}} value of `5px`, so that if the anchor positioning is not working, it will be positioned to the bottom of the `<body>`.

```css live-sample___comparing-values
.positioned {
  position: absolute;
  position-anchor: --my-anchor;
  position-area: right;
}

.positioned2 {
  position: absolute;
  bottom: 5px;
  position-anchor: --another-anchor;
  position-area: bottom;
}
```

#### JavaScript

We handle setting `anchor-scope` on the `<section>` elements using JavaScript. First of all, we grab references to the `<section>` and `<form>` elements. We then add an `input` event listener to the form so that when any of its descendant radio inputs are selected, the `anchor-scope` of all the `<section>` elements is set to the radio input value.

Finally, we set the `anchor-scope` of all the `<section>` elements to `all` on page load as an initial value (that is also the initial selected radio button value).

```js live-sample___comparing-values
const sections = document.querySelectorAll("section");
const form = document.querySelector("form");

form.addEventListener("input", (e) => {
  sections.forEach((section) => (section.style.anchorScope = e.target.value));
});

sections.forEach((section) => (section.style.anchorScope = "all"));
```

#### Result

The examples renders like so:

{{ EmbedLiveSample("basic_usage", "100%", "225") }}

Check out the initial positioning effect applied to the positioned elements with `anchor-scope: all` set on the `<section>` elements, and then try selecting the other available `anchor-scope` values to see what their effect is. You should observe the following:

- `all`: The scope for positioning elements relative to anchor elements that are descendants of the `<section>` elements is limited to positioned elements that are themselves descendants of the `<section>` elements, regardless of the `anchor-name` value used to associate them. As a result, the positioned elements inside the `<section>` elements ("Positioned 1") are anchor-positioned as expected, but the positioned element outside the `<section>` elements ("Positioned 2") is not anchor-positioned. It is out of scope.
- `--my-anchor`: The scope for positioning elements relative to anchor elements that are descendants of the `<section>` elements is limited to positioned elements that are themselves descendants of the `<section>` elements, only if the `--my-anchor` `anchor-name` is used to associate them. As a result, the positioned elements inside the `<section>` elements ("Positioned 1") are anchor-positioned as expected, and the positioned element outside the `<section>` elements ("Positioned 2") is also anchor-positioned as expected. In the former case, the positioned elements are inside the set scope, and in the latter case, the positioned element is not affected by the set scope, as it is using an anchor name outside the scope (<code>&#8209;&#8209;another-anchor</code>). The "Positioned 2" element is positioned relative to the last anchor element in the source that has the matching anchor name.
- `none`: No anchor scope is set on the `<section>` elements. As a result, all of the positioned elements are positioned relative to the last anchor element in the source order.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("anchor-name")}}
- {{cssxref("position-anchor")}}
- [CSS anchor positioning](/en-US/docs/Web/CSS/Guides/Anchor_positioning) module
- [Using CSS anchor positioning](/en-US/docs/Web/CSS/Guides/Anchor_positioning/Using) guide

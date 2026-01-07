---
title: anchor-scope
slug: Web/CSS/Reference/Properties/anchor-scope
page-type: css-property
browser-compat: css.properties.anchor-scope
sidebar: cssref
---

The **`anchor-scope`** [CSS](/en-US/docs/Web/CSS) property can be used to limit the scope in which a positioned element can be associated with anchor elements to a particular subtree.

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
  - : No anchor scope limiting happens on an element. This is the default value.
- `all`
  - : Sets the scope so that _any_ `anchor-name` values set in the subtree can only be bound to by positioned elements in the same subtree.
- {{cssxref("dashed-ident")}}#
  - : One or more comma-separated {{cssxref("dashed-ident")}}s representing anchor names. Sets the scope so that the specified `anchor-name` values, when set in the subtree, can only be bound to by positioned elements in the same subtree.

## Description

When multiple [anchor elements](/en-US/docs/Web/CSS/Guides/Anchor_positioning/Using#associating_anchor_and_positioned_elements) on a page are given the same {{cssxref("anchor-name")}} value and a positioned element is associated with that anchor name (by specifying the name as its {{cssxref("position-anchor")}} property value), the positioned element will be associated with the _last_ anchor element in the source order with that anchor name.

This can be a problem in certain situations. For example, if a document contains multiple repeated components, each with a positioned element tethered to an anchor, all the positioned elements will be anchored to the last anchor on the page unless each component uses a different anchor name. This is likely not the desired behavior.

The `anchor-scope` property can fix this problem by limiting the visibility, or "scope", of an `anchor-name` value to a specific subtree. The result is that each positioned element can only be anchored to an element within the same subtree of the element that has the scope set on it.

- `anchor-scope: all` sets the scope so that _any_ `anchor-name` values set in the subtree can only be bound to by positioned elements in the same subtree.
- `anchor-scope: <dashed-ident>#` sets the scope so that the specified `anchor-name` values, when set in the subtree, can only be bound to by positioned elements in the same subtree.
- `anchor-scope: none` is the default value; it specifies that no anchor scoping is set.

If you have, for example, three `anchor-name` values set inside a subtree (say, <code>&#8209;&#8209;anchor1</code>, <code>&#8209;&#8209;anchor2</code>, and <code>&#8209;&#8209;anchor3</code>), setting <code>anchor-scope: &#8209;&#8209;anchor1, &#8209;&#8209;anchor2, &#8209;&#8209;anchor3</code> on the top-level element of the subtree would be equivalent to setting `anchor-scope: all`.

Anchor scopes only affect [explicit anchor associations](/en-US/docs/Web/CSS/Guides/Anchor_positioning/Using#explicit_css_anchor_association), that is, those made between an anchor element with an `anchor-name` set on it, and a positioned element referencing the anchor element's anchor name in its `position-anchor` value. Anchor scopes do not affect [implicit anchor associations](/en-US/docs/Web/CSS/Guides/Anchor_positioning/Using#implicit_anchor_association).

For more information on anchor features and usage, see the [CSS anchor positioning](/en-US/docs/Web/CSS/Guides/Anchor_positioning) module and the [Using CSS anchor positioning](/en-US/docs/Web/CSS/Guides/Anchor_positioning/Using) guide.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic usage

This example demonstrates how anchor scope works at a basic level. It shows how an anchor element inside a scoped container can be limited to only having positioned elements inside the same scoped container tethered to it.

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

The example renders like so:

{{ EmbedLiveSample("basic_usage", "100%", "225") }}

Note how the first positioned element is positioned to the right of the anchor. It is in scope for positioning relative to the `--my-anchor` anchor, as it is inside the `<section>` element where the `anchor-scope: --my-anchor` is set.

However, the second positioned element is not positioned relative to the anchor. It is not a descendant of the `<section>` element, so it is outside the anchor scope.

### Comparing different `anchor-scope` values

This example demonstrates the effects of the different `anchor-scope` values by allowing you to apply different `anchor-scope` values to multiple containers, all containing anchors with the same `anchor-name` value.

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
  <div class="positioned">Positioned 2</div>
</section>

<section class="scoped">
  <div class="anchor">⚓︎</div>
  <div class="positioned">Positioned 3</div>
</section>

<div class="positioned2">Positioned 4</div>

<form>
  <fieldset>
    <legend>Select an <code>anchor-scope</code> value</legend>

    <input type="radio" id="all" name="scope" value="all" checked />
    <label for="all"><code>all</code></label>
    <input type="radio" id="--my-anchor" name="scope" value="--my-anchor" />
    <label for="--my-anchor"><code>--my-anchor</code></label>
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

The `.positioned2` element is positioned in a similar way, except that it is given the other available anchor name as its `position-anchor` value — `--another-anchor` — and it is positioned to the `bottom` of the anchor instead. We also give it a {{cssxref("bottom")}} value of `5px`, so that if the anchor positioning is not working, it will be positioned to the bottom of the `<body>`. This element is not contained inside any scoped element, therefore it will only be anchor positioned when certain `anchor-scope` values are set on the scoped elements, as explained later on.

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

We handle setting `anchor-scope` on the `<section>` elements when different radio buttons are pressed using JavaScript, which has been hidden for brevity.

```js hidden live-sample___comparing-values
const sections = document.querySelectorAll("section");
const form = document.querySelector("form");

function updateScope(val) {
  sections.forEach((section) => (section.style.anchorScope = val));
}

form.addEventListener("input", (e) => {
  updateScope(e.target.value);
});

updateScope("all");
```

#### Result

The example renders as follows:

{{ EmbedLiveSample("comparing-values", "100%", "225") }}

Check out the initial positioning effect applied to the positioned elements with `anchor-scope: all` set on the `<section>` elements, and then try selecting the other available `anchor-scope` values to see what their effect is. You should observe the following:

- `all`: The scope for positioning elements relative to anchor elements that are descendants of the `<section>` elements is limited to positioned elements that are themselves descendants of the `<section>` elements, regardless of the `anchor-name` value used to associate them. As a result, the positioned elements inside the `<section>` elements ("Positioned 1–3") are anchor-positioned as expected, but the positioned element outside the `<section>` elements ("Positioned 4") is not anchor-positioned. It is out of scope.
- `--my-anchor`: The scope for positioning elements relative to anchor elements that are descendants of the `<section>` elements is limited to positioned elements that are themselves descendants of the `<section>` elements, only if the `--my-anchor` `anchor-name` is used to associate them. As a result, the positioned elements inside the `<section>` elements ("Positioned 1–3") are anchor-positioned as expected, and the positioned element outside the `<section>` elements ("Positioned 4") is also anchor-positioned as expected. In the former case, the positioned elements are inside the set scope, and in the latter case, the positioned element is not affected by the set scope, as it is using an anchor name outside the scope (<code>&#8209;&#8209;another-anchor</code>). The "Positioned 4" element is positioned relative to the last anchor element in the source that has the matching anchor name.
- `none`: As no anchor scope is set on the `<section>` elements, all of the positioned elements are positioned relative to the last anchor element in the source order.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("anchor-name")}}
- {{cssxref("position-anchor")}}
- [CSS anchor positioning](/en-US/docs/Web/CSS/Guides/Anchor_positioning) module
- [Using CSS anchor positioning](/en-US/docs/Web/CSS/Guides/Anchor_positioning/Using) guide

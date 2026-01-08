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
- {{cssxref("dashed-ident", "&lt;dashed-ident&gt;#")}}
  - : One or more comma-separated {{cssxref("dashed-ident")}}s representing anchor names. Sets the scope so that the specified `anchor-name` values, when set in the subtree, can only be bound to by positioned elements in the same subtree.

## Description

When multiple [anchor elements](/en-US/docs/Web/CSS/Guides/Anchor_positioning/Using#associating_anchor_and_positioned_elements) on a page are given the same {{cssxref("anchor-name")}} value and a positioned element is associated with that anchor name (by specifying the name as its {{cssxref("position-anchor")}} property value), the positioned element will be associated with the _last_ anchor element in the source order with that anchor name.

This can be a problem in certain situations. For example, if a document contains multiple repeated components, each with a positioned element tethered to an anchor, all the positioned elements will be anchored to the last anchor on the page unless each component uses a different anchor name. This is likely not the desired behavior.

The `anchor-scope` property can fix this problem by limiting the visibility, or "scope", of an `anchor-name` value to a specific subtree. The result is that each positioned element can only be anchored to an element within the same subtree of the element that has the scope set on it.

- `anchor-scope: all` sets the scope so that _any_ `anchor-name` values set in the subtree can only be bound to by positioned elements in the same subtree. Let's say we include multiple anchors in a document, all with `anchor-name: --my-anchor` set on them, and place them in separate containers. We will then set `anchor-scope: all` on each container. If we then include a positioned element inside one of the containers and give it `--my-anchor` as the value of its `position-anchor` property, it will be positioned relative to the anchor inside the same container.

  Furthermore, if we create another positioned element outside the containers and give it the same anchor name, or a different anchor name, it will not be anchor-positioned relative to any of the anchors, regardless of whether the anchors have those anchor names included inside their `anchor-name` values. `anchor-scope: all` limits the anchor scope for containers it is set on for _any_ anchors, regardless of `anchor-name`, to only positioned elements inside the same containers.

- `anchor-scope: <dashed-ident>#` sets the scope so that the specified `anchor-name` values, when set in the subtree, can only be bound to by positioned elements in the same subtree. If we return to the same example described in the previous bullet, but change the `anchor-scope` value set on the containers to `--my-anchor`:
  - Positioned elements with `position-anchor: --my-anchor` set on them will be limited to the scope imposed by the `anchor-scope` setting. They will only be positioned relative to the anchors if they are placed inside the containers.
  - However, positioned elements with different `position-anchor` names — for example, `--another-anchor` — _can_ be positioned relative to one of the anchors, whether it is placed inside or outside the containers, provided you add the `--another-anchor` anchor name to the anchor's `anchor-name` property. The `anchor-scope` property only limits the scope for the `--my-anchor` anchor name, so it will have no effect on other anchor names.

    If multiple anchors are given the `--another-anchor` anchor name, the positioned elements with that `position-anchor` value will be positioned relative to the last anchor in the source order with that name.

- `anchor-scope: none` is the default value, which specifies that no anchor scope is set. If multiple anchors exist in a document with the same `anchor-name`, and a positioned element is given this name as the value of its `position-anchor` property, it will be positioned relative to the last anchor element in the source order, regardless of where it is placed in the DOM hierarchy.

If you have, for example, three `anchor-name` values set inside a subtree (say, `--anchor1`, `--anchor2`, and `--anchor3`), setting `anchor-scope: --anchor1, --anchor2, --anchor3` on the top-level element of the subtree would be equivalent to setting `anchor-scope: all`.

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
  background: #eeeeee;
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
    <input type="radio" id="my-anchor" name="scope" value="--my-anchor" />
    <label for="my-anchor"><code>--my-anchor</code></label>
    <input type="radio" id="none" name="scope" value="none" />
    <label for="none"><code>none</code></label>
  </fieldset>
</form>
```

#### CSS

We start by specifying our anchor elements as anchors by giving them two {{cssxref("anchor-name")}} values: `--my-anchor` and `--another-anchor`.

```css hidden live-sample___comparing-values
body {
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 5px;
}

.scoped {
  padding: 20px;
  background: #eeeeee;
  border: 2px solid #dddddd;
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
  border: 1px solid black;
  border-radius: 3px;
  width: fit-content;
  padding: 3px 6px;
  box-shadow: 3px 3px 3px rgb(0 0 0 / 0.2);
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
- `--my-anchor`: The scope for positioning elements relative to anchor elements that are descendants of the `<section>` elements is limited to positioned elements that are themselves descendants of the `<section>` elements, only if the `--my-anchor` `anchor-name` is used to associate them. As a result, the positioned elements inside the `<section>` elements ("Positioned 1–3") are anchor-positioned as expected, and the positioned element outside the `<section>` elements ("Positioned 4") is also anchor-positioned as expected. In the former case, the positioned elements are inside the set scope, and in the latter case, the positioned element is not affected by the set scope, as it is using an anchor name outside the scope (`--another-anchor`). The "Positioned 4" element is positioned relative to the last anchor element in the source that has the matching anchor name.
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

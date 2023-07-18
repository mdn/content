---
title: Introducing the CSS Cascade
slug: Web/CSS/Cascade
page-type: guide
spec-urls: https://drafts.csswg.org/css-cascade/
---

{{CSSRef}}

The **cascade** is an algorithm that defines how user agents combine property values originating from different sources. The cascade defines the origin and layer that takes precedence when declarations in more than one [origin](#origin_types) or [cascade layer](/en-US/docs/Web/CSS/@layer) set a value for a property on an element.

The cascade lies at the core of CSS, as emphasized by the name: _**Cascading**_ Style Sheets. When a [selector](/en-US/docs/Web/CSS/CSS_Selectors) matches an element, the property value from the origin with the highest precedence gets applied, even if the selector from a lower precedence origin or layer has greater [specificity](/en-US/docs/Web/CSS/Specificity).

This article explains what the cascade is and the order in which {{Glossary("CSS")}} [declarations](/en-US/docs/Web/API/CSSStyleDeclaration) cascade, covering cascade layers and origin type. Understanding origin precedence is key to understanding the cascade.

## Origin types

The CSS cascade algorithm's job is to select CSS declarations in order to determine the correct values for CSS properties. CSS declarations come from different origin types: **[User-agent stylesheets](#user-agent_stylesheets)**, **[Author stylesheets](#author_stylesheets)**, and **[User stylesheets](#user_stylesheets)**.

Though style sheets come from these different origins and can be within different [layers](/en-US/docs/Web/CSS/@layer) in each of these origins, they overlap in scope; to make this work, the cascade algorithm defines how they interact. Before addressing the interactions, let's define some terms:

### User-agent stylesheets

User-agent, or browsers, have basic style sheets that give default styles to any document. These style sheets are named **user-agent stylesheets**. Most browsers use actual stylesheets for this purpose, while others simulate them in code. The end result is the same.

Some browsers let users modify the user-agent stylesheet, but this is rare and not something that can be controlled.

Although some constraints on user-agent stylesheets are set by the HTML specification, browsers have a lot of latitude: that means some differences exist between browsers. To simplify the development process, Web developers may use a CSS reset stylesheet, such as [normalize.css](https://github.com/necolas/normalize.css), which sets common properties values to a known state for all browsers before beginning to make alterations to suit their specific needs.

Unless the user-agent stylesheet includes an [`!important`](/en-US/docs/Web/CSS/Specificity#the_!important_exception) next to a property, making it "important", styles declared by author styles, including a reset style sheet, take precedence over the user-agent styles, regardless of the specificity of the associated selector.

### Author stylesheets

**Author stylesheets** are the most common type of style sheet; these are the styles written by web developers. These styles can reset user-agent styles, as noted above, and define the styles for the design of a given web page or application. The author, or web developer, defines the styles for the document using one or more linked or imported stylesheets, {{HTMLElement('style')}} blocks, and inline styles defined with the [`style`](/en-US/docs/Web/HTML/Global_attributes#style) attribute. These author styles define the look and feel of the website — its theme.

### User stylesheets

In most browsers, the user (or reader) of the website can choose to override styles using a custom **user stylesheet** designed to tailor the experience to the user's wishes. Depending on the user agent, [user styles can be configured](https://www.thoughtco.com/user-style-sheet-3469931) directly or added via browser extensions.

### Cascade layers

The cascade order is based on origin type. The cascade within each origin type is based on the declaration order of [cascade layers](/en-US/docs/Web/CSS/@layer) within that type. For all origins - user-agent, author, or user - styles can be declared within or outside of named or anonymous layers. When declared using [`layer`, `layer()`](/en-US/docs/Web/CSS/@import) or [`@layer`](/en-US/docs/Web/CSS/@layer), styles are placed into the specified named layer, or into an anonymous layer if no name is provided. Styles declared outside of a layer are treated as being part of an anonymous last declared layer.

Let's take a look at cascading origin type before diving into cascade layers within each origin type.

## Cascading order

The cascading algorithm determines how to find the value to apply for each property for each document element. The following steps apply to the cascading algorithm:

1. **Relevance**: It first filters all the rules from the different sources to keep only the rules that apply to a given element. That means rules whose selector matches the given element and which are part of an appropriate `media` at-rule.

2. **Origin and importance**: Then it sorts these rules according to their importance, that is, whether or not they are followed by `!important`, and by their origin. Ignoring layers for the moment, the cascade order is as follows:

   | Order (low to high) | Origin                   | Importance   |
   | ------------------- | ------------------------ | ------------ |
   | 1                   | user-agent (browser)     | normal       |
   | 2                   | user                     | normal       |
   | 3                   | author (developer)       | normal       |
   | 4                   | CSS @keyframe animations |              |
   | 5                   | author (developer)       | `!important` |
   | 6                   | user                     | `!important` |
   | 7                   | user-agent (browser)     | `!important` |
   | 8                   | CSS transitions          |              |

3. **Specificity:** In case of equality with an origin, the [specificity](/en-US/docs/Web/CSS/Specificity) of a rule is considered to choose one value or another. The specificity of the selectors are compared, and the declaration with the highest specificity wins.
4. **Order of appearance**: In the origin with precedence, if there are competing values for a property that are in style block matching selectors of equal specificity, the last declaration in the style order is applied.

The cascade is in ascending order, meaning animations have precedence of normal values, whether those are declared in user, author, or user-agent styles, important values take precedence over animations, and transitions have precedence over important values.

> **Note:** **Transitions and animations**
>
> Property values set by animation {{cssxref('@keyframes')}} are more important than all normal styles (those with no [`!important`](/en-US/docs/Web/CSS/Specificity#the_!important_exception) set).
>
> Property values being set in a {{cssxref('transition')}} take precedence over all other values set, even those marked with `!important`.

The cascade algorithm is applied _before_ the specificity algorithm, meaning if `:root p { color: red;}` is declared in the user stylesheet (line 2) and a less specific `p {color: blue;}` is in the author stylesheet (line 3), the paragraphs will be blue.

## Basic example

Before taking a deeper look at how cascade layers impact the cascade, let's look at an example involving multiple sources of CSS across the various origins, and work through the steps of the cascade algorithm:

Here we have a user agent style sheet, two author style sheets, and a user stylesheet, with no inline styles within the HTML:

**User-agent CSS:**

```css
li {
  margin-left: 10px;
}
```

**Author CSS 1:**

```css
li {
  margin-left: 0;
} /* This is a reset */
```

**Author CSS 2:**

```css
@media screen {
  li {
    margin-left: 3px;
  }
}

@media print {
  li {
    margin-left: 1px;
  }
}

@layer namedLayer {
  li {
    margin-left: 5px;
  }
}
```

**User CSS:**

```css
.specific {
  margin-left: 1em;
}
```

**HTML:**

```html
<ul>
  <li class="specific">1<sup>st</sup></li>
  <li>2<sup>nd</sup></li>
</ul>
```

In this case, declarations inside `li` and `.specific` rules should apply.

Once again, there are four steps in the cascade algorithm, in order:

1. Relevance
2. Origin and importance
3. Specificity
4. Order of appearance

The `1px` is for print media. Due to lack of _relevance_ based on its media type, it is removed from consideration.

No declaration is marked as `!important`, so the precedence order is author style sheets over user style sheets over user-agent stylesheet. Based on _origin and importance_, the `1em` from the user stylesheet and the `10px` from the user-agent stylesheet are removed from consideration.

Note that even though the user style on `.specific` of `1em` has a higher specificity, it's a normal declaration in a user style sheet. As such, it has a lower precedence than any author styles, and gets removed by the origin and importance step of the algorithm before specificity even comes into play.

There are three declarations in author stylesheets:

```css
li {
  margin-left: 0;
} /* from author css 1 */
```

```css
@media screen {
  li {
    margin-left: 3px;
  }
}
```

```css
@layer namedLayer {
  li {
    margin-left: 5px;
  }
}
```

The last one, the `5px` is part of a cascade layer. Normal declarations in layers have lower precedence than normal styles not in a layer within the same origin type. This is also removed by step 2 of the algorithm, _origin and importance_.

This leaves the `0` and the `3px`, which both have the same selector, hence the same _specificity_.

We then look at _order of appearance_. The second one, the last of the two unlayered author styles, wins.

```css
margin-left: 3px;
```

> **Note:** The declaration defined in the user CSS, while it may have greater specificity, is not chosen as the cascade algorithm's _origin and importance_ is applied before the _specificity_ algorithm. The declaration defined in a cascade layer, though it may come later in the code, will not have precedence either as normal styles in cascade layers have less precedence than normal unlayered styles. _Order of appearance_ only matters when both origin, importance, and specificity are equal.

## Author styles: inline styles, layers, and precedence

The [table in Cascading order](#cascading_order) provided a precedence order overview. The table summarized the user-agent, user, and author origin type styles in two lines each with "origin type - normal" and "origin type - !important". The precedence within each origin type is more nuanced. Styles can be contained within layers within their origin type, and, with author styles, there is also the issue of where inline styles land in the cascade order.

The order in which layers are declared is important in determining precedence. Normal styles in a layer take precedence over styles declared in prior layers; with normal styles declared outside of any layer taking precedence over normal layered styles regardless of specificity.

In this example, the author used CSS's {{CSSXref('@import')}} rule to import five external style sheets within a {{HTMLElement('style')}} information element.

```html
<style>
  @import unlayeredStyles.css;
  @import AStyles.css layer(A);
  @import moreUnlayeredStyles.css;
  @import BStyles.css layer(B);
  @import CStyles.css layer(C);
  p {
    color: red;
    padding: 1em !important;
  }
</style>
```

and then in the body of the document we have inline styles:

```html
<p style="line-height: 1.6em; text-decoration: overline !important;">Hello</p>
```

In the CSS code block above, three cascade layers named "A", "B", and "C", were created, in that order. Three stylesheets were imported directly into layers and two were imported without creating or being assigned to a layer.
The "All unlayered styles" in the list below (normal author style precedence - order 4) includes styles from these two stylesheets and the additional unlayered CSS style blocks. In addition, there are two inline styles, a normal `line-height` declaration and an important `text-decoration` declaration:

| Order (low to high) | Author style         | Importance   |
| ------------------- | -------------------- | ------------ |
| 1                   | A - first layer      | normal       |
| 2                   | B - second layer     | normal       |
| 3                   | C - last layer       | normal       |
| 4                   | All unlayered styles | normal       |
| 5                   | inline `style`       | normal       |
| 6                   | animations           |              |
| 7                   | All unlayered styles | `!important` |
| 8                   | C - last layer       | `!important` |
| 9                   | B - second layer     | `!important` |
| 10                  | A - first layer      | `!important` |
| 11                  | inline `style`       | `!important` |
| 12                  | transitions          |              |

In all origin types, the non important styles contained in layers have the lowest precedence. In our example, the normal styles associated with the first declared layer (A) have lower precedence than normal styles in the second declared layer (B), which have lower precedence than normal styles in the third declared layer (C). These layered styles have lower precedence than all normal unlayered styles, which includes normal styles from `unlayeredStyles.css`, `moreUnlayeredStyles.css`, and the `color` of `p` in the `<style>` itself.

If any of the layered styles in A, B, or C, have selectors with higher specificity matching an element, similar to `:root body p { color: black;}`, it doesn't matter. Those declarations are removed from consideration because of _origin_; normal layered styles have less precedence than normal unlayered styles. If, however, the more specific selector `:root body p { color: black;}` was found in `unlayeredStyles.css`, as both _origin and importance_ have the same precedence, _specificity_ would mean the more specific, black declaration would win.

The layer order of precedence is inverted for styles declared as `!important`. Important styles declared in a layer take precedence over important styles declared outside of a layer. Important styles in the first declared layer (A) take precedence over important declarations found in layer B, which takes precedence over C, which have precedence over important declarations in the unlayered styles.

### Inline styles

Only relevant to author styles are inline styles, declared with the `style` attribute. Normal inline styles take precedence over any other normal author styles, no matter the specificity of the selector. If `line-height: 2;` were declared in a `:root body p` selector block in any of the five imported stylesheets, the line height would still be `1.6`.

Normal inline styles take precedence over any other normal author styles unless the property is being altered by a CSS animation.

All important inline styles take precedence over all author styles, important and not, inline and not, layered and not. Important styles also take precedence over animated properties, but not transitioning properties. Three things can override an important inline style: 1) an important user style, 2) an important user agent style, or 3) a property value being transitioned.

### Importance and layers

The origin type precedence order is inverted for important styles. Important styles declared outside of any cascade layer have lower precedence than those declared as part of a layer. Important values that come in early layers have precedence over important styles declared in subsequent cascade layers.

Take for example the following CSS:

```css
p {
  color: red;
}
@layer B {
  :root p {
    color: blue;
  }
}
```

Even though the red is declared first and has a less specific selector, because unlayered CSS takes precedence over layered CSS, the paragraph will be red. Had we included an inline style on the paragraph setting it to a different color, such as `<p style="color: black">`, the paragraph would be black.

When we add `!important` to this bit of CSS, the precedence order is reversed with the stylesheet:

```css
p {
  color: red !important;
}
@layer B {
  :root p {
    color: blue !important;
  }
}
```

Now the paragraph will be blue. The `!important` in the earliest declared layer takes precedence of subsequent layers and unlayered important declarations. If the inline style contained !important, such as `<p style="color: black !important">`, again the paragraph would be black. Inline importance does take precedence over all other author declared `!important` declarations, no matter the specificity.

> **Note:** `!important` reverses the precedence of cascade layers. For this reason, rather than using `!important` to override external styles, import frameworks, third party styles, widget stylesheets, etc., into layers, demoting their precedence. `!important` should only be used sparingly, if ever, to guard required styles against later overrides, in the first declared layer.

Styles that are transitioning take precedence over all important styles, no matter who or how they are declared.

## Complete cascade order

Now that we have a better understanding of origin type and cascade layer precedence, we realize the table in [Cascading order](#cascading_order) could have more accurately been represented by the following table:

<table>
<thead>
  <tr><th>Precedence Order <br/>(low to high)</th><th>Style Origin</th><th>Importance</th></tr>
</thead>
<tbody>
  <tr><td rowspan="3">1</td><td>user-agent - first declared layer</td><td rowspan="3">normal</td></tr>
  <tr><td>user-agent - last declared layer</td></tr>
  <tr><td>user-agent - unlayered styles</td></tr>
  <tr><td rowspan="3">2</td><td>user - first declared layer</td><td rowspan="3">normal</td></tr>
  <tr><td>user - last declared layer</td></tr>
  <tr><td>user - unlayered styles</td></tr>
  <tr><td rowspan="4">3</td><td>author - first declared layer</td><td rowspan="4">normal</td></tr>
  <tr><td>author - last declared layer</td></tr>
  <tr><td>author - unlayered styles</td></tr>
  <tr><td>inline <code>style</code></td></tr>
  <tr><td>4</td><td>animations</td><td></td></tr>
  <tr><td rowspan="4">5</td><td>author - unlayered styles</td><td rowspan="4"><code>!important</code></td></tr>
  <tr><td>author - last declared layer</td></tr>
  <tr><td>author - first declared layer</td></tr>
  <tr><td>inline <code>style</code></td></tr>
  <tr><td rowspan="3">6</td><td>user - unlayered styles</td><td rowspan="3"><code>!important</td></tr>
  <tr><td>user - last declared layer</td></tr>
  <tr><td>user - first declared layer</td></tr>
  <tr><td rowspan="3">7</td><td>user-agent - unlayered styles</td><td rowspan="3"><code>!important</code></td></tr>
  <tr><td>user-agent - last declared layer</td></tr>
  <tr><td>user-agent - first declared layer</td></tr>
  <tr><td>8</td><td>transitions</td><td></td></tr>
</tbody>
</table>

## Which CSS entities participate in the cascade

Only CSS property/value pair declarations participate in the cascade. This means that [at-rules](/en-US/docs/Web/CSS/At-rule) containing entities other than declarations, such as a {{ cssxref("@font-face")}} rule containing _descriptors_, don't participate in the cascade.

For the most part, the properties and descriptors defined in at-rules don't participate in the cascade. Only at-rules as a whole participate in the cascade. For example, within a `@font-face` rule, font names are identified by [`font-family`](/en-US/docs/Web/CSS/@font-face/font-family) descriptors. If several `@font-face` rules with the same descriptor are defined, only the most appropriate `@font-face`, as a whole, is considered. If more than one are identically appropriate, the entire `@font-face` declarations are compared using steps 1, 2, and 4 of the algorithm (there is no specificity when it comes to at-rules).

While the declarations contained in most at-rules — such as those in {{cssxref("@media")}}, {{cssxref("@document")}}, or {{cssxref("@supports")}} — participate in the cascade, the at-rule may make an entire selector not relevant, as we saw with the print style in the [basic example](#basic_example).

Declarations in {{cssxref("@keyframes")}} don't participate in the cascade. As with `@font-face`, only the `@keyframes` as a whole is selected via the cascade algorithm. The [precedence order of animation is described below](#css_animations_and_the_cascade).

When it comes to {{cssxref("@import")}}, the `@import` doesn't participate itself in the cascade, but all of the imported styles do participate. If the `@import` defines a [named or anonymous layer](/en-US/docs/Web/CSS/@layer), the contents of the imported stylesheet are placed into the specified layer. All other CSS imported with `@import` is treated as the last declared layer. This was discussed above.

Finally, {{cssxref("@charset")}} obeys specific algorithms and isn't affected by the cascade algorithm.

## CSS animations and the cascade

[CSS animations](/en-US/docs/Web/CSS/CSS_animations), using {{ cssxref("@keyframes")}} at-rules, define animations between states. Keyframes don't cascade, meaning that at any given time CSS takes values from only one single {{cssxref("@keyframes")}}, and never mixes multiple ones together.

If the several keyframe animations are defined with the same animation name, the last defined `@keyframes` in the origin and layer with the greatest precedence. Only one `@keyframes` definition is used, even if the `@keyframes` animate different property. `@keyframes` with the same name are never combined.

```css
p {
  animation: infinite 5s alternate repeatedName;
}
@keyframes repeatedName {
  from {
    font-size: 1rem;
  }
  to {
    font-size: 3rem;
  }
}

@layer A {
  @keyframes repeatedName {
    from {
      background-color: yellow;
    }
    to {
      background-color: orange;
    }
  }
}
@layer B {
  @keyframes repeatedName {
    from {
      color: white;
    }
    to {
      color: black;
    }
  }
}
```

In this example, there are three separate animation declaration named `repeatedName`. When `animation: infinite 5s alternate repeatedName` is applied to the paragraph, only one animation is applied: the keyframe animation defined in the unlayered CSS takes precedence over the layered keyframe animation declarations based on origin and cascade layer precedence order. In this example, only the element's font size will be animated.

> **Note:** There are no important animations, as property declarations in a {{cssxref('@keyframes')}} block that contain `!important` as part of the value are ignored.

## Resetting styles

After your content has finished altering styles, it may find itself in a situation where it needs to restore them to a known state. This may happen in cases of animations, theme changes, and so forth. The CSS property {{cssxref("all")}} lets you quickly set (almost) everything in CSS back to a known state.

`all` lets you opt to immediately restore all properties to any of their initial (default) state, the state inherited from the previous level of the cascade, a specific origin (the user-agent stylesheet, the author stylesheet, or the user stylesheet), or even to clear the values of the properties entirely.

## Specifications

{{Specifications}}

## See also

- [A very simple introduction to the CSS cascade](/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
- CSS key concepts:
  - [CSS syntax](/en-US/docs/Web/CSS/Syntax)
  - [At-rules](/en-US/docs/Web/CSS/At-rule)
  - [Comments](/en-US/docs/Web/CSS/Comments)
  - [Specificity](/en-US/docs/Web/CSS/Specificity)
  - [Inheritance](/en-US/docs/Web/CSS/Inheritance)
  - [Box model](/en-US/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - [Layout modes](/en-US/docs/Web/CSS/Layout_mode)
  - [Visual formatting models](/en-US/docs/Web/CSS/Visual_formatting_model)
  - [Margin collapsing](/en-US/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Values
    - [Initial values](/en-US/docs/Web/CSS/initial_value)
    - [Computed values](/en-US/docs/Web/CSS/computed_value)
    - [Used values](/en-US/docs/Web/CSS/used_value)
    - [Actual values](/en-US/docs/Web/CSS/actual_value)
  - [Value definition syntax](/en-US/docs/Web/CSS/Value_definition_syntax)
  - [Shorthand properties](/en-US/docs/Web/CSS/Shorthand_properties)
  - [Replaced elements](/en-US/docs/Web/CSS/Replaced_element)

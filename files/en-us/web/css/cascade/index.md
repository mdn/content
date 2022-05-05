---
title: Introducing the CSS Cascade
slug: Web/CSS/Cascade
tags:
  - CSS
  - Cascade
  - Guide
  - Introduction
  - Layout
  - Reference
  - Style
  - Style sheet
  - Stylesheets
spec-urls: https://drafts.csswg.org/css-cascade/

---
{{CSSRef}}

The **cascade** is an algorithm that defines how user agents combine property values originating from different sources. The cascade defines which declaration takes precedence when more than one declaration sets a value for a single element/property combination.

The cascade lies at the core of CSS, as emphasized by the name: _Cascading_ Style Sheets. This article explains what the cascade is, the order in which {{Glossary("CSS")}} [declarations](/en-US/docs/Web/API/CSSStyleDeclaration) cascade, and how this affects you, the web developer.

## Origin of CSS declarations

The CSS cascade algorithm's job is to select CSS declarations in order to determine the correct values for CSS properties. CSS declarations originate from different origins: the **[User-agent stylesheets](#user-agent_stylesheets)**, the **[Author stylesheets](#author_stylesheets)**, and the **[User stylesheets](#user_stylesheets)**.

Though style sheets come from these different origins and can be within different [layers](en-US/docs/Web/CSS/@layer) in each of these origins, they overlap in scope; to make this work, the cascade algorithm defines how they interact.


### User-agent stylesheets

The browser, the most common user-agent for CSS, has a basic style sheet that gives a default style to any document. These style sheets are named **user-agent stylesheets**. Most browsers use actual style sheets for this purpose, while others simulate them in code, but the end result is the same. Some browsers let users modify the user-agent stylesheet, but this is rare and not something that can be controlled. 

Although some constraints on user-agent stylesheets are set by the HTML specification, browsers still have a lot of latitude: that means that some differences do exist from one browser to another. To simplify the development process, Web developers may use a CSS reset style sheet, such as [normalize.css](https://github.com/necolas/normalize.css), which resets common properties values to a known state for all browsers before beginning to make alterations to suit their specific needs. As we'll see in a bit, unless the user-agent stylesheet includes an `!important` next to a property, styles declared by the web developer, a.k.a. author styles, take precendence over the user-agent styles, regardless of the [specificity](/en-US/docs/Web/CSS/Specificity) of the associated selector.

### Author stylesheets

**Author stylesheets** are the most common type of style sheet; these are the styles written by web developers. These are styles that define styles as part of the design of a given web page or site. The author of the page defines the styles for the document using one or more linked or imported stylesheets, {{HTMLElement('style')}} blocks, and inline styles defined with the {{htmlattrxref('style')}} attribute. These author styles define the look and feel of the website — its theme.

### User stylesheets

The user (or reader) of the web site can choose to override styles in many browsers using a custom **user stylesheet** designed to tailor the experience to the user's wishes. Depending on the user agent, [user styles can be configured](https://www.thoughtco.com/user-style-sheet-3469931) directly or added via browser extensions. 

Regardless of the origin, if an `@import` or a CSS block defines a [named or anonymous layer](en-US/docs/Web/CSS/@layer), the contents of the imported stylesheet or the contents of the block are placed into the specified layer. Styles declared outside of a layer, whether imported with `@import` or not, are treated as being part of an anonymous last declared layer.

## Cascading order

The cascading algorithm determines how to find the value to apply for each property for each document element based on if the styles come from the user agent, the developer, the user, or if they are style changes stemming from CSS transitions or animations. The following steps apply to the cascading algorithm:

**1.** It first filters all the rules from the different sources to keep only the rules that apply to a given element. That means rules whose selector matches the given element and which are part of an appropriate `media` at-rule.
  
**2.** Then it sorts these rules according to their importance, that is, whether or not they are followed by `!important`, and by their origin. Ignoring layers for the moment, the cascade order is as follows:

|     | Origin      | Importance   |
| - | ----------- | ------------ |
| 1   | user-agent (browser) | normal       |
| 2   | user        | normal       |
| 3   | author (developer)    | normal       |
| 4   | CSS @keyframe animations  |             |
| 5   | author (developer)     | `!important` |
| 6   | user        | `!important` |
| 7   | user-agent (browser) | `!important` |
| 8   | CSS transitions |              |


The cascade is in ascending order, which means that transitions have precedence over `!important` values, whether those are declared in user, author, or user-agent styles. All `!important` styles have precendence over animations, which, in-turn, have precendence over all non-important styles.

> *Note:* Property values set by animation {{cssxref('@keyframes')}} are more important than all normal styles (those with no `!important` set). Property values being set in a {{cssxref('transition')}} take precendence over all other values set, even those marked as `!important`. 

**3.** In case of equality with an origin, the [specificity](/en-US/docs/Web/CSS/Specificity) of a value is considered to choose one or the other. 

The cascade algorithm is applied before the specificity algorithm, meaning if `:root p { color: red;}` is declared in the user stylesheet (line 2) and a less specific `p {color: blue;}` is in the author stylesheet (line 3), the paragraphs will be blue.


## Basic example

Before looking at how cascade layers impact the cascade, let's look at an example involving multiple sources of CSS across the various origins; here we have a user agent style sheet, two author style sheets, a user stylesheet, and inline styles within the HTML:

**User-agent CSS:**

```css
li { margin-left: 10px }
```

**Author CSS 1:**

```css
li { margin-left: 0 } /* This is a reset */
```

**Author CSS 2:**

```css
@media screen {
  li { margin-left: 3px }
}

@media print {
  li { margin-left: 1px }
}

@layer namedLayer {
  li {
    margin-left: 5px ;
  }
}
```

**User CSS:**

```css
.specific { margin-left: 1em }
```

**HTML:**

```html
<ul>
  <li class="specific">1<sup>st</sup></li>
  <li>2<sup>nd</sup></li>
</ul>
```

In this case, declarations inside `li` and `.specific` rules should apply. No declaration is marked as `!important`, so the precedence order is author style sheets before user style sheets or user-agent stylesheet.

So four declarations are in competition:

```css
margin-left: 0
```

```css
margin-left: 3px
```

```css
margin-left: 1px
```

```css
margin-left: 5px
```

The third one is ignored (on a screen), the last one is in a cascade layer so has less precendence than styles not in a layer,and the first two have the same selector, hence the same specificity. Therefore, it is the second one, the last of the two unlayered author styles that is then selected:

```css
margin-left: 3px
```

Note that the declaration defined in the user CSS, though having a greater specificity, is not chosen as the cascade algorithm is applied before the specificity algorithm. The declaration defined in a cascade layer, though coming later in the code, is not chosed either as the entire cascade layer has less precendence that code not in a layer. 


## Author styles: inline styles, layers, and precedence

The [table in Cascading order](#Cascading_order) provided a precedence order overview. The table summarized the user-agent, user, and author origin type styles in two lines each with "origin type - normal" and "origin type - !important". The precendence for styles in each origin type is more nuanced. Styles can be contained within layers within their origin type, and, with author styles, there is also the issue of where inline styles land in the cascade order. 

The order in which layers are declared is important in determinining precedence. Normal styles in a layer take precedence over styles declared in prior layers; with normal styles declared outside of any layer taking precedence over layered styles no matter the specificity. 

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

 Three cascade layers named "A", "B", and "C", were created, in that order. Three stylesheets were imported directly into layers and two were imported without creating or being assigned to a layer. The "All unlayered styles" in the list of normal author style precendence order include styles from these two stylesheets and the additional unlayered CSS style blocks. In addition, there are two inline styles, a normal `line-height` declaration and an important `text-decoration` declaration:
 

|     | Author style      | Importance   |
| --- | ----------- | ------------ |
| 1   | A - first layer | normal       |
| 2   | B - second layer | normal       |
| 3  | C - last layer      | normal       |
| 4   | All unlayered styles       | normal       |
| 5   | inline `style`        | normal       |
| 6   | animations  |              |
| 7   | All unlayered styles      | `!important` |
| 8   | C - last layer   | `!important` |
| 9   |  B - second layer | `!important`       |
| 10   | A - first layer    | `!important` |
| 11   | inline `style`      | `!important` |
| 12   | transitions |              |

In all origin types, the styles with the lowest precendence are non important styles contained in layers. In our example, the styles associated with the first declared layer (A) have lower precedence than styles in the second declared layer (B), which have lower precedence than styles in the third declared layer (C). These layered styles have less precendence than all unlayered styles, which includes styles from `unlayeredStyles.css`, `moreUnlayeredStyles.css`, and the `<style>` itself. 

If `line-height` is declared on a `p` or even `:root body p` in any of these stylesheets, the line height will still be `1.6` as inline styles take precendence over any other normal author styles, no matter the specificity of the selector. Similarly, if any of the layered styles declare a `color` on a `p` or within a  `:root body p` selector block, the color value is overridden by normal `p { color: red;}` as layered styles have less precedence than styles declared outside of any layers. Specifity only matters within a layer, not between layers.

The layer order of precedence is inverted for styles declared as `!important`. Important styles declared in a layer taking precedence over important styles declared outside of a layer. Important styles in the first declared layer (A) take precedence if important declarations are found in multiple layers (B, C, or the unlayered styles), no matter the specificity of the selector containing the important property value in the B, C, or anonymous final layer. 

### Inline styles

Only relevant to author styles are inline styles, declared with the `style` attribute. Normal inline styles take precedence over any other normal author styles no matter which layer they're declared in, unless the propery is being altered by a CSS animation. All `!important` inline styles take precedence over any normal styles, animations, and normal inline styles as well as over important layered and unlayered author styles. 

If A, B, and C all have an important padding declaration on a pargraph, the declaration in layer A will take precedence, overriding the later declared layers and the unlayered ` p { padding: 1em !important; }`, as layered important styles take precedence over unlayered important styles as well. If they all have important `text-decoration` styles declarations, they will all be overridden by the important inline style.

Important user and user-agent styles take precedence over important inline styles, as inline styles are all author styles. 

### Importance and cascade layers

The origin type precendence order is inverted for important styles. Important styes declared outside of any cascade layer have lower precendence than those declared as part of a layer. Important values that come in early layers have precedence over important styles declared in subsequent cascade layers. Inline important styles, however, still take precendence over any author layered or unlayered styles, important or not.

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

Even though the red is declared first and has a less specific selector, because unlayered CSS takes precendence over layered CSS, the paragraph will be red. Had we included an inline style on the paragraph setting it to a different color, such as `<p style="color: black">`, the paragraph would be black.

When we add `!important` to this bit of CSS, the presedence order is reversed with the stylesheet:

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

Now the paragraph will be blue. The `!important` in the earliest declared layer takes precendence of subsequent layers and unlayered important declarations. If the inline style contained !important, such as `<p style="color: black !important">`, again the paragraph would be black. Inline importance does take precedence over all other author declared !important declarations, no matter the specificity. 

Styles that are transitioning take precendence over all important styles, no matter who or how they are declared.

### Transitions and animations

Animations take precedence over all normal styles, regardless of origin type. All `!important` styles take precedence over animations. 

Transitions take precendence over all important styles, no matter the origin type, including over inline important styles.

## Complete cascade order

Now that we have a better understanding of origin type and cascade layer precedence, we realize the table in [Cascading order](#cascading-order) could have more accurately been represented by the following table: 

<table>
  <thead>
  <tr><th>Precedence</th><th>Style Origin</th><th>Importance</th></tr>
  </thead>
  <tbody>
<tr><td rowspan="3">1</td><td> user-agent - first declared layer</td><td rowspan="3"> normal</td></tr>
<tr><td> user-agent - last declared layer</td></tr>
<tr><td> user-agent - unlayered styles</td></tr>
<tr><td rowspan="3"> 2   </td><td> user - first declared layer</td><td rowspan="3"> normal</td></tr>
<tr><td> user - last declared layer</td></tr>
<tr><td> user - unlayered styles</td></tr>
<tr><td rowspan="4"> 3 </td><td> author - first declared layer     </td><td rowspan="4"> normal</td></tr>
<tr><td> author - last declared layer</td></tr>
<tr><td> author - unlayered styles</td></tr>
<tr><td> inline <code>style</code></td></tr>
<tr><td> 4   </td><td> animations  </td><td>              </td></tr>
<tr><td rowspan="4"> 5   </td><td> author - unlayered styles      </td><td rowspan="4"> `!important` </td></tr>
<tr><td> author - last declared layer</td></tr>
<tr><td> author - first declared layer</td></tr>
<tr><td> inline <code>style</code></td></tr>
<tr><td rowspan="3"> 6</td><td> user - unlayered styles</td><td rowspan="3"> `!important` </td></tr>
<tr><td> user - last declared layer</td></tr>
<tr><td> user - first declared styles</td></tr>
<tr><td rowspan="3"> 7   </td><td> user-agent  - unlayered styles</td><td rowspan="3"> `!important` </td></tr>
<tr><td> user-agent - last declared layer</td></tr>
<tr><td> user-agent - first declared styles</td></tr>
<tr><td> 8   </td><td> transitions </td><td></td></tr>
</tbody>
</table>

## Resetting styles

After your content has finished altering styles, it may find itself in a situation where it needs to restore them to a known state. This may happen in cases of animations, theme changes, and so forth. The CSS property {{cssxref("all")}} lets you quickly set (almost) everything in CSS back to a known state.

`all` lets you opt to immediately restore all properties to any of their initial (default) state, the state inherited from the previous level of the cascade, a specific origin (the user-agent stylesheet, the author stylesheet, or the user stylesheet), or even to clear the values of the properties entirely.


## Which CSS entities participate in the cascade

Only CSS property/value pair declarations participate in the cascade. This means that [at-rules](/en-US/docs/Web/CSS/At-rule) containing entities other than declarations, such as a {{ cssxref("@font-face")}} rule containing _descriptors_, don't participate in the cascade. 

### @-rules and the cascade 

For the most part, the properties and descriptors defined in at-rules don't participate in the cascade.  Only at-rule as a whole participates in the cascade. For example, within a `@font-face` rule, font names are identified by [`font-family`](/en-US/docs/Web/CSS/@font-face/font-family) descriptors. If several `@font-face` rules with the same descriptor are defined, only the most appropriate `@font-face`, as a whole, is considered.

While the declarations contained in most at-rules — such as those in {{cssxref("@media")}}, {{cssxref("@document")}}, or {{cssxref("@supports")}} — participate in the cascade, declarations contained in {{cssxref("@keyframes")}} don't. As with `@font-face`, only the at-rule as a whole is selected via the cascade algorithm.

When it comes to {{cssxref("@import")}}, the @import doesn't participate itself in the cascade, but all of the imported styles do participate. If the `@import` defines a [named or anonymous layer](en-US/docs/Web/CSS/@layer), the contents of the imported stylesheet are placed into the specified layer. All other CSS imported with `@import` is which is treated as the last declared layer. This was discussed above

Finally, {{cssxref("@charset")}} obeys specific algorithms and isn't affected by the cascade algorithm.


## CSS animations and the cascade

[CSS animations](/en-US/docs/Web/CSS/CSS_Animations), using {{ cssxref("@keyframes")}} at-rules, define animations between states. Keyframes don't cascade, meaning that at any given time CSS takes values from only one single {{cssxref("@keyframes")}}, and never mixes multiple ones together.

If the several keyframe animations are defined with the same name, the latest defined `@keyframes` will in the most important document be used. Only one @keyframes definition is used, even if the @keyframes animate different property. Same named @keyframes are never combined.

```css

p { 
    animation: infinite 5s alternate foo;
}
@keyframes foo {
    from {font-size: 1rem;}
    to {font-size: 3rem;}
  }

@layer A {
  @keyframes foo {
    from {background-color: yellow;}
    to {background-color: orange;}
  }
}
@layer B {
  @keyframes foo {
    from {color: white;}
    to {color: black;}
  }
}
```

In this example, the `foo` animation is declared 3 times. When `foo` is applied to the paragraph, the @keyframes animation defined in the unlayered CSS takes precedence and the element's font size will be animated. 

> **Note:** There are no `!important` animations as property declarations in a {{cssxref('@keyframes')}} block that contain `!important` as part of the value are ignored.

## Specifications

{{Specifications}}

## See also

- [A very simple introduction to the CSS cascade](/en-US/docs/Learn/CSS/Introduction_to_CSS/Cascade_and_inheritance)
- {{CSS_Key_Concepts}}
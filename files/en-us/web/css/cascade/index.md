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

The **cascade** is an algorithm that defines how to combine property values originating from different sources. The cascade defines which declaration takes precedence when more than one declarations set a value for a single element/property combination.

The cascade lies at the core of CSS, as emphasized by the name: _Cascading_ Style Sheets. This article explains what the cascade is, the order in which {{Glossary("CSS")}} [declarations](/en-US/docs/Web/API/CSSStyleDeclaration) cascade, and how this affects you, the web developer.

## Which CSS entities participate in the cascade

Only CSS declarations, that is property/value pairs, participate in the cascade. This means that [at-rules](/en-US/docs/Web/CSS/At-rule) containing entities other than declarations, such as a {{ cssxref("@font-face")}} rule containing _descriptors_, don't participate in the cascade. In these cases, only the at-rule as a whole participates in the cascade: here, the `@font-face` identified by its [`font-family`](/en-US/docs/Web/CSS/@font-face/font-family) descriptor. If several `@font-face` rules with the same descriptor are defined, only the most appropriate `@font-face`, as a whole, is considered.

While the declarations contained in most at-rules — such as those in {{cssxref("@media")}}, {{cssxref("@document")}}, or {{cssxref("@supports")}} — participate in the cascade, declarations contained in {{cssxref("@keyframes")}} don't. As with `@font-face`, only the at-rule as a whole is selected via the cascade algorithm.

Finally, note that {{cssxref("@import")}} and {{cssxref("@charset")}} obey specific algorithms and aren't affected by the cascade algorithm.

## Origin of CSS declarations

The CSS cascade algorithm's job is to select CSS declarations in order to determine the correct values for CSS properties. CSS declarations originate from different origins: the **[User-agent stylesheets](#user-agent_stylesheets)**, the **[Author stylesheets](#author_stylesheets)**, and the **[User stylesheets](#user_stylesheets)**.

Though style sheets come from these different origins and can be in different [layers](en-US/docs/Web/CSS/@layer), they overlap in scope; to make this work, the cascade algorithm defines how they interact.

### User-agent stylesheets

The browser has a basic style sheet that gives a default style to any document. These style sheets are named **user-agent stylesheets**. Some browsers use actual style sheets for this purpose, while others simulate them in code, but the end result is the same.

Some browsers let users modify the user-agent stylesheet. Although some constraints on user-agent stylesheets are set by the HTML specification, browsers still have a lot of latitude: that means that significant differences exist from one browser to another. To simplify the development process, Web developers often use a CSS reset style sheet, forcing common properties values to a known state before beginning to make alterations to suit their specific needs.

### Author stylesheets

**Author stylesheets** are the most common type of style sheet. These are style sheets that define styles as part of the design of a given web page or site. The author of the page defines the styles for the document using one or more linked or imported stylesheets, {{HTMLElement('style')}} blocks, and inline styles defined with the {{htmlattrxref('style')}} attribute. These author styles define the look and feel of the website — its theme.

### User stylesheets

The user (or reader) of the web site can choose to override styles in many browsers using a custom **user stylesheet**, optionally using layers, designed to tailor the experience to the user's wishes.

## Cascading order

The cascading algorithm determines how to find the value to apply for each property for each document element.

**1.** It first filters all the rules from the different sources to keep only the rules that apply to a given element. That means rules whose selector matches the given element and which are part of an appropriate `media` at-rule.
  
**2.** Then it sorts these rules according to their importance, that is, whether or not they are followed by `!important`, and by their origin. The cascade order is as follows:

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

> *Note:* Property values set by animation {{cssxref('@keyframes')}}are more important than all normal styles (those with no `!important` set). Property values being set in a {{cssxref('transition')}}  take precendence over all other values set,even those marked as `!important`. 

**3.** In case of equality, the [specificity](/en-US/docs/Web/CSS/Specificity) of a value is considered to choose one or the other. 

The cascade algorithm is applied before the specificity algorithm, meaning if `:root p { color: red;}` is declared in the user stylesheet (line 2) and a less specific `p {color: blue;}` is in the author stylesheet (line 3), the paragraphs will be blue.

## Author styles cascade order

The [table in Cascade order](#Cascading_order) provided a precedence order overview. The table summarized author styles in two lines: "author - normal" and "author - !important". The precendence for author styles is more nuanced:

|     | Author style      | Importance   |
| --- | ----------- | ------------ |
| 1   | first declared layer  | normal       |
| 2   | last declared layer        | normal       |
| 3   | unlayered styles       | normal       |
| 4   | inline `style`        | normal       |
| 5   | animations  |              |
| 6   | unlayered styles      | `!important` |
| 7   | last declared layer     | `!important` |
| 8   | first declared layer     | `!important` |
| 9   | inline `style`      | `!important` |
| 10   | transitions |              |

Inline styles, declared with the `style` attribute, take precendence over any non-important author styles. Of the author styles, the styles with the lowest precendence are non important styles contained in layers, with the styles associated with the earlier declared layers having lower precedence than layers declared later, which have lower precendence than non-layered styles (styles declared outside of any layer).  layered or not. 

Animations take precedence over all unimportant author styles. All !important styles take precedence over animations, with the precendence order of non-inline !important styles being inverted. !important styes declared outside of any cascade layer have lower precendence than those declared as part of a layer. !important values that come in early layers have precedence over !important styles declared in subsequent cascade layers. Inline !important styles, however, still take precendence over any author layered or unlayered styles, !important or not. Styles that are transitioning take precendence over all !important styles, no matter who or how they are declared.

Take for example the following CSS:

```css
p {
  color: red;
}
@layer namedLayer {
  :root p {
    color: blue;
  }
}
```

Even though the red is declared first and has a less specific selector, because unlayered CSS takes precendence over layered CSS, the paragraph will be red, unless there is an inline style on a paragraph setting it to a different color, such as `<p style="color: black">`.

If we add `!important` to this bit of CSS, the presedence order is reversed with the stylesheet:

```css
p {
  color: red !important;
}
@layer namedLayer {
  :root p {
    color: blue !important;
  }
}
```

The paragraph will be blue, as the !important in the earliest declared layer takes precendence of subsequent layers and unlayered !important declarations. If an inline style contains !important, such as `<p style="color: black !important">`, the inline !important does take precedence over all other author declared !important declarations, no matter the specificity. 

The table in Cascading order could have more accurately been represented by the following table: 


<table>
  <thead>
  <tr><th>Precedence</th><th>Style Origin</th><th>Importance</th></tr>
  </thead>
  <tbody>
<tr><td> 1   </td><td> user-agent  </td><td> normal       </td></tr>
<tr><td> 2   </td><td> user        </td><td> normal       </td></tr>
<tr><td rowspan="4"> 3 </td><td> author - first declared layer     </td><td rowspan="4"> normal</td></tr>
<tr><td> author - last declared layer</td></tr>
<tr><td> author - unlayered styles</td></tr>
<tr><td> inline `style`</td></tr>
<tr><td> 4   </td><td> animations  </td><td>              </td></tr>
<tr><td rowspan="4"> 5   </td><td> author - unlayered styles      </td><td rowspan="4"> `!important` </td></tr>
<tr><td> author - last declared layer</td></tr>
<tr><td> author - first declared layer</td></tr>
<tr><td> inline `style`</td></tr>
<tr><td> 6   </td><td> user        </td><td> `!important` </td></tr>
<tr><td> 7   </td><td> user-agent  </td><td> `!important` </td></tr>
<tr><td> 8   </td><td> transitions </td><td></td></tr>
</tbody>
</table>

## Resetting styles

After your content has finished altering styles, it may find itself in a situation where it needs to restore them to a known state. This may happen in cases of animations, theme changes, and so forth. The CSS property {{cssxref("all")}} lets you quickly set (almost) everything in CSS back to a known state.

`all` lets you opt to immediately restore all properties to any of their initial (default) state, the state inherited from the previous level of the cascade, a specific origin (the user-agent stylesheet, the author stylesheet, or the user stylesheet), or even to clear the values of the properties entirely.

## CSS animations and the cascade

[CSS animations](/en-US/docs/Web/CSS/CSS_Animations), using {{ cssxref("@keyframes")}} at-rules, define animations between states. Keyframes don't cascade, meaning that at any given time CSS takes values from only one single {{cssxref("@keyframes")}}, and never mixes multiple ones together.

When several keyframes are appropriate, it chooses the latest defined in the most important document, but never combined all together.

> **Note:** There are no `!important` animations as property declarations in a {{cssxref('@keyframes')}} block that contain `!important` as part of the value are ignored.

## Example

Let's look at an example involving multiple sources of CSS across the various origins; here we have a user agent style sheet, two author style sheets, a user stylesheet, and inline styles within the HTML:

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

## Specifications

{{Specifications}}

## See also

- [A very simple introduction to the CSS cascade](/en-US/docs/Learn/CSS/Introduction_to_CSS/Cascade_and_inheritance)
- {{CSS_Key_Concepts}}

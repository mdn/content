---
title: Specificity
slug: Web/CSS/Specificity
tags:
  - CSS
  - Example
  - Guide
  - Reference
  - Web
---
{{CSSRef}}

**Specificity** is the algorithm by which browsers decide which CSS property style declaration is the most relevant to an element and, therefore, which property values will be applied. The specificity algorithm calculates [CSS selector](/en-US/docs/Web/CSS/Reference#selectors) weight to determine which rule from competing style declarations gets applied to an element. 

Specificity is considered **after** determining [cascade origin and importance](/en-US/docs/Web/CSS/Cascade). In other words, for competing property declarations, specifity is only relevant and compared between selectors from the one [cascade origin and layer](/en-US/docs/Web/CSS/@layer) that has precedence for the property. Order of appearance becomes relevant when the selector specificity of the competing declarations in the cascade layer with precedence are equal.

## How is specificity calculated?

Specificity is an algorithm that is applied to a given CSS declaration, determined by the number of [selectors of each weight category](#selector-weight-categories) in the selector matching the element (or pseudo-element). If there are two or more declarations providing different property values for the same element, the declaration value in the style block having the matching selector with the greatest algorithmic weight gets applied.

The specificity alorithm is basically a 3-column value of the number of selector components in each weight category. The three categories, or weights, are ID, CLASS, and TYPE. The three column value is written as a count of components in each weight category: _ID - CLASS - TYPE_. The three columns are created by counting the number of selector components for each selector weight category in the selectors that match the element. 

### Selector weight categories

The following list of selectors decrease by specificity:

- ID Column
  - : Includes only [ID selectors](/en-US/docs/Web/CSS/ID_selectors), such as `#example`. For each ID in a matching selector, add 1-0-0 to the value.
- CLASS Column
  - : Includes [class selectors](/en-US/docs/Web/CSS/Class_selectors), such as `.myClass`, attributes selectors like `[type="radio"]` and `[lang|="fr"]`, and pseudo-classes, such as `:hover`, `:nth-of-type(3n)`, and `:required`. For each class, attribute selector, or pseudo-class in a matching selector, add 0-1-0 to the value.
- TYPE column
  - : Includes [type selectors](/en-US/docs/Web/CSS/Type_selectors), such as `p`, `h1`, and `td`,  and pseudo-elements like `::before`, `::placeholder`, and all other selectors with double colon notation. For each element or pseudo-element in a matching selector, add 0-0-1 to the value.
- No value
  - : The Universal selector ({{CSSxRef("Universal_selectors", "*")}}), and {{CSSxRef(":where", ":where()")}} and its parameters, aren't counted in the equation, but they do match elements. The value for both the universal selector and the specificity adjustment pseudo-class is 0-0-0; these selectors do not impact the specificity algorithm value.

Combinators, such as {{CSSxRef("Adjacent_sibling_combinator", "+")}}, {{CSSxRef("Child_combinator", "&gt;")}}, {{CSSxRef("General_sibling_combinator", "~")}}, [" "](/en-US/docs/Web/CSS/Descendant_combinator), and {{CSSxRef("Column_combinator", "||")}} may make a selector more specific, but don't add value to the specificy value. 

The negation pseudo-class, {{CSSxRef(":not", ":not()")}},  itself has no weight. Neither does the {{CSSxRef(":is", ":is()")}} pseudo-class. The parameters in these selectors, however, do. The value of both come from the parameter in the list of parameters that has the highest specificity. The [`:not()` and `:is()` exceptions](#the-is-and-not-exceptions) are discussed below.

#### Matching selector

The specificity weight comes from the matching selector. Take this CSS selector with three comma-separated selectors as an example: 

```css
[type="password"],
input:focus,
:root #myApp input:required {
  color: blue;
}
```

The `[type="password"]` selector in the above selector list, with a specificity `0-1-0`, applies the `color: blue` declaration to all password input types at the weight of `0-1-0`. 

All inputs, no matter the type, when receiving focus, match the second selector in the list, `input:focus`, with a specificity of `0-1-1`; this weight is made up of the `:focus` pseudo-class (0-1-0) and the `input` type (0-1-1). If the password input has focus, it will match `input:focus`, and the specificity for the `color: blue` style declaration will be `0-1-1`. When that password doesn't have focus, the specificity remains at `0-1-0`.

The specificity for a required input nested in an element with attribute `id="myApp"` is `1-2-1`, based on one ID, two pseudo-classes, and one element type. 

If the password input type is nested in a element with `id="myApp"` set, the specificity will be `1-2-1`, whether or not it has focus. Why is the specificity `1-2-1` rather than `0-1-1` or `0-1-0` in this case? Because the specificity weight comes from the matching selector with the greatest specificity weight. The weight is determined by comparing the values in the three columns, from left to right. 

```css
[type="password"]             /* 0-1-0 */
input:focus                   /* 0-1-1 */ 
:root #myApp input:required   /* 1-2-1 */
```

### 3-column comparison

Once the specificity value of the relevant selectors are determined, the number of selector components in each column are compared, from left to right.

```css
#myElement { color: green; /* 1-0-0  - WINS!! */}
.bodyClass .sectionClass .parentClass [id="myElement"] { color: yellow; /* 0-4-0 */}
```

The first column is the number of `id` components in each selector. The number in the _ID_ columns of competing selectors are compared. The selector with the greater value in the _ID_ column wins no matter what the values are in the other columns. Even though the first selector has more components in total, only the number in the first column matters. 

If the values in the ID column are equal, then the next column is compared.

```css
#myElement { color: yellow; /* 1-0-0  */}
#myApp [id="myElement"] { color: green; /* 1-1-0  - WINS!! */}
```

If there is an equal number of _ID_ values, the _CLASS_ column is compared. The _CLASS_ column is the number of class names, attribute selectors, and pseudo-classes in the selector. When the _id_ columns are equal, the selector with the greater number of _CLASS_ value wins, no matter the value in the _type_ column. 

```css
:root input { color: green; /* 0-1-1 - WINS because CLASS column is greater */}
html body main input  { color: yellow; /* 0-0-4 */}
```

If the values in the _CLASS_ and _ID_ columns are equal, the _TYPE_ column becomes relevant. The _TYPE_ column is the number of element types and pseudo-elements in the selector. When the first two columns have the same value, the selector with the greater number of _TYPE_ values wins. 

If there are equal values in all three columns, the proximity rule comes into play, wherein the last declared style has precedence. 

```css
input.myClass { color: yellow; /* 0-1-1 */}
:root input   { color: green; /* 0-1-1  WINS because it comes later */}
```

### The `:is()` and `:not()` exceptions

The matches-any pseudo-class {{CSSxRef(":is", ":is()")}} and the negation pseudo-class {{CSSxRef(":not", ":not()")}} are _not_ considered a pseudo-class in the specificity calculation. They, themselves, add no weight to the specificity equation. However, the selector parameters passed into the pseudo-class parenthesis are part of the specificity algorithm; the weight of the matches-any and negation pseudoclass in the specificity value calculation is the weight of the parameter's [weight](#selector-weight-categories).

```css
p { /* 0-0-1 */ }
:is(p) { /* 0-0-1 */}

div.outer p {  /* 0-1-2 */ }
div:not(.inner) p {  /* 0-1-2 */ }
``` 

Note that in the above CSS pairing, the specificity weight provided by the `:is()` and `:not()` pseudo-classes is the value of the selector parameter, not the pseudoclass. 

Both of these pseudoclasses accept complex selector lists, or comma-separated selectors, as a parameter. This feature can be used to increase an selector's specificity:

```css
:is(p, #fakeId) { /* 1-0-0 */}
p:not(#fakeId) {  /* 1-0-1 */ }
div:not(.inner, #fakeId) p {  /* 1-0-2 */ }
```

In the above CSS code block we have included `#fakeId` in the selectors. This fake id makes adds `1-0-0` to the specifity of each paragraph.

Generally, you want to keep specificity down to a minumum, but if you need to increase an element's specificity for a particular reason, these two pseudo-classes can help.
```css
a:not(#fakeId#fakeId#fakeID) { color: blue; /* 3-0-1 */}
```
In this example, all links will be blue, unless overridden by a link declaration with 3 or more IDs, a color value matching an `a` includes the [`!important` flag](#the-important-exception), or if the link has an [inline style](#inline-styles) color declaration. If you use such a technique, add a comment to explain why the hack was needed.

### Inline styles

Inline styles added to an element (e.g., `style="font-weight: bold;"`) always overwrite any normal styles in author stylesheets, and thus can be thought of as having the highest specificity. Think of inline styles as having a specificity weight of `1-0-0-0`.

The only way to override inline styles is by using `!important`.

Many JavaScript frameworks and libraries add inline styles. Using `!important` with a very targeted selector, such as an attribute selector using the inline style, is one way to override these inline styles. 

```html
<p style="color: purple">
```

```css
p[style*="purple"] { color: rebeccapurple; }
``` 

Make sure to include a comment with every inclusion of the important flag so code maintainers understand why a CSS anti-pattern was used.

### The `!important` exception

Important declarations override any other declarations within the same cascade layer and origin. Although technically [`!important`](/en-US/docs/Web/CSS/important) has nothing to do with specificity, it interacts directly with specificity and the cascade. It reverses the [cascade](/en-US/docs/Web/CSS/Cascade) order of stylesheets. 

If declarations from the same origin and cascade layer conflict, if one property value has the `!important` flag set, the important declaration is applied no matter the specificity. When conflicting declarations from the same origin and cascade layer with the `!important` flag are applied to the same element, the declaration with a greater specificity is applied. 

Using `!important` to override specificity is considered a **bad practice** and should be avoided for this purpose. Understanding and effectively using specificity and the cascade can remove any need for the `!important` flag. 

Instead of using `!important` to override foreign CSS (from external libraries, like Bootstrap or normalize.css) import the 3rd party scripts directly into [cascade layers](/en-US/docs/Web/CSS/@layer). If you must use `!important` in your CSS, comment your usage so future code maintainers know why it was important and know not to override it. But, definitely, don't use `!important` when writing plugins or frameworks that other developers will need to incorporate without being able to control.

### The `:where()` exception

The specificity-adjustment pseudo-class {{CSSxRef(":where", ":where()")}} always has its specificity replaced with zero, `0-0-0`. It enables making CSS selectors very specific in what element is targeted without any increase to specifity. 

In creating 3rd party CSS to be used by developers who don't have access to edit your CSS, it's considered good practice to create CSS with the lowest possible specificity. If your theme includes the CSS:

```css
:where(#defaultTheme) a { /* 0-0-1 */
  color: red;
}
```

The developer implementing the widget can easily override the link color using only type selectors. 

```css
footer a { /* 0-0-2 */
  color: blue;
}
```

## Tips for handling specifity headaches

Instead of using `!important`, consider using cascade layers and using low weight specificity throughout your CSS so that styles are easily overridden with slightly more specific rules.  Using semantic HTML helps provide anchors from which to apply styling.

### Making selectors specific with and without adding specifity

By indicating the section of the document you're styling before the element you're selecting, the rule becomes more specific. Depending on how you add it, you can add some, a lot, or no specificity:

```html
<main id="myContent">
  <h1>Text</h1>
</main>
```

```css
#myContent h1 { color: green; /* 1-0-1 */}
[id="myContent"] h1 { color: yellow; /* 0-1-1 */}
:where(#myContent) h1 { color: blue;  /* 0-0-1 */}
```

No matter the order, the heading will be green because that rule is most specific.

#### Reducing ID specificity

Specificity is based on the form of a selector.  Including the `id` of an element as an attribute selector rather than an id selector is a good way to make an element more specific without adding an overabundance of specificity. In the previous example, the selector `[id="myContent"]` counts as an attribute selector for the purpose of determining the selector's specificity, even though it selects an ID.

You can also include the `id`, or any part of a selector, as a parameter in the `:where()` specificity-adjustment pseudo class if need to make a selector more specific but don't want to add any specificity at all. 

### Increasing specifity by duplicating selectors

As a special case for increasing specificity duplicating weights from the _CLASS_ or _ID_ columns. Duplicating simple selectors will increase specificity when overriding very specific selectors over which you have no control. 

```css
#myId#myId#myId span { /* 3-0-1 */}
.myClass.myClass.myClass span { /* 0-3-1 */ }
```

Use this sparingly, if at all. If using selector duplication, always comment your CSS.

By using `:is()` and `:not()` you can increase specificity even if you can't add an `id` to a parent element:

```css
:not(#fakeID#fakeId#fakeID) span { /* 3-0-1 */ }
:is(#fakeID#fakeId#fakeID, span) { /* 3-0-0 */ }
```

### Precedence over 3rd party CSS

Leveraging cascade layers is the standard way of enabling one set of styles to take precedence over another set of styles; cascade layers enable this without using specificity! Normal (not important) author styles imported into cascade layers have lower precedence than unlayered author styles. 

If styles are coming from a stylesheet you can't edit or don't understand and you need to override styles, a strategy is to import the styles you don't control into a cascade layer. Styles in subsequently declared layers take precendence, with unlayered styles having precedence over all layered styles from the same origin.

When two selectors from different layers match the same element, origin and importance take precendence; the specificity of the selector in the losing stylesheet is irrelevant.

```html
<style>
  @import TW.css layer();
  p, p * {
    font-size: 1rem;
  }
</style>
```

In this example, all paragraph text, included nested content, will be `1rem` no matter how many class names the paragraphs have that match the TW stylesheet.

### Avoiding and overriding `!important`

The best solution is to not use `!important`. The above explanations on specificity should be helpful in avoiding using the flag, and removing it altogether when encountered. 

To remove the perceived need for `!important`, you can 1) increase the specifity of the selector of the formerly important declaration so it is greater than other declarations, 2) give it the same specificity and put it after the declaration it is meant to override, 3) reduce the specificity of the selector you are trying to override. These methods are all covered above. 
 
When unable to remove `!important` flags from an authors style sheet, the only solution to overriding the important styles is by using `!important`. Creating a [cascade layer](../@layer/) of important declaration overrides is an excellent solution. Two ways of doing this include:

Method #1

  1. Create a separate, short style sheet containing only important declarations specifically overriding any important declarations you were unable to remove. 
  2. Import this stylesheet as the first import in your CSS using `layer()`, including the `@import` before linking to other stylesheets to be certain the important overrides is imported as the first layer. 

```html
<style>
  @import importantOverrides.css layer();
</style>
````

Method #2

1. At the beginning of your stylesheet declarations, create a named cascade layer:

```css
@layer importantOverrides;
```
  
2. Each time you need to override an important declaration, declare it within the named layer. Only declare important rules within the layer. 
  
 ```css
 [id="myElement] p {
   /* normal styles here */
 }
 @layer importantOverrides {
    [id="myElement] p {
      /* important style here */;
    }
 }
```
  
The specificity of the selector of the important style within the layer can be low, as long as it matches the element you are trying to override. Normal layers should be declared outside the layer as layered styles have lower precedence than unlayered styles.
  
### Tree proximity ignorance

The proximity of an element to other elements that are referenced in a given selector has no impact on specificity. 

```css
body h1 {
  color: green;
}

html h1 {
  color: purple;
}
```

The `h1` elements will be purples because when declarations have the same specificity, the last declared selector has precedence.

### Directly targeted elements vs. inherited styles

Styles for a directly targeted element will always take precedence over inherited styles, regardless of the specificity of the inherited rule. Given the following CSS and HTML:

```css
#parent {
  color: green;
}

h1 {
  color: purple;
}
```

```html
<html>
  <body id="parent">
    <h1>Here is a title!</h1>
  </body>
</html>
```

The `h1` will be purple because the `h1` selector targets the element specifically, while the green is inherited from the `#parent` declarations.

## Examples

### Basic example

```css
#myElement input.myClass { color: red; } /* 1-1-1 */
input[type="password"]:required { color: blue; } /* 0-2-1 */
html body main input { color: green; }  /* 0-0-4 */
```

If the above selectors all target the same input, the input will be red, as the first declaration has the highest value in the _ID_ column. 

The last selector has four type components. While it has the highest integer value, no matter how many type components are included, even if there were 150, type components never have precedence over a class selectors. The column values are compared starting from the left and moving right when column values are equal.

If we convert the id selector to an attribute selector, the first two selectors have the same specificity:

```css
[id="myElement"] input.myClass { color: red; }   /* 0-2-1 */
input[type="password"]:required { color: blue; } /* 0-2-1 */
```

When multiple declarations have equal specificity, the last declaration found in the CSS is applied to the element. Specificity only applies when the same element is targeted by multiple declarations in a cascade layer or origin. As per CSS rules, [directly targeted elements](#directly_targeted_elements_vs._inherited_styles) will always take precedence over rules which an element inherits from its ancestor.

> **Note:** [Proximity of elements](#tree_proximity_ignorance) in the document tree has no effect on the specificity.

> **Note:** Specificity only matters for declarations of the same importance and same origin and cascade layer. If matching selectors are in different origins, the [cascade](/en-US/docs/Web/CSS/Cascade) determines which declaration takes precedence.  

When two selectors in the the same cascade layer and origin have the same specificity, proximity is important; the last selector wins.

For more information, visit: ["Specificity" in "Cascade and inheritance"](/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#specificity_2), you can also visit: [SpeciFISHity](https://specifishity.com)

## Specifications

{{Specifications}}

## See also

- Specificity Calculator: An interactive website to test and understand your own CSS rules - <https://specificity.keegan.st/>
- CSS4 Selectors Specificity - [http://www.w3.org/TR/selectors/#specificity](https://www.w3.org/TR/selectors/#specificity)
- {{CSS_Key_Concepts}}
- [_ID-CLASS-TYPE_ exercise](https://estelle.github.io/CSS/selectors/exercises/specificity.html) a specificity quiz

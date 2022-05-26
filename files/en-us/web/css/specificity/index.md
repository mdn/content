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

**Specificity** is the algorithm by which browsers decide which CSS property style declarations are the most relevant to an element and, therefore, which property values will be applied. The specificity algorithm calculates [CSS selector](/en-US/docs/Web/CSS/Reference#selectors) weight to determine which rule from competing style declarations gets applied to an element. 

[Cascade origin and importance](/en-US/docs/Web/CSS/Cascade) is applied before the specificity algorithm. In other words, for competing property declarations, specifity is only compared between selectors from the one [cascade origin and layer](/en-US/docs/Web/CSS/@layer) that has precedence for the property. Only when origin, importance, and specificity are equal, does order of appearance become relevant.

## How is specificity calculated?

Specificity is a weight that is applied to a given CSS declaration, determined by the number of [selectors of each weight category](#selector-weight-categories) in the matching selector. If there are two or more declarations providing different property values for the same element or pseudo-element, the declaration value in the style block having the matching selector with the greatest algorithmic weight gets applied.

### Selector weight categories

Selector specificity is a 3-column value: _ID - CLASS - TYPE_. The three columns are created from the number of selector components for each selector weight category in the selectors matching the element. 

The following list of selectors decrease by specificity:

- ID Column
  - : Includes only [ID selectors](/en-US/docs/Web/CSS/ID_selectors), such as `#example`
- CLASS Column
  - : Includes [class selectors](/en-US/docs/Web/CSS/Class_selectors), such as `.myClass`, attributes selectors like `[type="radio"]` and `[lang|="fr"]`, and pseudo-classes, such as `:hover`, `:nth-of-type(3n)`, and `:required`.
- TYPE column
  - : Includes [type selectors](/en-US/docs/Web/CSS/Type_selectors), such as `p`, `h1`, and `td`,  and pseudo-elements like `::before`, `::placeholder`, and all other selectors with double colon notation.
- No value
  - : The Universal selector ({{CSSxRef("Universal_selectors", "*")}}), and {{CSSxRef(":where", ":where()")}} and its parameters, have a specificity of 0. They aren't counted in the equation, but they do match elements.

Combinators, such as {{CSSxRef("Adjacent_sibling_combinator", "+")}}, {{CSSxRef("Child_combinator", "&gt;")}}, {{CSSxRef("General_sibling_combinator", "~")}}, [" "](/en-US/docs/Web/CSS/Descendant_combinator), and {{CSSxRef("Column_combinator", "||")}} may make a selector more specific, but don't add value to the specificy value. 

The negation pseudo-class, {{CSSxRef(":not", ":not()")}},  itself has no weight. Neither does the {{CSSxRef(":is", ":is()")}} pseudo-class. The parameters in these selectors, however, do. The [`:not()` and `:is()` exceptions](#the-is-and-not-exceptions) are discussed below.

#### Basic example

```css
:root #myApp input:required,
input:focus {
  color: blue;
}
```

The specificity for the required input is `1-2-1`, based on one ID, two pseudo-classes, and one element type. The second selector in theAll other inputs only match when receiving focus with a specificity of `0-1-1`, for the `:focus` pseudo-class (0-1-0) and the `input` type (0-1-1). 

### 3-column comparison

Once the specificity value of the relevant selectors ad determined, the number of selector components in each column are compared, from left to right.

The first column is the number of `id` components in each selector. The number in the _ID_ columns of competing selectors are compared. The selector with the greater value in the _ID_ column wins no matter what the values are in the other columns. 

```css
#myApp #myElement {/* 2-0-0 */}
#myElement#myElement#myElement {/* 3-0-0 - WINS!! */}
```

If there is an equal number of _ID_ values, the _CLASS_ column is compared. The _CLASS_ column is the number of class names, attribute selectors, and pseudoclasses in the selector. When the _id_ columns are equal, the selector with the greater number of _CLASS_ value wins, no matter the value in the _type_ column. 

If the values in the _CLASS_ and _ID_ columns are equal, the _TYPE_ column becomes relevant. The _TYPE_ column is the number of element types and pseudoelements in the selector. When the first two columns have the same value, the selector with the greater number of _TYPE_ values wins. 

```css
body input.myClass {/* 0-1-2 - WINS because CLASS column is greater */}
html body main input  {/* 0-0-4 */}
```

If there are equal values in all three columns, the proximity rule comes into play, wherein the last declared style has precedence. 

```css
input.myClass {/* 0-1-1 */}
:root input   {/* 0-1-1  WINS because it comes later */}
```

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

Inline styles added to an element (e.g., `style="font-weight: bold;"`) always overwrite any normal styles in author stylesheets, and thus can be thought of as having the highest specificity.

### The !important exception

Important declarations override any other declarations within the same cascade layer and origin. Although technically [`!important`](/en-US/docs/Web/CSS/important) has nothing to do with specificity, it interacts directly with specificity and the cascade. It reverses the [cascade](/en-US/docs/Web/CSS/Cascade) order of stylesheets. Using `!important` is considered a **bad practice** for overriding specificity, and should be avoided for this purpose. When two conflicting declarations from the same origin and cascade layer with the `!important` rule are applied to the same element, the declaration with a greater specificity will be applied.

**Recommended guidelines:**

- **Always** look for a way to use specificity before even considering `!important`
- **Always** leverage the cascade with @layers instead of using `!important` when overriding foreign CSS (from external libraries, like Bootstrap or normalize.css).
- **Never** use `!important` when you're writing a plugin/mashup.
- **Never** use `!important` on site-wide CSS.
- **Always** comment your CSS when using `!important` so future code maintainers know why it was important and know not to override it.

**Instead of using `!important`, consider:**

1. Make better use of the CSS cascade
2. Use more specific rules. By indicating one or more elements before the element you're selecting, the rule becomes more specific and gets higher priority:

    ```html
    <div id="myId">
      <span>Text</span>
    </div>
    ```

    ```css
    #myId span { color: green; }
    [id="myId"] span { color: yellow; }
    div span { color: blue; }
    span { color: red; }
    ```

    No matter the order, text will be green because that rule is most specific. (Also, the rule for blue overwrites the rule for red, notwithstanding the order of the rules)

3. As a special case for (2), duplicating simple selectors will increase specificity when overriding very specific selectors over which you have no control.

    ```css
    #myId#myId span { color: purple; }
    .myClass.myClass span { color: orange; }
    ```
4. Import stylesheets into cascade layers. If styles are coming from a stylesheet you can't edit or don't understand, import it into a cascade layer. When two selectors from different layers match the same element, origin and importance take precendence; the specificity of the selector in the losing stylesheet is irrelevant.

```html
<style>
  @import TW.css layer();
  p, p * {
    font-size: 1rem;
  }
</style>
```

In this example, all paragraph text will be 1rem no matter how many styles from the TW stylesheet the paragraphs and elements nested inside.

#### How !important can be used:

##### A) Overriding inline styles

Your global CSS file that sets visual aspects of your site globally may be overwritten by inline styles defined directly on individual elements. Both inline styles using the HTML [`style`](/en-US/docs/Web/HTML/Global_attributes/style) attribute and `!important` are considered bad practice, but sometimes you need the latter to override the former.

In this case, you could set certain styles in your global CSS file as !important, thus overriding inline styles set directly on elements.

```html
<div class="foo" style="color: red;">What color am I?</div>
```

```css
.foo[style*="color: red"] {
  color: firebrick !important;
}
```

Many JavaScript frameworks and libraries add inline styles. Using `!important` with a very targeted selector is one way to override these inline styles. Make sure to include a comment with every inclusion of the `!important` flag so code maintainers understand why a CSS anti-pattern was used.

##### B) Overriding high specificity

```css
#someElement p {
  color: blue;
}

p.awesome {
  color: red !important; /* there are better options! keep reading */
}
```

How do you make `awesome` paragraphs always turn red, even ones inside `#someElement`, especially when `id="someElement"`  is actually a randomly generated [`id`](/en-US/docs/Web/HTML/Global_attributes/id) in a 3rd party widget you can't control? 

Without `!important`, the first rule will have more specificity and will win over the second rule. However, there are ways to override styles you can't control, as discussed in [Instead of using `!important`]()

#### How to override `!important`

A) The best solution is to not use `!important` in your code base; remove them when found. If possible, rewrite the original rule to avoid the use of `!important` altogether. Increase the specifity of the selector of the formerly important declaration so it is greater than other declarations, or give it the same specificity, and put it after the declaration it is meant to override.

```css
[id="someElement"] p {
  color: blue;
}

p.awesome {
  color: red;
}
```

Including an id as part of an attribute selector instead of as an id selector gives it the same specificity as a class. Both selectors above now have the same weight. In a specificity tie, the last rule defined within the same origin layer wins.
 

B) Creating a [cascade layer](../@layer/) of important declaration overrides is an excellent solution when unable to remove `!important` flags from a CSS code base. Two ways of doing this include:

Method #1

  1. Create a separate, short style sheet containing only important declarations specifically overriding any important declarations you were unable to remove in step A. 
  2. Import this stylesheet as the first import in your CSS using `layer()`, including the `@import` before linking to other stylesheets to be certain the important overrides is imported as the first layer. 

```html
<style>
  @import importantOverrides.css layer();
</style>
````

Method #2

  1. At the beginning of your stylesheet declarations, create a named cascade layer:

  ```css
<style>
  @import importantOverrides.css layer();
</style>
````
  
  Create a separate, short style sheet containing only important declarations specifically overriding any important declarations you were unable to remove in step A. 
  2. Import this stylesheet as the first import in your CSS using `layer()`, including the `@import` before linking to other stylesheets to be certain the important overrides is imported as the first layer. 

The cascade dictates important declarations in the first author layer take precedence over important declarations in subsequent layers, no matter the specificity of the selectors in either layer.

B) If unable to use cascade layers, add another CSS rule with `!important`, and either give the selector a higher specificity (adding a tag, id or class to the selector), or add a CSS rule with the same selector at a later point than the existing one. This works because in a specificity tie, the last rule defined wins.

Some examples with a higher specificity:

```css
table td    { height: 50px !important; }
.myTable td { height: 50px !important; }
#myTable td { height: 50px !important; }
```

B) Or add the same selector after the existing one:

```css
td { height: 50px !important; }
```

### The :is() and :not() exceptions

The matches-any pseudo-class {{CSSxRef(":is", ":is()")}} {{Experimental_Inline}} and the negation pseudo-class {{CSSxRef(":not", ":not()")}} are _not_ considered a pseudo-class in the specificity calculation. But selectors placed into the pseudo-class count as normal selectors when determining the count of [selector types](#selector_types).

This chunk of CSS ...

```css
div.outer p {
  color: orange;
}

div:not(.outer) p {
  color: blueviolet;
}
```

... when used with the following HTML ...

```html
<div class="outer">
  <p>This is in the outer div.</p>
  <div class="inner">
    <p>This text is in the inner div.</p>
  </div>
</div>
```

... appears on the screen like this:

{{EmbedLiveSample("The_is_and_not_exceptions")}}

### The :where() exception

The specificity-adjustment pseudo-class {{CSSxRef(":where", ":where()")}} {{Experimental_Inline}} always has its specificity replaced with zero.

This chunk of CSS ...

```css
div:where(.outer) p {
  color: orange;
}

div p {
  color: blueviolet;
}
```

```css hidden
#no-where-support {
  margin: 0.5em;
  border: 1px solid red;
}

#no-where-support:where(*) {
  display: none !important;
}
```

... when used with the following HTML ...

```html hidden
<div id="no-where-support">
⚠️ Your browser doesn't support the <code><a href="https://developer.mozilla.org/docs/Web/CSS/:where" target="_top">:where()</a></code> pseudo-class.
</div>
```

```html
<div class="outer">
  <p>This is in the outer div.</p>
  <div class="inner">
    <p>This text is in the inner div.</p>
  </div>
</div>
```

... appears on the screen like this:

{{EmbedLiveSample("The_where_exception")}}

### Form-based specificity

Specificity is based on the form of a selector. In the following case, the selector `*[id="foo"]` counts as an attribute selector for the purpose of determining the selector's specificity, even though it selects an ID.

The following CSS styles ...

```css
*#foo {
  color: green;
}

*[id="foo"] {
  color: purple;
}
```

... when used with this markup ...

```html
<p id="foo">I am a sample text.</p>
```

... end up looking like this:

{{EmbedLiveSample("Form-based_specificity")}}

This is because it matches the same element but the ID selector has a higher specificity.

### Tree proximity ignorance

The proximity of an element to other elements that are referenced in a given selector has no impact on specificity. The following style declaration ...

```css
body h1 {
  color: green;
}

html h1 {
  color: purple;
}
```

... with the following HTML ...

```html
<html>
  <body>
    <h1>Here is a title!</h1>
  </body>
</html>
```

... will render as:

{{EmbedLiveSample("Tree_proximity_ignorance")}}

This is because the two declarations have equal [selector type](#selector_types) counts, but the `html h1` selector is declared last.

### Directly targeted elements vs. inherited styles

Styles for a directly targeted element will always take precedence over inherited styles, regardless of the specificity of the inherited rule. This CSS ...

```css
#parent {
  color: green;
}

h1 {
  color: purple;
}
```

... with the following HTML ...

```html
<html>
  <body id="parent">
    <h1>Here is a title!</h1>
  </body>
</html>
```

... will also render as:

{{EmbedLiveSample("Directly_targeted_elements_vs._inherited_styles")}}

This is because the `h1` selector targets the element specifically, but the green selector is only inherited from its parent.

## Specifications

{{Specifications}}

## See also

- Specificity Calculator: An interactive website to test and understand your own CSS rules - <https://specificity.keegan.st/>
- CSS4 Selectors Specificity - [http://www.w3.org/TR/selectors/#specificity](https://www.w3.org/TR/selectors/#specificity)
- {{CSS_Key_Concepts}}
- [_ID-CLASS-TYPE_ exercise](https://estelle.github.io/CSS/selectors/exercises/specificity.html) a specificity quiz

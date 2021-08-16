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

**Specificity** is the means by which browsers decide which CSS property values are the most relevant to an element and, therefore, will be applied. Specificity is based on the matching rules which are composed of different sorts of [CSS selectors](/en-US/docs/Web/CSS/Reference#Selectors).

## How is specificity calculated?

Specificity is a weight that is applied to a given CSS declaration, determined by the number of each [selector type](#selector_types) in the matching selector. When multiple declarations have equal specificity, the last declaration found in the CSS is applied to the element. Specificity only applies when the same element is targeted by multiple declarations. As per CSS rules, [directly targeted elements](#directly_targeted_elements_vs._inherited_styles) will always take precedence over rules which an element inherits from its ancestor.

> **Note:** [Proximity of elements](#tree_proximity_ignorance) in the document tree has no effect on the specificity.

### Selector Types

The following list of selector types increases by specificity:

1.  [Type selectors](/en-US/docs/Web/CSS/Type_selectors) (e.g., `h1`) and pseudo-elements (e.g., `::before`).
2.  [Class selectors](/en-US/docs/Web/CSS/Class_selectors) (e.g., `.example`), attributes selectors (e.g., `[type="radio"]`) and pseudo-classes (e.g., `:hover`).
3.  [ID selectors](/en-US/docs/Web/CSS/ID_selectors) (e.g., `#example`).

Universal selector ({{CSSxRef("Universal_selectors", "*")}}), combinators ({{CSSxRef("Adjacent_sibling_combinator", "+")}}, {{CSSxRef("Child_combinator", "&gt;")}}, {{CSSxRef("General_sibling_combinator", "~")}}, ['` `'](/en-US/docs/Web/CSS/Descendant_combinator), {{CSSxRef("Column_combinator", "||")}}) and negation pseudo-class ({{CSSxRef(":not", ":not()")}}) have no effect on specificity. (The selectors declared _inside_ `:not()` do, however.)

For more information, visit: ["Specificity" in "Cascade and inheritance"](/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#Specificity_2), you can also visit: <https://specifishity.com>

Inline styles added to an element (e.g., `style="font-weight: bold;"`) always overwrite any styles in external stylesheets, and thus can be thought of as having the highest specificity.

### The !important exception

When an `important` rule is used on a style declaration, this declaration overrides any other declarations. Although technically `!important` has nothing to do with specificity, it interacts directly with it. Using `!important,` however, is **bad practice** and should be avoided because it makes debugging more difficult by breaking the natural [cascading](/en-US/docs/Web/CSS/Cascade) in your stylesheets. When two conflicting declarations with the `!important` rule are applied to the same element, the declaration with a greater specificity will be applied.

**Some rules of thumb:**

- **Always** look for a way to use specificity before even considering `!important`
- **Only** use `!important` on page-specific CSS that overrides foreign CSS (from external libraries, like Bootstrap or normalize.css).
- **Never** use `!important` when you're writing a plugin/mashup.
- **Never** use `!important` on site-wide CSS.

**Instead of using `!important`, consider:**

1.  Make better use of the CSS cascade
2.  Use more specific rules. By indicating one or more elements before the element you're selecting, the rule becomes more specific and gets higher priority:

    ```html
    <div id="test">
      <span>Text</span>
    </div>
    ```

    ```css
    div#test span { color: green; }
    div span { color: blue; }
    span { color: red; }
    ```

    No matter the order, text will be green because that rule is most specific. (Also, the rule for blue overwrites the rule for red, notwithstanding the order of the rules)

3.  As a nonsense special case for (2), duplicate simple selectors to increase specificity when you have nothing more to specify.

    ```css
    #myId#myId span { color: yellow; }
    .myClass.myClass span { color: orange; }
    ```

#### How !important can be used:

##### A) Overriding inline styles

Your global CSS file that sets visual aspects of your site globally may be overwritten by inline styles defined directly on individual elements. Both inline styles and !important are considered very bad practice, but sometimes you need the latter to override the former.

In this case, you could set certain styles in your global CSS file as !important, thus overriding inline styles set directly on elements.

```html
<div class="foo" style="color: red;">What color am I?</div>
```

```css
.foo[style*="color: red"] {
  color: firebrick !important;
}
```

Many JavaScript frameworks and libraries add inline styles. Using `!important` with a very targeted selector is one way to override these inline styles.

##### B) Overriding high specificity

```css
#someElement p {
  color: blue;
}

p.awesome {
  color: red;
}
```

How do you make `awesome` paragraphs always turn red, even ones inside `#someElement`? Without `!important`, the first rule will have more specificity and will win over the second rule.

#### How to override `!important`

A) Add another CSS rule with `!important`, and either give the selector a higher specificity (adding a tag, id or class to the selector), or add a CSS rule with the same selector at a later point than the existing one. This works because in a specificity tie, the last rule defined wins.

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

C) Or, preferably, rewrite the original rule to avoid the use of `!important` altogether.

```css
[id="someElement"] p {
  color: blue;
}

p.awesome {
  color: red;
}
```

Including an id as part of an attribute selector instead of as an id selector gives it the same specificity as a class. Both selectors above now have the same weight. In a specificity tie, the last rule defined wins.

#### For more information, visit:

- <https://stackoverflow.com/questions/3706819/what-are-the-implications-of-using-important-in-css>
- <https://stackoverflow.com/questions/9245353/what-does-important-in-css-mean>
- <https://stackoverflow.com/questions/5701149/when-to-use-important-property-in-css>
- <https://stackoverflow.com/questions/11178673/how-to-override-important>
- <https://stackoverflow.com/questions/2042497/when-to-use-important-to-save-the-day-when-working-with-css>

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

| Specification                                                                                                                | Status                               | Comment                                                                               |
| ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ------------------------------------------------------------------------------------- |
| {{SpecName("CSS4 Selectors", "#specificity-rules", "Calculating a selector's specificity")}} | {{Spec2("CSS4 Selectors")}} | Add the specificity adjustment selector {{CSSxRef(":where", ":where()")}}. |
| {{SpecName("CSS3 Selectors", "#specificity", "Calculating a selector's specificity")}}         | {{Spec2("CSS3 Selectors")}} | Add [pseudo-elements](/en-US/docs/Web/CSS/Pseudo-elements).                           |
| {{SpecName("CSS2.1", "cascade.html#specificity", "Calculating a selector's specificity")}}     | {{Spec2("CSS2.1")}}             | Add [pseudo-classes](/en-US/docs/Web/CSS/Pseudo-classes).                             |
| {{SpecName("CSS1", "#cascading-order", "Cascading order")}}                                             | {{Spec2("CSS1")}}             | Initial definition.                                                                   |

## See also

- Specificity Calculator: An interactive website to test and understand your own CSS rules - <https://specificity.keegan.st/>
- CSS3 Selectors Specificity - [http://www.w3.org/TR/selectors/#specificity](https://www.w3.org/TR/selectors/#specificity)
- {{CSS_Key_Concepts}}

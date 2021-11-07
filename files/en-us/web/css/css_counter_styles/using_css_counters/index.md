---
title: Using CSS counters
slug: Web/CSS/CSS_Counter_Styles/Using_CSS_counters
tags:
  - Advanced
  - CSS
  - CSS Counter Styles
  - Guide
  - Layout
  - Reference
  - Web
---
{{CSSRef}}

**CSS counters** let you adjust the appearance of content based on its location in a document. For example, you can use counters to automatically number the headings in a webpage. Counters are, in essence, variables maintained by CSS whose values may be incremented by CSS rules to track how many times they're used.

## Using counters

### Manipulating a counter's value

To use a CSS counter, it must first be initialized to a value with the {{cssxref("counter-reset")}} property (`0` by default). The same property can also be used to change its value to any specific number. Once initialized, a counter's value can be increased or decreased with {{cssxref("counter-increment")}}. The counter's name must not be "none", "inherit", or "initial"; otherwise the declaration is ignored.

### Displaying a counter

The value of a counter can be displayed using either the {{cssxref("counter()", "counter()")}} or {{cssxref("counters()", "counters()")}} function in a {{cssxref("content")}} property.

The {{cssxref("counter()")}} function has two forms: 'counter(_name_)' or 'counter(_name_, _style_)'. The generated text is the value of the innermost counter of the given name in scope at the given pseudo-element.The counter is rendered in the specified style (`decimal` by default).

The {{cssxref("counters()")}} function also has two forms: 'counters(_name_, _string_)' or 'counters(_name_, _string_, _style_)'. The generated text is the value of all counters with the given name in scope at the given pseudo-element, from outermost to innermost, separated by the specified string. The counters are rendered in the specified style (`decimal` by default).

### Basic example

This example adds "Section \[the value of the counter]:" to the beginning of each heading.

#### CSS

```css
body {
  counter-reset: section;                       /* Set a counter named 'section', and its initial value is 0. */
}

h3::before {
  counter-increment: section;                   /* Increment the value of section counter by 1 */
  content: "Section " counter(section) ": ";    /* Display the word 'Section ', the value of
                                                   section counter, and a colon before the content
                                                   of each h3 */
}
```

#### HTML

```html
<h3>Introduction</h3>
<h3>Body</h3>
<h3>Conclusion</h3>
```

#### Result

{{EmbedLiveSample("Basic_example", "100%", 150)}}

### A more sophisticated example

A counter must not necessarily be shown every time is incremented. This example counts all links, however the counter is shown only when a link has no text, as a convenient replacement.

#### CSS

```css
:root {
  counter-reset: link;
}

a[href] {
  counter-increment: link;
}

a[href]:empty::after {
  content: "[" counter(link) "]";
}
```

#### HTML

```html
<p>See <a href="https://www.mozilla.org/"></a></p>
<p>Do not forget to <a href="contact-me.html">leave a message</a>!</p>
<p>See also <a href="https://developer.mozilla.org/"></a></p>
```

#### Result

{{EmbedLiveSample("A_more_sophisticated_example", "100%", 150)}}

## Nesting counters

A CSS counter can be especially useful for making outlined lists, because a new instance of the counter is automatically created in child elements. Using the {{cssxref("counters()")}} function, separating text can be inserted between different levels of nested counters.

### Example of a nested counter

#### CSS

```css
ol {
  counter-reset: section;                /* Creates a new instance of the
                                            section counter with each ol
                                            element */
  list-style-type: none;
}

li::before {
  counter-increment: section;            /* Increments only this instance
                                            of the section counter */
  content: counters(section, ".") " ";   /* Combines the values of all instances
                                            of the section counter, separated
                                            by a period */
}
```

#### HTML

```html
<ol>
  <li>item</li>          <!-- 1     -->
  <li>item               <!-- 2     -->
    <ol>
      <li>item</li>      <!-- 2.1   -->
      <li>item</li>      <!-- 2.2   -->
      <li>item           <!-- 2.3   -->
        <ol>
          <li>item</li>  <!-- 2.3.1 -->
          <li>item</li>  <!-- 2.3.2 -->
        </ol>
        <ol>
          <li>item</li>  <!-- 2.3.1 -->
          <li>item</li>  <!-- 2.3.2 -->
          <li>item</li>  <!-- 2.3.3 -->
        </ol>
      </li>
      <li>item</li>      <!-- 2.4   -->
    </ol>
  </li>
  <li>item</li>          <!-- 3     -->
  <li>item</li>          <!-- 4     -->
</ol>
<ol>
  <li>item</li>          <!-- 1     -->
  <li>item</li>          <!-- 2     -->
</ol>
```

#### Result

{{EmbedLiveSample("Example_of_a_nested_counter", "100%", 350)}}

## Specifications

| Specification                                                                        | Status                           | Comment            |
| ------------------------------------------------------------------------------------ | -------------------------------- | ------------------ |
| {{SpecName("CSS3 Lists", "#auto-numbering", "CSS Counters")}}     | {{Spec2("CSS3 Lists")}} | No change          |
| {{SpecName("CSS2.1", "generate.html#counters", "CSS Counters")}} | {{Spec2("CSS2.1")}}         | Initial definition |

## See also

- {{cssxref("counter-reset")}}
- {{cssxref("counter-set")}}
- {{cssxref("counter-increment")}}
- {{cssxref("@counter-style")}}

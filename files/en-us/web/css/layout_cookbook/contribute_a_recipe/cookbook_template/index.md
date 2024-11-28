---
title: Cookbook template
slug: Web/CSS/Layout_cookbook/Contribute_a_recipe/Cookbook_template
page-type: guide
---

{{CSSRef}}

> [!NOTE]
> This is a template page for a CSS Cookbook page. Please use this as a raw template when you create a new cookbook page.
> _Comment in italics are information about how to use part of the template._

_Description of the problem this recipe solves or the pattern you are demonstrating._

## Requirements

_What does this pattern need to include, or what problems does it need to solve? List that here._

## Recipe

_Change the example code. The last parameter is the live example height, which you can change as needed. Mention that you can click "Play" in code blocks to edit the example in the MDN Playground._

```html live-sample___center-example
<div class="container">
  <div class="item">I am centered!</div>
</div>
```

```css live-sample___center-example
.container {
  border: 2px solid rgb(75 70 74);
  border-radius: 0.5em;

  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.item {
  border: 2px solid rgb(95 97 110);
  border-radius: 0.5em;
  padding: 20px;

  width: 10em;
}
```

{{EmbedLiveSample("center-example", "", "250px")}}

## Choices made

_Explain your decisions when creating the pattern. Why did you choose a certain method? If you want to add an additional example here — for example a version with fallbacks, please do. This section is deliberately loose as patterns range from the very simple to more complex._

## Useful fallbacks or alternative methods

_If there are useful alternative methods for building the recipe, or fallback recipes to use if you have to support non-supporting browsers, include them in separate sections down here._

## Accessibility concerns

_Include this is there are any specific things to watch out for in regard to accessibility. If not relevant for your pattern this can be omitted._

## See also

- _Links of link of related properties: {{Cssxref("example-property")}}_
- _Links to article showing how to use the property in context: "Using … article"_
- _Very good external links. Don't be afraid of external links, but they should be outstanding, and not only mention minor details._

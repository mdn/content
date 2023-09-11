---
title: Accessibility tree
slug: Glossary/Accessibility_tree
page-type: glossary-definition
---

{{GlossarySidebar}}

The **accessibility tree** contains {{Glossary("accessibility")}}-related information for most HTML elements.

Browsers convert markup into an internal representation called the _[DOM tree](/en-US/docs/Web/API/Document_object_model/How_to_create_a_DOM_tree)_. The DOM tree contains objects representing all the markup's elements, attributes, and text nodes. Browsers then create an accessibility tree based on the DOM tree, which is used by platform-specific Accessibility APIs to provide a representation that can be understood by assistive technologies, such as screen readers.

There are four properties in an accessibility tree object:

- **name**
  - : How can we refer to this thing? For instance, a link with the text "Read more" will have "Read more" as its name (find more on how names are computed in the [Accessible Name and Description Computation spec](https://www.w3.org/TR/accname-1.1/)).
- **description**
  - : How do we describe this thing, if we want to provide more description beyond the name? The description of a table could explain what kind of information the table contains.
- [**role**](/en-US/docs/Web/Accessibility/ARIA/Roles)
  - : What kind of thing is it? For example, is it a button, a nav bar, or a list of items?
- **state**
  - : Does it have a state? Examples include checked or unchecked checkbox states and collapsed or expanded states for the [`<summary>`](/en-US/docs/Web/HTML/Element/summary) element.

Additionally, the accessibility tree often contains information on what can be done with an element: a link can be _followed_, a text input can be _typed into_, etc.

While still in draft form within the Web Incubator Community Group as of April 2022, the **[Accessibility Object Model](https://wicg.github.io/aom/explainer.html) (AOM)** intends to incubate APIs that make it easier to express accessibility semantics and potentially allow read access to the computed accessibility tree.

## See also

- [Glossary](/en-US/docs/Glossary)

  - {{Glossary("Accessibility")}}
  - {{Glossary("ARIA")}}

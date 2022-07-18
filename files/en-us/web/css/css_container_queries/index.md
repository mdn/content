---
title: CSS Container Queries
slug: Web/CSS/CSS_Container_Queries
tags:
  - CSS
  - CSS Containment
  - CSS Container Queries
  - Guide
  - Paint
  - Responsive Design
---
{{CSSRef}}

> **Note:** This document is an explanation of an early stage specification that is attracting a lot of interest from web developers. The examples and syntax below should be seen as an explainer to an evolving specification, in order to encourage experimentation and feedback. Once the specification matures, this will be the location of the full MDN documentation for container queries. Last updated on 15 September 2021 to add details of the new properties `container-type`, `container-name`, and `container`.

## What problem do container queries solve?

When creating [a responsive design](/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design) you often use a media query to change the document layout based on the size of the viewport.

However, many designs have common components that change layout depending on the available width of their container. This may not always relate to the size of the viewport, but instead relate to where in the layout the component is placed.

For example, the following component might be displayed in a narrow or wide column in the site layout. If there is space it displays as two columns, if not we want to display it stacked.

![Image of two card components one displayed in two columns, the other stacked](demo.jpg)

It's the same component, doing the same job, however to achieve the different layouts we currently would need to identify the component in some way—perhaps by adding a class or targeting the element with a selector which looks at where it is in the document structure.

This doesn't quite achieve what media queries do for our entire layout however. Media queries give us the ability to size things based on ranges. When we add a class or target the element we decide that when the object is in the sidebar it _must_ use the stacked layout. In terms of available space however, it may well be that on large screens the object in the sidebar would have enough space to display in the side-by-side layout.

It is this situation that container queries would solve. Instead of looking at the viewport size, we can look at the container size and make our layout adjustments according to the space in the container. And, it looks as if this most frequently requested of web features, is becoming a possibility.

## The container queries proposal

The container queries specification is to become part of {{cssxref("CSS_Containment", "CSS Containment")}}. The initial CSS Containment draft defined the {{cssxref("contain")}} property to allow for performance optimizations. It provides a way for web developers to isolate parts of the DOM and declare to the browser these are independent from the rest of the document.

The level 3 [draft specification](https://drafts.csswg.org/css-contain-3/) adds the `inline-size` and `block-size` keywords to `contain`.

In addition the draft specification proposes some new properties:

- `container-type`
  - : Defines an element as a **query container**. Descendants can query aspects of its sizing, layout, style and state.
- `container-name`
  - : Specifies a list of **query container names** for `@container` rules to use to filter which query containers are targeted.
- `container`:
  - : A shorthand property to set both `container-type` and `container-name`.

### `container-type`

The `container-type` property can have the following values:

- `size`
  - : Establishes a query container for dimensional queries on the block and inline axis. Applies layout, style, and size containment to the element.
- `inline-size`
  - : Establishes a query container for dimensional queries on the inline axis of the container. Applies layout, style, and inline-size containment to the element.
- `block-size`
  - : Establishes a query container for dimensional queries on the block axis of the container. Applies layout, style, and block-size containment to the element.
- `style`
  - : Establishes a query container for style queries.
- `state`
  - : Establishes a query container for state queries.

> **Note:** to understand what happens when you apply layout, style, and size containment to a box, see the documentation for {{cssxref("contain")}}.

#### Single-axis containment

Using `container-type: size` indicates to the browser that the size of this area is known in both dimensions.

However, we don't often know how big things are in both dimensions. When we use media queries, most of the time we care about the available width (or inline size). We define columns as a percentage or fraction of the space in that dimension. Therefore, container queries can use the `container-type` property to allow size to be indicated in one dimension only. This is described as single-axis containment.

The following CSS creates a container with containment on the inline axis only. The content can grow to as large as it needs to be on the block axis.

```css
.sidebar {
  container-type: inline-size;
}
```

### `container-type`

Adding the `container-type` property with a size value creates a **containment context** on that element. This means that the browser knows we might want to query this container later. You can then write a query which looks to this containment context rather than the viewport size, in order to make layout decisions for a component.

A container query is created using `@container`. This will query the nearest containment context. To cause the card to display as two columns only if the sidebar is wider than 700px, we use the following CSS:

```css
@container (min-width: 700px){
  .card {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
}
```

If other areas of the layout are also containment contexts then we can drop the component into those areas and it will respond to the relevant containment context. This makes the various components that we might create in our pattern library truly reusable, without us needing to know the context that they are in.

### `container-name`

The previous example allows a component to query the nearest containment context, which is likely the most common use case. Sometimes however, you might want to query another container. This is where the `container-name` property will be useful. When creating your query container with `container-type`, add the `container-name` property. This takes a {{cssxref("custom-ident")}}, in the same way that you might name a {{cssxref("grid-area")}}.

```css
.sidebar {
  container-type: inline-size;
  container-name: sidebar;
}
```

You can then target just that query container by adding the name to the container query:

```css
@container sidebar (min-width: 400px){
  .card {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
}
```

There are many things to be worked out, however this is the basic concept. The basic features as shown here can already be tested out in Chrome and Safari Technology Preview.

- Chrome: Go to `chrome://flags`, search for Container Queries and enable that flag.
- Safari Technology Preview: Enabled by default.

You can then take a look at [my demo](https://codepen.io/rachelandrew/pen/NWdaxde) showing a simple `inline-size` scenario, or [this growing collection of container queries demos](https://codepen.io/collection/XQrgJo).

## Share your feedback

This early stage of development is the perfect time to share your feedback on the specification as it develops. Specification author Miriam Suzanne is keeping [a list of open questions](https://css.oddbird.net/rwd/query/explainer/). Issues raised against the feature can be found in [a project](https://github.com/w3c/csswg-drafts/projects/18) on the CSS Working Group GitHub. If you have thoughts on any of these questions, or want to raise something new, please do!

It is always helpful to see use cases, particularly those that might not be solved by the current proposal. Any feedback will be very welcome and will help make the feature even better once in lands in release versions of browsers.

## Alternatives to container queries

Many container query cases can be solved, or at least partially solved, with existing technology. These solutions will remain important even as container queries make it into browsers, as fallbacks for those browsers that don't yet support the spec.

As already discussed, one solution for components that may occupy different locations, is to use a class or a selector that targets them based on document location.

Another solution is to rely on grid or flex layout. The component used in my demo could be laid out using flexbox, which would give it some ability to display as one or two columns based on available width. You don't have the ability to make larger layout changes using this method, however in many cases you can achieve an acceptable result. As container queries become available you could maintain the grid or flex version as the fallback for non-supporting browsers.

## See also

- [Editor's Draft CSS Containment Level 3](https://drafts.csswg.org/css-contain-3/)
- [Container Queries: a Quick Start Guide](https://www.oddbird.net/2021/04/05/containerqueries/)
- [Collection of Container Queries articles](https://github.com/sturobson/Awesome-Container-Queries)

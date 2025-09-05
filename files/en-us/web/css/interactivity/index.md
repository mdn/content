---
title: interactivity
slug: Web/CSS/interactivity
page-type: css-property
browser-compat: css.properties.interactivity
sidebar: cssref
---

The **`interactivity`** [CSS](/en-US/docs/Web/CSS) property determines whether an element and its descendants are _inert_ or not.

When an element is _inert_, it and all of its descendants become non-interactive. This means they cannot receive focus, be clicked, or be accessed by assistive technologies like screen readers.

## Syntax

```css
/* Keyword values */
interactivity: auto;
interactivity: inert;

/* Global values */
interactivity: inherit;
interactivity: initial;
interactivity: revert;
interactivity: revert-layer;
interactivity: unset;
```

The `interactivity` property is specified as one of the keyword values listed below.

### Values

- `auto`
  - : The element's inertness is determined by the host language. (This will usually mean the element is not inert.)
- `inert`
  - : The element is inert.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

Use the following to ensure that top-level modal dialogs become uninert by default:

```css
[inert] {
  interactivity: inert;
}

dialog:modal {
  interactivity: auto;
}
```

The `dialog:modal` selector above needs to be expanded for any other elements that escape inertness by default.

## Accessibility concerns

Use careful consideration for accessibility when applying the `inert` attribute. By default, there is no visual way to tell whether or not an element or its subtree is inert. As a web developer, it is your responsibility to clearly indicate the content parts that are active and those that are inert.

While providing visual and non-visual cues about content inertness, also remember that the visual viewport may contain only sections of content. Users may be zoomed in to a small section of content, or users may not be able to view the content at all. Inert sections not being obviously inert can lead to frustration and bad user experience.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Global attribute: `inert`](/en-US/docs/Web/HTML/Reference/Global_attributes/inert)
- {{domxref("HTMLElement.inert")}} HTML DOM property

---
title: Mobile accessibility checklist
slug: Web/Accessibility/Mobile_accessibility_checklist
tags:
  - Accessibility
  - Firefox OS
  - Guidelines
  - Mobile
  - checklist
---
This document provides a concise checklist of accessibility requirements for mobile app developers. It is intended to continuously evolve as more patterns arise.

## Color

- Color contrast must comply with [WCAG 2.1 AA level requirements](https://www.w3.org/TR/WCAG/#contrast-minimum):

  - Contrast ratio of 4.5:1 for normal text (less than 18 point or 14 point bold.)
  - Contrast ratio of 3:1 for large text (at least 18 point or 14 point bold.)

- Information conveyed via color must be also available by other means too (underlined text for links, etc.)

## Visibility

- Content hiding techniques such as zero opacity, z-index order and off-screen placement must not be used exclusively to handle visibility.
- Everything other than the currently visible screen must be _truly_ invisible (especially relevant for single page apps with multiple _cards_):

  - Use the `hidden` attribute or `visibility` or `display` style properties.
  - Unless absolutely unavoidable, `aria-hidden` attribute should not be used.

## Focus

- All activatable elements must be focusable:

  - Standard controls such as links, buttons, and form fields are focusable by default.
  - Non-standard controls must have an appropriate [ARIA Role](/en-US/docs/Web/Accessibility/ARIA/Roles) assigned to them, such as `button`, `link`, or `checkbox`.

- Focus should be handled in a logical order and consistent manner.

## Text equivalents

- Text equivalent must be provided for every non-strictly presentational non-text element within the app.

  - Use _alt_ and _title_ where appropriate (*s*ee Steve Faulkner's post about [Using the HTML title attribute](https://www.tpgi.com/using-the-html-title-attribute-updated/) for a good guide.)
  - If the above attributes are not applicable, use appropriate [ARIA States and Properties](https://www.w3.org/TR/wai-aria-1.1/#state_prop_def) such as `aria-label`, `aria-labelledby`, or `aria-describedby`.

- Images of text must be avoided.
- All user interface components with visible text (or image of text) as labels must have the same text available in the programmatic [name](https://www.w3.org/TR/WCAG21/#dfn-name) of the component. [WCAG 2.1: Label in name.](https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html)
- All form controls must have labels ({{ htmlelement("label") }} elements) for the benefit of screen reader users.

## Handling state

- Standard controls such as radio buttons and checkboxes are handled by the operating system. However, for other custom controls state changes must be provided via [ARIA States](https://www.w3.org/TR/wai-aria-1.1/#state_prop_def) such as `aria-checked`, `aria-disabled`, `aria-selected`, `aria-expanded`, and `aria-pressed`.

## Orientation

- Content should not be restricted to a single orientation, such as portrait or landscape, unless essential. [WCAG 2.1: Orientation](https://www.w3.org/WAI/WCAG21/Understanding/orientation.html)

  - Examples of when an orientation is essential is a piano application or a bank check.

## General guidelines

- An app title must be provided.
- Headings must not break hierarchical structure

  ```html
  <h1>Top level heading</h1>
    <h2>Secondary heading</h2>
    <h2>Another secondary heading</h2>
      <h3>Low level heading</h3>
  ```

- [ARIA Landmark Roles](https://www.washington.edu/accessibility/websites/regions/) should be used to describe an app or document structure, such as `banner`, `complementary`, `contentinfo`, `main`, `navigation`, `search`.
- For touch events, at least one of the following must be true ([WCAG 2.1: Pointer Cancellation](https://www.w3.org/WAI/WCAG21/Understanding/pointer-cancellation.html)):

  - The down-event should not be used to trigger any action
  - The action is triggered on the up event and an option to abort the action before its completion is available or an option to undo the action after its completion
  - The up-event will undo any action that was triggered on a down event
  - It is essential to trigger the action on the down event. For example, playing a game or a piano application.

- Touch targets must be large enough for the user to interact with (see the [BBC Mobile Accessibility Guidelines](https://www.bbc.co.uk/accessibility/forproducts/guides/mobile/target-touch-size) for useful touch target size guidelines).

> **Note:** The [original version of this document](https://yzen.github.io/firefoxos/2014/04/30/mobile-accessibility-checklist.html) was written by [Yura Zenevich](https://yzen.github.io/).

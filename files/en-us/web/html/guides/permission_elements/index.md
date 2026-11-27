---
title: Permission elements
slug: Web/HTML/Guides/Permission_elements
page-type: guide
sidebar: htmlsidebar
---

**Permission elements** (also known as **Page-Embedded Permission Controls**, or **PEPC**) create controls for users to interact with permission-gated browser features in a consistent, intuitive manner. They create buttons for interacting with the features, handle the necessary permissions, guarantee usability and accessibility via validation and restrictions, and are backed by JavaScript interfaces that provide access to their data. This article explains the shared features of permission elements.

## Permission element types

- {{htmlelement("geolocation")}}
  - : Provides a mechanism for accessing geolocation data. See also the {{domxref("HTMLGeolocationElement")}} interface.
- {{htmlelement("install")}}
  - : Creates an in-page control that can be used to install a [progressive web app (PWA)](/en-US/docs/Glossary/Progressive_web_apps). See also the {{domxref("HTMLInstallElement")}} interface.

## Background

Some of the features that the web platform exposes to websites are considered _powerful features_: they are important for certain use cases but can potentially be abused by websites. To help mitigate against this, browsers only allow websites to use such features after the user has granted permission for the site to use them. Typically, the website triggers a permission request from JavaScript in response to a user action such as a button press, and the user is shown a browser-generated dialog box with options such as "Accept" and "Deny".

This can be problematic because all the browser knows is that the website has asked to use the feature in response to some user action: it has no reliable signal that the user actually wanted to use the feature. This leads to confusing UX with out-of-context, easily-missable permission prompts popping up and hard-to-recover-from states if a user accidentally denied permission because they were not sure what was being asked of them.

Any user interfaces to control such features were either implemented in the website and therefore inconsistent with no guarantee of accessibility, or implemented in the browser's built-in user interface, which hampers discoverability.

Permission elements solve these problems by creating in-page buttons whose content is specific to a particular powerful feature, that the user can click to start a request. Because the browser controls the element's content and restricts how it can be styled, the click is a clear signal of intent, and the element can be consistent and accessible across sites. Activating it leads to a browser-owned confirmation UI, and because the browser knows the user deliberately engaged with the control, it can offer a straightforward way to recover from a previous denial.

Permission elements also have a [validation](#validation_and_blocking) system that, along with the styling restrictions, safeguards users against abuses such as [clickjacking](/en-US/docs/Web/Security/Attacks/Clickjacking). For example, the elements are invalidated and therefore inactive if they are obscured by other elements, positioned outside the viewport, or styled in ways that make them hard to understand, such as low-contrast text.

## Setting the button language

The global [`lang`](/en-US/docs/Web/HTML/Reference/Global_attributes/lang) attribute is used by permission elements to select a language for text rendered inside them. This means that you can set a `lang` attribute directly on a permission element or on one of its ancestors to tell the browser what language to use for the button label. If no suitable `lang` attribute is set, the browser's preferred language setting is used.

For example, in a browser set to English, a `<geolocation>` element with no available `lang` attribute will be rendered with a text label along the lines of "Use location".

If we give it a `lang` attribute:

```html
<geolocation lang="de"></geolocation>
```

The text label will change to an equivalent in that language (for example, "Standort verwenden"), provided the browser has a language pack available for that language.

## Including fallback content

You can include fallback content between a permission element's opening and closing tags that will be displayed if it isn't supported. For example, you might include a "Not supported" message within a `<geolocation>` element, or a regular {{htmlelement("button")}} element that uses the [Geolocation API](/en-US/docs/Web/API/Geolocation_API) to retrieve location data:

```html
<geolocation>
  <button id="fallback">Use location</button>
</geolocation>
```

In the case of an `<install>` element, you might include a message to point to instructions on how to install your site as an app on different browsers using their browser chrome features:

```html-nolint
<install>
  <p>
    Install this site as an app using your browser's install button
    (<a href="../install-instructions/">show me how</a>).
  </p>
</install>
```

## Validation and blocking

One key idea behind the design of permission elements is that they should reflect a user's conscious choice to use the related feature and prevent bad actors from tricking users into activating them, for example, via [clickjacking](/en-US/docs/Web/Security/Attacks/Clickjacking). Because of this, the browser keeps a record of so-called **blocker** reasons for each rendered element.

- When a permission element has no blocker, it is **valid** and will function as expected.
- When a permission element has a blocker, it is **invalid** and therefore prevented from functioning.

You can query whether a permission element is valid or invalid by checking its DOM objects's `isValid` property. If it is invalid, you can find its blocker in the DOM object's `invalidReason` property; see [invalid reasons](#invalid_reasons).

The DOM object also has a `validationstatuschange` event, which is fired whenever the permission element's validation status changes. This change is reflected in a change to the `invalidReason` property and, if the element has become valid or invalid, also in a change to the `isValid` property.

### Invalid reasons

This section details the possible reasons that an element may have for being invalid. Each reason has a "blocker lifetime", which is one of the following:

- **Permanent**
  - : The element is permanently invalid until the developer updates the code to stop the blocker occurring.
- **Temporary**
  - : The element is invalid until the blocking condition no longer occurs. After that, the temporary blocker will turn into an expiring blocker.
- **Expiring**
  - : The element is invalid for a short period of time, after which it becomes valid again.

The invalid reasons are as follows:

| Reason                                  | Description                                                                                                                                                                                                                                                                                                                                                                       | Lifetime  |
| --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| illegal_subframe                        | (`<install>` only) The element is nested inside an {{htmlelement("iframe")}} or {{htmlelement("fencedframe")}} element.                                                                                                                                                                                                                                                           | Permanent |
| illegal_sandbox                         | (`<install>` only) The `<install>` element's document has active sandbox restrictions, most likely those imposed by the {{httpheader("Content-Security-Policy")}} `sandbox` directive given that `<install>` elements cannot be used inside `<iframe>` elements. Currently, any remaining sandbox restriction prevents installation, regardless of which capability it restricts. | Permanent |
| intersection_changed                    | The element is being moved.                                                                                                                                                                                                                                                                                                                                                       | Expiring  |
| intersection_occluded_or_distorted      | The element is rendered completely inside the viewport, but it is obscured in some way, for example rendered behind other content.                                                                                                                                                                                                                                                | Temporary |
| intersection_out_of_viewport_or_clipped | The element is rendered outside or partially inside the viewport.                                                                                                                                                                                                                                                                                                                 | Temporary |
| recently_attached                       | The element has only recently been attached to the DOM.                                                                                                                                                                                                                                                                                                                           | Expiring  |
| style_invalid                           | The element has some restricted styles applied to it (see [Styling restrictions](#styling_restrictions)).                                                                                                                                                                                                                                                                         | Temporary |
| unsuccessful_registration               | Too many elements have been inserted into the same document. The allowed number varies by element and implementation. For example, in Chromium it is 24 for `<install>` elements and 3 for `<geolocation>` elements.                                                                                                                                                              | Temporary |

## Styling restrictions

Permission elements have several constraints on the CSS styles that can be applied to them, which fall into the following categories:

- [**Styles that invalidate the element**](#styles_that_invalidate_the_element)
  - : The element is invalidated with the reason `style_invalid` when these constraints are not adhered to, to enforce fundamental accessibility.
- [**Styles constrained to a specific value or range**](#styles_constrained_to_a_specific_value_or_range)
  - : These constraints are applied automatically for certain properties, to aid with accessibility and enforce a certain look and feel.
- [**Styles that can be freely applied**](#styles_that_can_be_freely_applied)
  - : No constraints are applied to the properties listed in this section.
- **Styles that are ignored**
  - : Any properties not listed in the following sub-sections, or logically equivalent to a physical property listed in the following sub-sections, are ignored when set on permission elements.

### Styles that invalidate the element

A rendered permission element button is invalidated if the following constraints are not adhered to, for accessibility reasons:

- The [color contrast](/en-US/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast) ratio between {{cssxref("color")}} and {{cssxref("background-color")}} must be at least 3:1.
- If {{cssxref("font-size")}} is expressed as a [relative size keyword](/en-US/docs/Web/CSS/Reference/Properties/font-size#larger), it must resolve to a value between `small` and `xx-large`. Otherwise, its computed value must be larger than or equal to the computed value for `small` and less than or equal to the computed value for `xx-large`.

### Styles constrained to a specific value or range

The following CSS property value constraints are applied to permission elements. If an attempt is made to set these properties to values outside the listed constraints, the value is adjusted to equal the constraint (in the case of an exact value constraint) or to equal to nearest computed value upper or lower bound (in the case of a range constraint).

| Property                      | Constraint                                   |
| ----------------------------- | -------------------------------------------- |
| {{cssxref("appearance")}}     | `auto !important`                            |
| {{cssxref("border-width")}}   | `1em` or less.                               |
| {{cssxref("box-sizing")}}     | `content-box !important`                     |
| {{cssxref("cursor")}}         | `not-allowed` is treated as `pointer`        |
| {{cssxref("display")}}        | `none` is treated as `inline-block`          |
| {{cssxref("font-style")}}     | `italic` is treated as `normal`              |
| {{cssxref("font-weight")}}    | `200` or greater.                            |
| {{cssxref("letter-spacing")}} | Between `-0.05em` and `0.2em`, inclusive.    |
| {{cssxref("line-height")}}    | `normal !important`                          |
| {{cssxref("max-height")}}     | `3em` or less.                               |
| {{cssxref("min-height")}}     | `1em` or greater.                            |
| {{cssxref("min-width")}}      | The computed value of `fit-content` or less. |
| {{cssxref("opacity")}}        | `1.0`                                        |
| {{cssxref("outline-offset")}} | `0` or greater.                              |
| {{cssxref("text-emphasis")}}  | `initial !important`                         |
| {{cssxref("text-shadow")}}    | `initial !important`                         |
| {{cssxref("user-select")}}    | `none !important`                            |
| {{cssxref("vertical-align")}} | `middle !important`                          |
| {{cssxref("white-space")}}    | `nowrap !important`                          |
| {{cssxref("word-spacing")}}   | Between `0` and `0.5em`, inclusive.          |

#### Complex constraints

The following complex value constraints are also applied to permission elements:

- **Block direction padding**
  - : If the {{cssxref("block-size")}} is set to `auto`, the {{cssxref("padding-block-start")}} and {{cssxref("padding-block-end")}} (and equivalent physical properties for the current [writing mode](/en-US/docs/Web/CSS/Reference/Properties/writing-mode)) are constrained to a maximum of `1em` and must be equal.
- **Inline direction padding**
  - : If the {{cssxref("inline-size")}} is set to `auto`, the {{cssxref("padding-inline-start")}} and {{cssxref("padding-inline-end")}} (and equivalent physical properties for the current [writing mode](/en-US/docs/Web/CSS/Reference/Properties/writing-mode)) are constrained to a maximum of `5em` and must be equal.
- **Maximum width constraint**
  - : If the element does not have a `border-width` of at least `1`, a color contrast ratio between `color` and `background-color` of at least 3:1, and an alpha channel value of `1`, constrain its `max-width` to three times its content width or less.

### Styles that can be freely applied

The following CSS properties can be used normally:

- {{cssxref("font-kerning")}}
- {{cssxref("font-optical-sizing")}}
- {{cssxref("font-stretch")}}
- {{cssxref("font-synthesis-weight")}}
- {{cssxref("font-synthesis-style")}}
- {{cssxref("font-synthesis-small-caps")}}
- {{cssxref("font-feature-settings")}}
- {{cssxref("forced-color-adjust")}}
- {{cssxref("text-rendering")}}
- {{cssxref("align-self")}}
- {{cssxref("anchor-name")}}
- {{cssxref("aspect-ratio")}}
- {{cssxref("border")}}, {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}}, and {{cssxref("border-left")}}
- {{cssxref("clear")}}
- {{cssxref("color-scheme")}}
- {{cssxref("contain-intrinsic-width")}}
- {{cssxref("contain-intrinsic-height")}}
- {{cssxref("container-name")}}
- {{cssxref("container-type")}}
- {{cssxref("counter-reset")}}, {{cssxref("counter-increment")}}, and {{cssxref("counter-set")}}
- {{cssxref("flex")}}, {{cssxref("flex-grow")}}, {{cssxref("flex-shrink")}}, and {{cssxref("flex-basis")}}
- {{cssxref("float")}}
- {{cssxref("height")}}
- {{cssxref("isolation")}}
- {{cssxref("justify-self")}}
- {{cssxref("left")}}
- {{cssxref("order")}}
- {{cssxref("orphans")}}
- {{cssxref("outline")}}, {{cssxref("outline-color")}}, and {{cssxref("outline-style")}}
- {{cssxref("overflow-anchor")}}
- {{cssxref("overscroll-behavior")}}, {{cssxref("overscroll-behavior-inline")}}, {{cssxref("overscroll-behavior-block")}}, {{cssxref("overscroll-behavior-x")}}, and {{cssxref("overscroll-behavior-y")}}
- {{cssxref("page")}}
- {{cssxref("position")}}
- {{cssxref("position-anchor")}}
- {{cssxref("right")}}
- {{cssxref("scroll-margin")}}, {{cssxref("scroll-margin-top")}}, {{cssxref("scroll-margin-right")}}, {{cssxref("scroll-margin-bottom")}}, and {{cssxref("scroll-margin-left")}}
- {{cssxref("scroll-padding")}}, {{cssxref("scroll-padding-top")}}, {{cssxref("scroll-padding-right")}}, {{cssxref("scroll-padding-bottom")}}, {{cssxref("scroll-padding-left")}}, {{cssxref("scroll-padding-inline-start")}}, {{cssxref("scroll-padding-block-start")}}, {{cssxref("scroll-padding-block-start")}}, {{cssxref("scroll-padding-inline-end")}}, and {{cssxref("scroll-padding-block-end")}}
- {{cssxref("text-spacing-trim")}}
- {{cssxref("text-transform")}}
- {{cssxref("top")}}
- {{cssxref("visibility")}}
- {{cssxref("x")}}
- {{cssxref("y")}}
- {{cssxref("ruby-position")}}
- {{cssxref("user-select")}}
- {{cssxref("width")}}
- {{cssxref("will-change")}}
- {{cssxref("z-index")}}

## Accessibility

Permission elements have an accessible name written in the [language they are set to](#setting_the_button_language). They also have a [`role`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles) of [`button`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) so that they are recognized as buttons by screen readers.

In addition, permission elements have a default [`tabindex`](/en-US/docs/Web/HTML/Reference/Global_attributes/tabindex) value of `0`, so they behave like real `<button>` elements with respect to keyboard focus.

Finally, certain CSS styling constraints invalidate permission elements when not adhered to, to enforce fundamental accessibility requirements. See [styles that invalidate the element](#styles_that_invalidate_the_element).

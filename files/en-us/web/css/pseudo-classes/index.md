---
title: Pseudo-classes
slug: Web/CSS/Pseudo-classes
page-type: landing-page
spec-urls:
  - https://html.spec.whatwg.org/multipage/semantics-other.html#pseudo-classes
  - https://drafts.csswg.org/selectors/
  - https://drafts.csswg.org/css-scoping/
  - https://drafts.csswg.org/css-page/
sidebar: cssref
---

A [CSS](/en-US/docs/Web/CSS) **_pseudo-class_** is a keyword added to a selector that lets you style a specific state of the selected element(s). For example, the pseudo-class {{CSSxRef(":hover")}} can be used to select a button when a user's pointer hovers over the button and this selected button can then be styled.

```css
/* Any button over which the user's pointer is hovering */
button:hover {
  color: blue;
}
```

A pseudo-class consists of a colon (`:`) followed by the pseudo-class name (e.g., `:hover`). A functional pseudo-class also contains a pair of parentheses to define the arguments (e.g., `:dir()`). The element that a pseudo-class is attached to is defined as an _anchor element_ (e.g., `button` in case `button:hover`).

Pseudo-classes let you apply a style to an element not only in relation to the content of the document tree, but also in relation to external factors like the history of the navigator ({{CSSxRef(":visited")}}, for example), the status of its content (like {{CSSxRef(":checked")}} on certain form elements), or the position of the mouse (like {{CSSxRef(":hover")}}, which lets you know if the mouse is over an element or not).

> [!NOTE]
> In contrast to pseudo-classes, [pseudo-elements](/en-US/docs/Web/CSS/Pseudo-elements) can be used to style a _specific part_ of an element.

## Elemental pseudo-classes

These pseudo-classes relate to the core identity of elements.

- {{CSSxRef(":defined")}}
  - : Matches any element that is defined.
- {{CSSxRef(":heading")}}
  - : Matches any heading element (`<h1>`-`<h6>`).

## Element display state pseudo-classes

These pseudo-classes enable the selection of elements based on their display states.

- {{CSSxRef(":open")}}
  - : Matches an element that can either be open or closed that is currently open.
- {{CSSxRef(":popover-open")}}
  - : Matches a popover element that is currently in the showing state.
- {{CSSxRef(":modal")}}
  - : Matches an element that is in a state in which it excludes all interaction with elements outside it until the interaction has been dismissed.
- {{CSSxRef(":fullscreen")}}
  - : Matches an element that is currently in fullscreen mode.
- {{CSSxRef(":picture-in-picture")}}
  - : Matches an element that is currently in picture-in-picture mode.

## Input pseudo-classes

These pseudo-classes relate to form elements, and enable selecting elements based on HTML attributes and the state that the field is in before and after interaction.

- {{CSSxRef(":enabled")}}
  - : Represents a user interface element that is in an enabled state.
- {{CSSxRef(":disabled")}}
  - : Represents a user interface element that is in a disabled state.
- {{CSSxRef(":read-only")}}
  - : Represents any element that cannot be changed by the user.
- {{CSSxRef(":read-write")}}
  - : Represents any element that is user-editable.
- {{CSSxRef(":placeholder-shown")}}
  - : Matches an input element that is displaying placeholder text. For example, it will match the `placeholder` attribute in the {{htmlelement("input")}} and {{htmlelement("textarea")}} elements.
- {{CSSxRef(":autofill")}}
  - : Matches when an {{htmlelement("input")}} has been autofilled by the browser.
- {{CSSxRef(":default")}}
  - : Matches one or more UI elements that are the default among a set of elements.
- {{CSSxRef(":checked")}}
  - : Matches when elements such as checkboxes and radio buttons are toggled on.
- {{CSSxRef(":indeterminate")}}
  - : Matches UI elements when they are in an indeterminate state.
- {{CSSxRef(":blank")}}
  - : Matches a user-input element which is empty, containing an empty string or other null input.
- {{CSSxRef(":valid")}}
  - : Matches an element with valid contents. For example, an input element with the type 'email' that contains a validly formed email address or an empty value if the control is not required.
- {{CSSxRef(":invalid")}}
  - : Matches an element with invalid contents. For example, an input element with type 'email' with a name entered.
- {{CSSxRef(":in-range")}}
  - : Applies to elements with range limitations. For example, a slider control when the selected value is in the allowed range.
- {{CSSxRef(":out-of-range")}}
  - : Applies to elements with range limitations. For example, a slider control when the selected value is outside the allowed range.
- {{CSSxRef(":required")}}
  - : Matches when a form element is required.
- {{CSSxRef(":optional")}}
  - : Matches when a form element is optional.
- {{CSSxRef(":user-valid")}}
  - : Represents an element with correct input, but only when the user has interacted with it.
- {{CSSxRef(":user-invalid")}}
  - : Represents an element with incorrect input, but only when the user has interacted with it.

## Linguistic pseudo-classes

These pseudo-classes reflect the document language and enable the selection of elements based on language or script direction.

- {{CSSxRef(":dir", ":dir()")}}
  - : The directionality pseudo-class selects an element based on its directionality as determined by the document language.
- {{CSSxRef(":lang", ":lang()")}}
  - : Select an element based on its content language.

## Location pseudo-classes

These pseudo-classes relate to links, and to targeted elements within the current document.

- {{CSSxRef(":any-link")}}
  - : Matches an element if the element would match either {{CSSxRef(":link")}} or {{CSSxRef(":visited")}}.
- {{CSSxRef(":link")}}
  - : Matches links that have not yet been visited.
- {{CSSxRef(":visited")}}
  - : Matches links that have been visited.
- {{CSSxRef(":local-link")}}
  - : Matches links whose absolute URL is the same as the target URL. For example, anchor links to the same page.
- {{CSSxRef(":target")}}
  - : Matches the element which is the target of the document URL.
- {{CSSxRef(":target-within")}}
  - : Matches elements which are the target of the document URL, but also elements which have a descendant which is the target of the document URL.
- {{CSSxRef(":scope")}}
  - : Represents elements that are a reference point for selectors to match against.

## Resource state pseudo-classes

These pseudo-classes apply to media that is capable of being in a state where it would be described as playing, such as a video.

- {{CSSxRef(":playing")}}
  - : Represents a playable element that is playing.
- {{CSSxRef(":paused")}}
  - : Represents a playable element that is paused.
- {{CSSxRef(":seeking")}}
  - : Represents a playable element that is currently seeking a playback position in the media resource.
- {{CSSxRef(":buffering")}}
  - : Represents a playable element that is playing but is temporarily stalled because it is downloading the media resource.
- {{CSSxRef(":stalled")}}
  - : Represents a playable element that is playing but is stalled because it cannot download the media resource.
- {{CSSxRef(":muted")}}
  - : Represents a sound-producing element that is muted.
- {{CSSxRef(":volume-locked")}}
  - : Represents a sound-producing element that has its volume level locked by the browser.

## Time-dimensional pseudo-classes

These pseudo-classes apply when viewing something which has timing, such as a [WebVTT](/en-US/docs/Web/API/WebVTT_API) caption track.

- {{CSSxRef(":current")}}
  - : Represents the element or ancestor of the element that is being displayed.
- {{CSSxRef(":past")}}
  - : Represents an element that occurs entirely before the {{CSSxRef(":current")}} element.
- {{CSSxRef(":future")}}
  - : Represents an element that occurs entirely after the {{CSSxRef(":current")}} element.

## Tree-structural pseudo-classes

These pseudo-classes relate to the location of an element within the document tree.

- {{CSSxRef(":root")}}
  - : Represents an element that is the root of the document. In HTML this is usually the `<html>` element.
- {{CSSxRef(":empty")}}
  - : Represents an element with no children other than white-space characters.
- {{CSSxRef(":nth-child", ":nth-child()")}}
  - : Uses `An+B` notation to select elements from a list of sibling elements.
- {{CSSxRef(":nth-last-child", ":nth-last-child()")}}
  - : Uses `An+B` notation to select elements from a list of sibling elements, counting backwards from the end of the list.
- {{CSSxRef(":first-child")}}
  - : Matches an element that is the first of its siblings.
- {{CSSxRef(":last-child")}}
  - : Matches an element that is the last of its siblings.
- {{CSSxRef(":only-child")}}
  - : Matches an element that has no siblings. For example, a list item with no other list items in that list.
- {{CSSXRef(":heading_function", ":heading()")}}
  - : Uses `An+B` notation to select heading elements (`<h1>`-`<h6>`).
- {{CSSxRef(":nth-of-type", ":nth-of-type()")}}
  - : Uses `An+B` notation to select elements from a list of sibling elements that match a certain type from a list of sibling elements.
- {{CSSxRef(":nth-last-of-type", ":nth-last-of-type()")}}
  - : Uses `An+B` notation to select elements from a list of sibling elements that match a certain type from a list of sibling elements counting backwards from the end of the list.
- {{CSSxRef(":first-of-type")}}
  - : Matches an element that is the first of its siblings, and also matches a certain type selector.
- {{CSSxRef(":last-of-type")}}
  - : Matches an element that is the last of its siblings, and also matches a certain type selector.
- {{CSSxRef(":only-of-type")}}
  - : Matches an element that has no siblings of the chosen type selector.

## Shadow-structural pseudo-classes

These pseudo-classes relate to the shadow DOM.

- {{CSSxRef(":host")}}
  - : Matches the shadow tree's shadow host.
- {{CSSxRef(":host_function", ":host()")}}
  - : Matches an element that matches {{CSSxRef(":host")}} and matches any of the selectors in the list provided.
- {{CSSxRef(":host-context", ":host-context()")}}
  - : Selects elements outside of the shadow tree in the context of the shadow host.
- {{CSSxRef(":has-slotted")}}
  - : Matches slot elements that have been assigned content.

## User action pseudo-classes

These pseudo-classes require some interaction by the user in order for them to apply, such as holding a mouse pointer over an element.

- {{CSSxRef(":hover")}}
  - : Matches when a user designates an item with a pointing device, such as holding the mouse pointer over the item.
- {{CSSxRef(":active")}}
  - : Matches when an item is being activated by the user. For example, when the item is clicked on.
- {{CSSxRef(":focus")}}
  - : Matches when an element has focus.
- {{CSSxRef(":focus-visible")}}
  - : Matches when an element has focus and the user agent identifies that the element should be visibly focused.
- {{CSSxRef(":focus-within")}}
  - : Matches an element to which {{CSSxRef(":focus")}} applies, plus any element that has a descendant to which {{CSSxRef(":focus")}} applies.
- {{CSSxRef(":target-current")}}
  - : Matches the {{cssxref("::scroll-marker")}} pseudo-element of a {{cssxref("scroll-marker-group")}} that is currently scrolled to, in other words, the **active** scroll marker.

## Functional pseudo-classes

These pseudo-classes accept a [selector list](/en-US/docs/Web/CSS/Selector_list) or [forgiving selector list](/en-US/docs/Web/CSS/Selector_list#forgiving_selector_list) as a parameter.

- {{CSSxRef(":is", ":is()")}}
  - : The matches-any pseudo-class matches any element that matches any of the selectors in the list provided. The list is forgiving.
- {{CSSxRef(":not", ":not()")}}
  - : The negation, or matches-none, pseudo-class represents any element that is not represented by its argument.
- {{CSSxRef(":where", ":where()")}}
  - : The specificity-adjustment pseudo-class matches any element that matches any of the selectors in the list provided without adding any specificity weight. The list is forgiving.
- {{CSSxRef(":has", ":has()")}}
  - : The relational pseudo-class represents an element if any of the relative selectors match when anchored against the attached element.

## Custom state pseudo-classes

These pseudo-classes apply to custom elements.

- {{CSSxRef(":state", ":state()")}}
  - : Matches custom elements that have the specified custom state.

## Page pseudo-classes

These pseudo-classes relate to pages in a printed document and are used with the {{CSSxRef("@page")}} at-rule.

- {{CSSxRef(":left")}}
  - : Represents all left-hand pages of a printed document.
- {{CSSxRef(":right")}}
  - : Represents all right-hand pages of a printed document.
- {{CSSxRef(":first")}}
  - : Represents the first page of a printed document.
- `:blank`
  - : Represents a blank page in a printed document.

## View transition pseudo-classes

These pseudo-classes relate to elements involved in a [view transition](/en-US/docs/Web/API/View_Transition_API).

- {{cssxref(":active-view-transition")}}
  - : Matches the root element of a document when a [view transition](/en-US/docs/Web/API/View_Transition_API#concepts_and_usage) is in progress (_active_) and stops matching once the transition has completed.
- {{cssxref(":active-view-transition-type", ":active-view-transition-type()")}}
  - : Matches the root element of a document when a specified [view transition](/en-US/docs/Web/API/View_Transition_API#concepts_and_usage) is in progress (_active_) and stops matching once the transition has completed.

## Syntax

```css
selector:pseudo-class {
  property: value;
}
```

Like regular classes, you can chain together as many pseudo-classes as you want in a selector.

## Alphabetical index

Pseudo-classes defined by a set of CSS specifications include the following:

A

- {{CSSxRef(":active")}}
- {{CSSxRef(":active-view-transition")}}
- {{cssxref(":active-view-transition-type", ":active-view-transition-type()")}}
- {{CSSxRef(":any-link")}}
- {{CSSxRef(":autofill")}}

B

- {{CSSxRef(":blank")}} (input) {{Experimental_Inline}}
- `:blank` (page)
- {{CSSxRef(":buffering")}}

C

- {{CSSxRef(":checked")}}
- {{CSSxRef(":current")}} {{Experimental_Inline}}

D

- {{CSSxRef(":default")}}
- {{CSSxRef(":defined")}}
- {{CSSxRef(":dir", ":dir()")}}
- {{CSSxRef(":disabled")}}

E

- {{CSSxRef(":empty")}}
- {{CSSxRef(":enabled")}}

F

- {{CSSxRef(":first")}}
- {{CSSxRef(":first-child")}}
- {{CSSxRef(":first-of-type")}}
- {{CSSxRef(":focus")}}
- {{CSSxRef(":focus-visible")}}
- {{CSSxRef(":focus-within")}}
- {{CSSxRef(":fullscreen")}}
- {{CSSxRef(":future")}}

H

- {{CSSxRef(":has-slotted")}}
- {{CSSxRef(":has", ":has()")}}
- {{CSSXRef(":heading")}}
- {{CSSXRef(":heading_function", ":heading()")}}
- {{CSSxRef(":host")}}
- {{CSSxRef(":host_function", ":host()")}}
- {{CSSxRef(":host-context", ":host-context()")}}
- {{CSSxRef(":hover")}}

I

- {{CSSxRef(":in-range")}}
- {{CSSxRef(":indeterminate")}}
- {{CSSxRef(":invalid")}}
- {{CSSxRef(":is", ":is()")}}

L

- {{CSSxRef(":lang", ":lang()")}}
- {{CSSxRef(":last-child")}}
- {{CSSxRef(":last-of-type")}}
- {{CSSxRef(":left")}}
- {{CSSxRef(":link")}}
- {{CSSxRef(":local-link")}} {{Experimental_Inline}}

M

- {{CSSxRef(":modal")}}
- {{CSSxRef(":muted")}}

N

- {{CSSxRef(":not", ":not()")}}
- {{CSSxRef(":nth-child", ":nth-child()")}}
- {{CSSxRef(":nth-last-child", ":nth-last-child()")}}
- {{CSSxRef(":nth-last-of-type", ":nth-last-of-type()")}}
- {{CSSxRef(":nth-of-type", ":nth-of-type()")}}

O

- {{CSSxRef(":only-child")}}
- {{CSSxRef(":only-of-type")}}
- {{CSSxRef(":open")}}
- {{CSSxRef(":optional")}}
- {{CSSxRef(":out-of-range")}}

P

- {{CSSxRef(":past")}}
- {{CSSxRef(":paused")}}
- {{CSSxRef(":picture-in-picture")}}
- {{CSSxRef(":placeholder-shown")}}
- {{CSSxRef(":playing")}}
- {{CSSxRef(":popover-open")}}

R

- {{CSSxRef(":read-only")}}
- {{CSSxRef(":read-write")}}
- {{CSSxRef(":required")}}
- {{CSSxRef(":right")}}
- {{CSSxRef(":root")}}

S

- {{CSSxRef(":scope")}}
- {{CSSxRef(":seeking")}}
- {{CSSxRef(":stalled")}}
- {{CSSxRef(":state", ":state()")}}

T

- {{CSSxRef(":target")}}
- {{CSSxRef(":target-current")}}
- {{CSSxRef(":target-within")}} {{Experimental_Inline}}

U

- {{CSSxRef(":user-invalid")}}
- {{CSSxRef(":user-valid")}}

V

- {{CSSxRef(":valid")}}
- {{CSSxRef(":visited")}}
- {{CSSxRef(":volume-locked")}}

W

- {{CSSxRef(":where", ":where()")}}

## Specifications

{{Specifications}}

## See also

- [Pseudo-elements](/en-US/docs/Web/CSS/Pseudo-elements)

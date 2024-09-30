---
title: "ARIA: application role"
slug: Web/Accessibility/ARIA/Roles/application_role
page-type: aria-role
spec-urls: https://w3c.github.io/aria/#application
---

{{AccessibilitySidebar}}

The `application` role indicates to assistive technologies that an element _and all of its children_ should be treated similar to a desktop application, and no traditional HTML interpretation techniques should be used. This role should only be used to define very dynamic and desktop-like web applications. Most mobile and desktop web apps _are not_ considered applications for this purpose.

```html
<div role="application" aria-label="…">…</div>
```

By specifying the `application` role, it indicates this `div` element and all of its descendants are to be treated like they are part of a desktop application.

## Description

The `application` [document structure role](/en-US/docs/Web/Accessibility/ARIA/Roles#1._document_structure_roles), indicates to assistive technologies that this part of the web content contains elements that do not conform to any other known HTML element or WAI-ARIA widget. Any sort of special interpretation of HTML structures and widgets should be suspended, and control should be completely handed over to the browser and web application to handle mouse, keyboard, or touch interaction.

In this mode, the web author is completely responsible for handling any and all keyboard input, focus management, and other interactions and cannot assume assistive technologies would do any processing on their end.

If the web application encompassed by the application role contains parts that _should_ be treated like normal web content, a role of [`document`](/en-US/docs/Web/Accessibility/ARIA/Roles/document_role) or [`article`](/en-US/docs/Web/Accessibility/ARIA/Roles/article_role) should be used to contain such content.

### Background

For historic reasons, especially on Windows, screen readers and some other assistive technologies (AT) have traditionally grabbed the whole web content from the browser at once after it had finished loading. The ATs build their own representation of it that makes the most sense for a visually impaired user to consume the content. This is often referred to as _virtual document_, _browse mode_, or similar terms. The document is streamlined to a single-column view. A keyboard interaction model is generated that is very similar to a word processor where users can read line by line, sentence by sentence, or paragraph by paragraph. The AT will read any semantics like links, headings, form controls, tables, lists, or images.

In addition, a set of so-called _quick navigation keys_ has been established over the years that allows visually impaired users to skim through a page via a certain element type. Such elements usually include headings, form fields, lists, tables, links, graphics, or landmark regions.

For all of this to work, ATs intercept almost all keyboard input and consume it themselves, letting nothing through to the browser or other user agent. To be able to interact with a web page, a standard set of widgets is recognized that, when pressing a certain key (usually the <kbd>Enter</kbd> key) this mode is switched off. The screen reader mode, often called _forms mode_ or _focus mode_, lets all keyboard input go through to the browser again. <kbd>Escape</kbd> is the most common way of switching back to _browse_ mode, but when within a specific `application` section, some screen readers may require other keys to purposefully exit this mode. For instance <kbd>NUMPAD PLUS</kbd> with JAWS.

The `application` role is designed to provide a means for widgets that are not part of the standard set to be accessible for direct interaction in ATs that use both _browse_ and _focus_ modes for interacting with web content. Most common widgets have expected keyboard interaction behaviors. Because of this, a custom keyboard experience created by a web author would create a confusing experience.

### Associated WAI-ARIA roles, states, and properties

- [`document`](/en-US/docs/Web/Accessibility/ARIA/Roles/document_role), [`article`](/en-US/docs/Web/Accessibility/ARIA/Roles/article_role)
  - : Used to indicate parts of the application that should be treated as normal web content
- [`aria-activedescendant`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-activedescendant)
  - : Used to manage focus inside the application.
- [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label)
  - : Used to provide the name of the application or purpose of the widget that is being exposed.
- [`aria-describedby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)
  - : Used to indicate the idref of an element that contains additional instructions for navigating or operating this element.
- [`aria-roledescription`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-roledescription)
  - : Used to give the application a more descriptive role text for screen readers to speak. This should be localized.
- [`aria-disabled`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-disabled)
  - : Indicates that an element is visible but disabled
- [`aria-errormessage`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-errormessage)
  - : A reference to the element that provides the error message for the element on which it is set
- [`aria-expanded`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)
  - : If set to `true`, the grouping element owned or controlled by this element is expanded, or `false` if collapsed.
- [`aria-haspopup`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup)
  - : Indicates there is a popup, such as menu or dialog, that can be triggered by the element.

### Keyboard interactions

Keyboard interaction is completely under the web author's control and can be anything associated with the particular widget being implemented. In a slides application, for example, a widget could be created that uses the arrow keys to position elements on the slide, and uses audio feedback via an ARIA live region to communicate the position and overlap status with other objects. Focus is being managed via _aria-activedescendant_.

The <kbd>Tab</kbd>, <kbd>Space</kbd> and <kbd>Enter</kbd> keys, as well as <kbd>Escape</kbd>, must be handled by the application. The one exception is if focus is set to a standard widget inside the application that supports keyboard navigation from the browser, for example an [input](/en-US/docs/Web/HTML/Element/input) element.

### Required JavaScript features

- keyPress
  - : Used to handle keyboard input and control the focus
- Click, Touch
  - : Handle as appropriate for your widget as well
- Changing attribute values
  - : [`aria-activedescendant`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-activedescendant) is used to manage the focus inside the application container. Set in response to keyboard or other application events that change focus or point of interaction.

> [!NOTE]
> The `application` role does not have a related HTML widget and thus is completely free form. The author of the application must take full responsibility for not letting users get stuck in a focus trap inside something the user cannot exit from. All aspects of interaction, including returning to the regular web content on other parts of the page, must be handled. Use wisely, and cautiously, and remember to test!

## Examples

Some prominent web applications that use or have used the application role properly are:

- Google Docs, Sheets and Slides
- CKEditor and TinyMCE WYSIWYG web editors, like the one used on the Mozilla Developer Network
- Some parts of Gmail

## Accessibility concerns

Improperly using the `application` role can unintentionally take away access from information on a web page, so be very mindful of using it. Think hard on if you actually need it and cannot just use a set of other known widgets to accomplish the same task.

If used, the application role should be added to the lowest common container possible, not on the `<body>` element, for example. Also be sure to test what you have written with assistive technology, to verify it works as intended.

## Specifications

{{Specifications}}

## Precedence order

Applying the `application` role will cause this and all of the descendant elements of this element to be treated like application content, not web content. Any reading mechanisms assistive technologies may have for web content will not apply.

## See also

- [If you use the WAI-ARIA role `application`, please do so wisely](https://www.marcozehe.de/if-you-use-the-wai-aria-role-application-please-do-so-wisely/) - blog post by Marco Zehe
- [Using the ARIA `application` role](https://tink.uk/using-the-aria-application-role/) - by Léonie Watson

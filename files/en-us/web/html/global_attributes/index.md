---
title: Global attributes
slug: Web/HTML/Global_attributes
page-type: landing-page
browser-compat: html.global_attributes
---

{{HTMLSidebar("Global_attributes")}}

**Global attributes** are attributes common to all HTML elements; they can be used on all elements, though they may have no effect on some elements.

Global attributes may be specified on all [HTML elements](/en-US/docs/Web/HTML/Element), _even those not specified in the standard_. That means that any non-standard elements must still permit these attributes, even though using those elements means that the document is no longer HTML5-compliant. For example, HTML5-compliant browsers hide content marked as `<foo hidden>…</foo>`, even though `<foo>` is not a valid HTML element.

In addition to the basic HTML global attributes, the following global attributes also exist:

- `xml:lang` and `xml:base` — these are inherited from the XHTML specifications and deprecated, but kept for compatibility purposes.
- The ARIA [`role`](/en-US/docs/Web/Accessibility/ARIA/Roles) attribute and the multiple [`aria-*`](/en-US/docs/Web/Accessibility/ARIA/Attributes) states and properties, used for ensuring accessibility.
- The [event handler](/en-US/docs/Web/HTML/Attributes#event_handler_attributes) attributes: `onabort`, `onautocomplete`, `onautocompleteerror`, `onblur`, `oncancel`, `oncanplay`, `oncanplaythrough`, `onchange`, `onclick`, `onclose`, `oncontextmenu`, `oncuechange`, `ondblclick`, `ondrag`, `ondragend`, `ondragenter`, `ondragleave`, `ondragover`, `ondragstart`, `ondrop`, `ondurationchange`, `onemptied`, `onended`, `onerror`, `onfocus`, `oninput`, `oninvalid`, `onkeydown`, `onkeypress`, `onkeyup`, `onload`, `onloadeddata`, `onloadedmetadata`, `onloadstart`, `onmousedown`, `onmouseenter`, `onmouseleave`, `onmousemove`, `onmouseout`, `onmouseover`, `onmouseup`, `onmousewheel`, `onpause`, `onplay`, `onplaying`, `onprogress`, `onratechange`, `onreset`, `onresize`, `onscroll`, `onseeked`, `onseeking`, `onselect`, `onshow`, `onsort`, `onstalled`, `onsubmit`, `onsuspend`, `ontimeupdate`, `ontoggle`, `onvolumechange`, `onwaiting`.

## List of global attributes

- [`accesskey`](/en-US/docs/Web/HTML/Global_attributes/accesskey)
  - : Provides a hint for generating a keyboard shortcut for the current element. This attribute consists of a space-separated list of characters. The browser should use the first one that exists on the computer keyboard layout.
- [`autocapitalize`](/en-US/docs/Web/HTML/Global_attributes/autocapitalize)

  - : Controls whether and how text input is automatically capitalized as it is entered/edited by the user. It can have the following values:

    - `off` or `none`, no autocapitalization is applied (all letters default to lowercase)
    - `on` or `sentences`, the first letter of each sentence defaults to a capital letter; all other letters default to lowercase
    - `words`, the first letter of each word defaults to a capital letter; all other letters default to lowercase
    - `characters`, all letters should default to uppercase

- [`autofocus`](/en-US/docs/Web/HTML/Global_attributes/autofocus)
  - : Indicates that an element is to be focused on page load, or as soon as the {{HTMLElement("dialog")}} it is part of is displayed. This attribute is a boolean, initially false.
- [`class`](/en-US/docs/Web/HTML/Global_attributes/class)
  - : A space-separated list of the classes of the element. Classes allow CSS and JavaScript to select and access specific elements via the [class selectors](/en-US/docs/Web/CSS/Class_selectors) or functions like the method {{DOMxRef("Document.getElementsByClassName()")}}.
- [`contenteditable`](/en-US/docs/Web/HTML/Global_attributes/contenteditable)

  - : An [enumerated](/en-US/docs/Glossary/Enumerated) attribute indicating if the element should be editable by the user. If so, the browser modifies its widget to allow editing. The attribute must take one of the following values:

    - `true` or the _empty string_, which indicates that the element must be editable;
    - `false`, which indicates that the element must not be editable.

- [`contextmenu`](/en-US/docs/Web/HTML/Global_attributes/contextmenu) {{deprecated_inline}}
  - : The [**`id`**](#id) of a {{HTMLElement("menu")}} to use as the contextual menu for this element.
- [`data-*`](/en-US/docs/Web/HTML/Global_attributes/data-*)
  - : Forms a class of attributes, called custom data attributes, that allow proprietary information to be exchanged between the [HTML](/en-US/docs/Web/HTML) and its {{glossary("DOM")}} representation that may be used by scripts. All such custom data are available via the {{DOMxRef("HTMLElement")}} interface of the element the attribute is set on. The {{DOMxRef("HTMLElement.dataset")}} property gives access to them.
- [`dir`](/en-US/docs/Web/HTML/Global_attributes/dir)

  - : An enumerated attribute indicating the directionality of the element's text. It can have the following values:

    - `ltr`, which means _left to right_ and is to be used for languages that are written from the left to the right (like English);
    - `rtl`, which means _right to left_ and is to be used for languages that are written from the right to the left (like Arabic);
    - `auto`, which lets the user agent decide. It uses a basic algorithm as it parses the characters inside the element until it finds a character with a strong directionality, then it applies that directionality to the whole element.

- [`draggable`](/en-US/docs/Web/HTML/Global_attributes/draggable)

  - : An enumerated attribute indicating whether the element can be dragged, using the [Drag and Drop API](/en-US/docs/Web/API/HTML_Drag_and_Drop_API). It can have the following values:

    - `true`, which indicates that the element may be dragged
    - `false`, which indicates that the element may not be dragged.

- [`enterkeyhint`](/en-US/docs/Web/HTML/Global_attributes/enterkeyhint)
  - : Hints what action label (or icon) to present for the enter key on virtual keyboards.
- [`exportparts`](/en-US/docs/Web/HTML/Global_attributes/exportparts) {{Experimental_Inline}}
  - : Used to transitively export shadow parts from a nested shadow tree into a containing light tree.
- [`hidden`](/en-US/docs/Web/HTML/Global_attributes/hidden)
  - : An enumerated attribute indicating that the element is not yet, or is no longer, _relevant_. For example, it can be used to hide elements of the page that can't be used until the login process has been completed. The browser won't render such elements. This attribute must not be used to hide content that could legitimately be shown.
- [`id`](/en-US/docs/Web/HTML/Global_attributes/id)
  - : Defines a unique identifier (ID) which must be unique in the whole document. Its purpose is to identify the element when linking (using a fragment identifier), scripting, or styling (with CSS).
- [`inert`](/en-US/docs/Web/HTML/Global_attributes/inert)
  - : A boolean value that makes the browser disregard user input events for the element. Useful when click events are present.
- [`inputmode`](/en-US/docs/Web/HTML/Global_attributes/inputmode)
  - : Provides a hint to browsers as to the type of virtual keyboard configuration to use when editing this element or its contents. Used primarily on {{HTMLElement("input")}} elements, but is usable on any element while in {{HTMLAttrxRef("contenteditable")}} mode.
- [`is`](/en-US/docs/Web/HTML/Global_attributes/is)
  - : Allows you to specify that a standard HTML element should behave like a registered custom built-in element (see [Using custom elements](/en-US/docs/Web/Web_Components/Using_custom_elements) for more details).

> **Note:** The `item*` attributes are part of the [WHATWG HTML Microdata feature](https://html.spec.whatwg.org/multipage/microdata.html#microdata).

- [`itemid`](/en-US/docs/Web/HTML/Global_attributes/itemid)
  - : The unique, global identifier of an item.
- [`itemprop`](/en-US/docs/Web/HTML/Global_attributes/itemprop)
  - : Used to add properties to an item. Every HTML element may have an `itemprop` attribute specified, where an `itemprop` consists of a name and value pair.
- [`itemref`](/en-US/docs/Web/HTML/Global_attributes/itemref)
  - : Properties that are not descendants of an element with the `itemscope` attribute can be associated with the item using an `itemref`. It provides a list of element ids (not `itemid`s) with additional properties elsewhere in the document.
- [`itemscope`](/en-US/docs/Web/HTML/Global_attributes/itemscope)
  - : `itemscope` (usually) works along with [`itemtype`](/en-US/docs/Web/HTML/Global_attributes/itemtype) to specify that the HTML contained in a block is about a particular item. `itemscope` creates the Item and defines the scope of the `itemtype` associated with it. `itemtype` is a valid URL of a vocabulary (such as [schema.org](https://schema.org/)) that describes the item and its properties context.
- [`itemtype`](/en-US/docs/Web/HTML/Global_attributes/itemtype)
  - : Specifies the URL of the vocabulary that will be used to define `itemprop`s (item properties) in the data structure. [`itemscope`](/en-US/docs/Web/HTML/Global_attributes/itemscope) is used to set the scope of where in the data structure the vocabulary set by `itemtype` will be active.
- [`lang`](/en-US/docs/Web/HTML/Global_attributes/lang)
  - : Helps define the language of an element: the language that non-editable elements are in, or the language that editable elements should be written in by the user. The attribute contains one "language tag" (made of hyphen-separated "language subtags") in the format defined in {{RFC(5646, "Tags for Identifying Languages (also known as BCP 47)")}}. [**xml:lang**](#xml:lang) has priority over it.
- [`nonce`](/en-US/docs/Web/HTML/Global_attributes/nonce)
  - : A cryptographic nonce ("number used once") which can be used by [Content Security Policy](/en-US/docs/Web/HTTP/CSP) to determine whether or not a given fetch will be allowed to proceed.
- [`part`](/en-US/docs/Web/HTML/Global_attributes/part)
  - : A space-separated list of the part names of the element. Part names allows CSS to select and style specific elements in a shadow tree via the {{CSSxRef("::part")}} pseudo-element.
- [`role`](/en-US/docs/Web/Accessibility/ARIA/Roles)
  - : Roles define the semantic meaning of content, allowing screen readers and other tools to present and support interaction with an object in a way that is consistent with user expectations of that type of object. `roles` are added to HTML elements using `role="role_type"`, where `role_type` is the name of a role in the ARIA specification.
- [`slot`](/en-US/docs/Web/HTML/Global_attributes/slot)
  - : Assigns a slot in a [shadow DOM](/en-US/docs/Web/Web_Components/Using_shadow_DOM) shadow tree to an element: An element with a `slot` attribute is assigned to the slot created by the {{HTMLElement("slot")}} element whose {{HTMLAttrxRef("name", "slot")}} attribute's value matches that `slot` attribute's value.
- [`spellcheck`](/en-US/docs/Web/HTML/Global_attributes/spellcheck)

  - : An enumerated attribute defines whether the element may be checked for spelling errors. It may have the following values:

    - empty string or `true`, which indicates that the element should be, if possible, checked for spelling errors;
    - `false`, which indicates that the element should not be checked for spelling errors.

- [`style`](/en-US/docs/Web/HTML/Global_attributes/style)
  - : Contains [CSS](/en-US/docs/Web/CSS) styling declarations to be applied to the element. Note that it is recommended for styles to be defined in a separate file or files. This attribute and the {{HTMLElement("style")}} element have mainly the purpose of allowing for quick styling, for example for testing purposes.
- [`tabindex`](/en-US/docs/Web/HTML/Global_attributes/tabindex)

  - : An integer attribute indicating if the element can take input focus (is _focusable_), if it should participate to sequential keyboard navigation, and if so, at what position. It can take several values:

    - a _negative value_ means that the element should be focusable, but should not be reachable via sequential keyboard navigation;
    - `0` means that the element should be focusable and reachable via sequential keyboard navigation, but its relative order is defined by the platform convention;
    - a _positive value_ means that the element should be focusable and reachable via sequential keyboard navigation; the order in which the elements are focused is the increasing value of the [**tabindex**](#tabindex). If several elements share the same tabindex, their relative order follows their relative positions in the document.

- [`title`](/en-US/docs/Web/HTML/Global_attributes/title)
  - : Contains a text representing advisory information related to the element it belongs to. Such information can typically, but not necessarily, be presented to the user as a tooltip.
- [`translate`](/en-US/docs/Web/HTML/Global_attributes/translate)

  - : An enumerated attribute that is used to specify whether an element's attribute values and the values of its {{DOMxRef("Text")}} node children are to be translated when the page is localized, or whether to leave them unchanged. It can have the following values:

    - empty string or `yes`, which indicates that the element will be translated.
    - `no`, which indicates that the element will not be translated.
- [`virtualkeyboardpolicy`](/en-US/docs/Web/HTML/Global_attributes/virtualkeyboardpolicy)

  - : An [enumerated](/en-US/docs/Glossary/Enumerated) attribute used to control the on-screen virtual keyboard behavior on devices such as tablets, mobile phones, or other devices where a hardware keyboard may not be available, for elements that also uses the {{htmlattrxref("contenteditable")}} attribute.

    - `auto` or an _empty string_, which automatically shows the virtual keyboard when the element is focused or tapped.
    - `manual`, which decouples focus and tap on the element from the virtual keyboard's state.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("Element")}} interface that allows querying most global attributes.

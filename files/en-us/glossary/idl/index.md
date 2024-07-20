---
title: IDL
slug: Glossary/IDL
page-type: glossary-definition
---

{{GlossarySidebar}}

An **IDL** (_Interface Description Language_) is a generic language, used to specify object interfaces independent of any particular programming language.

## Content versus IDL attributes

In HTML, most attributes have two faces: the **content attribute** and the **IDL attribute**.

The content attribute is the attribute as you set it from the content (the HTML code) and you can set it or get it via {{domxref("element.setAttribute()")}} or {{domxref("element.getAttribute()")}}. The content attribute is always a string even when the expected value should be an integer. For example, to set an {{HTMLElement("input")}} element's `maxlength` to 42 using the content attribute, you have to call `setAttribute("maxlength", "42")` on that element.

The IDL attribute is also known as a JavaScript property. These are the attributes you can read or set using JavaScript properties like `element.foo`. The IDL attribute is always going to use (but might transform) the underlying content attribute to return a value when you get it and is going to save something in the content attribute when you set it. In other words, the IDL attributes, in essence, reflect the content attributes.

Most of the time, IDL attributes will return their values as they are really used. For example, the default `type` for {{HTMLElement("input")}} elements is "text", so if you set `input.type="foobar"`, the `<input>` element will be of type text (in the appearance and the behavior) but the "type" content attribute's value will be "foobar". However, the `type` IDL attribute will return the string "text".

IDL attributes are not always strings; for example, `input.maxlength` is a number (a signed long). When using IDL attributes, you read or set values of the desired type, so `input.maxlength` is always going to return a number and when you set `input.maxlength`, it wants a number. If you pass another type, it is automatically converted to a number as specified by the standard JavaScript rules for type conversion.

IDL attributes can [reflect other types](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#reflecting-content-attributes-in-idl-attributes) such as unsigned long, URLs, booleans, etc. Unfortunately, there are no clear rules and the way IDL attributes behave in conjunction with their corresponding content attributes depends on the attribute. Most of the time, it will follow [the rules laid out in the specification](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#reflecting-content-attributes-in-idl-attributes), but sometimes it doesn't. HTML specifications try to make this as developer-friendly as possible, but for various reasons (mostly historical), some attributes behave oddly (`select.size`, for example) and you should read the specifications to understand how exactly they behave.

## See also

- [IDL](https://en.wikipedia.org/wiki/Interface_description_language) on Wikipedia
- [HTML attribute reference](/en-US/docs/Web/HTML/Attributes)
- [Interface Definition Language](https://people.eecs.berkeley.edu/~messer/netappc/Supplements/10-idl.pdf)

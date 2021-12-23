---
title: SVG Core Attributes
slug: Web/SVG/Attribute/Core
tags:
  - Attribute
  - Intermediate
  - Reference
  - SVG
browser-compat: svg.attributes.core
---
The SVG core attributes are all the common attributes that can be specified on any SVG element.

*   [`id`](#attr-id)
*   [`lang`](#attr-lang)
*   [`tabindex`](#attr-tabindex)
*   [`xml:base`](#attr-xml:base)
*   [`xml:lang`](#attr-xml:lang)
*   [`xml:space`](#attr-xml:space)

## Attributes

*   {{SVGAttr('id')}}
    *   : Defines a unique identifier (ID) which must be unique in the whole document. Its purpose is to identify the element when linking (using a fragment identifier), scripting, or styling (with CSS).
        *Value*: Any valid ID string; *Animatable*: **No**
*   {{SVGAttr('lang')}}
    *   : Participates in defining the language of the element, the language that non-editable elements are written in or the language that editable elements should be written in. The tag contains one single entry value in the format defined in {{RFC(5646, "Tags for Identifying Languages (also known as BCP 47)")}}.

        > **Note:** SVG 2 introduced the new `lang` attributes. If both `lang` and `xml:lang` attribute are used, `xml:lang` has priority over `lang`.

        *Value*: Any valid language ID; *Animatable*: **No**
*   {{SVGAttr('tabindex')}}
    *   : The tabindex SVG attribute allows you to control whether an element is focusable and to define the relative order of the element for the purposes of sequential focus navigation.
        *Value type*: [\<integer>](/docs/Web/SVG/Content_type#Integer); *Animatable*: **No**
*   {{SVGAttr('xml:base')}}
    *   : Specifies a base IRI other than the base IRI of the document.
        *Value type*: [\<IRI>](/docs/Web/SVG/Content_type#IRI); *Animatable*: **No**
*   {{SVGAttr('xml:lang')}}
    *   : It is a universal attribute allowed in all XML dialects to mark up the natural human language that an element contains. It's almost identical in usage to HTML's [lang](/en-US/docs/Web/HTML/Global_attributes/lang), but in conforming XML 1.0 documents, it does not allow the use of a null attribute value (`xml:lang=""`) to indicate an unknown language. Instead, use `xml:lang="und"`.

        > **Note:** SVG 2 introduced the new `lang` attributes. If both `lang` and `xml:lang` attribute are used, `xml:lang` has priority over `lang`.

        *Value*: Any valid language ID; *Animatable*: **No**
*   {{SVGAttr('xml:space')}} {{deprecated_inline}}
    *   : SVG supports the standard XML attribute `xml:space` to specify the handling of white space characters within a given {{ SVGElement("text") }} element's character data.

        > **Note:** Instead of using the `xml:space` attribute you should use the {{cssxref('white-space')}} CSS property.

        *Value*: **`default`** | `preserve`; *Animatable*: **No**

## Browser compatibility

{{Compat}}

---
title: xml:base
slug: Web/XML/xml:base
tags:
  - Attribute
  - Deprecated
  - Reference
  - SVG
  - XML
  - xml:base
---
{{deprecated_header}}

**`xml:base`** is like the HTML {{HTMLElement("base")}} element, but can specify the base URI per element as well as the entire document.

The base URL of a element can be queried from a script using [Node.baseURI](/en-US/docs/Web/API/Node/baseURI).

The base URI of an element is:

1.  the base URI specified by an `xml:base` attribute on the element, if one exists, otherwise
2.  the base URI of the element's parent element within the document entity or external entity, if one exists, otherwise
3.  the base URI of the document entity or external entity containing the element.

Support was removed from blink (Chrome and Opera) in 2015:

- [Chromium bug 341854](https://bugs.chromium.org/p/chromium/issues/detail?id=341854)
- [blink-dev mailing list post](https://groups.google.com/a/chromium.org/forum/#!topic/blink-dev/ZvArHAXyAHM)

And from Firefox 66 in {{bug(903372)}}.

## Use cases

If you have an inline SVG you use as icons that needs to work in a document with a [HTML BaseElement](/en-US/docs/Web/HTML/Element/base) , you can reset the URI on your icon sprite by setting the xml:base.

```html
<html>
  <head>
  <base href="https://mydomain.com">
  <style>
  .link { stroke: #999; stroke-opacity: .6; }
  marker#arrow { fill: black; }
  </style>
</head>
<body>
  <svg width="100%" height="100%" xml:base="">
    <defs>
      <marker id="arrow" viewBox="0 -5 10 10" refX="0" refY="0" markerWidth="20" markerHeight="20" orient="auto">
        <path d="M0,-5L10,0L0,5"></path>
      </marker>
    </defs>
    <line x1="100" y1="100" x2="333" y2="333" marker-start="url(#arrow)" class="link"></line>
  </svg>
</body>
</html>
```

Imagine a SVG with font references. E.g.

```xml
<svg xml:base="https://foobar.s3-eu-west-1.amazonaws.com/uploads/15066845653629"
  width="909" height="1286" viewBox="0 0 909 1286"xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<defs>
<style type="text/css"><![CDATA[

.s9_999{
font-size: 9.17px;
font-family: ZapfDingbats_ghr;
fill: #161615;
}
]]></style>

  <text
    x="647"
    y="412"
    dx="0"
    class="s9_999"
  >r</text>

<style type="text/css"><![CDATA[

@font-face {
    font-family: ZapfDingbats_ghr;
    src: url("fonts/ZapfDingbats_ghr.woff") format("woff");
}

]]></style>

</svg>
```

Setting the xml:base on the SVG Element means you can inline the SVG and thereby bypass CORS issue while not changing the base URI for your entire document.

## Workarounds

- [xml:base support in old browsers](/en-US/docs/Archive/Add-ons/Code_snippets/XML/base_function)
- <https://gist.github.com/leonderijke/c5cf7c5b2e424c0061d2>

## Specifications

| Specification                                               | Status         | Comment |
| ----------------------------------------------------------- | -------------- | ------- |
| [XML Base (Second Edition)](https://www.w3.org/TR/xmlbase/) | Recommendation |         |

## Browser compatibility

{{Compat("xml.attributes.base")}}

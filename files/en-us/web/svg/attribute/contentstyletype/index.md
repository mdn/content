---
title: contentStyleType
slug: Web/SVG/Attribute/contentStyleType
tags:
  - Deprecated
  - SVG
  - SVG Attribute
browser-compat: svg.elements.svg.contentStyleType
---
{{SVGRef}}{{deprecated_header}}

The **`contentStyleType`** attribute specifies the style sheet language for the given document fragment on the {{SVGElement("svg")}} element.

This language is used for all instances of style that do not specify their own styling language, such as the {{SVGAttr("style")}} attribute that is available on many elements. The value specifies a media type, per [MIME Part Two: Media Types \[RFC2046\]](http://www.ietf.org/rfc/rfc2046.txt).

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        One of the content types specified in the
        <a
          class="external external-icon"
          href="http://www.ietf.org/rfc/rfc2046.txt"
          rel="noopener"
          >Media Types</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>text/css</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

Since CSS is the only widely deployed style sheet language for online styling and it's already defined as default value if `contentStyleType` is omitted, the attribute is not well supported in user agents. If other style sheet languages become more popular they might not use the {{SVGAttr("style")}} attribute, instead it could be easily declared which style language is used in the {{SVGElement("style")}}'s type attribute.

The use of `contentStyleType` is therefore deprecated.

## Specifications

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Specification</th>
      <th scope="col">Status</th>
      <th scope="col">Comment</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {{SpecName("SVG1.1", "script.html#ContentScriptTypeAttribute", "contentScriptType")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Initial definition</td>
    </tr>
  </tbody>
</table>

## Browser compatibility

{{Compat}}

## See also

*   [MIME Part Two: Media Types \[RFC2046\]](http://www.ietf.org/rfc/rfc2046.txt)
*   {{SVGElement("style")}} element
*   {{SVGAttr("style")}} attribute

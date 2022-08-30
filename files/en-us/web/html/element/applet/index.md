---
title: '<applet>: The Embed Java Applet element'
slug: Web/HTML/Element/applet
tags:
  - Element
  - HTML
  - Java
  - Deprecated
  - Reference
  - Web
  - applet
browser-compat: html.elements.applet
---

{{HTMLRef}}{{Deprecated_Header}}

The obsolete **HTML Applet Element** (**`<applet>`**) embeds a Java applet into the document; this element has been deprecated in favor of {{HTMLElement("object")}}.

Use of Java applets on the Web is deprecated; most browsers no longer support use of plug-ins, including the Java plug-in.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories"
          >Content categories</a
        >
      </th>
      <td>
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#flow_content"
          >Flow content</a
        >,
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#phrasing_content"
          >phrasing content</a
        >,
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#embedded_content"
          >embedded content</a
        >, interactive content, palpable content.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        Zero or more {{HTMLElement("param")}} elements, then
        <a
          href="/en-US/docs/Web/Guide/HTML/Content_categories#transparent_content_model"
          >transparent</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>None, both the starting and ending tag are mandatory.</td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>
        Any element that accepts
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#embedded_content"
          >embedded content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{DOMxRef("HTMLAppletElement")}}</td>
    </tr>
  </tbody>
</table>

## Attributes

- {{HTMLAttrDef("align")}} {{Deprecated_Inline}}
  - : This attribute is used to position the applet on the page relative to content that might flow around it. The HTML 4.01 specification defines values of `bottom`, `left`, `middle`, `right`, and `top`, whereas Microsoft and Netscape also might support `absbottom`, `absmiddle`, `baseline`, `center`, and `texttop`.
- {{HTMLAttrDef("alt")}} {{Deprecated_Inline}}
  - : This attribute causes a descriptive text alternate to be displayed on browsers that do not support Java. Page designers should also remember that content enclosed within the `<applet>` element may also be rendered as alternative text.
- {{HTMLAttrDef("archive")}} {{Deprecated_Inline}}
  - : This attribute refers to an archived or compressed version of the applet and its associated class files, which might help reduce download time.
- {{HTMLAttrDef("code")}} {{Deprecated_Inline}}
  - : This attribute specifies the URL of the applet's class file to be loaded and executed. Applet filenames are identified by a .class filename extension. The URL specified by code might be relative to the `codebase` attribute.
- {{HTMLAttrDef("codebase")}} {{Deprecated_Inline}}
  - : This attribute gives the absolute or relative URL of the directory where applets' .class files referenced by the code attribute are stored.
- {{HTMLAttrDef("datafld")}} {{Deprecated_Inline}}
  - : This attribute, supported by Internet Explorer 4 and higher, specifies the column name from the data source object that supplies the bound data. This attribute might be used to specify the various {{HTMLElement("param")}} elements passed to the Java applet.
- {{HTMLAttrDef("datasrc")}} {{Deprecated_Inline}}
  - : Like `datafld`, this attribute is used for data binding under Internet Explorer 4. It indicates the id of the data source object that supplies the data that is bound to the {{HTMLElement("param")}} elements associated with the applet.
- {{HTMLAttrDef("height")}} {{Deprecated_Inline}}
  - : This attribute specifies the height, in pixels, that the applet needs.
- {{HTMLAttrDef("hspace")}} {{Deprecated_Inline}}
  - : This attribute specifies additional horizontal space, in pixels, to be reserved on either side of the applet.
- {{HTMLAttrDef("mayscript")}} {{Deprecated_Inline}}
  - : In the Netscape implementation, this attribute allows access to an applet by programs in a scripting language embedded in the document.
- {{HTMLAttrDef("name")}} {{Deprecated_Inline}}
  - : This attribute assigns a name to the applet so that it can be identified by other resources; particularly scripts.
- {{HTMLAttrDef("object")}} {{Deprecated_Inline}}
  - : This attribute specifies the URL of a serialized representation of an applet.
- {{HTMLAttrDef("src")}} {{Deprecated_Inline}}
  - : As defined for Internet Explorer 4 and higher, this attribute specifies a URL for an associated file for the applet. The meaning and use is unclear and not part of the HTML standard.
- {{HTMLAttrDef("vspace")}} {{Deprecated_Inline}}
  - : This attribute specifies additional vertical space, in pixels, to be reserved above and below the applet.
- {{HTMLAttrDef("width")}} {{Deprecated_Inline}}
  - : This attribute specifies in pixels the width that the applet needs.

## Example

### HTML

```html
<applet code="game.class" align="left" archive="game.zip" height="250" width="350">
  <param name="difficulty" value="easy">
  <p>Sorry, you need Java to play this game.</p>
</applet>
```

{{EmbedLiveSample("Example", "100%", 300)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

---
title: CSSStyleSheet
slug: Web/API/CSSStyleSheet
page-type: web-api-interface
tags:
  - API
  - CSS
  - CSSOM
  - CSSOM API
  - CSSStyleSheet
  - Interface
  - Layout
  - Object Model
  - Reference
  - StyleSheet
browser-compat: api.CSSStyleSheet
---
{{APIRef("CSSOM")}}

The **`CSSStyleSheet`** interface represents a single [CSS](/en-US/docs/Web/CSS) stylesheet, and lets you inspect and modify the list of rules contained in the stylesheet. It inherits properties and methods from its parent, {{domxref("StyleSheet")}}.

{{InheritanceDiagram}}

A stylesheet consists of a collection of {{domxref("CSSRule")}} objects representing each of the rules in the stylesheet. The rules are contained in a {{domxref("CSSRuleList")}}, which can be obtained from the stylesheet's {{domxref("CSSStyleSheet.cssRules", "cssRules")}} property.

For example, one rule might be a {{domxref("CSSStyleRule")}} object containing a style such as:

```css
h1, h2 {
  font-size: 16pt;
}
```

Another rule might be an _at-rule_ such as {{cssxref("@import")}} or {{cssxref("@media")}}, and so forth.

See the [Obtaining a StyleSheet](#obtaining_a_stylesheet) section for the various ways a `CSSStyleSheet` object can be obtained. A `CSSStyleSheet` object can also be directly constructed. The constructor, and the {{domxref("CSSStyleSheet.replace()")}}, and {{domxref("CSSStyleSheet.replaceSync()")}} methods are newer additions to the specification, enabling _Constructable Stylesheets_.

## Constructor

- {{domxref("CSSStyleSheet.CSSStyleSheet()", "CSSStyleSheet()")}}
  - : Creates a new `CSSStyleSheet` object.

## Properties

_Inherits properties from its parent, {{domxref("StyleSheet")}}._

- {{domxref("CSSStyleSheet.cssRules")}} {{ReadOnlyInline}}

  - : Returns a live {{domxref("CSSRuleList")}} which maintains an up-to-date list of the {{domxref("CSSRule")}} objects that comprise the stylesheet.

    > **Note:** In some browsers, if a stylesheet is loaded from a different domain, accessing `cssRules` results in a `SecurityError`.

- {{domxref("CSSStyleSheet.ownerRule")}} {{ReadOnlyInline}}
  - : If this stylesheet is imported into the document using an {{cssxref("@import")}} rule, the `ownerRule` property returns the corresponding {{domxref("CSSImportRule")}}; otherwise, this property's value is `null`.

## Methods

_Inherits methods from its parent, {{domxref("StyleSheet")}}._

- {{domxref("CSSStyleSheet.deleteRule()")}}
  - : Deletes the rule at the specified index into the stylesheet's rule list.
- {{domxref("CSSStyleSheet.insertRule()")}}
  - : Inserts a new rule at the specified position in the stylesheet, given the textual representation of the rule.
- {{domxref("CSSStyleSheet.replace()")}}
  - : Asynchronously replaces the content of the stylesheet and returns a {{jsxref("Promise")}} that resolves with the updated `CSSStyleSheet`.
- {{domxref("CSSStyleSheet.replaceSync()")}}
  - : Synchronously replaces the content of the stylesheet.

## Legacy properties

_These properties are legacy properties as introduced by Microsoft; these are maintained for compatibility with existing sites._

- {{domxref("CSSStyleSheet.rules", "rules")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : The `rules` property is functionally identical to the standard {{domxref("CSSStyleSheet.cssRules", "cssRules")}} property; it returns a live {{domxref("CSSRuleList")}} which maintains an up-to-date list of all of the rules in the style sheet.

## Legacy methods

_These methods are legacy methods as introduced by Microsoft; these are maintained for compatibility with existing sites._

- {{domxref("CSSStyleSheet.addRule", "addRule()")}} {{Deprecated_Inline}}

  - : Adds a new rule to the stylesheet given the selector to which the style applies and the style block to apply to the matching elements.

    This differs from {{domxref("CSSStyleSheet.insertRule", "insertRule()")}}, which takes the textual representation of the entire rule as a single string.

- {{domxref("CSSStyleSheet.removeRule", "removeRule()")}} {{Deprecated_Inline}}
  - : Functionally identical to {{domxref("CSSStyleSheet.deleteRule", "deleteRule()")}}; removes the rule at the specified index from the stylesheet's rule list.

## Obtaining a StyleSheet

A stylesheet is associated with at most one {{domxref("Document")}}, which it applies to (unless {{domxref("StyleSheet.disabled", "disabled", "", 1)}}). A list of `CSSStyleSheet` objects for a given document can be obtained using the {{domxref("Document.styleSheets")}} property. A specific style sheet can also be accessed from its _owner_ object (`Node` or `CSSImportRule`), if any.

A `CSSStyleSheet` object is created and inserted into the document's {{domxref("Document.styleSheets")}} list automatically by the browser, when a stylesheet is loaded for a document.

A (possibly incomplete) list of ways a stylesheet can be associated with a document follows:

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">
        Reason for the style sheet to be associated with the document
      </th>
      <th scope="col">
        Appears in <code>document.<br />styleSheets</code> list
      </th>
      <th scope="col">
        Getting the owner element/rule given the style sheet object
      </th>
      <th scope="col">The interface for the owner object</th>
      <th scope="col">Getting the CSSStyleSheet object from the owner</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {{HTMLElement("style")}} and {{HTMLElement("link")}}
        elements in the document
      </td>
      <td>Yes</td>
      <td>{{domxref("StyleSheet.ownerNode", ".ownerNode")}}</td>
      <td>
        {{domxref("HTMLLinkElement")}},<br />{{domxref("HTMLStyleElement")}},<br />or
        {{domxref("SVGStyleElement")}}
      </td>
      <td>
        {{domxref("HTMLLinkElement.sheet")}},<br />{{domxref("HTMLStyleElement.sheet")}},<br />or
        {{domxref("SVGStyleElement.sheet")}}
      </td>
    </tr>
    <tr>
      <td>
        CSS {{cssxref("@import")}} rule in other style sheets applied to
        the document
      </td>
      <td>Yes</td>
      <td>
        {{domxref("CSSStyleSheet.ownerRule", ".ownerRule")}}
      </td>
      <td>{{domxref("CSSImportRule")}}</td>
      <td>
        {{domxref("CSSImportRule.styleSheet", ".styleSheet")}}
      </td>
    </tr>
    <tr>
      <td>
        <code>&#x3C;?xml-stylesheet ?></code> processing instruction in the
        (non-HTML) document
      </td>
      <td>Yes</td>
      <td>{{domxref("StyleSheet.ownerNode", ".ownerNode")}}</td>
      <td>{{domxref("ProcessingInstruction")}}</td>
      <td>
        {{domxref("ProcessingInstruction.sheet", ".sheet")}}
      </td>
    </tr>
    <tr>
      <td>HTTP Link Header</td>
      <td>Yes</td>
      <td><em>N/A</em></td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
    <tr>
      <td>User agent (default) style sheets</td>
      <td>No</td>
      <td>N/A</td>
      <td>N/A</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS Object Model](/en-US/docs/Web/API/CSS_Object_Model)
- [Using dynamic styling information](/en-US/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)

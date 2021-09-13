---
title: CSSStyleSheet
slug: Web/API/CSSStyleSheet
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
<div>{{APIRef("CSSOM")}}</div>

<p>The <strong><code>CSSStyleSheet</code></strong> interface represents a single <a href="/en-US/docs/Web/CSS">CSS</a> stylesheet, and lets you inspect and modify the list of rules contained in the stylesheet. It inherits properties and methods from its parent, {{domxref("StyleSheet")}}.</p>

<p>A stylesheet consists of a collection of {{domxref("CSSRule")}} objects representing each of the rules in the stylesheet. The rules are contained in a {{domxref("CSSRuleList")}}, which can be obtained from the stylesheet's {{domxref("CSSStyleSheet.cssRules", "cssRules")}} property.</p>

<p>For example, one rule might be a {{domxref("CSSStyleRule")}} object containing a style such as:</p>

<pre class="brush: css">h1, h2 {
  font-size: 16pt;
}
</pre>

<p>Another rule might be an <em>at-rule</em> such as {{cssxref("@import")}} or {{cssxref("@media")}}, and so forth.</p>

<p>See the {{anch("Obtaining a StyleSheet")}} section for the various ways a <code>CSSStyleSheet</code> object can be obtained. A <code>CSSStyleSheet</code> object can also be directly constructed. The constructor, and the {{domxref("CSSStyleSheet.replace()")}}, and {{domxref("CSSStyleSheet.replaceSync()")}} methods are newer additions to the specification, enabling <em>Constructable Stylesheets</em>.</p>

<h2 id="Constructor">Constructor</h2>

<dl>
  <dt>{{domxref("CSSStyleSheet.CSSStyleSheet()")}}</dt>
  <dd>Creates a new <code>CSSStyleSheet</code> object.</dd>
</dl>

<h2 id="Properties">Properties</h2>

<p><em>Inherits properties from its parent, {{domxref("StyleSheet")}}.</em></p>

<dl>
 <dt>{{domxref("CSSStyleSheet.cssRules")}}{{ReadOnlyInline}}</dt>
 <dd>Returns a live {{domxref("CSSRuleList")}} which maintains an up-to-date list of the {{domxref("CSSRule")}} objects that comprise the stylesheet.
    <div class="notecard note"><p><strong>Note:</strong> In some browsers, if a stylesheet is loaded from a different domain, accessing <code>cssRules</code> results in a<code>SecurityError</code>.</p></div>

 </dd>
 <dt>{{domxref("CSSStyleSheet.ownerRule")}}{{ReadOnlyInline}}</dt>
 <dd>If this stylesheet is imported into the document using an {{cssxref("@import")}} rule, the <code>ownerRule</code> property returns the corresponding {{domxref("CSSImportRule")}}; otherwise, this property's value is <code>null</code>.</dd>
</dl>

<h2 id="Methods">Methods</h2>

<p><em>Inherits methods from its parent, {{domxref("StyleSheet")}}.</em></p>

<dl>
 <dt>{{domxref("CSSStyleSheet.deleteRule()")}}</dt>
 <dd>Deletes the rule at the specified index into the stylesheet's rule list.</dd>
 <dt>{{domxref("CSSStyleSheet.insertRule()")}}</dt>
 <dd>Inserts a new rule at the specified position in the stylesheet, given the textual representation of the rule.</dd>
 <dt>{{domxref("CSSStyleSheet.replace()")}}</dt>
 <dd>Asynchronously replaces the content of the stylesheet and returns a {{jsxref("Promise")}} that resolves with the updated <code>CSSStyleSheet</code>.</dd>
 <dt>{{domxref("CSSStyleSheet.replaceSync()")}}</dt>
 <dd>Synchronously replaces the content of the stylesheet.</dd>
</dl>

<h2 id="Legacy_properties">Legacy properties</h2>

<p><em>These properties are legacy properties as introduced by Microsoft; these are maintained for compatibility with existing sites.</em></p>

<dl>
 <dt>{{domxref("CSSStyleSheet.rules", "rules")}} {{ReadOnlyInline}}</dt>
 <dd>The <code>rules</code> property is functionally identical to the standard {{domxref("CSSStyleSheet.cssRules", "cssRules")}} property; it returns a live {{domxref("CSSRuleList")}} which maintains an up-to-date list of all of the rules in the style sheet.</dd>
</dl>

<h2 id="Legacy_methods">Legacy methods</h2>

<p><em>These methods are legacy methods as introduced by Microsoft; these are maintained for compatibility with existing sites.</em></p>

<dl>
 <dt>{{domxref("CSSStyleSheet.addRule", "addRule()")}}</dt>
 <dd>
 <p>Adds a new rule to the stylesheet given the selector to which the style applies and the style block to apply to the matching elements.</p>

 <p>This differs from {{domxref("CSSStyleSheet.insertRule", "insertRule()")}}, which takes the textual representation of the entire rule as a single string.</p>
 </dd>
 <dt>{{domxref("CSSStyleSheet.removeRule", "removeRule()")}}</dt>
 <dd>Functionally identical to {{domxref("CSSStyleSheet.deleteRule", "deleteRule()")}}; removes the rule at the specified index from the stylesheet's rule list.</dd>
</dl>

<h2 id="Obtaining_a_Stylesheet">Obtaining a StyleSheet</h2>

<p>A stylesheet is associated with at most one {{domxref("Document")}}, which it applies to (unless {{domxref("StyleSheet.disabled", "disabled", "", 1)}}). A list of <code>CSSStyleSheet</code> objects for a given document can be obtained using the {{domxref("Document.styleSheets")}} property. A specific style sheet can also be accessed from its <em>owner</em> object (<code>Node</code> or <code>CSSImportRule</code>), if any.</p>

<p>A <code>CSSStyleSheet</code> object is created and inserted into the document's {{domxref("Document.styleSheets")}} list automatically by the browser, when a stylesheet is loaded for a document.</p>

<p>A (possibly incomplete) list of ways a stylesheet can be associated with a document follows:</p>

<table class="no-markdown">
 <thead>
  <tr>
   <th scope="col">Reason for the style sheet to be associated with the document</th>
   <th scope="col">Appears in <code>document.<br>
    styleSheets</code> list</th>
   <th scope="col">Getting the owner element/rule given the style sheet object</th>
   <th scope="col">The interface for the owner object</th>
   <th scope="col">Getting the CSSStyleSheet object from the owner</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{HTMLElement("style")}} and {{HTMLElement("link")}} elements in the document</td>
   <td>Yes</td>
   <td>{{domxref("StyleSheet.ownerNode", ".ownerNode")}}</td>
   <td>{{domxref("HTMLLinkElement")}},<br>
    {{domxref("HTMLStyleElement")}},<br>
    or {{domxref("SVGStyleElement")}}</td>
   <td>{{domxref("HTMLLinkElement.sheet")}},<br>
    {{domxref("HTMLStyleElement.sheet")}},<br>
    or {{domxref("SVGStyleElement.sheet")}}</td>
  </tr>
  <tr>
   <td>CSS {{cssxref("@import")}} rule in other style sheets applied to the document</td>
   <td>Yes</td>
   <td>{{domxref("CSSStyleSheet.ownerRule", ".ownerRule")}}</td>
   <td>{{domxref("CSSImportRule")}}</td>
   <td>{{domxref("CSSImportRule.styleSheet", ".styleSheet")}}</td>
  </tr>
  <tr>
   <td><code>&lt;?xml-stylesheet ?&gt;</code> processing instruction in the (non-HTML) document</td>
   <td>Yes</td>
   <td>{{domxref("StyleSheet.ownerNode", ".ownerNode")}}</td>
   <td>{{domxref("ProcessingInstruction")}}</td>
   <td>{{domxref("ProcessingInstruction.sheet", ".sheet")}}</td>
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

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/CSS_Object_Model">CSS Object Model</a></li>
 <li><a href="/en-US/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information">Using dynamic styling information</a></li>
</ul>

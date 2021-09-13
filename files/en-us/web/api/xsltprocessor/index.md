---
title: XSLTProcessor
slug: Web/API/XSLTProcessor
tags:
- API
- DOM
- DOM Reference
- Reference
- XSLT
browser-compat: api.XSLTProcessor
---
<div>{{Non-standard_header}}{{SeeCompatTable}}{{APIRef("XSLT")}}</div>

<p>An <strong><code>XSLTProcessor</code></strong> applies an <a
    href="/en-US/docs/Web/XSLT">XSLT</a> stylesheet transformation to an XML document to
  produce a new XML document as output. It has methods to load the XSLT stylesheet, to
  manipulate <code>&lt;xsl:param&gt;</code> parameter values, and to apply the
  transformation to documents.</p>

<h2 id="Syntax">Syntax</h2>

<p>The constructor has no parameters.</p>

<pre class="brush: js">new XSLTProcessor()</pre>

<h2 id="Methods">Methods</h2>

<dl>
  <dt>
    <code><a href="/en-US/docs/Mozilla/WebIDL_bindings#Throws">[Throws]</a> void </code>{{domxref("XSLTProcessor.importStylesheet")}}<code>(</code>{{domxref("Node")}}<code> styleSheet)</code>
  </dt>
  <dd>Imports the XSLT stylesheet. If the given node is a document node, you can pass in a
    full XSL Transform or a <a class="external"
      href="https://www.w3.org/TR/xslt#result-element-stylesheet">literal result element
      transform</a>; otherwise, it must be an <code>&lt;xsl:stylesheet&gt;</code> or
    <code>&lt;xsl:transform&gt;</code> element.</dd>
  <dt>
    <code><a href="/en-US/docs/Mozilla/WebIDL_bindings#Throws">[Throws]</a> </code>{{domxref("DocumentFragment")}}
    {{domxref("XSLTProcessor.transformToFragment")}}<code>(</code>{{domxref("Node")}}<code> source, </code>{{domxref("Document")}}<code> owner)</code>
  </dt>
  <dd>Transforms the node source by applying the stylesheet imported using the
    {{domxref("XSLTProcessor.importStylesheet()")}} function. The owner document of the
    resulting document fragment is the owner node.</dd>
  <dt><code><a href="/en-US/docs/Mozilla/WebIDL_bindings#Throws">[Throws]</a></code>
    {{domxref("Document")}}
    {{domxref("XSLTProcessor.transformToDocument")}}<code>(</code>{{domxref("Node")}}<code> source)</code>
  </dt>
  <dd>
    <p>Transforms the node source applying the stylesheet given importing using the
      {{domxref("XSLTProcessor.importStylesheet()")}} function.</p>

    <p>The resultant object depends on the <a class="external"
        href="https://www.w3.org/TR/xslt#output">output method</a> of the stylesheet:</p>

    <table class="standard-table">
      <thead>
        <tr>
          <th scope="col">Output method</th>
          <th scope="col">Result type</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>html</code></td>
          <td>{{domxref("HTMLDocument")}}</td>
        </tr>
        <tr>
          <td><code>xml</code></td>
          <td>{{domxref("XMLDocument")}}</td>
        </tr>
        <tr>
          <td><code>text</code></td>
          <td>{{domxref("XMLDocument")}} with a single root element
            <code>&lt;transformiix:result&gt;</code> with the text as a child</td>
        </tr>
      </tbody>
    </table>
  </dd>
  <dt>
    <code><a href="/en-US/docs/Mozilla/WebIDL_bindings#Throws">[Throws]</a> void </code>{{domxref("XSLTProcessor.setParameter")}}<code>(</code>{{jsxref("String")}}<code> namespaceURI, </code>{{jsxref("String")}}<code> localName, any value)</code>
  </dt>
  <dd>Sets a parameter in the XSLT stylesheet that was imported. (Sets the value of an
    <code>&lt;xsl:param&gt;</code>.) A null value for <code>namespaceURI</code> is treated
    the same as an empty string.</dd>
  <dt>
    <code><a href="/en-US/docs/Mozilla/WebIDL_bindings#Throws">[Throws]</a> any </code>{{domxref("XSLTProcessor.getParameter")}}<code>(</code>{{jsxref("String")}}<code> namespaceURI, </code>{{jsxref("String")}}<code> localName)</code>
  </dt>
  <dd>Gets the value of a parameter from the XSLT stylesheet. A null value for
    <code>namespaceURI</code> is treated the same as an empty string.</dd>
  <dt>
    <code><a href="/en-US/docs/Mozilla/WebIDL_bindings#Throws">[Throws]</a> void </code>{{domxref("XSLTProcessor.removeParameter")}}<code>(</code>{{jsxref("String")}}<code> namespaceURI, </code>{{jsxref("String")}}<code> localName)</code>
  </dt>
  <dd>Removes the parameter if it was previously set. This will make the
    <code>XSLTProcessor</code> use the default value for the parameter as specified in the
    stylesheet. A null value for <code>namespaceURI</code> is treated the same as an empty
    string.</dd>
  <dt><code>void </code>{{domxref("XSLTProcessor.clearParameters()")}}</dt>
  <dd>Removes all set parameters from the <code>XSLTProcessor</code>. The
    <code>XSLTProcessor</code> will then use the defaults specified in the XSLT
    stylesheet.</dd>
  <dt><code>void </code>{{domxref("XSLTProcessor.reset()")}}</dt>
  <dd>Removes all parameters and stylesheets from the <code>XSLTProcessor</code>.</dd>
</dl>

<h2 id="Properties">Properties</h2>

<h3 id="Non-Web-exposed_properties">Non-Web-exposed properties</h3>

<p>The following properties are <a
    href="/en-US/docs/Mozilla/WebIDL_bindings#ChromeOnly"><code>[ChromeOnly]</code></a>
  and not exposed to Web content:</p>

<dl>
  <dt>
    <code><a href="/en-US/docs/Mozilla/WebIDL_bindings#ChromeOnly">[ChromeOnly]</a> attribute unsigned long </code>{{domxref("XSLTProcessor.flags")}}
  </dt>
  <dd>
    <p>Flags that tweak the behavior of the processor. Not reset by calling
      {{domxref("XSLTProcessor.reset()")}}. Default value: <code>0</code></p>

    <p>Possible values are:</p>

    <table class="standard-table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Value</th>
          <th scope="col">Effect</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>(None)</td>
          <td><code>0</code></td>
          <td>None</td>
        </tr>
        <tr>
          <td><code>DISABLE_ALL_LOADS</code></td>
          <td><code>1</code></td>
          <td>Disable loading external documents (via e.g. <code>&lt;xsl:import&gt;</code>
            and <code>document()</code>)</td>
        </tr>
      </tbody>
    </table>
  </dd>
</dl>

<h2 id="Examples">Examples</h2>

<ol>
  <li><a href="/en-US/docs/XSLT/XSLT_JS_Interface_in_Gecko/Basic_Example">Basic
      example</a></li>
  <li><a href="/en-US/docs/XSLT/XSLT_JS_Interface_in_Gecko/Advanced_Example">Advanced
      example</a></li>
  <li><a
      href="/en-US/docs/XSLT/XSLT_JS_Interface_in_Gecko/JavaScript_XSLT_Bindings">Additional
      example</a></li>
</ol>

<h2 id="Specifications">Specifications</h2>

<p><em>Not part of any specification.</em> This is a proprietary interface that originated
  in Gecko.</p>

<h2 id="Gecko_IDL">Gecko IDL</h2>

<ul>
  <li><code>{{ Source("dom/webidl/XSLTProcessor.webidl", "XSLTProcessor.webidl") }}</code>
  </li>
  <li><code>{{ Source("dom/xslt/nsIXSLTProcessor.idl", "nsIXSLTProcessor.idl") }}</code>
  </li>
</ul>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a
      href="/en-US/docs/Using_the_Mozilla_JavaScript_interface_to_XSL_Transformations">Using
      the Mozilla JavaScript interface to XSL Transformations</a></li>
</ul>

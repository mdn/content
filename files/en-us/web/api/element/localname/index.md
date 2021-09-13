---
title: Element.localName
slug: Web/API/Element/localName
tags:
- API
- DOM
- NeedsBrowserCompatibility
- NeedsMobileBrowserCompatibility
- Property
- Reference
browser-compat: api.Element.localName
---
<div>{{APIRef("DOM")}}</div>

<p>The <code><strong>Element.localName</strong></code> read-only property returns the
  local part of the qualified name of an element.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><var>name</var> = <var>element</var>.localName
</pre>

<h3 id="Return_value">Return value</h3>

<p>A {{domxref("DOMString")}} representing the local part of the element's qualified name.
</p>

<h2 id="Example">Example</h2>

<p>(Must be served with XML content type, such as <code>text/xml</code> or
  <code>application/xhtml+xml</code>.)</p>

<pre class="brush:xml">&lt;html xmlns="http://www.w3.org/1999/xhtml"
      xmlns:svg="http://www.w3.org/2000/svg"&gt;
&lt;head&gt;
  &lt;script type="application/javascript"&gt;&lt;![CDATA[
  function test() {
    var text = document.getElementById('text');
    var circle = document.getElementById('circle');

    text.value = "&lt;svg:circle&gt; has:\n" +
                 "localName = '" + circle.localName + "'\n" +
                 "namespaceURI = '" + circle.namespaceURI + "'";
  }
  ]]&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body onload="test()"&gt;
  &lt;svg:svg version="1.1"
    width="100px" height="100px"
    viewBox="0 0 100 100"&gt;
    &lt;svg:circle cx="50" cy="50" r="30" style="fill:#aaa" id="circle"/&gt;
  &lt;/svg:svg&gt;
  &lt;textarea id="text" rows="4" cols="55"/&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>

<h2 id="Notes">Notes</h2>

<p>The local name of a node is that part of the node's qualified name that comes after the
  colon. Qualified names are typically used in XML as part of the namespace(s) of the
  particular XML documents. For example, in the qualified name
  <code>ecomm:partners</code>, <code>partners</code> is the local name and
  <code>ecomm</code> is the prefix:</p>

<pre class="brush:xml">&lt;ecomm:business id="soda_shop" type="brick_n_mortar" xmlns:ecomm="http://example.com/ecomm"&gt;
  &lt;ecomm:partners&gt;
    &lt;ecomm:partner id="1001"&gt;Tony's Syrup Warehouse
    &lt;/ecomm:partner&gt;
  &lt;/ecomm:partner&gt;
&lt;/ecomm:business&gt;
</pre>

<div class="note">
  <p><strong>Note:</strong> In {{Gecko("1.9.2")}} and earlier, the property returns the
    upper-cased version of the local name for HTML elements in HTML DOMs (as opposed to
    XHTML elements in XML DOMs). In later versions, in compliance with HTML5, the property
    returns in the case of the internal DOM storage, which is lower case for both HTML
    elements in HTML DOMs and XHTML elements in XML DOMs. The
    {{domxref("element.tagName","tagName")}} property continues to return in the upper
    case for HTML elements in HTML DOMs.</p>
</div>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{domxref("Element.namespaceURI")}}</li>
  <li>{{domxref("Element.prefix")}}</li>
  <li>{{domxref("Attr.localName")}}</li>
</ul>

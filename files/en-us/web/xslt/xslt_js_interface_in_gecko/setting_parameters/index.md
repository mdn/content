---
title: Setting Parameters
slug: Web/XSLT/XSLT_JS_interface_in_Gecko/Setting_Parameters
tags:
  - XSLT
---
<h2 id="Setting_Parameters">Setting Parameters</h2>

<p>While running transformations using precoded .xsl and .xml files is quite useful, configuring the .xsl file from JavaScript may be even more useful. For example, JavaScript and XSLT could be used to sort XML data and then display it. The sorting would have to alternate between ascending and descending sorting.</p>

<p>XSLT provides the <code>xsl:param</code> element, which is a child of the <code>xsl:stylesheet</code> element. {{domxref('XSLTProcessor')}} provides three JavaScript methods to interact with these parameters: {{domxref('XSLTProcessor.setParameter()')}}, {{domxref('XSLTProcessor.getParameter()')}} and {{domxref('XSLTProcessor.removeParameter()')}}. They all take as the first argument the namespace URI of the <code>xsl:param</code> (Usually the param will fall in the default namespace, so passing in <code>null</code> will suffice.) The local name of the <code>xsl:param</code> is the second argument. setParameter requires a third argument - namely the value to which the parameter will be set.</p>

<p><small><strong>Figure 7 : Parameters</strong></small></p>

<pre class="brush: js">/* XSLT:

&lt;xsl:param name="myOrder" /&gt;

*/

// JavaScript:

var sortVal = xsltProcessor.getParameter(null, "myOrder");

if (sortVal == "" || sortVal == "descending")
  xsltProcessor.setParameter(null, "myOrder", "ascending");
else
  xsltProcessor.setParameter(null, "myOrder", "descending");
</pre>

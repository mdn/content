---
title: Namespaces crash course
slug: Web/SVG/Namespaces_Crash_Course
tags:
  - SVG
  - XML
---
<p>As an <a href="/en-US/docs/Glossary/XML">XML</a> dialect, <a href="/en-US/docs/Web/SVG">SVG</a> is namespaced. It is important to understand the concept of namespaces and how they are used if you plan to author SVG content. Versions of SVG viewers prior to the release of Firefox 1.5 unfortunately paid scant attention to namespaces, but they are essential to multi-XML dialect supporting user agents such as <a href="/en-US/docs/Mozilla/Gecko">Gecko</a>-based browsers which must be very strict. Take some time to understand namespaces now and it will save you all sorts of headaches in the future.</p>

<h3 id="Background">Background</h3>

<p>It has been a long standing goal of the W3C to make it possible for different types of XML based content to be mixed together in the same XML file. For example, SVG and <a href="/en-US/docs/Web/MathML">MathML</a> might be incorporated directly into an XHTML based scientific document. Being able to mix content types like this has many advantages, but it also required a very real problem to be solved.</p>

<p>Naturally, each XML dialect defines the meaning of the markup element names described in its specification. The problem with mixing content from different XML dialects in a single XML document is that the elements defined by one dialect may have the same name as elements defined by another. For example, both XHTML and SVG have a <code>&lt;title&gt;</code> element. How should the user agent distinguish between the two? In fact how does the user agent tell when XML content is something it knows about, and not just a meaningless XML file containing arbitrary element names unknown to it?</p>

<p>Contrary to popular opinion, the answer to this question is not "it can tell from the <code>DOCTYPE</code> declaration". DTDs were never designed with mixed content in mind, and past attempts to create mixed content DTDs are now considered to have failed. XML, and some XML dialects (SVG included), don't require a <code>DOCTYPE</code> declaration, and SVG 1.2 won't even have one. The fact that <code>DOCTYPE</code> declarations (usually) match the content in single content type files is merely coincidental. DTDs are for validation only, not identification of content. User agents that cheat and identify XML content using its <code>DOCTYPE</code> declaration cause harm.</p>

<p>The real answer to the question is that XML content tells the user agent which dialect the element names belong to by giving them explicit "namespace declarations".</p>

<h3 id="Declaring_namespaces">Declaring namespaces</h3>

<p>So what do these namespace declarations look like, and where do they go? Here is a short example.</p>

<pre>&lt;svg xmlns="http://www.w3.org/2000/svg"&gt;
  &lt;!-- more tags here --&gt;
&lt;/svg&gt;
</pre>

<p>The namespace declaration is provided by the <code>xmlns</code> parameter. This parameter says that the <code>&lt;svg&gt;</code> element and its child elements belong to whichever XML dialect has the namespace name <code>http://www.w3.org/2000/svg</code> which is, of course, SVG. Note that the namespace declaration only needs to be provided once on a root element. The declaration defines the <em>default</em> namespace, so the user agent knows that all the <code>&lt;svg&gt;</code> element's descendants also belong to the same namespace. User agents check to see if they recognize the namespace name to determine if they know how to handle the markup.</p>

<p>Note that namespace names are just strings, so the fact that the SVG namespace name also looks like a URI isn't important. URIs are commonly used because they are unique, the intention is not to "link" somewhere. (In fact URIs are used so frequently that the term "namespace URI" is commonly used instead of "namespace name".)</p>

<h4 id="Redeclaring_the_default_namespace">Redeclaring the default namespace</h4>

<p>So if all the descendants of the root element are also defined to be in the default namespace, how do you mix in content from another namespace? Easy. You just redefine the default namespace. Here's a short example.</p>

<pre>&lt;html xmlns="http://www.w3.org/1999/xhtml"&gt;
  &lt;body&gt;
    &lt;!-- some XHTML tags here --&gt;
    &lt;svg xmlns="http://www.w3.org/2000/svg" width="300px" height="200px"&gt;
      &lt;!-- some SVG tags here --&gt;
    &lt;/svg&gt;
    &lt;!-- some XHTML tags here --&gt;
  &lt;/body&gt;
&lt;/html&gt;
</pre>

<p>In this example the <code>xmlns</code> parameter on the root <code>&lt;html&gt;</code> element declares the default namespace to be XHTML. As a result, it and all its child elements are interpreted by the user agent as belonging to XHTML, except for the <code>&lt;svg&gt;</code> element. The <code>&lt;svg&gt;</code> element has its own <code>xmlns</code> parameter, and by redeclaring the default namespace, this tells the user agent that the <code>&lt;svg&gt;</code> element and its descendants (unless they also redeclare the default namespace) belong to SVG.</p>

<p>See, namespaces really aren't that hard.</p>

<h4 id="Declaring_namespace_prefixes">Declaring namespace prefixes</h4>

<p>XML dialects not only define their own elements, but also their own parameters. By default, parameters don't have a namespace at all, and are only known to be unique because they appear on an element that itself has a unique name. However, sometimes it is necessary to define parameters so that they can be reused on many different elements and still be considered to be the same parameter, independently of the element with which they are used. A very good example of this is the <code>href</code> parameter defined by the XLink specification. This parameter is commonly used by other XML dialects as a means to link to external resources. But how do you tell the user agent which dialect the parameter belongs to, in this case XLink? Consider the following example.</p>

<pre>&lt;svg xmlns="http://www.w3.org/2000/svg"
     xmlns:xlink="http://www.w3.org/1999/xlink"&gt;
  &lt;script xlink:href="cool-script.js" type="text/ecmascript"/&gt;
&lt;/svg&gt;
</pre>

<p>This example has the rather unusual looking parameter <code>xmlns:xlink</code>. As you may guess from the first 'xmlns' part, this is another namespace declaration. However, instead of setting the default namespace, this namespace declaration sets the namespace for something called a "namespace prefix". In this case, we have chosen to use the prefix <code>xlink</code> (the second part) since the prefix will be used to tell the user agent about attributes that belong to XLink.</p>

<p>As their name suggests, namespace prefixes are used to prefix parameter and element names. This is done by putting the namespace prefix and a colon before the parameter name as shown on the <code>&lt;script&gt;</code> element in the example above. This tells the user agent that the particular parameter belongs to the namespace assigned to the namespace prefix (XLink), and is a parameter that can be used with the same meaning on other elements.</p>

<p>Note that it is an XML error to use a prefix that hasn't been bound to a namespace name. The binding created by the <code>xmlns:xlink</code> parameter in the example above is absolutely essential for the <code>xlink:href</code> parameter to not cause an error. This XLink parameter is also frequently used in SVG on the <code>&lt;a&gt;</code>, <code>&lt;use&gt;</code> and <code>&lt;image&gt;</code> elements among others, so it's a good idea to always include the XLink declaration in your documents.</p>

<p>As an aside, it's useful to know that namespace prefixes can also be used for element names. This tells the user agent that the particular element (but not its children this time!) belongs to the namespace assigned to the prefix. Knowing this will save you some confusion if you come across markup like in the following example:</p>

<pre>&lt;html xmlns="http://www.w3.org/1999/xhtml"
      xmlns:svg="http://www.w3.org/2000/svg"&gt;
  &lt;body&gt;
    &lt;h1&gt;SVG embedded inline in XHTML&lt;/h1&gt;
    &lt;svg:svg width="300px" height="200px"&gt;
      &lt;svg:circle cx="150" cy="100" r="50" fill="#ff0000"/&gt;
    &lt;/svg:svg&gt;
  &lt;/body&gt;
&lt;/html&gt;
</pre>

<p>Note that because a namespace prefix is used for the <code>&lt;svg:svg&gt;</code> element and its child <code>&lt;svg:circle&gt;</code>, it wasn't necessary to redeclare the default namespace. In general though it is better to redeclare the default namespace rather than prefix lots of elements in this way.</p>

<h3 id="Scripting_in_namespaced_XML">Scripting in namespaced XML</h3>

<p>Namespaces affect not only markup, but also scripting. If you write scripts for namespaced XML such as SVG, read on.</p>

<p>The <a href="https://www.w3.org/TR/REC-DOM-Level-1/">DOM Level 1</a> recommendation was created before the <a href="https://www.w3.org/TR/REC-xml-names/">original Namespaces in XML</a> recommendation was released; therefore, DOM1 isn't namespace aware. This causes problems for namespaced XML such as SVG. To resolve these problems, <a href="https://www.w3.org/TR/DOM-Level-2-Core/">DOM Level 2 Core</a> added namespace aware equivalents of all the applicable DOM Level 1 methods. When scripting SVG, it is important to use the <a href="https://www.w3.org/TR/DOM-Level-2-Core/core.html#Namespaces-Considerations">namespace aware methods</a>. The table below lists the DOM1 methods that shouldn't be used in SVG, along with their equivalent DOM2 counterparts that should be used instead.</p>

<table class="fullwidth-table">
 <tbody>
  <tr>
   <th>DOM1 (don't use)</th>
   <th>DOM2 (use these instead!)</th>
  </tr>
  <tr>
   <td><a href="https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-createAttribute">createAttribute</a></td>
   <td><a href="https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-DocCrAttrNS">createAttributeNS</a></td>
  </tr>
  <tr>
   <td><a href="https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-createElement">createElement</a></td>
   <td><a href="https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-DocCrElNS">createElementNS</a></td>
  </tr>
  <tr>
   <td><a href="https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-getAttributeNode">getAttributeNode</a></td>
   <td><a href="https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElGetAtNodeNS">getAttributeNodeNS</a></td>
  </tr>
  <tr>
   <td><a href="https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-getAttribute">getAttribute</a></td>
   <td><a href="https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElGetAttrNS">getAttributeNS</a></td>
  </tr>
  <tr>
   <td><a href="https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-getElementsByTagName">getElementsByTagName</a></td>
   <td><a href="https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-getElBTNNS">getElementsByTagNameNS</a> (also <a href="https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-A6C90942">added to Element</a>)</td>
  </tr>
  <tr>
   <td><a href="https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-getNamedItem">getNamedItem</a></td>
   <td><a href="https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-getNamedItemNS">getNamedItemNS</a></td>
  </tr>
  <tr>
   <td><a href="https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#">hasAttribute</a></td>
   <td><a href="https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElHasAttrNS">hasAttributeNS</a></td>
  </tr>
  <tr>
   <td><a href="https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-removeAttribute">removeAttribute</a></td>
   <td><a href="https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElRemAtNS">removeAttributeNS</a></td>
  </tr>
  <tr>
   <td><a href="https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-removeNamedItem">removeNamedItem</a></td>
   <td><a href="https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-removeNamedItemNS">removeNamedItemNS</a></td>
  </tr>
  <tr>
   <td><a href="https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-setAttribute">setAttribute</a></td>
   <td><a href="https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElSetAttrNS">setAttributeNS</a></td>
  </tr>
  <tr>
   <td><a href="https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-setAttributeNode">setAttributeNode</a></td>
   <td><a href="https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElSetAtNodeNS">setAttributeNodeNS</a></td>
  </tr>
  <tr>
   <td><a href="https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-setNamedItem">setNamedItem</a></td>
   <td><a href="https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-setNamedItemNS">setNamedItemNS</a></td>
  </tr>
 </tbody>
</table>

<p>The first parameter for all the DOM2 namespace aware methods must be the namespace name (also known as the namespace URI) of the element or parameter in question. For SVG <strong>elements</strong> this is <code>http://www.w3.org/2000/svg</code>. However, note carefully: the <a href="https://www.w3.org/TR/xml-names11/#defaulting">Namespaces in XML 1.1</a> recommendation states that the namespace name for parameters without a prefix does not have a value. In other words, although the parameters belong to the namespace of the element, you do not use the tag's namespace name. Instead, <strong>you must use null as the namespace name for unqualified (prefixless) parameters</strong>. So, to create an SVG <code>rect</code> <em>element</em> using <code>document.createElementNS()</code>, you must write:</p>

<pre><code class="language-javascript">document.createElementNS('http://www.w3.org/2000/svg', 'rect');</code></pre>

<p>But to retrieve the value of the <code>x</code><em>parameter</em> on an SVG <code>rect</code> element, you must write:</p>

<pre class="eval"><code class="language-javascript">rect.getAttributeNS(<strong>null</strong>, 'x');</code></pre>

<p>Note that this isn't the case for parameters <em>with</em> a namespace prefix (parameters that don't belong to the same XML dialect as the element). Parameters such as <code>xlink:href</code> require the namespace name that was assigned to that prefix (<code>http://www.w3.org/1999/xlink</code> for XLink). Hence to get the value of the <code>xlink:href</code> parameter of an <code>&lt;a&gt;</code> element in SVG you would write:</p>

<pre><code class="language-javascript">elt.getAttributeNS('http://www.w3.org/1999/xlink', 'href');</code></pre>

<p>For setting parameters that have a namespace, it is recommended (but not required) that you also include their prefix in the second parameter so that the DOM can later be more easily converted back to XML (if for instance you want to send it back to the server). For example:</p>

<pre><code class="language-javascript">elt.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', 'otherdoc.svg');</code></pre>

<p>As a final example, here's a demonstration of how you should dynamically create an <code>&lt;image&gt;</code> element using script:</p>

<pre><code class="language-javascript">var SVG_NS = 'http://www.w3.org/2000/svg';
var XLink_NS = 'http://www.w3.org/1999/xlink';
var image = document.createElementNS(SVG_NS, 'image');
image.setAttributeNS(null, 'width', '100');
image.setAttributeNS(null, 'height', '100');
image.setAttributeNS(XLink_NS, 'xlink:href', 'flower.png');
</code></pre>

<h3 id="Conclusion">Conclusion</h3>

<p>Make sure you always declare the namespaces you use in your XML files. If you don't, user agents such as Firefox won't recognize your content and will show the XML markup or inform the user that there's an error in the XML. It's a good idea to use a template that includes all the commonly used namespace declarations when creating new SVG files. If you don't already have one, make one up starting with the following code:</p>

<pre>&lt;svg xmlns="http://www.w3.org/2000/svg"
     xmlns:xlink="http://www.w3.org/1999/xlink"&gt;
&lt;/svg&gt;
</pre>

<p>Even if you don't use all those namespaces in a particular document, there's no harm in including the namespace declarations. It may save you from some annoying errors if you end up adding content from one of the unused namespaces at a later date.</p>

<h3 id="A_full_example">A full example</h3>

<p>For a full example see <a href="/en-US/docs/Web/SVG/Namespaces_Crash_Course/Example">SVG: Namespaces Crash Course: Example</a>.</p>

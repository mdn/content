---
title: API method subpage template
slug: MDN/Structures/Page_types/API_method_subpage_template
tags:
  - API
  - Method
  - Template
  - method subpage
  - reference page
browser-compat: path.to.feature.NameOfTheMethod
---
<p>{{MDNSidebar}}</p>

<!-- Remove div below here before publishing -->
<div class="notecard note">
<h2 id="Remove_before_publishing">Remove before publishing</h2>

<h3 id="Page_front_matter">Page front matter</h3>

<p>The frontmatter at the top of the page is used to define "page metadata". The values should be updated appropriately for the particular method.</p>

<pre>---
title: NameOfTheParentInterface.NameOfTheMethod()
slug: Web/API/NameOfTheParentInterface/NameOfTheMethod
tags:
  - API
  - NameOfTheMethod
  - Method
  - Reference
  - Experimental
browser-compat: path.to.feature.NameOfTheMethod
---</pre>

<dl>
<dt><strong>title</strong></dt>
<dd>Title heading displayed at top of page. Format as <em>NameOfTheParentInterface</em><strong>.</strong><em>NameOfTheMethod</em><strong>()</strong>. For example, the <a href="/en-US/docs/Web/API/IDBIndex/count">count()</a> method of the <a href="/en-US/docs/Web/API/IDBIndex">IDBIndex</a> interface has a <em>title</em> of <code>IDBIndex.count()</code>.</dd>
<dt>slug</dt>
<dd>The end of the URL path after <code>https://developer.mozilla.org/en-US/docs/</code>). This will be formatted like <code>Web/API/NameOfTheParentInterface/NameOfTheMethod</code>. Note that the name of the method in the slug omits the parenthesis (it ends in "NameOfTheMethod" not "NameOfTheMethod()").</dd>
<dt>tags</dt>
<dd><p>Include the following tags: <strong>API</strong>, <strong>Reference</strong>, <strong>Method</strong>, <em>the name of the API</em> (e.g. <strong>WebVR</strong>), the name of the parent interface (e.g. <strong>IDBIndex</strong>), the name of the method (e.g. <strong>count()</strong>), <strong>Experimental</strong> (if the technology is <a href="/en-US/docs/MDN/Guidelines/Conventions_definitions#experimental">experimental</a>), <strong>Secure context</strong> (if it is available in a secure context only), and <strong>Deprecated</strong> (if it is <a href="/en-US/docs/MDN/Guidelines/Conventions_definitions#deprecated_and_obsolete">deprecated</a>).</p>

  <p>Optionally, you can elect to include some other tags that represent terms people might search for when looking for information on that technology. For example on WebVR interface pages we include <strong>VR</strong> and <strong>Virtual reality</strong>.</p></dd>
<dt>browser-compat</dt>
<dd><p>Replace the placeholder value <code>path.to.feature.NameOfTheMethod</code> with the query string for the method in the <a href="https://github.com/mdn/browser-compat-data">Browser compat data repo</a>. The toolchain automatically uses the key to populate the compatibility and specification sections (replacing the <code>\{{Compat}}</code> and <code>\{{Specifications}}</code> macros).</p>
  
  <p>Note that you may first need to create/update an entry for the API method in our <a href="https://github.com/mdn/browser-compat-data">Browser compat data repo</a>, and the entry for the API will need to include specification information. See our <a href="/en-US/docs/MDN/Structures/Compatibility_tables">guide on how to do this</a>.</p></dd>
</dl>


<h3 id="Top_macros">Top macros</h3>

<p>There are five macro calls at the top of the template by default. You should update or delete them according to the advice below:</p>

<ul>
  <li><code>\{{APIRef("<em>GroupDataName</em>")}}</code> — this generates the left hand reference sidebar showing quick reference links related to the current page. For example, every page in the <a href="/en-US/docs/Web/API/WebVR_API">WebVR API</a> has the same sidebar, which points to the other pages in the API. To generate the correct sidebar for your API, you need to add a GroupData entry to our KumaScript GitHub repo, and include the entry's name inside the macro call in place of <em>GroupDataName</em>. See our <a href="/en-US/docs/MDN/Contribute/Howto/Write_an_API_reference/Sidebars">API reference sidebars</a> guide for information on how to do this.</li>
  <li><code>\{{Draft}}</code> — this generates a <strong>Draft</strong> banner that indicates that the page is not yet complete, and should only be removed when the first draft of the page is completely finished. After it is ready to be published, you can remove this.</li>
  <li><code>\{{SeeCompatTable}}</code> — this generates a <strong>This is an experimental technology</strong> banner that indicates the technology is <a href="/en-US/docs/MDN/Guidelines/Conventions_definitions#experimental">experimental</a>). If the technology you are documenting is not experimental, you can remove this. If it is experimental, and the technology is hidden behind a pref in Firefox, you should also fill in an entry for it in the <a href="/en-US/docs/Mozilla/Firefox/Experimental_features">Experimental features in Firefox</a> page.</li>
  <li><code>\{{SecureContext_Header}}</code> — this generates a <strong>Secure context</strong> banner that indicates the technology is only available in a <a href="/en-US/docs/Web/Security/Secure_Contexts">secure context</a>. If it isn't, then you can remove the macro call. If it is, then you should also fill in an entry for it in the <a href="/en-US/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts">Features restricted to secure contexts</a> page.</li>
  <li><code>\{{Deprecated_Header}}</code> — this generates a <strong>Deprecated</strong> banner that indicates the technology is <a href="/en-US/docs/MDN/Guidelines/Conventions_definitions#deprecated_and_obsolete">deprecated</a>. If it isn't, then you can remove the macro call.</li>
</ul>
</div>
<!-- Remove div above here before publishing -->

<p>{{APIRef("GroupDataName")}}{{Draft}}{{SeeCompatTable}}{{SecureContext_header}}{{Deprecated_Header}}</p>

<p class="summary">The summary paragraph — start by naming the method, saying what interface it is part of, and saying what it does. This should ideally be 1 or 2 short sentences. You could copy most of this from the method's summary on the corresponding API reference page.</p>

<h2 id="Syntax">Syntax</h2>

<p>Fill in a syntax box, according to the guidance in our <a href="/en-US/docs/MDN/Structures/Syntax_sections">syntax sections</a> article.</p>

<h3 id="Parameters">Parameters</h3>

<dl>
 <dt>parameter1{{Optional_Inline}}</dt>
 <dd>Include a brief description of the parameter and what it does here. Include one term and definition for each parameter. If the parameter is not optional, remove the \{{optional_inline}} macro call.</dd>
 <dt>parameter2</dt>
 <dd>etc.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>Include a description of the method's return value, including data type and what it represents. If the method doesn't return anything, just put "Void".</p>

<h3 id="Exceptions">Exceptions</h3>

<dl>
 <dt>Exception1</dt>
 <dd>Include a list of all the exceptions that the method can raise, along with descriptions of how that exception is raised. Include one term and definition for each exception.</dd>
 <dt>Exception2</dt>
 <dd>etc.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<p>Fill in a simple example that nicely shows a typical usage of the method, then perhaps some more complex examples (see our guide on how to add <a href="/en-US/docs/MDN/Structures/Code_examples">code examples</a> for more information).</p>

<pre class="brush: js">my code block</pre>

<p>And/or include a list of links to useful code samples that live elsewhere:</p>

<ul>
 <li>x</li>
 <li>y</li>
 <li>z</li>
</ul>

<h2 id="Specifications">Specifications</h2>

<p>{{Specifications}}</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>Include list of</li>
 <li>other links related to</li>
 <li>this API that might</li>
 <li>be useful</li>
</ul>

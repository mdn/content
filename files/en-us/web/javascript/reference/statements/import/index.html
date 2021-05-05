---
title: import
slug: Web/JavaScript/Reference/Statements/import
tags:
- ECMAScript 2015
- JavaScript
- Language feature
- Modules
- Reference
- Statement
- dynamic import
- import
browser-compat: javascript.statements.import
---
<div>{{jsSidebar("Statements")}}</div>

<p>The static <code><strong>import</strong></code> statement is
    used to import read only live bindings which are <a
      href="/en-US/docs/Web/JavaScript/Reference/Statements/export">exported</a> by
    another module.</p>
<p>Imported modules are in {{JSxRef("Strict_mode","strict mode")}}
  whether you declare them as such or not. The <code>import</code> statement cannot be
  used in embedded scripts unless such script has a <code>type="module"</code>. Bindings
  imported are called live bindings because they are updated by the module that exported
  the binding.</p>

<p>There is also a function-like dynamic <code><strong>import()</strong></code>, which
  does not require scripts of <code>type="module"</code>.</p>

<p>Backward compatibility can be ensured using attribute <code>nomodule</code> on the
  {{HTMLElement("script")}} tag.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">import <em>defaultExport</em> from "<em>module-name</em>";
import * as <em>name</em> from "<em>module-name</em>";
import { <em>export1</em> } from "<em>module-name</em>";
import { <em>export1</em> as <em>alias1</em> } from "<em>module-name</em>";
import { <em>export1</em> , <em>export2</em> } from "<em>module-name</em>";
import { <em>foo</em> , <em>bar</em> } from "<em>module-name/path/to/specific/un-exported/file</em>";
import { <em>export1</em> , <em>export2</em> as <em>alias2</em> , [...] } from "<em>module-name</em>";
import <em>defaultExport</em>, { export1 [ , [...] ] } from "<em>module-name</em>";
import <em>defaultExport</em>, * as <em>name</em> from "<em>module-name</em>";
import "<em>module-name</em>";
var promise = import("<em>module-name</em>");
</pre>

<dl>
  <dt><code>defaultExport</code></dt>
  <dd>Name that will refer to the default export from the module.</dd>
  <dt><code>module-name</code></dt>
  <dd>The module to import from. This is often a relative or absolute path name to the
    <code>.js</code> file containing the module. Certain bundlers may permit or require
    the use of the extension; check your environment. Only single quoted and double
    quoted Strings are allowed.</dd>
  <dt><code>name</code></dt>
  <dd>Name of the module object that will be used as a kind of namespace when referring to
    the imports.</dd>
  <dt><code>exportN</code></dt>
  <dd>Name of the exports to be imported.</dd>
  <dt><code>aliasN</code></dt>
  <dd>Names that will refer to the named imports.</dd>
</dl>

<h2 id="Description">Description</h2>

<p>The <code>name</code> parameter is the name of the "module object" which will be used
  as a kind of namespace to refer to the exports. The <code>export</code> parameters
  specify individual named exports, while the <code>import * as name</code> syntax imports
  all of them. Below are examples to clarify the syntax.</p>

<h3 id="Import_an_entire_modules_contents">Import an entire module's contents</h3>

<p>This inserts <code>myModule</code> into the current scope, containing all the exports
  from the module in the file located in <code>/modules/my-module.js</code>.</p>

<pre class="brush: js">import * as <em>myModule</em> from '/modules/my-module.js';
</pre>

<p>Here, accessing the exports means using the module name ("myModule" in this case) as a
  namespace. For example, if the module imported above includes an export
  <code>doAllTheAmazingThings()</code>, you would call it like this:</p>

<pre class="brush: js">myModule.doAllTheAmazingThings();</pre>

<h3 id="Import_a_single_export_from_a_module">Import a single export from a module</h3>

<p>Given an object or value named <code>myExport</code> which has been exported from the
  module <code>my-module</code> either implicitly (because the entire module is exported,
  for example using <code>export * from 'another.js'</code>) or explicitly (using the
  {{JSxRef("Statements/export", "export")}} statement), this inserts <code>myExport</code>
  into the current scope.</p>

<pre class="brush: js">import {myExport} from '/modules/my-module.js';</pre>

<h3 id="Import_multiple_exports_from_module">Import multiple exports from module</h3>

<p>This inserts both <code>foo</code> and <code>bar</code> into the current scope.</p>

<pre class="brush: js">import {foo, bar} from '/modules/my-module.js';</pre>

<h3 id="Import_an_export_with_a_more_convenient_alias">Import an export with a more
  convenient alias</h3>

<p>You can rename an export when importing it. For example, this inserts
  <code>shortName</code> into the current scope.</p>

<pre class="brush: js">import {reallyReallyLongModuleExportName as shortName}
  from '/modules/my-module.js';</pre>

<h3 id="Rename_multiple_exports_during_import">Rename multiple exports during import</h3>

<p>Import multiple exports from a module with convenient aliases.</p>

<pre class="brush: js">import {
  reallyReallyLongModuleExportName as shortName,
  anotherLongModuleName as short
} from '/modules/my-module.js';</pre>

<h3 id="Import_a_module_for_its_side_effects_only">Import a module for its side effects
  only</h3>

<p>Import an entire module for side effects only, without importing anything. This runs
  the module's global code, but doesn't actually import any values.</p>

<pre class="brush: js">import '/modules/my-module.js';
</pre>

<p>This works with {{anch("Dynamic Imports", "dynamic imports")}} as well:</p>

<pre class="brush: js">(async () =&gt; {
  if (somethingIsTrue) {
    // import module for side effects
    await import('/modules/my-module.js');
  }
})();</pre>

<p>If your project uses packages that export ESM, you can also import them for side
  effects only. This will run the code in the package entry point file (and any files it
  imports) only. </p>

<h3 id="Importing_defaults">Importing defaults</h3>

<p>It is possible to have a default {{JSxRef("Statements/export", "export")}} (whether it
  is an object, a function, a class, etc.). The <code>import</code> statement may then be
  used to import such defaults.</p>

<p>The simplest version directly imports the default:</p>

<pre class="brush: js">import myDefault from '/modules/my-module.js';</pre>

<p>It is also possible to use the default syntax with the ones seen above (namespace
  imports or named imports). In such cases, the default import will have to be declared
  first. For instance:</p>

<pre class="brush: js">import myDefault, * as myModule from '/modules/my-module.js';
// myModule used as a namespace</pre>

<p>or</p>

<pre class="brush: js">import myDefault, {foo, bar} from '/modules/my-module.js';
// specific, named imports
</pre>

<p>When importing a default export with {{anch("Dynamic Imports", "dynamic imports")}}, it
  works a bit differently. You need to destructure and rename the "default" key from the
  returned object.</p>

<pre class="brush: js">(async () =&gt; {
  if (somethingIsTrue) {
    const { default: myDefault, foo, bar } = await import('/modules/my-module.js');
  }
})();</pre>

<h3 id="Dynamic_Imports">Dynamic Imports</h3>

<p>The standard import syntax is static and will always result in all code in the imported
  module being evaluated at load time. In situations where you wish to load a module
  conditionally or on demand, you can use a dynamic import instead. The following are some
  reasons why you might need to use dynamic import:</p>

<ul>
  <li>When importing statically significantly slows the loading of your code and there is
    a low likelihood that you will need the code you are importing, or you will not need
    it until a later time.</li>
  <li>When importing statically significantly increases your program's memory usage and
    there is a low likelihood that you will need the code you are importing.</li>
  <li>When the module you are importing does not exist at load time</li>
  <li>When the import specifier string needs to be constructed dynamically. (Static import
    only supports static specifiers.)</li>
  <li>When the module being imported has side effects, and you do not want those side
    effects unless some condition is true. (It is recommended not to have any side effects
    in a module, but you sometimes cannot control this in your module dependencies.)</li>
</ul>

<p>Use dynamic import only when necessary. The static form is preferable for loading
  initial dependencies, and can benefit more readily from static analysis tools and <a
    href="/en-US/docs/Glossary/Tree_shaking">tree shaking</a>.</p>

<p>To dynamically import a module, the <code>import</code> keyword may be called as a
  function. When used this way, it returns a promise.</p>

<pre class="brush: js">import('/modules/my-module.js')
  .then((module) =&gt; {
    // Do something with the module.
  });
</pre>

<p>This form also supports the <code>await</code> keyword.</p>

<pre class="brush: js">let module = await import('/modules/my-module.js');
</pre>

<h2 id="Examples">Examples</h2>

<h3 id="Standard_Import">Standard Import</h3>

<p>The code below shows how to import from a secondary module to assist in processing an
  AJAX JSON request.</p>

<h4 id="The_module_file.js">The module: file.js</h4>

<pre class="brush: js">function getJSON(url, callback) {
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    callback(this.responseText)
  };
  xhr.open('GET', url, true);
  xhr.send();
}

export function getUsefulContents(url, callback) {
  getJSON(url, data =&gt; callback(JSON.parse(data)));
}</pre>

<h4 id="The_main_program_main.js">The main program: main.js</h4>

<pre class="brush: js">import { getUsefulContents } from '/modules/file.js';

getUsefulContents('http://www.example.com',
    data =&gt; { doSomethingUseful(data); });</pre>

<h3 id="Dynamic_Import">Dynamic Import</h3>

<p>This example shows how to load functionality on to a page based on a user action, in
  this case a button click, and then call a function within that module. This is not the
  only way to implement this functionality. The <code>import()</code> function also
  supports <code>await</code>.</p>

<pre class="brush: js">const main = document.querySelector("main");
for (const link of document.querySelectorAll("nav &gt; a")) {
  link.addEventListener("click", e =&gt; {
    e.preventDefault();

    import('/modules/my-module.js')
      .then(module =&gt; {
        module.loadPageInto(main);
      })
      .catch(err =&gt; {
        main.textContent = err.message;
      });
  });
}</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{JSxRef("Statements/export", "export")}}</li>
  <li><a
      href="/en-US/docs/Web/JavaScript/Reference/Statements/import.meta"><code>import.meta</code></a>
  </li>
  <li>Limin Zhu, Brian Terlson and Microsoft Edge Team: <a
      href="https://blogs.windows.com/msedgedev/2016/05/17/es6-modules-and-beyond/">Previewing
      ES6 Modules and more from ES2015, ES2016 and beyond</a></li>
  <li>Hacks blog post by Jason Orendorff: <a
      href="https://hacks.mozilla.org/2015/08/es6-in-depth-modules/">ES6 in Depth:
      Modules</a></li>
  <li>Hacks blog post by Lin Clark: <a
      href="https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/">ES modules:
      A cartoon deep-dive</a></li>
  <li>Axel Rauschmayer's book: <a       href="http://exploringjs.com/es6/ch_modules.html">"Exploring JS: Modules"</a></li>
  <li>The Modern JavaScript Tutorial(javascript.info): <a       href="https://javascript.info/import-export">Export and Import</a></li>
</ul>

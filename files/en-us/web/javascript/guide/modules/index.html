---
title: JavaScript modules
slug: Web/JavaScript/Guide/Modules
tags:
  - Guide
  - JavaScript
  - Modules
  - export
  - import
---
<div>{{JSSidebar("JavaScript Guide")}}{{Previous("Web/JavaScript/Guide/Meta_programming")}}</div>

<p>This guide gives you all you need to get started with JavaScript module syntax.</p>

<h2 id="A_background_on_modules">A background on modules</h2>

<p>JavaScript programs started off pretty small — most of its usage in the early days was to do isolated scripting tasks, providing a bit of interactivity to your web pages where needed, so large scripts were generally not needed. Fast forward a few years and we now have complete applications being run in browsers with a lot of JavaScript, as well as JavaScript being used in other contexts (<a href="/en-US/docs/Glossary/Node.js">Node.js</a>, for example).</p>

<p>It has therefore made sense in recent years to start thinking about providing mechanisms for splitting JavaScript programs up into separate modules that can be imported when needed. Node.js has had this ability for a long time, and there are a number of JavaScript libraries and frameworks that enable module usage (for example, other <a href="https://en.wikipedia.org/wiki/CommonJS">CommonJS</a> and <a href="https://github.com/amdjs/amdjs-api/blob/master/AMD.md">AMD</a>-based module systems like <a href="https://requirejs.org/">RequireJS</a>, and more recently <a href="https://webpack.github.io/">Webpack</a> and <a href="https://babeljs.io/">Babel</a>).</p>

<p>The good news is that modern browsers have started to support module functionality natively, and this is what this article is all about. This can only be a good thing — browsers can optimize loading of modules, making it more efficient than having to use a library and do all of that extra client-side processing and extra round trips.</p>

<h2 id="Browser_support">Browser support</h2>

<p>Use of native JavaScript modules is dependent on the {{JSxRef("Statements/import", "import")}} and {{JSxRef("Statements/export", "export")}} statements; these are supported in browsers as follows:</p>

<h3 id="import">import</h3>

<p>{{Compat("javascript.statements.import")}}</p>

<h3 id="export">export</h3>

<p>{{Compat("javascript.statements.export")}}</p>

<h2 id="Introducing_an_example">Introducing an example</h2>

<p>To demonstrate usage of modules, we've created a <a href="https://github.com/mdn/js-examples/tree/master/modules">simple set of examples</a> that you can find on GitHub. These examples demonstrate a simple set of modules that create a <a href="/en-US/docs/Web/HTML/Element/canvas" title="Use the HTML &lt;canvas&gt; element with either the canvas scripting API or the WebGL API to draw graphics and animations."><code>&lt;canvas&gt;</code></a> element on a webpage, and then draw (and report information about) different shapes on the canvas.</p>

<p>These are fairly trivial, but have been kept deliberately simple to demonstrate modules clearly.</p>

<div class="notecard note">
<p><strong>Note:</strong> If you want to download the examples and run them locally, you'll need to run them through a local web server.</p>
</div>

<h2 id="Basic_example_structure">Basic example structure</h2>

<p>In our first example (see <a href="https://github.com/mdn/js-examples/tree/master/modules/basic-modules">basic-modules</a>) we have a file structure as follows:</p>

<pre class="brush: plain">index.html
main.js
modules/
    canvas.js
    square.js</pre>

<div class="notecard note">
<p><strong>Note:</strong> All of the examples in this guide have basically the same structure; the above should start getting pretty familiar.</p>
</div>

<p>The modules directory's two modules are described below:</p>

<ul>
	<li><code>canvas.js</code> — contains functions related to setting up the canvas:

	<ul>
		<li><code>create()</code> — creates a canvas with a specified <code>width</code> and <code>height</code> inside a wrapper <a href="/en-US/docs/Web/HTML/Element/div" title="The HTML Content Division element (&lt;div&gt;) is the generic container for flow content. It has no effect on the content or layout until styled using CSS."><code>&lt;div&gt;</code></a> with a specified ID, which is itself appended inside a specified parent element. Returns an object containing the canvas's 2D context and the wrapper's ID.</li>
		<li><code>createReportList()</code> — creates an unordered list appended inside a specified wrapper element, which can be used to output report data into. Returns the list's ID.</li>
	</ul>
	</li>
	<li><code>square.js</code> — contains:
	<ul>
		<li><code>name</code> — a constant containing the string 'square'.</li>
		<li><code>draw()</code> — draws a square on a specified canvas, with a specified size, position, and color. Returns an object containing the square's size, position, and color.</li>
		<li><code>reportArea()</code> — writes a square's area to a specific report list, given its length.</li>
		<li><code>reportPerimeter()</code> — writes a square's perimeter to a specific report list, given its length.</li>
	</ul>
	</li>
</ul>

<h2 id="Aside_—_.mjs_versus_.js">Aside — <code>.mjs</code> versus <code>.js</code></h2>

<p>Throughout this article, we've used <code>.js</code> extensions for our module files, but in other resources you may see the <code>.mjs</code> extension used instead. <a href="https://v8.dev/features/modules#mjs">V8's documentation recommends this</a>, for example. The reasons given are:</p>

<ul>
	<li>It is good for clarity, i.e. it makes it clear which files are modules, and which are regular JavaScript.</li>
	<li>It ensures that your module files are parsed as a module by runtimes such as <a href="https://nodejs.org/api/esm.html#esm_enabling">Node.js</a>, and build tools such as <a href="https://babeljs.io/docs/en/options#sourcetype">Babel</a>.</li>
</ul>

<p>However, we decided to keep to using <code>.js</code>, at least for the moment. To get modules to work correctly in a browser, you need to make sure that your server is serving them with a <code>Content-Type</code> header that contains a JavaScript MIME type such as <code>text/javascript</code>. If you don't, you'll get a strict MIME type checking error along the lines of "The server responded with a non-JavaScript MIME type" and the browser won't run your JavaScript. Most servers already set the correct type for <code>.js</code> files, but not yet for <code>.mjs</code> files. Servers that already serve <code>.mjs</code> files correctly include <a href="https://pages.github.com/">GitHub Pages</a> and <code><a href="https://github.com/http-party/http-server#readme">http-server</a></code> for Node.js.</p>

<p>This is OK if you are using such an environment already, or if you aren't but you know what you are doing and have access (i.e. you can configure your server to set the correct <code><a href="/en-US/docs/Web/HTTP/Headers/Content-Type">Content-Type</a></code> for <code>.mjs</code> files). It could however cause confusion if you don't control the server you are serving files from, or are publishing files for public use, as we are here.</p>

<p>For learning and portability purposes, we decided to keep to <code>.js</code>.</p>

<p>If you really value the clarity of using <code>.mjs</code> for modules versus using <code>.js</code> for "normal" JavaScript files, but don't want to run into the problem described above, you could always use <code>.mjs</code> during development and convert them to <code>.js</code> during your build step.</p>

<p>It is also worth noting that:</p>

<ul>
	<li>Some tools may never support <code>.mjs</code>, such as <a href="https://www.typescriptlang.org/">TypeScript</a>.</li>
	<li>The <code>&lt;script type="module"&gt;</code> attribute is used to denote when a module is being pointed to, as you'll see below.</li>
</ul>

<h2 id="Exporting_module_features">Exporting module features</h2>

<p>The first thing you do to get access to module features is export them. This is done using the {{JSxRef("Statements/export", "export")}} statement.</p>

<p>The easiest way to use it is to place it in front of any items you want exported out of the module, for example:</p>

<pre class="brush: js">export const name = 'square';

export function draw(ctx, length, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, length, length);

  return {
    length: length,
    x: x,
    y: y,
    color: color
  };
}</pre>

<p>You can export functions, <code>var</code>, <code>let</code>, <code>const</code>, and — as we'll see later — classes. They need to be top-level items; you can't use <code>export</code> inside a function, for example.</p>

<p>A more convenient way of exporting all the items you want to export is to use a single export statement at the end of your module file, followed by a comma-separated list of the features you want to export wrapped in curly braces. For example:</p>

<pre class="brush: js">export { name, draw, reportArea, reportPerimeter };</pre>

<h2 id="Importing_features_into_your_script">Importing features into your script</h2>

<p>Once you've exported some features out of your module, you need to import them into your script to be able to use them. The simplest way to do this is as follows:</p>

<pre class="brush: js">import { name, draw, reportArea, reportPerimeter } from './modules/square.js';</pre>

<p>You use the {{JSxRef("Statements/import", "import")}} statement, followed by a comma-separated list of the features you want to import wrapped in curly braces, followed by the keyword from, followed by the path to the module file — a path relative to the site root, which for our <code>basic-modules</code> example would be <code>/js-examples/modules/basic-modules</code>.</p>

<p>However, we've written the path a bit differently — we are using the dot (<code>.</code>) syntax to mean "the current location", followed by the path beyond that to the file we are trying to find. This is much better than writing out the entire relative path each time, as it is shorter, and it makes the URL portable — the example will still work if you move it to a different location in the site hierarchy.</p>

<p>So for example:</p>

<pre class="brush: bash">/js-examples/modules/basic-modules/modules/square.js</pre>

<p>becomes</p>

<pre class="brush: bash">./modules/square.js</pre>

<p>You can see such lines in action in <code><a href="https://github.com/mdn/js-examples/blob/master/modules/basic-modules/main.js">main.js</a></code>.</p>

<div class="notecard note">
<p><strong>Note:</strong> In some module systems, you can omit the file extension and the leading <code>/</code>, <code>./</code>, or <code>../</code> (e.g. <code>'modules/square'</code>). This doesn't work in native JavaScript modules.</p>
</div>

<p>Once you've imported the features into your script, you can use them just like they were defined inside the same file. The following is found in <code>main.js</code>, below the import lines:</p>

<pre class="brush: js">let myCanvas = create('myCanvas', document.body, 480, 320);
let reportList = createReportList(myCanvas.id);

let square1 = draw(myCanvas.ctx, 50, 50, 100, 'blue');
reportArea(square1.length, reportList);
reportPerimeter(square1.length, reportList);
</pre>

<div class="notecard note">
<p><strong>Note:</strong> Although imported features are available in the file, they are read only views of the feature that was exported. You cannot change the variable that was imported, but you can still modify properties similar to <code>const</code>. Additionally, these features are imported as live bindings, meaning that they can change in value even if you cannot modify the binding unlike <code>const</code>.</p>
</div>

<h2 id="Applying_the_module_to_your_HTML">Applying the module to your HTML</h2>

<p>Now we just need to apply the <code>main.js</code> module to our HTML page. This is very similar to how we apply a regular script to a page, with a few notable differences.</p>

<p>First of all, you need to include <code>type="module"</code> in the <a href="/en-US/docs/Web/HTML/Element/script" title="The HTML &lt;script&gt; element is used to embed or reference executable code; this is typically used to embed or refer to JavaScript code."><code>&lt;script&gt;</code></a> element, to declare this script as a module. To import the <code>main.js</code> script, we use this:</p>

<pre class="brush: html; no-line-numbers">&lt;script type="module" src="main.js"&gt;&lt;/script&gt;</pre>

<p>You can also embed the module's script directly into the HTML file by placing the JavaScript code within the body of the <code>&lt;script&gt;</code> element:</p>

<pre class="brush: js">&lt;script type="module"&gt;
  /* JavaScript module code here */
&lt;/script&gt;</pre>

<p>The script into which you import the module features basically acts as the top-level module. If you omit it, Firefox for example gives you an error of "SyntaxError: import declarations may only appear at top level of a module".</p>

<p>You can only use <code>import</code> and <code>export</code> statements inside modules, not regular scripts.</p>

<h2 id="Other_differences_between_modules_and_standard_scripts">Other differences between modules and standard scripts</h2>

<ul>
	<li>You need to pay attention to local testing — if you try to load the HTML file locally (i.e. with a <code>file://</code> URL), you'll run into CORS errors due to JavaScript module security requirements. You need to do your testing through a server.</li>
	<li>Also, note that you might get different behavior from sections of script defined inside modules as opposed to in standard scripts. This is because modules use {{JSxRef("Strict_mode", "strict mode", "", 1)}} automatically.</li>
	<li>There is no need to use the <code>defer</code> attribute (see <a href="/en-US/docs/Web/HTML/Element/script#attributes" title="The HTML &lt;script&gt; element is used to embed or reference executable code; this is typically used to embed or refer to JavaScript code."><code>&lt;script&gt;</code> attributes</a>) when loading a module script; modules are deferred automatically.</li>
	<li>Modules are only executed once, even if they have been referenced in multiple <code>&lt;script&gt;</code> tags.</li>
	<li>Last but not least, let's make this clear — module features are imported into the scope of a single script — they aren't available in the global scope. Therefore, you will only be able to access imported features in the script they are imported into, and you won't be able to access them from the JavaScript console, for example. You'll still get syntax errors shown in the DevTools, but you'll not be able to use some of the debugging techniques you might have expected to use.</li>
</ul>

<h2 id="Default_exports_versus_named_exports">Default exports versus named exports</h2>

<p>The functionality we've exported so far has been comprised of <strong>named exports</strong> — each item (be it a function, <code>const</code>, etc.) has been referred to by its name upon export, and that name has been used to refer to it on import as well.</p>

<p>There is also a type of export called the <strong>default export</strong> — this is designed to make it easy to have a default function provided by a module, and also helps JavaScript modules to interoperate with existing CommonJS and AMD module systems (as explained nicely in <a href="https://hacks.mozilla.org/2015/08/es6-in-depth-modules/">ES6 In Depth: Modules</a> by Jason Orendorff; search for "Default exports").</p>

<p>Let's look at an example as we explain how it works. In our basic-modules <code>square.js</code> you can find a function called <code>randomSquare()</code> that creates a square with a random color, size, and position. We want to export this as our default, so at the bottom of the file we write this:</p>

<pre class="brush: js">export default randomSquare;</pre>

<p>Note the lack of curly braces.</p>

<p>We could instead prepend <code>export default</code> onto the function and define it as an anonymous function, like this:</p>

<pre class="brush: js">export default function(ctx) {
  ...
}</pre>

<p>Over in our <code>main.js</code> file, we import the default function using this line:</p>

<pre class="brush: js">import randomSquare from './modules/square.js';</pre>

<p>Again, note the lack of curly braces. This is because there is only one default export allowed per module, and we know that <code>randomSquare</code> is it. The above line is basically shorthand for:</p>

<pre class="brush: js">import {default as randomSquare} from './modules/square.js';</pre>

<div class="notecard note">
<p><strong>Note:</strong> The as syntax for renaming exported items is explained below in the <a href="#renaming_imports_and_exports">Renaming imports and exports</a> section.</p>
</div>

<h2 id="Avoiding_naming_conflicts">Avoiding naming conflicts</h2>

<p>So far, our canvas shape drawing modules seem to be working OK. But what happens if we try to add a module that deals with drawing another shape, like a circle or triangle? These shapes would probably have associated functions like <code>draw()</code>, <code>reportArea()</code>, etc. too; if we tried to import different functions of the same name into the same top-level module file, we'd end up with conflicts and errors.</p>

<p>Fortunately there are a number of ways to get around this. We'll look at these in the following sections.</p>

<h2 id="Renaming_imports_and_exports">Renaming imports and exports</h2>

<p>Inside your <code>import</code> and <code>export</code> statement's curly braces, you can use the keyword <code>as</code> along with a new feature name, to change the identifying name you will use for a feature inside the top-level module.</p>

<p>So for example, both of the following would do the same job, albeit in a slightly different way:</p>

<pre class="brush: js">// inside module.js
export {
  function1 as newFunctionName,
  function2 as anotherNewFunctionName
};

// inside main.js
import { newFunctionName, anotherNewFunctionName } from './modules/module.js';</pre>

<pre class="brush: js">// inside module.js
export { function1, function2 };

// inside main.js
import { function1 as newFunctionName,
         function2 as anotherNewFunctionName } from './modules/module.js';</pre>

<p>Let's look at a real example. In our <a href="https://github.com/mdn/js-examples/tree/master/modules/renaming">renaming</a> directory you'll see the same module system as in the previous example, except that we've added <code>circle.js</code> and <code>triangle.js</code> modules to draw and report on circles and triangles.</p>

<p>Inside each of these modules, we've got features with the same names being exported, and therefore each has the same <code>export</code> statement at the bottom:</p>

<pre class="brush: js">export { name, draw, reportArea, reportPerimeter };</pre>

<p>When importing these into <code>main.js</code>, if we tried to use</p>

<pre class="brush: js">import { name, draw, reportArea, reportPerimeter } from './modules/square.js';
import { name, draw, reportArea, reportPerimeter } from './modules/circle.js';
import { name, draw, reportArea, reportPerimeter } from './modules/triangle.js';</pre>

<p>The browser would throw an error such as "SyntaxError: redeclaration of import name" (Firefox).</p>

<p>Instead we need to rename the imports so that they are unique:</p>

<pre class="brush: js">import { name as squareName,
         draw as drawSquare,
         reportArea as reportSquareArea,
         reportPerimeter as reportSquarePerimeter } from './modules/square.js';

import { name as circleName,
         draw as drawCircle,
         reportArea as reportCircleArea,
         reportPerimeter as reportCirclePerimeter } from './modules/circle.js';

import { name as triangleName,
        draw as drawTriangle,
        reportArea as reportTriangleArea,
        reportPerimeter as reportTrianglePerimeter } from './modules/triangle.js';</pre>

<p>Note that you could solve the problem in the module files instead, e.g.</p>

<pre class="brush: js">// in square.js
export { name as squareName,
         draw as drawSquare,
         reportArea as reportSquareArea,
         reportPerimeter as reportSquarePerimeter };</pre>

<pre class="brush: js">// in main.js
import { squareName, drawSquare, reportSquareArea, reportSquarePerimeter } from './modules/square.js';</pre>

<p>And it would work just the same. What style you use is up to you, however it arguably makes more sense to leave your module code alone, and make the changes in the imports. This especially makes sense when you are importing from third party modules that you don't have any control over.</p>

<h2 id="Creating_a_module_object">Creating a module object</h2>

<p>The above method works OK, but it's a little messy and longwinded. An even better solution is to import each module's features inside a module object. The following syntax form does that:</p>

<pre class="brush: js">import * as Module from './modules/module.js';</pre>

<p>This grabs all the exports available inside <code>module.js</code>, and makes them available as members of an object <code>Module</code>, effectively giving it its own namespace. So for example:</p>

<pre class="brush: js">Module.function1()
Module.function2()
etc.</pre>

<p>Again, let's look at a real example. If you go to our <a href="https://github.com/mdn/js-examples/tree/master/modules/module-objects">module-objects</a> directory, you'll see the same example again, but rewritten to take advantage of this new syntax. In the modules, the exports are all in the following simple form:</p>

<pre class="brush: js">export { name, draw, reportArea, reportPerimeter };</pre>

<p>The imports on the other hand look like this:</p>

<pre class="brush: js">import * as Canvas from './modules/canvas.js';

import * as Square from './modules/square.js';
import * as Circle from './modules/circle.js';
import * as Triangle from './modules/triangle.js';</pre>

<p>In each case, you can now access the module's imports underneath the specified object name, for example:</p>

<pre class="brush: js">let square1 = Square.draw(myCanvas.ctx, 50, 50, 100, 'blue');
Square.reportArea(square1.length, reportList);
Square.reportPerimeter(square1.length, reportList);</pre>

<p>So you can now write the code just the same as before (as long as you include the object names where needed), and the imports are much neater.</p>

<h2 id="Modules_and_classes">Modules and classes</h2>

<p>As we hinted at earlier, you can also export and import classes; this is another option for avoiding conflicts in your code, and is especially useful if you've already got your module code written in an object-oriented style.</p>

<p>You can see an example of our shape drawing module rewritten with ES classes in our <a href="https://github.com/mdn/js-examples/tree/master/modules/classes">classes</a> directory. As an example, the <code><a href="https://github.com/mdn/js-examples/blob/master/modules/classes/modules/square.js">square.js</a></code> file now contains all its functionality in a single class:</p>

<pre class="brush: js">class Square {
  constructor(ctx, listId, length, x, y, color) {
    ...
  }

  draw() {
    ...
  }

  ...
}</pre>

<p>which we then export:</p>

<pre class="brush: js">export { Square };</pre>

<p>Over in <code><a href="https://github.com/mdn/js-examples/blob/master/modules/classes/main.js">main.js</a></code>, we import it like this:</p>

<pre class="brush: js">import { Square } from './modules/square.js';</pre>

<p>And then use the class to draw our square:</p>

<pre class="brush: js">let square1 = new Square(myCanvas.ctx, myCanvas.listId, 50, 50, 100, 'blue');
square1.draw();
square1.reportArea();
square1.reportPerimeter();</pre>

<h2 id="Aggregating_modules">Aggregating modules</h2>

<p>There will be times where you'll want to aggregate modules together. You might have multiple levels of dependencies, where you want to simplify things, combining several submodules into one parent module. This is possible using export syntax of the following forms in the parent module:</p>

<pre class="brush: js">export * from 'x.js'
export { name } from 'x.js'</pre>

<p>For an example, see our <a href="https://github.com/mdn/js-examples/tree/master/modules/module-aggregation">module-aggregation</a> directory. In this example (based on our earlier classes example) we've got an extra module called <code>shapes.js</code>, which aggregates all the functionality from <code>circle.js</code>, <code>square.js</code>, and <code>triangle.js</code> together. We've also moved our submodules inside a subdirectory inside the <code>modules</code> directory called <code>shapes</code>. So the module structure in this example is:</p>

<pre class="brush: plain">modules/
  canvas.js
  shapes.js
  shapes/
    circle.js
    square.js
    triangle.js</pre>

<p>In each of the submodules, the export is of the same form, e.g.</p>

<pre class="brush: js">export { Square };</pre>

<p>Next up comes the aggregation part. Inside <code><a href="https://github.com/mdn/js-examples/blob/master/modules/module-aggregation/modules/shapes.js">shapes.js</a></code>, we include the following lines:</p>

<pre class="brush: js">export { Square } from './shapes/square.js';
export { Triangle } from './shapes/triangle.js';
export { Circle } from './shapes/circle.js';</pre>

<p>These grab the exports from the individual submodules and effectively make them available from the <code>shapes.js</code> module.</p>

<div class="notecard note">
<p><strong>Note:</strong> The exports referenced in <code>shapes.js</code> basically get redirected through the file and don't really exist there, so you won't be able to write any useful related code inside the same file.</p>
</div>

<p>So now in the <code>main.js</code> file, we can get access to all three module classes by replacing</p>

<pre class="brush: js">import { Square } from './modules/square.js';
import { Circle } from './modules/circle.js';
import { Triangle } from './modules/triangle.js';</pre>

<p>with the following single line:</p>

<pre class="brush: js">import { Square, Circle, Triangle } from './modules/shapes.js';</pre>

<h2 id="Dynamic_module_loading">Dynamic module loading</h2>

<p>A recent addition to JavaScript modules functionality is dynamic module loading. This allows you to dynamically load modules only when they are needed, rather than having to load everything up front. This has some obvious performance advantages; let's read on and see how it works.</p>

<p>This new functionality allows you to call {{JSxRef("Statements/import", "import()", "#Dynamic_Imports")}} as a function, passing it the path to the module as a parameter. It returns a {{JSxRef("Promise")}}, which fulfills with a module object (see <a href="#creating_a_module_object">Creating a module object</a>) giving you access to that object's exports, e.g.</p>

<pre class="brush: js">import('./modules/myModule.js')
  .then((module) =&gt; {
    // Do something with the module.
  });</pre>

<p>Let's look at an example. In the <a href="https://github.com/mdn/js-examples/tree/master/modules/dynamic-module-imports">dynamic-module-imports</a> directory we've got another example based on our classes example. This time however we are not drawing anything on the canvas when the example loads. Instead, we include three buttons — "Circle", "Square", and "Triangle" — that, when pressed, dynamically load the required module and then use it to draw the associated shape.</p>

<p>In this example we've only made changes to our <code><a href="https://github.com/mdn/js-examples/blob/master/modules/dynamic-module-imports/index.html">index.html</a></code> and <code><a href="https://github.com/mdn/js-examples/blob/master/modules/dynamic-module-imports/main.mjs">main.js</a></code> files — the module exports remain the same as before.</p>

<p>Over in <code>main.js</code> we've grabbed a reference to each button using a <a href="/en-US/docs/Web/API/Document/querySelector"><code>Document.querySelector()</code></a> call, for example:</p>

<pre class="brush: js">let squareBtn = document.querySelector('.square');</pre>

<p>We then attach an event listener to each button so that when pressed, the relevant module is dynamically loaded and used to draw the shape:</p>

<pre class="brush: js">squareBtn.addEventListener('click', () =&gt; {
  import('./modules/square.js').then((Module) =&gt; {
    let square1 = new Module.Square(myCanvas.ctx, myCanvas.listId, 50, 50, 100, 'blue');
    square1.draw();
    square1.reportArea();
    square1.reportPerimeter();
  })
});</pre>

<p>Note that, because the promise fulfillment returns a module object, the class is then made a subfeature of the object, hence we now need to access the constructor with <code>Module.</code> prepended to it, e.g. <code>Module.Square( ... )</code>.</p>

<h3 id="Top_level_await">Top level await</h3>

<p>Top level await is a feature available within modules. This means the <code>await</code> keyword can be used. It allows modules to act as big <a href="/en-US/docs/Learn/JavaScript/Asynchronous/Introducing">asynchronous functions</a> meaning code can be evaluated before use in parent modules, but without blocking sibling modules from loading.</p>

<p>Let's take a look at an example. You can find all the files and code described in this section within the <code><a href="https://github.com/mdn/js-examples/tree/master/modules/top-level-await">top-level-await</a></code> directory, which extends from the previous examples.</p>

<p>Firstly we'll declare our color palette in a separate <code><a href="https://github.com/mdn/js-examples/blob/master/modules/top-level-await/data/colors.json">colors.json</a></code> file:</p>


<pre class="brush: js">
{
  "yellow": "#F4D03F",
  "green": "#52BE80",
  "blue": "#5499C7",
  "red": "#CD6155",
  "orange": "#F39C12"
}
</pre>

<p>Then we'll create a module called <code><a href="https://github.com/mdn/js-examples/blob/master/modules/top-level-await/modules/getColors.js">getColors.js</a></code> which uses a fetch request to load the <code><a href="https://github.com/mdn/js-examples/blob/master/modules/top-level-await/data/colors.json">colors.json</a></code> file and return the data as an object.</p>

<pre class="brush: js">
// fetch request
const colors = fetch('../data/colors.json')
	.then(response => response.json());

export default await colors;
</pre>

<p>Notice the last export line here.</p>

<p>We're using the keyword <code>await</code> before specifying the constant <code>colors</code> to export. This means any other modules which include this one will wait until <code>colors</code> has been downloaded and parsed before using it.</p>

<p>Let's include this module in our <code><a href="https://github.com/mdn/js-examples/blob/master/modules/top-level-await/main.js">main.js</a></code> file:</p>

<pre class="brush: js">
import colors from './modules/getColors.js';
import { Canvas } from './modules/canvas.js';

let circleBtn = document.querySelector('.circle');

...

</pre>

<p>We'll use <code>colors</code> instead of the previously used strings when calling our shape functions:</p>

<pre class="brush: js">
...

let square1 = new Module.Square(myCanvas.ctx, myCanvas.listId, 50, 50, 100, colors.blue);

...

let circle1 = new Module.Circle(myCanvas.ctx, myCanvas.listId, 75, 200, 100, colors.green);

...

let triangle1 = new Module.Triangle(myCanvas.ctx, myCanvas.listId, 100, 75, 190, colors.yellow);

...
</pre>

<p>This is useful because the code within <code><a href="https://github.com/mdn/js-examples/blob/master/modules/top-level-await/main.js">main.js</a></code> won't execute until the code in <code><a href="https://github.com/mdn/js-examples/blob/master/modules/top-level-await/modules/getColors.js">getColors.js</a></code> has run. However it won't block other modules being loaded. For instance our <code><a href="https://github.com/mdn/js-examples/blob/master/modules/top-level-await/modules/canvas.js">canvas.js</a></code> module will continue to load while <code>colors</code> is being fetched.</p>

<h2 id="Troubleshooting">Troubleshooting</h2>

<p>Here are a few tips that may help you if you are having trouble getting your modules to work. Feel free to add to the list if you discover more!</p>

<ul>
	<li>We mentioned this before, but to reiterate: <code>.js</code> files need to be loaded with a MIME-type of <code>text/javascript</code> (or another JavaScript-compatible MIME-type, but <code>text/javascript</code> is recommended), otherwise you'll get a strict MIME type checking error like "The server responded with a non-JavaScript MIME type".</li>
	<li>If you try to load the HTML file locally (i.e. with a <code>file://</code> URL), you'll run into CORS errors due to JavaScript module security requirements. You need to do your testing through a server. GitHub pages is ideal as it also serves <code>.js</code> files with the correct MIME type.</li>
	<li>Because <code>.mjs</code> is a non-standard file extension, some operating systems might not recognize it, or try to replace it with something else. For example, we found that macOS was silently adding on <code>.js</code> to the end of <code>.mjs</code> files and then automatically hiding the file extension. So all of our files were actually coming out as <code>x.mjs.js</code>. Once we turned off automatically hiding file extensions, and trained it to accept <code>.mjs</code>, it was OK.</li>
</ul>

<h2 id="See_also">See also</h2>

<ul>
	<li><a href="https://developers.google.com/web/fundamentals/primers/modules#mjs">Using JavaScript modules on the web</a>, by Addy Osmani and Mathias Bynens</li>
	<li><a href="https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/">ES modules: A cartoon deep-dive</a>, Hacks blog post by Lin Clark</li>
	<li><a href="https://hacks.mozilla.org/2015/08/es6-in-depth-modules/">ES6 in Depth: Modules</a>, Hacks blog post by Jason Orendorff</li>
	<li>Axel Rauschmayer's book <a href="http://exploringjs.com/es6/ch_modules.html">Exploring JS: Modules</a></li>
</ul>

<p>{{Previous("Web/JavaScript/Guide/Meta_programming")}}</p>

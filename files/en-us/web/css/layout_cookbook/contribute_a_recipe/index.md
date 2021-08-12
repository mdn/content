---
title: Contribute a recipe
slug: Web/CSS/Layout_cookbook/Contribute_a_recipe
tags:
  - CSS
  - Contribute
  - Guide
  - Layout
  - Templates
  - cookbook
  - recipes
---
<div>{{CSSRef}}</div>

<p>If you would like to contribute an example for the Layout Cookbook, then this page explains the steps to take to have your example published.</p>

<h2 id="What_makes_a_good_recipe">What makes a good recipe?</h2>

<p><strong>The simplest possible version of any useful web design pattern</strong>. Each line of CSS that you include should be there to help demonstrate the pattern, so leave out anything there purely to make the example look pretty. The idea is that someone can take the pattern and use it in a site with their own styles.</p>

<h2 id="Steps_to_publish_a_recipe">Steps to publish a recipe</h2>

<p>A recipe consists of:</p>

<ol>
 <li>A live example, stored in the <a href="https://github.com/mdn/css-examples">CSS Examples GitHub repo</a>.</li>
 <li>A downloadable version of that example, also stored in the CSS Examples repo.</li>
 <li>A page in the <a href="/en-US/docs/Web/CSS/Layout_cookbook">CSS layout cookbook</a> section of the site that details:
  <ol>
   <li>Requirements</li>
   <li>The recipe</li>
   <li>The choices made</li>
   <li>Any useful fallbacks or alternative methods</li>
   <li>Any accessibility concerns</li>
   <li>Browser compatibility</li>
   <li>Additional resources</li>
  </ol>
 </li>
</ol>

<h3 id="1._Build_your_pattern">1. Build your pattern</h3>

<p>Before turning your example into a recipe, start by creating your pattern as a simple HTML page. Think about what you are trying to demonstrate and keep it as simple as possible. Avoid using specific CSS conventions (such as BEM) as not everyone will be familiar with these, and they can make things look more complex than they need to be.</p>

<p>Ensure that the HTML and CSS is valid, and test in more than one browser. If you are using CSS properties that are not supported everywhere, that's fine! You can include browser support information when creating the page. In some cases it might be helpful to create a second version of your example, which includes fallback support.</p>

<h3 id="2._Creating_a_live_example">2. Creating a live example</h3>

<p>The live examples that you can see on cookbook pages and elsewhere on MDN allow visitors to play with the code and change relevant parts without being overwhelmed with all of the code needed. You recipe will be demonstrated by way of one or more examples.</p>

<p>Fork the <a href="https://github.com/mdn/css-examples">CSS Examples repo</a> and then take a look in the <code>css-cookbook</code> folder. There is a <a href="https://github.com/mdn/css-examples/blob/master/css-cookbook/cookbook-template.html">cookbook-template.html</a> file you can copy as a starting point. Save this in the css-cookbook directory with a name that makes sense for your pattern. The template is commented to help you add the various parts to the right place.</p>

<p>The important parts of this are as follows.</p>

<p>There is a stylesheet for styles for the editor panels, and some basic body styling, and a JavaScript file included for the editor functionality. Leave these files as they are.</p>

<p>There are two style blocks in the head. The first are for things that a visitor to the page does not need to change to play with the example. The second is for any of the items they might want to play with in the live example. We typically add all of our CSS from like example in the first block, then choose which sets of rules we need to move down to the second block. The rules in the second block should be those that are fundamental to the pattern, perhaps those where a user could make a change to a CSS value and see the pattern update.</p>

<p>You need to add the HTML for your component twice. First inside the section with a class of preview, then inside the textarea <code>playable-html</code>.</p>

<p>Your editable CSS, from the second block in the head, also needs to be copied into the <code>playable-css</code> section.</p>

<p>A simple worked example is <a href="https://github.com/mdn/css-examples/blob/master/css-cookbook/center.html">center.html</a>, which is embedded on the page <a href="/en-US/docs/Web/CSS/Layout_cookbook/Center_an_element">Center an element</a>. You can use this to see how to add the various bits correctly.</p>

<p>If you have forked the repo and therefore have our CSS and JavaScript files alongside your example, if you open up your live example in the browser you should see everything working exactly as it will when included in a page.</p>

<h4 id="Useful_tips">Useful tips</h4>

<ol>
 <li>Do not indent the CSS and HTML inside the textareas; instead bump it up against the start of the lines. This will look better when it is rendered.</li>
 <li>If you have any required images, pop them into the directory with the examples. Or you are welcome to use any already there.</li>
 <li>You can adjust the height of the textareas by changing the height in the inline styles.</li>
</ol>

<h3 id="3._Create_a_downloadable_version">3. Create a downloadable version</h3>

<p>As the examples include all of our live example code, we want to offer visitors a simple example without all of that included. Make a copy of your live example with --download appended. For example, center.html, has a download version named <code>center--download.html</code>. This file will be similar to your initial example. It should be a basic version of your pattern as a single HTML page. It can be handy to include the body CSS rules that are in our included stylesheet, if you take a look at <a href="https://github.com/mdn/css-examples/blob/master/css-cookbook/cookbook-template--download.html">cookbook-template--download.html</a>, these are included as a starting point.</p>

<h3 id="4._Make_a_Pull_Request_with_your_example">4. Make a Pull Request with your example</h3>

<p>Make a PR on the <a href="https://github.com/mdn/css-examples">CSS Examples repo</a>. This way we can help you with any changes to the example that may be needed before you create your page, plus the example will need to be live to be included some it makes sense to create it first. Include in your PR an explanation of the pattern and what you are demonstrating.</p>

<h3 id="5._Create_your_page">5. Create your page</h3>

<p>Once your example is merged you can create your page. You will need an MDN account to do so with <a href="/en-US/docs/MDN/Contribute/Howto/Create_and_edit_pages#Getting_page_creation_permissions">page creation permissions</a>, and you can then create the page as a subpage of the CSS Cookbook page. <a href="/en-US/docs/Web/CSS/Layout_cookbook/Contribute_a_recipe/Cookbook_template">There is a template for Cookbook pages here</a>.</p>

<p>The template explains what should be part of each section, and you can refer to other cookbook examples for more help. If you click to edit any of those pages then you will be able to see things such as the macros used to embed compat data, and live examples.</p>

<p>If you need general guidance on using the MDN wiki, see the help pages available here.</p>

<p>If you need to ask any questions, or want someone to take a look at your page then the <a href="https://discourse.mozilla.org/c/mdn">MDN Discourse forum</a> is a good place to do this, or <a href="/en-US/docs/MDN/Community/Conversations#Synchronous_chat">chat with us on Matrix</a>.</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/CSS/Layout_cookbook/Contribute_a_recipe/Cookbook_template">Cookbook page template</a></li>
 <li><a href="https://github.com/mdn/css-examples">CSS Examples repo</a></li>
</ul>

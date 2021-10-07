---
title: 'Express Tutorial: The Local Library website'
slug: Learn/Server-side/Express_Nodejs/Tutorial_local_library_website
tags:
  - Beginner
  - CodingScripting
  - Express
  - Intro
  - Learn
  - Node
  - Tutorial
  - nodejs
  - server-side
---
<div>{{LearnSidebar}}</div>

<div>{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/development_environment", "Learn/Server-side/Express_Nodejs/skeleton_website", "Learn/Server-side/Express_Nodejs")}}</div>

<p>The first article in our practical tutorial series explains what you'll learn, and provides an overview of the "local library" example website we'll be working through and evolving in subsequent articles.</p>

<table>
 <tbody>
  <tr>
   <th scope="row">Prerequisites:</th>
   <td>Read the <a href="/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction">Express Introduction</a>. For the following articles you'll also need to have <a href="/en-US/docs/Learn/Server-side/Express_Nodejs/development_environment">set up a Node development environment</a>. </td>
  </tr>
  <tr>
   <th scope="row">Objective:</th>
   <td>To introduce the example application used in this tutorial, and allow readers to understand what topics will be covered. </td>
  </tr>
 </tbody>
</table>

<h2 id="Overview">Overview</h2>

<p>Welcome to the MDN "Local Library" Express (Node) tutorial, in which we develop a website that might be used to manage the catalog for a local library. </p>

<p>In this series of tutorial articles you will:</p>

<ul>
 <li>Use the <em>Express Application Generator</em> tool to create a skeleton website and application.</li>
 <li>Start and stop the Node web server.</li>
 <li>Use a database to store your application's data.</li>
 <li>Create routes for requesting different information, and templates ("views") to render the data as HTML to be displayed in the browser.</li>
 <li>Work with forms.</li>
 <li>Deploy your application to production.</li>
</ul>

<p>You have learnt about some of these topics already, and touched briefly on others. By the end of the tutorial series you should know enough to develop simple Express apps by yourself.</p>

<h2 id="The_LocalLibrary_website">The LocalLibrary website</h2>

<p><em>LocalLibrary</em> is the name of the website that we'll create and evolve over the course of this series of tutorials. As you'd expect, the purpose of the website is to provide an online catalog for a small local library, where users can browse available books and manage their accounts.</p>

<p>This example has been carefully chosen because it can scale to show as much or little detail as we need, and can be used to show off almost any Express feature. More importantly, it allows us to provide a <em>guided</em> path through the functionality you'll need in any website:</p>

<ul>
 <li>In the first few tutorial articles we will define a simple <em>browse-only</em> library that library members can use to find out what books are available. This allows us to explore the operations that are common to almost every website: reading and displaying content from a database.</li>
 <li>As we progress, the library example naturally extends to demonstrate more advanced website features. For example we can extend the library to allow new books to be created, and use this to demonstrate how to use forms and support user authentication.</li>
</ul>

<p>Even though this is a very extensible example, it's called <em><strong>Local</strong>Library</em> for a reason — we're hoping to show the minimum information that will help you get up and running with Express quickly. As a result we'll store information about books, copies of books, authors and other key information. We won't however be storing information about other items a library might lend, or provide the infrastructure needed to support multiple library sites or other "big library" features. </p>

<h2 id="Im_stuck_where_can_I_get_the_source">I'm stuck, where can I get the source?</h2>

<p>As you work through the tutorial we'll provide the appropriate code snippets for you to copy and paste at each point, and there will be other code that we hope you'll extend yourself (with some guidance).</p>

<p>Instead of copying and pasting all the code snippets, try typing them out, It'll benefit you in the long run as you'll be more familiar with the code next time you come to write something similar. </p>

<p>If you get stuck, you can find the fully developed version of the website <a href="https://github.com/mdn/express-locallibrary-tutorial">on Github here</a>.</p>

<div class="notecard note">
<p><strong>Note:</strong> The specific versions of node, Express, and the other modules that this documentation was tested against are listed in the project <a href="https://github.com/mdn/express-locallibrary-tutorial/blob/master/package.json">package.json</a>.</p>
</div>

<h2 id="Summary">Summary</h2>

<p>Now that you know a bit more about the <em>LocalLibrary</em> website and what you're going to learn, it's time to start creating a <a href="/en-US/docs/Learn/Server-side/Express_Nodejs/skeleton_website">skeleton project</a> to contain our example.</p>

<p>{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/development_environment", "Learn/Server-side/Express_Nodejs/skeleton_website", "Learn/Server-side/Express_Nodejs")}}</p>

<h2 id="In_this_module">In this module</h2>

<ul>
 <li><a href="/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction">Express/Node introduction</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Express_Nodejs/development_environment">Setting up a Node (Express) development environment</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website">Express Tutorial: The Local Library website</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Express_Nodejs/skeleton_website">Express Tutorial Part 2: Creating a skeleton website</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose">Express Tutorial Part 3: Using a Database (with Mongoose)</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Express_Nodejs/routes">Express Tutorial Part 4: Routes and controllers</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Express_Nodejs/Displaying_data">Express Tutorial Part 5: Displaying library data</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Express_Nodejs/forms">Express Tutorial Part 6: Working with forms</a></li>
 <li><a href="/en-US/docs/Learn/Server-side/Express_Nodejs/deployment">Express Tutorial Part 7: Deploying to production</a></li>
</ul>

---
title: Writing forward-compatible websites
slug: Web/Guide/Writing_forward-compatible_websites
tags:
  - CSS
  - Compatibility
  - DOM
  - HTML
  - JavaScript
  - Web Development
---
<p>This page explains how to write websites that do not break when new browser versions are released.<br>
 <br>
 This is especially important for intranets and other non-public websites; if we can't see your code, we can't see that it broke. It's not always possible to follow all of these, but following as many of them as possible will help future-proof your website.</p>

<h2 id="JavaScript">JavaScript</h2>

<h3 id="Prefix_all_global_variable_access_in_onfoo_attributes_with_“window.”">Prefix all global variable access in <code>onfoo</code> attributes with “<code>window</code>.”</h3>

<p>When an event handler content attribute (<code>onclick</code>, <code>onmouseover</code>, and so forth) is used on HTML element, all name lookup in the attribute first happens on the element itself, then on the element's form if the element is a form control, then on the document, and then on the window (where the global variables you have defined are). For example, if you have this markup:</p>

<pre>&lt;div onclick="alert(ownerDocument)"&gt;Click me&lt;/div&gt;</pre>

<p>then clicking on the text alerts the <code>ownerDocument</code> of the <code>div</code>. This happens even if there is a <code>var ownerDocument</code> declared in global scope.</p>

<p>What this means is that any time you access a global variable in an event handler content attribute, including calling any function declared globally, you can end up with a name collision if a specification adds a new DOM property to elements or documents which has the same name as your function or variable, and a browser implements it. If that happens, then suddenly your function stops being called. This has happened multiple times to various sites already during the evolution of HTML5.</p>

<p>To avoid this, fully qualify global variable access using "window.", like so:</p>

<pre>&lt;script&gt;
  function localName() {
    alert('Function localName has been called');
  }
&lt;/script&gt;
&lt;div onclick="<strong>window.</strong>localName()"&gt;Clicking me should show an alert&lt;div&gt;
</pre>

<h3 id="Don't_concatenate_scripts_you_don't_control">Don't concatenate scripts you don't control</h3>

<p>The <code>"use strict;"</code> directive in ECMAScript, when used on the file level, applies to everything in the file. So appending a script that depends on non-strict-mode behavior to a strict-mode script will cause things to break.</p>

<h3 id="Ask_the_authors_of_any_JavaScript_libraries_you_use_to_also_follow_these_guidelines">Ask the authors of any JavaScript libraries you use to also follow these guidelines</h3>

<p>Suggest to the developers of your favorite libraries that they follow these guidelines too. If they don't, you can't rely on that library not breaking in the future. Unfortunately, libraries are common transgressors of these guidelines.</p>

<h2 id="Sniffing">Sniffing</h2>

<h3 id="Sniff_for_specific_features">Sniff for specific features</h3>

<p>If you plan to use some feature, use object-detection to sniff for that exact feature, if possible.  As a simple example, don't assume that any browser in which <code>"filter" in body.style</code> tests true must be Microsoft Internet Explorer and therefore e.g. will have a <code>window.event</code> object available in event handlers. Don't assume that browsers with support for a given DOM feature must also have some other, especially nonstandard, DOM feature. Or, conversely, that they <em>don't</em> have support for some other feature (e.g., don't assume that a browser that supports <code>onload</code> on script elements will never support <code>onreadystatechange</code> on them). As browsers converge behavior, they both add features and remove them. They also fix bugs.  All three of these have happened in the past and will happen again.</p>

<p>So don't sniff for one feature or object and then assume that, because it exists or doesn't exist, some other feature or object must also exist or not exist.</p>

<h3 id="Don't_UA-sniff">Don't UA-sniff</h3>

<p>This is really a particularly common instance of assuming that one feature (the presence of a particular substring in the user agent (UA) string) implies something about the presence or absence of other features.</p>

<h4 id="If_you_have_to_UA-sniff_only_sniff_for_past_browser_versions">If you have to UA-sniff, only sniff for past browser versions</h4>

<p>If you have to resort to UA sniffing, only use it to target past browser versions of particular browsers. First, have a default code path that runs in unknown browsers and in the current and future versions of browsers you are testing with. Then, if the default code path doesn't work in past versions of particular browsers and the breakage cannot be detected by sniffing for the absence of certain features your default code path uses, it's OK to add hacks that are targeted to old versions of particular browsers by sniffing for those old browser versions.</p>

<p>For the purpose of this piece of advice, "current" means the most recent version of a browser you have tested. For example, if you have tested that your default code path runs properly in Firefox Aurora but Firefox Beta and the latest release have a bug that make your default code path fail, it is OK to treat the Firefox version number that is in Aurora at the moment of testing as "current", and consider the Beta version as a "past" version even though it hasn't been released to the general public yet.</p>

<h3 id="Don't_unnecessarily_create_separate_codepaths_for_different_browsers">Don't unnecessarily create separate codepaths for different browsers</h3>

<p>Don't go out of your way to run different code based on either object detection or UA sniffing if one of the codepaths involved actually works in all browsers. There is a good chance of browsers changing behavior to converge with each other and hence breaking the site for those you've sent down one or more of the alternative paths.</p>

<h2 id="Testing">Testing</h2>

<h3 id="Test_with_all_major_engines">Test with all major engines</h3>

<p>Test your code at least in Firefox, Chrome, Safari, Opera, and Internet Explorer. If you are following the advice given above so that you have a single code path for all current and unknown browsers, testing that this single code path works in all the major engines makes it extremely probable that your code won't break in the future.</p>

<p>Sometimes browsers implement a given feature slightly differently. If you have a single code path that works in all the top engines, it means that you are either using features where browser behavior has already converged or, if the behavior hasn't quite converged yet, your code works regardless of which engine's behavior standards turn out to uphold.</p>

<h2 id="Browser-specific_features_and_prefixes">Browser-specific features and prefixes</h2>

<h3 id="Don't_target_hacks_at_current_or_future_versions_of_browsers">Don't target hacks at current or future versions of browsers</h3>

<p>This is also a common instance of assuming that present correlation between bugs implies future correlation between bugs. Targeting hacks at <strong>old</strong> versions of browsers whose current versions no longer have the bug you're relying on for your hack is OK; once a browser has fixed bug X, you can know for certain that all releases that had bug X also had bug Y and use the presence of bug X to target workarounds for bug Y.</p>

<p>For the purpose of this piece of advice, "current" means the most recent version of a browser you have tested, as in the case of the UA sniffing advice above.</p>

<h3 id="Avoid_depending_on_cutting-edge_nonstandard_features">Avoid depending on cutting-edge nonstandard features</h3>

<p>Even if the feature is prefixed, using it could be dangerous: as the specification evolves the browser's prefixed implementation can likewise change to track the specification. And once the feature is standardized, the prefixed version is likely to be removed.</p>

<p>Prefixed, non-standard features are provided by browser developers for you to experiment with and offer feedback on, and aren't meant to be deployed. If you choose to use them, be prepared to need to frequently update your site to keep up with changes.</p>

<h3 id="When_using_cutting-edge_features_(even_standard_ones)_that_are_not_universally_implemented_make_sure_to_test_fallback_paths">When using cutting-edge features (even standard ones) that are not universally implemented, make sure to test fallback paths</h3>

<p>Make sure to test what happens in a browser that doesn't implement the feature you're using, especially if you don't use such a browser day-to-day while working on the site.</p>

<h3 id="Don't_use_vendor-prefixed_features_except_to_target_old_buggy_versions">Don't use vendor-prefixed features except to target old buggy versions</h3>

<p>Vendor-prefixed features can change behavior in future releases.  Once a browser has shipped a feature unprefixed, however, you can use the prefixed version to target old releases by making sure to always use the unprefixed version of the feature when available.  A good example, for a browser vendor using the <code>-vnd</code> CSS prefix that has shipped an unprefixed implementation of the <code>make-it-pretty</code> property, with a behavior for the value <code>"sometimes"</code> that differs from the prefixed version:</p>

<pre>&lt;style&gt;
  .pretty-element {
    -vnd-make-it-pretty: sometimes;
    make-it-pretty: sometimes;
  }
&lt;/style&gt;
</pre>

<p>The order of the declarations in the rule above is important: the unprefixed one needs to come last.</p>

<h3 id="Don't_use_unprefixed_versions_of_CSS_properties_or_APIs_until_at_least_one_browser_supports_them">Don't use unprefixed versions of CSS properties or APIs until at least one browser supports them</h3>

<p>Until there's decently widespread support of the unprefixed version of something, its behavior can still change in unexpected ways.  Most especially, don't use the unprefixed version if no browser actually supports it. You can't assume that the syntax of the final version will be the same as the syntax of any of the prefixed versions.</p>

<h2 id="Code_hygiene">Code hygiene</h2>

<h3 id="Avoid_missing_>">Avoid missing <code>&gt;</code></h3>

<p>Passing a validator is one way to ensure this, but even if your website doesn't validate entirely you should make sure all your <code>&gt;</code> characters are present. Missing those can lead to unexpected situations due to a following tag name being treated as an attribute on a previous tag. This can work for a bit, then break if a specification attaches a meaning to that attribute. Here's an example that works in browsers without HTML5 support but breaks in a browser supporting HTML5:</p>

<pre class="brush: html">&lt;form action="http://www.example.com"&gt;
  &lt;input type="submit" value="Submit the form"
&lt;/form&gt;
</pre>

<p>due to the missing <code>&gt;</code> on the <code>input</code> tag.</p>

<h3 id="Don't_leave_experiments_that_didn't_work_in_your_code">Don't leave experiments that didn't work in your code</h3>

<p>If you try using a CSS property to do something you want, but it has no effect, remove it.  It might start doing something you don't expect in the future</p>

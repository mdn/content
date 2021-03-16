---
title: Using feature queries
slug: Web/CSS/CSS_Conditional_Rules/Using_Feature_Queries
tags:
  - CSS
  - Conditional CSS
  - Guide
  - feature queries
  - progressive enhancement
---
<div>{{CSSRef}}</div>

<p><strong>Feature queries</strong> are created using the CSS at-rule <a href="/en-US/docs/Web/CSS/@supports">@supports</a>, and are useful as they give web developers a way to test to see if a browser has support for a certain feature, and then provide CSS that will only run based on the result of that test. In this guide you will learn how to implement progressive enhancement using feature queries.</p>

<h2 id="Syntax">Syntax</h2>

<p>CSS feature queries are part of the <a href="https://drafts.csswg.org/css-conditional-3/">CSS Conditional Rules module</a>, which also contains the media query <a href="/en-US/docs/Web/CSS/@media">@media</a> rule; when you use feature queries, you will find they behave in a similar way to media queries. The difference is that with a media query you are testing something about the environment in which the web page is running, whereas with feature queries you are testing browser support for CSS features.</p>

<p>A feature query consists of the <code>@supports</code> rule, followed by the property name and value you would like to test for. You may not test for a bare property name such as <code>display</code>; the rule requires a property name and a value:</p>

<pre class="brush: css">@supports (<em>property</em>: <em>value</em>) {
  <em>CSS rules to apply</em>
}</pre>

<p>If you want to check if a browser supports the <code>row-gap</code> property, for example, you would write the following feature query. It doesn't matter which value you use in a lot of cases: if all you want is to check that the browser supports this property, then any valid value will do.</p>

<p>{{EmbedGHLiveSample("css-examples/feature-queries/simple.html", '100%', 600)}}</p>

<p>The value part of the property value pair matters more if you are testing for new values of a particular property. A good example would be the <code>display</code> property. All browsers support <code>display</code>, as <code>display: block</code> dates back to CSS1. However the values <code>display: flex</code> and <code>display: grid</code> are newer. There are often additional values added to properties in CSS, and so the fact that you have to test for property and value means that you can detect support for these values.</p>

<h2 id="Testing_for_lack_of_support">Testing for lack of support</h2>

<p>In addition to asking the browser if it supports a feature, you can test for the opposite by adding in the <code>not</code> keyword:</p>

<pre class="brush: css">@supports not (<em>property</em>: <em>value</em>) {
  <em>CSS rules to apply</em>
}</pre>

<p>The CSS inside the following example feature query will run if the browser does not support <code>row-gap</code>.</p>

<p>{{EmbedGHLiveSample("css-examples/feature-queries/not.html", '100%', 600)}}</p>

<h2 id="Testing_for_more_than_one_feature">Testing for more than one feature</h2>

<p>You may need to test support for more than one property in your feature query. To do so, you can include a list of features to test for, separated by <code>and</code> keywords:</p>

<pre class="brush: css">@supports (<em>property1</em>: <em>value</em>) and (<em>property</em>2: <em>value</em>) {
<em>  CSS rules to apply</em>
}</pre>

<p>For example, if the CSS you want to run requires that the browser supports CSS Shapes and CSS Grid, you could create a rule which checks for both of these things. The following rule will only return true if both <code>shape-outside: circle()</code> and <code>display: grid</code> are supported by the browser.</p>

<p>{{EmbedGHLiveSample("css-examples/feature-queries/and.html", '100%', 600)}}</p>

<p>You can also use <code>or</code>, if one property out of a selection could match to enable the CSS you want to use:</p>

<pre class="brush: css">@supports (<em>property1</em>: <em>value</em>) or (<em>property</em>2: <em>value</em>) {<em>
  CSS rules to apply</em>
}</pre>

<p>This can be particularly useful if a feature is vendor prefixed, as you can test for the standard property plus any vendor prefixes.</p>

<p>{{EmbedGHLiveSample("css-examples/feature-queries/or.html", '100%', 600)}}</p>

<h2 id="Limitations_of_feature_queries">Limitations of feature queries</h2>

<p>The <code>@supports</code> rule tests to see if the browser can parse one or more property/value pairs, and therefore if it claims to support the feature(s). If the property and value pair is understood by the browser it returns a positive response. Therefore feature queries cannot be used to check if a browser supports a thing properly, and without bugs!</p>

<p>In addition, feature queries cannot test for <em>partial implementations</em>. A good example of this is the <code>gap</code> property. All browsers that support CSS Grid support <code>gap</code> in CSS Grid, however only Firefox supports <code>gap</code> in Flexbox. If you test for the <code>gap</code> property, because you want to use it in Flexbox, you will get a positive response even though it is not implemented.</p>

<h2 id="How_to_use_feature_queries_for_progressive_enhancement">How to use feature queries for progressive enhancement</h2>

<p>Feature queries are an incredibly useful tool when progressively enhancing a site. They enable you to provide a good solution for all browsers, and an enhanced solution for those browsers that support newer features.</p>

<p>However, there are browsers that don't support feature queries but also have no support for a feature we want to use. For example, we might want to use CSS Grid, which is not supported in IE11. We can't create a fallback by checking for browsers which do not have support, as IE11 doesn't support feature queries either! In practice however, when using feature queries for progressive enhancement, this doesn't matter. You do however need to structure your CSS in a certain way, writing CSS for non-supporting browsers and overwriting it with the CSS inside the feature query.</p>

<p>Let's walk through a very simple example where feature queries come in handy, which uses them in the way described above.</p>

<p>Let's say we want to create a layout of three boxes in a row, and ideally we would like to use <a href="/en-US/docs/Web/CSS/CSS_Grid_Layout">CSS Grid Layout</a>. However, we would like to have a layout for older browsers using floats. We can start by creating that floated layout with the following code, which gives us three columns.</p>

<p>{{EmbedGHLiveSample("css-examples/feature-queries/step1.html", '100%', 900)}}</p>

<p>When browsers don't understand a CSS property or value, they ignore it. So we could start enhancing our layout by using CSS Grid. Browsers that do not support grid will ignore the <code>grid</code> value of the <code>display</code> property. Once a floated item becomes a grid item, the float is removed — something you can read more about in <a href="/en-US/docs/Learn/CSS/CSS_layout/Supporting_Older_Browsers">Supporting Older Browsers</a>. Therefore the grid version should just overwrite the floated one.</p>

<p>We have a problem however, caused by the <code>width</code> property we used on our floated items to make them display as three columns. This is now interpreted by grid as being the width of the column track, not the width of the container as it is for the float.</p>

<p>{{EmbedGHLiveSample("css-examples/feature-queries/step2.html", '100%', 900)}}</p>

<p>What we need is a way to remove the width if <code>display: grid</code> is supported. This is exactly the situation feature queries solve. We can set the <code>width</code> back to <code>auto</code> if grid is supported.</p>

<p>{{EmbedGHLiveSample("css-examples/feature-queries/step3.html", '100%', 900)}}</p>

<p>In the above scenario, it doesn't matter that IE11 doesn't support feature queries or CSS Grid — it would get the floated version anyway, which is then overwritten by browsers that do support grid.</p>

<p>An alternate way to write the above code is to wrap all of the grid code in a feature query as follows.</p>

<p>{{EmbedGHLiveSample("css-examples/feature-queries/step4.html", '100%', 900)}}</p>

<p>This may mean you have a little more code but comes with the benefit of being able to test the fallback by misspelling the property or value name. You can try this in the live example above by changing <code>display: grid</code> in the <code>@supports</code> rule to <code>display: grip</code> or similar.</p>

<h2 id="Summary">Summary</h2>

<p>Feature Queries can help you start to use newer features by enhancing a simpler display of the site used for older browsers. As you can wrap up the CSS for supporting browsers, you do not run the risk of styles used for the fallback display leaking through, as shown in our grid example above.</p>

<h3 id="See_also">See also</h3>

<ul>
 <li>The <a href="/en-US/docs/Web/CSS/@supports">@supports</a> rule</li>
 <li>Learn Layout: <a href="/en-US/docs/Learn/CSS/CSS_layout/Supporting_Older_Browsers">Supporting Older Browsers</a></li>
 <li><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_and_Progressive_Enhancement">CSS Grid Layout and Progressive Enhancement</a></li>
 <li><a href="https://hacks.mozilla.org/2016/08/using-feature-queries-in-css/">Using Feature Queries in CSS</a></li>
</ul>

---
title: Detecting CSS animation support
slug: Web/CSS/CSS_Animations/Detecting_CSS_animation_support
tags:
  - Advanced
  - CSS
  - CSS Animations
  - Guide
  - JavaScript
  - Junk
  - Reference
---
<div>{{CSSRef}}</div>

<p>CSS animations make it possible to do creative animations of content using nothing but CSS. However, there are likely to be times when this feature isn't available, and you may wish to handle that case by using JavaScript code to simulate a similar effect. This article, based on <a href="http://hacks.mozilla.org/2011/09/detecting-and-generating-css-animations-in-javascript/">this blog post</a> by Chris Heilmann, demonstrates a technique for doing this.</p>

<h2 id="Testing_for_CSS_animation_support">Testing for CSS animation support</h2>

<p>This code will check to see if CSS animation support is available:</p>

<pre class="brush: js">var animation = false,
    animationstring = 'animation',
    keyframeprefix = '',
    domPrefixes = 'Webkit Moz O ms Khtml'.split(' '),
    pfx  = '',
    elem = document.createElement('div');

if( elem.style.animationName !== undefined ) { animation = true; }

if( animation === false ) {
  for( var i = 0; i &lt; domPrefixes.length; i++ ) {
    if( elem.style[ domPrefixes[i] + 'AnimationName' ] !== undefined ) {
      pfx = domPrefixes[ i ];
      animationstring = pfx + 'Animation';
      keyframeprefix = '-' + pfx.toLowerCase() + '-';
      animation = true;
      break;
    }
  }
}
</pre>

<p>For starters we define a few variables. We assume that animation is not supported by setting <code>animation</code> to <code>false</code>. We set the <code>animationstring</code> to <code>animation</code> which is the property we want to set later on. We create an array of browser prefixes to loop over and we set <code>pfx</code> to an empty string.</p>

<p>Then we check if the CSS {{cssxref("animation-name")}} property on the style collection for the element specified by the variable <code>elem</code> is set. This means the browser supports CSS animation without any prefix, which, to date, none of them do.</p>

<p>If the browser does not support non-prefixed animation and <code>animation</code> is still <code>false</code>, we iterate over all the possible prefixes, since all the major browsers are currently prefixing this property and changing its name to <code>AnimationName</code> instead.</p>

<p>Once this code is finished running, the value of animation will be <code>false</code> if CSS animation support isn't available, or it will be <code>true</code>. If it is <code>true</code> then both the animation property name and the keyframe prefix will be the right ones. So if you use a new Firefox, the property will be <code>MozAnimation</code> and the keyframe prefix <code>-moz-</code> and with Chrome it'll be <code>WebkitAnimation</code> and <code>-webkit-</code>. Notice browsers don't make it easy with the switching between camelCase and hyphen-ation.</p>

<h2 id="Animating_using_the_correct_syntax_for_different_browsers">Animating using the correct syntax for different browsers</h2>

<p>Now that you know if CSS animation is supported or not, we can animate.</p>

<pre class="brush: js">if( animation === false ) {

  // animate in JavaScript fallback

} else {
  elem.style[ animationstring ] = 'rotate 1s linear infinite';

  var keyframes = '@' + keyframeprefix + 'keyframes rotate { '+
                    'from {' + keyframeprefix + 'transform:rotate( 0deg ) }'+
                    'to {' + keyframeprefix + 'transform:rotate( 360deg ) }'+
                  '}';

  if( document.styleSheets &amp;&amp; document.styleSheets.length ) {

      document.styleSheets[0].insertRule( keyframes, 0 );

  } else {

    var s = document.createElement( 'style' );
    s.innerHTML = keyframes;
    document.getElementsByTagName( 'head' )[ 0 ].appendChild( s );

  }

}
</pre>

<p>This code looks at the value of <code>animation</code>; if it's <code>false</code>, we know we need to use our JavaScript fallback code to perform our animation. Otherwise, we can use JavaScript to create the desired CSS animation effects.</p>

<p>Setting the animation property is easy; update its value in the style collection. However, adding keyframes is trickier, since they're not defined using traditional CSS syntax (which makes them more flexible, but harder to define from script).</p>

<p>To define our keyframes using JavaScript, we need to write them out as a CSS string. All we do is set up a <code>keyframes</code> variable, prefixing each attribute as it's constructed. This variable, once constructed, contains the complete description of all the keyframes needed by our animation sequence.</p>

<p>The next task is to actually add the keyframes to the page's CSS. The first thing to do is look to see if there's already a style sheet on the document; if so, we insert the keyframe description into that stylesheet; this is done in lines 13-15.</p>

<p>If there isn't already a style sheet, a new {{HTMLElement("style")}} element is created, and its content is set to the value of keyframes. Then the new {{HTMLElement("style")}} element is inserted into the document's {{HTMLElement("head")}}, thereby adding the new style sheet to the document.</p>

<p><a href="https://jsfiddle.net/codepo8/ATS2S/8/embedded/result">View on JSFiddle</a></p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations">CSS animations</a></li>
</ul>

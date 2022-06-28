---
title: Cascade and inheritance
slug: Learn/CSS/Building_blocks/Cascade_and_inheritance
tags:
  - Beginner
  - CSS
  - Cascade
  - Inheritance
  - Learn
  - rules
  - source order
  - specificity
---
{{LearnSidebar}}{{NextMenu("Learn/CSS/Building_blocks/Selectors", "Learn/CSS/Building_blocks")}}

The aim of this lesson is to develop your understanding of some of the most fundamental concepts of CSS — the cascade, specificity, and inheritance — which control how CSS is applied to HTML and how conflicts between style declarations are resolved.

While working through this lesson may seem less relevant immediately and a little more academic than some other parts of the course, an understanding of these concepts will save you from a lot of pain later on! We encourage you to work through this section carefully and check that you understand the concepts before moving on.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        Basic computer literacy,
        <a
          href="/en-US/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >basic software installed</a
        >, basic knowledge of
        <a
          href="/en-US/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >working with files</a
        >, HTML basics (study
        <a href="/en-US/docs/Learn/HTML/Introduction_to_HTML"
          >Introduction to HTML</a
        >), and an idea of how CSS works (study
        <a href="/en-US/docs/Learn/CSS/First_steps">CSS first steps</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Objective:</th>
      <td>
        To learn about the cascade and specificity, and how inheritance works in
        CSS.
      </td>
    </tr>
  </tbody>
</table>

For each property applied to an element, there can only be one value. While the name of this document is a specific color and font size, if you inspect that heading in your browser developer tools “styles” panel, you may notice that there are styles crossed out. The crossed-out styles are the property values that were not applied (even if the value is the same as the current value) due to the cascade. 
 
## Quick recap: the cascade 
 
The cascade, the C in CSS, is the method by which styles cascade together. The user agent goes through several very clearly defined steps to determine which single value gets assigned for every property of every element. We will briefly list the steps, then dig deeper into step 4, cascade layers, which is what you came here to learn:
 
1. Find all the declaration blocks with a selector match for each element.
2. Sort rules based on if they are normal or important (have the [`!important`](/en-US/docs/Web/CSS/important) flag set).
3. Sort each declaration by origin and importance. There are six origin buckets: normal user-agent, user, and author (developer) styles and important author, user, and user agent styles. Styles declared directly on an element with the {{HTMLElement(‘style’)}} element are author styles.
4. Sort all declarations by cascade layer. Within each origin, there can be multiple cascade layers. The order of layers is the order in which the layers each first appeared for normal styles, with unlayered styles coming last. Just like origins, this order is inverted for important styles. 
5. Sort all declarations applying to the given element by specificity. Those elements with a higher specificity have more weight than those with lower specificity.
6. If there is a specificity tie, compare element scope
7. When two selectors in the same cascade layer and origin have the same specificity, the property value from the last declared selector wins.
   
For each step, only the declarations “still in the running” move on to “compete” in the next step. 
 
### Origin and cascade
 
There are three [cascade origin types](/en-US/docs/Web/CSS/cascade#origin_types): user-agent stylesheets, user stylesheets, and author stylesheets. The browser sorts each declaration by origin and importance into one of six buckets: normal user-agent, user, and author (developer) styles and important author, user, and user agent styles, in that order. Styles declared directly on an element with the {{HTMLElement(‘style’)}} element are author styles. 

For each property, the declaration that “wins” is the one from the origin with precedence based on the weight (normal or important). If the winning origin has more than one matching declaration, the specificity of the selectors for those competing propert values are compared. If the origin has cascade layers, cascade layer precedence comes into play, with only the declarations in the layer with the highest precedence in the origin with precedence having their specificity compared.
 
The important thing to note is that browsers only consider specificity after determining [cascade origin and importance](/en-US/docs/Web/CSS/Cascade). In other words, for competing property declarations, specificity is only relevant and compared between selectors from the one [cascade origin and layer](/en-US/docs/Web/CSS/@layer) that has precedence for the property. 
 
In the below example, we have two links: The first has no author styles applied, so all user-agent styles are applied. The second has text-decoration and color set by author styles even though the selector in the author stylesheet has a specificity of 0-0-0. The reason author styles "win" is because when there are conflicting styles from different origins, the rules from the origin with precedence are applied, no matter the specificity is in the origin that doesn’t have precedence.  
 
{{EmbedGHLiveSample("css-examples/learn/layers/basic-cascade.html", '100%', 500)}}
 
At the time of this writing, the "competing" selector in the user-agent stylesheet is `a:any-link`, which has a specificity of 0-1-1. While this is greater than the 0-0-0 selector in the author stylesheet, the two specificity weights are never compared. 
 
If an element property is styled with a normal style declaration in multiple stylesheet origins, the author style sheet will override the redundant normal properties declared in a user agent stylesheet. Every. Single. Time. If the style is important, the user agent stylesheet wins. Every. Single. Time.  Cascade origin precedence ensures there are no specificity conflicts between origins.
 
One last thing to note before moving on: order of appearance only becomes relevant when the selector specificities of the competing declarations in the origin and layer having precedence are equal. 
 
We now understand “cascade origin precedence,” but what is “cascade layer precedence”? We will answer that question by addressing what cascade layers are, how styles are assigned to cascade layers, and how the browser determines which layer has precedence. But, first, let’s discuss what issue cascade layers solve.
 
## The need
 
Similar to how we have origin priority from three sources – user, user-agent, and developer – cascade layers enable us to create sub-origins, called layers, within any of those origins.  For the rest of this tutorial, we will limit our discussion to author styles, but realize layers can also exist in user agent and user stylesheets.
 
Large code bases can have styles coming from different teams, component libraries, and 3rd parties. No matter how many stylesheets are applied, all the styles are in a single author origin. This can create problems. 

Different teams may have different methodologies; one may have a best practice of reducing specificity, such as BEM which encourages single class selectors, while another may have a standard of including an `id` in each selector. 

Specificity conflicts can escalate quickly. An engineer may create a “quick fix” by adding an `!important` flag. This may initially may feel like a fast or easy solution, but it often just moves the specificity war from normal toimportant declarations. 

In the same way that cascade origins provide a balance of power between user and author styles, cascade layers provide a structured way to organize and balance concerns within a single origin. Each layer in the author-origin is like a sub-cascade origin. Whereas selectors can be used to prioritize individual declaration blocks, cascade layers enable the prioritizing of entire stylesheets over other stylesheets.  Specificity is still applied to competing property values within each layer (or nested layer), but there are no specificity concerns between layers as only the highest-priority layer for each property is considered.
 
A layer can be created for each team, component, and 3rd party, with style precedence based on layer order. Only the styles from the layer with precedence have their selector specificity compared.  Rules within a layer cascade together, without competing with style rules outside the layer. 

Within each layer, a team can create nested layers. Not only can you put a component library into a separate layer creating an additional origin obliterating any need for specificity wars, but the component team can include each component in separate nested sub-layer. Nesting layers is useful for component library, framework, and third party widget developers. 

From the specification, “Authors can create layers to represent element defaults, third-party libraries, themes, components, overrides, and other styling concerns—and are able to re-order the cascade of layers in an explicit way, without altering selectors or specificity within each layer, or relying on order of appearance to resolve conflicts across layers.”

##  Creating Layers

Layers can be created in the following ways: 

* Declaring layers without assigning any styles using `@layer` followed by the names of one or more layers. 
* Using an @layer block at-rule which assigns style rules into that layer.
* Including the `layer` keyword or `layer()` function in an [`@import`](/en-US/docs/Web/CSS/@import) rule. This assigns the contents of the imported file into that layer.
  
Let’s cover each in a little more detail, before discussing nested rules.

### @layer

Layer order matters. A lot. The cascade sort each CSS declaration by origin, origin layer, and importance. The order of layers is the order in which the layers each first appeared for normal styles, with unlayered styles coming last. For normal styles, later declared layers take precedence over earlier declared layers, with unlayered styles being in a final implicit unnamed layer. This order is inverted for important styles. 
The order of layers is set by the order in which the layers appear in your CSS. Declaring layers without assigning any styles using `@layer` followed by the names of one or more layers is a one way to set layer order. 

The [`@layer`](/en-US/docs/Web/CSS/@layer) CSS at-rule is used to declare a cascade layer and to define the order of precedence when there are multiple cascade layers. The following declares three layers, in the order listed:

```css
@layer theme, layout, utilities;
```

If that is the first line of CSS, the layer order will be ` theme, layout, utilities`. This line of CSS only creates new layers if the layers have not already been created. If the `layout` layer was already created and is the only existing layer, two new layers are created and the order of layers is `layout`, `theme` and `utitlities`, in that order.  

Prior CSS may have created layers thru @layer block at-rule assignment or `@import`.

### @layer  block at-rule assignment
Layers can be created thru @layer block at-rule assignment if it is the first time the layer name is set or if no name is mentioned. Creating a layer without naming it creates an anonymous layer. 
 
```css
body {
  color: #333;
}
@layer layout {
  main {
	  display: grid;
  }
}

@layer { 
 	body {
	  margin: 0;
  }
} 

@layer theme, layout, utilities;
```

In the above code, we assigned some styles to a layer named `layout`. If the layer didn’t already exist, using the name in an `@layer` at-rule created it.  We then created an anonymous layer by assigning styles to a layer without naming the layer. 

The @layer at rule creates a layer, named or not, or appends styles to a layer if the named layer has already been created. Styles can only be added to an unnamed layer at the time of it's creation. Subsequent use of @layer with no layer name creates additional unnamed layers; it does not append to an existing one. This is way we called the first anonymous layer `anonymous(01)`, in case we had to list subsequent layer order.

The first line, setting the body color to #333, was not declared in any layer. All styles declared outside of a layer are joined together in an implicit layer.  The unlayered declarations take precedence over the explicitly layered declarations even if the unlayered styles have a lower specificity and come first in the order of appearance.

In the last line, when we declared the series of layers, as `layout` was created in our first line, only two layers – theme and utilities – were created for a total of four layers, `layout, anonymous(01), theme, utilities` – in that order - with a fifth, implicit layer of unlayered styles having precendence. 

In the following interactive example, we assign styles to two layers, creating them and naming them in the process. Because they already exist, declaring them on the last line does nothing.
{{EmbedGHLiveSample("css-examples/learn/layers/basic-cascade.html", '100%', 500)}}
 
Try moving the last line, the `@layer site, page;` to make it the first line. What happens?
 
If you define a layer using media or feature queries, and the media is not a match, the layer is not created. In the following example, we create the site layer in wider browsers. We assign styles to the page and site layers, in that order.
 
{{EmbedGHLiveSample("css-examples/learn/layers/media-order.html", '100%', 500)}}
 
If you are on a wide screen, the site layers was declared in the first line, meaning site has less precedence than page. Otherwise, site has precedence over page as it was declared later on narrow screens.

### @import

The [`@import`](/en-US/docs/Web/CSS/@import) rule allows users to import style rules from other style sheets either directly into a CSS file or into a {{htmlelement(‘style’)}}. When importing stylesheets, the `@import` must be before any CSS styles within the stylesheet or `<style>` block, though it may be preceded by `@layer` rules and character set declarations.

You can import a stylesheet into a named layer, a nested named layer, or an anonymous layer. The following layer imports the style sheets into a `components` layer, a nested `dialog` layer within the `components` layer, and an un-named layer, respectively:

```css
@import url("components-lib.css") layer(components);
@import url("dialog.css") layer(components.dialog);
@import url("marketing.css") layer();
```

You can import more than one CSS file into a single layer. The following imports two separate files into a single social layer:

```css
@import url(comments.css) layer(social);
@import url(sm-icons.css) layer(social);
```

You can import styles and create layers based on specific conditions using [media queries](​​/en-US/docs/Web/CSS/Media_Queries/Using_media_queries) and [feature queries](/en-US/docs/Web/CSS/CSS_Conditional_Rules/Using_Feature_Queries). The following imports a style sheet into an international layer only if the browser supports ruby display the file being imported being dependent on the width of the screen. 

```css
@import url("ruby-narrow.css") layer(international) supports(display: ruby) and (width < 32rem);
@import url("ruby-wide.css") layer(international) supports(display: ruby) and (width >= 32rem);
```

There is no equivalent, yet, for the {{HTMLElement(‘link’)}} method of linking stylesheets. Creating a `layer` attribute is being considered, but, as of this writing (July 2022), there is no specification or support. For now, use `@import` to import a stylesheet into a layer when you can’t use `@layer` within the stylesheet.


## Test your skills!

You've reached the end of this article, but can you remember the most important information? You can find some further tests to verify that you've retained this information before you move on — see [Test your skills: The Cascade](/en-US/docs/Learn/CSS/Building_blocks/cascade_layers/tasks).

## Summary

If you understood most of this article, then well done — you've started getting familiar with the fundamental mechanics of CSS. Next up, we'll look at [selectors](/en-US/docs/Learn/CSS/Building_blocks/Selectors) in detail.

If you didn't fully understand the cascade, specificity, and inheritance, then don't worry! This is definitely the most complicated thing we've covered so far in the course and is something that even professional web developers sometimes find tricky. We'd advise that you return to this article a few times as you continue through the course, and keep thinking about it.

Refer back here if you start to come across strange issues with styles not applying as expected. It could be a specificity issue.

{{NextMenu("Learn/CSS/Building_blocks/Selectors", "Learn/CSS/Building_blocks")}}

## In this module

- [Cascade and inheritance](/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
- [CSS selectors](/en-US/docs/Learn/CSS/Building_blocks/Selectors)

  - [Type, class, and ID selectors](/en-US/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors)
  - [Attribute selectors](/en-US/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors)
  - [Pseudo-classes and pseudo-elements](/en-US/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)
  - [Combinators](/en-US/docs/Learn/CSS/Building_blocks/Selectors/Combinators)

- [The box model](/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
- [Backgrounds and borders](/en-US/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders)
- [Handling different text directions](/en-US/docs/Learn/CSS/Building_blocks/Handling_different_text_directions)
- [Overflowing content](/en-US/docs/Learn/CSS/Building_blocks/Overflowing_content)
- [Values and units](/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)
- [Sizing items in CSS](/en-US/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS)
- [Images, media, and form elements](/en-US/docs/Learn/CSS/Building_blocks/Images_media_form_elements)
- [Styling tables](/en-US/docs/Learn/CSS/Building_blocks/Styling_tables)
- [Debugging CSS](/en-US/docs/Learn/CSS/Building_blocks/Debugging_CSS)
- [Organizing your CSS](/en-US/docs/Learn/CSS/Building_blocks/Organizing)
- [Fundamental CSS comprehension](/en-US/docs/Learn/CSS/Building_blocks/Fundamental_CSS_comprehension)
- [Creating fancy letterheaded paper](/en-US/docs/Learn/CSS/Building_blocks/Creating_fancy_letterheaded_paper)
- [A cool-looking box](/en-US/docs/Learn/CSS/Building_blocks/A_cool_looking_box)

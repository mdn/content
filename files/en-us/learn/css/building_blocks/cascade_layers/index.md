---
title: Cascade Layers
slug: Learn/CSS/Building_blocks/Cascade_layers
tags:
  - Advanced
  - CSS
  - Cascade
  - Learn
  - rules
  - source order
  - specificity
---
{{LearnSidebar}}{{NextMenu("Learn/CSS/Building_blocks/Selectors", "Learn/CSS/Building_blocks")}}

The aim of this lesson is to introduce you to [cascade layers](/en-US/docs/Web/CSS/@layer), a more advanced feature that builds on the fundamental concepts of the [CSS cascade](/en-US/docs/Web/CSS/cascade) and [CSS specificity](/en-US/docs/Web/CSS/specificity).

While working through this lesson may seem less relevant immediately and a little more academic than some other parts of the course, knowing the basics of what cascade layers are should you encounter them is helpful. Knowing you can use them, and how to leverage their power, will save you from a lot of pain if you find yourself managing a code base with CSS from different parties, plugins, and development teams.  

Cascade layers are most relevant when working with CSS from multiple sources, conflicting CSS selectors and competing specificity, or any time you considering using [`!important`](/en-US/docs/Web/CSS/important).

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>An idea of how CSS works, including the cascade and specificity work (study
        <a href="/en-US/docs/Learn/CSS/First_steps">CSS first steps</a> and <a href="/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance">Cascade, specificity, and inheritance</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Objective:</th>
      <td>
        To fully understand the CSS cascade and how cascade layers work.
      </td>
    </tr>
  </tbody>
</table>

For each property applied to an element, there can only be one value. For example, if you inspect an element in a popular web app in your browser developer tools “styles” panel and scroll down, you may notice there are styles crossed out. The crossed-out styles are the property values that match the selected elemnt but were not applied due to the cascade. There may be several declarations crossed out from many different sources. 

The selector matching the element with the highest specificity from the origin with precedence has its values applied. 

Often, as the complexity of the site increases, the number of stylesheets increases, which makes source order both more important and more complex. Cascade layers simplifies maintaining such code bases. Cascade layers are explicit specificity containers providing simpler and greater control over which CSS declarations end up being crossed out, enablind the developer to prioritize sections of CSS without having to fight specificity. 

To fully understand cascade layers it is important to ensure you understand the CSS cascade:
 
## Review: Cascade 
 
The C in CSS stands for "Cascading." It is the method by which styles cascade together. The user agent goes through several very clearly defined steps to determine which single value gets assigned for every property of every element. We will briefly list the steps, then dig deeper into step 4, cascade layers, which is what you came here to learn:
 
  1. **Relevance:** Find all the declaration blocks with a selector match for each element.
  2. **Importance:** Sort rules based on if they are normal or important. Important styles are those that have the [`!important`](/en-US/docs/Web/CSS/important) flag set.
  3. **Origin:** Sort rules by author, user, or user-agent origin and by importance 
  4. **Layers:** Within each origin importance bucket, sort by cascade layer. The layer order for normal declarations is from first layer created to last, followed by unlayered normal styles. This order is inverted for important styles. 
  5. **Specificity:** For competing styles in the origin layer with precedence, sort declarations by [specificity](/en-US/docs/Web/CSS/Specificity). <!-- When @scope is supported, uncomment: "6. Scope: If there is a specificity tie, compare element [`@scope`](/en-US/docs/Web/CSS/@scope), if relevant and used." Supported in Chrome 105. Not yet documented -->
  6. **Proximity:** When two selectors in the origin layer with precendence have the same specificity, the property value from the last declared highest specificity selector wins.
   
For each step, only the declarations “still in the running” move on to “compete” in the next step. If only one declaration is in the running, the following steps are moot.
 
### Origin and cascade
 
There are three [cascade origin types](/en-US/docs/Web/CSS/cascade#origin_types): user-agent stylesheets, user stylesheets, and author stylesheets. The browser sorts each declaration by origin and importance into size origin buckets. There are eight levels of precedence: the six origin buckets, properties that are transitioning, and properties that are animating. The order of precedence goes from normal user-agent styles, which have the lowest precedence, to styles within currently applied animations, to important user-agent styles, and styles being transitioned, which have the highest precedence: 

1. user-agent normal styles
2. user normal styles
3. author normal styles
4. styles being animated
5. author important styles
6. user important styles
7. user-agent important styles
8. styles being transitioned
   
The "user-agent" is the browser. The "user" is the site visitor. The "author" is you, the developer. Styles declared directly on an element with the {{HTMLElement('style')}} element are author styles. Ignoring animating and transitioning styles for the moment, user-agent normal styles have the lowest precedence; user-agent important styles the greatest. 

For each property, the declaration that “wins” is the one from the origin with precedence based on the weight (normal or important). Ignoring layers for the moment, the value from the origin with greatest precedence gets applied. If the winning origin has more than one property declaration for an element, the [specificity](/en-US/docs/Web/CSS/Specificity) of the selectors for those competing property values are compared. Specificity is never compared between selectors from different origins. This will be reiterated a few times as this fundamental concept really needs to be understood.
 
In the below example, we have two links: The first has no author styles applied, so all user-agent styles are applied. The second has [`text-decoration`](/en-US/docs/Web/CSS/text-decoration) and [`color`](/en-US/docs/Web/CSS/color) set by author styles even though the selector in the author stylesheet has a specificity of `0-0-0`. The reason author styles "win" is because when there are conflicting styles from different origins (layers aren't in play yet), the rules from the origin with precedence are applied, no matter what the specificity is in the origin that doesn’t have precedence.  
 
{{EmbedGHLiveSample("css-examples/learn/layers/basic-cascade.html", '100%', 500)}}
 
At the time of this writing, the "competing" selector in the user-agent stylesheet is `a:any-link`, which has a specificity weight of `0-1-1`. While this is greater than the `0-0-0` selector in the author stylesheet, the two specificity weights are never compared. Learn more about [how specificity weight is calculated](/en-US/docs/Web/CSS/Specificity#how_is_specificity_calculated).
 
Origin precedence always beats selector specificity. If an element property is styled with a normal style declaration in multiple stylesheet origins, the author style sheet will override the redundant normal properties declared in a user agent stylesheet. Every. Single. Time. If the style is important, the user agent stylesheet wins. Every. Single. Time.  Cascade origin precedence ensures there are no specificity conflicts between origins.
 
One last thing to note before moving on: order of appearance, or _proximity_ only becomes relevant when the competing declarations in the origin having precedence have the same specificity. 
 
We now understand “cascade origin precedence,” but what is “cascade layer precedence”? We will answer that question by addressing what cascade layers are, how they are ordered, and how styles are assigned to cascade layers. We'll cover regular layers, nested layers, and anonymous layers. Let's first discuss what cascade layers are and what issues they solve.
 
## The what and why of cascade layers
 
Similar to how we have six priority origin buckets for normal and important styles from three sources – user, user-agent, and developer – cascade layers enable us to create sub-origins, called cascade layers, within any of those origins.  

Within each of the six origin buckets there can be multiple cascade layers. The [order of layer creation]() matters. In normal origin buckets, layers are sorted in the order of each layer's creation. The order of precedence is from first layer created to last, followed by unlayered normal styles. This order is inverted for important styles; with all unlayered important styles being in an implicit layer having precedence over all non-transitioning normal styles, but with the lower precedence than any important layered styles. The important styles in earlier declared layers having precedence over important styles in subsequently declared layers within the same origin. .

For the rest of this tutorial, we will limit our discussion to author styles, but realize layers can also exist in user and user-agent stylesheets.
 
Large code bases can have styles coming from multiple teams, component libraries, frameworks, and 3rd parties. No matter how many stylesheets are included, all these styles cascade together in a single origin: the _author_ style sheet. This can create problems. 

Different teams may have different methodologies; one may have a best practice of reducing specificity, while another may have a standard of including an `id` in each selector. 

Specificity conflicts can escalate quickly. An engineer may create a “quick fix” by adding an `!important` flag. While this may feel like a easy solution, it often just moves the specificity war from normal to important declarations. 

In the same way that cascade origins provide a balance of power between user and author styles, cascade layers provide a structured way to organize and balance concerns within a single origin: each layer in an origin is like a sub-origin. A layer can be created for each team, component, and 3rd party, with style precedence based on layer order.  

Rules within a layer cascade together, without competing with style rules outside the layer. Cascade layers enable the prioritizing of entire stylesheets over other stylesheets, without having to worry about specificity between these sub-origins.

Layer precedence always beats selector specificity. Styles in layers with precedence "win" over layers with less precedence. The specificity of a selector in a losing layer is irrelevant. Specificity still matters for competing property values within a layer, but there are no specificity concerns between layers as only the highest-priority layer for each property is considered.

Cascade layers also allow for nested layers. This serves two main purposes. Within each layer, a team can create nested layers. Not only can you put a component library into a separate layer creating an additional origin obliterating any need for specificity wars, but the component team can include each component in separate nested sub-layers. The ability to nest layers is very useful for component library, framework, and third party widget developers. The ability to nest layers also removes the worry of conflicting layer names. We'll cover this in the nested layer section. 

From the specification, “Authors can create layers to represent element defaults, third-party libraries, themes, components, overrides, and other styling concerns—and are able to re-order the cascade of layers in an explicit way, without altering selectors or specificity within each layer, or relying on order of appearance to resolve conflicts across layers.”

##  Creating Layers

Layers can be created in the following ways: 

* Declaring layers using `@layer` followed by the names of one or more layers. This creates named layers without assigning any styles to them.
* Using an @layer block at-rule, with or without a name, which assigns style rules into that layer.
* Including the `layer` keyword or `layer()` function in an [`@import`](/en-US/docs/Web/CSS/@import) rule. This assigns the contents of the imported file into that layer.

All three methods create a layer if 1) a layer with that name has not already been initialized, or 2) if there is no layer name, it creates a new anonymous (unnamed) layer. 

> **Note:** The order of the layers is the order in which they are created. Styles not in a layer, or "unlayered styles", cascade together into a final implicit label.
  
Let’s cover each in a little more detail, before discussing nested rules.

### @layer

The order of layers is set by the order in which the layers appear in your CSS. Declaring layers without assigning any styles using `@layer` followed by the names of one or more layers is a one way to set [layer order](#ordering-layers).

The [`@layer`](/en-US/docs/Web/CSS/@layer) CSS at-rule is used to declare a cascade layer and to define the order of precedence when there are multiple cascade layers. The following declares three layers, in the order listed:

```css
@layer theme, layout, utilities;
```

Often times you will want to have your first line of CSS be this declaration (with layer names that make sense for your site) to have full control over layer ordering. 

If that is the first line of all of a site's CSS, the layer order will be ` theme, layout, utilities`. If layers have already been created, these three are added to the end of the list of layers. This only creates the layers that aren't already created.. For example, if the `layout` layer was already created and is the only existing layer, two new layers are created and the order of layers is `layout`, `theme` and `utitlities`, in that order.  

Prior CSS may have created layers thru @layer block at-rule assignment or `@import`. 

### @layer  block at-rule assignment

Layers can be created thru @layer block at-rule assignment if it is the first time the layer name is set or if no name is mentioned. Creating a layer without naming it creates an anonymous layer. 

Elaborating on our example from above, the following creates four layers, including an anonymous layer. We use `@layer` three times: creating a named layer, creating an anonymous layer, and declaring a list of layers which only creates two layers since once of the layer names was already created in preceding CSS:
 
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

In the above code, we created four layers, `layout, anonymous(01), theme, utilities` – in that order - with a fifth, implicit layer of unlayered styles having precendence. 

We assigned some styles to a layer named `layout`. When a named layer doesn’t already exist, using the name in an `@layer` at-rule, whether assigning styles to the layer or not, creates it.  

We then created an anonymous layer by assigning styles to a layer without naming the layer.  Styles can only be added to an unnamed layer at the time of it's creation. Subsequent use of `@layer` with no layer name creates additional unnamed layers; it does not append to an existing one.

The `@layer` at rule creates a layer, named or not, or appends styles to a layer if the named layer has already been created. This is way we called the first anonymous layer `anonymous(01)`, in case we had to list subsequent layer order.

The first declaration of the block, where we set the `color: #333` on  `body`, was declared outside of any layer. All styles declared outside of a layer are joined together in an implicit layer.  Normal unlayered declarations take precedence over the normal layered declarations even if the unlayered styles have a lower specificity and come first in the order of appearance.

In the last line, `@layer theme, layout, utilities;`, in which we declared the series of layers, only the `theme` and `utilities` layers were created, , as `layout` was created in our first line. Note that this last line does not change the order of already created layers. There is currently no way to re-order layers once declared.

We now have a total of four layers, `layout, anonymous(01), theme, utilities` – in that order - with a fifth, implicit layer of unlayered styles having precendence. 

In the following interactive example, we assign styles to two layers, creating them and naming them in the process. Because they already exist, declaring them on the last line does nothing.

{{EmbedGHLiveSample("css-examples/learn/layers/basic-cascade.html", '100%', 500)}}
 
Try moving the last line, the `@layer site, page;` to make it the first line. What happens?
 
If you define a layer using [media](​​/en-US/docs/Web/CSS/Media_Queries/Using_media_queries) or [feature](/en-US/docs/Web/CSS/CSS_Conditional_Rules/Using_Feature_Queries) queries, and the media is not a match or the feature is not supported, the layer is not created. In the following example, we create the site `layer` only in wider browsers. We then assign styles to the `page` and `site` layers, in that order.
 
{{EmbedGHLiveSample("css-examples/learn/layers/media-order.html", '100%', 500)}}
 
If you are on a wide screen, the `site` layer was declared in the first line, meaning `site` has less precedence than `page`. Otherwise, `site` has precedence over `page` as it was declared later on narrow screens. Changing the size of your browser will change the layer order.

### @import

The [`@import`](/en-US/docs/Web/CSS/@import) rule allows users to import style rules from other style sheets either directly into a CSS file or into a {{htmlelement('style')}}. Generally, when importing stylesheets, the `@import` must be before any CSS styles within the stylesheet or `<style>` block. An exception to the "@import must come first" rule are that `@import` may be preceded by an `@layer` rule that creates one or more layers without assigning any styles.  

You can import a stylesheet into a named layer, a nested named layer, or an anonymous layer. The following layer imports the style sheets into a `components` layer, a nested `dialog` layer within the `components` layer, and an un-named layer, respectively:

```css
@import url("components-lib.css") layer(components);
@import url("dialog.css") layer(components.dialog);
@import url("marketing.css") layer();
```

You can import more than one CSS file into a single layer. The following imports two separate files into a single `social` layer:

```css
@import url(comments.css) layer(social);
@import url(sm-icons.css) layer(social);
```

You can import styles and create layers based on specific conditions using [media queries](​​/en-US/docs/Web/CSS/Media_Queries/Using_media_queries) and [feature queries](/en-US/docs/Web/CSS/CSS_Conditional_Rules/Using_Feature_Queries). The following imports a style sheet into an `international` layer only if the browser supports `display: ruby`, and the file being imported is dependent on the width of the screen. 

```css
@import url("ruby-narrow.css") layer(international) supports(display: ruby) and (width < 32rem);
@import url("ruby-wide.css") layer(international) supports(display: ruby) and (width >= 32rem);
```

There is no equivalent, yet, for the {{HTMLElement('link')}} method of linking stylesheets. Creating a `layer` attribute is being considered, but, as of this writing (July 2022), there is no specification or support. For now, use `@import` to import a stylesheet into a layer when you can’t use `@layer` within the stylesheet.

Do you have to worry if a 3rd party stylesheet you're importing into a new layer has layers? Nope. The layers become nested layers. 

## Nested layers

Nested layers are layers within a named or anonymous layer. 

Nested layers are created the same ways as described for regular layers above. They are can be created using `@layer` followed by the names of one or more layers; the nested layer being a period-separated list of layer names. Nesting a @layer block at-rule inside another @layer block at-rule, with or without a name, assigns style rules into that nested layer. If a stylsheet is imported with an `@import` declaration containing the `layer` keyword or `layer()` function, any layers in the imported stylesheet are nested layers within the anonymous or named layer into which the stylesheet was assigned. 

Digging a bit deeper into the example we included above: 

```
@import url("components-lib.css") layer(components);
@import url("dialog.css") layer(components.dialog);
```

In the first line we imported `components-lib.css` into the `components` layer. If that file included any layers, named or not, those layers are nested layers withing the components layer. Named layers can be added to via `components.layerName`. Unnamed layers can not be accessed.

The second line imports `dialog.css` into the `dialog` layer, which is a sub-layer of `components`. `dialog` gets created as the last layer within the `components` layer, unless `components-lib.css` already had a `dialog` layer. If `components-lib.css` had layers, all the layers become nested layers. If one of the layers was `dialog`, that layer is now accessible via `components.dialog`, and the styles from dialog.css are appended to it.

; they are can be created and added to with  period-separated list of layer names. with no intervening white space: are created when a layer is created within a layer. In the above code  
, we can establish our own layers of the cascade — building from low-priority styles like resets and defaults, through themes, frameworks, and design systems, up to highest-priority styles, like components, utilities, and overrides.For example, the following generates an explicit reset layer, with lower cascade precedence than any unlayered styles:

## Ordering layers

Layer order matters. A lot. In the same way the cascade sorts by origin and importance, the cascade sorts each CSS declaration by origin layer and importance as well. 

The layer order precedence is the order in which layers are created. If the author styles have two declared layers, the order of precedence is as follows:

1. firstLayer normal styles (A)
2. secondLayer normal styles (B)
3. unlayered normal styles
4. inline normal styles 
5. animating styles
6. unlayered important styles
7. secondLayer important styles (B)
8. firstLayer important styles (A)
9. inline important styles
10. transitioning styles

The order of layers is the order in which the layers each first appeared for normal styles, with unlayered styles coming last. For normal styles, later declared layers take precedence over earlier declared layers, with unlayered styles being in a final implicit unnamed layer. This order is inverted for important styles. 

{{EmbedGHLiveSample("css-examples/learn/layers/layer-precedence.html", '100%', 500)}}

In the above example, we have two layers, inline styles and unlayered styles. The style attribute sets the normal color and important background color. You'll note that normal inline styles override all layered and unlayered normal styles, and important inline styles override all layered and unlayered normal styles from the author origin. 

The normal `text-decoration` and important `box-shadow` are not set inline. You'll note normal unlayered styles override all normal layered styles. With important styles, however, the precedence order is reversed: unlayered important styles have lower precedence than layered styles.

There are two styles that are only included within the layers: `font-style` with normal importance and `font-weight` set as important. For normal styles, B overrides A, and for normal styles later layers have precedence over earlier layers. As the order of precedence is reversed for important styles, the first declared layer A has precedence over B.

You can reverse the layer order by changing the first line from `@layer A, B;`, to `@layer B, A;`. Which styles get changed by this, and which stay the same? Why?

The order of layers is set by the order in which the layers appear in your CSS. In our first line, we declared layers without assigning any styles using `@layer` followed by the names of our layers, ending with a semi-colon. Had we omitted this line, the results would have been the same. Why? We assigned styles rules in named @layer blocks in the order A then B. The two layers were created in that first line. Had they not been, these rule blocks would have created them, in that order. 

We included that first line for two reasons: first, so you could easily edit the line and switch the order, and second, because often times you'll find declaring the order layer up front to be the best practice for your layer order management.

# END OF NEW CONTENT. STILL A DRAFT

XXX NOTES:



 The important thing to note is that browsers only consider layers after determining [cascade origin and importance](/en-US/docs/Web/CSS/Cascade), and only consider specificity after determining cascade layers, origin and importance. In other words, for competing property declarations, if the competition is between origins rather than within, layers don't come into play. And, only if there are competing property declarations within a single layer does specificity become relevant and compared between selectors from the one [cascade origin and layer](/en-US/docs/Web/CSS/@layer) that has precedence for the property. 


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
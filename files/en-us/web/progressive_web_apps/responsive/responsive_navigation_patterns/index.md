---
title: Responsive Navigation Patterns
slug: Web/Progressive_web_apps/Responsive/Responsive_navigation_patterns
tags:
  - Guide
  - Mobile
  - Navigation
  - Responsive Design
  - patterns
---
Need some help designing your app's navigation? These patterns are a great place to start. The following present several ways to handle navigation on large and small screens. Top and left navigation menus are common on larger screens, but are often not the optimal way to present information on small screens because of the reduced screen real estate. Therefore, it is necessary to consider the presentation of content and ease of navigation for all screen sizes.

## Pattern 1: Top toggle menu

In this pattern, as the screen width is reduced, the top navigation items rearrange until there is not enough space. At that point, some items move from the top navigation to a drop-down menu. In the smallest screen, all navigation items live in a toggle menu, and the user has to tap to expand the toggle menu.

You could rank the item priorities to ensure the most important items always appear in the top navigation.

### Pros:

- **one button in header** maximizes space for content on a small screen
- **important items stay visible**in most screen sizes and you decide the item priorities
- **legibility of navigation items is maintained** with adequate spacing, by automatically hiding items that don't fit

### Cons:

- **navigation items might be less discoverable** because some items are hidden in the drop-down or toggle menu
- **users may not notice the button** contains a navigation menu in the smallest screen size
- **one more step** is needed to access the hidden navigation items

![wide UI layout with top toggle menu and three by two layout of content blocks](design_patterns-pattern1.gif)

![moderate width UI layout with top toggle menu and two by three layout of content blocks](design_patterns-pattern2.gif)

![moderate but short UI layout with top toggle menu and size content blocks in a scrolling strip](design_patterns-pattern3.gif)

![narrow mobile layout with top toggle menu and smaller content blocks in two by three layout](design_patterns-pattern4.gif)

## Pattern 2: Expandable bottom menu

Similar to the first pattern, the top navigation items rearrange for smaller widths until there is not enough space. At that point, some items move from the top navigation to a drop-down menu. You could rank the item priorities to ensure the most important items always appear in the top navigation.

In the smallest screen, several items stay on the bottom of the screen, and the rest of the items are hidden. The user can flip the menu open and select from the rest of the navigation items. You could select the items that remain on the bottom.

### Pros:

- **expandable menu is easy to discover**
- **important items are always visible** and you decide the item priorities
- **legibility of navigation items is maintained** with adequate spacing, by automatically hiding items that don't fit

### Cons:

- **one more step** is needed to access the navigation items that are hidden
- **navigation items might be less discoverable** because some items are hidden
- **less space for content** in the smallest screen size

![wide layout with top horizontal menu bar, which moves to the bottom of the content when the layout gets narrower](design_patterns-pattern5.gif)

![moderate layout with top horizontal menu bar, which moves to the bottom of the content when the layout gets narrower](design_patterns-pattern6.gif)

![moderate but short layout sees the top menu bar moving to the bottom of the page so it doesn't get in the way of the content so much.](design_patterns-pattern7.gif)

![narrow screen mobile layout sees the top menu bar moving to the bottom of the page so it doesn't get in the way of the content. It can be dragged up to reveal the menu options. ](design_patterns-pattern8.gif)

## Pattern 3: Left hidden menu

The main navigation is always on the left except in the smallest screen size, where the navigation menu is hidden in a button by default. In the smallest screen, when the user taps the button, the navigation menu slides into view and displays the navigation items.

### Pros:

- **potentially displays more navigation items** in a left navigation compared to a top navigation
- **most items are always visible** except in the smallest screen size
- **one button in header** maximizes space for content on a small screen

### Cons:

- **navigation items might be less discoverable** because some items are hidden in the drop-down or toggle menu
- **users may not notice the button** contains a navigation menu in the smallest screen size
- **one more step** is needed to access the navigation items that are hidden

![wide UI layout with vertical navigation menu down the left-hand side](design_patterns-pattern9.gif)

![moderate layout with vertical navigation down the left-hand side and narrower content area](design_patterns-pattern10.gif)

![moderate but short layout with vertical navigation down the left-hand side and narrower content area](design_patterns-pattern11.gif)

![narrow mobile layout with hidden left-hand menu, which can be dragged onto the screen using a special button to reveal the menu options.](design_patterns-pattern12.gif)

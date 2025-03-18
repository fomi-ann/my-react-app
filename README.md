# my-react-app
 Tutorial / React Full Course 2024 by Bro Code

 ## React basic consepts
  - Logic
  - Working with components

  - Creating card component

  - Different CSS styling:

     - External - styles.css
        easy to use for simple project
        flexibility with media queries and pseudo selectors
        to apply global styles
        can lead to naming conflicts / requires good organisation

     - Modules - dedicated CSS file for each component
        className is uniquely generated via hash
        className is dynamic JS {}
        requires additional set up + import

     - Inline - styling inside jsx function component
        camelCase + strings for values + ';' -> ','
        convenient and easy to understand
        prevents global style conflicts (no classNames)
        great for isolated components with minimal styling (like/subscribe button)
        less maintainable for large apps with responcive elements (redused readability)
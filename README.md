# Themes done using CSS variables and React Context

### How it works

We have created `ThemeContext` with a custom `Provider` component. It gives us access to available themes(`allThemes`), current `theme`, and `setTheme` method. Once `setTheme` is called it places a new `theme` value in the local Context Provider state. We also have `useEffect` that is dependant on `theme` value. Therefore any time `setTheme` is called and `theme` value is changed it triggers our `ThemeProvider`'s `useEffect`. In `useEffect` we use `document.documentElement.style.setProperty` method that allows us to create (on initial render) and override (on every `theme` change) CSS variables. Those we have predefined under each theme name in a `STYLES_VARIABLES` object that defines color schemes for all themes.
We use CSS variables in our styles for components, therefore when those change, colors in the user browser screen change too.

### Assignment

Use this project as a reference to create theme support in your classroom assignment apps. Any of your classroom projects will fit the task, but `Resume` should be a fairly small app to get the fastest result and reduce scope to a maintainable one.
Don't blindly copy code, try to identify where maybe colors should be unchanged. Also, think of your own schemes(go crazy with colors 🤪). You can try and implement instead of theme dropdown select a toggle that swaps between `light` and `dark` themes.

Have fun! 🥳

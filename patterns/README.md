# Patterns

This directory contains all the assets required to create the site and here
is where mostly all of your code should be placed.  

The build system used for this project is done via `gulp` so you can execute
different tasks using `gulp` as the main command inside of this directory.

# Tasks

### `gulp build`

This tak run: 

- [gulp styles:build](#gulp-stylesbuild)
- [gulp js:build](#gulp-jsbuild)

### `gulp lint`

This taks run: 

- [gulp styles:lint](#gulp-styleslint) 
- [gulp js:lint](#gulp-jslint)

### `gulp watch`

This taks run: 

- [gulp styles:watch](#gulp-styleswatch) 
- [gulp js:watch](#gulp-jswatch)

### `gulp styles`

Creates a CSS version from the  `style.scss` file with a [source maps](#whats-a-source-map) 
avaiable so debug of styles is more easily. The file generated from this taks is not recommended to
be used in production because the generated file size it might be bigger due the fact file might
include things like: 

- Comments.
- Blanks spaces.
- Source maps.

### `gulp styles:dev`

This task is an alias for [gulp styles](#gulp-styles)

### `gulp styles:build`

Creates a final version of the styles with minification to derease the file size of the final
styles, this task is useful to have a smaller file to deliver in production.

### `gulp styles:prefix`
### `gulp styles:minify`
### `gulp styles:watch`
### `gulp styles:lint`
### `gulp js`

Task that creates a single JS version with all the requires especified on the file also makes sure
the file contains a [source map](#whats-a-source-map) to keep track of errors more 
easily when the development of the site is active, this task is useful during 
development and the generated file is not minified.

### `gulp js:dev`

This task is just an alias for [gulp js](#gulp-js)

### `gulp js:build`

This taks creates a single JS file with no comments, removes [source maps](#whats-a-source-map) 
and creates a minified version, this is useful to decrease the file size on the final version of the
generated file.

### `gulp js:watch`

Keeps track of every change on the JS files and generate the development version of the JS asset,
(see [gulp js:dev](#gulp-jsdev)) every time a new change is detected on the JS files, useful to do
it manually after every change is made on the site.

### `gulp js:lint`

With this task you can run the linter for JS the file review all the: atoms, molecules, organisms
and templates directories to make sure we follow the same code standard in those sections.

The rules of the linter are specified on the hidden file `.eslintrc.json`.

### `gulp icons`

This tasks looks all `.svg` files located into `static/icons` and creates a new
sprite file named `icons.svg` in the same directory, `icons.svg` is a sprite
with all the icons that can be used on the site.

Each icon can be used such as: 

```php
<?php use_icon( 'icon-file-name', 'optional-class-name' ); ?>
```

For more information about the usage of this helper function please take 
a [look here](https://github.com/moxie-lean/lean-theme/#use_icon).

## FAQs

### How to add new icons? 

Just take all your `.svg` files and place them into `static/icons` then just
run [`gulp icons`](#gulp-icons).

### How to use the icons from the sprite?

To render an icon just use

```php
<?php use_icon( 'icon-file-name', 'optional-class-name' ); ?>
```

### What's a source map?

Source Maps map minified code to source code. You can then read and debug compiled code 
in its original source, ([more info and details about how to enable it on Google Chrome](https://developers.google.com/web/tools/chrome-devtools/javascript/source-maps))

For more information about the usage of this helper function please take 
a [look here](https://github.com/moxie-lean/lean-theme/#use_icon).

### What's minification

Is the process of removing all unnecessary characters from source code without 
changing its functionality. [Wikipedia](https://en.wikipedia.org/wiki/Minification_(programming).

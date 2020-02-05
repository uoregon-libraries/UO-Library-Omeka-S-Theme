# UO Library Omeka-S Theme
A theme for Omeka-S used by UO Libraries, based on the default theme.

# Setup

## Requirements
This theme no longer requires, but heavily encourages, the use of the [Universal Viewer module](https://github.com/Daniel-KM/Omeka-S-module-UniversalViewer) or [Mirador](https://github.com/Daniel-KM/Omeka-S-module-Mirador).
In order for UV or Mirador to replace the default item viewer, the [Blocks Disposition](https://github.com/Daniel-KM/Omeka-S-module-BlocksDisposition) module must be installed and configured to not show either viewer.

## Development
### NPM
CSS development uses NPM and Gulp to compile Sass. A full explanation can be found here: https://omeka.org/s/docs/developer/key_concepts/working_with_Sass_and_CSS/.

The short version is:
 - Install NPM
 - Install Gulp globally `npm install -g gulp-cli`
 - Install local NPM packages `npm install`
 - Start Gulp css watcher `gulp css:watch`

As you change .scss files in /asset/sass Gulp will recompile the .css files in /asset/css. This means .css files should not be edited directly.

### Views
Developing views follows a typical templating engine approach. More details can be found here: https://omeka.org/s/docs/developer/themes/modifying_themes/

Upstream templates are here: https://github.com/omeka/omeka-s/tree/develop/application/view

You can copy a template from upstream and make edits locally to overwrite the view output.

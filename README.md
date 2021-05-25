# UO Library Omeka-S Theme

A theme for Omeka-S used by UO Libraries, based on the default theme.

Devs/admins: Note that dependabot alerts have been disabled for this repository
because we keep getting flagged for dependencies we haven't had in over a year.

# Setup

## Requirements

This theme no longer requires, but heavily encourages, the use of the
[Universal Viewer module](https://github.com/Daniel-KM/Omeka-S-module-UniversalViewer)
or [Mirador](https://github.com/Daniel-KM/Omeka-S-module-Mirador).

In order for UV or Mirador to replace the default item viewer, the
[Blocks Disposition](https://github.com/Daniel-KM/Omeka-S-module-BlocksDisposition)
module must be installed and configured to not show either viewer.

## Development

### NPM

CSS development uses NPM and Gulp to compile Sass. A full explanation can be
found in the Omeka S developer documentation:
[Working with SASS and CSS](https://omeka.org/s/docs/developer/themes/sass_and_css/).

This repository **no longer includes** packages required to run this process,
because nodejs is a beast, the package lockfile triggers security warnings from
github, and the process for generating CSS may change at any time (their
documentation URLs sure do, at least).

When we need to do this again, we should document the process, preferably using
a standalone package like the one *the SASS creators built and maintain*.
Sheesh.

### Views

Look at the [Omeka S Theme documentation](https://omeka.org/s/docs/developer/themes/).

You may find Omeka's
[upstream templates](https://github.com/omeka/omeka-s/tree/develop/application/view)
list useful.  You can copy a template from upstream and make edits locally to
overwrite the view output.

# Installation

Designed to make your life easy.

### Prerequisites

1. [Composer](//getcomposer.org)
2. [NodeJs](//nodejs.org)

### Installation through Composer (recommended)

Run these commands at the terminal:

```
composer create-project anvel/anvel-base your-project
npm install -g bower gulp
cd your-project
npm install --no-bin-links
bower install
gulp setup
php artisan serve
```

Go to http://localhost:8000. Before working on your AngularJs/SCSS
files, you must run command `gulp`.

<wi><a ui-sref="eli5.show({title: 'gulp'})">Gulp</a></wi>

## Your working directories

- Your AngularJs files are located in `/angular`
- Your scss files are located in `/style`
- Your views are located in `/public/views`
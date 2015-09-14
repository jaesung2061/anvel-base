## Angular Laravel starter kit (Anvel)

Designed to make starting new projects even easier.

### Prerequisites

1. <a href="//getcomposer.org">Composer</a>
2. <a href="//nodejs.org">NodeJs</a>
3. <a href="//www.npmjs.com/package/bower">Bower</a>
4. <a href="//www.npmjs.com/package/bower">Gulp</a>

### Installation through Composer (recommended)

Run this command:

```
composer create-project anvel/anvel-base your-project
```

<hr>

### Alternative installation:

Run these commands:

```
git clone https://github.com/jaesung2061/anvel-base.git your-project
composer install
php artisan key:generate
php artisan jwt:generate
```

<hr>

### Post install

```
npm install [--no-bin-links]
npm install -g bower
bower install
gulp setup
php artisan serve
```

Before working on your JS/SCSS files, you must run command `gulp`. This command will watch the JS/CSS files in `./resources/assets/*`. If you are running `php artisan serve` already, open a new terminal to run `gulp`.

<hr>

### Your working directories

Your AngularJs files will be located in `./resources/assets/js`

Your scss files are located in `./resources/assets/sass`

Your views are located in `./public/views`

### Tutorials and better documentation coming soon!

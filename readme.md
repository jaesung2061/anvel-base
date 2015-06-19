## Angular Laravel starter kit (Anvel)

Designed to make starting new projects even easier.

### Prerequisites

1. <a href="//getcomposer.org">Composer</a>
2. <a href="//nodejs.org">Node</a>
3. //www.npmjs.com/package/bower

### Installation through Composer (recommended)

Run this command:

```
composer create-project anvel/anvel-base your-project
```

<hr/>

### Alternative installation:

Run these commands:

```
git clone https://github.com/jaesung2061/anvel-base.git your-project
composer install
php artisan key:generate
php artisan jwt:generate
```

### Post install

Run these commands to pull in node modules and bower components:

```
npm install [--no-bin-links]
bower install
```

<br/>
Run these commands to set up your public asset files (Angular, css)

```
gulp dep
gulp js
gulp css
```

#### Your working directories

Your AngularJs files will be located in `./resources/assets/js`

Your scss files are located in `./resources/assets/sass`

Your views are located in `./public/views`

##### Thats it, complete guide on building websites at [Anvel.io](http://anvel.io)

Tutorials coming soon: blogs, social networks and whatever you request :)

Email: jeffyeon2061@gmail.com
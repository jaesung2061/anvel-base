<?php

use App\User;
use Illuminate\Database\Seeder;

// "composer require fzaninotto/faker --save-dev"
//use Faker\Factory as Faker;

class UsersTableSeeder extends Seeder {
    /**
     * Run the seeder
     */
    public function run()
    {
        User::create([
            'name'    => 'John Doe',
            'email'    => 'johndoe@example.com',
            'password' => 'secret'
        ]);
    }
}

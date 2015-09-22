<?php

namespace App\Http\Controllers;

use Faker\Factory as Faker;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\User;

class UsersController extends Controller
{
    /**
     * Will be used for creating dummy user data
     * to use as examples
     *
     * @var Collection
     */
    protected $users;

    /**
     * Create dummy user data
     */
    public function __construct()
    {
        $faker = Faker::create();
        $collection = new Collection();

        // Create 10 dummy user objects
        for ($i = 0; $i < 10; $i++) {
            $user = new User([
                'name'  => $faker->name,
                'email' => $faker->email
            ]);

            $collection->add($user);
        }

        $this->users = $collection;
    }

    /**
     * Return all users. Dummy data will be returned for this example.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $this->users;
    }

    /**
     * Create a new user. You will need to
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $input = $request->only(['name', 'email']);

        $user = new User($input);

        $user->save();

        return $user;
    }
}

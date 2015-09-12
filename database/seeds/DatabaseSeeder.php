<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder {

    public function __construct()
    {
        if (!App::isLocal()) {
            throw new Exception('DO NOT SEED IN PRODUCTION');
        }
    }

    /**
     * $table => $seeder
     *
     * @var array
     */
    protected $seeders = [
//        'users' => UsersTableSeeder::class
    ];

    public function run()
    {
        Model::unguard();
        DB::statement('SET FOREIGN_KEY_CHECKS=0');

        // loop through the seeders and call each one
        foreach ($this->seeders as $table => $seeder) {
            DB::table($table)->truncate();
            $this->call($seeder);
        }

        DB::statement('SET FOREIGN_KEY_CHECKS=1');
        Model::reguard();
    }
}

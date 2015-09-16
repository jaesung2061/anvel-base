<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class PostInstallTasks extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'anvel:post-install-tasks';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Post install tasks for Anvel.';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $this->generateJWTKey();
    }

    /**
     * Generate JWT key and
     */
    protected function generateJWTKey()
    {
        $key = $this->getRandomKey($this->laravel['config']['app.cipher']);

        $envPath = base_path('.env');
        $jwtConfigPath = base_path('.env');

        if (file_exists($envPath)) {
            file_put_contents($envPath, str_replace(
                'JWT_SECRET='.$this->laravel['config']['jwt.secret'], 'JWT_SECRET=' . $key, file_get_contents($envPath)
            ));
        } else if (file_exists($jwtConfigPath)) {
            file_put_contents($jwtConfigPath, str_replace(
                $this->laravel['config']['jwt.secret'], $key, file_get_contents($jwtConfigPath)
            ));
        }

        $this->laravel['config']['jwt.secret'] = $key;

        $this->info("JWT key [$key] set successfully.");
    }

    /**
     * Generate a random key for the application.
     *
     * @param  string $cipher
     * @return string
     */
    protected function getRandomKey($cipher)
    {
        if ($cipher === 'AES-128-CBC') {
            return str_random(16);
        }

        return str_random(32);
    }

    /**
     * Get the console command options.
     *
     * @return array
     */
    protected function getOptions()
    {
        return [
            ['show', null, InputOption::VALUE_NONE, 'Simply display the key instead of modifying files.'],
        ];
    }
}

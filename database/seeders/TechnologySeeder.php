<?php

namespace Database\Seeders;

use App\Models\technology;
use Illuminate\Database\Seeder;

class TechnologySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        technology::factory()->create();
    }
}

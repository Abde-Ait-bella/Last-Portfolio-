<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Project>
 */
class ProjectFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->word(),
            'description' => $this->faker->sentence(),
            'start_date' => $this->faker->date(),
            'end_date' => $this->faker->date(),
            'repository' => $this->faker->url(),
            'technology_id' => \App\Models\Technology::inRandomOrder()->first()->id,
            'website' => $this->faker->url(),
            'image' => $this->faker->imageUrl(),
            'status' => $this->faker->randomElement(['active', 'completed', 'on hold']),
            'created_at' => now(),
        ];
    }
}

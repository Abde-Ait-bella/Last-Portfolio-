<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\technology>
 */
class TechnologyFactory extends Factory
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
            'icon' => function() {
                $shapes = [
                    '<circle cx="12" cy="12" r="10" />',
                    '<rect x="2" y="2" width="20" height="20" />',
                    '<polygon points="12,2 22,22 2,22" />',
                ];
                $shape = $this->faker->randomElement($shapes);
                $color = $this->faker->hexColor();
                return '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="' . $color . '">' . $shape . '</svg>';
            },
            'created_at' => now(),
        ];
    }
}

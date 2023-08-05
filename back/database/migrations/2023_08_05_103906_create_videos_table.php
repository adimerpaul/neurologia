<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('videos', function (Blueprint $table) {
            $table->id();
            $table->string('subtitle')->nullable()->default('');
            $table->string('title')->nullable()->default('');
            $table->string('avatar')->nullable()->default('');
            $table->string('content')->nullable()->default('');
            $table->boolean('button')->nullable()->default(false);
            $table->string('urlZoom')->nullable()->default('');
            $table->string('urlYoutube')->nullable()->default('');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('videos');
    }
};

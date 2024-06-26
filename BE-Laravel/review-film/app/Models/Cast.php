<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Cast extends Model
{
    use HasFactory, HasUuids;

    protected $table = 'cast';

    protected $fillable = [
        'name',
        'bio',
        'age'
    ];

}
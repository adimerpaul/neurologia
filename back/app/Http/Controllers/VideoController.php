<?php

namespace App\Http\Controllers;

use App\Models\Video;
use App\Http\Requests\StoreVideoRequest;
use App\Http\Requests\UpdateVideoRequest;
use Illuminate\Http\Request;

class VideoController extends Controller{
    public function index(Request $request){
        $date = $request->get('date');
        $videos = Video::whereDate('date', $date)->get();
        return response()->json($videos);
    }
}

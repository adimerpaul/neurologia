<?php

namespace App\Http\Controllers;

use App\Models\UserVideo;
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
    public function verVideo(Request $request){
        $user_id = $request->user()->id;
        $video = Video::find($request->id);
        UserVideo::create([
            'user_id' => $user_id,
            'video_id' => $video->id,
            'date' => date('Y-m-d'), // date('Y-m-d H:i:s'
            'time' => date('H:i:s')
        ]);
    }
}

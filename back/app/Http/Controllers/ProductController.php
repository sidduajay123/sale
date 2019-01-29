<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;

class ProductController extends Controller
{
    public function index()
    {
        $result = Product::all();

        if ($result->isNotEmpty()) 
        {
            return response()->json(['success'=>$result]);
        }else{
            return response()->json(['error'=>'No product found']);
        }
    }
}

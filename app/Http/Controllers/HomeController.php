<?php namespace App\Http\Controllers;

class HomeController extends Controller
{
	/**
	 * When the user enters any uri that is not prepended with '/api/'
	 * Return the default view and AngularJs will route accordingly
	 * on the browser client-side application.
	 *
	 * /GET ANY
	 *
	 * @return View
	 */
	public function index()
	{
		return \View::make('default');
	}

}

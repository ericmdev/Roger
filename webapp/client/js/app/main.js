/* Node Modules */
var jQuery = require('jquery');
var Clouds = require('clouds');
var HelloWorld = require('hello-world');

/*!
 * App
 */
function App()
{

    this.clouds =
    this.helloWorld = null;

    this.init = function()
    {

        console.log("App.init");
        this.clouds = new Clouds();
        this.clouds.init();
        console.log("Clouds.init");
        this.helloWorld = new HelloWorld();
        this.helloWorld.init();
        console.log("HelloWorld.init");
        return false;

    }

}

var app = new App();

jQuery(window).load(function() {
    app.init();
});
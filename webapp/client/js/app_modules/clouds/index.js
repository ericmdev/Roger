'use strict';
var stylesheet = require('./style.scss');
var img = {
    cloud: require("./cloud.png"),
    darkCloud: require("./darkCloud.png"),
    purpleCloud: require("./purpleCloud.png"),
    purpleCloud2: require("./purpleCloud2.png"),
    smoke: require("./smoke.png"),
    fire: require("./fire.png"),
    fire2: require("./fire2.png")
}

/* Request Animation Frame */
var lastTime = 0;
var vendors = ['ms', 'moz', 'webkit', 'o'];
for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
    window.cancelRequestAnimationFrame = window[vendors[x]+
      'CancelRequestAnimationFrame'];
}

if (!window.requestAnimationFrame)
    window.requestAnimationFrame = function(callback, element) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
          timeToCall);
        lastTime = currTime + timeToCall;
        return id;
    };

if (!window.cancelAnimationFrame)
    window.cancelAnimationFrame = function(id) {
        clearTimeout(id);
    };


/*!
 * Clouds
 */
module.exports = function Clouds() {

    var layers = [],
    worldXAngle = 0,
    worldYAngle = 0;

    function update () {
        
        for ( var j = 0; j < layers.length; j++ ) {
            var layer = layers[ j ];
            layer.data.a += layer.data.speed;
            var t = 'translateX( ' + layer.data.x + 'px ) translateY( ' + layer.data.y + 'px ) translateZ( ' + layer.data.z + 'px ) rotateY( ' + ( - worldYAngle ) + 'deg ) rotateX( ' + ( - worldXAngle ) + 'deg ) rotateZ( ' + layer.data.a + 'deg ) scale( ' + layer.data.s + ')';
            layer.style.webkitTransform =
            layer.style.MozTransform =
            layer.style.oTransform =
            layer.style.transform = t;
            //layer.style.webkitFilter = 'blur(5px)';
        }
        
        requestAnimationFrame( update );
        
    }

    this.world, 
    this.viewport,
    this.objects = [],
    this.computedWeights = [],
    this.textures = [
        {
            name:    'white cloud',
            file:    img.cloud,
            opacity: 0.8,
            weight:  0.5
        },
        {
            name:    'dark cloud',
            file:    img.darkCloud,
            opacity: 0.8,
            weight:  1
        },
        {
            name:    'purple cloud',
            file:    img.purpleCloud,
            opacity: 0.5,
            weight:  2
        },
        {
            name:    'purple cloud 2',
            file:    img.purpleCloud2,
            opacity: 0.5,
            weight:  1
        },
        {
            name:    'smoke cloud',
            file:    img.smoke,
            opacity: 1,
            weight:  1
        },
        {
            name:    'fire',
            file:    img.fire,
            opacity: 1,
            weight:  2
        },
        {
            name:    'fire 2',
            file:    img.fire2,
            opacity: 1,
            weight:  1
        }
    ];

    /*
        Defines world and viewport DOM elements.
    */
    this.init = function() {

        this.world    = document.getElementById( 'world' ),
        this.viewport = document.getElementById( 'viewport' );
        this.generate();
        update();

    }

    /*
        Clears the DOM of previous clouds bases 
        and generates a new set of cloud bases
    */
    this.generate = function() {

        this.objects = [];

        this.computedWeights = [];

        if ( this.world.hasChildNodes() ) {
            while ( this.world.childNodes.length >= 1 ) {
                this.world.removeChild( this.world.firstChild );       
            } 
        }

        var total = 0;
        for ( var j = 0; j < this.textures.length; j++ ) {
            if( this.textures[ j ].weight > 0 ) {
                total += this.textures[ j ].weight;
            }
        }

        var accum = 0;
        for ( var j = 0; j < this.textures.length; j++ ) {
            if( this.textures[ j ].weight > 0 ) {
                var w = this.textures[ j ].weight / total;
                this.computedWeights.push( {
                    src: this.textures[ j ].file,
                    min: accum,
                    max: accum + w
                } );
                accum += w;
            }
        }

        console.log(this.textures);
        console.log(this.computedWeights);

        for ( var j = 0; j < 5; j++ ) {
            this.objects.push( this.createCloud() );
        }

    }

    /*
        Creates a single cloud base and adds several cloud layers.
        Each cloud layer has random position ( x, y, z ), rotation (a)
        and rotation speed (s). layers[] keeps track of those divs.
    */
    this.createCloud = function() {

        var base = document.createElement( 'div' );
        base.className = 'cloudBase';

        var x = 256 - ( Math.random() * 512 );
        var y = 256 - ( Math.random() * 512 );
        var z = 256 - ( Math.random() * 512 );
        var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px )';

        base.style.webkitTransform = 
        base.style.MozTransform = 
        base.style.oTransform =
        base.style.transform = t;

        this.world.appendChild( base );
        
        for ( var j = 0; j < 5 + Math.round( Math.random() * 10 ); j++ ) {

            var layer = document.createElement( 'img' );
            layer.style.opacity = 0;

            var r = Math.random();
            var src = null;

            for ( var k = 0; k < this.computedWeights.length; k++ ) {

                if ( r >= this.computedWeights[ k ].min && r <= this.computedWeights[ k ].max ) {
                    ( function( img ) { img.addEventListener( 'load', function() {
                        img.style.opacity = .8;
                    } ) } )( layer );
                    src = this.computedWeights[ k ].src;
                }

            }

            layer.setAttribute( 'src', src );
            layer.className = 'cloudLayer';
            
            var x = 256 - ( Math.random() * 512 );
            var y = 256 - ( Math.random() * 512 );
            var z = 100 - ( Math.random() * 200 );
            var a = Math.random() * 360;
            var s = .25 + Math.random();

            x *= .2;
            y *= .2;

            layer.data = { 
                x: x,
                y: y,
                z: z,
                a: a,
                s: s,
                speed: .1 * Math.random()
            };

            var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px ) rotateZ( ' + a + 'deg ) scale( ' + s + ' )';

            layer.style.webkitTransform = 
            layer.style.MozTransform = 
            layer.style.oTransform = 
            layer.style.transform = t;

            base.appendChild( layer );
            layers.push( layer );

        }

        return base;

    }

};
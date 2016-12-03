var scene, camera, renderer;
var geometry, material, mesh;

init();
animate();

function init() {

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
    camera.position.z = 1000;

    geometry = new THREE.BoxGeometry( 200, 200, 200 );



	var Objectloader = new THREE.JSONLoader();
	Objectloader.load( "file://Users/yuxuyang/Desktop/CSC461HW4/mesh.js", function( geometry ) {
	   mesh = new THREE.Mesh( geometry, new THREE.MeshNormalMaterial() );
	   mesh.scale.set( 10, 10, 10 );
	   mesh.position.y = 150;
	   mesh.position.x = 0;
       scene.add( mesh );
   } );



    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );

    document.body.appendChild( renderer.domElement );

}

function animate() {

    requestAnimationFrame( animate );


    renderer.render( scene, camera );

}

var scene;
var camera;
var renderer;
var geometry;
var carCube = [];
var truckCube =[];
var material;

function initial(){
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    camera.position.z = 50;
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
};


function LoadGameObjects(){
    var loader = new THREE.TextureLoader();
    var roadTextureMaterial;
    loader.crossOrigin ='';
    loader.load(
	// resource URL
	'../source/tunnel_road.jpg',
	// Function when resource is loaded
	function ( texture ) {
		// do something with the texture
		 roadTextureMaterial = new THREE.MeshBasicMaterial( {
			map: texture
		 } );
	},
	// Function called when download progresses
	function ( xhr ) {
		console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
	},
	// Function called when download errors
	function ( xhr ) {
		console.log( 'An error happened' );
	}
);
    var road = new THREE.PlaneGeometry(50,50);
    var roadMaterial = new THREE.MeshBasicMaterial({color: 0xccccb3});
    var roadMesh = new THREE.Mesh(road,roadTextureMaterial);
    roadMesh.position.x = 25;
    scene.add(roadMesh);

    var startPosition = 0;
    for (var i = 0; i< 10; i++){
        geometry = new THREE.BoxGeometry(1,1,1);
        material = new THREE.MeshBasicMaterial({color: 0x00ff99});
        var newCube = new THREE.Mesh(geometry, material);
        newCube.position.x = startPosition + i*5;
        carCube.push(newCube);
        scene.add(carCube[i]);
    }

    for (var i = 0; i< 5; i++){
        geometry = new THREE.BoxGeometry(1,1,1);
        material = new THREE.MeshBasicMaterial({color: 0x00ff99});
        var newCube = new THREE.Mesh(geometry, material);
        newCube.position.x = startPosition + i*15;
        newCube.position.y = -10;
        truckCube.push(newCube);
        scene.add(truckCube[i]);
    }

}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

var render = function() {
    requestAnimationFrame( render );
    sleep(300);
    for(var i = 0; i< 10; i++){
        carCube[i].position.x = (carCube[i].position.x +6)%50;
    }
    for (var j = 0; j<5; j++){
        truckCube[j].position.x = (truckCube[j].position.x +10)%50;
    }
	renderer.render(scene, camera);
};

initial();
LoadGameObjects();
render();

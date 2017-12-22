var scene = new THREE.Scene();
var aspect = window.innerWidth / window.innerHeight;
var camera = new THREE.PerspectiveCamera( 75, aspect, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var parametric = function(u,v){
  u = 2*u*Math.PI-Math.PI;
  v = 2*v*Math.PI-Math.PI;
  return new THREE.Vector3(Math.cos(u)*Math.cos(v),Math.sin(u)*Math.sin(v),Math.sin(u));
};

var material = new THREE.MeshNormalMaterial();
var geometry = new THREE.ParametricBufferGeometry(parametric, 50, 50);

var cube = new THREE.Mesh(geometry, material);
camera.position.z = 5;
scene.add(cube);
var t = 0;
var render = function () {
  t += 0.01;
  cube.rotation.y = t;
  cube.rotation.x = 0;
  renderer.render( scene, camera );
  requestAnimationFrame( render );
};

render();

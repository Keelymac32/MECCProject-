var left_mesh,scene,camera,renderer;
function main()
{
	container = document.querySelector('#container');
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(25,window.innerWidth/window.innerHeight, 1,1000);
	camera.position.z = 200;
	camera.position.x = -50;
	camera.position.y = 0;
	renderer = new THREE.WebGLRenderer(); 
	renderer.setSize(window.innerWidth, window.innerHeight);
	container.appendChild(renderer.domElement);

	groups = new Groups();

	//right side of halway
	room1 = groups.group1(90,120,3);
	scene.add(room1); 
	room2 = groups.group1(-45,140,4);
	scene.add(room2);
	floor = groups.group2();
	scene.add(floor);
    room3 = groups.group3(-180,0,"right",40,90,120,50);
	scene.add(room3);
	room3 = groups.group3(-300,0,"right",40,90,120,50);
	scene.add(room3);
    
    //left side of hallway
	room8 = groups.group3(110,-140,"left",40,90,80,50);
    scene.add(room8);
	room4 = groups.group3(32,-140,"left",40,90,80,50);
    scene.add(room4);
    room5 = groups.group3(-52,-140,"left",40,90,80,50);
    scene.add(room5);
    room6 = groups.group3(-134,-140,"left",40,90,80,50);
    scene.add(room6);
    room7 = groups.group3(-216,-140,"left",40,90,80,50);
    scene.add(room7);
	room9 = groups.group3(-298,-140,"left",40,90,80,50);
    scene.add(room9);
    room10 = groups.group3(-380,-140,"left",40,90,80,50);
    scene.add(room10);
	room11 = groups.group3(-462,-140,"left",40,90,80,50);
    scene.add(room11);
    room12 = groups.group3(-544,-140,"left",40,90,80,50);
    scene.add(room12);

    //hallway doors
    doors = groups.group5();
    scene.add(doors);

    //Enterance
    entrance = groups.group4();
    scene.add(entrance);




	scene.background = new THREE.Color(0x030124);
  	renderer.render(scene, camera);


	mouse_event();
}

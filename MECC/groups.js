
var m;
class Groups {
//lab space
  group1(a,d,t) {
  	var H = 40, W = 90, D = d, K = 70;
		var group = new THREE.Group();  


		var room = new ROOM(W,H,D);
		
//left wall with door cut out
		mesh = room.box(2,H,wal_tex,{d:4,tz:a});
		group.add(mesh);
		mesh = room.box(2,H,wal_tex,{d:D-10,tz:a-15});
		group.add(mesh);
		mesh = room.box(2,11,wal_tex,{d:15,ty:29,tz:a});
		group.add(mesh);
		mesh = room.box(2,11,wal_tex,{d:15,ty:29,tz:a-105});
		group.add(mesh);
		mesh = room.box(2,H,wal_tex,{d:10,tz:a-114});
		group.add(mesh);


		//right wall
		mesh = room.box(2,H,wal_tex,{d:D,tx:90,tz:a});
		group.add(mesh);

		//backwall
		mesh = room.box(W+2,H,wal_tex,{d:2*D/K,tz:-d+a});
		group.add(mesh);

		//front wall
		mesh = room.box(W+2,H,wal_tex,{d:2*D/K,tz:a});
		group.add(mesh);

		//white board
		mesh = room.box(70,25,board_tex,{tx:10,ty:8,tz:-5+a,d:1,});
		group.add(mesh);

		//floor
		mesh = room.box(W,.5,floor_tex,{d:D,tz:a});
		group.add(mesh);

		//ceiling
		mesh = room.box(W,.5,roof_tex,{d:5,ty:39.5,tz:a});
		group.add(mesh);

//front door
    mesh = room.box(12,30,door_tex,{tx:-6,ty:0,tz:-8+a,d:1,ry:90});
    group.add(mesh);

//back door
    mesh = room.box(12,30,door_tex,{tx:-6,ty:0,tz:-d+a+10,d:1,ry:90});
    group.add(mesh);

 //left wall windows 
    var trans = -20;
    for(let i = 0; i < 7; i++){
	mesh = room.box(9,20,win_tex,{tx:-2,ty:10,tz:trans+a,d:1,ry:90});
    group.add(mesh);
    mesh = room.plane(7,18,cur_tex,{tx:-.25,ty:11,tz:trans-.5 +a,ry:90});
    group.add(mesh);
    trans = trans + -15;
  }

//right wall windows 
var trans = -20;
    for(let i = 0; i < 7; i++){
	mesh = room.box(9,20,win_tex,{tx:85,ty:10,tz:trans+a,d:1,ry:90});
    group.add(mesh);
    mesh = room.plane(7,18,cur_tex,{tx:85,ty:11,tz:trans-.5+a,ry:90});
    group.add(mesh);
    trans = trans + -15;
  }
//backwall windows 
var trans = 4;
    for(let i = 0; i < 6; i++){
		mesh = room.box(9,20,win_tex,{tx:trans,ty:10,tz:-d+a+1,d:1,ry:0});
    group.add(mesh);
    mesh = room.plane(7,18,cur_tex,{tx:trans+1,ty:11,tz:-d+a+2,d:1,ry:0});
    group.add(mesh);
    trans = trans + 15;
  }

//pillars 
    mesh = room.box(4,H,wal_tex,{tx:2,tz:-70+a,d:6,});
	group.add(mesh);
		
	mesh = room.box(4,H,wal_tex,{tx:88,tz:-70+a,d:6,});
	group.add(mesh);

//left tables
var trans = -25	
for (let i = 0; i < t; i++){
mesh = room.box(40,1,table_tex,{tx:2,ty:8,tz:trans+a,d:10});
	group.add(mesh);
mesh = room.box(40,8,front_tex,{tx:2,tz:trans+a,d:1});
	group.add(mesh);
	trans = trans + -25;
}
//right tables
var trans = -25	
for (let i = 0; i < t; i++){
mesh = room.box(30,1,table_tex,{tx:60,ty:8,tz:trans+a,d:10});
	group.add(mesh);
mesh = room.box(30,8,front_tex,{tx:60,tz:trans+a,d:1});
	group.add(mesh);
	trans = trans + -25;
}

//teacher desk
mesh = room.box(15,1,wood_tex,{tx:75,ty:10,tz:-8+a,d:8,});
	group.add(mesh);

mesh = room.box(15,10,wood_tex,{tx:75,tz:-15+a,d:1});
	group.add(mesh);

mesh = room.box(1,10,wood_tex,{tx:75,tz:-15+a,d:-5});
	group.add(mesh);
mesh = room.box(1,10,wood_tex,{tx:89,tz:-15+a,d:-5});
	group.add(mesh);

//clock
	mesh = room.cyclinder(4,4,clock_tex,{tx:44,ty:30,tz:-d+a+1,d:1,ry:90,rx:90});
	group.add(mesh);

//computer right
	var trans = -25
	for(let i = 0; i < t; i++){
	var shift = 35;
    for(let i = 0; i < 4; i++){
	mesh = room.special_box(8,5,front_tex,{tx:shift,ty:10,tz:trans+a,d:.5});
	group.add(mesh);
	mesh = room.box(2,5,front_tex,{tx:shift+3,ty:8,tz:trans+1+a,d:1});
	group.add(mesh); 
	shift = shift - 10;
	}	
trans = trans + -25;
}

//computer left
	var trans = -25
	for(let i = 0; i < t; i++){
	var shift = 35;
    for(let i = 0; i < 2; i++){
	mesh = room.special_box(8,5,front_tex,{tx:40+shift,ty:10,tz:trans+a,d:.5});
	group.add(mesh);
	mesh = room.box(2,5,front_tex,{tx:43+shift,ty:8,tz:trans+1+a,d:1});
	group.add(mesh); 
	shift = shift - 15;
	}	
trans = trans + -25;
}
	
var mesh = room.box(.5,10,walldec_tex,{d:D-5,tz:a-15});
		group.add(mesh);


	return group;
  }
//hallway floor and ceiling 
group2() {
	var H = .5, W = 55, D = 900, K = 70;
	var group2 = new THREE.Group();
		var floor = new ROOM(W,H,D);
		var mesh = floor.box(W,H,floor_tex,{tx:-68,ty:-20,tz:-300,d:D});
		group2.add(mesh);

    	var mesh = floor.half_cycl(30,30,wal_tex,{d:D-30,tx:-60,ty:2,tz:-300,rx:90,ry:90});
    	group2.add(mesh);

	return group2;
	}
//left and right side office spaces	
group3(a,x,side,h,w,d,k){
	var H = h, W = w, D = d, K = k; 
		var group3 = new THREE.Group();  
		var room = new ROOM(W,H,D);
		//backwall
		mesh = room.box(W+2,H,wal_tex,{d:2*D/K,tx:x,tz:a-D});
		group3.add(mesh);

		//front wall
		mesh = room.box(W+2,H,wal_tex,{d:2*D/K,tx:x,tz:a});
		group3.add(mesh);

		//white board
		//mesh = room.box(70,25,board_tex,{tx:10,ty:8,tz:-5+a,d:1,});
		//group3.add(mesh);

		//floor
		mesh = room.box(W,.5,floor_tex,{d:D,tx:x,tz:a});
		group3.add(mesh);

		//ceiling
		//mesh = room.box(W,.5,roof_tex,{d:D,tx:x,ty:H,tz:a});
		//group3.add(mesh);

if(side == "left"){
		mesh = room.box(10,30,door_tex,{tx:x+(W-3),ty:0,tz:-15+a,d:1,ry:90});
    	group3.add(mesh);
    	console.log("left entered");
    	//leftwall
		var mesh = room.box(2,H,wal_tex,{d:D,tx:x,tz:a});
		group3.add(mesh);

		mesh = room.box(2,H,wal_tex,{d:10,tx:W+x,tz:a});
		group3.add(mesh);
		
		mesh = room.box(2,H,wal_tex,{d:70,tx:W+x,tz:a-20});
		group3.add(mesh);
		
		mesh = room.box(2,10,wal_tex,{d:10,tx:W+x,ty:30,tz:a-10});
		group3.add(mesh);

		//oustide wall decoration
		mesh = room.box(.5,10,walldec_tex,{tx:-48,d:D-10,tz:a-20});
		group3.add(mesh);

		//table
		mesh = room.box(15,1,door_tex,{d:40,tx:x+30,ty:10,tz:a-40});
		group3.add(mesh);
		mesh = room.box(30,1,door_tex,{d:15,tx:x,ty:10,tz:a-65});
		group3.add(mesh);
		mesh = room.box(1,10,front_tex,{d:40,tx:x+44,ty:0,tz:a-40});
		group3.add(mesh);
		mesh = room.box(15,10,front_tex,{d:1,tx:x+30,ty:0,tz:a-40});
		group3.add(mesh);

		//professor chair
		mesh = room.box(10,1,door_tex,{d:10,tx:x+10,ty:5,tz:a-50});
		group3.add(mesh);
		mesh = room.box(1,10,door_tex,{d:10,tx:x+10,ty:5,tz:a-50});
		group3.add(mesh);
		mesh = room.box(1,5,door_tex,{d:1,tx:x+10,ty:0,tz:a-50});
		group3.add(mesh);
  		mesh = room.box(1,5,door_tex,{d:1,tx:x+10,ty:0,tz:a-58});
		group3.add(mesh);
		mesh = room.box(1,5,door_tex,{d:1,tx:x+19,ty:0,tz:a-50});
		group3.add(mesh);
  		mesh = room.box(1,5,door_tex,{d:1,tx:x+19,ty:0,tz:a-58});
		group3.add(mesh);

		// student chair
		mesh = room.box(10,1,door_tex,{d:10,tx:x+50,ty:5,tz:a-50});
		group3.add(mesh);
		mesh = room.box(1,10,door_tex,{d:10,tx:x+60,ty:5,tz:a-50});
		group3.add(mesh);
		mesh = room.box(1,5,door_tex,{d:1,tx:x+50,ty:0,tz:a-50});
		group3.add(mesh);
  		mesh = room.box(1,5,door_tex,{d:1,tx:x+50,ty:0,tz:a-58});
		group3.add(mesh);
		mesh = room.box(1,5,door_tex,{d:1,tx:x+59,ty:0,tz:a-50});
		group3.add(mesh);
  		mesh = room.box(1,5,door_tex,{d:1,tx:x+59,ty:0,tz:a-58});
		group3.add(mesh);

		//windows
		mesh = room.box(25,20,win_tex,{tx:x-10,ty:10,tz:a-30,d:1,ry:90});
    	group3.add(mesh);
    	mesh = room.plane(20,18,cur_tex,{tx:x-7,ty:11,tz:a-30,ry:90});
    	group3.add(mesh);
    	mesh = room.box(25,20,win_tex,{tx:x-10,ty:10,tz:a-50,d:1,ry:90});
    	group3.add(mesh);
    	mesh = room.plane(20,18,cur_tex,{tx:x-7,ty:11,tz:a-50,ry:90});
    	group3.add(mesh);

    	//book shelf 1
    	mesh = room.box(25,1,wood_tex,{d:10,tx:x+10,ty:0,tz:a-2});
		group3.add(mesh);
		mesh = room.box(25,1,wood_tex,{d:10,tx:x+10,ty:8,tz:a-2});
		group3.add(mesh);
		mesh = room.box(25,1,wood_tex,{d:10,tx:x+10,ty:16,tz:a-2});
		group3.add(mesh);
		mesh = room.box(25,1,wood_tex,{d:10,tx:x+10,ty:24,tz:a-2});
		group3.add(mesh);
		mesh = room.box(25,1,wood_tex,{d:10,tx:x+10,ty:32,tz:a-2});
		group3.add(mesh);
		mesh = room.box(25,1,wood_tex,{d:10,tx:x+10,ty:38,tz:a-2});
		group3.add(mesh);
		mesh = room.box(1,40,wood_tex,{d:10,tx:x+10,ty:0,tz:a-2});
		group3.add(mesh);
		mesh = room.box(1,40,wood_tex,{d:10,tx:x+35,ty:0,tz:a-2});
		group3.add(mesh);

		//book shelf 2
    	mesh = room.box(25,1,wood_tex,{d:10,tx:x+45,ty:0,tz:a-2});
		group3.add(mesh);
		mesh = room.box(25,1,wood_tex,{d:10,tx:x+45,ty:8,tz:a-2});
		group3.add(mesh);
		mesh = room.box(25,1,wood_tex,{d:10,tx:x+45,ty:16,tz:a-2});
		group3.add(mesh);
		mesh = room.box(25,1,wood_tex,{d:10,tx:x+45,ty:24,tz:a-2});
		group3.add(mesh);
		mesh = room.box(25,1,wood_tex,{d:10,tx:x+45,ty:32,tz:a-2});
		group3.add(mesh);
		mesh = room.box(25,1,wood_tex,{d:10,tx:x+45,ty:38,tz:a-2});
		group3.add(mesh);
		mesh = room.box(1,40,wood_tex,{d:10,tx:x+45,ty:0,tz:a-2});
		group3.add(mesh);
		mesh = room.box(1,40,wood_tex,{d:10,tx:x+70,ty:0,tz:a-2});
		group3.add(mesh);
}


if(side == "right"){
  
  mesh = room.box(10,30,door_tex,{tx:-5,ty:0,tz:-15+a,d:1,ry:90});
  group3.add(mesh);
  
  var mesh = room.box(.5,10,walldec_tex,{d:40,tx:x,tz:a});
  group3.add(mesh);
	
  var mesh = room.box(.5,10,walldec_tex,{d:D,tx:x,tz:a});
  group3.add(mesh);
  
  console.log("right entered");
  //right wall
		mesh = room.box(2,H,wal_tex,{d:D,tx:W+x,tz:a});
		group3.add(mesh);
		mesh = room.box(2,H,wal_tex,{d:10,tx:x,tz:a});
		group3.add(mesh);
		mesh = room.box(2,H,wal_tex,{d:D-10,tx:x,tz:a-20});
		group3.add(mesh);
		mesh = room.box(2,10,wal_tex,{d:10,tx:x,ty:30,tz:a-10});
		group3.add(mesh);
//table
		mesh = room.box(15,1,door_tex,{d:40,tx:x+50,ty:10,tz:a-40});
		group3.add(mesh);
		mesh = room.box(30,1,door_tex,{d:15,tx:x+60,ty:10,tz:a-65});
		group3.add(mesh);
		mesh = room.box(1,10,front_tex,{d:40,tx:x+50,ty:0,tz:a-40});
		group3.add(mesh);
		mesh = room.box(15,10,front_tex,{d:1,tx:x+50,ty:0,tz:a-40});
		group3.add(mesh);

//windows
		mesh = room.box(25,20,win_tex,{tx:x+77,ty:10,tz:a-30,d:1,ry:90});
    	group3.add(mesh);
    	mesh = room.plane(20,18,cur_tex,{tx:x+78,ty:11,tz:a-30,ry:90});
    	group3.add(mesh);
    	mesh = room.box(25,20,win_tex,{tx:x+77,ty:10,tz:a-50,d:1,ry:90});
    	group3.add(mesh);
    	mesh = room.plane(20,18,cur_tex,{tx:x+78,ty:11,tz:a-50,ry:90});
    	group3.add(mesh);	




	}
return group3;
 }

//Entrance
group4(){
	var H = 40, W = 235, D = 280, K = 50, a = 290;
	var group4 = new THREE.Group();  
	var room = new ROOM(W,H,D);
	
	var mesh = room.box(W,.5,tile_tex,{d:D,tx:-70,tz:a});
	group4.add(mesh);
  
  	var mesh = room.box(2,40,wal_tex,{d:D,tx:-68,tz:a});
	group4.add(mesh);


return group4;
}


//hallway doors
group5(){
	var H = 40, W = 90, D = 80, K = 50;
		var group5 = new THREE.Group();  
		var doors = new ROOM(W,H,D);
		//right side
		var mesh = doors.box(25,32,door2_tex,{d:1,tx:-25,tz:112});
    	group5.add(mesh);
    	//left side
    	var mesh = doors.box(25,32,door2_tex,{d:1,tx:-50,tz:112});
    	group5.add(mesh);

		var mesh = doors.box(55,8,wal_tex,{d:2,tx:-55,ty:32,tz:110});
    	group5.add(mesh);

return group5;

  }
}
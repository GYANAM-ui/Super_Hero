var canvas= new fabric.Canvas("myCanvas");
var block_img_width=30;
var block_img_height=30;
var player_x=30;
var player_y=30;
var player_object="";
var block_img_object="";

function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top:player_y, 
            left:player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_img_object=Img;
        block_img_object.scaleToWidth(block_img_width);
        block_img_object.scaleToHeight(block_img_height);
        block_img_object.set({
            top:player_y, 
            left:player_x
        });
        canvas.add(block_img_object);
    });
}

window.addEventListener("keydown", my_keydown);
 function my_keydown(e){
    key_pressed=e.keyCode;
    console.log(key_pressed);

    if(e.shiftKey==true && key_pressed=="80"){
        console.log("shift and p pressed together");
    block_img_width=block_img_width+10;
    block_img_height=block_img_height+10;
    document.getElementById("current_width").innerHTML=block_img_width;
    document.getElementById("current_height").innerHTML=block_img_height;
    }

    if(e.shiftKey==true && key_pressed=="77"){
        console.log("shift and m pressed together");
    block_img_width=block_img_width-10;
    block_img_height=block_img_height-10;
    document.getElementById("current_width").innerHTML=block_img_width;
    document.getElementById("current_height").innerHTML=block_img_height;
    }

    if(key_pressed=="70"){
        new_image('ironman_face.png');
        console.log("f")
    }

    if(key_pressed=="66"){
        new_image('spiderman_body.png');
        console.log("b")
    }

    if(key_pressed=="76"){
        new_image('hulk_legs.png');
        console.log("l")
    }

    if(key_pressed=="82"){
        new_image('thor_right_hand.png');
        console.log("r")
    }

    if(key_pressed=="72"){
        new_image('captain_america_left_hand.png');
        console.log("h")
    }

    if(key_pressed=="38"){
        up();
        console.log("up")
    }

    if(key_pressed=="40"){
        down();
        console.log("down")
    }

    if(key_pressed=="37"){
        left();
        console.log("left")
    }

    if(key_pressed=="39"){
        right();
        console.log("right")
    }
 }

 function up(){
    if(player_y>0){
        player_y=player_y-block_img_height;
        console.log("block image height="+block_img_height);
        console.log("when up arrow is pressed x=" + player_x + "y=" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down(){
    if(player_y<=350){
        player_y=player_y+block_img_height;
        console.log("block image height="+block_img_height);
        console.log("when down arrow is pressed x=" + player_x + "y=" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left(){
    if(player_x>=0){
        player_x=player_x-block_img_width;
        console.log("block image width="+block_img_width);
        console.log("when left arrow is pressed x=" + player_x + "y=" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right(){
    if(player_x<=650){
        player_x=player_x+block_img_width;
        console.log("block image width="+block_img_width);
        console.log("when right arrow is pressed x=" + player_x + "y=" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}
/*classe avatar********************************************************************************/

//constructor

function Avatar(x, y, w, h, img){

	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.img=new Image();
	this.img.src=img;
	
	//sprite
	this.state = STATE_LOOKDOWN;
	this.frame = 0;
	this.delay = 0;

	//mètodes publics
	this.paint = _paint;
	this.moveRight = _moveRight;
	this.moveUp = _moveUp;
	this.moveDown = _moveDown;
	this.moveLeft = _moveLeft;		
	this.stop = _stop;
	this.coll_p = _coll_p;

	//implementacions
	function _paint(ctx) {
		//ctx.fillStyle=this.color;
		//ctx.fillRect(this.x,this.y,this.w,this.h);
				        		
		ctx.drawImage(
			this.img, 			//imatge
			32*this.frame, 		//desplaçament x del frame
			48*(this.state%4),	//desplaçament y del frame
			32,					//amplada del frame
			48,					//alçada del frame
			this.x,				//posicio x dins del canvas
			this.y,				//posició y dins del canvas
			32,					//amplada del frame
			48					//alçada del frame
		);
	}

	function _moveRight(){
		this.x+=GAME_PAS;
		
		if(this.state==STATE_WALKRIGHT){
			if(++this.delay==FRAME_DELAY){
				this.frame=++this.frame%4;
				this.delay=0;
			}			
		}else{
			this.state=STATE_WALKRIGHT;
			this.frame=0;			
			this.delay=0;
		}
		
		this.coll_p();
	}

	function _moveLeft(){
		this.x-=GAME_PAS;
		
		if(this.state==STATE_WALKLEFT){
			if(++this.delay==FRAME_DELAY){
				this.frame=++this.frame%4;
				this.delay=0;
			}			
		}else{
			this.state=STATE_WALKLEFT;
			this.frame=0;			
			this.delay=0;
		}
		
		this.coll_p();
	}	

	function _moveUp(){
		this.y-=GAME_PAS;
		
		if(this.state==STATE_WALKUP){
			if(++this.delay==FRAME_DELAY){
				this.frame=++this.frame%4;
				this.delay=0;
			}			
		}else{
			this.state=STATE_WALKUP;
			this.frame=0;			
			this.delay=0;
		}
		
		this.coll_p();
	}

	function _moveDown(){
		this.y+=GAME_PAS;
		
		if(this.state==STATE_WALKDOWN){
			if(++this.delay==FRAME_DELAY){
				this.frame=++this.frame%4;
				this.delay=0;
			}			
		}else{
			this.state=STATE_WALKDOWN;
			this.frame=0;			
			this.delay=0;
		}
		
		this.coll_p();	
	}

	//collisio parets
	function _coll_p(){
		//controlar xocs contra parets
		if((this.x+this.h)>GAME_WIDTH) this.x=GAME_WIDTH-this.w;
		if(this.x<0) this.x=0;
		if(this.y<0) this.y=0;					
		if((this.y+this.h)>GAME_HEIGHT) this.y=GAME_HEIGHT-this.h;	
	}

	//posició on s'ha de quedar el ninot en finalitzar el caminar.
	function _stop(){

		//Assignar le frame inicial
		this.frame=0;

		if(this.state==STATE_WALKDOWN)
			this.state=STATE_LOOKDOWN;
		if(this.state==STATE_WALKLEFT)
			this.state=STATE_LOOKLEFT;
		if(this.state==STATE_WALKRIGHT)
			this.state=STATE_LOOKRIGHT;
		if(this.state==STATE_WALKUP)
			this.state=STATE_LOOKUP;
	}	

}

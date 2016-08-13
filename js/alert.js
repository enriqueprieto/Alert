/*
##############################################
	ALERT
##############################################
*/
	var Alert = function(){
		this.theme = "alert-normal";
		this.text = "";
		this.style = true;
		this.temporary = false;
		this.timeout = 5000;
		this.positionX = "alert-right";
		this.positionY = "alert-bottom";
		this.baseIcons = "https://fonts.googleapis.com/icon?family=Material+Icons";
		this.baseTheme = "css/alert.theme.css";
	}
	/*
	##############################################
		CORE
	##############################################
	*/
		/*
		///////////////////////////////////////
			CHECK
		///////////////////////////////////////
		*/
			/*
			====================================
				OBJ
			====================================
			*/
				Alert.prototype.checkObj = function(obj){
					var status = true;
					/*
					-------------------------------
						TEXT
					-------------------------------
					*/
						if(obj.text == null || obj.text == ""){
							status = false;
						}					
					/*
					-------------------------------
						//TEXT
					-------------------------------
					*/
					return status;
				}
			/*
			====================================
				//OBJ
			====================================
			*/
		/*
		///////////////////////////////////////
			//CHECK
		///////////////////////////////////////
		*/

		/*
		======================================
			LOAD
		======================================
		*/
			Alert.prototype.load = function(data){
				this.getIcons();
				this.getTheme();
				this.setText(data.text);
				if(data.theme != null){
					this.setTheme(data.theme);
				}
				if(data.temporary != null){
					this.setTemporary(data.temporary);
				}
				if(data.timeout != null){
					this.setCounter(data.timeout);
				}
				if(data.positionX != null){
					this.setPositionX(data.positionX);
				}
				if(data.positionY != null){
					this.setPositionY(data.positionY);
				}
			}
		/*
		======================================
			//LOAD
		======================================
		*/
		/*
		======================================
			SHOW
		======================================
		*/
			Alert.prototype.show = function(){
				var body 		= document.getElementsByTagName("body")[0],
					modal  		= document.createElement("div"),
					btn 		= document.createElement("button"),
					text 		= document.createElement("p"),
					el 			= this;
				btn.setAttribute("class", "alert-control alert-close material-icons md-18");
				btn.innerHTML = "close";
				modal.setAttribute("class", "alert");
				modal.classList.add(this.positionX);
				modal.classList.add(this.positionY);
				if(el.style == true){
					modal.classList.add(el.theme);
				}
				modal.setAttribute("id", "alert");
				text.innerHTML = this.text;
				modal.appendChild(btn);
				modal.appendChild(text);
				body.appendChild(modal);
				this.getUX();
				if(el.temporary == true){
					setTimeout(function(){
						el.close();
					}, el.timeout);
				}
			}
		/*
		======================================
			//SHOW
		======================================
		*/
		/*
		======================================
			CLOSE
		======================================
		*/
			Alert.prototype.close = function(){
				var modal = document.getElementById("alert");
				modal.classList.add("closing");
				setTimeout(function(){
					modal.remove();
				}, 250);
			}
		/*
		======================================
			//CLOSE
		======================================
		*/
		/*
		======================================
			EXIST
		======================================
		*/
			Alert.prototype.exist = function(){
				var modal = document.getElementById("alert"),
					status = false;
				if(modal != null){
					status = true;
				}
				return status
			}
		/*
		======================================
			//EXIST
		======================================
		*/
		/*
		//////////////////////////////////////
			SETS
		//////////////////////////////////////
		*/
			/*
			===================================
				THEME
			===================================
			*/
				Alert.prototype.setTheme = function(data){
					this.theme = "alert-"+data;
				}
			/*
			===================================
				//THEME
			===================================
			*/
			/*
			===================================
				COUNTER
			===================================
			*/
				Alert.prototype.setCounter = function(data){
					this.timeout = data;
				}
			/*
			===================================
				//COUNTER
			===================================
			*/
			/*
			===================================
				TEXT
			===================================
			*/
				Alert.prototype.setText = function(data){
					this.text = data;
				}
			/*
			===================================
				//TEXT
			===================================
			*/
			/*
			===================================
				TEMPORARY
			===================================
			*/
				Alert.prototype.setTemporary = function(data){
					this.temporary = data;
				}
			/*
			===================================
				//TEMPORARY
			===================================
			*/
			/*
			==================================
				POSITION
			==================================
			*/
				/*
				--------------------------------
					X
				--------------------------------
				*/
					Alert.prototype.setPositionX = function(data){
						this.positionX = "alert-"+data;
					}
				/*
				--------------------------------
					//X
				--------------------------------
				*/
				/*
				--------------------------------
					Y
				--------------------------------
				*/
					Alert.prototype.setPositionY = function(data){
						this.positionY = "alert-"+data;
					}
				/*
				--------------------------------
					//Y
				--------------------------------
				*/
			/*
			==================================
				//POSITION
			==================================
			*/
		/*
		//////////////////////////////////////
			//SETS
		//////////////////////////////////////
		*/
		/*
		//////////////////////////////////////
			GETS
		//////////////////////////////////////
		*/
			/*
			==================================
				ICONS
			==================================
			*/
				Alert.prototype.getIcons = function(){
					var head 	= document.getElementsByTagName("head")[0],
						link 	= document.createElement("link");
					link.setAttribute("rel", "stylesheet");
					link.setAttribute("type", "text/css");
					link.setAttribute("href", this.baseIcons);
					head.appendChild(link);
				}
			/*
			==================================
				//ICONS
			==================================
			*/
			/*
			==================================
				THEME
			==================================
			*/
				Alert.prototype.getTheme = function(){
					var head 	= document.getElementsByTagName("head")[0],
						link 	= document.createElement("link");
					link.setAttribute("rel", "stylesheet");
					link.setAttribute("type", "text/css");
					link.setAttribute("href", this.baseTheme);
					head.appendChild(link);
				}
			/*
			==================================
				//THEME
			==================================
			*/
			/*
			==================================
				UX
			==================================
			*/
				Alert.prototype.getUX = function(){
					var close 	= document.getElementsByClassName('alert-close'),
						el 		= this;
					for(var i = 0; i < close.length; i++){
						close[i].addEventListener("click", function(){
							el.close();
						});
					}
				}
			/*
			==================================
				//UX
			==================================
			*/
		/*
		//////////////////////////////////////
			//GETS
		//////////////////////////////////////
		*/
	/*
	##############################################
		//CORE
	##############################################
	*/
	/*
	======================================
		CALL
	======================================
	*/
		function noraAlert(data){
			var app = new Alert();
			if(!app.exist()){
				if(app.checkObj(data)){
					app.load(data);
					app.show();
				}else{
					console.log("Aconteceu algo :/");
				}
			}else{
				app.close();
				setTimeout(function(){
					if(app.checkObj(data)){
						app.load(data);
						app.show();
					}else{
						console.log("Aconteceu algo :/");
					}
				},500);
			}
		}
	/*
	======================================
		//CALL
	======================================
	*/
/*
##############################################
	//ALERT
##############################################
*/
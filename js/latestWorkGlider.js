var glider = new Glider(document.querySelector('.glider'), {
		  slidesToShow: 1,
		  slidesToScoll:1,
		  draggable: true,
		  rewind:true,
		  arrows: {
		    prev: '.glider-prev',
		    next: '.glider-next'
		  },

		  responsive:[
		  //Screens larger than 600
		  {
		  	breakpoint:900,
		  	settings:{
		  		slidesToShow: 1.5,
			 	slidesToScoll:1,
			  	draggable: true,
			 	arrows: {
		    		prev: '.glider-prev',
		    		next: '.glider-next'
		  		}
		  	}
		  }

		  ]
		});

		function setMiddlePos() {
			if(window.innerWidth >= 1500 )
  				glider.scrollTo(875);
  			else if(window.innerWidth >= 1200 )
  				glider.scrollTo(700);
	  		else if(window.innerWidth >= 900 )
	  			glider.scrollTo(530);
	  		else if(window.innerWidth >= 600 )
	  			glider.scrollTo(810);
	  		else if(window.innerWidth >= 400 )
	  			glider.scrollTo(560);
	  		else{
	  			glider.scrollTo(365);
	  		}

		}

		window.onload = setMiddlePos;
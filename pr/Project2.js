function imageC(image,image2){
	document.getElementById('0').src=image;
	document.getElementById('2').src=image2;
	


	document.getElementById('1').innerHTML="<a>Рождественские хроники</a>" +"</br>" + "<a></a>" + "</br>" + "<a>2018</a>" + "</br>" + "<a>В центре повествования находятся брат и сестра Тедди и Кейт. Им очень хочется доказать всем вокруг, что Санта действительно существует, и для этого они готовы даже выследить его и заснять его на свою портативную видеокамеру. Герои фильма и предположить не могли, что на самом деле дела обстоят совсем не так, как они думали. Оказалось, что Санта вовсе не добродушный старик, а настоящий остряк с несносным характером. В конце концов, Тедди и Кейт отправляются вместе с хозяином Рождества в рискованное и невероятно увлекательное путешествие, в ходе которого им предстоит сделать всё возможное, чтобы спасти праздник. Какие приключения их ждут во время этой поездки?</a>";

}
var carousels = document.querySelectorAll('#carousels .carousel');
var currentCarousel=0;
var carouseInterval = setInterval(nextCarousel,5000);
function nextCarousel(){
	carousels[currentCarousel].className='carousel';
	currentCarousel=(currentCarousel+1)%carousels.length;
	carousels[currentCarousel].className='carousel demonstration';
}
function process(responses){
			
			
				 var card = document.createElement('div');
				 card.setAttribute("class","seri");
				 card.style.display='block';
				 console.log(responses[2]);
				 card.innerHTML=(responses[2].img);
			
				 
			
		}
	function onSuccess(response){
			return response.json().then(process);
		}
		
	
		
		function onFail(response){
			console.log(response);
			
		}
	function fire(event){
			
			fetch("serials.json").then(onSuccess,onFail);
			document.getElementById('ser').style.display = 'none';
			
		}

document.querySelector("#load").addEventListener("click",fire);
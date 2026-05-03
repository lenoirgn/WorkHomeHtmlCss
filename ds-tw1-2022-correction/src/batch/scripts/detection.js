let acc = 0; //variable globale pour calculer le nombre de clics

const batch = ["images/cars1.png",
               "images/cars2.jpeg",
               "images/cars3.png",
               "images/cars4.jpg"]; // batch qui contient les chemins des images

const init = function() {
	createBatch();
}

window.addEventListener('load', init);

const createBatch = function() {
	for (let i = 0; i < batch.length ; i++) {
	   let image_detect = document.createElement('img');
	   image_detect.className = 'detect';
	   image_detect.src = batch[i];
	   image_detect.addEventListener('click', addone);
	   let evaluation = document.getElementById('eval');
	   evaluation.appendChild(image_detect);
	}
}

const addone = function() {
  this.removeEventListener('click', addone);
  let perf = document.getElementById('accurancy');
  acc = acc + 1;
  perf.value = acc/batch.length;
}

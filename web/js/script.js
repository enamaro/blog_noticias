$(function() {
	
	inicio();
	
});

function vistaNoticias(noticia) {
	var vista_noticia = `
		<article class="brick entry format-standard" animate-this>
               <div id="div_`+noticia['id']+`" class="entry-thumb una_sola_noticia">
               <span class="thumb-link">
               <img id="imagen_`+noticia['id']+`" class="una_sola_noticia" src="https://enrique-amaya.000webhostapp.com/`+noticia["imagen"]+`" alt="`+noticia["titulo"]+`">             
               </span>
               </div>

               <div class="entry-text">
               <div class="entry-header">

               <div class="entry-meta">
               <span class="cat-links"> 
               <span>`+noticia["fecha_hora"]+`<span> 
               </span>        
               </div>

               <h1 id="titulo_`+noticia['id']+`" class="entry-title una_sola_noticia"><span>`+noticia["titulo"]+`</span></h1>

               </div>
               <div class="entry-excerpt">
               `+noticia["descripcion"]+`
               </div>
               </div>

               </article> <!-- end article -->
	`;
	return vista_noticia;
}

function vistaPantallaIndex(noticias) {
	var vista_index = ``;

			for (var i = 0; i < noticias.length; i++) {
				var noticia = noticias[i];
				vista_index += vistaNoticias(noticia);

			}
			
			return vista_index;
}

function vistaPantallaNoticiaIndividual(noticia) {
	var html = `
		<a href="index.html">Atrás</a>
		<article class="format-standard">  

           <div class="content-media">
           <div class="post-thumb">
           <img src="https://enrique-amaya.000webhostapp.com/`+noticia['imagen']+`"> 
           </div>  
           </div>

           <div class="primary-content">

           <h1 class="page-title">`+noticia['titulo']+`</h1>	

           <ul class="entry-meta">
           <li class="date">`+noticia['fecha_hora']+`</li>										
           </ul>						

           <p class="lead">`+noticia['descripcion']+`</p> 
           
        </article>
		`;

		return html;
}

function clickEnNoticia() {
	var id = this.id;
	var a = id.split('_');
	console.log(this);
		console.log('click');
		$.ajax({
			url: "https://enrique-amaya.000webhostapp.com/noticia.php?id="+ a[1]+"",
			dataType: 'json'
		})
		.done(function(data){
			console.log(data);
			console.log(vistaPantallaNoticiaIndividual(data));

			$('#envoltura').html(vistaPantallaNoticiaIndividual(data));
		})
		.fail(function(jqXHR, textStatus, errorThrown){
			console.log(jqXHR.statusText);
		})
		.always(function(dj, textStatus, je){
			
		});
}

function inicio() {
	$.ajax({
			url: "https://enrique-amaya.000webhostapp.com/noticias.php",
			dataType: 'json'
		})
		.done(function(data){
			var vista_index = vistaPantallaIndex(data);
			
			$('#envoltura').html(vista_index);
			$('.una_sola_noticia').click(clickEnNoticia);
		})
		.fail(function(jqXHR, textStatus, errorThrown){
			console.log(jqXHR.statusText);
		})
		.always(function(dj, textStatus, je){
			
		});
}
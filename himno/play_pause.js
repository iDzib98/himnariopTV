function launchFullScreen(element) {
	if(element.requestFullScreen) {
	  element.requestFullScreen();
	} else if(element.mozRequestFullScreen) {
	  element.mozRequestFullScreen();
	} else if(element.webkitRequestFullScreen) {
	  element.webkitRequestFullScreen();
	}
  }

verso = document.getElementsByClassName("verso");
h2 = document.getElementsByTagName("h2");

function toReveal(){
	var ver = new Array;
	var num_ver = new Array;
	intro = document.getElementsByClassName("intro")[0].innerHTML;
	ref = document.getElementsByClassName("ref")[0].innerHTML;
	autor = document.getElementsByTagName("p")[verso.length+2].innerHTML;
	for (i=0;i < verso.length; i++){
		ver[i] = verso[i].innerHTML;
		num_ver[i] = h2[i].innerHTML;
	}
	document.write( //abrimos html y ponemos el head
		`\n<!doctype html>`,
		`\n	<html><head>`,
		`\n		<meta charset="utf-8">`,
		`\n		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">`,
		`\n		<title>${titulo}</title>`,
		`\n		<link rel="stylesheet" href="dist/reset.css">`,
		`\n		<link rel="stylesheet" href="dist/reveal.css">`,
		`\n		<link rel="stylesheet" href="dist/theme/black.css" id="theme">`,
		`\n		<link rel="stylesheet" href="plugin/highlight/monokai.css" id="highlight-theme">`,
		`\n	</head>`,
		`\n	<body>`,
		`\n		<div class="reveal">`,
		`\n			<div class="slides">`
	)
	//Ahora aqui cada section es una slide
	document.write(
		`<section style="text-align: left;">`,
		`<h1>Himno ${num_himno}. ${titulo}</h1>`,
		`<p>${intro}</p>`,
		`<p style="text-align: right;">${ref}</p>`,
		`</section>`
	)

	for (i=0;i < ver.length; i++){
		document.write(
			`<section>`,
			`	<h1 style="font-size:48px;"><a href="#">${num_ver[i]}</a></h1>`,
			`	<p>${ver[i]}</p>`,
			`</section>`
		)
	}

	document.write(
		`<section style="text-align: left;">`,
		`<h1 style="font-size:48px;"><a href="#">Autor</a></h1>`,
		`<p>${autor}</p>`,
		`</section>`
	)

	// Y este es el código de cierre
	document.write(
		`\n			</div>`,
		`\n		</div>`,
		`\n		<script src="dist/reveal.js"></script>`,
		`\n		<script src="plugin/notes/notes.js"></script>`,
		`\n		<script src="plugin/markdown/markdown.js"></script>`,
		`\n		<script src="plugin/highlight/highlight.js"></script>`,
		`\n		<script>`,
		`\n			Reveal.initialize({`,
		`\n				hash: true,`,
		`\n				plugins: [ RevealMarkdown, RevealHighlight, RevealNotes ]`,
		`\n			});`,
		`\n		</script>`,
		`\n	</body>`,
		`\n</html>`
	)
}

window.onload=toReveal;
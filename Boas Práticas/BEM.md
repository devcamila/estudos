###***BEM (BLOCK__ELEMENT--MODIFIER)***

***CONCEITOS***<br>
Ajuda na nomenclatura dos componentes

Bloco: header, body, main
Elementos: input, li, img
Modificadores: color, highlight, active

- Um elemento sempre será uma parte, um complemento da estrutura do bloco. * Um elemento não pode estar dentro de outro.

- Os modificadores são estados que os nossos blocos ou elementos poderão ter: um botão com diferentes aparências, uma situação de destaque.
  Geralmente, os modificadores fazem com que algumas propriedades dos blocos/elementos sejam complementadas (background-color, font-weight, borders, opacity, ou até mesmo o display e o position.)

***NOMENCLATURA***

- Para blocos: não se usa nada específico <br>
  **.list**

- Para classes dos elementos:<br>
  **.list__item**<br>
  **.list__title**

- Para classes filhas de elementos (div -> h2)<br>
**bloco:** .list<br>
**elementos:** .list__item publication<br>
**child:** .publication__title 

- Para classes modificadoras:<br>
  **.list__item--highlight<br>
  .button .button--blue**<br>


**ATENÇÂO**<br>
Evite classes netas<br>
Preferencialmente, use apenas 1x __ na classe<br>
Evite diversas classes (exceção. modificadores)

***EXEMPLO***

 <button class="button">
	Normal button
</button>
<button class="button button--state-success">
	Success button
</button>
<button class="button button--state-danger">
	Danger button
</button>

<style>


.button {
	display: inline-block;
	border-radius: 3px;
	padding: 7px 12px;
	border: 1px solid #D5D5D5;
	background-image: linear-gradient(#EEE, #DDD);
	font: 700 13px/18px Helvetica, arial;
}
.button--state-success {
	color: #FFF;
	background: #569E3D linear-gradient(#79D858, #569E3D) repeat-x;
	border-color: #4A993E;
}
.button--state-danger {
	color: #900;
} </style>
<br />
<br />

***HTML***<br>
< button class="button">Normal </button><br />
< button class="button button--state-success"> Success </button><br />
< button class="button button--state-danger"> Danger </button><br />

***CSS***<br>
.button {
	display: inline-block;
	border-radius: 3px;
	padding: 7px 12px;
	border: 1px solid #D5D5D5;
	background-image: linear-gradient(#EEE, #DDD);
	font: 700 13px/18px Helvetica, arial;
}
.button--state-success {
	color: #FFF;
	background: #569E3D linear-gradient(#79D858, #569E3D) repeat-x;
	border-color: #4A993E;
}
.button--state-danger {
	color: #900;
}
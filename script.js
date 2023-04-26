// selezionare gli elementi del DOM
const eleHelp = document.querySelector('.help');
const eleGrid = document.querySelector('.grid');
const btnPlay = document.querySelector('#play');
const selectLevel = document.querySelector('#level');
let finish = false;
let numCas = []
const numElem = 17;
const max = 100;
const min = 1;
let points = 0;
let score = document.querySelector('.score');
btnPlay.addEventListener('click', function() {
	// nascondere il messaggio
	eleHelp.classList.add('hidden');

	// mostrare la griglia
	eleGrid.classList.remove('hidden');

	// leggere il livello per determinare il numero di celle
	const nCells = parseInt(selectLevel.value);

	// aggiustare lo style della griglia
	eleGrid.style.setProperty('--sideSquare', Math.sqrt(nCells));

	// generare la griglia
	createGrid(nCells, eleGrid);

    // aggiungiamo 16 numeri casuali
    for (let i=1; i<numElem;i++){
        numCas.push(Math.floor(Math.random()*max))
    }
    console.log(numCas)
});





/* FUNCTION DEFINITIONS */
function createGrid(nCells, eleContainer) {
	console.log(nCells);

	const side = Math.sqrt(nCells);

	// pulisco il container dall'eventuale griglia precedente
	eleContainer.innerHTML = '';

	for (let i = 1; i <= nCells; i++) {
		// creaiamo la cella e la formattiamo
		const eleCell = document.createElement('div');
		eleCell.innerHTML = i;
		eleCell.classList.add('cell');
		eleContainer.append(eleCell);
		// aggiungere l'event listener alla cella appena creata
		eleCell.addEventListener('click', function () {
            if (finish == false){
                this.classList.toggle('clicked');
        
                if (numCas.includes(i + 1)) {
                    this.classList.toggle('clicked-bomb');
                    finish = true;
                    score.innerHTML = `Hai perso! Il tuo punteggio è: ${points}`
                    console.log(finish);
                } else {
                    points++;
                    score.innerHTML = `Il tuo punteggio è: ${points}`
                }
            }
        }) 
	}
}
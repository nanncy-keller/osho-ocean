// sea-life.js

const fishContainer = document.getElementById('fishContainer');


// ── PEIXE COMUM ──────────────────────────────────────────────
function createFishSVG(color, size) {
	const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	svg.setAttribute("width", size);
	svg.setAttribute("height", size * 0.6);
	svg.setAttribute("viewBox", "0 0 100 60");
	
	// Cores variadas de peixes
	const colors = [
		{ body: '#FF6B6B', belly: '#FF8A80', fin: '#FF5252', eye: '#2C3E50' },
		{ body: '#4ECDC4', belly: '#81D4D4', fin: '#45B7AF', eye: '#2C3E50' },
		{ body: '#FFD93D', belly: '#FFE082', fin: '#FFC107', eye: '#2C3E50' },
		{ body: '#6BCB77', belly: '#A5D6A7', fin: '#4CAF50', eye: '#2C3E50' },
		{ body: '#9B59B6', belly: '#BB8FCE', fin: '#8E44AD', eye: '#2C3E50' },
		{ body: '#3498DB', belly: '#85C1E9', fin: '#2980B9', eye: '#2C3E50' }
	];
	
	const fishColor = colors[Math.floor(Math.random() * colors.length)];
	
	// Grupo da cauda (para animação)
	const tailGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
	tailGroup.setAttribute("class", "fish-tail");
	
	// Cauda em formato de V
	const tail = document.createElementNS("http://www.w3.org/2000/svg", "path");
	tail.setAttribute("d", "M 5,30 L 15,20 L 12,30 L 15,40 Z");
	tail.setAttribute("fill", fishColor.fin);
	tail.setAttribute("stroke", "rgba(0, 0, 0, 0.2)");
	tail.setAttribute("stroke-width", "0.5");
	
	tailGroup.appendChild(tail);
	
	// Nadadeira anal (embaixo)
	const analFin = document.createElementNS("http://www.w3.org/2000/svg", "path");
	analFin.setAttribute("d", "M 35,45 Q 38,52 42,48 Q 40,46 35,45 Z");
	analFin.setAttribute("fill", fishColor.fin);
	analFin.setAttribute("opacity", "0.8");
	
	// Nadadeira peitoral
	const pectoralFin = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
	pectoralFin.setAttribute("cx", "58");
	pectoralFin.setAttribute("cy", "35");
	pectoralFin.setAttribute("rx", "8");
	pectoralFin.setAttribute("ry", "12");
	pectoralFin.setAttribute("fill", fishColor.fin);
	pectoralFin.setAttribute("opacity", "0.7");
	pectoralFin.setAttribute("transform", "rotate(30 58 35)");
	
	// Corpo principal (formato de peixe lateral)
	const body = document.createElementNS("http://www.w3.org/2000/svg", "path");
	body.setAttribute("d", "M 15,30 Q 20,20 40,18 Q 60,17 75,22 Q 85,25 87,30 Q 85,35 75,38 Q 60,43 40,42 Q 20,40 15,30 Z");
	body.setAttribute("fill", fishColor.body);
	body.setAttribute("stroke", "rgba(0, 0, 0, 0.2)");
	body.setAttribute("stroke-width", "1");
	
	// Barriga mais clara
	const belly = document.createElementNS("http://www.w3.org/2000/svg", "path");
	belly.setAttribute("d", "M 20,30 Q 25,35 45,37 Q 65,38 80,33 Q 70,35 50,36 Q 30,35 20,30 Z");
	belly.setAttribute("fill", fishColor.belly);
	belly.setAttribute("opacity", "0.7");
	
	// Nadadeira dorsal (em cima)
	const dorsalFin = document.createElementNS("http://www.w3.org/2000/svg", "path");
	dorsalFin.setAttribute("d", "M 45,18 Q 47,8 50,10 Q 48,15 45,18 Z");
	dorsalFin.setAttribute("fill", fishColor.fin);
	dorsalFin.setAttribute("stroke", "rgba(0, 0, 0, 0.2)");
	dorsalFin.setAttribute("stroke-width", "0.5");
	
	// Olho
	const eyeWhite = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	eyeWhite.setAttribute("cx", "78");
	eyeWhite.setAttribute("cy", "27");
	eyeWhite.setAttribute("r", "4");
	eyeWhite.setAttribute("fill", "white");
	
	const eyePupil = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	eyePupil.setAttribute("cx", "79");
	eyePupil.setAttribute("cy", "27");
	eyePupil.setAttribute("r", "2");
	eyePupil.setAttribute("fill", fishColor.eye);
	
	// Boca
	const mouth = document.createElementNS("http://www.w3.org/2000/svg", "path");
	mouth.setAttribute("d", "M 87,30 Q 90,30 90,31");
	mouth.setAttribute("stroke", "rgba(0, 0, 0, 0.3)");
	mouth.setAttribute("stroke-width", "1");
	mouth.setAttribute("fill", "none");
	
	// Adicionar elementos ao SVG na ordem correta (fundo para frente)
	svg.appendChild(tailGroup);
	svg.appendChild(pectoralFin);
	svg.appendChild(analFin);
	svg.appendChild(body);
	svg.appendChild(belly);
	svg.appendChild(dorsalFin);
	svg.appendChild(eyeWhite);
	svg.appendChild(eyePupil);
	svg.appendChild(mouth);
	
	return svg;
}


function createFish() {
	const fish = document.createElement('div');
	fish.className = 'fish';
	
	// Tamanho variado
	const size = 50 + Math.random() * 50; // 50-100px
	
	// Criar SVG do peixe
	const fishSVG = createFishSVG('#4ECDC4', size);
	fish.appendChild(fishSVG);
	
	// Posição vertical aleatória
	fish.style.top = 20 + Math.random() * 70 + '%'; // Evitar muito perto do topo/fundo
	
	// Direção aleatória (esquerda para direita ou direita para esquerda)
	const isReverse = Math.random() > 0.5;
	if (isReverse) {
		fish.classList.add('reverse');
	}
	
	// Duração aleatória da animação (velocidade do peixe)
	const duration = 15 + Math.random() * 25; // 15-40 segundos
	fish.style.animationDuration = duration + 's';
	
	// Delay inicial aleatório
	fish.style.animationDelay = Math.random() * -20 + 's';
	
	fishContainer.appendChild(fish);
}



// ── ENGUIA ELÉTRICA ──────────────────────────────────────────
function createElectricEelSVG(size) {
	const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	svg.setAttribute("width", size);
	svg.setAttribute("height", size * 0.35);
	svg.setAttribute("viewBox", "0 0 180 63");
	
	// Corpo ondulado da enguia (alongado e serpentiforme)
	const bodyPath = "M 10,31 Q 20,28 35,30 Q 50,32 65,30 Q 80,28 95,30 Q 110,32 125,30 Q 140,28 155,30 Q 165,31 172,31";
	
	// Sombra/profundidade no corpo inferior
	const bodyShadow = document.createElementNS("http://www.w3.org/2000/svg", "path");
	bodyShadow.setAttribute("d", "M 10,31 Q 20,35 35,37 Q 50,39 65,37 Q 80,35 95,37 Q 110,39 125,37 Q 140,35 155,37 Q 165,38 172,38 Q 165,42 155,43 Q 140,44 125,42 Q 110,40 95,42 Q 80,44 65,42 Q 50,40 35,42 Q 20,44 10,41 Z");
	bodyShadow.setAttribute("fill", "#2A3A3A");
	bodyShadow.setAttribute("opacity", "0.6");
	
	// Corpo principal (parte superior)
	const body = document.createElementNS("http://www.w3.org/2000/svg", "path");
	body.setAttribute("d", "M 10,31 Q 20,23 35,21 Q 50,19 65,21 Q 80,23 95,21 Q 110,19 125,21 Q 140,23 155,21 Q 165,22 172,23 Q 165,27 155,28 Q 140,29 125,27 Q 110,25 95,27 Q 80,29 65,27 Q 50,25 35,27 Q 20,29 10,31 Z");
	body.setAttribute("fill", "#3D5357");
	body.setAttribute("stroke", "#2A3A3A");
	body.setAttribute("stroke-width", "1");
	
	// Faixa laranja característica da enguia elétrica (ao longo do corpo)
	const orangeStripe = document.createElementNS("http://www.w3.org/2000/svg", "path");
	orangeStripe.setAttribute("d", "M 15,37 Q 30,38 45,37 Q 60,36 75,37 Q 90,38 105,37 Q 120,36 135,37 Q 150,38 165,37");
	orangeStripe.setAttribute("stroke", "#E67E22");
	orangeStripe.setAttribute("stroke-width", "3.5");
	orangeStripe.setAttribute("fill", "none");
	orangeStripe.setAttribute("stroke-linecap", "round");
	
	// Faixa mais clara acima (detalhe anatômico)
	const lightStripe = document.createElementNS("http://www.w3.org/2000/svg", "path");
	lightStripe.setAttribute("d", "M 15,34 Q 30,35 45,34 Q 60,33 75,34 Q 90,35 105,34 Q 120,33 135,34 Q 150,35 165,34");
	lightStripe.setAttribute("stroke", "#5A7177");
	lightStripe.setAttribute("stroke-width", "2");
	lightStripe.setAttribute("fill", "none");
	lightStripe.setAttribute("stroke-linecap", "round");
	lightStripe.setAttribute("opacity", "0.6");
	
	// Textura da pele (pequenas manchas e pontos)
	for (let i = 0; i < 15; i++) {
		const spot = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
		const xPos = 20 + i * 10;
		const yPos = 24 + Math.sin(i * 0.8) * 3;
		spot.setAttribute("cx", xPos);
		spot.setAttribute("cy", yPos);
		spot.setAttribute("rx", 1 + Math.random() * 0.5);
		spot.setAttribute("ry", 0.8 + Math.random() * 0.4);
		spot.setAttribute("fill", "rgba(0, 0, 0, 0.2)");
		svg.appendChild(spot);
	}
	
	// Nadadeira dorsal contínua (característica das enguias)
	const dorsalFin = document.createElementNS("http://www.w3.org/2000/svg", "path");
	dorsalFin.setAttribute("d", "M 50,19 Q 55,16 60,18 Q 65,20 70,18 Q 75,16 80,18 Q 85,20 90,18 Q 95,16 100,18 Q 105,20 110,18 Q 115,16 120,18 Q 125,20 130,18 Q 135,16 140,18 Q 145,20 150,18 Q 155,20 160,19 Q 155,21 150,21 Q 145,21 140,21 Q 135,21 130,21 Q 125,21 120,21 Q 115,21 110,21 Q 105,21 100,21 Q 95,21 90,21 Q 85,21 80,21 Q 75,21 70,21 Q 65,21 60,21 Q 55,21 50,21 Z");
	dorsalFin.setAttribute("fill", "#495A5E");
	dorsalFin.setAttribute("opacity", "0.7");
	dorsalFin.setAttribute("stroke", "#2A3A3A");
	dorsalFin.setAttribute("stroke-width", "0.5");
	
	// Nadadeira anal (embaixo, também contínua)
	const analFin = document.createElementNS("http://www.w3.org/2000/svg", "path");
	analFin.setAttribute("d", "M 60,42 Q 65,44 70,42 Q 75,40 80,42 Q 85,44 90,42 Q 95,40 100,42 Q 105,44 110,42 Q 115,40 120,42 Q 125,44 130,42 Q 135,40 140,42 Q 145,44 150,43 Q 145,42 140,41 Q 135,41 130,41 Q 125,41 120,41 Q 115,41 110,41 Q 105,41 100,41 Q 95,41 90,41 Q 85,41 80,41 Q 75,41 70,41 Q 65,41 60,40 Z");
	analFin.setAttribute("fill", "#495A5E");
	analFin.setAttribute("opacity", "0.7");
	analFin.setAttribute("stroke", "#2A3A3A");
	analFin.setAttribute("stroke-width", "0.5");
	
	// Cabeça mais robusta
	const head = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
	head.setAttribute("cx", "170");
	head.setAttribute("cy", "31");
	head.setAttribute("rx", "10");
	head.setAttribute("ry", "8");
	head.setAttribute("fill", "#3D5357");
	head.setAttribute("stroke", "#2A3A3A");
	head.setAttribute("stroke-width", "1");
	
	// Detalhes da cabeça
	const headTop = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
	headTop.setAttribute("cx", "170");
	headTop.setAttribute("cy", "28");
	headTop.setAttribute("rx", "8");
	headTop.setAttribute("ry", "5");
	headTop.setAttribute("fill", "#495A5E");
	headTop.setAttribute("opacity", "0.6");
	
	// Olho pequeno (característico das enguias)
	const eyeBase = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	eyeBase.setAttribute("cx", "174");
	eyeBase.setAttribute("cy", "29");
	eyeBase.setAttribute("r", "2");
	eyeBase.setAttribute("fill", "#1A2A2A");
	eyeBase.setAttribute("stroke", "rgba(0, 0, 0, 0.3)");
	eyeBase.setAttribute("stroke-width", "0.5");
	
	const eyeHighlight = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	eyeHighlight.setAttribute("cx", "174.5");
	eyeHighlight.setAttribute("cy", "28.5");
	eyeHighlight.setAttribute("r", "0.7");
	eyeHighlight.setAttribute("fill", "white");
	eyeHighlight.setAttribute("opacity", "0.6");
	
	// Boca
	const mouth = document.createElementNS("http://www.w3.org/2000/svg", "path");
	mouth.setAttribute("d", "M 178,31 Q 179,32 179.5,31");
	mouth.setAttribute("stroke", "rgba(0, 0, 0, 0.4)");
	mouth.setAttribute("stroke-width", "1");
	mouth.setAttribute("fill", "none");
	mouth.setAttribute("stroke-linecap", "round");
	
	// Narina
	const nostril = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	nostril.setAttribute("cx", "176");
	nostril.setAttribute("cy", "30");
	nostril.setAttribute("r", "0.5");
	nostril.setAttribute("fill", "rgba(0, 0, 0, 0.4)");
	
	// Cauda afilada (ponta fina característica)
	const tail = document.createElementNS("http://www.w3.org/2000/svg", "path");
	tail.setAttribute("d", "M 10,31 Q 7,30 5,31 Q 7,32 10,31 Z");
	tail.setAttribute("fill", "#3D5357");
	tail.setAttribute("stroke", "#2A3A3A");
	tail.setAttribute("stroke-width", "0.5");
	
	// Nadadeira caudal pequena e pontuda
	const caudalFin = document.createElementNS("http://www.w3.org/2000/svg", "path");
	caudalFin.setAttribute("d", "M 10,28 Q 6,27 4,28 L 5,31 L 4,34 Q 6,35 10,34 Q 8,31 10,28 Z");
	caudalFin.setAttribute("fill", "#495A5E");
	caudalFin.setAttribute("opacity", "0.7");
	caudalFin.setAttribute("stroke", "#2A3A3A");
	caudalFin.setAttribute("stroke-width", "0.5");
	
	// Efeito elétrico (raios ao redor - ativados aleatoriamente)
	const electricGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
	electricGroup.setAttribute("class", "electric-effect");
	electricGroup.setAttribute("opacity", "0.7");
	
	// Vários raios elétricos
	const bolts = [
		{d: "M 80,20 L 82,16 L 81,20 L 83,23", color: "#3498DB"},
		{d: "M 100,18 L 101,14 L 100,18 L 102,21", color: "#5DADE2"},
		{d: "M 120,19 L 122,15 L 121,19 L 123,22", color: "#85C1E9"},
		{d: "M 90,44 L 91,48 L 90,44 L 92,41", color: "#3498DB"},
		{d: "M 110,43 L 111,47 L 110,43 L 112,40", color: "#5DADE2"},
		{d: "M 130,44 L 132,48 L 131,44 L 133,41", color: "#85C1E9"}
	];
	
	bolts.forEach(bolt => {
		const lightning = document.createElementNS("http://www.w3.org/2000/svg", "path");
		lightning.setAttribute("d", bolt.d);
		lightning.setAttribute("stroke", bolt.color);
		lightning.setAttribute("stroke-width", "1.5");
		lightning.setAttribute("fill", "none");
		lightning.setAttribute("stroke-linecap", "round");
		lightning.setAttribute("stroke-linejoin", "round");
		electricGroup.appendChild(lightning);
	});
	
	// Brilho elétrico ao redor do corpo
	const glow = document.createElementNS("http://www.w3.org/2000/svg", "path");
	glow.setAttribute("d", bodyPath);
	glow.setAttribute("stroke", "#5DADE2");
	glow.setAttribute("stroke-width", "2");
	glow.setAttribute("fill", "none");
	glow.setAttribute("opacity", "0.3");
	electricGroup.appendChild(glow);
	
	// Adicionar elementos na ordem correta
	svg.appendChild(caudalFin);
	svg.appendChild(tail);
	svg.appendChild(bodyShadow);
	svg.appendChild(body);
	svg.appendChild(lightStripe);
	svg.appendChild(orangeStripe);
	svg.appendChild(analFin);
	svg.appendChild(dorsalFin);
	svg.appendChild(head);
	svg.appendChild(headTop);
	svg.appendChild(eyeBase);
	svg.appendChild(eyeHighlight);
	svg.appendChild(nostril);
	svg.appendChild(mouth);
	svg.appendChild(electricGroup);
	
	return svg;
}

function createElectricEel() {
	const eel = document.createElement('div');
	eel.className = 'fish electric-eel';
	
	// Tamanho grande (enguias são longas!)
	const size = 120 + Math.random() * 50; // 120-170px
	
	// Criar SVG da enguia
	const eelSVG = createElectricEelSVG(size);
	eel.appendChild(eelSVG);
	
	// Posição no fundo do oceano (enguias vivem no fundo)
	eel.style.top = 60 + Math.random() * 30 + '%';
	
	// Direção aleatória
	const isReverse = Math.random() > 0.5;
	if (isReverse) {
		eel.classList.add('reverse');
	}
	
	// Enguias nadam de forma sinuosa e moderadamente rápida
	const duration = 25 + Math.random() * 20; // 25-45 segundos
	eel.style.animationDuration = duration + 's';
	
	// Delay inicial
	eel.style.animationDelay = Math.random() * -25 + 's';
	
	fishContainer.appendChild(eel);
}


// ── TARTARUGA MARINHA ────────────────────────────────────────
function createSeaTurtleSVG(size) {
	const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	svg.setAttribute("width", size);
	svg.setAttribute("height", size * 0.6);
	svg.setAttribute("viewBox", "0 0 140 84");
	
	// Nadadeira traseira (atrás do corpo)
	const backFlipper = document.createElementNS("http://www.w3.org/2000/svg", "path");
	backFlipper.setAttribute("d", "M 25,45 Q 20,40 18,45 Q 16,52 18,58 Q 20,63 25,60 Q 28,57 28,52 Z");
	backFlipper.setAttribute("fill", "#4A7C59");
	backFlipper.setAttribute("stroke", "#3A5C45");
	backFlipper.setAttribute("stroke-width", "1.5");
	backFlipper.setAttribute("opacity", "0.85");
	
	// Detalhes na nadadeira traseira
	const backFlipperDetail1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
	backFlipperDetail1.setAttribute("d", "M 22,48 Q 19,50 20,54");
	backFlipperDetail1.setAttribute("stroke", "#3A5C45");
	backFlipperDetail1.setAttribute("stroke-width", "1");
	backFlipperDetail1.setAttribute("fill", "none");
	backFlipperDetail1.setAttribute("opacity", "0.5");
	
	// Cauda pequena
	const tail = document.createElementNS("http://www.w3.org/2000/svg", "path");
	tail.setAttribute("d", "M 20,52 Q 12,50 8,52 Q 12,54 20,52 Z");
	tail.setAttribute("fill", "#5A8F6B");
	tail.setAttribute("stroke", "#3A5C45");
	tail.setAttribute("stroke-width", "1");
	
	// Casco principal (carapaça) - vista lateral
	const shell = document.createElementNS("http://www.w3.org/2000/svg", "path");
	shell.setAttribute("d", "M 28,38 Q 35,28 55,25 Q 75,24 92,28 Q 105,32 108,42 Q 110,48 108,56 Q 105,66 92,70 Q 75,74 55,73 Q 35,72 28,62 Z");
	shell.setAttribute("fill", "#5D8C6F");
	shell.setAttribute("stroke", "#3A5C45");
	shell.setAttribute("stroke-width", "2");
	
	// Padrão do casco - placas realistas
	// Placa central grande
	const centerPlate = document.createElementNS("http://www.w3.org/2000/svg", "path");
	centerPlate.setAttribute("d", "M 50,40 Q 60,38 70,40 Q 75,45 75,52 Q 73,60 65,62 Q 55,63 48,60 Q 45,55 45,48 Z");
	centerPlate.setAttribute("fill", "#6B9C7D");
	centerPlate.setAttribute("stroke", "#4A6B5A");
	centerPlate.setAttribute("stroke-width", "1.5");
	
	// Placas laterais
	const plates = [
		// Placas superiores
		"M 38,42 Q 42,38 48,38 Q 52,40 52,45 Q 50,50 45,52 Q 40,52 38,48 Z",
		"M 70,38 Q 78,37 85,40 Q 88,44 87,50 Q 84,54 78,55 Q 72,54 70,48 Z",
		// Placas inferiores
		"M 38,52 Q 40,56 45,58 Q 50,58 52,54 Q 52,50 48,48 Q 42,48 38,52 Z",
		"M 70,52 Q 72,56 78,57 Q 84,57 87,53 Q 87,48 82,46 Q 76,46 70,50 Z",
		// Placas da borda
		"M 90,36 Q 96,34 100,38 Q 102,43 100,48 Q 96,50 92,48 Q 88,44 90,38 Z",
		"M 92,52 Q 96,54 100,58 Q 100,64 96,66 Q 90,66 88,62 Q 86,56 90,52 Z"
	];
	
	plates.forEach(d => {
		const plate = document.createElementNS("http://www.w3.org/2000/svg", "path");
		plate.setAttribute("d", d);
		plate.setAttribute("fill", "#668C75");
		plate.setAttribute("stroke", "#4A6B5A");
		plate.setAttribute("stroke-width", "1.5");
		svg.appendChild(plate);
	});
	
	svg.appendChild(centerPlate);
	
	// Textura e sombreamento no casco
	const shellShading = document.createElementNS("http://www.w3.org/2000/svg", "path");
	shellShading.setAttribute("d", "M 35,55 Q 45,65 60,68 Q 80,70 95,65");
	shellShading.setAttribute("fill", "rgba(0, 0, 0, 0.15)");
	shellShading.setAttribute("stroke", "none");
	
	const shellHighlight = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
	shellHighlight.setAttribute("cx", "75");
	shellHighlight.setAttribute("cy", "38");
	shellHighlight.setAttribute("rx", "18");
	shellHighlight.setAttribute("ry", "12");
	shellHighlight.setAttribute("fill", "rgba(255, 255, 255, 0.15)");
	
	// Plastrão (parte de baixo visível)
	const plastron = document.createElementNS("http://www.w3.org/2000/svg", "path");
	plastron.setAttribute("d", "M 32,60 Q 40,68 55,70 Q 70,70 85,66 Q 90,64 92,62");
	plastron.setAttribute("fill", "#A8C4A8");
	plastron.setAttribute("stroke", "#4A6B5A");
	plastron.setAttribute("stroke-width", "1.5");
	
	// Linhas no plastrão
	for (let i = 0; i < 3; i++) {
		const line = document.createElementNS("http://www.w3.org/2000/svg", "path");
		const xPos = 45 + i * 15;
		line.setAttribute("d", `M ${xPos},66 Q ${xPos + 3},68 ${xPos + 6},66`);
		line.setAttribute("stroke", "rgba(74, 107, 90, 0.3)");
		line.setAttribute("stroke-width", "1");
		line.setAttribute("fill", "none");
		svg.appendChild(line);
	}
	
	// Nadadeira dianteira (na frente)
	const frontFlipper = document.createElementNS("http://www.w3.org/2000/svg", "path");
	frontFlipper.setAttribute("d", "M 88,48 Q 98,46 108,50 Q 115,54 116,60 Q 115,66 108,68 Q 98,70 90,65 Q 85,60 88,54 Z");
	frontFlipper.setAttribute("fill", "#5A8F6B");
	frontFlipper.setAttribute("stroke", "#3A5C45");
	frontFlipper.setAttribute("stroke-width", "1.5");
	
	// Detalhes e escamas na nadadeira dianteira
	const flipperScales = [
		"M 95,52 Q 100,50 105,52",
		"M 96,56 Q 102,55 107,57",
		"M 98,60 Q 104,60 109,62"
	];
	
	flipperScales.forEach(d => {
		const scale = document.createElementNS("http://www.w3.org/2000/svg", "path");
		scale.setAttribute("d", d);
		scale.setAttribute("stroke", "#3A5C45");
		scale.setAttribute("stroke-width", "1");
		scale.setAttribute("fill", "none");
		scale.setAttribute("opacity", "0.4");
		svg.appendChild(scale);
	});
	
	// Garras na nadadeira
	for (let i = 0; i < 3; i++) {
		const claw = document.createElementNS("http://www.w3.org/2000/svg", "path");
		const yPos = 62 + i * 3;
		claw.setAttribute("d", `M ${110 + i * 2},${yPos} L ${113 + i * 2},${yPos + 2}`);
		claw.setAttribute("stroke", "#2A3C35");
		claw.setAttribute("stroke-width", "1.5");
		claw.setAttribute("stroke-linecap", "round");
		svg.appendChild(claw);
	}
	
	// Pescoço/conexão
	const neck = document.createElementNS("http://www.w3.org/2000/svg", "path");
	neck.setAttribute("d", "M 105,40 Q 110,38 115,38");
	neck.setAttribute("stroke", "#5A8F6B");
	neck.setAttribute("stroke-width", "10");
	neck.setAttribute("fill", "none");
	neck.setAttribute("stroke-linecap", "round");
	
	// Cabeça da tartaruga - vista lateral mais realista
	const head = document.createElementNS("http://www.w3.org/2000/svg", "path");
	head.setAttribute("d", "M 115,38 Q 120,32 128,30 Q 135,30 138,34 Q 140,38 138,42 Q 135,46 128,46 Q 120,44 115,38 Z");
	head.setAttribute("fill", "#5A8F6B");
	head.setAttribute("stroke", "#3A5C45");
	head.setAttribute("stroke-width", "1.5");
	
	// Bico/focinho característico
	const beak = document.createElementNS("http://www.w3.org/2000/svg", "path");
	beak.setAttribute("d", "M 135,36 Q 138,35 140,37 L 138,39 Q 136,39 135,38 Z");
	beak.setAttribute("fill", "#4A6B5A");
	beak.setAttribute("stroke", "#3A5C45");
	beak.setAttribute("stroke-width", "1");
	
	// Textura da pele na cabeça
	const headTexture1 = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
	headTexture1.setAttribute("cx", "125");
	headTexture1.setAttribute("cy", "35");
	headTexture1.setAttribute("rx", "2.5");
	headTexture1.setAttribute("ry", "2");
	headTexture1.setAttribute("fill", "#4A7C59");
	headTexture1.setAttribute("opacity", "0.6");
	
	const headTexture2 = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
	headTexture2.setAttribute("cx", "130");
	headTexture2.setAttribute("cy", "41");
	headTexture2.setAttribute("rx", "2");
	headTexture2.setAttribute("ry", "1.5");
	headTexture2.setAttribute("fill", "#4A7C59");
	headTexture2.setAttribute("opacity", "0.6");
	
	const headTexture3 = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
	headTexture3.setAttribute("cx", "120");
	headTexture3.setAttribute("cy", "40");
	headTexture3.setAttribute("rx", "2");
	headTexture3.setAttribute("ry", "1.5");
	headTexture3.setAttribute("fill", "#4A7C59");
	headTexture3.setAttribute("opacity", "0.6");
	
	// Olho realista
	const eyeBase = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
	eyeBase.setAttribute("cx", "132");
	eyeBase.setAttribute("cy", "35");
	eyeBase.setAttribute("rx", "3.5");
	eyeBase.setAttribute("ry", "4");
	eyeBase.setAttribute("fill", "#2C3E50");
	eyeBase.setAttribute("stroke", "#1A2A30");
	eyeBase.setAttribute("stroke-width", "0.5");
	
	const eyeHighlight = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
	eyeHighlight.setAttribute("cx", "131");
	eyeHighlight.setAttribute("cy", "33.5");
	eyeHighlight.setAttribute("rx", "1.5");
	eyeHighlight.setAttribute("ry", "2");
	eyeHighlight.setAttribute("fill", "white");
	eyeHighlight.setAttribute("opacity", "0.7");
	
	// Narina
	const nostril = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
	nostril.setAttribute("cx", "137");
	nostril.setAttribute("cy", "36");
	nostril.setAttribute("rx", "1");
	nostril.setAttribute("ry", "0.8");
	nostril.setAttribute("fill", "rgba(0, 0, 0, 0.4)");
	
	// Linha da boca
	const mouth = document.createElementNS("http://www.w3.org/2000/svg", "path");
	mouth.setAttribute("d", "M 136,38 Q 137,39 138,38.5");
	mouth.setAttribute("stroke", "rgba(0, 0, 0, 0.3)");
	mouth.setAttribute("stroke-width", "1");
	mouth.setAttribute("fill", "none");
	mouth.setAttribute("stroke-linecap", "round");
	
	// Adicionar elementos ao SVG na ordem correta (de trás para frente)
	svg.appendChild(tail);
	svg.appendChild(backFlipper);
	svg.appendChild(backFlipperDetail1);
	svg.appendChild(shell);
	svg.appendChild(shellHighlight);
	svg.appendChild(shellShading);
	svg.appendChild(plastron);
	svg.appendChild(neck);
	svg.appendChild(frontFlipper);
	svg.appendChild(head);
	svg.appendChild(headTexture1);
	svg.appendChild(headTexture2);
	svg.appendChild(headTexture3);
	svg.appendChild(beak);
	svg.appendChild(eyeBase);
	svg.appendChild(eyeHighlight);
	svg.appendChild(nostril);
	svg.appendChild(mouth);
	
	return svg;
}

function createSeaTurtle() {
	const turtle = document.createElement('div');
	turtle.className = 'fish sea-turtle';
	
	// Tamanho médio
	const size = 70 + Math.random() * 40; // 70-110px
	
	// Criar SVG da tartaruga
	const turtleSVG = createSeaTurtleSVG(size);
	turtle.appendChild(turtleSVG);
	
	// Posição na parte média-baixa do oceano
	turtle.style.top = 40 + Math.random() * 40 + '%';
	
	// Direção aleatória
	const isReverse = Math.random() > 0.5;
	if (isReverse) {
		turtle.classList.add('reverse');
	}
	
	// Tartarugas nadam devagar e calmamente
	const duration = 40 + Math.random() * 30; // 40-70 segundos
	turtle.style.animationDuration = duration + 's';
	
	// Delay inicial
	turtle.style.animationDelay = Math.random() * -35 + 's';
	
	fishContainer.appendChild(turtle);
}


// ── GOLFINHO ─────────────────────────────────────────────────
function createDolphinSVG(size) {
// Copie todo o conteúdo da função createDolphinSVG original aqui
// (cauda, nadadeiras, corpo, barriga, olho, sorriso...)

	const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	svg.setAttribute("width", size);
	svg.setAttribute("height", size * 0.5);
	svg.setAttribute("viewBox", "0 0 140 70");
	
	// Grupo da cauda (para animação)
	const tailGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
	tailGroup.setAttribute("class", "fish-tail");
	
	// Cauda horizontal do golfinho
	const tail = document.createElementNS("http://www.w3.org/2000/svg", "path");
	tail.setAttribute("d", "M 5,35 L 15,25 L 18,35 L 15,45 Z");
	tail.setAttribute("fill", "#5DADE2");
	tail.setAttribute("stroke", "rgba(0, 0, 0, 0.2)");
	tail.setAttribute("stroke-width", "1");
	
	tailGroup.appendChild(tail);
	
	// Nadadeira peitoral
	const pectoralFin = document.createElementNS("http://www.w3.org/2000/svg", "path");
	pectoralFin.setAttribute("d", "M 75,42 Q 78,52 82,50 Q 80,46 75,42 Z");
	pectoralFin.setAttribute("fill", "#5DADE2");
	pectoralFin.setAttribute("opacity", "0.8");
	
	// Corpo principal do golfinho
	const body = document.createElementNS("http://www.w3.org/2000/svg", "path");
	body.setAttribute("d", "M 18,35 Q 25,28 45,25 Q 70,23 95,25 Q 115,27 125,30 Q 132,33 133,35 Q 132,37 125,40 Q 115,43 95,45 Q 70,47 45,45 Q 25,42 18,35 Z");
	body.setAttribute("fill", "#7EC8E3");
	body.setAttribute("stroke", "rgba(0, 0, 0, 0.2)");
	body.setAttribute("stroke-width", "1");
	
	// Barriga mais clara
	const belly = document.createElementNS("http://www.w3.org/2000/svg", "path");
	belly.setAttribute("d", "M 25,35 Q 35,40 60,42 Q 90,43 120,37 Q 100,40 70,41 Q 40,40 25,35 Z");
	belly.setAttribute("fill", "#B3E5FC");
	belly.setAttribute("opacity", "0.6");
	
	// Nadadeira dorsal característica
	const dorsalFin = document.createElementNS("http://www.w3.org/2000/svg", "path");
	dorsalFin.setAttribute("d", "M 65,25 Q 67,12 72,15 Q 70,22 65,25 Z");
	dorsalFin.setAttribute("fill", "#5DADE2");
	dorsalFin.setAttribute("stroke", "rgba(0, 0, 0, 0.2)");
	dorsalFin.setAttribute("stroke-width", "1");
	
	// Focinho/bico do golfinho
	const rostrum = document.createElementNS("http://www.w3.org/2000/svg", "path");
	rostrum.setAttribute("d", "M 125,30 Q 133,32 138,35 L 133,38 Q 125,40 125,35 Z");
	rostrum.setAttribute("fill", "#7EC8E3");
	rostrum.setAttribute("stroke", "rgba(0, 0, 0, 0.2)");
	rostrum.setAttribute("stroke-width", "1");
	
	// Olho
	const eyeWhite = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	eyeWhite.setAttribute("cx", "118");
	eyeWhite.setAttribute("cy", "32");
	eyeWhite.setAttribute("r", "4");
	eyeWhite.setAttribute("fill", "white");
	
	const eyePupil = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	eyePupil.setAttribute("cx", "119");
	eyePupil.setAttribute("cy", "32");
	eyePupil.setAttribute("r", "2");
	eyePupil.setAttribute("fill", "#2C3E50");
	
	// Sorriso característico do golfinho
	const smile = document.createElementNS("http://www.w3.org/2000/svg", "path");
	smile.setAttribute("d", "M 125,36 Q 130,37 135,36");
	smile.setAttribute("stroke", "rgba(0, 0, 0, 0.3)");
	smile.setAttribute("stroke-width", "1.5");
	smile.setAttribute("fill", "none");
	smile.setAttribute("stroke-linecap", "round");
	
	// Adicionar elementos ao SVG
	svg.appendChild(tailGroup);
	svg.appendChild(pectoralFin);
	svg.appendChild(body);
	svg.appendChild(belly);
	svg.appendChild(dorsalFin);
	svg.appendChild(rostrum);
	svg.appendChild(eyeWhite);
	svg.appendChild(eyePupil);
	svg.appendChild(smile);
	
	return svg;
}


function createDolphin() {
// Copie a lógica de createDolphin original

	const dolphin = document.createElement('div');
	dolphin.className = 'fish';
	
	// Golfinho maior que os peixes
	const size = 100 + Math.random() * 40; // 100-140px
	
	// Criar SVG do golfinho
	const dolphinSVG = createDolphinSVG(size);
	dolphin.appendChild(dolphinSVG);
	
	// Posição vertical aleatória
	dolphin.style.top = 15 + Math.random() * 60 + '%';
	
	// Direção aleatória
	const isReverse = Math.random() > 0.5;
	if (isReverse) {
		dolphin.classList.add('reverse');
	}
	
	// Golfinhos nadam um pouco mais rápido
	const duration = 12 + Math.random() * 18; // 12-30 segundos
	dolphin.style.animationDuration = duration + 's';
	
	// Delay inicial aleatório
	dolphin.style.animationDelay = Math.random() * -15 + 's';
	
	fishContainer.appendChild(dolphin);
}



// ── TUBARÃO ──────────────────────────────────────────────────
function createSharkSVG(size) {
// Copie todo o conteúdo da função createSharkSVG original
	const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	svg.setAttribute("width", size);
	svg.setAttribute("height", size * 0.45);
	svg.setAttribute("viewBox", "0 0 160 72");
	
	// Grupo da cauda (para animação)
	const tailGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
	tailGroup.setAttribute("class", "fish-tail");
	
	// Cauda do tubarão (formato assimétrico característico)
	const tailUpper = document.createElementNS("http://www.w3.org/2000/svg", "path");
	tailUpper.setAttribute("d", "M 5,36 L 15,18 L 20,32 Z");
	tailUpper.setAttribute("fill", "#455A64");
	tailUpper.setAttribute("stroke", "rgba(0, 0, 0, 0.3)");
	tailUpper.setAttribute("stroke-width", "1");
	
	const tailLower = document.createElementNS("http://www.w3.org/2000/svg", "path");
	tailLower.setAttribute("d", "M 5,36 L 15,48 L 20,38 Z");
	tailLower.setAttribute("fill", "#546E7A");
	tailLower.setAttribute("stroke", "rgba(0, 0, 0, 0.3)");
	tailLower.setAttribute("stroke-width", "1");
	
	tailGroup.appendChild(tailUpper);
	tailGroup.appendChild(tailLower);
	
	// Nadadeira anal (pequena embaixo)
	const analFin = document.createElementNS("http://www.w3.org/2000/svg", "path");
	analFin.setAttribute("d", "M 60,52 Q 62,60 66,56 Q 64,54 60,52 Z");
	analFin.setAttribute("fill", "#546E7A");
	analFin.setAttribute("stroke", "rgba(0, 0, 0, 0.2)");
	analFin.setAttribute("stroke-width", "1");
	
	// Nadadeira peitoral
	const pectoralFin = document.createElementNS("http://www.w3.org/2000/svg", "path");
	pectoralFin.setAttribute("d", "M 90,44 Q 95,54 100,50 Q 97,46 90,44 Z");
	pectoralFin.setAttribute("fill", "#546E7A");
	pectoralFin.setAttribute("opacity", "0.8");
	
	// Corpo do tubarão (forma hidrodinâmica e musculosa)
	const body = document.createElementNS("http://www.w3.org/2000/svg", "path");
	body.setAttribute("d", "M 20,36 Q 30,28 55,24 Q 85,22 110,24 Q 135,26 148,30 Q 156,34 157,36 Q 156,38 148,42 Q 135,46 110,48 Q 85,50 55,48 Q 30,44 20,36 Z");
	body.setAttribute("fill", "#607D8B");
	body.setAttribute("stroke", "rgba(0, 0, 0, 0.3)");
	body.setAttribute("stroke-width", "1.5");
	
	// Barriga mais clara
	const belly = document.createElementNS("http://www.w3.org/2000/svg", "path");
	belly.setAttribute("d", "M 30,36 Q 40,42 70,45 Q 105,46 140,38 Q 115,42 80,44 Q 50,42 30,36 Z");
	belly.setAttribute("fill", "#90A4AE");
	belly.setAttribute("opacity", "0.7");
	
	// Nadadeira dorsal GRANDE e ameaçadora
	const dorsalFin = document.createElementNS("http://www.w3.org/2000/svg", "path");
	dorsalFin.setAttribute("d", "M 75,24 Q 78,8 85,12 Q 82,20 75,24 Z");
	dorsalFin.setAttribute("fill", "#546E7A");
	dorsalFin.setAttribute("stroke", "rgba(0, 0, 0, 0.3)");
	dorsalFin.setAttribute("stroke-width", "1");
	
	// Segunda nadadeira dorsal (menor)
	const dorsalFin2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
	dorsalFin2.setAttribute("d", "M 45,26 Q 47,20 50,22 Q 49,25 45,26 Z");
	dorsalFin2.setAttribute("fill", "#546E7A");
	dorsalFin2.setAttribute("stroke", "rgba(0, 0, 0, 0.3)");
	dorsalFin2.setAttribute("stroke-width", "1");
	
	// Cabeça/focinho pontiagudo
	const snout = document.createElementNS("http://www.w3.org/2000/svg", "path");
	snout.setAttribute("d", "M 148,30 Q 156,32 160,36 L 156,40 Q 148,42 148,36 Z");
	snout.setAttribute("fill", "#607D8B");
	snout.setAttribute("stroke", "rgba(0, 0, 0, 0.3)");
	snout.setAttribute("stroke-width", "1");
	
	// Olho frio e calculista
	const eyeWhite = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
	eyeWhite.setAttribute("cx", "142");
	eyeWhite.setAttribute("cy", "32");
	eyeWhite.setAttribute("rx", "5");
	eyeWhite.setAttribute("ry", "4");
	eyeWhite.setAttribute("fill", "#37474F");
	
	const eyePupil = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	eyePupil.setAttribute("cx", "143");
	eyePupil.setAttribute("cy", "32");
	eyePupil.setAttribute("r", "2.5");
	eyePupil.setAttribute("fill", "#000000");
	
	// Guelras (linhas na lateral)
	const gill1 = document.createElementNS("http://www.w3.org/2000/svg", "line");
	gill1.setAttribute("x1", "105");
	gill1.setAttribute("y1", "38");
	gill1.setAttribute("x2", "108");
	gill1.setAttribute("y2", "42");
	gill1.setAttribute("stroke", "rgba(0, 0, 0, 0.4)");
	gill1.setAttribute("stroke-width", "1.5");
	gill1.setAttribute("stroke-linecap", "round");
	
	const gill2 = document.createElementNS("http://www.w3.org/2000/svg", "line");
	gill2.setAttribute("x1", "110");
	gill2.setAttribute("y1", "38");
	gill2.setAttribute("x2", "113");
	gill2.setAttribute("y2", "42");
	gill2.setAttribute("stroke", "rgba(0, 0, 0, 0.4)");
	gill2.setAttribute("stroke-width", "1.5");
	gill2.setAttribute("stroke-linecap", "round");
	
	const gill3 = document.createElementNS("http://www.w3.org/2000/svg", "line");
	gill3.setAttribute("x1", "115");
	gill3.setAttribute("y1", "38");
	gill3.setAttribute("x2", "118");
	gill3.setAttribute("y2", "42");
	gill3.setAttribute("stroke", "rgba(0, 0, 0, 0.4)");
	gill3.setAttribute("stroke-width", "1.5");
	gill3.setAttribute("stroke-linecap", "round");
	
	// Boca com dentes (linha ameaçadora)
	const mouth = document.createElementNS("http://www.w3.org/2000/svg", "path");
	mouth.setAttribute("d", "M 150,38 Q 155,39 158,39");
	mouth.setAttribute("stroke", "rgba(0, 0, 0, 0.5)");
	mouth.setAttribute("stroke-width", "1.5");
	mouth.setAttribute("fill", "none");
	mouth.setAttribute("stroke-linecap", "round");
	
	// Dentes afiados
	const teeth = document.createElementNS("http://www.w3.org/2000/svg", "path");
	teeth.setAttribute("d", "M 152,38 L 152,40 M 155,38 L 155,40 M 157,38 L 157,40");
	teeth.setAttribute("stroke", "#FFFFFF");
	teeth.setAttribute("stroke-width", "1");
	teeth.setAttribute("stroke-linecap", "round");
	
	// Adicionar elementos ao SVG na ordem correta
	svg.appendChild(tailGroup);
	svg.appendChild(pectoralFin);
	svg.appendChild(analFin);
	svg.appendChild(body);
	svg.appendChild(belly);
	svg.appendChild(dorsalFin);
	svg.appendChild(dorsalFin2);
	svg.appendChild(snout);
	svg.appendChild(gill1);
	svg.appendChild(gill2);
	svg.appendChild(gill3);
	svg.appendChild(eyeWhite);
	svg.appendChild(eyePupil);
	svg.appendChild(mouth);
	svg.appendChild(teeth);
	
	return svg;
}


function createShark() {
// Copie a lógica de createShark original

	const shark = document.createElement('div');
	shark.className = 'fish';
	
	// Tubarão bem grande e intimidador
	const size = 130 + Math.random() * 50; // 130-180px
	
	// Criar SVG do tubarão
	const sharkSVG = createSharkSVG(size);
	shark.appendChild(sharkSVG);
	
	// Posição vertical aleatória (geralmente no meio-fundo)
	shark.style.top = 30 + Math.random() * 50 + '%';
	
	// Direção aleatória
	const isReverse = Math.random() > 0.5;
	if (isReverse) {
		shark.classList.add('reverse');
	}
	
	// Tubarões nadam devagar mas de forma ameaçadora
	const duration = 20 + Math.random() * 15; // 20-35 segundos
	shark.style.animationDuration = duration + 's';
	
	// Delay inicial aleatório
	shark.style.animationDelay = Math.random() * -25 + 's';
	
	fishContainer.appendChild(shark);
}



// ── PEIXE-ANJO ───────────────────────────────────────────────
function createAngelfishSVG(size) {
// Copie createAngelfishSVG original
	const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	svg.setAttribute("width", size);
	svg.setAttribute("height", size * 0.9);
	svg.setAttribute("viewBox", "0 0 80 72");
	
	// Cores para peixe-anjo
	const colors = [
		{ body: '#FFD700', stripes: '#FF8C00', fin: '#FFA500' },
		{ body: '#FF69B4', stripes: '#FF1493', fin: '#FF6EB4' },
		{ body: '#00CED1', stripes: '#008B8B', fin: '#20B2AA' }
	];
	const fishColor = colors[Math.floor(Math.random() * colors.length)];
	
	// Grupo da cauda
	const tailGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
	tailGroup.setAttribute("class", "fish-tail");
	
	const tail = document.createElementNS("http://www.w3.org/2000/svg", "path");
	tail.setAttribute("d", "M 8,36 L 15,28 L 18,36 L 15,44 Z");
	tail.setAttribute("fill", fishColor.fin);
	tail.setAttribute("stroke", "rgba(0, 0, 0, 0.2)");
	tail.setAttribute("stroke-width", "0.5");
	
	tailGroup.appendChild(tail);
	
	// Corpo alto e achatado lateralmente
	const body = document.createElementNS("http://www.w3.org/2000/svg", "path");
	body.setAttribute("d", "M 18,36 Q 22,20 35,15 Q 48,13 58,16 Q 65,20 66,36 Q 65,52 58,56 Q 48,59 35,57 Q 22,52 18,36 Z");
	body.setAttribute("fill", fishColor.body);
	body.setAttribute("stroke", "rgba(0, 0, 0, 0.2)");
	body.setAttribute("stroke-width", "1");
	
	// Listras verticais
	const stripe1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
	stripe1.setAttribute("d", "M 35,17 Q 36,36 35,55");
	stripe1.setAttribute("stroke", fishColor.stripes);
	stripe1.setAttribute("stroke-width", "3");
	stripe1.setAttribute("opacity", "0.6");
	
	const stripe2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
	stripe2.setAttribute("d", "M 50,15 Q 51,36 50,57");
	stripe2.setAttribute("stroke", fishColor.stripes);
	stripe2.setAttribute("stroke-width", "3");
	stripe2.setAttribute("opacity", "0.6");
	
	// Nadadeiras dorsais e anais grandes
	const dorsalFin = document.createElementNS("http://www.w3.org/2000/svg", "path");
	dorsalFin.setAttribute("d", "M 35,15 Q 38,5 42,8 Q 48,12 52,15 Q 48,14 42,14 Q 38,14 35,15 Z");
	dorsalFin.setAttribute("fill", fishColor.fin);
	dorsalFin.setAttribute("stroke", "rgba(0, 0, 0, 0.2)");
	dorsalFin.setAttribute("stroke-width", "0.5");
	
	const analFin = document.createElementNS("http://www.w3.org/2000/svg", "path");
	analFin.setAttribute("d", "M 35,57 Q 38,67 42,64 Q 48,60 52,57 Q 48,58 42,58 Q 38,58 35,57 Z");
	analFin.setAttribute("fill", fishColor.fin);
	analFin.setAttribute("stroke", "rgba(0, 0, 0, 0.2)");
	analFin.setAttribute("stroke-width", "0.5");
	
	// Olho
	const eyeWhite = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	eyeWhite.setAttribute("cx", "60");
	eyeWhite.setAttribute("cy", "30");
	eyeWhite.setAttribute("r", "3");
	eyeWhite.setAttribute("fill", "white");
	
	const eyePupil = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	eyePupil.setAttribute("cx", "61");
	eyePupil.setAttribute("cy", "30");
	eyePupil.setAttribute("r", "1.5");
	eyePupil.setAttribute("fill", "#000");
	
	svg.appendChild(tailGroup);
	svg.appendChild(body);
	svg.appendChild(stripe1);
	svg.appendChild(stripe2);
	svg.appendChild(dorsalFin);
	svg.appendChild(analFin);
	svg.appendChild(eyeWhite);
	svg.appendChild(eyePupil);
	
	return svg;
}


function createAngelfish() {
// Copie lógica correspondente
	const fish = document.createElement('div');
	fish.className = 'fish';
	
	const size = 45 + Math.random() * 35;
	const fishSVG = createAngelfishSVG(size);
	fish.appendChild(fishSVG);
	
	fish.style.top = 20 + Math.random() * 70 + '%';
	
	const isReverse = Math.random() > 0.5;
	if (isReverse) {
		fish.classList.add('reverse');
	}
	
	const duration = 18 + Math.random() * 22;
	fish.style.animationDuration = duration + 's';
	fish.style.animationDelay = Math.random() * -20 + 's';
	
	fishContainer.appendChild(fish);
}




// ── PEIXE-PALHAÇO ────────────────────────────────────────────
function createClownfishSVG(size) {
// Copie createClownfishSVG original
	const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	svg.setAttribute("width", size);
	svg.setAttribute("height", size * 0.65);
	svg.setAttribute("viewBox", "0 0 90 58");
	
	// Grupo da cauda
	const tailGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
	tailGroup.setAttribute("class", "fish-tail");
	
	const tail = document.createElementNS("http://www.w3.org/2000/svg", "path");
	tail.setAttribute("d", "M 8,29 L 14,22 L 17,29 L 14,36 Z");
	tail.setAttribute("fill", "#FF6347");
	tail.setAttribute("stroke", "rgba(0, 0, 0, 0.2)");
	tail.setAttribute("stroke-width", "0.5");
	
	tailGroup.appendChild(tail);
	
	// Corpo arredondado laranja
	const body = document.createElementNS("http://www.w3.org/2000/svg", "path");
	body.setAttribute("d", "M 17,29 Q 22,22 38,20 Q 55,19 68,22 Q 78,25 80,29 Q 78,33 68,36 Q 55,39 38,38 Q 22,36 17,29 Z");
	body.setAttribute("fill", "#FF6347");
	body.setAttribute("stroke", "rgba(0, 0, 0, 0.2)");
	body.setAttribute("stroke-width", "1");
	
	// Faixas brancas características
	const stripe1 = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
	stripe1.setAttribute("cx", "65");
	stripe1.setAttribute("cy", "29");
	stripe1.setAttribute("rx", "5");
	stripe1.setAttribute("ry", "9");
	stripe1.setAttribute("fill", "white");
	stripe1.setAttribute("stroke", "#000");
	stripe1.setAttribute("stroke-width", "0.5");
	
	const stripe2 = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
	stripe2.setAttribute("cx", "45");
	stripe2.setAttribute("cy", "29");
	stripe2.setAttribute("rx", "5");
	stripe2.setAttribute("ry", "9");
	stripe2.setAttribute("fill", "white");
	stripe2.setAttribute("stroke", "#000");
	stripe2.setAttribute("stroke-width", "0.5");
	
	const stripe3 = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
	stripe3.setAttribute("cx", "25");
	stripe3.setAttribute("cy", "29");
	stripe3.setAttribute("rx", "4");
	stripe3.setAttribute("ry", "8");
	stripe3.setAttribute("fill", "white");
	stripe3.setAttribute("stroke", "#000");
	stripe3.setAttribute("stroke-width", "0.5");
	
	// Nadadeiras arredondadas
	const dorsalFin = document.createElementNS("http://www.w3.org/2000/svg", "path");
	dorsalFin.setAttribute("d", "M 42,20 Q 44,14 48,16 Q 46,19 42,20 Z");
	dorsalFin.setAttribute("fill", "#FF6347");
	dorsalFin.setAttribute("stroke", "rgba(0, 0, 0, 0.2)");
	dorsalFin.setAttribute("stroke-width", "0.5");
	
	const analFin = document.createElementNS("http://www.w3.org/2000/svg", "path");
	analFin.setAttribute("d", "M 42,38 Q 44,44 48,42 Q 46,39 42,38 Z");
	analFin.setAttribute("fill", "#FF6347");
	analFin.setAttribute("stroke", "rgba(0, 0, 0, 0.2)");
	analFin.setAttribute("stroke-width", "0.5");
	
	// Olho
	const eyeWhite = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	eyeWhite.setAttribute("cx", "72");
	eyeWhite.setAttribute("cy", "27");
	eyeWhite.setAttribute("r", "3");
	eyeWhite.setAttribute("fill", "white");
	
	const eyePupil = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	eyePupil.setAttribute("cx", "73");
	eyePupil.setAttribute("cy", "27");
	eyePupil.setAttribute("r", "1.5");
	eyePupil.setAttribute("fill", "#000");
	
	svg.appendChild(tailGroup);
	svg.appendChild(body);
	svg.appendChild(stripe1);
	svg.appendChild(stripe2);
	svg.appendChild(stripe3);
	svg.appendChild(dorsalFin);
	svg.appendChild(analFin);
	svg.appendChild(eyeWhite);
	svg.appendChild(eyePupil);
	
	return svg;
}


function createClownfish() {
// Copie lógica
	const fish = document.createElement('div');
	fish.className = 'fish';
	
	const size = 40 + Math.random() * 30;
	const fishSVG = createClownfishSVG(size);
	fish.appendChild(fishSVG);
	
	fish.style.top = 25 + Math.random() * 65 + '%';
	
	const isReverse = Math.random() > 0.5;
	if (isReverse) {
		fish.classList.add('reverse');
	}
	
	const duration = 16 + Math.random() * 20;
	fish.style.animationDuration = duration + 's';
	fish.style.animationDelay = Math.random() * -18 + 's';
	
	fishContainer.appendChild(fish);
}



// ── PEIXE-ESPADA ─────────────────────────────────────────────
function createSwordfishSVG(size) {
// Copie createSwordfishSVG original
	const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	svg.setAttribute("width", size);
	svg.setAttribute("height", size * 0.35);
	svg.setAttribute("viewBox", "0 0 180 63");
	
	// Grupo da cauda
	const tailGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
	tailGroup.setAttribute("class", "fish-tail");
	
	const tailUpper = document.createElementNS("http://www.w3.org/2000/svg", "path");
	tailUpper.setAttribute("d", "M 5,31 L 12,18 L 18,28 Z");
	tailUpper.setAttribute("fill", "#4682B4");
	tailUpper.setAttribute("stroke", "rgba(0, 0, 0, 0.2)");
	tailUpper.setAttribute("stroke-width", "0.5");
	
	const tailLower = document.createElementNS("http://www.w3.org/2000/svg", "path");
	tailLower.setAttribute("d", "M 5,31 L 12,44 L 18,34 Z");
	tailLower.setAttribute("fill", "#5A9BD4");
	tailLower.setAttribute("stroke", "rgba(0, 0, 0, 0.2)");
	tailLower.setAttribute("stroke-width", "0.5");
	
	tailGroup.appendChild(tailUpper);
	tailGroup.appendChild(tailLower);
	
	// Corpo alongado e hidrodinâmico
	const body = document.createElementNS("http://www.w3.org/2000/svg", "path");
	body.setAttribute("d", "M 18,31 Q 30,26 60,24 Q 95,23 120,25 Q 135,27 138,31 Q 135,35 120,37 Q 95,39 60,38 Q 30,36 18,31 Z");
	body.setAttribute("fill", "#4682B4");
	body.setAttribute("stroke", "rgba(0, 0, 0, 0.2)");
	body.setAttribute("stroke-width", "1");
	
	// Barriga prateada
	const belly = document.createElementNS("http://www.w3.org/2000/svg", "path");
	belly.setAttribute("d", "M 25,31 Q 35,34 70,36 Q 110,36 133,32 Q 110,34 70,35 Q 40,34 25,31 Z");
	belly.setAttribute("fill", "#B0C4DE");
	belly.setAttribute("opacity", "0.7");
	
	// Nadadeira dorsal alta
	const dorsalFin = document.createElementNS("http://www.w3.org/2000/svg", "path");
	dorsalFin.setAttribute("d", "M 70,24 Q 72,14 76,16 Q 74,21 70,24 Z");
	dorsalFin.setAttribute("fill", "#5A9BD4");
	dorsalFin.setAttribute("stroke", "rgba(0, 0, 0, 0.2)");
	dorsalFin.setAttribute("stroke-width", "0.5");
	
	// ESPADA/BICO longo característico
	const sword = document.createElementNS("http://www.w3.org/2000/svg", "path");
	sword.setAttribute("d", "M 138,31 L 175,30 L 175,32 L 138,31 Z");
	sword.setAttribute("fill", "#708090");
	sword.setAttribute("stroke", "rgba(0, 0, 0, 0.3)");
	sword.setAttribute("stroke-width", "1");
	
	// Olho
	const eyeWhite = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	eyeWhite.setAttribute("cx", "130");
	eyeWhite.setAttribute("cy", "29");
	eyeWhite.setAttribute("r", "3");
	eyeWhite.setAttribute("fill", "white");
	
	const eyePupil = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	eyePupil.setAttribute("cx", "131");
	eyePupil.setAttribute("cy", "29");
	eyePupil.setAttribute("r", "1.5");
	eyePupil.setAttribute("fill", "#000");
	
	svg.appendChild(tailGroup);
	svg.appendChild(body);
	svg.appendChild(belly);
	svg.appendChild(dorsalFin);
	svg.appendChild(sword);
	svg.appendChild(eyeWhite);
	svg.appendChild(eyePupil);
	
	return svg;
}


function createSwordfish() {
// Copie lógica
	const fish = document.createElement('div');
	fish.className = 'fish';
	
	const size = 80 + Math.random() * 40;
	const fishSVG = createSwordfishSVG(size);
	fish.appendChild(fishSVG);
	
	fish.style.top = 20 + Math.random() * 60 + '%';
	
	const isReverse = Math.random() > 0.5;
	if (isReverse) {
		fish.classList.add('reverse');
	}
	
	const duration = 12 + Math.random() * 15;
	fish.style.animationDuration = duration + 's';
	fish.style.animationDelay = Math.random() * -15 + 's';
	
	fishContainer.appendChild(fish);
}



// ── SUBMARINO ────────────────────────────────────────────────
function createSubmarineSVG(size) {
// Copie createSubmarineSVG original

	const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	svg.setAttribute("width", size);
	svg.setAttribute("height", size * 0.4);
	svg.setAttribute("viewBox", "0 0 200 80");
	
	// Hélice traseira (grupo para animação)
	const propellerGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
	propellerGroup.setAttribute("class", "fish-tail");
	
	const propeller1 = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
	propeller1.setAttribute("cx", "15");
	propeller1.setAttribute("cy", "40");
	propeller1.setAttribute("rx", "8");
	propeller1.setAttribute("ry", "2");
	propeller1.setAttribute("fill", "#708090");
	
	const propeller2 = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
	propeller2.setAttribute("cx", "15");
	propeller2.setAttribute("cy", "40");
	propeller2.setAttribute("rx", "2");
	propeller2.setAttribute("ry", "8");
	propeller2.setAttribute("fill", "#708090");
	
	propellerGroup.appendChild(propeller1);
	propellerGroup.appendChild(propeller2);
	
	// Corpo principal do submarino (cilíndrico)
	const mainBody = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
	mainBody.setAttribute("cx", "100");
	mainBody.setAttribute("cy", "40");
	mainBody.setAttribute("rx", "70");
	mainBody.setAttribute("ry", "20");
	mainBody.setAttribute("fill", "#2F4F4F");
	mainBody.setAttribute("stroke", "#1C1C1C");
	mainBody.setAttribute("stroke-width", "2");
	
	// Detalhes do casco
	const bodyStripe1 = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
	bodyStripe1.setAttribute("cx", "100");
	bodyStripe1.setAttribute("cy", "40");
	bodyStripe1.setAttribute("rx", "68");
	bodyStripe1.setAttribute("ry", "17");
	bodyStripe1.setAttribute("fill", "none");
	bodyStripe1.setAttribute("stroke", "#1C1C1C");
	bodyStripe1.setAttribute("stroke-width", "1");
	bodyStripe1.setAttribute("opacity", "0.5");
	
	const bodyStripe2 = document.createElementNS("http://www.w3.org/2000/svg", "line");
	bodyStripe2.setAttribute("x1", "35");
	bodyStripe2.setAttribute("y1", "40");
	bodyStripe2.setAttribute("x2", "165");
	bodyStripe2.setAttribute("y2", "40");
	bodyStripe2.setAttribute("stroke", "#1C1C1C");
	bodyStripe2.setAttribute("stroke-width", "1.5");
	bodyStripe2.setAttribute("opacity", "0.6");
	
	// Torre de comando (conning tower)
	const conningTower = document.createElementNS("http://www.w3.org/2000/svg", "rect");
	conningTower.setAttribute("x", "90");
	conningTower.setAttribute("y", "15");
	conningTower.setAttribute("width", "30");
	conningTower.setAttribute("height", "10");
	conningTower.setAttribute("fill", "#2F4F4F");
	conningTower.setAttribute("stroke", "#1C1C1C");
	conningTower.setAttribute("stroke-width", "2");
	conningTower.setAttribute("rx", "2");
	
	// Periscópio
	const periscope = document.createElementNS("http://www.w3.org/2000/svg", "line");
	periscope.setAttribute("x1", "105");
	periscope.setAttribute("y1", "15");
	periscope.setAttribute("x2", "105");
	periscope.setAttribute("y2", "5");
	periscope.setAttribute("stroke", "#4A4A4A");
	periscope.setAttribute("stroke-width", "2");
	periscope.setAttribute("stroke-linecap", "round");
	
	const periscopeTop = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	periscopeTop.setAttribute("cx", "105");
	periscopeTop.setAttribute("cy", "5");
	periscopeTop.setAttribute("r", "2");
	periscopeTop.setAttribute("fill", "#708090");
	
	// Proa (frente) pontiaguda
	const bow = document.createElementNS("http://www.w3.org/2000/svg", "path");
	bow.setAttribute("d", "M 170,40 Q 185,38 195,40 Q 185,42 170,40 Z");
	bow.setAttribute("fill", "#2F4F4F");
	bow.setAttribute("stroke", "#1C1C1C");
	bow.setAttribute("stroke-width", "2");
	
	// Popa (traseira)
	const stern = document.createElementNS("http://www.w3.org/2000/svg", "path");
	stern.setAttribute("d", "M 30,40 Q 22,38 18,40 Q 22,42 30,40 Z");
	stern.setAttribute("fill", "#2F4F4F");
	stern.setAttribute("stroke", "#1C1C1C");
	stern.setAttribute("stroke-width", "2");
	
	// Leme vertical
	const rudder = document.createElementNS("http://www.w3.org/2000/svg", "path");
	rudder.setAttribute("d", "M 25,40 L 20,35 L 22,40 L 20,45 Z");
	rudder.setAttribute("fill", "#4A4A4A");
	rudder.setAttribute("stroke", "#1C1C1C");
	rudder.setAttribute("stroke-width", "1");
	
	// Janelas/vigias
	const window1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	window1.setAttribute("cx", "150");
	window1.setAttribute("cy", "38");
	window1.setAttribute("r", "4");
	window1.setAttribute("fill", "#4A90A4");
	window1.setAttribute("stroke", "#1C1C1C");
	window1.setAttribute("stroke-width", "1");
	window1.setAttribute("opacity", "0.7");
	
	const window2 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	window2.setAttribute("cx", "130");
	window2.setAttribute("cy", "38");
	window2.setAttribute("r", "4");
	window2.setAttribute("fill", "#4A90A4");
	window2.setAttribute("stroke", "#1C1C1C");
	window2.setAttribute("stroke-width", "1");
	window2.setAttribute("opacity", "0.7");
	
	const window3 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	window3.setAttribute("cx", "70");
	window3.setAttribute("cy", "38");
	window3.setAttribute("r", "4");
	window3.setAttribute("fill", "#4A90A4");
	window3.setAttribute("stroke", "#1C1C1C");
	window3.setAttribute("stroke-width", "1");
	window3.setAttribute("opacity", "0.7");
	
	// Número de identificação
	const number = document.createElementNS("http://www.w3.org/2000/svg", "text");
	number.setAttribute("x", "95");
	number.setAttribute("y", "45");
	number.setAttribute("font-size", "8");
	number.setAttribute("fill", "#FFFFFF");
	number.setAttribute("opacity", "0.6");
	number.setAttribute("font-family", "monospace");
	number.textContent = "U-" + Math.floor(Math.random() * 999);
	
	// Adicionar todos os elementos ao SVG
	svg.appendChild(propellerGroup);
	svg.appendChild(stern);
	svg.appendChild(mainBody);
	svg.appendChild(bodyStripe1);
	svg.appendChild(bodyStripe2);
	svg.appendChild(rudder);
	svg.appendChild(conningTower);
	svg.appendChild(periscope);
	svg.appendChild(periscopeTop);
	svg.appendChild(bow);
	svg.appendChild(window1);
	svg.appendChild(window2);
	svg.appendChild(window3);
	svg.appendChild(number);
	
	return svg;
}


function createSubmarine() {
// Copie lógica
	const submarine = document.createElement('div');
	submarine.className = 'fish';
	
	// Submarino grande
	const size = 100 + Math.random() * 40; // 100-140px
	
	// Criar SVG do submarino
	const submarineSVG = createSubmarineSVG(size);
	submarine.appendChild(submarineSVG);
	
	// Posição vertical aleatória (geralmente no meio-fundo)
	submarine.style.top = 40 + Math.random() * 45 + '%';
	
	// Direção aleatória
	const isReverse = Math.random() > 0.5;
	if (isReverse) {
		submarine.classList.add('reverse');
	}
	
	// Submarinos nadam devagar
	const duration = 25 + Math.random() * 20; // 25-45 segundos
	submarine.style.animationDuration = duration + 's';
	
	// Delay inicial aleatório
	submarine.style.animationDelay = Math.random() * -30 + 's';
	
	fishContainer.appendChild(submarine);
}


// ── CAVALO-MARINHO ───────────────────────────────────────────
function createSeahorseSVG(size) {
	const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	svg.setAttribute("width", size);
	svg.setAttribute("height", size * 1.5);
	svg.setAttribute("viewBox", "0 0 80 120");

	// Cores variadas de cavalos-marinhos
	const colors = [
	{ body: '#FF6B9D', belly: '#FFB3D9', fin: '#FF1744' },
		{ body: '#FFC107', belly: '#FFE082', fin: '#FF6F00' },
		{ body: '#00E5FF', belly: '#B3E5FC', fin: '#00B8D4' }
	];
	const seahorseColor = colors[Math.floor(Math.random() * colors.length)];

	// Grupo da nadadeira (para animação)
	const finGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
	finGroup.setAttribute("class", "fish-tail");

	// Nadadeira dorsal vibratória
	const dorsalFin = document.createElementNS("http://www.w3.org/2000/svg", "path");
	dorsalFin.setAttribute("d", "M 35,45 Q 32,40 35,35 Q 38,40 35,45 Z");
	dorsalFin.setAttribute("fill", seahorseColor.fin);
	dorsalFin.setAttribute("opacity", "0.7");

	finGroup.appendChild(dorsalFin);

	// Cauda enrolada característica
	const tail = document.createElementNS("http://www.w3.org/2000/svg", "path");
	tail.setAttribute("d", "M 40,70 Q 45,75 45,82 Q 45,88 42,92 Q 38,95 35,92 Q 33,88 35,82 Q 37,78 40,75");
	tail.setAttribute("stroke", seahorseColor.body);
	tail.setAttribute("stroke-width", "6");
	tail.setAttribute("fill", "none");
	tail.setAttribute("stroke-linecap", "round");

	// Anéis na cauda
	for (let i = 0; i < 3; i++) {
	const ring = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	const y = 78 + i * 6;
	ring.setAttribute("cx", "40");
	ring.setAttribute("cy", y);
	ring.setAttribute("r", "3");
	ring.setAttribute("fill", "none");
	ring.setAttribute("stroke", seahorseColor.belly);
	ring.setAttribute("stroke-width", "1");
	ring.setAttribute("opacity", "0.6");
	svg.appendChild(ring);
	}

	// Corpo principal
	const body = document.createElementNS("http://www.w3.org/2000/svg", "path");
	body.setAttribute("d", "M 35,30 Q 32,40 33,50 Q 34,60 38,68");
	body.setAttribute("stroke", seahorseColor.body);
	body.setAttribute("stroke-width", "12");
	body.setAttribute("fill", "none");
	body.setAttribute("stroke-linecap", "round");

	// Barriga mais clara
	const belly = document.createElementNS("http://www.w3.org/2000/svg", "path");
	belly.setAttribute("d", "M 36,35 Q 34,45 35,55 Q 36,62 38,66");
	belly.setAttribute("stroke", seahorseColor.belly);
	belly.setAttribute("stroke-width", "6");
	belly.setAttribute("fill", "none");
	belly.setAttribute("stroke-linecap", "round");

	// Pescoço
	const neck = document.createElementNS("http://www.w3.org/2000/svg", "path");
	neck.setAttribute("d", "M 35,30 Q 38,22 42,18");
	neck.setAttribute("stroke", seahorseColor.body);
	neck.setAttribute("stroke-width", "8");
	neck.setAttribute("fill", "none");
	neck.setAttribute("stroke-linecap", "round");

	// Cabeça característica
	const head = document.createElementNS("http://www.w3.org/2000/svg", "path");
	head.setAttribute("d", "M 42,18 Q 48,16 52,18 Q 54,22 52,26 Q 48,28 45,26");
	head.setAttribute("fill", seahorseColor.body);
	head.setAttribute("stroke", seahorseColor.body);
	head.setAttribute("stroke-width", "1");

	// Focinho alongado
	const snout = document.createElementNS("http://www.w3.org/2000/svg", "path");
	snout.setAttribute("d", "M 52,22 Q 58,22 62,24");
	snout.setAttribute("stroke", seahorseColor.body);
	snout.setAttribute("stroke-width", "3");
	snout.setAttribute("fill", "none");
	snout.setAttribute("stroke-linecap", "round");

	// Boca
	const mouth = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	mouth.setAttribute("cx", "62");
	mouth.setAttribute("cy", "24");
	mouth.setAttribute("r", "1");
	mouth.setAttribute("fill", "#5D4037");

	// Olho grande
	const eyeWhite = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	eyeWhite.setAttribute("cx", "48");
	eyeWhite.setAttribute("cy", "20");
	eyeWhite.setAttribute("r", "3");
	eyeWhite.setAttribute("fill", "#FFFFFF");

	const eyePupil = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	eyePupil.setAttribute("cx", "49");
	eyePupil.setAttribute("cy", "20");
	eyePupil.setAttribute("r", "1.5");
	eyePupil.setAttribute("fill", "#000000");

	// Coroa/crista no topo da cabeça
	const crown1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
	crown1.setAttribute("d", "M 46,16 Q 46,12 48,14");
	crown1.setAttribute("stroke", seahorseColor.fin);
	crown1.setAttribute("stroke-width", "2");
	crown1.setAttribute("fill", "none");
	crown1.setAttribute("stroke-linecap", "round");

	const crown2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
	crown2.setAttribute("d", "M 48,15 Q 48,10 50,12");
	crown2.setAttribute("stroke", seahorseColor.fin);
	crown2.setAttribute("stroke-width", "2");
	crown2.setAttribute("fill", "none");
	crown2.setAttribute("stroke-linecap", "round");

	const crown3 = document.createElementNS("http://www.w3.org/2000/svg", "path");
	crown3.setAttribute("d", "M 50,15 Q 50,11 52,13");
	crown3.setAttribute("stroke", seahorseColor.fin);
	crown3.setAttribute("stroke-width", "2");
	crown3.setAttribute("fill", "none");
	crown3.setAttribute("stroke-linecap", "round");

	// Nadadeira peitoral
	const pectoralFin = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
	pectoralFin.setAttribute("cx", "38");
	pectoralFin.setAttribute("cy", "50");
	pectoralFin.setAttribute("rx", "4");
	pectoralFin.setAttribute("ry", "6");
	pectoralFin.setAttribute("fill", seahorseColor.fin);
	pectoralFin.setAttribute("opacity", "0.5");

	// Adicionar tudo ao SVG
	svg.appendChild(tail);
	svg.appendChild(body);
	svg.appendChild(belly);
		svg.appendChild(pectoralFin);
	svg.appendChild(finGroup);
	svg.appendChild(neck);
	svg.appendChild(head);
	svg.appendChild(snout);
	svg.appendChild(mouth);
	svg.appendChild(eyeWhite);
	svg.appendChild(eyePupil);
	svg.appendChild(crown1);
	svg.appendChild(crown2);
	svg.appendChild(crown3);

	return svg;	   
	}



function createSeahorse() {

	const seahorse = document.createElement('div');
	seahorse.className = 'fish';

	// Cavalo-marinho pequeno
	const size = 35 + Math.random() * 25; // 35-60px

	// Criar SVG do cavalo-marinho
	const seahorseSVG = createSeahorseSVG(size);
	seahorse.appendChild(seahorseSVG);

	// Posição vertical aleatória
	seahorse.style.top = 30 + Math.random() * 60 + '%';

	// Direção aleatória
	const isReverse = Math.random() > 0.5;
	if (isReverse) {
	   seahorse.classList.add('reverse');
	}

	// Cavalos-marinhos nadam devagar e verticalmente
	const duration = 22 + Math.random() * 18; // 22-40 segundos
	seahorse.style.animationDuration = duration + 's';

	// Delay inicial aleatório
	seahorse.style.animationDelay = Math.random() * -25 + 's';

	fishContainer.appendChild(seahorse);   
}


// ── MONSTRO DO LAGO NESS (NESSIE) ────────────────────────────
function createNessieSVG(size) {
	const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	svg.setAttribute("width", size);
	svg.setAttribute("height", size * 1.2);
	svg.setAttribute("viewBox", "0 0 200 240");
	
	const nessieColor = {
		body: '#2E7D32',      // Verde escuro
		belly: '#66BB6A',     // Verde mais claro
		spots: '#1B5E20',     // Verde muito escuro
		eye: '#FFEB3B'        // Amarelo para olho
	};
	
	// Cauda na parte traseira
	const tail = document.createElementNS("http://www.w3.org/2000/svg", "path");
	tail.setAttribute("d", "M 20,180 Q 10,175 5,185 Q 8,195 15,195 Q 18,188 20,180 Z");
	tail.setAttribute("fill", nessieColor.body);
	tail.setAttribute("stroke", "rgba(0, 0, 0, 0.3)");
	tail.setAttribute("stroke-width", "1.5");
	
	// Nadadeira caudal
	const tailFin = document.createElementNS("http://www.w3.org/2000/svg", "path");
	tailFin.setAttribute("d", "M 8,190 L 2,182 L 4,190 L 2,198 Z");
	tailFin.setAttribute("fill", nessieColor.belly);
	tailFin.setAttribute("opacity", "0.8");
	
	// Corpo principal (grande e robusto)
	const body = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
	body.setAttribute("cx", "80");
	body.setAttribute("cy", "180");
	body.setAttribute("rx", "55");
	body.setAttribute("ry", "35");
	body.setAttribute("fill", nessieColor.body);
	body.setAttribute("stroke", "rgba(0, 0, 0, 0.3)");
	body.setAttribute("stroke-width", "2");
	
	// Barriga mais clara
	const belly = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
	belly.setAttribute("cx", "80");
	belly.setAttribute("cy", "190");
	belly.setAttribute("rx", "45");
	belly.setAttribute("ry", "25");
	belly.setAttribute("fill", nessieColor.belly);
	belly.setAttribute("opacity", "0.7");
	
	// Manchas no corpo
	const spot1 = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
	spot1.setAttribute("cx", "60");
	spot1.setAttribute("cy", "170");
	spot1.setAttribute("rx", "8");
	spot1.setAttribute("ry", "6");
	spot1.setAttribute("fill", nessieColor.spots);
	spot1.setAttribute("opacity", "0.5");
	
	const spot2 = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
	spot2.setAttribute("cx", "95");
	spot2.setAttribute("cy", "175");
	spot2.setAttribute("rx", "10");
	spot2.setAttribute("ry", "7");
	spot2.setAttribute("fill", nessieColor.spots);
	spot2.setAttribute("opacity", "0.5");
	
	const spot3 = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
	spot3.setAttribute("cx", "75");
	spot3.setAttribute("cy", "195");
	spot3.setAttribute("rx", "7");
	spot3.setAttribute("ry", "5");
	spot3.setAttribute("fill", nessieColor.spots);
	spot3.setAttribute("opacity", "0.5");
	
	// Nadadeiras laterais (4 nadadeiras como plesiossauro)
	const flipper1 = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
	flipper1.setAttribute("cx", "55");
	flipper1.setAttribute("cy", "200");
	flipper1.setAttribute("rx", "18");
	flipper1.setAttribute("ry", "10");
	flipper1.setAttribute("fill", nessieColor.belly);
	flipper1.setAttribute("opacity", "0.85");
	flipper1.setAttribute("transform", "rotate(-30 55 200)");
	
	const flipper2 = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
	flipper2.setAttribute("cx", "105");
	flipper2.setAttribute("cy", "200");
	flipper2.setAttribute("rx", "18");
	flipper2.setAttribute("ry", "10");
	flipper2.setAttribute("fill", nessieColor.belly);
	flipper2.setAttribute("opacity", "0.85");
	flipper2.setAttribute("transform", "rotate(30 105 200)");
	
	// Pescoço LONGO e CURVO característico de Nessie
	const neck = document.createElementNS("http://www.w3.org/2000/svg", "path");
	neck.setAttribute("d", "M 110,165 Q 125,140 135,110 Q 140,80 145,50 Q 148,30 150,20");
	neck.setAttribute("stroke", nessieColor.body);
	neck.setAttribute("stroke-width", "22");
	neck.setAttribute("fill", "none");
	neck.setAttribute("stroke-linecap", "round");
	
	// Parte clara do pescoço
	const neckBelly = document.createElementNS("http://www.w3.org/2000/svg", "path");
	neckBelly.setAttribute("d", "M 110,165 Q 125,140 135,110 Q 140,80 145,50 Q 148,30 150,20");
	neckBelly.setAttribute("stroke", nessieColor.belly);
	neckBelly.setAttribute("stroke-width", "14");
	neckBelly.setAttribute("fill", "none");
	neckBelly.setAttribute("stroke-linecap", "round");
	neckBelly.setAttribute("opacity", "0.6");
	
	// Espinhos/crista ao longo do pescoço
	for (let i = 0; i < 6; i++) {
		const spike = document.createElementNS("http://www.w3.org/2000/svg", "path");
		const y = 165 - i * 25;
		const x = 110 + i * 6;
		spike.setAttribute("d", `M ${x},${y} L ${x-4},${y-8} L ${x+4},${y-8} Z`);
		spike.setAttribute("fill", nessieColor.spots);
		spike.setAttribute("opacity", "0.7");
		svg.appendChild(spike);
	}
	
	// Cabeça pequena de dinossauro
	const head = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
	head.setAttribute("cx", "155");
	head.setAttribute("cy", "15");
	head.setAttribute("rx", "15");
	head.setAttribute("ry", "12");
	head.setAttribute("fill", nessieColor.body);
	head.setAttribute("stroke", "rgba(0, 0, 0, 0.3)");
	head.setAttribute("stroke-width", "1.5");
	
	// Focinho
	const snout = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
	snout.setAttribute("cx", "168");
	snout.setAttribute("cy", "15");
	snout.setAttribute("rx", "8");
	snout.setAttribute("ry", "6");
	snout.setAttribute("fill", nessieColor.body);
	snout.setAttribute("stroke", "rgba(0, 0, 0, 0.3)");
	snout.setAttribute("stroke-width", "1");
	
	// Olho grande e expressivo
	const eyeWhite = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	eyeWhite.setAttribute("cx", "160");
	eyeWhite.setAttribute("cy", "12");
	eyeWhite.setAttribute("r", "5");
	eyeWhite.setAttribute("fill", "white");
	
	const eyePupil = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	eyePupil.setAttribute("cx", "161");
	eyePupil.setAttribute("cy", "12");
	eyePupil.setAttribute("r", "3");
	eyePupil.setAttribute("fill", "#000");
	
	const eyeShine = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	eyeShine.setAttribute("cx", "159");
	eyeShine.setAttribute("cy", "11");
	eyeShine.setAttribute("r", "1.5");
	eyeShine.setAttribute("fill", "white");
	
	// Narina
	const nostril = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	nostril.setAttribute("cx", "172");
	nostril.setAttribute("cy", "14");
	nostril.setAttribute("r", "1.5");
	nostril.setAttribute("fill", "#1B5E20");
	
	// Boca
	const mouth = document.createElementNS("http://www.w3.org/2000/svg", "path");
	mouth.setAttribute("d", "M 170,17 Q 173,18 175,17");
	mouth.setAttribute("stroke", "rgba(0, 0, 0, 0.4)");
	mouth.setAttribute("stroke-width", "1.5");
	mouth.setAttribute("fill", "none");
	mouth.setAttribute("stroke-linecap", "round");
	
	// Adicionar todos os elementos na ordem correta
	svg.appendChild(tailFin);
	svg.appendChild(tail);
	svg.appendChild(flipper1);
	svg.appendChild(body);
	svg.appendChild(belly);
	svg.appendChild(spot1);
	svg.appendChild(spot2);
	svg.appendChild(spot3);
	svg.appendChild(flipper2);
	svg.appendChild(neck);
	svg.appendChild(neckBelly);
	svg.appendChild(head);
	svg.appendChild(snout);
	svg.appendChild(eyeWhite);
	svg.appendChild(eyePupil);
	svg.appendChild(eyeShine);
	svg.appendChild(nostril);
	svg.appendChild(mouth);
	
	return svg;
}

function createNessie() {
	const nessie = document.createElement('div');
	nessie.className = 'fish';
	
	// Nessie é GRANDE!
	const size = 150 + Math.random() * 50; // 150-200px
	
	// Criar SVG de Nessie
	const nessieSVG = createNessieSVG(size);
	nessie.appendChild(nessieSVG);
	
	// Posição vertical (meio do oceano)
	nessie.style.top = 35 + Math.random() * 30 + '%';
	
	// Direção aleatória
	const isReverse = Math.random() > 0.5;
	if (isReverse) {
		nessie.classList.add('reverse');
	}
	
	// Nessie nada DEVAGAR (é grande e majestosa)
	const duration = 35 + Math.random() * 25; // 35-60 segundos
	nessie.style.animationDuration = duration + 's';
	
	// Delay inicial
	nessie.style.animationDelay = Math.random() * -30 + 's';
	
	fishContainer.appendChild(nessie);
}


// ── ÁGUA-VIVA (JELLYFISH) ────────────────────────────────────
function createJellyfishSVG(size) {
	const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	svg.setAttribute("width", size);
	svg.setAttribute("height", size * 1.5);
	svg.setAttribute("viewBox", "0 0 100 150");
	
	// Cores variadas de águas-vivas
	const colors = [
		{ body: '#FF6B9D', glow: '#FFB3D9', tentacle: '#FF8FB3' },
		{ body: '#6B9DFF', glow: '#B3D9FF', tentacle: '#8FB3FF' },
		{ body: '#9D6BFF', glow: '#D9B3FF', tentacle: '#B38FFF' },
		{ body: '#6BFFD9', glow: '#B3FFF0', tentacle: '#8FFFE5' },
		{ body: '#FFD96B', glow: '#FFF0B3', tentacle: '#FFE58F' }
	];
	
	const jellyfishColor = colors[Math.floor(Math.random() * colors.length)];
	
	// Criar grupo para animação de pulsação
	const bodyGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
	bodyGroup.setAttribute("class", "jellyfish-pulse");
	
	// Tentáculos longos (8 tentáculos ondulantes)
	for (let i = 0; i < 8; i++) {
		const tentacle = document.createElementNS("http://www.w3.org/2000/svg", "path");
		const startX = 35 + i * 4;
		const wave1X = startX + (i % 2 === 0 ? -3 : 3);
		const wave2X = startX + (i % 2 === 0 ? 2 : -2);
		const wave3X = startX + (i % 2 === 0 ? -4 : 4);
		const endX = startX + (i % 2 === 0 ? 1 : -1);
		const length = 60 + Math.random() * 30;
		
		tentacle.setAttribute("d", `M ${startX},50 Q ${wave1X},${60 + i * 2} ${wave2X},${75 + i * 3} Q ${wave3X},${95 + i * 3} ${endX},${length + 50 + i * 5}`);
		tentacle.setAttribute("stroke", jellyfishColor.tentacle);
		tentacle.setAttribute("stroke-width", "1.5");
		tentacle.setAttribute("fill", "none");
		tentacle.setAttribute("opacity", "0.7");
		tentacle.setAttribute("stroke-linecap", "round");
		
		svg.appendChild(tentacle);
	}
	
	// Corpo principal (campânula)
	const body = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
	body.setAttribute("cx", "50");
	body.setAttribute("cy", "30");
	body.setAttribute("rx", "30");
	body.setAttribute("ry", "25");
	body.setAttribute("fill", jellyfishColor.body);
	body.setAttribute("opacity", "0.8");
	
	bodyGroup.appendChild(body);
	
	// Brilho interno (luminescência)
	const innerGlow = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
	innerGlow.setAttribute("cx", "50");
	innerGlow.setAttribute("cy", "25");
	innerGlow.setAttribute("rx", "20");
	innerGlow.setAttribute("ry", "15");
	innerGlow.setAttribute("fill", jellyfishColor.glow);
	innerGlow.setAttribute("opacity", "0.6");
	
	bodyGroup.appendChild(innerGlow);
	
	// Parte inferior ondulada da campânula
	const bellBottom = document.createElementNS("http://www.w3.org/2000/svg", "path");
	bellBottom.setAttribute("d", "M 20,45 Q 25,52 30,50 Q 35,48 40,50 Q 45,52 50,50 Q 55,48 60,50 Q 65,52 70,50 Q 75,48 80,45");
	bellBottom.setAttribute("stroke", jellyfishColor.body);
	bellBottom.setAttribute("stroke-width", "3");
	bellBottom.setAttribute("fill", "none");
	bellBottom.setAttribute("opacity", "0.9");
	bellBottom.setAttribute("stroke-linecap", "round");
	
	bodyGroup.appendChild(bellBottom);
	
	// Órgãos internos (decorativos)
	for (let i = 0; i < 4; i++) {
		const organ = document.createElementNS("http://www.w3.org/2000/svg", "circle");
		organ.setAttribute("cx", 40 + i * 5);
		organ.setAttribute("cy", 30 + i * 2);
		organ.setAttribute("r", 2 + Math.random() * 2);
		organ.setAttribute("fill", jellyfishColor.glow);
		organ.setAttribute("opacity", "0.5");
		bodyGroup.appendChild(organ);
	}
	
	svg.appendChild(bodyGroup);
	
	return svg;
}

function createJellyfish() {
	const jellyfish = document.createElement('div');
	jellyfish.className = 'fish jellyfish';
	
	// Tamanho variado
	const size = 40 + Math.random() * 40; // 40-80px
	
	// Criar SVG da água-viva
	const jellyfishSVG = createJellyfishSVG(size);
	jellyfish.appendChild(jellyfishSVG);
	
	// Posição vertical aleatória
	jellyfish.style.top = 15 + Math.random() * 70 + '%';
	
	// Direção aleatória
	const isReverse = Math.random() > 0.5;
	if (isReverse) {
		jellyfish.classList.add('reverse');
	}
	
	// Águas-vivas nadam bem devagar
	const duration = 25 + Math.random() * 30; // 25-55 segundos
	jellyfish.style.animationDuration = duration + 's';
	
	// Delay inicial
	jellyfish.style.animationDelay = Math.random() * -20 + 's';
	
	fishContainer.appendChild(jellyfish);
}


// ── MERGULHADOR FAZENDO SNORKELING ───────────────────────────
function createSnorkelerSVG(size) {
	const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	svg.setAttribute("width", size);
	svg.setAttribute("height", size * 0.8);
	svg.setAttribute("viewBox", "0 0 120 96");
	
	const skinColor = '#FDBCB4';
	const swimsuitColor = '#0066CC';
	const finColor = '#FFD700';
	
	// Bolhas saindo do snorkel
	for (let i = 0; i < 3; i++) {
		const bubble = document.createElementNS("http://www.w3.org/2000/svg", "circle");
		bubble.setAttribute("cx", 75 + i * 8);
		bubble.setAttribute("cy", 15 - i * 10);
		bubble.setAttribute("r", 2 + i * 0.5);
		bubble.setAttribute("fill", "none");
		bubble.setAttribute("stroke", "#4FC3F7");
		bubble.setAttribute("stroke-width", "1");
		bubble.setAttribute("opacity", "0.6");
		svg.appendChild(bubble);
	}
	
	// Braço esquerdo estendido (nadando)
	const leftArm = document.createElementNS("http://www.w3.org/2000/svg", "path");
	leftArm.setAttribute("d", "M 50,42 Q 40,38 32,40");
	leftArm.setAttribute("stroke", skinColor);
	leftArm.setAttribute("stroke-width", "6");
	leftArm.setAttribute("fill", "none");
	leftArm.setAttribute("stroke-linecap", "round");
	
	// Mão esquerda
	const leftHand = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
	leftHand.setAttribute("cx", "32");
	leftHand.setAttribute("cy", "40");
	leftHand.setAttribute("rx", "5");
	leftHand.setAttribute("ry", "4");
	leftHand.setAttribute("fill", skinColor);
	leftHand.setAttribute("transform", "rotate(-20 32 40)");
	
	// Perna de nadadeira esquerda
	const leftLeg = document.createElementNS("http://www.w3.org/2000/svg", "path");
	leftLeg.setAttribute("d", "M 68,58 Q 88,62 98,60");
	leftLeg.setAttribute("stroke", skinColor);
	leftLeg.setAttribute("stroke-width", "7");
	leftLeg.setAttribute("fill", "none");
	leftLeg.setAttribute("stroke-linecap", "round");
	
	// Nadadeira esquerda (pé de pato)
	const leftFin = document.createElementNS("http://www.w3.org/2000/svg", "path");
	leftFin.setAttribute("d", "M 98,60 Q 108,59 115,62 Q 118,64 115,67 Q 108,68 98,66 Z");
	leftFin.setAttribute("fill", finColor);
	leftFin.setAttribute("stroke", "#DAA520");
	leftFin.setAttribute("stroke-width", "1.5");
	
	// Corpo (maiô/roupa de banho)
	const body = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
	body.setAttribute("cx", "60");
	body.setAttribute("cy", "48");
	body.setAttribute("rx", "18");
	body.setAttribute("ry", "14");
	body.setAttribute("fill", swimsuitColor);
	body.setAttribute("stroke", "#004C99");
	body.setAttribute("stroke-width", "1");
	
	// Braço direito (para trás)
	const rightArm = document.createElementNS("http://www.w3.org/2000/svg", "path");
	rightArm.setAttribute("d", "M 62,42 Q 70,40 78,42");
	rightArm.setAttribute("stroke", skinColor);
	rightArm.setAttribute("stroke-width", "6");
	rightArm.setAttribute("fill", "none");
	rightArm.setAttribute("stroke-linecap", "round");
	
	// Mão direita
	const rightHand = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
	rightHand.setAttribute("cx", "78");
	rightHand.setAttribute("cy", "42");
	rightHand.setAttribute("rx", "4");
	rightHand.setAttribute("ry", "5");
	rightHand.setAttribute("fill", skinColor);
	rightHand.setAttribute("transform", "rotate(20 78 42)");
	
	// Perna de nadadeira direita
	const rightLeg = document.createElementNS("http://www.w3.org/2000/svg", "path");
	rightLeg.setAttribute("d", "M 65,62 Q 82,68 92,68");
	rightLeg.setAttribute("stroke", skinColor);
	rightLeg.setAttribute("stroke-width", "7");
	rightLeg.setAttribute("fill", "none");
	rightLeg.setAttribute("stroke-linecap", "round");
	
	// Nadadeira direita (pé de pato)
	const rightFin = document.createElementNS("http://www.w3.org/2000/svg", "path");
	rightFin.setAttribute("d", "M 92,68 Q 102,68 109,72 Q 112,74 109,77 Q 102,77 92,74 Z");
	rightFin.setAttribute("fill", finColor);
	rightFin.setAttribute("stroke", "#DAA520");
	rightFin.setAttribute("stroke-width", "1.5");
	
	// Cabeça
	const head = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	head.setAttribute("cx", "55");
	head.setAttribute("cy", "32");
	head.setAttribute("r", "12");
	head.setAttribute("fill", skinColor);
	head.setAttribute("stroke", "#E8A89A");
	head.setAttribute("stroke-width", "1");
	
	// Máscara de mergulho (óculos)
	const mask = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
	mask.setAttribute("cx", "55");
	mask.setAttribute("cy", "32");
	mask.setAttribute("rx", "10");
	mask.setAttribute("ry", "7");
	mask.setAttribute("fill", "rgba(100, 200, 255, 0.3)");
	mask.setAttribute("stroke", "#333");
	mask.setAttribute("stroke-width", "2");
	
	// Lente da máscara (reflexo)
	const maskGlare = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
	maskGlare.setAttribute("cx", "52");
	maskGlare.setAttribute("cy", "30");
	maskGlare.setAttribute("rx", "4");
	maskGlare.setAttribute("ry", "3");
	maskGlare.setAttribute("fill", "white");
	maskGlare.setAttribute("opacity", "0.6");
	
	// Tira da máscara
	const maskStrap = document.createElementNS("http://www.w3.org/2000/svg", "path");
	maskStrap.setAttribute("d", "M 45,32 Q 42,28 42,24");
	maskStrap.setAttribute("stroke", "#333");
	maskStrap.setAttribute("stroke-width", "2");
	maskStrap.setAttribute("fill", "none");
	
	// Snorkel
	const snorkel = document.createElementNS("http://www.w3.org/2000/svg", "path");
	snorkel.setAttribute("d", "M 65,32 L 70,28 L 72,22 L 73,15");
	snorkel.setAttribute("stroke", "#FF6B35");
	snorkel.setAttribute("stroke-width", "3");
	snorkel.setAttribute("fill", "none");
	snorkel.setAttribute("stroke-linecap", "round");
	
	// Ponta do snorkel (acima da água)
	const snorkelTip = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
	snorkelTip.setAttribute("cx", "73");
	snorkelTip.setAttribute("cy", "15");
	snorkelTip.setAttribute("rx", "3");
	snorkelTip.setAttribute("ry", "4");
	snorkelTip.setAttribute("fill", "#FF6B35");
	snorkelTip.setAttribute("stroke", "#CC3700");
	snorkelTip.setAttribute("stroke-width", "1");
	
	// Cabelo
	const hair = document.createElementNS("http://www.w3.org/2000/svg", "path");
	hair.setAttribute("d", "M 48,22 Q 45,18 48,16 Q 52,14 58,14 Q 62,15 64,18 Q 65,22 62,24");
	hair.setAttribute("fill", "#5D4037");
	hair.setAttribute("stroke", "#3E2723");
	hair.setAttribute("stroke-width", "1");
	
	// Adicionar elementos ao SVG na ordem correta
	svg.appendChild(leftArm);
	svg.appendChild(leftHand);
	svg.appendChild(leftLeg);
	svg.appendChild(leftFin);
	svg.appendChild(rightLeg);
	svg.appendChild(rightFin);
	svg.appendChild(body);
	svg.appendChild(rightArm);
	svg.appendChild(rightHand);
	svg.appendChild(hair);
	svg.appendChild(head);
	svg.appendChild(mask);
	svg.appendChild(maskGlare);
	svg.appendChild(maskStrap);
	svg.appendChild(snorkel);
	svg.appendChild(snorkelTip);
	
	return svg;
}

function createSnorkeler() {
	const snorkeler = document.createElement('div');
	snorkeler.className = 'fish snorkeler';
	
	// Tamanho do mergulhador
	const size = 80 + Math.random() * 30; // 80-110px
	
	// Criar SVG do mergulhador
	const snorkelerSVG = createSnorkelerSVG(size);
	snorkeler.appendChild(snorkelerSVG);
	
	// Posição bem perto da superfície (5-15% da altura)
	snorkeler.style.top = 5 + Math.random() * 10 + '%';
	
	// Direção aleatória
	const isReverse = Math.random() > 0.5;
	if (isReverse) {
		snorkeler.classList.add('reverse');
	}
	
	// Mergulhador nada devagar
	const duration = 30 + Math.random() * 20; // 30-50 segundos
	snorkeler.style.animationDuration = duration + 's';
	
	// Delay inicial
	snorkeler.style.animationDelay = Math.random() * -25 + 's';
	
	fishContainer.appendChild(snorkeler);
}





// ── POLVO ───────────────────────────────────────────
function createOctopusSVG(size) {
	const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	svg.setAttribute("width", size);
	svg.setAttribute("height", size * 1.5);
	svg.setAttribute("viewBox", "0 0 200 300");
	
	// Cores realistas de polvos
	const colors = [
		{
			body: '#8B4513', bodyDark: '#654321', bodyMid: '#A0522D', bodyLight: '#CD853F',
			tentacle: '#8B4513', tentacleDark: '#5D2E11', suckers: '#4A2511', suckersRim: '#2E1507',
			eye: '#D4AF37', pupil: '#000000', skinTexture: ['#704214', '#5D3011', '#4A2511']
		},
		{
			body: '#A0522D', bodyDark: '#8B3A1F', bodyMid: '#BC5D3A', bodyLight: '#D2691E',
			tentacle: '#A0522D', tentacleDark: '#7D3518', suckers: '#5D2E11', suckersRim: '#3D1E0B',
			eye: '#DAA520', pupil: '#000000', skinTexture: ['#8D4520', '#7A3518', '#5D2E11']
		},
		{
			body: '#696969', bodyDark: '#4F4F4F', bodyMid: '#7D7D7D', bodyLight: '#A9A9A9',
			tentacle: '#696969', tentacleDark: '#4A4A4A', suckers: '#3C3C3C', suckersRim: '#2A2A2A',
			eye: '#B8860B', pupil: '#000000', skinTexture: ['#5A5A5A', '#4D4D4D', '#3C3C3C']
		},
		{
			body: '#8B7355', bodyDark: '#6B5D4F', bodyMid: '#A08770', bodyLight: '#C4A787',
			tentacle: '#8B7355', tentacleDark: '#5D4A38', suckers: '#4A3C2F', suckersRim: '#2E2419',
			eye: '#CD853F', pupil: '#000000', skinTexture: ['#746049', '#5D4A38', '#4A3C2F']
		},
		{
			body: '#6B4423', bodyDark: '#4E2F1A', bodyMid: '#855833', bodyLight: '#A0714D',
			tentacle: '#6B4423', tentacleDark: '#3F2515', suckers: '#321C0F', suckersRim: '#1F1109',
			eye: '#D4A574', pupil: '#000000', skinTexture: ['#5A3820', '#4E2F1A', '#321C0F']
		}
	];
	
	const colorScheme = colors[Math.floor(Math.random() * colors.length)];
	
	const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
	
	const bodyGradient = document.createElementNS("http://www.w3.org/2000/svg", "radialGradient");
	bodyGradient.setAttribute("id", "octBodyGrad" + Math.random().toString(36).substr(2, 9));
	bodyGradient.setAttribute("cx", "45%");
	bodyGradient.setAttribute("cy", "35%");
	bodyGradient.innerHTML = `
		<stop offset="0%" style="stop-color:${colorScheme.bodyLight};stop-opacity:1" />
		<stop offset="40%" style="stop-color:${colorScheme.bodyMid};stop-opacity:1" />
		<stop offset="70%" style="stop-color:${colorScheme.body};stop-opacity:1" />
		<stop offset="100%" style="stop-color:${colorScheme.bodyDark};stop-opacity:1" />
	`;
	defs.appendChild(bodyGradient);
	
	const tentacleGradient = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
	tentacleGradient.setAttribute("id", "octTentGrad" + Math.random().toString(36).substr(2, 9));
	tentacleGradient.setAttribute("x1", "0%");
	tentacleGradient.setAttribute("y1", "0%");
	tentacleGradient.setAttribute("x2", "0%");
	tentacleGradient.setAttribute("y2", "100%");
	tentacleGradient.innerHTML = `
		<stop offset="0%" style="stop-color:${colorScheme.tentacle};stop-opacity:1" />
		<stop offset="60%" style="stop-color:${colorScheme.tentacleDark};stop-opacity:1" />
		<stop offset="100%" style="stop-color:${colorScheme.tentacleDark};stop-opacity:0.8" />
	`;
	defs.appendChild(tentacleGradient);
	
	svg.appendChild(defs);
	
	const shadow = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
	shadow.setAttribute("cx", "100");
	shadow.setAttribute("cy", "85");
	shadow.setAttribute("rx", "55");
	shadow.setAttribute("ry", "38");
	shadow.setAttribute("fill", "rgba(0, 0, 0, 0.3)");
	shadow.setAttribute("filter", "blur(6px)");
	svg.appendChild(shadow);
	
	const tentacles = [
		// Tentáculo 1 - ERGUIDO para cima-esquerda (levantado alto)
		{ 
			path: "M 60,95 Q 50,80 42,65 Q 38,55 35,45 Q 33,35 32,25 Q 31,18 30,10", 
			width: 13, 
			sideOffset: -4 
		},
		// Tentáculo 2 - ERGUIDO para cima-direita (levantado alto)
		{ 
			path: "M 140,95 Q 150,80 158,65 Q 162,55 165,45 Q 167,35 168,25 Q 169,18 170,10", 
			width: 13, 
			sideOffset: 4 
		},
		// Tentáculo 3 - ERGUIDO curvado para cima e depois esquerda
		{ 
			path: "M 68,98 Q 60,85 55,70 Q 50,58 48,45 Q 45,35 42,25 Q 40,18 38,12", 
			width: 14, 
			sideOffset: -3.5 
		},
		// Tentáculo 4 - curvado lateral direita (meio termo)
		{ 
			path: "M 132,98 Q 145,115 155,140 Q 162,165 168,195 Q 172,220 176,245 Q 178,265 180,285", 
			width: 14, 
			sideOffset: 3.5 
		},
		// Tentáculo 5 - ondulado caindo esquerda
		{ 
			path: "M 78,100 Q 68,125 60,155 Q 54,180 50,210 Q 47,235 44,260 Q 42,278 40,293", 
			width: 15, 
			sideOffset: -3 
		},
		// Tentáculo 6 - ERGUIDO para cima com curva suave direita
		{ 
			path: "M 122,100 Q 128,85 132,68 Q 135,55 138,42 Q 140,30 142,20 Q 143,15 144,10", 
			width: 15, 
			sideOffset: 3 
		},
		// Tentáculo 7 - caindo reto para baixo esquerda
		{ 
			path: "M 88,102 Q 82,135 76,170 Q 72,200 68,230 Q 66,255 64,280 Q 63,288 62,296", 
			width: 16, 
			sideOffset: -2 
		},
		// Tentáculo 8 - caindo reto para baixo direita
		{ 
			path: "M 112,102 Q 118,135 124,170 Q 128,200 132,230 Q 134,255 136,280 Q 137,288 138,296", 
			width: 16, 
			sideOffset: 2 
		}
	];
	
	tentacles.forEach((tentacle) => {
		const tentShadow = document.createElementNS("http://www.w3.org/2000/svg", "path");
		tentShadow.setAttribute("d", tentacle.path);
		tentShadow.setAttribute("stroke", "rgba(0, 0, 0, 0.4)");
		tentShadow.setAttribute("stroke-width", tentacle.width + 4);
		tentShadow.setAttribute("fill", "none");
		tentShadow.setAttribute("stroke-linecap", "round");
		tentShadow.setAttribute("opacity", "0.5");
		tentShadow.setAttribute("transform", "translate(4, 4)");
		svg.appendChild(tentShadow);
		
		const tentBase = document.createElementNS("http://www.w3.org/2000/svg", "path");
		tentBase.setAttribute("d", tentacle.path);
		tentBase.setAttribute("stroke", colorScheme.tentacleDark);
		tentBase.setAttribute("stroke-width", tentacle.width + 2);
		tentBase.setAttribute("fill", "none");
		tentBase.setAttribute("stroke-linecap", "round");
		tentBase.setAttribute("opacity", "0.8");
		svg.appendChild(tentBase);
		
		const tentPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
		tentPath.setAttribute("d", tentacle.path);
		tentPath.setAttribute("stroke", `url(#${tentacleGradient.id})`);
		tentPath.setAttribute("stroke-width", tentacle.width);
		tentPath.setAttribute("fill", "none");
		tentPath.setAttribute("stroke-linecap", "round");
		svg.appendChild(tentPath);
		
		const tentHighlight = document.createElementNS("http://www.w3.org/2000/svg", "path");
		tentHighlight.setAttribute("d", tentacle.path);
		tentHighlight.setAttribute("stroke", colorScheme.bodyLight);
		tentHighlight.setAttribute("stroke-width", tentacle.width * 0.3);
		tentHighlight.setAttribute("fill", "none");
		tentHighlight.setAttribute("stroke-linecap", "round");
		tentHighlight.setAttribute("opacity", "0.5");
		tentHighlight.setAttribute("transform", `translate(${tentacle.sideOffset}, -2)`);
		svg.appendChild(tentHighlight);
		
		const numSuckers = 16 + Math.floor(Math.random() * 5);
		const points = tentacle.path.match(/[\d.]+/g).map(Number);
		
		for (let i = 0; i < numSuckers; i++) {
			const t = (i + 0.5) / numSuckers;
			const segments = Math.floor(points.length / 2) - 1;
			const segment = Math.min(Math.floor(t * segments), segments - 1);
			const localT = (t * segments) - segment;
			
			const x = points[segment * 2] + (points[(segment + 1) * 2] - points[segment * 2]) * localT;
			const y = points[segment * 2 + 1] + (points[(segment + 1) * 2 + 1] - points[segment * 2 + 1]) * localT;
			
			const sizeFactor = Math.sin(t * Math.PI) * (1 - t * 0.4);
			const suckerSize = (tentacle.width * 0.45) * sizeFactor;
			
			if (suckerSize > 1) {
				const suckerShadow = document.createElementNS("http://www.w3.org/2000/svg", "circle");
				suckerShadow.setAttribute("cx", x + 1);
				suckerShadow.setAttribute("cy", y + 1);
				suckerShadow.setAttribute("r", suckerSize + 1);
				suckerShadow.setAttribute("fill", "rgba(0, 0, 0, 0.4)");
				svg.appendChild(suckerShadow);
				
				const suckerOuter = document.createElementNS("http://www.w3.org/2000/svg", "circle");
				suckerOuter.setAttribute("cx", x);
				suckerOuter.setAttribute("cy", y);
				suckerOuter.setAttribute("r", suckerSize);
				suckerOuter.setAttribute("fill", colorScheme.suckers);
				svg.appendChild(suckerOuter);
				
				const suckerMid = document.createElementNS("http://www.w3.org/2000/svg", "circle");
				suckerMid.setAttribute("cx", x);
				suckerMid.setAttribute("cy", y);
				suckerMid.setAttribute("r", suckerSize * 0.75);
				suckerMid.setAttribute("fill", colorScheme.suckersRim);
				svg.appendChild(suckerMid);
				
				const suckerRing = document.createElementNS("http://www.w3.org/2000/svg", "circle");
				suckerRing.setAttribute("cx", x);
				suckerRing.setAttribute("cy", y);
				suckerRing.setAttribute("r", suckerSize * 0.55);
				suckerRing.setAttribute("fill", "none");
				suckerRing.setAttribute("stroke", "rgba(0, 0, 0, 0.5)");
				suckerRing.setAttribute("stroke-width", suckerSize * 0.15);
				svg.appendChild(suckerRing);
				
				const suckerCenter = document.createElementNS("http://www.w3.org/2000/svg", "circle");
				suckerCenter.setAttribute("cx", x);
				suckerCenter.setAttribute("cy", y);
				suckerCenter.setAttribute("r", suckerSize * 0.35);
				suckerCenter.setAttribute("fill", "rgba(0, 0, 0, 0.7)");
				svg.appendChild(suckerCenter);
				
				const suckerShine = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
				suckerShine.setAttribute("cx", x - suckerSize * 0.3);
				suckerShine.setAttribute("cy", y - suckerSize * 0.3);
				suckerShine.setAttribute("rx", suckerSize * 0.25);
				suckerShine.setAttribute("ry", suckerSize * 0.2);
				suckerShine.setAttribute("fill", "rgba(255, 255, 255, 0.4)");
				svg.appendChild(suckerShine);
			}
		}
	});
	
	const mantleShape = document.createElementNS("http://www.w3.org/2000/svg", "path");
	mantleShape.setAttribute("d", "M 100,25 Q 75,26 58,38 Q 45,50 42,68 Q 40,82 42,92 L 158,92 Q 160,82 158,68 Q 155,50 142,38 Q 125,26 100,25 Z");
	mantleShape.setAttribute("fill", `url(#${bodyGradient.id})`);
	mantleShape.setAttribute("stroke", colorScheme.bodyDark);
	mantleShape.setAttribute("stroke-width", "3");
	svg.appendChild(mantleShape);
	
	const numChromatophores = 60 + Math.floor(Math.random() * 30);
	for (let i = 0; i < numChromatophores; i++) {
		const angle = Math.random() * Math.PI * 2;
		const distance = Math.random() * 50;
		const chromX = 100 + Math.cos(angle) * distance;
		const chromY = 60 + Math.sin(angle) * distance * 0.65;
		
		if (chromY < 92 && chromY > 30 && chromX > 45 && chromX < 155) {
			const chromSize = 0.5 + Math.random() * 2;
			const chromatophore = document.createElementNS("http://www.w3.org/2000/svg", "circle");
			chromatophore.setAttribute("cx", chromX);
			chromatophore.setAttribute("cy", chromY);
			chromatophore.setAttribute("r", chromSize);
			chromatophore.setAttribute("fill", colorScheme.skinTexture[i % colorScheme.skinTexture.length]);
			chromatophore.setAttribute("opacity", 0.25 + Math.random() * 0.5);
			svg.appendChild(chromatophore);
		}
	}
	
	for (let i = 0; i < 18; i++) {
		const angle = (i / 18) * Math.PI * 2 + Math.random() * 0.5;
		const distance = 15 + Math.random() * 30;
		const patchX = 100 + Math.cos(angle) * distance;
		const patchY = 60 + Math.sin(angle) * distance * 0.65;
		
		if (patchY < 88 && patchY > 35) {
			const patch = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
			patch.setAttribute("cx", patchX);
			patch.setAttribute("cy", patchY);
			patch.setAttribute("rx", 2 + Math.random() * 5);
			patch.setAttribute("ry", 1.5 + Math.random() * 4);
			patch.setAttribute("fill", colorScheme.bodyDark);
			patch.setAttribute("opacity", 0.3 + Math.random() * 0.3);
			patch.setAttribute("transform", `rotate(${Math.random() * 360} ${patchX} ${patchY})`);
			svg.appendChild(patch);
		}
	}
	
	for (let i = 0; i < 12; i++) {
		const startAngle = (i / 12) * Math.PI * 2;
		const startDist = 20 + Math.random() * 15;
		const startX = 100 + Math.cos(startAngle) * startDist;
		const startY = 60 + Math.sin(startAngle) * startDist * 0.65;
		
		const endAngle = startAngle + (Math.random() - 0.5) * 0.8;
		const endDist = startDist + 8 + Math.random() * 10;
		const endX = 100 + Math.cos(endAngle) * endDist;
		const endY = 60 + Math.sin(endAngle) * endDist * 0.65;
		
		const wrinkle = document.createElementNS("http://www.w3.org/2000/svg", "line");
		wrinkle.setAttribute("x1", startX);
		wrinkle.setAttribute("y1", startY);
		wrinkle.setAttribute("x2", endX);
		wrinkle.setAttribute("y2", endY);
		wrinkle.setAttribute("stroke", colorScheme.bodyDark);
		wrinkle.setAttribute("stroke-width", "0.8");
		wrinkle.setAttribute("opacity", "0.3");
		wrinkle.setAttribute("stroke-linecap", "round");
		svg.appendChild(wrinkle);
	}
	
	const eyePositions = [
		{ cx: 78, cy: 58 },
		{ cx: 122, cy: 58 }
	];
	
	eyePositions.forEach(pos => {
		const eyeBulge = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
		eyeBulge.setAttribute("cx", pos.cx);
		eyeBulge.setAttribute("cy", pos.cy);
		eyeBulge.setAttribute("rx", "14");
		eyeBulge.setAttribute("ry", "15");
		eyeBulge.setAttribute("fill", colorScheme.bodyMid);
		eyeBulge.setAttribute("stroke", colorScheme.bodyDark);
		eyeBulge.setAttribute("stroke-width", "2");
		svg.appendChild(eyeBulge);
		
		const eyeOrbit = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
		eyeOrbit.setAttribute("cx", pos.cx);
		eyeOrbit.setAttribute("cy", pos.cy);
		eyeOrbit.setAttribute("rx", "11.5");
		eyeOrbit.setAttribute("ry", "12.5");
		eyeOrbit.setAttribute("fill", colorScheme.bodyDark);
		svg.appendChild(eyeOrbit);
		
		const iris = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
		iris.setAttribute("cx", pos.cx);
		iris.setAttribute("cy", pos.cy);
		iris.setAttribute("rx", "9");
		iris.setAttribute("ry", "10");
		iris.setAttribute("fill", colorScheme.eye);
		svg.appendChild(iris);
		
		for (let i = 0; i < 12; i++) {
			const angle = (i / 12) * Math.PI * 2;
			const lineEnd = 7;
			const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
			line.setAttribute("x1", pos.cx);
			line.setAttribute("y1", pos.cy);
			line.setAttribute("x2", pos.cx + Math.cos(angle) * lineEnd);
			line.setAttribute("y2", pos.cy + Math.sin(angle) * lineEnd);
			line.setAttribute("stroke", colorScheme.bodyDark);
			line.setAttribute("stroke-width", "0.6");
			line.setAttribute("opacity", "0.4");
			svg.appendChild(line);
		}
		
		const pupilPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
		pupilPath.setAttribute("d", `M ${pos.cx - 5},${pos.cy} L ${pos.cx - 2.5},${pos.cy + 2} L ${pos.cx},${pos.cy - 0.5} L ${pos.cx + 2.5},${pos.cy + 2} L ${pos.cx + 5},${pos.cy} L ${pos.cx + 2.5},${pos.cy} L ${pos.cx},${pos.cy + 1.5} L ${pos.cx - 2.5},${pos.cy} Z`);
		pupilPath.setAttribute("fill", colorScheme.pupil);
		svg.appendChild(pupilPath);
		
		const reflection1 = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
		reflection1.setAttribute("cx", pos.cx - 3);
		reflection1.setAttribute("cy", pos.cy - 3);
		reflection1.setAttribute("rx", "3");
		reflection1.setAttribute("ry", "3.5");
		reflection1.setAttribute("fill", "rgba(255, 255, 255, 0.7)");
		svg.appendChild(reflection1);
		
		const reflection2 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
		reflection2.setAttribute("cx", pos.cx + 3);
		reflection2.setAttribute("cy", pos.cy + 2);
		reflection2.setAttribute("r", "1.5");
		reflection2.setAttribute("fill", "rgba(255, 255, 255, 0.5)");
		svg.appendChild(reflection2);
	});
	
	const siphonBase = document.createElementNS("http://www.w3.org/2000/svg", "path");
	siphonBase.setAttribute("d", "M 90,92 Q 88,98 88,105 L 112,105 Q 112,98 110,92");
	siphonBase.setAttribute("fill", colorScheme.bodyDark);
	siphonBase.setAttribute("stroke", colorScheme.tentacleDark);
	siphonBase.setAttribute("stroke-width", "2");
	svg.appendChild(siphonBase);
	
	const siphonMuscle = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
	siphonMuscle.setAttribute("cx", "100");
	siphonMuscle.setAttribute("cy", "98");
	siphonMuscle.setAttribute("rx", "10");
	siphonMuscle.setAttribute("ry", "6");
	siphonMuscle.setAttribute("fill", colorScheme.bodyMid);
	siphonMuscle.setAttribute("opacity", "0.7");
	svg.appendChild(siphonMuscle);
	
	const siphonOpening = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
	siphonOpening.setAttribute("cx", "100");
	siphonOpening.setAttribute("cy", "105");
	siphonOpening.setAttribute("rx", "8");
	siphonOpening.setAttribute("ry", "4");
	siphonOpening.setAttribute("fill", "rgba(0, 0, 0, 0.6)");
	svg.appendChild(siphonOpening);
	
	const siphonInner = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
	siphonInner.setAttribute("cx", "100");
	siphonInner.setAttribute("cy", "105");
	siphonInner.setAttribute("rx", "5");
	siphonInner.setAttribute("ry", "2.5");
	siphonInner.setAttribute("fill", "rgba(0, 0, 0, 0.8)");
	svg.appendChild(siphonInner);
	
	return svg;
}

function createOctopus() {
	const octopus = document.createElement('div');
	octopus.className = 'fish octopus';
	
	const size = 70 + Math.random() * 40; // 70-110px (menor que antes: 110-170px)
	const octopusSVG = createOctopusSVG(size);
	octopus.appendChild(octopusSVG);
	
	octopus.style.top = 40 + Math.random() * 45 + '%';
	
	const isReverse = Math.random() > 0.5;
	if (isReverse) {
		octopus.classList.add('reverse');
	}
	
	const duration = 25 + Math.random() * 25;
	octopus.style.animationDuration = duration + 's';
	octopus.style.animationDelay = Math.random() * -35 + 's';
	
	fishContainer.appendChild(octopus);
}


// ── FOCA ─────────────────────────────────────────────────────
function createSealSVG(size) {
	const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	svg.setAttribute("width", size);
	svg.setAttribute("height", size * 0.55);
	svg.setAttribute("viewBox", "0 0 160 88");

	// Cor da foca
	const bodyColor = "#6B7B8D";
	const bellyColor = "#C4BFB0";
	const darkAccent = "#4A5568";
	const noseColor = "#2D3748";

	// ── CORPO PRINCIPAL (vista lateral, nadando na superfície) ──
	// Corpo fusiforme alongado
	const body = document.createElementNS("http://www.w3.org/2000/svg", "path");
	body.setAttribute("d", "M 25,44 Q 30,30 55,26 Q 80,22 105,26 Q 125,29 135,38 Q 140,44 135,50 Q 125,58 105,60 Q 80,64 55,60 Q 30,56 25,44 Z");
	body.setAttribute("fill", bodyColor);
	body.setAttribute("stroke", darkAccent);
	body.setAttribute("stroke-width", "1");
	svg.appendChild(body);

	// Barriga mais clara
	const belly = document.createElementNS("http://www.w3.org/2000/svg", "path");
	belly.setAttribute("d", "M 35,44 Q 45,52 70,56 Q 100,60 125,52 Q 115,56 90,57 Q 60,56 40,50 Z");
	belly.setAttribute("fill", bellyColor);
	belly.setAttribute("opacity", "0.75");
	svg.appendChild(belly);

	// Gradiente/sombra dorsal
	const dorsalShade = document.createElementNS("http://www.w3.org/2000/svg", "path");
	dorsalShade.setAttribute("d", "M 40,28 Q 80,20 120,30 Q 105,24 80,23 Q 55,23 40,28 Z");
	dorsalShade.setAttribute("fill", darkAccent);
	dorsalShade.setAttribute("opacity", "0.3");
	svg.appendChild(dorsalShade);

	// ── CAUDA (nadadeira caudal, saindo da água) ──
	const tailLeft = document.createElementNS("http://www.w3.org/2000/svg", "path");
	tailLeft.setAttribute("d", "M 25,44 Q 10,38 5,28 Q 8,32 14,36 Q 8,40 10,50 Q 14,46 25,44 Z");
	tailLeft.setAttribute("fill", bodyColor);
	tailLeft.setAttribute("stroke", darkAccent);
	tailLeft.setAttribute("stroke-width", "1");
	svg.appendChild(tailLeft);

	const tailRight = document.createElementNS("http://www.w3.org/2000/svg", "path");
	tailRight.setAttribute("d", "M 25,44 Q 10,50 6,62 Q 10,56 16,52 Q 10,60 14,68 Q 20,60 25,44 Z");
	tailRight.setAttribute("fill", bodyColor);
	tailRight.setAttribute("stroke", darkAccent);
	tailRight.setAttribute("stroke-width", "1");
	svg.appendChild(tailRight);

	// Nadadeira caudal central
	const tailCenter = document.createElementNS("http://www.w3.org/2000/svg", "path");
	tailCenter.setAttribute("d", "M 25,44 L 8,36 Q 6,44 8,52 Z");
	tailCenter.setAttribute("fill", darkAccent);
	tailCenter.setAttribute("opacity", "0.4");
	svg.appendChild(tailCenter);

	// ── NADADEIRAS PEITORAIS ──
	// Nadadeira dianteira (visível)
	const frontFlipper = document.createElementNS("http://www.w3.org/2000/svg", "path");
	frontFlipper.setAttribute("d", "M 110,42 Q 118,48 130,58 Q 120,56 112,50 Q 125,60 120,66 Q 112,58 108,50 Q 105,58 100,62 Q 100,52 105,44 Z");
	frontFlipper.setAttribute("fill", bodyColor);
	frontFlipper.setAttribute("stroke", darkAccent);
	frontFlipper.setAttribute("stroke-width", "0.8");
	svg.appendChild(frontFlipper);

	// Detalhes da nadadeira
	const flipperLine1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
	flipperLine1.setAttribute("d", "M 112,46 Q 118,54 122,62");
	flipperLine1.setAttribute("stroke", darkAccent);
	flipperLine1.setAttribute("stroke-width", "0.7");
	flipperLine1.setAttribute("fill", "none");
	flipperLine1.setAttribute("opacity", "0.4");
	svg.appendChild(flipperLine1);

	const flipperLine2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
	flipperLine2.setAttribute("d", "M 107,47 Q 110,56 108,62");
	flipperLine2.setAttribute("stroke", darkAccent);
	flipperLine2.setAttribute("stroke-width", "0.7");
	flipperLine2.setAttribute("fill", "none");
	flipperLine2.setAttribute("opacity", "0.4");
	svg.appendChild(flipperLine2);

	// ── CABEÇA ──
	// Pescoço/transição para cabeça
	const neck = document.createElementNS("http://www.w3.org/2000/svg", "path");
	neck.setAttribute("d", "M 128,30 Q 135,28 142,32 Q 140,36 135,38 Q 130,38 128,35 Z");
	neck.setAttribute("fill", bodyColor);
	neck.setAttribute("stroke", darkAccent);
	neck.setAttribute("stroke-width", "0.8");
	svg.appendChild(neck);

	// Cabeça principal (formato arredondado característico de foca)
	const head = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
	head.setAttribute("cx", "148");
	head.setAttribute("cy", "34");
	head.setAttribute("rx", "13");
	head.setAttribute("ry", "11");
	head.setAttribute("fill", bodyColor);
	head.setAttribute("stroke", darkAccent);
	head.setAttribute("stroke-width", "1");
	svg.appendChild(head);

	// Focinho/muzzle
	const muzzle = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
	muzzle.setAttribute("cx", "159");
	muzzle.setAttribute("cy", "36");
	muzzle.setAttribute("rx", "5");
	muzzle.setAttribute("ry", "4");
	muzzle.setAttribute("fill", bellyColor);
	muzzle.setAttribute("opacity", "0.8");
	svg.appendChild(muzzle);

	// Narinas
	const nostrilLeft = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
	nostrilLeft.setAttribute("cx", "162");
	nostrilLeft.setAttribute("cy", "34.5");
	nostrilLeft.setAttribute("rx", "1.2");
	nostrilLeft.setAttribute("ry", "0.8");
	nostrilLeft.setAttribute("fill", noseColor);
	svg.appendChild(nostrilLeft);

	const nostrilRight = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
	nostrilRight.setAttribute("cx", "162");
	nostrilRight.setAttribute("cy", "36.5");
	nostrilRight.setAttribute("rx", "1.2");
	nostrilRight.setAttribute("ry", "0.8");
	nostrilRight.setAttribute("fill", noseColor);
	svg.appendChild(nostrilRight);

	// Bigodes (vibrissas) — característica marcante das focas
	const whiskerData = [
		{ x1: 159, y1: 35, x2: 155, y2: 33, x3: 151, y3: 32 },
		{ x1: 159, y1: 36, x2: 155, y2: 36, x3: 150, y3: 36 },
		{ x1: 159, y1: 37, x2: 155, y2: 38, x3: 151, y3: 39 },
	];
	whiskerData.forEach(w => {
		const whisker = document.createElementNS("http://www.w3.org/2000/svg", "path");
		whisker.setAttribute("d", `M ${w.x1},${w.y1} Q ${w.x2},${w.y2} ${w.x3},${w.y3}`);
		whisker.setAttribute("stroke", "rgba(255,255,255,0.7)");
		whisker.setAttribute("stroke-width", "0.9");
		whisker.setAttribute("fill", "none");
		whisker.setAttribute("stroke-linecap", "round");
		svg.appendChild(whisker);
	});

	// Olho grande e expressivo
	const eyeWhiteBg = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	eyeWhiteBg.setAttribute("cx", "148");
	eyeWhiteBg.setAttribute("cy", "30");
	eyeWhiteBg.setAttribute("r", "4.5");
	eyeWhiteBg.setAttribute("fill", "white");
	svg.appendChild(eyeWhiteBg);

	const eyeIris = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	eyeIris.setAttribute("cx", "148");
	eyeIris.setAttribute("cy", "30");
	eyeIris.setAttribute("r", "3.5");
	eyeIris.setAttribute("fill", "#3D2B1F");
	svg.appendChild(eyeIris);

	const eyePupil = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	eyePupil.setAttribute("cx", "148");
	eyePupil.setAttribute("cy", "30");
	eyePupil.setAttribute("r", "2");
	eyePupil.setAttribute("fill", "#0D0D0D");
	svg.appendChild(eyePupil);

	// Reflexo no olho
	const eyeReflect = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
	eyeReflect.setAttribute("cx", "146.5");
	eyeReflect.setAttribute("cy", "28.5");
	eyeReflect.setAttribute("rx", "1.2");
	eyeReflect.setAttribute("ry", "1.5");
	eyeReflect.setAttribute("fill", "rgba(255,255,255,0.8)");
	svg.appendChild(eyeReflect);

	// Boca sorridente (focas têm expressão naturalmente simpática)
	const mouth = document.createElementNS("http://www.w3.org/2000/svg", "path");
	mouth.setAttribute("d", "M 157,38 Q 159,40 161,38");
	mouth.setAttribute("stroke", darkAccent);
	mouth.setAttribute("stroke-width", "1");
	mouth.setAttribute("fill", "none");
	mouth.setAttribute("stroke-linecap", "round");
	svg.appendChild(mouth);

	// Orelha externa (pinnipeds têm pequena abertura auricular)
	const earHole = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
	earHole.setAttribute("cx", "140");
	earHole.setAttribute("cy", "27");
	earHole.setAttribute("rx", "2");
	earHole.setAttribute("ry", "1.5");
	earHole.setAttribute("fill", darkAccent);
	earHole.setAttribute("opacity", "0.6");
	svg.appendChild(earHole);

	// ── ONDAS DE SUPERFÍCIE ──
	// A foca está na superfície, então adicionamos ondas ao redor do corpo
	const wave1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
	wave1.setAttribute("d", "M 20,44 Q 30,40 40,44 Q 50,48 60,44 Q 70,40 80,44 Q 90,48 100,44 Q 110,40 120,44 Q 130,48 140,44");
	wave1.setAttribute("stroke", "rgba(100,180,220,0.5)");
	wave1.setAttribute("stroke-width", "1.5");
	wave1.setAttribute("fill", "none");
	wave1.setAttribute("stroke-linecap", "round");
	svg.appendChild(wave1);

	const wave2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
	wave2.setAttribute("d", "M 15,47 Q 28,43 38,47 Q 50,51 62,47 Q 74,43 84,47 Q 96,51 108,47 Q 120,43 132,47");
	wave2.setAttribute("stroke", "rgba(100,180,220,0.3)");
	wave2.setAttribute("stroke-width", "1");
	wave2.setAttribute("fill", "none");
	wave2.setAttribute("stroke-linecap", "round");
	svg.appendChild(wave2);

	// Espirros/splashes ao redor do corpo (efeito de estar nadando)
	const splashPositions = [
		{ x: 45, y: 27, r: 180 },
		{ x: 90, y: 22, r: 160 },
		{ x: 130, y: 26, r: 200 },
	];
	splashPositions.forEach(s => {
		const splash = document.createElementNS("http://www.w3.org/2000/svg", "path");
		splash.setAttribute("d", `M ${s.x},${s.y} Q ${s.x - 3},${s.y - 4} ${s.x + 1},${s.y - 6}`);
		splash.setAttribute("stroke", "rgba(150,210,240,0.55)");
		splash.setAttribute("stroke-width", "1.2");
		splash.setAttribute("fill", "none");
		splash.setAttribute("stroke-linecap", "round");
		svg.appendChild(splash);
	});

	// Animação de balanço suave (como foca se mexendo na água)
	const animateBody = document.createElementNS("http://www.w3.org/2000/svg", "animateTransform");
	animateBody.setAttribute("attributeName", "transform");
	animateBody.setAttribute("type", "rotate");
	animateBody.setAttribute("values", "0 80 44; 2 80 44; 0 80 44; -2 80 44; 0 80 44");
	animateBody.setAttribute("dur", "3s");
	animateBody.setAttribute("repeatCount", "indefinite");
	svg.appendChild(animateBody);

	return svg;
}

function createSeal() {
	const seal = document.createElement('div');
	seal.className = 'fish seal';

	const size = 110 + Math.random() * 30; // 110-140px
	const sealSVG = createSealSVG(size);
	seal.appendChild(sealSVG);

	// Foca nada na superfície: top bem pequeno (5-12%)
	seal.style.top = 5 + Math.random() * 7 + '%';

	const isReverse = Math.random() > 0.5;
	if (isReverse) {
		seal.classList.add('reverse');
	}

	// Velocidade moderada, como foca nadando tranquilamente
	const duration = 20 + Math.random() * 15;
	seal.style.animationDuration = duration + 's';
	seal.style.animationDelay = Math.random() * -20 + 's';

	fishContainer.appendChild(seal);
}


// ── ARRAIA-MANTA ──────────────────────────────────────────────
function createRaySVG(size) {
	const ns  = "http://www.w3.org/2000/svg";
	const svg = document.createElementNS(ns, "svg");
	svg.setAttribute("width",   size);
	svg.setAttribute("height",  size * 0.78);
	svg.setAttribute("viewBox", "0 0 300 234");

	const el  = (tag)         => document.createElementNS(ns, tag);
	const set = (node, attrs) => { Object.entries(attrs).forEach(([k,v]) => node.setAttribute(k,v)); return node; };
	const ap  = (node)        => { svg.appendChild(node); return node; };

	// Paleta
	const bodyBase   = "#8A7060";
	const bodyDark   = "#5A4838";
	const bodyMid    = "#A08870";
	const bodyLight  = "#C0A888";
	const edgeColor  = "#3A2C20";
	const spotDark   = "#4A3828";
	const spotLight  = "#C8B090";
	const tailBase   = "#6A5848";
	const spineColor = "#8A8070";
	const eyeColor   = "#2A1C10";

	// ── CAUDA — agora à ESQUERDA (x pequeno) ──
	ap(set(el("path"), {
		d: "M 80,117 Q 58,116 42,114 Q 28,112 18,110 Q 8,108 2,107 Q 8,109 18,112 Q 28,115 42,117 Q 58,119 80,119 Z",
		fill: tailBase, stroke: edgeColor, "stroke-width": "0.8"
	}));
	// Espinhos na cauda
	for (let i = 0; i < 8; i++) {
		const x = 72 - i * 9;
		const y = 114 - i * 0.4;
		ap(set(el("path"), {
			d: `M ${x},${y} L ${x+1},${y-5} L ${x+3},${y}`,
			fill: spineColor, stroke: edgeColor, "stroke-width": "0.5"
		}));
	}
	// Ponta da cauda
	ap(set(el("path"), {
		d: "M 15,110 Q 6,108 0,108 Q 6,110 15,112 Z",
		fill: bodyDark
	}));

	// ── CORPO losango — cabeça à DIREITA (x alto) ──
	// Vértices: Frente=(250,117), Topo=(145,22), Traseira=(80,117), Base=(145,212)

	// Sombra
	ap(set(el("path"), {
		d: "M 248,120 Q 210,62 142,24 Q 90,2 78,120 Q 90,214 142,212 Q 210,176 248,120 Z",
		fill: edgeColor, opacity: "0.25"
	}));

	// Corpo base
	ap(set(el("path"), {
		d: "M 250,117 Q 238,74 200,46 Q 170,24 142,18 Q 114,12 90,38 Q 74,58 78,92 Q 80,107 80,117 Q 80,130 82,148 Q 90,178 114,198 Q 132,212 148,214 Q 172,216 198,200 Q 228,180 244,150 Q 256,132 250,117 Z",
		fill: bodyMid, stroke: edgeColor, "stroke-width": "2"
	}));

	// Zona escura dorso
	ap(set(el("path"), {
		d: "M 230,100 Q 205,60 150,36 Q 105,18 85,55 Q 78,80 82,110 Q 105,50 142,40 Q 190,38 230,100 Z",
		fill: bodyDark, opacity: "0.45"
	}));

	// Bordas rosadas
	ap(set(el("path"), {
		d: "M 250,117 Q 245,90 230,68 Q 242,86 248,110 Z",
		fill: "#9A7878", opacity: "0.6"
	}));
	ap(set(el("path"), {
		d: "M 250,117 Q 245,144 230,166 Q 242,148 248,124 Z",
		fill: "#9A7878", opacity: "0.5"
	}));
	ap(set(el("path"), {
		d: "M 200,46 Q 170,24 142,18 Q 160,24 186,40 Q 200,50 214,66 Z",
		fill: "#A08878", opacity: "0.5"
	}));

	// Brilho central
	ap(set(el("ellipse"), {
		cx: "148", cy: "105", rx: "55", ry: "42",
		fill: bodyLight, opacity: "0.3"
	}));

	// ── TEXTURA de manchas ──
	const spots = [
		{cx:195,cy:65,rx:4,ry:3},{cx:175,cy:52,rx:3,ry:2.5},{cx:152,cy:44,rx:4,ry:3},
		{cx:130,cy:48,rx:3,ry:2.5},{cx:108,cy:60,rx:3,ry:2.5},{cx:95,cy:78,rx:4,ry:3},
		{cx:90,cy:98,rx:3,ry:2.5},{cx:100,cy:118,rx:3,ry:2},{cx:105,cy:138,rx:4,ry:3},
		{cx:115,cy:158,rx:3,ry:2.5},{cx:130,cy:175,rx:4,ry:3},{cx:150,cy:185,rx:3,ry:2},
		{cx:170,cy:180,rx:4,ry:3},{cx:190,cy:168,rx:3,ry:2.5},{cx:208,cy:152,rx:4,ry:3},
		{cx:224,cy:136,rx:3,ry:2.5},{cx:232,cy:118,rx:3,ry:2},{cx:226,cy:96,rx:4,ry:3},
		{cx:212,cy:78,rx:3,ry:2.5},
		{cx:180,cy:80,rx:3.5,ry:2.5},{cx:158,cy:70,rx:3,ry:2},{cx:135,cy:75,rx:3.5,ry:2.5},
		{cx:118,cy:92,rx:3,ry:2},{cx:122,cy:115,rx:3.5,ry:2.5},{cx:135,cy:138,rx:3,ry:2},
		{cx:152,cy:152,rx:3.5,ry:2.5},{cx:170,cy:145,rx:3,ry:2},{cx:188,cy:132,rx:3.5,ry:2.5},
		{cx:202,cy:115,rx:3,ry:2},{cx:200,cy:96,rx:3.5,ry:2.5},{cx:182,cy:105,rx:4,ry:3},
		{cx:160,cy:98,rx:3.5,ry:2.5},{cx:140,cy:105,rx:4,ry:3},{cx:162,cy:120,rx:3,ry:2},
		{cx:145,cy:124,rx:3.5,ry:2.5},{cx:180,cy:58,rx:3,ry:2},{cx:125,cy:62,rx:3,ry:2},
	];
	spots.forEach(s => {
		ap(set(el("ellipse"), {
			cx: s.cx, cy: s.cy, rx: s.rx, ry: s.ry,
			fill: spotDark, opacity: "0.38"
		}));
	});

	const lightSpots = [
		{cx:185,cy:75,r:2},{cx:145,cy:60,r:1.8},{cx:115,cy:82,r:2},
		{cx:125,cy:125,r:1.8},{cx:158,cy:158,r:2},{cx:200,cy:128,r:1.8},
		{cx:220,cy:106,r:1.8},{cx:170,cy:92,r:2},{cx:138,cy:116,r:1.8},
	];
	lightSpots.forEach(s => {
		ap(set(el("circle"), { cx: s.cx, cy: s.cy, r: s.r, fill: spotLight, opacity: "0.35" }));
	});

	// Espinhos dorsais centrais
	for (let i = 0; i < 6; i++) {
		const x = 152 - i * 10;
		const y = 68 + i * 8;
		ap(set(el("path"), {
			d: `M ${x},${y} L ${x+1},${y-6} L ${x+3},${y}`,
			fill: spineColor, stroke: edgeColor, "stroke-width": "0.6", opacity: "0.8"
		}));
	}

	// ── OLHOS — à direita (frente) ──
	// Olho superior
	ap(set(el("circle"), { cx: "170", cy: "76", r: "8",   fill: bodyDark }));
	ap(set(el("ellipse"), { cx: "170", cy: "74", rx: "8", ry: "6", fill: bodyBase, stroke: edgeColor, "stroke-width": "1.2" }));
	ap(set(el("circle"), { cx: "170", cy: "74", r: "5",   fill: "#3A2818" }));
	ap(set(el("circle"), { cx: "170", cy: "74", r: "3.2", fill: eyeColor }));
	ap(set(el("ellipse"), { cx: "168.5", cy: "72.5", rx: "1.2", ry: "1.6", fill: "rgba(255,255,255,0.7)" }));
	ap(set(el("ellipse"), { cx: "170", cy: "72", rx: "7", ry: "5", fill: "none", stroke: edgeColor, "stroke-width": "1", opacity: "0.5" }));

	// Olho inferior
	ap(set(el("circle"), { cx: "170", cy: "158", r: "8",   fill: bodyDark }));
	ap(set(el("ellipse"), { cx: "170", cy: "156", rx: "8", ry: "6", fill: bodyBase, stroke: edgeColor, "stroke-width": "1.2" }));
	ap(set(el("circle"), { cx: "170", cy: "156", r: "5",   fill: "#3A2818" }));
	ap(set(el("circle"), { cx: "170", cy: "156", r: "3.2", fill: eyeColor }));
	ap(set(el("ellipse"), { cx: "168.5", cy: "154.5", rx: "1.2", ry: "1.6", fill: "rgba(255,255,255,0.7)" }));
	ap(set(el("ellipse"), { cx: "170", cy: "154", rx: "7", ry: "5", fill: "none", stroke: edgeColor, "stroke-width": "1", opacity: "0.5" }));

	// Boca/narinas — no focinho (direita)
	ap(set(el("path"), {
		d: "M 152,108 Q 148,112 152,116",
		stroke: edgeColor, "stroke-width": "2.5", fill: "none", "stroke-linecap": "round"
	}));
	ap(set(el("ellipse"), { cx: "158", cy: "107", rx: "3", ry: "2", fill: bodyDark, opacity: "0.7", transform: "rotate(20 158 107)" }));
	ap(set(el("ellipse"), { cx: "158", cy: "117", rx: "3", ry: "2", fill: bodyDark, opacity: "0.7", transform: "rotate(-20 158 117)" }));

	// Fendas branquiais
	for (let i = 0; i < 5; i++) {
		const x = 142 - i * 10;
		const y = 105 + (i - 2) * 4;
		ap(set(el("path"), {
			d: `M ${x},${y-3} Q ${x+2},${y} ${x},${y+3}`,
			stroke: bodyDark, "stroke-width": "1.2", fill: "none",
			"stroke-linecap": "round", opacity: "0.45"
		}));
	}

	// Bolhas
	[{cx:242,cy:88,r:2.2},{cx:256,cy:70,r:1.6},{cx:244,cy:150,r:2},{cx:258,cy:164,r:1.4},{cx:135,cy:24,r:1.8}].forEach(b => {
		ap(set(el("circle"), {
			cx: b.cx, cy: b.cy, r: b.r,
			fill: "rgba(200,230,255,0.25)", stroke: "rgba(200,230,255,0.7)", "stroke-width": "0.7"
		}));
	});

	return svg;
}

function createRay() {
	const ray = document.createElement('div');
	ray.className = 'fish ray';

	const size = 140 + Math.random() * 60; // 140-200px
	const raySVG = createRaySVG(size);
	ray.appendChild(raySVG);

	// Nada em profundidades médias
	ray.style.top = 25 + Math.random() * 55 + '%';

	const isReverse = Math.random() > 0.5;
	if (isReverse) {
		ray.classList.add('reverse');
	}

	// Nada suave e majestosa
	const duration = 25 + Math.random() * 20; // 25-45s
	ray.style.animationDuration = duration + 's';
	ray.style.animationDelay = Math.random() * -25 + 's';

	fishContainer.appendChild(ray);
}




// ── INICIALIZAÇÃO DAS CRIATURAS ──────────────────────────────

  	// Criar 5 peixinhos normais
	for (let i = 0; i < 5; i++) {
	   createFish();
	}

	// Criar 2 peixes-anjo
	for (let i = 0; i < 2; i++) {
	   createAngelfish();
	}

	// Criar 2 peixes-palhaço
	for (let i = 0; i < 2; i++) {
	   createClownfish();
	}

	// Criar 1 peixes-espada
	for (let i = 0; i < 1; i++) {
	   createSwordfish();
	}

	// Criar 1 golfinhos
	for (let i = 0; i < 1; i++) {
	   createDolphin();
	}

	// Criar 1 tubarões ferozes
	for (let i = 0; i < 1; i++) {
	   createShark();
	}

	// Criar 1 submarinos
	for (let i = 0; i < 1; i++) {
	   createSubmarine();
	}

	// Criar 3 cavalos-marinhos
	for (let i = 0; i < 2; i++) {
	   createSeahorse();
	}

        // Criar 1 Monstros do Lago Ness!
	for (let i = 0; i < 1 + Math.floor(Math.random() * 1); i++) {
	   createNessie();
	}
  
        // Criar 3 águas-vivas flutuantes
	for (let i = 0; i < 3; i++) {
	   createJellyfish();
	}
    
        // Criar 1 mergulhadores fazendo snorkeling
	for (let i = 0; i < 1; i++) {
	   createSnorkeler();
	}

	// Criar 1 tartarugas marinhas
	for (let i = 0; i < 1; i++) {
	   createSeaTurtle();
	}

	// Criar 1 enguia elétrica
        for (let i = 0; i < 1; i++) {
        createElectricEel();
        }

	// Criar 1 polvos 
	for (let i = 0; i < 1; i++) {
	   createOctopus();
	}

	// Criar 1 foca nadando na superfície
	for (let i = 0; i < 1; i++) {
	   createSeal();
	}
        // Criar 1 arraia-manta
        for (let i = 0; i < 1; i++) {
        createRay();
        }

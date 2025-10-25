var Demineur = {
    name: 'Demineur',
    
    // Déclaration des niveaux de jeu
    niveau: {
        facile: {
            lignes: 8,
            colonnes: 8,
            mines: 10,
        },
        
        normal: {
            lignes: 12,
            colonnes: 12,
            mines: 20,
        },
        
        difficile: {
            lignes: 16,
            colonnes: 16,
            mines: 32,
        },
        
        perso: {
            lignes: 0,
            colonnes: 0,
            mines: 0,
        },
    },
    
    game: {
        // Statut du jeu (ouvert ou fermé)
        status: 1,
        field: [],
        score: 0,
    },
    

    startGame(difficulty) {
        this.settings = this.niveau[difficulty];
        this.resetGame();
        this.playstartSound(); //Son début de partie
        // Dessiner le plateau de jeu à l'écran
        this.drawGameBoard();
    },

    markPosition(x, y) {
        if (this.game.status !== 1) {
            return;
        }
        
        if (this.game.field[x][y] === -2) {
            return;
        }
        
        if (this.game.field[x][y] < -90) {
            document.getElementById('cell-'+x+'-'+y).className = 'cell';
            document.getElementById('cell-'+x+'-'+y).innerHTML = '';
            this.game.field[x][y] += 100;
        } else {
            document.getElementById('cell-'+x+'-'+y).className = 'cell marked';
            document.getElementById('cell-'+x+'-'+y).innerHTML = '!';
            this.game.field[x][y] -= 100;
            this.playFlag();
        }
    },
    
    checkPosition(x, y) {
        if (this.game.status !== 1) {
            return;
        }
        
        if (this.game.field[x][y] === -2) {
            return;
        }
        
        if (this.game.field[x][y] === -1) {
            document.getElementById('cell-'+x+'-'+y).className = 'cell bomb';
            this.playMineSound(); // Appel de la fonction pour jouer le son de la mine
            this.displayLose();
            return;
        }
        
        document.getElementById('cell-'+x+'-'+y).className = 'cell clear';

        if (this.game.field[x][y] > 0) {
            document.getElementById('cell-'+x+'-'+y).innerHTML = this.game.field[x][y];
            this.game.field[x][y] = -2;
        } else if (this.game.field[x][y] === 0) {
            this.game.field[x][y] = -2;
            for (var j = x-1; j <= x+1; j++) {
                if (j < 0 || j >= this.settings.lignes) {
                    continue;
                }
                for (var k = y-1; k <= y+1; k++) {
                    if (k < 0 || k >= this.settings.colonnes) {
                        continue;
                    }
                    if (this.game.field[j][k] > -1) {
                        this.checkPosition(j, k);
                    }
                }
            }

        }

        this.checkWin();

        // Ajouter les points au score
        var scoreToAdd = 0;

        // Vérifier si la case est vide
        if (this.game.field[x][y] === -2) {
            scoreToAdd = 100;
        }

        // Ajouter les points au score
        this.game.score += scoreToAdd;

        // Mettre à jour le score affiché en HTML
        var scoreElement = document.getElementById('score');
        if (scoreElement) {
            scoreElement.textContent = 'Score: ' + this.game.score;
            this.playCaseGood();
        }

        //Afficher le nombres de mines
        var minesElement = document.getElementById('mines');
        if (minesElement) {
            minesElement.textContent = 'Mines : ' + this.settings.mines;
        }
        
    },


    drawGameBoard() {
        var board = document.getElementById('plateau');
        board.innerHTML = '';
        document.getElementById('result').innerHTML = '';
        var border = document.createElement('table');
        var field = document.createElement('tbody');
        border.appendChild(field);
        border.className = 'field';
        board.appendChild(border);

        for (var i = 0; i < this.settings.lignes; i++) {
            var line = document.createElement('tr');
            
            for (var j = 0; j < this.settings.colonnes; j++) {
                var cell = document.createElement('td');
                cell.id = 'cell-'+i+'-'+j;
                cell.className = 'cell';
                cell.setAttribute('onclick', 'Demineur.checkPosition('+i+', '+j+');');
                cell.setAttribute('oncontextmenu', 'Demineur.markPosition('+i+', '+j+'); return false;');
                line.appendChild(cell);
            }
            
            field.appendChild(line);
        }

        border.setAttribute('oncontextmenu', 'return false;');
        
        for (var i = 0; i < this.settings.mines; i++) {
            var x = Math.floor(Math.random() * this.settings.colonnes);
            var y = Math.floor(Math.random() * this.settings.lignes);
            
            while (this.game.field[x][y] === -1) {
                x = Math.floor(Math.random() * this.settings.colonnes);
                y = Math.floor(Math.random() * this.settings.lignes);
            }
            
            this.game.field[x][y] = -1;
        }
        
        for (var j = 0; j < this.settings.lignes; j++) {
            for (var k = 0; k < this.settings.colonnes; k++) {
                if (this.game.field[j][k] !== -1) {
                    continue;
                }
                
                for (var m = j-1; m <= j+1; m++) {
                    if (m < 0 || m >= this.settings.lignes) {
                        continue;
                    }
                    
                    for (var n = k-1; n <= k+1; n++) {
                        if (n < 0 || n >= this.settings.colonnes) {
                            continue;
                        }
                        
                        if (this.game.field[m][n] !== -1) {
                            this.game.field[m][n]++;
                        }
                    }
                }
            }
        }
    },

    //Son

    
    

    playstartSound() {
        var startSound = document.getElementById('startSound');
        startSound.volume = 0.2; //Son baisser
        startSound.play(); // Lire le son
    },
    
    playCaseGood() {
        var startSound = document.getElementById('caseGood');
        caseGood.play();
    },
    playFlag() {
        var startSound = document.getElementById('flag');
        flag.play();
    },
    playMineSound() {
        var mineSound = document.getElementById('mineSound');
        mineSound.play();
    },
    
    //Vérification de fin de partie
    checkWin() {
        for (var i = 0; i < this.settings.lignes; i++) {
            for (var j = 0; j < this.settings.colonnes; j++) {
                var v = this.game.field[i][j];
                if (v !== -1 && v !== -2 && v !== -101) {
                    return;
                }
            }
        }
        this.displayWin();
    },

    displayWin() {
        document.getElementById('result').innerHTML = 'Gagné';
        document.getElementById('result').style.color = '#43b456';
        this.game.status = 0;
    },
    
    displayLose() {
        document.getElementById('result').innerHTML = 'Perdu';
        document.getElementById('result').style.color = '#CC3333';
        
        this.game.status = 0;

        for (var i = 0; i < this.settings.lignes; i++) {
            for (var j = 0; j < this.settings.colonnes; j++) {
                if (this.game.field[i][j] === -1) {
                    document.getElementById('cell-'+i+'-'+j).className = 'cell bomb';
                }
            }
        }
    },
    
    resetGame() {
        this.game.field = [];
        this.game.score = 0;
        this.game.status = 1;
        
        for (var i = 0; i < this.settings.lignes; i++) {
            var line = [];
            for (var j = 0; j < this.settings.colonnes; j++) {
                line.push(0);
            }
            this.game.field.push(line);
        }
    }
};

export type XO = 'X' | 'O' | '-';

export class Game {
  cells: XO[] = ['-', '-', '-', '-', '-', '-', '-', '-', '-']
  /* 
    [
      0, 1, 2, 
      3, 4, 5, 
      6, 7, 8
    ]
  */
  getCells(): XO[] {
    return this.cells
  }
  
  player01: XO = 'X'
  player02: XO = 'O'

  

  getTurn(): XO {
    const counter = this.cells.filter((cell) => cell !== '-').length
    return counter % 2 === 0 ? 'X' : 'O'
  }
  
  onClick(i: any): void {
    if (this.cells[i] === '-') {
      this.cells[i] = this.getTurn()
    }
    console.log(`cell ${i} clicked`)
  }
  getWinner(): XO {
    // horizontal test
    if (this.cells[0] === this.cells[1] && this.cells[0] === this.cells[2] && this.cells[0] !== '-') {
      return this.cells[0]
    } else if (this.cells[3] === this.cells[4] && this.cells[3] === this.cells[5] && this.cells[3] !== '-') {
      return this.cells[3]
    } else if (this.cells[6] === this.cells[7] && this.cells[6] === this.cells[8] && this.cells[6] !== '-') {
      return this.cells[6] 
    }
    // vertical test
    if (this.cells[0] === this.cells[3] && this.cells[0] === this.cells[6] && this.cells[0] !== '-') {
      return this.cells[0]
    } else if (this.cells[1] === this.cells[4] && this.cells[1] === this.cells[7] && this.cells[1] !== '-') {
      return this.cells[1]
    } else if (this.cells[2] === this.cells[5] && this.cells[2] === this.cells[8] && this.cells[2] !== '-') {
      return this.cells[2] 
    }
    // diagonal test
    if (this.cells[0] === this.cells[4] && this.cells[0] === this.cells[8] && this.cells[0] !== '-') {
      return this.cells[0]
    } else if (this.cells[2] === this.cells[4] && this.cells[2] === this.cells[6] && this.cells[2] !== '-') {
      return this.cells[2] 
    }
    else return '-'
    }
  
  isTie(): boolean {
    if (this.cells.includes('-')) {
      return false
    } else return true
  }
  
  restart(): void {
    console.log('restart called')
  }
}

/*
  winningCombos: XO[][] = [
    ['X', 'X', 'X', '-', '-', '-', '-', '-', '-'],
    ['-', '-', '-', 'X', 'X', 'X', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', 'X', 'X', 'X'],
    ['O', 'O', 'O', '-', '-', '-', '-', '-', '-'],
    ['-', '-', '-', 'O', 'O', 'O', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', 'O', 'O', 'O']
  ]
  placeMark(cell: XO, currentPlayer: XO) {
    cell.replace('-', currentPlayer)
  }
  onClick(i: any): void {
    let cell = i.target
    let currentPlayer = this.turn === 'X' ? this.player01 : this.player02
    this.placeMark(cell, currentPlayer)
    if (this.isTie() === false || this.getWinner() === '-') {
      this.getTurn()
      
    } else {

    }
    console.log(`cell ${i} clicked`)
  }
  window.addEventListener('load', function() {
    let container = document.getElementById('board')
    for (let i of this.cells) {
      
        let cell = document.createElement('div')
        cell.innerHTML = i
        cell.className = 'box'
        container.appendChild(cell)
      
    }
  }) 
  createGrid6 (rows: number, columns: number) {
      this.board.style.setProperty('--grid-rows', rows)
      this.board.style.setProperty('--grid-columns', columns)
      for (let i = 0; i < (rows * columns); i++) {
        let cell: any = document.createElement("div")
        cell.innerText = (i + 1);
        this.board.appendChild(cell).className = "box"
      }
  }
  createGrid() {
    for (let rows = 0; rows < 3; rows++) {
        for (let columns = 0; columns < 3; columns++) {
            $("#board").append("<div class='box'></div>");
        };
    };
  }
  makeBlocks() {
    for (let i = 0; i < 3; i++) {
        let row = document.createElement('div');
        row.className = 'row';
        for (let j = 0; j < 3; j++) {
            let box = document.createElement('div');
            box.className = 'box';
            row.appendChild(box);
        }                
        document.getElementById('board')!.appendChild(row);
    }
}
 board = document.getElementById('board')

  
  createGrid () {
    this.board.style.setProperty('--grid-rows', 3)
    this.board.style.setProperty('--grid-columns', 3)
    for (let i = 0; i < (3 * 3); i++) {
      let cell: any = document.createElement("div")
      cell.innerText = (this.cells[i]);
      this.board.appendChild(cell).className = "box"
    }
  }
  getWinner(): XO {
  let result: any = ''
  for (let i = 0; i < this.winningCombos.length; i++) {
    if (this.winningCombos[i].join('') === this.cells.join('')) {
      result = 'X'
    } else result = '-'
  }
  return result
  }
   getWinner(): XO {
  if (this.cells[0] === this.cells[1] && this.cells[0] === this.cells[2] && this.cells[0] !== '-') {
    return this.cells[0]
  } else if (this.cells[3] === this.cells[4] && this.cells[3] === this.cells[5] && this.cells[3] !== '-') {
    return this.cells[3]
  } else if (this.cells[6] === this.cells[7] && this.cells[6] === this.cells[8] && this.cells[6] !== '-') {
    return this.cells[6] 
  }
  else return '-'
  }
  getWinner(): XO {
    if (this.cells[0] === 'X' && this.cells[0] === this.cells[1] && this.cells[1] === this.cells[2]) {
      return this.cells[0]
    } 
    else if (this.cells[3] === 'X' && this.cells[3] === this.cells[4] && this.cells[4] === this.cells[5]) {
      return this.cells[3]
    } 
    else return '-'
  }

  getWinner = (): XO => {
    let winner: any = ''
    let input = this.inputCells
    if (input == ['-', '-', '-', '-', '-', '-', '-', '-', '-']) {
      winner = '-'
    } else if (input == ['X', 'X', 'X', '-', '-', '-', '-', '-', '-']) {
      winner = 'X'
    } else {
      winner = 'O'
    }
    return winner
  }
  getWinner(): XO {
    if (this.cells[0] === this.cells[1] && this.cells[2]) {
      if (this.cells[0] === 'X') {
        return 'X'
      } else if (this.cells[0] === 'O') {
        return 'O'
      } else {}
    } else if (this.cells[3] === this.cells[4] && this.cells[5]) {
      if (this.cells[3] === 'X') {
        return 'X'
      } else if (this.cells[3] === 'O') {
        return 'O'
      } else {}
    } else if (this.cells[6] === this.cells[7] && this.cells[8]) {
      if (this.cells[6] === 'X') {
        return 'X'
      } else if (this.cells[6] === 'O') {
        return 'O'
      } else {}
    }
    else return '-'
  }

    getWinner(): XO {
  if (this.cells[0] === 'X' || 'O') {
    if (this.cells[0] === 'X') {
      if (this.cells[1] === 'X') {
        if (this.cells[2] === 'X') {
          return 'X'
        } else if (this.cells[2] === 'O') {
          return '-'
        }
      }
    }
  }
  else return '-'
  }
  /*
<div class="box">Cell 0</div>
<div class="box">Cell 1</div>
<div class="box">Cell 2</div>
<div class="box">Cell 3</div>
<div class="box">Cell 4</div>
<div class="box">Cell 5</div>
<div class="box">Cell 6</div>
<div class="box">Cell 7</div>
<div class="box">Cell 8</div>
*/


export type XO = 'X' | 'O' | '-';

export class Game {
  cells: XO[] = ['-', '-', '-', '-', '-', '-', '-', '-', '-']
  getCells(): XO[] {
    return this.cells
  }
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
    else if (this.cells[0] === this.cells[3] && this.cells[0] === this.cells[6] && this.cells[0] !== '-') {
      return this.cells[0]
    } else if (this.cells[1] === this.cells[4] && this.cells[1] === this.cells[7] && this.cells[1] !== '-') {
      return this.cells[1]
    } else if (this.cells[2] === this.cells[5] && this.cells[2] === this.cells[8] && this.cells[2] !== '-') {
      return this.cells[2] 
    }
    // diagonal test
    else if (this.cells[0] === this.cells[4] && this.cells[0] === this.cells[8] && this.cells[0] !== '-') {
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
  restart(): any {
    console.log('restart called')
    return this.cells = ['-', '-', '-', '-', '-', '-', '-', '-', '-']
  }

}

/* 
    [
      0, 1, 2, 
      3, 4, 5, 
      6, 7, 8
    ]
  */


import { Cell } from "./Cell";

export class GameField {
  /**
   * Called when level completed
   */
  seed(): void {}
  apples: Cell[] = [
    new Cell(18, 16),
    new Cell(20, 16),
    new Cell(22, 16),
    new Cell(24, 16),
    new Cell(26, 16)
  ]
  getApples(): Cell[] {
    return this.apples;
  }

  isAppleInside(cell: Cell): boolean {
    return this.apples.find((it) => it.x === cell.x && it.y === cell.y) !==undefined
  }

  removeApple(cell: Cell): void {}

  isEmpty(): boolean {
    return false;
  }
}

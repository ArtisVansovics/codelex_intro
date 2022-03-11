import { Game } from './Game';

describe('Tic-Tac-Toe', () => {
  it('should start with blank state', () => {
    const game = new Game();
    expect(game.getCells()).toEqual([
      '-', '-', '-',
      '-', '-', '-',
      '-', '-', '-'
    ])
    expect(game.getTurn()).toBe('X')
    expect(game.getWinner()).toBe('-')
    expect(game.isTie()).toBe(false)
  })
  it('should be able to make a move', () => {
    const game = new Game();
    game.onClick(0)
    expect(game.getCells()).toEqual([
      'X', '-', '-',
      '-', '-', '-',
      '-', '-', '-'
    ])
    expect(game.getTurn()).toBe('O')
    expect(game.getWinner()).toBe('-')
    expect(game.isTie()).toBe(false)
  })
  it('should not be able to overwrite cells', () => {
    const game = new Game();
    game.onClick(0)
    game.onClick(0)
    expect(game.getCells()).toEqual([
      'X', '-', '-',
      '-', '-', '-',
      '-', '-', '-'
    ])
    expect(game.getTurn()).toBe('O')
    expect(game.getWinner()).toBe('-')
    expect(game.isTie()).toBe(false)
  })
  it('should end when all fields in a row are taken by a player', () => {
    let game = new Game();
    game.cells = ['X', 'X', 'X', '-', '-', '-', '-', '-', '-']
    expect(game.getWinner()).toBe('X')
    expect(game.isTie()).toBe(false)
    game.cells = ['-', '-', '-', 'X', 'X', 'X', '-', '-', '-']
    expect(game.getWinner()).toBe('X')
    expect(game.isTie()).toBe(false)
    game.cells = ['-', '-', '-', '-', '-', '-', 'O', 'O', 'O']
    expect(game.getWinner()).toBe('O')
    expect(game.isTie()).toBe(false)
  })
  it('should end when all fields in a collumn are taken by a player', () => {
    let game = new Game();
    game.cells = ['X', '-', '-', 'X', '-', '-', 'X', '-', '-']
    expect(game.getWinner()).toBe('X')
    expect(game.isTie()).toBe(false)
    game.cells = ['-', '-', 'X', '-', '-', 'X', '-', '-', 'X']
    expect(game.getWinner()).toBe('X')
    expect(game.isTie()).toBe(false)
    game.cells = ['-', 'O', '-', '-', 'O', '-', '-', 'O', '-']
    expect(game.getWinner()).toBe('O')
    expect(game.isTie()).toBe(false)
  })
  it('should end when all fields in a diagonal are taken by a player', () => {
    let game = new Game();
    game.cells = ['X', '-', '-', '-', 'X', '-', '-', '-', 'X']
    expect(game.getWinner()).toBe('X')
    expect(game.isTie()).toBe(false)
    game.cells = ['-', '-', 'O', '-', 'O', '-', 'O', '-', '-']
    expect(game.getWinner()).toBe('O')
    expect(game.isTie()).toBe(false)
  })
  it('should end when all fields are taken', () => {
    let game = new Game();
    game.cells = ['O', 'X', 'O', 'O', 'O', 'X', 'X', 'O', 'X']
    expect(game.getWinner()).toBe('-')
    expect(game.isTie()).toBe(true)
  })
})

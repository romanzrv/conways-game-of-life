import {test, expect, beforeEach} from "@jest/globals";
import * as index from "../app";

beforeEach(() => {
    index.killCell(1, 1);
    index.killCell(1, 2);
    index.killCell(2, 2);
    index.killCell(2, 1);
});

test('The Y axis length should be 6', () => {
    expect(index.cells.length).toBe(6);
});

test('The X axis length of each Y position should be 6', () => {
    expect(index.cells[0].length).toBe(6);
    expect(index.cells[1].length).toBe(6);
    expect(index.cells[2].length).toBe(6);
    expect(index.cells[3].length).toBe(6);
    expect(index.cells[4].length).toBe(6);
    expect(index.cells[5].length).toBe(6);
});

test('The killCell method should set the "alive" value to "false" for a specific cell', () => {
    index.killCell(1, 1);
    expect(index.cells[0][0].alive).toBe(false);
});

test('The aliveCell method should set the "alive" value to "true" for a specific cell', () => {
    index.aliveCell(1, 1);
    expect(index.cells[0][0].alive).toBe(true);
});

test('The "getAliveNeighboursCells" should return a valid number of neighbours alive cells', () => {
    index.aliveCell(1, 2);
    index.aliveCell(2, 2);
    expect(index.getAliveNeighboursCells(1, 1)).toBe(2);
});

test('A dead cell with 3 alive neighbours cells should be alive', () => {
    index.killCell(1, 1);
    index.aliveCell(1, 2);
    index.aliveCell(2, 2);
    index.aliveCell(2, 1);
    index.checkAndSetCellStatus(index.cells[0][0]);
    index.createNextGenerationCells();
    expect(index.cells[0][0].alive).toBe(true);
});

test('A alive cell with 2 or 3 alive neighbours cells should be alive', () => {
    index.aliveCell(1, 1);
    index.aliveCell(1, 2);
    index.aliveCell(2, 2);
    index.aliveCell(2, 1);
    index.checkAndSetCellStatus(index.cells[0][0]);
    index.createNextGenerationCells();
    expect(index.cells[0][0].alive).toBe(true);
});

test('A alive cell with 1 alive neighbours cells should be dead', () => {
    index.aliveCell(1, 1);
    index.aliveCell(1, 2);
    index.checkAndSetCellStatus(index.cells[0][0]);
    index.createNextGenerationCells();
    expect(index.cells[0][0].alive).toBe(false);
});

import {test, expect} from "@jest/globals";
import * as index from "../index";

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

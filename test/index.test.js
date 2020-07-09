import {test, expect} from "@jest/globals";
import {cells} from "../index";

test('The Y axis length should be 6', () => {
    expect(cells.length).toBe(6);
});

test('The X axis length should be 6', () => {
    expect(cells[0].length).toBe(6);
    expect(cells[1].length).toBe(6);
    expect(cells[2].length).toBe(6);
    expect(cells[3].length).toBe(6);
    expect(cells[4].length).toBe(6);
    expect(cells[5].length).toBe(6);
});

export const cells = [
    [{x: 1, y: 1, alive: false}, {x: 1, y: 2, alive: false}, {x: 1, y: 3, alive: false}, {x: 1, y: 4, alive: false}, {x: 1, y: 5, alive: false}, {x: 1, y: 6, alive: false}],
    [{x: 2, y: 1, alive: false}, {x: 2, y: 2, alive: false}, {x: 2, y: 3, alive: false}, {x: 2, y: 4, alive: false}, {x: 2, y: 5, alive: false}, {x: 2, y: 6, alive: false}],
    [{x: 3, y: 1, alive: false}, {x: 3, y: 2, alive: false}, {x: 3, y: 3, alive: false}, {x: 3, y: 4, alive: false}, {x: 3, y: 5, alive: false}, {x: 3, y: 6, alive: false}],
    [{x: 4, y: 1, alive: false}, {x: 4, y: 2, alive: false}, {x: 4, y: 3, alive: false}, {x: 4, y: 4, alive: false}, {x: 4, y: 5, alive: false}, {x: 4, y: 6, alive: false}],
    [{x: 5, y: 1, alive: false}, {x: 5, y: 2, alive: false}, {x: 5, y: 3, alive: false}, {x: 5, y: 4, alive: false}, {x: 5, y: 5, alive: false}, {x: 5, y: 6, alive: false}],
    [{x: 6, y: 1, alive: false}, {x: 6, y: 2, alive: false}, {x: 6, y: 3, alive: false}, {x: 6, y: 4, alive: false}, {x: 6, y: 5, alive: false}, {x: 6, y: 6, alive: false}]
];

export const killCell = (x, y) => {
    cells[x - 1][y - 1].alive = false;
};

export const aliveCell = (x, y) => {
    cells[x - 1][y - 1].alive = true;
};

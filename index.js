const cells = [
    [{x: 1, y: 1, alive: false}, {x: 2, y: 1, alive: false}, {x: 3, y: 1, alive: false}, {x: 4, y: 1, alive: false}, {x: 5, y: 1, alive: false}, {x: 6, y: 1, alive: false}],
    [{x: 1, y: 2, alive: false}, {x: 2, y: 2, alive: false}, {x: 3, y: 2, alive: false}, {x: 4, y: 2, alive: false}, {x: 5, y: 2, alive: false}, {x: 6, y: 2, alive: false}],
    [{x: 1, y: 3, alive: false}, {x: 2, y: 3, alive: false}, {x: 3, y: 3, alive: false}, {x: 4, y: 3, alive: false}, {x: 5, y: 3, alive: false}, {x: 6, y: 3, alive: false}],
    [{x: 1, y: 4, alive: false}, {x: 2, y: 4, alive: false}, {x: 3, y: 4, alive: false}, {x: 4, y: 4, alive: false}, {x: 5, y: 4, alive: false}, {x: 6, y: 4, alive: false}],
    [{x: 1, y: 5, alive: false}, {x: 2, y: 5, alive: false}, {x: 3, y: 5, alive: false}, {x: 4, y: 5, alive: false}, {x: 5, y: 5, alive: false}, {x: 6, y: 5, alive: false}],
    [{x: 1, y: 6, alive: false}, {x: 2, y: 6, alive: false}, {x: 3, y: 6, alive: false}, {x: 4, y: 6, alive: false}, {x: 5, y: 6, alive: false}, {x: 6, y: 6, alive: false}]
];

const killCell = (x, y) => {
    cells[y - 1][x - 1].alive = false;
    document.getElementById(`${x}${y}`) ? document.getElementById(`${x}${y}`).style.backgroundColor = 'white' : null;
};

const aliveCell = (x, y) => {
    cells[y - 1][x - 1].alive = true;
    document.getElementById(`${x}${y}`) ? document.getElementById(`${x}${y}`).style.backgroundColor = 'black' : null;
};

const getAliveNeighboursCells = (x, y) => {
  let aliveNeighboursCells = 0;
  aliveNeighboursCells = cells[y - 1] ? (cells[y - 1][x - 2] ? (cells[y - 1][x - 2].alive ? aliveNeighboursCells + 1 : aliveNeighboursCells) : aliveNeighboursCells) : aliveNeighboursCells;
  aliveNeighboursCells = cells[y - 2] ? (cells[y - 2][x - 2] ? (cells[y - 2][x - 2].alive ? aliveNeighboursCells + 1 : aliveNeighboursCells) : aliveNeighboursCells) : aliveNeighboursCells;
  aliveNeighboursCells = cells[y - 2] ? (cells[y - 2][x - 1] ? (cells[y - 2][x - 1].alive ? aliveNeighboursCells + 1 : aliveNeighboursCells) : aliveNeighboursCells) : aliveNeighboursCells;
  aliveNeighboursCells = cells[y - 2] ? (cells[y - 2][(x - 1) + 1] ? (cells[y - 2][(x - 1) + 1].alive ? aliveNeighboursCells + 1 : aliveNeighboursCells) : aliveNeighboursCells) : aliveNeighboursCells;
  aliveNeighboursCells = cells[y - 1] ? (cells[y - 1][(x - 1) + 1] ? (cells[y - 1][(x - 1) + 1].alive ? aliveNeighboursCells + 1 : aliveNeighboursCells) : aliveNeighboursCells) : aliveNeighboursCells;
  aliveNeighboursCells = cells[(y - 1) + 1] ? (cells[(y - 1) + 1][(x - 1) + 1] ? (cells[(y - 1) + 1][(x - 1) + 1].alive ? aliveNeighboursCells + 1 : aliveNeighboursCells) : aliveNeighboursCells) : aliveNeighboursCells;
  aliveNeighboursCells = cells[(y - 1) + 1] ? (cells[(y - 1) + 1][x - 1] ? (cells[(y - 1) + 1][x - 1].alive ? aliveNeighboursCells + 1 : aliveNeighboursCells) : aliveNeighboursCells) : aliveNeighboursCells;
  aliveNeighboursCells = cells[(y - 1) + 1] ? (cells[(y - 1) + 1][x - 2] ? (cells[(y - 1) + 1][x - 2].alive ? aliveNeighboursCells + 1 : aliveNeighboursCells) : aliveNeighboursCells) : aliveNeighboursCells;
  return aliveNeighboursCells;
};

const checkAndSetCellStatus = (x, y) => {
    if (cells[y - 1][x - 1].alive) {
        if (getAliveNeighboursCells(x, y) === 2 || getAliveNeighboursCells(x, y) === 3) {
            aliveCell(x, y);
        } else {
            killCell(x, y);
        }
    } else {
        if (getAliveNeighboursCells(x, y) === 3) {
            aliveCell(x, y);
        }
    }
}

const iterateThroughCells = () => {
    cells.forEach((valueY) => {
        valueY.forEach((valueX) => {
            checkAndSetCellStatus(valueX.x, valueX.y);
        })
    })
}

aliveCell(2, 3);
aliveCell(3, 3);
aliveCell(4, 3);
aliveCell(4, 4);

setInterval(() => {
    iterateThroughCells();
}, 1000);

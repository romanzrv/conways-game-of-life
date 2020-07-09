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

const checkAndSetCellStatus = (cell) => {
    if (cells[cell.y - 1][cell.x - 1].alive) {
        if (getAliveNeighboursCells(cell.x, cell.y) === 2 || getAliveNeighboursCells(cell.x, cell.y) === 3) {
            cell.isAliveNextIteration = true;
        } else {
            cell.isAliveNextIteration = false;
        }
    } else {
        if (getAliveNeighboursCells(cell.x, cell.y) === 3) {
            cell.isAliveNextIteration = true;
        } else {
            cell.isAliveNextIteration = false;
        }
    }
}

const iterateThroughCells = () => {
    cells.forEach((valueY) => {
        valueY.forEach((valueX) => {
            checkAndSetCellStatus(valueX);
        })
    });

    cells.forEach((valueY) => {
        valueY.forEach((valueX) => {
            if (valueX.isAliveNextIteration) {
                aliveCell(valueX.x, valueX.y);
            } else {
                killCell(valueX.x, valueX.y);
            }
        })
    });
}

aliveCell(3, 3);
aliveCell(4, 3);
aliveCell(5, 3);

setInterval(() => {
    iterateThroughCells();
}, 1500);

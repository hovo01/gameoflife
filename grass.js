class Grass {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.index = 1;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
        this.multiply = 0;

    }
    bazmanal() {
        this.multiply++;
        var norVandak = random(this.yntrelVandak(0));
        if (weather === 'summer') {

            if (this.multiply >= 3 && norVandak) {
                var norXot = new Grass(norVandak[0], norVandak[1]);
                grassArr.push(norXot);
                matrix[norVandak[1]][norVandak[0]] = 1;
                this.multiply = 0;
            }
        }
        else if (weather === 'winter') {

            if (this.multiply >= 26 && norVandak) {
                var norXot = new Grass(norVandak[0], norVandak[1]);
                grassArr.push(norXot);
                matrix[norVandak[1]][norVandak[0]] = 1;
                this.multiply = 0;
            }
        }

        else if (weather === 'autumn') {

            if (this.multiply >= 11 && norVandak) {
                var norXot = new Grass(norVandak[0], norVandak[1]);
                grassArr.push(norXot);
                matrix[norVandak[1]][norVandak[0]] = 1;
                this.multiply = 0;
            }
        }

        else if (weather === 'spring') {

            if (this.multiply >= 6 && norVandak) {
                var norXot = new Grass(norVandak[0], norVandak[1]);
                grassArr.push(norXot);
                matrix[norVandak[1]][norVandak[0]] = 1;
                this.multiply = 0;
            }
        }

        else if (this.multiply >= 4 && norVandak) {

            if (this.multiply >= 5 && norVandak) {
                var norXot = new Grass(norVandak[0], norVandak[1]);
                grassArr.push(norXot);
                matrix[norVandak[1]][norVandak[0]] = 1;
                this.multiply = 0;
            }
        }
    }
    yntrelVandak(ch) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
}
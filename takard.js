class Trip {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 0;
        this.directions = [];
        this.index = 9;
        this.hunterTact = 0;

    }

    stanalNorKordinatnerHnt() {
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
    }

    yntrelVandak(ch) {
        this.stanalNorKordinatnerHnt();
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
    krakel() {

        this.hunterTact++;
        var norVandak = random(this.yntrelVandak(2));
        var norVandak2 = random(this.yntrelVandak(2.1));
        var norVandakhn = random(this.yntrelVandak(3));
        var norVandakhn2 = random(this.yntrelVandak(3.1));
        var norVandakhn3 = random(this.yntrelVandak(5));
        if (norVandak) {
            matrix[norVandak[1]][norVandak[0]] = 0;

            this.hunterTact = 0;
            xotakerArr.splice(norVandak, 1);
        }

        else if (norVandak2) {
            matrix[norVandak2[1]][norVandak2[0]] = 0;

            this.hunterTact = 0;
            xotakerArr.splice(norVandak2, 1);
        }
        else if (norVandakhn2) {
            matrix[norVandakhn2[1]][norVandakhn2[0]] = 0;

            this.hunterTact = 0;
            GishatichArr.splice(norVandakhn2, 1);
        }
        else if (norVandakhn) {
            matrix[norVandakhn[1]][norVandakhn[0]] = 0;

            this.hunterTact = 0;
            GishatichArr.splice(norVandakhn, 1);
        }
        else if (norVandakhn3) {
            matrix[norVandakhn3[1]][norVandakhn3[0]] = 0;

            this.hunterTact = 0;
            hunterArr.splice(norVandakhn3, 1);
        }
    }

}
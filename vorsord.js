class Hunter {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 0;
        this.directions = [];
        this.index = 5;
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

    sharjvelhnt() {
        this.hunterTact++;
        var norVandak = random(this.yntrelVandak(0));
        var norVandakhnt = random(this.yntrelVandak(1));
        if(weather === 'winter'){

        if (this.hunterTact >= 18 && norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 5;

            this.x = norVandak[0];
            this.y = norVandak[1];
            this.hunterTact = 0;
            this.energy--;
        }
        else if (this.hunterTact >= 18 && norVandakhnt) {
            matrix[this.y][this.x] = 1;
            matrix[norVandakhnt[1]][norVandakhnt[0]] = 5;

            this.x = norVandakhnt[0];
            this.y = norVandakhnt[1];
            this.hunterTact = 0;
            this.energy--;
        }
    }
    else{

        if (this.hunterTact >= 6 && norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 5;

            this.x = norVandak[0];
            this.y = norVandak[1];
            this.hunterTact = 0;
            this.energy--;
        }
        else if (this.hunterTact >= 6 && norVandakhnt) {
            matrix[this.y][this.x] = 1;
            matrix[norVandakhnt[1]][norVandakhnt[0]] = 5;

            this.x = norVandakhnt[0];
            this.y = norVandakhnt[1];
            this.hunterTact = 0;
            this.energy--;
        }
    }
    }

    krakel() {

        this.hunterTact++;
        var norVandak = random(this.yntrelVandak(2));
        var norVandak2 = random(this.yntrelVandak(2.1));
        var norVandakhn = random(this.yntrelVandak(3));
        var norVandakhn2 = random(this.yntrelVandak(3.1));
        if (norVandak) {
            matrix[norVandak[1]][norVandak[0]] = 0;

            this.hunterTact = 0;
            xotakerArr.splice(norVandak, 1);
        }

        else if (norVandak2) {
            matrix[norVandak2[1]][norVandak2[0]] = 0;

            this.hunterTact = 0;
            GishatichArr.splice(norVandak2, 1);
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
        else {
            this.sharjvelhnt();
        }
    }

}




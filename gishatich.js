class Gishatich {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 0;
        this.directions = [];
        this.index = 3;
        this.gishTact = 0;

    }

    stanalNorKordinatnerGsh() {
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
        this.stanalNorKordinatnerGsh();
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

    sharjvelGsh() {
        this.gishTact++;
        var norVandak = random(this.yntrelVandak(0));
        var norVandakxt = random(this.yntrelVandak(1));
        if (weather === 'summer') {

            if (this.gishTact >= 4 && norVandak) {
                matrix[this.y][this.x] = 0;
                matrix[norVandak[1]][norVandak[0]] = 3;

                this.x = norVandak[0];
                this.y = norVandak[1];
                this.gishTact = 0;
                this.energy--;
            }
            else if (this.gishTact >= 4 && norVandakxt) {
                matrix[this.y][this.x] = 1;
                matrix[norVandakxt[1]][norVandakxt[0]] = 3;

                this.x = norVandakxt[0];
                this.y = norVandakxt[1];
                this.gishTact = 0;
                this.energy--;
            }

        }
        if (weather === 'autumn') {

            if (this.gishTact >= 6 && norVandak) {
                matrix[this.y][this.x] = 0;
                matrix[norVandak[1]][norVandak[0]] = 3;

                this.x = norVandak[0];
                this.y = norVandak[1];
                this.gishTact = 0;
                this.energy--;
            }
            else if (this.gishTact >= 6 && norVandakxt) {
                matrix[this.y][this.x] = 1;
                matrix[norVandakxt[1]][norVandakxt[0]] = 3;

                this.x = norVandakxt[0];
                this.y = norVandakxt[1];
                this.gishTact = 0;
                this.energy--;
            }

        }

        if (weather === 'winter') {

            if (this.gishTact >= 12 && norVandak) {
                matrix[this.y][this.x] = 0;
                matrix[norVandak[1]][norVandak[0]] = 3;

                this.x = norVandak[0];
                this.y = norVandak[1];
                this.gishTact = 0;
                this.energy--;
            }
            else if (this.gishTact >= 12 && norVandakxt) {
                matrix[this.y][this.x] = 1;
                matrix[norVandakxt[1]][norVandakxt[0]] = 3;

                this.x = norVandakxt[0];
                this.y = norVandakxt[1];
                this.gishTact = 0;
                this.energy--;
            }

        }

        if (weather === 'spring') {

            if (this.gishTact >= 4 && norVandak) {
                matrix[this.y][this.x] = 0;
                matrix[norVandak[1]][norVandak[0]] = 3;

                this.x = norVandak[0];
                this.y = norVandak[1];
                this.gishTact = 0;
                this.energy--;
            }
            else if (this.gishTact >= 4 && norVandakxt) {
                matrix[this.y][this.x] = 1;
                matrix[norVandakxt[1]][norVandakxt[0]] = 3;

                this.x = norVandakxt[0];
                this.y = norVandakxt[1];
                this.gishTact = 0;
                this.energy--;
            }

        }
    }

    utelgs() {
        this.gishTact++;
        var norVandak = random(this.yntrelVandak(2));

        var norVandakre = random(this.yntrelVandak(2));
        if (weather === 'winter') {

            if (this.gishTact >= 10 && norVandak) {
                matrix[this.y][this.x] = 0;
                matrix[norVandak[1]][norVandak[0]] = 3;

                this.x = norVandak[0];
                this.y = norVandak[1];
                this.gishTact = 0;

                this.energy++;

                for (var g in GishatichArr) {
                    for (var n in xotakerArr) {
                        if (xotakerArr[n].x == GishatichArr[g].x && xotakerArr[n].y == GishatichArr[g].y) {
                            xotakerArr.splice(n, 1);
                            break;
                        }
                    }
                }

            }
            else if (this.gishTact >= 10 && norVandakre) {
                matrix[this.y][this.x] = 0;
                matrix[norVandak[1]][norVandak[0]] = 3;

                this.x = norVandak[0];
                this.y = norVandak[1];
                this.gishTact = 0;

                this.energy++;

                for (var g in GishatichArr) {
                    for (var n in xotakerArr) {
                        if (xotakerArr[n].x == GishatichArr[g].x && xotakerArr[n].y == GishatichArr[g].y) {
                            xotakerArr.splice(n, 1);
                            break;
                        }
                    }
                }

            }
            else {
                this.sharjvelGsh();
            }
        }
        else {

            if (this.gishTact >= 5 && norVandak) {
                matrix[this.y][this.x] = 0;
                matrix[norVandak[1]][norVandak[0]] = 3;

                this.x = norVandak[0];
                this.y = norVandak[1];
                this.gishTact = 0;

                this.energy++;

                for (var g in GishatichArr) {
                    for (var n in xotakerArr) {
                        if (xotakerArr[n].x == GishatichArr[g].x && xotakerArr[n].y == GishatichArr[g].y) {
                            xotakerArr.splice(n, 1);
                            break;
                        }
                    }
                }

            }
            else if (this.gishTact >= 5 && norVandakre) {
                matrix[this.y][this.x] = 0;
                matrix[norVandak[1]][norVandak[0]] = 3;

                this.x = norVandak[0];
                this.y = norVandak[1];
                this.gishTact = 0;

                this.energy++;

                for (var g in GishatichArr) {
                    for (var n in xotakerArr) {
                        if (xotakerArr[n].x == GishatichArr[g].x && xotakerArr[n].y == GishatichArr[g].y) {
                            xotakerArr.splice(n, 1);
                            break;
                        }
                    }
                }

            }
            else {
                this.sharjvelGsh();
            }
        }
    }
    bazmanalGsh() {
        var norVandak = random(this.yntrelVandak(3.1));
        this.gishTact = 0;
        if (norVandak) {

        var norGishatich = new Gishatich(norVandak[0], norVandak[1]);
        GishatichArr.push(norGishatich);
            if(Math.random() < 0.5){

                matrix[norVandak[1]][norVandak[0]] = 3;
                this.gishTact = 0;
            }
            else{

                matrix[norVandak[1]][norVandak[0]] = 3.1;
                this.gishTact = 0;
            }
        }

        this.energy = 0;
    }

    mernelGsh() {

        this.energy = 0;
        matrix[this.y][this.x] = 0;
        this.gishTact = 0;

    }

}

class GishatichEg {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 0;
        this.directions = [];
        this.index = 3.1;
        this.gishTact = 0;

    }

    stanalNorKordinatnerGsh() {
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
        this.stanalNorKordinatnerGsh();
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

    sharjvelGsh() {
        this.gishTact++;
        var norVandak = random(this.yntrelVandak(0));
        var norVandakxt = random(this.yntrelVandak(1));
        if (weather === 'summer') {

            if (this.gishTact >= 4 && norVandak) {
                matrix[this.y][this.x] = 0;
                matrix[norVandak[1]][norVandak[0]] = 3.1;

                this.x = norVandak[0];
                this.y = norVandak[1];
                this.gishTact = 0;
                this.energy--;
            }
            else if (this.gishTact >= 4 && norVandakxt) {
                matrix[this.y][this.x] = 1;
                matrix[norVandakxt[1]][norVandakxt[0]] = 3.1;

                this.x = norVandakxt[0];
                this.y = norVandakxt[1];
                this.gishTact = 0;
                this.energy--;
            }

        }
        if (weather === 'autumn') {

            if (this.gishTact >= 6 && norVandak) {
                matrix[this.y][this.x] = 0;
                matrix[norVandak[1]][norVandak[0]] = 3.1;

                this.x = norVandak[0];
                this.y = norVandak[1];
                this.gishTact = 0;
                this.energy--;
            }
            else if (this.gishTact >= 6 && norVandakxt) {
                matrix[this.y][this.x] = 1;
                matrix[norVandakxt[1]][norVandakxt[0]] = 3.1;

                this.x = norVandakxt[0];
                this.y = norVandakxt[1];
                this.gishTact = 0;
                this.energy--;
            }

        }

        if (weather === 'winter') {

            if (this.gishTact >= 12 && norVandak) {
                matrix[this.y][this.x] = 0;
                matrix[norVandak[1]][norVandak[0]] = 3.1;

                this.x = norVandak[0];
                this.y = norVandak[1];
                this.gishTact = 0;
                this.energy--;
            }
            else if (this.gishTact >= 12 && norVandakxt) {
                matrix[this.y][this.x] = 1;
                matrix[norVandakxt[1]][norVandakxt[0]] = 3.1;

                this.x = norVandakxt[0];
                this.y = norVandakxt[1];
                this.gishTact = 0;
                this.energy--;
            }

        }

        if (weather === 'spring') {

            if (this.gishTact >= 4 && norVandak) {
                matrix[this.y][this.x] = 0;
                matrix[norVandak[1]][norVandak[0]] = 3.1;

                this.x = norVandak[0];
                this.y = norVandak[1];
                this.gishTact = 0;
                this.energy--;
            }
            else if (this.gishTact >= 4 && norVandakxt) {
                matrix[this.y][this.x] = 1;
                matrix[norVandakxt[1]][norVandakxt[0]] = 3.1;

                this.x = norVandakxt[0];
                this.y = norVandakxt[1];
                this.gishTact = 0;
                this.energy--;
            }

        }
    }

    utelgs() {
        this.gishTact++;
        var norVandak = random(this.yntrelVandak(2));

        var norVandakre = random(this.yntrelVandak(2.1));
        if (weather === 'winter') {

            if (this.gishTact >= 10 && norVandak) {
                matrix[this.y][this.x] = 0;
                matrix[norVandak[1]][norVandak[0]] = 3.1;

                this.x = norVandak[0];
                this.y = norVandak[1];
                this.gishTact = 0;

                this.energy++;

                for (var g in GishatichArr) {
                    for (var n in xotakerArr) {
                        if (xotakerArr[n].x == GishatichArr[g].x && xotakerArr[n].y == GishatichArr[g].y) {
                            xotakerArr.splice(n, 1);
                            break;
                        }
                    }
                }

            }
            else if (this.gishTact >= 10 && norVandakre) {
                matrix[this.y][this.x] = 0;
                matrix[norVandakre[1]][norVandakre[0]] = 3.1;

                this.x = norVandakre[0];
                this.y = norVandakre[1];
                this.gishTact = 0;

                this.energy++;

                for (var g in GishatichArr) {
                    for (var n in xotakerArr) {
                        if (xotakerArr[n].x == GishatichArr[g].x && xotakerArr[n].y == GishatichArr[g].y) {
                            xotakerArr.splice(n, 1);
                            break;
                        }
                    }
                }

            }
            else {
                this.sharjvelGsh();
            }
        }
        else {

            if (this.gishTact >= 5 && norVandak) {
                matrix[this.y][this.x] = 0;
                matrix[norVandak[1]][norVandak[0]] = 3.1;

                this.x = norVandak[0];
                this.y = norVandak[1];
                this.gishTact = 0;

                this.energy++;

                for (var g in GishatichArr) {
                    for (var n in xotakerArr) {
                        if (xotakerArr[n].x == GishatichArr[g].x && xotakerArr[n].y == GishatichArr[g].y) {
                            xotakerArr.splice(n, 1);
                            break;
                        }
                    }
                }

            }
            else if (this.gishTact >= 5 && norVandakre) {
                matrix[this.y][this.x] = 0;
                matrix[norVandakre[1]][norVandakre[0]] = 3.1;

                this.x = norVandakre[0];
                this.y = norVandakre[1];
                this.gishTact = 0;

                this.energy++;

                for (var g in GishatichArr) {
                    for (var n in xotakerArr) {
                        if (xotakerArr[n].x == GishatichArr[g].x && xotakerArr[n].y == GishatichArr[g].y) {
                            xotakerArr.splice(n, 1);
                            break;
                        }
                    }
                }

            }
            else {
                this.sharjvelGsh();
            }
        }
    }
    bazmanalGsh() {
        var norVandak = random(this.yntrelVandak(3));
        if (norVandak) {
            this.gishTact = 0;
        }

        this.energy = 0;
    }

    mernelGsh() {

        this.energy = 0;
        matrix[this.y][this.x] = 0;
        this.gishTact = 0;

    }

}
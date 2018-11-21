class Xotaker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 0;
        this.directions = [];
        this.index = 2;
        this.moveTact = 0;

    }

    stanalNorKordinatner() {
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
        this.stanalNorKordinatner();
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

    sharjvel() {

        this.moveTact++;
        var norVandak = random(this.yntrelVandak(0));
        if (weather === 'summer') {
            if (this.moveTact >= 5 && norVandak) {
                matrix[this.y][this.x] = 0;
                matrix[norVandak[1]][norVandak[0]] = 2;

                this.x = norVandak[0];
                this.y = norVandak[1];
                this.moveTact = 0;
                this.energy--;

            }
        }
        else if (weather === 'autumn') {
            if (this.moveTact >= 7 && norVandak) {
                matrix[this.y][this.x] = 0;
                matrix[norVandak[1]][norVandak[0]] = 2;

                this.x = norVandak[0];
                this.y = norVandak[1];
                this.moveTact = 0;
                this.energy--;

            }
        }

        else if (weather === 'winter') {
            if (this.moveTact >= 13 && norVandak) {
                matrix[this.y][this.x] = 0;
                matrix[norVandak[1]][norVandak[0]] = 2;

                this.x = norVandak[0];
                this.y = norVandak[1];
                this.moveTact = 0;
                this.energy--;

            }
        }

        else if (weather === 'spring') {
            if (this.moveTact >= 4 && norVandak) {
                matrix[this.y][this.x] = 0;
                matrix[norVandak[1]][norVandak[0]] = 2;

                this.x = norVandak[0];
                this.y = norVandak[1];
                this.moveTact = 0;
                this.energy--;

            }
        }


    }


    utel() {

        this.moveTact++;
        var norVandak = random(this.yntrelVandak(1));
        if (weather === 'winter') {
            if (this.moveTact >= 11 && norVandak) {
                matrix[this.y][this.x] = 0;
                matrix[norVandak[1]][norVandak[0]] = 2;

                this.x = norVandak[0];
                this.y = norVandak[1];
                this.moveTact = 0;
                for (var a in grassArr) {
                    if (grassArr[a].x == this.x && grassArr[a].y == this.y) {
                        grassArr.splice(a, 1);
                    }
                }

                for (var u in xotakerArr) {

                    if (xotakerArr[u].energy == 5) {
                        xotakerArr[u].bazmanalXt();
                    }
                    if (xotakerArr[u].energy <= -5) {
                        xotakerArr[u].mernel();
                        xotakerArr.splice(u, 1);
                        break;
                    }
                }

                this.energy++;
            }


            else {
                this.sharjvel();
            }
        }
        else {

            if (this.moveTact >= 5 && norVandak) {
                matrix[this.y][this.x] = 0;
                matrix[norVandak[1]][norVandak[0]] = 2;

                this.x = norVandak[0];
                this.y = norVandak[1];
                this.moveTact = 0;
                for (var a in grassArr) {
                    if (grassArr[a].x == this.x && grassArr[a].y == this.y) {
                        grassArr.splice(a, 1);
                    }
                }

                for (var u in xotakerArr) {

                    if (xotakerArr[u].energy == 5) {
                        xotakerArr[u].bazmanalXt();
                    }
                    if (xotakerArr[u].energy <= -5) {
                        xotakerArr[u].mernel();
                        xotakerArr.splice(u, 1);
                        break;
                    }
                }

                this.energy++;
            }


            else {
                this.sharjvel();
                console.log(this.energy);
            }
        }
    }
    bazmanalXt() {
        this.moveTact++;
        var norVandak = random(this.yntrelVandak(2.1));
        var norVandak2 = random(this.yntrelVandak(0));
        if (norVandak && norVandak2 ) {
            var norXotaker = new Xotaker(norVandak2[0], norVandak2[1]);
            xotakerArr.push(norXotaker);
            if(Math.random() < 0.5){

                matrix[norVandak2[1]][norVandak2[0]] = 2;
                this.moveTact = 0;
                
            }
            else{

                matrix[norVandak2[1]][norVandak2[0]] = 2.1;
                this.moveTact = 0;
            }
        }

        this.energy = 0;
    }

    mernel() {

        this.energy = 0;
        matrix[this.y][this.x] = 0;

    }

}

class XotakerEg {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 0;
        this.directions = [];
        this.index = 2.1;
        this.moveTact = 0;

    }

    stanalNorKordinatner() {
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
        this.stanalNorKordinatner();
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

    sharjvel() {

        this.moveTact++;
        var norVandak = random(this.yntrelVandak(0));
        if (weather === 'summer') {
            if (this.moveTact >= 5 && norVandak) {
                matrix[this.y][this.x] = 0;
                matrix[norVandak[1]][norVandak[0]] = 2.1;

                this.x = norVandak[0];
                this.y = norVandak[1];
                this.moveTact = 0;
                this.energy--;

            }
        }
        else if (weather === 'autumn') {
            if (this.moveTact >= 7 && norVandak) {
                matrix[this.y][this.x] = 0;
                matrix[norVandak[1]][norVandak[0]] = 2.1;

                this.x = norVandak[0];
                this.y = norVandak[1];
                this.moveTact = 0;
                this.energy--;

            }
        }

        else if (weather === 'winter') {
            if (this.moveTact >= 13 && norVandak) {
                matrix[this.y][this.x] = 0;
                matrix[norVandak[1]][norVandak[0]] = 2.1;

                this.x = norVandak[0];
                this.y = norVandak[1];
                this.moveTact = 0;
                this.energy--;

            }
        }

        else if (weather === 'spring') {
            if (this.moveTact >= 4 && norVandak) {
                matrix[this.y][this.x] = 0;
                matrix[norVandak[1]][norVandak[0]] = 2.1;

                this.x = norVandak[0];
                this.y = norVandak[1];
                this.moveTact = 0;
                this.energy--;

            }
        }


    }


    utel() {

        this.moveTact++;
        var norVandak = random(this.yntrelVandak(1));
        if (weather === 'winter') {
            if (this.moveTact >= 11 && norVandak) {
                matrix[this.y][this.x] = 0;
                matrix[norVandak[1]][norVandak[0]] = 2.1;

                this.x = norVandak[0];
                this.y = norVandak[1];
                this.moveTact = 0;
                for (var a in grassArr) {
                    if (grassArr[a].x == this.x && grassArr[a].y == this.y) {
                        grassArr.splice(a, 1);
                    }
                }

                for (var u in xotakerArr) {

                    if (xotakerArr[u].energy == 5) {
                        xotakerArr[u].bazmanalXt();
                    }
                    if (xotakerArr[u].energy <= -5) {
                        xotakerArr[u].mernel();
                        xotakerArr.splice(u, 1);
                        break;
                    }
                }

                this.energy++;
            }


            else {
                this.sharjvel();
            }
        }
        else {

            if (this.moveTact >= 5 && norVandak) {
                matrix[this.y][this.x] = 0;
                matrix[norVandak[1]][norVandak[0]] = 2.1;

                this.x = norVandak[0];
                this.y = norVandak[1];
                this.moveTact = 0;
                for (var a in grassArr) {
                    if (grassArr[a].x == this.x && grassArr[a].y == this.y) {
                        grassArr.splice(a, 1);
                    }
                }

                for (var u in xotakerArr) {

                    if (xotakerArr[u].energy == 5) {
                        xotakerArr[u].bazmanalXt();
                    }
                    if (xotakerArr[u].energy <= -5) {
                        xotakerArr[u].mernel();
                        xotakerArr.splice(u, 1);
                        break;
                    }
                }

                this.energy++;
            }


            else {
                this.sharjvel();
            }
        }
    }
    bazmanalXt() {
        this.moveTact++;
        var norVandak = random(this.yntrelVandak(2));
        if (norVandak) {
            
            this.moveTact = 0;
        }

        this.energy = 0;
    }

    mernel() {

        this.energy = 0;
        matrix[this.y][this.x] = 0;

    }

}
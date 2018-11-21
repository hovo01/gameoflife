class Zombi {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.directions = [];
        this.index = 4;
        this.zombiTact = 0;

    }

    stanalNorKordinatnerZombi() {
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
        this.stanalNorKordinatnerZombi();
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

    sharjvelZombi() {
        this.zombiTact++;
        var norVandak = random(this.yntrelVandak(0));
        var norVandakzmb = random(this.yntrelVandak(1));
        if (weather === 'winter') {

            if (this.zombiTact >= 27 && norVandak) {
                matrix[this.y][this.x] = 0;
                matrix[norVandak[1]][norVandak[0]] = 4;

                this.x = norVandak[0];
                this.y = norVandak[1];
                this.zombiTact = 0;
            }
            else if (this.zombiTact >= 27 && norVandakzmb) {
                matrix[this.y][this.x] = 1;
                matrix[norVandakzmb[1]][norVandakzmb[0]] = 4;

                this.x = norVandakzmb[0];
                this.y = norVandakzmb[1];
                this.zombiTact = 0;
            }
        }
        else {
            if (this.zombiTact >= 7 && norVandak) {
                matrix[this.y][this.x] = 0;
                matrix[norVandak[1]][norVandak[0]] = 4;

                this.x = norVandak[0];
                this.y = norVandak[1];
                this.zombiTact = 0;
            }
            else if (this.zombiTact >= 7 && norVandakzmb) {
                matrix[this.y][this.x] = 1;
                matrix[norVandakzmb[1]][norVandakzmb[0]] = 4;

                this.x = norVandakzmb[0];
                this.y = norVandakzmb[1];
                this.zombiTact = 0;
            }
        }
    }

    utelZombi() {
        this.zombiTact++;
        var norVandak = random(this.yntrelVandak(2));
        var norVandak2 = random(this.yntrelVandak(2.1));
        var norVandakZombi = random(this.yntrelVandak(3));
        var norVandakZombi2 = random(this.yntrelVandak(3.1));
        var norVandakZombihnt = random(this.yntrelVandak(5));
        if (weather === 'winter') {

            if (this.zombiTact >= 24 && norVandak) {
                matrix[this.y][this.x] = 4;
                matrix[norVandak[1]][norVandak[0]] = 4;

                this.x = norVandak[0];
                this.y = norVandak[1];
                this.zombiTact = 0;

                var norZombi = new Zombi(norVandak[0], norVandak[1]);
                ZombiArr.push(norZombi);
                matrix[norVandak[1]][norVandak[0]] = 4;
            }
            if (this.zombiTact >= 24 && norVandak2) {
                matrix[this.y][this.x] = 4;
                matrix[norVandak2[1]][norVandak2[0]] = 4;

                this.x = norVandak2[0];
                this.y = norVandak2[1];
                this.zombiTact = 0;

                var norZombi = new Zombi(norVandak2[0], norVandak2[1]);
                ZombiArr.push(norZombi);
                matrix[norVandak2[1]][norVandak2[0]] = 4;
            }
            if (this.zombiTact >= 24 && norVandakZombi) {
                matrix[this.y][this.x] = 4;
                matrix[norVandakZombi[1]][norVandakZombi[0]] = 4;

                this.x = norVandakZombi[0];
                this.y = norVandakZombi[1];
                this.zombiTact = 0;

                var norZombi = new Zombi(norVandakZombi[0], norVandakZombi[1]);
                ZombiArr.push(norZombi);
                matrix[norVandakZombi[1]][norVandakZombi[0]] = 4;
            }
            if (this.zombiTact >= 24 && norVandakZombi2) {
                matrix[this.y][this.x] = 4;
                matrix[norVandakZombi2[1]][norVandakZombi2[0]] = 4;

                this.x = norVandakZombi2[0];
                this.y = norVandakZombi2[1];
                this.zombiTact = 0;

                var norZombi = new Zombi(norVandakZombi2[0], norVandakZombi2[1]);
                ZombiArr.push(norZombi);
                matrix[norVandakZombi2[1]][norVandakZombi2[0]] = 4;
            }

            if (this.zombiTact >= 24 && norVandakZombihnt) {
                matrix[this.y][this.x] = 4;
                matrix[norVandakZombihnt[1]][norVandakZombihnt[0]] = 4;

                this.x = norVandakZombihnt[0];
                this.y = norVandakZombihnt[1];
                this.zombiTact = 0;

                var norZombi = new Zombi(norVandakZombihnt[0], norVandakZombihnt[1]);
                ZombiArr.push(norZombi);
                matrix[norVandakZombihnt[1]][norVandakZombihnt[0]] = 4;
            }
            else {
                this.sharjvelZombi();
            }
        }
        else {

            if (this.zombiTact >= 7 && norVandak) {
                matrix[this.y][this.x] = 4;
                matrix[norVandak[1]][norVandak[0]] = 4;

                this.x = norVandak[0];
                this.y = norVandak[1];
                this.zombiTact = 0;

                var norZombi = new Zombi(norVandak[0], norVandak[1]);
                ZombiArr.push(norZombi);
                matrix[norVandak[1]][norVandak[0]] = 4;
            }
            if (this.zombiTact >= 7 && norVandak2) {
                matrix[this.y][this.x] = 4;
                matrix[norVandak2[1]][norVandak2[0]] = 4;

                this.x = norVandak2[0];
                this.y = norVandak2[1];
                this.zombiTact = 0;

                var norZombi = new Zombi(norVandak2[0], norVandak2[1]);
                ZombiArr.push(norZombi);
                matrix[norVandak2[1]][norVandak2[0]] = 4;
            }
            if (this.zombiTact >= 7 && norVandakZombi) {
                matrix[this.y][this.x] = 4;
                matrix[norVandakZombi[1]][norVandakZombi[0]] = 4;

                this.x = norVandakZombi[0];
                this.y = norVandakZombi[1];
                this.zombiTact = 0;

                var norZombi = new Zombi(norVandakZombi[0], norVandakZombi[1]);
                ZombiArr.push(norZombi);
                matrix[norVandakZombi[1]][norVandakZombi[0]] = 4;
            }
            if (this.zombiTact >= 7 && norVandakZombi2) {
                matrix[this.y][this.x] = 4;
                matrix[norVandakZombi2[1]][norVandakZombi2[0]] = 4;

                this.x = norVandakZombi2[0];
                this.y = norVandakZombi2[1];
                this.zombiTact = 0;

                var norZombi = new Zombi(norVandakZombi2[0], norVandakZombi2[1]);
                ZombiArr.push(norZombi);
                matrix[norVandakZombi2[1]][norVandakZombi2[0]] = 4;
            }

            if (this.zombiTact >= 7 && norVandakZombihnt) {
                matrix[this.y][this.x] = 4;
                matrix[norVandakZombihnt[1]][norVandakZombihnt[0]] = 4;

                this.x = norVandakZombihnt[0];
                this.y = norVandakZombihnt[1];
                this.zombiTact = 0;

                var norZombi = new Zombi(norVandakZombihnt[0], norVandakZombihnt[1]);
                ZombiArr.push(norZombi);
                matrix[norVandakZombihnt[1]][norVandakZombihnt[0]] = 4;
            }
            else {
                this.sharjvelZombi();
            }
        }
    }

}
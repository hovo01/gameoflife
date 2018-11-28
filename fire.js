class Fire {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.directions = [];
        this.index = 6;
        this.firetact = 0;
        this.energy=0;

    }

    stanalNorKordinatnerFire() {
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
        this.stanalNorKordinatnerFire();
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

    sharjvelFire() {
        this.firetact++;
        this.energy--;
        var norVandak = random(this.yntrelVandak(0));
        if (weather === 'winter') {

            if (this.firetact >= 27 && norVandak) {
                matrix[this.y][this.x] = 0;
                matrix[norVandak[1]][norVandak[0]] = 6;

                this.x = norVandak[0];
                this.y = norVandak[1];
                this.firetact = 0;
                
            }
        }
        else {
            if (this.firetact >= 7 && norVandak) {
                matrix[this.y][this.x] = 0;
                matrix[norVandak[1]][norVandak[0]] = 6;

                this.x = norVandak[0];
                this.y = norVandak[1];
                this.firetact = 0;
               
            }
        }
    }
hangel(){
    matrix[this.y][this.x] = 0;
}

    utelFire() {
        this.firetact++;
        this.energy--;
        var norVandakxot = random(this.yntrelVandak(1));
        var norVandak = random(this.yntrelVandak(2));
        var norVandak2 = random(this.yntrelVandak(2.1));
        var norVandakZombi = random(this.yntrelVandak(3));
        var norVandakZombi2 = random(this.yntrelVandak(3.1));
        var norVandak4 = random(this.yntrelVandak(4));
        var norVandakZombihnt = random(this.yntrelVandak(5));
        if (weather === 'winter') {

            if (this.firetact >= 24 && norVandakxot) {
                matrix[this.y][this.x] = 6;
                matrix[norVandakxot[1]][norVandakxot[0]] = 6;

                this.x = norVandakxot[0];
                this.y = norVandakxot[1];
                this.firetact = 0;

                var norFire = new Fire(norVandakxot[0], norVandakxot[1]);
                FireArr.push(norFire);
                matrix[norVandakxot[1]][norVandakxot[0]] = 6;
                
            } 
            if (this.firetact >= 24 && norVandak) {
                matrix[this.y][this.x] = 6;
                matrix[norVandak[1]][norVandak[0]] = 6;

                this.x = norVandak[0];
                this.y = norVandak[1];
                this.firetact = 0;

                var norFire = new Fire(norVandak[0], norVandak[1]);
                FireArr.push(norFire);
                matrix[norVandak[1]][norVandak[0]] = 6;
                
            }
            if (this.firetact >= 24 && norVandak2) {
                matrix[this.y][this.x] = 6;
                matrix[norVandak2[1]][norVandak2[0]] = 6;

                this.x = norVandak2[0];
                this.y = norVandak2[1];
                this.firetact = 0;

                var norFire = new Fire(norVandak2[0], norVandak2[1]);
                FireArr.push(norFire);
                matrix[norVandak2[1]][norVandak2[0]] = 6;
                
            }
            if (this.firetact >= 24 && norVandakZombi) {
                matrix[this.y][this.x] = 6;
                matrix[norVandakZombi[1]][norVandakZombi[0]] = 6;

                this.x = norVandakZombi[0];
                this.y = norVandakZombi[1];
                this.firetact = 0;

                var norFire = new Fire(norVandakZombi[0], norVandakZombi[1]);
                FireArr.push(norFire);
                matrix[norVandakZombi[1]][norVandakZombi[0]] = 6;
                
            }
            if (this.firetact >= 24 && norVandakZombi2) {
                matrix[this.y][this.x] = 6;
                matrix[norVandakZombi2[1]][norVandakZombi2[0]] = 6;

                this.x = norVandakZombi2[0];
                this.y = norVandakZombi2[1];
                this.firetact = 0;

                var norFire = new Fire(norVandakZombi2[0], norVandakZombi2[1]);
                FireArr.push(norFire);
                matrix[v[1]][norVandakZombi2[0]] = 6;
                
            }
           

            if (this.firetact >= 24 && norVandakZombihnt) {
                matrix[this.y][this.x] = 6;
                matrix[norVandakZombihnt[1]][norVandakZombihnt[0]] = 6;

                this.x = norVandakZombihnt[0];
                this.y = norVandakZombihnt[1];
                this.firetact = 0;

                var norFire = new Fire(norVandakZombihnt[0], norVandakZombihnt[1]);
                FireArr.push(norFire);
                matrix[norVandakZombihnt[1]][norVandakZombihnt[0]] = 6;
               
            }
            else {
                this.sharjvelFire();
            }
        }
        else {
            if (this.firetact >= 7 && norVandakxot) {
                matrix[this.y][this.x] = 6;
                matrix[norVandakxot[1]][norVandakxot[0]] = 6;

                this.x = norVandakxot[0];
                this.y = norVandakxot[1];
                this.firetact = 0;

                var norFire = new Fire(norVandakxot[0], norVandakxot[1]);
                FireArr.push(norFire);
                matrix[norVandakxot[1]][norVandakxot[0]] = 6;
                
            }
            if (this.firetact >= 7 && norVandak) {
                matrix[this.y][this.x] = 6;
                matrix[norVandak[1]][norVandak[0]] = 6;

                this.x = norVandak[0];
                this.y = norVandak[1];
                this.firetact = 0;

                var norFire = new Fire(norVandak[0], norVandak[1]);
                FireArr.push(norFire);
                matrix[norVandak[1]][norVandak[0]] = 6;
               
            }
            if (this.firetact >= 7 && norVandak2) {
                matrix[this.y][this.x] = 6;
                matrix[norVandak2[1]][norVandak2[0]] = 6;

                this.x = norVandak2[0];
                this.y = norVandak2[1];
                this.firetact = 0;

                var norFire = new Fire(norVandak2[0], norVandak2[1]);
                FireArr.push(norFire);
                matrix[norVandak2[1]][norVandak2[0]] = 6;
               
            }
            if (this.firetact >= 7 && norVandakZombi) {
                matrix[this.y][this.x] = 6;
                matrix[norVandakZombi[1]][norVandakZombi[0]] = 6;

                this.x = norVandakZombi[0];
                this.y = norVandakZombi[1];
                this.firetact = 0;

                var norFire = new Fire(norVandakZombi[0], norVandakZombi[1]);
                FireArr.push(norFire);
                matrix[norVandakZombi[1]][norVandakZombi[0]] = 6;
                
            }
            if (this.firetact >= 7 && norVandakZombi2) {
                matrix[this.y][this.x] = 6;
                matrix[norVandakZombi2[1]][norVandakZombi2[0]] = 6;

                this.x = norVandakZombi2[0];
                this.y = norVandakZombi2[1];
                this.firetact = 0;

                var norFire = new Fire(norVandakZombi2[0], norVandakZombi2[1]);
                FireArr.push(norFire);
                matrix[norVandakZombi2[1]][norVandakZombi2[0]] = 6;
              
            }
            

            if (this.firetact >= 7 && norVandakZombihnt) {
                matrix[this.y][this.x] = 6;
                matrix[norVandakZombihnt[1]][norVandakZombihnt[0]] = 6;

                this.x = norVandakZombihnt[0];
                this.y = norVandakZombihnt[1];
                this.firetact = 0;

                var norFire = new Fire(norVandakZombihnt[0], norVandakZombihnt[1]);
                FireArr.push(norFire);
                matrix[norVandakZombihnt[1]][norVandakZombihnt[0]] = 6;
            
            }
            else {
                this.sharjvelFire();
            }
        }
    }
  

}
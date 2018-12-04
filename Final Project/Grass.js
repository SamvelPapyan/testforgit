class Grass extends Root{
	constructor(n, m) {
		super(n, m);
	}
	bazmanal() {
		this.multiply++;
		var datarkVandakner = this.yntrelVandak(0);
		var norVandak = random(datarkVandakner);
		if (norVandak && this.multiply >= 3) {
			var norx = norVandak[0];
			var nory = norVandak[1];
			var norXot = new Grass(norx, nory);
			grassArr.push(norXot);
			matrix[nory][norx] = 1;
			this.multiply = 0;
		}
	}
}
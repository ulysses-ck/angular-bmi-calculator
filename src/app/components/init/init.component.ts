import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-init',
	templateUrl: './init.component.html',
	styleUrls: ['./init.component.css'],
})
export class InitComponent {
	age = 25;
	weight = 60;
	height = 170;
	sex = 'Masculine';

	constructor(private router: Router) {}

	changeHeight(event: any) {
		this.height = event.target.valueAsNumber;
	}

	masculine() {
		this.sex = 'Masculine';
	}

	femenine() {
		this.sex = 'Femenine';
	}

	calculateBMI() {
		const BMI = this.weight / Math.pow(this.height / 100, 2);

		this.router.navigate(['/result', BMI.toFixed(2)]);
	}
}

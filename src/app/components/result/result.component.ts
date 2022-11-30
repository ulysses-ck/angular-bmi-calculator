import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-result',
	templateUrl: './result.component.html',
	styleUrls: ['./result.component.css'],
})
export class ResultComponent {
	bmi: number = 0;
	result: string = '';
	interpretation: string = '';

	constructor(private route: ActivatedRoute) {
		this.bmi = Number(route.snapshot.paramMap.get('value'))!;
	}

	ngOnInit(): void {
		this.getResult();
	}

	getResult() {
		if (this.bmi >= 25) {
			this.result = 'Excess weight';
			this.interpretation =
				'You have a higher than normal body weight. Try to exercise more';
		} else if (this.bmi >= 18.5) {
			this.result = 'Standard';
			this.interpretation = 'You have a normal body weight. Good job!';
		} else {
			this.result = 'Low weight';
			this.interpretation =
				'You are underweight. You can eat a little more';
		}
	}
}

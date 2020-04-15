import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
    selector: 'app-donuts',
    templateUrl: './donuts.component.html',
    styleUrls: ['./donuts.component.scss'],
})
export class DonutsComponent implements OnInit {
    donuts: any[] = [];

    constructor(private http: HttpClient) {
        const donuts$ = this.http.get<any[]>(`${environment.API.BASE_URL}/donuts`);

        donuts$.subscribe(res => {
            this.donuts = res;
        });
    }

    ngOnInit(): void {}
}

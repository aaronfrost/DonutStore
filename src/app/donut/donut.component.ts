import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pluck, switchMap, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Component({
    selector: 'app-donut',
    templateUrl: './donut.component.html',
    styleUrls: ['./donut.component.scss'],
})
export class DonutComponent implements OnInit {
    donut: any = null;

    constructor(private route: ActivatedRoute, private http: HttpClient) {
        const donut$ = this.route.parent.params.pipe(
            pluck('donutId'),
            switchMap(id => this.http.get<any>(`${environment.API.BASE_URL}/donuts/${id}`)),
        );

        donut$.subscribe(res => {
            this.donut = res;
        });
    }

    ngOnInit(): void {}
}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router, ROUTES } from '@angular/router';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { map } from 'rxjs/operators';

declare var ng: any;

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss'],
    preserveWhitespaces: true,
    encapsulation: ViewEncapsulation.Emulated,
})
export class BlogComponent implements OnInit {
    blogs$ = this.scullyRoutes.available$
        .pipe
        // map(routes => routes.filter(r => r.title && r.published == 'published')),
        ();

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        public scullyRoutes: ScullyRoutesService,
    ) {}

    ngOnInit() {}
}

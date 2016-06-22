import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hero } from './hero';
import { RouteParams } from '@angular/router-deprecated';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-hero-detail',
    styleUrls: ['app/hero-detail.component.css'],
    templateUrl: 'app/hero-detail.component.html'
})

export class HeroDetailComponent implements OnInit {
    @Input()
    hero: Hero;

    @Output()
    close = new EventEmitter();

    error: any;

    navigated = false;
    
    ngOnInit() {
        if (this.routeParams.get('id') !== null) {
            let id = +this.routeParams.get('id');
            this.navigated = true;
            this.heroService.getHero(id)
                .then(hero => this.hero = hero);
        } else {
            this.navigated = false;
            this.hero = new Hero();
        }
        
    }
    
    constructor(private heroService: HeroService,
                private routeParams: RouteParams) {
    }
    
    goBack(saveHero: Hero = null) {
        this.close.emit(saveHero);
        if (this.navigated) {
            window.history.back();
        }
    }
    
    save() {
        this.heroService
            .save(this.hero)
            .then(hero => {
                this.hero = hero; // saved hero, w/ id if new
                this.goBack(hero);
            })
            .catch(error => this.error = error); // TODO: Display error message
    }

};

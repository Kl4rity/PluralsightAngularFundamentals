import {Component} from '@angular/core';

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styles:[`
        .nav.navbar-nav {font-size: 15px;}
        #searchForm {maring-right: 100px;}
        @media (max-width:1200 px) {#searchForm (display: none)}
    `]
})

export class NavBarComponent{

}
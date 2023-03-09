import { Component, NO_ERRORS_SCHEMA, OnDestroy } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { filter, map, Subscription } from 'rxjs';
import { ActivationEnd, Router } from '@angular/router';



@Component({
	selector: 'app-menu',
	standalone: true,
	imports: [NgbCollapseModule, RouterLink, NgbDropdownModule],
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.css'],
	
})


export class NgbdCollapseNavbar {
	// Step 1:
	// Create a property to track whether the menu is open.
	// Start with the menu collapsed so that it does not
	// appear initially when the page loads on a small screen!
	isMenuCollapsed = true;
	collapsed = true;

  public titulo?:string;
  public tituloSubs$?:Subscription;

  constructor(private router:Router) {
    this.tituloSubs$=this.getArgumentos().subscribe(({titulo})=>{
	  if(titulo!='HOME'){
		this.titulo = titulo;
	  }else{
		this.titulo='';
	  }
      
      document.title = `AdminLte - ${titulo}`;

    })

  }

  ngOnDestroy(): void{
		this.tituloSubs$?.unsubscribe();
  }

  getArgumentos(){
    return this.router.events.pipe(
      filter((event:any) => event instanceof ActivationEnd),
      filter((event:ActivationEnd)=> event.snapshot.firstChild === null),
      map((event:ActivationEnd)=> event.snapshot.data)
	  

    )
	
  }
	
}

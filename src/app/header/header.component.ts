import { PersonneService } from './../services/personne.service';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Personne } from '../models/personne';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUrl= '';
  personne:Personne={};
  isOpen: boolean = false;


  constructor(private router: Router, private authService: AuthService,
    private personService:PersonneService, private personneServ: PersonneService) { }

  ngOnInit() {
    // Subscribe to router events to track the current URL
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Update the currentUrl variable with the current URL
        this.currentUrl = event.url;
      }
    });
    this.fetchPersonne();
  }
  fetchPersonne(): void {
    let id = Number (localStorage.getItem('idAuth'));
    this.personService.showOnePerson(id).subscribe(
      (data: any) => {
        this.personne = data;
        console.log("///////////////////personnne////////////")
        console.log(this.personne);
    },
    error => {
      console.log('Une erreur s\'est produite lors du chargement des catégories : ', error);
    }
   );
  }
  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
  viewRecettes(): void {
    this.router.navigate(['recettes']);
  }

  addRecette(): void {
    this.router.navigate(['recettes/add']);
  }

  login(): void {
    this.router.navigate(['login']);
  }

  status = false;

  addToggle() {
    this.status = !this.status;
  }
  viewProfile(){
    let id = Number (localStorage.getItem('idAuth'));
    this.router.navigate(['profile',id])
  }




  //Flexing of the header during entering the recette page
  isAddRecettesPage() {
    return this.currentUrl === '/recettes_add';
  }

  isUpdateRecettePage() {
    return this.currentUrl.includes('/recettes/update/');
  }

  isAuthenticated(): boolean{
    return this.authService.isAuthenticated();
  }

  logout() {
    this.authService.logout().subscribe(
      (data) => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Logout error : '+error);
      }
    );
  }
}

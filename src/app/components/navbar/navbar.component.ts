import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isFixed = false;
  currentFixed: any;
  isShow = true;
  currentShow: any;
  isPopup = true;
  formPopup: any;
  stretching: boolean = false;
  scrolled: boolean = false;
  awake: boolean = false;
  display: boolean = false;
  logo = 'assets/images/logo.png';
  logoMobile = 'assets/images/logo.png';

  @HostListener('window:scroll', ['$event'])
  scrollHandler(event) {
    // hieu ung day navbar

    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
      this.isFixed = true;
      this.logo = 'assets/images/logo-w.png';
    } else {
      this.isFixed = false;
      this.logo = 'assets/images/logo.png';
    }
  }

  info = {
    address: '466 Nguyễn Trãi, P.8, Q.5, TPHCM',
    phone: '(028) 38-366-789',
  };

  tab = {
    link_1: 'Home',
    link_2: 'Hotel',
    link_3: 'Flights',
    link_4: 'Forecast',
    link_5: 'Booking',
    link_6: 'Login',
  };

  showNavbar() {
    this.currentShow = { active: this.isShow };
    this.isShow = !this.isShow;
  }

  openCloseForm() {
    this.formPopup = { formactive: this.isPopup };
    this.isPopup = !this.isPopup;
  }

  showMobileNav() {
    this.stretching = !this.stretching;
  }

  hiddenMobileNav() {
    this.stretching = !this.stretching;
  }

  constructor() {}
  ngOnInit() {}
}

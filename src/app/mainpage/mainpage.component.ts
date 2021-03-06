import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
    currentUser: any;
    private errorMessage: any;
    prov_is_active: boolean = false;
    prov_rate_signed: boolean = false;
    prov_primary: boolean = false;
    currentProvider: any;

  value = 'value'
  constructor(private router: Router, private authServ: AuthService) { }

  ngOnInit(): void {
        if (sessionStorage.getItem('login_id') !== null) {
            this.currentProvider = {
                name: sessionStorage.getItem('providerName'),
                address_line1: sessionStorage.getItem('providerAdd1'),
                address_line2: sessionStorage.getItem('providerAdd2'),
                address_line3: sessionStorage.getItem('providerAdd3'),
                country: sessionStorage.getItem('providerCountry'),
                city: sessionStorage.getItem('providerCity'),
                state: sessionStorage.getItem('providerState'),
                zip_code: sessionStorage.getItem('providerZipcode'),
                phone: sessionStorage.getItem('providerPhone'),
                phone_ext: sessionStorage.getItem('providerPhoneExt'),
                fax: sessionStorage.getItem('providerFax'),
                toll_free: sessionStorage.getItem('providerTollFree'),
                email: sessionStorage.getItem('providerEmail'),
                primary_contact: sessionStorage.getItem('providerPrimaryContact'),
                time_zone: sessionStorage.getItem('providerTimeZone'),
                hour_start: sessionStorage.getItem('providerHourStart'),
                hour_end: sessionStorage.getItem('providerHourEnd')

            }
            
            this.prov_is_active = ((sessionStorage.getItem('providerActive')) === 'true') ? true : false;
            this.prov_rate_signed = ((sessionStorage.getItem('providerRateSigned')) === 'true') ? true : false;
            this.prov_primary = ((sessionStorage.getItem('providerPrimary')) === 'true') ? true : false;
            // console.log("sess active read as: " + (sessionStorage.getItem('providerActive')));
            // console.log("setting prov_is_active to: " + this.prov_is_active);
        
        }
        else {

            this.authServ.getCurrentUser().subscribe(
                (data) => {
                    this.currentUser = data;
                    this.prov_is_active = this.currentUser.provider[0].active;
                    this.prov_rate_signed = this.currentUser.provider[0].rate_signed;
                    this.prov_primary = this.currentUser.provider[0].primary;
                },
                (error) => this.errorMessage = error
            )      
        }



  }

  countries: any = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua & Deps", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Central African Rep", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Congo {Democratic Rep}", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland {Republic}", "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea North", "Korea South", "Kosovo", "Kuwait", "Kyrgyzstan", 
                    "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar, {Burma}", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russian Federation", "Rwanda", "St Kitts & Nevis", "St Lucia", "Saint Vincent & the Grenadines", "Samoa", "San Marino", "Sao Tome & Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad & Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"]
  

}

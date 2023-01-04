import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AppConfigService } from './providers/app-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = environment.var_prueba_ng;
  variablesOC:any;

  constructor(private http: HttpClient, private config: AppConfigService) {
    console.log(this.config.getConfig());
    this.variablesOC=this.config.getConfig();
  }
}

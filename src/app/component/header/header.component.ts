import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { VidyoClientService } from '../../service/vidyo-client.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output()
  showSetting: EventEmitter<any> = new EventEmitter<any>();

  /**
  * Description: Constructor of header component
  * @param object  vidyoClientService
  */
  constructor(private vidyoClientService: VidyoClientService) { }

  /**
  * Description: oninit of header component
  */
  ngOnInit() {
  }

  /**
  * Description: Set the show setting valut to true
  */
  displaySetting() {
    this.showSetting.emit(true);
  }

  /**
  * Description: logout the application by calling serice method
  */
  logout() {
    this.vidyoClientService.logout();
  }

}

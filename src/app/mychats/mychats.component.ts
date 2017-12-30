import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { HubConnection } from '@aspnet/signalr-client'; 
@Component({
    selector: 'app-mychats',
    templateUrl: './mychats.component.html',
    styleUrls: ['./mychats.component.css']
})
export class MychatsComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        var connection = new HubConnection('http://localhost:50000/messaging');
        connection.start().then(() => console.log("connected to the hub"));
        connection.on('Send', (data) => {
            console.log(data);
        });
        $(document).ready(function () {
            $(function () {
                $(".heading-compose").click(function () {
                    $(".side-two").css({
                        "left": "0"
                    });
                });

                $(".newMessage-back").click(function () {
                    $(".side-two").css({
                        "left": "-100%"
                    });
                });
            })
        });
    }
    sendMessage(t:any) {

        var message = $(".message").append(`<div _ngcontent-c33 class="row message-body">
                                                <div class="col-sm-12 message-main-sender">
                                                    <div class="sender">
                                                        <div class="message-text">Hi, what are you doing? !</div>
                                                        <span class="message-time pull-right">Sun</span>
                                                    </div>
                                                </div>
                                            </div>`);
        //$(".message").append(message); 
    }
   

}

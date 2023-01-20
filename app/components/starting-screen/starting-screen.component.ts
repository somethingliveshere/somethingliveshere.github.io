import {AfterViewInit, Component, OnInit} from '@angular/core';
import {animate, group, state, style, transition, trigger} from "@angular/animations";


declare var anime: any;

@Component({
  selector: 'app-starting-screen',
  templateUrl: './starting-screen.component.html',
  styleUrls: ['./starting-screen.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        'max-height': '100vh', 'opacity': '1', 'visibility': 'visible'
      })),
      state('out', style({
        'max-height': '0px', 'opacity': '0', 'visibility': 'hidden'
      })),
      transition('in => out', [group([

          animate('700ms ease-in-out', style({
            'visibility': 'hidden'
          })),

          animate('600ms ease-in-out', style({
            'max-height': '0px'
          })),
          animate('400ms ease-in-out', style({
            'opacity': '0'
          }))
        ]
      )]),
      transition('out => in', [group([
          animate('1ms ease-in-out', style({
            'visibility': 'visible'
          })),
          animate('600ms ease-in-out', style({
            'max-height': '100vh'
          })),
          animate('500ms ease-in-out', style({
            'opacity': '1'
          }))
        ]
      )])
    ]),
  ]
})
export class StartingScreenComponent implements OnInit, AfterViewInit {

  constructor() { }

  startScreenAnimation: string = 'in';
  mainRoomAnimation: string = 'out';
  currentScreen: string = 'mainRoom';

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const textWrapper: any = document.querySelector('.screen-block__text');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    anime.timeline({loop: true})
      .add({
        targets: '.screen-block__text .letter',
        scale: [4,1],
        opacity: [0,1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 950,
        delay: (el: any, i:  any) => 70*i
      }).add({
      targets: '.screen-block__text',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });
  }

  hideStartingScreen() {
    this.startScreenAnimation = this.startScreenAnimation === 'out' ? 'in' : 'out';
    setTimeout(() => {
      this.mainRoomAnimation = this.startScreenAnimation === 'out' ? 'in' : 'out';
    }, 500);
  }

  changeRoom(room: string) {
    this.currentScreen = room;
  }

}

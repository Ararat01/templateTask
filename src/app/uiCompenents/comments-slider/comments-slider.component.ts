import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { icomment } from 'src/app/interfaces/icomment';
import { commentsSelector } from 'src/app/reducers/createReducer/createdReducers';

@Component({
  selector: 'app-comments-slider',
  templateUrl: './comments-slider.component.html',
  styleUrls: ['./comments-slider.component.scss']
})
export class CommentsSliderComponent implements OnInit {

  constructor(private store: Store) { }
  
  commentsArr: icomment[] = []

  ngOnInit(): void {
    this.store.select(commentsSelector).subscribe((v) => {
      this.commentsArr = v as icomment[];
    })
    console.log(this.commentsArr);
  }

  slideToLeft() {
    let firstComm = [...this.commentsArr].shift()
    if(firstComm) {
      this.commentsArr = [...this.commentsArr.slice(1), firstComm]
    }
  }

  slideToRight() {
    let lastComm = [...this.commentsArr].pop()
    if(lastComm) {
      this.commentsArr = [lastComm, ...this.commentsArr.slice(0, this.commentsArr.length - 1)]
    }
  }

}

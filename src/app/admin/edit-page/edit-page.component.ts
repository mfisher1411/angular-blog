import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params} from '@angular/router';
import {PostsService} from '../../shared/posts.service';
import {switchMap} from 'rxjs/operators';
import {Post} from '../../shared/interfaces';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {
  form: FormGroup;
  post: Post;
  submitted = false;
  uSub: Subscription;
  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params: Params) => {
        return this.postsService.getById(params.id);
      })
    ).subscribe((post: Post) => {
      this.post = post;
      this.form = new FormGroup({
        title: new FormControl(post.title, Validators.required),
        text: new FormControl(post.text, Validators.required),
      });
    });
  }

  submit(): void {
    if (this.form.invalid) {
      return;
    }
    this.submitted = true;
    this.uSub = this.postsService.update({
      ...this.post,
      title: this.form.value.title,
      text: this.form.value.text
    }).subscribe(() => {
      this.submitted = false;
    });
  }
}

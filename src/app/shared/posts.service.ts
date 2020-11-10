import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FbCreateResponse, Post} from './interfaces';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class PostsService {
  constructor(
    private http: HttpClient
  ) {
  }
  create(post: Post): Observable<Post> {
    return this.http.post(`${environment.fbDbUrl}/posts.json`, post)
      .pipe(
        map((response: FbCreateResponse) => {
          return {
            ...post,
            id: response.name,
            date: new Date()
          };
        })
      );
  }
  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>(`${environment.fbDbUrl}/posts.json`)
      .pipe(
        map((response: {[key: string]: any}) => {
          return Object
            .keys(response)
            .map(key => ({
              ...response[key],
              id: key,
              date: response[key].date
            }));
        })
      );
  }
  remove(id: string): Observable<void> {
    return this.http.delete<void>(`${environment.fbDbUrl}/posts/${id}.json`);
  }
}

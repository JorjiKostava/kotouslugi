import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cat } from '../../models/cat';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.scss']
})
export class CatListComponent implements OnInit {

  public loading = true;
  public cats: Cat[];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.loadList();
  }

  loadList(): void {
    this.http.get('/api/cat/listCat').subscribe((data: Cat[]) => {
      this.cats = data;
      this.loading = false;
    });
  }

  remove(cat: Cat): void {
    if (confirm(`Вы действительно хотите удалить котика #${cat.id}?`)) {
      this.http.request('delete', '/api/cat/deleteCat', {
        body: cat,
      }).subscribe((data: boolean) => {
        if (data) {
          this.loadList();
        } else {
          alert('Ошибка удаления');
        }
      });
    }
  }

}

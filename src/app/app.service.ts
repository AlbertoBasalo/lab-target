import { Injectable, inject } from "@angular/core";
import { CrudRepository } from "lab-srv";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class AppService {
  #crudRepository: CrudRepository = inject(CrudRepository);

  getActivities$(): Observable<unknown[]> {
    return this.#crudRepository.getAll<unknown>("activities");
  }
}

import { Injectable, Signal, computed, inject } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { CrudRepository } from "@lab/srv";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class AppService {
  #crudRepository: CrudRepository = inject(CrudRepository);
  #endpoint = "activities";
  #activities: Signal<any[] | undefined> = toSignal<any[]>(this.#getActivities$());
  activities: Signal<any[]> = computed(() => this.#activities() || []);

  #getActivities$(): Observable<any[]> {
    return this.#crudRepository.getAll<any>(this.#endpoint);
  }
}

import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
  HttpResponse,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { LoadingController } from "@ionic/angular";
import { LoadingService } from "../services/loading.service";

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(public loadingService: LoadingService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loadingService.showLoading("Please Wait");

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        this.loadingService.dismissLoading();
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        this.loadingService.dismissLoading();
        return throwError(error);
      })
    );
  }
}

/**
 * Generated by orval v6.27.1 🍺
 * Do not edit manually.
 * DRR API
 * OpenAPI spec version: 1.0.0
 */
import {
  HttpClient
} from '@angular/common/http'
import type {
  HttpContext,
  HttpHeaders,
  HttpParams
} from '@angular/common/http'
import {
  Injectable
} from '@angular/core'
import {
  Observable
} from 'rxjs'
import type {
  ApplicationResult,
  Attachment
} from '../../model'


type HttpClientOptions = {
  headers?: HttpHeaders | {
      [header: string]: string | string[];
  };
  context?: HttpContext;
  observe?: any;
  params?: HttpParams | {
    [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
  };
  reportProgress?: boolean;
  responseType?: any;
  withCredentials?: boolean;
};



@Injectable({ providedIn: 'root' })
export class AttachmentService {
  constructor(
    private http: HttpClient,
  ) {} attachmentUploadAttachment<TData = ApplicationResult>(
    attachment: Attachment, options?: HttpClientOptions
  ): Observable<TData>  {
    return this.http.post<TData>(
      `/api/attachment`,
      attachment,options
    );
  }
 attachmentDownloadAttachment<TData = ApplicationResult>(
    id: string,
    attachment: Attachment, options?: HttpClientOptions
  ): Observable<TData>  {
    return this.http.get<TData>(
      `/api/attachment/${id}`,options
    );
  }
 attachmentUpdateAttachment<TData = ApplicationResult>(
    id: string,
    attachment: Attachment, options?: HttpClientOptions
  ): Observable<TData>  {
    return this.http.post<TData>(
      `/api/attachment/${id}`,
      attachment,options
    );
  }
 attachmentDeleteAttachment<TData = ApplicationResult>(
    id: string,
    attachment: Attachment, options?: HttpClientOptions
  ): Observable<TData>  {
    return this.http.delete<TData>(
      `/api/attachment/${id}`,{body:
      attachment, ...options}
    );
  }
};

export type AttachmentUploadAttachmentClientResult = NonNullable<ApplicationResult>
export type AttachmentDownloadAttachmentClientResult = NonNullable<ApplicationResult>
export type AttachmentUpdateAttachmentClientResult = NonNullable<ApplicationResult>
export type AttachmentDeleteAttachmentClientResult = NonNullable<ApplicationResult>
import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
    url:string = "http://localhost:23198/api/Product";


    constructor(private http: Http) { }

    getProducts(): Observable<any[]> {
       /* var productos = [
            {
                ProductoId: 1,
                Clave: "DEX4056",
                Descripcion: "PASADOR DEXTER #4056 FRANCES 6\" DE ZAMAC NIQ. SAT. ",FamiliaId: 148,
                Familia: "ABASTECEDORA DE SOLD. Y HERRAJES"
            },
            {
                ProductoId: 2,
                Clave: "DOGOSH5091 .",
                Descripcion: "ABRAZADERA DOGOTULS PARA CABLE DE ACERO 3/16 #SH5091 (NUDO GALV.)",
                FamiliaId: 23,
                Familia: "HERRAMIENTAS IMPORTADAS MTY,S."
            },
            {
                ProductoId: 3,
                Clave: "DOGOSH5092",
                Descripcion: "ABRAZADERA DOGOTULS PARA CABLE DE ACERO 1/4 #SH5092 (NUDO GALV.)",
                FamiliaId: 23,
                Familia: "HERRAMIENTAS IMPORTADAS MTY,S."
            },
            {
                ProductoId: 4,
                Clave: "DOGOSH5093",
                Descripcion: "ABRAZADERA DOGOTULS PARA CABLE DE ACERO 5/16 #SH5093 (NUDO GALV.)",
                FamiliaId: 23,
                Familia: "HERRAMIENTAS IMPORTADAS MTY,S."
            }
        ]

        return productos;*/

       return this.http.get(this.url)
           .map(this.extracData)
           .catch(this.handleError)
    }

    private extracData(res: Response){
        let body = res.json();
        console.log(body);
        return body;
    }

    private handleError (error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}

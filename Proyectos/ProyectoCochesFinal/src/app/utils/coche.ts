import { Marca } from './marca';
export interface Coche {
    nombre: string;
    modelo: string;
    siglas: string;
    marca: Marca[];
    caracteristicas: string[];
}
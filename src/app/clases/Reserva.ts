import { Restaurante } from "./Restaurante";
import { User } from "./User";

export interface Reserva{
    id: string;
    fecha: string;
    hora: string;
    nro_personas: number;
    primero: string;
    segundo: string;
    bebida: string;
    postre: string;
    total: number;
    restaurantes: string;
    user: string;
}

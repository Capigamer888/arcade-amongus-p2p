//% color="#d9534f" icon="\uf1eb" block="Red P2P"
namespace redOnline {
    //% shim=redOnline::enviarDatos
    //% block="enviar acción %accion con valor %valor"
    export function enviarDatos(accion: string, valor: string): void {
        // En hardware físico queda vacío; el simulador web usa el shim
    }

    //% shim=redOnline::alRecibir
    //% block="al recibir mensaje de red"
    export function alRecibir(handler: (accion: string, valor: string) => void): void {
        // Controlador enlazado en el simulador
    }
}

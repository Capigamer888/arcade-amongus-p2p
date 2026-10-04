//% color="#d9534f" icon="\uf1eb" block="Red P2P"
namespace redOnline {
    let _handlers: ((accion: string, valor: string) => void)[] = [];

    //% block="al recibir mensaje de red"
    export function alRecibir(handler: (accion: string, valor: string) => void): void {
        _handlers.push(handler);
    }

    //% block="enviar acción %accion con valor %valor"
    export function enviarDatos(accion: string, valor: string): void {
        try {
            if (control && control.simmessages) {
                let msg = accion + "|" + valor;
                control.simmessages.send("amogus", Buffer.fromUTF8(msg));
            }
        } catch (e) {}
    }

    export function despachar(accion: string, valor: string): void {
        for (let h of _handlers) {
            h(accion, valor);
        }
    }

    // Registrar receptor nativo mediante simmessages
    try {
        if (control && control.simmessages) {
            control.simmessages.onReceived("amogus", function (data: Buffer) {
                let str = data.toString();
                let sep = str.indexOf("|");
                if (sep >= 0) {
                    let acc = str.substr(0, sep);
                    let val = str.substr(sep + 1);
                    despachar(acc, val);
                }
            });
        }
    } catch (e) {}
}

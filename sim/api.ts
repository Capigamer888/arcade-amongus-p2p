namespace pxsim.redOnline {
    export function enviarDatos(accion: string, valor: string): void {
        if (typeof window !== "undefined" && window.parent) {
            window.parent.postMessage({ canal: "amogus_out", accion: accion, valor: valor }, "*");
        }
    }

    export function alRecibir(handler: RefAction): void {
        if (typeof window !== "undefined") {
            window.addEventListener("message", (ev) => {
                if (ev.data && ev.data.canal === "amogus_in") {
                    pxtcore.runAction(handler, [ev.data.accion, String(ev.data.valor)]);
                }
            });
        }
    }
}

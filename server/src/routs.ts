import { Classes } from "./common/types/routs";

export default function routesBind(controllersClasses: Classes): void {
	const classMethods: string[][] = [];

    function getMethods(obj: object): string[] {
        return Object.getOwnPropertyNames(Object.getPrototypeOf(obj));
    }

    for (let i = 0; i < controllersClasses.length; i++) {
        const methods: string[] = getMethods(controllersClasses[i]);
        classMethods.push(methods);
        if (methods.includes("constructor"))
            methods.splice(methods.indexOf("constructor"), 1);
    }

    for (let i = 0; i < controllersClasses.length; i++) {
        for (let k = 0; k < classMethods[i].length; k++) {
            controllersClasses[i][classMethods[i][k]]();
        }
    }
}

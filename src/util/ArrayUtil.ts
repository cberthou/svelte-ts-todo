import type { Id } from "../model/Id";

export const transfer = <T>(idKey: string, idValue: Id, from: T[], to: T[]): [T[],  T[]] => {
    const elementToTransfer = from.find((element) => element[idKey] === idValue);
	const nextFrom = from.filter(element => element[idKey] !== idValue);
    const nextTo = [...to, elementToTransfer];
    return [nextFrom, nextTo];
};

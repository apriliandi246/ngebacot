import { writable } from "svelte/store";

export const userId = writable("");
export const username = writable("");
export const scrollbarStatus = writable("show");
export const signoutModalStatus = writable("hide");
export const languageModalStatus = writable("hidden");
export const focusFormInputStatus = writable("focusOut");

export let welcomeModalStatus;

if (typeof window !== "undefined") {
	welcomeModalStatus = writable(localStorage.getItem("_1re6awj"));
}

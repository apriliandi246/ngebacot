import { writable } from "svelte/store";

export const userId = writable("");
export const username = writable("");
export const deviceSize = writable(0);
export const wordsOfPost = writable("");
export const scrollBarStatus = writable("show");
export const sideNavbarStatus = writable("hide");
export const signoutModalStatus = writable("hide");
export const languageModalStatus = writable("hidden");

export let welcomeModalStatus;

if (typeof window !== "undefined") {
	welcomeModalStatus = writable(localStorage.getItem("_1re6awj"));
}

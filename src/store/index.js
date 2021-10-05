import { writable } from "svelte/store";

export const userId = writable("");
export const username = writable("");
export const deviceSize = writable(0);
export const wordsOfPost = writable("");
export const scrollBarStatus = writable("show");
export const sideNavbarStatus = writable("hide");
export const signoutModalStatus = writable("hide");

export let welcomeBannerStatus;

if (typeof window !== "undefined") {
	welcomeBannerStatus = writable(localStorage.getItem("_1re6awj"));
}

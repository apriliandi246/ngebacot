import { writable } from "svelte/store";

export const userId = writable("");
export const username = writable("");
export const wordsOfPost = writable("");
export const modalPostStatus = writable("hide");

export let welcomeBannerStatus;

if (typeof window !== "undefined") {
	welcomeBannerStatus = writable(localStorage.getItem("_welcome-banner"));
}

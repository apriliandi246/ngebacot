import * as cookie from "cookie";

export async function handle({ request, resolve }) {
	const cookies = cookie.parse(request.headers.cookie || "");

	/* eslint-disable */
	request.locals.userId = cookies._14q7gpj;
	request.locals.username = cookies._1x0ci2l;

	return await resolve(request);
}

export async function handleSession({ locals }) {
	const { userId, username } = locals;

	return { userId, username };
}

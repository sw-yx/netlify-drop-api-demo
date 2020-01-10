<script>
	export let name;
	import NetlifyAPI from 'netlify'
	// const api = new NetlifyAPI('1234myAccessToken')
	const handler = () => {
		// this pings a serverless function, because we need to spoof the Referer header
		fetch("/.netlify/functions/hello-world")
			.then(x => x.json()).then(console.log)
		
		// // this doesnt seem to work at all
		// fetch("https://api.netlify.com/api/v1/drop/token", {
		// 	method: "POST",
		// 	referrerPolicy: "unsafe-url",
		// 	referrer: "https://app.netlify.com",
		// 	headers: {
		// 		"content-type": "application/json",
		// 		origin: "https://app.netlify.com",
		// 		Referrer: 'https://app.netlify.com/'
		// 	}
		// }).then(x => x.json()).then(console.log)
	}
</script>

<main>
	<h1>Hello {name} 2!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<button on:click={handler}>click</button>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
<script lang="ts">
	import { LightSwitch } from "@skeletonlabs/skeleton";
	import FilterButton from "./filterButton.svelte";

	import { clickOutside } from "./clickOutside";
	import Popup from "./popup.svelte";
	let showPopup: bool = true;

	function handleClickEvent() {
		showPopup = false;
		console.log("Clicked outside the node");
	}
</script>

<div
	class="container card pt-8 mt-4 max-w-[50%] mx-auto flex flex-col justify-center items-center"
>
	<div class=" mb-8 space-y-5">
		<h1 class="h1">Tradingbro.io Application</h1>

		<div class="flex py-12 gap-4">
			Lightswitch<LightSwitch ring="ring-white" width="w-[48px]" />
		</div>

		<div>
			The figma file can be found
			<a
				class="underline"
				href="https://www.figma.com/file/elhS7rfboC3aVdUoa19lJ5/tradingbro.io-(2)?type=design&node-id=101%3A2934&t=8BraDmbdqSoVPbAr-1"
				>Here</a
			>

			<p class="">
				The tasks can be found at the readme of the repo <a href="" />
			</p>

			<p class="mt-4 mb-8">
				Fork the repo and let me know once you submitted your branch
			</p>
			<hr />
		</div>

		<h2 class="text-2xl">Button</h2>
		<div class="card mb-12 gap-4 flex mr-auto border-2 p-4">
			<FilterButton title="Columns" target="columnPopup" />
			<FilterButton title="Filters" target="filterPopup" />
		</div>

		<hr />
		<h2 class=" my-4 text-2xl">Popup</h2>

		{#if showPopup}
			<div use:clickOutside={handleClickEvent} class="a">
				<Popup />
			</div>
		{/if}
	</div>
</div>

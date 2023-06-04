<script lang="ts">
	// import Cross from '$lib/svg/new/cross.svelte';
	export let title: string = "SellerName";

	export let country: string = "SellerName";
	export let site: string = "SellerName";

	import { clickOutside } from "./clickOutside";

	const list = {
		"Trading Type": "Trading Type",
		Minimum: "Minimum",
		Max: "Max",
		Headline: "Headline",
		"Site Name": "Site Name",
		"Payment Method": "Payment Method",
		User: "User",
	};

	export let popupProps;

	console.log("props", popupProps);

	function handleClickEvent() {
		dispatch("hideextradata");
	}

	function formatOfferProps(offer: any) {
		title = offer.user.username;
		country = offer.country.country_name;

		site = offer.site_name;
		return {
			"Trading Type": offer.trading_type_name,
			Minimum: offer.min_trade_size,
			Max: offer.max_trade_size,
			Headline: offer.headline,
			"Site Name": offer.site_name,
			"Payment Method": offer.method.name,
			User: offer.user.username,
		};
	}
</script>

<div
	use:clickOutside={() => {
		dispatch("hideextradata");
	}}
	class=" shadow-md w-[95%] w-fit md:max-w-[50%] mx-auto mx-auto left-0 right-0 card p-4"
>
	<dl class="list">
		<li class="flex flex-row">
			<span
				on:click={() => dispatch("hideextradata")}
				class="absolute right-1 top-2"
			>
				<!-- <Cross /> -->
			</span>
			<span
				class="flex text-figma-font font-sans font-bold !ml-0 flex-row px-0 !py-0"
			>
				{title}
			</span>
		</li>
		<div class="gap-1 pb-2">
			<span class="badge variant-soft z-10">country</span>
			<span class="badge variant-soft z-10">site</span>
		</div>
		<hr class="" />
		<ul>
			<li class="flex flex-row font-sans">
				{#each Object.entries(list) as [key, value]}
					{key}: {value}
					<br />
				{/each}
			</li>
		</ul>
	</dl>
</div>

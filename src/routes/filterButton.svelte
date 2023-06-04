<script lang="ts">
	/**
    Main component for handling the filter and columns buttons across all tables 
   
    Props:
        @prop {"columnPopup | filterPopup"} target - Defines if the button should be a column or filter button
        @prop {string} title - Name to be diplayed on the button

    Unused code: 
            <!-- {$_('exchanges.filters_button')} --> 
    */
	import { popup } from '@skeletonlabs/skeleton';

	import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';

    // Props 
	export let target: 'columnPopup' | 'filterPopup';
    export let title: string = "Placeholder"

	import { SlideToggle } from '@skeletonlabs/skeleton';


	let filterPopup  = {
		event: 'click',
		target: target,
		placement: 'bottom'
	};
</script>

<button
	class="btn flex flex-row justify-start btn-sm min-w-[45px]  rounded-md border-2 dark:border-surface-600 border-[#EDF1F7] !text-base md:px-4 h-11 "
	use:popup={filterPopup}
>
	<span class="   stroke-[#6C6C85] dark:stroke-slate-300">
		<!-- <FilterIcon /> -->asasd
	</span>
	<span class="font-sans !text-[#6C6C85]">
        {title}
	</span>
</button>



<div class="card w-48 shadow-xl py-2 z-40" data-popup="filterPopup">
	<ListBox rounded="rounded-none">
		<ListBoxItem name="medium"  value="books">
			<svelte:fragment slot="lead">
				<SlideToggle
					name="slider-large"
					value="books"
					active="bg-surface-backdrop-token"
					size="sm"
				/>
			</svelte:fragment>
			TitlePlaceholder
		</ListBoxItem>
	</ListBox>
	<div class="arrow bg-surface-100-800-token" />
</div>

<div class="card w-48 shadow-xl py-2 z-40" data-popup="columnPopup">
	<ListBox rounded="rounded-none">
		<ListBoxItem name="medium"  value="books">
			<svelte:fragment slot="lead">
				<SlideToggle
					name="slider-large"
					value="books"
					active="bg-surface-backdrop-token"
					size="sm"
				/>
			</svelte:fragment>
			TitlePlaceholder
		</ListBoxItem>
	</ListBox>
	<div class="arrow bg-surface-100-800-token" />
</div>

<script lang="ts">
	export let name: string;
	export let tasks: string[];
</script>

<div
	class="relative flex flex-col gap-4 w-64 min-h-[320px] max-h-[460px] rounded-b-lg shadow-lg snap-y scroll-px-4 snap-mandatory scroll-smooth overflow-y-auto"
>
	<div class="inline-flex gap-2 items-center w-full bg-primary-400 p-2 sticky top-0">
		<h6 class="h6 font-bold">{name}</h6>
		<span class="flex-1" />
		<button class="btn variant-filled-secondary">Add</button>
	</div>
	<div class="w-full flex-1 flex flex-col gap-2">
		{#each tasks as task}
			<p>{task}</p>
		{/each}
	</div>
</div>

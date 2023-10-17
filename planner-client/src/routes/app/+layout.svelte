<script lang="ts">
	import { AppShell } from '@skeletonlabs/skeleton';
</script>

<AppShell slotSidebarLeft="bg-surface-500/5 w-56 p-4 min-h-screen h-full">
	<svelte:fragment slot="sidebarLeft">
		<nav class="list-nav">
			<ul>
				<li><a href="/">Home</a></li>
				<li><a href="/auth">Logout</a></li>
			</ul>
		</nav>
	</svelte:fragment>
	<slot />
</AppShell>

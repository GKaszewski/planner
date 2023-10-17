<script lang="ts">
	import TaskList from '$lib/TaskList.svelte';
</script>

<div class="flex gap-4 w-full items-center justify-between p-4">
	<TaskList name="To do" tasks={['dupa']} />
	<TaskList name="In progress" tasks={['dupa1']} />
	<TaskList name="Code review" tasks={['dupa2']} />
	<TaskList name="Complete" tasks={['dupa3']} />
</div>

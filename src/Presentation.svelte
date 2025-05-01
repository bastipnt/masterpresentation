<script lang="ts">
  import Title from "./slides/Title.svelte";

  type Props = {
    canvasEl?: HTMLCanvasElement;
  };

  let { canvasEl }: Props = $props();
</script>

<Title {canvasEl} />

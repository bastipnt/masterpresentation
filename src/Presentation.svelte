<script lang="ts">
  import Conclusion from "./slides/Conclusion.svelte";
  import DeviceFingerprinting from "./slides/DeviceFingerprinting.svelte";
  import Mitigation from "./slides/Mitigation.svelte";
  import ProjectFingerprintSound from "./slides/ProjectFingerprintSound.svelte";
  import ProjectProtectPrivacy from "./slides/ProjectProtectPrivacy.svelte";
  import Survey from "./slides/Survey.svelte";
  import Title from "./slides/Title.svelte";
  import WebTracking from "./slides/WebTracking.svelte";

  type Props = {
    canvasEl?: HTMLCanvasElement;
  };

  let { canvasEl }: Props = $props();
</script>

<Title {canvasEl} />
<WebTracking />
<Survey />
<DeviceFingerprinting />
<ProjectFingerprintSound />
<Mitigation />
<ProjectProtectPrivacy />
<Conclusion />

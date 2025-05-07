<script lang="ts">
  import freqExpos from "../assets/frequency_exposure_targeted_ads.png";
  import comfortLevels from "../assets/tracking_comfort_levels.png";
  import learningMethods from "../assets/preferred_learing_methods.png";
</script>

<section id="survey">
  <section id="survey-overview">
    <h3 class="text-left">Survey about targeted advertisement and web tracking:</h3>
    <ul class="w-full">
      <li>60 Participants (50 completed)</li>
      <li>Online, anonymous</li>
      <li>Promoted via Telegram, Instagram und friends</li>
    </ul>
  </section>

  <section id="survey-questions">
    <h3 class="text-left">Questions:</h3>
    <ul class="w-full">
      <li>Number of noticed targeted advertisement in the last weeks</li>
      <li>Knowledge about origin of data used for personalization</li>
      <li>Awareness of online surveillance</li>
      <li>Acceptance of tracking in order to get better ads</li>
      <li>Knowledge about functionality of web tracking</li>
      <li>Interest in learning more and in which form</li>
      <li>General information</li>
    </ul>
  </section>

  <section id="survey-results-1">
    <h3 class="text-left">Results:</h3>
    <ul class="w-full">
      <li>90% know, they are being tracked</li>
      <li>Only 46% know about device fingerprinting</li>
      <li>General interest in more information</li>
    </ul>
  </section>

  <section id="survey-results-2">
    <h3 class="text-left">Results:</h3>
    <div class="grid gap-4 w-full max-w-full grid-flow-col">
      <img src={freqExpos} alt="exposure" />
      <img src={comfortLevels} alt="comfort levels" />
    </div>
  </section>

  <section id="survey-results-3">
    <h3 class="text-left">Results:</h3>
    <div class="flex flex-row justify-center">
      <img class="h-[60vh]" src={learningMethods} alt="learning methods" />
    </div>
  </section>
</section>

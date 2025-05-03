<script lang="ts">
  import onlinePrivacyImg from "../assets/project-2-info.png";
</script>

<section id="project-pivacy-protect">
  <section id="project-pivacy-protect-intro">
    <h3 class="text-left">Project 3:<br />Protect your Online Privacy</h3>
    <div class="flex flex-row justify-center">
      <img class="h-[60vh]" src={onlinePrivacyImg} alt="project 3" />
    </div>
  </section>

  <section id="project-pivacy-protect-ad-blocker-detection">
    <h3 class="text-left">Ad Blocker Detection:</h3>
    <pre>
      <code data-trim class="language-ts">
        {`
          // ads-prebid.js file

          (function () {
            "use strict";
            window.adsPrebidLoaded = true;
          })();
        `}
      </code>
    </pre>

    <pre>
      <code data-trim class="language-ts">
        {`
          // On the website

          if (!("adsPrebidLoaded" in window)
            || window.adsPrebidLoaded !== true) {

            setAdBlockDetected(true);
          }
        `}
      </code>
    </pre>
  </section>

  <section id="project-pivacy-protect-fp-blocking-detection">
    <h3 class="text-left">Canvas 2D tampering detection:</h3>
    <pre>
      <code data-trim class="language-ts">
        {`
          const checkCanvas2dBlocked = (canvas) => {
            const ctx = canvas.getContext("2d");
            if (!ctx) return true;
            const size = 4;
            canvas.width = size;
            canvas.height = size;
            ctx.fillStyle = "#FFFFFF";
            ctx.fillRect(0, 0, size, size);
            const imgData = ctx.getImageData(0, 0, size, size);
            const notWhite = imgData.data.find((val) => val !== 255);
            if (notWhite !== undefined) return true;
            return false;
          };
        `}
      </code>
    </pre>
  </section>
</section>

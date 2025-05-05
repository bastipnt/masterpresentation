<script lang="ts">
  import canvasFpImg from "../assets/canvas-fp.png";
</script>

<section id="device-fingerprinting">
  <section id="device-fingerprinting-intro">
    <h3 class="text-left">Device Fingerprinting:</h3>
    <ul class="w-full">
      <li>No need for Cookies (stateless)</li>
      <li>Hard to detect</li>
      <li>Even harder to mitigate</li>
      <li>Precise and reliable identification</li>
    </ul>
  </section>

  <section id="device-fingerprinting-how">
    <h3 class="text-left">Attributes:</h3>
    <ul class="w-full">
      <li>Browser version</li>
      <li>Supported browser plugins</li>
      <li>User's timezone and preferred languages</li>
      <li>Installed video and audio codecs</li>
      <li>Available system fonts</li>
      <li>Current state of browser settings</li>
      <li>Display size and resolution</li>
      <li>Color and pixel depth of the screen</li>
      <li>Operating system and architecture information</li>
    </ul>
  </section>

  <section id="device-fingerprinting-example">
    <h3 class="text-left">Example 1:</h3>
    <pre>
    <code data-trim class="language-ts">
      {`
        function collectAttributes() {
          return {
            screenResolution: \`\${screen.width}x\${screen.height}\`,
            colorDepth: screen.colorDepth,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            hdr: matchMedia("(dynamic-range: high)")?.matches,
            language: navigator.language,
          };
        }
      `}
    </code>
  </pre>
  </section>

  <section id="device-fingerprinting-example-results">
    <h3 class="text-left">Example 1 - Results:</h3>
    <pre>
    <code data-trim class="language-json">
      {`
        {
          "screenResolution": "1512x982",
          "colorDepth": 30,
          "timezone": "Europe/Berlin",
          "hdr": false,
          "language": "en-US"
        }
      `}
    </code>
  </pre>
  </section>

  <section id="device-fingerprinting-hashing">
    <h3 class="text-left">Hashing:</h3>
    <pre>
    <code data-trim class="language-ts">
      {`
        const murmurHash3 = require('murmurhash3.js');

        const fingerprintAttributes = collectAttributes();
        const stringifiedAttributes = JSON.stringify(fingerprintAttributes);
        const hash = murmurHash3.x64.hash128(stringifiedAttributes);

        // -> "d30654abbd8227e367d73523f0079673"
      `}
    </code>
  </pre>
  </section>

  <section id="device-fingerprinting-canvas">
    <h3 class="text-left">Canvas Fingerprint:</h3>
    <pre>
      <code data-trim class="language-ts" data-line-numbers="1-4|6-13|15-18|20-25|27-31|33-34">
        {`
          const murmurHash3 = require('murmurhash3.js');

          const getCanvas2D = () => {
            let data = "Unknown";

            const canvas = document.createElement("canvas");
            canvas.width = 240;
            canvas.height = 60;
            const ctx = canvas.getContext("2d");
            if (!ctx) {
              data = "No_CTX";
              return data;
            }

            ctx.fillStyle = "#f60"; // orange
            ctx.fillRect(100, 1, 62, 20);
            ctx.fillStyle = "#069"; // blue
            ctx.font = '11pt "Times New Roman"';

            const printedText = \`Cwm fjordbank glyphs vext quiz,
              \${String.fromCharCode(55357, 56835)}\`;
            ctx.fillText(printedText, 2, 15);
            ctx.fillStyle = "rgba(102, 204, 0, 0.2)"; // green
            ctx.font = "18pt Arial";
            ctx.fillText(printedText, 4, 45);

            const dataUrl = canvas.toDataURL();
            data = dataUrl;

            return data;
          };

          const canvasData = getCanvas2D();
          const canvasFingerprint = murmurHash3.x64.hash128(canvasData);
        `}
      </code>
    </pre>
  </section>

  <section id="devoce-fingerprinting-canvas-img">
    <h3 class="text-left">Canvas Fingerprint Image:</h3>
    <div class="bg-default p-8 rounded w-fit mx-auto">
      <img class="h-24" src={canvasFpImg} alt="canvas fingerprint" />
    </div>
  </section>
</section>

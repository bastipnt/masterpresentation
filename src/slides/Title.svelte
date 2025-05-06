<script lang="ts">
  import { getSlideContext } from "../context/SlideContext";
  import { map } from "../utils/number";

  type Props = {
    canvasEl?: HTMLCanvasElement;
  };

  let { canvasEl }: Props = $props();

  const slideState = getSlideContext();
  const inIframe = window.self !== window.top;

  let currentSlideId = $derived.by(() => {
    return slideState.currentSlide?.id;
  });

  const animate = () => {
    if (inIframe) return;
    if (!canvasEl) return;

    const ctx = canvasEl.getContext("2d");
    if (!ctx) return;
    let frame = 0;

    const animating = true;
    const width = window.innerWidth;
    const height = window.innerHeight;

    const drawHeight = height * 0.3;
    const offsetTop = (height - drawHeight) / 2;
    const starOffset = 10;

    canvasEl.width = width;
    canvasEl.height = height;

    let stars: { x: number; y: number; startFrame: number }[] = [];

    const drawStar = (
      cx: number,
      cy: number,
      spikes: number,
      outerRadius: number,
      innerRadius: number,
    ) => {
      let rot = (Math.PI / 2) * 3;
      let x = cx;
      let y = cy;
      let step = Math.PI / spikes;

      ctx.save();

      ctx.beginPath();
      ctx.moveTo(cx, cy - outerRadius);
      for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y);
        rot += step;

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y);
        rot += step;
      }
      ctx.lineTo(cx, cy - outerRadius);
      ctx.closePath();
      ctx.lineWidth = 2;
      ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";
      ctx.stroke();
      ctx.fillStyle = "rgba(255, 255, 255, 1)";
      ctx.fill();

      ctx.restore();
    };

    const drawSine = (i: number) => {
      ctx.save();
      ctx.lineCap = "round";
      ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";
      ctx.lineWidth = 16;

      ctx.beginPath();
      for (let x = 0; x < width; x++) {
        const mod = Math.sin(x * 0.05 + i * 0.3) * 0.2;
        const y = map(Math.sin(x * 0.01 + i * 0.03 + mod), -1, 1, 0, drawHeight) + offsetTop;
        ctx.lineTo(x, y);
      }
      ctx.stroke();

      ctx.restore();
    };

    const draw = () => {
      if (!animating) return;
      if (currentSlideId !== "title") return;

      ctx.clearRect(0, 0, width, height);

      // if (currentSlideId === "title-slide-1") drawSine(frame);

      stars = stars.filter(
        ({ startFrame }) => frame - startFrame < map(Math.random(), 0, 1, 400, 1000),
      );

      stars.forEach(({ x, y }) => {
        drawStar(x, y, 4, starOffset, 2);
      });

      const lastStar = stars[stars.length - 1];
      if (!lastStar || frame - lastStar.startFrame > map(Math.random(), 0, 1, 100, 500)) {
        const starX = map(Math.random(), 0, 1, starOffset, width - starOffset);
        const starY = map(Math.random(), 0, 1, starOffset, height - starOffset);
        stars.push({ x: starX, y: starY, startFrame: frame });
      }

      frame++;
      window.requestAnimationFrame(draw);
    };

    draw();
  };

  $effect(() => {
    animate();
  });
</script>

<section id="intro">
  <section id="title">
    <h2>Online Privacy:</h2>
    <h3 class="pb-8">How to Mitigate Web Tracking</h3>
    <p>Master's Thesis Presentation</p>
    <p>Sebastian Paintner</p>
    <p class="text-stroke-light">
      <small>Prof. Albert Lang & Prof. Dr. phil. Alberto de Campo</small>
    </p>
    <p class="text-stroke-light"><small>06.05.2025</small></p>
  </section>

  <section id="agenda">
    <h3 class="text-left">Agenda:</h3>
    <ul class="w-full">
      <li>Introduction</li>
      <li>Web Tracking (Use, Misuse & Methods)</li>
      <li>Project 1: Survey</li>
      <li>Device Fingerprinting</li>
      <li>Project 2: Fingerprint Sound</li>
      <li>Mitigation Strategies</li>
      <li>Project 3: Protect Your Online Privacy</li>
      <li>Conclusion & Discussion</li>
    </ul>
  </section>

  <section id="intro-web-tracking">
    <h3 class="text-left">What is Web Tracking?</h3>
    <p>
      <strong>Web Tracking</strong> is the practice of monitoring and recording ones online activities,
      allowing companies to gather insights about users behavior.
    </p>
  </section>

  <section id="intro-why">
    <h3 class="text-left">Why Web Tracking?</h3>
    <ul class="w-full">
      <li>Web tracking is pervasive: 71% of top websites include trackers</li>
      <li>Revenue from targeted ads: Google made $200B in 2022</li>
      <li>Users are often unaware or uncomfortable with being tracked</li>
    </ul>
  </section>

  <section id="intro-research-question">
    <h3 class="text-left">Research Question</h3>
    <p>
      How do web tracking and targeted advertising compromise our privacy, and what measures can be
      taken to protect it?
    </p>
  </section>
</section>

document.addEventListener('DOMContentLoaded', () => {
    const samples = [
      { title: "Ah-Ha", file: "ah-ha.mp3" },
      { title: "Dan", file: "dan.mp3" },
      { title: "Back of the net", file: "back-of-the-net.mp3" },
      { title: "Bang out of order", file: "bangoutoforder.mp3" },
      { title: "Jurassic Park", file: "jurassicpark.mp3" },
      { title: "Smell my cheese", file: "smellmycheese.mp3" },
      { title: "Goal", file: "goal.mp3" },
      { title: "Kiss my face", file: "kissmyface.mp3" },
      { title: "Hello Partridge", file: "hellopartridge.mp3" },
      { title: "Knowing Me Knowing You", file: "kmky.mp3" },
      { title: "Monkey Tennis", file: "monkeytennis.mp3" },
      { title: "Inner City Sumo", file: "innercitysumo.mp3" },
    ];
  
    const samplesPerPage = 9;
    let currentPage = 0;
  
    const sampleGrid = document.getElementById('sampleGrid');
    const pageNumber = document.getElementById('pageNumber');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
  
    function renderSamples() {
      sampleGrid.innerHTML = '';
      const startIdx = currentPage * samplesPerPage;
      const visibleSamples = samples.slice(startIdx, startIdx + samplesPerPage);
  
      visibleSamples.forEach((sample, idx) => {
        const card = document.createElement('div');
        card.className = 'sample-card';
        card.innerHTML = `
          <div>${startIdx + idx + 1}. <br><strong>${sample.title}</strong></div>
          <div class="length">Loading...</div>
        `;
  
        // making audio play wheb clicked
        card.addEventListener('click', () => {
          const audio = new Audio(sample.file);
          audio.play().catch(console.error);
        });
  
        // Loading audio to show duration
        const audioMeta = new Audio(sample.file);
        audioMeta.addEventListener('loadedmetadata', () => {
          const time = audioMeta.duration.toFixed(2);
          card.querySelector('.length').textContent = `${time}s`;
        });
  
        sampleGrid.appendChild(card);
      });
  
      // Updating page number and nav button visibility
      pageNumber.textContent = currentPage + 1;
      prevBtn.classList.toggle('hidden', currentPage === 0);
      nextBtn.classList.toggle('hidden', startIdx + samplesPerPage >= samples.length);
    }
  
    // adding navigation buttons
    prevBtn.addEventListener('click', () => {
      if (currentPage > 0) {
        currentPage--;
        renderSamples();
      }
    });
  
    nextBtn.addEventListener('click', () => {
      if ((currentPage + 1) * samplesPerPage < samples.length) {
        currentPage++;
        renderSamples();
      }
    });
  
    // Speech box added
    const speakBtn = document.getElementById('speakBtn');
    const ttsInput = document.getElementById('ttsInput');
  
    speakBtn.addEventListener('click', () => {
      const text = ttsInput.value.trim();
      if (!text) return;
  
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    });
  
    // Initial render
    renderSamples();
  });
  
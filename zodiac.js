document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById("overlay");
    const closeBtn = document.getElementById("close-btn");
    const albumResult = document.getElementById("album-result");
    const audioPlayer = document.getElementById("audio-player");
    const overlayTitle = document.getElementById("overlay-title");
    const overlayDesc = document.getElementById("overlay-description");
    const overlayImage = document.getElementById("overlay-image");
    const helpBtn = document.getElementById('helpBtn');
    const helpOverlay = document.getElementById('helpOverlay');
    const closeHelp = document.getElementById('closeHelp');

    console.log("JavaScript Connected!");

    const zodiacSongs = {
        'Capricorn': { title: 'heart pt.6', artist: 'Kendrick Lamar', image: 'images/heartpt6.jpg', sound: 'sounds/10. heart pt. 6.mp3' },
        'Sagittarius': { title: 'wacced out murals', artist: 'Kendrick Lamar', image: 'images/wacced.jpg', sound: 'sounds/01. wacced out murals.mp3' },
        'Scorpio': { title: 'squabble up', artist: 'Kendrick Lamar', image: 'images/squabbleup.jpg', sound: 'sounds/02. squabble up.mp3' },
        'Libra': { title: 'luther (with sza)', artist: 'Kendrick Lamar, SZA', image: 'images/luther.jpg', sound: 'sounds/03. luther.mp3' },
        'Virgo': { title: 'man at the garden', artist: 'Kendrick Lamar', image: 'images/garden.jpg', sound: 'sounds/04. man at the garden.mp3' },
        'Leo': { title: 'hey now (feat. dody6)', artist: 'Kendrick Lamar, Dody6', image: 'images/heynow.jpg', sound: 'sounds/05. hey now.mp3' },
        'Cancer': { title: 'reincarnated', artist: 'Kendrick Lamar', image: 'images/reincarnated.jpg', sound: 'sounds/06. reincarnated.mp3' },
        'Gemini': { title: 'tv off (feat. lefty gunplay)', artist: 'Kendrick Lamar, Lefty Gunplay', image: 'images/tvoff.jpg', sound: 'sounds/07. tv off.mp3' },
        'Taurus': { title: 'dodger blue (feat. wallie)', artist: 'Kendrick Lamar, Wallie the Sensei', image: 'images/dodgerblue.jpg', sound: 'sounds/08. dodger blue.mp3' },
        'Aries': { title: 'peekaboo (feat. azchike)', artist: 'Kendrick Lamar, Az Chike', image: 'images/peekaboo.jpg', sound: 'sounds/09. peekaboo.mp3' },
        'Pisces': { title: 'gnx (feat. hitta j3, youngthug)', artist: 'Kendrick Lamar, Hitta J3, YoungThug', image: 'images/gnx.jpg', sound: 'sounds/11. gnx.mp3' },
        'Aquarius': { title: 'gloria (with sza)', artist: 'Kendrick Lamar, SZA', image: 'images/gloria.jpg', sound: 'sounds/12. gloria.mp3' }
    };

    //zodiac descriptions in overlay
    const zodiacDescriptions = {
        'Capricorn': 'Capricorns are loyal and ambitious. "heart pt.6" reflects their emotional depth hidden behind strength.',
        'Sagittarius': 'Sagittarius is adventurous and bold. "wacced out murals" captures their free-spirited energy.',
        'Scorpio': 'Scorpios are intense and protective. "squabble up" mirrors their fearless nature.',
        'Libra': 'Libras seek love and balance. "luther" is perfect for their romantic soul.',
        'Virgo': 'Virgos are analytical and reflective. "man at the garden" fits their quiet observation.',
        'Leo': 'Leos are bold and confident. "hey now" is their anthem of center-stage energy.',
        'Cancer': 'Cancers are emotional and loyal. "reincarnated" symbolizes their cycle of emotional growth.',
        'Gemini': 'Geminis are dual-natured. "tv off" reflects their shifting moods.',
        'Taurus': 'Taurus is grounded and loyal. "dodger blue" reflects their connection to home and roots.',
        'Aries': 'Aries are fearless leaders. "peekaboo" captures their playful, bold energy.',
        'Pisces': 'Pisces are dreamy and emotional. "gnx" reflects their surreal mix of reality and fantasy.',
        'Aquarius': 'Aquarius is soulful and unique. "gloria" channels their humanitarian spirit.'
    };


    function getZodiac(month, day) {
        if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return 'Capricorn';
        if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return 'Sagittarius';
        if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) return 'Scorpio';
        if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) return 'Libra';
        if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 'Virgo';
        if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 'Leo';
        if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) return 'Cancer';
        if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) return 'Gemini';
        if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return 'Taurus';
        if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return 'Aries';
        if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return 'Pisces';
        if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return 'Aquarius';
        return null;
    }

    //HELP BUTTONNN

    helpBtn.addEventListener('click', () => {
        helpOverlay.style.display = 'flex';
      });
      
      closeHelp.addEventListener('click', () => {
        helpOverlay.style.display = 'none';
      });

      
    //overlay with audio player
    function showOverlay(song, zodiac) {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
        overlayTitle.textContent = `${song.title}`;
        overlayDesc.textContent = zodiacDescriptions[zodiac];
        overlayImage.src = song.image;
        audioPlayer.src = song.sound;
        audioPlayer.play();
        overlay.classList.add("active");
    }

    closeBtn.addEventListener("click", () => {
        overlay.classList.remove("active");
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
    });

    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
            overlay.classList.remove("active");
            audioPlayer.pause();
            audioPlayer.currentTime = 0;
        }
    });

    //form submit for date input
    const form = document.getElementById("zodiac-form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const birthdateInput = document.getElementById("birthdate").value;
        if (!birthdateInput) return alert("Please select a date!");

        const [year, month, day] = birthdateInput.split("-").map(Number);
        const zodiac = getZodiac(month, day);
        const song = zodiacSongs[zodiac];

        if (song) {
            albumResult.innerHTML = ''; 
            showOverlay(song, zodiac);
        } else {
            alert("Could not find a matching album. Please try again!");
        }
    });

    //album grid click 
    document.querySelectorAll(".album-container").forEach((container) => {
        container.addEventListener("click", () => {
            const zodiac = container.getAttribute('data-zodiac');
            const song = zodiacSongs[zodiac];
            if (song) {
                showOverlay(song, zodiac);
            } else {
                alert("No matching song found for this album.");
            }
        });
    });
});

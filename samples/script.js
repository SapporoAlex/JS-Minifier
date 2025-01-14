const aboutMeBtn = document.getElementById("about-me-button");
const portfolioBtn = document.getElementById("portfolio-button");
const contactBtn = document.getElementById("contact-button");
const languageBtn = document.getElementById("language-button");
const callToActionBtn = document.getElementById("call-to-action");
const about1p = document.getElementById("about1p");
const about2p = document.getElementById("about2p");
const contact1p = document.getElementById("contact1p");
const contact2p = document.getElementById("contact2p");
const contactName = document.getElementById("contact-name");
const contactEmail = document.getElementById("contact-email");
const contactMessage = document.getElementById("your-message");
const introData = document.getElementById("data-foreword");
const introWeb = document.getElementById("web-dev-foreword");
const introSoftware = document.getElementById("software-dev-foreword");
const introGame = document.getElementById("game-dev-foreword");
const sendBtn = document.getElementById("sendBtn");
const message = document.getElementById("message");
const navBar = document.getElementById("nav-bar");
const aboutMeTitle = document.getElementById("about-me-title");
const profileImage = document.getElementById("profile-img");
const dataTitle = document.getElementById("data-title");
const barOne = document.getElementById("bar-one");
const barTwo = document.getElementById("bar-two");
const barThree = document.getElementById("bar-three");
const graphSheet = document.getElementById("graph-sheet");
const lineOne = document.getElementById("line1-web");
const lineTwo = document.getElementById("line2-web");
const lineThree = document.getElementById("line3-web");
const lineFour = document.getElementById("line4-web");
const lineFive = document.getElementById("line5-web");
const lineSix = document.getElementById("line6-web");
const webAnim = document.getElementById("web-anim");
let currentLanguage = "English";
let topButton = document.getElementById("top-button");


window.onscroll = function() {scrollFunction()};

// Set up the Intersection Observer for both the profile image and the graph bars
const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // For profile image
        if (entry.target === profileImage) {
          if (entry.isIntersecting) {
            profileImage.classList.add("enlarged");
          } else {
            profileImage.classList.remove("enlarged");
          }
        }
  
        // For graph bars
        if (entry.target === graphSheet) {
          if (entry.isIntersecting) {
            barOne.classList.add("bar-one-grown");
            barTwo.classList.add("bar-two-grown");
            barThree.classList.add("bar-three-grown");
          } else {
            barOne.classList.remove("bar-one-grown");
            barTwo.classList.remove("bar-two-grown");
            barThree.classList.remove("bar-three-grown");
          }
        }
        if (entry.target === webAnim) {
          if (entry.isIntersecting) {
            lineOne.classList.add("line-web-grown");
            lineTwo.classList.add("line-web-grown");
            lineThree.classList.add("line-web-grown");
            lineFour.classList.add("line-web-grown");
            lineFive.classList.add("line-web-grown");
            lineSix.classList.add("line-web-grown");
          } else {
            lineOne.classList.remove("line-web-grown");
            lineTwo.classList.remove("line-web-grown");
            lineThree.classList.remove("line-web-grown");
            lineFour.classList.remove("line-web-grown");
            lineFive.classList.remove("line-web-grown");
            lineSix.classList.remove("line-web-grown");
          }
        }

      });
    },
    { threshold: 0.3 } // Trigger when 30% of each element is visible
  );
  
  // Start observing the profile image and graph sheet
  observer.observe(profileImage);
  observer.observe(graphSheet);
  observer.observe(webAnim);


function scrollFunction() {
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
        topButton.style.display = "block";
        navBar.style.position = "absolute";
    }
    else {
        topButton.style.display = "none";
        navBar.style.position = "fixed";
    }
}

function scrollFunction() {
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
        topButton.style.display = "block";
        navBar.style.position = "absolute";
    }
    else {
        topButton.style.display = "none";
        navBar.style.position = "fixed";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

callToActionBtn.addEventListener('click', () => {
    document.getElementById('contact').scrollIntoView({
        behavior: 'smooth'
    });
});

contactBtn.addEventListener('click', () => {
    document.getElementById('contact').scrollIntoView({
        behavior: 'smooth'
    });
});

aboutMeBtn.addEventListener('click', () => {
    document.getElementById('about-me-top').scrollIntoView({
        behavior: 'smooth'
    });
})

portfolioBtn.addEventListener('click', () => {
    document.getElementById('portfolio-intro').scrollIntoView({
        behavior: 'smooth'
    });
})

languageBtn.addEventListener('click', () => {
    if (currentLanguage === "English") {
        currentLanguage = "Japanese"
        languageBtn.textContent = "English"
        aboutMeBtn.textContent = "私について"
        portfolioBtn.textContent = "ポートフォリオ"
        contactBtn.textContent = "お問い合わせ"
        callToActionBtn.textContent = "お問い合わせ"
        about1p.textContent = "私は札幌を拠点に活動するプログラマーです。企業や個人と協力して、ニーズに合わせたITソリューションを提供しています。さまざまなプログラミング言語やフレームワークに精通しており、クライアントと協力して最適なツールを選択し、目標を達成する手助けをします。"
        about2p.textContent = "ウェブサイトの作成や保守、最新データのスクレイピング、オートメーション、その他あなたのニーズに合わせたソフトウェアが必要な場合は、無料相談のためにご連絡ください。"
        contact1p.textContent = "無料相談をご希望の方はメッセージをお送りください。"
        contact2p.textContent = "お待ちしております。"
        contactName.textContent = "お名前："
        contactEmail.textContent = "メールアドレス："
        contactMessage.textContent = "メッセージ："
        message.placeholder = "作ってほしいものあるんですが、"
        sendBtn.textContent = "送信"
        introData.textContent = "こちらのプロジェクトには、ウェブスクレイピング、データのクリーニング、そしてデータの可視化用のスクリプトが含まれています。これらは、様々な日本企業向けに作成したプロジェクトおよび個人的なプロジェクトです。Python、Jupyter Notebook、Pandas、Numpyなどを使用して構築しています。詳細については、クリックしてください。"
        introWeb.textContent = "こちらは私が制作したウェブサイトの一部です。Django、Ruby on Rails、バニラJavaScriptなど、さまざまなフレームワークを使用しています。CSSはすべて自分で記述しています。詳細については、クリックしてください。"
        introSoftware.textContent = "こちらは、Python、C++、Rubyで開発したさまざまなソフトウェアです。また、私が設計し指導した夏のPythonプログラミングコースも含まれています。"
        introGame.textContent = "ゲーム制作も好きで、これらはPythonのPygameライブラリ、Canvasを使用したJavaScript、およびC++で作成しました。"
        } else if (currentLanguage === "Japanese") {
        currentLanguage = "English"
        languageBtn.textContent = "日本語"
        aboutMeBtn.textContent = "About Me"
        portfolioBtn.textContent = "Portfolio"
        contactBtn.textContent = "Contact"
        callToActionBtn.textContent = "Contact Me"
        about1p.textContent = "I am a programmer based in Sapporo. I work with companies and individuals to create IT solutions tailored to their needs. I am proficient in a variety of languages and frameworks, and work with clients to choose the best tools to accomplish their goals."
        about2p.textContent = "If you need help building or maintaining websites, scraping up-to-date data, automation, software or something else unique to your needs, contact me for a free consultation."
        contact1p.textContent = "Send me a message for a free consultation."
        contact2p.textContent = "I'd love to hear from you."
        contactName.textContent = "Your Name:"
        contactEmail.textContent = "Your Email:"
        contactMessage.textContent = "Your Message:"
        message.placeholder = "Hi, are you able to make a ...?"
        sendBtn.textContent = "Send"
        introData.textContent = "These projects include scripts for web scraping, data cleaning and visualisations. These are projects I have made for various Japanese companies, as well as personal projects. These are built using Python, Jupyter Notebook, Pandas, Numpy etc. Please click on them for more details."
        introWeb.textContent = "Here are some websites I have built. I have used a variety of frameworks here such as Django, Ruby on Rails, and vanilla JavaScript. I write the CSS myself. Click on them for more details."
        introSoftware.textContent = "Here are some of the various software I have built in python, C++ and Ruby. I have included a summer python programming course that I designed and taught here, too."
        introGame.textContent = "I also like to make games. These were made with the pygame python library, JavaScript using canvas, and C++."
        }
    });

document.addEventListener("DOMContentLoaded", function () {
  const certBoxes = document.querySelectorAll(".cert-box");

  const observerOptions = {
    threshold: 0.2, // Trigger when 20% of the element is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible"); // Add the visible class
        observer.unobserve(entry.target); // Stop observing once visible
      }
    });
  }, observerOptions);

  certBoxes.forEach(box => observer.observe(box)); // Observe each .cert-box
});

document.addEventListener("DOMContentLoaded", function () {
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  const observerOptions = {
    threshold: 0.2, // Trigger when 20% of the element is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible"); // Add the visible class
        observer.unobserve(entry.target); // Stop observing once visible
      }
    });
  }, observerOptions);

  portfolioItems.forEach(item => observer.observe(item)); // Observe each .portfolio-item
});


document.addEventListener("DOMContentLoaded", function () {
  const portfolioItems = document.querySelectorAll(".language-item");

  const observerOptions = {
    threshold: 0.2, // Trigger when 20% of the element is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible"); // Add the visible class
        observer.unobserve(entry.target); // Stop observing once visible
      }
    });
  }, observerOptions);

  portfolioItems.forEach(item => observer.observe(item)); // Observe each .portfolio-item
});
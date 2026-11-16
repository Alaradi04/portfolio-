"use strict";

const screenshotSets = {
  infaq: [
    { src: "pic/infaq/1.png", alt: "Home dashboard showing monthly spending, budget progress, services, and insights", label: "INFAQ · At a glance" },
    { src: "pic/infaq/2.png", alt: "Transaction management screen with budget progress, search, filters, and expense entries", label: "INFAQ · Transactions" },
    { src: "pic/infaq/3.png", alt: "Add transaction form in expense mode", label: "INFAQ · Add an expense" },
    { src: "pic/infaq/4.png", alt: "Add transaction form in income mode", label: "INFAQ · Add income" },
    { src: "pic/infaq/5.png", alt: "Spending insights screen with category chart", label: "INFAQ · Spending insights" },
    { src: "pic/infaq/6.png", alt: "Subscription management screen", label: "INFAQ · Subscriptions" },
    { src: "pic/infaq/7.png", alt: "Additional INFAQ finance screen", label: "INFAQ · More details" },
    { src: "pic/infaq/8.png", alt: "Additional INFAQ finance screen", label: "INFAQ · More details" },
    { src: "pic/infaq/9.png", alt: "Additional INFAQ finance screen", label: "INFAQ · More details" },
    { src: "pic/infaq/10.png", alt: "Additional INFAQ finance screen", label: "INFAQ · More details" },
    { src: "pic/infaq/11.png", alt: "Additional INFAQ finance screen", label: "INFAQ · More details" }
  ],
  readers: [
    { src: "pic/readers/1.png", alt: "Readers discovery screen with catalog and Google Books tabs", label: "Readers · Discover" },
    { src: "pic/readers/2.png", alt: "Google Books search results for an Arabic-language query", label: "Readers · Find a book" },
    { src: "pic/readers/3.png", alt: "Personal library organized into three reading statuses", label: "Readers · Your library" },
    { src: "pic/readers/4.png", alt: "Book notes screen with add, edit, and delete controls", label: "Readers · Book notes" },
    { src: "pic/readers/5.png", alt: "Readers community screen with username search and library privacy labels", label: "Readers · Find readers" },
    { src: "pic/readers/6.png", alt: "A public reader profile showing books in that reader's library", label: "Readers · A reader’s shelf" }
  ]
};

const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox-image");
const lightboxLabel = document.querySelector(".lightbox-label");
const closeButton = document.querySelector(".lightbox-close");
let activeGallery = [];
let activeIndex = 0;
let returnFocus = null;

function showScreenshot(index) {
  activeIndex = (index + activeGallery.length) % activeGallery.length;
  const screenshot = activeGallery[activeIndex];
  lightboxImage.src = screenshot.src;
  lightboxImage.alt = screenshot.alt;
  lightboxLabel.textContent = `${screenshot.label} · ${activeIndex + 1} of ${activeGallery.length}`;
}

document.querySelectorAll(".shot-button").forEach((button) => {
  button.addEventListener("click", () => {
    activeGallery = screenshotSets[button.dataset.gallery];
    returnFocus = button;
    showScreenshot(Number(button.dataset.index));
    lightbox.showModal();
    closeButton.focus();
  });
});

document.querySelector(".lightbox-prev").addEventListener("click", () => showScreenshot(activeIndex - 1));
document.querySelector(".lightbox-next").addEventListener("click", () => showScreenshot(activeIndex + 1));
closeButton.addEventListener("click", () => lightbox.close());
lightbox.addEventListener("close", () => {
  if (returnFocus) returnFocus.focus();
});
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) lightbox.close();
});
lightbox.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") showScreenshot(activeIndex - 1);
  if (event.key === "ArrowRight") showScreenshot(activeIndex + 1);
});

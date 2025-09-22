// script.js

document.addEventListener("DOMContentLoaded", function() {
  // إنشاء Modal ديناميكي
  const modal = document.createElement("div");
  modal.classList.add("modal", "fade");
  modal.setAttribute("tabindex", "-1");
  modal.innerHTML = `
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modal-title">Post Title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body" id="modal-body">
          <p>Full content of the post goes here...</p>
        </div>
        <div class="modal-footer">
          <span id="modal-views" class="me-auto text-muted">Views: 0</span>
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  const bsModal = new bootstrap.Modal(modal);

  // عداد لكل مقال
  const viewsCount = {};

  // التقاط جميع أزرار Read More
  const readMoreButtons = document.querySelectorAll(".btn-outline-primary");

  readMoreButtons.forEach((btn, index) => {
    // عنوان افتراضي لكل مقال
    const postTitle = btn.closest(".card").querySelector(".card-title").innerText;
    const postText = btn.closest(".card").querySelector(".card-text").innerText;

    // initialize views
    viewsCount[postTitle] = 0;

    btn.addEventListener("click", function() {
      // تحديث عنوان ومحتوى الـ Modal
      modal.querySelector("#modal-title").innerText = postTitle;
      modal.querySelector("#modal-body").innerText = postText + "\n\n(Here you can add more content about the post.)";

      // زيادة عداد المشاهدات
      viewsCount[postTitle] += 1;
      modal.querySelector("#modal-views").innerText = `Views: ${viewsCount[postTitle]}`;

      // عرض الـ Modal
      bsModal.show();
    });
  });
});

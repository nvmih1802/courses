$(document).ready(function () {

  // Click close button pause video youtube
  jQuery("#exampleModal .close, #exampleModal .btn").on("click", function () {
    jQuery("#exampleModal iframe").attr("src", jQuery("#exampleModal iframe").attr("src"));
  });

  //call Api
  var jqxhr = $.ajax({
    method: "GET",
    url: "https://60d4611a61160900173cb070.mockapi.io/courses",
    contentType: "application/json"
  })
    .done(function (data) {
      renderData(data, renderSlickCourses);
    })
    .fail(function () {
      alert("error");
    })
  function renderData(data, renderSlickCourses) {
    let ourCourses = $('#ourCourses');
    ourCourses.html('');
    let html = '';
    data.map((item) => {
      const { name, duration, image, level, price, rate, rate_quantity, teacher, total_enrolled, categories } = item;
      const listStar = [1, 2, 3, 4, 5];
      html += `<div class="courses-item">
    <div class="card">
      <div class="card-img position-relative">
        <div class="d-flex justify-content-between w-100 p-3">
          <span>${level}</span>
          <a href="#"><i class="far fa-bookmark"></i></a>
        </div>
        <img class="card-img-top" src=${image} alt="Card image cap">
      </div>
      <div class="card-body p-5">
        <div class="evaluate">
          <div class="d-inline-block pr-2">
          ${listStar.map(it => {
            return ((it <= rate) ? "<i class='fas fa-star'></i>" : "<i class='far fa-star'></i>")
          }).join('')}
          </div>
          <span>${rate} (${rate_quantity})</span>
        </div>
        <div class="title">
          <h2>
            <a href="#">
              ${name}
            </a>
          </h2>
        </div>
        <div class="statistical d-flex">
          <div class="mr-3">
            <i class="far fa-user"></i>
            <span>${total_enrolled}</span>
          </div>
          <div>
            <i class="far fa-clock"></i>
            <span>${duration}</span>
          </div>
        </div>
        <div class="info d-flex flex-wrap">
          <div class="mr-3">
            <a href="#">
              <img src="../image/news_image_1.jpeg" alt="">
            </a>
          </div>
          <div class="mr-2">
            <span>by</span>
            <a href="#">${teacher}</a>
          </div>
          <div>
            <span>In</span>
            <a href="#">${categories}</a>
          </div>
        </div>
      </div>
      <div class="card-footer d-flex justify-content-between pl-5 pr-5 pt-3 pb-3">
        <span>${price != 0 ? price + '$' : 'Free'}</span>
        <div>
          <a href="#">
            <i class="fal fa-cart-plus"></i>
            <span>Get Enrolled</span>
          </a>
        </div>
      </div>
    </div>
  </div>`;
    });
    ourCourses.html(html);
    renderSlickCourses();
  }
  $('.slick-best-platform').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  function renderSlickCourses() {
    $('.slick-our-courses').slick({
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: '<button id="next" class="next-slide btn-slide"><i class="far fa-chevron-left"></i>',
      prevArrow: '<button id="previous" class="prev-slide btn-slide"><i class="far fa-chevron-right"></i>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }
  $('.slick-feedback').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: null,
    prevArrow: null,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $('.slick-edubin-icons').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 2,
    nextArrow: null,
    prevArrow: null,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });
});
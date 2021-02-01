import { Component, OnInit } from '@angular/core';
declare var $:any
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})



export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $("#sidebarToggle, #sidebarToggleTop").on("click", function (e) {
      $("body").toggleClass("sidebar-toggled"), $(".sidebar").toggleClass("toggled"), $(".sidebar").hasClass("toggled") && $(".sidebar .collapse").collapse("hide");
    }),
      $(window).resize(function () {
        $(window).width() < 768 && $(".sidebar .collapse").collapse("hide"),
          $(window).width() < 480 && !$(".sidebar").hasClass("toggled") && ($("body").addClas$("sidebar-toggled"), $(".sidebar").addClas$("toggled"), $(".sidebar .collapse").collapse("hide"));
      }),
      $("body.fixed-nav .sidebar").on("mousewheel DOMMouseScroll wheel", function (e) {
        if (768 < $(window).width()) {
          var o = e.originalEvent,
            l = o.wheelDelta || -o.detail;
          (this.scrollTop += 30 * (l < 0 ? 1 : -1)), e.preventDefault();
        }
      }),
      $(document).on("scroll", function () {
        100 < $(this).scrollTop() ? $(".scroll-to-top").fadeIn() : $(".scroll-to-top").fadeOut();
      }),
      $(document).on("click", "a.scroll-to-top", function (e) {
        var o = $(this);
        $("html, body")
          .stop()
          .animate({ scrollTop: $(o.attr("href")).offset().top }, 1e3, "easeInOutExpo"),
          e.preventDefault();
      });
    $("#sidebarToggleTop").click();
  }


}

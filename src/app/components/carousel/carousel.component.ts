import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  listBanner = [
    {
      title: 'Quân khu 7 <strong>Bệnh viện Quân Y 7A</strong>',
      content: 'Bệnh viện Quân Y 7A cam kết mang lại các dịch vụ y tế tốt nhất cho nhân dân và quân nhân cán chức.',
      background: '/assets/images/1.jpg'
    },
    {
      title: 'Số hóa <strong>Hệ thống Y Tế</strong>',
      content: 'Bệnh viện chính tức tái cơ cấu hệ thống khám chữa bệnh, đem lại sự dể dàng trong việc đăng ký khám chữa bệnh cho nhân dân.',
      background: '/assets/images/3.jpg'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

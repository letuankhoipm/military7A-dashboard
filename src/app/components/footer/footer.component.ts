import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  listLink = [
    {
      name: 'Liên kết Bệnh viện Đại học y Dược',
      link: 'http://www.bvdaihoc.com.vn/'
    },
    {
      name: 'Liên kết với Bệnh viện Chợ Rẫy',
      link: 'http://choray.vn/'
    },
    {
      name: 'Liên kết với Bệnh viện Hùng Vương',
      link: 'http://bvhungvuong.vn/'
    }
  ];

  linkUseful = [
    {
      name: '100 Câu hỏi - Đáp về dịch bệnh Covid - 19',
      link: 'https://drive.google.com/file/d/1w-duGWK9tTTA1LyFrIP07NyZUbn8oO4d/view'
    }
  ];

  linkContact = [
    {
      icon: '<i class="fab fa-facebook-square"></i>',
      link: 'https://www.facebook.com/phusanandong'
    },
    {
      icon: '<i class="fas fa-wifi"></i>',
      link: 'http://bvquany7a.vn/'
    },
    {
      icon: '<i class="fab fa-skype"></i>',
      link: ''
    },
    {
      icon: '<i class="fab fa-youtube"></i>',
      link: 'https://www.youtube.com/channel/UCfxHuGu1TbqMBDcMR3C31kQ'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

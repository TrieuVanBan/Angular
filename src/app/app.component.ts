import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_we16304 FPT Poly';

  // Phần logic, định nghĩa giá trị biến và sử dụng ở html
  name = 'tuannda3';
  class = 'WE16304';

  // kiểu dữ liệu mảng
  students = [
    {
      id: 'PH11111',
      name: 'tuannda1',
      status: 0,
    },
    {
      id: 'PH22222',
      name: 'tuannda2',
      status: 1
    },
    {
      id: 'PH33333',
      name: 'tuannda3',
      status: 1
    },
  ];

  teachers = [
    {
      id: 1,
      name: 'tuannda3',
      age: 31,
      gender: 1,
      avatar: 'https://jes.edu.vn/wp-content/uploads/2017/10/h%C3%ACnh-%E1%BA%A3nh.jpg',
      status: 1
    },
    {
      id: 2,
      name: 'tuannda3',
      age: 27,
      gender: 0,
      avatar: 'https://jes.edu.vn/wp-content/uploads/2017/10/h%C3%ACnh-%E1%BA%A3nh.jpg',
      status: 0
    },
  ];

  studentName = 'TUANNDA222';
  studentId = 'PH12345678';

  // Định nghĩa hàm khi click vào thẻ h1 ở file html
  schoolName = '';

  clickH1() {
    console.log('Da click vao H1');
    this.schoolName = 'Poly';
  }

  // Định nghĩa hàm khi click nút ẩn hiện bảng
  showStatus = true;
  changeTableStatus() {
    this.showStatus = !this.showStatus;
  }

  // Định nghĩa hàm khi thay đổi nội dung input
  inputValue = 'tuannda3';
  changeInput(e: any) {
    this.inputValue = e.target.value;
  }

  // Định nghĩa hàm nhận giá trị từ các input
  inputValues = {
    name: '', // đang có ở input
    age: '', // đang có ở input nhưng là chuỗi
    avatar: '',
    gender: '0'
  };
  // onInputName(event: any, info: string) {
  //   this.inputValues['name'] = event.target.value;
  // }

  // onInputAge(event: any, info: string) {
  //   this.inputValues.age = event.target.value;
  // }
  // key: 'name'|'age' -> key chỉ được là giá trị 'name' hoặc 'age'
  onInput(event: any, key: 'name'|'age'|'avatar'|'gender') {
    this.inputValues[key] = event.target.value;
  }
  // Sự kiện click vào nút Submit
  onSubmit() {
    // Thêm dữ liệu vừa thao tác ở form vào mảng teachers
    this.teachers.push({
      ...this.inputValues,
      age: +this.inputValues.age, //đưa age từ chuỗi input về số
      // bổ sung các thuộc tính còn đang thiếu
      gender: +this.inputValues.gender,
      status: 0,
      id: this.teachers.length + 1
    });
    // Cập nhật lại giá trị cho input ở form:
    // [value]="this.inputValues.name"
    this.inputValues = {
      name: '',
      age: '',
      avatar: '',
      gender: '0'
    };
  }
}

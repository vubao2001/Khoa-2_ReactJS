// import CourseItem from './components/Courses/CourseItem';
// import courses from './components/Courses/CourseItem';

import './App.css';

const courses = [
  {
      "id": 7,
      "title": "Kiến Thức Nhập Môn IT",            
      "description": "Để có cái nhìn tổng quan về ngành IT - Lập trình web các bạn nên xem các videos tại khóa này trước nhé.",
      "image": "courses/7.png",
      "icon": "courses/7/6200b81f52d83.png",
      "image_url": "https://files.fullstack.edu.vn/f8-prod/courses/7.png",
    },
    {
      "id": 21,
      "title": "Lập trình C++ cơ bản, nâng cao",            
      "description": "Khóa học lập trình C++ từ cơ bản tới nâng cao dành cho người mới bắt đầu. Mục tiêu của khóa học này nhằm giúp các bạn nắm được các khái niệm căn cơ của lập trình, giúp các bạn có nền tảng vững chắc để chinh phục con đường trở thành một lập trình viên.",
      "image": "courses/21/63e1bcbaed1dd.png",
      "icon": "courses/21/63e1bcbb2dec5.png",
      "image_url": "https://files.fullstack.edu.vn/f8-prod/courses/21/63e1bcbaed1dd.png",
    },
    {
      "id": 2,
      "title": "HTML CSS từ Zero đến Hero",            
      "description": "Trong khóa này chúng ta sẽ cùng nhau xây dựng giao diện 2 trang web là The Band & Shopee.",
      "image": "courses/2.png",
      "icon": "courses/2/6200aecea81de.png",
      "image_url": "https://files.fullstack.edu.vn/f8-prod/courses/2.png",
    },
    {
      "id": 3,
      "title": "Responsive Với Grid System",            
      "description": "Trong khóa này chúng ta sẽ học về cách xây dựng giao diện web responsive với Grid System, tương tự Bootstrap 4.",
      "image": "courses/3.png",
      "icon": "courses/3/6200afe1240bb.png",
      "image_url": "https://files.fullstack.edu.vn/f8-prod/courses/3.png",
    },
    {
      "id": 1,
      "title": "Lập Trình JavaScript Cơ Bản",            
      "description": "Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học.",
      "image": "courses/1.png",
      "icon": "courses/1/6200ad9d8a2d8.png",
      "image_url": "https://files.fullstack.edu.vn/f8-prod/courses/1.png",
    },
];

// Cách 1: trường hời có ít props
// function CourseItem (props) {
  
//   return (
//         <>
//           <div>
//             <h2>{props.title}</h2>
//             <img src={props.image_url} alt="..."/>
//             <p>{props.description}</p>
//           </div>
//         </>
//     )
// }


// Cách 2: trường hợp có nhiều props
function CourseItem ({course}) {
  const { title, description, image_url } = course || {};
  return (
        <>
          <div>
            <h2>{title}</h2>
            <img width="100%" src={image_url} alt="..."/>
            <p>{description}</p>
          </div>
        </>
    );
}

function App() {
  return (
    <>
      <div className="app">
        {
          courses.map((course) => (
            <CourseItem 
              key={course.id}

              // cách 1: trường hời có ít props
              // title={course.title}
              // image_url={course.image_url}
              // description={course.description}

              // cách 2: trường hợp có nhiều props
              course={course}
            />
          ))
        }
      </div>
    </>
  )
}

export default App;

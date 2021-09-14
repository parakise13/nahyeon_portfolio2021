# nahyeon_portfolio2021
저의 소개, 작업물을 담은 포트폴리오 입니다. 
Vanilla JS로 JavaScript를 이해할 수 있는 부분들은 최대한 활용하였고
jQuery 스크립트를 이용하여 포트폴리오를 동적으로 보일 수 있도록 하였습니다. 

## 반응형으로 제작하였습니다. 

### Header
- vanilla JS로 작성. pageYOffset으로 스크롤 다운, 업 이벤트 발생시 class 추가하여 css에서 transform으로 위치 이동.
- font-color의 경우 openMenu 켜졌을때 컬러 변경 
- Date / Time: vanilla JS로 작성. year, month, date, hours, minutes, seconds를 new Date로 받아와 string으로 변경하여 innerText로 html에 반영

### OpenManu 
- vanilla JS로 작성. toggle이용하여 클릭할때마다 active클래스를 add, remove 반복하도록 작성
- menuOpen시 스크롤이 생기지 않도록 다른 요소들은 active클래스 추가됐을 경우 display:none으로 설정 

### mainVisual 
- vanilla JS로 작성. visual의 img는 hover시 이미지가 바뀌도록 배열에 img를 추가하여 img가 0번째 index부터 배열의 길이 만큼 차례로 바뀔 수 있도록 하였고 
만들어진 배열이 setInterval로 0.2초마다 바뀌도록 설정 후 mouse가 img를 벗어 날때 멈추도록 clearInterval을 사용. 
- logIn input: vanilla JS로 작성. preventDefault로 submit할 때 page가 다시 로드되는 것을 막고 사용자가 이름 입력시 form을 hidden으로 숨기는 클래스 추가. 
그리고 username 을 받아와서 paintGreeting함수에서 Hello, username을 text로 넣고 localstorage에 username 저장 

### button 
- more button: svg를 이용하여 hover시 360도 회전하도록 css 작성 
- goTop button: 클릭시 1초동안 html, body를 top으로 이동하도록 jQuery 작성 

### mouse
- vanilla JS로 작성. mousemove 이벤트 추가하여 마우스가 움직일때마다 style로 마우스의 좌표 변경 

### about page 
- 제 소개, 사용가능 툴, 학원에서 수료한 NCS과정 
### gallery page 
- 학원에서 진행했던 작업, 제가 따로 진행 했던 작업들을 확인 가능하며 view more 버튼 클릭시 상세 페이지로 이동합니다. 

### work detail page  
- vanilla JS로 작성. pageYOffset으로 화면이 일정 700이상 넘어가는 경우 배경색을 변경하도록 이벤트를 추가하여 화면의 가독성을 높임 
- 진행한 작업들 설명 및 view web site 버튼 클릭시 해당 페이지로 이동할 수 있도록 하였고 gif로 애니메이션 확인 및 전체 페이지 캡처본을 삽입하여 
전반적인 작업물을 확인 할 수 있도록 하였습니다. 


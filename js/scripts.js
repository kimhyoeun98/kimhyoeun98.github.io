const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector("#navigation");

menuButton?.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.textContent = isOpen ? "닫기" : "메뉴";
});

navigation?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
    if (menuButton) menuButton.textContent = "메뉴";
  });
});

const projects = {
  scrap: {
    type: "GAME DEVELOPMENT · QA / UNITY / MULTIPLAYER",
    title: "ScrapAndSprout",
    summary: "쓰레기를 수거하고 자원을 거래해 공간을 회복시키는 2D 협동 멀티플레이 게임입니다.",
    purpose: "로그인부터 로비, 대기실, 수집, 거래, 꾸미기로 이어지는 하나의 플레이 사이클을 직접 기획하고 구현했습니다.",
    features: ["협동 멀티플레이와 로비", "아이템 수집·인벤토리·거래", "PCG 기반 맵과 공간 꾸미기"],
    focusTitle: "담당 · QA 관점",
    focus: "Unity 클라이언트 개발과 주요 기능 테스트를 맡았습니다. 멀티플레이 동기화, 인벤토리 반영, 로비 전환과 맵 생성 과정의 오류를 재현하고 수정 후 다시 검증했습니다.",
    tags: ["Unity", "C#", "Photon Fusion", "REST API", "MySQL"],
    link: "https://github.com/kimhyoeun98/ScrapAndSprout"
  },
  gameflow: {
    type: "QA WORKFLOW PLATFORM · PLANNING / DOCUMENTATION",
    title: "GameFlow",
    summary: "게임 테스트와 버그, 수정 빌드와 재테스트 이력을 한 흐름으로 연결하는 QA 협업 플랫폼입니다.",
    purpose: "QA가 어떤 빌드에서 무엇을 확인했는지 놓치지 않도록 테스트 결과와 수정 이력을 연결하는 구조를 설계했습니다.",
    features: ["테스트 케이스·테스트 런 관리", "버그 리포트와 심각도·우선순위", "수정 빌드 연결과 재테스트 상태 추적"],
    focusTitle: "QA 설계 관점",
    focus: "Test Case → Bug → Feedback → Fixed Build → Retest → Resolved의 상태 흐름을 정의했습니다. 재현 절차, 환경, 기대 결과, 실제 결과와 증거 자료를 일관된 필드로 남기도록 구성했습니다.",
    tags: ["Test Case", "Bug Tracking", "Retest", "QA Documentation"],
    link: "https://github.com/kimhyoeun98/GameFlow"
  },
  underwatch: {
    type: "WEB SERVICE · FULL STACK / GAME COMMUNITY",
    title: "UnderWatch",
    summary: "오버워치 게임 정보와 커뮤니티 기능을 제공하는 Spring 기반 웹 서비스입니다.",
    purpose: "게임 이용자가 정보 탐색과 커뮤니티 활동을 한곳에서 할 수 있도록 인증, 게시판, 알림과 관리자 기능을 구현했습니다.",
    features: ["일반·OAuth2·얼굴 인식 로그인", "게시글·댓글·신고와 쪽지", "실시간 알림·관리자 처리"],
    focusTitle: "QA 관점",
    focus: "로그인 방식에 따른 분기, 회원·비회원 권한, 외부 API 연동, 탈퇴 유예와 신고 처리처럼 상태와 권한이 복잡한 흐름을 중심으로 검증했습니다.",
    tags: ["Java", "Spring MVC", "Spring Security", "MyBatis", "Oracle"],
    link: "https://github.com/kimhyoeun98/UnderWatch"
  },
  jikfarm: {
    type: "개인 개발 · JAVA CONSOLE COMMERCE",
    title: "직팜 (JIKFARM)",
    summary: "생산자와 소비자를 직접 연결하는 농수산물 직거래 콘솔 쇼핑몰입니다.",
    purpose: "생산자가 상품과 재고를 관리하고, 소비자가 장바구니·주문·후기를 이용하며, 관리자가 전체 흐름을 확인하는 역할 기반 서비스를 구현했습니다.",
    features: ["생산자·소비자·관리자별 메뉴", "상품·재고·주문·배송 상태 관리", "후기와 관리자 활동 로그"],
    focusTitle: "개발 · 검증 관점",
    focus: "Java 콘솔 환경에서 역할별 접근 권한, 잘못된 입력과 빈 값, 주문 상태 변화, 종료 후 파일 데이터 유지 여부를 확인했습니다. 요구사항 명세서의 기능별 구현 상태도 함께 점검했습니다.",
    tags: ["Java", "OOP", "File I/O", "Console UI"],
    gallery: [
      ["assets/projects/jikfarm-overview.jpg", "프로젝트 개요와 역할 구성"],
      ["assets/projects/jikfarm-features.jpg", "생산자·소비자·관리자별 주요 기능"],
      ["assets/projects/jikfarm-console.jpg", "로그인과 회원가입 콘솔 실행 화면"]
    ]
  },
  dormitory: {
    type: "팀 기획 · SMART DORMITORY SERVICE",
    title: "기숙사In",
    summary: "모바일 인증과 출입 데이터를 활용해 대면 점호의 불편을 줄이는 입·퇴실 모니터링 시스템입니다.",
    purpose: "학생은 모바일로 입실과 외출 상태를 전달하고, 관리자는 대시보드에서 점호 현황과 미입실 학생을 빠르게 확인하도록 기획했습니다.",
    features: ["Bluetooth·Wi-Fi 기반 모바일 인증", "자동 점호와 외출 신고", "미입실 알림과 관리자 대시보드"],
    focusTitle: "서비스 검증 관점",
    focus: "인증 성공·실패, 시간대별 기록, 외출 상태 변경, 데이터 누락과 관리자 조회 결과처럼 실제 운영 중 발생할 수 있는 예외 상황을 중심으로 확인 항목을 정리했습니다.",
    tags: ["Mobile Web", "BLE / Wi-Fi", "Database", "Dashboard"],
    gallery: [
      ["assets/projects/dormitory-overview.jpg", "프로젝트 개요와 예상 사용자 흐름", "portrait"],
      ["assets/projects/dormitory-tech.jpg", "핵심 기술과 활용 방안", "portrait"]
    ]
  },
  pyeon: {
    type: "서비스 기획 · SMART RETAIL",
    title: "편하점",
    summary: "학생 참여 데이터를 활용해 교내 편의점의 상품 구성과 재고 운영을 개선하는 스마트 리테일 서비스입니다.",
    purpose: "학생의 선호와 구매 흐름을 데이터로 연결해 품절과 재고 낭비를 줄이고, 원하는 상품을 더 편리하게 이용하도록 제안한 서비스 기획입니다.",
    features: ["인기 메뉴 투표와 수요 확인", "실시간 재고·사전 예약·결제", "재입고 알림과 개인화 추천"],
    focusTitle: "서비스 설계 관점",
    focus: "조회 → 선택 → 예약 → 수령으로 이어지는 흐름과 품절·알림 상태를 설계했습니다. 반복 이용 데이터가 상품 구성과 재고 예측에 반영되는 구조를 정리했습니다.",
    tags: ["Service Planning", "Smart Retail", "UX Flow", "Prototype"],
    gallery: [
      ["assets/projects/pyeon-problem.jpg", "교내 편의점의 이용자·판매자 문제 정의"],
      ["assets/projects/pyeon-model.jpg", "학생 참여 데이터를 활용한 서비스 모델"],
      ["assets/projects/pyeon-flow.jpg", "구매자와 판매자를 연결하는 편하점 흐름"]
    ]
  },
  saesun: {
    type: "연구 제안 · AR SCIENCE EDUCATION",
    title: "새순 (SAESUN)",
    summary: "AR 환경에서 가상 식물을 재배하며 초등 과학의 식물 성장 원리를 탐구하는 교육 시스템 제안입니다.",
    purpose: "교실에서도 식물의 성장 과정을 반복 관찰하고 내부 변화를 시각적으로 이해할 수 있도록 AR 기반 학습 경험을 제안했습니다.",
    features: ["식물 성장 타임랩스와 AR 관찰", "X-Ray 방식의 과학적 시각화", "관찰 일지·성장 그래프·도감과 배지"],
    focusTitle: "현재 단계 · 설계 관점",
    focus: "교육 효과와 기술 구성을 정의한 기획·연구 제안 단계입니다. 학습 흐름, 기록 기능, 게임화 요소와 Unity·ARCore/ARKit 기반 시스템 구성을 설계했습니다.",
    tags: ["Unity", "ARCore / ARKit", "Gamification", "EdTech"],
    gallery: [
      ["assets/projects/saesun-overview.jpg", "AR 식물 재배 시스템의 학습 흐름"],
      ["assets/projects/saesun-features-1.jpg", "타임랩스·과학 시각화·자동화된 관찰 일지"],
      ["assets/projects/saesun-features-2.jpg", "데이터 분석·게임화·개인화 학습 기능"]
    ]
  }
};

const dialog = document.querySelector("#project-dialog");
const closeButton = dialog?.querySelector(".dialog-close");
let lastFocusedElement;

function fillList(element, values) {
  element.replaceChildren(...values.map((value) => {
    const item = document.createElement("li");
    item.textContent = value;
    return item;
  }));
}

function openProject(projectKey) {
  const project = projects[projectKey];
  if (!project || !dialog) return;
  lastFocusedElement = document.activeElement;

  dialog.querySelector("#dialog-type").textContent = project.type;
  dialog.querySelector("#dialog-title").textContent = project.title;
  dialog.querySelector("#dialog-summary").textContent = project.summary;
  dialog.querySelector("#dialog-purpose").textContent = project.purpose;
  dialog.querySelector("#dialog-focus-title").textContent = project.focusTitle;
  dialog.querySelector("#dialog-focus").textContent = project.focus;
  fillList(dialog.querySelector("#dialog-features"), project.features);

  const tags = dialog.querySelector("#dialog-tags");
  tags.replaceChildren(...project.tags.map((value) => {
    const tag = document.createElement("span");
    tag.textContent = value;
    return tag;
  }));

  const gallerySection = dialog.querySelector("#dialog-gallery-section");
  const gallery = dialog.querySelector("#dialog-gallery");
  const images = project.gallery || [];
  gallerySection.hidden = images.length === 0;
  gallery.replaceChildren(...images.map(([src, caption, className]) => {
    const figure = document.createElement("figure");
    if (className) figure.className = className;
    const link = document.createElement("a");
    link.href = src;
    link.target = "_blank";
    link.rel = "noreferrer";
    const image = document.createElement("img");
    image.src = src;
    image.alt = caption;
    image.loading = "lazy";
    const figcaption = document.createElement("figcaption");
    figcaption.textContent = caption;
    link.append(image);
    figure.append(link, figcaption);
    return figure;
  }));

  const repositoryLink = dialog.querySelector("#dialog-link");
  repositoryLink.hidden = !project.link;
  if (project.link) repositoryLink.href = project.link;

  dialog.showModal();
  document.body.classList.add("dialog-open");
  closeButton?.focus();
}

document.querySelectorAll("[data-project]").forEach((button) => {
  button.addEventListener("click", () => openProject(button.dataset.project));
});

function closeProject() {
  dialog?.close();
}

closeButton?.addEventListener("click", closeProject);
dialog?.addEventListener("click", (event) => {
  const bounds = dialog.getBoundingClientRect();
  const inside = event.clientX >= bounds.left && event.clientX <= bounds.right &&
    event.clientY >= bounds.top && event.clientY <= bounds.bottom;
  if (!inside) closeProject();
});
dialog?.addEventListener("close", () => {
  document.body.classList.remove("dialog-open");
  lastFocusedElement?.focus();
});


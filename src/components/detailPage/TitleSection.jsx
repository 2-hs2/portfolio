import { useCallback, useEffect, useState } from "react";

const TitleSection = ({ index }) => {
  // endpoint에 따른 상세 페이지 제목 state
  const [titles, setTitles] = useState([
    "Labrador Labs Intern",
    "App Project",
    "Ajou Paran Project",
    "Mini Project",
    "ETC : Design",
  ]);

  const [roles, setRoles] = useState([
    ["FRONTEND", "UI DESIGN"],
    ["FRONTEND", "DESIGN"],
    ["DESIGN", "WEB  PUBLISHING"],
    ["DEVELOPMENT", "DESIGN"],
    ["ONE", "TWO"],
  ]);

  const [tasks, setTasks] = useState([
    [
      [
        "래브라도 분석요약 페이지 개발",
        "래브라도 분석비교 페이지 개발",
        "래브라도 UI / 컴포넌트 수정",
      ],
      [
        "래브라도 분석요약 페이지 UI 디자인",
        "래브라도 분석비교 페이지 UI 디자인",
        "래브라도 UI / 컴포넌트 정리",
        "삼성화재 IVAS UI 디자인 수정",
      ],
    ],
    [
      [
        "회원가입 페이지 구현",
        "명함 컴포넌트 구현",
        "내 명함 페이지 구현",
        "명함 수정 페이지 구현",
        "일반게시판 페이지 구현",
        "전공게시판 페이지 구현",
        "게시글 작성 페이지 구현",
      ],
      [
        "로고 및 색상 디자인",
        "명함 디자인",
        "하단 탭 아이콘 디자인",
        "UI 디자인 피드백",
      ],
    ],
    [["UI 디자인", "로고 및 색상 디자인", "캐릭터 디자인"], ["메인 페이지"]],
    [
      ["FRONTEND", "BACKEND"],
      ["UI 디자인", "이모티콘 디자인"],
    ],
    [["인포그래픽스"], ["ETC."]],
  ]);

  return (
    <>
      <div className="title-wrap">
        <div className="title">{titles[index - 1]}</div>
      </div>
      <div className="role-modal-wrap">
        <div className="role-modal">
          <div className="title">[ ROLE ]</div>
          {roles[index - 1].map((role, idx) => {
            return (
              <div key={role} className="sub-title-wrap">
                <div className="sub-title">{role}</div>
                <div className="content-wrap">
                  {tasks[index - 1][idx].map((task) => {
                    return (
                      <div key={task} className="content">
                        {task}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      ㄴ
    </>
  );
};

export default TitleSection;

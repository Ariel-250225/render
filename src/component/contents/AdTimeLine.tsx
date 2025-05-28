import { timeLineContentsType, TimeLineProcessY } from "../Scroll/TimeLineY";

import iCoinLogo from "../assets/image/iCoinVertical.png";
import eSports from "../assets/image/game/e-sports_gaming.jpg";
import betTable from "../assets/image/game/betTable.jpg";
import sportsList from "../assets/image/sport/sportsList.jpg";
import napoliPlayer from "../assets/image/sport/napoli_player.jpg";

const AD_LIST: timeLineContentsType[] = [
  {
    image: napoliPlayer,
    date: "2025. 04",
    title: "SSC NAPOLI Offical partner",
    description:
      `OKGO는 SSC 나폴리 축구 클럽의\n 메인 파트너입니다.\n\n` +
      "SSC 나폴리 축구 클럽은 역대 세리에 A 4회 우승에 빛나는 프로 축구 구단이며,\n\n" +
      "이 파트너십을 통해, \n저희 OKGO는 국대 최대 자본임을 알리며\n 세계로 도약하는 회사로 첫걸음을 내딛게 되었습니다.",
  },
  {
    image: iCoinLogo,
    date: "2025. 05",
    title: "가상화폐 입금, 아이코인 도입",
    description:
      "OKGO는 가상화폐, 은행 송금 등 여러 결제 방법을 지원하며 사용자들에게 최고의 서비스를 제공합니다.\n\n" +
      "거래 중 일어나는 사기 행위 등을 방지하기 위해 중간에 신뢰할 수 있는 안전거래 아이 코인이 개입하여 대금을 \n중계하는 거래 방식을 운영 중에 있습니다.\n\n" +
      "가상화폐 거래 시 모든 거래는 비실명으로 운영되며,\n 안전한 암호화 기술을 통해 빠르고\n 안전한 입출금을 보장합니다.",
  },
  {
    image: betTable,
    date: "2024 ~ ",
    title: "LIVE CASINO",
    description:
      "에볼루션 카지노, 마이크로 게이밍, 아시아 게이밍,\n 프로그마틱, 드림 게이밍, 호텔 카지노 등 \n다양한 카지노 서비스를 제공합니다.\n\n" +
      "직접 카지노에 방문하지 않고 온라인을 통해 \n현장에서 즐기는 듯한 \n짜릿한 즐거움을 그대로 느낄 수 있으며, \n\n" +
      "해외 현지 카지노에서만 경험할 수 있는 사실감을 보다 \n극대화하여 현장 그대로의 \n사실감 있는 게임을 즐길 수 있습니다.",
  },
  {
    image: sportsList,
    date: "2024 ~ ",
    title: "LIVE SPORTS",
    description:
      "이전에 사용하셨던 앤티크 한 감성 클래식\n 스포츠 최신 스포츠 배팅 페이지가 불편하시다면 \n클래식 스포츠에서 즐기세요. \n\n" +
      "회원님들을 위해 단순하고 간편하게 구축시켜 놨습니다. \n\n" +
      "풍부한 경험과 노력을 바탕으로 유저를 만족시키는 \n완성도 높은 시스템 구현과 \n혁신적인 업계 최고의 베팅 서비스 제공합니다.",
  },
  {
    image: eSports,
    date: "2024 ~ ",
    title: "LIVE E SPORTS",
    description:
      "LCK, LPL, 스타크래프트, 등 다양한 \nE SPORTS 서비스를 제공하며,\n\n" +
      "BJ 롤, 스타크래프트 BJ 멸망전 등 스트리머의 화면을 \n직접 보고 베팅을 즐길 수 있습니다.\n\n" +
      "다른 곳에서 발매되지 않는 게임을 오직 OKGO에서 \n더 높은 배당으로 최고의 베팅 서비스를 제공합니다.",
  },
];

export function AdTimeLine() {
  return (
    <>
      <TimeLineProcessY timeLineContents={AD_LIST}></TimeLineProcessY>
    </>
  );
}

import { ReactNode, useRef } from "react";
import html2canvas from "html2canvas";

export function ExportImage(props: { component: ReactNode }) {
  const { component } = props;
  const ref = useRef<HTMLDivElement>(null);

  const handleExport = async () => {
    if (!ref.current) return;
    const canvas = await html2canvas(ref.current, {
      scale: 20,
      backgroundColor: null,
      useCORS: true,
      allowTaint: false,
      logging: true,
      removeContainer: true,
    });

    const dataUrl = canvas.toDataURL("image/png");

    // 🔽 JS만으로 이미지 다운로드 처리
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = "highres.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div ref={ref}>{component}</div>
      <button onClick={handleExport}>download</button>
    </>
  );
}
